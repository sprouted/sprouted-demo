/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
    webpackJsonpFirebase([4], {
        76: function(t, n, e) { e(77) },
        77: function(t, n, e) {
            (function(t) {
                (function() {
                    function t(t) { return "string" == typeof t }

                    function n(t) { return "boolean" == typeof t }

                    function i() {}

                    function r(t) { var n = typeof t; if ("object" == n) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return n; var e = Object.prototype.toString.call(t); if ("[object Window]" == e) return "object"; if ("[object Array]" == e || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == e || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == n && void 0 === t.call) return "object"; return n }

                    function o(t) { return null === t }

                    function a(t) { return "array" == r(t) }

                    function s(t) { var n = r(t); return "array" == n || "object" == n && "number" == typeof t.length }

                    function u(t) { return "function" == r(t) }

                    function c(t) { var n = typeof t; return "object" == n && null != t || "function" == n }

                    function h(t, n, e) { return t.call.apply(t.bind, arguments) }

                    function f(t, n, e) { if (!t) throw Error(); if (2 < arguments.length) { var i = Array.prototype.slice.call(arguments, 2); return function() { var e = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(e, i), t.apply(n, e) } } return function() { return t.apply(n, arguments) } }

                    function l(t, n, e) { return l = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? h : f, l.apply(null, arguments) }

                    function p(t, n) { var e = Array.prototype.slice.call(arguments, 1); return function() { var n = e.slice(); return n.push.apply(n, arguments), t.apply(this, n) } }

                    function d(t, n) {
                        function e() {} e.prototype = n.prototype, t.ib = n.prototype, t.prototype = new e, t.prototype.constructor = t, t.Nc = function(t, e, i) { for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++) r[o - 2] = arguments[o]; return n.prototype[e].apply(t, r) }
                    }

                    function v(t) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, v);
                        else {
                            var n = Error().stack;
                            n && (this.stack = n)
                        }
                        t && (this.message = t + "")
                    }

                    function m(t, n) { for (var e = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < e.length;) i += e.shift() + r.shift(); return i + e.join("%s") }

                    function g(t) { return wu.test(t) ? (-1 != t.indexOf("&") && (t = t.replace(pu, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(du, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(vu, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(mu, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(gu, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(bu, "&#0;")), t) : t }

                    function b(t, n) { return -1 != t.indexOf(n) }

                    function w(t, n) { return t < n ? -1 : t > n ? 1 : 0 }

                    function y(t, n) { n.unshift(t), v.call(this, m.apply(null, n)), n.shift() }

                    function I(t, n) { throw new y("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)) }

                    function T(n, e) {
                        var i = n.length,
                            r = t(n) ? n.split("") : n;
                        for (--i; 0 <= i; --i) i in r && e.call(void 0, r[i], i, n)
                    }

                    function k(n) {
                        t: {
                            for (var e = ke, i = n.length, r = t(n) ? n.split("") : n, o = 0; o < i; o++)
                                if (o in r && e.call(void 0, r[o], o, n)) { e = o; break t }
                            e = -1
                        }
                        return 0 > e ? null : t(n) ? n.charAt(e) : n[e]
                    }

                    function A(t, n) { return 0 <= Iu(t, n) }

                    function E(t, n) { n = Iu(t, n); var e; return (e = 0 <= n) && Array.prototype.splice.call(t, n, 1), e }

                    function N(t, n) {
                        var e = 0;
                        T(t, function(i, r) { n.call(void 0, i, r, t) && 1 == Array.prototype.splice.call(t, r, 1).length && e++ })
                    }

                    function S(t) { return Array.prototype.concat.apply([], arguments) }

                    function O(t) { var n = t.length; if (0 < n) { for (var e = Array(n), i = 0; i < n; i++) e[i] = t[i]; return e } return [] }

                    function P(t) { return b(yu, t) }

                    function C(t, n) { for (var e in t) n.call(void 0, t[e], e, t) }

                    function _(t) {
                        var n, e = [],
                            i = 0;
                        for (n in t) e[i++] = t[n];
                        return e
                    }

                    function R(t) {
                        var n, e = [],
                            i = 0;
                        for (n in t) e[i++] = n;
                        return e
                    }

                    function D(t) { for (var n in t) return !1; return !0 }

                    function L(t, n) {
                        for (var e in t)
                            if (!(e in n) || t[e] !== n[e]) return !1;
                        for (e in n)
                            if (!(e in t)) return !1;
                        return !0
                    }

                    function x(t) { var n, e = {}; for (n in t) e[n] = t[n]; return e }

                    function j(t, n) { for (var e, i, r = 1; r < arguments.length; r++) { i = arguments[r]; for (e in i) t[e] = i[e]; for (var o = 0; o < Su.length; o++) e = Su[o], Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e]) } }

                    function U(t) { return U[" "](t), t }

                    function M(t, n) { var e = Vu; return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : e[t] = n(t) }

                    function V() { var t = uu.document; return t ? t.documentMode : void 0 }

                    function F(t) {
                        return M(t, function() {
                            for (var n = 0, e = lu(Ou + "").split("."), i = lu(t + "").split("."), r = Math.max(e.length, i.length), o = 0; 0 == n && o < r; o++) {
                                var a = e[o] || "",
                                    s = i[o] || "";
                                do {
                                    if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length) break;
                                    n = w(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || w(0 == a[2].length, 0 == s[2].length) || w(a[2], s[2]), a = a[3], s = s[3]
                                } while (0 == n)
                            }
                            return 0 <= n
                        })
                    }

                    function K(t) { t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0 }

                    function q(t) { if (!t) return !1; try { return !!t.$goog_Thenable } catch (t) { return !1 } }

                    function X(t, n, e) { this.f = e, this.c = t, this.g = n, this.b = 0, this.a = null }

                    function B(t, n) { t.g(n), t.b < t.f && (t.b++, n.next = t.a, t.a = n) }

                    function H() {
                        var t = Hu,
                            n = null;
                        return t.a && (n = t.a, t.a = t.a.next, t.a || (t.b = null), n.next = null), n
                    }

                    function W() { this.next = this.b = this.a = null }

                    function G(t) { uu.setTimeout(function() { throw t }, 0) }

                    function z() {
                        var t = uu.MessageChannel;
                        if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !P("Presto") && (t = function() {
                                var t = document.createElement("IFRAME");
                                t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
                                var n = t.contentWindow;
                                t = n.document, t.open(), t.write(""), t.close();
                                var e = "callImmediate" + Math.random(),
                                    i = "file:" == n.location.protocol ? "*" : n.location.protocol + "//" + n.location.host;
                                t = l(function(t) { "*" != i && t.origin != i || t.data != e || this.port1.onmessage() }, this), n.addEventListener("message", t, !1), this.port1 = {}, this.port2 = { postMessage: function() { n.postMessage(e, i) } }
                            }), void 0 !== t && !P("Trident") && !P("MSIE")) {
                            var n = new t,
                                e = {},
                                i = e;
                            return n.port1.onmessage = function() {
                                    if (void 0 !== e.next) {
                                        e = e.next;
                                        var t = e.pb;
                                        e.pb = null, t()
                                    }
                                },
                                function(t) { i.next = { pb: t }, i = i.next, n.port2.postMessage(0) }
                        }
                        return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) {
                            var n = document.createElement("SCRIPT");
                            n.onreadystatechange = function() { n.onreadystatechange = null, n.parentNode.removeChild(n), n = null, t(), t = null }, document.documentElement.appendChild(n)
                        } : function(t) { uu.setTimeout(t, 0) }
                    }

                    function J(t, n) {
                        Xu || Y(), Bu || (Xu(), Bu = !0);
                        var e = Hu,
                            i = Ku.get();
                        i.set(t, n), e.b ? e.b.next = i : e.a = i, e.b = i
                    }

                    function Y() {
                        if (-1 != (uu.Promise + "").indexOf("[native code]")) {
                            var t = uu.Promise.resolve(void 0);
                            Xu = function() { t.then($) }
                        }
                        else Xu = function() { var t = $;!u(uu.setImmediate) || uu.Window && uu.Window.prototype && !P("Edge") && uu.Window.prototype.setImmediate == uu.setImmediate ? (qu || (qu = z()), qu(t)) : uu.setImmediate(t) }
                    }

                    function $() { for (var t; t = H();) { try { t.a.call(t.b) } catch (t) { G(t) } B(Ku, t) } Bu = !1 }

                    function Z(t, n) {
                        if (this.a = Wu, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != i) try {
                            var e = this;
                            t.call(n, function(t) { ht(e, Gu, t) }, function(t) {
                                if (!(t instanceof bt)) try { if (t instanceof Error) throw t; throw Error("Promise rejected.") }
                                catch (t) {} ht(e, zu, t)
                            })
                        }
                        catch (t) { ht(this, zu, t) }
                    }

                    function Q() { this.next = this.f = this.b = this.g = this.a = null, this.c = !1 }

                    function tt(t, n, e) { var i = Ju.get(); return i.g = t, i.b = n, i.f = e, i }

                    function nt(t) { if (t instanceof Z) return t; var n = new Z(i); return ht(n, Gu, t), n }

                    function et(t) { return new Z(function(n, e) { e(t) }) }

                    function it(t, n, e) { ft(t, n, e, null) || J(p(n, t)) }

                    function rt(t) {
                        return new Z(function(n, e) {
                            var i = t.length,
                                r = [];
                            if (i)
                                for (var o, a = function(t, e) { i--, r[t] = e, 0 == i && n(r) }, s = function(t) { e(t) }, u = 0; u < t.length; u++) o = t[u], it(o, p(a, u), s);
                            else n(r)
                        })
                    }

                    function ot(t) {
                        return new Z(function(n) {
                            var e = t.length,
                                i = [];
                            if (e)
                                for (var r, o = function(t, r, o) { e--, i[t] = r ? { Qb: !0, value: o } : { Qb: !1, reason: o }, 0 == e && n(i) }, a = 0; a < t.length; a++) r = t[a], it(r, p(o, a, !0), p(o, a, !1));
                            else n(i)
                        })
                    }

                    function at(t, n) { return n = tt(n, n, void 0), n.c = !0, ut(t, n), t }

                    function st(t, n) {
                        if (t.a == Wu)
                            if (t.c) {
                                var e = t.c;
                                if (e.b) {
                                    for (var i = 0, r = null, o = null, a = e.b; a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i))); a = a.next) r || (o = a);
                                    r && (e.a == Wu && 1 == i ? st(e, n) : (o ? (i = o, i.next == e.f && (e.f = i), i.next = i.next.next) : dt(e), vt(e, r, zu, n)))
                                }
                                t.c = null
                            }
                        else ht(t, zu, n)
                    }

                    function ut(t, n) { t.b || t.a != Gu && t.a != zu || pt(t), t.f ? t.f.next = n : t.b = n, t.f = n }

                    function ct(t, n, e, i) {
                        var r = tt(null, null, null);
                        return r.a = new Z(function(t, o) {
                            r.g = n ? function(e) {
                                try {
                                    var r = n.call(i, e);
                                    t(r)
                                }
                                catch (t) { o(t) }
                            } : t, r.b = e ? function(n) {
                                try {
                                    var r = e.call(i, n);
                                    void 0 === r && n instanceof bt ? o(n) : t(r)
                                }
                                catch (t) { o(t) }
                            } : o
                        }), r.a.c = t, ut(t, r), r.a
                    }

                    function ht(t, n, e) { t.a == Wu && (t === e && (n = zu, e = new TypeError("Promise cannot resolve to itself")), t.a = 1, ft(e, t.wc, t.xc, t) || (t.i = e, t.a = n, t.c = null, pt(t), n != zu || e instanceof bt || gt(t, e))) }

                    function ft(t, n, e, r) {
                        if (t instanceof Z) return ut(t, tt(n || i, e || null, r)), !0;
                        if (q(t)) return t.then(n, e, r), !0;
                        if (c(t)) try { var o = t.then; if (u(o)) return lt(t, o, n, e, r), !0 }
                        catch (t) { return e.call(r, t), !0 }
                        return !1
                    }

                    function lt(t, n, e, i, r) {
                        function o(t) { s || (s = !0, i.call(r, t)) }

                        function a(t) { s || (s = !0, e.call(r, t)) }
                        var s = !1;
                        try { n.call(t, a, o) }
                        catch (t) { o(t) }
                    }

                    function pt(t) { t.h || (t.h = !0, J(t.Mb, t)) }

                    function dt(t) { var n = null; return t.b && (n = t.b, t.b = n.next, n.next = null), t.b || (t.f = null), n }

                    function vt(t, n, e, i) {
                        if (e == zu && n.b && !n.c)
                            for (; t && t.g; t = t.c) t.g = !1;
                        if (n.a) n.a.c = null, mt(n, e, i);
                        else try { n.c ? n.g.call(n.f) : mt(n, e, i) }
                        catch (t) { Yu.call(null, t) } B(Ju, n)
                    }

                    function mt(t, n, e) { n == Gu ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e) }

                    function gt(t, n) { t.g = !0, J(function() { t.g && Yu.call(null, n) }) }

                    function bt(t) { v.call(this, t) }

                    function wt() { this.a = "", this.b = Zu }

                    function yt(t) { return t instanceof wt && t.constructor === wt && t.b === Zu ? t.a : (I("expected object of type Const, got '" + t + "'"), "type_error:Const") }

                    function It(t) { var n = new wt; return n.a = t, n }

                    function Tt() { this.a = "", this.b = nc }

                    function kt(t) { return t instanceof Tt && t.constructor === Tt && t.b === nc ? t.a : (I("expected object of type TrustedResourceUrl, got '" + t + "' of type " + r(t)), "type_error:TrustedResourceUrl") }

                    function At(t, n) { return t = Et(t, n), n = new Tt, n.a = t, n }

                    function Et(t, n) { var e = yt(t); if (!tc.test(e)) throw Error("Invalid TrustedResourceUrl format: " + e); return e.replace(Qu, function(t, i) { if (!Object.prototype.hasOwnProperty.call(n, i)) throw Error('Found marker, "' + i + '", in format string, "' + e + '", but no valid label mapping found in args: ' + JSON.stringify(n)); return t = n[i], t instanceof wt ? yt(t) : encodeURIComponent(t + "") }) }

                    function Nt() { this.a = "", this.b = ic }

                    function St(t) { return t instanceof Nt && t.constructor === Nt && t.b === ic ? t.a : (I("expected object of type SafeUrl, got '" + t + "' of type " + r(t)), "type_error:SafeUrl") }

                    function Ot(t) { return t instanceof Nt ? t : (t = t.la ? t.ja() : t + "", ec.test(t) || (t = "about:invalid#zClosurez"), Pt(t)) }

                    function Pt(t) { var n = new Nt; return n.a = t, n }

                    function Ct() { this.a = "", this.b = rc }

                    function _t(t) { return t instanceof Ct && t.constructor === Ct && t.b === rc ? t.a : (I("expected object of type SafeHtml, got '" + t + "' of type " + r(t)), "type_error:SafeHtml") }

                    function Rt(t) { var n = new Ct; return n.a = t, n }

                    function Dt(n) { var e = document; return t(n) ? e.getElementById(n) : n }

                    function Lt(t, n) { C(n, function(n, e) { n && n.la && (n = n.ja()), "style" == e ? t.style.cssText = n : "class" == e ? t.className = n : "for" == e ? t.htmlFor = n : oc.hasOwnProperty(e) ? t.setAttribute(oc[e], n) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? t.setAttribute(e, n) : t[e] = n }) }

                    function xt(n, e, i) {
                        var r = arguments,
                            o = document,
                            s = r[0] + "",
                            u = r[1];
                        if (!$u && u && (u.name || u.type)) {
                            if (s = ["<", s], u.name && s.push(' name="', g(u.name), '"'), u.type) {
                                s.push(' type="', g(u.type), '"');
                                var c = {};
                                j(c, u), delete c.type, u = c
                            }
                            s.push(">"), s = s.join("")
                        }
                        return s = o.createElement(s), u && (t(u) ? s.className = u : a(u) ? s.className = u.join(" ") : Lt(s, u)), 2 < r.length && jt(o, s, r), s
                    }

                    function jt(n, e, i) {
                        function r(i) { i && e.appendChild(t(i) ? n.createTextNode(i) : i) }
                        for (var o = 2; o < i.length; o++) { var a = i[o];!s(a) || c(a) && 0 < a.nodeType ? r(a) : Tu(Ut(a) ? O(a) : a, r) }
                    }

                    function Ut(t) { if (t && "number" == typeof t.length) { if (c(t)) return "function" == typeof t.item || "string" == typeof t.item; if (u(t)) return "function" == typeof t.item } return !1 }

                    function Mt(t) { var n = []; return Ft(new Vt, t, n), n.join("") }

                    function Vt() {}

                    function Ft(t, n, e) {
                        if (null == n) e.push("null");
                        else {
                            if ("object" == typeof n) {
                                if (a(n)) {
                                    var i = n;
                                    n = i.length, e.push("[");
                                    for (var r = "", o = 0; o < n; o++) e.push(r), Ft(t, i[o], e), r = ",";
                                    return void e.push("]")
                                }
                                if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) { e.push("{"), r = ""; for (i in n) Object.prototype.hasOwnProperty.call(n, i) && "function" != typeof(o = n[i]) && (e.push(r), Kt(i, e), e.push(":"), Ft(t, o, e), r = ","); return void e.push("}") } n = n.valueOf()
                            }
                            switch (typeof n) {
                                case "string":
                                    Kt(n, e);
                                    break;
                                case "number":
                                    e.push(isFinite(n) && !isNaN(n) ? n + "" : "null");
                                    break;
                                case "boolean":
                                    e.push(n + "");
                                    break;
                                case "function":
                                    e.push("null");
                                    break;
                                default:
                                    throw Error("Unknown type: " + typeof n)
                            }
                        }
                    }

                    function Kt(t, n) { n.push('"', t.replace(sc, function(t) { var n = ac[t]; return n || (n = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), ac[t] = n), n }), '"') }

                    function qt() { 0 != uc && (cc[this[cu] || (this[cu] = ++hu)] = this), this.oa = this.oa, this.Fa = this.Fa }

                    function Xt(t) { t.oa || (t.oa = !0, t.ta(), 0 != uc && (t = t[cu] || (t[cu] = ++hu), delete cc[t])) }

                    function Bt(t, n) { this.type = t, this.b = this.target = n, this.Ab = !0 }

                    function Ht(n, e) {
                        if (Bt.call(this, n ? n.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, n) {
                            var i = this.type = n.type,
                                r = n.changedTouches ? n.changedTouches[0] : null;
                            if (this.target = n.target || n.srcElement, this.b = e, e = n.relatedTarget) { if (Du) { t: { try { U(e.nodeName); var o = !0; break t } catch (t) {} o = !1 } o || (e = null) } }
                            else "mouseover" == i ? e = n.fromElement : "mouseout" == i && (e = n.toElement);
                            this.relatedTarget = e, null === r ? (this.clientX = void 0 !== n.clientX ? n.clientX : n.pageX, this.clientY = void 0 !== n.clientY ? n.clientY : n.pageY, this.screenX = n.screenX || 0, this.screenY = n.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = n.button, this.key = n.key || "", this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.pointerId = n.pointerId || 0, this.pointerType = t(n.pointerType) ? n.pointerType : dc[n.pointerType] || "", this.a = n, n.defaultPrevented && this.c()
                        }
                    }

                    function Wt(t, n, e, i, r) { this.listener = t, this.a = null, this.src = n, this.type = e, this.capture = !!i, this.La = r, this.key = ++mc, this.ma = this.Ha = !1 }

                    function Gt(t) { t.ma = !0, t.listener = null, t.a = null, t.src = null, t.La = null }

                    function zt(t) { this.src = t, this.a = {}, this.b = 0 }

                    function Jt(t, n, e, i, r, o) {
                        var a = "" + n;
                        (n = t.a[a]) || (n = t.a[a] = [], t.b++);
                        var s = $t(n, e, r, o);
                        return -1 < s ? (t = n[s], i || (t.Ha = !1)) : (t = new Wt(e, t.src, a, !!r, o), t.Ha = i, n.push(t)), t
                    }

                    function Yt(t, n) {
                        var e = n.type;
                        e in t.a && E(t.a[e], n) && (Gt(n), 0 == t.a[e].length && (delete t.a[e], t.b--))
                    }

                    function $t(t, n, e, i) { for (var r = 0; r < t.length; ++r) { var o = t[r]; if (!o.ma && o.listener == n && o.capture == !!e && o.La == i) return r } return -1 }

                    function Zt(t, n, e, i, r) {
                        if (i && i.once) nn(t, n, e, i, r);
                        else if (a(n))
                            for (var o = 0; o < n.length; o++) Zt(t, n[o], e, i, r);
                        else e = hn(e), t && t[vc] ? pn(t, n, e, c(i) ? !!i.capture : !!i, r) : Qt(t, n, e, !1, i, r)
                    }

                    function Qt(t, n, e, i, r, o) {
                        if (!n) throw Error("Invalid event type");
                        var a = c(r) ? !!r.capture : !!r,
                            s = cn(t);
                        if (s || (t[gc] = s = new zt(t)), e = Jt(s, n, e, i, a, o), !e.a) {
                            if (i = tn(), e.a = i, i.src = t, i.listener = e, t.addEventListener) pc || (r = a), void 0 === r && (r = !1), t.addEventListener("" + n, i, r);
                            else {
                                if (!t.attachEvent) throw Error("addEventListener and attachEvent are unavailable.");
                                t.attachEvent(on("" + n), i)
                            }
                            wc++
                        }
                    }

                    function tn() {
                        var t = un,
                            n = fc ? function(e) { return t.call(n.src, n.listener, e) } : function(e) { if (!(e = t.call(n.src, n.listener, e))) return e };
                        return n
                    }

                    function nn(t, n, e, i, r) {
                        if (a(n))
                            for (var o = 0; o < n.length; o++) nn(t, n[o], e, i, r);
                        else e = hn(e), t && t[vc] ? dn(t, n, e, c(i) ? !!i.capture : !!i, r) : Qt(t, n, e, !0, i, r)
                    }

                    function en(t, n, e, i, r) {
                        if (a(n))
                            for (var o = 0; o < n.length; o++) en(t, n[o], e, i, r);
                        else i = c(i) ? !!i.capture : !!i, e = hn(e), t && t[vc] ? (t = t.u, (n += "") in t.a && (o = t.a[n], -1 < (e = $t(o, e, i, r)) && (Gt(o[e]), Array.prototype.splice.call(o, e, 1), 0 == o.length && (delete t.a[n], t.b--)))) : t && (t = cn(t)) && (n = t.a["" + n], t = -1, n && (t = $t(n, e, i, r)), (e = -1 < t ? n[t] : null) && rn(e))
                    }

                    function rn(t) {
                        if ("number" != typeof t && t && !t.ma) {
                            var n = t.src;
                            if (n && n[vc]) Yt(n.u, t);
                            else {
                                var e = t.type,
                                    i = t.a;
                                n.removeEventListener ? n.removeEventListener(e, i, t.capture) : n.detachEvent && n.detachEvent(on(e), i), wc--, (e = cn(n)) ? (Yt(e, t), 0 == e.b && (e.src = null, n[gc] = null)) : Gt(t)
                            }
                        }
                    }

                    function on(t) { return t in bc ? bc[t] : bc[t] = "on" + t }

                    function an(t, n, e, i) {
                        var r = !0;
                        if ((t = cn(t)) && (n = t.a["" + n]))
                            for (n = n.concat(), t = 0; t < n.length; t++) {
                                var o = n[t];
                                o && o.capture == e && !o.ma && (o = sn(o, i), r = r && !1 !== o)
                            }
                        return r
                    }

                    function sn(t, n) {
                        var e = t.listener,
                            i = t.La || t.src;
                        return t.Ha && rn(t), e.call(i, n)
                    }

                    function un(t, n) {
                        if (t.ma) return !0;
                        if (!fc) {
                            if (!n) t: {
                                n = ["window", "event"];
                                for (var e = uu, i = 0; i < n.length; i++)
                                    if (null == (e = e[n[i]])) { n = null; break t }
                                n = e
                            }
                            if (i = n, n = new Ht(i, this), e = !0, !(0 > i.keyCode || void 0 != i.returnValue)) {
                                t: {
                                    var r = !1;
                                    if (0 == i.keyCode) try { i.keyCode = -1; break t }
                                    catch (t) { r = !0 }(r || void 0 == i.returnValue) && (i.returnValue = !0)
                                }
                                for (i = [], r = n.b; r; r = r.parentNode) i.push(r);
                                for (t = t.type, r = i.length - 1; 0 <= r; r--) {
                                    n.b = i[r];
                                    var o = an(i[r], t, !0, n);
                                    e = e && o
                                }
                                for (r = 0; r < i.length; r++) n.b = i[r],
                                o = an(i[r], t, !1, n),
                                e = e && o
                            }
                            return e
                        }
                        return sn(t, new Ht(n, this))
                    }

                    function cn(t) { return t = t[gc], t instanceof zt ? t : null }

                    function hn(t) { return u(t) ? t : (t[yc] || (t[yc] = function(n) { return t.handleEvent(n) }), t[yc]) }

                    function fn() { qt.call(this), this.u = new zt(this), this.Eb = this, this.Ra = null }

                    function ln(n, e) {
                        var i, r = n.Ra;
                        if (r)
                            for (i = []; r; r = r.Ra) i.push(r);
                        if (n = n.Eb, r = e.type || e, t(e)) e = new Bt(e, n);
                        else if (e instanceof Bt) e.target = e.target || n;
                        else {
                            var o = e;
                            e = new Bt(r, n), j(e, o)
                        }
                        if (o = !0, i)
                            for (var a = i.length - 1; 0 <= a; a--) {
                                var s = e.b = i[a];
                                o = vn(s, r, !0, e) && o
                            }
                        if (s = e.b = n, o = vn(s, r, !0, e) && o, o = vn(s, r, !1, e) && o, i)
                            for (a = 0; a < i.length; a++) s = e.b = i[a], o = vn(s, r, !1, e) && o
                    }

                    function pn(t, n, e, i, r) { Jt(t.u, n + "", e, !1, i, r) }

                    function dn(t, n, e, i, r) { Jt(t.u, n + "", e, !0, i, r) }

                    function vn(t, n, e, i) {
                        if (!(n = t.u.a[n + ""])) return !0;
                        n = n.concat();
                        for (var r = !0, o = 0; o < n.length; ++o) {
                            var a = n[o];
                            if (a && !a.ma && a.capture == e) {
                                var s = a.listener,
                                    u = a.La || a.src;
                                a.Ha && Yt(t.u, a), r = !1 !== s.call(u, i) && r
                            }
                        }
                        return r && 0 != i.Ab
                    }

                    function mn(t, n, e) {
                        if (u(t)) e && (t = l(t, e));
                        else {
                            if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                            t = l(t.handleEvent, t)
                        }
                        return 2147483647 < +n ? -1 : uu.setTimeout(t, n || 0)
                    }

                    function gn(t) { var n = null; return new Z(function(e, i) {-1 == (n = mn(function() { e(void 0) }, t)) && i(Error("Failed to schedule timer.")) }).s(function(t) { throw uu.clearTimeout(n), t }) }

                    function bn(t, n, e, i, r) { this.reset(t, n, e, i, r) }

                    function wn(t) { this.f = t, this.b = this.c = this.a = null }

                    function yn(t, n) { this.name = t, this.value = n }

                    function In(t) { return t.c ? t.c : t.a ? In(t.a) : (I("Root logger has no level set."), null) }

                    function Tn(t) {
                        Nc || (Nc = new wn(""), Ec[""] = Nc, Nc.c = kc);
                        var n;
                        if (!(n = Ec[t])) {
                            n = new wn(t);
                            var e = t.lastIndexOf("."),
                                i = t.substr(e + 1);
                            e = Tn(t.substr(0, e)), e.b || (e.b = {}), e.b[i] = n, n.a = e, Ec[t] = n
                        }
                        return n
                    }

                    function kn(t, n) { this.b = {}, this.a = [], this.c = 0; var e = arguments.length; if (1 < e) { if (e % 2) throw Error("Uneven number of arguments"); for (var i = 0; i < e; i += 2) this.set(arguments[i], arguments[i + 1]) } else if (t) { t instanceof kn ? (e = t.S(), i = t.P()) : (e = R(t), i = _(t)); for (var r = 0; r < e.length; r++) this.set(e[r], i[r]) } }

                    function An(t) {
                        if (t.c != t.a.length) {
                            for (var n = 0, e = 0; n < t.a.length;) {
                                var i = t.a[n];
                                En(t.b, i) && (t.a[e++] = i), n++
                            }
                            t.a.length = e
                        }
                        if (t.c != t.a.length) {
                            var r = {};
                            for (e = n = 0; n < t.a.length;) i = t.a[n], En(r, i) || (t.a[e++] = i, r[i] = 1), n++;
                            t.a.length = e
                        }
                    }

                    function En(t, n) { return Object.prototype.hasOwnProperty.call(t, n) }

                    function Nn(t, n) { t && t.log(Ac, n, void 0) }

                    function Sn(t) { return ku(t, function(t) { return t = t.toString(16), 1 < t.length ? t : "0" + t }).join("") }

                    function On(t) { var n = ""; return Pn(t, function(t) { n += String.fromCharCode(t) }), n }

                    function Pn(t, n) {
                        function e(n) {
                            for (; i < t.length;) {
                                var e = t.charAt(i++),
                                    r = Oc[e];
                                if (null != r) return r;
                                if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e)
                            }
                            return n
                        }
                        Cn();
                        for (var i = 0;;) {
                            var r = e(-1),
                                o = e(0),
                                a = e(64),
                                s = e(64);
                            if (64 === s && -1 === r) break;
                            n(r << 2 | o >> 4), 64 != a && (n(o << 4 & 240 | a >> 2), 64 != s && n(a << 6 & 192 | s))
                        }
                    }

                    function Cn() { if (!Sc) { Sc = {}, Oc = {}; for (var t = 0; 65 > t; t++) Sc[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), Oc[Sc[t]] = t, 62 <= t && (Oc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t) } }

                    function _n(t, n) { this.g = [], this.v = t, this.o = n || null, this.f = this.a = !1, this.c = void 0, this.u = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0 }

                    function Rn(t, n, e) { t.a = !0, t.c = e, t.f = !n, Un(t) }

                    function Dn(t) {
                        if (t.a) {
                            if (!t.u) throw new Mn;
                            t.u = !1
                        }
                    }

                    function Ln(t, n) { xn(t, null, n, void 0) }

                    function xn(t, n, e, i) { t.g.push([n, e, i]), t.a && Un(t) }

                    function jn(t) { return Au(t.g, function(t) { return u(t[1]) }) }

                    function Un(t) {
                        if (t.h && t.a && jn(t)) {
                            var n = t.h,
                                e = Cc[n];
                            e && (uu.clearTimeout(e.a), delete Cc[n]), t.h = 0
                        }
                        t.b && (t.b.l--, delete t.b), n = t.c;
                        for (var i = e = !1; t.g.length && !t.i;) {
                            var r = t.g.shift(),
                                o = r[0],
                                a = r[1];
                            if (r = r[2], o = t.f ? a : o) try {
                                var s = o.call(r || t.o, n);
                                void 0 !== s && (t.f = t.f && (s == n || s instanceof Error), t.c = n = s), (q(n) || "function" == typeof uu.Promise && n instanceof uu.Promise) && (i = !0, t.i = !0)
                            }
                            catch (i) { n = i, t.f = !0, jn(t) || (e = !0) }
                        }
                        t.c = n, i && (s = l(t.m, t, !0), i = l(t.m, t, !1), n instanceof _n ? (xn(n, s, i), n.w = !0) : n.then(s, i)), e && (n = new Fn(n), Cc[n.a] = n, t.h = n.a)
                    }

                    function Mn() { v.call(this) }

                    function Vn() { v.call(this) }

                    function Fn(t) { this.a = uu.setTimeout(l(this.c, this), 0), this.b = t }

                    function Kn() { this.b = -1 }

                    function qn(t, n) { this.b = -1, this.b = _c, this.f = uu.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = n, this.l = uu.Int32Array ? new Int32Array(64) : Array(64), Pc || (Pc = uu.Int32Array ? new Int32Array(jc) : jc), this.reset() }

                    function Xn(t) {
                        for (var n = t.f, e = t.l, i = 0, r = 0; r < n.length;) e[i++] = n[r] << 24 | n[r + 1] << 16 | n[r + 2] << 8 | n[r + 3], r = 4 * i;
                        for (n = 16; 64 > n; n++) {
                            r = 0 | e[n - 15], i = 0 | e[n - 2];
                            var o = (0 | e[n - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                                a = (0 | e[n - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                            e[n] = o + a | 0
                        }
                        i = 0 | t.a[0], r = 0 | t.a[1];
                        var s = 0 | t.a[2],
                            u = 0 | t.a[3],
                            c = 0 | t.a[4],
                            h = 0 | t.a[5],
                            f = 0 | t.a[6];
                        for (o = 0 | t.a[7], n = 0; 64 > n; n++) {
                            var l = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                            a = c & h ^ ~c & f, o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0, a = a + (0 | Pc[n]) | 0, a = o + (a + (0 | e[n]) | 0) | 0, o = f, f = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + l | 0
                        }
                        t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + f | 0, t.a[7] = t.a[7] + o | 0
                    }

                    function Bn(n, e, i) {
                        void 0 === i && (i = e.length);
                        var r = 0,
                            o = n.c;
                        if (t(e))
                            for (; r < i;) n.f[o++] = e.charCodeAt(r++), o == n.b && (Xn(n), o = 0);
                        else {
                            if (!s(e)) throw Error("message must be string or array");
                            for (; r < i;) {
                                var a = e[r++];
                                if (!("number" == typeof a && 0 <= a && 255 >= a && a == (0 | a))) throw Error("message must be a byte array");
                                n.f[o++] = a, o == n.b && (Xn(n), o = 0)
                            }
                        }
                        n.c = o, n.g += i
                    }

                    function Hn() { qn.call(this, 8, Uc) }

                    function Wn(n) { if (n.P && "function" == typeof n.P) return n.P(); if (t(n)) return n.split(""); if (s(n)) { for (var e = [], i = n.length, r = 0; r < i; r++) e.push(n[r]); return e } return _(n) }

                    function Gn(n) {
                        if (n.S && "function" == typeof n.S) return n.S();
                        if (!n.P || "function" != typeof n.P) {
                            if (s(n) || t(n)) {
                                var e = [];
                                n = n.length;
                                for (var i = 0; i < n; i++) e.push(i);
                                return e
                            }
                            return R(n)
                        }
                    }

                    function zn(n, e) {
                        if (n.forEach && "function" == typeof n.forEach) n.forEach(e, void 0);
                        else if (s(n) || t(n)) Tu(n, e, void 0);
                        else
                            for (var i = Gn(n), r = Wn(n), o = r.length, a = 0; a < o; a++) e.call(void 0, r[a], i && i[a], n)
                    }

                    function Jn(t, n) {
                        if (t) {
                            t = t.split("&");
                            for (var e = 0; e < t.length; e++) {
                                var i = t[e].indexOf("="),
                                    r = null;
                                if (0 <= i) {
                                    var o = t[e].substring(0, i);
                                    r = t[e].substring(i + 1)
                                }
                                else o = t[e];
                                n(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
                            }
                        }
                    }

                    function Yn(t, n) {
                        if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, t instanceof Yn) {
                            this.f = void 0 !== n ? n : t.f, $n(this, t.c), this.l = t.l, this.b = t.b, Zn(this, t.i), this.g = t.g, n = t.a;
                            var e = new se;
                            e.c = n.c, n.a && (e.a = new kn(n.a), e.b = n.b), Qn(this, e), this.h = t.h
                        }
                        else t && (e = (t + "").match(Mc)) ? (this.f = !!n, $n(this, e[1] || "", !0), this.l = re(e[2] || ""), this.b = re(e[3] || "", !0), Zn(this, e[4]), this.g = re(e[5] || "", !0), Qn(this, e[6] || "", !0), this.h = re(e[7] || "")) : (this.f = !!n, this.a = new se(null, 0, this.f))
                    }

                    function $n(t, n, e) { t.c = e ? re(n, !0) : n, t.c && (t.c = t.c.replace(/:$/, "")) }

                    function Zn(t, n) {
                        if (n) {
                            if (n = +n, isNaN(n) || 0 > n) throw Error("Bad port number " + n);
                            t.i = n
                        }
                        else t.i = null
                    }

                    function Qn(t, n, e) { n instanceof se ? (t.a = n, ve(t.a, t.f)) : (e || (n = oe(n, qc)), t.a = new se(n, 0, t.f)) }

                    function te(t, n, e) { t.a.set(n, e) }

                    function ne(t, n) { return t.a.get(n) }

                    function ee(t) { return t instanceof Yn ? new Yn(t) : new Yn(t, void 0) }

                    function ie(t, n) { var e = new Yn(null, void 0); return $n(e, "https"), t && (e.b = t), n && (e.g = n), e }

                    function re(t, n) { return t ? n ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

                    function oe(n, e, i) { return t(n) ? (n = encodeURI(n).replace(e, ae), i && (n = n.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n) : null }

                    function ae(t) { return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16) }

                    function se(t, n, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

                    function ue(t) { t.a || (t.a = new kn, t.b = 0, t.c && Jn(t.c, function(n, e) { he(t, decodeURIComponent(n.replace(/\+/g, " ")), e) })) }

                    function ce(t) {
                        var n = Gn(t);
                        if (void 0 === n) throw Error("Keys are undefined");
                        var e = new se(null, 0, void 0);
                        t = Wn(t);
                        for (var i = 0; i < n.length; i++) {
                            var r = n[i],
                                o = t[i];
                            a(o) ? pe(e, r, o) : he(e, r, o)
                        }
                        return e
                    }

                    function he(t, n, e) {
                        ue(t), t.c = null, n = de(t, n);
                        var i = t.a.get(n);
                        i || t.a.set(n, i = []), i.push(e), t.b += 1
                    }

                    function fe(t, n) { ue(t), n = de(t, n), En(t.a.b, n) && (t.c = null, t.b -= t.a.get(n).length, t = t.a, En(t.b, n) && (delete t.b[n], t.c--, t.a.length > 2 * t.c && An(t))) }

                    function le(t, n) { return ue(t), n = de(t, n), En(t.a.b, n) }

                    function pe(t, n, e) { fe(t, n), 0 < e.length && (t.c = null, t.a.set(de(t, n), O(e)), t.b += e.length) }

                    function de(t, n) { return n += "", t.f && (n = n.toLowerCase()), n }

                    function ve(t, n) {
                        n && !t.f && (ue(t), t.c = null, t.a.forEach(function(t, n) {
                            var e = n.toLowerCase();
                            n != e && (fe(this, n), pe(this, e, t))
                        }, t)), t.f = n
                    }

                    function me() {}

                    function ge(t) { return t.c || (t.c = t.b()) }

                    function be() {}

                    function we(t) { if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) { for (var n = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0; e < 4; e++) { var i = n[e]; try { return new ActiveXObject(i), t.f = i } catch (t) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed") } return t.f }

                    function ye(t) { fn.call(this), this.headers = new kn, this.w = t || null, this.b = !1, this.v = this.a = null, this.g = this.I = this.i = "", this.c = this.G = this.h = this.A = !1, this.f = 0, this.m = null, this.l = Hc, this.o = this.N = !1 }

                    function Ie(t, n, e, i, r) {
                        if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.i + "; newUri=" + n);
                        e = e ? e.toUpperCase() : "GET", t.i = n, t.g = "", t.I = e, t.A = !1, t.b = !0, t.a = t.w ? t.w.a() : Bc.a(), t.v = ge(t.w ? t.w : Bc), t.a.onreadystatechange = l(t.zb, t);
                        try { Nn(t.J, Re(t, "Opening Xhr")), t.G = !0, t.a.open(e, n + "", !0), t.G = !1 }
                        catch (n) { return Nn(t.J, Re(t, "Error opening Xhr: " + n.message)), void Ae(t, n) } n = i || "";
                        var o = new kn(t.headers);
                        r && zn(r, function(t, n) { o.set(n, t) }), r = k(o.S()), i = uu.FormData && n instanceof uu.FormData, !A(Jc, e) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, n) { this.a.setRequestHeader(n, t) }, t), t.l && (t.a.responseType = t.l), "withCredentials" in t.a && t.a.withCredentials !== t.N && (t.a.withCredentials = t.N);
                        try { Oe(t), 0 < t.f && (t.o = Te(t.a), Nn(t.J, Re(t, "Will abort after " + t.f + "ms if incomplete, xhr2 " + t.o)), t.o ? (t.a.timeout = t.f, t.a.ontimeout = l(t.Ea, t)) : t.m = mn(t.Ea, t.f, t)), Nn(t.J, Re(t, "Sending request")), t.h = !0, t.a.send(n), t.h = !1 }
                        catch (n) { Nn(t.J, Re(t, "Send error: " + n.message)), Ae(t, n) }
                    }

                    function Te(t) { return Cu && F(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout }

                    function ke(t) { return "content-type" == t.toLowerCase() }

                    function Ae(t, n) { t.b = !1, t.a && (t.c = !0, t.a.abort(), t.c = !1), t.g = n, Ee(t), Se(t) }

                    function Ee(t) { t.A || (t.A = !0, ln(t, "complete"), ln(t, "error")) }

                    function Ne(t) {
                        if (t.b && void 0 !== su)
                            if (t.v[1] && 4 == Pe(t) && 2 == Ce(t)) Nn(t.J, Re(t, "Local request error detected and ignored"));
                            else if (t.h && 4 == Pe(t)) mn(t.zb, 0, t);
                        else if (ln(t, "readystatechange"), 4 == Pe(t)) {
                            Nn(t.J, Re(t, "Request complete")), t.b = !1;
                            try {
                                var n = Ce(t);
                                t: switch (n) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var e = !0;
                                        break t;
                                    default:
                                        e = !1
                                }
                                var i;
                                if (!(i = e)) {
                                    var r;
                                    if (r = 0 === n) {
                                        var o = (t.i + "").match(Mc)[1] || null;
                                        if (!o && uu.self && uu.self.location) {
                                            var a = uu.self.location.protocol;
                                            o = a.substr(0, a.length - 1)
                                        }
                                        r = !zc.test(o ? o.toLowerCase() : "")
                                    }
                                    i = r
                                }
                                if (i) ln(t, "complete"), ln(t, "success");
                                else { try { var s = 2 < Pe(t) ? t.a.statusText : "" } catch (n) { Nn(t.J, "Can not get status: " + n.message), s = "" } t.g = s + " [" + Ce(t) + "]", Ee(t) }
                            }
                            finally { Se(t) }
                        }
                    }

                    function Se(t, n) {
                        if (t.a) {
                            Oe(t);
                            var e = t.a,
                                r = t.v[0] ? i : null;
                            t.a = null, t.v = null, n || ln(t, "ready");
                            try { e.onreadystatechange = r }
                            catch (n) {
                                (t = t.J) && t.log(Tc, "Problem encountered resetting onreadystatechange: " + n.message, void 0)
                            }
                        }
                    }

                    function Oe(t) { t.a && t.o && (t.a.ontimeout = null), "number" == typeof t.m && (uu.clearTimeout(t.m), t.m = null) }

                    function Pe(t) { return t.a ? t.a.readyState : 0 }

                    function Ce(t) { try { return 2 < Pe(t) ? t.a.status : -1 } catch (t) { return -1 } }

                    function _e(t) { try { return t.a ? t.a.responseText : "" } catch (n) { return Nn(t.J, "Can not get responseText: " + n.message), "" } }

                    function Re(t, n) { return n + " [" + t.I + " " + t.i + " " + Ce(t) + "]" }

                    function De(t) {
                        var n = {},
                            e = n.document || document,
                            i = kt(t),
                            r = document.createElement("SCRIPT"),
                            o = { Bb: r, Ea: void 0 },
                            a = new _n(xe, o),
                            s = null,
                            u = null != n.timeout ? n.timeout : 5e3;
                        return 0 < u && (s = window.setTimeout(function() {
                            je(r, !0);
                            var t = new Ue(Zc, "Timeout reached for loading script " + i);
                            Dn(a), Rn(a, !1, t)
                        }, u), o.Ea = s), r.onload = r.onreadystatechange = function() { r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (je(r, n.Oc || !1, s), a.A(null)) }, r.onerror = function() {
                            je(r, !0, s);
                            var t = new Ue($c, "Error while loading script " + i);
                            Dn(a), Rn(a, !1, t)
                        }, o = n.attributes || {}, j(o, { type: "text/javascript", charset: "UTF-8" }), Lt(r, o), r.src = kt(t), Le(e).appendChild(r), a
                    }

                    function Le(t) { var n; return (n = (t || document).getElementsByTagName("HEAD")) && 0 != n.length ? n[0] : t.documentElement }

                    function xe() {
                        if (this && this.Bb) {
                            var t = this.Bb;
                            t && "SCRIPT" == t.tagName && je(t, !0, this.Ea)
                        }
                    }

                    function je(t, n, e) { null != e && uu.clearTimeout(e), t.onload = i, t.onerror = i, t.onreadystatechange = i, n && window.setTimeout(function() { t && t.parentNode && t.parentNode.removeChild(t) }, 0) }

                    function Ue(t, n) {
                        var e = "Jsloader error (code #" + t + ")";
                        n && (e += ": " + n), v.call(this, e), this.code = t
                    }

                    function Me() {}

                    function Ve() { this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = this.responseXML = null, this.a.onload = l(this.Sb, this), this.a.onerror = l(this.wb, this), this.a.onprogress = l(this.Tb, this), this.a.ontimeout = l(this.Ub, this) }

                    function Fe(t, n) { t.readyState = n, t.onreadystatechange && t.onreadystatechange() }

                    function Ke() { var t = ri(); return Cu && !!Mu && 11 == Mu || /Edge\/\d+/.test(t) }

                    function qe() { return uu.window && uu.window.location.href || "" }

                    function Xe(t, n) {
                        n = n || uu.window;
                        var e = "about:blank";
                        t && (e = St(Ot(t))), n.location.href = e
                    }

                    function Be(t, n) { var e, i = []; for (e in t) e in n ? typeof t[e] != typeof n[e] ? i.push(e) : a(t[e]) ? L(t[e], n[e]) || i.push(e) : "object" == typeof t[e] && null != t[e] && null != n[e] ? 0 < Be(t[e], n[e]).length && i.push(e) : t[e] !== n[e] && i.push(e) : i.push(e); for (e in n) e in t || i.push(e); return i }

                    function He() { var t = ri(); return !((t = ei(t) != nh ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t || Cu && Mu && !(9 < Mu)) }

                    function We(t) { return t = (t || ri()).toLowerCase(), !!(t.match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/)) }

                    function Ge(t) { t = t || uu.window; try { t.close() } catch (t) {} }

                    function ze(t, n, e) {
                        var i = "" + Math.floor(1e9 * Math.random());
                        n = n || 500, e = e || 600;
                        var r = (window.screen.availHeight - e) / 2,
                            o = (window.screen.availWidth - n) / 2;
                        n = { width: n, height: e, top: 0 < r ? r : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, e = ri().toLowerCase(), i && (n.target = i, b(e, "crios/") && (n.target = "_blank")), ei(ri()) == th && (t = t || "http://localhost", n.scrollbars = !0), e = t || "", (i = n) || (i = {}), t = window, n = e instanceof Nt ? e : Ot(void 0 !== e.href ? e.href : e + ""), e = i.target || e.target, r = [];
                        for (a in i) switch (a) {
                            case "width":
                            case "height":
                            case "top":
                            case "left":
                                r.push(a + "=" + i[a]);
                                break;
                            case "target":
                            case "noreferrer":
                                break;
                            default:
                                r.push(a + "=" + (i[a] ? 1 : 0))
                        }
                        var a = r.join(",");
                        if ((P("iPhone") && !P("iPod") && !P("iPad") || P("iPad") || P("iPod")) && t.navigator && t.navigator.standalone && e && "_self" != e ? (a = t.document.createElement("A"), n instanceof Nt || n instanceof Nt || (n = n.la ? n.ja() : n + "", ec.test(n) || (n = "about:invalid#zClosurez"), n = Pt(n)), a.href = St(n), a.setAttribute("target", e), i.noreferrer && a.setAttribute("rel", "noreferrer"), i = document.createEvent("MouseEvent"), i.initMouseEvent("click", !0, !0, t, 1), a.dispatchEvent(i), a = {}) : i.noreferrer ? (a = t.open("", e, a), t = St(n), a && (Ru && b(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, It("b/12014412, meta tag with sanitized URL"), t = '<META HTTP-EQUIV="refresh" content="0; url=' + g(t) + '">', t = Rt(t), a.document.write(_t(t)), a.document.close())) : a = t.open(St(n), e, a), a) try { a.focus() }
                        catch (t) {}
                        return a
                    }

                    function Je(t) {
                        return new Z(function(n) {
                            function e() {
                                gn(2e3).then(function() {
                                    if (t && !t.closed) return e();
                                    n()
                                })
                            }
                            return e()
                        })
                    }

                    function Ye() { var t = null; return new Z(function(n) { "complete" == uu.document.readyState ? n() : (t = function() { n() }, nn(window, "load", t)) }).s(function(n) { throw en(window, "load", t), n }) }

                    function $e() {
                        return Ze(void 0) ? Ye().then(function() {
                            return new Z(function(t, n) {
                                var e = uu.document,
                                    i = setTimeout(function() { n(Error("Cordova framework is not ready.")) }, 1e3);
                                e.addEventListener("deviceready", function() { clearTimeout(i), t() }, !1)
                            })
                        }) : et(Error("Cordova must run in an Android or iOS file scheme."))
                    }

                    function Ze(t) { return t = t || ri(), !("file:" !== ci() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)) }

                    function Qe() { var t = uu.window; try { return !(!t || t == t.top) } catch (t) { return !1 } }

                    function ti() { return au.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : au.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser" }

                    function ni() { var t = ti(); return "ReactNative" === t || "Node" === t }

                    function ei(t) { var n = t.toLowerCase(); return b(n, "opera/") || b(n, "opr/") || b(n, "opios/") ? "Opera" : b(n, "iemobile") ? "IEMobile" : b(n, "msie") || b(n, "trident/") ? "IE" : b(n, "edge/") ? "Edge" : b(n, "firefox/") ? th : b(n, "silk/") ? "Silk" : b(n, "blackberry") ? "Blackberry" : b(n, "webos") ? "Webos" : !b(n, "safari/") || b(n, "chrome/") || b(n, "crios/") || b(n, "android") ? !b(n, "chrome/") && !b(n, "crios/") || b(n, "edge/") ? b(n, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : nh : "Safari" }

                    function ii(t, n) {
                        n = n || [];
                        var e, i = [],
                            r = {};
                        for (e in eh) r[eh[e]] = !0;
                        for (e = 0; e < n.length; e++) void 0 !== r[n[e]] && (delete r[n[e]], i.push(n[e]));
                        return i.sort(), n = i, n.length || (n = ["FirebaseCore-web"]), i = ti(), r = "", (r = "Browser" === i ? ei(ri()) : i) + "/JsCore/" + t + "/" + n.join(",")
                    }

                    function ri() { return uu.navigator && uu.navigator.userAgent || "" }

                    function oi(t, n) { t = t.split("."), n = n || uu; for (var e = 0; e < t.length && "object" == typeof n && null != n; e++) n = n[t[e]]; return e != t.length && (n = void 0), n }

                    function ai() {
                        try {
                            var t = uu.localStorage,
                                n = di();
                            if (t) return t.setItem(n, "1"), t.removeItem(n), !Ke() || !!uu.indexedDB
                        }
                        catch (t) {}
                        return !1
                    }

                    function si() { return (ui() || "chrome-extension:" === ci() || Ze()) && !ni() && ai() }

                    function ui() { return "http:" === ci() || "https:" === ci() }

                    function ci() { return uu.location && uu.location.protocol || null }

                    function hi(t) { return t = t || ri(), !We(t) && ei(t) != th }

                    function fi(t) { return void 0 === t ? null : Mt(t) }

                    function li(t) { var n, e = {}; for (n in t) t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]); return e }

                    function pi(t) { if (null !== t) return JSON.parse(t) }

                    function di(t) { return t || "" + Math.floor(1e9 * Math.random()) }

                    function vi(t) { return t = t || ri(), "Safari" != ei(t) && !t.toLowerCase().match(/iphone|ipad|ipod/) }

                    function mi() {
                        var t = uu.___jsl;
                        if (t && t.H)
                            for (var n in t.H)
                                if (t.H[n].r = t.H[n].r || [], t.H[n].L = t.H[n].L || [], t.H[n].r = t.H[n].L.concat(), t.CP)
                                    for (var e = 0; e < t.CP.length; e++) t.CP[e] = null
                    }

                    function gi() { var t = uu.navigator; return !t || "boolean" != typeof t.onLine || !ui() && "chrome-extension:" !== ci() && void 0 === t.connection || t.onLine }

                    function bi(t, n, e, i) {
                        if (t > n) throw Error("Short delay should be less than long delay!");
                        this.c = t, this.b = n, t = e || ri(), i = i || ti(), this.a = We(t) || "ReactNative" === i
                    }

                    function wi() { var t = uu.document; return !t || void 0 === t.visibilityState || "visible" == t.visibilityState }

                    function yi() {
                        var t = uu.document,
                            n = null;
                        return wi() || !t ? nt() : new Z(function(e) { n = function() { wi() && (t.removeEventListener("visibilitychange", n, !1), e()) }, t.addEventListener("visibilitychange", n, !1) }).s(function(e) { throw t.removeEventListener("visibilitychange", n, !1), e })
                    }

                    function Ii(t) { try { var n = new Date(parseInt(t, 10)); if (!isNaN(n.getTime()) && !/[^0-9]/.test(t)) return n.toUTCString() } catch (t) {} return null }

                    function Ti(t, n, e) { ih ? Object.defineProperty(t, n, { configurable: !0, enumerable: !0, value: e }) : t[n] = e }

                    function ki(t, n) {
                        if (n)
                            for (var e in n) n.hasOwnProperty(e) && Ti(t, e, n[e])
                    }

                    function Ai(t) { var n = {}; return ki(n, t), n }

                    function Ei(t) { var n, e = {}; for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e }

                    function Ni(t, n) { if (!n || !n.length) return !0; if (!t) return !1; for (var e = 0; e < n.length; e++) { var i = t[n[e]]; if (void 0 === i || null === i || "" === i) return !1 } return !0 }

                    function Si(t) { var n = t; if ("object" == typeof t && null != t) { n = "length" in t ? [] : {}; for (var e in t) Ti(n, e, Si(t[e])) } return n }

                    function Oi(t) {
                        var n = {},
                            e = t[ah],
                            i = t[sh];
                        if (t = t[uh], !e || !t) throw Error("Invalid provider user info!");
                        n[hh] = i || null, n[ch] = e, Ti(this, lh, t), Ti(this, fh, Si(n))
                    }

                    function Pi(t, n) { this.code = ph + t, this.message = n || dh[t] || "" }

                    function Ci(t) { var n = t && t.code; return n ? new Pi(n.substring(ph.length), t.message) : null }

                    function _i(t) {
                        var n = t[bh];
                        if (void 0 === n) throw new Pi("missing-continue-uri");
                        if ("string" != typeof n || "string" == typeof n && !n.length) throw new Pi("invalid-continue-uri");
                        this.h = n, this.c = this.a = null, this.g = !1;
                        var e = t[vh];
                        if (e && "object" == typeof e) {
                            n = e[Ih];
                            var i = e[wh];
                            if (e = e[yh], "string" == typeof n && n.length) {
                                if (this.a = n, void 0 !== i && "boolean" != typeof i) throw new Pi("argument-error", wh + " property must be a boolean when specified.");
                                if (this.g = !!i, void 0 !== e && ("string" != typeof e || "string" == typeof e && !e.length)) throw new Pi("argument-error", yh + " property must be a non empty string when specified.");
                                this.c = e || null
                            }
                            else { if (void 0 !== n) throw new Pi("argument-error", Ih + " property must be a non empty string when specified."); if (void 0 !== i || void 0 !== e) throw new Pi("missing-android-pkg-name") }
                        }
                        else if (void 0 !== e) throw new Pi("argument-error", vh + " property must be a non null object when specified.");
                        if (this.b = null, (n = t[gh]) && "object" == typeof n) {
                            if ("string" == typeof(n = n[Th]) && n.length) this.b = n;
                            else if (void 0 !== n) throw new Pi("argument-error", Th + " property must be a non empty string when specified.")
                        }
                        else if (void 0 !== n) throw new Pi("argument-error", gh + " property must be a non null object when specified.");
                        if (void 0 !== (t = t[mh]) && "boolean" != typeof t) throw new Pi("argument-error", mh + " property must be a boolean when specified.");
                        if ((this.f = !!t) && !this.b && !this.a) throw new Pi("argument-error", mh + " property can't be true when no mobile application is provided.")
                    }

                    function Ri(t) {
                        var n = {};
                        n.continueUrl = t.h, n.canHandleCodeInApp = t.f, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.c, n.androidInstallApp = t.g), n.iOSBundleId = t.b;
                        for (var e in n) null === n[e] && delete n[e];
                        return n
                    }

                    function Di(t) { this.b = t.sub, fu(), this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null }

                    function Li(t) {
                        if (t = t.split("."), 3 != t.length) return null;
                        t = t[1];
                        for (var n = (4 - t.length % 4) % 4, e = 0; e < n; e++) t += ".";
                        try { var i = JSON.parse(On(t)); if (i.sub && i.iss && i.aud && i.exp) return new Di(i) }
                        catch (t) {}
                        return null
                    }

                    function xi(t) {
                        for (var n in Eh)
                            if (Eh[n].Na == t) return Eh[n];
                        return null
                    }

                    function ji(t) {
                        var n = {};
                        n["facebook.com"] = Vi, n["google.com"] = Ki, n["github.com"] = Fi, n["twitter.com"] = qi;
                        var e = t && t[Sh];
                        try { if (e) return n[e] ? new n[e](t) : new Mi(t); if (void 0 !== t[Nh]) return new Ui(t) }
                        catch (t) {}
                        return null
                    }

                    function Ui(t) {
                        var n = t[Sh];
                        if (!n && t[Nh]) {
                            var e = Li(t[Nh]);
                            e && e.a && (n = e.a)
                        }
                        if (!n) throw Error("Invalid additional user info!");
                        t = !!t.isNewUser, Ti(this, "providerId", n), Ti(this, "isNewUser", t)
                    }

                    function Mi(t) { Ui.call(this, t), t = pi(t.rawUserInfo || "{}"), Ti(this, "profile", Si(t || {})) }

                    function Vi(t) { if (Mi.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!") }

                    function Fi(t) {
                        if (Mi.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                        Ti(this, "username", this.profile && this.profile.login || null)
                    }

                    function Ki(t) { if (Mi.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!") }

                    function qi(t) {
                        if (Mi.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                        Ti(this, "username", t.screenName || null)
                    }

                    function Xi(t, n) { return t.then(function(t) { if (t[Ph]) { var e = Li(t[Ph]); if (!e || n != e.b) throw new Pi("user-mismatch"); return t } throw new Pi("user-mismatch") }).s(function(t) { throw t && t.code && t.code == ph + "user-not-found" ? new Pi("user-mismatch") : t }) }

                    function Bi(t, n) {
                        if (n.idToken || n.accessToken) n.idToken && Ti(this, "idToken", n.idToken), n.accessToken && Ti(this, "accessToken", n.accessToken);
                        else {
                            if (!n.oauthToken || !n.oauthTokenSecret) throw new Pi("internal-error", "failed to construct a credential");
                            Ti(this, "accessToken", n.oauthToken), Ti(this, "secret", n.oauthTokenSecret)
                        }
                        Ti(this, "providerId", t)
                    }

                    function Hi(t) { var n = {}; return t.idToken && (n.id_token = t.idToken), t.accessToken && (n.access_token = t.accessToken), t.secret && (n.oauth_token_secret = t.secret), n.providerId = t.providerId, { postBody: "" + ce(n), requestUri: "http://localhost" } }

                    function Wi(t, n) { this.nc = n || [], ki(this, { providerId: t, isOAuthProvider: !0 }), this.qb = {}, this.Wa = (xi(t) || {}).Ma || null, this.Ua = null }

                    function Gi(t) { Wi.call(this, t, Ah), this.a = [] }

                    function zi() { Gi.call(this, "facebook.com") }

                    function Ji(t) { if (!t) throw new Pi("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var n = t; return c(t) && (n = t.accessToken), (new zi).credential(null, n) }

                    function Yi() { Gi.call(this, "github.com") }

                    function $i(t) { if (!t) throw new Pi("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var n = t; return c(t) && (n = t.accessToken), (new Yi).credential(null, n) }

                    function Zi() { Gi.call(this, "google.com"), this.sa("profile") }

                    function Qi(t, n) { var e = t; return c(t) && (e = t.idToken, n = t.accessToken), (new Zi).credential(e, n) }

                    function tr() { Wi.call(this, "twitter.com", kh) }

                    function nr(t, n) { var e = t; if (c(e) || (e = { oauthToken: t, oauthTokenSecret: n }), !e.oauthToken || !e.oauthTokenSecret) throw new Pi("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret)."); return new Bi("twitter.com", e) }

                    function er(t, n) { this.a = t, this.f = n, Ti(this, "providerId", "password") }

                    function ir() { ki(this, { providerId: "password", isOAuthProvider: !1 }) }

                    function rr(t) {
                        if (!(t.Pa && t.Oa || t.Da && t.Y)) throw new Pi("internal-error");
                        this.a = t, Ti(this, "providerId", "phone")
                    }

                    function or(t) { return t.a.Da && t.a.Y ? { temporaryProof: t.a.Da, phoneNumber: t.a.Y } : { sessionInfo: t.a.Pa, code: t.a.Oa } }

                    function ar(t) { try { this.a = t || au.auth() } catch (t) { throw new Pi("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().") } ki(this, { providerId: "phone", isOAuthProvider: !1 }) }

                    function sr(t, n) { if (!t) throw new Pi("missing-verification-id"); if (!n) throw new Pi("missing-verification-code"); return new rr({ Pa: t, Oa: n }) }

                    function ur(t) {
                        if (t.temporaryProof && t.phoneNumber) return new rr({ Da: t.temporaryProof, Y: t.phoneNumber });
                        var n = t && t.providerId;
                        if (!n || "password" === n) return null;
                        var e = t && t.oauthAccessToken,
                            i = t && t.oauthTokenSecret;
                        t = t && t.oauthIdToken;
                        try {
                            switch (n) {
                                case "google.com":
                                    return Qi(t, e);
                                case "facebook.com":
                                    return Ji(e);
                                case "github.com":
                                    return $i(e);
                                case "twitter.com":
                                    return nr(e, i);
                                default:
                                    return new Gi(n).credential(t, e)
                            }
                        }
                        catch (t) { return null }
                    }

                    function cr(t) { if (!t.isOAuthProvider) throw new Pi("invalid-oauth-provider") }

                    function hr(t, n, e, i, r) { if (this.b = t, this.c = n || null, this.f = e || null, this.g = i || null, this.a = r || null, !this.f && !this.a) throw new Pi("invalid-auth-event"); if (this.f && this.a) throw new Pi("invalid-auth-event"); if (this.f && !this.g) throw new Pi("invalid-auth-event") }

                    function fr(t) { return t = t || {}, t.type ? new hr(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && Ci(t.error)) : null }

                    function lr(t) {
                        var n = "unauthorized-domain",
                            e = void 0,
                            i = ee(t);
                        t = i.b, i = i.c, "chrome-extension" == i ? e = m("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? e = m("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : n = "operation-not-supported-in-this-environment", Pi.call(this, n, e)
                    }

                    function pr(t, n, e) { Pi.call(this, t, e), t = n || {}, t.rb && Ti(this, "email", t.rb), t.Y && Ti(this, "phoneNumber", t.Y), t.credential && Ti(this, "credential", t.credential) }

                    function dr(t) {
                        if (t.code) {
                            var n = t.code || "";
                            0 == n.indexOf(ph) && (n = n.substring(ph.length));
                            var e = { credential: ur(t) };
                            if (t.email) e.rb = t.email;
                            else {
                                if (!t.phoneNumber) return new Pi(n, t.message || void 0);
                                e.Y = t.phoneNumber
                            }
                            return new pr(n, e, t.message)
                        }
                        return null
                    }

                    function vr(t) { this.f = t }

                    function mr(t, n, e) {
                        var i = "Node" == ti();
                        if (!(i = uu.XMLHttpRequest || i && au.INTERNAL.node && au.INTERNAL.node.XMLHttpRequest)) throw new Pi("internal-error", "The XMLHttpRequest compatibility library was not found.");
                        this.b = t, t = n || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = t.secureTokenTimeout || Ch, this.c = x(t.secureTokenHeaders || _h), this.g = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || Rh, this.a = x(t.firebaseHeaders || Dh), e && (this.a["X-Client-Version"] = e, this.c["X-Client-Version"] = e), this.f = new Me, this.o = new vr(i)
                    }

                    function gr(t, n) { n ? t.a["X-Firebase-Locale"] = n : delete t.a["X-Firebase-Locale"] }

                    function br(t, n) { n ? (t.a["X-Client-Version"] = n, t.c["X-Client-Version"] = n) : (delete t.a["X-Client-Version"], delete t.c["X-Client-Version"]) }

                    function wr(t, n, e, i, r, o, a) { gi() ? (He() ? t = l(t.m, t) : (Oh || (Oh = new Z(function(t, n) { yr(t, n) })), t = l(t.u, t)), t(n, e, i, r, o, a)) : e && e(null) }

                    function yr(t, n) {
                        ((window.gapi || {}).client || {}).request ? t() : (uu[xh] = function() {
                            ((window.gapi || {}).client || {}).request ? t() : n(Error("CORS_UNSUPPORTED"))
                        }, Ln(De(At(Lh, { onload: xh })), function() { n(Error("CORS_UNSUPPORTED")) }))
                    }

                    function Ir(t, n) { return new Z(function(e, i) { "refresh_token" == n.grant_type && n.refresh_token || "authorization_code" == n.grant_type && n.code ? wr(t, t.i + "?key=" + encodeURIComponent(t.b), function(t) { t ? t.error ? i(Vr(t)) : t.access_token && t.refresh_token ? e(t) : i(new Pi("internal-error")) : i(new Pi("network-request-failed")) }, "POST", "" + ce(n), t.c, t.l.get()) : i(new Pi("internal-error")) }) }

                    function Tr(t, n, e, i, r, o) {
                        var a = ee(t.g + n);
                        te(a, "key", t.b), o && te(a, "cb", "" + fu());
                        var s = "GET" == e;
                        if (s)
                            for (var u in i) i.hasOwnProperty(u) && te(a, u, i[u]);
                        return new Z(function(n, o) { wr(t, "" + a, function(t) { t ? t.error ? o(Vr(t, r || {})) : n(t) : o(new Pi("network-request-failed")) }, e, s ? void 0 : Mt(li(i)), t.a, t.h.get()) })
                    }

                    function kr(t) { if (!Yc.test(t.email)) throw new Pi("invalid-email") }

                    function Ar(t) { "email" in t && kr(t) }

                    function Er(t, n) { return Ur(t, Kh, { identifier: n, continueUri: ui() ? qe() : "http://localhost" }).then(function(t) { return t.allProviders || [] }) }

                    function Nr(t) { return Ur(t, Gh, {}).then(function(t) { return t.authorizedDomains || [] }) }

                    function Sr(t) { if (!t[Ph]) throw new Pi("internal-error") }

                    function Or(t) { if (t.phoneNumber || t.temporaryProof) { if (!t.phoneNumber || !t.temporaryProof) throw new Pi("internal-error") } else { if (!t.sessionInfo) throw new Pi("missing-verification-id"); if (!t.code) throw new Pi("missing-verification-code") } }

                    function Pr(t, n) { return Ur(t, Yh, n) }

                    function Cr(t, n, e) { return Ur(t, Xh, { idToken: n, deleteProvider: e }) }

                    function _r(t) { if (!t.requestUri || !t.sessionId && !t.postBody) throw new Pi("internal-error") }

                    function Rr(t) { var n = null; if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", n = dr(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", n = dr(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", n = dr(t)) : t.errorMessage && (n = Mr(t.errorMessage)), n) throw n; if (!t[Ph]) throw new Pi("internal-error") }

                    function Dr(t, n) { return n.returnIdpCredential = !0, Ur(t, tf, n) }

                    function Lr(t, n) { return n.returnIdpCredential = !0, Ur(t, ef, n) }

                    function xr(t, n) { return n.returnIdpCredential = !0, n.autoCreate = !1, Ur(t, nf, n) }

                    function jr(t) { if (!t.oobCode) throw new Pi("invalid-action-code") }

                    function Ur(t, n, e) { if (!Ni(e, n.ea)) return et(new Pi("internal-error")); var i, r = n.yb || "POST"; return nt(e).then(n.D).then(function() { return n.T && (e.returnSecureToken = !0), Tr(t, n.endpoint, r, e, n.Lb, n.nb || !1) }).then(function(t) { return i = t }).then(n.O).then(function() { if (!n.ga) return i; if (!(n.ga in i)) throw new Pi("internal-error"); return i[n.ga] }) }

                    function Mr(t) { return Vr({ error: { errors: [{ message: t }], code: 400, message: t } }) }

                    function Vr(t, n) {
                        var e = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                            i = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" };
                        if (e = i[e] ? new Pi(i[e]) : null) return e;
                        e = t.error && t.error.message || "", i = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash" }, j(i, n || {}), n = (n = e.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < n.length ? n[1] : void 0;
                        for (var r in i)
                            if (0 === e.indexOf(r)) return new Pi(i[r], n);
                        return !n && t && (n = fi(t)), new Pi("internal-error", n)
                    }

                    function Fr(t) {
                        for (var n in cf)
                            if (cf[n].id === t) return t = cf[n], { firebaseEndpoint: t.Va, secureTokenEndpoint: t.ab };
                        return null
                    }

                    function Kr(t) { this.b = t, this.a = null, this.Ya = qr(this) }

                    function qr(t) {
                        return Hr().then(function() {
                            return new Z(function(n, e) {
                                oi("gapi.iframes.getContext")().open({ where: document.body, url: t.b, messageHandlersFilter: oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(i) {
                                    function r() { clearTimeout(o), n() } t.a = i, t.a.restyle({ setHideOnLeave: !1 });
                                    var o = setTimeout(function() { e(Error("Network Error")) }, lf.get());
                                    i.ping(r).then(r, function() { e(Error("Network Error")) })
                                })
                            })
                        })
                    }

                    function Xr(t, n) { return t.Ya.then(function() { return new Z(function(e) { t.a.send(n.type, n, e, oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }) }

                    function Br(t, n) { t.Ya.then(function() { t.a.register("authEvent", n, oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }

                    function Hr() {
                        return pf || (pf = new Z(function(t, n) {
                            if (gi()) {
                                var e = function() { mi(), oi("gapi.load")("gapi.iframes", { callback: t, ontimeout: function() { mi(), n(Error("Network Error")) }, timeout: ff.get() }) };
                                if (oi("gapi.iframes.Iframe")) t();
                                else if (oi("gapi.load")) e();
                                else {
                                    var i = "__iframefcb" + Math.floor(1e6 * Math.random());
                                    uu[i] = function() { oi("gapi.load") ? e() : n(Error("Network Error")) }, i = At(hf, { onload: i }), nt(De(i)).s(function() { n(Error("Network Error")) })
                                }
                            }
                            else n(Error("Network Error"))
                        }).s(function(t) { throw pf = null, t }))
                    }

                    function Wr(t, n, e) { this.i = t, this.g = n, this.h = e, this.f = null, this.a = ie(this.i, "/__/auth/iframe"), te(this.a, "apiKey", this.g), te(this.a, "appName", this.h), this.b = null, this.c = [] }

                    function Gr(t, n, e, i, r) { this.m = t, this.u = n, this.c = e, this.l = i, this.i = this.g = this.h = null, this.a = r, this.f = null }

                    function zr(t) { try { return au.app(t).auth().Ka() } catch (t) { return [] } }

                    function Jr(t, n, e, i, r) { this.u = t, this.f = n, this.b = e, this.c = i || null, this.h = r || null, this.m = this.o = this.v = null, this.g = [], this.l = this.a = null }

                    function Yr(t) {
                        var n = qe();
                        return Nr(t).then(function(t) {
                            t: {
                                var e = ee(n),
                                    i = e.c;e = e.b;
                                for (var r = 0; r < t.length; r++) {
                                    var o = t[r],
                                        a = e,
                                        s = i;
                                    if (0 == o.indexOf("chrome-extension://") ? a = ee(o).b == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : Qc.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) { t = !0; break t }
                                }
                                t = !1
                            }
                            if (!t) throw new lr(qe())
                        })
                    }

                    function $r(t) {
                        return t.l ? t.l : (t.l = Ye().then(function() {
                            if (!t.o) {
                                var n = t.c,
                                    e = t.h,
                                    i = zr(t.b),
                                    r = new Wr(t.u, t.f, t.b);
                                r.f = n, r.b = e, r.c = O(i || []), t.o = "" + r
                            }
                            t.i = new Kr(t.o), to(t)
                        }), t.l)
                    }

                    function Zr(t) { return t.m || (t.v = t.c ? ii(t.c, zr(t.b)) : null, t.m = new mr(t.f, Fr(t.h), t.v)), t.m }

                    function Qr(t, n, e, i, r, o, a, s, u, c) { return t = new Gr(t, n, e, i, r), t.h = o, t.g = a, t.i = s, t.b = x(u || null), t.f = c, "" + t }

                    function to(t) {
                        if (!t.i) throw Error("IfcHandler must be initialized!");
                        Br(t.i, function(n) { var e = {}; if (n && n.authEvent) { var i = !1; for (n = fr(n.authEvent), e = 0; e < t.g.length; e++) i = t.g[e](n) || i; return e = {}, e.status = i ? "ACK" : "ERROR", nt(e) } return e.status = "ERROR", nt(e) })
                    }

                    function no(t) { var n = { type: "webStorageSupport" }; return $r(t).then(function() { return Xr(t.i, n) }).then(function(t) { if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport; throw Error() }) }

                    function eo(t) { if (this.a = t || au.INTERNAL.reactNative && au.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Pi("internal-error", "The React Native compatibility library was not found.") }

                    function io() { this.a = {} }

                    function ro(t, n, e, i, r, o) {
                        try { var a = !!uu.indexedDB }
                        catch (t) { a = !1 }
                        if (!a) throw new Pi("web-storage-unsupported");
                        this.u = t, this.h = n, this.g = e, this.l = i, this.m = r, this.f = {}, this.c = [], this.a = 0, this.o = o || uu.indexedDB
                    }

                    function oo(t) {
                        return new Z(function(n, e) {
                            var i = t.o.open(t.u, t.m);
                            i.onerror = function(t) { e(Error(t.target.errorCode)) }, i.onupgradeneeded = function(n) { n = n.target.result; try { n.createObjectStore(t.h, { keyPath: t.g }) } catch (t) { e(t) } }, i.onsuccess = function(t) { n(t.target.result) }
                        })
                    }

                    function ao(t) { return t.i || (t.i = oo(t)), t.i }

                    function so(t, n) { return n.objectStore(t.h) }

                    function uo(t, n, e) { return n.transaction([t.h], e ? "readwrite" : "readonly") }

                    function co(t) { return new Z(function(n, e) { t.onsuccess = function(t) { t && t.target ? n(t.target.result) : n() }, t.onerror = function(t) { e(Error(t.target.errorCode)) } }) }

                    function ho(t) {
                        function n() { return t.b = gn(800).then(l(t.vc, t)).then(function(n) { 0 < n.length && Tu(t.c, function(t) { t(n) }) }).then(n).s(function(t) { "STOP_EVENT" != t.message && n() }), t.b } t.b && t.b.cancel("STOP_EVENT"), n()
                    }

                    function fo() { if (!po()) { if ("Node" == ti()) throw new Pi("internal-error", "The LocalStorage compatibility library was not found."); throw new Pi("web-storage-unsupported") } this.a = lo() || au.INTERNAL.node.localStorage }

                    function lo() {
                        try {
                            var t = uu.localStorage,
                                n = di();
                            return t && (t.setItem(n, "1"), t.removeItem(n)), t
                        }
                        catch (t) { return null }
                    }

                    function po() { var t = "Node" == ti(); if (!(t = lo() || t && au.INTERNAL.node && au.INTERNAL.node.localStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }

                    function vo() {}

                    function mo() { if (!bo()) { if ("Node" == ti()) throw new Pi("internal-error", "The SessionStorage compatibility library was not found."); throw new Pi("web-storage-unsupported") } this.a = go() || au.INTERNAL.node.sessionStorage }

                    function go() {
                        try {
                            var t = uu.sessionStorage,
                                n = di();
                            return t && (t.setItem(n, "1"), t.removeItem(n)), t
                        }
                        catch (t) { return null }
                    }

                    function bo() { var t = "Node" == ti(); if (!(t = go() || t && au.INTERNAL.node && au.INTERNAL.node.sessionStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }

                    function wo() {
                        var t = {};
                        t.Browser = gf, t.Node = bf, t.ReactNative = wf, this.a = t[ti()]
                    }

                    function yo(t) {
                        var n = new Pi("invalid-persistence-type"),
                            e = new Pi("unsupported-persistence-type");
                        t: {
                            for (i in yf)
                                if (yf[i] == t) { var i = !0; break t }
                            i = !1
                        }
                        if (!i || "string" != typeof t) throw n;
                        switch (ti()) {
                            case "ReactNative":
                                if ("session" === t) throw e;
                                break;
                            case "Node":
                                if ("none" !== t) throw e;
                                break;
                            default:
                                if (!ai() && "none" !== t) throw e
                        }
                    }

                    function Io(t, n, e, i, r) {
                        this.i = t, this.g = n, this.A = e, this.u = i, this.v = r, this.a = {}, vf || (vf = new wo), t = vf;
                        try {
                            if (Ke()) { df || (df = new ro("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1)); var o = df }
                            else o = new t.a.C;
                            this.l = o
                        }
                        catch (t) { this.l = new io, this.u = !0 }
                        try { this.o = new t.a.jb }
                        catch (t) { this.o = new io } this.w = new io, this.h = l(this.m, this), this.b = {}
                    }

                    function To() { return mf || (mf = new Io("firebase", ":", !(vi(ri()) || !Qe()), hi(), ai())), mf }

                    function ko(t, n) {
                        switch (n) {
                            case "session":
                                return t.o;
                            case "none":
                                return t.w;
                            default:
                                return t.l
                        }
                    }

                    function Ao(t, n, e) { return t.i + t.g + n.name + (e ? t.g + e : "") }

                    function Eo(t, n, e) { return e = Ao(t, n, e), "local" == n.C && (t.b[e] = null), ko(t, n.C).X(e) }

                    function No(t, n, e, i) { n = Ao(t, n, e), t.v && (t.b[n] = uu.localStorage.getItem(n)), D(t.a) && (ko(t, "local").ia(t.h), t.u || Ke() || !t.v || Oo(t)), t.a[n] || (t.a[n] = []), t.a[n].push(i) }

                    function So(t, n, e) { n = Ao(t, cs("local"), n), t.a[n] && (N(t.a[n], function(t) { return t == e }), 0 == t.a[n].length && delete t.a[n]), D(t.a) && Co(t) }

                    function Oo(t) {
                        Po(t), t.f = setInterval(function() {
                            for (var n in t.a) {
                                var e = uu.localStorage.getItem(n),
                                    i = t.b[n];
                                e != i && (t.b[n] = e, e = new Ht({ type: "storage", key: n, target: window, oldValue: i, newValue: e, a: !0 }), t.m(e))
                            }
                        }, 1e3)
                    }

                    function Po(t) { t.f && (clearInterval(t.f), t.f = null) }

                    function Co(t) { ko(t, "local").da(t.h), Po(t) }

                    function _o(t) { this.a = t, this.b = To() }

                    function Ro(t) { return t.b.get(If, t.a).then(function(t) { return fr(t) }) }

                    function Do() { this.a = To() }

                    function Lo(t, n, e, i, r, o, a) { this.u = t, this.i = n, this.l = e, this.m = i || null, this.o = a || null, this.h = n + ":" + e, this.A = new Do, this.g = new _o(this.h), this.f = null, this.b = [], this.v = r || 500, this.w = o || 2e3, this.a = this.c = null }

                    function xo(t) { return new Pi("invalid-cordova-configuration", t) }

                    function jo() { for (var t = 20, n = []; 0 < t;) n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return n.join("") }

                    function Uo(t) {
                        var n = new Hn;
                        Bn(n, t), t = [];
                        var e = 8 * n.g;
                        56 > n.c ? Bn(n, xc, 56 - n.c) : Bn(n, xc, n.b - (n.c - 56));
                        for (var i = 63; 56 <= i; i--) n.f[i] = 255 & e, e /= 256;
                        for (Xn(n), i = e = 0; i < n.i; i++)
                            for (var r = 24; 0 <= r; r -= 8) t[e++] = n.a[i] >> r & 255;
                        return Sn(t)
                    }

                    function Mo(t, n, e, i) {
                        var r = jo(),
                            o = new hr(n, i, null, r, new Pi("no-auth-event")),
                            a = oi("BuildInfo.packageName", uu);
                        if ("string" != typeof a) throw new Pi("invalid-cordova-configuration");
                        var s = oi("BuildInfo.displayName", uu),
                            u = {};
                        if (ri().toLowerCase().match(/iphone|ipad|ipod/)) u.ibi = a;
                        else {
                            if (!ri().toLowerCase().match(/android/)) return et(new Pi("operation-not-supported-in-this-environment"));
                            u.apn = a
                        }
                        s && (u.appDisplayName = s), r = Uo(r), u.sessionId = r;
                        var c = Qr(t.u, t.i, t.l, n, e, null, i, t.m, u, t.o);
                        return t.ba().then(function() { var n = t.h; return t.A.a.set(If, o.B(), n) }).then(function() {
                            var n = oi("cordova.plugins.browsertab.isAvailable", uu);
                            if ("function" != typeof n) throw new Pi("invalid-cordova-configuration");
                            var e = null;
                            n(function(n) {
                                if (n) {
                                    if ("function" != typeof(e = oi("cordova.plugins.browsertab.openUrl", uu))) throw new Pi("invalid-cordova-configuration");
                                    e(c)
                                }
                                else {
                                    if ("function" != typeof(e = oi("cordova.InAppBrowser.open", uu))) throw new Pi("invalid-cordova-configuration");
                                    n = ri(), n = !(!n.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), t.a = e(c, n ? "_blank" : "_system", "location=yes")
                                }
                            })
                        })
                    }

                    function Vo(t, n) {
                        for (var e = 0; e < t.b.length; e++) try { t.b[e](n) }
                        catch (t) {}
                    }

                    function Fo(t) {
                        return t.f || (t.f = t.ba().then(function() {
                            return new Z(function(n) {
                                function e(i) { return n(i), t.Ja(e), !1 } t.ua(e), qo(t)
                            })
                        })), t.f
                    }

                    function Ko(t) { var n = null; return Ro(t.g).then(function(e) { return n = e, e = t.g, Eo(e.b, If, e.a) }).then(function() { return n }) }

                    function qo(t) {
                        function n(n) {
                            r = !0, o && o.cancel(), Ko(t).then(function(e) {
                                var r = i;
                                if (e && n && n.url) {
                                    r = null;
                                    var o = n.url,
                                        a = ee(o),
                                        s = ne(a, "link"),
                                        u = ne(ee(s), "link");
                                    a = ne(a, "deep_link_id"), o = ne(ee(a), "link") || a || u || s || o, -1 != o.indexOf("/__/auth/callback") && (r = ee(o), r = pi(ne(r, "firebaseError") || null), r = (r = "object" == typeof r ? Ci(r) : null) ? new hr(e.b, e.c, null, null, r) : new hr(e.b, e.c, o, e.g)), r = r || i
                                }
                                Vo(t, r)
                            })
                        }
                        var e = oi("universalLinks.subscribe", uu);
                        if ("function" != typeof e) throw new Pi("invalid-cordova-configuration");
                        var i = new hr("unknown", null, null, null, new Pi("no-auth-event")),
                            r = !1,
                            o = gn(t.v).then(function() { return Ko(t).then(function() { r || Vo(t, i) }) }),
                            a = uu.handleOpenURL;
                        uu.handleOpenURL = function(t) {
                            if (0 == t.toLowerCase().indexOf(oi("BuildInfo.packageName", uu).toLowerCase() + "://") && n({ url: t }), "function" == typeof a) try { a(t) }
                            catch (t) { console.error(t) }
                        }, e(null, n)
                    }

                    function Xo(t) { this.a = t, this.b = To() }

                    function Bo(t) { return t.b.set(Tf, "pending", t.a) }

                    function Ho(t) { return Eo(t.b, Tf, t.a) }

                    function Wo(t) { return t.b.get(Tf, t.a).then(function(t) { return "pending" == t }) }

                    function Go(t, n, e) { this.v = t, this.l = n, this.u = e, this.h = [], this.f = !1, this.i = l(this.m, this), this.c = new ta, this.o = new sa, this.g = new Xo(this.l + ":" + this.u), this.b = {}, this.b.unknown = this.c, this.b.signInViaRedirect = this.c, this.b.linkViaRedirect = this.c, this.b.reauthViaRedirect = this.c, this.b.signInViaPopup = this.o, this.b.linkViaPopup = this.o, this.b.reauthViaPopup = this.o, this.a = zo(this.v, this.l, this.u, Uh) }

                    function zo(t, n, e, i) { var r = au.SDK_VERSION || null; return Ze() ? new Lo(t, n, e, r, void 0, void 0, i) : new Jr(t, n, e, r, i) }

                    function Jo(t) { t.f || (t.f = !0, t.a.ua(t.i)); var n = t.a; return t.a.ba().s(function(e) { throw t.a == n && t.reset(), e }) }

                    function Yo(t) {
                        t.a.Cb() && Jo(t).s(function(n) {
                            var e = new hr("unknown", null, null, null, new Pi("operation-not-supported-in-this-environment"));
                            Zo(n) && t.m(e)
                        }), t.a.xb() || na(t.c)
                    }

                    function $o(t, n, e, i, r, o) { return t.a.ub(n, e, i, function() { t.f || (t.f = !0, t.a.ua(t.i)) }, function() { t.reset() }, r, o) }

                    function Zo(t) { return !(!t || "auth/cordova-not-ready" != t.code) }

                    function Qo(t, n, e) { var i = n + ":" + e; return Ef[i] || (Ef[i] = new Go(t, n, e)), Ef[i] }

                    function ta() { this.b = null, this.f = [], this.c = [], this.a = null, this.g = !1 }

                    function na(t) { t.g || (t.g = !0, oa(t, !1, null, null)) }

                    function ea(t, n, e) {
                        e = e.va(n.b, n.c);
                        var i = n.f,
                            r = n.g,
                            o = !!n.b.match(/Redirect$/);
                        return e(i, r).then(function(n) { oa(t, o, n, null) }).s(function(n) { oa(t, o, null, n) })
                    }

                    function ia(t, n) {
                        if (t.b = function() { return et(n) }, t.c.length)
                            for (var e = 0; e < t.c.length; e++) t.c[e](n)
                    }

                    function ra(t, n) {
                        if (t.b = function() { return nt(n) }, t.f.length)
                            for (var e = 0; e < t.f.length; e++) t.f[e](n)
                    }

                    function oa(t, n, e, i) { n ? i ? ia(t, i) : ra(t, e) : ra(t, { user: null }), t.f = [], t.c = [] }

                    function aa(t) {
                        var n = new Pi("timeout");
                        t.a && t.a.cancel(), t.a = gn(Af.get()).then(function() { t.b || oa(t, !0, null, n) })
                    }

                    function sa() {}

                    function ua(t, n) {
                        var e = t.c,
                            i = t.b;
                        return n.va(i, e)(t.f, t.g).then(function(t) { n.fa(i, t, null, e) }).s(function(t) { n.fa(i, null, t, e) })
                    }

                    function ca(t, n) { this.a = n, Ti(this, "verificationId", t) }

                    function ha(t, n, e, i) { return new ar(t).Qa(n, e).then(function(t) { return new ca(t, i) }) }

                    function fa(t, n, e, i, r, o) { if (this.h = t, this.i = n, this.g = e, this.c = i, this.f = r, this.l = !!o, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!") }

                    function la(t, n) { return n ? (t.a = t.c, t.g()) : (n = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), n) }

                    function pa(t, n) { da(t), t.b = gn(la(t, n)).then(function() { return t.l ? nt() : yi() }).then(function() { return t.h() }).then(function() { pa(t, !0) }).s(function(n) { t.i(n) && pa(t, !1) }) }

                    function da(t) { t.b && (t.b.cancel(), t.b = null) }

                    function va(t) { this.f = t, this.b = this.a = null, this.c = 0 }

                    function ma(t, n) {
                        var e = n[Ph],
                            i = n.refreshToken;
                        n = ga(n.expiresIn), t.b = e, t.c = n, t.a = i
                    }

                    function ga(t) { return fu() + 1e3 * parseInt(t, 10) }

                    function ba(t, n) { return Ir(t.f, n).then(function(n) { return t.b = n.access_token, t.c = ga(n.expires_in), t.a = n.refresh_token, { accessToken: t.b, expirationTime: t.c, refreshToken: t.a } }).s(function(n) { throw "auth/user-token-expired" == n.code && (t.a = null), n }) }

                    function wa(t, n) { this.a = t || null, this.b = n || null, ki(this, { lastSignInTime: Ii(n || null), creationTime: Ii(t || null) }) }

                    function ya(t) { return new wa(t.a, t.b) }

                    function Ia(t, n, e, i, r, o) { ki(this, { uid: t, displayName: i || null, photoURL: r || null, email: e || null, phoneNumber: o || null, providerId: n }) }

                    function Ta(t, n) { Bt.call(this, t); for (var e in n) this[e] = n[e] }

                    function ka(t, n, e) {
                        this.A = [], this.G = t.apiKey, this.o = t.appName, this.w = t.authDomain || null, t = au.SDK_VERSION ? ii(au.SDK_VERSION) : null, this.c = new mr(this.G, Fr(Uh), t), this.h = new va(this.c), _a(this, n[Ph]), ma(this.h, n), Ti(this, "refreshToken", this.h.a), xa(this, e || {}), fn.call(this), this.I = !1, this.w && si() && (this.a = Qo(this.w, this.G, this.o)), this.N = [], this.i = null, this.l = Oa(this), this.U = l(this.Ga, this);
                        var i = this;
                        this.ha = null, this.ra = function(t) { i.na(t.h) }, this.W = null, this.R = [], this.qa = function(t) { Ea(i, t.f) }, this.V = null
                    }

                    function Aa(t, n) { t.W && en(t.W, "languageCodeChanged", t.ra), (t.W = n) && Zt(n, "languageCodeChanged", t.ra) }

                    function Ea(t, n) { t.R = n, br(t.c, au.SDK_VERSION ? ii(au.SDK_VERSION, t.R) : null) }

                    function Na(t, n) { t.V && en(t.V, "frameworkChanged", t.qa), (t.V = n) && Zt(n, "frameworkChanged", t.qa) }

                    function Sa(t) { try { return au.app(t.o).auth() } catch (n) { throw new Pi("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + t.o + "'!") } }

                    function Oa(t) { return new fa(function() { return t.F(!0) }, function(t) { return !(!t || "auth/network-request-failed" != t.code) }, function() { var n = t.h.c - fu() - 3e5; return 0 < n ? n : 0 }, 3e4, 96e4, !1) }

                    function Pa(t) { t.m || t.l.b || (t.l.start(), en(t, "tokenChanged", t.U), Zt(t, "tokenChanged", t.U)) }

                    function Ca(t) { en(t, "tokenChanged", t.U), da(t.l) }

                    function _a(t, n) { t.pa = n, Ti(t, "_lat", n) }

                    function Ra(t, n) { N(t.N, function(t) { return t == n }) }

                    function Da(t) { for (var n = [], e = 0; e < t.N.length; e++) n.push(t.N[e](t)); return ot(n).then(function() { return t }) }

                    function La(t) { t.a && !t.I && (t.I = !0, t.a.subscribe(t)) }

                    function xa(t, n) { ki(t, { uid: n.uid, displayName: n.displayName || null, photoURL: n.photoURL || null, email: n.email || null, emailVerified: n.emailVerified || !1, phoneNumber: n.phoneNumber || null, isAnonymous: n.isAnonymous || !1, metadata: new wa(n.createdAt, n.lastLoginAt), providerData: [] }) }

                    function ja() {}

                    function Ua(t) { return nt().then(function() { if (t.m) throw new Pi("app-deleted") }) }

                    function Ma(t) { return ku(t.providerData, function(t) { return t.providerId }) }

                    function Va(t, n) { n && (Fa(t, n.providerId), t.providerData.push(n)) }

                    function Fa(t, n) { N(t.providerData, function(t) { return t.providerId == n }) }

                    function Ka(t, n, e) {
                        ("uid" != n || e) && t.hasOwnProperty(n) && Ti(t, n, e)
                    }

                    function qa(t, n) { t != n && (ki(t, { uid: n.uid, displayName: n.displayName, photoURL: n.photoURL, email: n.email, emailVerified: n.emailVerified, phoneNumber: n.phoneNumber, isAnonymous: n.isAnonymous, providerData: [] }), n.metadata ? Ti(t, "metadata", ya(n.metadata)) : Ti(t, "metadata", new wa), Tu(n.providerData, function(n) { Va(t, n) }), t.h = n.h, Ti(t, "refreshToken", t.h.a)) }

                    function Xa(t) { return t.F().then(function(n) { var e = t.isAnonymous; return Ha(t, n).then(function() { return e || Ka(t, "isAnonymous", !1), n }) }) }

                    function Ba(t, n) { n[Ph] && t.pa != n[Ph] && (ma(t.h, n), ln(t, new Ta("tokenChanged")), _a(t, n[Ph]), Ka(t, "refreshToken", t.h.a)) }

                    function Ha(t, n) { return Ur(t.c, Bh, { idToken: n }).then(l(t.gc, t)) }

                    function Wa(t) { return (t = t.providerUserInfo) && t.length ? ku(t, function(t) { return new Ia(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber) }) : [] }

                    function Ga(t, n) { return Xa(t).then(function() { if (A(Ma(t), n)) return Da(t).then(function() { throw new Pi("provider-already-linked") }) }) }

                    function za(t, n, e) { var i = ur(n); return n = ji(n), Ai({ user: t, credential: i, additionalUserInfo: n, operationType: e }) }

                    function Ja(t, n) { return Ba(t, n), t.reload().then(function() { return t }) }

                    function Ya(t, n, e, i, r) {
                        if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
                        if (t.i && !r) return et(t.i);
                        var o = xi(e.providerId),
                            a = di(t.uid + ":::"),
                            s = null;
                        (!hi() || Qe()) && t.w && e.isOAuthProvider && (s = Qr(t.w, t.G, t.o, n, e, null, a, au.SDK_VERSION || null));
                        var u = ze(s, o && o.za, o && o.ya);
                        return i = i().then(function() { if (Za(t), !r) return t.F().then(function() {}) }).then(function() { return $o(t.a, u, n, e, a, !!s) }).then(function() { return new Z(function(e, i) { t.fa(n, null, new Pi("cancelled-popup-request"), t.g || null), t.f = e, t.v = i, t.g = a, t.b = t.a.Ca(t, n, u, a) }) }).then(function(t) { return u && Ge(u), t ? Ai(t) : null }).s(function(t) { throw u && Ge(u), t }), Qa(t, i, r)
                    }

                    function $a(t, n, e, i, r) {
                        if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
                        if (t.i && !r) return et(t.i);
                        var o = null,
                            a = di(t.uid + ":::");
                        return i = i().then(function() { if (Za(t), !r) return t.F().then(function() {}) }).then(function() { return t.Z = a, Da(t) }).then(function(n) { return t.ca && (n = t.ca, n = n.b.set(Nf, t.B(), n.a)), n }).then(function() { return t.a.Aa(n, e, a) }).s(function(n) { if (o = n, t.ca) return rs(t.ca); throw o }).then(function() { if (o) throw o }), Qa(t, i, r)
                    }

                    function Za(t) { if (!t.a || !t.I) { if (t.a && !t.I) throw new Pi("internal-error"); throw new Pi("auth-domain-config-required") } }

                    function Qa(t, n, e) { var i = ts(t, n, e); return t.A.push(i), at(i, function() { E(t.A, i) }), i }

                    function ts(t, n, e) { return t.i && !e ? (n.cancel(), et(t.i)) : n.s(function(n) { throw !n || "auth/user-disabled" != n.code && "auth/user-token-expired" != n.code || (t.i || ln(t, new Ta("userInvalidated")), t.i = n), n }) }

                    function ns(t) {
                        if (!t.apiKey) return null;
                        var n = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
                            e = {};
                        if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
                        e[Ph] = t.stsTokenManager.accessToken, e.refreshToken = t.stsTokenManager.refreshToken || null, e.expiresIn = (t.stsTokenManager.expirationTime - fu()) / 1e3;
                        var i = new ka(n, e, t);
                        return t.providerData && Tu(t.providerData, function(t) { t && Va(i, Ai(t)) }), t.redirectEventId && (i.Z = t.redirectEventId), i
                    }

                    function es(t, n, e, i) { var r = new ka(t, n); return e && (r.ca = e), i && Ea(r, i), r.reload().then(function() { return r }) }

                    function is(t) { this.a = t, this.b = To() }

                    function rs(t) { return Eo(t.b, Nf, t.a) }

                    function os(t, n) { return t.b.get(Nf, t.a).then(function(t) { return t && n && (t.authDomain = n), ns(t || {}) }) }

                    function as(t, n) { this.a = t, this.b = n || To(), this.c = null, this.f = us(this), No(this.b, cs("local"), this.a, l(this.g, this)) }

                    function ss(t, n) { var e, i = []; for (e in yf) yf[e] !== n && i.push(Eo(t.b, cs(yf[e]), t.a)); return i.push(Eo(t.b, Sf, t.a)), rt(i) }

                    function us(t) {
                        var n = cs("local"),
                            e = cs("session"),
                            i = cs("none");
                        return t.b.get(e, t.a).then(function(r) { return r ? e : t.b.get(i, t.a).then(function(e) { return e ? i : t.b.get(n, t.a).then(function(e) { return e ? n : t.b.get(Sf, t.a).then(function(t) { return t ? cs(t) : n }) }) }) }).then(function(n) { return t.c = n, ss(t, n.C) }).s(function() { t.c || (t.c = n) })
                    }

                    function cs(t) { return { name: "authUser", C: t } }

                    function hs(t) { return ds(t, function() { return t.b.set(Sf, t.c.C, t.a) }) }

                    function fs(t, n) { return ds(t, function() { return t.b.set(t.c, n.B(), t.a) }) }

                    function ls(t) { return ds(t, function() { return Eo(t.b, t.c, t.a) }) }

                    function ps(t, n) { return ds(t, function() { return t.b.get(t.c, t.a).then(function(t) { return t && n && (t.authDomain = n), ns(t || {}) }) }) }

                    function ds(t, n) { return t.f = t.f.then(n, n), t.f }

                    function vs(t) {
                        if (this.l = !1, Ti(this, "app", t), !Ss(this).options || !Ss(this).options.apiKey) throw new Pi("invalid-api-key");
                        t = au.SDK_VERSION ? ii(au.SDK_VERSION) : null, this.c = new mr(Ss(this).options && Ss(this).options.apiKey, Fr(Uh), t), this.N = [], this.m = [], this.I = [], this.Gb = au.INTERNAL.createSubscribe(l(this.Xb, this)), this.R = void 0, this.Hb = au.INTERNAL.createSubscribe(l(this.Yb, this)), Ts(this, null), this.h = new as(Ss(this).options.apiKey + ":" + Ss(this).name), this.G = new is(Ss(this).options.apiKey + ":" + Ss(this).name), this.U = Rs(this, As(this)), this.i = Rs(this, Es(this)), this.W = !1, this.ha = l(this.uc, this), this.Ga = l(this.ka, this), this.pa = l(this.Pb, this), this.qa = l(this.Vb, this), this.ra = l(this.Wb, this), ys(this), this.INTERNAL = {}, this.INTERNAL.delete = l(this.delete, this), this.INTERNAL.logFramework = l(this.cc, this), this.o = 0, fn.call(this), bs(this), this.A = []
                    }

                    function ms(t) { Bt.call(this, "languageCodeChanged"), this.h = t }

                    function gs(t) { Bt.call(this, "frameworkChanged"), this.f = t }

                    function bs(t) { Object.defineProperty(t, "lc", { get: function() { return this.$() }, set: function(t) { this.na(t) }, enumerable: !1 }), t.V = null }

                    function ws(t) { return t.Fb || et(new Pi("auth-domain-config-required")) }

                    function ys(t) {
                        var n = Ss(t).options.authDomain,
                            e = Ss(t).options.apiKey;
                        n && si() && (t.Fb = t.U.then(function() {
                            if (!t.l) {
                                if (t.a = Qo(n, e, Ss(t).name), t.a.subscribe(t), Os(t) && La(Os(t)), t.w) {
                                    La(t.w);
                                    var i = t.w;
                                    i.na(t.$()), Aa(i, t), i = t.w, Ea(i, t.A), Na(i, t), t.w = null
                                }
                                return t.a
                            }
                        }))
                    }

                    function Is(t, n) { var e = {}; return e.apiKey = Ss(t).options.apiKey, e.authDomain = Ss(t).options.authDomain, e.appName = Ss(t).name, t.U.then(function() { return es(e, n, t.G, t.Ka()) }).then(function(n) { return Os(t) && n.uid == Os(t).uid ? (qa(Os(t), n), t.ka(n)) : (Ts(t, n), La(n), t.ka(n)) }).then(function() { Cs(t) }) }

                    function Ts(t, n) { Os(t) && (Ra(Os(t), t.Ga), en(Os(t), "tokenChanged", t.pa), en(Os(t), "userDeleted", t.qa), en(Os(t), "userInvalidated", t.ra), Ca(Os(t))), n && (n.N.push(t.Ga), Zt(n, "tokenChanged", t.pa), Zt(n, "userDeleted", t.qa), Zt(n, "userInvalidated", t.ra), 0 < t.o && Pa(n)), Ti(t, "currentUser", n), n && (n.na(t.$()), Aa(n, t), Ea(n, t.A), Na(n, t)) }

                    function ks(t) { var n = os(t.G, Ss(t).options.authDomain).then(function(n) { return (t.w = n) && (n.ca = t.G), rs(t.G) }); return Rs(t, n) }

                    function As(t) {
                        var n = Ss(t).options.authDomain,
                            e = ks(t).then(function() { return ps(t.h, n) }).then(function(n) { return n ? (n.ca = t.G, t.w && (t.w.Z || null) == (n.Z || null) ? n : n.reload().then(function() { return fs(t.h, n).then(function() { return n }) }).s(function(e) { return "auth/network-request-failed" == e.code ? n : ls(t.h) })) : null }).then(function(n) { Ts(t, n || null) });
                        return Rs(t, e)
                    }

                    function Es(t) {
                        return t.U.then(function() { return t.aa() }).s(function() {}).then(function() { if (!t.l) return t.ha() }).s(function() {}).then(function() {
                            if (!t.l) {
                                t.W = !0;
                                var n = t.h;
                                No(n.b, cs("local"), n.a, t.ha)
                            }
                        })
                    }

                    function Ns(t, n) {
                        var e = null,
                            i = null;
                        return Rs(t, n.then(function(n) { return e = ur(n), i = ji(n), Is(t, n) }).then(function() { return Ai({ user: Os(t), credential: e, additionalUserInfo: i, operationType: "signIn" }) }))
                    }

                    function Ss(t) { return t.app }

                    function Os(t) { return t.currentUser }

                    function Ps(t) { return Os(t) && Os(t)._lat || null }

                    function Cs(t) {
                        if (t.W) {
                            for (var n = 0; n < t.m.length; n++) t.m[n] && t.m[n](Ps(t));
                            if (t.R !== t.getUid() && t.I.length)
                                for (t.R = t.getUid(), n = 0; n < t.I.length; n++) t.I[n] && t.I[n](Ps(t))
                        }
                    }

                    function _s(t, n) { t.I.push(n), Rs(t, t.i.then(function() {!t.l && A(t.I, n) && t.R !== t.getUid() && (t.R = t.getUid(), n(Ps(t))) })) }

                    function Rs(t, n) { return t.N.push(n), at(n, function() { E(t.N, n) }), n }

                    function Ds(t, n, e, i) {
                        t: {
                            e = Array.prototype.slice.call(e);
                            for (var r = 0, o = !1, a = 0; a < n.length; a++)
                                if (n[a].optional) o = !0;
                                else {
                                    if (o) throw new Pi("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                    r++
                                }
                            if (o = n.length, e.length < r || o < e.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + e.length + ".";
                            else {
                                for (r = 0; r < e.length; r++)
                                    if (o = n[r].optional && void 0 === e[r], !n[r].M(e[r]) && !o) {
                                        if (n = n[r], 0 > r || r >= Of.length) throw new Pi("internal-error", "Argument validator received an unsupported number of arguments.");
                                        e = Of[r], i = (i ? "" : e + " argument ") + (n.name ? '"' + n.name + '" ' : "") + "must be " + n.K + ".";
                                        break t
                                    }
                                i = null
                            }
                        }
                        if (i) throw new Pi("argument-error", t + " failed: " + i)
                    }

                    function Ls(n, e) { return { name: n || "", K: "a valid string", optional: !!e, M: t } }

                    function xs() { return { name: "opt_forceRefresh", K: "a boolean", optional: !0, M: n } }

                    function js(t, n) { return { name: t || "", K: "a valid object", optional: !!n, M: c } }

                    function Us(t, n) { return { name: t || "", K: "a function", optional: !!n, M: u } }

                    function Ms(t, n) { return { name: t || "", K: "null", optional: !!n, M: o } }

                    function Vs() { return { name: "", K: "an HTML element", optional: !1, M: function(t) { return !!(t && t instanceof Element) } } }

                    function Fs() { return { name: "auth", K: "an instance of Firebase Auth", optional: !0, M: function(t) { return !!(t && t instanceof vs) } } }

                    function Ks() { return { name: "app", K: "an instance of Firebase App", optional: !0, M: function(t) { return !!(t && t instanceof au.app.App) } } }

                    function qs(t) { return { name: t ? t + "Credential" : "credential", K: t ? "a valid " + t + " credential" : "a valid credential", optional: !1, M: function(n) { if (!n) return !1; var e = !t || n.providerId === t; return !(!n.wa || !e) } } }

                    function Xs() { return { name: "authProvider", K: "a valid Auth provider", optional: !1, M: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } } }

                    function Bs() { return { name: "applicationVerifier", K: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, M: function(n) { return !!(n && t(n.type) && u(n.verify)) } } }

                    function Hs(t, n, e, i) { return { name: e || "", K: t.K + " or " + n.K, optional: !!i, M: function(e) { return t.M(e) || n.M(e) } } }

                    function Ws(t, n, e, i, r, o) {
                        if (Ti(this, "type", "recaptcha"), this.b = this.c = null, this.m = !1, this.l = n, this.a = e || { theme: "light", type: "image" }, this.g = [], this.a[_f]) throw new Pi("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
                        if (this.h = "invisible" === this.a[Rf], !Dt(n) || !this.h && Dt(n).hasChildNodes()) throw new Pi("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                        this.u = new mr(t, o || null, r || null), this.o = i || function() { return null };
                        var a = this;
                        this.i = [];
                        var s = this.a[Pf];
                        this.a[Pf] = function(t) {
                            if (Gs(a, t), "function" == typeof s) s(t);
                            else if ("string" == typeof s) { var n = oi(s, uu); "function" == typeof n && n(t) }
                        };
                        var u = this.a[Cf];
                        this.a[Cf] = function() {
                            if (Gs(a, null), "function" == typeof u) u();
                            else if ("string" == typeof u) { var t = oi(u, uu); "function" == typeof t && t() }
                        }
                    }

                    function Gs(t, n) {
                        for (var e = 0; e < t.i.length; e++) try { t.i[e](n) }
                        catch (t) {}
                    }

                    function zs(t, n) { N(t.i, function(t) { return t == n }) }

                    function Js(t, n) { return t.g.push(n), at(n, function() { E(t.g, n) }), n }

                    function Ys(t) { if (t.m) throw new Pi("internal-error", "RecaptchaVerifier instance has been destroyed.") }

                    function $s() { this.b = uu.grecaptcha ? 1 / 0 : 0, this.c = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()) }

                    function Zs(t, n) {
                        return new Z(function(e, i) {
                            if (gi())
                                if (!uu.grecaptcha || n !== t.c && !t.b) {
                                    uu[t.a] = function() {
                                        if (uu.grecaptcha) {
                                            t.c = n;
                                            var r = uu.grecaptcha.render;
                                            uu.grecaptcha.render = function(n, e) { return n = r(n, e), t.b++, n }, e()
                                        }
                                        else i(new Pi("internal-error"));
                                        delete uu[t.a]
                                    };
                                    var r = At(Df, { onload: t.a, hl: n || "" });
                                    nt(De(r)).s(function() { i(new Pi("internal-error", "Unable to load external reCAPTCHA dependencies!")) })
                                }
                            else e();
                            else i(new Pi("network-request-failed"))
                        })
                    }

                    function Qs() { return Lf || (Lf = new $s), Lf }

                    function tu(t, n, e) {
                        try { this.f = e || au.app() }
                        catch (t) { throw new Pi("argument-error", "No firebase.app.App instance is currently initialized.") }
                        if (!this.f.options || !this.f.options.apiKey) throw new Pi("invalid-api-key");
                        e = this.f.options.apiKey;
                        var i = this,
                            r = null;
                        try { r = this.f.auth().Ka() }
                        catch (t) {} r = au.SDK_VERSION ? ii(au.SDK_VERSION, r) : null, Ws.call(this, e, t, n, function() { try { var t = i.f.auth().$() } catch (n) { t = null } return t }, r, Fr(Uh))
                    }

                    function nu(t, n) {
                        for (var e in n) {
                            var i = n[e].name;
                            t[i] = iu(i, t[e], n[e].j)
                        }
                    }

                    function eu(t, n, e, i) { t[n] = iu(n, e, i) }

                    function iu(t, n, e) {
                        function i() { var t = Array.prototype.slice.call(arguments); return Ds(o, e, t), n.apply(this, t) }
                        if (!e) return n;
                        var r, o = ru(t);
                        for (r in n) i[r] = n[r];
                        for (r in n.prototype) i.prototype[r] = n.prototype[r];
                        return i
                    }

                    function ru(t) { return t = t.split("."), t[t.length - 1] }
                    var ou, au = e(6).default,
                        su = su || {},
                        uu = this,
                        cu = "closure_uid_" + (1e9 * Math.random() >>> 0),
                        hu = 0,
                        fu = Date.now || function() { return +new Date };
                    d(v, Error), v.prototype.name = "CustomError";
                    var lu = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") },
                        pu = /&/g,
                        du = /</g,
                        vu = />/g,
                        mu = /"/g,
                        gu = /'/g,
                        bu = /\x00/g,
                        wu = /[\x00&<>"']/;
                    d(y, v), y.prototype.name = "AssertionError";
                    var yu, Iu = Array.prototype.indexOf ? function(t, n, e) { return Array.prototype.indexOf.call(t, n, e) } : function(n, e, i) {
                            if (i = null == i ? 0 : 0 > i ? Math.max(0, n.length + i) : i, t(n)) return t(e) && 1 == e.length ? n.indexOf(e, i) : -1;
                            for (; i < n.length; i++)
                                if (i in n && n[i] === e) return i;
                            return -1
                        },
                        Tu = Array.prototype.forEach ? function(t, n, e) { Array.prototype.forEach.call(t, n, e) } : function(n, e, i) { for (var r = n.length, o = t(n) ? n.split("") : n, a = 0; a < r; a++) a in o && e.call(i, o[a], a, n) },
                        ku = Array.prototype.map ? function(t, n, e) { return Array.prototype.map.call(t, n, e) } : function(n, e, i) { for (var r = n.length, o = Array(r), a = t(n) ? n.split("") : n, s = 0; s < r; s++) s in a && (o[s] = e.call(i, a[s], s, n)); return o },
                        Au = Array.prototype.some ? function(t, n, e) { return Array.prototype.some.call(t, n, e) } : function(n, e, i) {
                            for (var r = n.length, o = t(n) ? n.split("") : n, a = 0; a < r; a++)
                                if (a in o && e.call(i, o[a], a, n)) return !0;
                            return !1
                        };
                    t: { var Eu = uu.navigator; if (Eu) { var Nu = Eu.userAgent; if (Nu) { yu = Nu; break t } } yu = "" }
                    var Su = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                    U[" "] = i;
                    var Ou, Pu = P("Opera"),
                        Cu = P("Trident") || P("MSIE"),
                        _u = P("Edge"),
                        Ru = _u || Cu,
                        Du = P("Gecko") && !(b(yu.toLowerCase(), "webkit") && !P("Edge")) && !(P("Trident") || P("MSIE")) && !P("Edge"),
                        Lu = b(yu.toLowerCase(), "webkit") && !P("Edge");
                    t: {
                        var xu = "",
                            ju = function() { var t = yu; return Du ? /rv\:([^\);]+)(\)|;)/.exec(t) : _u ? /Edge\/([\d\.]+)/.exec(t) : Cu ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Lu ? /WebKit\/(\S+)/.exec(t) : Pu ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0 }();
                        if (ju && (xu = ju ? ju[1] : ""), Cu) { var Uu = V(); if (null != Uu && Uu > parseFloat(xu)) { Ou = Uu + ""; break t } } Ou = xu
                    }
                    var Mu, Vu = {},
                        Fu = uu.document;
                    Mu = Fu && Cu ? V() || ("CSS1Compat" == Fu.compatMode ? parseInt(Ou, 10) : 5) : void 0, X.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var t = this.a;
                            this.a = t.next, t.next = null
                        }
                        else t = this.c();
                        return t
                    };
                    var Ku = new X(function() { return new W }, function(t) { t.reset() }, 100);
                    W.prototype.set = function(t, n) { this.a = t, this.b = n, this.next = null }, W.prototype.reset = function() { this.next = this.b = this.a = null };
                    var qu, Xu, Bu = !1,
                        Hu = new function() { this.b = this.a = null },
                        Wu = 0,
                        Gu = 2,
                        zu = 3;
                    Q.prototype.reset = function() { this.f = this.b = this.g = this.a = null, this.c = !1 };
                    var Ju = new X(function() { return new Q }, function(t) { t.reset() }, 100);
                    Z.prototype.then = function(t, n, e) { return ct(this, u(t) ? t : null, u(n) ? n : null, e) }, K(Z), ou = Z.prototype, ou.s = function(t, n) { return ct(this, null, t, n) }, ou.cancel = function(t) { this.a == Wu && J(function() { st(this, new bt(t)) }, this) }, ou.wc = function(t) { this.a = Wu, ht(this, Gu, t) }, ou.xc = function(t) { this.a = Wu, ht(this, zu, t) }, ou.Mb = function() {
                        for (var t; t = dt(this);) vt(this, t, this.a, this.i);
                        this.h = !1
                    };
                    var Yu = G;
                    d(bt, v), bt.prototype.name = "cancel";
                    var $u = !Cu || 9 <= +Mu;
                    wt.prototype.la = !0, wt.prototype.ja = function() { return this.a }, wt.prototype.toString = function() { return "Const{" + this.a + "}" };
                    var Zu = {};
                    It(""), Tt.prototype.la = !0, Tt.prototype.ja = function() { return this.a }, Tt.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" };
                    var Qu = /%{(\w+)}/g,
                        tc = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
                        nc = {};
                    Nt.prototype.la = !0, Nt.prototype.ja = function() { return this.a }, Nt.prototype.toString = function() { return "SafeUrl{" + this.a + "}" };
                    var ec = /^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i,
                        ic = {};
                    Pt("about:blank"), Ct.prototype.la = !0, Ct.prototype.ja = function() { return this.a }, Ct.prototype.toString = function() { return "SafeHtml{" + this.a + "}" };
                    var rc = {};
                    Rt("<!DOCTYPE html>"), Rt(""), Rt("<br>");
                    var oc = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" },
                        ac = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
                        sc = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
                        uc = 0,
                        cc = {};
                    qt.prototype.oa = !1, qt.prototype.ta = function() {
                        if (this.Fa)
                            for (; this.Fa.length;) this.Fa.shift()()
                    };
                    var hc = Object.freeze || function(t) { return t },
                        fc = !Cu || 9 <= +Mu,
                        lc = Cu && !F("9"),
                        pc = function() {
                            if (!uu.addEventListener || !Object.defineProperty) return !1;
                            var t = !1,
                                n = Object.defineProperty({}, "passive", { get: function() { t = !0 } });
                            return uu.addEventListener("test", i, n), uu.removeEventListener("test", i, n), t
                        }();
                    Bt.prototype.c = function() { this.Ab = !1 }, d(Ht, Bt);
                    var dc = hc({ 2: "touch", 3: "pen", 4: "mouse" });
                    Ht.prototype.c = function() {
                        Ht.ib.c.call(this);
                        var t = this.a;
                        if (t.preventDefault) t.preventDefault();
                        else if (t.returnValue = !1, lc) try {
                            (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                        }
                        catch (t) {}
                    }, Ht.prototype.g = function() { return this.a };
                    var vc = "closure_listenable_" + (1e6 * Math.random() | 0),
                        mc = 0,
                        gc = "closure_lm_" + (1e6 * Math.random() | 0),
                        bc = {},
                        wc = 0,
                        yc = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                    d(fn, qt), fn.prototype[vc] = !0, fn.prototype.removeEventListener = function(t, n, e, i) { en(this, t, n, e, i) }, fn.prototype.ta = function() {
                        if (fn.ib.ta.call(this), this.u) {
                            var t, n = this.u,
                                e = 0;
                            for (t in n.a) {
                                for (var i = n.a[t], r = 0; r < i.length; r++) ++e, Gt(i[r]);
                                delete n.a[t], n.b--
                            }
                        }
                        this.Ra = null
                    }, bn.prototype.a = null;
                    var Ic = 0;
                    bn.prototype.reset = function(t, n, e, i, r) { "number" == typeof r || Ic++, i || fu(), this.b = n, delete this.a }, yn.prototype.toString = function() { return this.name };
                    var Tc = new yn("SEVERE", 1e3),
                        kc = new yn("CONFIG", 700),
                        Ac = new yn("FINE", 500);
                    wn.prototype.log = function(t, n, e) {
                        if (t.value >= In(this).value)
                            for (u(n) && (n = n()), t = new bn(t, n + "", this.f), e && (t.a = e), e = "log:" + t.b, (t = uu.console) && t.timeStamp && t.timeStamp(e), (t = uu.msWriteProfilerMark) && t(e), e = this; e;) e = e.a
                    };
                    var Ec = {},
                        Nc = null;
                    ou = kn.prototype, ou.P = function() { An(this); for (var t = [], n = 0; n < this.a.length; n++) t.push(this.b[this.a[n]]); return t }, ou.S = function() { return An(this), this.a.concat() }, ou.clear = function() { this.b = {}, this.c = this.a.length = 0 }, ou.get = function(t, n) { return En(this.b, t) ? this.b[t] : n }, ou.set = function(t, n) { En(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = n }, ou.forEach = function(t, n) {
                        for (var e = this.S(), i = 0; i < e.length; i++) {
                            var r = e[i],
                                o = this.get(r);
                            t.call(n, o, r, this)
                        }
                    };
                    var Sc = null,
                        Oc = null;
                    _n.prototype.cancel = function(t) {
                        if (this.a) this.c instanceof _n && this.c.cancel();
                        else {
                            if (this.b) {
                                var n = this.b;
                                delete this.b, t ? n.cancel(t) : 0 >= --n.l && n.cancel()
                            }
                            this.v ? this.v.call(this.o, this) : this.u = !0, this.a || (t = new Vn, Dn(this), Rn(this, !1, t))
                        }
                    }, _n.prototype.m = function(t, n) { this.i = !1, Rn(this, t, n) }, _n.prototype.A = function(t) { Dn(this), Rn(this, !0, t) }, _n.prototype.then = function(t, n, e) { var i, r, o = new Z(function(t, n) { i = t, r = n }); return xn(this, i, function(t) { t instanceof Vn ? o.cancel() : r(t) }), o.then(t, n, e) }, K(_n), d(Mn, v), Mn.prototype.message = "Deferred has already fired", Mn.prototype.name = "AlreadyCalledError", d(Vn, v), Vn.prototype.message = "Deferred was canceled", Vn.prototype.name = "CanceledError", Fn.prototype.c = function() { throw delete Cc[this.a], this.b };
                    var Pc, Cc = {};
                    d(qn, Kn);
                    for (var _c = 64, Rc = _c - 1, Dc = [], Lc = 0; Lc < Rc; Lc++) Dc[Lc] = 0;
                    var xc = S(128, Dc);
                    qn.prototype.reset = function() { this.g = this.c = 0, this.a = uu.Int32Array ? new Int32Array(this.h) : O(this.h) };
                    var jc = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
                    d(Hn, qn);
                    var Uc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                        Mc = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                    Yn.prototype.toString = function() {
                        var t = [],
                            n = this.c;
                        n && t.push(oe(n, Vc, !0), ":");
                        var e = this.b;
                        return (e || "file" == n) && (t.push("//"), (n = this.l) && t.push(oe(n, Vc, !0), "@"), t.push(encodeURIComponent(e + "").replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (e = this.i) && t.push(":", e + "")), (e = this.g) && (this.b && "/" != e.charAt(0) && t.push("/"), t.push(oe(e, "/" == e.charAt(0) ? Kc : Fc, !0))), (e = "" + this.a) && t.push("?", e), (e = this.h) && t.push("#", oe(e, Xc)), t.join("")
                    };
                    var Vc = /[#\/\?@]/g,
                        Fc = /[\#\?:]/g,
                        Kc = /[\#\?]/g,
                        qc = /[\#\?@]/g,
                        Xc = /#/g;
                    ou = se.prototype, ou.clear = function() { this.a = this.c = null, this.b = 0 }, ou.forEach = function(t, n) { ue(this), this.a.forEach(function(e, i) { Tu(e, function(e) { t.call(n, e, i, this) }, this) }, this) }, ou.S = function() {
                        ue(this);
                        for (var t = this.a.P(), n = this.a.S(), e = [], i = 0; i < n.length; i++)
                            for (var r = t[i], o = 0; o < r.length; o++) e.push(n[i]);
                        return e
                    }, ou.P = function(n) {
                        ue(this);
                        var e = [];
                        if (t(n)) le(this, n) && (e = S(e, this.a.get(de(this, n))));
                        else { n = this.a.P(); for (var i = 0; i < n.length; i++) e = S(e, n[i]) }
                        return e
                    }, ou.set = function(t, n) { return ue(this), this.c = null, t = de(this, t), le(this, t) && (this.b -= this.a.get(t).length), this.a.set(t, [n]), this.b += 1, this }, ou.get = function(t, n) { return t = t ? this.P(t) : [], 0 < t.length ? t[0] + "" : n }, ou.toString = function() {
                        if (this.c) return this.c;
                        if (!this.a) return "";
                        for (var t = [], n = this.a.S(), e = 0; e < n.length; e++) {
                            var i = n[e],
                                r = encodeURIComponent(i + "");
                            i = this.P(i);
                            for (var o = 0; o < i.length; o++) { var a = r; "" !== i[o] && (a += "=" + encodeURIComponent(i[o] + "")), t.push(a) }
                        }
                        return this.c = t.join("&")
                    }, me.prototype.c = null;
                    var Bc;
                    d(be, me), be.prototype.a = function() { var t = we(this); return t ? new ActiveXObject(t) : new XMLHttpRequest }, be.prototype.b = function() { var t = {}; return we(this) && (t[0] = !0, t[1] = !0), t }, Bc = new be, d(ye, fn);
                    var Hc = "",
                        Wc = ye.prototype,
                        Gc = Tn("goog.net.XhrIo");
                    Wc.J = Gc;
                    var zc = /^https?$/i,
                        Jc = ["POST", "PUT"];
                    ou = ye.prototype, ou.Ea = function() { void 0 !== su && this.a && (this.g = "Timed out after " + this.f + "ms, aborting", Nn(this.J, Re(this, this.g)), ln(this, "timeout"), this.abort(8)) }, ou.abort = function() { this.a && this.b && (Nn(this.J, Re(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, ln(this, "complete"), ln(this, "abort"), Se(this)) }, ou.ta = function() { this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Se(this, !0)), ye.ib.ta.call(this) }, ou.zb = function() { this.oa || (this.G || this.h || this.c ? Ne(this) : this.fc()) }, ou.fc = function() { Ne(this) }, ou.getResponse = function() {
                        try {
                            if (!this.a) return null;
                            if ("response" in this.a) return this.a.response;
                            switch (this.l) {
                                case Hc:
                                case "text":
                                    return this.a.responseText;
                                case "arraybuffer":
                                    if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer
                            }
                            var t = this.J;
                            return t && t.log(Tc, "Response type " + this.l + " is not supported on this browser", void 0), null
                        }
                        catch (t) { return Nn(this.J, "Can not get response: " + t.message), null }
                    };
                    var Yc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/,
                        $c = 0,
                        Zc = 1;
                    d(Ue, v), d(Me, me), Me.prototype.a = function() { var t = new XMLHttpRequest; if ("withCredentials" in t) return t; if ("undefined" != typeof XDomainRequest) return new Ve; throw Error("Unsupported browser") }, Me.prototype.b = function() { return {} }, ou = Ve.prototype, ou.open = function(t, n, e) {
                        if (null != e && !e) throw Error("Only async requests are supported.");
                        this.a.open(t, n)
                    }, ou.send = function(t) {
                        if (t) {
                            if ("string" != typeof t) throw Error("Only string data is supported");
                            this.a.send(t)
                        }
                        else this.a.send()
                    }, ou.abort = function() { this.a.abort() }, ou.setRequestHeader = function() {}, ou.getResponseHeader = function(t) { return "content-type" == t.toLowerCase() ? this.a.contentType : "" }, ou.Sb = function() { this.status = 200, this.responseText = this.a.responseText, Fe(this, 4) }, ou.wb = function() { this.status = 500, this.responseText = "", Fe(this, 4) }, ou.Ub = function() { this.wb() }, ou.Tb = function() { this.status = 200, Fe(this, 1) }, ou.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType };
                    var Qc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                        th = "Firefox",
                        nh = "Chrome",
                        eh = { Cc: "FirebaseCore-web", Ec: "FirebaseUI-web" };
                    bi.prototype.get = function() { return this.a ? this.b : this.c };
                    var ih, rh = {};
                    try {
                        var oh = {};
                        Object.defineProperty(oh, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(oh, "abcd", { configurable: !0, enumerable: !0, value: 2 }), ih = 2 == oh.abcd
                    }
                    catch (t) { ih = !1 }
                    var ah = "email",
                        sh = "newEmail",
                        uh = "requestType",
                        ch = "email",
                        hh = "fromEmail",
                        fh = "data",
                        lh = "operation";
                    d(Pi, Error), Pi.prototype.B = function() { return { code: this.code, message: this.message } }, Pi.prototype.toJSON = function() { return this.B() };
                    var ph = "auth/",
                        dh = { "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "The user's credential is no longer valid. The user must sign in again.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-email": "Please check with your school Administrator.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "user-cancelled": "User did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." },
                        vh = "android",
                        mh = "handleCodeInApp",
                        gh = "iOS",
                        bh = "url",
                        wh = "installApp",
                        yh = "minimumVersion",
                        Ih = "packageName",
                        Th = "bundleId",
                        kh = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                        Ah = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                        Eh = { Dc: { Ma: "locale", za: 500, ya: 600, Na: "facebook.com", $a: Ah }, Fc: { Ma: null, za: 500, ya: 620, Na: "github.com", $a: Ah }, Gc: { Ma: "hl", za: 515, ya: 680, Na: "google.com", $a: Ah }, Mc: { Ma: "lang", za: 485, ya: 705, Na: "twitter.com", $a: kh } },
                        Nh = "idToken",
                        Sh = "providerId";
                    d(Mi, Ui), d(Vi, Mi), d(Fi, Mi), d(Ki, Mi), d(qi, Mi), Bi.prototype.wa = function(t) { return Dr(t, Hi(this)) }, Bi.prototype.b = function(t, n) { var e = Hi(this); return e.idToken = n, Lr(t, e) }, Bi.prototype.c = function(t, n) { return Xi(xr(t, Hi(this)), n) }, Bi.prototype.B = function() { var t = { providerId: this.providerId }; return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), t }, Wi.prototype.Ba = function(t) { return this.qb = x(t), this }, d(Gi, Wi), Gi.prototype.sa = function(t) { return A(this.a, t) || this.a.push(t), this }, Gi.prototype.vb = function() { return O(this.a) }, Gi.prototype.credential = function(t, n) { if (!t && !n) throw new Pi("argument-error", "credential failed: must provide the ID token and/or the access token."); return new Bi(this.providerId, { idToken: t || null, accessToken: n || null }) }, d(zi, Gi), Ti(zi, "PROVIDER_ID", "facebook.com"), d(Yi, Gi), Ti(Yi, "PROVIDER_ID", "github.com"), d(Zi, Gi), Ti(Zi, "PROVIDER_ID", "google.com"), d(tr, Wi), Ti(tr, "PROVIDER_ID", "twitter.com"), er.prototype.wa = function(t) { return Ur(t, of , { email: this.a, password: this.f }) }, er.prototype.b = function(t, n) { return Ur(t, Zh, { idToken: n, email: this.a, password: this.f }) }, er.prototype.c = function(t, n) { return Xi(this.wa(t), n) }, er.prototype.B = function() { return { email: this.a, password: this.f } }, ki(ir, { PROVIDER_ID: "password" }), rr.prototype.wa = function(t) { return t.Qa(or(this)) }, rr.prototype.b = function(t, n) { var e = or(this); return e.idToken = n, Ur(t, sf, e) }, rr.prototype.c = function(t, n) { var e = or(this); return e.operation = "REAUTH", t = Ur(t, uf, e), Xi(t, n) }, rr.prototype.B = function() { var t = { providerId: "phone" }; return this.a.Pa && (t.verificationId = this.a.Pa), this.a.Oa && (t.verificationCode = this.a.Oa), this.a.Da && (t.temporaryProof = this.a.Da), this.a.Y && (t.phoneNumber = this.a.Y), t }, ar.prototype.Qa = function(n, e) {
                        var i = this.a.c;
                        return nt(e.verify()).then(function(r) {
                            if (!t(r)) throw new Pi("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
                            switch (e.type) {
                                case "recaptcha":
                                    return Pr(i, { phoneNumber: n, recaptchaToken: r }).then(function(t) { return "function" == typeof e.reset && e.reset(), t }, function(t) { throw "function" == typeof e.reset && e.reset(), t });
                                default:
                                    throw new Pi("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
                            }
                        })
                    }, ki(ar, { PROVIDER_ID: "phone" }), hr.prototype.B = function() { return { type: this.b, eventId: this.c, urlResponse: this.f, sessionId: this.g, error: this.a && this.a.B() } }, d(lr, Pi), d(pr, Pi), pr.prototype.B = function() {
                        var t = { code: this.code, message: this.message };
                        this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber);
                        var n = this.credential && this.credential.B();
                        return n && j(t, n), t
                    }, pr.prototype.toJSON = function() { return this.B() }, d(vr, me), vr.prototype.a = function() { return new this.f }, vr.prototype.b = function() { return {} };
                    var Oh, Ph = "idToken",
                        Ch = new bi(3e4, 6e4),
                        _h = { "Content-Type": "application/x-www-form-urlencoded" },
                        Rh = new bi(3e4, 6e4),
                        Dh = { "Content-Type": "application/json" };
                    mr.prototype.m = function(t, n, e, i, r, o) {
                        var a = "Node" == ti(),
                            s = ni() ? a ? new ye(this.o) : new ye : new ye(this.f);
                        if (o) { s.f = Math.max(0, o); var u = setTimeout(function() { ln(s, "timeout") }, o) } pn(s, "complete", function() { u && clearTimeout(u); var t = null; try { t = JSON.parse(_e(this)) || null } catch (n) { t = null } n && n(t) }), dn(s, "ready", function() { u && clearTimeout(u), Xt(this) }), dn(s, "timeout", function() { u && clearTimeout(u), Xt(this), n && n(null) }), Ie(s, t, e, i, r)
                    };
                    var Lh = It("https://apis.google.com/js/client.js?onload=%{onload}"),
                        xh = "__fcb" + Math.floor(1e6 * Math.random());
                    mr.prototype.u = function(t, n, e, i, r) {
                        var o = this;
                        Oh.then(function() {
                            window.gapi.client.setApiKey(o.b);
                            var a = window.gapi.auth.getToken();
                            window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: e, body: i, headers: r, authType: "none", callback: function(t) { window.gapi.auth.setToken(a), n && n(t) } })
                        }).s(function(t) { n && n({ error: { message: t && t.message || "CORS_UNSUPPORTED" } }) })
                    }, mr.prototype.gb = function() { return Ur(this, Qh, {}) }, mr.prototype.kb = function(t, n) { return Ur(this, $h, { idToken: t, email: n }) }, mr.prototype.lb = function(t, n) { return Ur(this, Zh, { idToken: t, password: n }) };
                    var jh = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };
                    ou = mr.prototype, ou.mb = function(t, n) {
                        var e = { idToken: t },
                            i = [];
                        return C(jh, function(t, r) {
                            var o = n[r];
                            null === o ? i.push(t) : r in n && (e[r] = o)
                        }), i.length && (e.deleteAttribute = i), Ur(this, $h, e)
                    }, ou.cb = function(t, n) { return t = { requestType: "PASSWORD_RESET", email: t }, j(t, n), Ur(this, Wh, t) }, ou.bb = function(t, n) { return t = { requestType: "VERIFY_EMAIL", idToken: t }, j(t, n), Ur(this, Hh, t) }, ou.Qa = function(t) { return Ur(this, af, t) }, ou.Ta = function(t, n) { return Ur(this, Jh, { oobCode: t, newPassword: n }) }, ou.Ia = function(t) { return Ur(this, Vh, { oobCode: t }) }, ou.Sa = function(t) { return Ur(this, Mh, { oobCode: t }) };
                    var Uh, Mh = { endpoint: "setAccountInfo", D: jr, ga: "email" },
                        Vh = { endpoint: "resetPassword", D: jr, O: function(t) { if (!t.email || !t.requestType) throw new Pi("internal-error") } },
                        Fh = { endpoint: "signupNewUser", D: function(t) { if (kr(t), !t.password) throw new Pi("weak-password") }, O: Sr, T: !0 },
                        Kh = { endpoint: "createAuthUri" },
                        qh = { endpoint: "deleteAccount", ea: ["idToken"] },
                        Xh = { endpoint: "setAccountInfo", ea: ["idToken", "deleteProvider"], D: function(t) { if (!a(t.deleteProvider)) throw new Pi("internal-error") } },
                        Bh = { endpoint: "getAccountInfo" },
                        Hh = { endpoint: "getOobConfirmationCode", ea: ["idToken", "requestType"], D: function(t) { if ("VERIFY_EMAIL" != t.requestType) throw new Pi("internal-error") }, ga: "email" },
                        Wh = {
                            endpoint: "getOobConfirmationCode",
                            ea: ["requestType"],
                            D: function(t) {
                                if ("PASSWORD_RESET" != t.requestType) throw new Pi("internal-error");
                                kr(t)
                            },
                            ga: "email"
                        },
                        Gh = { nb: !0, endpoint: "getProjectConfig", yb: "GET" },
                        zh = { nb: !0, endpoint: "getRecaptchaParam", yb: "GET", O: function(t) { if (!t.recaptchaSiteKey) throw new Pi("internal-error") } },
                        Jh = { endpoint: "resetPassword", D: jr, ga: "email" },
                        Yh = { endpoint: "sendVerificationCode", ea: ["phoneNumber", "recaptchaToken"], ga: "sessionInfo" },
                        $h = { endpoint: "setAccountInfo", ea: ["idToken"], D: Ar, T: !0 },
                        Zh = { endpoint: "setAccountInfo", ea: ["idToken"], D: function(t) { if (Ar(t), !t.password) throw new Pi("weak-password") }, O: Sr, T: !0 },
                        Qh = { endpoint: "signupNewUser", O: Sr, T: !0 },
                        tf = { endpoint: "verifyAssertion", D: _r, O: Rr, T: !0 },
                        nf = { endpoint: "verifyAssertion", D: _r, O: function(t) { if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new Pi("user-not-found"); if (t.errorMessage) throw Mr(t.errorMessage); if (!t[Ph]) throw new Pi("internal-error") }, T: !0 },
                        ef = { endpoint: "verifyAssertion", D: function(t) { if (_r(t), !t.idToken) throw new Pi("internal-error") }, O: Rr, T: !0 },
                        rf = { endpoint: "verifyCustomToken", D: function(t) { if (!t.token) throw new Pi("invalid-custom-token") }, O: Sr, T: !0 },
                        of = { endpoint: "verifyPassword", D: function(t) { if (kr(t), !t.password) throw new Pi("wrong-password") }, O: Sr, T: !0 },
                        af = { endpoint: "verifyPhoneNumber", D: Or, O: Sr },
                        sf = {
                            endpoint: "verifyPhoneNumber",
                            D: function(t) {
                                if (!t.idToken) throw new Pi("internal-error");
                                Or(t)
                            },
                            O: function(t) {
                                if (t.temporaryProof) throw t.code = "credential-already-in-use", dr(t);
                                Sr(t)
                            }
                        },
                        uf = { Lb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", D: Or, O: Sr },
                        cf = { Ic: { Va: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", ab: "https://securetoken.googleapis.com/v1/token", id: "p" }, Kc: { Va: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", ab: "https://staging-securetoken.sandbox.googleapis.com/v1/token", id: "s" }, Lc: { Va: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", ab: "https://test-securetoken.sandbox.googleapis.com/v1/token", id: "t" } };
                    Uh = Fr("__EID__") ? "__EID__" : void 0;
                    var hf = It("https://apis.google.com/js/api.js?onload=%{onload}"),
                        ff = new bi(3e4, 6e4),
                        lf = new bi(5e3, 15e3),
                        pf = null;
                    Wr.prototype.toString = function() { return this.f ? te(this.a, "v", this.f) : fe(this.a.a, "v"), this.b ? te(this.a, "eid", this.b) : fe(this.a.a, "eid"), this.c.length ? te(this.a, "fw", this.c.join(",")) : fe(this.a.a, "fw"), "" + this.a }, Gr.prototype.toString = function() {
                        var t = ie(this.m, "/__/auth/handler");
                        if (te(t, "apiKey", this.u), te(t, "appName", this.c), te(t, "authType", this.l), this.a.isOAuthProvider) {
                            var n = this.a;
                            try { var e = au.app(this.c).auth().$() }
                            catch (t) { e = null } n.Ua = e, te(t, "providerId", this.a.providerId), n = this.a, e = li(n.qb);
                            for (var i in e) e[i] = "" + e[i];
                            i = n.nc, e = x(e);
                            for (var r = 0; r < i.length; r++) {
                                var o = i[r];
                                o in e && delete e[o]
                            }
                            n.Wa && n.Ua && !e[n.Wa] && (e[n.Wa] = n.Ua), D(e) || te(t, "customParameters", fi(e))
                        }
                        if ("function" == typeof this.a.vb && (n = this.a.vb(), n.length && te(t, "scopes", n.join(","))), this.h ? te(t, "redirectUrl", this.h) : fe(t.a, "redirectUrl"), this.g ? te(t, "eventId", this.g) : fe(t.a, "eventId"), this.i ? te(t, "v", this.i) : fe(t.a, "v"), this.b)
                            for (var a in this.b) this.b.hasOwnProperty(a) && !ne(t, a) && te(t, a, this.b[a]);
                        return this.f ? te(t, "eid", this.f) : fe(t.a, "eid"), a = zr(this.c), a.length && te(t, "fw", a.join(",")), "" + t
                    }, ou = Jr.prototype, ou.Ca = function(t, n, e) {
                        var i = new Pi("popup-closed-by-user"),
                            r = new Pi("web-storage-unsupported"),
                            o = this,
                            a = !1;
                        return this.ba().then(function() { no(o).then(function(e) { e || (t && Ge(t), n(r), a = !0) }) }).s(function() {}).then(function() { if (!a) return Je(t) }).then(function() { if (!a) return gn(e).then(function() { n(i) }) })
                    }, ou.Cb = function() { var t = ri(); return !hi(t) && !vi(t) }, ou.xb = function() { return !1 }, ou.ub = function(t, n, e, i, r, o, a) {
                        if (!t) return et(new Pi("popup-blocked"));
                        if (a && !hi()) return this.ba().s(function(n) { Ge(t), r(n) }), i(), nt();
                        this.a || (this.a = Yr(Zr(this)));
                        var s = this;
                        return this.a.then(function() { var n = s.ba().s(function(n) { throw Ge(t), r(n), n }); return i(), n }).then(function() { cr(e), a || Xe(Qr(s.u, s.f, s.b, n, e, null, o, s.c, void 0, s.h), t) }).s(function(t) { throw "auth/network-request-failed" == t.code && (s.a = null), t })
                    }, ou.Aa = function(t, n, e) { this.a || (this.a = Yr(Zr(this))); var i = this; return this.a.then(function() { cr(n), Xe(Qr(i.u, i.f, i.b, t, n, qe(), e, i.c, void 0, i.h)) }).s(function(t) { throw "auth/network-request-failed" == t.code && (i.a = null), t }) }, ou.ba = function() { var t = this; return $r(this).then(function() { return t.i.Ya }).s(function() { throw t.a = null, new Pi("network-request-failed") }) }, ou.Db = function() { return !0 }, ou.ua = function(t) { this.g.push(t) }, ou.Ja = function(t) { N(this.g, function(n) { return n == t }) }, ou = eo.prototype, ou.get = function(t) { return nt(this.a.getItem(t)).then(function(t) { return t && pi(t) }) }, ou.set = function(t, n) { return nt(this.a.setItem(t, fi(n))) }, ou.X = function(t) { return nt(this.a.removeItem(t)) }, ou.ia = function() {}, ou.da = function() {}, ou = io.prototype, ou.get = function(t) { return nt(this.a[t]) }, ou.set = function(t, n) { return this.a[t] = n, nt() }, ou.X = function(t) { return delete this.a[t], nt() }, ou.ia = function() {}, ou.da = function() {};
                    var df;
                    ou = ro.prototype, ou.set = function(t, n) {
                        var e, i = !1,
                            r = this;
                        return at(ao(this).then(function(n) { return e = n, n = so(r, uo(r, e, !0)), co(n.get(t)) }).then(function(o) { var a = so(r, uo(r, e, !0)); return o ? (o.value = n, co(a.put(o))) : (r.a++, i = !0, o = {}, o[r.g] = t, o[r.l] = n, co(a.add(o))) }).then(function() { r.f[t] = n }), function() { i && r.a-- })
                    }, ou.get = function(t) { var n = this; return ao(this).then(function(e) { return co(so(n, uo(n, e, !1)).get(t)) }).then(function(t) { return t && t.value }) }, ou.X = function(t) {
                        var n = !1,
                            e = this;
                        return at(ao(this).then(function(i) { return n = !0, e.a++, co(so(e, uo(e, i, !0)).delete(t)) }).then(function() { delete e.f[t] }), function() { n && e.a-- })
                    }, ou.vc = function() {
                        var t = this;
                        return ao(this).then(function(n) {
                            var e = so(t, uo(t, n, !1));
                            return e.getAll ? co(e.getAll()) : new Z(function(t, n) {
                                var i = [],
                                    r = e.openCursor();
                                r.onsuccess = function(n) {
                                    (n = n.target.result) ? (i.push(n.value), n.continue()) : t(i)
                                }, r.onerror = function(t) { n(Error(t.target.errorCode)) }
                            })
                        }).then(function(n) {
                            var e = {},
                                i = [];
                            if (0 == t.a) {
                                for (i = 0; i < n.length; i++) e[n[i][t.g]] = n[i][t.l];
                                i = Be(t.f, e), t.f = e
                            }
                            return i
                        })
                    }, ou.ia = function(t) { 0 == this.c.length && ho(this), this.c.push(t) }, ou.da = function(t) { N(this.c, function(n) { return n == t }), 0 == this.c.length && this.b && this.b.cancel("STOP_EVENT") }, ou = fo.prototype, ou.get = function(t) { var n = this; return nt().then(function() { return pi(n.a.getItem(t)) }) }, ou.set = function(t, n) {
                        var e = this;
                        return nt().then(function() {
                            var i = fi(n);
                            null === i ? e.X(t) : e.a.setItem(t, i)
                        })
                    }, ou.X = function(t) { var n = this; return nt().then(function() { n.a.removeItem(t) }) }, ou.ia = function(t) { uu.window && Zt(uu.window, "storage", t) }, ou.da = function(t) { uu.window && en(uu.window, "storage", t) }, ou = vo.prototype, ou.get = function() { return nt(null) }, ou.set = function() { return nt() }, ou.X = function() { return nt() }, ou.ia = function() {}, ou.da = function() {}, ou = mo.prototype, ou.get = function(t) { var n = this; return nt().then(function() { return pi(n.a.getItem(t)) }) }, ou.set = function(t, n) {
                        var e = this;
                        return nt().then(function() {
                            var i = fi(n);
                            null === i ? e.X(t) : e.a.setItem(t, i)
                        })
                    }, ou.X = function(t) { var n = this; return nt().then(function() { n.a.removeItem(t) }) }, ou.ia = function() {}, ou.da = function() {};
                    var vf, mf, gf = { C: fo, jb: mo },
                        bf = { C: fo, jb: mo },
                        wf = { C: eo, jb: vo },
                        yf = { Hc: "local", NONE: "none", Jc: "session" };
                    Io.prototype.get = function(t, n) { return ko(this, t.C).get(Ao(this, t, n)) }, Io.prototype.set = function(t, n, e) {
                        var i = Ao(this, t, e),
                            r = this,
                            o = ko(this, t.C);
                        return o.set(i, n).then(function() { return o.get(i) }).then(function(n) { "local" == t.C && (r.b[i] = n) })
                    }, Io.prototype.m = function(t) {
                        if (t && t.g) {
                            var n = t.a.key;
                            if (null == n)
                                for (var e in this.a) {
                                    var i = this.b[e];
                                    void 0 === i && (i = null);
                                    var r = uu.localStorage.getItem(e);
                                    r !== i && (this.b[e] = r, this.c(e))
                                }
                            else if (0 == n.indexOf(this.i + this.g) && this.a[n]) {
                                if (void 0 !== t.a.a ? ko(this, "local").da(this.h) : Po(this), this.A)
                                    if (e = uu.localStorage.getItem(n), (i = t.a.newValue) !== e) null !== i ? uu.localStorage.setItem(n, i) : uu.localStorage.removeItem(n);
                                    else if (this.b[n] === i && void 0 === t.a.a) return;
                                var o = this;
                                e = function() { void 0 === t.a.a && o.b[n] === uu.localStorage.getItem(n) || (o.b[n] = uu.localStorage.getItem(n), o.c(n)) }, Cu && Mu && 10 == Mu && uu.localStorage.getItem(n) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(e, 10) : e()
                            }
                        }
                        else Tu(t, l(this.c, this))
                    }, Io.prototype.c = function(t) { this.a[t] && Tu(this.a[t], function(t) { t() }) };
                    var If = { name: "authEvent", C: "local" };
                    ou = Lo.prototype, ou.ba = function() { return this.xa ? this.xa : this.xa = $e().then(function() { if ("function" != typeof oi("universalLinks.subscribe", uu)) throw xo("cordova-universal-links-plugin is not installed"); if (void 0 === oi("BuildInfo.packageName", uu)) throw xo("cordova-plugin-buildinfo is not installed"); if ("function" != typeof oi("cordova.plugins.browsertab.openUrl", uu)) throw xo("cordova-plugin-browsertab is not installed"); if ("function" != typeof oi("cordova.InAppBrowser.open", uu)) throw xo("cordova-plugin-inappbrowser is not installed") }, function() { throw new Pi("cordova-not-ready") }) }, ou.Ca = function(t, n) { return n(new Pi("operation-not-supported-in-this-environment")), nt() }, ou.ub = function() { return et(new Pi("operation-not-supported-in-this-environment")) }, ou.Db = function() { return !1 }, ou.Cb = function() { return !0 }, ou.xb = function() { return !0 }, ou.Aa = function(t, n, e) {
                        if (this.c) return et(new Pi("redirect-operation-pending"));
                        var i = this,
                            r = uu.document,
                            o = null,
                            a = null,
                            s = null,
                            u = null;
                        return this.c = at(nt().then(function() { return cr(n), Fo(i) }).then(function() { return Mo(i, t, n, e) }).then(function() { return new Z(function(t, n) { a = function() { var n = oi("cordova.plugins.browsertab.close", uu); return t(), "function" == typeof n && n(), i.a && "function" == typeof i.a.close && (i.a.close(), i.a = null), !1 }, i.ua(a), s = function() { o || (o = gn(i.w).then(function() { n(new Pi("redirect-cancelled-by-user")) })) }, u = function() { wi() && s() }, r.addEventListener("resume", s, !1), ri().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", u, !1) }).s(function(t) { return Ko(i).then(function() { throw t }) }) }), function() { s && r.removeEventListener("resume", s, !1), u && r.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && i.Ja(a), i.c = null })
                    }, ou.ua = function(t) { this.b.push(t), Fo(this).s(function(n) { "auth/invalid-cordova-configuration" === n.code && (n = new hr("unknown", null, null, null, new Pi("no-auth-event")), t(n)) }) }, ou.Ja = function(t) { N(this.b, function(n) { return n == t }) };
                    var Tf = { name: "pendingRedirect", C: "session" };
                    Go.prototype.reset = function() { this.f = !1, this.a.Ja(this.i), this.a = zo(this.v, this.l, this.u) }, Go.prototype.subscribe = function(t) {
                        if (A(this.h, t) || this.h.push(t), !this.f) {
                            var n = this;
                            Wo(this.g).then(function(t) {
                                t ? Ho(n.g).then(function() {
                                    Jo(n).s(function(t) {
                                        var e = new hr("unknown", null, null, null, new Pi("operation-not-supported-in-this-environment"));
                                        Zo(t) && n.m(e)
                                    })
                                }) : Yo(n)
                            }).s(function() { Yo(n) })
                        }
                    }, Go.prototype.unsubscribe = function(t) { N(this.h, function(n) { return n == t }) }, Go.prototype.m = function(t) {
                        if (!t) throw new Pi("invalid-auth-event");
                        for (var n = !1, e = 0; e < this.h.length; e++) {
                            var i = this.h[e];
                            if (i.ob(t.b, t.c)) {
                                (n = this.b[t.b]) && n.h(t, i), n = !0;
                                break
                            }
                        }
                        return na(this.c), n
                    };
                    var kf = new bi(2e3, 1e4),
                        Af = new bi(3e4, 6e4);
                    Go.prototype.aa = function() { return this.c.aa() }, Go.prototype.Aa = function(t, n, e) { var i, r = this; return Bo(this.g).then(function() { return r.a.Aa(t, n, e).s(function(t) { if (Zo(t)) throw new Pi("operation-not-supported-in-this-environment"); return i = t, Ho(r.g).then(function() { throw i }) }).then(function() { return r.a.Db() ? new Z(function() {}) : Ho(r.g).then(function() { return r.aa() }).then(function() {}).s(function() {}) }) }) }, Go.prototype.Ca = function(t, n, e, i) { return this.a.Ca(e, function(e) { t.fa(n, null, e, i) }, kf.get()) };
                    var Ef = {};
                    ta.prototype.reset = function() { this.b = null, this.a && (this.a.cancel(), this.a = null) }, ta.prototype.h = function(t, n) {
                        if (!t) return et(new Pi("invalid-auth-event"));
                        this.reset(), this.g = !0;
                        var e = t.b,
                            i = t.c,
                            r = t.a && "auth/web-storage-unsupported" == t.a.code,
                            o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
                        return "unknown" != e || r || o ? t.a ? (oa(this, !0, null, t.a), t = nt()) : t = n.va(e, i) ? ea(this, t, n) : et(new Pi("invalid-auth-event")) : (oa(this, !1, null, null), t = nt()), t
                    }, ta.prototype.aa = function() { var t = this; return new Z(function(n, e) { t.b ? t.b().then(n, e) : (t.f.push(n), t.c.push(e), aa(t)) }) }, sa.prototype.h = function(t, n) {
                        if (!t) return et(new Pi("invalid-auth-event"));
                        var e = t.b,
                            i = t.c;
                        return t.a ? (n.fa(t.b, null, t.a, t.c), t = nt()) : t = n.va(e, i) ? ua(t, n) : et(new Pi("invalid-auth-event")), t
                    }, ca.prototype.confirm = function(t) { return t = sr(this.verificationId, t), this.a(t) }, fa.prototype.start = function() { this.a = this.c, pa(this, !0) }, va.prototype.B = function() { return { apiKey: this.f.b, refreshToken: this.a, accessToken: this.b, expirationTime: this.c } }, va.prototype.getToken = function(t) { return t = !!t, this.b && !this.a ? et(new Pi("user-token-expired")) : t || !this.b || fu() > this.c - 3e4 ? this.a ? ba(this, { grant_type: "refresh_token", refresh_token: this.a }) : nt(null) : nt({ accessToken: this.b, expirationTime: this.c, refreshToken: this.a }) }, wa.prototype.B = function() { return { lastLoginAt: this.b, createdAt: this.a } }, d(Ta, Bt), d(ka, fn), ka.prototype.na = function(t) { this.ha = t, gr(this.c, t) }, ka.prototype.$ = function() { return this.ha }, ka.prototype.Ka = function() { return O(this.R) }, ka.prototype.Ga = function() { this.l.b && (da(this.l), this.l.start()) }, Ti(ka.prototype, "providerId", "firebase"), ou = ka.prototype, ou.reload = function() { var t = this; return Qa(this, Ua(this).then(function() { return Xa(t).then(function() { return Da(t) }).then(ja) })) }, ou.F = function(t) { var n = this; return Qa(this, Ua(this).then(function() { return n.h.getToken(t) }).then(function(t) { if (!t) throw new Pi("internal-error"); return t.accessToken != n.pa && (_a(n, t.accessToken), ln(n, new Ta("tokenChanged"))), Ka(n, "refreshToken", t.refreshToken), t.accessToken })) }, ou.getToken = function(t) { return rh["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (rh["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.")), this.F(t) }, ou.gc = function(t) {
                        if (!(t = t.users) || !t.length) throw new Pi("internal-error");
                        t = t[0], xa(this, { uid: t.localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt });
                        for (var n = Wa(t), e = 0; e < n.length; e++) Va(this, n[e]);
                        Ka(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
                    }, ou.Za = function(t) {
                        var n = this,
                            e = null;
                        return Qa(this, t.c(this.c, this.uid).then(function(t) { return Ba(n, t), e = za(n, t, "reauthenticate"), n.i = null, n.reload() }).then(function() { return e }), !0)
                    }, ou.hc = function(t) { return this.Za(t).then(function() {}) }, ou.Xa = function(t) {
                        var n = this,
                            e = null;
                        return Qa(this, Ga(this, t.providerId).then(function() { return n.F() }).then(function(e) { return t.b(n.c, e) }).then(function(t) { return e = za(n, t, "link"), Ja(n, t) }).then(function() { return e }))
                    }, ou.Zb = function(t) { return this.Xa(t).then(function(t) { return t.user }) }, ou.$b = function(t, n) { var e = this; return Qa(this, Ga(this, "phone").then(function() { return ha(Sa(e), t, n, l(e.Xa, e)) })) }, ou.ic = function(t, n) { var e = this; return Qa(this, nt().then(function() { return ha(Sa(e), t, n, l(e.Za, e)) }), !0) }, ou.kb = function(t) { var n = this; return Qa(this, this.F().then(function(e) { return n.c.kb(e, t) }).then(function(t) { return Ba(n, t), n.reload() })) }, ou.zc = function(t) { var n = this; return Qa(this, this.F().then(function(e) { return t.b(n.c, e) }).then(function(t) { return Ba(n, t), n.reload() })) }, ou.lb = function(t) { var n = this; return Qa(this, this.F().then(function(e) { return n.c.lb(e, t) }).then(function(t) { return Ba(n, t), n.reload() })) }, ou.mb = function(t) { if (void 0 === t.displayName && void 0 === t.photoURL) return Ua(this); var n = this; return Qa(this, this.F().then(function(e) { return n.c.mb(e, { displayName: t.displayName, photoUrl: t.photoURL }) }).then(function(t) { return Ba(n, t), Ka(n, "displayName", t.displayName || null), Ka(n, "photoURL", t.photoUrl || null), Tu(n.providerData, function(t) { "password" === t.providerId && (Ti(t, "displayName", n.displayName), Ti(t, "photoURL", n.photoURL)) }), Da(n) }).then(ja)) }, ou.yc = function(t) { var n = this; return Qa(this, Xa(this).then(function(e) { return A(Ma(n), t) ? Cr(n.c, e, [t]).then(function(t) { var e = {}; return Tu(t.providerUserInfo || [], function(t) { e[t.providerId] = !0 }), Tu(Ma(n), function(t) { e[t] || Fa(n, t) }), e[ar.PROVIDER_ID] || Ti(n, "phoneNumber", null), Da(n) }) : Da(n).then(function() { throw new Pi("no-such-provider") }) })) }, ou.delete = function() {
                        var t = this;
                        return Qa(this, this.F().then(function(n) { return Ur(t.c, qh, { idToken: n }) }).then(function() { ln(t, new Ta("userDeleted")) })).then(function() {
                            for (var n = 0; n < t.A.length; n++) t.A[n].cancel("app-deleted");
                            Aa(t, null), Na(t, null), t.A = [], t.m = !0, Ca(t), Ti(t, "refreshToken", null), t.a && t.a.unsubscribe(t)
                        })
                    }, ou.ob = function(t, n) { return !!("linkViaPopup" == t && (this.g || null) == n && this.f || "reauthViaPopup" == t && (this.g || null) == n && this.f || "linkViaRedirect" == t && (this.Z || null) == n || "reauthViaRedirect" == t && (this.Z || null) == n) }, ou.fa = function(t, n, e, i) { "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (e && this.v ? this.v(e) : n && !e && this.f && this.f(n), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v) }, ou.va = function(t, n) { return "linkViaPopup" == t && n == (this.g || null) ? l(this.sb, this) : "reauthViaPopup" == t && n == (this.g || null) ? l(this.tb, this) : "linkViaRedirect" == t && (this.Z || null) == n ? l(this.sb, this) : "reauthViaRedirect" == t && (this.Z || null) == n ? l(this.tb, this) : null }, ou.ac = function(t) { var n = this; return Ya(this, "linkViaPopup", t, function() { return Ga(n, t.providerId).then(function() { return Da(n) }) }, !1) }, ou.jc = function(t) { return Ya(this, "reauthViaPopup", t, function() { return nt() }, !0) }, ou.bc = function(t) { var n = this; return $a(this, "linkViaRedirect", t, function() { return Ga(n, t.providerId) }, !1) }, ou.kc = function(t) { return $a(this, "reauthViaRedirect", t, function() { return nt() }, !0) }, ou.sb = function(t, n) {
                        var e = this;
                        this.b && (this.b.cancel(), this.b = null);
                        var i = null;
                        return Qa(this, this.F().then(function(i) { return Lr(e.c, { requestUri: t, sessionId: n, idToken: i }) }).then(function(t) { return i = za(e, t, "link"), Ja(e, t) }).then(function() { return i }))
                    }, ou.tb = function(t, n) {
                        var e = this;
                        this.b && (this.b.cancel(), this.b = null);
                        var i = null;
                        return Qa(this, nt().then(function() { return Xi(xr(e.c, { requestUri: t, sessionId: n }), e.uid) }).then(function(t) { return i = za(e, t, "reauthenticate"), Ba(e, t), e.i = null, e.reload() }).then(function() { return i }), !0)
                    }, ou.bb = function(t) {
                        var n = this,
                            e = null;
                        return Qa(this, this.F().then(function(n) { return e = n, void 0 === t || D(t) ? {} : Ri(new _i(t)) }).then(function(t) { return n.c.bb(e, t) }).then(function(t) { if (n.email != t) return n.reload() }).then(function() {}))
                    }, ou.toJSON = function() { return this.B() }, ou.B = function() { var t = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, providerData: [], apiKey: this.G, appName: this.o, authDomain: this.w, stsTokenManager: this.h.B(), redirectEventId: this.Z || null }; return this.metadata && j(t, this.metadata.B()), Tu(this.providerData, function(n) { t.providerData.push(Ei(n)) }), t };
                    var Nf = { name: "redirectUser", C: "session" };
                    as.prototype.g = function() {
                        var t = this,
                            n = cs("local");
                        ds(this, function() { return nt().then(function() { return t.c && "local" != t.c.C ? t.b.get(n, t.a) : null }).then(function(e) { if (e) return ss(t, "local").then(function() { t.c = n }) }) })
                    };
                    var Sf = { name: "persistence", C: "session" };
                    as.prototype.eb = function(t) {
                        var n = null,
                            e = this;
                        return yo(t), ds(this, function() { return t != e.c.C ? e.b.get(e.c, e.a).then(function(i) { return n = i, ss(e, t) }).then(function() { if (e.c = cs(t), n) return e.b.set(e.c, n, e.a) }) : nt() })
                    }, d(vs, fn), d(ms, Bt), d(gs, Bt), ou = vs.prototype, ou.eb = function(t) { return t = this.h.eb(t), Rs(this, t) }, ou.na = function(t) { this.V === t || this.l || (this.V = t, gr(this.c, this.V), ln(this, new ms(this.$()))) }, ou.$ = function() { return this.V }, ou.Ac = function() {
                        var t = uu.navigator;
                        this.na(t ? t.languages && t.languages[0] || t.language || t.userLanguage || null : null)
                    }, ou.cc = function(t) { this.A.push(t), br(this.c, au.SDK_VERSION ? ii(au.SDK_VERSION, this.A) : null), ln(this, new gs(this.A)) }, ou.Ka = function() { return O(this.A) }, ou.toJSON = function() { return { apiKey: Ss(this).options.apiKey, authDomain: Ss(this).options.authDomain, appName: Ss(this).name, currentUser: Os(this) && Os(this).B() } }, ou.ob = function(t, n) {
                        switch (t) {
                            case "unknown":
                            case "signInViaRedirect":
                                return !0;
                            case "signInViaPopup":
                                return this.g == n && !!this.f;
                            default:
                                return !1
                        }
                    }, ou.fa = function(t, n, e, i) { "signInViaPopup" == t && this.g == i && (e && this.v ? this.v(e) : n && !e && this.f && this.f(n), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v) }, ou.va = function(t, n) { return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == n && this.f ? l(this.Ob, this) : null }, ou.Ob = function(t, n) {
                        var e = this;
                        t = { requestUri: t, sessionId: n }, this.b && (this.b.cancel(), this.b = null);
                        var i = null,
                            r = null,
                            o = Dr(e.c, t).then(function(t) { return i = ur(t), r = ji(t), t });
                        return t = e.U.then(function() { return o }).then(function(t) { return Is(e, t) }).then(function() { return Ai({ user: Os(e), credential: i, additionalUserInfo: r, operationType: "signIn" }) }), Rs(this, t)
                    }, ou.sc = function(t) {
                        if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
                        var n = this,
                            e = xi(t.providerId),
                            i = di(),
                            r = null;
                        (!hi() || Qe()) && Ss(this).options.authDomain && t.isOAuthProvider && (r = Qr(Ss(this).options.authDomain, Ss(this).options.apiKey, Ss(this).name, "signInViaPopup", t, null, i, au.SDK_VERSION || null));
                        var o = ze(r, e && e.za, e && e.ya);
                        return e = ws(this).then(function(n) { return $o(n, o, "signInViaPopup", t, i, !!r) }).then(function() { return new Z(function(t, e) { n.fa("signInViaPopup", null, new Pi("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = i, n.b = n.a.Ca(n, "signInViaPopup", o, i) }) }).then(function(t) { return o && Ge(o), t ? Ai(t) : null }).s(function(t) { throw o && Ge(o), t }), Rs(this, e)
                    }, ou.tc = function(t) { if (!si()) return et(new Pi("operation-not-supported-in-this-environment")); var n = this; return Rs(this, ws(this).then(function() { return hs(n.h) }).then(function() { return n.a.Aa("signInViaRedirect", t) })) }, ou.aa = function() { if (!si()) return et(new Pi("operation-not-supported-in-this-environment")); var t = this; return Rs(this, ws(this).then(function() { return t.a.aa() }).then(function(t) { return t ? Ai(t) : null })) }, ou.hb = function() { var t = this; return Rs(this, this.i.then(function() { return Os(t) ? (Ts(t, null), ls(t.h).then(function() { Cs(t) })) : nt() })) }, ou.uc = function() {
                        var t = this;
                        return ps(this.h, Ss(this).options.authDomain).then(function(n) {
                            if (!t.l) {
                                var e;
                                if (e = Os(t) && n) {
                                    e = Os(t).uid;
                                    var i = n.uid;
                                    e = void 0 !== e && null !== e && "" !== e && void 0 !== i && null !== i && "" !== i && e == i
                                }
                                if (e) return qa(Os(t), n), Os(t).F();
                                (Os(t) || n) && (Ts(t, n), n && (La(n), n.ca = t.G), t.a && t.a.subscribe(t), Cs(t))
                            }
                        })
                    }, ou.ka = function(t) { return fs(this.h, t) }, ou.Pb = function() { Cs(this), this.ka(Os(this)) }, ou.Vb = function() { this.hb() }, ou.Wb = function() { this.hb() }, ou.Xb = function(t) {
                        var n = this;
                        this.addAuthTokenListener(function() { t.next(Os(n)) })
                    }, ou.Yb = function(t) {
                        var n = this;
                        _s(this, function() { t.next(Os(n)) })
                    }, ou.ec = function(t, n, e) { var i = this; return this.W && au.Promise.resolve().then(function() { u(t) ? t(Os(i)) : u(t.next) && t.next(Os(i)) }), this.Gb(t, n, e) }, ou.dc = function(t, n, e) { var i = this; return this.W && au.Promise.resolve().then(function() { i.R = i.getUid(), u(t) ? t(Os(i)) : u(t.next) && t.next(Os(i)) }), this.Hb(t, n, e) }, ou.Rb = function(t) { var n = this; return Rs(this, this.i.then(function() { return Os(n) ? Os(n).F(t).then(function(t) { return { accessToken: t } }) : null })) }, ou.pc = function(t) { var n = this; return this.i.then(function() { return Ns(n, Ur(n.c, rf, { token: t })) }).then(function(t) { return t = t.user, Ka(t, "isAnonymous", !1), n.ka(t) }).then(function() { return Os(n) }) }, ou.qc = function(t, n) { var e = this; return this.i.then(function() { return Ns(e, Ur(e.c, of , { email: t, password: n })) }).then(function(t) { return t.user }) }, ou.Kb = function(t, n) { var e = this; return this.i.then(function() { return Ns(e, Ur(e.c, Fh, { email: t, password: n })) }).then(function(t) { return t.user }) }, ou.oc = function(t) { return this.fb(t).then(function(t) { return t.user }) }, ou.fb = function(t) { var n = this; return this.i.then(function() { return Ns(n, t.wa(n.c)) }) }, ou.gb = function() { var t = this; return this.i.then(function() { var n = Os(t); return n && n.isAnonymous ? n : Ns(t, t.c.gb()).then(function(n) { return n = n.user, Ka(n, "isAnonymous", !0), t.ka(n) }).then(function() { return Os(t) }) }) }, ou.getUid = function() { return Os(this) && Os(this).uid || null }, ou.Ib = function(t) { this.addAuthTokenListener(t), 0 < ++this.o && Os(this) && Pa(Os(this)) }, ou.mc = function(t) {
                        var n = this;
                        Tu(this.m, function(e) { e == t && n.o-- }), 0 > this.o && (this.o = 0), 0 == this.o && Os(this) && Ca(Os(this)), this.removeAuthTokenListener(t)
                    }, ou.addAuthTokenListener = function(t) {
                        var n = this;
                        this.m.push(t), Rs(this, this.i.then(function() { n.l || A(n.m, t) && t(Ps(n)) }))
                    }, ou.removeAuthTokenListener = function(t) { N(this.m, function(n) { return n == t }) }, ou.delete = function() { this.l = !0; for (var t = 0; t < this.N.length; t++) this.N[t].cancel("app-deleted"); return this.N = [], this.h && (t = this.h, So(t.b, t.a, this.ha)), this.a && this.a.unsubscribe(this), au.Promise.resolve() }, ou.Nb = function(t) { return Rs(this, Er(this.c, t)) }, ou.Bc = function(t) { return this.Ia(t).then(function(t) { return t.data.email }) }, ou.Ta = function(t, n) { return Rs(this, this.c.Ta(t, n).then(function() {})) }, ou.Ia = function(t) { return Rs(this, this.c.Ia(t).then(function(t) { return new Oi(t) })) }, ou.Sa = function(t) { return Rs(this, this.c.Sa(t).then(function() {})) }, ou.cb = function(t, n) { var e = this; return Rs(this, nt().then(function() { return void 0 === n || D(n) ? {} : Ri(new _i(n)) }).then(function(n) { return e.c.cb(t, n) }).then(function() {})) }, ou.rc = function(t, n) { return Rs(this, ha(this, t, n, l(this.fb, this))) };
                    var Of = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
                        Pf = "callback",
                        Cf = "expired-callback",
                        _f = "sitekey",
                        Rf = "size";
                    ou = Ws.prototype, ou.xa = function() { var t = this; return this.c ? this.c : this.c = Js(this, nt().then(function() { if (ui()) return Ye(); throw new Pi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.") }).then(function() { return Zs(Qs(), t.o()) }).then(function() { return Ur(t.u, zh, {}) }).then(function(n) { t.a[_f] = n.recaptchaSiteKey }).s(function(n) { throw t.c = null, n })) }, ou.render = function() {
                        Ys(this);
                        var t = this;
                        return Js(this, this.xa().then(function() {
                            if (null === t.b) {
                                var n = t.l;
                                if (!t.h) {
                                    var e = Dt(n);
                                    n = xt("DIV"), e.appendChild(n)
                                }
                                t.b = grecaptcha.render(n, t.a)
                            }
                            return t.b
                        }))
                    }, ou.verify = function() {
                        Ys(this);
                        var t = this;
                        return Js(this, this.render().then(function(n) {
                            return new Z(function(e) {
                                var i = grecaptcha.getResponse(n);
                                if (i) e(i);
                                else {
                                    var r = function(n) { n && (zs(t, r), e(n)) };
                                    t.i.push(r), t.h && grecaptcha.execute(t.b)
                                }
                            })
                        }))
                    }, ou.reset = function() { Ys(this), null !== this.b && grecaptcha.reset(this.b) }, ou.clear = function() { Ys(this), this.m = !0, Qs().b--; for (var t = 0; t < this.g.length; t++) this.g[t].cancel("RecaptchaVerifier instance has been destroyed."); if (!this.h) { t = Dt(this.l); for (var n; n = t.firstChild;) t.removeChild(n) } };
                    var Df = It("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                        Lf = null;
                    d(tu, Ws), nu(vs.prototype, { Sa: { name: "applyActionCode", j: [Ls("code")] }, Ia: { name: "checkActionCode", j: [Ls("code")] }, Ta: { name: "confirmPasswordReset", j: [Ls("code"), Ls("newPassword")] }, Kb: { name: "createUserWithEmailAndPassword", j: [Ls("email"), Ls("password")] }, Nb: { name: "fetchProvidersForEmail", j: [Ls("email")] }, aa: { name: "getRedirectResult", j: [] }, dc: { name: "onAuthStateChanged", j: [Hs(js(), Us(), "nextOrObserver"), Us("opt_error", !0), Us("opt_completed", !0)] }, ec: { name: "onIdTokenChanged", j: [Hs(js(), Us(), "nextOrObserver"), Us("opt_error", !0), Us("opt_completed", !0)] }, cb: { name: "sendPasswordResetEmail", j: [Ls("email"), Hs(js("opt_actionCodeSettings", !0), Ms(null, !0), "opt_actionCodeSettings", !0)] }, eb: { name: "setPersistence", j: [Ls("persistence")] }, fb: { name: "signInAndRetrieveDataWithCredential", j: [qs()] }, gb: { name: "signInAnonymously", j: [] }, oc: { name: "signInWithCredential", j: [qs()] }, pc: { name: "signInWithCustomToken", j: [Ls("token")] }, qc: { name: "signInWithEmailAndPassword", j: [Ls("email"), Ls("password")] }, rc: { name: "signInWithPhoneNumber", j: [Ls("phoneNumber"), Bs()] }, sc: { name: "signInWithPopup", j: [Xs()] }, tc: { name: "signInWithRedirect", j: [Xs()] }, hb: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [Ls(null, !0)] }, Ac: { name: "useDeviceLanguage", j: [] }, Bc: { name: "verifyPasswordResetCode", j: [Ls("code")] } }),
                        function(t, n) {
                            for (var e in n) {
                                var i = n[e].name;
                                if (i !== e) {
                                    var r = n[e].Jb;
                                    Object.defineProperty(t, i, { get: function() { return this[e] }, set: function(t) { Ds(i, [r], [t], !0), this[e] = t }, enumerable: !0 })
                                }
                            }
                        }(vs.prototype, { lc: { name: "languageCode", Jb: Hs(Ls(), Ms(), "languageCode") } }), vs.Persistence = yf, vs.Persistence.LOCAL = "local", vs.Persistence.SESSION = "session", vs.Persistence.NONE = "none", nu(ka.prototype, { delete: { name: "delete", j: [] }, F: { name: "getIdToken", j: [xs()] }, getToken: { name: "getToken", j: [xs()] }, Xa: { name: "linkAndRetrieveDataWithCredential", j: [qs()] }, Zb: { name: "linkWithCredential", j: [qs()] }, $b: { name: "linkWithPhoneNumber", j: [Ls("phoneNumber"), Bs()] }, ac: { name: "linkWithPopup", j: [Xs()] }, bc: { name: "linkWithRedirect", j: [Xs()] }, Za: { name: "reauthenticateAndRetrieveDataWithCredential", j: [qs()] }, hc: { name: "reauthenticateWithCredential", j: [qs()] }, ic: { name: "reauthenticateWithPhoneNumber", j: [Ls("phoneNumber"), Bs()] }, jc: { name: "reauthenticateWithPopup", j: [Xs()] }, kc: { name: "reauthenticateWithRedirect", j: [Xs()] }, reload: { name: "reload", j: [] }, bb: { name: "sendEmailVerification", j: [Hs(js("opt_actionCodeSettings", !0), Ms(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [Ls(null, !0)] }, yc: { name: "unlink", j: [Ls("provider")] }, kb: { name: "updateEmail", j: [Ls("email")] }, lb: { name: "updatePassword", j: [Ls("password")] }, zc: { name: "updatePhoneNumber", j: [qs("phone")] }, mb: { name: "updateProfile", j: [js("profile")] } }), nu(Z.prototype, { s: { name: "catch" }, then: { name: "then" } }), nu(ca.prototype, { confirm: { name: "confirm", j: [Ls("verificationCode")] } }), eu(ir, "credential", function(t, n) { return new er(t, n) }, [Ls("email"), Ls("password")]), nu(zi.prototype, { sa: { name: "addScope", j: [Ls("scope")] }, Ba: { name: "setCustomParameters", j: [js("customOAuthParameters")] } }), eu(zi, "credential", Ji, [Hs(Ls(), js(), "token")]), nu(Yi.prototype, { sa: { name: "addScope", j: [Ls("scope")] }, Ba: { name: "setCustomParameters", j: [js("customOAuthParameters")] } }), eu(Yi, "credential", $i, [Hs(Ls(), js(), "token")]), nu(Zi.prototype, { sa: { name: "addScope", j: [Ls("scope")] }, Ba: { name: "setCustomParameters", j: [js("customOAuthParameters")] } }), eu(Zi, "credential", Qi, [Hs(Ls(), Hs(js(), Ms()), "idToken"), Hs(Ls(), Ms(), "accessToken", !0)]), nu(tr.prototype, { Ba: { name: "setCustomParameters", j: [js("customOAuthParameters")] } }), eu(tr, "credential", nr, [Hs(Ls(), js(), "token"), Ls("secret", !0)]), nu(Gi.prototype, { sa: { name: "addScope", j: [Ls("scope")] }, credential: { name: "credential", j: [Hs(Ls(), Ms(), "idToken", !0), Hs(Ls(), Ms(), "accessToken", !0)] }, Ba: { name: "setCustomParameters", j: [js("customOAuthParameters")] } }), eu(ar, "credential", sr, [Ls("verificationId"), Ls("verificationCode")]), nu(ar.prototype, { Qa: { name: "verifyPhoneNumber", j: [Ls("phoneNumber"), Bs()] } }), nu(Pi.prototype, { toJSON: { name: "toJSON", j: [Ls(null, !0)] } }), nu(pr.prototype, { toJSON: { name: "toJSON", j: [Ls(null, !0)] } }), nu(lr.prototype, { toJSON: { name: "toJSON", j: [Ls(null, !0)] } }), nu(tu.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }),
                        function() {
                            if (void 0 === au || !au.INTERNAL || !au.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
                            var t = { Auth: vs, Error: Pi };
                            eu(t, "EmailAuthProvider", ir, []), eu(t, "FacebookAuthProvider", zi, []), eu(t, "GithubAuthProvider", Yi, []), eu(t, "GoogleAuthProvider", Zi, []), eu(t, "TwitterAuthProvider", tr, []), eu(t, "OAuthProvider", Gi, [Ls("providerId")]), eu(t, "PhoneAuthProvider", ar, [Fs()]), eu(t, "RecaptchaVerifier", tu, [Hs(Ls(), Vs(), "recaptchaContainer"), js("recaptchaParameters", !0), Ks()]), au.INTERNAL.registerService("auth", function(t, n) { return t = new vs(t), n({ INTERNAL: { getUid: l(t.getUid, t), getToken: l(t.Rb, t), addAuthTokenListener: l(t.Ib, t), removeAuthTokenListener: l(t.mc, t) } }), t }, t, function(t, n) {
                                if ("create" === t) try { n.auth() }
                                catch (t) {}
                            }), au.INTERNAL.extendNamespace({ User: ka })
                        }()
                }).call(void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }).call(n, e(19))
        }
    }, [76])
}
catch (t) { throw Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.") }
//# sourceMappingURL=firebase-auth.js.map