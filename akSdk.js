/**
 * Created by chenchangyi on 2017/10/31.
 * version 2.0.0
 */
window.AKSDK = (function (w, d, p) {
    var PARTNER_SDK;
    var ua = navigator.userAgent;
    if (/akocweb/i.test(ua)) { //绌哄３寰
        PARTNER_SDK = h5Sdk();
    } else if (self == top || window.akopenapi || /akocsdk/i.test(ua) || /akopenapi/i.test(ua)) { //SDK寰
        PARTNER_SDK = nativeSdk();
    } else { //H5
        PARTNER_SDK = h5Sdk();
    }

    function insertHtml(html) {
        var body = d.getElementsByTagName('body')[0];
        var div = d.createElement('div');
        div.innerHTML = html;
        if (div.childNodes) {
            var len = div.childNodes.length;
            for (var i = 0; i < len; i++) {
                body.appendChild(div.childNodes[i]);
            }
        }
    }

    function GetParameter(name, url) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r, search, referrer;
        //鎸囧畾鍦╱rl閲岄潰鎻愬彇
        if (url) {
            url = url.split('?');
            if (url.length == 2) {
                r = url[1].match(reg);
            } else {
                r = '';
            }

        } else {
            //灏濊瘯鍚勭鏂规硶鑾峰彇
            //step1 鍏堝湪URL閲岄潰鎻愬彇
            search = window.location.search;
            var len = search ? search.length : 0;
            r = len > 1 ? search.substr(1).match(reg) : '';
            if (r) {
                r = decodeURIComponent(r[2]);
                window.localStorage && localStorage.setItem('_DKM_' + name, r);
            }
            //step2 鍦ㄦ潵婧愰〉涓彁鍙�
            if (!r) {
                referrer = document.referrer;
                search = referrer.split('?');
                r = search.length > 1 ? search[1].match(reg) : '';
                if (r) {
                    r = decodeURIComponent(r[2]);
                    window.localStorage && localStorage.setItem('_DKM_' + name, r);
                }
            }
            //step3 鍦╨ocalStorage閲岄潰鍙�
            if (!r && window.localStorage) {
                r = localStorage.getItem('_DKM_' + name);
            }
        }

        return r;
    }

    window.GetParameter = GetParameter;
    window.DKM_LOADING_SCRIPT = {};
    window.DKM_SCRIPT_LOAD_CALLBACKS = {};

    function LoadJS(js, callback) {
        //宸茬粡鍔犺浇杩囦簡锛岀洿鎺ュ洖璋�
        if (window.DKM_LOADING_SCRIPT[js] == 2) {
            callback && callback();
            return;
        } else if (window.DKM_LOADING_SCRIPT[js] == 1) { //姝ｅ湪鍔犺浇锛屽厛灏哻allback瀛樿捣鏉�
            if (!window.DKM_SCRIPT_LOAD_CALLBACKS[js]) {
                window.DKM_SCRIPT_LOAD_CALLBACKS[js] = [];
            }
            window.DKM_SCRIPT_LOAD_CALLBACKS[js].push(callback);
            return;
        }
        var f = document.getElementsByTagName('script')[0];
        var j = document.createElement('script');
        j.onload = function () {
            window.DKM_LOADING_SCRIPT[js] = 2;
            callback && callback();
            if (window.DKM_SCRIPT_LOAD_CALLBACKS[js] && w.DKM_SCRIPT_LOAD_CALLBACKS[js].length) {
                for (var i in window.DKM_SCRIPT_LOAD_CALLBACKS[js]) {
                    window.DKM_SCRIPT_LOAD_CALLBACKS[js][i]();
                }
            }
            window.DKM_SCRIPT_LOAD_CALLBACKS[js] = [];
        };
        j.async = true;
        j.src = js;
        f.parentNode.insertBefore(j, f);
    }


    function log(msg) {
        (new Image).src = "http://h5.9187.cn/?msg=" + msg;
    }


    function run(method, data, callback) {
        (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
    }

    //鎬曞奖鍝嶉偅浜涚墰b娓告垙锛屾墍浠ヨ繕鏄户缁斁鍦ㄨ繖閲�
    function nativeSdk() {
        var CODE_INIT_SUCCESS = 1;
        var CODE_INIT_FAILURE = 2;
        var CODE_LOGIN_SUCCESS = 3;
        var CODE_LOGIN_FAILURE = 4;
        var CODE_SWITCH_ACCOUNT_SUCCESS = 5;
        var CODE_SWITCH_ACCOUNT_FAILURE = 6;
        var CODE_LOGOUT_SUCCESS = 7;
        var CODE_LOGOUT_FAILURE = 8;
        var CODE_PAY_SUCCESS = 9;
        var CODE_PAY_WAIT = 10;
        var CODE_PAY_FAILURE = 11;
        var CODE_PAY_CANCEL = 13;
        var EXITGAME = 12;

        var callbacks = {};


        //閽堝iOS
        if (!window.akopenapi) {
            function loadURL(url) {
                location.href = url;
            }

            function getUrlFromJson(json) {
                var url = '';
                for (var i in json) {
                    if (i == 'price') {
                        json[i] = parseFloat(json[i]);
                    } else {
                        json[i] = String(json[i]);
                    }
                    url += i + "=" + json[i] + '&';
                }
                return url.substring(0, url.length - 1);
            }
            window.akLoginResult = function (account, userid, uid, token) {
                if (document.getElementById('DKM-retry_btn')) {
                    document.getElementById('DKM-retry_btn').style.display = 'none';
                }
                if (typeof callbacks['login'] == 'function') {
                    if (token == 'fix_logout') {
                        loadURL("akocopenapi://logout");
                        return;
                    }

                    window.localStorage && localStorage.setItem('_DKM_dkm_uid', userid);

                    callbacks['login'](0, {
                        uid: uid,
                        userid: userid,
                        account: account,
                        token: token
                    });
                }
            };

            window.aklogoutResult = function (code) {
                if (typeof callbacks['logout'] == 'function') {
                    callbacks['logout'](0, '');
                }
                if (typeof callbacks['on_logout'] == 'function') {
                    callbacks['on_logout'](0, '');
                }
            };

            //鍒囨崲甯愬彿鎴愬姛鍥炶皟
            window.akswitchLoginResult = function akswitchLoginResult(code) {
                if (typeof callbacks['on_logout'] == 'function') {
                    var dkm_ssby_logout_fix = GetParameter('dkm_ssby_logout_fix');
                    if (dkm_ssby_logout_fix != 1) {
                        dkm_ssby_logout_fix = GetParameter('dkm_ssby_logout_fix', document.referrer);
                    }
                    if (dkm_ssby_logout_fix == 1) { //鍥炲埌ssby.html
                        var pf = GetParameter('cppf');
                        if (!pf) {
                            pf = GetParameter('cppf', document.referrer);
                        }
                        var openapp = GetParameter('openapp');
                        if (!openapp) {
                            openapp = GetParameter('openapp', document.referrer);
                        }
                        location.href = 'https://sdk.52wan.dkmol.net/www/ssby.html?t=' + (new Date().getTime()) +
                            '&pf=' + pf + '&openapp=' + openapp;
                    } else {
                        callbacks['on_logout'](0, '');
                    }
                }
            };

            window.akpayResult = function (code) {
                if (typeof callbacks['pay'] == 'function') {
                    //data = {uid:'', account: '', cpOrderNo: '', orderNo: '', amount: '', extension: ''}
                    callbacks['pay'](0, data);
                }
            };

            window.akopenapi = {
                lgoin: function () {
                    //鏄剧ず閲嶈瘯鎸夐挳
                    var self = this;
                    if (!document.getElementById('DKM-retry_btn')) {
                        var n = parseInt(9 * Math.random()) + 1;
                        insertHtml(
                            '<a id="DKM-retry_btn" href="javascript:;" style="width:180px; height: 44px; background: url(https://pic.9187.cn/gamesite/pt/img/pay/retry0' +
                            n +
                            '.png) no-repeat;background-size:100%; display:block; position:fixed; top: 50%;left:50%;margin:-22px 0 0 -90px; z-index: 9999; text-indent:-999em; text-decoration: none">鐐瑰嚮閲嶈瘯</a>'
                        );
                        document.getElementById('DKM-retry_btn').onclick = function () {
                            loadURL("akocopenapi://login");
                        };
                    } else {
                        document.getElementById('DKM-retry_btn').style.display = 'block';
                    }

                    loadURL("akocopenapi://login");
                },
                logout: function () {
                    loadURL("akocopenapi://logout");
                },
                pay: function (data) {
                    data = JSON.parse(data);
                    if (!data['ApplePrdId'] || typeof data['ApplePrdId'] == 'undefined') {
                        data['ApplePrdId'] = data['productid'];
                    }

                    loadURL("akocopenapi://pay?" + getUrlFromJson(data));
                },

                createrole: function (data) {
                    data = JSON.parse(data);
                    loadURL("akocopenapi://createrole?" + getUrlFromJson(data));
                },

                entergame: function (data) {
                    data = JSON.parse(data);
                    loadURL("akocopenapi://entergame?" + getUrlFromJson(data));
                },

                roleuplevel: function (data) {
                    data = JSON.parse(data);
                    loadURL("akocopenapi://roleuplevel?" + getUrlFromJson(data));
                }

            }
        }


        //瀹夊崜鐨勫洖璋�
        window.akresultcallback = function (code, data) {
            switch (code) {

                //鐧诲綍鎴愬姛
                case CODE_LOGIN_SUCCESS:
                    //data = {uid: '', account: '', token: ''}
                    if (data.token == 'fix_logout') { //閫氱煡璋冪敤閫€鍑烘帴鍙�
                        akopenapi.logout();
                        return;
                    }
                    if (typeof callbacks['login'] == 'function') {
                        callbacks['login'](0, data);
                    }
                    break;

                    //鐧诲綍澶辫触
                case CODE_LOGIN_FAILURE:

                    akSdk.login(callbacks['login'] == 'function' ? callbacks['login'] : null);
                    if (typeof callbacks['login'] == 'function') {
                        callbacks['login'](1, '');
                    }
                    break;

                    //娉ㄩ攢鎴愬姛,娓告垙澶勭悊
                case CODE_LOGOUT_SUCCESS:
                    var dkm_ssby_logout_fix = GetParameter('dkm_ssby_logout_fix');
                    if (dkm_ssby_logout_fix != 1) {
                        dkm_ssby_logout_fix = GetParameter('dkm_ssby_logout_fix', document.referrer);
                    }


                    if (dkm_ssby_logout_fix == 1) { //鍥炲埌ssby.html
                        var pf = GetParameter('cppf');
                        if (!pf) {
                            pf = GetParameter('cppf', document.referrer);
                        }
                        var openapp = GetParameter('openapp');
                        if (!openapp) {
                            openapp = GetParameter('openapp', document.referrer);
                        }
                        location.href = 'https://sdk.52wan.dkmol.net/www/ssby.html?t=' + (new Date().getTime()) +
                            '&pf=' + pf + '&openapp=' + openapp;
                    } else {
                        if (typeof callbacks['logout'] == 'function') {
                            callbacks['logout'](0, '');
                        }

                        if (typeof callbacks['on_logout'] == 'function') {
                            callbacks['on_logout'](0, '');
                        }
                    }

                    break;

                case CODE_LOGOUT_FAILURE: //娉ㄩ攢澶辫触
                    if (typeof callbacks['logout'] == 'function') {
                        callbacks['logout'](1, '');
                    }
                    if (typeof callbacks['on_logout'] == 'function') {
                        callbacks['on_logout'](1, '');
                    }
                    break;

                    //鏀粯鎴愬姛
                case CODE_PAY_SUCCESS:
                    if (typeof callbacks['pay'] == 'function') {
                        //data = {uid:'', account: '', cpOrderNo: '', orderNo: '', amount: '', extension: ''}
                        callbacks['pay'](0, data);
                    }
                    break;

                    //鏀粯澶辫触
                case CODE_PAY_FAILURE:
                    if (typeof callbacks['pay'] == 'function') {
                        callbacks['pay'](1, '');
                    }
                    break;

                    //鏀粯鍙栨秷
                case CODE_PAY_CANCEL:
                    if (typeof callbacks['pay'] == 'function') {
                        callbacks['pay'](2, '');
                    }
                    break;
            }
        };

        return {
            //璋冪敤鐧诲綍锛忔敞鍐岀晫闈�
            login: function (data, callback) {
                alert("调用了登录")
                var dkm_userid = GetParameter('dkm_userid');
                var dkm_account = GetParameter('dkm_account');
                var dkm_token = GetParameter('dkm_token');
                if (dkm_userid && dkm_account && dkm_token) { //SDK鍏堢櫥褰�
                    callback(0, {
                        userid: dkm_userid,
                        account: dkm_account,
                        token: dkm_token
                    });
                } else {
                    callbacks['login'] = typeof callback == 'function' ? callback : null;
                    akopenapi.lgoin();
                }

            },

            //鐢ㄦ埛鐧诲嚭
            logout: function (data, callback) {
                callbacks['logout'] = typeof callback == 'function' ? callback : null;
                akopenapi.logout();
            },

            //鏀粯
            pay: function (data, callback) {
                callbacks['pay'] = typeof callback == 'function' ? callback : null;
                akopenapi.pay(JSON.stringify(data));
            },


            //瑙掕壊鍒涘缓LOG
            logCreateRole: function (data) {
                akopenapi.createrole(JSON.stringify(data));
            },

            //杩涘叆娓告垙LOG
            logEnterGame: function (data) {
                akopenapi.entergame(JSON.stringify(data));
            },

            //杩涘叆娓告垙LOG
            logRoleUpLevel: function (data) {
                akopenapi.roleuplevel(JSON.stringify(data));
            },

            //澶勭悊閫€鍑轰簨浠�
            onLogout: function (data, callback) {
                callbacks['on_logout'] = typeof callback == 'function' ? callback : null;
            },

            getSdkPartnerId: function () {
                return GetParameter('dkm_partner_id') || GetParameter('pf');
            }

        };
    }

    //瀹樻柟鐨凥5
    function h5Sdk() {
        var callbacks = {};
        window.addEventListener("message", function (event) {
            console.log('鏀跺埌鏁版嵁锛�');
            console.log(event);

            //alert('鏀跺埌鏁版嵁锛�' + JSON.stringify(event));
            var action = event && event.data && event.data.action ? event.data.action : false;
            var result = event && event.data && event.data.data ? event.data.data : {};

            if (!action) {
                return false;
            }
            switch (action) {
                case 'login':
                    if (result.state) {
                        callbacks['login'] && callbacks['login'](0, result.data);
                    } else {
                        callbacks['login'] && callbacks['login'](1);
                    }
                    break;
                case 'logout':
                    if (result.state) {
                        callbacks['logout'] && callbacks['logout'](0);
                    } else {
                        callbacks['logout'] && callbacks['logout'](1);
                    }
                    break;
                case 'pay':
                    if (result.state) {
                        callbacks['pay'] && callbacks['pay'](0, result.data);
                    } else {
                        callbacks['pay'] && callbacks['pay'](1);
                    }
                    break;
                case 'partnerShare':
                    if (result.state) {
                        callbacks['partnerShare'] && callbacks['partnerShare'](0);
                    } else {
                        callbacks['partnerShare'] && callbacks['partnerShare'](1);
                    }
                    break;
                case 'on_logout':
                    callbacks['on_logout'] && callbacks['on_logout']();
                    break;
            }
        }, false);
        return {
            //璋冪敤鐧诲綍锛忔敞鍐岀晫闈�
            login: function (data, callback) {
                callbacks['login'] = typeof callback == 'function' ? callback : null;
                this.postTopMessage('login');

            },

            //鐢ㄦ埛鐧诲嚭
            logout: function (data, callback) {
                callbacks['logout'] = typeof callback == 'function' ? callback : null;
                this.postTopMessage('logout');
            },

            //鏀粯
            pay: function (data, callback) {
                callbacks['pay'] = typeof callback == 'function' ? callback : null;
                this.postTopMessage('pay', data);
            },


            //瑙掕壊鍒涘缓LOG
            logCreateRole: function (data) {
                this.postTopMessage('create', data);
            },

            //杩涘叆娓告垙LOG
            logEnterGame: function (data) {
                this.postTopMessage('enter', data);
            },

            //瑙掕壊鍗囩骇LOG
            logRoleUpLevel: function (data) {
                this.postTopMessage('levelup', data);
            },

            //澶勭悊閫€鍑轰簨浠�
            onLogout: function (data, callback) {
                callbacks['on_logout'] = typeof callback == 'function' ? callback : null;
            },

            getSdkPartnerId: function () {
                return GetParameter('dkm_partner_id') || GetParameter('pf');
            },
            share: function (data) {
                this.postTopMessage('share', data);
            },
            partnerShare: function (data, callback) {
                callbacks['partnerShare'] = typeof callback == 'function' ? callback : null;
                this.postTopMessage('partnerShare', data);
            },
            follow: function (data) {
                this.postTopMessage('follow', data);
            },
            download: function (data) {
                this.postTopMessage('download', data);
            },

            postTopMessage: function (action, args) {
                args = args || {};
                var data = {
                    action: action,
                    data: args
                };
                console.log('鍙戦€佹暟鎹細');
                console.log(data);
                //alert(JSON.stringify(data));
                //log(JSON.stringify(data));
                parent.postMessage(data, '*');
            }
        };
    }



    var akSdk = {
        //璋冪敤鐧诲綍锛忔敞鍐岀晫闈�
        login: function (callback) {
            run('login', '', callback);
        },

        //鐢ㄦ埛鐧诲嚭
        logout: function (callback) {
            run('logout', '', callback);
        },

        //鏀粯
        pay: function (data, callback) {
            console.log("鐮斿彂鍙戣捣鏀粯璇锋眰");
            console.log(data);

            //閮ㄥ垎娓告垙鏀寔鐩存帴鍦⊿DK鍐呮敮浠�
            var pkg = GetParameter('pkg');
            if (!pkg) {
                var u = ua.split('|');
                if (u.length >= 2) {
                    pkg = u[1];
                }
            }
            if (pkg == 'zzcq_rxzz_CV' || pkg == 'zzcq_xwhj_DD' || pkg == 'zzcq_rxhjb_DT' || pkg ==
                'rydt_yjdt_CR' || pkg == 'dkm_test_C' || pkg == 'bfwz_slyh_BA' || pkg ==
                'hjhios_jzrq_M' || pkg == 'sghj_ryys_Y' || ua.indexOf('fixpay') != -1) {
                LoadJS('//pic.9187.cn/js/akFixPay.js?v=1.39', function () {
                    data['game_pkg'] = pkg;
                    window.akFixPay.pay(data, function (msg) {
                        if (msg == 'apple') {
                            run('pay', data, callback);
                        } else if (msg == 'cancel') {} else if (msg == 'success') {
                            callback(0);
                        } else {
                            callback(1);
                        }
                    });
                });
            } else {
                run('pay', data, callback);
            }
        },

        //鎵撳紑瀹㈡湇绐楀彛
        openCsCenter: function () {
            run('openCsCenter');
        },


        //瑙掕壊鍒涘缓LOG
        logCreateRole: function (serverId, serverName, roleId, roleName, roleLevel, roleCreateTime) {
            var data = {
                serverid: serverId,
                servername: serverName,
                roleid: roleId,
                rolename: roleName,
                rolelevel: roleLevel,
                rolecreatetime: roleCreateTime
            };
            //log(JSON.stringify(data));
            run('logCreateRole', data);
        },

        //杩涘叆娓告垙LOG
        logEnterGame: function (serverId, serverName, roleId, roleName, roleLevel, roleCreateTime) {
            var data = {
                serverid: serverId,
                servername: serverName,
                roleid: roleId,
                rolename: roleName,
                rolelevel: roleLevel,
                rolecreatetime: roleCreateTime
            };
            //log(JSON.stringify(data));
            run('logEnterGame', data);
        },
        //鎻愪緵缁欑爺鍙戞父鎴忕晫闈㈠唴璋冪敤娓犻亾js
        partnerShare: function (jsType, callback) {
            var data = {
                jstype: jsType
            };
            run('partnerShare', data, callback);
        },

        //杩涘叆娓告垙LOG
        logRoleUpLevel: function (serverId, serverName, roleId, roleName, roleLevel, roleCreateTime) {
            var data = {
                serverid: serverId,
                servername: serverName,
                roleid: roleId,
                rolename: roleName,
                rolelevel: roleLevel,
                rolecreatetime: roleCreateTime
            };
            //log(JSON.stringify(data));
            run('logRoleUpLevel', data);
        },

        //澶勭悊閫€鍑轰簨浠�
        onLogout: function (callback) {
            run('onLogout', '', callback);
        },

        getSdkPartnerId: function () {
            return run('getSdkPartnerId');
        },

        share: function (data) {
            return run('share', data);
        },
        follow: function (data) {
            return run('follow', data);
        },
        download: function (data) {
            return run('download', data);
        },
        is_show_share: function () {
            return run('is_show_share');
        },
        is_show_follow: function () {
            return run('is_show_follow');
        }
    };

    return akSdk;
})(window, document, parent);