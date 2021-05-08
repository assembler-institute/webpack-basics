/*! For license information please see index.js.LICENSE.txt */
(() => {
  var e = {
      958: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          'html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after{content:"";content:none}q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}body{height:100vh;width:100vw;background-color:#93d1ac;display:flex;align-items:stretch}main{display:flex;flex-direction:column;justify-content:center;align-items:stretch;flex-grow:1}section{width:100%;height:50%;display:flex}.js{flex-grow:1;background-color:#93d1ac}.jq{flex-grow:1;background-color:#ffb612}.p2{flex-grow:1;background-color:#fd5b2a}.p3{flex-grow:1;background-color:#fa9cbe}.p4{flex-grow:1;background-color:#fff}.p1{flex-grow:1;background-color:#8965dd}.btn{background-color:#cd6565;color:#262626;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:16px;font-weight:600;border-radius:15px;padding:5px 20px;border:none;cursor:pointer}header{height:100%;width:80px;background-color:#000;display:flex;padding:20px 15px}.nav-ic{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-weight:600;color:#fff;line-height:18px}',
          "",
        ]);
        const i = o;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var u = [].concat(e[s]);
                (r && o[u[0]]) ||
                  (n &&
                    (u[2]
                      ? (u[2] = "".concat(n, " and ").concat(u[2]))
                      : (u[2] = n)),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      755: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (r, o) {
          "use strict";
          var i = [],
            a = Object.getPrototypeOf,
            s = i.slice,
            u = i.flat
              ? function (e) {
                  return i.flat.call(e);
                }
              : function (e) {
                  return i.concat.apply([], e);
                },
            l = i.push,
            c = i.indexOf,
            f = {},
            p = f.toString,
            d = f.hasOwnProperty,
            h = d.toString,
            g = h.call(Object),
            v = {},
            m = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            x = r.document,
            b = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function w(e, t, n) {
            var r,
              o,
              i = (n = n || x).createElement("script");
            if (((i.text = e), t))
              for (r in b)
                (o = t[r] || (t.getAttribute && t.getAttribute(r))) &&
                  i.setAttribute(r, o);
            n.head.appendChild(i).parentNode.removeChild(i);
          }
          function T(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? f[p.call(e)] || "object"
              : typeof e;
          }
          var C = "3.6.0",
            k = function (e, t) {
              return new k.fn.init(e, t);
            };
          function S(e) {
            var t = !!e && "length" in e && e.length,
              n = T(e);
            return (
              !m(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          (k.fn = k.prototype = {
            jquery: C,
            constructor: k,
            length: 0,
            toArray: function () {
              return s.call(this);
            },
            get: function (e) {
              return null == e
                ? s.call(this)
                : e < 0
                ? this[e + this.length]
                : this[e];
            },
            pushStack: function (e) {
              var t = k.merge(this.constructor(), e);
              return (t.prevObject = this), t;
            },
            each: function (e) {
              return k.each(this, e);
            },
            map: function (e) {
              return this.pushStack(
                k.map(this, function (t, n) {
                  return e.call(t, n, t);
                })
              );
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments));
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            even: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return (t + 1) % 2;
                })
              );
            },
            odd: function () {
              return this.pushStack(
                k.grep(this, function (e, t) {
                  return t % 2;
                })
              );
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
            },
            end: function () {
              return this.prevObject || this.constructor();
            },
            push: l,
            sort: i.sort,
            splice: i.splice,
          }),
            (k.extend = k.fn.extend = function () {
              var e,
                t,
                n,
                r,
                o,
                i,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1;
              for (
                "boolean" == typeof a &&
                  ((l = a), (a = arguments[s] || {}), s++),
                  "object" == typeof a || m(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (r = e[t]),
                      "__proto__" !== t &&
                        a !== r &&
                        (l &&
                        r &&
                        (k.isPlainObject(r) || (o = Array.isArray(r)))
                          ? ((n = a[t]),
                            (i =
                              o && !Array.isArray(n)
                                ? []
                                : o || k.isPlainObject(n)
                                ? n
                                : {}),
                            (o = !1),
                            (a[t] = k.extend(l, i, r)))
                          : void 0 !== r && (a[t] = r));
              return a;
            }),
            k.extend({
              expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== p.call(e) ||
                  ((t = a(e)) &&
                    ("function" !=
                      typeof (n = d.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== g))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                w(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  r = 0;
                if (S(e))
                  for (
                    n = e.length;
                    r < n && !1 !== t.call(e[r], r, e[r]);
                    r++
                  );
                else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
                return e;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (S(Object(e))
                      ? k.merge(n, "string" == typeof e ? [e] : e)
                      : l.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : c.call(t, e, n);
              },
              merge: function (e, t) {
                for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                  e[o++] = t[r];
                return (e.length = o), e;
              },
              grep: function (e, t, n) {
                for (var r = [], o = 0, i = e.length, a = !n; o < i; o++)
                  !t(e[o], o) !== a && r.push(e[o]);
                return r;
              },
              map: function (e, t, n) {
                var r,
                  o,
                  i = 0,
                  a = [];
                if (S(e))
                  for (r = e.length; i < r; i++)
                    null != (o = t(e[i], i, n)) && a.push(o);
                else for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
                return u(a);
              },
              guid: 1,
              support: v,
            }),
            "function" == typeof Symbol &&
              (k.fn[Symbol.iterator] = i[Symbol.iterator]),
            k.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                f["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var E = (function (e) {
            var t,
              n,
              r,
              o,
              i,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              m,
              y,
              x,
              b = "sizzle" + 1 * new Date(),
              w = e.document,
              T = 0,
              C = 0,
              k = ue(),
              S = ue(),
              E = ue(),
              A = ue(),
              N = function (e, t) {
                return e === t && (f = !0), 0;
              },
              j = {}.hasOwnProperty,
              D = [],
              q = D.pop,
              L = D.push,
              H = D.push,
              O = D.slice,
              M = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                  if (e[n] === t) return n;
                return -1;
              },
              R =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P = "[\\x20\\t\\r\\n\\f]",
              I =
                "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              W =
                "\\[[\\x20\\t\\r\\n\\f]*(" +
                I +
                ")(?:" +
                P +
                "*([*^$|!~]?=)" +
                P +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                I +
                "))|)" +
                P +
                "*\\]",
              F =
                ":(" +
                I +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
              B = new RegExp(P + "+", "g"),
              $ = new RegExp(
                "^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$",
                "g"
              ),
              _ = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
              X = new RegExp(
                "^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"
              ),
              z = new RegExp(P + "|>"),
              U = new RegExp(F),
              Y = new RegExp("^" + I + "$"),
              G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp(
                  "^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              V = /HTML$/i,
              Q = /^(?:input|select|textarea|button)$/i,
              Z = /^h\d$/i,
              J = /^[^{]+\{\s*\[native \w/,
              K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              ee = /[+~]/,
              te = new RegExp(
                "\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
              oe = function (e, t) {
                return t
                  ? "\0" === e
                    ? "�"
                    : e.slice(0, -1) +
                      "\\" +
                      e.charCodeAt(e.length - 1).toString(16) +
                      " "
                  : "\\" + e;
              },
              ie = function () {
                p();
              },
              ae = be(
                function (e) {
                  return (
                    !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                  );
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              H.apply((D = O.call(w.childNodes)), w.childNodes),
                D[w.childNodes.length].nodeType;
            } catch (e) {
              H = {
                apply: D.length
                  ? function (e, t) {
                      L.apply(e, O.call(t));
                    }
                  : function (e, t) {
                      for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                      e.length = n - 1;
                    },
              };
            }
            function se(e, t, r, o) {
              var i,
                s,
                l,
                c,
                f,
                h,
                m,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
              if (
                ((r = r || []),
                "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
              )
                return r;
              if (!o && (p(t), (t = t || d), g)) {
                if (11 !== w && (f = K.exec(e)))
                  if ((i = f[1])) {
                    if (9 === w) {
                      if (!(l = t.getElementById(i))) return r;
                      if (l.id === i) return r.push(l), r;
                    } else if (
                      y &&
                      (l = y.getElementById(i)) &&
                      x(t, l) &&
                      l.id === i
                    )
                      return r.push(l), r;
                  } else {
                    if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                    if (
                      (i = f[3]) &&
                      n.getElementsByClassName &&
                      t.getElementsByClassName
                    )
                      return H.apply(r, t.getElementsByClassName(i)), r;
                  }
                if (
                  n.qsa &&
                  !A[e + " "] &&
                  (!v || !v.test(e)) &&
                  (1 !== w || "object" !== t.nodeName.toLowerCase())
                ) {
                  if (((m = e), (y = t), 1 === w && (z.test(e) || X.test(e)))) {
                    for (
                      ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                        n.scope) ||
                        ((c = t.getAttribute("id"))
                          ? (c = c.replace(re, oe))
                          : t.setAttribute("id", (c = b))),
                        s = (h = a(e)).length;
                      s--;

                    )
                      h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                    m = h.join(",");
                  }
                  try {
                    return H.apply(r, y.querySelectorAll(m)), r;
                  } catch (t) {
                    A(e, !0);
                  } finally {
                    c === b && t.removeAttribute("id");
                  }
                }
              }
              return u(e.replace($, "$1"), t, r, o);
            }
            function ue() {
              var e = [];
              return function t(n, o) {
                return (
                  e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                  (t[n + " "] = o)
                );
              };
            }
            function le(e) {
              return (e[b] = !0), e;
            }
            function ce(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function fe(e, t) {
              for (var n = e.split("|"), o = n.length; o--; )
                r.attrHandle[n[o]] = t;
            }
            function pe(e, t) {
              var n = t && e,
                r =
                  n &&
                  1 === e.nodeType &&
                  1 === t.nodeType &&
                  e.sourceIndex - t.sourceIndex;
              if (r) return r;
              if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
              return e ? 1 : -1;
            }
            function de(e) {
              return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
              };
            }
            function he(e) {
              return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
              };
            }
            function ge(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && ae(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ve(e) {
              return le(function (t) {
                return (
                  (t = +t),
                  le(function (n, r) {
                    for (var o, i = e([], n.length, t), a = i.length; a--; )
                      n[(o = i[a])] && (n[o] = !(r[o] = n[o]));
                  })
                );
              });
            }
            function me(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            for (t in ((n = se.support = {}),
            (i = se.isXML = function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement;
              return !V.test(t || (n && n.nodeName) || "HTML");
            }),
            (p = se.setDocument = function (e) {
              var t,
                o,
                a = e ? e.ownerDocument || e : w;
              return a != d && 9 === a.nodeType && a.documentElement
                ? ((h = (d = a).documentElement),
                  (g = !i(d)),
                  w != d &&
                    (o = d.defaultView) &&
                    o.top !== o &&
                    (o.addEventListener
                      ? o.addEventListener("unload", ie, !1)
                      : o.attachEvent && o.attachEvent("onunload", ie)),
                  (n.scope = ce(function (e) {
                    return (
                      h.appendChild(e).appendChild(d.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = J.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            o,
                            i = t.getElementById(e);
                          if (i) {
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                              return [i];
                            for (
                              o = t.getElementsByName(e), r = 0;
                              (i = o[r++]);

                            )
                              if (
                                (n = i.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [i];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          o = 0,
                          i = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return i;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = J.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length ||
                          v.push("~="),
                        (t = d.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = J.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", F);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = J.test(h.compareDocumentPosition)),
                  (x =
                    t || J.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (N = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == d || (e.ownerDocument == w && x(w, e))
                              ? -1
                              : t == d || (t.ownerDocument == w && x(w, t))
                              ? 1
                              : c
                              ? M(c, e) - M(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          o = e.parentNode,
                          i = t.parentNode,
                          a = [e],
                          s = [t];
                        if (!o || !i)
                          return e == d
                            ? -1
                            : t == d
                            ? 1
                            : o
                            ? -1
                            : i
                            ? 1
                            : c
                            ? M(c, e) - M(c, t)
                            : 0;
                        if (o === i) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) a.unshift(n);
                        for (n = t; (n = n.parentNode); ) s.unshift(n);
                        for (; a[r] === s[r]; ) r++;
                        return r
                          ? pe(a[r], s[r])
                          : a[r] == w
                          ? -1
                          : s[r] == w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
            (se.matches = function (e, t) {
              return se(e, null, null, t);
            }),
            (se.matchesSelector = function (e, t) {
              if (
                (p(e),
                n.matchesSelector &&
                  g &&
                  !A[t + " "] &&
                  (!m || !m.test(t)) &&
                  (!v || !v.test(t)))
              )
                try {
                  var r = y.call(e, t);
                  if (
                    r ||
                    n.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return r;
                } catch (e) {
                  A(t, !0);
                }
              return se(t, d, null, [e]).length > 0;
            }),
            (se.contains = function (e, t) {
              return (e.ownerDocument || e) != d && p(e), x(e, t);
            }),
            (se.attr = function (e, t) {
              (e.ownerDocument || e) != d && p(e);
              var o = r.attrHandle[t.toLowerCase()],
                i =
                  o && j.call(r.attrHandle, t.toLowerCase())
                    ? o(e, t, !g)
                    : void 0;
              return void 0 !== i
                ? i
                : n.attributes || !g
                ? e.getAttribute(t)
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
            }),
            (se.escape = function (e) {
              return (e + "").replace(re, oe);
            }),
            (se.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (se.uniqueSort = function (e) {
              var t,
                r = [],
                o = 0,
                i = 0;
              if (
                ((f = !n.detectDuplicates),
                (c = !n.sortStable && e.slice(0)),
                e.sort(N),
                f)
              ) {
                for (; (t = e[i++]); ) t === e[i] && (o = r.push(i));
                for (; o--; ) e.splice(r[o], 1);
              }
              return (c = null), e;
            }),
            (o = se.getText = function (e) {
              var t,
                n = "",
                r = 0,
                i = e.nodeType;
              if (i) {
                if (1 === i || 9 === i || 11 === i) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += o(t);
              return n;
            }),
            ((r = se.selectors = {
              cacheLength: 50,
              createPseudo: le,
              match: G,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || se.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && se.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return G.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          U.test(n) &&
                          (t = a(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = k[e + " "];
                  return (
                    t ||
                    ((t = new RegExp(
                      "(^|[\\x20\\t\\r\\n\\f])" + e + "(" + P + "|$)"
                    )) &&
                      k(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var o = se.attr(r, e);
                    return null == o
                      ? "!=" === t
                      : !t ||
                          ((o += ""),
                          "=" === t
                            ? o === n
                            : "!=" === t
                            ? o !== n
                            : "^=" === t
                            ? n && 0 === o.indexOf(n)
                            : "*=" === t
                            ? n && o.indexOf(n) > -1
                            : "$=" === t
                            ? n && o.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + o.replace(B, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (o === n ||
                                o.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, o) {
                  var i = "nth" !== e.slice(0, 3),
                    a = "last" !== e.slice(-4),
                    s = "of-type" === t;
                  return 1 === r && 0 === o
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = i !== a ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = s && t.nodeName.toLowerCase(),
                          y = !u && !s,
                          x = !1;
                        if (v) {
                          if (i) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  s
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [a ? v.firstChild : v.lastChild]), a && y)
                          ) {
                            for (
                              x =
                                (d =
                                  (l =
                                    (c =
                                      (f = (p = v)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && l[1]) && l[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (y &&
                              (x = d =
                                (l =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && l[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                              ((s
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++x ||
                                (y &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t));

                            );
                          return (x -= o) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    o =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      se.error("unsupported pseudo: " + e);
                  return o[b]
                    ? o(t)
                    : o.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? le(function (e, n) {
                            for (var r, i = o(e, t), a = i.length; a--; )
                              e[(r = M(e, i[a]))] = !(n[r] = i[a]);
                          })
                        : function (e) {
                            return o(e, 0, n);
                          })
                    : o;
                },
              },
              pseudos: {
                not: le(function (e) {
                  var t = [],
                    n = [],
                    r = s(e.replace($, "$1"));
                  return r[b]
                    ? le(function (e, t, n, o) {
                        for (var i, a = r(e, null, o, []), s = e.length; s--; )
                          (i = a[s]) && (e[s] = !(t[s] = i));
                      })
                    : function (e, o, i) {
                        return (
                          (t[0] = e), r(t, null, i, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: le(function (e) {
                  return function (t) {
                    return se(e, t).length > 0;
                  };
                }),
                contains: le(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || o(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: le(function (e) {
                  return (
                    Y.test(e || "") || se.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return Z.test(e.nodeName);
                },
                input: function (e) {
                  return Q.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              r.pseudos[t] = de(t);
            for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
            function ye() {}
            function xe(e) {
              for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
              return r;
            }
            function be(e, t, n) {
              var r = t.dir,
                o = t.next,
                i = o || r,
                a = n && "parentNode" === i,
                s = C++;
              return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a) return e(t, n, o);
                    return !1;
                  }
                : function (t, n, u) {
                    var l,
                      c,
                      f,
                      p = [T, s];
                    if (u) {
                      for (; (t = t[r]); )
                        if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
                    } else
                      for (; (t = t[r]); )
                        if (1 === t.nodeType || a)
                          if (
                            ((c =
                              (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                              (f[t.uniqueID] = {})),
                            o && o === t.nodeName.toLowerCase())
                          )
                            t = t[r] || t;
                          else {
                            if ((l = c[i]) && l[0] === T && l[1] === s)
                              return (p[2] = l[2]);
                            if (((c[i] = p), (p[2] = e(t, n, u)))) return !0;
                          }
                    return !1;
                  };
            }
            function we(e) {
              return e.length > 1
                ? function (t, n, r) {
                    for (var o = e.length; o--; ) if (!e[o](t, n, r)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function Te(e, t, n, r, o) {
              for (
                var i, a = [], s = 0, u = e.length, l = null != t;
                s < u;
                s++
              )
                (i = e[s]) &&
                  ((n && !n(i, r, o)) || (a.push(i), l && t.push(s)));
              return a;
            }
            function Ce(e, t, n, r, o, i) {
              return (
                r && !r[b] && (r = Ce(r)),
                o && !o[b] && (o = Ce(o, i)),
                le(function (i, a, s, u) {
                  var l,
                    c,
                    f,
                    p = [],
                    d = [],
                    h = a.length,
                    g =
                      i ||
                      (function (e, t, n) {
                        for (var r = 0, o = t.length; r < o; r++)
                          se(e, t[r], n);
                        return n;
                      })(t || "*", s.nodeType ? [s] : s, []),
                    v = !e || (!i && t) ? g : Te(g, p, e, s, u),
                    m = n ? (o || (i ? e : h || r) ? [] : a) : v;
                  if ((n && n(v, m, s, u), r))
                    for (l = Te(m, d), r(l, [], s, u), c = l.length; c--; )
                      (f = l[c]) && (m[d[c]] = !(v[d[c]] = f));
                  if (i) {
                    if (o || e) {
                      if (o) {
                        for (l = [], c = m.length; c--; )
                          (f = m[c]) && l.push((v[c] = f));
                        o(null, (m = []), l, u);
                      }
                      for (c = m.length; c--; )
                        (f = m[c]) &&
                          (l = o ? M(i, f) : p[c]) > -1 &&
                          (i[l] = !(a[l] = f));
                    }
                  } else (m = Te(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, u) : H.apply(a, m);
                })
              );
            }
            function ke(e) {
              for (
                var t,
                  n,
                  o,
                  i = e.length,
                  a = r.relative[e[0].type],
                  s = a || r.relative[" "],
                  u = a ? 1 : 0,
                  c = be(
                    function (e) {
                      return e === t;
                    },
                    s,
                    !0
                  ),
                  f = be(
                    function (e) {
                      return M(t, e) > -1;
                    },
                    s,
                    !0
                  ),
                  p = [
                    function (e, n, r) {
                      var o =
                        (!a && (r || n !== l)) ||
                        ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                      return (t = null), o;
                    },
                  ];
                u < i;
                u++
              )
                if ((n = r.relative[e[u].type])) p = [be(we(p), n)];
                else {
                  if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
                    for (o = ++u; o < i && !r.relative[e[o].type]; o++);
                    return Ce(
                      u > 1 && we(p),
                      u > 1 &&
                        xe(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace($, "$1"),
                      n,
                      u < o && ke(e.slice(u, o)),
                      o < i && ke((e = e.slice(o))),
                      o < i && xe(e)
                    );
                  }
                  p.push(n);
                }
              return we(p);
            }
            return (
              (ye.prototype = r.filters = r.pseudos),
              (r.setFilters = new ye()),
              (a = se.tokenize = function (e, t) {
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c = S[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, u = [], l = r.preFilter; s; ) {
                  for (a in ((n && !(o = _.exec(s))) ||
                    (o && (s = s.slice(o[0].length) || s), u.push((i = []))),
                  (n = !1),
                  (o = X.exec(s)) &&
                    ((n = o.shift()),
                    i.push({ value: n, type: o[0].replace($, " ") }),
                    (s = s.slice(n.length))),
                  r.filter))
                    !(o = G[a].exec(s)) ||
                      (l[a] && !(o = l[a](o))) ||
                      ((n = o.shift()),
                      i.push({ value: n, type: a, matches: o }),
                      (s = s.slice(n.length)));
                  if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : S(e, u).slice(0);
              }),
              (s = se.compile = function (e, t) {
                var n,
                  o = [],
                  i = [],
                  s = E[e + " "];
                if (!s) {
                  for (t || (t = a(e)), n = t.length; n--; )
                    (s = ke(t[n]))[b] ? o.push(s) : i.push(s);
                  (s = E(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        o = e.length > 0,
                        i = function (i, a, s, u, c) {
                          var f,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            x = i && [],
                            b = [],
                            w = l,
                            C = i || (o && r.find.TAG("*", c)),
                            k = (T += null == w ? 1 : Math.random() || 0.1),
                            S = C.length;
                          for (
                            c && (l = a == d || a || c);
                            y !== S && null != (f = C[y]);
                            y++
                          ) {
                            if (o && f) {
                              for (
                                h = 0,
                                  a || f.ownerDocument == d || (p(f), (s = !g));
                                (v = e[h++]);

                              )
                                if (v(f, a || d, s)) {
                                  u.push(f);
                                  break;
                                }
                              c && (T = k);
                            }
                            n && ((f = !v && f) && m--, i && x.push(f));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (v = t[h++]); ) v(x, b, a, s);
                            if (i) {
                              if (m > 0)
                                for (; y--; )
                                  x[y] || b[y] || (b[y] = q.call(u));
                              b = Te(b);
                            }
                            H.apply(u, b),
                              c &&
                                !i &&
                                b.length > 0 &&
                                m + t.length > 1 &&
                                se.uniqueSort(u);
                          }
                          return c && ((T = k), (l = w)), x;
                        };
                      return n ? le(i) : i;
                    })(i, o)
                  )).selector = e;
                }
                return s;
              }),
              (u = se.select = function (e, t, n, o) {
                var i,
                  u,
                  l,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !o && a((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (u = d[0] = d[0].slice(0)).length > 2 &&
                    "ID" === (l = u[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[u[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(l.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(u.shift().value.length));
                  }
                  for (
                    i = G.needsContext.test(e) ? 0 : u.length;
                    i-- && ((l = u[i]), !r.relative[(c = l.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (o = f(
                        l.matches[0].replace(te, ne),
                        (ee.test(u[0].type) && me(t.parentNode)) || t
                      ))
                    ) {
                      if ((u.splice(i, 1), !(e = o.length && xe(u))))
                        return H.apply(n, o), n;
                      break;
                    }
                }
                return (
                  (p || s(e, d))(
                    o,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && me(t.parentNode)) || t
                  ),
                  n
                );
              }),
              (n.sortStable = b.split("").sort(N).join("") === b),
              (n.detectDuplicates = !!f),
              p(),
              (n.sortDetached = ce(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              ce(function (e) {
                return (
                  (e.innerHTML = "<a href='#'></a>"),
                  "#" === e.firstChild.getAttribute("href")
                );
              }) ||
                fe("type|href|height|width", function (e, t, n) {
                  if (!n)
                    return e.getAttribute(
                      t,
                      "type" === t.toLowerCase() ? 1 : 2
                    );
                }),
              (n.attributes &&
                ce(function (e) {
                  return (
                    (e.innerHTML = "<input/>"),
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
                  );
                })) ||
                fe("value", function (e, t, n) {
                  if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue;
                }),
              ce(function (e) {
                return null == e.getAttribute("disabled");
              }) ||
                fe(R, function (e, t, n) {
                  var r;
                  if (!n)
                    return !0 === e[t]
                      ? t.toLowerCase()
                      : (r = e.getAttributeNode(t)) && r.specified
                      ? r.value
                      : null;
                }),
              se
            );
          })(r);
          (k.find = E),
            (k.expr = E.selectors),
            (k.expr[":"] = k.expr.pseudos),
            (k.uniqueSort = k.unique = E.uniqueSort),
            (k.text = E.getText),
            (k.isXMLDoc = E.isXML),
            (k.contains = E.contains),
            (k.escapeSelector = E.escape);
          var A = function (e, t, n) {
              for (
                var r = [], o = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (o && k(e).is(n)) break;
                  r.push(e);
                }
              return r;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            j = k.expr.match.needsContext;
          function D(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function L(e, t, n) {
            return m(t)
              ? k.grep(e, function (e, r) {
                  return !!t.call(e, r, e) !== n;
                })
              : t.nodeType
              ? k.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? k.grep(e, function (e) {
                  return c.call(t, e) > -1 !== n;
                })
              : k.filter(t, e, n);
          }
          (k.filter = function (e, t, n) {
            var r = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === r.nodeType
                ? k.find.matchesSelector(r, e)
                  ? [r]
                  : []
                : k.find.matches(
                    e,
                    k.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            k.fn.extend({
              find: function (e) {
                var t,
                  n,
                  r = this.length,
                  o = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    k(e).filter(function () {
                      for (t = 0; t < r; t++)
                        if (k.contains(o[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < r; t++)
                  k.find(e, o[t], n);
                return r > 1 ? k.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(L(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(L(this, e || [], !0));
              },
              is: function (e) {
                return !!L(
                  this,
                  "string" == typeof e && j.test(e) ? k(e) : e || [],
                  !1
                ).length;
              },
            });
          var H,
            O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((k.fn.init = function (e, t, n) {
            var r, o;
            if (!e) return this;
            if (((n = n || H), "string" == typeof e)) {
              if (
                !(r =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : O.exec(e)) ||
                (!r[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (r[1]) {
                if (
                  ((t = t instanceof k ? t[0] : t),
                  k.merge(
                    this,
                    k.parseHTML(
                      r[1],
                      t && t.nodeType ? t.ownerDocument || t : x,
                      !0
                    )
                  ),
                  q.test(r[1]) && k.isPlainObject(t))
                )
                  for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
              }
              return (
                (o = x.getElementById(r[2])) &&
                  ((this[0] = o), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : m(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(k)
              : k.makeArray(e, this);
          }).prototype = k.fn),
            (H = k(x));
          var M = /^(?:parents|prev(?:Until|All))/,
            R = { children: !0, contents: !0, next: !0, prev: !0 };
          function P(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          k.fn.extend({
            has: function (e) {
              var t = k(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (k.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && k(e);
              if (!j.test(e))
                for (; r < o; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (a
                        ? a.index(n) > -1
                        : 1 === n.nodeType && k.find.matchesSelector(n, e))
                    ) {
                      i.push(n);
                      break;
                    }
              return this.pushStack(i.length > 1 ? k.uniqueSort(i) : i);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? c.call(k(e), this[0])
                  : c.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            k.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return A(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return A(e, "parentNode", n);
                },
                next: function (e) {
                  return P(e, "nextSibling");
                },
                prev: function (e) {
                  return P(e, "previousSibling");
                },
                nextAll: function (e) {
                  return A(e, "nextSibling");
                },
                prevAll: function (e) {
                  return A(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return A(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return A(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && a(e.contentDocument)
                    ? e.contentDocument
                    : (D(e, "template") && (e = e.content || e),
                      k.merge([], e.childNodes));
                },
              },
              function (e, t) {
                k.fn[e] = function (n, r) {
                  var o = k.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (r = n),
                    r && "string" == typeof r && (o = k.filter(r, o)),
                    this.length > 1 &&
                      (R[e] || k.uniqueSort(o), M.test(e) && o.reverse()),
                    this.pushStack(o)
                  );
                };
              }
            );
          var I = /[^\x20\t\r\n\f]+/g;
          function W(e) {
            return e;
          }
          function F(e) {
            throw e;
          }
          function B(e, t, n, r) {
            var o;
            try {
              e && m((o = e.promise))
                ? o.call(e).done(t).fail(n)
                : e && m((o = e.then))
                ? o.call(e, t, n)
                : t.apply(void 0, [e].slice(r));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (k.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      k.each(e.match(I) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : k.extend({}, e);
            var t,
              n,
              r,
              o,
              i = [],
              a = [],
              s = -1,
              u = function () {
                for (o = o || e.once, r = t = !0; a.length; s = -1)
                  for (n = a.shift(); ++s < i.length; )
                    !1 === i[s].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((s = i.length), (n = !1));
                e.memory || (n = !1), (t = !1), o && (i = n ? [] : "");
              },
              l = {
                add: function () {
                  return (
                    i &&
                      (n && !t && ((s = i.length - 1), a.push(n)),
                      (function t(n) {
                        k.each(n, function (n, r) {
                          m(r)
                            ? (e.unique && l.has(r)) || i.push(r)
                            : r && r.length && "string" !== T(r) && t(r);
                        });
                      })(arguments),
                      n && !t && u()),
                    this
                  );
                },
                remove: function () {
                  return (
                    k.each(arguments, function (e, t) {
                      for (var n; (n = k.inArray(t, i, n)) > -1; )
                        i.splice(n, 1), n <= s && s--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? k.inArray(e, i) > -1 : i.length > 0;
                },
                empty: function () {
                  return i && (i = []), this;
                },
                disable: function () {
                  return (o = a = []), (i = n = ""), this;
                },
                disabled: function () {
                  return !i;
                },
                lock: function () {
                  return (o = a = []), n || t || (i = n = ""), this;
                },
                locked: function () {
                  return !!o;
                },
                fireWith: function (e, n) {
                  return (
                    o ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      a.push(n),
                      t || u()),
                    this
                  );
                },
                fire: function () {
                  return l.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!r;
                },
              };
            return l;
          }),
            k.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      k.Callbacks("memory"),
                      k.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      k.Callbacks("once memory"),
                      k.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  o = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return i.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return o.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return k
                        .Deferred(function (n) {
                          k.each(t, function (t, r) {
                            var o = m(e[r[4]]) && e[r[4]];
                            i[r[1]](function () {
                              var e = o && o.apply(this, arguments);
                              e && m(e.promise)
                                ? e
                                    .promise()
                                    .progress(n.notify)
                                    .done(n.resolve)
                                    .fail(n.reject)
                                : n[r[0] + "With"](this, o ? [e] : arguments);
                            });
                          }),
                            (e = null);
                        })
                        .promise();
                    },
                    then: function (e, n, o) {
                      var i = 0;
                      function a(e, t, n, o) {
                        return function () {
                          var s = this,
                            u = arguments,
                            l = function () {
                              var r, l;
                              if (!(e < i)) {
                                if ((r = n.apply(s, u)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (l =
                                  r &&
                                  ("object" == typeof r ||
                                    "function" == typeof r) &&
                                  r.then),
                                  m(l)
                                    ? o
                                      ? l.call(r, a(i, t, W, o), a(i, t, F, o))
                                      : (i++,
                                        l.call(
                                          r,
                                          a(i, t, W, o),
                                          a(i, t, F, o),
                                          a(i, t, W, t.notifyWith)
                                        ))
                                    : (n !== W && ((s = void 0), (u = [r])),
                                      (o || t.resolveWith)(s, u));
                              }
                            },
                            c = o
                              ? l
                              : function () {
                                  try {
                                    l();
                                  } catch (r) {
                                    k.Deferred.exceptionHook &&
                                      k.Deferred.exceptionHook(r, c.stackTrace),
                                      e + 1 >= i &&
                                        (n !== F && ((s = void 0), (u = [r])),
                                        t.rejectWith(s, u));
                                  }
                                };
                          e
                            ? c()
                            : (k.Deferred.getStackHook &&
                                (c.stackTrace = k.Deferred.getStackHook()),
                              r.setTimeout(c));
                        };
                      }
                      return k
                        .Deferred(function (r) {
                          t[0][3].add(a(0, r, m(o) ? o : W, r.notifyWith)),
                            t[1][3].add(a(0, r, m(e) ? e : W)),
                            t[2][3].add(a(0, r, m(n) ? n : F));
                        })
                        .promise();
                    },
                    promise: function (e) {
                      return null != e ? k.extend(e, o) : o;
                    },
                  },
                  i = {};
                return (
                  k.each(t, function (e, r) {
                    var a = r[2],
                      s = r[5];
                    (o[r[1]] = a.add),
                      s &&
                        a.add(
                          function () {
                            n = s;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      a.add(r[3].fire),
                      (i[r[0]] = function () {
                        return (
                          i[r[0] + "With"](
                            this === i ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (i[r[0] + "With"] = a.fireWith);
                  }),
                  o.promise(i),
                  e && e.call(i, i),
                  i
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  r = Array(n),
                  o = s.call(arguments),
                  i = k.Deferred(),
                  a = function (e) {
                    return function (n) {
                      (r[e] = this),
                        (o[e] = arguments.length > 1 ? s.call(arguments) : n),
                        --t || i.resolveWith(r, o);
                    };
                  };
                if (
                  t <= 1 &&
                  (B(e, i.done(a(n)).resolve, i.reject, !t),
                  "pending" === i.state() || m(o[n] && o[n].then))
                )
                  return i.then();
                for (; n--; ) B(o[n], a(n), i.reject);
                return i.promise();
              },
            });
          var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (k.Deferred.exceptionHook = function (e, t) {
            r.console &&
              r.console.warn &&
              e &&
              $.test(e.name) &&
              r.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (k.readyException = function (e) {
              r.setTimeout(function () {
                throw e;
              });
            });
          var _ = k.Deferred();
          function X() {
            x.removeEventListener("DOMContentLoaded", X),
              r.removeEventListener("load", X),
              k.ready();
          }
          (k.fn.ready = function (e) {
            return (
              _.then(e).catch(function (e) {
                k.readyException(e);
              }),
              this
            );
          }),
            k.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --k.readyWait : k.isReady) ||
                  ((k.isReady = !0),
                  (!0 !== e && --k.readyWait > 0) || _.resolveWith(x, [k]));
              },
            }),
            (k.ready.then = _.then),
            "complete" === x.readyState ||
            ("loading" !== x.readyState && !x.documentElement.doScroll)
              ? r.setTimeout(k.ready)
              : (x.addEventListener("DOMContentLoaded", X),
                r.addEventListener("load", X));
          var z = function (e, t, n, r, o, i, a) {
              var s = 0,
                u = e.length,
                l = null == n;
              if ("object" === T(n))
                for (s in ((o = !0), n)) z(e, t, s, n[s], !0, i, a);
              else if (
                void 0 !== r &&
                ((o = !0),
                m(r) || (a = !0),
                l &&
                  (a
                    ? (t.call(e, r), (t = null))
                    : ((l = t),
                      (t = function (e, t, n) {
                        return l.call(k(e), n);
                      }))),
                t)
              )
                for (; s < u; s++)
                  t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
              return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
            },
            U = /^-ms-/,
            Y = /-([a-z])/g;
          function G(e, t) {
            return t.toUpperCase();
          }
          function V(e) {
            return e.replace(U, "ms-").replace(Y, G);
          }
          var Q = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function Z() {
            this.expando = k.expando + Z.uid++;
          }
          (Z.uid = 1),
            (Z.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    Q(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var r,
                  o = this.cache(e);
                if ("string" == typeof t) o[V(t)] = n;
                else for (r in t) o[V(r)] = t[r];
                return o;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][V(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  r = e[this.expando];
                if (void 0 !== r) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(V)
                      : (t = V(t)) in r
                      ? [t]
                      : t.match(I) || []).length;
                    for (; n--; ) delete r[t[n]];
                  }
                  (void 0 === t || k.isEmptyObject(r)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !k.isEmptyObject(t);
              },
            });
          var J = new Z(),
            K = new Z(),
            ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            te = /[A-Z]/g;
          function ne(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((r = "data-" + t.replace(te, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(r)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ee.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                K.set(e, t, n);
              } else n = void 0;
            return n;
          }
          k.extend({
            hasData: function (e) {
              return K.hasData(e) || J.hasData(e);
            },
            data: function (e, t, n) {
              return K.access(e, t, n);
            },
            removeData: function (e, t) {
              K.remove(e, t);
            },
            _data: function (e, t, n) {
              return J.access(e, t, n);
            },
            _removeData: function (e, t) {
              J.remove(e, t);
            },
          }),
            k.fn.extend({
              data: function (e, t) {
                var n,
                  r,
                  o,
                  i = this[0],
                  a = i && i.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((o = K.get(i)),
                    1 === i.nodeType && !J.get(i, "hasDataAttrs"))
                  ) {
                    for (n = a.length; n--; )
                      a[n] &&
                        0 === (r = a[n].name).indexOf("data-") &&
                        ((r = V(r.slice(5))), ne(i, r, o[r]));
                    J.set(i, "hasDataAttrs", !0);
                  }
                  return o;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      K.set(this, e);
                    })
                  : z(
                      this,
                      function (t) {
                        var n;
                        if (i && void 0 === t)
                          return void 0 !== (n = K.get(i, e)) ||
                            void 0 !== (n = ne(i, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          K.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  K.remove(this, e);
                });
              },
            }),
            k.extend({
              queue: function (e, t, n) {
                var r;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (r = J.get(e, t)),
                    n &&
                      (!r || Array.isArray(n)
                        ? (r = J.access(e, t, k.makeArray(n)))
                        : r.push(n)),
                    r || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = k.queue(e, t),
                  r = n.length,
                  o = n.shift(),
                  i = k._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), r--),
                  o &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete i.stop,
                    o.call(
                      e,
                      function () {
                        k.dequeue(e, t);
                      },
                      i
                    )),
                  !r && i && i.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  J.get(e, n) ||
                  J.access(e, n, {
                    empty: k.Callbacks("once memory").add(function () {
                      J.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            k.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? k.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = k.queue(this, e, t);
                        k._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            k.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  k.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  r = 1,
                  o = k.Deferred(),
                  i = this,
                  a = this.length,
                  s = function () {
                    --r || o.resolveWith(i, [i]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  a--;

                )
                  (n = J.get(i[a], e + "queueHooks")) &&
                    n.empty &&
                    (r++, n.empty.add(s));
                return s(), o.promise(t);
              },
            });
          var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            oe = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"),
            ie = ["Top", "Right", "Bottom", "Left"],
            ae = x.documentElement,
            se = function (e) {
              return k.contains(e.ownerDocument, e);
            },
            ue = { composed: !0 };
          ae.getRootNode &&
            (se = function (e) {
              return (
                k.contains(e.ownerDocument, e) ||
                e.getRootNode(ue) === e.ownerDocument
              );
            });
          var le = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                se(e) &&
                "none" === k.css(e, "display"))
            );
          };
          function ce(e, t, n, r) {
            var o,
              i,
              a = 20,
              s = r
                ? function () {
                    return r.cur();
                  }
                : function () {
                    return k.css(e, t, "");
                  },
              u = s(),
              l = (n && n[3]) || (k.cssNumber[t] ? "" : "px"),
              c =
                e.nodeType &&
                (k.cssNumber[t] || ("px" !== l && +u)) &&
                oe.exec(k.css(e, t));
            if (c && c[3] !== l) {
              for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                k.style(e, t, c + l),
                  (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 && (a = 0),
                  (c /= i);
              (c *= 2), k.style(e, t, c + l), (n = n || []);
            }
            return (
              n &&
                ((c = +c || +u || 0),
                (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = o))),
              o
            );
          }
          var fe = {};
          function pe(e) {
            var t,
              n = e.ownerDocument,
              r = e.nodeName,
              o = fe[r];
            return (
              o ||
              ((t = n.body.appendChild(n.createElement(r))),
              (o = k.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === o && (o = "block"),
              (fe[r] = o),
              o)
            );
          }
          function de(e, t) {
            for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
              (r = e[i]).style &&
                ((n = r.style.display),
                t
                  ? ("none" === n &&
                      ((o[i] = J.get(r, "display") || null),
                      o[i] || (r.style.display = "")),
                    "" === r.style.display && le(r) && (o[i] = pe(r)))
                  : "none" !== n && ((o[i] = "none"), J.set(r, "display", n)));
            for (i = 0; i < a; i++) null != o[i] && (e[i].style.display = o[i]);
            return e;
          }
          k.fn.extend({
            show: function () {
              return de(this, !0);
            },
            hide: function () {
              return de(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    le(this) ? k(this).show() : k(this).hide();
                  });
            },
          });
          var he,
            ge,
            ve = /^(?:checkbox|radio)$/i,
            me = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            ye = /^$|^module$|\/(?:java|ecma)script/i;
          (he = x.createDocumentFragment().appendChild(x.createElement("div"))),
            (ge = x.createElement("input")).setAttribute("type", "radio"),
            ge.setAttribute("checked", "checked"),
            ge.setAttribute("name", "t"),
            he.appendChild(ge),
            (v.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (he.innerHTML = "<textarea>x</textarea>"),
            (v.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
            (he.innerHTML = "<option></option>"),
            (v.option = !!he.lastChild);
          var xe = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function be(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && D(e, t)) ? k.merge([e], n) : n
            );
          }
          function we(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
          }
          (xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead),
            (xe.th = xe.td),
            v.option ||
              (xe.optgroup = xe.option = [
                1,
                "<select multiple='multiple'>",
                "</select>",
              ]);
          var Te = /<|&#?\w+;/;
          function Ce(e, t, n, r, o) {
            for (
              var i,
                a,
                s,
                u,
                l,
                c,
                f = t.createDocumentFragment(),
                p = [],
                d = 0,
                h = e.length;
              d < h;
              d++
            )
              if ((i = e[d]) || 0 === i)
                if ("object" === T(i)) k.merge(p, i.nodeType ? [i] : i);
                else if (Te.test(i)) {
                  for (
                    a = a || f.appendChild(t.createElement("div")),
                      s = (me.exec(i) || ["", ""])[1].toLowerCase(),
                      u = xe[s] || xe._default,
                      a.innerHTML = u[1] + k.htmlPrefilter(i) + u[2],
                      c = u[0];
                    c--;

                  )
                    a = a.lastChild;
                  k.merge(p, a.childNodes),
                    ((a = f.firstChild).textContent = "");
                } else p.push(t.createTextNode(i));
            for (f.textContent = "", d = 0; (i = p[d++]); )
              if (r && k.inArray(i, r) > -1) o && o.push(i);
              else if (
                ((l = se(i)),
                (a = be(f.appendChild(i), "script")),
                l && we(a),
                n)
              )
                for (c = 0; (i = a[c++]); ) ye.test(i.type || "") && n.push(i);
            return f;
          }
          var ke = /^([^.]*)(?:\.(.+)|)/;
          function Se() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function Ae(e, t) {
            return (
              (e ===
                (function () {
                  try {
                    return x.activeElement;
                  } catch (e) {}
                })()) ==
              ("focus" === t)
            );
          }
          function Ne(e, t, n, r, o, i) {
            var a, s;
            if ("object" == typeof t) {
              for (s in ("string" != typeof n && ((r = r || n), (n = void 0)),
              t))
                Ne(e, s, n, r, t[s], i);
              return e;
            }
            if (
              (null == r && null == o
                ? ((o = n), (r = n = void 0))
                : null == o &&
                  ("string" == typeof n
                    ? ((o = r), (r = void 0))
                    : ((o = r), (r = n), (n = void 0))),
              !1 === o)
            )
              o = Ee;
            else if (!o) return e;
            return (
              1 === i &&
                ((a = o),
                ((o = function (e) {
                  return k().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = k.guid++))),
              e.each(function () {
                k.event.add(this, t, o, r, n);
              })
            );
          }
          function je(e, t, n) {
            n
              ? (J.set(e, t, !1),
                k.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var r,
                      o,
                      i = J.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (i.length)
                        (k.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((i = s.call(arguments)),
                        J.set(this, t, i),
                        (r = n(this, t)),
                        this[t](),
                        i !== (o = J.get(this, t)) || r
                          ? J.set(this, t, !1)
                          : (o = {}),
                        i !== o)
                      )
                        return (
                          e.stopImmediatePropagation(),
                          e.preventDefault(),
                          o && o.value
                        );
                    } else
                      i.length &&
                        (J.set(this, t, {
                          value: k.event.trigger(
                            k.extend(i[0], k.Event.prototype),
                            i.slice(1),
                            this
                          ),
                        }),
                        e.stopImmediatePropagation());
                  },
                }))
              : void 0 === J.get(e, t) && k.event.add(e, t, Se);
          }
          (k.event = {
            global: {},
            add: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = J.get(e);
              if (Q(e))
                for (
                  n.handler && ((n = (i = n).handler), (o = i.selector)),
                    o && k.find.matchesSelector(ae, o),
                    n.guid || (n.guid = k.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) ||
                      (a = v.handle = function (t) {
                        return void 0 !== k && k.event.triggered !== t.type
                          ? k.event.dispatch.apply(e, arguments)
                          : void 0;
                      }),
                    l = (t = (t || "").match(I) || [""]).length;
                  l--;

                )
                  (d = g = (s = ke.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d &&
                      ((f = k.event.special[d] || {}),
                      (d = (o ? f.delegateType : f.bindType) || d),
                      (f = k.event.special[d] || {}),
                      (c = k.extend(
                        {
                          type: d,
                          origType: g,
                          data: r,
                          handler: n,
                          guid: n.guid,
                          selector: o,
                          needsContext: o && k.expr.match.needsContext.test(o),
                          namespace: h.join("."),
                        },
                        i
                      )),
                      (p = u[d]) ||
                        (((p = u[d] = []).delegateCount = 0),
                        (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                          (e.addEventListener && e.addEventListener(d, a))),
                      f.add &&
                        (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                      o ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                      (k.event.global[d] = !0));
            },
            remove: function (e, t, n, r, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d,
                h,
                g,
                v = J.hasData(e) && J.get(e);
              if (v && (u = v.events)) {
                for (l = (t = (t || "").match(I) || [""]).length; l--; )
                  if (
                    ((d = g = (s = ke.exec(t[l]) || [])[1]),
                    (h = (s[2] || "").split(".").sort()),
                    d)
                  ) {
                    for (
                      f = k.event.special[d] || {},
                        p =
                          u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                        s =
                          s[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        a = i = p.length;
                      i--;

                    )
                      (c = p[i]),
                        (!o && g !== c.origType) ||
                          (n && n.guid !== c.guid) ||
                          (s && !s.test(c.namespace)) ||
                          (r &&
                            r !== c.selector &&
                            ("**" !== r || !c.selector)) ||
                          (p.splice(i, 1),
                          c.selector && p.delegateCount--,
                          f.remove && f.remove.call(e, c));
                    a &&
                      !p.length &&
                      ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                        k.removeEvent(e, d, v.handle),
                      delete u[d]);
                  } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && J.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                r,
                o,
                i,
                a,
                s = new Array(arguments.length),
                u = k.event.fix(e),
                l =
                  (J.get(this, "events") || Object.create(null))[u.type] || [],
                c = k.event.special[u.type] || {};
              for (s[0] = u, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (
                ((u.delegateTarget = this),
                !c.preDispatch || !1 !== c.preDispatch.call(this, u))
              ) {
                for (
                  a = k.event.handlers.call(this, u, l), t = 0;
                  (o = a[t++]) && !u.isPropagationStopped();

                )
                  for (
                    u.currentTarget = o.elem, n = 0;
                    (i = o.handlers[n++]) && !u.isImmediatePropagationStopped();

                  )
                    (u.rnamespace &&
                      !1 !== i.namespace &&
                      !u.rnamespace.test(i.namespace)) ||
                      ((u.handleObj = i),
                      (u.data = i.data),
                      void 0 !==
                        (r = (
                          (k.event.special[i.origType] || {}).handle ||
                          i.handler
                        ).apply(o.elem, s)) &&
                        !1 === (u.result = r) &&
                        (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result;
              }
            },
            handlers: function (e, t) {
              var n,
                r,
                o,
                i,
                a,
                s = [],
                u = t.delegateCount,
                l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (
                    1 === l.nodeType &&
                    ("click" !== e.type || !0 !== l.disabled)
                  ) {
                    for (i = [], a = {}, n = 0; n < u; n++)
                      void 0 === a[(o = (r = t[n]).selector + " ")] &&
                        (a[o] = r.needsContext
                          ? k(o, this).index(l) > -1
                          : k.find(o, this, null, [l]).length),
                        a[o] && i.push(r);
                    i.length && s.push({ elem: l, handlers: i });
                  }
              return (
                (l = this),
                u < t.length && s.push({ elem: l, handlers: t.slice(u) }),
                s
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(k.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: m(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[k.expando] ? e : new k.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      je(t, "click", Se),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    ve.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      je(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (ve.test(t.type) &&
                      t.click &&
                      D(t, "input") &&
                      J.get(t, "click")) ||
                    D(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (k.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (k.Event = function (e, t) {
              if (!(this instanceof k.Event)) return new k.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? Se
                      : Ee),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && k.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[k.expando] = !0);
            }),
            (k.Event.prototype = {
              constructor: k.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Se),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Se),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Se),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            k.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              k.event.addProp
            ),
            k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              k.event.special[e] = {
                setup: function () {
                  return je(this, e, Ae), !1;
                },
                trigger: function () {
                  return je(this, e), !0;
                },
                _default: function () {
                  return !0;
                },
                delegateType: t,
              };
            }),
            k.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                k.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      r = this,
                      o = e.relatedTarget,
                      i = e.handleObj;
                    return (
                      (o && (o === r || k.contains(r, o))) ||
                        ((e.type = i.origType),
                        (n = i.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            k.fn.extend({
              on: function (e, t, n, r) {
                return Ne(this, e, t, n, r);
              },
              one: function (e, t, n, r) {
                return Ne(this, e, t, n, r, 1);
              },
              off: function (e, t, n) {
                var r, o;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (r = e.handleObj),
                    k(e.delegateTarget).off(
                      r.namespace ? r.origType + "." + r.namespace : r.origType,
                      r.selector,
                      r.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (o in e) this.off(o, t, e[o]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    k.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var De = /<script|<style|<link/i,
            qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function He(e, t) {
            return (
              (D(e, "table") &&
                D(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                k(e).children("tbody")[0]) ||
              e
            );
          }
          function Oe(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Me(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function Re(e, t) {
            var n, r, o, i, a, s;
            if (1 === t.nodeType) {
              if (J.hasData(e) && (s = J.get(e).events))
                for (o in (J.remove(t, "handle events"), s))
                  for (n = 0, r = s[o].length; n < r; n++)
                    k.event.add(t, o, s[o][n]);
              K.hasData(e) &&
                ((i = K.access(e)), (a = k.extend({}, i)), K.set(t, a));
            }
          }
          function Pe(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ve.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ie(e, t, n, r) {
            t = u(t);
            var o,
              i,
              a,
              s,
              l,
              c,
              f = 0,
              p = e.length,
              d = p - 1,
              h = t[0],
              g = m(h);
            if (
              g ||
              (p > 1 && "string" == typeof h && !v.checkClone && qe.test(h))
            )
              return e.each(function (o) {
                var i = e.eq(o);
                g && (t[0] = h.call(this, o, i.html())), Ie(i, t, n, r);
              });
            if (
              p &&
              ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r)).firstChild),
              1 === o.childNodes.length && (o = i),
              i || r)
            ) {
              for (s = (a = k.map(be(o, "script"), Oe)).length; f < p; f++)
                (l = o),
                  f !== d &&
                    ((l = k.clone(l, !0, !0)),
                    s && k.merge(a, be(l, "script"))),
                  n.call(e[f], l, f);
              if (s)
                for (
                  c = a[a.length - 1].ownerDocument, k.map(a, Me), f = 0;
                  f < s;
                  f++
                )
                  (l = a[f]),
                    ye.test(l.type || "") &&
                      !J.access(l, "globalEval") &&
                      k.contains(c, l) &&
                      (l.src && "module" !== (l.type || "").toLowerCase()
                        ? k._evalUrl &&
                          !l.noModule &&
                          k._evalUrl(
                            l.src,
                            { nonce: l.nonce || l.getAttribute("nonce") },
                            c
                          )
                        : w(l.textContent.replace(Le, ""), l, c));
            }
            return e;
          }
          function We(e, t, n) {
            for (
              var r, o = t ? k.filter(t, e) : e, i = 0;
              null != (r = o[i]);
              i++
            )
              n || 1 !== r.nodeType || k.cleanData(be(r)),
                r.parentNode &&
                  (n && se(r) && we(be(r, "script")),
                  r.parentNode.removeChild(r));
            return e;
          }
          k.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var r,
                o,
                i,
                a,
                s = e.cloneNode(!0),
                u = se(e);
              if (
                !(
                  v.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  k.isXMLDoc(e)
                )
              )
                for (a = be(s), r = 0, o = (i = be(e)).length; r < o; r++)
                  Pe(i[r], a[r]);
              if (t)
                if (n)
                  for (
                    i = i || be(e), a = a || be(s), r = 0, o = i.length;
                    r < o;
                    r++
                  )
                    Re(i[r], a[r]);
                else Re(e, s);
              return (
                (a = be(s, "script")).length > 0 &&
                  we(a, !u && be(e, "script")),
                s
              );
            },
            cleanData: function (e) {
              for (
                var t, n, r, o = k.event.special, i = 0;
                void 0 !== (n = e[i]);
                i++
              )
                if (Q(n)) {
                  if ((t = n[J.expando])) {
                    if (t.events)
                      for (r in t.events)
                        o[r]
                          ? k.event.remove(n, r)
                          : k.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0;
                  }
                  n[K.expando] && (n[K.expando] = void 0);
                }
            },
          }),
            k.fn.extend({
              detach: function (e) {
                return We(this, e, !0);
              },
              remove: function (e) {
                return We(this, e);
              },
              text: function (e) {
                return z(
                  this,
                  function (e) {
                    return void 0 === e
                      ? k.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ie(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    He(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ie(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = He(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ie(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (k.cleanData(be(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return k.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return z(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      r = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !De.test(e) &&
                      !xe[(me.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = k.htmlPrefilter(e);
                      try {
                        for (; n < r; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (k.cleanData(be(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ie(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    k.inArray(this, e) < 0 &&
                      (k.cleanData(be(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            k.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                k.fn[e] = function (e) {
                  for (
                    var n, r = [], o = k(e), i = o.length - 1, a = 0;
                    a <= i;
                    a++
                  )
                    (n = a === i ? this : this.clone(!0)),
                      k(o[a])[t](n),
                      l.apply(r, n.get());
                  return this.pushStack(r);
                };
              }
            );
          var Fe = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"),
            Be = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = r), t.getComputedStyle(e);
            },
            $e = function (e, t, n) {
              var r,
                o,
                i = {};
              for (o in t) (i[o] = e.style[o]), (e.style[o] = t[o]);
              for (o in ((r = n.call(e)), t)) e.style[o] = i[o];
              return r;
            },
            _e = new RegExp(ie.join("|"), "i");
          function Xe(e, t, n) {
            var r,
              o,
              i,
              a,
              s = e.style;
            return (
              (n = n || Be(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) ||
                  se(e) ||
                  (a = k.style(e, t)),
                !v.pixelBoxStyles() &&
                  Fe.test(a) &&
                  _e.test(t) &&
                  ((r = s.width),
                  (o = s.minWidth),
                  (i = s.maxWidth),
                  (s.minWidth = s.maxWidth = s.width = a),
                  (a = n.width),
                  (s.width = r),
                  (s.minWidth = o),
                  (s.maxWidth = i))),
              void 0 !== a ? a + "" : a
            );
          }
          function ze(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (c) {
                (l.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (c.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  ae.appendChild(l).appendChild(c);
                var e = r.getComputedStyle(c);
                (n = "1%" !== e.top),
                  (u = 12 === t(e.marginLeft)),
                  (c.style.right = "60%"),
                  (a = 36 === t(e.right)),
                  (o = 36 === t(e.width)),
                  (c.style.position = "absolute"),
                  (i = 12 === t(c.offsetWidth / 3)),
                  ae.removeChild(l),
                  (c = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              o,
              i,
              a,
              s,
              u,
              l = x.createElement("div"),
              c = x.createElement("div");
            c.style &&
              ((c.style.backgroundClip = "content-box"),
              (c.cloneNode(!0).style.backgroundClip = ""),
              (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
              k.extend(v, {
                boxSizingReliable: function () {
                  return e(), o;
                },
                pixelBoxStyles: function () {
                  return e(), a;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), u;
                },
                scrollboxSize: function () {
                  return e(), i;
                },
                reliableTrDimensions: function () {
                  var e, t, n, o;
                  return (
                    null == s &&
                      ((e = x.createElement("table")),
                      (t = x.createElement("tr")),
                      (n = x.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText = "border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      ae.appendChild(e).appendChild(t).appendChild(n),
                      (o = r.getComputedStyle(t)),
                      (s =
                        parseInt(o.height, 10) +
                          parseInt(o.borderTopWidth, 10) +
                          parseInt(o.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      ae.removeChild(e)),
                    s
                  );
                },
              }));
          })();
          var Ue = ["Webkit", "Moz", "ms"],
            Ye = x.createElement("div").style,
            Ge = {};
          function Ve(e) {
            return (
              k.cssProps[e] ||
              Ge[e] ||
              (e in Ye
                ? e
                : (Ge[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = Ue.length;
                        n--;

                      )
                        if ((e = Ue[n] + t) in Ye) return e;
                    })(e) || e))
            );
          }
          var Qe = /^(none|table(?!-c[ea]).+)/,
            Ze = /^--/,
            Je = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            Ke = { letterSpacing: "0", fontWeight: "400" };
          function et(e, t, n) {
            var r = oe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
          }
          function tt(e, t, n, r, o, i) {
            var a = "width" === t ? 1 : 0,
              s = 0,
              u = 0;
            if (n === (r ? "border" : "content")) return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += k.css(e, n + ie[a], !0, o)),
                r
                  ? ("content" === n &&
                      (u -= k.css(e, "padding" + ie[a], !0, o)),
                    "margin" !== n &&
                      (u -= k.css(e, "border" + ie[a] + "Width", !0, o)))
                  : ((u += k.css(e, "padding" + ie[a], !0, o)),
                    "padding" !== n
                      ? (u += k.css(e, "border" + ie[a] + "Width", !0, o))
                      : (s += k.css(e, "border" + ie[a] + "Width", !0, o)));
            return (
              !r &&
                i >= 0 &&
                (u +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        i -
                        u -
                        s -
                        0.5
                    )
                  ) || 0),
              u
            );
          }
          function nt(e, t, n) {
            var r = Be(e),
              o =
                (!v.boxSizingReliable() || n) &&
                "border-box" === k.css(e, "boxSizing", !1, r),
              i = o,
              a = Xe(e, t, r),
              s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Fe.test(a)) {
              if (!n) return a;
              a = "auto";
            }
            return (
              ((!v.boxSizingReliable() && o) ||
                (!v.reliableTrDimensions() && D(e, "tr")) ||
                "auto" === a ||
                (!parseFloat(a) && "inline" === k.css(e, "display", !1, r))) &&
                e.getClientRects().length &&
                ((o = "border-box" === k.css(e, "boxSizing", !1, r)),
                (i = s in e) && (a = e[s])),
              (a = parseFloat(a) || 0) +
                tt(e, t, n || (o ? "border" : "content"), i, r, a) +
                "px"
            );
          }
          function rt(e, t, n, r, o) {
            return new rt.prototype.init(e, t, n, r, o);
          }
          k.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Xe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
            },
            cssProps: {},
            style: function (e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                  i,
                  a,
                  s = V(t),
                  u = Ze.test(t),
                  l = e.style;
                if (
                  (u || (t = Ve(s)),
                  (a = k.cssHooks[t] || k.cssHooks[s]),
                  void 0 === n)
                )
                  return a && "get" in a && void 0 !== (o = a.get(e, !1, r))
                    ? o
                    : l[t];
                "string" == (i = typeof n) &&
                  (o = oe.exec(n)) &&
                  o[1] &&
                  ((n = ce(e, t, o)), (i = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== i ||
                      u ||
                      (n += (o && o[3]) || (k.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (l[t] = "inherit"),
                    (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
                      (u ? l.setProperty(t, n) : (l[t] = n)));
              }
            },
            css: function (e, t, n, r) {
              var o,
                i,
                a,
                s = V(t);
              return (
                Ze.test(t) || (t = Ve(s)),
                (a = k.cssHooks[t] || k.cssHooks[s]) &&
                  "get" in a &&
                  (o = a.get(e, !0, n)),
                void 0 === o && (o = Xe(e, t, r)),
                "normal" === o && t in Ke && (o = Ke[t]),
                "" === n || n
                  ? ((i = parseFloat(o)), !0 === n || isFinite(i) ? i || 0 : o)
                  : o
              );
            },
          }),
            k.each(["height", "width"], function (e, t) {
              k.cssHooks[t] = {
                get: function (e, n, r) {
                  if (n)
                    return !Qe.test(k.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? nt(e, t, r)
                      : $e(e, Je, function () {
                          return nt(e, t, r);
                        });
                },
                set: function (e, n, r) {
                  var o,
                    i = Be(e),
                    a = !v.scrollboxSize() && "absolute" === i.position,
                    s =
                      (a || r) && "border-box" === k.css(e, "boxSizing", !1, i),
                    u = r ? tt(e, t, r, s, i) : 0;
                  return (
                    s &&
                      a &&
                      (u -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(i[t]) -
                          tt(e, t, "border", !1, i) -
                          0.5
                      )),
                    u &&
                      (o = oe.exec(n)) &&
                      "px" !== (o[3] || "px") &&
                      ((e.style[t] = n), (n = k.css(e, t))),
                    et(0, n, u)
                  );
                },
              };
            }),
            (k.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Xe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      $e(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            k.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (k.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var r = 0,
                        o = {},
                        i = "string" == typeof n ? n.split(" ") : [n];
                      r < 4;
                      r++
                    )
                      o[e + ie[r] + t] = i[r] || i[r - 2] || i[0];
                    return o;
                  },
                }),
                  "margin" !== e && (k.cssHooks[e + t].set = et);
              }
            ),
            k.fn.extend({
              css: function (e, t) {
                return z(
                  this,
                  function (e, t, n) {
                    var r,
                      o,
                      i = {},
                      a = 0;
                    if (Array.isArray(t)) {
                      for (r = Be(e), o = t.length; a < o; a++)
                        i[t[a]] = k.css(e, t[a], !1, r);
                      return i;
                    }
                    return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (k.Tween = rt),
            (rt.prototype = {
              constructor: rt,
              init: function (e, t, n, r, o, i) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = o || k.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = r),
                  (this.unit = i || (k.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = rt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : rt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = rt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t = k.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : rt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (rt.prototype.init.prototype = rt.prototype),
            (rt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = k.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  k.fx.step[e.prop]
                    ? k.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!k.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : k.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
              set: function (e) {
                e.elem.nodeType &&
                  e.elem.parentNode &&
                  (e.elem[e.prop] = e.now);
              },
            }),
            (k.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (k.fx = rt.prototype.init),
            (k.fx.step = {});
          var ot,
            it,
            at = /^(?:toggle|show|hide)$/,
            st = /queueHooks$/;
          function ut() {
            it &&
              (!1 === x.hidden && r.requestAnimationFrame
                ? r.requestAnimationFrame(ut)
                : r.setTimeout(ut, k.fx.interval),
              k.fx.tick());
          }
          function lt() {
            return (
              r.setTimeout(function () {
                ot = void 0;
              }),
              (ot = Date.now())
            );
          }
          function ct(e, t) {
            var n,
              r = 0,
              o = { height: e };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              o["margin" + (n = ie[r])] = o["padding" + n] = e;
            return t && (o.opacity = o.width = e), o;
          }
          function ft(e, t, n) {
            for (
              var r,
                o = (pt.tweeners[t] || []).concat(pt.tweeners["*"]),
                i = 0,
                a = o.length;
              i < a;
              i++
            )
              if ((r = o[i].call(n, t, e))) return r;
          }
          function pt(e, t, n) {
            var r,
              o,
              i = 0,
              a = pt.prefilters.length,
              s = k.Deferred().always(function () {
                delete u.elem;
              }),
              u = function () {
                if (o) return !1;
                for (
                  var t = ot || lt(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = 1 - (n / l.duration || 0),
                    i = 0,
                    a = l.tweens.length;
                  i < a;
                  i++
                )
                  l.tweens[i].run(r);
                return (
                  s.notifyWith(e, [l, r, n]),
                  r < 1 && a
                    ? n
                    : (a || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
                );
              },
              l = s.promise({
                elem: e,
                props: k.extend({}, t),
                opts: k.extend(
                  !0,
                  { specialEasing: {}, easing: k.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: ot || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var r = k.Tween(
                    e,
                    l.opts,
                    t,
                    n,
                    l.opts.specialEasing[t] || l.opts.easing
                  );
                  return l.tweens.push(r), r;
                },
                stop: function (t) {
                  var n = 0,
                    r = t ? l.tweens.length : 0;
                  if (o) return this;
                  for (o = !0; n < r; n++) l.tweens[n].run(1);
                  return (
                    t
                      ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                      : s.rejectWith(e, [l, t]),
                    this
                  );
                },
              }),
              c = l.props;
            for (
              (function (e, t) {
                var n, r, o, i, a;
                for (n in e)
                  if (
                    ((o = t[(r = V(n))]),
                    (i = e[n]),
                    Array.isArray(i) && ((o = i[1]), (i = e[n] = i[0])),
                    n !== r && ((e[r] = i), delete e[n]),
                    (a = k.cssHooks[r]) && ("expand" in a))
                  )
                    for (n in ((i = a.expand(i)), delete e[r], i))
                      (n in e) || ((e[n] = i[n]), (t[n] = o));
                  else t[r] = o;
              })(c, l.opts.specialEasing);
              i < a;
              i++
            )
              if ((r = pt.prefilters[i].call(l, e, c, l.opts)))
                return (
                  m(r.stop) &&
                    (k._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                  r
                );
            return (
              k.map(c, ft, l),
              m(l.opts.start) && l.opts.start.call(e, l),
              l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always),
              k.fx.timer(
                k.extend(u, { elem: e, anim: l, queue: l.opts.queue })
              ),
              l
            );
          }
          (k.Animation = k.extend(pt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return ce(n.elem, e, oe.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              m(e) ? ((t = e), (e = ["*"])) : (e = e.match(I));
              for (var n, r = 0, o = e.length; r < o; r++)
                (n = e[r]),
                  (pt.tweeners[n] = pt.tweeners[n] || []),
                  pt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f = "width" in t || "height" in t,
                  p = this,
                  d = {},
                  h = e.style,
                  g = e.nodeType && le(e),
                  v = J.get(e, "fxshow");
                for (r in (n.queue ||
                  (null == (a = k._queueHooks(e, "fx")).unqueued &&
                    ((a.unqueued = 0),
                    (s = a.empty.fire),
                    (a.empty.fire = function () {
                      a.unqueued || s();
                    })),
                  a.unqueued++,
                  p.always(function () {
                    p.always(function () {
                      a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
                    });
                  })),
                t))
                  if (((o = t[r]), at.test(o))) {
                    if (
                      (delete t[r],
                      (i = i || "toggle" === o),
                      o === (g ? "hide" : "show"))
                    ) {
                      if ("show" !== o || !v || void 0 === v[r]) continue;
                      g = !0;
                    }
                    d[r] = (v && v[r]) || k.style(e, r);
                  }
                if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d))
                  for (r in (f &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (l = v && v.display) && (l = J.get(e, "display")),
                    "none" === (c = k.css(e, "display")) &&
                      (l
                        ? (c = l)
                        : (de([e], !0),
                          (l = e.style.display || l),
                          (c = k.css(e, "display")),
                          de([e]))),
                    ("inline" === c || ("inline-block" === c && null != l)) &&
                      "none" === k.css(e, "float") &&
                      (u ||
                        (p.done(function () {
                          h.display = l;
                        }),
                        null == l &&
                          ((c = h.display), (l = "none" === c ? "" : c))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    p.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (u = !1),
                  d))
                    u ||
                      (v
                        ? "hidden" in v && (g = v.hidden)
                        : (v = J.access(e, "fxshow", { display: l })),
                      i && (v.hidden = !g),
                      g && de([e], !0),
                      p.done(function () {
                        for (r in (g || de([e]), J.remove(e, "fxshow"), d))
                          k.style(e, r, d[r]);
                      })),
                      (u = ft(g ? v[r] : 0, r, p)),
                      r in v ||
                        ((v[r] = u.start),
                        g && ((u.end = u.start), (u.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? pt.prefilters.unshift(e) : pt.prefilters.push(e);
            },
          })),
            (k.speed = function (e, t, n) {
              var r =
                e && "object" == typeof e
                  ? k.extend({}, e)
                  : {
                      complete: n || (!n && t) || (m(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !m(t) && t),
                    };
              return (
                k.fx.off
                  ? (r.duration = 0)
                  : "number" != typeof r.duration &&
                    (r.duration in k.fx.speeds
                      ? (r.duration = k.fx.speeds[r.duration])
                      : (r.duration = k.fx.speeds._default)),
                (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                  m(r.old) && r.old.call(this),
                    r.queue && k.dequeue(this, r.queue);
                }),
                r
              );
            }),
            k.fn.extend({
              fadeTo: function (e, t, n, r) {
                return this.filter(le)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, r);
              },
              animate: function (e, t, n, r) {
                var o = k.isEmptyObject(e),
                  i = k.speed(t, n, r),
                  a = function () {
                    var t = pt(this, k.extend({}, e), i);
                    (o || J.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (a.finish = a),
                  o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                );
              },
              stop: function (e, t, n) {
                var r = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      o = null != e && e + "queueHooks",
                      i = k.timers,
                      a = J.get(this);
                    if (o) a[o] && a[o].stop && r(a[o]);
                    else
                      for (o in a) a[o] && a[o].stop && st.test(o) && r(a[o]);
                    for (o = i.length; o--; )
                      i[o].elem !== this ||
                        (null != e && i[o].queue !== e) ||
                        (i[o].anim.stop(n), (t = !1), i.splice(o, 1));
                    (!t && n) || k.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = J.get(this),
                      r = n[e + "queue"],
                      o = n[e + "queueHooks"],
                      i = k.timers,
                      a = r ? r.length : 0;
                    for (
                      n.finish = !0,
                        k.queue(this, e, []),
                        o && o.stop && o.stop.call(this, !0),
                        t = i.length;
                      t--;

                    )
                      i[t].elem === this &&
                        i[t].queue === e &&
                        (i[t].anim.stop(!0), i.splice(t, 1));
                    for (t = 0; t < a; t++)
                      r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            k.each(["toggle", "show", "hide"], function (e, t) {
              var n = k.fn[t];
              k.fn[t] = function (e, r, o) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(ct(t, !0), e, r, o);
              };
            }),
            k.each(
              {
                slideDown: ct("show"),
                slideUp: ct("hide"),
                slideToggle: ct("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                k.fn[e] = function (e, n, r) {
                  return this.animate(t, e, n, r);
                };
              }
            ),
            (k.timers = []),
            (k.fx.tick = function () {
              var e,
                t = 0,
                n = k.timers;
              for (ot = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || k.fx.stop(), (ot = void 0);
            }),
            (k.fx.timer = function (e) {
              k.timers.push(e), k.fx.start();
            }),
            (k.fx.interval = 13),
            (k.fx.start = function () {
              it || ((it = !0), ut());
            }),
            (k.fx.stop = function () {
              it = null;
            }),
            (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (k.fn.delay = function (e, t) {
              return (
                (e = (k.fx && k.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var o = r.setTimeout(t, e);
                  n.stop = function () {
                    r.clearTimeout(o);
                  };
                })
              );
            }),
            (function () {
              var e = x.createElement("input"),
                t = x
                  .createElement("select")
                  .appendChild(x.createElement("option"));
              (e.type = "checkbox"),
                (v.checkOn = "" !== e.value),
                (v.optSelected = t.selected),
                ((e = x.createElement("input")).value = "t"),
                (e.type = "radio"),
                (v.radioValue = "t" === e.value);
            })();
          var dt,
            ht = k.expr.attrHandle;
          k.fn.extend({
            attr: function (e, t) {
              return z(this, k.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                k.removeAttr(this, e);
              });
            },
          }),
            k.extend({
              attr: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return void 0 === e.getAttribute
                    ? k.prop(e, t, n)
                    : ((1 === i && k.isXMLDoc(e)) ||
                        (o =
                          k.attrHooks[t.toLowerCase()] ||
                          (k.expr.match.bool.test(t) ? dt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void k.removeAttr(e, t)
                          : o && "set" in o && void 0 !== (r = o.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ""), n)
                        : o && "get" in o && null !== (r = o.get(e, t))
                        ? r
                        : null == (r = k.find.attr(e, t))
                        ? void 0
                        : r);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!v.radioValue && "radio" === t && D(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  r = 0,
                  o = t && t.match(I);
                if (o && 1 === e.nodeType)
                  for (; (n = o[r++]); ) e.removeAttribute(n);
              },
            }),
            (dt = {
              set: function (e, t, n) {
                return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = ht[t] || k.find.attr;
              ht[t] = function (e, t, r) {
                var o,
                  i,
                  a = t.toLowerCase();
                return (
                  r ||
                    ((i = ht[a]),
                    (ht[a] = o),
                    (o = null != n(e, t, r) ? a : null),
                    (ht[a] = i)),
                  o
                );
              };
            });
          var gt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function mt(e) {
            return (e.match(I) || []).join(" ");
          }
          function yt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function xt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(I)) || [];
          }
          k.fn.extend({
            prop: function (e, t) {
              return z(this, k.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[k.propFix[e] || e];
              });
            },
          }),
            k.extend({
              prop: function (e, t, n) {
                var r,
                  o,
                  i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i)
                  return (
                    (1 === i && k.isXMLDoc(e)) ||
                      ((t = k.propFix[t] || t), (o = k.propHooks[t])),
                    void 0 !== n
                      ? o && "set" in o && void 0 !== (r = o.set(e, n, t))
                        ? r
                        : (e[t] = n)
                      : o && "get" in o && null !== (r = o.get(e, t))
                      ? r
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : gt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            v.optSelected ||
              (k.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            k.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                k.propFix[this.toLowerCase()] = this;
              }
            ),
            k.fn.extend({
              addClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    k(this).addClass(e.call(this, t, yt(this)));
                  });
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = yt(n)), (r = 1 === n.nodeType && " " + mt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                      o !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              removeClass: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a,
                  s,
                  u = 0;
                if (m(e))
                  return this.each(function (t) {
                    k(this).removeClass(e.call(this, t, yt(this)));
                  });
                if (!arguments.length) return this.attr("class", "");
                if ((t = xt(e)).length)
                  for (; (n = this[u++]); )
                    if (
                      ((o = yt(n)), (r = 1 === n.nodeType && " " + mt(o) + " "))
                    ) {
                      for (a = 0; (i = t[a++]); )
                        for (; r.indexOf(" " + i + " ") > -1; )
                          r = r.replace(" " + i + " ", " ");
                      o !== (s = mt(r)) && n.setAttribute("class", s);
                    }
                return this;
              },
              toggleClass: function (e, t) {
                var n = typeof e,
                  r = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && r
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : m(e)
                  ? this.each(function (n) {
                      k(this).toggleClass(e.call(this, n, yt(this), t), t);
                    })
                  : this.each(function () {
                      var t, o, i, a;
                      if (r)
                        for (o = 0, i = k(this), a = xt(e); (t = a[o++]); )
                          i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                      else
                        (void 0 !== e && "boolean" !== n) ||
                          ((t = yt(this)) && J.set(this, "__className__", t),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              t || !1 === e
                                ? ""
                                : J.get(this, "__className__") || ""
                            ));
                    });
              },
              hasClass: function (e) {
                var t,
                  n,
                  r = 0;
                for (t = " " + e + " "; (n = this[r++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + mt(yt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var bt = /\r/g;
          k.fn.extend({
            val: function (e) {
              var t,
                n,
                r,
                o = this[0];
              return arguments.length
                ? ((r = m(e)),
                  this.each(function (n) {
                    var o;
                    1 === this.nodeType &&
                      (null == (o = r ? e.call(this, n, k(this).val()) : e)
                        ? (o = "")
                        : "number" == typeof o
                        ? (o += "")
                        : Array.isArray(o) &&
                          (o = k.map(o, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        k.valHooks[this.type] ||
                        k.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, o, "value")) ||
                        (this.value = o));
                  }))
                : o
                ? (t =
                    k.valHooks[o.type] ||
                    k.valHooks[o.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(o, "value"))
                  ? n
                  : "string" == typeof (n = o.value)
                  ? n.replace(bt, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            k.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : mt(k.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      r,
                      o = e.options,
                      i = e.selectedIndex,
                      a = "select-one" === e.type,
                      s = a ? null : [],
                      u = a ? i + 1 : o.length;
                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                      if (
                        ((n = o[r]).selected || r === i) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))
                      ) {
                        if (((t = k(n).val()), a)) return t;
                        s.push(t);
                      }
                    return s;
                  },
                  set: function (e, t) {
                    for (
                      var n, r, o = e.options, i = k.makeArray(t), a = o.length;
                      a--;

                    )
                      ((r = o[a]).selected =
                        k.inArray(k.valHooks.option.get(r), i) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), i;
                  },
                },
              },
            }),
            k.each(["radio", "checkbox"], function () {
              (k.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = k.inArray(k(e).val(), t) > -1);
                },
              }),
                v.checkOn ||
                  (k.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            }),
            (v.focusin = "onfocusin" in r);
          var wt = /^(?:focusinfocus|focusoutblur)$/,
            Tt = function (e) {
              e.stopPropagation();
            };
          k.extend(k.event, {
            trigger: function (e, t, n, o) {
              var i,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                h = [n || x],
                g = d.call(e, "type") ? e.type : e,
                v = d.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((a = p = s = n = n || x),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !wt.test(g + k.event.triggered) &&
                  (g.indexOf(".") > -1 &&
                    ((v = g.split(".")), (g = v.shift()), v.sort()),
                  (l = g.indexOf(":") < 0 && "on" + g),
                  ((e = e[k.expando]
                    ? e
                    : new k.Event(g, "object" == typeof e && e)).isTrigger = o
                    ? 2
                    : 3),
                  (e.namespace = v.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : k.makeArray(t, [e])),
                  (f = k.event.special[g] || {}),
                  o || !f.trigger || !1 !== f.trigger.apply(n, t)))
              ) {
                if (!o && !f.noBubble && !y(n)) {
                  for (
                    u = f.delegateType || g,
                      wt.test(u + g) || (a = a.parentNode);
                    a;
                    a = a.parentNode
                  )
                    h.push(a), (s = a);
                  s === (n.ownerDocument || x) &&
                    h.push(s.defaultView || s.parentWindow || r);
                }
                for (i = 0; (a = h[i++]) && !e.isPropagationStopped(); )
                  (p = a),
                    (e.type = i > 1 ? u : f.bindType || g),
                    (c =
                      (J.get(a, "events") || Object.create(null))[e.type] &&
                      J.get(a, "handle")) && c.apply(a, t),
                    (c = l && a[l]) &&
                      c.apply &&
                      Q(a) &&
                      ((e.result = c.apply(a, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = g),
                  o ||
                    e.isDefaultPrevented() ||
                    (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                    !Q(n) ||
                    (l &&
                      m(n[g]) &&
                      !y(n) &&
                      ((s = n[l]) && (n[l] = null),
                      (k.event.triggered = g),
                      e.isPropagationStopped() && p.addEventListener(g, Tt),
                      n[g](),
                      e.isPropagationStopped() && p.removeEventListener(g, Tt),
                      (k.event.triggered = void 0),
                      s && (n[l] = s))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var r = k.extend(new k.Event(), n, { type: e, isSimulated: !0 });
              k.event.trigger(r, null, t);
            },
          }),
            k.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  k.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return k.event.trigger(e, t, n, !0);
              },
            }),
            v.focusin ||
              k.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                  k.event.simulate(t, e.target, k.event.fix(e));
                };
                k.event.special[t] = {
                  setup: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = J.access(r, t);
                    o || r.addEventListener(e, n, !0),
                      J.access(r, t, (o || 0) + 1);
                  },
                  teardown: function () {
                    var r = this.ownerDocument || this.document || this,
                      o = J.access(r, t) - 1;
                    o
                      ? J.access(r, t, o)
                      : (r.removeEventListener(e, n, !0), J.remove(r, t));
                  },
                };
              });
          var Ct = r.location,
            kt = { guid: Date.now() },
            St = /\?/;
          k.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new r.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                k.error(
                  "Invalid XML: " +
                    (n
                      ? k
                          .map(n.childNodes, function (e) {
                            return e.textContent;
                          })
                          .join("\n")
                      : e)
                ),
              t
            );
          };
          var Et = /\[\]$/,
            At = /\r?\n/g,
            Nt = /^(?:submit|button|image|reset|file)$/i,
            jt = /^(?:input|select|textarea|keygen)/i;
          function Dt(e, t, n, r) {
            var o;
            if (Array.isArray(t))
              k.each(t, function (t, o) {
                n || Et.test(e)
                  ? r(e, o)
                  : Dt(
                      e +
                        "[" +
                        ("object" == typeof o && null != o ? t : "") +
                        "]",
                      o,
                      n,
                      r
                    );
              });
            else if (n || "object" !== T(t)) r(e, t);
            else for (o in t) Dt(e + "[" + o + "]", t[o], n, r);
          }
          (k.param = function (e, t) {
            var n,
              r = [],
              o = function (e, t) {
                var n = m(t) ? t() : t;
                r[r.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !k.isPlainObject(e)))
              k.each(e, function () {
                o(this.name, this.value);
              });
            else for (n in e) Dt(n, e[n], t, o);
            return r.join("&");
          }),
            k.fn.extend({
              serialize: function () {
                return k.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = k.prop(this, "elements");
                  return e ? k.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !k(this).is(":disabled") &&
                      jt.test(this.nodeName) &&
                      !Nt.test(e) &&
                      (this.checked || !ve.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = k(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? k.map(n, function (e) {
                          return { name: t.name, value: e.replace(At, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(At, "\r\n") };
                  })
                  .get();
              },
            });
          var qt = /%20/g,
            Lt = /#.*$/,
            Ht = /([?&])_=[^&]*/,
            Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Mt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Pt = {},
            It = {},
            Wt = "*/".concat("*"),
            Ft = x.createElement("a");
          function Bt(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var r,
                o = 0,
                i = t.toLowerCase().match(I) || [];
              if (m(n))
                for (; (r = i[o++]); )
                  "+" === r[0]
                    ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                    : (e[r] = e[r] || []).push(n);
            };
          }
          function $t(e, t, n, r) {
            var o = {},
              i = e === It;
            function a(s) {
              var u;
              return (
                (o[s] = !0),
                k.each(e[s] || [], function (e, s) {
                  var l = s(t, n, r);
                  return "string" != typeof l || i || o[l]
                    ? i
                      ? !(u = l)
                      : void 0
                    : (t.dataTypes.unshift(l), a(l), !1);
                }),
                u
              );
            }
            return a(t.dataTypes[0]) || (!o["*"] && a("*"));
          }
          function _t(e, t) {
            var n,
              r,
              o = k.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
            return r && k.extend(!0, e, r), e;
          }
          (Ft.href = Ct.href),
            k.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                  Ct.protocol
                ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Wt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": k.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? _t(_t(e, k.ajaxSettings), t) : _t(k.ajaxSettings, e);
              },
              ajaxPrefilter: Bt(Pt),
              ajaxTransport: Bt(It),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l,
                  c,
                  f,
                  p,
                  d = k.ajaxSetup({}, t),
                  h = d.context || d,
                  g = d.context && (h.nodeType || h.jquery) ? k(h) : k.event,
                  v = k.Deferred(),
                  m = k.Callbacks("once memory"),
                  y = d.statusCode || {},
                  b = {},
                  w = {},
                  T = "canceled",
                  C = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (l) {
                        if (!a)
                          for (a = {}; (t = Ot.exec(i)); )
                            a[t[1].toLowerCase() + " "] = (
                              a[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = a[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return l ? i : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == l &&
                          ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                          (b[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == l && (d.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (l) C.always(e[C.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || T;
                      return n && n.abort(t), S(0, t), this;
                    },
                  };
                if (
                  (v.promise(C),
                  (d.url = ((e || d.url || Ct.href) + "").replace(
                    Rt,
                    Ct.protocol + "//"
                  )),
                  (d.type = t.method || t.type || d.method || d.type),
                  (d.dataTypes = (d.dataType || "*").toLowerCase().match(I) || [
                    "",
                  ]),
                  null == d.crossDomain)
                ) {
                  u = x.createElement("a");
                  try {
                    (u.href = d.url),
                      (u.href = u.href),
                      (d.crossDomain =
                        Ft.protocol + "//" + Ft.host !=
                        u.protocol + "//" + u.host);
                  } catch (e) {
                    d.crossDomain = !0;
                  }
                }
                if (
                  (d.data &&
                    d.processData &&
                    "string" != typeof d.data &&
                    (d.data = k.param(d.data, d.traditional)),
                  $t(Pt, d, t, C),
                  l)
                )
                  return C;
                for (f in ((c = k.event && d.global) &&
                  0 == k.active++ &&
                  k.event.trigger("ajaxStart"),
                (d.type = d.type.toUpperCase()),
                (d.hasContent = !Mt.test(d.type)),
                (o = d.url.replace(Lt, "")),
                d.hasContent
                  ? d.data &&
                    d.processData &&
                    0 ===
                      (d.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (d.data = d.data.replace(qt, "+"))
                  : ((p = d.url.slice(o.length)),
                    d.data &&
                      (d.processData || "string" == typeof d.data) &&
                      ((o += (St.test(o) ? "&" : "?") + d.data), delete d.data),
                    !1 === d.cache &&
                      ((o = o.replace(Ht, "$1")),
                      (p = (St.test(o) ? "&" : "?") + "_=" + kt.guid++ + p)),
                    (d.url = o + p)),
                d.ifModified &&
                  (k.lastModified[o] &&
                    C.setRequestHeader("If-Modified-Since", k.lastModified[o]),
                  k.etag[o] && C.setRequestHeader("If-None-Match", k.etag[o])),
                ((d.data && d.hasContent && !1 !== d.contentType) ||
                  t.contentType) &&
                  C.setRequestHeader("Content-Type", d.contentType),
                C.setRequestHeader(
                  "Accept",
                  d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                    ? d.accepts[d.dataTypes[0]] +
                        ("*" !== d.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
                    : d.accepts["*"]
                ),
                d.headers))
                  C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l))
                  return C.abort();
                if (
                  ((T = "abort"),
                  m.add(d.complete),
                  C.done(d.success),
                  C.fail(d.error),
                  (n = $t(It, d, t, C)))
                ) {
                  if (
                    ((C.readyState = 1), c && g.trigger("ajaxSend", [C, d]), l)
                  )
                    return C;
                  d.async &&
                    d.timeout > 0 &&
                    (s = r.setTimeout(function () {
                      C.abort("timeout");
                    }, d.timeout));
                  try {
                    (l = !1), n.send(b, S);
                  } catch (e) {
                    if (l) throw e;
                    S(-1, e);
                  }
                } else S(-1, "No Transport");
                function S(e, t, a, u) {
                  var f,
                    p,
                    x,
                    b,
                    w,
                    T = t;
                  l ||
                    ((l = !0),
                    s && r.clearTimeout(s),
                    (n = void 0),
                    (i = u || ""),
                    (C.readyState = e > 0 ? 4 : 0),
                    (f = (e >= 200 && e < 300) || 304 === e),
                    a &&
                      (b = (function (e, t, n) {
                        for (
                          var r, o, i, a, s = e.contents, u = e.dataTypes;
                          "*" === u[0];

                        )
                          u.shift(),
                            void 0 === r &&
                              (r =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (r)
                          for (o in s)
                            if (s[o] && s[o].test(r)) {
                              u.unshift(o);
                              break;
                            }
                        if (u[0] in n) i = u[0];
                        else {
                          for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                              i = o;
                              break;
                            }
                            a || (a = o);
                          }
                          i = i || a;
                        }
                        if (i) return i !== u[0] && u.unshift(i), n[i];
                      })(d, C, a)),
                    !f &&
                      k.inArray("script", d.dataTypes) > -1 &&
                      k.inArray("json", d.dataTypes) < 0 &&
                      (d.converters["text script"] = function () {}),
                    (b = (function (e, t, n, r) {
                      var o,
                        i,
                        a,
                        s,
                        u,
                        l = {},
                        c = e.dataTypes.slice();
                      if (c[1])
                        for (a in e.converters)
                          l[a.toLowerCase()] = e.converters[a];
                      for (i = c.shift(); i; )
                        if (
                          (e.responseFields[i] && (n[e.responseFields[i]] = t),
                          !u &&
                            r &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (u = i),
                          (i = c.shift()))
                        )
                          if ("*" === i) i = u;
                          else if ("*" !== u && u !== i) {
                            if (!(a = l[u + " " + i] || l["* " + i]))
                              for (o in l)
                                if (
                                  (s = o.split(" "))[1] === i &&
                                  (a = l[u + " " + s[0]] || l["* " + s[0]])
                                ) {
                                  !0 === a
                                    ? (a = l[o])
                                    : !0 !== l[o] &&
                                      ((i = s[0]), c.unshift(s[1]));
                                  break;
                                }
                            if (!0 !== a)
                              if (a && e.throws) t = a(t);
                              else
                                try {
                                  t = a(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: a
                                      ? e
                                      : "No conversion from " + u + " to " + i,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(d, b, C, f)),
                    f
                      ? (d.ifModified &&
                          ((w = C.getResponseHeader("Last-Modified")) &&
                            (k.lastModified[o] = w),
                          (w = C.getResponseHeader("etag")) && (k.etag[o] = w)),
                        204 === e || "HEAD" === d.type
                          ? (T = "nocontent")
                          : 304 === e
                          ? (T = "notmodified")
                          : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                      : ((x = T),
                        (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                    (C.status = e),
                    (C.statusText = (t || T) + ""),
                    f
                      ? v.resolveWith(h, [p, T, C])
                      : v.rejectWith(h, [C, T, x]),
                    C.statusCode(y),
                    (y = void 0),
                    c &&
                      g.trigger(f ? "ajaxSuccess" : "ajaxError", [
                        C,
                        d,
                        f ? p : x,
                      ]),
                    m.fireWith(h, [C, T]),
                    c &&
                      (g.trigger("ajaxComplete", [C, d]),
                      --k.active || k.event.trigger("ajaxStop")));
                }
                return C;
              },
              getJSON: function (e, t, n) {
                return k.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return k.get(e, void 0, t, "script");
              },
            }),
            k.each(["get", "post"], function (e, t) {
              k[t] = function (e, n, r, o) {
                return (
                  m(n) && ((o = o || r), (r = n), (n = void 0)),
                  k.ajax(
                    k.extend(
                      { url: e, type: t, dataType: o, data: n, success: r },
                      k.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            k.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (k._evalUrl = function (e, t, n) {
              return k.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  k.globalEval(e, t, n);
                },
              });
            }),
            k.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (m(e) && (e = e.call(this[0])),
                    (t = k(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return m(e)
                  ? this.each(function (t) {
                      k(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = k(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = m(e);
                return this.each(function (n) {
                  k(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      k(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (k.expr.pseudos.hidden = function (e) {
              return !k.expr.pseudos.visible(e);
            }),
            (k.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (k.ajaxSettings.xhr = function () {
              try {
                return new r.XMLHttpRequest();
              } catch (e) {}
            });
          var Xt = { 0: 200, 1223: 204 },
            zt = k.ajaxSettings.xhr();
          (v.cors = !!zt && "withCredentials" in zt),
            (v.ajax = zt = !!zt),
            k.ajaxTransport(function (e) {
              var t, n;
              if (v.cors || (zt && !e.crossDomain))
                return {
                  send: function (o, i) {
                    var a,
                      s = e.xhr();
                    if (
                      (s.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (a in e.xhrFields) s[a] = e.xhrFields[a];
                    for (a in (e.mimeType &&
                      s.overrideMimeType &&
                      s.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      o["X-Requested-With"] ||
                      (o["X-Requested-With"] = "XMLHttpRequest"),
                    o))
                      s.setRequestHeader(a, o[a]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t = n = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                          "abort" === e
                            ? s.abort()
                            : "error" === e
                            ? "number" != typeof s.status
                              ? i(0, "error")
                              : i(s.status, s.statusText)
                            : i(
                                Xt[s.status] || s.status,
                                s.statusText,
                                "text" !== (s.responseType || "text") ||
                                  "string" != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (s.onload = t()),
                      (n = s.onerror = s.ontimeout = t("error")),
                      void 0 !== s.onabort
                        ? (s.onabort = n)
                        : (s.onreadystatechange = function () {
                            4 === s.readyState &&
                              r.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      s.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            k.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            k.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return k.globalEval(e), e;
                },
              },
            }),
            k.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            k.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (r, o) {
                    (t = k("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && o("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      x.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var Ut,
            Yt = [],
            Gt = /(=)\?(?=&|$)|\?\?/;
          k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = Yt.pop() || k.expando + "_" + kt.guid++;
              return (this[e] = !0), e;
            },
          }),
            k.ajaxPrefilter("json jsonp", function (e, t, n) {
              var o,
                i,
                a,
                s =
                  !1 !== e.jsonp &&
                  (Gt.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      Gt.test(e.data) &&
                      "data");
              if (s || "jsonp" === e.dataTypes[0])
                return (
                  (o = e.jsonpCallback = m(e.jsonpCallback)
                    ? e.jsonpCallback()
                    : e.jsonpCallback),
                  s
                    ? (e[s] = e[s].replace(Gt, "$1" + o))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + o),
                  (e.converters["script json"] = function () {
                    return a || k.error(o + " was not called"), a[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (i = r[o]),
                  (r[o] = function () {
                    a = arguments;
                  }),
                  n.always(function () {
                    void 0 === i ? k(r).removeProp(o) : (r[o] = i),
                      e[o] && ((e.jsonpCallback = t.jsonpCallback), Yt.push(o)),
                      a && m(i) && i(a[0]),
                      (a = i = void 0);
                  }),
                  "script"
                );
            }),
            (v.createHTMLDocument =
              (((Ut = x.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === Ut.childNodes.length)),
            (k.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (v.createHTMLDocument
                      ? (((r = (t = x.implementation.createHTMLDocument(
                          ""
                        )).createElement("base")).href = x.location.href),
                        t.head.appendChild(r))
                      : (t = x)),
                  (i = !n && []),
                  (o = q.exec(e))
                    ? [t.createElement(o[1])]
                    : ((o = Ce([e], t, i)),
                      i && i.length && k(i).remove(),
                      k.merge([], o.childNodes)));
              var r, o, i;
            }),
            (k.fn.load = function (e, t, n) {
              var r,
                o,
                i,
                a = this,
                s = e.indexOf(" ");
              return (
                s > -1 && ((r = mt(e.slice(s))), (e = e.slice(0, s))),
                m(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (o = "POST"),
                a.length > 0 &&
                  k
                    .ajax({
                      url: e,
                      type: o || "GET",
                      dataType: "html",
                      data: t,
                    })
                    .done(function (e) {
                      (i = arguments),
                        a.html(
                          r ? k("<div>").append(k.parseHTML(e)).find(r) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          a.each(function () {
                            n.apply(this, i || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (k.expr.pseudos.animated = function (e) {
              return k.grep(k.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (k.offset = {
              setOffset: function (e, t, n) {
                var r,
                  o,
                  i,
                  a,
                  s,
                  u,
                  l = k.css(e, "position"),
                  c = k(e),
                  f = {};
                "static" === l && (e.style.position = "relative"),
                  (s = c.offset()),
                  (i = k.css(e, "top")),
                  (u = k.css(e, "left")),
                  ("absolute" === l || "fixed" === l) &&
                  (i + u).indexOf("auto") > -1
                    ? ((a = (r = c.position()).top), (o = r.left))
                    : ((a = parseFloat(i) || 0), (o = parseFloat(u) || 0)),
                  m(t) && (t = t.call(e, n, k.extend({}, s))),
                  null != t.top && (f.top = t.top - s.top + a),
                  null != t.left && (f.left = t.left - s.left + o),
                  "using" in t ? t.using.call(e, f) : c.css(f);
              },
            }),
            k.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        k.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  r = this[0];
                return r
                  ? r.getClientRects().length
                    ? ((t = r.getBoundingClientRect()),
                      (n = r.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    r = this[0],
                    o = { top: 0, left: 0 };
                  if ("fixed" === k.css(r, "position"))
                    t = r.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === k.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== r &&
                      1 === e.nodeType &&
                      (((o = k(e).offset()).top += k.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (o.left += k.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - o.top - k.css(r, "marginTop", !0),
                    left: t.left - o.left - k.css(r, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === k.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || ae;
                });
              },
            }),
            k.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                k.fn[e] = function (r) {
                  return z(
                    this,
                    function (e, r, o) {
                      var i;
                      if (
                        (y(e)
                          ? (i = e)
                          : 9 === e.nodeType && (i = e.defaultView),
                        void 0 === o)
                      )
                        return i ? i[t] : e[r];
                      i
                        ? i.scrollTo(
                            n ? i.pageXOffset : o,
                            n ? o : i.pageYOffset
                          )
                        : (e[r] = o);
                    },
                    e,
                    r,
                    arguments.length
                  );
                };
              }
            ),
            k.each(["top", "left"], function (e, t) {
              k.cssHooks[t] = ze(v.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Xe(e, t)), Fe.test(n) ? k(e).position()[t] + "px" : n
                  );
              });
            }),
            k.each({ Height: "height", Width: "width" }, function (e, t) {
              k.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                  k.fn[r] = function (o, i) {
                    var a = arguments.length && (n || "boolean" != typeof o),
                      s = n || (!0 === o || !0 === i ? "margin" : "border");
                    return z(
                      this,
                      function (t, n, o) {
                        var i;
                        return y(t)
                          ? 0 === r.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((i = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              i["scroll" + e],
                              t.body["offset" + e],
                              i["offset" + e],
                              i["client" + e]
                            ))
                          : void 0 === o
                          ? k.css(t, n, s)
                          : k.style(t, n, o, s);
                      },
                      t,
                      a ? o : void 0,
                      a
                    );
                  };
                }
              );
            }),
            k.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                k.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            k.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
              },
            }),
            k.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                k.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var Vt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          (k.proxy = function (e, t) {
            var n, r, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
              return (
                (r = s.call(arguments, 2)),
                ((o = function () {
                  return e.apply(t || this, r.concat(s.call(arguments)));
                }).guid = e.guid = e.guid || k.guid++),
                o
              );
          }),
            (k.holdReady = function (e) {
              e ? k.readyWait++ : k.ready(!0);
            }),
            (k.isArray = Array.isArray),
            (k.parseJSON = JSON.parse),
            (k.nodeName = D),
            (k.isFunction = m),
            (k.isWindow = y),
            (k.camelCase = V),
            (k.type = T),
            (k.now = Date.now),
            (k.isNumeric = function (e) {
              var t = k.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (k.trim = function (e) {
              return null == e ? "" : (e + "").replace(Vt, "");
            }),
            void 0 ===
              (n = function () {
                return k;
              }.apply(t, [])) || (e.exports = n);
          var Qt = r.jQuery,
            Zt = r.$;
          return (
            (k.noConflict = function (e) {
              return (
                r.$ === k && (r.$ = Zt),
                e && r.jQuery === k && (r.jQuery = Qt),
                k
              );
            }),
            void 0 === o && (r.jQuery = r.$ = k),
            k
          );
        });
      },
      379: (e, t, n) => {
        "use strict";
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          i = [];
        function a(e) {
          for (var t = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function s(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var s = e[o],
              u = t.base ? s[0] + t.base : s[0],
              l = n[u] || 0,
              c = "".concat(u, " ").concat(l);
            n[u] = l + 1;
            var f = a(c),
              p = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== f
              ? (i[f].references++, i[f].updater(p))
              : i.push({ identifier: c, updater: g(p, t), references: 1 }),
              r.push(c);
          }
          return r;
        }
        function u(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = o(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            a.appendChild(t);
          }
          return t;
        }
        var l,
          c =
            ((l = []),
            function (e, t) {
              return (l[e] = t), l.filter(Boolean).join("\n");
            });
        function f(e, t, n, r) {
          var o = n
            ? ""
            : r.media
            ? "@media ".concat(r.media, " {").concat(r.css, "}")
            : r.css;
          if (e.styleSheet) e.styleSheet.cssText = c(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
          }
        }
        function p(e, t, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap;
          if (
            (o ? e.setAttribute("media", o) : e.removeAttribute("media"),
            i &&
              "undefined" != typeof btoa &&
              (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                " */"
              )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var d = null,
          h = 0;
        function g(e, t) {
          var n, r, o;
          if (t.singleton) {
            var i = h++;
            (n = d || (d = u(t))),
              (r = f.bind(null, n, i, !1)),
              (o = f.bind(null, n, i, !0));
          } else
            (n = u(t)),
              (r = p.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob
                )),
              r));
          var n = s((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < n.length; r++) {
                var o = a(n[r]);
                i[o].references--;
              }
              for (var u = s(e, t), l = 0; l < n.length; l++) {
                var c = a(n[l]);
                0 === i[c].references && (i[c].updater(), i.splice(c, 1));
              }
              n = u;
            }
          };
        };
      },
      911: (e, t, n) => {
        n(755)("#modb").on("click", function () {
          alert("pepe");
        });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      console.log(4);
      let e = new (class {
        constructor(e, t) {
          (this.alto = e), (this.ancho = t);
        }
        get area() {
          return this.calcArea();
        }
        calcArea() {
          return this.alto * this.ancho;
        }
      })(10, 10);
      console.log(e.area),
        console.log("This a paragraph using a Template String"),
        n(911);
      var t = n(379),
        r = n.n(t),
        o = n(958);
      r()(o.Z, { insert: "head", singleton: !1 }), o.Z.locals;
      var i = n(755);
      i("#img1").attr(
        "src",
        "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiNGQyYWRhMjI4ZTQ3OGJhNGUwYWFjY2Q3MjM1NWRlZDYucG5nIjs="
      ),
        i("#img3").attr(
          "src",
          "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiMDk2M2I3YTU5MTIyNzE2NDU2NmNlODg4ZWY3MmEzYTAucG5nIjs="
        );
    })();
})();
