/**
 * zuotaiyu-2019-03-29
 *  */
window.JYSdk = (function(w, d, p) {
  const PARTNER_SDK = h5Sdk();
  function run(method, data, callback) {
    method in PARTNER_SDK && PARTNER_SDK[method](data, callback);
  }
  function h5Sdk() {
    var callbacks = {};
    w.addEventListener(
      "message",
      function(event) {
        var action = event.data.action ? event.data.action : false;
        var result = event.data.data ? event.data.data : {};

        if (!action) {
          return false;
        }
        switch (action) {
          case "login":
            if (result.state) {
              callbacks["login"] && callbacks["login"](0, result);
            } else {
              callbacks["login"] && callbacks["login"](1);
            }
            break;
          case "logout":
            if (result.state) {
              callbacks["logout"] && callbacks["logout"](0, result);
            } else {
              callbacks["logout"] && callbacks["logout"](1);
            }
            break;
          case "buy":
            if (result.state) {
              callbacks["buy"] && callbacks["buy"](0, result);
            } else {
              callbacks["buy"] && callbacks["buy"](1);
            }
            break;
          case "createRoles":
            if (result.state) {
              callbacks["createRoles"] && callbacks["createRoles"](0, result);
            } else {
              callbacks["createRoles"] && callbacks["createRoles"](1);
            }
            break;
          case "enterGame":
            if (result.state) {
              callbacks["enterGame"] && callbacks["enterGame"](0, result);
            } else {
              callbacks["enterGame"] && callbacks["enterGame"](1);
            }
            break;
          case "roleLevelup":
            if (result.state) {
              callbacks["roleLevelup"] && callbacks["roleLevelup"](0, result);
            } else {
              callbacks["roleLevelup"] && callbacks["roleLevelup"](1);
            }
            break;
        }
      },
      false
    );
    return {
      login: function(data, callback) {
        callbacks["login"] = typeof callback == "function" ? callback : null;
        this.postTopMessage("login");
      },
      logout: function(data, callback) {
        callbacks["logout"] = typeof callback == "function" ? callback : null;
        this.postTopMessage("logout");
      },
      buy: function(data, callback) {
        callbacks["buy"] = typeof callback == "function" ? callback : null;
        this.postTopMessage("buy");
      },
      createRoles: function(data, callback) {
        callbacks["createRoles"] =
          typeof callback == "function" ? callback : null;
        this.postTopMessage("createRoles", data);
      },
      enterGame: function(data, callback) {
        callbacks["enterGame"] =
          typeof callback == "function" ? callback : null;
        this.postTopMessage("enterGame", data);
      },
      roleLevelup: function(data, callback) {
        callbacks["roleLevelup"] =
          typeof callback == "function" ? callback : null;
        this.postTopMessage("roleLevelup", data);
      },
      postTopMessage: function(action, args) {
        args = args || {};
        var data = {
          action: action,
          data: args
        };
        p.postMessage(data, "*");
      }
    };
  }

  const JYSdk = {
    login: function(callback) {
      run("login", "", callback);
    },
    logout: function(callback) {
      run("logout", "", callback);
    },
    buy: function(data, callback) {
      run("buy", data, callback);
    },
    createRoles: function(data, callback) {
      run("createRoles", data, callback);
    },
    enterGame: function(data, callback) {
      run("enterGame", data, callback);
    },
    roleLevelup: function(data, callback) {
      run("roleLevelup", data, callback);
    }
  };
  return JYSdk;
})(window, document, parent);
