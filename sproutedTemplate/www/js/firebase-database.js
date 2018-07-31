/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
    webpackJsonpFirebase([0], [, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(0),
            o = n(0),
            a = n(0),
            s = n(0),
            u = n(0),
            l = n(12),
            h = n(0);
        t.LUIDGenerator = function() { var e = 1; return function() { return e++ } }(), t.sha1 = function(e) {
            var t = s.stringToByteArray(e),
                n = new a.Sha1;
            n.update(t);
            var r = n.digest();
            return o.base64.encodeByteArray(r)
        };
        var c = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; for (var n = "", r = 0; r < e.length; r++) Array.isArray(e[r]) || e[r] && "object" == typeof e[r] && "number" == typeof e[r].length ? n += c.apply(null, e[r]) : "object" == typeof e[r] ? n += u.stringify(e[r]) : n += e[r], n += " "; return n };
        t.logger = null;
        var p = !0;
        t.enableLogging = function(e, n) { r.assert(!n || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? ("undefined" != typeof console && ("function" == typeof console.log ? t.logger = console.log.bind(console) : "object" == typeof console.log && (t.logger = function(e) { console.log(e) })), n && l.SessionStorage.set("logging_enabled", !0)) : "function" == typeof e ? t.logger = e : (t.logger = null, l.SessionStorage.remove("logging_enabled")) }, t.log = function() {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            if (!0 === p && (p = !1, null === t.logger && !0 === l.SessionStorage.get("logging_enabled") && t.enableLogging(!0)), t.logger) {
                var r = c.apply(null, e);
                t.logger(r)
            }
        }, t.logWrapper = function(e) {
            return function() {
                for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                t.log.apply(void 0, [e].concat(n))
            }
        }, t.error = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if ("undefined" != typeof console) {
                var n = "FIREBASE INTERNAL ERROR: " + c.apply(void 0, e);
                void 0 !== console.error ? console.error(n) : console.log(n)
            }
        }, t.fatal = function() { for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]; var n = c.apply(void 0, e); throw Error("FIREBASE FATAL ERROR: " + n) }, t.warn = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if ("undefined" != typeof console) {
                var n = "FIREBASE WARNING: " + c.apply(void 0, e);
                void 0 !== console.warn ? console.warn(n) : console.log(n)
            }
        }, t.warnIfPageIsSecure = function() { "undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && t.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().") }, t.warnAboutUnsupportedMethod = function(e) { t.warn(e + " is unsupported and will likely change soon.  Please do not use.") }, t.isInvalidJSONNumber = function(e) { return "number" == typeof e && (e != e || e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY) }, t.executeWhenDOMReady = function(e) {
            if (h.isNodeSdk() || "complete" === document.readyState) e();
            else {
                var t = !1,
                    n = function() {
                        if (!document.body) return void setTimeout(n, Math.floor(10));
                        t || (t = !0, e())
                    };
                document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() { "complete" === document.readyState && n() }), window.attachEvent("onload", n))
            }
        }, t.MIN_NAME = "[MIN_NAME]", t.MAX_NAME = "[MAX_NAME]", t.nameCompare = function(e, n) {
            if (e === n) return 0;
            if (e === t.MIN_NAME || n === t.MAX_NAME) return -1;
            if (n === t.MIN_NAME || e === t.MAX_NAME) return 1;
            var r = t.tryParseInt(e),
                i = t.tryParseInt(n);
            return null !== r ? null !== i ? r - i == 0 ? e.length - n.length : r - i : -1 : null !== i ? 1 : e < n ? -1 : 1
        }, t.stringCompare = function(e, t) { return e === t ? 0 : e < t ? -1 : 1 }, t.requireKey = function(e, t) { if (t && e in t) return t[e]; throw Error("Missing required key (" + e + ") in object: " + u.stringify(t)) }, t.ObjectToUniqueKey = function(e) {
            if ("object" != typeof e || null === e) return u.stringify(e);
            var n = [];
            for (var r in e) n.push(r);
            n.sort();
            for (var i = "{", o = 0; o < n.length; o++) 0 !== o && (i += ","), i += u.stringify(n[o]), i += ":", i += t.ObjectToUniqueKey(e[n[o]]);
            return i += "}"
        }, t.splitStringBySize = function(e, t) { var n = e.length; if (n <= t) return [e]; for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t)); return r }, t.each = function(e, t) {
            if (Array.isArray(e))
                for (var n = 0; n < e.length; ++n) t(n, e[n]);
            else i.forEach(e, function(e, n) { return t(n, e) })
        }, t.bindCallback = function(e, t) { return t ? e.bind(t) : e }, t.doubleToIEEE754String = function(e) {
            r.assert(!t.isInvalidJSONNumber(e), "Invalid JSON number");
            var n, i, o, a, s, u, l;
            for (0 === e ? (i = 0, o = 0, n = 1 / e == -1 / 0 ? 1 : 0) : (n = e < 0, e = Math.abs(e), e >= Math.pow(2, -1022) ? (a = Math.min(Math.floor(Math.log(e) / Math.LN2), 1023), i = a + 1023, o = Math.round(e * Math.pow(2, 52 - a) - Math.pow(2, 52))) : (i = 0, o = Math.round(e / Math.pow(2, -1074)))), u = [], s = 52; s; s -= 1) u.push(o % 2 ? 1 : 0), o = Math.floor(o / 2);
            for (s = 11; s; s -= 1) u.push(i % 2 ? 1 : 0), i = Math.floor(i / 2);
            u.push(n ? 1 : 0), u.reverse(), l = u.join("");
            var h = "";
            for (s = 0; s < 64; s += 8) {
                var c = parseInt(l.substr(s, 8), 2).toString(16);
                1 === c.length && (c = "0" + c), h += c
            }
            return h.toLowerCase()
        }, t.isChromeExtensionContentScript = function() { return !("object" != typeof window || !window.chrome || !window.chrome.extension || /^chrome/.test(window.location.href)) }, t.isWindowsStoreApp = function() { return "object" == typeof Windows && "object" == typeof Windows.UI }, t.errorForServerCode = function(e, t) { var n = "Unknown Error"; "too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? n = "Client doesn't have permission to access the desired data." : "unavailable" == e && (n = "The service is unavailable"); var r = Error(e + " at " + t.path + ": " + n); return r.code = e.toUpperCase(), r }, t.e = RegExp("^-?\\d{1,10}$"), t.tryParseInt = function(e) { if (t.e.test(e)) { var n = +e; if (n >= -2147483648 && n <= 2147483647) return n } return null }, t.exceptionGuard = function(e) { try { e() } catch (e) { setTimeout(function() { var n = e.stack || ""; throw t.warn("Exception was thrown by user callback.", n), e }, Math.floor(0)) } }, t.callUserCallback = function(e) { for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r]; "function" == typeof e && t.exceptionGuard(function() { e.apply(void 0, n) }) }, t.beingCrawled = function() { return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0 }, t.exportPropGetter = function(e, t, n) { Object.defineProperty(e, t, { get: n }) }, t.setTimeoutNonBlocking = function(e, t) { var n = setTimeout(e, t); return "object" == typeof n && n.unref && n.unref(), n }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = n(0),
            o = function() {
                function e(e, t) {
                    if (void 0 === t) {
                        this.n = e.split("/");
                        for (var n = 0, r = 0; r < this.n.length; r++) this.n[r].length > 0 && (this.n[n] = this.n[r], n++);
                        this.n.length = n, this.i = 0
                    }
                    else this.n = e, this.i = t
                }
                return Object.defineProperty(e, "Empty", { get: function() { return new e("") }, enumerable: !0, configurable: !0 }), e.prototype.getFront = function() { return this.i >= this.n.length ? null : this.n[this.i] }, e.prototype.getLength = function() { return this.n.length - this.i }, e.prototype.popFront = function() { var t = this.i; return t < this.n.length && t++, new e(this.n, t) }, e.prototype.getBack = function() { return this.i < this.n.length ? this.n[this.n.length - 1] : null }, e.prototype.toString = function() { for (var e = "", t = this.i; t < this.n.length; t++) "" !== this.n[t] && (e += "/" + this.n[t]); return e || "/" }, e.prototype.toUrlEncodedString = function() { for (var e = "", t = this.i; t < this.n.length; t++) "" !== this.n[t] && (e += "/" + encodeURIComponent(this.n[t] + "")); return e || "/" }, e.prototype.slice = function(e) { return void 0 === e && (e = 0), this.n.slice(this.i + e) }, e.prototype.parent = function() { if (this.i >= this.n.length) return null; for (var t = [], n = this.i; n < this.n.length - 1; n++) t.push(this.n[n]); return new e(t, 0) }, e.prototype.child = function(t) {
                    for (var n = [], r = this.i; r < this.n.length; r++) n.push(this.n[r]);
                    if (t instanceof e)
                        for (var r = t.i; r < t.n.length; r++) n.push(t.n[r]);
                    else
                        for (var i = t.split("/"), r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r]);
                    return new e(n, 0)
                }, e.prototype.isEmpty = function() { return this.i >= this.n.length }, e.relativePath = function(t, n) {
                    var r = t.getFront(),
                        i = n.getFront();
                    if (null === r) return n;
                    if (r === i) return e.relativePath(t.popFront(), n.popFront());
                    throw Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + t + ")")
                }, e.comparePaths = function(e, t) { for (var n = e.slice(), i = t.slice(), o = 0; o < n.length && o < i.length; o++) { var a = r.nameCompare(n[o], i[o]); if (0 !== a) return a } return n.length === i.length ? 0 : n.length < i.length ? -1 : 1 }, e.prototype.equals = function(e) {
                    if (this.getLength() !== e.getLength()) return !1;
                    for (var t = this.i, n = e.i; t <= this.n.length; t++, n++)
                        if (this.n[t] !== e.n[n]) return !1;
                    return !0
                }, e.prototype.contains = function(e) {
                    var t = this.i,
                        n = e.i;
                    if (this.getLength() > e.getLength()) return !1;
                    for (; t < this.n.length;) { if (this.n[t] !== e.n[n]) return !1;++t, ++n }
                    return !0
                }, e
            }();
        t.Path = o;
        var a = function() {
            function e(e, t) {
                this.o = t, this.u = e.slice(), this.l = Math.max(1, this.u.length);
                for (var n = 0; n < this.u.length; n++) this.l += i.stringLength(this.u[n]);
                this.f()
            }
            return Object.defineProperty(e, "MAX_PATH_DEPTH", { get: function() { return 32 }, enumerable: !0, configurable: !0 }), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", { get: function() { return 768 }, enumerable: !0, configurable: !0 }), e.prototype.push = function(e) { this.u.length > 0 && (this.l += 1), this.u.push(e), this.l += i.stringLength(e), this.f() }, e.prototype.pop = function() {
                var e = this.u.pop();
                this.l -= i.stringLength(e), this.u.length > 0 && (this.l -= 1)
            }, e.prototype.f = function() { if (this.l > e.MAX_PATH_LENGTH_BYTES) throw Error(this.o + "has a key path longer than " + e.MAX_PATH_LENGTH_BYTES + " bytes (" + this.l + ")."); if (this.u.length > e.MAX_PATH_DEPTH) throw Error(this.o + "path specified exceeds the maximum depth that can be written (" + e.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString()) }, e.prototype.toErrorString = function() { return 0 == this.u.length ? "" : "in property '" + this.u.join(".") + "'" }, e
        }();
        t.ValidationPath = a
    }, function(e, t, n) {
        "use strict";

        function r(e) { a = e }

        function i(e) { s = e }
        var o = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var a, s, u = n(14),
            l = n(1),
            h = n(5),
            c = n(15);
        t.setNodeFromJSON = r, t.setMaxNode = i;
        var p = function(e) {
            function t() { return null !== e && e.apply(this, arguments) || this }
            return o(t, e), t.prototype.compare = function(e, t) {
                var n = e.node.getPriority(),
                    r = t.node.getPriority(),
                    i = n.compareTo(r);
                return 0 === i ? l.nameCompare(e.name, t.name) : i
            }, t.prototype.isDefinedOn = function(e) { return !e.getPriority().isEmpty() }, t.prototype.indexedValueChanged = function(e, t) { return !e.getPriority().equals(t.getPriority()) }, t.prototype.minPost = function() { return h.NamedNode.MIN }, t.prototype.maxPost = function() { return new h.NamedNode(l.MAX_NAME, new c.LeafNode("[PRIORITY-POST]", s)) }, t.prototype.makePost = function(e, t) { var n = a(e); return new h.NamedNode(t, new c.LeafNode("[PRIORITY-POST]", n)) }, t.prototype.toString = function() { return ".priority" }, t
        }(u.Index);
        t.PriorityIndex = p, t.PRIORITY_INDEX = new p
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i, o = n(0),
            a = n(1),
            s = n(16),
            u = n(5),
            l = n(37),
            h = n(3),
            c = n(10),
            p = n(39),
            d = n(15),
            f = n(41),
            _ = function() {
                function e(e, t, n) { this._ = e, this.y = t, this.g = n, this.m = null, this.y && l.validatePriorityNode(this.y), this._.isEmpty() && o.assert(!this.y || this.y.isEmpty(), "An empty node cannot have a priority") }
                return Object.defineProperty(e, "EMPTY_NODE", { get: function() { return i || (i = new e(new s.SortedMap(f.NAME_COMPARATOR), null, p.IndexMap.Default)) }, enumerable: !0, configurable: !0 }), e.prototype.isLeafNode = function() { return !1 }, e.prototype.getPriority = function() { return this.y || i }, e.prototype.updatePriority = function(t) { return this._.isEmpty() ? this : new e(this._, t, this.g) }, e.prototype.getImmediateChild = function(e) { if (".priority" === e) return this.getPriority(); var t = this._.get(e); return null === t ? i : t }, e.prototype.getChild = function(e) { var t = e.getFront(); return null === t ? this : this.getImmediateChild(t).getChild(e.popFront()) }, e.prototype.hasChild = function(e) { return null !== this._.get(e) }, e.prototype.updateImmediateChild = function(t, n) {
                    if (o.assert(n, "We should always be passing snapshot nodes"), ".priority" === t) return this.updatePriority(n);
                    var r = new u.NamedNode(t, n),
                        a = void 0,
                        s = void 0,
                        l = void 0;
                    return n.isEmpty() ? (a = this._.remove(t), s = this.g.removeFromIndexes(r, this._)) : (a = this._.insert(t, n), s = this.g.addToIndexes(r, this._)), l = a.isEmpty() ? i : this.y, new e(a, l, s)
                }, e.prototype.updateChild = function(e, t) {
                    var n = e.getFront();
                    if (null === n) return t;
                    o.assert(".priority" !== e.getFront() || 1 === e.getLength(), ".priority must be the last token in a path");
                    var r = this.getImmediateChild(n).updateChild(e.popFront(), t);
                    return this.updateImmediateChild(n, r)
                }, e.prototype.isEmpty = function() { return this._.isEmpty() }, e.prototype.numChildren = function() { return this._.count() }, e.prototype.val = function(t) {
                    if (this.isEmpty()) return null;
                    var n = {},
                        r = 0,
                        i = 0,
                        o = !0;
                    if (this.forEachChild(h.PRIORITY_INDEX, function(a, s) { n[a] = s.val(t), r++, o && e.e.test(a) ? i = Math.max(i, +a) : o = !1 }), !t && o && i < 2 * r) { var a = []; for (var s in n) a[s] = n[s]; return a }
                    return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n
                }, e.prototype.hash = function() {
                    if (null === this.m) {
                        var e = "";
                        this.getPriority().isEmpty() || (e += "priority:" + l.priorityHashText(this.getPriority().val()) + ":"), this.forEachChild(h.PRIORITY_INDEX, function(t, n) { var r = n.hash(); "" !== r && (e += ":" + t + ":" + r) }), this.m = "" === e ? "" : a.sha1(e)
                    }
                    return this.m
                }, e.prototype.getPredecessorChildName = function(e, t, n) { var r = this.C(n); if (r) { var i = r.getPredecessorKey(new u.NamedNode(e, t)); return i ? i.name : null } return this._.getPredecessorKey(e) }, e.prototype.getFirstChildName = function(e) { var t = this.C(e); if (t) { var n = t.minKey(); return n && n.name } return this._.minKey() }, e.prototype.getFirstChild = function(e) { var t = this.getFirstChildName(e); return t ? new u.NamedNode(t, this._.get(t)) : null }, e.prototype.getLastChildName = function(e) { var t = this.C(e); if (t) { var n = t.maxKey(); return n && n.name } return this._.maxKey() }, e.prototype.getLastChild = function(e) { var t = this.getLastChildName(e); return t ? new u.NamedNode(t, this._.get(t)) : null }, e.prototype.forEachChild = function(e, t) { var n = this.C(e); return n ? n.inorderTraversal(function(e) { return t(e.name, e.node) }) : this._.inorderTraversal(t) }, e.prototype.getIterator = function(e) { return this.getIteratorFrom(e.minPost(), e) }, e.prototype.getIteratorFrom = function(e, t) { var n = this.C(t); if (n) return n.getIteratorFrom(e, function(e) { return e }); for (var r = this._.getIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek(); return r }, e.prototype.getReverseIterator = function(e) { return this.getReverseIteratorFrom(e.maxPost(), e) }, e.prototype.getReverseIteratorFrom = function(e, t) { var n = this.C(t); if (n) return n.getReverseIteratorFrom(e, function(e) { return e }); for (var r = this._.getReverseIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) r.getNext(), i = r.peek(); return r }, e.prototype.compareTo = function(e) { return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === t.MAX_NODE ? -1 : 0 }, e.prototype.withIndex = function(t) { if (t === c.KEY_INDEX || this.g.hasIndex(t)) return this; var n = this.g.addIndex(t, this._); return new e(this._, this.y, n) }, e.prototype.isIndexed = function(e) { return e === c.KEY_INDEX || this.g.hasIndex(e) }, e.prototype.equals = function(e) {
                    if (e === this) return !0;
                    if (e.isLeafNode()) return !1;
                    var t = e;
                    if (this.getPriority().equals(t.getPriority())) {
                        if (this._.count() === t._.count()) {
                            for (var n = this.getIterator(h.PRIORITY_INDEX), r = t.getIterator(h.PRIORITY_INDEX), i = n.getNext(), o = r.getNext(); i && o;) {
                                if (i.name !== o.name || !i.node.equals(o.node)) return !1;
                                i = n.getNext(), o = r.getNext()
                            }
                            return null === i && null === o
                        }
                        return !1
                    }
                    return !1
                }, e.prototype.C = function(e) { return e === c.KEY_INDEX ? null : this.g.get("" + e) }, e.e = /^(0|[1-9]\d*)$/, e
            }();
        t.ChildrenNode = _;
        var y = function(e) {
            function t() { return e.call(this, new s.SortedMap(f.NAME_COMPARATOR), _.EMPTY_NODE, p.IndexMap.Default) || this }
            return r(t, e), t.prototype.compareTo = function(e) { return e === this ? 0 : 1 }, t.prototype.equals = function(e) { return e === this }, t.prototype.getPriority = function() { return this }, t.prototype.getImmediateChild = function(e) { return _.EMPTY_NODE }, t.prototype.isEmpty = function() { return !1 }, t
        }(_);
        t.MaxNode = y, t.MAX_NODE = new y, Object.defineProperties(u.NamedNode, { MIN: { value: new u.NamedNode(a.MIN_NAME, _.EMPTY_NODE) }, MAX: { value: new u.NamedNode(a.MAX_NAME, t.MAX_NODE) } }), c.KeyIndex.__EMPTY_NODE = _.EMPTY_NODE, d.LeafNode.__childrenNodeConstructor = _, l.setMaxNode(t.MAX_NODE), h.setMaxNode(t.MAX_NODE)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function() {
            function e(e, t) { this.name = e, this.node = t }
            return e.Wrap = function(t, n) { return new e(t, n) }, e
        }();
        t.NamedNode = r
    }, , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(2),
            i = n(0),
            o = n(1),
            a = n(0),
            s = n(0);
        t.N = /[\[\].#$\/\u0000-\u001F\u007F]/, t.P = /[\[\].#$\u0000-\u001F\u007F]/, t.S = 10485760, t.isValidKey = function(e) { return "string" == typeof e && 0 !== e.length && !t.N.test(e) }, t.isValidPathString = function(e) { return "string" == typeof e && 0 !== e.length && !t.P.test(e) }, t.isValidRootPathString = function(e) { return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), t.isValidPathString(e) }, t.isValidPriority = function(e) { return null === e || "string" == typeof e || "number" == typeof e && !o.isInvalidJSONNumber(e) || e && "object" == typeof e && i.contains(e, ".sv") }, t.validateFirebaseDataArg = function(e, n, r, i, o) { o && void 0 === r || t.validateFirebaseData(a.errorPrefix(e, n, o), r, i) }, t.validateFirebaseData = function(e, n, a) {
            var u = a instanceof r.Path ? new r.ValidationPath(a, e) : a;
            if (void 0 === n) throw Error(e + "contains undefined " + u.toErrorString());
            if ("function" == typeof n) throw Error(e + "contains a function " + u.toErrorString() + " with contents = " + n);
            if (o.isInvalidJSONNumber(n)) throw Error(e + "contains " + n + " " + u.toErrorString());
            if ("string" == typeof n && n.length > t.S / 3 && s.stringLength(n) > t.S) throw Error(e + "contains a string greater than " + t.S + " utf8 bytes " + u.toErrorString() + " ('" + n.substring(0, 50) + "...')");
            if (n && "object" == typeof n) {
                var l = !1,
                    h = !1;
                if (i.forEach(n, function(n, r) {
                        if (".value" === n) l = !0;
                        else if (".priority" !== n && ".sv" !== n && (h = !0, !t.isValidKey(n))) throw Error(e + " contains an invalid key (" + n + ") " + u.toErrorString() + '.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');
                        u.push(n), t.validateFirebaseData(e, r, u), u.pop()
                    }), l && h) throw Error(e + ' contains ".value" child ' + u.toErrorString() + " in addition to actual children.")
            }
        }, t.validateFirebaseMergePaths = function(e, n) {
            var i, o;
            for (i = 0; i < n.length; i++) {
                o = n[i];
                for (var a = o.slice(), s = 0; s < a.length; s++)
                    if (".priority" === a[s] && s === a.length - 1);
                    else if (!t.isValidKey(a[s])) throw Error(e + "contains an invalid key (" + a[s] + ") in path " + o + '. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')
            }
            n.sort(r.Path.comparePaths);
            var u = null;
            for (i = 0; i < n.length; i++) {
                if (o = n[i], null !== u && u.contains(o)) throw Error(e + "contains a path " + u + " that is ancestor of another path " + o);
                u = o
            }
        }, t.validateFirebaseMergeDataArg = function(e, n, o, s, u) {
            if (!u || void 0 !== o) {
                var l = a.errorPrefix(e, n, u);
                if (!o || "object" != typeof o || Array.isArray(o)) throw Error(l + " must be an object containing the children to replace.");
                var h = [];
                i.forEach(o, function(e, n) {
                    var i = new r.Path(e);
                    if (t.validateFirebaseData(l, n, s.child(i)), ".priority" === i.getBack() && !t.isValidPriority(n)) throw Error(l + "contains an invalid value for '" + i + "', which must be a valid Firebase priority (a string, finite number, server value, or null).");
                    h.push(i)
                }), t.validateFirebaseMergePaths(l, h)
            }
        }, t.validatePriority = function(e, n, r, i) { if (!i || void 0 !== r) { if (o.isInvalidJSONNumber(r)) throw Error(a.errorPrefix(e, n, i) + "is " + r + ", but must be a valid Firebase priority (a string, finite number, server value, or null)."); if (!t.isValidPriority(r)) throw Error(a.errorPrefix(e, n, i) + "must be a valid Firebase priority (a string, finite number, server value, or null).") } }, t.validateEventType = function(e, t, n, r) {
            if (!r || void 0 !== n) switch (n) {
                case "value":
                case "child_added":
                case "child_removed":
                case "child_changed":
                case "child_moved":
                    break;
                default:
                    throw Error(a.errorPrefix(e, t, r) + 'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')
            }
        }, t.validateKey = function(e, n, r, i) { if (!(i && void 0 === r || t.isValidKey(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid key = "' + r + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").') }, t.validatePathString = function(e, n, r, i) { if (!(i && void 0 === r || t.isValidPathString(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid path = "' + r + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"') }, t.validateRootPathString = function(e, n, r, i) { r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), t.validatePathString(e, n, r, i) }, t.validateWritablePath = function(e, t) { if (".info" === t.getFront()) throw Error(e + " failed = Can't modify data under /.info/") }, t.validateUrl = function(e, n, r) { var i = "" + r.path; if ("string" != typeof r.repoInfo.host || 0 === r.repoInfo.host.length || !t.isValidKey(r.repoInfo.namespace) || 0 !== i.length && !t.isValidRootPathString(i)) throw Error(a.errorPrefix(e, n, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".') }, t.validateCredential = function(e, t, n, r) { if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid credential (a string).") }, t.validateBoolean = function(e, t, n, r) { if ((!r || void 0 !== n) && "boolean" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a boolean.") }, t.validateString = function(e, t, n, r) { if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid string.") }, t.validateObject = function(e, t, n, r) { if (!(r && void 0 === n || n && "object" == typeof n && null !== n)) throw Error(a.errorPrefix(e, t, r) + "must be a valid object.") }, t.validateObjectContainsKey = function(e, t, n, r, o, s) { if (!n || "object" != typeof n || !i.contains(n, r)) { if (o) return; throw Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '"') } if (s) { var u = i.safeGet(n, r); if ("number" === s && "number" != typeof u || "string" === s && "string" != typeof u || "boolean" === s && "boolean" != typeof u || "function" === s && "function" != typeof u || "object" === s && "object" != typeof u && u) throw o ? Error(a.errorPrefix(e, t, o) + 'contains invalid value for key "' + r + '" (must be of type "' + s + '")') : Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '" with type "' + s + '"') } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0);
        ! function(e) { e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE" }(t.OperationType || (t.OperationType = {}));
        var i = function() {
            function e(e, t, n, i) { this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = i, r.assert(!i || t, "Tagged queries must be from server.") }
            return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function(t) { return new e(!1, !0, t, !0) }, e
        }();
        t.OperationSource = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function() {
            function e(e, t, n, r, i) { this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i }
            return e.valueChange = function(t) { return new e(e.VALUE, t) }, e.childAddedChange = function(t, n) { return new e(e.CHILD_ADDED, n, t) }, e.childRemovedChange = function(t, n) { return new e(e.CHILD_REMOVED, n, t) }, e.childChangedChange = function(t, n, r) { return new e(e.CHILD_CHANGED, n, t, r) }, e.childMovedChange = function(t, n) { return new e(e.CHILD_MOVED, n, t) }, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED = "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED = "child_moved", e.VALUE = "value", e
        }();
        t.Change = r
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i, o = n(14),
            a = n(5),
            s = n(1),
            u = n(0),
            l = function(e) {
                function t() { return null !== e && e.apply(this, arguments) || this }
                return r(t, e), Object.defineProperty(t, "__EMPTY_NODE", { get: function() { return i }, set: function(e) { i = e }, enumerable: !0, configurable: !0 }), t.prototype.compare = function(e, t) { return s.nameCompare(e.name, t.name) }, t.prototype.isDefinedOn = function(e) { throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.") }, t.prototype.indexedValueChanged = function(e, t) { return !1 }, t.prototype.minPost = function() { return a.NamedNode.MIN }, t.prototype.maxPost = function() { return new a.NamedNode(s.MAX_NAME, i) }, t.prototype.makePost = function(e, t) { return u.assert("string" == typeof e, "KeyIndex indexValue must always be a string."), new a.NamedNode(e, i) }, t.prototype.toString = function() { return ".key" }, t
            }(o.Index);
        t.KeyIndex = l, t.KEY_INDEX = new l
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (void 0 === t && (t = null), null === e) return i.ChildrenNode.EMPTY_NODE;
            if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), u.assert(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) { var n = e; return new o.LeafNode(n, r(t)) }
            if (e instanceof Array || !d) {
                var f = i.ChildrenNode.EMPTY_NODE,
                    _ = e;
                return s.forEach(_, function(e, t) { if (s.contains(_, e) && "." !== e.substring(0, 1)) { var n = r(t);!n.isLeafNode() && n.isEmpty() || (f = f.updateImmediateChild(e, n)) } }), f.updatePriority(r(t))
            }
            var y = [],
                v = !1,
                g = e;
            if (s.forEach(g, function(e, t) {
                    if ("string" != typeof e || "." !== e.substring(0, 1)) {
                        var n = r(g[e]);
                        n.isEmpty() || (v = v || !n.getPriority().isEmpty(), y.push(new a.NamedNode(e, n)))
                    }
                }), 0 == y.length) return i.ChildrenNode.EMPTY_NODE;
            var m = l.buildChildSet(y, h.NAME_ONLY_COMPARATOR, function(e) { return e.name }, h.NAME_COMPARATOR);
            if (v) { var C = l.buildChildSet(y, p.PRIORITY_INDEX.getCompare()); return new i.ChildrenNode(m, r(t), new c.IndexMap({ ".priority": C }, { ".priority": p.PRIORITY_INDEX })) }
            return new i.ChildrenNode(m, r(t), c.IndexMap.Default)
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(4),
            o = n(15),
            a = n(5),
            s = n(0),
            u = n(0),
            l = n(40),
            h = n(41),
            c = n(39),
            p = n(3),
            d = !0;
        t.nodeFromJSON = r, p.setNodeFromJSON(r)
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(80),
            i = n(81),
            o = function(e) { try { if ("undefined" != typeof window && void 0 !== window[e]) { var t = window[e]; return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new r.DOMStorageWrapper(t) } } catch (e) {} return new i.MemoryStorage };
        t.PersistentStorage = o("localStorage"), t.SessionStorage = o("sessionStorage")
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.PROTOCOL_VERSION = "5", t.VERSION_PARAM = "v", t.TRANSPORT_SESSION_PARAM = "s", t.REFERER_PARAM = "r", t.FORGE_REF = "f", t.FORGE_DOMAIN = "firebaseio.com", t.LAST_SESSION_PARAM = "ls", t.WEBSOCKET = "websocket", t.LONG_POLLING = "long_polling"
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(5),
            i = n(1),
            o = function() {
                function e() {}
                return e.prototype.getCompare = function() { return this.compare.bind(this) }, e.prototype.indexedValueChanged = function(e, t) {
                    var n = new r.NamedNode(i.MIN_NAME, e),
                        o = new r.NamedNode(i.MIN_NAME, t);
                    return 0 !== this.compare(n, o)
                }, e.prototype.minPost = function() { return r.NamedNode.MIN }, e
            }();
        t.Index = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(0),
            o = n(1),
            a = n(37),
            s = function() {
                function e(t, n) { void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.T = t, this.y = n, this.m = null, i.assert(void 0 !== this.T && null !== this.T, "LeafNode shouldn't be created with null/undefined value."), a.validatePriorityNode(this.y) }
                return Object.defineProperty(e, "__childrenNodeConstructor", { get: function() { return r }, set: function(e) { r = e }, enumerable: !0, configurable: !0 }), e.prototype.isLeafNode = function() { return !0 }, e.prototype.getPriority = function() { return this.y }, e.prototype.updatePriority = function(t) { return new e(this.T, t) }, e.prototype.getImmediateChild = function(t) { return ".priority" === t ? this.y : e.__childrenNodeConstructor.EMPTY_NODE }, e.prototype.getChild = function(t) { return t.isEmpty() ? this : ".priority" === t.getFront() ? this.y : e.__childrenNodeConstructor.EMPTY_NODE }, e.prototype.hasChild = function() { return !1 }, e.prototype.getPredecessorChildName = function(e, t) { return null }, e.prototype.updateImmediateChild = function(t, n) { return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.y) }, e.prototype.updateChild = function(t, n) { var r = t.getFront(); return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (i.assert(".priority" !== r || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n))) }, e.prototype.isEmpty = function() { return !1 }, e.prototype.numChildren = function() { return 0 }, e.prototype.forEachChild = function(e, t) { return !1 }, e.prototype.val = function(e) { return e && !this.getPriority().isEmpty() ? { ".value": this.getValue(), ".priority": this.getPriority().val() } : this.getValue() }, e.prototype.hash = function() {
                    if (null === this.m) {
                        var e = "";
                        this.y.isEmpty() || (e += "priority:" + a.priorityHashText(this.y.val()) + ":");
                        var t = typeof this.T;
                        e += t + ":", e += "number" === t ? o.doubleToIEEE754String(this.T) : this.T, this.m = o.sha1(e)
                    }
                    return this.m
                }, e.prototype.getValue = function() { return this.T }, e.prototype.compareTo = function(t) { return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (i.assert(t.isLeafNode(), "Unknown node type"), this.w(t)) }, e.prototype.w = function(t) {
                    var n = typeof t.T,
                        r = typeof this.T,
                        o = e.VALUE_TYPE_ORDER.indexOf(n),
                        a = e.VALUE_TYPE_ORDER.indexOf(r);
                    return i.assert(o >= 0, "Unknown leaf type: " + n), i.assert(a >= 0, "Unknown leaf type: " + r), o === a ? "object" === r ? 0 : this.T < t.T ? -1 : this.T === t.T ? 0 : 1 : a - o
                }, e.prototype.withIndex = function() { return this }, e.prototype.isIndexed = function() { return !0 }, e.prototype.equals = function(e) { if (e === this) return !0; if (e.isLeafNode()) { var t = e; return this.T === t.T && this.y.equals(t.y) } return !1 }, e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], e
            }();
        t.LeafNode = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function() {
            function e(e, t, n, r, i) {
                void 0 === i && (i = null), this.I = r, this.R = i, this.O = [];
                for (var o = 1; !e.isEmpty();)
                    if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.I ? e.left : e.right;
                    else { if (0 === o) { this.O.push(e); break } this.O.push(e), e = this.I ? e.right : e.left }
            }
            return e.prototype.getNext = function() {
                if (0 === this.O.length) return null;
                var e, t = this.O.pop();
                if (e = this.R ? this.R(t.key, t.value) : { key: t.key, value: t.value }, this.I)
                    for (t = t.left; !t.isEmpty();) this.O.push(t), t = t.right;
                else
                    for (t = t.right; !t.isEmpty();) this.O.push(t), t = t.left;
                return e
            }, e.prototype.hasNext = function() { return this.O.length > 0 }, e.prototype.peek = function() { if (0 === this.O.length) return null; var e = this.O[this.O.length - 1]; return this.R ? this.R(e.key, e.value) : { key: e.key, value: e.value } }, e
        }();
        t.SortedMapIterator = r;
        var i = function() {
            function e(t, n, r, i, o) { this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : a.EMPTY_NODE, this.right = null != o ? o : a.EMPTY_NODE }
            return e.prototype.copy = function(t, n, r, i, o) { return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right) }, e.prototype.count = function() { return this.left.count() + 1 + this.right.count() }, e.prototype.isEmpty = function() { return !1 }, e.prototype.inorderTraversal = function(e) { return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e) }, e.prototype.reverseTraversal = function(e) { return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e) }, e.prototype.A = function() { return this.left.isEmpty() ? this : this.left.A() }, e.prototype.minKey = function() { return this.A().key }, e.prototype.maxKey = function() { return this.right.isEmpty() ? this.key : this.right.maxKey() }, e.prototype.insert = function(e, t, n) { var r, i; return i = this, r = n(e, i.key), i = r < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === r ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.D() }, e.prototype.M = function() { if (this.left.isEmpty()) return a.EMPTY_NODE; var e = this; return e.left.L() || e.left.left.L() || (e = e.F()), e = e.copy(null, null, null, e.left.M(), null), e.D() }, e.prototype.remove = function(e, t) {
                var n, r;
                if (n = this, t(e, n.key) < 0) n.left.isEmpty() || n.left.L() || n.left.left.L() || (n = n.F()), n = n.copy(null, null, null, n.left.remove(e, t), null);
                else {
                    if (n.left.L() && (n = n.x()), n.right.isEmpty() || n.right.L() || n.right.left.L() || (n = n.k()), 0 === t(e, n.key)) {
                        if (n.right.isEmpty()) return a.EMPTY_NODE;
                        r = n.right.A(), n = n.copy(r.key, r.value, null, null, n.right.M())
                    }
                    n = n.copy(null, null, null, null, n.right.remove(e, t))
                }
                return n.D()
            }, e.prototype.L = function() { return this.color }, e.prototype.D = function() { var e = this; return e.right.L() && !e.left.L() && (e = e.W()), e.left.L() && e.left.left.L() && (e = e.x()), e.left.L() && e.right.L() && (e = e.j()), e }, e.prototype.F = function() { var e = this.j(); return e.right.left.L() && (e = e.copy(null, null, null, null, e.right.x()), e = e.W(), e = e.j()), e }, e.prototype.k = function() { var e = this.j(); return e.left.left.L() && (e = e.x(), e = e.j()), e }, e.prototype.W = function() { var t = this.copy(null, null, e.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, e.prototype.x = function() { var t = this.copy(null, null, e.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, e.prototype.j = function() {
                var e = this.left.copy(null, null, !this.left.color, null, null),
                    t = this.right.copy(null, null, !this.right.color, null, null);
                return this.copy(null, null, !this.color, e, t)
            }, e.prototype.V = function() { var e = this.Q(); return Math.pow(2, e) <= this.count() + 1 }, e.prototype.Q = function() { var e; if (this.L() && this.left.L()) throw Error("Red node has red child(" + this.key + "," + this.value + ")"); if (this.right.L()) throw Error("Right child of (" + this.key + "," + this.value + ") is red"); if ((e = this.left.Q()) !== this.right.Q()) throw Error("Black depths differ"); return e + (this.L() ? 0 : 1) }, e.RED = !0, e.BLACK = !1, e
        }();
        t.LLRBNode = i;
        var o = function() {
            function e() {}
            return e.prototype.copy = function(e, t, n, r, i) { return this }, e.prototype.insert = function(e, t, n) { return new i(e, t, null) }, e.prototype.remove = function(e, t) { return this }, e.prototype.count = function() { return 0 }, e.prototype.isEmpty = function() { return !0 }, e.prototype.inorderTraversal = function(e) { return !1 }, e.prototype.reverseTraversal = function(e) { return !1 }, e.prototype.minKey = function() { return null }, e.prototype.maxKey = function() { return null }, e.prototype.Q = function() { return 0 }, e.prototype.L = function() { return !1 }, e
        }();
        t.LLRBEmptyNode = o;
        var a = function() {
            function e(t, n) { void 0 === n && (n = e.EMPTY_NODE), this.U = t, this.B = n }
            return e.prototype.insert = function(t, n) { return new e(this.U, this.B.insert(t, n, this.U).copy(null, null, i.BLACK, null, null)) }, e.prototype.remove = function(t) { return new e(this.U, this.B.remove(t, this.U).copy(null, null, i.BLACK, null, null)) }, e.prototype.get = function(e) {
                for (var t, n = this.B; !n.isEmpty();) {
                    if (0 === (t = this.U(e, n.key))) return n.value;
                    t < 0 ? n = n.left : t > 0 && (n = n.right)
                }
                return null
            }, e.prototype.getPredecessorKey = function(e) { for (var t, n = this.B, r = null; !n.isEmpty();) { if (0 === (t = this.U(e, n.key))) { if (n.left.isEmpty()) return r ? r.key : null; for (n = n.left; !n.right.isEmpty();) n = n.right; return n.key } t < 0 ? n = n.left : t > 0 && (r = n, n = n.right) } throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?") }, e.prototype.isEmpty = function() { return this.B.isEmpty() }, e.prototype.count = function() { return this.B.count() }, e.prototype.minKey = function() { return this.B.minKey() }, e.prototype.maxKey = function() { return this.B.maxKey() }, e.prototype.inorderTraversal = function(e) { return this.B.inorderTraversal(e) }, e.prototype.reverseTraversal = function(e) { return this.B.reverseTraversal(e) }, e.prototype.getIterator = function(e) { return new r(this.B, null, this.U, !1, e) }, e.prototype.getIteratorFrom = function(e, t) { return new r(this.B, e, this.U, !1, t) }, e.prototype.getReverseIteratorFrom = function(e, t) { return new r(this.B, e, this.U, !0, t) }, e.prototype.getReverseIterator = function(e) { return new r(this.B, null, this.U, !0, e) }, e.EMPTY_NODE = new o, e
        }();
        t.SortedMap = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(43),
            i = n(11),
            o = n(2),
            a = n(44),
            s = n(86),
            u = n(97),
            l = n(0),
            h = n(1),
            c = n(0),
            p = n(98),
            d = n(25),
            f = n(100),
            _ = n(49),
            y = n(101),
            v = n(50),
            g = n(106),
            m = n(32),
            C = function() {
                function e(e, t, n) {
                    var r = this;
                    this.H = e, this.app = n, this.dataUpdateCount = 0, this.G = null, this.K = new y.EventQueue, this.Y = 1, this.X = null, this.z = new a.SparseSnapshotTree, this.J = null;
                    var i = new p.AuthTokenProvider(n);
                    if (this.$ = d.StatsManager.getCollection(e), t || h.beingCrawled()) this.Z = new g.ReadonlyRestClient(this.H, this.ee.bind(this), i), setTimeout(this.te.bind(this, !0), 0);
                    else { var o = n.options.databaseAuthVariableOverride; if (void 0 !== o && null !== o) { if ("object" != typeof o) throw Error("Only objects are supported for option databaseAuthVariableOverride"); try { l.stringify(o) } catch (e) { throw Error("Invalid authOverride provided: " + e) } } this.J = new v.PersistentConnection(this.H, this.ee.bind(this), this.te.bind(this), this.ne.bind(this), i, o), this.Z = this.J } i.addTokenChangeListener(function(e) { r.Z.refreshAuthToken(e) }), this.re = d.StatsManager.getOrCreateReporter(e, function() { return new f.StatsReporter(r.$, r.Z) }), this.ie(), this.oe = new u.SnapshotHolder, this.ae = new s.SyncTree({
                        startListening: function(e, t, n, i) {
                            var o = [],
                                a = r.oe.getNode(e.path);
                            return a.isEmpty() || (o = r.ae.applyServerOverwrite(e.path, a), setTimeout(function() { i("ok") }, 0)), o
                        },
                        stopListening: function() {}
                    }), this.se("connected", !1), this.ue = new s.SyncTree({
                        startListening: function(e, t, n, i) {
                            return r.Z.listen(e, n, t, function(t, n) {
                                var o = i(t, n);
                                r.K.raiseEventsForChangedPath(e.path, o)
                            }), []
                        },
                        stopListening: function(e, t) { r.Z.unlisten(e, t) }
                    })
                }
                return e.prototype.toString = function() { return (this.H.secure ? "https://" : "http://") + this.H.host }, e.prototype.name = function() { return this.H.namespace }, e.prototype.serverTime = function() {
                    var e = this.oe.getNode(new o.Path(".info/serverTimeOffset")),
                        t = e.val() || 0;
                    return (new Date).getTime() + t
                }, e.prototype.generateServerValues = function() { return r.generateWithValues({ timestamp: this.serverTime() }) }, e.prototype.ee = function(e, t, n, r) {
                    this.dataUpdateCount++;
                    var a = new o.Path(e);
                    t = this.X ? this.X(e, t) : t;
                    var s = [];
                    if (r)
                        if (n) {
                            var u = c.map(t, function(e) { return i.nodeFromJSON(e) });
                            s = this.ue.applyTaggedQueryMerge(a, u, r)
                        }
                    else {
                        var l = i.nodeFromJSON(t);
                        s = this.ue.applyTaggedQueryOverwrite(a, l, r)
                    }
                    else if (n) {
                        var h = c.map(t, function(e) { return i.nodeFromJSON(e) });
                        s = this.ue.applyServerMerge(a, h)
                    }
                    else {
                        var p = i.nodeFromJSON(t);
                        s = this.ue.applyServerOverwrite(a, p)
                    }
                    var d = a;
                    s.length > 0 && (d = this.le(a)), this.K.raiseEventsForChangedPath(d, s)
                }, e.prototype.he = function(e) { this.X = e }, e.prototype.te = function(e) { this.se("connected", e), !1 === e && this.ce() }, e.prototype.ne = function(e) {
                    var t = this;
                    h.each(e, function(e, n) { t.se(n, e) })
                }, e.prototype.se = function(e, t) {
                    var n = new o.Path("/.info/" + e),
                        r = i.nodeFromJSON(t);
                    this.oe.updateSnapshot(n, r);
                    var a = this.ae.applyServerOverwrite(n, r);
                    this.K.raiseEventsForChangedPath(n, a)
                }, e.prototype.pe = function() { return this.Y++ }, e.prototype.setWithPriority = function(e, t, n, o) {
                    var a = this;
                    this.de("set", { path: "" + e, value: t, priority: n });
                    var s = this.generateServerValues(),
                        u = i.nodeFromJSON(t, n),
                        l = r.resolveDeferredValueSnapshot(u, s),
                        c = this.pe(),
                        p = this.ue.applyUserOverwrite(e, l, c, !0);
                    this.K.queueEvents(p), this.Z.put("" + e, u.val(!0), function(t, n) {
                        var r = "ok" === t;
                        r || h.warn("set at " + e + " failed: " + t);
                        var i = a.ue.ackUserWrite(c, !r);
                        a.K.raiseEventsForChangedPath(e, i), a.callOnCompleteCallback(o, t, n)
                    });
                    var d = this.fe(e);
                    this.le(d), this.K.raiseEventsForChangedPath(d, [])
                }, e.prototype.update = function(e, t, n) {
                    var o = this;
                    this.de("update", { path: "" + e, value: t });
                    var a = !0,
                        s = this.generateServerValues(),
                        u = {};
                    if (c.forEach(t, function(e, t) {
                            a = !1;
                            var n = i.nodeFromJSON(t);
                            u[e] = r.resolveDeferredValueSnapshot(n, s)
                        }), a) h.log("update() called with empty data.  Don't do anything."), this.callOnCompleteCallback(n, "ok");
                    else {
                        var l = this.pe(),
                            p = this.ue.applyUserMerge(e, u, l);
                        this.K.queueEvents(p), this.Z.merge("" + e, t, function(t, r) {
                            var i = "ok" === t;
                            i || h.warn("update at " + e + " failed: " + t);
                            var a = o.ue.ackUserWrite(l, !i),
                                s = a.length > 0 ? o.le(e) : e;
                            o.K.raiseEventsForChangedPath(s, a), o.callOnCompleteCallback(n, t, r)
                        }), c.forEach(t, function(t) {
                            var n = o.fe(e.child(t));
                            o.le(n)
                        }), this.K.raiseEventsForChangedPath(e, [])
                    }
                }, e.prototype.ce = function() {
                    var e = this;
                    this.de("onDisconnectEvents");
                    var t = this.generateServerValues(),
                        n = r.resolveDeferredValueTree(this.z, t),
                        i = [];
                    n.forEachTree(o.Path.Empty, function(t, n) {
                        i = i.concat(e.ue.applyServerOverwrite(t, n));
                        var r = e.fe(t);
                        e.le(r)
                    }), this.z = new a.SparseSnapshotTree, this.K.raiseEventsForChangedPath(o.Path.Empty, i)
                }, e.prototype.onDisconnectCancel = function(e, t) {
                    var n = this;
                    this.Z.onDisconnectCancel("" + e, function(r, i) { "ok" === r && n.z.forget(e), n.callOnCompleteCallback(t, r, i) })
                }, e.prototype.onDisconnectSet = function(e, t, n) {
                    var r = this,
                        o = i.nodeFromJSON(t);
                    this.Z.onDisconnectPut("" + e, o.val(!0), function(t, i) { "ok" === t && r.z.remember(e, o), r.callOnCompleteCallback(n, t, i) })
                }, e.prototype.onDisconnectSetWithPriority = function(e, t, n, r) {
                    var o = this,
                        a = i.nodeFromJSON(t, n);
                    this.Z.onDisconnectPut("" + e, a.val(!0), function(t, n) { "ok" === t && o.z.remember(e, a), o.callOnCompleteCallback(r, t, n) })
                }, e.prototype.onDisconnectUpdate = function(e, t, n) {
                    var r = this;
                    if (c.isEmpty(t)) return h.log("onDisconnect().update() called with empty data.  Don't do anything."), void this.callOnCompleteCallback(n, "ok");
                    this.Z.onDisconnectMerge("" + e, t, function(o, a) {
                        "ok" === o && c.forEach(t, function(t, n) {
                            var o = i.nodeFromJSON(n);
                            r.z.remember(e.child(t), o)
                        }), r.callOnCompleteCallback(n, o, a)
                    })
                }, e.prototype.addEventCallbackForQuery = function(e, t) {
                    var n;
                    n = ".info" === e.path.getFront() ? this.ae.addEventRegistration(e, t) : this.ue.addEventRegistration(e, t), this.K.raiseEventsAtPath(e.path, n)
                }, e.prototype.removeEventCallbackForQuery = function(e, t) {
                    var n;
                    n = ".info" === e.path.getFront() ? this.ae.removeEventRegistration(e, t) : this.ue.removeEventRegistration(e, t), this.K.raiseEventsAtPath(e.path, n)
                }, e.prototype.interrupt = function() { this.J && this.J.interrupt("repo_interrupt") }, e.prototype.resume = function() { this.J && this.J.resume("repo_interrupt") }, e.prototype.stats = function(e) {
                    if (void 0 === e && (e = !1), "undefined" != typeof console) {
                        var t;
                        e ? (this.G || (this.G = new _.StatsListener(this.$)), t = this.G.get()) : t = this.$.get();
                        var n = Object.keys(t).reduce(function(e, t) { return Math.max(t.length, e) }, 0);
                        c.forEach(t, function(e, t) {
                            for (var r = e.length; r < n + 2; r++) e += " ";
                            console.log(e + t)
                        })
                    }
                }, e.prototype.statsIncrementCounter = function(e) { this.$.incrementCounter(e), this.re.includeStat(e) }, e.prototype.de = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    var n = "";
                    this.J && (n = this.J.id + ":"), h.log.apply(void 0, [n].concat(e))
                }, e.prototype.callOnCompleteCallback = function(e, t, n) {
                    e && h.exceptionGuard(function() {
                        if ("ok" == t) e(null);
                        else {
                            var r = (t || "error").toUpperCase(),
                                i = r;
                            n && (i += ": " + n);
                            var o = Error(i);
                            o.code = r, e(o)
                        }
                    })
                }, Object.defineProperty(e.prototype, "database", { get: function() { return this.__database || (this.__database = new m.Database(this)) }, enumerable: !0, configurable: !0 }), e
            }();
        t.Repo = C
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function() {
            function e(e, t, n) { this._e = e, this.ye = t, this.ve = n }
            return e.prototype.isFullyInitialized = function() { return this.ye }, e.prototype.isFiltered = function() { return this.ve }, e.prototype.isCompleteForPath = function(e) { if (e.isEmpty()) return this.isFullyInitialized() && !this.ve; var t = e.getFront(); return this.isCompleteForChild(t) }, e.prototype.isCompleteForChild = function(e) { return this.isFullyInitialized() && !this.ve || this._e.hasChild(e) }, e.prototype.getNode = function() { return this._e }, e
        }();
        t.CacheNode = r
    }, , , function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(35),
            o = n(82),
            a = n(1),
            s = n(83),
            u = n(36),
            l = n(17),
            h = n(2),
            c = n(107),
            p = n(7),
            d = n(0),
            f = n(0),
            _ = n(47),
            y = function(e) {
                function t(t, n) { if (!(t instanceof l.Repo)) throw Error("new Reference() no longer supported - use app.database()."); return e.call(this, t, n, c.QueryParams.DEFAULT, !1) || this }
                return r(t, e), t.prototype.getKey = function() { return d.validateArgCount("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack() }, t.prototype.child = function(e) { return d.validateArgCount("Reference.child", 1, 1, arguments.length), "number" == typeof e ? e += "" : e instanceof h.Path || (null === this.path.getFront() ? p.validateRootPathString("Reference.child", 1, e, !1) : p.validatePathString("Reference.child", 1, e, !1)), new t(this.repo, this.path.child(e)) }, t.prototype.getParent = function() { d.validateArgCount("Reference.parent", 0, 0, arguments.length); var e = this.path.parent(); return null === e ? null : new t(this.repo, e) }, t.prototype.getRoot = function() { d.validateArgCount("Reference.root", 0, 0, arguments.length); for (var e = this; null !== e.getParent();) e = e.getParent(); return e }, t.prototype.databaseProp = function() { return this.repo.database }, t.prototype.set = function(e, t) { d.validateArgCount("Reference.set", 1, 2, arguments.length), p.validateWritablePath("Reference.set", this.path), p.validateFirebaseDataArg("Reference.set", 1, e, this.path, !1), d.validateCallback("Reference.set", 2, t, !0); var n = new f.Deferred; return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise }, t.prototype.update = function(e, t) {
                    if (d.validateArgCount("Reference.update", 1, 2, arguments.length), p.validateWritablePath("Reference.update", this.path), Array.isArray(e)) {
                        for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
                        e = n, a.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    p.validateFirebaseMergeDataArg("Reference.update", 1, e, this.path, !1), d.validateCallback("Reference.update", 2, t, !0);
                    var i = new f.Deferred;
                    return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise
                }, t.prototype.setWithPriority = function(e, t, n) { if (d.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length), p.validateWritablePath("Reference.setWithPriority", this.path), p.validateFirebaseDataArg("Reference.setWithPriority", 1, e, this.path, !1), p.validatePriority("Reference.setWithPriority", 2, t, !1), d.validateCallback("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object."; var r = new f.Deferred; return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise }, t.prototype.remove = function(e) { return d.validateArgCount("Reference.remove", 0, 1, arguments.length), p.validateWritablePath("Reference.remove", this.path), d.validateCallback("Reference.remove", 1, e, !0), this.set(null, e) }, t.prototype.transaction = function(e, t, n) {
                    if (d.validateArgCount("Reference.transaction", 1, 3, arguments.length), p.validateWritablePath("Reference.transaction", this.path), d.validateCallback("Reference.transaction", 1, e, !1), d.validateCallback("Reference.transaction", 2, t, !0), p.validateBoolean("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
                    void 0 === n && (n = !0);
                    var r = new f.Deferred;
                    "function" == typeof t && r.promise.catch(function() {});
                    var i = function(e, n, i) { e ? r.reject(e) : r.resolve(new o.TransactionResult(n, i)), "function" == typeof t && t(e, n, i) };
                    return this.repo.startTransaction(this.path, e, i, n), r.promise
                }, t.prototype.setPriority = function(e, t) { d.validateArgCount("Reference.setPriority", 1, 2, arguments.length), p.validateWritablePath("Reference.setPriority", this.path), p.validatePriority("Reference.setPriority", 1, e, !1), d.validateCallback("Reference.setPriority", 2, t, !0); var n = new f.Deferred; return this.repo.setWithPriority(this.path.child(".priority"), e, null, n.wrapCallback(t)), n.promise }, t.prototype.push = function(e, t) {
                    d.validateArgCount("Reference.push", 0, 2, arguments.length), p.validateWritablePath("Reference.push", this.path), p.validateFirebaseDataArg("Reference.push", 1, e, this.path, !0), d.validateCallback("Reference.push", 2, t, !0);
                    var n, r = this.repo.serverTime(),
                        i = s.nextPushId(r),
                        o = this.child(i),
                        a = this.child(i);
                    return n = null != e ? o.set(e, t).then(function() { return a }) : Promise.resolve(a), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof t && n.catch(function() {}), o
                }, t.prototype.onDisconnect = function() { return p.validateWritablePath("Reference.onDisconnect", this.path), new i.OnDisconnect(this.repo, this.path) }, Object.defineProperty(t.prototype, "database", { get: function() { return this.databaseProp() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "key", { get: function() { return this.getKey() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "parent", { get: function() { return this.getParent() }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "root", { get: function() { return this.getRoot() }, enumerable: !0, configurable: !0 }), t
            }(u.Query);
        t.Reference = y, u.Query.__referenceConstructor = y, _.SyncPoint.__referenceConstructor = y
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(7),
            o = n(2),
            a = n(3),
            s = function() {
                function e(e, t, n) { this._e = e, this.ge = t, this.me = n }
                return e.prototype.val = function() { return r.validateArgCount("DataSnapshot.val", 0, 0, arguments.length), this._e.val() }, e.prototype.exportVal = function() { return r.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length), this._e.val(!0) }, e.prototype.toJSON = function() { return r.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal() }, e.prototype.exists = function() { return r.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length), !this._e.isEmpty() }, e.prototype.child = function(t) {
                    r.validateArgCount("DataSnapshot.child", 0, 1, arguments.length), t += "", i.validatePathString("DataSnapshot.child", 1, t, !1);
                    var n = new o.Path(t),
                        s = this.ge.child(n);
                    return new e(this._e.getChild(n), s, a.PRIORITY_INDEX)
                }, e.prototype.hasChild = function(e) { r.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length), i.validatePathString("DataSnapshot.hasChild", 1, e, !1); var t = new o.Path(e); return !this._e.getChild(t).isEmpty() }, e.prototype.getPriority = function() { return r.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length), this._e.getPriority().val() }, e.prototype.forEach = function(t) { var n = this; return r.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length), r.validateCallback("DataSnapshot.forEach", 1, t, !1), !this._e.isLeafNode() && !!this._e.forEachChild(this.me, function(r, i) { return t(new e(i, n.ge.child(r), a.PRIORITY_INDEX)) }) }, e.prototype.hasChildren = function() { return r.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length), !this._e.isLeafNode() && !this._e.isEmpty() }, Object.defineProperty(e.prototype, "key", { get: function() { return this.ge.getKey() }, enumerable: !0, configurable: !0 }), e.prototype.numChildren = function() { return r.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length), this._e.numChildren() }, e.prototype.getRef = function() { return r.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length), this.ge }, Object.defineProperty(e.prototype, "ref", { get: function() { return this.getRef() }, enumerable: !0, configurable: !0 }), e
            }();
        t.DataSnapshot = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(16),
            o = n(2),
            a = n(1),
            s = n(0),
            u = function() { return r || (r = new i.SortedMap(a.stringCompare)), r },
            l = function() {
                function e(e, t) { void 0 === t && (t = u()), this.value = e, this.children = t }
                return e.fromObject = function(t) { var n = e.Empty; return s.forEach(t, function(e, t) { n = n.set(new o.Path(e), t) }), n }, e.prototype.isEmpty = function() { return null === this.value && this.children.isEmpty() }, e.prototype.findRootMostMatchingPathAndValue = function(e, t) {
                    if (null != this.value && t(this.value)) return { path: o.Path.Empty, value: this.value };
                    if (e.isEmpty()) return null;
                    var n = e.getFront(),
                        r = this.children.get(n);
                    if (null !== r) { var i = r.findRootMostMatchingPathAndValue(e.popFront(), t); return null != i ? { path: new o.Path(n).child(i.path), value: i.value } : null }
                    return null
                }, e.prototype.findRootMostValueAndPath = function(e) { return this.findRootMostMatchingPathAndValue(e, function() { return !0 }) }, e.prototype.subtree = function(t) {
                    if (t.isEmpty()) return this;
                    var n = t.getFront(),
                        r = this.children.get(n);
                    return null !== r ? r.subtree(t.popFront()) : e.Empty
                }, e.prototype.set = function(t, n) {
                    if (t.isEmpty()) return new e(n, this.children);
                    var r = t.getFront(),
                        i = this.children.get(r) || e.Empty,
                        o = i.set(t.popFront(), n),
                        a = this.children.insert(r, o);
                    return new e(this.value, a)
                }, e.prototype.remove = function(t) {
                    if (t.isEmpty()) return this.children.isEmpty() ? e.Empty : new e(null, this.children);
                    var n = t.getFront(),
                        r = this.children.get(n);
                    if (r) {
                        var i = r.remove(t.popFront()),
                            o = void 0;
                        return o = i.isEmpty() ? this.children.remove(n) : this.children.insert(n, i), null === this.value && o.isEmpty() ? e.Empty : new e(this.value, o)
                    }
                    return this
                }, e.prototype.get = function(e) {
                    if (e.isEmpty()) return this.value;
                    var t = e.getFront(),
                        n = this.children.get(t);
                    return n ? n.get(e.popFront()) : null
                }, e.prototype.setTree = function(t, n) {
                    if (t.isEmpty()) return n;
                    var r = t.getFront(),
                        i = this.children.get(r) || e.Empty,
                        o = i.setTree(t.popFront(), n),
                        a = void 0;
                    return a = o.isEmpty() ? this.children.remove(r) : this.children.insert(r, o), new e(this.value, a)
                }, e.prototype.fold = function(e) { return this.Ce(o.Path.Empty, e) }, e.prototype.Ce = function(e, t) { var n = {}; return this.children.inorderTraversal(function(r, i) { n[r] = i.Ce(e.child(r), t) }), t(e, this.value, n) }, e.prototype.findOnPath = function(e, t) { return this.Ee(e, o.Path.Empty, t) }, e.prototype.Ee = function(e, t, n) {
                    var r = !!this.value && n(t, this.value);
                    if (r) return r;
                    if (e.isEmpty()) return null;
                    var i = e.getFront(),
                        o = this.children.get(i);
                    return o ? o.Ee(e.popFront(), t.child(i), n) : null
                }, e.prototype.foreachOnPath = function(e, t) { return this.Ne(e, o.Path.Empty, t) }, e.prototype.Ne = function(t, n, r) {
                    if (t.isEmpty()) return this;
                    this.value && r(n, this.value);
                    var i = t.getFront(),
                        o = this.children.get(i);
                    return o ? o.Ne(t.popFront(), n.child(i), r) : e.Empty
                }, e.prototype.foreach = function(e) { this.Pe(o.Path.Empty, e) }, e.prototype.Pe = function(e, t) { this.children.inorderTraversal(function(n, r) { r.Pe(e.child(n), t) }), this.value && t(e, this.value) }, e.prototype.foreachChild = function(e) { this.children.inorderTraversal(function(t, n) { n.value && e(t, n.value) }) }, e.Empty = new e(null), e
            }();
        t.ImmutableTree = l
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(9),
            o = n(4),
            a = n(3),
            s = function() {
                function e(e) { this.me = e }
                return e.prototype.updateChild = function(e, t, n, o, a, s) { r.assert(e.isIndexed(this.me), "A node must be indexed if only a child is updated"); var u = e.getImmediateChild(t); return u.getChild(o).equals(n.getChild(o)) && u.isEmpty() == n.isEmpty() ? e : (null != s && (n.isEmpty() ? e.hasChild(t) ? s.trackChildChange(i.Change.childRemovedChange(t, u)) : r.assert(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : u.isEmpty() ? s.trackChildChange(i.Change.childAddedChange(t, n)) : s.trackChildChange(i.Change.childChangedChange(t, n, u))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.me)) }, e.prototype.updateFullNode = function(e, t, n) {
                    return null != n && (e.isLeafNode() || e.forEachChild(a.PRIORITY_INDEX, function(e, r) { t.hasChild(e) || n.trackChildChange(i.Change.childRemovedChange(e, r)) }), t.isLeafNode() || t.forEachChild(a.PRIORITY_INDEX, function(t, r) {
                        if (e.hasChild(t)) {
                            var o = e.getImmediateChild(t);
                            o.equals(r) || n.trackChildChange(i.Change.childChangedChange(t, r, o))
                        }
                        else n.trackChildChange(i.Change.childAddedChange(t, r))
                    })), t.withIndex(this.me)
                }, e.prototype.updatePriority = function(e, t) { return e.isEmpty() ? o.ChildrenNode.EMPTY_NODE : e.updatePriority(t) }, e.prototype.filtersNodes = function() { return !1 }, e.prototype.getIndexedFilter = function() { return this }, e.prototype.getIndex = function() { return this.me }, e
            }();
        t.IndexedFilter = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(99),
            i = function() {
                function e() {}
                return e.getCollection = function(e) { var t = "" + e; return this.be[t] || (this.be[t] = new r.StatsCollection), this.be[t] }, e.getOrCreateReporter = function(e, t) { var n = "" + e; return this.Se[n] || (this.Se[n] = t()), this.Se[n] }, e.be = {}, e.Se = {}, e
            }();
        t.StatsManager = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(17),
            o = n(1),
            a = n(33),
            s = n(7);
        n(109);
        var u, l = function() {
            function e() { this.Te = {}, this.we = !1 }
            return e.getInstance = function() { return u || (u = new e), u }, e.prototype.interrupt = function() {
                for (var e in this.Te)
                    for (var t in this.Te[e]) this.Te[e][t].interrupt()
            }, e.prototype.resume = function() {
                for (var e in this.Te)
                    for (var t in this.Te[e]) this.Te[e][t].resume()
            }, e.prototype.databaseFromApp = function(e, t) {
                var n = t || e.options.databaseURL;
                void 0 === n && o.fatal("Can't determine Firebase Database URL.  Be sure to include databaseURL option when calling firebase.intializeApp().");
                var r = a.parseRepoInfo(n),
                    i = r.repoInfo;
                return s.validateUrl("Invalid Firebase Database URL", 1, r), r.path.isEmpty() || o.fatal("Database URL must point to the root of a Firebase Database (not including a child path)."), this.createRepo(i, e).database
            }, e.prototype.deleteRepo = function(e) {
                var t = r.safeGet(this.Te, e.app.name);
                t && r.safeGet(t, e.H.toURLString()) === e || o.fatal("Database " + e.app.name + "(" + e.H + ") has already been deleted."), e.interrupt(), delete t[e.H.toURLString()]
            }, e.prototype.createRepo = function(e, t) {
                var n = r.safeGet(this.Te, t.name);
                n || (n = {}, this.Te[t.name] = n);
                var a = r.safeGet(n, e.toURLString());
                return a && o.fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."), a = new i.Repo(e, this.we, t), n[e.toURLString()] = a, a
            }, e.prototype.forceRestClient = function(e) { this.we = e }, e
        }();
        t.RepoManager = l
    }, , , , , , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = n(33),
            o = n(2),
            a = n(21),
            s = n(17),
            u = n(26),
            l = n(0),
            h = n(7),
            c = function() {
                function e(e) { this.Ie = e, e instanceof s.Repo || r.fatal("Don't call new Database() directly - please use firebase.database()."), this.B = new a.Reference(e, o.Path.Empty), this.INTERNAL = new p(this) }
                return Object.defineProperty(e.prototype, "app", { get: function() { return this.Ie.app }, enumerable: !0, configurable: !0 }), e.prototype.ref = function(e) { return this.Re("ref"), l.validateArgCount("database.ref", 0, 1, arguments.length), void 0 !== e ? this.B.child(e) : this.B }, e.prototype.refFromURL = function(e) {
                    var t = "database.refFromURL";
                    this.Re(t), l.validateArgCount(t, 1, 1, arguments.length);
                    var n = i.parseRepoInfo(e);
                    h.validateUrl(t, 1, n);
                    var o = n.repoInfo;
                    return o.host !== this.Ie.H.host && r.fatal(t + ": Host name does not match the current database: (found " + o.host + " but expected " + this.Ie.H.host + ")"), this.ref("" + n.path)
                }, e.prototype.Re = function(e) { null === this.Ie && r.fatal("Cannot call " + e + " on a deleted database.") }, e.prototype.goOffline = function() { l.validateArgCount("database.goOffline", 0, 0, arguments.length), this.Re("goOffline"), this.Ie.interrupt() }, e.prototype.goOnline = function() { l.validateArgCount("database.goOnline", 0, 0, arguments.length), this.Re("goOnline"), this.Ie.resume() }, e.ServerValue = { TIMESTAMP: { ".sv": "timestamp" } }, e
            }();
        t.Database = c;
        var p = function() {
            function e(e) { this.database = e }
            return e.prototype.delete = function() { return this.database.Re("delete"), u.RepoManager.getInstance().deleteRepo(this.database.Ie), this.database.Ie = null, this.database.B = null, this.database.INTERNAL = null, this.database = null, Promise.resolve() }, e
        }();
        t.DatabaseInternals = p
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
                if (n[r].length > 0) { var i = n[r]; try { i = decodeURIComponent(i.replace(/\+/g, " ")) } catch (e) {} t += "/" + i }
            return t
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(2),
            o = n(34),
            a = n(1);
        t.parseRepoInfo = function(e) {
            var n = t.parseURL(e),
                r = n.subdomain;
            "firebase" === n.domain && a.fatal(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" != r || a.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || a.warnIfPageIsSecure();
            var s = "ws" === n.scheme || "wss" === n.scheme;
            return { repoInfo: new o.RepoInfo(n.host, n.secure, r, s), path: new i.Path(n.pathString) }
        }, t.parseURL = function(e) {
            var t = "",
                n = "",
                i = "",
                o = "",
                a = !0,
                s = "https",
                u = 443;
            if ("string" == typeof e) {
                var l = e.indexOf("//");
                l >= 0 && (s = e.substring(0, l - 1), e = e.substring(l + 2));
                var h = e.indexOf("/"); - 1 === h && (h = e.length), t = e.substring(0, h), o = r(e.substring(h));
                var c = t.split(".");
                3 === c.length ? (n = c[1], i = c[0].toLowerCase()) : 2 === c.length && (n = c[0]), (l = t.indexOf(":")) >= 0 && (a = "https" === s || "wss" === s, u = parseInt(t.substring(l + 1), 10))
            }
            return { host: t, port: u, domain: n, subdomain: i, secure: a, scheme: s, pathString: o }
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(0),
            o = n(12),
            a = n(13),
            s = function() {
                function e(e, t, n, r, i) { void 0 === i && (i = ""), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = o.PersistentStorage.get("host:" + e) || this.host }
                return e.prototype.needsQueryParam = function() { return this.host !== this.internalHost }, e.prototype.isCacheableHost = function() { return "s-" === this.internalHost.substr(0, 2) }, e.prototype.isDemoHost = function() { return "firebaseio-demo.com" === this.domain }, e.prototype.isCustomHost = function() { return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain }, e.prototype.updateHost = function(e) { e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && o.PersistentStorage.set("host:" + this.host, this.internalHost)) }, e.prototype.connectionURL = function(e, t) {
                    r.assert("string" == typeof e, "typeof type must == string"), r.assert("object" == typeof t, "typeof params must == object");
                    var n;
                    if (e === a.WEBSOCKET) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
                    else {
                        if (e !== a.LONG_POLLING) throw Error("Unknown connection type: " + e);
                        n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
                    }
                    this.needsQueryParam() && (t.ns = this.namespace);
                    var o = [];
                    return i.forEach(t, function(e, t) { o.push(e + "=" + t) }), n + o.join("&")
                }, e.prototype.toString = function() { var e = this.toURLString(); return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e }, e.prototype.toURLString = function() { return (this.secure ? "https://" : "http://") + this.host }, e
            }();
        t.RepoInfo = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(7),
            o = n(1),
            a = n(0),
            s = function() {
                function e(e, t) { this.Ie = e, this.Oe = t }
                return e.prototype.cancel = function(e) { r.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length), r.validateCallback("OnDisconnect.cancel", 1, e, !0); var t = new a.Deferred; return this.Ie.onDisconnectCancel(this.Oe, t.wrapCallback(e)), t.promise }, e.prototype.remove = function(e) { r.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length), i.validateWritablePath("OnDisconnect.remove", this.Oe), r.validateCallback("OnDisconnect.remove", 1, e, !0); var t = new a.Deferred; return this.Ie.onDisconnectSet(this.Oe, null, t.wrapCallback(e)), t.promise }, e.prototype.set = function(e, t) { r.validateArgCount("OnDisconnect.set", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.set", this.Oe), i.validateFirebaseDataArg("OnDisconnect.set", 1, e, this.Oe, !1), r.validateCallback("OnDisconnect.set", 2, t, !0); var n = new a.Deferred; return this.Ie.onDisconnectSet(this.Oe, e, n.wrapCallback(t)), n.promise }, e.prototype.setWithPriority = function(e, t, n) { r.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length), i.validateWritablePath("OnDisconnect.setWithPriority", this.Oe), i.validateFirebaseDataArg("OnDisconnect.setWithPriority", 1, e, this.Oe, !1), i.validatePriority("OnDisconnect.setWithPriority", 2, t, !1), r.validateCallback("OnDisconnect.setWithPriority", 3, n, !0); var o = new a.Deferred; return this.Ie.onDisconnectSetWithPriority(this.Oe, e, t, o.wrapCallback(n)), o.promise }, e.prototype.update = function(e, t) {
                    if (r.validateArgCount("OnDisconnect.update", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.update", this.Oe), Array.isArray(e)) {
                        for (var n = {}, s = 0; s < e.length; ++s) n["" + s] = e[s];
                        e = n, o.warn("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
                    }
                    i.validateFirebaseMergeDataArg("OnDisconnect.update", 1, e, this.Oe, !1), r.validateCallback("OnDisconnect.update", 2, t, !0);
                    var u = new a.Deferred;
                    return this.Ie.onDisconnectUpdate(this.Oe, e, u.wrapCallback(t)), u.promise
                }, e
            }();
        t.OnDisconnect = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(0),
            o = n(10),
            a = n(3),
            s = n(38),
            u = n(42),
            l = n(1),
            h = n(2),
            c = n(7),
            p = n(0),
            d = n(84),
            f = n(0),
            _ = function() {
                function e(e, t, n, r) { this.repo = e, this.path = t, this.Ae = n, this.De = r }
                return Object.defineProperty(e, "__referenceConstructor", { get: function() { return i.assert(r, "Reference.ts has not been loaded"), r }, set: function(e) { r = e }, enumerable: !0, configurable: !0 }), e.Me = function(e) {
                    var t = null,
                        n = null;
                    if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === o.KEY_INDEX) {
                        var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
                            h = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
                        if (e.hasStart()) { if (e.getIndexStartName() != l.MIN_NAME) throw Error(r); if ("string" != typeof t) throw Error(h) }
                        if (e.hasEnd()) { if (e.getIndexEndName() != l.MAX_NAME) throw Error(r); if ("string" != typeof n) throw Error(h) }
                    }
                    else if (e.getIndex() === a.PRIORITY_INDEX) { if (null != t && !c.isValidPriority(t) || null != n && !c.isValidPriority(n)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).") }
                    else if (i.assert(e.getIndex() instanceof u.PathIndex || e.getIndex() === s.VALUE_INDEX, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
                }, e.Le = function(e) { if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.") }, e.prototype.Fe = function(e) { if (!0 === this.De) throw Error(e + ": You can't combine multiple orderBy calls.") }, e.prototype.getQueryParams = function() { return this.Ae }, e.prototype.getRef = function() { return p.validateArgCount("Query.ref", 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path) }, e.prototype.on = function(t, n, r, i) {
                    p.validateArgCount("Query.on", 2, 4, arguments.length), c.validateEventType("Query.on", 1, t, !1), p.validateCallback("Query.on", 2, n, !1);
                    var o = e.xe("Query.on", r, i);
                    if ("value" === t) this.onValueEvent(n, o.cancel, o.context);
                    else {
                        var a = {};
                        a[t] = n, this.onChildEvent(a, o.cancel, o.context)
                    }
                    return n
                }, e.prototype.onValueEvent = function(e, t, n) {
                    var r = new d.ValueEventRegistration(e, t || null, n || null);
                    this.repo.addEventCallbackForQuery(this, r)
                }, e.prototype.onChildEvent = function(e, t, n) {
                    var r = new d.ChildEventRegistration(e, t, n);
                    this.repo.addEventCallbackForQuery(this, r)
                }, e.prototype.off = function(e, t, n) {
                    p.validateArgCount("Query.off", 0, 3, arguments.length), c.validateEventType("Query.off", 1, e, !0), p.validateCallback("Query.off", 2, t, !0), p.validateContextObject("Query.off", 3, n, !0);
                    var r = null,
                        i = null;
                    if ("value" === e) {
                        var o = t || null;
                        r = new d.ValueEventRegistration(o, null, n || null)
                    }
                    else e && (t && (i = {}, i[e] = t), r = new d.ChildEventRegistration(i, null, n || null));
                    this.repo.removeEventCallbackForQuery(this, r)
                }, e.prototype.once = function(t, n, r, i) {
                    var o = this;
                    p.validateArgCount("Query.once", 1, 4, arguments.length), c.validateEventType("Query.once", 1, t, !1), p.validateCallback("Query.once", 2, n, !0);
                    var a = e.xe("Query.once", r, i),
                        s = !0,
                        u = new f.Deferred;
                    u.promise.catch(function() {});
                    var l = function(e) { s && (s = !1, o.off(t, l), n && n.bind(a.context)(e), u.resolve(e)) };
                    return this.on(t, l, function(e) { o.off(t, l), a.cancel && a.cancel.bind(a.context)(e), u.reject(e) }), u.promise
                }, e.prototype.limitToFirst = function(t) { if (p.validateArgCount("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToFirst: First argument must be a positive integer."); if (this.Ae.hasLimit()) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."); return new e(this.repo, this.path, this.Ae.limitToFirst(t), this.De) }, e.prototype.limitToLast = function(t) { if (p.validateArgCount("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToLast: First argument must be a positive integer."); if (this.Ae.hasLimit()) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast)."); return new e(this.repo, this.path, this.Ae.limitToLast(t), this.De) }, e.prototype.orderByChild = function(t) {
                    if (p.validateArgCount("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
                    if ("$priority" === t) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
                    if ("$value" === t) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
                    c.validatePathString("Query.orderByChild", 1, t, !1), this.Fe("Query.orderByChild");
                    var n = new h.Path(t);
                    if (n.isEmpty()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
                    var r = new u.PathIndex(n),
                        i = this.Ae.orderBy(r);
                    return e.Me(i), new e(this.repo, this.path, i, !0)
                }, e.prototype.orderByKey = function() { p.validateArgCount("Query.orderByKey", 0, 0, arguments.length), this.Fe("Query.orderByKey"); var t = this.Ae.orderBy(o.KEY_INDEX); return e.Me(t), new e(this.repo, this.path, t, !0) }, e.prototype.orderByPriority = function() { p.validateArgCount("Query.orderByPriority", 0, 0, arguments.length), this.Fe("Query.orderByPriority"); var t = this.Ae.orderBy(a.PRIORITY_INDEX); return e.Me(t), new e(this.repo, this.path, t, !0) }, e.prototype.orderByValue = function() { p.validateArgCount("Query.orderByValue", 0, 0, arguments.length), this.Fe("Query.orderByValue"); var t = this.Ae.orderBy(s.VALUE_INDEX); return e.Me(t), new e(this.repo, this.path, t, !0) }, e.prototype.startAt = function(t, n) { void 0 === t && (t = null), p.validateArgCount("Query.startAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.startAt", 1, t, this.path, !0), c.validateKey("Query.startAt", 2, n, !0); var r = this.Ae.startAt(t, n); if (e.Le(r), e.Me(r), this.Ae.hasStart()) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo)."); return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.De) }, e.prototype.endAt = function(t, n) { void 0 === t && (t = null), p.validateArgCount("Query.endAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.endAt", 1, t, this.path, !0), c.validateKey("Query.endAt", 2, n, !0); var r = this.Ae.endAt(t, n); if (e.Le(r), e.Me(r), this.Ae.hasEnd()) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo)."); return new e(this.repo, this.path, r, this.De) }, e.prototype.equalTo = function(e, t) { if (p.validateArgCount("Query.equalTo", 1, 2, arguments.length), c.validateFirebaseDataArg("Query.equalTo", 1, e, this.path, !1), c.validateKey("Query.equalTo", 2, t, !0), this.Ae.hasStart()) throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo)."); if (this.Ae.hasEnd()) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo)."); return this.startAt(e, t).endAt(e, t) }, e.prototype.toString = function() { return p.validateArgCount("Query.toString", 0, 0, arguments.length), "" + this.repo + this.path.toUrlEncodedString() }, e.prototype.toJSON = function() { return p.validateArgCount("Query.toJSON", 0, 1, arguments.length), "" + this }, e.prototype.queryObject = function() { return this.Ae.getQueryObject() }, e.prototype.queryIdentifier = function() {
                    var e = this.queryObject(),
                        t = l.ObjectToUniqueKey(e);
                    return "{}" === t ? "default" : t
                }, e.prototype.isEqual = function(t) {
                    if (p.validateArgCount("Query.isEqual", 1, 1, arguments.length), !(t instanceof e)) throw Error("Query.isEqual failed: First argument must be an instance of firebase.database.Query.");
                    var n = this.repo === t.repo,
                        r = this.path.equals(t.path),
                        i = this.queryIdentifier() === t.queryIdentifier();
                    return n && r && i
                }, e.xe = function(e, t, n) {
                    var r = { cancel: null, context: null };
                    if (t && n) r.cancel = t, p.validateCallback(e, 3, r.cancel, !0), r.context = n, p.validateContextObject(e, 4, r.context, !0);
                    else if (t)
                        if ("object" == typeof t && null !== t) r.context = t;
                        else {
                            if ("function" != typeof t) throw Error(p.errorPrefix(e, 3, !0) + " must either be a cancel callback or a context object.");
                            r.cancel = t
                        }
                    return r
                }, Object.defineProperty(e.prototype, "ref", { get: function() { return this.getRef() }, enumerable: !0, configurable: !0 }), e
            }();
        t.Query = _
    }, function(e, t, n) {
        "use strict";

        function r(e) { i = e } Object.defineProperty(t, "__esModule", { value: !0 });
        var i, o = n(0),
            a = n(1),
            s = n(0);
        t.setMaxNode = r, t.priorityHashText = function(e) { return "number" == typeof e ? "number:" + a.doubleToIEEE754String(e) : "string:" + e }, t.validatePriorityNode = function(e) {
            if (e.isLeafNode()) {
                var t = e.val();
                o.assert("string" == typeof t || "number" == typeof t || "object" == typeof t && s.contains(t, ".sv"), "Priority must be a string or number.")
            }
            else o.assert(e === i || e.isEmpty(), "priority of unexpected type.");
            o.assert(e === i || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
        }
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(14),
            o = n(5),
            a = n(1),
            s = n(11),
            u = function(e) {
                function t() { return null !== e && e.apply(this, arguments) || this }
                return r(t, e), t.prototype.compare = function(e, t) { var n = e.node.compareTo(t.node); return 0 === n ? a.nameCompare(e.name, t.name) : n }, t.prototype.isDefinedOn = function(e) { return !0 }, t.prototype.indexedValueChanged = function(e, t) { return !e.equals(t) }, t.prototype.minPost = function() { return o.NamedNode.MIN }, t.prototype.maxPost = function() { return o.NamedNode.MAX }, t.prototype.makePost = function(e, t) { var n = s.nodeFromJSON(e); return new o.NamedNode(t, n) }, t.prototype.toString = function() { return ".value" }, t
            }(i.Index);
        t.ValueIndex = u, t.VALUE_INDEX = new u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(0),
            o = n(40),
            a = n(0),
            s = n(5),
            u = n(3),
            l = n(10),
            h = {},
            c = function() {
                function e(e, t) { this.ke = e, this.We = t }
                return Object.defineProperty(e, "Default", { get: function() { return i.assert(h && u.PRIORITY_INDEX, "ChildrenNode.ts has not been loaded"), r = r || new e({ ".priority": h }, { ".priority": u.PRIORITY_INDEX }) }, enumerable: !0, configurable: !0 }), e.prototype.get = function(e) { var t = a.safeGet(this.ke, e); if (!t) throw Error("No index defined for " + e); return t === h ? null : t }, e.prototype.hasIndex = function(e) { return a.contains(this.We, "" + e) }, e.prototype.addIndex = function(t, n) {
                    i.assert(t !== l.KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
                    for (var r = [], u = !1, c = n.getIterator(s.NamedNode.Wrap), p = c.getNext(); p;) u = u || t.isDefinedOn(p.node), r.push(p), p = c.getNext();
                    var d;
                    d = u ? o.buildChildSet(r, t.getCompare()) : h;
                    var f = "" + t,
                        _ = a.clone(this.We);
                    _[f] = t;
                    var y = a.clone(this.ke);
                    return y[f] = d, new e(y, _)
                }, e.prototype.addToIndexes = function(t, n) {
                    var r = this;
                    return new e(a.map(this.ke, function(e, u) {
                        var l = a.safeGet(r.We, u);
                        if (i.assert(l, "Missing index implementation for " + u), e === h) { if (l.isDefinedOn(t.node)) { for (var c = [], p = n.getIterator(s.NamedNode.Wrap), d = p.getNext(); d;) d.name != t.name && c.push(d), d = p.getNext(); return c.push(t), o.buildChildSet(c, l.getCompare()) } return h }
                        var f = n.get(t.name),
                            _ = e;
                        return f && (_ = _.remove(new s.NamedNode(t.name, f))), _.insert(t, t.node)
                    }), this.We)
                }, e.prototype.removeFromIndexes = function(t, n) { return new e(a.map(this.ke, function(e) { if (e === h) return e; var r = n.get(t.name); return r ? e.remove(new s.NamedNode(t.name, r)) : e }), this.We) }, e
            }();
        t.IndexMap = c
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(16),
            i = n(16),
            o = Math.log(2),
            a = function() {
                function e(e) {
                    this.count = function(e) { return parseInt(Math.log(e) / o, 10) }(e + 1), this.je = this.count - 1;
                    var t = function(e) { return parseInt(Array(e + 1).join("1"), 2) }(this.count);
                    this.Ve = e + 1 & t
                }
                return e.prototype.nextBitIsOne = function() { var e = !(this.Ve & 1 << this.je); return this.je--, e }, e
            }();
        t.buildChildSet = function(e, t, n, o) {
            e.sort(t);
            var s = function(t, i) {
                    var o, a, u = i - t;
                    if (0 == u) return null;
                    if (1 == u) return o = e[t], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, null, null);
                    var l = parseInt(u / 2, 10) + t,
                        h = s(t, l),
                        c = s(l + 1, i);
                    return o = e[l], a = n ? n(o) : o, new r.LLRBNode(a, o.node, r.LLRBNode.BLACK, h, c)
                },
                u = new a(e.length),
                l = function(t) {
                    for (var i = null, o = null, a = e.length, u = function(t, i) {
                            var o = a - t,
                                u = a;
                            a -= t;
                            var h = s(o + 1, u),
                                c = e[o],
                                p = n ? n(c) : c;
                            l(new r.LLRBNode(p, c.node, i, null, h))
                        }, l = function(e) { i ? (i.left = e, i = e) : (o = e, i = e) }, h = 0; h < t.count; ++h) {
                        var c = t.nextBitIsOne(),
                            p = Math.pow(2, t.count - (h + 1));
                        c ? u(p, r.LLRBNode.BLACK) : (u(p, r.LLRBNode.BLACK), u(p, r.LLRBNode.RED))
                    }
                    return o
                }(u);
            return new i.SortedMap(o || t, l)
        }
    }, function(e, t, n) {
        "use strict";

        function r(e, t) { return o.nameCompare(e.name, t.name) }

        function i(e, t) { return o.nameCompare(e, t) } Object.defineProperty(t, "__esModule", { value: !0 });
        var o = n(1);
        t.NAME_ONLY_COMPARATOR = r, t.NAME_COMPARATOR = i
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            o = n(1),
            a = n(14),
            s = n(4),
            u = n(5),
            l = n(11),
            h = function(e) {
                function t(t) { var n = e.call(this) || this; return n.Qe = t, i.assert(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), n }
                return r(t, e), t.prototype.extractChild = function(e) { return e.getChild(this.Qe) }, t.prototype.isDefinedOn = function(e) { return !e.getChild(this.Qe).isEmpty() }, t.prototype.compare = function(e, t) {
                    var n = this.extractChild(e.node),
                        r = this.extractChild(t.node),
                        i = n.compareTo(r);
                    return 0 === i ? o.nameCompare(e.name, t.name) : i
                }, t.prototype.makePost = function(e, t) {
                    var n = l.nodeFromJSON(e),
                        r = s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe, n);
                    return new u.NamedNode(t, r)
                }, t.prototype.maxPost = function() { var e = s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe, s.MAX_NODE); return new u.NamedNode(o.MAX_NAME, e) }, t.prototype.toString = function() { return this.Qe.slice().join("/") }, t
            }(a.Index);
        t.PathIndex = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(2),
            o = n(44),
            a = n(15),
            s = n(11),
            u = n(3);
        t.generateWithValues = function(e) { return e = e || {}, e.timestamp = e.timestamp || (new Date).getTime(), e }, t.resolveDeferredValue = function(e, t) { return e && "object" == typeof e ? (r.assert(".sv" in e, "Unexpected leaf node or priority contents"), t[e[".sv"]]) : e }, t.resolveDeferredValueTree = function(e, n) { var r = new o.SparseSnapshotTree; return e.forEachTree(new i.Path(""), function(e, i) { r.remember(e, t.resolveDeferredValueSnapshot(i, n)) }), r }, t.resolveDeferredValueSnapshot = function(e, n) {
            var r, i = e.getPriority().val(),
                o = t.resolveDeferredValue(i, n);
            if (e.isLeafNode()) {
                var l = e,
                    h = t.resolveDeferredValue(l.getValue(), n);
                return h !== l.getValue() || o !== l.getPriority().val() ? new a.LeafNode(h, s.nodeFromJSON(o)) : e
            }
            var c = e;
            return r = c, o !== c.getPriority().val() && (r = r.updatePriority(new a.LeafNode(o))), c.forEachChild(u.PRIORITY_INDEX, function(e, i) {
                var o = t.resolveDeferredValueSnapshot(i, n);
                o !== i && (r = r.updateImmediateChild(e, o))
            }), r
        }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(2),
            i = n(3),
            o = n(45),
            a = function() {
                function e() { this.T = null, this._ = null }
                return e.prototype.find = function(e) { if (null != this.T) return this.T.getChild(e); if (e.isEmpty() || null == this._) return null; var t = e.getFront(); return e = e.popFront(), this._.contains(t) ? this._.get(t).find(e) : null }, e.prototype.remember = function(t, n) {
                    if (t.isEmpty()) this.T = n, this._ = null;
                    else if (null !== this.T) this.T = this.T.updateChild(t, n);
                    else {
                        null == this._ && (this._ = new o.CountedSet);
                        var r = t.getFront();
                        this._.contains(r) || this._.add(r, new e);
                        var i = this._.get(r);
                        t = t.popFront(), i.remember(t, n)
                    }
                }, e.prototype.forget = function(e) {
                    if (e.isEmpty()) return this.T = null, this._ = null, !0;
                    if (null !== this.T) {
                        if (this.T.isLeafNode()) return !1;
                        var t = this.T;
                        this.T = null;
                        var n = this;
                        return t.forEachChild(i.PRIORITY_INDEX, function(e, t) { n.remember(new r.Path(e), t) }), this.forget(e)
                    }
                    if (null !== this._) { var o = e.getFront(); return e = e.popFront(), this._.contains(o) && this._.get(o).forget(e) && this._.remove(o), !!this._.isEmpty() && (this._ = null, !0) }
                    return !0
                }, e.prototype.forEachTree = function(e, t) {
                    null !== this.T ? t(e, this.T) : this.forEachChild(function(n, i) {
                        var o = new r.Path(e + "/" + n);
                        i.forEachTree(o, t)
                    })
                }, e.prototype.forEachChild = function(e) { null !== this._ && this._.each(function(t, n) { e(t, n) }) }, e
            }();
        t.SparseSnapshotTree = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e() { this.set = {} }
                return e.prototype.add = function(e, t) { this.set[e] = null === t || t }, e.prototype.contains = function(e) { return r.contains(this.set, e) }, e.prototype.get = function(e) { return this.contains(e) ? this.set[e] : void 0 }, e.prototype.remove = function(e) { delete this.set[e] }, e.prototype.clear = function() { this.set = {} }, e.prototype.isEmpty = function() { return r.isEmpty(this.set) }, e.prototype.count = function() { return r.getCount(this.set) }, e.prototype.each = function(e) { r.forEach(this.set, function(t, n) { return e(t, n) }) }, e.prototype.keys = function() { var e = []; return r.forEach(this.set, function(t) { e.push(t) }), e }, e
            }();
        t.CountedSet = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(8),
            i = n(2),
            o = function() {
                function e(e, t, n) { this.source = e, this.path = t, this.snap = n, this.type = r.OperationType.OVERWRITE }
                return e.prototype.operationForChild = function(t) { return this.path.isEmpty() ? new e(this.source, i.Path.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap) }, e
            }();
        t.Overwrite = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(18),
            o = n(4),
            a = n(0),
            s = n(0),
            u = n(48),
            l = n(90),
            h = function() {
                function e() { this.qe = {} }
                return Object.defineProperty(e, "__referenceConstructor", { get: function() { return a.assert(r, "Reference.ts has not been loaded"), r }, set: function(e) { a.assert(!r, "__referenceConstructor has already been defined"), r = e }, enumerable: !0, configurable: !0 }), e.prototype.isEmpty = function() { return s.isEmpty(this.qe) }, e.prototype.applyOperation = function(e, t, n) { var r = e.source.queryId; if (null !== r) { var i = s.safeGet(this.qe, r); return a.assert(null != i, "SyncTree gave us an op for an invalid query."), i.applyOperation(e, t, n) } var o = []; return s.forEach(this.qe, function(r, i) { o = o.concat(i.applyOperation(e, t, n)) }), o }, e.prototype.addEventRegistration = function(e, t, n, r, a) {
                    var h = e.queryIdentifier(),
                        c = s.safeGet(this.qe, h);
                    if (!c) {
                        var p = n.calcCompleteEventCache(a ? r : null),
                            d = !1;
                        p ? d = !0 : r instanceof o.ChildrenNode ? (p = n.calcCompleteEventChildren(r), d = !1) : (p = o.ChildrenNode.EMPTY_NODE, d = !1);
                        var f = new u.ViewCache(new i.CacheNode(p, d, !1), new i.CacheNode(r, a, !1));
                        c = new l.View(e, f), this.qe[h] = c
                    }
                    return c.addEventRegistration(t), c.getInitialEvents(t)
                }, e.prototype.removeEventRegistration = function(t, n, r) {
                    var i = t.queryIdentifier(),
                        o = [],
                        a = [],
                        u = this.hasCompleteView();
                    if ("default" === i) {
                        var l = this;
                        s.forEach(this.qe, function(e, t) { a = a.concat(t.removeEventRegistration(n, r)), t.isEmpty() && (delete l.qe[e], t.getQuery().getQueryParams().loadsAllData() || o.push(t.getQuery())) })
                    }
                    else {
                        var h = s.safeGet(this.qe, i);
                        h && (a = a.concat(h.removeEventRegistration(n, r)), h.isEmpty() && (delete this.qe[i], h.getQuery().getQueryParams().loadsAllData() || o.push(h.getQuery())))
                    }
                    return u && !this.hasCompleteView() && o.push(new e.__referenceConstructor(t.repo, t.path)), { removed: o, events: a }
                }, e.prototype.getQueryViews = function() { var e = this; return Object.keys(this.qe).map(function(t) { return e.qe[t] }).filter(function(e) { return !e.getQuery().getQueryParams().loadsAllData() }) }, e.prototype.getCompleteServerCache = function(e) { var t = null; return s.forEach(this.qe, function(n, r) { t = t || r.getCompleteServerCache(e) }), t }, e.prototype.viewForQuery = function(e) { if (e.getQueryParams().loadsAllData()) return this.getCompleteView(); var t = e.queryIdentifier(); return s.safeGet(this.qe, t) }, e.prototype.viewExistsForQuery = function(e) { return null != this.viewForQuery(e) }, e.prototype.hasCompleteView = function() { return null != this.getCompleteView() }, e.prototype.getCompleteView = function() { return s.findValue(this.qe, function(e) { return e.getQuery().getQueryParams().loadsAllData() }) || null }, e
            }();
        t.SyncPoint = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(4),
            i = n(18),
            o = function() {
                function e(e, t) { this.Ue = e, this.Be = t }
                return e.prototype.updateEventSnap = function(t, n, r) { return new e(new i.CacheNode(t, n, r), this.Be) }, e.prototype.updateServerSnap = function(t, n, r) { return new e(this.Ue, new i.CacheNode(t, n, r)) }, e.prototype.getEventCache = function() { return this.Ue }, e.prototype.getCompleteEventSnap = function() { return this.Ue.isFullyInitialized() ? this.Ue.getNode() : null }, e.prototype.getServerCache = function() { return this.Be }, e.prototype.getCompleteServerSnap = function() { return this.Be.isFullyInitialized() ? this.Be.getNode() : null }, e.Empty = new e(new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1), new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1)), e
            }();
        t.ViewCache = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e(e) { this.He = e, this.Ge = null }
                return e.prototype.get = function() {
                    var e = this.He.get(),
                        t = r.clone(e);
                    return this.Ge && r.forEach(this.Ge, function(e, n) { t[e] = t[e] - n }), this.Ge = e, t
                }, e
            }();
        t.StatsListener = i
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(6),
            o = n(0),
            a = n(0),
            s = n(0),
            u = n(1),
            l = n(2),
            h = n(102),
            c = n(103),
            p = n(0),
            d = n(52),
            f = n(0),
            _ = n(0),
            y = n(55),
            v = 1e3,
            g = 3e5,
            m = function(e) {
                function t(n, r, i, o, a, s) { var l = e.call(this) || this; if (l.H = n, l.ee = r, l.te = i, l.ne = o, l.Ke = a, l.Ye = s, l.id = t.Xe++, l.de = u.logWrapper("p:" + l.id + ":"), l.ze = {}, l.Je = {}, l.$e = [], l.Ze = 0, l.et = [], l.tt = !1, l.nt = v, l.rt = g, l.it = null, l.lastSessionId = null, l.ot = null, l.at = !1, l.st = {}, l.ut = 0, l.lt = null, l.ht = null, l.ct = !1, l.pt = 0, l.dt = !0, l.ft = null, l._t = null, s && !_.isNodeSdk()) throw Error("Auth override specified in options, but not supported on non Node.js platforms"); return l.yt(0), h.VisibilityMonitor.getInstance().on("visible", l.vt, l), -1 === n.host.indexOf("fblocal") && c.OnlineMonitor.getInstance().on("online", l.gt, l), l }
                return r(t, e), t.prototype.sendRequest = function(e, t, n) {
                    var r = ++this.ut,
                        i = { r: r, a: e, b: t };
                    this.de(a.stringify(i)), s.assert(this.tt, "sendRequest call when we're not connected not allowed."), this.lt.sendRequest(i), n && (this.st[r] = n)
                }, t.prototype.listen = function(e, t, n, r) {
                    var i = e.queryIdentifier(),
                        o = "" + e.path;
                    this.de("Listen called for " + o + " " + i), this.Je[o] = this.Je[o] || {}, s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), s.assert(!this.Je[o][i], "listen() called twice for same path/queryId.");
                    var a = { onComplete: r, hashFn: t, query: e, tag: n };
                    this.Je[o][i] = a, this.tt && this.mt(a)
                }, t.prototype.mt = function(e) {
                    var n = this,
                        r = e.query,
                        i = "" + r.path,
                        o = r.queryIdentifier();
                    this.de("Listen on " + i + " for " + o);
                    var a = { p: i };
                    e.tag && (a.q = r.queryObject(), a.t = e.tag), a.h = e.hashFn(), this.sendRequest("q", a, function(a) {
                        var s = a.d,
                            u = a.s;
                        t.Ct(s, r), (n.Je[i] && n.Je[i][o]) === e && (n.de("listen response", a), "ok" !== u && n.Et(i, o), e.onComplete && e.onComplete(u, s))
                    })
                }, t.Ct = function(e, t) {
                    if (e && "object" == typeof e && o.contains(e, "w")) {
                        var n = o.safeGet(e, "w");
                        if (Array.isArray(n) && ~n.indexOf("no_index")) {
                            var r = '".indexOn": "' + t.getQueryParams().getIndex() + '"',
                                i = "" + t.path;
                            u.warn("Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding " + r + " at " + i + " to your security rules for better performance.")
                        }
                    }
                }, t.prototype.refreshAuthToken = function(e) { this.ht = e, this.de("Auth token refreshed"), this.ht ? this.tryAuth() : this.tt && this.sendRequest("unauth", {}, function() {}), this.Nt(e) }, t.prototype.Nt = function(e) {
                    (e && 40 === e.length || p.isAdmin(e)) && (this.de("Admin auth credential detected.  Reducing max reconnect time."), this.rt = 3e4)
                }, t.prototype.tryAuth = function() {
                    var e = this;
                    if (this.tt && this.ht) {
                        var t = this.ht,
                            n = p.isValidFormat(t) ? "auth" : "gauth",
                            r = { cred: t };
                        null === this.Ye ? r.noauth = !0 : "object" == typeof this.Ye && (r.authvar = this.Ye), this.sendRequest(n, r, function(n) {
                            var r = n.s,
                                i = n.d || "error";
                            e.ht === t && ("ok" === r ? e.pt = 0 : e.Pt(r, i))
                        })
                    }
                }, t.prototype.unlisten = function(e, t) {
                    var n = "" + e.path,
                        r = e.queryIdentifier();
                    this.de("Unlisten called for " + n + " " + r), s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "unlisten() called for non-default but complete query"), this.Et(n, r) && this.tt && this.bt(n, r, e.queryObject(), t)
                }, t.prototype.bt = function(e, t, n, r) {
                    this.de("Unlisten on " + e + " for " + t);
                    var i = { p: e };
                    r && (i.q = n, i.t = r), this.sendRequest("n", i)
                }, t.prototype.onDisconnectPut = function(e, t, n) { this.tt ? this.St("o", e, t, n) : this.et.push({ pathString: e, action: "o", data: t, onComplete: n }) }, t.prototype.onDisconnectMerge = function(e, t, n) { this.tt ? this.St("om", e, t, n) : this.et.push({ pathString: e, action: "om", data: t, onComplete: n }) }, t.prototype.onDisconnectCancel = function(e, t) { this.tt ? this.St("oc", e, null, t) : this.et.push({ pathString: e, action: "oc", data: null, onComplete: t }) }, t.prototype.St = function(e, t, n, r) {
                    var i = { p: t, d: n };
                    this.de("onDisconnect " + e, i), this.sendRequest(e, i, function(e) { r && setTimeout(function() { r(e.s, e.d) }, Math.floor(0)) })
                }, t.prototype.put = function(e, t, n, r) { this.putInternal("p", e, t, n, r) }, t.prototype.merge = function(e, t, n, r) { this.putInternal("m", e, t, n, r) }, t.prototype.putInternal = function(e, t, n, r, i) {
                    var o = { p: t, d: n };
                    void 0 !== i && (o.h = i), this.$e.push({ action: e, request: o, onComplete: r }), this.Ze++;
                    var a = this.$e.length - 1;
                    this.tt ? this.Tt(a) : this.de("Buffering put: " + t)
                }, t.prototype.Tt = function(e) {
                    var t = this,
                        n = this.$e[e].action,
                        r = this.$e[e].request,
                        i = this.$e[e].onComplete;
                    this.$e[e].queued = this.tt, this.sendRequest(n, r, function(r) { t.de(n + " response", r), delete t.$e[e], t.Ze--, 0 === t.Ze && (t.$e = []), i && i(r.s, r.d) })
                }, t.prototype.reportStats = function(e) {
                    var t = this;
                    if (this.tt) {
                        var n = { c: e };
                        this.de("reportStats", n), this.sendRequest("s", n, function(e) {
                            if ("ok" !== e.s) {
                                var n = e.d;
                                t.de("reportStats", "Error sending stats: " + n)
                            }
                        })
                    }
                }, t.prototype.wt = function(e) {
                    if ("r" in e) {
                        this.de("from server: " + a.stringify(e));
                        var t = e.r,
                            n = this.st[t];
                        n && (delete this.st[t], n(e.b))
                    }
                    else { if ("error" in e) throw "A server-side error has occurred: " + e.error; "a" in e && this.It(e.a, e.b) }
                }, t.prototype.It = function(e, t) { this.de("handleServerMessage", e, t), "d" === e ? this.ee(t.p, t.d, !1, t.t) : "m" === e ? this.ee(t.p, t.d, !0, t.t) : "c" === e ? this.Rt(t.p, t.q) : "ac" === e ? this.Pt(t.s, t.d) : "sd" === e ? this.Ot(t) : u.error("Unrecognized action received from server: " + a.stringify(e) + "\nAre you using the latest client?") }, t.prototype.At = function(e, t) { this.de("connection ready"), this.tt = !0, this._t = (new Date).getTime(), this.Dt(e), this.lastSessionId = t, this.dt && this.Mt(), this.Lt(), this.dt = !1, this.te(!0) }, t.prototype.yt = function(e) {
                    var t = this;
                    s.assert(!this.lt, "Scheduling a connect when we're already connected/ing?"), this.ot && clearTimeout(this.ot), this.ot = setTimeout(function() { t.ot = null, t.Ft() }, Math.floor(e))
                }, t.prototype.vt = function(e) { e && !this.at && this.nt === this.rt && (this.de("Window became visible.  Reducing delay."), this.nt = v, this.lt || this.yt(0)), this.at = e }, t.prototype.gt = function(e) { e ? (this.de("Browser went online."), this.nt = v, this.lt || this.yt(0)) : (this.de("Browser went offline.  Killing connection."), this.lt && this.lt.close()) }, t.prototype.xt = function() {
                    if (this.de("data client disconnected"), this.tt = !1, this.lt = null, this.kt(), this.st = {}, this.Wt()) {
                        if (this.at) {
                            if (this._t) {
                                var e = (new Date).getTime() - this._t;
                                e > 3e4 && (this.nt = v), this._t = null
                            }
                        }
                        else this.de("Window isn't visible.  Delaying reconnect."), this.nt = this.rt, this.ft = (new Date).getTime();
                        var t = (new Date).getTime() - this.ft,
                            n = Math.max(0, this.nt - t);
                        n = Math.random() * n, this.de("Trying to reconnect in " + n + "ms"), this.yt(n), this.nt = Math.min(this.rt, 1.3 * this.nt)
                    }
                    this.te(!1)
                }, t.prototype.Ft = function() {
                    if (this.Wt()) {
                        this.de("Making a connection attempt"), this.ft = (new Date).getTime(), this._t = null;
                        var e = this.wt.bind(this),
                            n = this.At.bind(this),
                            r = this.xt.bind(this),
                            i = this.id + ":" + t.jt++,
                            o = this,
                            a = this.lastSessionId,
                            l = !1,
                            h = null,
                            c = function() { h ? h.close() : (l = !0, r()) },
                            p = function(e) { s.assert(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e) };
                        this.lt = { close: c, sendRequest: p };
                        var _ = this.ct;
                        this.ct = !1, this.Ke.getToken(_).then(function(t) { l ? u.log("getToken() completed but was canceled") : (u.log("getToken() completed. Creating connection."), o.ht = t && t.accessToken, h = new d.Connection(i, o.H, e, n, r, function(e) { u.warn(e + " (" + o.H + ")"), o.interrupt("server_kill") }, a)) }).then(null, function(e) { o.de("Failed to get token: " + e), l || (f.CONSTANTS.NODE_ADMIN && u.warn(e), c()) })
                    }
                }, t.prototype.interrupt = function(e) { u.log("Interrupting connection for reason: " + e), this.ze[e] = !0, this.lt ? this.lt.close() : (this.ot && (clearTimeout(this.ot), this.ot = null), this.tt && this.xt()) }, t.prototype.resume = function(e) { u.log("Resuming connection for reason: " + e), delete this.ze[e], o.isEmpty(this.ze) && (this.nt = v, this.lt || this.yt(0)) }, t.prototype.Dt = function(e) {
                    var t = e - (new Date).getTime();
                    this.ne({ serverTimeOffset: t })
                }, t.prototype.kt = function() {
                    for (var e = 0; e < this.$e.length; e++) {
                        var t = this.$e[e];
                        t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.$e[e], this.Ze--)
                    }
                    0 === this.Ze && (this.$e = [])
                }, t.prototype.Rt = function(e, t) {
                    var n;
                    n = t ? t.map(function(e) { return u.ObjectToUniqueKey(e) }).join("$") : "default";
                    var r = this.Et(e, n);
                    r && r.onComplete && r.onComplete("permission_denied")
                }, t.prototype.Et = function(e, t) { var n, r = "" + new l.Path(e); return void 0 !== this.Je[r] ? (n = this.Je[r][t], delete this.Je[r][t], 0 === o.getCount(this.Je[r]) && delete this.Je[r]) : n = void 0, n }, t.prototype.Pt = function(e, t) { u.log("Auth token revoked: " + e + "/" + t), this.ht = null, this.ct = !0, this.lt.close(), "invalid_token" !== e && "permission_denied" !== e || ++this.pt >= 3 && (this.nt = 3e4, this.Ke.notifyForInvalidToken()) }, t.prototype.Ot = function(e) { this.it ? this.it(e) : "msg" in e && "undefined" != typeof console && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: ")) }, t.prototype.Lt = function() {
                    var e = this;
                    this.tryAuth(), o.forEach(this.Je, function(t, n) { o.forEach(n, function(t, n) { e.mt(n) }) });
                    for (var t = 0; t < this.$e.length; t++) this.$e[t] && this.Tt(t);
                    for (; this.et.length;) {
                        var n = this.et.shift();
                        this.St(n.action, n.pathString, n.data, n.onComplete)
                    }
                }, t.prototype.Mt = function() {
                    var e = {},
                        t = "js";
                    f.CONSTANTS.NODE_ADMIN ? t = "admin_node" : f.CONSTANTS.NODE_CLIENT && (t = "node"), e["sdk." + t + "." + i.default.SDK_VERSION.replace(/\./g, "-")] = 1, _.isMobileCordova() ? e["framework.cordova"] = 1 : _.isReactNative() && (e["framework.reactnative"] = 1), this.reportStats(e)
                }, t.prototype.Wt = function() { var e = c.OnlineMonitor.getInstance().currentlyOnline(); return o.isEmpty(this.ze) && e }, t.Xe = 0, t.jt = 0, t
            }(y.ServerActions);
        t.PersistentConnection = m
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e(e) { this.Vt = e, this.Qt = {}, r.assert(Array.isArray(e) && e.length > 0, "Requires a non-empty array") }
                return e.prototype.trigger = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    if (Array.isArray(this.Qt[e]))
                        for (var r = this.Qt[e].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, t)
                }, e.prototype.on = function(e, t, n) {
                    this.qt(e), this.Qt[e] = this.Qt[e] || [], this.Qt[e].push({ callback: t, context: n });
                    var r = this.getInitialEvent(e);
                    r && t.apply(n, r)
                }, e.prototype.off = function(e, t, n) {
                    this.qt(e);
                    for (var r = this.Qt[e] || [], i = 0; i < r.length; i++)
                        if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
                }, e.prototype.qt = function(e) { r.assert(this.Vt.find(function(t) { return t === e }), "Unknown event: " + e) }, e
            }();
        t.EventEmitter = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = n(12),
            o = n(13),
            a = n(104),
            s = function() {
                function e(e, t, n, i, o, s, u) { this.id = e, this.H = t, this.Ut = n, this.At = i, this.z = o, this.Bt = s, this.lastSessionId = u, this.connectionCount = 0, this.pendingDataMessages = [], this.Ht = 0, this.de = r.logWrapper("c:" + this.id + ":"), this.Gt = new a.TransportManager(t), this.de("Connection created"), this.Kt() }
                return e.prototype.Kt = function() {
                    var e = this,
                        t = this.Gt.initialTransport();
                    this.Yt = new t(this.Xt(), this.H, void 0, this.lastSessionId), this.zt = t.responsesRequiredToBeHealthy || 0;
                    var n = this.Jt(this.Yt),
                        i = this.$t(this.Yt);
                    this.Zt = this.Yt, this.en = this.Yt, this.tn = null, this.nn = !1, setTimeout(function() { e.Yt && e.Yt.open(n, i) }, Math.floor(0));
                    var o = t.healthyTimeout || 0;
                    o > 0 && (this.rn = r.setTimeoutNonBlocking(function() { e.rn = null, e.nn || (e.Yt && e.Yt.bytesReceived > 102400 ? (e.de("Connection exceeded healthy timeout but has received " + e.Yt.bytesReceived + " bytes.  Marking connection healthy."), e.nn = !0, e.Yt.markConnectionHealthy()) : e.Yt && e.Yt.bytesSent > 10240 ? e.de("Connection exceeded healthy timeout but has sent " + e.Yt.bytesSent + " bytes.  Leaving connection alive.") : (e.de("Closing unhealthy connection after timeout."), e.close())) }, Math.floor(o)))
                }, e.prototype.Xt = function() { return "c:" + this.id + ":" + this.connectionCount++ }, e.prototype.$t = function(e) { var t = this; return function(n) { e === t.Yt ? t.in(n) : e === t.tn ? (t.de("Secondary connection lost."), t.an()) : t.de("closing an old connection") } }, e.prototype.Jt = function(e) { var t = this; return function(n) { 2 != t.Ht && (e === t.en ? t.sn(n) : e === t.tn ? t.un(n) : t.de("message on old connection")) } }, e.prototype.sendRequest = function(e) {
                    var t = { t: "d", d: e };
                    this.ln(t)
                }, e.prototype.tryCleanupConnection = function() { this.Zt === this.tn && this.en === this.tn && (this.de("cleaning up and promoting a connection: " + this.tn.connId), this.Yt = this.tn, this.tn = null) }, e.prototype.hn = function(e) { if ("t" in e) { var t = e.t; "a" === t ? this.cn() : "r" === t ? (this.de("Got a reset on secondary, closing it"), this.tn.close(), this.Zt !== this.tn && this.en !== this.tn || this.close()) : "o" === t && (this.de("got pong on secondary."), this.pn--, this.cn()) } }, e.prototype.un = function(e) {
                    var t = r.requireKey("t", e),
                        n = r.requireKey("d", e);
                    if ("c" == t) this.hn(n);
                    else {
                        if ("d" != t) throw Error("Unknown protocol layer: " + t);
                        this.pendingDataMessages.push(n)
                    }
                }, e.prototype.cn = function() { this.pn <= 0 ? (this.de("Secondary connection is healthy."), this.nn = !0, this.tn.markConnectionHealthy(), this.dn()) : (this.de("sending ping on secondary."), this.tn.send({ t: "c", d: { t: "p", d: {} } })) }, e.prototype.dn = function() { this.tn.start(), this.de("sending client ack on secondary"), this.tn.send({ t: "c", d: { t: "a", d: {} } }), this.de("Ending transmission on primary"), this.Yt.send({ t: "c", d: { t: "n", d: {} } }), this.Zt = this.tn, this.tryCleanupConnection() }, e.prototype.sn = function(e) {
                    var t = r.requireKey("t", e),
                        n = r.requireKey("d", e);
                    "c" == t ? this.fn(n) : "d" == t && this.wt(n)
                }, e.prototype.wt = function(e) { this._n(), this.Ut(e) }, e.prototype._n = function() { this.nn || --this.zt <= 0 && (this.de("Primary connection is healthy."), this.nn = !0, this.Yt.markConnectionHealthy()) }, e.prototype.fn = function(e) {
                    var t = r.requireKey("t", e);
                    if ("d" in e) {
                        var n = e.d;
                        if ("h" === t) this.yn(n);
                        else if ("n" === t) {
                            this.de("recvd end transmission on primary"), this.en = this.tn;
                            for (var i = 0; i < this.pendingDataMessages.length; ++i) this.wt(this.pendingDataMessages[i]);
                            this.pendingDataMessages = [], this.tryCleanupConnection()
                        }
                        else "s" === t ? this.vn(n) : "r" === t ? this.gn(n) : "e" === t ? r.error("Server Error: " + n) : "o" === t ? (this.de("got pong on primary."), this._n(), this.mn()) : r.error("Unknown control packet command: " + t)
                    }
                }, e.prototype.yn = function(e) {
                    var t = e.ts,
                        n = e.v,
                        i = e.h;
                    this.sessionId = e.s, this.H.updateHost(i), 0 == this.Ht && (this.Yt.start(), this.Cn(this.Yt, t), o.PROTOCOL_VERSION !== n && r.warn("Protocol version mismatch detected"), this.En())
                }, e.prototype.En = function() {
                    var e = this.Gt.upgradeTransport();
                    e && this.Nn(e)
                }, e.prototype.Nn = function(e) {
                    var t = this;
                    this.tn = new e(this.Xt(), this.H, this.sessionId), this.pn = e.responsesRequiredToBeHealthy || 0;
                    var n = this.Jt(this.tn),
                        i = this.$t(this.tn);
                    this.tn.open(n, i), r.setTimeoutNonBlocking(function() { t.tn && (t.de("Timed out trying to upgrade."), t.tn.close()) }, Math.floor(6e4))
                }, e.prototype.gn = function(e) { this.de("Reset packet received.  New host: " + e), this.H.updateHost(e), 1 === this.Ht ? this.close() : (this.Pn(), this.Kt()) }, e.prototype.Cn = function(e, t) {
                    var n = this;
                    this.de("Realtime connection established."), this.Yt = e, this.Ht = 1, this.At && (this.At(t, this.sessionId), this.At = null), 0 === this.zt ? (this.de("Primary connection is healthy."), this.nn = !0) : r.setTimeoutNonBlocking(function() { n.mn() }, Math.floor(5e3))
                }, e.prototype.mn = function() { this.nn || 1 !== this.Ht || (this.de("sending ping on primary."), this.ln({ t: "c", d: { t: "p", d: {} } })) }, e.prototype.an = function() {
                    var e = this.tn;
                    this.tn = null, this.Zt !== e && this.en !== e || this.close()
                }, e.prototype.in = function(e) { this.Yt = null, e || 0 !== this.Ht ? 1 === this.Ht && this.de("Realtime connection lost.") : (this.de("Realtime connection failed."), this.H.isCacheableHost() && (i.PersistentStorage.remove("host:" + this.H.host), this.H.internalHost = this.H.host)), this.close() }, e.prototype.vn = function(e) { this.de("Connection shutdown command received. Shutting down..."), this.Bt && (this.Bt(e), this.Bt = null), this.z = null, this.close() }, e.prototype.ln = function(e) {
                    if (1 !== this.Ht) throw "Connection is not connected";
                    this.Zt.send(e)
                }, e.prototype.close = function() { 2 !== this.Ht && (this.de("Closing realtime connection."), this.Ht = 2, this.Pn(), this.z && (this.z(), this.z = null)) }, e.prototype.Pn = function() { this.de("Shutting down all connections"), this.Yt && (this.Yt.close(), this.Yt = null), this.tn && (this.tn.close(), this.tn = null), this.rn && (clearTimeout(this.rn), this.rn = null) }, e
            }();
        t.Connection = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = n(45),
            o = n(25),
            a = n(105),
            s = n(13),
            u = n(0),
            l = n(0);
        t.FIREBASE_LONGPOLL_START_PARAM = "start", t.FIREBASE_LONGPOLL_CLOSE_COMMAND = "close", t.FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand", t.FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB", t.FIREBASE_LONGPOLL_ID_PARAM = "id", t.FIREBASE_LONGPOLL_PW_PARAM = "pw", t.FIREBASE_LONGPOLL_SERIAL_PARAM = "ser", t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb", t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg", t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts", t.FIREBASE_LONGPOLL_DATA_PARAM = "d", t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = "disconn", t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
        var h = function() {
            function e(e, t, n, i) { this.connId = e, this.repoInfo = t, this.transportSessionId = n, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.bn = !1, this.de = r.logWrapper(e), this.$ = o.StatsManager.getCollection(t), this.urlFn = function(e) { return t.connectionURL(s.LONG_POLLING, e) } }
            return e.prototype.open = function(e, n) {
                var i = this;
                this.curSegmentNum = 0, this.z = n, this.myPacketOrderer = new a.PacketReceiver(e), this.Sn = !1, this.Tn = setTimeout(function() { i.de("Timed out trying to connect."), i.wn(), i.Tn = null }, Math.floor(3e4)), r.executeWhenDOMReady(function() {
                    if (!i.Sn) {
                        i.scriptTagHolder = new c(function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = e[0],
                                o = e[1],
                                a = e[2];
                            if (e[3], e[4], i.In(e), i.scriptTagHolder)
                                if (i.Tn && (clearTimeout(i.Tn), i.Tn = null), i.bn = !0, r == t.FIREBASE_LONGPOLL_START_PARAM) i.id = o, i.password = a;
                                else {
                                    if (r !== t.FIREBASE_LONGPOLL_CLOSE_COMMAND) throw Error("Unrecognized command received: " + r);
                                    o ? (i.scriptTagHolder.sendNewPolls = !1, i.myPacketOrderer.closeAfter(o, function() { i.wn() })) : i.wn()
                                }
                        }, function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            var n = e[0],
                                r = e[1];
                            i.In(e), i.myPacketOrderer.handleResponse(n, r)
                        }, function() { i.wn() }, i.urlFn);
                        var e = {};
                        e[t.FIREBASE_LONGPOLL_START_PARAM] = "t", e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(1e8 * Math.random()), i.scriptTagHolder.uniqueCallbackIdentifier && (e[t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = i.scriptTagHolder.uniqueCallbackIdentifier), e[s.VERSION_PARAM] = s.PROTOCOL_VERSION, i.transportSessionId && (e[s.TRANSPORT_SESSION_PARAM] = i.transportSessionId), i.lastSessionId && (e[s.LAST_SESSION_PARAM] = i.lastSessionId), !l.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(s.FORGE_DOMAIN) && (e[s.REFERER_PARAM] = s.FORGE_REF);
                        var n = i.urlFn(e);
                        i.de("Connecting via long-poll to " + n), i.scriptTagHolder.addTag(n, function() {})
                    }
                })
            }, e.prototype.start = function() { this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password) }, e.forceAllow = function() { e.Rn = !0 }, e.forceDisallow = function() { e.On = !0 }, e.isAvailable = function() { return e.Rn || !e.On && "undefined" != typeof document && null != document.createElement && !r.isChromeExtensionContentScript() && !r.isWindowsStoreApp() && !l.isNodeSdk() }, e.prototype.markConnectionHealthy = function() {}, e.prototype.An = function() { this.Sn = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.Tn && (clearTimeout(this.Tn), this.Tn = null) }, e.prototype.wn = function() { this.Sn || (this.de("Longpoll is closing itself"), this.An(), this.z && (this.z(this.bn), this.z = null)) }, e.prototype.close = function() { this.Sn || (this.de("Longpoll is being closed."), this.An()) }, e.prototype.send = function(e) {
                var t = u.stringify(e);
                this.bytesSent += t.length, this.$.incrementCounter("bytes_sent", t.length);
                for (var n = u.base64Encode(t), i = r.splitStringBySize(n, 1840), o = 0; o < i.length; o++) this.scriptTagHolder.enqueueSegment(this.curSegmentNum, i.length, i[o]), this.curSegmentNum++
            }, e.prototype.addDisconnectPingFrame = function(e, n) {
                if (!l.isNodeSdk()) {
                    this.myDisconnFrame = document.createElement("iframe");
                    var r = {};
                    r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = e, r[t.FIREBASE_LONGPOLL_PW_PARAM] = n, this.myDisconnFrame.src = this.urlFn(r), this.myDisconnFrame.style.display = "none", document.body.appendChild(this.myDisconnFrame)
                }
            }, e.prototype.In = function(e) {
                var t = u.stringify(e).length;
                this.bytesReceived += t, this.$.incrementCounter("bytes_received", t)
            }, e
        }();
        t.BrowserPollConnection = h;
        var c = function() {
            function e(n, o, a, s) {
                if (this.onDisconnect = a, this.urlFn = s, this.outstandingRequests = new i.CountedSet, this.pendingSegs = [], this.currentSerial = Math.floor(1e8 * Math.random()), this.sendNewPolls = !0, l.isNodeSdk()) this.commandCB = n, this.onMessageCB = o;
                else {
                    this.uniqueCallbackIdentifier = r.LUIDGenerator(), window[t.FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = n, window[t.FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = o, this.myIFrame = e.Dn();
                    var u = "";
                    this.myIFrame.src && "javascript:" === this.myIFrame.src.substr(0, 11) && (u = '<script>document.domain="' + document.domain + '";<\/script>');
                    var h = "<html><body>" + u + "</body></html>";
                    try { this.myIFrame.doc.open(), this.myIFrame.doc.write(h), this.myIFrame.doc.close() }
                    catch (e) { r.log("frame writing exception"), e.stack && r.log(e.stack), r.log(e) }
                }
            }
            return e.Dn = function() {
                var e = document.createElement("iframe");
                if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
                document.body.appendChild(e);
                try { e.contentWindow.document || r.log("No IE domain setting required") }
                catch (n) {
                    var t = document.domain;
                    e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
                }
                return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
            }, e.prototype.close = function() {
                var n = this;
                if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() { null !== n.myIFrame && (document.body.removeChild(n.myIFrame), n.myIFrame = null) }, Math.floor(0))), l.isNodeSdk() && this.myID) {
                    var r = {};
                    r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, r[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
                    var i = this.urlFn(r);
                    e.nodeRestRequest(i)
                }
                var o = this.onDisconnect;
                o && (this.onDisconnect = null, o())
            }, e.prototype.startLongPoll = function(e, t) { for (this.myID = e, this.myPW = t, this.alive = !0; this.Mn();); }, e.prototype.Mn = function() {
                if (this.alive && this.sendNewPolls && this.outstandingRequests.count() < (this.pendingSegs.length > 0 ? 2 : 1)) {
                    this.currentSerial++;
                    var e = {};
                    e[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, e[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW, e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
                    for (var n = this.urlFn(e), r = "", i = 0; this.pendingSegs.length > 0 && this.pendingSegs[0].d.length + 30 + r.length <= 1870;) {
                        var o = this.pendingSegs.shift();
                        r = r + "&" + t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM + i + "=" + o.seg + "&" + t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET + i + "=" + o.ts + "&" + t.FIREBASE_LONGPOLL_DATA_PARAM + i + "=" + o.d, i++
                    }
                    return n += r, this.Ln(n, this.currentSerial), !0
                }
                return !1
            }, e.prototype.enqueueSegment = function(e, t, n) { this.pendingSegs.push({ seg: e, ts: t, d: n }), this.alive && this.Mn() }, e.prototype.Ln = function(e, t) {
                var n = this;
                this.outstandingRequests.add(t, 1);
                var r = function() { n.outstandingRequests.remove(t), n.Mn() },
                    i = setTimeout(r, Math.floor(25e3)),
                    o = function() { clearTimeout(i), r() };
                this.addTag(e, o)
            }, e.prototype.addTag = function(e, t) {
                var n = this;
                l.isNodeSdk() ? this.doNodeLongPoll(e, t) : setTimeout(function() {
                    try {
                        if (!n.sendNewPolls) return;
                        var i = n.myIFrame.doc.createElement("script");
                        i.type = "text/javascript", i.async = !0, i.src = e, i.onload = i.onreadystatechange = function() {
                            var e = i.readyState;
                            e && "loaded" !== e && "complete" !== e || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), t())
                        }, i.onerror = function() { r.log("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close() }, n.myIFrame.doc.body.appendChild(i)
                    }
                    catch (e) {}
                }, Math.floor(1))
            }, e
        }();
        t.FirebaseIFrameScriptHolder = c
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            function r(e) { d = e } Object.defineProperty(t, "__esModule", { value: !0 });
            var i = n(6),
                o = n(0),
                a = n(1),
                s = n(25),
                u = n(13),
                l = n(0),
                h = n(12),
                c = n(0),
                p = n(0),
                d = null;
            "undefined" != typeof MozWebSocket ? d = MozWebSocket : "undefined" != typeof WebSocket && (d = WebSocket), t.setWebSocketImpl = r;
            var f = function() {
                function t(e, n, r, i) { this.connId = e, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.de = a.logWrapper(this.connId), this.$ = s.StatsManager.getCollection(n), this.connURL = t.Fn(n, r, i) }
                return t.Fn = function(e, t, n) { var r = {}; return r[u.VERSION_PARAM] = u.PROTOCOL_VERSION, !p.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(u.FORGE_DOMAIN) && (r[u.REFERER_PARAM] = u.FORGE_REF), t && (r[u.TRANSPORT_SESSION_PARAM] = t), n && (r[u.LAST_SESSION_PARAM] = n), e.connectionURL(u.WEBSOCKET, r) }, t.prototype.open = function(t, n) {
                    var r = this;
                    this.onDisconnect = n, this.onMessage = t, this.de("Websocket connecting to " + this.connURL), this.bn = !1, h.PersistentStorage.set("previous_websocket_failure", !0);
                    try {
                        if (p.isNodeSdk()) {
                            var o = l.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
                                a = { headers: { "User-Agent": "Firebase/" + u.PROTOCOL_VERSION + "/" + i.default.SDK_VERSION + "/" + e.platform + "/" + o } },
                                s = e.env,
                                c = 0 == this.connURL.indexOf("wss://") ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;
                            c && (a.proxy = { origin: c }), this.mySock = new d(this.connURL, [], a)
                        }
                        else this.mySock = new d(this.connURL)
                    }
                    catch (e) { this.de("Error instantiating WebSocket."); var f = e.message || e.data; return f && this.de(f), void this.wn() } this.mySock.onopen = function() { r.de("Websocket connected."), r.bn = !0 }, this.mySock.onclose = function() { r.de("Websocket connection was disconnected."), r.mySock = null, r.wn() }, this.mySock.onmessage = function(e) { r.handleIncomingFrame(e) }, this.mySock.onerror = function(e) {
                        r.de("WebSocket error.  Closing connection.");
                        var t = e.message || e.data;
                        t && r.de(t), r.wn()
                    }
                }, t.prototype.start = function() {}, t.forceDisallow = function() { t.On = !0 }, t.isAvailable = function() {
                    var e = !1;
                    if ("undefined" != typeof navigator && navigator.userAgent) {
                        var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
                            r = navigator.userAgent.match(n);
                        r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
                    }
                    return !e && null !== d && !t.On
                }, t.previouslyFailed = function() { return h.PersistentStorage.isInMemoryStorage || !0 === h.PersistentStorage.get("previous_websocket_failure") }, t.prototype.markConnectionHealthy = function() { h.PersistentStorage.remove("previous_websocket_failure") }, t.prototype.xn = function(e) {
                    if (this.frames.push(e), this.frames.length == this.totalFrames) {
                        var t = this.frames.join("");
                        this.frames = null;
                        var n = c.jsonEval(t);
                        this.onMessage(n)
                    }
                }, t.prototype.kn = function(e) { this.totalFrames = e, this.frames = [] }, t.prototype.Wn = function(e) { if (o.assert(null === this.frames, "We already have a frame buffer"), e.length <= 6) { var t = +e; if (!isNaN(t)) return this.kn(t), null } return this.kn(1), e }, t.prototype.handleIncomingFrame = function(e) {
                    if (null !== this.mySock) {
                        var t = e.data;
                        if (this.bytesReceived += t.length, this.$.incrementCounter("bytes_received", t.length), this.resetKeepAlive(), null !== this.frames) this.xn(t);
                        else {
                            var n = this.Wn(t);
                            null !== n && this.xn(n)
                        }
                    }
                }, t.prototype.send = function(e) {
                    this.resetKeepAlive();
                    var t = c.stringify(e);
                    this.bytesSent += t.length, this.$.incrementCounter("bytes_sent", t.length);
                    var n = a.splitStringBySize(t, 16384);
                    n.length > 1 && this.jn(n.length + "");
                    for (var r = 0; r < n.length; r++) this.jn(n[r])
                }, t.prototype.An = function() { this.Sn = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null) }, t.prototype.wn = function() { this.Sn || (this.de("WebSocket is closing itself"), this.An(), this.onDisconnect && (this.onDisconnect(this.bn), this.onDisconnect = null)) }, t.prototype.close = function() { this.Sn || (this.de("WebSocket is being closed"), this.An()) }, t.prototype.resetKeepAlive = function() {
                    var e = this;
                    clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() { e.mySock && e.jn("0"), e.resetKeepAlive() }, Math.floor(45e3))
                }, t.prototype.jn = function(e) { try { this.mySock.send(e) } catch (e) { this.de("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.wn.bind(this), 0) } }, t.responsesRequiredToBeHealthy = 2, t.healthyTimeout = 3e4, t
            }();
            t.WebSocketConnection = f
        }).call(t, n(27))
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = function() {
            function e() {}
            return e.prototype.put = function(e, t, n, r) {}, e.prototype.merge = function(e, t, n, r) {}, e.prototype.refreshAuthToken = function(e) {}, e.prototype.onDisconnectPut = function(e, t, n) {}, e.prototype.onDisconnectMerge = function(e, t, n) {}, e.prototype.onDisconnectCancel = function(e, t) {}, e.prototype.reportStats = function(e) {}, e
        }();
        t.ServerActions = r
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(24),
            i = n(3),
            o = n(5),
            a = n(4),
            s = function() {
                function e(t) { this.Vn = new r.IndexedFilter(t.getIndex()), this.me = t.getIndex(), this.Qn = e.qn(t), this.Un = e.Bn(t) }
                return e.prototype.getStartPost = function() { return this.Qn }, e.prototype.getEndPost = function() { return this.Un }, e.prototype.matches = function(e) { return this.me.compare(this.getStartPost(), e) <= 0 && this.me.compare(e, this.getEndPost()) <= 0 }, e.prototype.updateChild = function(e, t, n, r, i, s) { return this.matches(new o.NamedNode(t, n)) || (n = a.ChildrenNode.EMPTY_NODE), this.Vn.updateChild(e, t, n, r, i, s) }, e.prototype.updateFullNode = function(e, t, n) {
                    t.isLeafNode() && (t = a.ChildrenNode.EMPTY_NODE);
                    var r = t.withIndex(this.me);
                    r = r.updatePriority(a.ChildrenNode.EMPTY_NODE);
                    var s = this;
                    return t.forEachChild(i.PRIORITY_INDEX, function(e, t) { s.matches(new o.NamedNode(e, t)) || (r = r.updateImmediateChild(e, a.ChildrenNode.EMPTY_NODE)) }), this.Vn.updateFullNode(e, r, n)
                }, e.prototype.updatePriority = function(e, t) { return e }, e.prototype.filtersNodes = function() { return !0 }, e.prototype.getIndexedFilter = function() { return this.Vn }, e.prototype.getIndex = function() { return this.me }, e.qn = function(e) { if (e.hasStart()) { var t = e.getIndexStartName(); return e.getIndex().makePost(e.getIndexStartValue(), t) } return e.getIndex().minPost() }, e.Bn = function(e) { if (e.hasEnd()) { var t = e.getIndexEndName(); return e.getIndex().makePost(e.getIndexEndValue(), t) } return e.getIndex().maxPost() }, e
            }();
        t.RangedFilter = s
    }, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) { e.exports = n(79) }, function(e, t, n) {
        "use strict";

        function r(t) {
            var n = t.INTERNAL.registerService("database", function(e, t, n) { return l.RepoManager.getInstance().databaseFromApp(e, n) }, { Reference: s.Reference, Query: a.Query, Database: o.Database, enableLogging: u.enableLogging, INTERNAL: h, ServerValue: d, TEST_ACCESS: c }, null, !0);
            p.isNodeSdk() && (e.exports = n)
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(6),
            o = n(32);
        t.Database = o.Database;
        var a = n(36);
        t.Query = a.Query;
        var s = n(21);
        t.Reference = s.Reference;
        var u = n(1);
        t.enableLogging = u.enableLogging;
        var l = n(26),
            h = n(111),
            c = n(112),
            p = n(0),
            d = o.Database.ServerValue;
        t.ServerValue = d, t.registerDatabase = r, r(i.default);
        var f = n(22);
        t.DataSnapshot = f.DataSnapshot;
        var _ = n(35);
        t.OnDisconnect = _.OnDisconnect
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e(e) { this.Hn = e, this.Gn = "firebase:" }
                return e.prototype.set = function(e, t) { null == t ? this.Hn.removeItem(this.Kn(e)) : this.Hn.setItem(this.Kn(e), r.stringify(t)) }, e.prototype.get = function(e) { var t = this.Hn.getItem(this.Kn(e)); return null == t ? null : r.jsonEval(t) }, e.prototype.remove = function(e) { this.Hn.removeItem(this.Kn(e)) }, e.prototype.Kn = function(e) { return this.Gn + e }, e.prototype.toString = function() { return "" + this.Hn }, e
            }();
        t.DOMStorageWrapper = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e() { this.Yn = {}, this.isInMemoryStorage = !0 }
                return e.prototype.set = function(e, t) { null == t ? delete this.Yn[e] : this.Yn[e] = t }, e.prototype.get = function(e) { return r.contains(this.Yn, e) ? this.Yn[e] : null }, e.prototype.remove = function(e) { delete this.Yn[e] }, e
            }();
        t.MemoryStorage = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e(e, t) { this.committed = e, this.snapshot = t }
                return e.prototype.toJSON = function() { return r.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length), { committed: this.committed, snapshot: this.snapshot.toJSON() } }, e
            }();
        t.TransactionResult = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0);
        t.nextPushId = function() {
            var e = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
                t = 0,
                n = [];
            return function(i) {
                var o = i === t;
                t = i;
                var a, s = Array(8);
                for (a = 7; a >= 0; a--) s[a] = e.charAt(i % 64), i = Math.floor(i / 64);
                r.assert(0 === i, "Cannot push at time == 0");
                var u = s.join("");
                if (o) {
                    for (a = 11; a >= 0 && 63 === n[a]; a--) n[a] = 0;
                    n[a]++
                }
                else
                    for (a = 0; a < 12; a++) n[a] = Math.floor(64 * Math.random());
                for (a = 0; a < 12; a++) u += e.charAt(n[a]);
                return r.assert(20 === u.length, "nextPushId: Length should be 20."), u
            }
        }()
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(22),
            i = n(85),
            o = n(0),
            a = n(0),
            s = function() {
                function e(e, t, n) { this.Xn = e, this.zn = t, this.Jn = n }
                return e.prototype.respondsTo = function(e) { return "value" === e }, e.prototype.createEvent = function(e, t) { var n = t.getQueryParams().getIndex(); return new i.DataEvent("value", this, new r.DataSnapshot(e.snapshotNode, t.getRef(), n)) }, e.prototype.getEventRunner = function(e) { var t = this.Jn; if ("cancel" === e.getEventType()) { a.assert(this.zn, "Raising a cancel event on a listener with no cancel callback"); var n = this.zn; return function() { n.call(t, e.error) } } var r = this.Xn; return function() { r.call(t, e.snapshot) } }, e.prototype.createCancelEvent = function(e, t) { return this.zn ? new i.CancelEvent(this, e, t) : null }, e.prototype.matches = function(t) { return t instanceof e && (!t.Xn || !this.Xn || t.Xn === this.Xn && t.Jn === this.Jn) }, e.prototype.hasAnyCallback = function() { return null !== this.Xn }, e
            }();
        t.ValueEventRegistration = s;
        var u = function() {
            function e(e, t, n) { this.$n = e, this.zn = t, this.Jn = n }
            return e.prototype.respondsTo = function(e) { var t = "children_added" === e ? "child_added" : e; return t = "children_removed" === t ? "child_removed" : t, o.contains(this.$n, t) }, e.prototype.createCancelEvent = function(e, t) { return this.zn ? new i.CancelEvent(this, e, t) : null }, e.prototype.createEvent = function(e, t) {
                a.assert(null != e.childName, "Child events should have a childName.");
                var n = t.getRef().child(e.childName),
                    o = t.getQueryParams().getIndex();
                return new i.DataEvent(e.type, this, new r.DataSnapshot(e.snapshotNode, n, o), e.prevName)
            }, e.prototype.getEventRunner = function(e) { var t = this.Jn; if ("cancel" === e.getEventType()) { a.assert(this.zn, "Raising a cancel event on a listener with no cancel callback"); var n = this.zn; return function() { n.call(t, e.error) } } var r = this.$n[e.eventType]; return function() { r.call(t, e.snapshot, e.prevName) } }, e.prototype.matches = function(t) {
                if (t instanceof e) {
                    if (!this.$n || !t.$n) return !0;
                    if (this.Jn === t.Jn) {
                        var n = o.getCount(t.$n);
                        if (n === o.getCount(this.$n)) {
                            if (1 === n) {
                                var r = o.getAnyKey(t.$n),
                                    i = o.getAnyKey(this.$n);
                                return !(i !== r || t.$n[r] && this.$n[i] && t.$n[r] !== this.$n[i])
                            }
                            return o.every(this.$n, function(e, n) { return t.$n[e] === n })
                        }
                    }
                }
                return !1
            }, e.prototype.hasAnyCallback = function() { return null !== this.$n }, e
        }();
        t.ChildEventRegistration = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = function() {
                function e(e, t, n, r) { this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r }
                return e.prototype.getPath = function() { var e = this.snapshot.getRef(); return "value" === this.eventType ? e.path : e.getParent().path }, e.prototype.getEventType = function() { return this.eventType }, e.prototype.getEventRunner = function() { return this.eventRegistration.getEventRunner(this) }, e.prototype.toString = function() { return this.getPath() + ":" + this.eventType + ":" + r.stringify(this.snapshot.exportVal()) }, e
            }();
        t.DataEvent = i;
        var o = function() {
            function e(e, t, n) { this.eventRegistration = e, this.error = t, this.path = n }
            return e.prototype.getPath = function() { return this.path }, e.prototype.getEventType = function() { return "cancel" }, e.prototype.getEventRunner = function() { return this.eventRegistration.getEventRunner(this) }, e.prototype.toString = function() { return this.path + ":cancel" }, e
        }();
        t.CancelEvent = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(1),
            o = n(87),
            a = n(4),
            s = n(0),
            u = n(23),
            l = n(88),
            h = n(89),
            c = n(8),
            p = n(46),
            d = n(2),
            f = n(47),
            _ = n(95),
            y = function() {
                function e(e) { this.Zn = e, this.er = u.ImmutableTree.Empty, this.tr = new _.WriteTree, this.nr = {}, this.rr = {} }
                return e.prototype.applyUserOverwrite = function(e, t, n, r) { return this.tr.addOverwrite(e, t, n, r), r ? this.ir(new p.Overwrite(c.OperationSource.User, e, t)) : [] }, e.prototype.applyUserMerge = function(e, t, n) { this.tr.addMerge(e, t, n); var r = u.ImmutableTree.fromObject(t); return this.ir(new h.Merge(c.OperationSource.User, e, r)) }, e.prototype.ackUserWrite = function(e, t) { void 0 === t && (t = !1); var n = this.tr.getWrite(e); if (this.tr.removeWrite(e)) { var r = u.ImmutableTree.Empty; return null != n.snap ? r = r.set(d.Path.Empty, !0) : s.forEach(n.children, function(e, t) { r = r.set(new d.Path(e), t) }), this.ir(new o.AckUserWrite(n.path, r, t)) } return [] }, e.prototype.applyServerOverwrite = function(e, t) { return this.ir(new p.Overwrite(c.OperationSource.Server, e, t)) }, e.prototype.applyServerMerge = function(e, t) { var n = u.ImmutableTree.fromObject(t); return this.ir(new h.Merge(c.OperationSource.Server, e, n)) }, e.prototype.applyListenComplete = function(e) { return this.ir(new l.ListenComplete(c.OperationSource.Server, e)) }, e.prototype.applyTaggedQueryOverwrite = function(t, n, r) {
                    var i = this.or(r);
                    if (null != i) {
                        var o = e.ar(i),
                            a = o.path,
                            s = o.queryId,
                            u = d.Path.relativePath(a, t),
                            l = new p.Overwrite(c.OperationSource.forServerTaggedQuery(s), u, n);
                        return this.sr(a, l)
                    }
                    return []
                }, e.prototype.applyTaggedQueryMerge = function(t, n, r) {
                    var i = this.or(r);
                    if (i) {
                        var o = e.ar(i),
                            a = o.path,
                            s = o.queryId,
                            l = d.Path.relativePath(a, t),
                            p = u.ImmutableTree.fromObject(n),
                            f = new h.Merge(c.OperationSource.forServerTaggedQuery(s), l, p);
                        return this.sr(a, f)
                    }
                    return []
                }, e.prototype.applyTaggedListenComplete = function(t, n) {
                    var r = this.or(n);
                    if (r) {
                        var i = e.ar(r),
                            o = i.path,
                            a = i.queryId,
                            s = d.Path.relativePath(o, t),
                            u = new l.ListenComplete(c.OperationSource.forServerTaggedQuery(a), s);
                        return this.sr(o, u)
                    }
                    return []
                }, e.prototype.addEventRegistration = function(t, n) {
                    var i = t.path,
                        o = null,
                        s = !1;
                    this.er.foreachOnPath(i, function(e, t) {
                        var n = d.Path.relativePath(e, i);
                        o = o || t.getCompleteServerCache(n), s = s || t.hasCompleteView()
                    });
                    var u = this.er.get(i);
                    u ? (s = s || u.hasCompleteView(), o = o || u.getCompleteServerCache(d.Path.Empty)) : (u = new f.SyncPoint, this.er = this.er.set(i, u));
                    var l;
                    null != o ? l = !0 : (l = !1, o = a.ChildrenNode.EMPTY_NODE, this.er.subtree(i).foreachChild(function(e, t) {
                        var n = t.getCompleteServerCache(d.Path.Empty);
                        n && (o = o.updateImmediateChild(e, n))
                    }));
                    var h = u.viewExistsForQuery(t);
                    if (!h && !t.getQueryParams().loadsAllData()) {
                        var c = e.ur(t);
                        r.assert(!(c in this.rr), "View does not exist, but we have a tag");
                        var p = e.lr();
                        this.rr[c] = p, this.nr["_" + p] = c
                    }
                    var _ = this.tr.childWrites(i),
                        y = u.addEventRegistration(t, n, _, o, l);
                    if (!h && !s) {
                        var v = u.viewForQuery(t);
                        y = y.concat(this.hr(t, v))
                    }
                    return y
                }, e.prototype.removeEventRegistration = function(t, n, r) {
                    var i = this,
                        o = t.path,
                        a = this.er.get(o),
                        s = [];
                    if (a && ("default" === t.queryIdentifier() || a.viewExistsForQuery(t))) {
                        var u = a.removeEventRegistration(t, n, r);
                        a.isEmpty() && (this.er = this.er.remove(o));
                        var l = u.removed;
                        s = u.events;
                        var h = -1 !== l.findIndex(function(e) { return e.getQueryParams().loadsAllData() }),
                            c = this.er.findOnPath(o, function(e, t) { return t.hasCompleteView() });
                        if (h && !c) {
                            var p = this.er.subtree(o);
                            if (!p.isEmpty())
                                for (var d = this.cr(p), f = 0; f < d.length; ++f) {
                                    var _ = d[f],
                                        y = _.getQuery(),
                                        v = this.pr(_);
                                    this.Zn.startListening(e.dr(y), this.fr(y), v.hashFn, v.onComplete)
                                }
                        }!c && l.length > 0 && !r && (h ? this.Zn.stopListening(e.dr(t), null) : l.forEach(function(t) {
                            var n = i.rr[e.ur(t)];
                            i.Zn.stopListening(e.dr(t), n)
                        })), this._r(l)
                    }
                    return s
                }, e.prototype.calcCompleteEventCache = function(e, t) {
                    var n = this.tr,
                        r = this.er.findOnPath(e, function(t, n) {
                            var r = d.Path.relativePath(t, e),
                                i = n.getCompleteServerCache(r);
                            if (i) return i
                        });
                    return n.calcCompleteEventCache(e, r, t, !0)
                }, e.prototype.cr = function(e) { return e.fold(function(e, t, n) { if (t && t.hasCompleteView()) return [t.getCompleteView()]; var r = []; return t && (r = t.getQueryViews()), s.forEach(n, function(e, t) { r = r.concat(t) }), r }) }, e.prototype._r = function(t) {
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        if (!r.getQueryParams().loadsAllData()) {
                            var i = e.ur(r),
                                o = this.rr[i];
                            delete this.rr[i], delete this.nr["_" + o]
                        }
                    }
                }, e.dr = function(e) { return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e }, e.prototype.hr = function(t, n) {
                    var i = t.path,
                        o = this.fr(t),
                        a = this.pr(n),
                        u = this.Zn.startListening(e.dr(t), o, a.hashFn, a.onComplete),
                        l = this.er.subtree(i);
                    if (o) r.assert(!l.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
                    else
                        for (var h = l.fold(function(e, t, n) { if (!e.isEmpty() && t && t.hasCompleteView()) return [t.getCompleteView().getQuery()]; var r = []; return t && (r = r.concat(t.getQueryViews().map(function(e) { return e.getQuery() }))), s.forEach(n, function(e, t) { r = r.concat(t) }), r }), c = 0; c < h.length; ++c) {
                            var p = h[c];
                            this.Zn.stopListening(e.dr(p), this.fr(p))
                        }
                    return u
                }, e.prototype.pr = function(e) {
                    var t = this,
                        n = e.getQuery(),
                        r = this.fr(n);
                    return { hashFn: function() { return (e.getServerCache() || a.ChildrenNode.EMPTY_NODE).hash() }, onComplete: function(e) { if ("ok" === e) return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path); var o = i.errorForServerCode(e, n); return t.removeEventRegistration(n, null, o) } }
                }, e.ur = function(e) { return e.path + "$" + e.queryIdentifier() }, e.ar = function(e) { var t = e.indexOf("$"); return r.assert(-1 !== t && t < e.length - 1, "Bad queryKey."), { queryId: e.substr(t + 1), path: new d.Path(e.substr(0, t)) } }, e.prototype.or = function(e) { return this.nr["_" + e] }, e.prototype.fr = function(t) { var n = e.ur(t); return s.safeGet(this.rr, n) }, e.lr = function() { return e.yr++ }, e.prototype.sr = function(e, t) {
                    var n = this.er.get(e);
                    r.assert(n, "Missing sync point for query tag that we're tracking");
                    var i = this.tr.childWrites(e);
                    return n.applyOperation(t, i, null)
                }, e.prototype.ir = function(e) { return this.vr(e, this.er, null, this.tr.childWrites(d.Path.Empty)) }, e.prototype.vr = function(e, t, n, r) {
                    if (e.path.isEmpty()) return this.gr(e, t, n, r);
                    var i = t.get(d.Path.Empty);
                    null == n && null != i && (n = i.getCompleteServerCache(d.Path.Empty));
                    var o = [],
                        a = e.path.getFront(),
                        s = e.operationForChild(a),
                        u = t.children.get(a);
                    if (u && s) {
                        var l = n ? n.getImmediateChild(a) : null,
                            h = r.child(a);
                        o = o.concat(this.vr(s, u, l, h))
                    }
                    return i && (o = o.concat(i.applyOperation(e, r, n))), o
                }, e.prototype.gr = function(e, t, n, r) {
                    var i = this,
                        o = t.get(d.Path.Empty);
                    null == n && null != o && (n = o.getCompleteServerCache(d.Path.Empty));
                    var a = [];
                    return t.children.inorderTraversal(function(t, o) {
                        var s = n ? n.getImmediateChild(t) : null,
                            u = r.child(t),
                            l = e.operationForChild(t);
                        l && (a = a.concat(i.gr(l, o, s, u)))
                    }), o && (a = a.concat(o.applyOperation(e, r, n))), a
                }, e.yr = 1, e
            }();
        t.SyncTree = y
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(2),
            o = n(8),
            a = function() {
                function e(e, t, n) { this.path = e, this.affectedTree = t, this.revert = n, this.type = o.OperationType.ACK_USER_WRITE, this.source = o.OperationSource.User }
                return e.prototype.operationForChild = function(t) { if (this.path.isEmpty()) { if (null != this.affectedTree.value) return r.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this; var n = this.affectedTree.subtree(new i.Path(t)); return new e(i.Path.Empty, n, this.revert) } return r.assert(this.path.getFront() === t, "operationForChild called for unrelated child."), new e(this.path.popFront(), this.affectedTree, this.revert) }, e
            }();
        t.AckUserWrite = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(2),
            i = n(8),
            o = function() {
                function e(e, t) { this.source = e, this.path = t, this.type = i.OperationType.LISTEN_COMPLETE }
                return e.prototype.operationForChild = function(t) { return this.path.isEmpty() ? new e(this.source, r.Path.Empty) : new e(this.source, this.path.popFront()) }, e
            }();
        t.ListenComplete = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(8),
            i = n(46),
            o = n(2),
            a = n(0),
            s = function() {
                function e(e, t, n) { this.source = e, this.path = t, this.children = n, this.type = r.OperationType.MERGE }
                return e.prototype.operationForChild = function(t) { if (this.path.isEmpty()) { var n = this.children.subtree(new o.Path(t)); return n.isEmpty() ? null : n.value ? new i.Overwrite(this.source, o.Path.Empty, n.value) : new e(this.source, o.Path.Empty, n) } return a.assert(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, this.path.popFront(), this.children) }, e.prototype.toString = function() { return "Operation(" + this.path + ": " + this.source + " merge: " + this.children + ")" }, e
            }();
        t.Merge = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(24),
            i = n(91),
            o = n(4),
            a = n(18),
            s = n(48),
            u = n(94),
            l = n(0),
            h = n(8),
            c = n(9),
            p = n(3),
            d = function() {
                function e(e, t) {
                    this.mr = e, this.Cr = [];
                    var n = this.mr.getQueryParams(),
                        l = new r.IndexedFilter(n.getIndex()),
                        h = n.getNodeFilter();
                    this.Er = new i.ViewProcessor(h);
                    var c = t.getServerCache(),
                        p = t.getEventCache(),
                        d = l.updateFullNode(o.ChildrenNode.EMPTY_NODE, c.getNode(), null),
                        f = h.updateFullNode(o.ChildrenNode.EMPTY_NODE, p.getNode(), null),
                        _ = new a.CacheNode(d, c.isFullyInitialized(), l.filtersNodes()),
                        y = new a.CacheNode(f, p.isFullyInitialized(), h.filtersNodes());
                    this.Nr = new s.ViewCache(y, _), this.Pr = new u.EventGenerator(this.mr)
                }
                return e.prototype.getQuery = function() { return this.mr }, e.prototype.getServerCache = function() { return this.Nr.getServerCache().getNode() }, e.prototype.getCompleteServerCache = function(e) { var t = this.Nr.getCompleteServerSnap(); return t && (this.mr.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null }, e.prototype.isEmpty = function() { return 0 === this.Cr.length }, e.prototype.addEventRegistration = function(e) { this.Cr.push(e) }, e.prototype.removeEventRegistration = function(e, t) {
                    var n = [];
                    if (t) {
                        l.assert(null == e, "A cancel should cancel all event registrations.");
                        var r = this.mr.path;
                        this.Cr.forEach(function(e) {
                            t = t;
                            var i = e.createCancelEvent(t, r);
                            i && n.push(i)
                        })
                    }
                    if (e) { for (var i = [], o = 0; o < this.Cr.length; ++o) { var a = this.Cr[o]; if (a.matches(e)) { if (e.hasAnyCallback()) { i = i.concat(this.Cr.slice(o + 1)); break } } else i.push(a) } this.Cr = i }
                    else this.Cr = [];
                    return n
                }, e.prototype.applyOperation = function(e, t, n) {
                    e.type === h.OperationType.MERGE && null !== e.source.queryId && (l.assert(this.Nr.getCompleteServerSnap(), "We should always have a full cache before handling merges"), l.assert(this.Nr.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
                    var r = this.Nr,
                        i = this.Er.applyOperation(r, e, t, n);
                    return this.Er.assertIndexed(i.viewCache), l.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.Nr = i.viewCache, this.br(i.changes, i.viewCache.getEventCache().getNode(), null)
                }, e.prototype.getInitialEvents = function(e) {
                    var t = this.Nr.getEventCache(),
                        n = [];
                    return t.getNode().isLeafNode() || t.getNode().forEachChild(p.PRIORITY_INDEX, function(e, t) { n.push(c.Change.childAddedChange(e, t)) }), t.isFullyInitialized() && n.push(c.Change.valueChange(t.getNode())), this.br(n, t.getNode(), e)
                }, e.prototype.br = function(e, t, n) { var r = n ? [n] : this.Cr; return this.Pr.generateEventsForChanges(e, t, r) }, e
            }();
        t.View = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(8),
            i = n(0),
            o = n(92),
            a = n(9),
            s = n(4),
            u = n(10),
            l = n(23),
            h = n(2),
            c = n(93),
            p = function() {
                function e(e, t) { this.viewCache = e, this.changes = t }
                return e
            }();
        t.ProcessorResult = p;
        var d = function() {
            function e(e) { this.Sr = e }
            return e.prototype.assertIndexed = function(e) { i.assert(e.getEventCache().getNode().isIndexed(this.Sr.getIndex()), "Event snap not indexed"), i.assert(e.getServerCache().getNode().isIndexed(this.Sr.getIndex()), "Server snap not indexed") }, e.prototype.applyOperation = function(t, n, a, s) {
                var u, l, h = new o.ChildChangeAccumulator;
                if (n.type === r.OperationType.OVERWRITE) {
                    var c = n;
                    c.source.fromUser ? u = this.Tr(t, c.path, c.snap, a, s, h) : (i.assert(c.source.fromServer, "Unknown source."), l = c.source.tagged || t.getServerCache().isFiltered() && !c.path.isEmpty(), u = this.wr(t, c.path, c.snap, a, s, l, h))
                }
                else if (n.type === r.OperationType.MERGE) {
                    var d = n;
                    d.source.fromUser ? u = this.Ir(t, d.path, d.children, a, s, h) : (i.assert(d.source.fromServer, "Unknown source."), l = d.source.tagged || t.getServerCache().isFiltered(), u = this.Rr(t, d.path, d.children, a, s, l, h))
                }
                else if (n.type === r.OperationType.ACK_USER_WRITE) {
                    var f = n;
                    u = f.revert ? this.Or(t, f.path, a, s, h) : this.Ar(t, f.path, f.affectedTree, a, s, h)
                }
                else {
                    if (n.type !== r.OperationType.LISTEN_COMPLETE) throw i.assertionError("Unknown operation type: " + n.type);
                    u = this.Dr(t, n.path, a, h)
                }
                var _ = h.getChanges();
                return e.Mr(t, u, _), new p(u, _)
            }, e.Mr = function(e, t, n) {
                var r = t.getEventCache();
                if (r.isFullyInitialized()) {
                    var i = r.getNode().isLeafNode() || r.getNode().isEmpty(),
                        o = e.getCompleteEventSnap();
                    (n.length > 0 || !e.getEventCache().isFullyInitialized() || i && !r.getNode().equals(o) || !r.getNode().getPriority().equals(o.getPriority())) && n.push(a.Change.valueChange(t.getCompleteEventSnap()))
                }
            }, e.prototype.Lr = function(e, t, n, r, o) {
                var a = e.getEventCache();
                if (null != n.shadowingWrite(t)) return e;
                var u = void 0,
                    l = void 0;
                if (t.isEmpty())
                    if (i.assert(e.getServerCache().isFullyInitialized(), "If change path is empty, we must have complete server data"), e.getServerCache().isFiltered()) {
                        var h = e.getCompleteServerSnap(),
                            c = h instanceof s.ChildrenNode ? h : s.ChildrenNode.EMPTY_NODE,
                            p = n.calcCompleteEventChildren(c);
                        u = this.Sr.updateFullNode(e.getEventCache().getNode(), p, o)
                    }
                else {
                    var d = n.calcCompleteEventCache(e.getCompleteServerSnap());
                    u = this.Sr.updateFullNode(e.getEventCache().getNode(), d, o)
                }
                else {
                    var f = t.getFront();
                    if (".priority" == f) {
                        i.assert(1 == t.getLength(), "Can't have a priority with additional path components");
                        var _ = a.getNode();
                        l = e.getServerCache().getNode();
                        var y = n.calcEventCacheAfterServerOverwrite(t, _, l);
                        u = null != y ? this.Sr.updatePriority(_, y) : a.getNode()
                    }
                    else {
                        var v = t.popFront(),
                            g = void 0;
                        if (a.isCompleteForChild(f)) {
                            l = e.getServerCache().getNode();
                            var m = n.calcEventCacheAfterServerOverwrite(t, a.getNode(), l);
                            g = null != m ? a.getNode().getImmediateChild(f).updateChild(v, m) : a.getNode().getImmediateChild(f)
                        }
                        else g = n.calcCompleteChild(f, e.getServerCache());
                        u = null != g ? this.Sr.updateChild(a.getNode(), f, g, v, r, o) : a.getNode()
                    }
                }
                return e.updateEventSnap(u, a.isFullyInitialized() || t.isEmpty(), this.Sr.filtersNodes())
            }, e.prototype.wr = function(e, t, n, r, i, o, a) {
                var s, u = e.getServerCache(),
                    l = o ? this.Sr : this.Sr.getIndexedFilter();
                if (t.isEmpty()) s = l.updateFullNode(u.getNode(), n, null);
                else if (l.filtersNodes() && !u.isFiltered()) {
                    var h = u.getNode().updateChild(t, n);
                    s = l.updateFullNode(u.getNode(), h, null)
                }
                else {
                    var p = t.getFront();
                    if (!u.isCompleteForPath(t) && t.getLength() > 1) return e;
                    var d = t.popFront(),
                        f = u.getNode().getImmediateChild(p),
                        _ = f.updateChild(d, n);
                    s = ".priority" == p ? l.updatePriority(u.getNode(), _) : l.updateChild(u.getNode(), p, _, d, c.NO_COMPLETE_CHILD_SOURCE, null)
                }
                var y = e.updateServerSnap(s, u.isFullyInitialized() || t.isEmpty(), l.filtersNodes()),
                    v = new c.WriteTreeCompleteChildSource(r, y, i);
                return this.Lr(y, t, r, v, a)
            }, e.prototype.Tr = function(e, t, n, r, i, o) {
                var a, u, l = e.getEventCache(),
                    h = new c.WriteTreeCompleteChildSource(r, e, i);
                if (t.isEmpty()) u = this.Sr.updateFullNode(e.getEventCache().getNode(), n, o), a = e.updateEventSnap(u, !0, this.Sr.filtersNodes());
                else {
                    var p = t.getFront();
                    if (".priority" === p) u = this.Sr.updatePriority(e.getEventCache().getNode(), n), a = e.updateEventSnap(u, l.isFullyInitialized(), l.isFiltered());
                    else {
                        var d = t.popFront(),
                            f = l.getNode().getImmediateChild(p),
                            _ = void 0;
                        if (d.isEmpty()) _ = n;
                        else {
                            var y = h.getCompleteChild(p);
                            _ = null != y ? ".priority" === d.getBack() && y.getChild(d.parent()).isEmpty() ? y : y.updateChild(d, n) : s.ChildrenNode.EMPTY_NODE
                        }
                        if (f.equals(_)) a = e;
                        else {
                            var v = this.Sr.updateChild(l.getNode(), p, _, d, h, o);
                            a = e.updateEventSnap(v, l.isFullyInitialized(), this.Sr.filtersNodes())
                        }
                    }
                }
                return a
            }, e.Fr = function(e, t) { return e.getEventCache().isCompleteForChild(t) }, e.prototype.Ir = function(t, n, r, i, o, a) {
                var s = this,
                    u = t;
                return r.foreach(function(r, l) {
                    var h = n.child(r);
                    e.Fr(t, h.getFront()) && (u = s.Tr(u, h, l, i, o, a))
                }), r.foreach(function(r, l) {
                    var h = n.child(r);
                    e.Fr(t, h.getFront()) || (u = s.Tr(u, h, l, i, o, a))
                }), u
            }, e.prototype.xr = function(e, t) { return t.foreach(function(t, n) { e = e.updateChild(t, n) }), e }, e.prototype.Rr = function(e, t, n, r, i, o, a) {
                var s = this;
                if (e.getServerCache().getNode().isEmpty() && !e.getServerCache().isFullyInitialized()) return e;
                var u, c = e;
                u = t.isEmpty() ? n : l.ImmutableTree.Empty.setTree(t, n);
                var p = e.getServerCache().getNode();
                return u.children.inorderTraversal(function(t, n) {
                    if (p.hasChild(t)) {
                        var u = e.getServerCache().getNode().getImmediateChild(t),
                            l = s.xr(u, n);
                        c = s.wr(c, new h.Path(t), l, r, i, o, a)
                    }
                }), u.children.inorderTraversal(function(t, n) {
                    var u = !e.getServerCache().isCompleteForChild(t) && null == n.value;
                    if (!p.hasChild(t) && !u) {
                        var l = e.getServerCache().getNode().getImmediateChild(t),
                            d = s.xr(l, n);
                        c = s.wr(c, new h.Path(t), d, r, i, o, a)
                    }
                }), c
            }, e.prototype.Ar = function(e, t, n, r, i, o) {
                if (null != r.shadowingWrite(t)) return e;
                var a = e.getServerCache().isFiltered(),
                    s = e.getServerCache();
                if (null != n.value) { if (t.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(t)) return this.wr(e, t, s.getNode().getChild(t), r, i, a, o); if (t.isEmpty()) { var c = l.ImmutableTree.Empty; return s.getNode().forEachChild(u.KEY_INDEX, function(e, t) { c = c.set(new h.Path(e), t) }), this.Rr(e, t, c, r, i, a, o) } return e }
                var p = l.ImmutableTree.Empty;
                return n.foreach(function(e, n) {
                    var r = t.child(e);
                    s.isCompleteForPath(r) && (p = p.set(e, s.getNode().getChild(r)))
                }), this.Rr(e, t, p, r, i, a, o)
            }, e.prototype.Dr = function(e, t, n, r) {
                var i = e.getServerCache(),
                    o = e.updateServerSnap(i.getNode(), i.isFullyInitialized() || t.isEmpty(), i.isFiltered());
                return this.Lr(o, t, n, c.NO_COMPLETE_CHILD_SOURCE, r)
            }, e.prototype.Or = function(e, t, n, r, o) {
                var a;
                if (null != n.shadowingWrite(t)) return e;
                var u = new c.WriteTreeCompleteChildSource(n, e, r),
                    l = e.getEventCache().getNode(),
                    p = void 0;
                if (t.isEmpty() || ".priority" === t.getFront()) {
                    var d = void 0;
                    if (e.getServerCache().isFullyInitialized()) d = n.calcCompleteEventCache(e.getCompleteServerSnap());
                    else {
                        var f = e.getServerCache().getNode();
                        i.assert(f instanceof s.ChildrenNode, "serverChildren would be complete if leaf node"), d = n.calcCompleteEventChildren(f)
                    }
                    d = d, p = this.Sr.updateFullNode(l, d, o)
                }
                else {
                    var _ = t.getFront(),
                        y = n.calcCompleteChild(_, e.getServerCache());
                    null == y && e.getServerCache().isCompleteForChild(_) && (y = l.getImmediateChild(_)), p = null != y ? this.Sr.updateChild(l, _, y, t.popFront(), u, o) : e.getEventCache().getNode().hasChild(_) ? this.Sr.updateChild(l, _, s.ChildrenNode.EMPTY_NODE, t.popFront(), u, o) : l, p.isEmpty() && e.getServerCache().isFullyInitialized() && (a = n.calcCompleteEventCache(e.getCompleteServerSnap()), a.isLeafNode() && (p = this.Sr.updateFullNode(p, a, o)))
                }
                return a = e.getServerCache().isFullyInitialized() || null != n.shadowingWrite(h.Path.Empty), e.updateEventSnap(p, a, this.Sr.filtersNodes())
            }, e
        }();
        t.ViewProcessor = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(9),
            o = n(0),
            a = function() {
                function e() { this.kr = {} }
                return e.prototype.trackChildChange = function(e) {
                    var t = e.type,
                        n = e.childName;
                    o.assert(t == i.Change.CHILD_ADDED || t == i.Change.CHILD_CHANGED || t == i.Change.CHILD_REMOVED, "Only child changes supported for tracking"), o.assert(".priority" !== n, "Only non-priority child changes can be tracked.");
                    var a = r.safeGet(this.kr, n);
                    if (a) {
                        var s = a.type;
                        if (t == i.Change.CHILD_ADDED && s == i.Change.CHILD_REMOVED) this.kr[n] = i.Change.childChangedChange(n, e.snapshotNode, a.snapshotNode);
                        else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_ADDED) delete this.kr[n];
                        else if (t == i.Change.CHILD_REMOVED && s == i.Change.CHILD_CHANGED) this.kr[n] = i.Change.childRemovedChange(n, a.oldSnap);
                        else if (t == i.Change.CHILD_CHANGED && s == i.Change.CHILD_ADDED) this.kr[n] = i.Change.childAddedChange(n, e.snapshotNode);
                        else {
                            if (t != i.Change.CHILD_CHANGED || s != i.Change.CHILD_CHANGED) throw o.assertionError("Illegal combination of changes: " + e + " occurred after " + a);
                            this.kr[n] = i.Change.childChangedChange(n, e.snapshotNode, a.oldSnap)
                        }
                    }
                    else this.kr[n] = e
                }, e.prototype.getChanges = function() { return r.getValues(this.kr) }, e
            }();
        t.ChildChangeAccumulator = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(18),
            i = function() {
                function e() {}
                return e.prototype.getCompleteChild = function(e) { return null }, e.prototype.getChildAfterChild = function(e, t, n) { return null }, e
            }();
        t.Wr = i, t.NO_COMPLETE_CHILD_SOURCE = new i;
        var o = function() {
            function e(e, t, n) { void 0 === n && (n = null), this.jr = e, this.Nr = t, this.Vr = n }
            return e.prototype.getCompleteChild = function(e) { var t = this.Nr.getEventCache(); if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e); var n = null != this.Vr ? new r.CacheNode(this.Vr, !0, !1) : this.Nr.getServerCache(); return this.jr.calcCompleteChild(e, n) }, e.prototype.getChildAfterChild = function(e, t, n) {
                var r = null != this.Vr ? this.Vr : this.Nr.getCompleteServerSnap(),
                    i = this.jr.calcIndexedSlice(r, t, 1, n, e);
                return 0 === i.length ? null : i[0]
            }, e
        }();
        t.WriteTreeCompleteChildSource = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(5),
            i = n(9),
            o = n(0),
            a = function() {
                function e(e) { this.mr = e, this.me = this.mr.getQueryParams().getIndex() }
                return e.prototype.generateEventsForChanges = function(e, t, n) {
                    var r = this,
                        o = [],
                        a = [];
                    return e.forEach(function(e) { e.type === i.Change.CHILD_CHANGED && r.me.indexedValueChanged(e.oldSnap, e.snapshotNode) && a.push(i.Change.childMovedChange(e.childName, e.snapshotNode)) }), this.Qr(o, i.Change.CHILD_REMOVED, e, n, t), this.Qr(o, i.Change.CHILD_ADDED, e, n, t), this.Qr(o, i.Change.CHILD_MOVED, a, n, t), this.Qr(o, i.Change.CHILD_CHANGED, e, n, t), this.Qr(o, i.Change.VALUE, e, n, t), o
                }, e.prototype.Qr = function(e, t, n, r, i) {
                    var o = this,
                        a = n.filter(function(e) { return e.type === t });
                    a.sort(this.qr.bind(this)), a.forEach(function(t) {
                        var n = o.Ur(t, i);
                        r.forEach(function(r) { r.respondsTo(t.type) && e.push(r.createEvent(n, o.mr)) })
                    })
                }, e.prototype.Ur = function(e, t) { return "value" === e.type || "child_removed" === e.type ? e : (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.me), e) }, e.prototype.qr = function(e, t) {
                    if (null == e.childName || null == t.childName) throw o.assertionError("Should only compare child_ events.");
                    var n = new r.NamedNode(e.childName, e.snapshotNode),
                        i = new r.NamedNode(t.childName, t.snapshotNode);
                    return this.me.compare(n, i)
                }, e
            }();
        t.EventGenerator = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(0),
            o = n(2),
            a = n(96),
            s = n(3),
            u = n(4),
            l = function() {
                function e() { this.Br = a.CompoundWrite.Empty, this.Hr = [], this.Gr = -1 }
                return e.prototype.childWrites = function(e) { return new h(e, this) }, e.prototype.addOverwrite = function(e, t, n, r) { i.assert(n > this.Gr, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.Hr.push({ path: e, snap: t, writeId: n, visible: r }), r && (this.Br = this.Br.addWrite(e, t)), this.Gr = n }, e.prototype.addMerge = function(e, t, n) { i.assert(n > this.Gr, "Stacking an older merge on top of newer ones"), this.Hr.push({ path: e, children: t, writeId: n, visible: !0 }), this.Br = this.Br.addWrites(e, t), this.Gr = n }, e.prototype.getWrite = function(e) { for (var t = 0; t < this.Hr.length; t++) { var n = this.Hr[t]; if (n.writeId === e) return n } return null }, e.prototype.removeWrite = function(e) {
                    var t = this,
                        n = this.Hr.findIndex(function(t) { return t.writeId === e });
                    i.assert(n >= 0, "removeWrite called with nonexistent writeId.");
                    var o = this.Hr[n];
                    this.Hr.splice(n, 1);
                    for (var a = o.visible, s = !1, u = this.Hr.length - 1; a && u >= 0;) {
                        var l = this.Hr[u];
                        l.visible && (u >= n && this.Kr(l, o.path) ? a = !1 : o.path.contains(l.path) && (s = !0)), u--
                    }
                    if (a) {
                        if (s) return this.Yr(), !0;
                        if (o.snap) this.Br = this.Br.removeWrite(o.path);
                        else {
                            var h = o.children;
                            r.forEach(h, function(e) { t.Br = t.Br.removeWrite(o.path.child(e)) })
                        }
                        return !0
                    }
                    return !1
                }, e.prototype.getCompleteWriteData = function(e) { return this.Br.getCompleteNode(e) }, e.prototype.calcCompleteEventCache = function(t, n, r, i) {
                    if (r || i) {
                        var a = this.Br.childCompoundWrite(t);
                        if (!i && a.isEmpty()) return n;
                        if (i || null != n || a.hasCompleteWrite(o.Path.Empty)) {
                            var s = function(e) { return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path)) },
                                l = e.Xr(this.Hr, s, t),
                                h = n || u.ChildrenNode.EMPTY_NODE;
                            return l.apply(h)
                        }
                        return null
                    }
                    var c = this.Br.getCompleteNode(t);
                    if (null != c) return c;
                    var p = this.Br.childCompoundWrite(t);
                    if (p.isEmpty()) return n;
                    if (null != n || p.hasCompleteWrite(o.Path.Empty)) { var h = n || u.ChildrenNode.EMPTY_NODE; return p.apply(h) }
                    return null
                }, e.prototype.calcCompleteEventChildren = function(e, t) {
                    var n = u.ChildrenNode.EMPTY_NODE,
                        r = this.Br.getCompleteNode(e);
                    if (r) return r.isLeafNode() || r.forEachChild(s.PRIORITY_INDEX, function(e, t) { n = n.updateImmediateChild(e, t) }), n;
                    if (t) {
                        var i = this.Br.childCompoundWrite(e);
                        return t.forEachChild(s.PRIORITY_INDEX, function(e, t) {
                            var r = i.childCompoundWrite(new o.Path(e)).apply(t);
                            n = n.updateImmediateChild(e, r)
                        }), i.getCompleteChildren().forEach(function(e) { n = n.updateImmediateChild(e.name, e.node) }), n
                    }
                    return this.Br.childCompoundWrite(e).getCompleteChildren().forEach(function(e) { n = n.updateImmediateChild(e.name, e.node) }), n
                }, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n, r) { i.assert(n || r, "Either existingEventSnap or existingServerSnap must exist"); var o = e.child(t); if (this.Br.hasCompleteWrite(o)) return null; var a = this.Br.childCompoundWrite(o); return a.isEmpty() ? r.getChild(t) : a.apply(r.getChild(t)) }, e.prototype.calcCompleteChild = function(e, t, n) {
                    var r = e.child(t),
                        i = this.Br.getCompleteNode(r);
                    return null != i ? i : n.isCompleteForChild(t) ? this.Br.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)) : null
                }, e.prototype.shadowingWrite = function(e) { return this.Br.getCompleteNode(e) }, e.prototype.calcIndexedSlice = function(e, t, n, r, i, a) {
                    var s, u = this.Br.childCompoundWrite(e),
                        l = u.getCompleteNode(o.Path.Empty);
                    if (null != l) s = l;
                    else {
                        if (null == t) return [];
                        s = u.apply(t)
                    }
                    if (s = s.withIndex(a), s.isEmpty() || s.isLeafNode()) return [];
                    for (var h = [], c = a.getCompare(), p = i ? s.getReverseIteratorFrom(n, a) : s.getIteratorFrom(n, a), d = p.getNext(); d && h.length < r;) 0 !== c(d, n) && h.push(d), d = p.getNext();
                    return h
                }, e.prototype.Kr = function(e, t) { return e.snap ? e.path.contains(t) : !!r.findKey(e.children, function(n, r) { return e.path.child(r).contains(t) }) }, e.prototype.Yr = function() { this.Br = e.Xr(this.Hr, e.zr, o.Path.Empty), this.Hr.length > 0 ? this.Gr = this.Hr[this.Hr.length - 1].writeId : this.Gr = -1 }, e.zr = function(e) { return e.visible }, e.Xr = function(e, t, n) {
                    for (var s = a.CompoundWrite.Empty, u = 0; u < e.length; ++u) {
                        var l = e[u];
                        if (t(l)) {
                            var h = l.path,
                                c = void 0;
                            if (l.snap) n.contains(h) ? (c = o.Path.relativePath(n, h), s = s.addWrite(c, l.snap)) : h.contains(n) && (c = o.Path.relativePath(h, n), s = s.addWrite(o.Path.Empty, l.snap.getChild(c)));
                            else {
                                if (!l.children) throw i.assertionError("WriteRecord should have .snap or .children");
                                if (n.contains(h)) c = o.Path.relativePath(n, h), s = s.addWrites(c, l.children);
                                else if (h.contains(n))
                                    if (c = o.Path.relativePath(h, n), c.isEmpty()) s = s.addWrites(o.Path.Empty, l.children);
                                    else {
                                        var p = r.safeGet(l.children, c.getFront());
                                        if (p) {
                                            var d = p.getChild(c.popFront());
                                            s = s.addWrite(o.Path.Empty, d)
                                        }
                                    }
                            }
                        }
                    }
                    return s
                }, e
            }();
        t.WriteTree = l;
        var h = function() {
            function e(e, t) { this.Jr = e, this.$r = t }
            return e.prototype.calcCompleteEventCache = function(e, t, n) { return this.$r.calcCompleteEventCache(this.Jr, e, t, n) }, e.prototype.calcCompleteEventChildren = function(e) { return this.$r.calcCompleteEventChildren(this.Jr, e) }, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n) { return this.$r.calcEventCacheAfterServerOverwrite(this.Jr, e, t, n) }, e.prototype.shadowingWrite = function(e) { return this.$r.shadowingWrite(this.Jr.child(e)) }, e.prototype.calcIndexedSlice = function(e, t, n, r, i) { return this.$r.calcIndexedSlice(this.Jr, e, t, n, r, i) }, e.prototype.calcCompleteChild = function(e, t) { return this.$r.calcCompleteChild(this.Jr, e, t) }, e.prototype.child = function(t) { return new e(this.Jr.child(t), this.$r) }, e
        }();
        t.WriteTreeRef = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(23),
            i = n(2),
            o = n(0),
            a = n(5),
            s = n(3),
            u = n(0),
            l = function() {
                function e(e) { this.$r = e }
                return e.prototype.addWrite = function(t, n) {
                    if (t.isEmpty()) return new e(new r.ImmutableTree(n));
                    var o = this.$r.findRootMostValueAndPath(t);
                    if (null != o) {
                        var a = o.path,
                            s = o.value,
                            u = i.Path.relativePath(a, t);
                        return s = s.updateChild(u, n), new e(this.$r.set(a, s))
                    }
                    var l = new r.ImmutableTree(n);
                    return new e(this.$r.setTree(t, l))
                }, e.prototype.addWrites = function(e, t) { var n = this; return o.forEach(t, function(t, r) { n = n.addWrite(e.child(t), r) }), n }, e.prototype.removeWrite = function(t) { return t.isEmpty() ? e.Empty : new e(this.$r.setTree(t, r.ImmutableTree.Empty)) }, e.prototype.hasCompleteWrite = function(e) { return null != this.getCompleteNode(e) }, e.prototype.getCompleteNode = function(e) { var t = this.$r.findRootMostValueAndPath(e); return null != t ? this.$r.get(t.path).getChild(i.Path.relativePath(t.path, e)) : null }, e.prototype.getCompleteChildren = function() {
                    var e = [],
                        t = this.$r.value;
                    return null != t ? t.isLeafNode() || t.forEachChild(s.PRIORITY_INDEX, function(t, n) { e.push(new a.NamedNode(t, n)) }) : this.$r.children.inorderTraversal(function(t, n) { null != n.value && e.push(new a.NamedNode(t, n.value)) }), e
                }, e.prototype.childCompoundWrite = function(t) { if (t.isEmpty()) return this; var n = this.getCompleteNode(t); return new e(null != n ? new r.ImmutableTree(n) : this.$r.subtree(t)) }, e.prototype.isEmpty = function() { return this.$r.isEmpty() }, e.prototype.apply = function(t) { return e.Zr(i.Path.Empty, this.$r, t) }, e.Empty = new e(new r.ImmutableTree(null)), e.Zr = function(t, n, r) { if (null != n.value) return r.updateChild(t, n.value); var i = null; return n.children.inorderTraversal(function(n, o) { ".priority" === n ? (u.assert(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = e.Zr(t.child(n), o, r) }), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child(".priority"), i)), r }, e
            }();
        t.CompoundWrite = l
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(4),
            i = function() {
                function e() { this.ei = r.ChildrenNode.EMPTY_NODE }
                return e.prototype.getNode = function(e) { return this.ei.getChild(e) }, e.prototype.updateSnapshot = function(e, t) { this.ei = this.ei.updateChild(e, t) }, e
            }();
        t.SnapshotHolder = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = function() {
                function e(e) { this.ti = e }
                return e.prototype.getToken = function(e) { return this.ti.INTERNAL.getToken(e).then(null, function(e) { return e && "auth/token-not-initialized" === e.code ? (r.log("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e) }) }, e.prototype.addTokenChangeListener = function(e) { this.ti.INTERNAL.addAuthTokenListener(e) }, e.prototype.removeTokenChangeListener = function(e) { this.ti.INTERNAL.removeAuthTokenListener(e) }, e.prototype.notifyForInvalidToken = function() { var e = 'Provided authentication credentials for the app named "' + this.ti.name + '" are invalid. This usually indicates your app was not initialized correctly. '; "credential" in this.ti.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.ti.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', r.warn(e) }, e
            }();
        t.AuthTokenProvider = i
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(0),
            o = function() {
                function e() { this.ni = {} }
                return e.prototype.incrementCounter = function(e, t) { void 0 === t && (t = 1), i.contains(this.ni, e) || (this.ni[e] = 0), this.ni[e] += t }, e.prototype.get = function() { return r.deepCopy(this.ni) }, e
            }();
        t.StatsCollection = o
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(1),
            o = n(49),
            a = 1e4,
            s = 3e4,
            u = function() {
                function e(e, t) {
                    this.Z = t, this.ri = {}, this.G = new o.StatsListener(e);
                    var n = a + (s - a) * Math.random();
                    i.setTimeoutNonBlocking(this.ii.bind(this), Math.floor(n))
                }
                return e.prototype.includeStat = function(e) { this.ri[e] = !0 }, e.prototype.ii = function() {
                    var e = this,
                        t = this.G.get(),
                        n = {},
                        o = !1;
                    r.forEach(t, function(t, i) { i > 0 && r.contains(e.ri, t) && (n[t] = i, o = !0) }), o && this.Z.reportStats(n), i.setTimeoutNonBlocking(this.ii.bind(this), Math.floor(2 * Math.random() * 3e5))
                }, e
            }();
        t.StatsReporter = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = function() {
                function e() { this.oi = [], this.ai = 0 }
                return e.prototype.queueEvents = function(e) {
                    for (var t = null, n = 0; n < e.length; n++) {
                        var r = e[n],
                            i = r.getPath();
                        null === t || i.equals(t.getPath()) || (this.oi.push(t), t = null), null === t && (t = new o(i)), t.add(r)
                    }
                    t && this.oi.push(t)
                }, e.prototype.raiseEventsAtPath = function(e, t) { this.queueEvents(t), this.si(function(t) { return t.equals(e) }) }, e.prototype.raiseEventsForChangedPath = function(e, t) { this.queueEvents(t), this.si(function(t) { return t.contains(e) || e.contains(t) }) }, e.prototype.si = function(e) {
                    this.ai++;
                    for (var t = !0, n = 0; n < this.oi.length; n++) {
                        var r = this.oi[n];
                        r && (e(r.getPath()) ? (this.oi[n].raise(), this.oi[n] = null) : t = !1)
                    }
                    t && (this.oi = []), this.ai--
                }, e
            }();
        t.EventQueue = i;
        var o = function() {
            function e(e) { this.Oe = e, this.ui = [] }
            return e.prototype.add = function(e) { this.ui.push(e) }, e.prototype.raise = function() {
                for (var e = 0; e < this.ui.length; e++) {
                    var t = this.ui[e];
                    if (null !== t) {
                        this.ui[e] = null;
                        var n = t.getEventRunner();
                        r.logger && r.log("event: " + t), r.exceptionGuard(n)
                    }
                }
            }, e.prototype.getPath = function() { return this.Oe }, e
        }();
        t.EventList = o
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(51),
            o = n(0),
            a = function(e) {
                function t() {
                    var t, n, r = e.call(this, ["visible"]) || this;
                    return "undefined" != typeof document && void 0 !== document.addEventListener && (void 0 !== document.hidden ? (n = "visibilitychange", t = "hidden") : void 0 !== document.mozHidden ? (n = "mozvisibilitychange", t = "mozHidden") : void 0 !== document.msHidden ? (n = "msvisibilitychange", t = "msHidden") : void 0 !== document.webkitHidden && (n = "webkitvisibilitychange", t = "webkitHidden")), r.at = !0, n && document.addEventListener(n, function() {
                        var e = !document[t];
                        e !== r.at && (r.at = e, r.trigger("visible", e))
                    }, !1), r
                }
                return r(t, e), t.getInstance = function() { return new t }, t.prototype.getInitialEvent = function(e) { return o.assert("visible" === e, "Unknown event type: " + e), [this.at] }, t
            }(i.EventEmitter);
        t.VisibilityMonitor = a
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            o = n(51),
            a = n(0),
            s = function(e) {
                function t() { var t = e.call(this, ["online"]) || this; return t.li = !0, "undefined" == typeof window || void 0 === window.addEventListener || a.isMobileCordova() || (window.addEventListener("online", function() { t.li || (t.li = !0, t.trigger("online", !0)) }, !1), window.addEventListener("offline", function() { t.li && (t.li = !1, t.trigger("online", !1)) }, !1)), t }
                return r(t, e), t.getInstance = function() { return new t }, t.prototype.getInitialEvent = function(e) { return i.assert("online" === e, "Unknown event type: " + e), [this.li] }, t.prototype.currentlyOnline = function() { return this.li }, t
            }(o.EventEmitter);
        t.OnlineMonitor = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(53),
            i = n(54),
            o = n(1),
            a = function() {
                function e(e) { this.hi(e) }
                return Object.defineProperty(e, "ALL_TRANSPORTS", { get: function() { return [r.BrowserPollConnection, i.WebSocketConnection] }, enumerable: !0, configurable: !0 }), e.prototype.hi = function(t) {
                    var n = i.WebSocketConnection && i.WebSocketConnection.isAvailable(),
                        r = n && !i.WebSocketConnection.previouslyFailed();
                    if (t.webSocketOnly && (n || o.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.ci = [i.WebSocketConnection];
                    else {
                        var a = this.ci = [];
                        o.each(e.ALL_TRANSPORTS, function(e, t) { t && t.isAvailable() && a.push(t) })
                    }
                }, e.prototype.initialTransport = function() { if (this.ci.length > 0) return this.ci[0]; throw Error("No transports available") }, e.prototype.upgradeTransport = function() { return this.ci.length > 1 ? this.ci[1] : null }, e
            }();
        t.TransportManager = a
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(1),
            i = function() {
                function e(e) { this.Ut = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null }
                return e.prototype.closeAfter = function(e, t) { this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null) }, e.prototype.handleResponse = function(e, t) {
                    var n = this;
                    this.pendingResponses[e] = t;
                    for (var i = this; this.pendingResponses[this.currentResponseNum] && "break" !== function() {
                            var e = i.pendingResponses[i.currentResponseNum];
                            delete i.pendingResponses[i.currentResponseNum];
                            for (var t = 0; t < e.length; ++t) ! function(t) { e[t] && r.exceptionGuard(function() { n.Ut(e[t]) }) }(t);
                            if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
                            i.currentResponseNum++
                        }(););
                }, e
            }();
        t.PacketReceiver = i
    }, function(e, t, n) {
        "use strict";
        var r = this && this.__extends || function() {
            var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) { e.__proto__ = t } || function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) };
            return function(t, n) {
                function r() { this.constructor = t } e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
            }
        }();
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(0),
            o = n(1),
            a = n(0),
            s = n(0),
            u = n(0),
            l = n(55),
            h = function(e) {
                function t(t, n, r) { var i = e.call(this) || this; return i.H = t, i.ee = n, i.Ke = r, i.de = o.logWrapper("p:rest:"), i.Je = {}, i }
                return r(t, e), t.prototype.reportStats = function(e) { throw Error("Method not implemented.") }, t.pi = function(e, t) { return void 0 !== t ? "tag$" + t : (i.assert(e.getQueryParams().isDefault(), "should have a tag if it's not a default query."), "" + e.path) }, t.prototype.listen = function(e, n, r, i) {
                    var o = this,
                        a = "" + e.path;
                    this.de("Listen called for " + a + " " + e.queryIdentifier());
                    var u = t.pi(e, r),
                        l = {};
                    this.Je[u] = l;
                    var h = e.getQueryParams().toRestQueryStringParameters();
                    this.di(a + ".json", h, function(e, t) {
                        var n = t;
                        if (404 === e && (n = null, e = null), null === e && o.ee(a, n, !1, r), s.safeGet(o.Je, u) === l) {
                            var h;
                            h = e ? 401 == e ? "permission_denied" : "rest_error:" + e : "ok", i(h, null)
                        }
                    })
                }, t.prototype.unlisten = function(e, n) {
                    var r = t.pi(e, n);
                    delete this.Je[r]
                }, t.prototype.refreshAuthToken = function(e) {}, t.prototype.di = function(e, t, n) {
                    var r = this;
                    void 0 === t && (t = {}), t.format = "export", this.Ke.getToken(!1).then(function(i) {
                        var s = i && i.accessToken;
                        s && (t.auth = s);
                        var l = (r.H.secure ? "https://" : "http://") + r.H.host + e + "?" + u.querystring(t);
                        r.de("Sending REST request for " + l);
                        var h = new XMLHttpRequest;
                        h.onreadystatechange = function() {
                            if (n && 4 === h.readyState) {
                                r.de("REST Response for " + l + " received. status:", h.status, "response:", h.responseText);
                                var e = null;
                                if (h.status >= 200 && h.status < 300) { try { e = a.jsonEval(h.responseText) } catch (e) { o.warn("Failed to parse JSON response for " + l + ": " + h.responseText) } n(null, e) }
                                else 401 !== h.status && 404 !== h.status && o.warn("Got unsuccessful REST response for " + l + " Status: " + h.status), n(h.status);
                                n = null
                            }
                        }, h.open("GET", l, !0), h.send()
                    })
                }, t
            }(l.ServerActions);
        t.ReadonlyRestClient = h
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(1),
            o = n(10),
            a = n(3),
            s = n(38),
            u = n(42),
            l = n(24),
            h = n(108),
            c = n(56),
            p = n(0),
            d = function() {
                function e() { this.fi = !1, this._i = !1, this.yi = !1, this.vi = !1, this.gi = !1, this.mi = 0, this.Ci = "", this.Ei = null, this.Ni = "", this.Pi = null, this.bi = "", this.me = a.PRIORITY_INDEX }
                return e.prototype.hasStart = function() { return this._i }, e.prototype.isViewFromLeft = function() { return "" === this.Ci ? this._i : this.Ci === e.Si.VIEW_FROM_LEFT }, e.prototype.getIndexStartValue = function() { return r.assert(this._i, "Only valid if start has been set"), this.Ei }, e.prototype.getIndexStartName = function() { return r.assert(this._i, "Only valid if start has been set"), this.yi ? this.Ni : i.MIN_NAME }, e.prototype.hasEnd = function() { return this.vi }, e.prototype.getIndexEndValue = function() { return r.assert(this.vi, "Only valid if end has been set"), this.Pi }, e.prototype.getIndexEndName = function() { return r.assert(this.vi, "Only valid if end has been set"), this.gi ? this.bi : i.MAX_NAME }, e.prototype.hasLimit = function() { return this.fi }, e.prototype.hasAnchoredLimit = function() { return this.fi && "" !== this.Ci }, e.prototype.getLimit = function() { return r.assert(this.fi, "Only valid if limit has been set"), this.mi }, e.prototype.getIndex = function() { return this.me }, e.prototype.Ti = function() { var t = new e; return t.fi = this.fi, t.mi = this.mi, t._i = this._i, t.Ei = this.Ei, t.yi = this.yi, t.Ni = this.Ni, t.vi = this.vi, t.Pi = this.Pi, t.gi = this.gi, t.bi = this.bi, t.me = this.me, t.Ci = this.Ci, t }, e.prototype.limit = function(e) { var t = this.Ti(); return t.fi = !0, t.mi = e, t.Ci = "", t }, e.prototype.limitToFirst = function(t) { var n = this.Ti(); return n.fi = !0, n.mi = t, n.Ci = e.Si.VIEW_FROM_LEFT, n }, e.prototype.limitToLast = function(t) { var n = this.Ti(); return n.fi = !0, n.mi = t, n.Ci = e.Si.VIEW_FROM_RIGHT, n }, e.prototype.startAt = function(e, t) { var n = this.Ti(); return n._i = !0, void 0 === e && (e = null), n.Ei = e, null != t ? (n.yi = !0, n.Ni = t) : (n.yi = !1, n.Ni = ""), n }, e.prototype.endAt = function(e, t) { var n = this.Ti(); return n.vi = !0, void 0 === e && (e = null), n.Pi = e, void 0 !== t ? (n.gi = !0, n.bi = t) : (n.gi = !1, n.bi = ""), n }, e.prototype.orderBy = function(e) { var t = this.Ti(); return t.me = e, t }, e.prototype.getQueryObject = function() {
                    var t = e.Si,
                        n = {};
                    if (this._i && (n[t.INDEX_START_VALUE] = this.Ei, this.yi && (n[t.INDEX_START_NAME] = this.Ni)), this.vi && (n[t.INDEX_END_VALUE] = this.Pi, this.gi && (n[t.INDEX_END_NAME] = this.bi)), this.fi) { n[t.LIMIT] = this.mi; var r = this.Ci; "" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r }
                    return this.me !== a.PRIORITY_INDEX && (n[t.INDEX] = "" + this.me), n
                }, e.prototype.loadsAllData = function() { return !(this._i || this.vi || this.fi) }, e.prototype.isDefault = function() { return this.loadsAllData() && this.me == a.PRIORITY_INDEX }, e.prototype.getNodeFilter = function() { return this.loadsAllData() ? new l.IndexedFilter(this.getIndex()) : this.hasLimit() ? new h.LimitedFilter(this) : new c.RangedFilter(this) }, e.prototype.toRestQueryStringParameters = function() {
                    var t = e.wi,
                        n = {};
                    if (this.isDefault()) return n;
                    var i;
                    return this.me === a.PRIORITY_INDEX ? i = t.PRIORITY_INDEX : this.me === s.VALUE_INDEX ? i = t.VALUE_INDEX : this.me === o.KEY_INDEX ? i = t.KEY_INDEX : (r.assert(this.me instanceof u.PathIndex, "Unrecognized index type!"), i = "" + this.me), n[t.ORDER_BY] = p.stringify(i), this._i && (n[t.START_AT] = p.stringify(this.Ei), this.yi && (n[t.START_AT] += "," + p.stringify(this.Ni))), this.vi && (n[t.END_AT] = p.stringify(this.Pi), this.gi && (n[t.END_AT] += "," + p.stringify(this.bi))), this.fi && (this.isViewFromLeft() ? n[t.LIMIT_TO_FIRST] = this.mi : n[t.LIMIT_TO_LAST] = this.mi), n
                }, e.Si = { INDEX_START_VALUE: "sp", INDEX_START_NAME: "sn", INDEX_END_VALUE: "ep", INDEX_END_NAME: "en", LIMIT: "l", VIEW_FROM: "vf", VIEW_FROM_LEFT: "l", VIEW_FROM_RIGHT: "r", INDEX: "i" }, e.wi = { ORDER_BY: "orderBy", PRIORITY_INDEX: "$priority", VALUE_INDEX: "$value", KEY_INDEX: "$key", START_AT: "startAt", END_AT: "endAt", LIMIT_TO_FIRST: "limitToFirst", LIMIT_TO_LAST: "limitToLast" }, e.DEFAULT = new e, e
            }();
        t.QueryParams = d
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(56),
            i = n(4),
            o = n(5),
            a = n(0),
            s = n(9),
            u = function() {
                function e(e) { this.Ii = new r.RangedFilter(e), this.me = e.getIndex(), this.mi = e.getLimit(), this.Ri = !e.isViewFromLeft() }
                return e.prototype.updateChild = function(e, t, n, r, a, s) { return this.Ii.matches(new o.NamedNode(t, n)) || (n = i.ChildrenNode.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.mi ? this.Ii.getIndexedFilter().updateChild(e, t, n, r, a, s) : this.Oi(e, t, n, a, s) }, e.prototype.updateFullNode = function(e, t, n) {
                    var r;
                    if (t.isLeafNode() || t.isEmpty()) r = i.ChildrenNode.EMPTY_NODE.withIndex(this.me);
                    else if (2 * this.mi < t.numChildren() && t.isIndexed(this.me)) {
                        r = i.ChildrenNode.EMPTY_NODE.withIndex(this.me);
                        var o = void 0;
                        o = this.Ri ? t.getReverseIteratorFrom(this.Ii.getEndPost(), this.me) : t.getIteratorFrom(this.Ii.getStartPost(), this.me);
                        for (var a = 0; o.hasNext() && a < this.mi;) {
                            var s = o.getNext(),
                                u = void 0;
                            if (!(u = this.Ri ? this.me.compare(this.Ii.getStartPost(), s) <= 0 : this.me.compare(s, this.Ii.getEndPost()) <= 0)) break;
                            r = r.updateImmediateChild(s.name, s.node), a++
                        }
                    }
                    else {
                        r = t.withIndex(this.me), r = r.updatePriority(i.ChildrenNode.EMPTY_NODE);
                        var l = void 0,
                            h = void 0,
                            c = void 0,
                            o = void 0;
                        if (this.Ri) {
                            o = r.getReverseIterator(this.me), l = this.Ii.getEndPost(), h = this.Ii.getStartPost();
                            var p = this.me.getCompare();
                            c = function(e, t) { return p(t, e) }
                        }
                        else o = r.getIterator(this.me), l = this.Ii.getStartPost(), h = this.Ii.getEndPost(), c = this.me.getCompare();
                        for (var a = 0, d = !1; o.hasNext();) {
                            var s = o.getNext();
                            !d && c(l, s) <= 0 && (d = !0);
                            var u = d && a < this.mi && c(s, h) <= 0;
                            u ? a++ : r = r.updateImmediateChild(s.name, i.ChildrenNode.EMPTY_NODE)
                        }
                    }
                    return this.Ii.getIndexedFilter().updateFullNode(e, r, n)
                }, e.prototype.updatePriority = function(e, t) { return e }, e.prototype.filtersNodes = function() { return !0 }, e.prototype.getIndexedFilter = function() { return this.Ii.getIndexedFilter() }, e.prototype.getIndex = function() { return this.me }, e.prototype.Oi = function(e, t, n, r, u) {
                    var l;
                    if (this.Ri) {
                        var h = this.me.getCompare();
                        l = function(e, t) { return h(t, e) }
                    }
                    else l = this.me.getCompare();
                    var c = e;
                    a.assert(c.numChildren() == this.mi, "");
                    var p = new o.NamedNode(t, n),
                        d = this.Ri ? c.getFirstChild(this.me) : c.getLastChild(this.me),
                        f = this.Ii.matches(p);
                    if (c.hasChild(t)) {
                        for (var _ = c.getImmediateChild(t), y = r.getChildAfterChild(this.me, d, this.Ri); null != y && (y.name == t || c.hasChild(y.name));) y = r.getChildAfterChild(this.me, y, this.Ri);
                        var v = null == y ? 1 : l(y, p);
                        if (f && !n.isEmpty() && v >= 0) return null != u && u.trackChildChange(s.Change.childChangedChange(t, n, _)), c.updateImmediateChild(t, n);
                        null != u && u.trackChildChange(s.Change.childRemovedChange(t, _));
                        var g = c.updateImmediateChild(t, i.ChildrenNode.EMPTY_NODE);
                        return null != y && this.Ii.matches(y) ? (null != u && u.trackChildChange(s.Change.childAddedChange(y.name, y.node)), g.updateImmediateChild(y.name, y.node)) : g
                    }
                    return n.isEmpty() ? e : f && l(d, p) >= 0 ? (null != u && (u.trackChildChange(s.Change.childRemovedChange(d.name, d.node)), u.trackChildChange(s.Change.childAddedChange(t, n))), c.updateImmediateChild(t, n).updateImmediateChild(d.name, i.ChildrenNode.EMPTY_NODE)) : e
                }, e
            }();
        t.LimitedFilter = u
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r, i = n(0),
            o = n(21),
            a = n(22),
            s = n(2),
            u = n(110),
            l = n(3),
            h = n(1),
            c = n(43),
            p = n(7),
            d = n(0),
            f = n(11),
            _ = n(4),
            y = n(17);
        ! function(e) { e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] = "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT" }(r = t.TransactionStatus || (t.TransactionStatus = {})), y.Repo.Ai = 25, y.Repo.prototype.ie = function() { this.Di = new u.Tree }, y.Repo.prototype.startTransaction = function(e, t, n, s) {
            this.de("transaction on " + e);
            var u = function() {},
                y = new o.Reference(this, e);
            y.on("value", u);
            var v = function() { y.off("value", u) },
                g = { path: e, update: t, onComplete: n, status: null, order: h.LUIDGenerator(), applyLocally: s, retryCount: 0, unwatcher: v, abortReason: null, currentWriteId: null, currentInputSnapshot: null, currentOutputSnapshotRaw: null, currentOutputSnapshotResolved: null },
                m = this.Mi(e);
            g.currentInputSnapshot = m;
            var C = g.update(m.val());
            if (void 0 === C) {
                if (g.unwatcher(), g.currentOutputSnapshotRaw = null, g.currentOutputSnapshotResolved = null, g.onComplete) {
                    var E = new a.DataSnapshot(g.currentInputSnapshot, new o.Reference(this, g.path), l.PRIORITY_INDEX);
                    g.onComplete(null, !1, E)
                }
            }
            else {
                p.validateFirebaseData("transaction failed: Data returned ", C, g.path), g.status = r.RUN;
                var N = this.Di.subTree(e),
                    P = N.getValue() || [];
                P.push(g), N.setValue(P);
                var b = void 0;
                "object" == typeof C && null !== C && d.contains(C, ".priority") ? (b = d.safeGet(C, ".priority"), i.assert(p.isValidPriority(b), "Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")) : b = (this.ue.calcCompleteEventCache(e) || _.ChildrenNode.EMPTY_NODE).getPriority().val(), b = b;
                var S = this.generateServerValues(),
                    T = f.nodeFromJSON(C, b),
                    w = c.resolveDeferredValueSnapshot(T, S);
                g.currentOutputSnapshotRaw = T, g.currentOutputSnapshotResolved = w, g.currentWriteId = this.pe();
                var I = this.ue.applyUserOverwrite(e, w, g.currentWriteId, g.applyLocally);
                this.K.raiseEventsForChangedPath(e, I), this.Li()
            }
        }, y.Repo.prototype.Mi = function(e, t) { return this.ue.calcCompleteEventCache(e, t) || _.ChildrenNode.EMPTY_NODE }, y.Repo.prototype.Li = function(e) {
            var t = this;
            if (void 0 === e && (e = this.Di), e || this.Fi(e), null !== e.getValue()) {
                var n = this.xi(e);
                i.assert(n.length > 0, "Sending zero length transaction queue"), n.every(function(e) { return e.status === r.RUN }) && this.ki(e.path(), n)
            }
            else e.hasChildren() && e.forEachChild(function(e) { t.Li(e) })
        }, y.Repo.prototype.ki = function(e, t) {
            for (var n = this, u = t.map(function(e) { return e.currentWriteId }), c = this.Mi(e, u), p = c, d = c.hash(), f = 0; f < t.length; f++) {
                var _ = t[f];
                i.assert(_.status === r.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), _.status = r.SENT, _.retryCount++;
                var y = s.Path.relativePath(e, _.path);
                p = p.updateChild(y, _.currentOutputSnapshotRaw)
            }
            var v = p.val(!0),
                g = e;
            this.Z.put("" + g, v, function(i) {
                n.de("transaction put response", { path: "" + g, status: i });
                var s = [];
                if ("ok" === i) {
                    for (var u = [], c = 0; c < t.length; c++) {
                        if (t[c].status = r.COMPLETED, s = s.concat(n.ue.ackUserWrite(t[c].currentWriteId)), t[c].onComplete) {
                            var p = t[c].currentOutputSnapshotResolved,
                                d = new o.Reference(n, t[c].path),
                                f = new a.DataSnapshot(p, d, l.PRIORITY_INDEX);
                            u.push(t[c].onComplete.bind(null, null, !0, f))
                        }
                        t[c].unwatcher()
                    }
                    n.Fi(n.Di.subTree(e)), n.Li(), n.K.raiseEventsForChangedPath(e, s);
                    for (var c = 0; c < u.length; c++) h.exceptionGuard(u[c])
                }
                else {
                    if ("datastale" === i)
                        for (var c = 0; c < t.length; c++) t[c].status === r.SENT_NEEDS_ABORT ? t[c].status = r.NEEDS_ABORT : t[c].status = r.RUN;
                    else { h.warn("transaction at " + g + " failed: " + i); for (var c = 0; c < t.length; c++) t[c].status = r.NEEDS_ABORT, t[c].abortReason = i } n.le(e)
                }
            }, d)
        }, y.Repo.prototype.le = function(e) {
            var t = this.Wi(e),
                n = t.path(),
                r = this.xi(t);
            return this.ji(r, n), n
        }, y.Repo.prototype.ji = function(e, t) {
            if (0 !== e.length) {
                for (var n = [], u = [], _ = e.filter(function(e) { return e.status === r.RUN }), v = _.map(function(e) { return e.currentWriteId }), g = 0; g < e.length; g++) {
                    var m = e[g],
                        C = s.Path.relativePath(t, m.path),
                        E = !1,
                        N = void 0;
                    if (i.assert(null !== C, "rerunTransactionsUnderNode_: relativePath should not be null."), m.status === r.NEEDS_ABORT) E = !0, N = m.abortReason, u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0));
                    else if (m.status === r.RUN)
                        if (m.retryCount >= y.Repo.Ai) E = !0, N = "maxretry", u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0));
                        else {
                            var P = this.Mi(m.path, v);
                            m.currentInputSnapshot = P;
                            var b = e[g].update(P.val());
                            if (void 0 !== b) {
                                p.validateFirebaseData("transaction failed: Data returned ", b, m.path);
                                var S = f.nodeFromJSON(b),
                                    T = "object" == typeof b && null != b && d.contains(b, ".priority");
                                T || (S = S.updatePriority(P.getPriority()));
                                var w = m.currentWriteId,
                                    I = this.generateServerValues(),
                                    R = c.resolveDeferredValueSnapshot(S, I);
                                m.currentOutputSnapshotRaw = S, m.currentOutputSnapshotResolved = R, m.currentWriteId = this.pe(), v.splice(v.indexOf(w), 1), u = u.concat(this.ue.applyUserOverwrite(m.path, R, m.currentWriteId, m.applyLocally)), u = u.concat(this.ue.ackUserWrite(w, !0))
                            }
                            else E = !0, N = "nodata", u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0))
                        }
                    if (this.K.raiseEventsForChangedPath(t, u), u = [], E && (e[g].status = r.COMPLETED, function(e) { setTimeout(e, Math.floor(0)) }(e[g].unwatcher), e[g].onComplete))
                        if ("nodata" === N) {
                            var O = new o.Reference(this, e[g].path),
                                A = e[g].currentInputSnapshot,
                                D = new a.DataSnapshot(A, O, l.PRIORITY_INDEX);
                            n.push(e[g].onComplete.bind(null, null, !1, D))
                        }
                    else n.push(e[g].onComplete.bind(null, Error(N), !1, null))
                }
                this.Fi(this.Di);
                for (var g = 0; g < n.length; g++) h.exceptionGuard(n[g]);
                this.Li()
            }
        }, y.Repo.prototype.Wi = function(e) { for (var t, n = this.Di; null !== (t = e.getFront()) && null === n.getValue();) n = n.subTree(t), e = e.popFront(); return n }, y.Repo.prototype.xi = function(e) { var t = []; return this.Vi(e, t), t.sort(function(e, t) { return e.order - t.order }), t }, y.Repo.prototype.Vi = function(e, t) {
            var n = this,
                r = e.getValue();
            if (null !== r)
                for (var i = 0; i < r.length; i++) t.push(r[i]);
            e.forEachChild(function(e) { n.Vi(e, t) })
        }, y.Repo.prototype.Fi = function(e) {
            var t = this,
                n = e.getValue();
            if (n) {
                for (var i = 0, o = 0; o < n.length; o++) n[o].status !== r.COMPLETED && (n[i] = n[o], i++);
                n.length = i, e.setValue(n.length > 0 ? n : null)
            }
            e.forEachChild(function(e) { t.Fi(e) })
        }, y.Repo.prototype.fe = function(e) {
            var t = this,
                n = this.Wi(e).path(),
                r = this.Di.subTree(e);
            return r.forEachAncestor(function(e) { t.Qi(e) }), this.Qi(r), r.forEachDescendant(function(e) { t.Qi(e) }), n
        }, y.Repo.prototype.Qi = function(e) { var t = e.getValue(); if (null !== t) { for (var n = [], o = [], a = -1, s = 0; s < t.length; s++) t[s].status === r.SENT_NEEDS_ABORT || (t[s].status === r.SENT ? (i.assert(a === s - 1, "All SENT items should be at beginning of queue."), a = s, t[s].status = r.SENT_NEEDS_ABORT, t[s].abortReason = "set") : (i.assert(t[s].status === r.RUN, "Unexpected transaction status in abort"), t[s].unwatcher(), o = o.concat(this.ue.ackUserWrite(t[s].currentWriteId, !0)), t[s].onComplete && n.push(t[s].onComplete.bind(null, Error("set"), !1, null)))); - 1 === a ? e.setValue(null) : t.length = a + 1, this.K.raiseEventsForChangedPath(e.path(), o); for (var s = 0; s < n.length; s++) h.exceptionGuard(n[s]) } }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(0),
            i = n(2),
            o = n(0),
            a = function() {
                function e() { this.children = {}, this.childCount = 0, this.value = null }
                return e
            }();
        t.TreeNode = a;
        var s = function() {
            function e(e, t, n) { void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === n && (n = new a), this.qi = e, this.Ui = t, this._e = n }
            return e.prototype.subTree = function(t) { for (var n, r = t instanceof i.Path ? t : new i.Path(t), s = this; null !== (n = r.getFront());) s = new e(n, s, o.safeGet(s._e.children, n) || new a), r = r.popFront(); return s }, e.prototype.getValue = function() { return this._e.value }, e.prototype.setValue = function(e) { r.assert(void 0 !== e, "Cannot set value to undefined"), this._e.value = e, this.Bi() }, e.prototype.clear = function() { this._e.value = null, this._e.children = {}, this._e.childCount = 0, this.Bi() }, e.prototype.hasChildren = function() { return this._e.childCount > 0 }, e.prototype.isEmpty = function() { return null === this.getValue() && !this.hasChildren() }, e.prototype.forEachChild = function(t) {
                var n = this;
                o.forEach(this._e.children, function(r, i) { t(new e(r, n, i)) })
            }, e.prototype.forEachDescendant = function(e, t, n) { t && !n && e(this), this.forEachChild(function(t) { t.forEachDescendant(e, !0, n) }), t && n && e(this) }, e.prototype.forEachAncestor = function(e, t) {
                for (var n = t ? this : this.parent(); null !== n;) {
                    if (e(n)) return !0;
                    n = n.parent()
                }
                return !1
            }, e.prototype.forEachImmediateDescendantWithValue = function(e) { this.forEachChild(function(t) { null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e) }) }, e.prototype.path = function() { return new i.Path(null === this.Ui ? this.qi : this.Ui.path() + "/" + this.qi) }, e.prototype.name = function() { return this.qi }, e.prototype.parent = function() { return this.Ui }, e.prototype.Bi = function() { null !== this.Ui && this.Ui.Hi(this.qi, this) }, e.prototype.Hi = function(e, t) {
                var n = t.isEmpty(),
                    r = o.contains(this._e.children, e);
                n && r ? (delete this._e.children[e], this._e.childCount--, this.Bi()) : n || r || (this._e.children[e] = t._e, this._e.childCount++, this.Bi())
            }, e
        }();
        t.Tree = s
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(54),
            i = n(53);
        t.forceLongPolling = function() { r.WebSocketConnection.forceDisallow(), i.BrowserPollConnection.forceAllow() }, t.forceWebSockets = function() { i.BrowserPollConnection.forceDisallow() }, t.isWebSocketsAvailable = function() { return r.WebSocketConnection.isAvailable() }, t.setSecurityDebugCallback = function(e, t) { e.repo.J.it = t }, t.stats = function(e, t) { e.repo.stats(t) }, t.statsIncrementCounter = function(e, t) { e.repo.statsIncrementCounter(t) }, t.dataUpdateCount = function(e) { return e.repo.dataUpdateCount }, t.interceptServerData = function(e, t) { return e.repo.he(t) }
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(34),
            i = n(50),
            o = n(26),
            a = n(52);
        t.DataConnection = i.PersistentConnection, i.PersistentConnection.prototype.simpleListen = function(e, t) { this.sendRequest("q", { p: e }, t) }, i.PersistentConnection.prototype.echo = function(e, t) { this.sendRequest("echo", { d: e }, t) }, t.RealTimeConnection = a.Connection, t.hijackHash = function(e) {
            var t = i.PersistentConnection.prototype.put;
            return i.PersistentConnection.prototype.put = function(n, r, i, o) { void 0 !== o && (o = e()), t.call(this, n, r, i, o) },
                function() { i.PersistentConnection.prototype.put = t }
        }, t.ConnectionTarget = r.RepoInfo, t.queryIdentifier = function(e) { return e.queryIdentifier() }, t.listens = function(e) { return e.repo.J.Je }, t.forceRestClient = function(e) { o.RepoManager.getInstance().forceRestClient(e) }
    }], [78])
}
catch (e) { throw Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.") }
//# sourceMappingURL=firebase-database.js.map
