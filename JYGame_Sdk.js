/* Zepto v1.2.0 - zepto event ajax form ie - zeptojs.com/license */
!(function(t, e) {
  "function" == typeof define && define.amd
    ? define(function() {
        return e(t);
      })
    : e(t);
})(this, function(t) {
  var e = (function() {
    function $(t) {
      return null == t ? String(t) : S[C.call(t)] || "object";
    }
    function F(t) {
      return "function" == $(t);
    }
    function k(t) {
      return null != t && t == t.window;
    }
    function M(t) {
      return null != t && t.nodeType == t.DOCUMENT_NODE;
    }
    function R(t) {
      return "object" == $(t);
    }
    function Z(t) {
      return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype;
    }
    function z(t) {
      var e = !!t && "length" in t && t.length,
        n = r.type(t);
      return (
        "function" != n &&
        !k(t) &&
        ("array" == n ||
          0 === e ||
          ("number" == typeof e && e > 0 && e - 1 in t))
      );
    }
    function q(t) {
      return a.call(t, function(t) {
        return null != t;
      });
    }
    function H(t) {
      return t.length > 0 ? r.fn.concat.apply([], t) : t;
    }
    function I(t) {
      return t
        .replace(/::/g, "/")
        .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
        .replace(/([a-z\d])([A-Z])/g, "$1_$2")
        .replace(/_/g, "-")
        .toLowerCase();
    }
    function V(t) {
      return t in l ? l[t] : (l[t] = new RegExp("(^|\\s)" + t + "(\\s|$)"));
    }
    function _(t, e) {
      return "number" != typeof e || h[I(t)] ? e : e + "px";
    }
    function B(t) {
      var e, n;
      return (
        c[t] ||
          ((e = f.createElement(t)),
          f.body.appendChild(e),
          (n = getComputedStyle(e, "").getPropertyValue("display")),
          e.parentNode.removeChild(e),
          "none" == n && (n = "block"),
          (c[t] = n)),
        c[t]
      );
    }
    function U(t) {
      return "children" in t
        ? u.call(t.children)
        : r.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0;
          });
    }
    function X(t, e) {
      var n,
        r = t ? t.length : 0;
      for (n = 0; r > n; n++) this[n] = t[n];
      (this.length = r), (this.selector = e || "");
    }
    function J(t, r, i) {
      for (n in r)
        i && (Z(r[n]) || L(r[n]))
          ? (Z(r[n]) && !Z(t[n]) && (t[n] = {}),
            L(r[n]) && !L(t[n]) && (t[n] = []),
            J(t[n], r[n], i))
          : r[n] !== e && (t[n] = r[n]);
    }
    function W(t, e) {
      return null == e ? r(t) : r(t).filter(e);
    }
    function Y(t, e, n, r) {
      return F(e) ? e.call(t, n, r) : e;
    }
    function G(t, e, n) {
      null == n ? t.removeAttribute(e) : t.setAttribute(e, n);
    }
    function K(t, n) {
      var r = t.className || "",
        i = r && r.baseVal !== e;
      return n === e
        ? i
          ? r.baseVal
          : r
        : void (i ? (r.baseVal = n) : (t.className = n));
    }
    function Q(t) {
      try {
        return t
          ? "true" == t ||
              ("false" == t
                ? !1
                : "null" == t
                ? null
                : +t + "" == t
                ? +t
                : /^[\[\{]/.test(t)
                ? r.parseJSON(t)
                : t)
          : t;
      } catch (e) {
        return t;
      }
    }
    function tt(t, e) {
      e(t);
      for (var n = 0, r = t.childNodes.length; r > n; n++)
        tt(t.childNodes[n], e);
    }
    var e,
      n,
      r,
      i,
      O,
      P,
      o = [],
      s = o.concat,
      a = o.filter,
      u = o.slice,
      f = t.document,
      c = {},
      l = {},
      h = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
      },
      p = /^\s*<(\w+|!)[^>]*>/,
      d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      m = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      g = /^(?:body|html)$/i,
      v = /([A-Z])/g,
      y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
      x = ["after", "prepend", "before", "append"],
      b = f.createElement("table"),
      E = f.createElement("tr"),
      j = {
        tr: f.createElement("tbody"),
        tbody: b,
        thead: b,
        tfoot: b,
        td: E,
        th: E,
        "*": f.createElement("div")
      },
      w = /complete|loaded|interactive/,
      T = /^[\w-]*$/,
      S = {},
      C = S.toString,
      N = {},
      A = f.createElement("div"),
      D = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      L =
        Array.isArray ||
        function(t) {
          return t instanceof Array;
        };
    return (
      (N.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n =
          t.matches ||
          t.webkitMatchesSelector ||
          t.mozMatchesSelector ||
          t.oMatchesSelector ||
          t.matchesSelector;
        if (n) return n.call(t, e);
        var r,
          i = t.parentNode,
          o = !i;
        return (
          o && (i = A).appendChild(t),
          (r = ~N.qsa(i, e).indexOf(t)),
          o && A.removeChild(t),
          r
        );
      }),
      (O = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
          return e ? e.toUpperCase() : "";
        });
      }),
      (P = function(t) {
        return a.call(t, function(e, n) {
          return t.indexOf(e) == n;
        });
      }),
      (N.fragment = function(t, n, i) {
        var o, s, a;
        return (
          d.test(t) && (o = r(f.createElement(RegExp.$1))),
          o ||
            (t.replace && (t = t.replace(m, "<$1></$2>")),
            n === e && (n = p.test(t) && RegExp.$1),
            n in j || (n = "*"),
            (a = j[n]),
            (a.innerHTML = "" + t),
            (o = r.each(u.call(a.childNodes), function() {
              a.removeChild(this);
            }))),
          Z(i) &&
            ((s = r(o)),
            r.each(i, function(t, e) {
              y.indexOf(t) > -1 ? s[t](e) : s.attr(t, e);
            })),
          o
        );
      }),
      (N.Z = function(t, e) {
        return new X(t, e);
      }),
      (N.isZ = function(t) {
        return t instanceof N.Z;
      }),
      (N.init = function(t, n) {
        var i;
        if (!t) return N.Z();
        if ("string" == typeof t)
          if (((t = t.trim()), "<" == t[0] && p.test(t)))
            (i = N.fragment(t, RegExp.$1, n)), (t = null);
          else {
            if (n !== e) return r(n).find(t);
            i = N.qsa(f, t);
          }
        else {
          if (F(t)) return r(f).ready(t);
          if (N.isZ(t)) return t;
          if (L(t)) i = q(t);
          else if (R(t)) (i = [t]), (t = null);
          else if (p.test(t))
            (i = N.fragment(t.trim(), RegExp.$1, n)), (t = null);
          else {
            if (n !== e) return r(n).find(t);
            i = N.qsa(f, t);
          }
        }
        return N.Z(i, t);
      }),
      (r = function(t, e) {
        return N.init(t, e);
      }),
      (r.extend = function(t) {
        var e,
          n = u.call(arguments, 1);
        return (
          "boolean" == typeof t && ((e = t), (t = n.shift())),
          n.forEach(function(n) {
            J(t, n, e);
          }),
          t
        );
      }),
      (N.qsa = function(t, e) {
        var n,
          r = "#" == e[0],
          i = !r && "." == e[0],
          o = r || i ? e.slice(1) : e,
          s = T.test(o);
        return t.getElementById && s && r
          ? (n = t.getElementById(o))
            ? [n]
            : []
          : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType
          ? []
          : u.call(
              s && !r && t.getElementsByClassName
                ? i
                  ? t.getElementsByClassName(o)
                  : t.getElementsByTagName(e)
                : t.querySelectorAll(e)
            );
      }),
      (r.contains = f.documentElement.contains
        ? function(t, e) {
            return t !== e && t.contains(e);
          }
        : function(t, e) {
            for (; e && (e = e.parentNode); ) if (e === t) return !0;
            return !1;
          }),
      (r.type = $),
      (r.isFunction = F),
      (r.isWindow = k),
      (r.isArray = L),
      (r.isPlainObject = Z),
      (r.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0;
      }),
      (r.isNumeric = function(t) {
        var e = Number(t),
          n = typeof t;
        return (
          (null != t &&
            "boolean" != n &&
            ("string" != n || t.length) &&
            !isNaN(e) &&
            isFinite(e)) ||
          !1
        );
      }),
      (r.inArray = function(t, e, n) {
        return o.indexOf.call(e, t, n);
      }),
      (r.camelCase = O),
      (r.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t);
      }),
      (r.uuid = 0),
      (r.support = {}),
      (r.expr = {}),
      (r.noop = function() {}),
      (r.map = function(t, e) {
        var n,
          i,
          o,
          r = [];
        if (z(t))
          for (i = 0; i < t.length; i++)
            (n = e(t[i], i)), null != n && r.push(n);
        else for (o in t) (n = e(t[o], o)), null != n && r.push(n);
        return H(r);
      }),
      (r.each = function(t, e) {
        var n, r;
        if (z(t)) {
          for (n = 0; n < t.length; n++)
            if (e.call(t[n], n, t[n]) === !1) return t;
        } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
        return t;
      }),
      (r.grep = function(t, e) {
        return a.call(t, e);
      }),
      t.JSON && (r.parseJSON = JSON.parse),
      r.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function(t, e) {
          S["[object " + e + "]"] = e.toLowerCase();
        }
      ),
      (r.fn = {
        constructor: N.Z,
        length: 0,
        forEach: o.forEach,
        reduce: o.reduce,
        push: o.push,
        sort: o.sort,
        splice: o.splice,
        indexOf: o.indexOf,
        concat: function() {
          var t,
            e,
            n = [];
          for (t = 0; t < arguments.length; t++)
            (e = arguments[t]), (n[t] = N.isZ(e) ? e.toArray() : e);
          return s.apply(N.isZ(this) ? this.toArray() : this, n);
        },
        map: function(t) {
          return r(
            r.map(this, function(e, n) {
              return t.call(e, n, e);
            })
          );
        },
        slice: function() {
          return r(u.apply(this, arguments));
        },
        ready: function(t) {
          return (
            w.test(f.readyState) && f.body
              ? t(r)
              : f.addEventListener(
                  "DOMContentLoaded",
                  function() {
                    t(r);
                  },
                  !1
                ),
            this
          );
        },
        get: function(t) {
          return t === e ? u.call(this) : this[t >= 0 ? t : t + this.length];
        },
        toArray: function() {
          return this.get();
        },
        size: function() {
          return this.length;
        },
        remove: function() {
          return this.each(function() {
            null != this.parentNode && this.parentNode.removeChild(this);
          });
        },
        each: function(t) {
          return (
            o.every.call(this, function(e, n) {
              return t.call(e, n, e) !== !1;
            }),
            this
          );
        },
        filter: function(t) {
          return F(t)
            ? this.not(this.not(t))
            : r(
                a.call(this, function(e) {
                  return N.matches(e, t);
                })
              );
        },
        add: function(t, e) {
          return r(P(this.concat(r(t, e))));
        },
        is: function(t) {
          return this.length > 0 && N.matches(this[0], t);
        },
        not: function(t) {
          var n = [];
          if (F(t) && t.call !== e)
            this.each(function(e) {
              t.call(this, e) || n.push(this);
            });
          else {
            var i =
              "string" == typeof t
                ? this.filter(t)
                : z(t) && F(t.item)
                ? u.call(t)
                : r(t);
            this.forEach(function(t) {
              i.indexOf(t) < 0 && n.push(t);
            });
          }
          return r(n);
        },
        has: function(t) {
          return this.filter(function() {
            return R(t)
              ? r.contains(this, t)
              : r(this)
                  .find(t)
                  .size();
          });
        },
        eq: function(t) {
          return -1 === t ? this.slice(t) : this.slice(t, +t + 1);
        },
        first: function() {
          var t = this[0];
          return t && !R(t) ? t : r(t);
        },
        last: function() {
          var t = this[this.length - 1];
          return t && !R(t) ? t : r(t);
        },
        find: function(t) {
          var e,
            n = this;
          return (e = t
            ? "object" == typeof t
              ? r(t).filter(function() {
                  var t = this;
                  return o.some.call(n, function(e) {
                    return r.contains(e, t);
                  });
                })
              : 1 == this.length
              ? r(N.qsa(this[0], t))
              : this.map(function() {
                  return N.qsa(this, t);
                })
            : r());
        },
        closest: function(t, e) {
          var n = [],
            i = "object" == typeof t && r(t);
          return (
            this.each(function(r, o) {
              for (; o && !(i ? i.indexOf(o) >= 0 : N.matches(o, t)); )
                o = o !== e && !M(o) && o.parentNode;
              o && n.indexOf(o) < 0 && n.push(o);
            }),
            r(n)
          );
        },
        parents: function(t) {
          for (var e = [], n = this; n.length > 0; )
            n = r.map(n, function(t) {
              return (t = t.parentNode) && !M(t) && e.indexOf(t) < 0
                ? (e.push(t), t)
                : void 0;
            });
          return W(e, t);
        },
        parent: function(t) {
          return W(P(this.pluck("parentNode")), t);
        },
        children: function(t) {
          return W(
            this.map(function() {
              return U(this);
            }),
            t
          );
        },
        contents: function() {
          return this.map(function() {
            return this.contentDocument || u.call(this.childNodes);
          });
        },
        siblings: function(t) {
          return W(
            this.map(function(t, e) {
              return a.call(U(e.parentNode), function(t) {
                return t !== e;
              });
            }),
            t
          );
        },
        empty: function() {
          return this.each(function() {
            this.innerHTML = "";
          });
        },
        pluck: function(t) {
          return r.map(this, function(e) {
            return e[t];
          });
        },
        show: function() {
          return this.each(function() {
            "none" == this.style.display && (this.style.display = ""),
              "none" ==
                getComputedStyle(this, "").getPropertyValue("display") &&
                (this.style.display = B(this.nodeName));
          });
        },
        replaceWith: function(t) {
          return this.before(t).remove();
        },
        wrap: function(t) {
          var e = F(t);
          if (this[0] && !e)
            var n = r(t).get(0),
              i = n.parentNode || this.length > 1;
          return this.each(function(o) {
            r(this).wrapAll(e ? t.call(this, o) : i ? n.cloneNode(!0) : n);
          });
        },
        wrapAll: function(t) {
          if (this[0]) {
            r(this[0]).before((t = r(t)));
            for (var e; (e = t.children()).length; ) t = e.first();
            r(t).append(this);
          }
          return this;
        },
        wrapInner: function(t) {
          var e = F(t);
          return this.each(function(n) {
            var i = r(this),
              o = i.contents(),
              s = e ? t.call(this, n) : t;
            o.length ? o.wrapAll(s) : i.append(s);
          });
        },
        unwrap: function() {
          return (
            this.parent().each(function() {
              r(this).replaceWith(r(this).children());
            }),
            this
          );
        },
        clone: function() {
          return this.map(function() {
            return this.cloneNode(!0);
          });
        },
        hide: function() {
          return this.css("display", "none");
        },
        toggle: function(t) {
          return this.each(function() {
            var n = r(this);
            (t === e ? "none" == n.css("display") : t) ? n.show() : n.hide();
          });
        },
        prev: function(t) {
          return r(this.pluck("previousElementSibling")).filter(t || "*");
        },
        next: function(t) {
          return r(this.pluck("nextElementSibling")).filter(t || "*");
        },
        html: function(t) {
          return 0 in arguments
            ? this.each(function(e) {
                var n = this.innerHTML;
                r(this)
                  .empty()
                  .append(Y(this, t, e, n));
              })
            : 0 in this
            ? this[0].innerHTML
            : null;
        },
        text: function(t) {
          return 0 in arguments
            ? this.each(function(e) {
                var n = Y(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n;
              })
            : 0 in this
            ? this.pluck("textContent").join("")
            : null;
        },
        attr: function(t, r) {
          var i;
          return "string" != typeof t || 1 in arguments
            ? this.each(function(e) {
                if (1 === this.nodeType)
                  if (R(t)) for (n in t) G(this, n, t[n]);
                  else G(this, t, Y(this, r, e, this.getAttribute(t)));
              })
            : 0 in this &&
              1 == this[0].nodeType &&
              null != (i = this[0].getAttribute(t))
            ? i
            : e;
        },
        removeAttr: function(t) {
          return this.each(function() {
            1 === this.nodeType &&
              t.split(" ").forEach(function(t) {
                G(this, t);
              }, this);
          });
        },
        prop: function(t, e) {
          return (
            (t = D[t] || t),
            1 in arguments
              ? this.each(function(n) {
                  this[t] = Y(this, e, n, this[t]);
                })
              : this[0] && this[0][t]
          );
        },
        removeProp: function(t) {
          return (
            (t = D[t] || t),
            this.each(function() {
              delete this[t];
            })
          );
        },
        data: function(t, n) {
          var r = "data-" + t.replace(v, "-$1").toLowerCase(),
            i = 1 in arguments ? this.attr(r, n) : this.attr(r);
          return null !== i ? Q(i) : e;
        },
        val: function(t) {
          return 0 in arguments
            ? (null == t && (t = ""),
              this.each(function(e) {
                this.value = Y(this, t, e, this.value);
              }))
            : this[0] &&
                (this[0].multiple
                  ? r(this[0])
                      .find("option")
                      .filter(function() {
                        return this.selected;
                      })
                      .pluck("value")
                  : this[0].value);
        },
        offset: function(e) {
          if (e)
            return this.each(function(t) {
              var n = r(this),
                i = Y(this, e, t, n.offset()),
                o = n.offsetParent().offset(),
                s = { top: i.top - o.top, left: i.left - o.left };
              "static" == n.css("position") && (s.position = "relative"),
                n.css(s);
            });
          if (!this.length) return null;
          if (
            f.documentElement !== this[0] &&
            !r.contains(f.documentElement, this[0])
          )
            return { top: 0, left: 0 };
          var n = this[0].getBoundingClientRect();
          return {
            left: n.left + t.pageXOffset,
            top: n.top + t.pageYOffset,
            width: Math.round(n.width),
            height: Math.round(n.height)
          };
        },
        css: function(t, e) {
          if (arguments.length < 2) {
            var i = this[0];
            if ("string" == typeof t) {
              if (!i) return;
              return (
                i.style[O(t)] || getComputedStyle(i, "").getPropertyValue(t)
              );
            }
            if (L(t)) {
              if (!i) return;
              var o = {},
                s = getComputedStyle(i, "");
              return (
                r.each(t, function(t, e) {
                  o[e] = i.style[O(e)] || s.getPropertyValue(e);
                }),
                o
              );
            }
          }
          var a = "";
          if ("string" == $(t))
            e || 0 === e
              ? (a = I(t) + ":" + _(t, e))
              : this.each(function() {
                  this.style.removeProperty(I(t));
                });
          else
            for (n in t)
              t[n] || 0 === t[n]
                ? (a += I(n) + ":" + _(n, t[n]) + ";")
                : this.each(function() {
                    this.style.removeProperty(I(n));
                  });
          return this.each(function() {
            this.style.cssText += ";" + a;
          });
        },
        index: function(t) {
          return t
            ? this.indexOf(r(t)[0])
            : this.parent()
                .children()
                .indexOf(this[0]);
        },
        hasClass: function(t) {
          return t
            ? o.some.call(
                this,
                function(t) {
                  return this.test(K(t));
                },
                V(t)
              )
            : !1;
        },
        addClass: function(t) {
          return t
            ? this.each(function(e) {
                if ("className" in this) {
                  i = [];
                  var n = K(this),
                    o = Y(this, t, e, n);
                  o.split(/\s+/g).forEach(function(t) {
                    r(this).hasClass(t) || i.push(t);
                  }, this),
                    i.length && K(this, n + (n ? " " : "") + i.join(" "));
                }
              })
            : this;
        },
        removeClass: function(t) {
          return this.each(function(n) {
            if ("className" in this) {
              if (t === e) return K(this, "");
              (i = K(this)),
                Y(this, t, n, i)
                  .split(/\s+/g)
                  .forEach(function(t) {
                    i = i.replace(V(t), " ");
                  }),
                K(this, i.trim());
            }
          });
        },
        toggleClass: function(t, n) {
          return t
            ? this.each(function(i) {
                var o = r(this),
                  s = Y(this, t, i, K(this));
                s.split(/\s+/g).forEach(function(t) {
                  (n === e
                  ? !o.hasClass(t)
                  : n)
                    ? o.addClass(t)
                    : o.removeClass(t);
                });
              })
            : this;
        },
        scrollTop: function(t) {
          if (this.length) {
            var n = "scrollTop" in this[0];
            return t === e
              ? n
                ? this[0].scrollTop
                : this[0].pageYOffset
              : this.each(
                  n
                    ? function() {
                        this.scrollTop = t;
                      }
                    : function() {
                        this.scrollTo(this.scrollX, t);
                      }
                );
          }
        },
        scrollLeft: function(t) {
          if (this.length) {
            var n = "scrollLeft" in this[0];
            return t === e
              ? n
                ? this[0].scrollLeft
                : this[0].pageXOffset
              : this.each(
                  n
                    ? function() {
                        this.scrollLeft = t;
                      }
                    : function() {
                        this.scrollTo(t, this.scrollY);
                      }
                );
          }
        },
        position: function() {
          if (this.length) {
            var t = this[0],
              e = this.offsetParent(),
              n = this.offset(),
              i = g.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
            return (
              (n.top -= parseFloat(r(t).css("margin-top")) || 0),
              (n.left -= parseFloat(r(t).css("margin-left")) || 0),
              (i.top += parseFloat(r(e[0]).css("border-top-width")) || 0),
              (i.left += parseFloat(r(e[0]).css("border-left-width")) || 0),
              { top: n.top - i.top, left: n.left - i.left }
            );
          }
        },
        offsetParent: function() {
          return this.map(function() {
            for (
              var t = this.offsetParent || f.body;
              t && !g.test(t.nodeName) && "static" == r(t).css("position");

            )
              t = t.offsetParent;
            return t;
          });
        }
      }),
      (r.fn.detach = r.fn.remove),
      ["width", "height"].forEach(function(t) {
        var n = t.replace(/./, function(t) {
          return t[0].toUpperCase();
        });
        r.fn[t] = function(i) {
          var o,
            s = this[0];
          return i === e
            ? k(s)
              ? s["inner" + n]
              : M(s)
              ? s.documentElement["scroll" + n]
              : (o = this.offset()) && o[t]
            : this.each(function(e) {
                (s = r(this)), s.css(t, Y(this, i, e, s[t]()));
              });
        };
      }),
      x.forEach(function(n, i) {
        var o = i % 2;
        (r.fn[n] = function() {
          var n,
            a,
            s = r.map(arguments, function(t) {
              var i = [];
              return (
                (n = $(t)),
                "array" == n
                  ? (t.forEach(function(t) {
                      return t.nodeType !== e
                        ? i.push(t)
                        : r.zepto.isZ(t)
                        ? (i = i.concat(t.get()))
                        : void (i = i.concat(N.fragment(t)));
                    }),
                    i)
                  : "object" == n || null == t
                  ? t
                  : N.fragment(t)
              );
            }),
            u = this.length > 1;
          return s.length < 1
            ? this
            : this.each(function(e, n) {
                (a = o ? n : n.parentNode),
                  (n =
                    0 == i
                      ? n.nextSibling
                      : 1 == i
                      ? n.firstChild
                      : 2 == i
                      ? n
                      : null);
                var c = r.contains(f.documentElement, a);
                s.forEach(function(e) {
                  if (u) e = e.cloneNode(!0);
                  else if (!a) return r(e).remove();
                  a.insertBefore(e, n),
                    c &&
                      tt(e, function(e) {
                        if (
                          !(
                            null == e.nodeName ||
                            "SCRIPT" !== e.nodeName.toUpperCase() ||
                            (e.type && "text/javascript" !== e.type) ||
                            e.src
                          )
                        ) {
                          var n = e.ownerDocument
                            ? e.ownerDocument.defaultView
                            : t;
                          n.eval.call(n, e.innerHTML);
                        }
                      });
                });
              });
        }),
          (r.fn[o ? n + "To" : "insert" + (i ? "Before" : "After")] = function(
            t
          ) {
            return r(t)[n](this), this;
          });
      }),
      (N.Z.prototype = X.prototype = r.fn),
      (N.uniq = P),
      (N.deserializeValue = Q),
      (r.zepto = N),
      r
    );
  })();
  return (
    (t.Zepto = e),
    void 0 === t.$ && (t.$ = e),
    (function(e) {
      function h(t) {
        return t._zid || (t._zid = n++);
      }
      function p(t, e, n, r) {
        if (((e = d(e)), e.ns)) var i = m(e.ns);
        return (a[h(t)] || []).filter(function(t) {
          return (
            t &&
            (!e.e || t.e == e.e) &&
            (!e.ns || i.test(t.ns)) &&
            (!n || h(t.fn) === h(n)) &&
            (!r || t.sel == r)
          );
        });
      }
      function d(t) {
        var e = ("" + t).split(".");
        return {
          e: e[0],
          ns: e
            .slice(1)
            .sort()
            .join(" ")
        };
      }
      function m(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)");
      }
      function g(t, e) {
        return (t.del && !f && t.e in c) || !!e;
      }
      function v(t) {
        return l[t] || (f && c[t]) || t;
      }
      function y(t, n, i, o, s, u, f) {
        var c = h(t),
          p = a[c] || (a[c] = []);
        n.split(/\s/).forEach(function(n) {
          if ("ready" == n) return e(document).ready(i);
          var a = d(n);
          (a.fn = i),
            (a.sel = s),
            a.e in l &&
              (i = function(t) {
                var n = t.relatedTarget;
                return !n || (n !== this && !e.contains(this, n))
                  ? a.fn.apply(this, arguments)
                  : void 0;
              }),
            (a.del = u);
          var c = u || i;
          (a.proxy = function(e) {
            if (((e = T(e)), !e.isImmediatePropagationStopped())) {
              e.data = o;
              var n = c.apply(t, e._args == r ? [e] : [e].concat(e._args));
              return n === !1 && (e.preventDefault(), e.stopPropagation()), n;
            }
          }),
            (a.i = p.length),
            p.push(a),
            "addEventListener" in t &&
              t.addEventListener(v(a.e), a.proxy, g(a, f));
        });
      }
      function x(t, e, n, r, i) {
        var o = h(t);
        (e || "").split(/\s/).forEach(function(e) {
          p(t, e, n, r).forEach(function(e) {
            delete a[o][e.i],
              "removeEventListener" in t &&
                t.removeEventListener(v(e.e), e.proxy, g(e, i));
          });
        });
      }
      function T(t, n) {
        return (
          (n || !t.isDefaultPrevented) &&
            (n || (n = t),
            e.each(w, function(e, r) {
              var i = n[e];
              (t[e] = function() {
                return (this[r] = b), i && i.apply(n, arguments);
              }),
                (t[r] = E);
            }),
            t.timeStamp || (t.timeStamp = Date.now()),
            (n.defaultPrevented !== r
              ? n.defaultPrevented
              : "returnValue" in n
              ? n.returnValue === !1
              : n.getPreventDefault && n.getPreventDefault()) &&
              (t.isDefaultPrevented = b)),
          t
        );
      }
      function S(t) {
        var e,
          n = { originalEvent: t };
        for (e in t) j.test(e) || t[e] === r || (n[e] = t[e]);
        return T(n, t);
      }
      var r,
        n = 1,
        i = Array.prototype.slice,
        o = e.isFunction,
        s = function(t) {
          return "string" == typeof t;
        },
        a = {},
        u = {},
        f = "onfocusin" in t,
        c = { focus: "focusin", blur: "focusout" },
        l = { mouseenter: "mouseover", mouseleave: "mouseout" };
      (u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents"),
        (e.event = { add: y, remove: x }),
        (e.proxy = function(t, n) {
          var r = 2 in arguments && i.call(arguments, 2);
          if (o(t)) {
            var a = function() {
              return t.apply(n, r ? r.concat(i.call(arguments)) : arguments);
            };
            return (a._zid = h(t)), a;
          }
          if (s(n))
            return r
              ? (r.unshift(t[n], t), e.proxy.apply(null, r))
              : e.proxy(t[n], t);
          throw new TypeError("expected function");
        }),
        (e.fn.bind = function(t, e, n) {
          return this.on(t, e, n);
        }),
        (e.fn.unbind = function(t, e) {
          return this.off(t, e);
        }),
        (e.fn.one = function(t, e, n, r) {
          return this.on(t, e, n, r, 1);
        });
      var b = function() {
          return !0;
        },
        E = function() {
          return !1;
        },
        j = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
        w = {
          preventDefault: "isDefaultPrevented",
          stopImmediatePropagation: "isImmediatePropagationStopped",
          stopPropagation: "isPropagationStopped"
        };
      (e.fn.delegate = function(t, e, n) {
        return this.on(e, t, n);
      }),
        (e.fn.undelegate = function(t, e, n) {
          return this.off(e, t, n);
        }),
        (e.fn.live = function(t, n) {
          return e(document.body).delegate(this.selector, t, n), this;
        }),
        (e.fn.die = function(t, n) {
          return e(document.body).undelegate(this.selector, t, n), this;
        }),
        (e.fn.on = function(t, n, a, u, f) {
          var c,
            l,
            h = this;
          return t && !s(t)
            ? (e.each(t, function(t, e) {
                h.on(t, n, a, e, f);
              }),
              h)
            : (s(n) || o(u) || u === !1 || ((u = a), (a = n), (n = r)),
              (u === r || a === !1) && ((u = a), (a = r)),
              u === !1 && (u = E),
              h.each(function(r, o) {
                f &&
                  (c = function(t) {
                    return x(o, t.type, u), u.apply(this, arguments);
                  }),
                  n &&
                    (l = function(t) {
                      var r,
                        s = e(t.target)
                          .closest(n, o)
                          .get(0);
                      return s && s !== o
                        ? ((r = e.extend(S(t), {
                            currentTarget: s,
                            liveFired: o
                          })),
                          (c || u).apply(s, [r].concat(i.call(arguments, 1))))
                        : void 0;
                    }),
                  y(o, t, u, a, n, l || c);
              }));
        }),
        (e.fn.off = function(t, n, i) {
          var a = this;
          return t && !s(t)
            ? (e.each(t, function(t, e) {
                a.off(t, n, e);
              }),
              a)
            : (s(n) || o(i) || i === !1 || ((i = n), (n = r)),
              i === !1 && (i = E),
              a.each(function() {
                x(this, t, i, n);
              }));
        }),
        (e.fn.trigger = function(t, n) {
          return (
            (t = s(t) || e.isPlainObject(t) ? e.Event(t) : T(t)),
            (t._args = n),
            this.each(function() {
              t.type in c && "function" == typeof this[t.type]
                ? this[t.type]()
                : "dispatchEvent" in this
                ? this.dispatchEvent(t)
                : e(this).triggerHandler(t, n);
            })
          );
        }),
        (e.fn.triggerHandler = function(t, n) {
          var r, i;
          return (
            this.each(function(o, a) {
              (r = S(s(t) ? e.Event(t) : t)),
                (r._args = n),
                (r.target = a),
                e.each(p(a, t.type || t), function(t, e) {
                  return (
                    (i = e.proxy(r)),
                    r.isImmediatePropagationStopped() ? !1 : void 0
                  );
                });
            }),
            i
          );
        }),
        "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error"
          .split(" ")
          .forEach(function(t) {
            e.fn[t] = function(e) {
              return 0 in arguments ? this.bind(t, e) : this.trigger(t);
            };
          }),
        (e.Event = function(t, e) {
          s(t) || ((e = t), (t = e.type));
          var n = document.createEvent(u[t] || "Events"),
            r = !0;
          if (e) for (var i in e) "bubbles" == i ? (r = !!e[i]) : (n[i] = e[i]);
          return n.initEvent(t, r, !0), T(n);
        });
    })(e),
    (function(e) {
      function p(t, n, r) {
        var i = e.Event(n);
        return e(t).trigger(i, r), !i.isDefaultPrevented();
      }
      function d(t, e, n, i) {
        return t.global ? p(e || r, n, i) : void 0;
      }
      function m(t) {
        t.global && 0 === e.active++ && d(t, null, "ajaxStart");
      }
      function g(t) {
        t.global && !--e.active && d(t, null, "ajaxStop");
      }
      function v(t, e) {
        var n = e.context;
        return e.beforeSend.call(n, t, e) === !1 ||
          d(e, n, "ajaxBeforeSend", [t, e]) === !1
          ? !1
          : void d(e, n, "ajaxSend", [t, e]);
      }
      function y(t, e, n, r) {
        var i = n.context,
          o = "success";
        n.success.call(i, t, o, e),
          r && r.resolveWith(i, [t, o, e]),
          d(n, i, "ajaxSuccess", [e, n, t]),
          b(o, e, n);
      }
      function x(t, e, n, r, i) {
        var o = r.context;
        r.error.call(o, n, e, t),
          i && i.rejectWith(o, [n, e, t]),
          d(r, o, "ajaxError", [n, r, t || e]),
          b(e, n, r);
      }
      function b(t, e, n) {
        var r = n.context;
        n.complete.call(r, e, t), d(n, r, "ajaxComplete", [e, n]), g(n);
      }
      function E(t, e, n) {
        if (n.dataFilter == j) return t;
        var r = n.context;
        return n.dataFilter.call(r, t, e);
      }
      function j() {}
      function w(t) {
        return (
          t && (t = t.split(";", 2)[0]),
          (t &&
            (t == c
              ? "html"
              : t == f
              ? "json"
              : a.test(t)
              ? "script"
              : u.test(t) && "xml")) ||
            "text"
        );
      }
      function T(t, e) {
        return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?");
      }
      function S(t) {
        t.processData &&
          t.data &&
          "string" != e.type(t.data) &&
          (t.data = e.param(t.data, t.traditional)),
          !t.data ||
            (t.type &&
              "GET" != t.type.toUpperCase() &&
              "jsonp" != t.dataType) ||
            ((t.url = T(t.url, t.data)), (t.data = void 0));
      }
      function C(t, n, r, i) {
        return (
          e.isFunction(n) && ((i = r), (r = n), (n = void 0)),
          e.isFunction(r) || ((i = r), (r = void 0)),
          { url: t, data: n, success: r, dataType: i }
        );
      }
      function O(t, n, r, i) {
        var o,
          s = e.isArray(n),
          a = e.isPlainObject(n);
        e.each(n, function(n, u) {
          (o = e.type(u)),
            i &&
              (n = r
                ? i
                : i +
                  "[" +
                  (a || "object" == o || "array" == o ? n : "") +
                  "]"),
            !i && s
              ? t.add(u.name, u.value)
              : "array" == o || (!r && "object" == o)
              ? O(t, u, r, n)
              : t.add(n, u);
        });
      }
      var i,
        o,
        n = +new Date(),
        r = t.document,
        s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        a = /^(?:text|application)\/javascript/i,
        u = /^(?:text|application)\/xml/i,
        f = "application/json",
        c = "text/html",
        l = /^\s*$/,
        h = r.createElement("a");
      (h.href = t.location.href),
        (e.active = 0),
        (e.ajaxJSONP = function(i, o) {
          if (!("type" in i)) return e.ajax(i);
          var c,
            p,
            s = i.jsonpCallback,
            a = (e.isFunction(s) ? s() : s) || "Zepto" + n++,
            u = r.createElement("script"),
            f = t[a],
            l = function(t) {
              e(u).triggerHandler("error", t || "abort");
            },
            h = { abort: l };
          return (
            o && o.promise(h),
            e(u).on("load error", function(n, r) {
              clearTimeout(p),
                e(u)
                  .off()
                  .remove(),
                "error" != n.type && c
                  ? y(c[0], h, i, o)
                  : x(null, r || "error", h, i, o),
                (t[a] = f),
                c && e.isFunction(f) && f(c[0]),
                (f = c = void 0);
            }),
            v(h, i) === !1
              ? (l("abort"), h)
              : ((t[a] = function() {
                  c = arguments;
                }),
                (u.src = i.url.replace(/\?(.+)=\?/, "?$1=" + a)),
                r.head.appendChild(u),
                i.timeout > 0 &&
                  (p = setTimeout(function() {
                    l("timeout");
                  }, i.timeout)),
                h)
          );
        }),
        (e.ajaxSettings = {
          type: "GET",
          beforeSend: j,
          success: j,
          error: j,
          complete: j,
          context: null,
          global: !0,
          xhr: function() {
            return new t.XMLHttpRequest();
          },
          accepts: {
            script:
              "text/javascript, application/javascript, application/x-javascript",
            json: f,
            xml: "application/xml, text/xml",
            html: c,
            text: "text/plain"
          },
          crossDomain: !1,
          timeout: 0,
          processData: !0,
          cache: !0,
          dataFilter: j
        }),
        (e.ajax = function(n) {
          var u,
            f,
            s = e.extend({}, n || {}),
            a = e.Deferred && e.Deferred();
          for (i in e.ajaxSettings)
            void 0 === s[i] && (s[i] = e.ajaxSettings[i]);
          m(s),
            s.crossDomain ||
              ((u = r.createElement("a")),
              (u.href = s.url),
              (u.href = u.href),
              (s.crossDomain =
                h.protocol + "//" + h.host != u.protocol + "//" + u.host)),
            s.url || (s.url = t.location.toString()),
            (f = s.url.indexOf("#")) > -1 && (s.url = s.url.slice(0, f)),
            S(s);
          var c = s.dataType,
            p = /\?.+=\?/.test(s.url);
          if (
            (p && (c = "jsonp"),
            (s.cache !== !1 &&
              ((n && n.cache === !0) || ("script" != c && "jsonp" != c))) ||
              (s.url = T(s.url, "_=" + Date.now())),
            "jsonp" == c)
          )
            return (
              p ||
                (s.url = T(
                  s.url,
                  s.jsonp ? s.jsonp + "=?" : s.jsonp === !1 ? "" : "callback=?"
                )),
              e.ajaxJSONP(s, a)
            );
          var P,
            d = s.accepts[c],
            g = {},
            b = function(t, e) {
              g[t.toLowerCase()] = [t, e];
            },
            C = /^([\w-]+:)\/\//.test(s.url) ? RegExp.$1 : t.location.protocol,
            N = s.xhr(),
            O = N.setRequestHeader;
          if (
            (a && a.promise(N),
            s.crossDomain || b("X-Requested-With", "XMLHttpRequest"),
            b("Accept", d || "*/*"),
            (d = s.mimeType || d) &&
              (d.indexOf(",") > -1 && (d = d.split(",", 2)[0]),
              N.overrideMimeType && N.overrideMimeType(d)),
            (s.contentType ||
              (s.contentType !== !1 &&
                s.data &&
                "GET" != s.type.toUpperCase())) &&
              b(
                "Content-Type",
                s.contentType || "application/x-www-form-urlencoded"
              ),
            s.headers)
          )
            for (o in s.headers) b(o, s.headers[o]);
          if (
            ((N.setRequestHeader = b),
            (N.onreadystatechange = function() {
              if (4 == N.readyState) {
                (N.onreadystatechange = j), clearTimeout(P);
                var t,
                  n = !1;
                if (
                  (N.status >= 200 && N.status < 300) ||
                  304 == N.status ||
                  (0 == N.status && "file:" == C)
                ) {
                  if (
                    ((c =
                      c ||
                      w(s.mimeType || N.getResponseHeader("content-type"))),
                    "arraybuffer" == N.responseType || "blob" == N.responseType)
                  )
                    t = N.response;
                  else {
                    t = N.responseText;
                    try {
                      (t = E(t, c, s)),
                        "script" == c
                          ? (1, eval)(t)
                          : "xml" == c
                          ? (t = N.responseXML)
                          : "json" == c &&
                            (t = l.test(t) ? null : e.parseJSON(t));
                    } catch (r) {
                      n = r;
                    }
                    if (n) return x(n, "parsererror", N, s, a);
                  }
                  y(t, N, s, a);
                } else
                  x(
                    N.statusText || null,
                    N.status ? "error" : "abort",
                    N,
                    s,
                    a
                  );
              }
            }),
            v(N, s) === !1)
          )
            return N.abort(), x(null, "abort", N, s, a), N;
          var A = "async" in s ? s.async : !0;
          if ((N.open(s.type, s.url, A, s.username, s.password), s.xhrFields))
            for (o in s.xhrFields) N[o] = s.xhrFields[o];
          for (o in g) O.apply(N, g[o]);
          return (
            s.timeout > 0 &&
              (P = setTimeout(function() {
                (N.onreadystatechange = j),
                  N.abort(),
                  x(null, "timeout", N, s, a);
              }, s.timeout)),
            N.send(s.data ? s.data : null),
            N
          );
        }),
        (e.get = function() {
          return e.ajax(C.apply(null, arguments));
        }),
        (e.post = function() {
          var t = C.apply(null, arguments);
          return (t.type = "POST"), e.ajax(t);
        }),
        (e.getJSON = function() {
          var t = C.apply(null, arguments);
          return (t.dataType = "json"), e.ajax(t);
        }),
        (e.fn.load = function(t, n, r) {
          if (!this.length) return this;
          var a,
            i = this,
            o = t.split(/\s/),
            u = C(t, n, r),
            f = u.success;
          return (
            o.length > 1 && ((u.url = o[0]), (a = o[1])),
            (u.success = function(t) {
              i.html(
                a
                  ? e("<div>")
                      .html(t.replace(s, ""))
                      .find(a)
                  : t
              ),
                f && f.apply(i, arguments);
            }),
            e.ajax(u),
            this
          );
        });
      var N = encodeURIComponent;
      e.param = function(t, n) {
        var r = [];
        return (
          (r.add = function(t, n) {
            e.isFunction(n) && (n = n()),
              null == n && (n = ""),
              this.push(N(t) + "=" + N(n));
          }),
          O(r, t, n),
          r.join("&").replace(/%20/g, "+")
        );
      };
    })(e),
    (function(t) {
      (t.fn.serializeArray = function() {
        var e,
          n,
          r = [],
          i = function(t) {
            return t.forEach
              ? t.forEach(i)
              : void r.push({ name: e, value: t });
          };
        return (
          this[0] &&
            t.each(this[0].elements, function(r, o) {
              (n = o.type),
                (e = o.name),
                e &&
                  "fieldset" != o.nodeName.toLowerCase() &&
                  !o.disabled &&
                  "submit" != n &&
                  "reset" != n &&
                  "button" != n &&
                  "file" != n &&
                  (("radio" != n && "checkbox" != n) || o.checked) &&
                  i(t(o).val());
            }),
          r
        );
      }),
        (t.fn.serialize = function() {
          var t = [];
          return (
            this.serializeArray().forEach(function(e) {
              t.push(
                encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value)
              );
            }),
            t.join("&")
          );
        }),
        (t.fn.submit = function(e) {
          if (0 in arguments) this.bind("submit", e);
          else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
              n.isDefaultPrevented() || this.get(0).submit();
          }
          return this;
        });
    })(e),
    (function() {
      try {
        getComputedStyle(void 0);
      } catch (e) {
        var n = getComputedStyle;
        t.getComputedStyle = function(t, e) {
          try {
            return n(t, e);
          } catch (r) {
            return null;
          }
        };
      }
    })(),
    e
  );
});
// MD5
(function($) {
  "use strict";

  /*
   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
   * to work around bugs in some JS interpreters.
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  }

  /*
   * Bitwise rotate a 32-bit number to the left.
   */
  function bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  }

  /*
   * These functions implement the four basic operations the algorithm uses.
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }

  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn((b & c) | (~b & d), a, b, x, s, t);
  }

  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  }

  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /*
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(((len + 64) >>> 9) << 4) + 14] = len;

    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;

      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  /*
   * Convert an array of little-endian words to a string
   */
  function binl2rstr(input) {
    var i;
    var output = "";
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> i % 32) & 0xff);
    }
    return output;
  }

  /*
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  }

  /*
   * Calculate the MD5 of a raw string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }

  /*
   * Calculate the HMAC-MD5, of a key and some data (raw strings)
   */
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }

  /*
   * Convert a raw string to a hex string
   */
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef";
    var output = "";
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }

  /*
   * Encode a string as utf-8
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }

  /*
   * Take string arguments and return either raw or hex encoded strings
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }

  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }

  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }

  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  }

  if (typeof define === "function" && define.amd) {
    define(function() {
      return md5;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = md5;
  } else {
    $.md5 = md5;
  }
})(this);
var jyyx_sdk = new Object();
if (!jyyx_sdk) {
  jyyx_sdk = new Object();
}
// 升序排列对象返回新字符串
function objKeySort(obj) {
  //排序的函数
  var newkey = Object.keys(obj).sort();
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newObj = {}; //创建一个新的对象，用于存放排好序的键值对
  for (var i = 0; i < newkey.length; i++) {
    //遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]]; //向新创建的对象中按照排好的顺序依次增加键值对
  }
  var arr = [];
  var str = "";
  for (var i in newObj) {
    // console.log(i + "=" + newObj[i]);
    arr.push(i + "=" + newObj[i]);
  }
  for (let index = 0; index < arr.length; index++) {
    str = str + "&" + arr[index];
  }
  // console.log(arr);
  // 从索引1开始截取
  // console.log(str.substr(1));f
  // return str.substr(1)
  return str; //返回排好序的新字符串
}
// jyyx_sdk.url = "https://sdk.7yol.cn";
jyyx_sdk.url = "http://192.168.1.105:8090";

// 公共参数
jyyx_sdk.CommonParameter = {
  orientation: "", //游戏屏幕方向 1-竖屏 2-横屏 3-无限制
  partner_id: "1", //联运ID，官方安卓使用1，官方iOS用2
  game_id: "", //游戏组ID
  game_pkg: "", //游戏分包名
  ad_code: "", //广告标记
  // build_ver: "",  //应用build版本
  // uuid: "0",  //设备唯一标记，安卓用IMEI，iOS用idfa
  idfv: "0", //vindor标记，安卓为空
  // dname: "Custom%20Phone", // 设备型号
  // mac: "",  //设置物理位置
  // net_type: "",  //网络类型
  // os_ver: "",  //系统版本
  // sdk_ver: "23",  //sdk 版本
  // game_ver: "",   // 游戏版本
  time: new Date().getTime() // 时间戳
  // netserver: "%22WiredSSID%22"  // wifi 名字
};

// 初始化接口
jyyx_sdk.init = function(data, callback) {
  console.log(data);
  if (data.game_id && data.game_pkg) {
    jyyx_sdk.CommonParameter.orientation = data.orientation;
    jyyx_sdk.CommonParameter.game_id = data.game_id;
    jyyx_sdk.CommonParameter.game_pkg = data.game_pkg;
    callback({ code: "1", msg: "初始化成功" });
  } else {
    callback({ code: "0", msg: "传入数据错误" });
  }
};

// 下单接口
jyyx_sdk.payment = function(data, callback) {
  let param = {};
  param.user_id = data.user_id;
  param.token = "PLATFORM_USER_INFO_USERNAME" + data.username;
  param.productid = data.productid;
  param.productname = data.productname;
  param.productdesc = data.productdesc;
  param.price = data.price;
  param.roleid = data.roleid;
  param.rolename = data.rolename;
  param.cpbill = data.cpbill;
  param.extension = data.extension;
  param.serverid = data.serverid;
  param.servername = data.servername;
  param.channel_id = data.channel_id;
  param.apple_product_id = data.apple_product_id;
  param.game_id = jyyx_sdk.CommonParameter.game_id;
  param.game_pkg = jyyx_sdk.CommonParameter.game_pkg;
  param.partner_id = jyyx_sdk.CommonParameter.partner_id;
  param.ad_code = jyyx_sdk.CommonParameter.ad_code;
  console.log(objKeySort(param));
  $.ajax({
    type: "POST",
    url: jyyx_sdk.url + "/pay/?ac=order" + objKeySort(param),
    dataType: "json",
    success: function(res) {
      if (res.state === 1 && res.data.orderType === 2) {
        location.href =
          "https://sdk.7yol.cn/pay?order_id=" +
          res.data.orderId +
          "&pay_channels=" +
          res.data.orderChannel[0].type +
          "," +
          res.data.orderChannel[1].type;
        callback({ code: "1", msg: "调用支付页面成功" });
      } else {
        callback({ code: "0", msg: "调用支付页面失败" });
      }
    }
  });
};
// 登录接口
jyyx_sdk.login = function(callback) {
  callback({ code: "1", msg: "登录成功", state: "1" });
  // if (localStorage.getItem("userInfo")) {
  // } else {
  //   callback({ code: "0", msg: "登录失败" });
  // }
};
// 退出登录接口
jyyx_sdk.logout = function(callback) {
  if (!localStorage.getItem("userInfo")) {
    callback({ code: "1", msg: "退出登录成功" });
  } else {
    callback({ code: "0", msg: "退出登录失败" });
  }
};
// 上传用户日志
jyyx_sdk.uploadLog = function(data, callback) {
  data.user_id = JSON.parse(localStorage.getItem("userInfo")).user_id;
  data.user_name = JSON.parse(localStorage.getItem("userInfo")).user_name;
  $.ajax({
    type: "get",
    url: jyyx_sdk.url + "/partner/h5Log/?" + objKeySort(data).substr(1),
    dataType: "json",
    success: function(res) {
      if (res.state === 1) {
        callback({ code: "1", msg: "上传日志成功" });
      } else {
        callback({ code: "0", msg: "上传日志失败" });
      }
    }
  });
};
