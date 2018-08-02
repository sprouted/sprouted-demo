/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
var firebase = function() {
	var e = void 0 === e ? self : e;
	return function(t) {
		function r(e) {
			if (o[e]) return o[e].exports;
			var n = o[e] = {
				i: e,
				l: !1,
				exports: {}
			};
			return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
		}
		var n = e.webpackJsonpFirebase;
		e.webpackJsonpFirebase = function(e, o, a) {
			for (var c, s, u, f = 0, l = []; f < e.length; f++) s = e[f], i[s] && l.push(i[s][0]), i[s] = 0;
			for (c in o) Object.prototype.hasOwnProperty.call(o, c) && (t[c] = o[c]);
			for (n && n(e, o, a); l.length;) l.shift()();
			if (a)
				for (f = 0; f < a.length; f++) u = r(r.s = a[f]);
			return u
		};
		var o = {},
			i = {
				5: 0
			};
		return r.e = function(e) {
			function t() {
				c.onerror = c.onload = null, clearTimeout(s);
				var t = i[e];
				0 !== t && (t && t[1](Error("Loading chunk " + e + " failed.")), i[e] = void 0)
			}
			var n = i[e];
			if (0 === n) return new Promise(function(e) {
				e()
			});
			if (n) return n[2];
			var o = new Promise(function(t, r) {
				n = i[e] = [t, r]
			});
			n[2] = o;
			var a = document.getElementsByTagName("head")[0],
				c = document.createElement("script");
			c.type = "text/javascript", c.charset = "utf-8", c.async = !0, c.timeout = 12e4, r.nc && c.setAttribute("nonce", r.nc), c.src = r.p + "" + e + ".js";
			var s = setTimeout(t, 12e4);
			return c.onerror = c.onload = t, a.appendChild(c), o
		}, r.m = t, r.c = o, r.d = function(e, t, n) {
			r.o(e, t) || Object.defineProperty(e, t, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, r.n = function(e) {
			var t = e && e.__esModule ? function() {
				return e.default
			} : function() {
				return e
			};
			return r.d(t, "a", t), t
		}, r.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, r.p = "", r.oe = function(e) {
			throw console.error(e), e
		}, r(r.s = 57)
	}([function(e, t, r) {
		"use strict";

		function n(e) {
			for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), n(r(28)), n(r(29)), n(r(20)), n(r(65)), n(r(66)), n(r(67)), n(r(68)), n(r(30)), n(r(69)), n(r(31)), n(r(70)), n(r(71)), n(r(73)), n(r(74)), n(r(75))
	}, , , , , , function(e, t, r) {
		"use strict";

		function n() {
			function e(e) {
				h(d[e], "delete"), delete d[e]
			}

			function t(e) {
				return e = e || c, a(d, e) || o("no-app", {
					name: e
				}), d[e]
			}

			function r(e, t) {
				void 0 === t ? t = c : "string" == typeof t && "" !== t || o("bad-app-name", {
					name: t + ""
				}), a(d, t) && o("duplicate-app", {
					name: t
				});
				var r = new u(e, t, b);
				return d[t] = r, h(r, "create"), r
			}

			function s() {
				return Object.keys(d).map(function(e) {
					return d[e]
				})
			}

			function f(e, r, n, a, c) {
				v[e] && o("duplicate-service", {
					name: e
				}), v[e] = r, a && (y[e] = a, s().forEach(function(e) {
					a("create", e)
				}));
				var f = function(r) {
					return void 0 === r && (r = t()), "function" != typeof r[e] && o("invalid-app-argument", {
						name: e
					}), r[e]()
				};
				return void 0 !== n && Object(i.deepExtend)(f, n), b[e] = f, u.prototype[e] = function() {
					for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
					return this.t.bind(this, e).apply(this, c ? t : [])
				}, f
			}

			function l(e) {
				Object(i.deepExtend)(b, e)
			}

			function h(e, t) {
				Object.keys(v).forEach(function(r) {
					var n = p(e, r);
					null !== n && y[n] && y[n](t, e)
				})
			}

			function p(e, t) {
				if ("serverAuth" === t) return null;
				var r = t;
				return e.options, r
			}
			var d = {},
				v = {},
				y = {},
				b = {
					__esModule: !0,
					initializeApp: r,
					app: t,
					apps: null,
					Promise: Promise,
					SDK_VERSION: "4.6.1",
					INTERNAL: {
						registerService: f,
						createFirebaseNamespace: n,
						extendNamespace: l,
						createSubscribe: i.createSubscribe,
						ErrorFactory: i.ErrorFactory,
						removeApp: e,
						factories: v,
						useAsService: p,
						Promise: Promise,
						deepExtend: i.deepExtend
					}
				};
			return Object(i.patchProperty)(b, "default", b), Object.defineProperty(b, "apps", {
				get: s
			}), Object(i.patchProperty)(t, "App", u), b
		}

		function o(e, t) {
			throw l.create(e, t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = r(0),
			a = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			},
			c = "[DEFAULT]",
			s = [],
			u = function() {
				function e(e, t, r) {
					this.r = r, this.a = !1, this.u = {}, this.f = t, this.h = Object(i.deepCopy)(e), this.INTERNAL = {
						getUid: function() {
							return null
						},
						getToken: function() {
							return Promise.resolve(null)
						},
						addAuthTokenListener: function(e) {
							s.push(e), setTimeout(function() {
								return e(null)
							}, 0)
						},
						removeAuthTokenListener: function(e) {
							s = s.filter(function(t) {
								return t !== e
							})
						}
					}
				}
				return Object.defineProperty(e.prototype, "name", {
					get: function() {
						return this.v(), this.f
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "options", {
					get: function() {
						return this.v(), this.h
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.delete = function() {
					var e = this;
					return new Promise(function(t) {
						e.v(), t()
					}).then(function() {
						e.r.INTERNAL.removeApp(e.f);
						var t = [];
						return Object.keys(e.u).forEach(function(r) {
							Object.keys(e.u[r]).forEach(function(n) {
								t.push(e.u[r][n])
							})
						}), Promise.all(t.map(function(e) {
							return e.INTERNAL.delete()
						}))
					}).then(function() {
						e.a = !0, e.u = {}
					})
				}, e.prototype.t = function(e, t) {
					if (void 0 === t && (t = c), this.v(), this.u[e] || (this.u[e] = {}), !this.u[e][t]) {
						var r = t !== c ? t : void 0,
							n = this.r.INTERNAL.factories[e](this, this.extendApp.bind(this), r);
						this.u[e][t] = n
					}
					return this.u[e][t]
				}, e.prototype.extendApp = function(e) {
					var t = this;
					Object(i.deepExtend)(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (s.forEach(function(e) {
						t.INTERNAL.addAuthTokenListener(e)
					}), s = [])
				}, e.prototype.v = function() {
					this.a && o("app-deleted", {
						name: this.f
					})
				}, e
			}();
		u.prototype.name && u.prototype.options || u.prototype.delete || console.log("dc");
		var f = {
				"no-app": "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",
				"bad-app-name": "Illegal App name: '{$name}",
				"duplicate-app": "Firebase App named '{$name}' already exists",
				"app-deleted": "Firebase App named '{$name}' already deleted",
				"duplicate-service": "Firebase service named '{$name}' already registered",
				"sa-not-supported": "Initializing the Firebase SDK with a service account is only allowed in a Node.js environment. On client devices, you should instead initialize the SDK with an api key and auth domain",
				"invalid-app-argument": "firebase.{$name}() takes either no argument or a Firebase App instance."
			},
			l = new i.ErrorFactory("app", "Firebase", f);
		r.d(t, "firebase", function() {
			return h
		});
		var h = n();
		t.default = h
	}, , , , , , , , , , , , , function(t, r) {
		var n;
		n = function() {
			return this
		}();
		try {
			n = n || Function("return this")() || (0, eval)("this")
		} catch (t) {
			"object" == typeof e && (n = e)
		}
		t.exports = n
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.CONSTANTS = {
			NODE_CLIENT: !1,
			NODE_ADMIN: !1,
			SDK_VERSION: "${JSCORE_VERSION}"
		}
	}, , , , , , , function(e, t) {
		function r() {
			throw Error("setTimeout has not been defined")
		}

		function n() {
			throw Error("clearTimeout has not been defined")
		}

		function o(e) {
			if (f === setTimeout) return setTimeout(e, 0);
			if ((f === r || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
			try {
				return f(e, 0)
			} catch (t) {
				try {
					return f.call(null, e, 0)
				} catch (t) {
					return f.call(this, e, 0)
				}
			}
		}

		function i(e) {
			if (l === clearTimeout) return clearTimeout(e);
			if ((l === n || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
			try {
				return l(e)
			} catch (t) {
				try {
					return l.call(null, e)
				} catch (t) {
					return l.call(this, e)
				}
			}
		}

		function a() {
			v && p && (v = !1, p.length ? d = p.concat(d) : y = -1, d.length && c())
		}

		function c() {
			if (!v) {
				var e = o(a);
				v = !0;
				for (var t = d.length; t;) {
					for (p = d, d = []; ++y < t;) p && p[y].run();
					y = -1, t = d.length
				}
				p = null, v = !1, i(e)
			}
		}

		function s(e, t) {
			this.fun = e, this.array = t
		}

		function u() {}
		var f, l, h = e.exports = {};
		! function() {
			try {
				f = "function" == typeof setTimeout ? setTimeout : r
			} catch (e) {
				f = r
			}
			try {
				l = "function" == typeof clearTimeout ? clearTimeout : n
			} catch (e) {
				l = n
			}
		}();
		var p, d = [],
			v = !1,
			y = -1;
		h.nextTick = function(e) {
			var t = Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
			d.push(new s(e, t)), 1 !== d.length || v || o(c)
		}, s.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, h.title = "browser", h.browser = !0, h.env = {}, h.argv = [], h.version = "", h.versions = {}, h.on = u, h.addListener = u, h.once = u, h.off = u, h.removeListener = u, h.removeAllListeners = u, h.emit = u, h.prependListener = u, h.prependOnceListener = u, h.listeners = function(e) {
			return []
		}, h.binding = function(e) {
			throw Error("process.binding is not supported")
		}, h.cwd = function() {
			return "/"
		}, h.chdir = function(e) {
			throw Error("process.chdir is not supported")
		}, h.umask = function() {
			return 0
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(20);
		t.assert = function(e, r) {
			if (!e) throw t.assertionError(r)
		}, t.assertionError = function(e) {
			return Error("Firebase Database (" + n.CONSTANTS.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function(e) {
				for (var t = [], r = 0, n = 0; n < e.length; n++) {
					for (var o = e.charCodeAt(n); o > 255;) t[r++] = 255 & o, o >>= 8;
					t[r++] = o
				}
				return t
			},
			o = function(e) {
				if (e.length < 8192) return String.fromCharCode.apply(null, e);
				for (var t = "", r = 0; r < e.length; r += 8192) {
					var n = e.slice(r, r + 8192);
					t += String.fromCharCode.apply(null, n)
				}
				return t
			};
		t.base64 = {
			y: null,
			b: null,
			_: null,
			g: null,
			ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
			get ENCODED_VALS() {
				return this.ENCODED_VALS_BASE + "+/="
			},
			get ENCODED_VALS_WEBSAFE() {
				return this.ENCODED_VALS_BASE + "-_."
			},
			HAS_NATIVE_SUPPORT: "function" == typeof atob,
			encodeByteArray: function(e, t) {
				if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
				this.O();
				for (var r = t ? this._ : this.y, n = [], o = 0; o < e.length; o += 3) {
					var i = e[o],
						a = o + 1 < e.length,
						c = a ? e[o + 1] : 0,
						s = o + 2 < e.length,
						u = s ? e[o + 2] : 0,
						f = i >> 2,
						l = (3 & i) << 4 | c >> 4,
						h = (15 & c) << 2 | u >> 6,
						p = 63 & u;
					s || (p = 64, a || (h = 64)), n.push(r[f], r[l], r[h], r[p])
				}
				return n.join("")
			},
			encodeString: function(e, t) {
				return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(n(e), t)
			},
			decodeString: function(e, t) {
				return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : o(this.decodeStringToByteArray(e, t))
			},
			decodeStringToByteArray: function(e, t) {
				this.O();
				for (var r = t ? this.g : this.b, n = [], o = 0; o < e.length;) {
					var i = r[e.charAt(o++)],
						a = o < e.length,
						c = a ? r[e.charAt(o)] : 0;
					++o;
					var s = o < e.length,
						u = s ? r[e.charAt(o)] : 64;
					++o;
					var f = o < e.length,
						l = f ? r[e.charAt(o)] : 64;
					if (++o, null == i || null == c || null == u || null == l) throw Error();
					var h = i << 2 | c >> 4;
					if (n.push(h), 64 != u) {
						var p = c << 4 & 240 | u >> 2;
						if (n.push(p), 64 != l) {
							var d = u << 6 & 192 | l;
							n.push(d)
						}
					}
				}
				return n
			},
			O: function() {
				if (!this.y) {
					this.y = {}, this.b = {}, this._ = {}, this.g = {};
					for (var e = 0; e < this.ENCODED_VALS.length; e++) this.y[e] = this.ENCODED_VALS.charAt(e), this.b[this.y[e]] = e, this._[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.g[this._[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.b[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.g[this.ENCODED_VALS.charAt(e)] = e)
				}
			}
		}, t.base64Encode = function(e) {
			var r = n(e);
			return t.base64.encodeByteArray(r, !0)
		}, t.base64Decode = function(e) {
			try {
				return t.base64.decodeString(e, !0)
			} catch (e) {
				console.error("base64Decode failed: ", e)
			}
			return null
		}
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			return JSON.parse(e)
		}

		function o(e) {
			return JSON.stringify(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.jsonEval = n, t.stringify = o
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.contains = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.safeGet = function(e, t) {
			if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
		}, t.forEach = function(e, t) {
			for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r])
		}, t.extend = function(e, r) {
			return t.forEach(r, function(t, r) {
				e[t] = r
			}), e
		}, t.clone = function(e) {
			return t.extend({}, e)
		}, t.isNonNullObject = function(e) {
			return "object" == typeof e && null !== e
		}, t.isEmpty = function(e) {
			for (var t in e) return !1;
			return !0
		}, t.getCount = function(e) {
			var t = 0;
			for (var r in e) t++;
			return t
		}, t.map = function(e, t, r) {
			var n = {};
			for (var o in e) n[o] = t.call(r, e[o], o, e);
			return n
		}, t.findKey = function(e, t, r) {
			for (var n in e)
				if (t.call(r, e[n], n, e)) return n
		}, t.findValue = function(e, r, n) {
			var o = t.findKey(e, r, n);
			return o && e[o]
		}, t.getAnyKey = function(e) {
			for (var t in e) return t
		}, t.getValues = function(e) {
			var t = [],
				r = 0;
			for (var n in e) t[r++] = e[n];
			return t
		}, t.every = function(e, t) {
			for (var r in e)
				if (Object.prototype.hasOwnProperty.call(e, r) && !t(r, e[r])) return !1;
			return !0
		}
	}, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
		r(58), e.exports = r(6).default
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(59),
			o = (r.n(n), r(63)),
			i = (r.n(o), r(64));
		r.n(i)
	}, function(t, r, n) {
		(function(t) {
			var r = function() {
				if (void 0 !== t) return t;
				if (void 0 !== e) return e;
				if ("undefined" != typeof self) return self;
				throw Error("unable to locate global object")
			}();
			"undefined" == typeof Promise && (r.Promise = Promise = n(60))
		}).call(r, n(19))
	}, function(e, t, r) {
		(function(t) {
			! function(r) {
				function n() {}

				function o(e, t) {
					return function() {
						e.apply(t, arguments)
					}
				}

				function i(e) {
					if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
					if ("function" != typeof e) throw new TypeError("not a function");
					this._state = 0, this._handled = !1, this._value = void 0, this.T = [], l(e, this)
				}

				function a(e, t) {
					for (; 3 === e._state;) e = e._value;
					if (0 === e._state) return void e.T.push(t);
					e._handled = !0, i.A(function() {
						var r = 1 === e._state ? t.onFulfilled : t.onRejected;
						if (null === r) return void(1 === e._state ? c : s)(t.promise, e._value);
						var n;
						try {
							n = r(e._value)
						} catch (e) {
							return void s(t.promise, e)
						}
						c(t.promise, n)
					})
				}

				function c(e, t) {
					try {
						if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
						if (t && ("object" == typeof t || "function" == typeof t)) {
							var r = t.then;
							if (t instanceof i) return e._state = 3, e._value = t, void u(e);
							if ("function" == typeof r) return void l(o(r, t), e)
						}
						e._state = 1, e._value = t, u(e)
					} catch (t) {
						s(e, t)
					}
				}

				function s(e, t) {
					e._state = 2, e._value = t, u(e)
				}

				function u(e) {
					2 === e._state && 0 === e.T.length && i.A(function() {
						e._handled || i.j(e._value)
					});
					for (var t = 0, r = e.T.length; t < r; t++) a(e, e.T[t]);
					e.T = null
				}

				function f(e, t, r) {
					this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = r
				}

				function l(e, t) {
					var r = !1;
					try {
						e(function(e) {
							r || (r = !0, c(t, e))
						}, function(e) {
							r || (r = !0, s(t, e))
						})
					} catch (e) {
						if (r) return;
						r = !0, s(t, e)
					}
				}
				var h = setTimeout;
				i.prototype.catch = function(e) {
					return this.then(null, e)
				}, i.prototype.then = function(e, t) {
					var r = new this.constructor(n);
					return a(this, new f(e, t, r)), r
				}, i.all = function(e) {
					var t = Array.prototype.slice.call(e);
					return new i(function(e, r) {
						function n(i, a) {
							try {
								if (a && ("object" == typeof a || "function" == typeof a)) {
									var c = a.then;
									if ("function" == typeof c) return void c.call(a, function(e) {
										n(i, e)
									}, r)
								}
								t[i] = a, 0 == --o && e(t)
							} catch (e) {
								r(e)
							}
						}
						if (0 === t.length) return e([]);
						for (var o = t.length, i = 0; i < t.length; i++) n(i, t[i])
					})
				}, i.resolve = function(e) {
					return e && "object" == typeof e && e.constructor === i ? e : new i(function(t) {
						t(e)
					})
				}, i.reject = function(e) {
					return new i(function(t, r) {
						r(e)
					})
				}, i.race = function(e) {
					return new i(function(t, r) {
						for (var n = 0, o = e.length; n < o; n++) e[n].then(t, r)
					})
				}, i.A = "function" == typeof t && function(e) {
					t(e)
				} || function(e) {
					h(e, 0)
				}, i.j = function(e) {
					"undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
				}, i.w = function(e) {
					i.A = e
				}, i.S = function(e) {
					i.j = e
				}, void 0 !== e && e.exports ? e.exports = i : r.Promise || (r.Promise = i)
			}(this)
		}).call(t, r(61).setImmediate)
	}, function(t, r, n) {
		function o(e, t) {
			this.P = e, this._clearFn = t
		}
		var i = Function.prototype.apply;
		r.setTimeout = function() {
			return new o(i.call(setTimeout, e, arguments), clearTimeout)
		}, r.setInterval = function() {
			return new o(i.call(setInterval, e, arguments), clearInterval)
		}, r.clearTimeout = r.clearInterval = function(e) {
			e && e.close()
		}, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
			this._clearFn.call(e, this.P)
		}, r.enroll = function(e, t) {
			clearTimeout(e.N), e.C = t
		}, r.unenroll = function(e) {
			clearTimeout(e.N), e.C = -1
		}, r.k = r.active = function(e) {
			clearTimeout(e.N);
			var t = e.C;
			t >= 0 && (e.N = setTimeout(function() {
				e.M && e.M()
			}, t))
		}, n(62), r.setImmediate = setImmediate, r.clearImmediate = clearImmediate
	}, function(e, t, r) {
		(function(e, t) {
			! function(e, r) {
				"use strict";

				function n(e) {
					"function" != typeof e && (e = Function("" + e));
					for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
					var n = {
						callback: e,
						args: t
					};
					return u[s] = n, c(s), s++
				}

				function o(e) {
					delete u[e]
				}

				function i(e) {
					var t = e.callback,
						n = e.args;
					switch (n.length) {
						case 0:
							t();
							break;
						case 1:
							t(n[0]);
							break;
						case 2:
							t(n[0], n[1]);
							break;
						case 3:
							t(n[0], n[1], n[2]);
							break;
						default:
							t.apply(r, n)
					}
				}

				function a(e) {
					if (f) setTimeout(a, 0, e);
					else {
						var t = u[e];
						if (t) {
							f = !0;
							try {
								i(t)
							} finally {
								o(e), f = !1
							}
						}
					}
				}
				if (!e.setImmediate) {
					var c, s = 1,
						u = {},
						f = !1,
						l = e.document,
						h = Object.getPrototypeOf && Object.getPrototypeOf(e);
					h = h && h.setTimeout ? h : e, "[object process]" === {}.toString.call(e.process) ? function() {
						c = function(e) {
							t.nextTick(function() {
								a(e)
							})
						}
					}() : function() {
						if (e.postMessage && !e.importScripts) {
							var t = !0,
								r = e.onmessage;
							return e.onmessage = function() {
								t = !1
							}, e.postMessage("", "*"), e.onmessage = r, t
						}
					}() ? function() {
						var t = "setImmediate$" + Math.random() + "$",
							r = function(r) {
								r.source === e && "string" == typeof r.data && 0 === r.data.indexOf(t) && a(+r.data.slice(t.length))
							};
						e.addEventListener ? e.addEventListener("message", r, !1) : e.attachEvent("onmessage", r), c = function(r) {
							e.postMessage(t + r, "*")
						}
					}() : e.MessageChannel ? function() {
						var e = new MessageChannel;
						e.port1.onmessage = function(e) {
							a(e.data)
						}, c = function(t) {
							e.port2.postMessage(t)
						}
					}() : l && "onreadystatechange" in l.createElement("script") ? function() {
						var e = l.documentElement;
						c = function(t) {
							var r = l.createElement("script");
							r.onreadystatechange = function() {
								a(t), r.onreadystatechange = null, e.removeChild(r), r = null
							}, e.appendChild(r)
						}
					}() : function() {
						c = function(e) {
							setTimeout(a, 0, e)
						}
					}(), h.setImmediate = n, h.clearImmediate = o
				}
			}("undefined" == typeof self ? void 0 === e ? this : e : self)
		}).call(t, r(19), r(27))
	}, function(e, t) {
		Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
			value: function(e) {
				if (null == this) throw new TypeError('"this" is null or not defined');
				var t = Object(this),
					r = t.length >>> 0;
				if ("function" != typeof e) throw new TypeError("predicate must be a function");
				for (var n = arguments[1], o = 0; o < r;) {
					var i = t[o];
					if (e.call(n, i, o, t)) return i;
					o++
				}
			}
		})
	}, function(e, t) {
		Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", {
			value: function(e) {
				if (null == this) throw new TypeError('"this" is null or not defined');
				var t = Object(this),
					r = t.length >>> 0;
				if ("function" != typeof e) throw new TypeError("predicate must be a function");
				for (var n = arguments[1], o = 0; o < r;) {
					var i = t[o];
					if (e.call(n, i, o, t)) return o;
					o++
				}
				return -1
			}
		})
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			return o(void 0, e)
		}

		function o(e, t) {
			if (!(t instanceof Object)) return t;
			switch (t.constructor) {
				case Date:
					var r = t;
					return new Date(r.getTime());
				case Object:
					void 0 === e && (e = {});
					break;
				case Array:
					e = [];
					break;
				default:
					return t
			}
			for (var n in t) t.hasOwnProperty(n) && (e[n] = o(e[n], t[n]));
			return e
		}

		function i(e, t, r) {
			e[t] = r
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.deepCopy = n, t.deepExtend = o, t.patchProperty = i
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {
				var e = this;
				this.promise = new Promise(function(t, r) {
					e.resolve = t, e.reject = r
				})
			}
			return e.prototype.wrapCallback = function(e) {
				var t = this;
				return function(r, n) {
					r ? t.reject(r) : t.resolve(n), "function" == typeof e && (t.promise.catch(function() {}), 1 === e.length ? e(r) : e(r, n))
				}
			}, e
		}();
		t.Deferred = n
	}, function(t, r, n) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var o = n(20);
		r.getUA = function() {
			return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
		}, r.isMobileCordova = function() {
			return void 0 !== e && !!(e.cordova || e.phonegap || e.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(r.getUA())
		}, r.isReactNative = function() {
			return "object" == typeof navigator && "ReactNative" === navigator.product
		}, r.isNodeSdk = function() {
			return !0 === o.CONSTANTS.NODE_CLIENT || !0 === o.CONSTANTS.NODE_ADMIN
		}
	}, function(e, t, r) {
		"use strict";

		function n(e) {
			var t = i;
			return i = e, t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = "FirebaseError",
			i = Error.captureStackTrace;
		t.patchCapture = n;
		var a = function() {
			function e(e, t) {
				if (this.code = e, this.message = t, i) i(this, c.prototype.create);
				else {
					var r = Error.apply(this, arguments);
					this.name = o, Object.defineProperty(this, "stack", {
						get: function() {
							return r.stack
						}
					})
				}
			}
			return e
		}();
		t.FirebaseError = a, a.prototype = Object.create(Error.prototype), a.prototype.constructor = a, a.prototype.name = o;
		var c = function() {
			function e(e, t, r) {
				this.service = e, this.serviceName = t, this.errors = r, this.pattern = /\{\$([^}]+)}/g
			}
			return e.prototype.create = function(e, t) {
				void 0 === t && (t = {});
				var r, n = this.errors[e],
					o = this.service + "/" + e;
				r = void 0 === n ? "Error" : n.replace(this.pattern, function(e, r) {
					var n = t[r];
					return void 0 !== n ? "" + n : "<" + r + "?>"
				}), r = this.serviceName + ": " + r + " (" + o + ").";
				var i = new a(o, r);
				for (var c in t) t.hasOwnProperty(c) && "_" !== c.slice(-1) && (i[c] = t[c]);
				return i
			}, e
		}();
		t.ErrorFactory = c
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(29),
			o = r(30);
		t.decode = function(e) {
			var t = {},
				r = {},
				i = {},
				a = "";
			try {
				var c = e.split(".");
				t = o.jsonEval(n.base64Decode(c[0]) || ""), r = o.jsonEval(n.base64Decode(c[1]) || ""), a = c[2], i = r.d || {}, delete r.d
			} catch (e) {}
			return {
				header: t,
				claims: r,
				data: i,
				signature: a
			}
		}, t.isValidTimestamp = function(e) {
			var r, n, o = t.decode(e).claims,
				i = Math.floor((new Date).getTime() / 1e3);
			return "object" == typeof o && (o.hasOwnProperty("nbf") ? r = o.nbf : o.hasOwnProperty("iat") && (r = o.iat), n = o.hasOwnProperty("exp") ? o.exp : r + 86400), i && r && n && i >= r && i <= n
		}, t.issuedAtTime = function(e) {
			var r = t.decode(e).claims;
			return "object" == typeof r && r.hasOwnProperty("iat") ? r.iat : null
		}, t.isValidFormat = function(e) {
			var r = t.decode(e),
				n = r.claims;
			return !!r.signature && !!n && "object" == typeof n && n.hasOwnProperty("iat")
		}, t.isAdmin = function(e) {
			var r = t.decode(e).claims;
			return "object" == typeof r && !0 === r.admin
		}
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(31);
		t.querystring = function(e) {
			var t = [];
			return n.forEach(e, function(e, r) {
				Array.isArray(r) ? r.forEach(function(r) {
					t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
				}) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(r))
			}), t.length ? "&" + t.join("&") : ""
		}, t.querystringDecode = function(e) {
			var t = {};
			return e.replace(/^\?/, "").split("&").forEach(function(e) {
				if (e) {
					var r = e.split("=");
					t[r[0]] = r[1]
				}
			}), t
		}
	}, function(e, t, r) {
		"use strict";
		var n = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
			};
			return function(t, r) {
				function n() {
					this.constructor = t
				}
				e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = r(72),
			i = function(e) {
				function t() {
					var t = e.call(this) || this;
					t.D = [], t.I = [], t.x = [], t.F = [], t.L = 0, t.R = 0, t.blockSize = 64, t.F[0] = 128;
					for (var r = 1; r < t.blockSize; ++r) t.F[r] = 0;
					return t.reset(), t
				}
				return n(t, e), t.prototype.reset = function() {
					this.D[0] = 1732584193, this.D[1] = 4023233417, this.D[2] = 2562383102, this.D[3] = 271733878, this.D[4] = 3285377520, this.L = 0, this.R = 0
				}, t.prototype.B = function(e, t) {
					t || (t = 0);
					var r = this.x;
					if ("string" == typeof e)
						for (var n = 0; n < 16; n++) r[n] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
					else
						for (var n = 0; n < 16; n++) r[n] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
					for (var n = 16; n < 80; n++) {
						var o = r[n - 3] ^ r[n - 8] ^ r[n - 14] ^ r[n - 16];
						r[n] = 4294967295 & (o << 1 | o >>> 31)
					}
					for (var i, a, c = this.D[0], s = this.D[1], u = this.D[2], f = this.D[3], l = this.D[4], n = 0; n < 80; n++) {
						n < 40 ? n < 20 ? (i = f ^ s & (u ^ f), a = 1518500249) : (i = s ^ u ^ f, a = 1859775393) : n < 60 ? (i = s & u | f & (s | u), a = 2400959708) : (i = s ^ u ^ f, a = 3395469782);
						var o = (c << 5 | c >>> 27) + i + l + a + r[n] & 4294967295;
						l = f, f = u, u = 4294967295 & (s << 30 | s >>> 2), s = c, c = o
					}
					this.D[0] = this.D[0] + c & 4294967295, this.D[1] = this.D[1] + s & 4294967295, this.D[2] = this.D[2] + u & 4294967295, this.D[3] = this.D[3] + f & 4294967295, this.D[4] = this.D[4] + l & 4294967295
				}, t.prototype.update = function(e, t) {
					if (null != e) {
						void 0 === t && (t = e.length);
						for (var r = t - this.blockSize, n = 0, o = this.I, i = this.L; n < t;) {
							if (0 == i)
								for (; n <= r;) this.B(e, n), n += this.blockSize;
							if ("string" == typeof e) {
								for (; n < t;)
									if (o[i] = e.charCodeAt(n), ++i, ++n, i == this.blockSize) {
										this.B(o), i = 0;
										break
									}
							} else
								for (; n < t;)
									if (o[i] = e[n], ++i, ++n, i == this.blockSize) {
										this.B(o), i = 0;
										break
									}
						}
						this.L = i, this.R += t
					}
				}, t.prototype.digest = function() {
					var e = [],
						t = 8 * this.R;
					this.L < 56 ? this.update(this.F, 56 - this.L) : this.update(this.F, this.blockSize - (this.L - 56));
					for (var r = this.blockSize - 1; r >= 56; r--) this.I[r] = 255 & t, t /= 256;
					this.B(this.I);
					for (var n = 0, r = 0; r < 5; r++)
						for (var o = 24; o >= 0; o -= 8) e[n] = this.D[r] >> o & 255, ++n;
					return e
				}, t
			}(o.Hash);
		t.Sha1 = i
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = function() {
			function e() {
				this.blockSize = -1
			}
			return e
		}();
		t.Hash = n
	}, function(e, t, r) {
		"use strict";

		function n(e, t) {
			var r = new c(e, t);
			return r.subscribe.bind(r)
		}

		function o(e, t) {
			return function() {
				for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
				Promise.resolve(!0).then(function() {
					e.apply(void 0, r)
				}).catch(function(e) {
					t && t(e)
				})
			}
		}

		function i(e, t) {
			if ("object" != typeof e || null === e) return !1;
			for (var r = 0, n = t; r < n.length; r++) {
				var o = n[r];
				if (o in e && "function" == typeof e[o]) return !0
			}
			return !1
		}

		function a() {}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.createSubscribe = n;
		var c = function() {
			function e(e, t) {
				var r = this;
				this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function() {
					e(r)
				}).catch(function(e) {
					r.error(e)
				})
			}
			return e.prototype.next = function(e) {
				this.forEachObserver(function(t) {
					t.next(e)
				})
			}, e.prototype.error = function(e) {
				this.forEachObserver(function(t) {
					t.error(e)
				}), this.close(e)
			}, e.prototype.complete = function() {
				this.forEachObserver(function(e) {
					e.complete()
				}), this.close()
			}, e.prototype.subscribe = function(e, t, r) {
				var n, o = this;
				if (void 0 === e && void 0 === t && void 0 === r) throw Error("Missing Observer.");
				n = i(e, ["next", "error", "complete"]) ? e : {
					next: e,
					error: t,
					complete: r
				}, void 0 === n.next && (n.next = a), void 0 === n.error && (n.error = a), void 0 === n.complete && (n.complete = a);
				var c = this.unsubscribeOne.bind(this, this.observers.length);
				return this.finalized && this.task.then(function() {
					try {
						o.finalError ? n.error(o.finalError) : n.complete()
					} catch (e) {}
				}), this.observers.push(n), c
			}, e.prototype.unsubscribeOne = function(e) {
				void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
			}, e.prototype.forEachObserver = function(e) {
				if (!this.finalized)
					for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
			}, e.prototype.sendOne = function(e, t) {
				var r = this;
				this.task.then(function() {
					if (void 0 !== r.observers && void 0 !== r.observers[e]) try {
						t(r.observers[e])
					} catch (e) {
						"undefined" != typeof console && console.error && console.error(e)
					}
				})
			}, e.prototype.close = function(e) {
				var t = this;
				this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function() {
					t.observers = void 0, t.onNoObservers = void 0
				}))
			}, e
		}();
		t.async = o
	}, function(e, t, r) {
		"use strict";

		function n(e, t, r) {
			var n = "";
			switch (t) {
				case 1:
					n = r ? "first" : "First";
					break;
				case 2:
					n = r ? "second" : "Second";
					break;
				case 3:
					n = r ? "third" : "Third";
					break;
				case 4:
					n = r ? "fourth" : "Fourth";
					break;
				default:
					throw Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
			}
			var o = e + " failed: ";
			return o += n + " argument "
		}

		function o(e, t, r, o) {
			if ((!o || r) && "string" != typeof r) throw Error(n(e, t, o) + "must be a valid firebase namespace.")
		}

		function i(e, t, r, o) {
			if ((!o || r) && "function" != typeof r) throw Error(n(e, t, o) + "must be a valid function.")
		}

		function a(e, t, r, o) {
			if ((!o || r) && ("object" != typeof r || null === r)) throw Error(n(e, t, o) + "must be a valid context object.")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.validateArgCount = function(e, t, r, n) {
			var o;
			if (n < t ? o = "at least " + t : n > r && (o = 0 === r ? "none" : "no more than " + r), o) {
				var i = e + " failed: Was called with " + n + (1 === n ? " argument." : " arguments.") + " Expects " + o + ".";
				throw Error(i)
			}
		}, t.errorPrefix = n, t.validateNamespace = o, t.validateCallback = i, t.validateContextObject = a
	}, function(e, t, r) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var n = r(28);
		t.stringToByteArray = function(e) {
			for (var t = [], r = 0, o = 0; o < e.length; o++) {
				var i = e.charCodeAt(o);
				if (i >= 55296 && i <= 56319) {
					var a = i - 55296;
					o++, n.assert(o < e.length, "Surrogate pair missing trail surrogate."), i = 65536 + (a << 10) + (e.charCodeAt(o) - 56320)
				}
				i < 128 ? t[r++] = i : i < 2048 ? (t[r++] = i >> 6 | 192, t[r++] = 63 & i | 128) : i < 65536 ? (t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128, t[r++] = 63 & i | 128) : (t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128, t[r++] = i >> 6 & 63 | 128, t[r++] = 63 & i | 128)
			}
			return t
		}, t.stringLength = function(e) {
			for (var t = 0, r = 0; r < e.length; r++) {
				var n = e.charCodeAt(r);
				n < 128 ? t++ : n < 2048 ? t += 2 : n >= 55296 && n <= 56319 ? (t += 4, r++) : t += 3
			}
			return t
		}
	}])
}().default;
/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
	webpackJsonpFirebase([4], {
		76: function(t, n, e) {
			e(77)
		},
		77: function(t, n, e) {
			(function(t) {
				(function() {
					function t(t) {
						return "string" == typeof t
					}

					function n(t) {
						return "boolean" == typeof t
					}

					function i() {}

					function r(t) {
						var n = typeof t;
						if ("object" == n) {
							if (!t) return "null";
							if (t instanceof Array) return "array";
							if (t instanceof Object) return n;
							var e = Object.prototype.toString.call(t);
							if ("[object Window]" == e) return "object";
							if ("[object Array]" == e || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
							if ("[object Function]" == e || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
						} else if ("function" == n && void 0 === t.call) return "object";
						return n
					}

					function o(t) {
						return null === t
					}

					function a(t) {
						return "array" == r(t)
					}

					function s(t) {
						var n = r(t);
						return "array" == n || "object" == n && "number" == typeof t.length
					}

					function u(t) {
						return "function" == r(t)
					}

					function c(t) {
						var n = typeof t;
						return "object" == n && null != t || "function" == n
					}

					function h(t, n, e) {
						return t.call.apply(t.bind, arguments)
					}

					function f(t, n, e) {
						if (!t) throw Error();
						if (2 < arguments.length) {
							var i = Array.prototype.slice.call(arguments, 2);
							return function() {
								var e = Array.prototype.slice.call(arguments);
								return Array.prototype.unshift.apply(e, i), t.apply(n, e)
							}
						}
						return function() {
							return t.apply(n, arguments)
						}
					}

					function l(t, n, e) {
						return l = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? h : f, l.apply(null, arguments)
					}

					function p(t, n) {
						var e = Array.prototype.slice.call(arguments, 1);
						return function() {
							var n = e.slice();
							return n.push.apply(n, arguments), t.apply(this, n)
						}
					}

					function d(t, n) {
						function e() {}
						e.prototype = n.prototype, t.ib = n.prototype, t.prototype = new e, t.prototype.constructor = t, t.Nc = function(t, e, i) {
							for (var r = Array(arguments.length - 2), o = 2; o < arguments.length; o++) r[o - 2] = arguments[o];
							return n.prototype[e].apply(t, r)
						}
					}

					function v(t) {
						if (Error.captureStackTrace) Error.captureStackTrace(this, v);
						else {
							var n = Error().stack;
							n && (this.stack = n)
						}
						t && (this.message = t + "")
					}

					function m(t, n) {
						for (var e = t.split("%s"), i = "", r = Array.prototype.slice.call(arguments, 1); r.length && 1 < e.length;) i += e.shift() + r.shift();
						return i + e.join("%s")
					}

					function g(t) {
						return wu.test(t) ? (-1 != t.indexOf("&") && (t = t.replace(pu, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(du, "&lt;")), -1 != t.indexOf(">") && (t = t.replace(vu, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(mu, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(gu, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(bu, "&#0;")), t) : t
					}

					function b(t, n) {
						return -1 != t.indexOf(n)
					}

					function w(t, n) {
						return t < n ? -1 : t > n ? 1 : 0
					}

					function y(t, n) {
						n.unshift(t), v.call(this, m.apply(null, n)), n.shift()
					}

					function I(t, n) {
						throw new y("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
					}

					function T(n, e) {
						var i = n.length,
							r = t(n) ? n.split("") : n;
						for (--i; 0 <= i; --i) i in r && e.call(void 0, r[i], i, n)
					}

					function k(n) {
						t: {
							for (var e = ke, i = n.length, r = t(n) ? n.split("") : n, o = 0; o < i; o++)
								if (o in r && e.call(void 0, r[o], o, n)) {
									e = o;
									break t
								}
							e = -1
						}
						return 0 > e ? null : t(n) ? n.charAt(e) : n[e]
					}

					function A(t, n) {
						return 0 <= Iu(t, n)
					}

					function E(t, n) {
						n = Iu(t, n);
						var e;
						return (e = 0 <= n) && Array.prototype.splice.call(t, n, 1), e
					}

					function N(t, n) {
						var e = 0;
						T(t, function(i, r) {
							n.call(void 0, i, r, t) && 1 == Array.prototype.splice.call(t, r, 1).length && e++
						})
					}

					function S(t) {
						return Array.prototype.concat.apply([], arguments)
					}

					function O(t) {
						var n = t.length;
						if (0 < n) {
							for (var e = Array(n), i = 0; i < n; i++) e[i] = t[i];
							return e
						}
						return []
					}

					function P(t) {
						return b(yu, t)
					}

					function C(t, n) {
						for (var e in t) n.call(void 0, t[e], e, t)
					}

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

					function D(t) {
						for (var n in t) return !1;
						return !0
					}

					function L(t, n) {
						for (var e in t)
							if (!(e in n) || t[e] !== n[e]) return !1;
						for (e in n)
							if (!(e in t)) return !1;
						return !0
					}

					function x(t) {
						var n, e = {};
						for (n in t) e[n] = t[n];
						return e
					}

					function j(t, n) {
						for (var e, i, r = 1; r < arguments.length; r++) {
							i = arguments[r];
							for (e in i) t[e] = i[e];
							for (var o = 0; o < Su.length; o++) e = Su[o], Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
						}
					}

					function U(t) {
						return U[" "](t), t
					}

					function M(t, n) {
						var e = Vu;
						return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : e[t] = n(t)
					}

					function V() {
						var t = uu.document;
						return t ? t.documentMode : void 0
					}

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

					function K(t) {
						t.prototype.then = t.prototype.then, t.prototype.$goog_Thenable = !0
					}

					function q(t) {
						if (!t) return !1;
						try {
							return !!t.$goog_Thenable
						} catch (t) {
							return !1
						}
					}

					function X(t, n, e) {
						this.f = e, this.c = t, this.g = n, this.b = 0, this.a = null
					}

					function B(t, n) {
						t.g(n), t.b < t.f && (t.b++, n.next = t.a, t.a = n)
					}

					function H() {
						var t = Hu,
							n = null;
						return t.a && (n = t.a, t.a = t.a.next, t.a || (t.b = null), n.next = null), n
					}

					function W() {
						this.next = this.b = this.a = null
					}

					function G(t) {
						uu.setTimeout(function() {
							throw t
						}, 0)
					}

					function z() {
						var t = uu.MessageChannel;
						if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !P("Presto") && (t = function() {
								var t = document.createElement("IFRAME");
								t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
								var n = t.contentWindow;
								t = n.document, t.open(), t.write(""), t.close();
								var e = "callImmediate" + Math.random(),
									i = "file:" == n.location.protocol ? "*" : n.location.protocol + "//" + n.location.host;
								t = l(function(t) {
									"*" != i && t.origin != i || t.data != e || this.port1.onmessage()
								}, this), n.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
									postMessage: function() {
										n.postMessage(e, i)
									}
								}
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
								function(t) {
									i.next = {
										pb: t
									}, i = i.next, n.port2.postMessage(0)
								}
						}
						return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) {
							var n = document.createElement("SCRIPT");
							n.onreadystatechange = function() {
								n.onreadystatechange = null, n.parentNode.removeChild(n), n = null, t(), t = null
							}, document.documentElement.appendChild(n)
						} : function(t) {
							uu.setTimeout(t, 0)
						}
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
							Xu = function() {
								t.then($)
							}
						} else Xu = function() {
							var t = $;
							!u(uu.setImmediate) || uu.Window && uu.Window.prototype && !P("Edge") && uu.Window.prototype.setImmediate == uu.setImmediate ? (qu || (qu = z()), qu(t)) : uu.setImmediate(t)
						}
					}

					function $() {
						for (var t; t = H();) {
							try {
								t.a.call(t.b)
							} catch (t) {
								G(t)
							}
							B(Ku, t)
						}
						Bu = !1
					}

					function Z(t, n) {
						if (this.a = Wu, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != i) try {
							var e = this;
							t.call(n, function(t) {
								ht(e, Gu, t)
							}, function(t) {
								if (!(t instanceof bt)) try {
									if (t instanceof Error) throw t;
									throw Error("Promise rejected.")
								} catch (t) {}
								ht(e, zu, t)
							})
						} catch (t) {
							ht(this, zu, t)
						}
					}

					function Q() {
						this.next = this.f = this.b = this.g = this.a = null, this.c = !1
					}

					function tt(t, n, e) {
						var i = Ju.get();
						return i.g = t, i.b = n, i.f = e, i
					}

					function nt(t) {
						if (t instanceof Z) return t;
						var n = new Z(i);
						return ht(n, Gu, t), n
					}

					function et(t) {
						return new Z(function(n, e) {
							e(t)
						})
					}

					function it(t, n, e) {
						ft(t, n, e, null) || J(p(n, t))
					}

					function rt(t) {
						return new Z(function(n, e) {
							var i = t.length,
								r = [];
							if (i)
								for (var o, a = function(t, e) {
										i--, r[t] = e, 0 == i && n(r)
									}, s = function(t) {
										e(t)
									}, u = 0; u < t.length; u++) o = t[u], it(o, p(a, u), s);
							else n(r)
						})
					}

					function ot(t) {
						return new Z(function(n) {
							var e = t.length,
								i = [];
							if (e)
								for (var r, o = function(t, r, o) {
										e--, i[t] = r ? {
											Qb: !0,
											value: o
										} : {
											Qb: !1,
											reason: o
										}, 0 == e && n(i)
									}, a = 0; a < t.length; a++) r = t[a], it(r, p(o, a, !0), p(o, a, !1));
							else n(i)
						})
					}

					function at(t, n) {
						return n = tt(n, n, void 0), n.c = !0, ut(t, n), t
					}

					function st(t, n) {
						if (t.a == Wu)
							if (t.c) {
								var e = t.c;
								if (e.b) {
									for (var i = 0, r = null, o = null, a = e.b; a && (a.c || (i++, a.a == t && (r = a), !(r && 1 < i))); a = a.next) r || (o = a);
									r && (e.a == Wu && 1 == i ? st(e, n) : (o ? (i = o, i.next == e.f && (e.f = i), i.next = i.next.next) : dt(e), vt(e, r, zu, n)))
								}
								t.c = null
							} else ht(t, zu, n)
					}

					function ut(t, n) {
						t.b || t.a != Gu && t.a != zu || pt(t), t.f ? t.f.next = n : t.b = n, t.f = n
					}

					function ct(t, n, e, i) {
						var r = tt(null, null, null);
						return r.a = new Z(function(t, o) {
							r.g = n ? function(e) {
								try {
									var r = n.call(i, e);
									t(r)
								} catch (t) {
									o(t)
								}
							} : t, r.b = e ? function(n) {
								try {
									var r = e.call(i, n);
									void 0 === r && n instanceof bt ? o(n) : t(r)
								} catch (t) {
									o(t)
								}
							} : o
						}), r.a.c = t, ut(t, r), r.a
					}

					function ht(t, n, e) {
						t.a == Wu && (t === e && (n = zu, e = new TypeError("Promise cannot resolve to itself")), t.a = 1, ft(e, t.wc, t.xc, t) || (t.i = e, t.a = n, t.c = null, pt(t), n != zu || e instanceof bt || gt(t, e)))
					}

					function ft(t, n, e, r) {
						if (t instanceof Z) return ut(t, tt(n || i, e || null, r)), !0;
						if (q(t)) return t.then(n, e, r), !0;
						if (c(t)) try {
							var o = t.then;
							if (u(o)) return lt(t, o, n, e, r), !0
						} catch (t) {
							return e.call(r, t), !0
						}
						return !1
					}

					function lt(t, n, e, i, r) {
						function o(t) {
							s || (s = !0, i.call(r, t))
						}

						function a(t) {
							s || (s = !0, e.call(r, t))
						}
						var s = !1;
						try {
							n.call(t, a, o)
						} catch (t) {
							o(t)
						}
					}

					function pt(t) {
						t.h || (t.h = !0, J(t.Mb, t))
					}

					function dt(t) {
						var n = null;
						return t.b && (n = t.b, t.b = n.next, n.next = null), t.b || (t.f = null), n
					}

					function vt(t, n, e, i) {
						if (e == zu && n.b && !n.c)
							for (; t && t.g; t = t.c) t.g = !1;
						if (n.a) n.a.c = null, mt(n, e, i);
						else try {
							n.c ? n.g.call(n.f) : mt(n, e, i)
						} catch (t) {
							Yu.call(null, t)
						}
						B(Ju, n)
					}

					function mt(t, n, e) {
						n == Gu ? t.g.call(t.f, e) : t.b && t.b.call(t.f, e)
					}

					function gt(t, n) {
						t.g = !0, J(function() {
							t.g && Yu.call(null, n)
						})
					}

					function bt(t) {
						v.call(this, t)
					}

					function wt() {
						this.a = "", this.b = Zu
					}

					function yt(t) {
						return t instanceof wt && t.constructor === wt && t.b === Zu ? t.a : (I("expected object of type Const, got '" + t + "'"), "type_error:Const")
					}

					function It(t) {
						var n = new wt;
						return n.a = t, n
					}

					function Tt() {
						this.a = "", this.b = nc
					}

					function kt(t) {
						return t instanceof Tt && t.constructor === Tt && t.b === nc ? t.a : (I("expected object of type TrustedResourceUrl, got '" + t + "' of type " + r(t)), "type_error:TrustedResourceUrl")
					}

					function At(t, n) {
						return t = Et(t, n), n = new Tt, n.a = t, n
					}

					function Et(t, n) {
						var e = yt(t);
						if (!tc.test(e)) throw Error("Invalid TrustedResourceUrl format: " + e);
						return e.replace(Qu, function(t, i) {
							if (!Object.prototype.hasOwnProperty.call(n, i)) throw Error('Found marker, "' + i + '", in format string, "' + e + '", but no valid label mapping found in args: ' + JSON.stringify(n));
							return t = n[i], t instanceof wt ? yt(t) : encodeURIComponent(t + "")
						})
					}

					function Nt() {
						this.a = "", this.b = ic
					}

					function St(t) {
						return t instanceof Nt && t.constructor === Nt && t.b === ic ? t.a : (I("expected object of type SafeUrl, got '" + t + "' of type " + r(t)), "type_error:SafeUrl")
					}

					function Ot(t) {
						return t instanceof Nt ? t : (t = t.la ? t.ja() : t + "", ec.test(t) || (t = "about:invalid#zClosurez"), Pt(t))
					}

					function Pt(t) {
						var n = new Nt;
						return n.a = t, n
					}

					function Ct() {
						this.a = "", this.b = rc
					}

					function _t(t) {
						return t instanceof Ct && t.constructor === Ct && t.b === rc ? t.a : (I("expected object of type SafeHtml, got '" + t + "' of type " + r(t)), "type_error:SafeHtml")
					}

					function Rt(t) {
						var n = new Ct;
						return n.a = t, n
					}

					function Dt(n) {
						var e = document;
						return t(n) ? e.getElementById(n) : n
					}

					function Lt(t, n) {
						C(n, function(n, e) {
							n && n.la && (n = n.ja()), "style" == e ? t.style.cssText = n : "class" == e ? t.className = n : "for" == e ? t.htmlFor = n : oc.hasOwnProperty(e) ? t.setAttribute(oc[e], n) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? t.setAttribute(e, n) : t[e] = n
						})
					}

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
						function r(i) {
							i && e.appendChild(t(i) ? n.createTextNode(i) : i)
						}
						for (var o = 2; o < i.length; o++) {
							var a = i[o];
							!s(a) || c(a) && 0 < a.nodeType ? r(a) : Tu(Ut(a) ? O(a) : a, r)
						}
					}

					function Ut(t) {
						if (t && "number" == typeof t.length) {
							if (c(t)) return "function" == typeof t.item || "string" == typeof t.item;
							if (u(t)) return "function" == typeof t.item
						}
						return !1
					}

					function Mt(t) {
						var n = [];
						return Ft(new Vt, t, n), n.join("")
					}

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
								if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
									e.push("{"), r = "";
									for (i in n) Object.prototype.hasOwnProperty.call(n, i) && "function" != typeof(o = n[i]) && (e.push(r), Kt(i, e), e.push(":"), Ft(t, o, e), r = ",");
									return void e.push("}")
								}
								n = n.valueOf()
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

					function Kt(t, n) {
						n.push('"', t.replace(sc, function(t) {
							var n = ac[t];
							return n || (n = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), ac[t] = n), n
						}), '"')
					}

					function qt() {
						0 != uc && (cc[this[cu] || (this[cu] = ++hu)] = this), this.oa = this.oa, this.Fa = this.Fa
					}

					function Xt(t) {
						t.oa || (t.oa = !0, t.ta(), 0 != uc && (t = t[cu] || (t[cu] = ++hu), delete cc[t]))
					}

					function Bt(t, n) {
						this.type = t, this.b = this.target = n, this.Ab = !0
					}

					function Ht(n, e) {
						if (Bt.call(this, n ? n.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, n) {
							var i = this.type = n.type,
								r = n.changedTouches ? n.changedTouches[0] : null;
							if (this.target = n.target || n.srcElement, this.b = e, e = n.relatedTarget) {
								if (Du) {
									t: {
										try {
											U(e.nodeName);
											var o = !0;
											break t
										} catch (t) {}
										o = !1
									}
									o || (e = null)
								}
							} else "mouseover" == i ? e = n.fromElement : "mouseout" == i && (e = n.toElement);
							this.relatedTarget = e, null === r ? (this.clientX = void 0 !== n.clientX ? n.clientX : n.pageX, this.clientY = void 0 !== n.clientY ? n.clientY : n.pageY, this.screenX = n.screenX || 0, this.screenY = n.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = n.button, this.key = n.key || "", this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.pointerId = n.pointerId || 0, this.pointerType = t(n.pointerType) ? n.pointerType : dc[n.pointerType] || "", this.a = n, n.defaultPrevented && this.c()
						}
					}

					function Wt(t, n, e, i, r) {
						this.listener = t, this.a = null, this.src = n, this.type = e, this.capture = !!i, this.La = r, this.key = ++mc, this.ma = this.Ha = !1
					}

					function Gt(t) {
						t.ma = !0, t.listener = null, t.a = null, t.src = null, t.La = null
					}

					function zt(t) {
						this.src = t, this.a = {}, this.b = 0
					}

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

					function $t(t, n, e, i) {
						for (var r = 0; r < t.length; ++r) {
							var o = t[r];
							if (!o.ma && o.listener == n && o.capture == !!e && o.La == i) return r
						}
						return -1
					}

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
							n = fc ? function(e) {
								return t.call(n.src, n.listener, e)
							} : function(e) {
								if (!(e = t.call(n.src, n.listener, e))) return e
							};
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

					function on(t) {
						return t in bc ? bc[t] : bc[t] = "on" + t
					}

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
									if (null == (e = e[n[i]])) {
										n = null;
										break t
									}
								n = e
							}
							if (i = n, n = new Ht(i, this), e = !0, !(0 > i.keyCode || void 0 != i.returnValue)) {
								t: {
									var r = !1;
									if (0 == i.keyCode) try {
										i.keyCode = -1;
										break t
									} catch (t) {
										r = !0
									}(r || void 0 == i.returnValue) && (i.returnValue = !0)
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

					function cn(t) {
						return t = t[gc], t instanceof zt ? t : null
					}

					function hn(t) {
						return u(t) ? t : (t[yc] || (t[yc] = function(n) {
							return t.handleEvent(n)
						}), t[yc])
					}

					function fn() {
						qt.call(this), this.u = new zt(this), this.Eb = this, this.Ra = null
					}

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

					function pn(t, n, e, i, r) {
						Jt(t.u, n + "", e, !1, i, r)
					}

					function dn(t, n, e, i, r) {
						Jt(t.u, n + "", e, !0, i, r)
					}

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

					function gn(t) {
						var n = null;
						return new Z(function(e, i) {
							-1 == (n = mn(function() {
								e(void 0)
							}, t)) && i(Error("Failed to schedule timer."))
						}).s(function(t) {
							throw uu.clearTimeout(n), t
						})
					}

					function bn(t, n, e, i, r) {
						this.reset(t, n, e, i, r)
					}

					function wn(t) {
						this.f = t, this.b = this.c = this.a = null
					}

					function yn(t, n) {
						this.name = t, this.value = n
					}

					function In(t) {
						return t.c ? t.c : t.a ? In(t.a) : (I("Root logger has no level set."), null)
					}

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

					function kn(t, n) {
						this.b = {}, this.a = [], this.c = 0;
						var e = arguments.length;
						if (1 < e) {
							if (e % 2) throw Error("Uneven number of arguments");
							for (var i = 0; i < e; i += 2) this.set(arguments[i], arguments[i + 1])
						} else if (t) {
							t instanceof kn ? (e = t.S(), i = t.P()) : (e = R(t), i = _(t));
							for (var r = 0; r < e.length; r++) this.set(e[r], i[r])
						}
					}

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

					function En(t, n) {
						return Object.prototype.hasOwnProperty.call(t, n)
					}

					function Nn(t, n) {
						t && t.log(Ac, n, void 0)
					}

					function Sn(t) {
						return ku(t, function(t) {
							return t = t.toString(16), 1 < t.length ? t : "0" + t
						}).join("")
					}

					function On(t) {
						var n = "";
						return Pn(t, function(t) {
							n += String.fromCharCode(t)
						}), n
					}

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

					function Cn() {
						if (!Sc) {
							Sc = {}, Oc = {};
							for (var t = 0; 65 > t; t++) Sc[t] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(t), Oc[Sc[t]] = t, 62 <= t && (Oc["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(t)] = t)
						}
					}

					function _n(t, n) {
						this.g = [], this.v = t, this.o = n || null, this.f = this.a = !1, this.c = void 0, this.u = this.w = this.i = !1, this.h = 0, this.b = null, this.l = 0
					}

					function Rn(t, n, e) {
						t.a = !0, t.c = e, t.f = !n, Un(t)
					}

					function Dn(t) {
						if (t.a) {
							if (!t.u) throw new Mn;
							t.u = !1
						}
					}

					function Ln(t, n) {
						xn(t, null, n, void 0)
					}

					function xn(t, n, e, i) {
						t.g.push([n, e, i]), t.a && Un(t)
					}

					function jn(t) {
						return Au(t.g, function(t) {
							return u(t[1])
						})
					}

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
							} catch (i) {
								n = i, t.f = !0, jn(t) || (e = !0)
							}
						}
						t.c = n, i && (s = l(t.m, t, !0), i = l(t.m, t, !1), n instanceof _n ? (xn(n, s, i), n.w = !0) : n.then(s, i)), e && (n = new Fn(n), Cc[n.a] = n, t.h = n.a)
					}

					function Mn() {
						v.call(this)
					}

					function Vn() {
						v.call(this)
					}

					function Fn(t) {
						this.a = uu.setTimeout(l(this.c, this), 0), this.b = t
					}

					function Kn() {
						this.b = -1
					}

					function qn(t, n) {
						this.b = -1, this.b = _c, this.f = uu.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = n, this.l = uu.Int32Array ? new Int32Array(64) : Array(64), Pc || (Pc = uu.Int32Array ? new Int32Array(jc) : jc), this.reset()
					}

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

					function Hn() {
						qn.call(this, 8, Uc)
					}

					function Wn(n) {
						if (n.P && "function" == typeof n.P) return n.P();
						if (t(n)) return n.split("");
						if (s(n)) {
							for (var e = [], i = n.length, r = 0; r < i; r++) e.push(n[r]);
							return e
						}
						return _(n)
					}

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
								} else o = t[e];
								n(o, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "")
							}
						}
					}

					function Yn(t, n) {
						if (this.b = this.l = this.c = "", this.i = null, this.h = this.g = "", this.f = !1, t instanceof Yn) {
							this.f = void 0 !== n ? n : t.f, $n(this, t.c), this.l = t.l, this.b = t.b, Zn(this, t.i), this.g = t.g, n = t.a;
							var e = new se;
							e.c = n.c, n.a && (e.a = new kn(n.a), e.b = n.b), Qn(this, e), this.h = t.h
						} else t && (e = (t + "").match(Mc)) ? (this.f = !!n, $n(this, e[1] || "", !0), this.l = re(e[2] || ""), this.b = re(e[3] || "", !0), Zn(this, e[4]), this.g = re(e[5] || "", !0), Qn(this, e[6] || "", !0), this.h = re(e[7] || "")) : (this.f = !!n, this.a = new se(null, 0, this.f))
					}

					function $n(t, n, e) {
						t.c = e ? re(n, !0) : n, t.c && (t.c = t.c.replace(/:$/, ""))
					}

					function Zn(t, n) {
						if (n) {
							if (n = +n, isNaN(n) || 0 > n) throw Error("Bad port number " + n);
							t.i = n
						} else t.i = null
					}

					function Qn(t, n, e) {
						n instanceof se ? (t.a = n, ve(t.a, t.f)) : (e || (n = oe(n, qc)), t.a = new se(n, 0, t.f))
					}

					function te(t, n, e) {
						t.a.set(n, e)
					}

					function ne(t, n) {
						return t.a.get(n)
					}

					function ee(t) {
						return t instanceof Yn ? new Yn(t) : new Yn(t, void 0)
					}

					function ie(t, n) {
						var e = new Yn(null, void 0);
						return $n(e, "https"), t && (e.b = t), n && (e.g = n), e
					}

					function re(t, n) {
						return t ? n ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
					}

					function oe(n, e, i) {
						return t(n) ? (n = encodeURI(n).replace(e, ae), i && (n = n.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), n) : null
					}

					function ae(t) {
						return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16)
					}

					function se(t, n, e) {
						this.b = this.a = null, this.c = t || null, this.f = !!e
					}

					function ue(t) {
						t.a || (t.a = new kn, t.b = 0, t.c && Jn(t.c, function(n, e) {
							he(t, decodeURIComponent(n.replace(/\+/g, " ")), e)
						}))
					}

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

					function fe(t, n) {
						ue(t), n = de(t, n), En(t.a.b, n) && (t.c = null, t.b -= t.a.get(n).length, t = t.a, En(t.b, n) && (delete t.b[n], t.c--, t.a.length > 2 * t.c && An(t)))
					}

					function le(t, n) {
						return ue(t), n = de(t, n), En(t.a.b, n)
					}

					function pe(t, n, e) {
						fe(t, n), 0 < e.length && (t.c = null, t.a.set(de(t, n), O(e)), t.b += e.length)
					}

					function de(t, n) {
						return n += "", t.f && (n = n.toLowerCase()), n
					}

					function ve(t, n) {
						n && !t.f && (ue(t), t.c = null, t.a.forEach(function(t, n) {
							var e = n.toLowerCase();
							n != e && (fe(this, n), pe(this, e, t))
						}, t)), t.f = n
					}

					function me() {}

					function ge(t) {
						return t.c || (t.c = t.b())
					}

					function be() {}

					function we(t) {
						if (!t.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
							for (var n = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], e = 0; e < 4; e++) {
								var i = n[e];
								try {
									return new ActiveXObject(i), t.f = i
								} catch (t) {}
							}
							throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
						}
						return t.f
					}

					function ye(t) {
						fn.call(this), this.headers = new kn, this.w = t || null, this.b = !1, this.v = this.a = null, this.g = this.I = this.i = "", this.c = this.G = this.h = this.A = !1, this.f = 0, this.m = null, this.l = Hc, this.o = this.N = !1
					}

					function Ie(t, n, e, i, r) {
						if (t.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + t.i + "; newUri=" + n);
						e = e ? e.toUpperCase() : "GET", t.i = n, t.g = "", t.I = e, t.A = !1, t.b = !0, t.a = t.w ? t.w.a() : Bc.a(), t.v = ge(t.w ? t.w : Bc), t.a.onreadystatechange = l(t.zb, t);
						try {
							Nn(t.J, Re(t, "Opening Xhr")), t.G = !0, t.a.open(e, n + "", !0), t.G = !1
						} catch (n) {
							return Nn(t.J, Re(t, "Error opening Xhr: " + n.message)), void Ae(t, n)
						}
						n = i || "";
						var o = new kn(t.headers);
						r && zn(r, function(t, n) {
							o.set(n, t)
						}), r = k(o.S()), i = uu.FormData && n instanceof uu.FormData, !A(Jc, e) || r || i || o.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), o.forEach(function(t, n) {
							this.a.setRequestHeader(n, t)
						}, t), t.l && (t.a.responseType = t.l), "withCredentials" in t.a && t.a.withCredentials !== t.N && (t.a.withCredentials = t.N);
						try {
							Oe(t), 0 < t.f && (t.o = Te(t.a), Nn(t.J, Re(t, "Will abort after " + t.f + "ms if incomplete, xhr2 " + t.o)), t.o ? (t.a.timeout = t.f, t.a.ontimeout = l(t.Ea, t)) : t.m = mn(t.Ea, t.f, t)), Nn(t.J, Re(t, "Sending request")), t.h = !0, t.a.send(n), t.h = !1
						} catch (n) {
							Nn(t.J, Re(t, "Send error: " + n.message)), Ae(t, n)
						}
					}

					function Te(t) {
						return Cu && F(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
					}

					function ke(t) {
						return "content-type" == t.toLowerCase()
					}

					function Ae(t, n) {
						t.b = !1, t.a && (t.c = !0, t.a.abort(), t.c = !1), t.g = n, Ee(t), Se(t)
					}

					function Ee(t) {
						t.A || (t.A = !0, ln(t, "complete"), ln(t, "error"))
					}

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
								else {
									try {
										var s = 2 < Pe(t) ? t.a.statusText : ""
									} catch (n) {
										Nn(t.J, "Can not get status: " + n.message), s = ""
									}
									t.g = s + " [" + Ce(t) + "]", Ee(t)
								}
							} finally {
								Se(t)
							}
						}
					}

					function Se(t, n) {
						if (t.a) {
							Oe(t);
							var e = t.a,
								r = t.v[0] ? i : null;
							t.a = null, t.v = null, n || ln(t, "ready");
							try {
								e.onreadystatechange = r
							} catch (n) {
								(t = t.J) && t.log(Tc, "Problem encountered resetting onreadystatechange: " + n.message, void 0)
							}
						}
					}

					function Oe(t) {
						t.a && t.o && (t.a.ontimeout = null), "number" == typeof t.m && (uu.clearTimeout(t.m), t.m = null)
					}

					function Pe(t) {
						return t.a ? t.a.readyState : 0
					}

					function Ce(t) {
						try {
							return 2 < Pe(t) ? t.a.status : -1
						} catch (t) {
							return -1
						}
					}

					function _e(t) {
						try {
							return t.a ? t.a.responseText : ""
						} catch (n) {
							return Nn(t.J, "Can not get responseText: " + n.message), ""
						}
					}

					function Re(t, n) {
						return n + " [" + t.I + " " + t.i + " " + Ce(t) + "]"
					}

					function De(t) {
						var n = {},
							e = n.document || document,
							i = kt(t),
							r = document.createElement("SCRIPT"),
							o = {
								Bb: r,
								Ea: void 0
							},
							a = new _n(xe, o),
							s = null,
							u = null != n.timeout ? n.timeout : 5e3;
						return 0 < u && (s = window.setTimeout(function() {
							je(r, !0);
							var t = new Ue(Zc, "Timeout reached for loading script " + i);
							Dn(a), Rn(a, !1, t)
						}, u), o.Ea = s), r.onload = r.onreadystatechange = function() {
							r.readyState && "loaded" != r.readyState && "complete" != r.readyState || (je(r, n.Oc || !1, s), a.A(null))
						}, r.onerror = function() {
							je(r, !0, s);
							var t = new Ue($c, "Error while loading script " + i);
							Dn(a), Rn(a, !1, t)
						}, o = n.attributes || {}, j(o, {
							type: "text/javascript",
							charset: "UTF-8"
						}), Lt(r, o), r.src = kt(t), Le(e).appendChild(r), a
					}

					function Le(t) {
						var n;
						return (n = (t || document).getElementsByTagName("HEAD")) && 0 != n.length ? n[0] : t.documentElement
					}

					function xe() {
						if (this && this.Bb) {
							var t = this.Bb;
							t && "SCRIPT" == t.tagName && je(t, !0, this.Ea)
						}
					}

					function je(t, n, e) {
						null != e && uu.clearTimeout(e), t.onload = i, t.onerror = i, t.onreadystatechange = i, n && window.setTimeout(function() {
							t && t.parentNode && t.parentNode.removeChild(t)
						}, 0)
					}

					function Ue(t, n) {
						var e = "Jsloader error (code #" + t + ")";
						n && (e += ": " + n), v.call(this, e), this.code = t
					}

					function Me() {}

					function Ve() {
						this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseText = "", this.status = -1, this.statusText = this.responseXML = null, this.a.onload = l(this.Sb, this), this.a.onerror = l(this.wb, this), this.a.onprogress = l(this.Tb, this), this.a.ontimeout = l(this.Ub, this)
					}

					function Fe(t, n) {
						t.readyState = n, t.onreadystatechange && t.onreadystatechange()
					}

					function Ke() {
						var t = ri();
						return Cu && !!Mu && 11 == Mu || /Edge\/\d+/.test(t)
					}

					function qe() {
						return uu.window && uu.window.location.href || ""
					}

					function Xe(t, n) {
						n = n || uu.window;
						var e = "about:blank";
						t && (e = St(Ot(t))), n.location.href = e
					}

					function Be(t, n) {
						var e, i = [];
						for (e in t) e in n ? typeof t[e] != typeof n[e] ? i.push(e) : a(t[e]) ? L(t[e], n[e]) || i.push(e) : "object" == typeof t[e] && null != t[e] && null != n[e] ? 0 < Be(t[e], n[e]).length && i.push(e) : t[e] !== n[e] && i.push(e) : i.push(e);
						for (e in n) e in t || i.push(e);
						return i
					}

					function He() {
						var t = ri();
						return !((t = ei(t) != nh ? null : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length ? parseInt(t[1], 10) : null) && 30 > t || Cu && Mu && !(9 < Mu))
					}

					function We(t) {
						return t = (t || ri()).toLowerCase(), !!(t.match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/))
					}

					function Ge(t) {
						t = t || uu.window;
						try {
							t.close()
						} catch (t) {}
					}

					function ze(t, n, e) {
						var i = "" + Math.floor(1e9 * Math.random());
						n = n || 500, e = e || 600;
						var r = (window.screen.availHeight - e) / 2,
							o = (window.screen.availWidth - n) / 2;
						n = {
							width: n,
							height: e,
							top: 0 < r ? r : 0,
							left: 0 < o ? o : 0,
							location: !0,
							resizable: !0,
							statusbar: !0,
							toolbar: !1
						}, e = ri().toLowerCase(), i && (n.target = i, b(e, "crios/") && (n.target = "_blank")), ei(ri()) == th && (t = t || "http://localhost", n.scrollbars = !0), e = t || "", (i = n) || (i = {}), t = window, n = e instanceof Nt ? e : Ot(void 0 !== e.href ? e.href : e + ""), e = i.target || e.target, r = [];
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
						if ((P("iPhone") && !P("iPod") && !P("iPad") || P("iPad") || P("iPod")) && t.navigator && t.navigator.standalone && e && "_self" != e ? (a = t.document.createElement("A"), n instanceof Nt || n instanceof Nt || (n = n.la ? n.ja() : n + "", ec.test(n) || (n = "about:invalid#zClosurez"), n = Pt(n)), a.href = St(n), a.setAttribute("target", e), i.noreferrer && a.setAttribute("rel", "noreferrer"), i = document.createEvent("MouseEvent"), i.initMouseEvent("click", !0, !0, t, 1), a.dispatchEvent(i), a = {}) : i.noreferrer ? (a = t.open("", e, a), t = St(n), a && (Ru && b(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, It("b/12014412, meta tag with sanitized URL"), t = '<META HTTP-EQUIV="refresh" content="0; url=' + g(t) + '">', t = Rt(t), a.document.write(_t(t)), a.document.close())) : a = t.open(St(n), e, a), a) try {
							a.focus()
						} catch (t) {}
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

					function Ye() {
						var t = null;
						return new Z(function(n) {
							"complete" == uu.document.readyState ? n() : (t = function() {
								n()
							}, nn(window, "load", t))
						}).s(function(n) {
							throw en(window, "load", t), n
						})
					}

					function $e() {
						return Ze(void 0) ? Ye().then(function() {
							return new Z(function(t, n) {
								var e = uu.document,
									i = setTimeout(function() {
										n(Error("Cordova framework is not ready."))
									}, 1e3);
								e.addEventListener("deviceready", function() {
									clearTimeout(i), t()
								}, !1)
							})
						}) : et(Error("Cordova must run in an Android or iOS file scheme."))
					}

					function Ze(t) {
						return t = t || ri(), !("file:" !== ci() || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
					}

					function Qe() {
						var t = uu.window;
						try {
							return !(!t || t == t.top)
						} catch (t) {
							return !1
						}
					}

					function ti() {
						return au.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : au.INTERNAL.hasOwnProperty("node") ? "Node" : "Browser"
					}

					function ni() {
						var t = ti();
						return "ReactNative" === t || "Node" === t
					}

					function ei(t) {
						var n = t.toLowerCase();
						return b(n, "opera/") || b(n, "opr/") || b(n, "opios/") ? "Opera" : b(n, "iemobile") ? "IEMobile" : b(n, "msie") || b(n, "trident/") ? "IE" : b(n, "edge/") ? "Edge" : b(n, "firefox/") ? th : b(n, "silk/") ? "Silk" : b(n, "blackberry") ? "Blackberry" : b(n, "webos") ? "Webos" : !b(n, "safari/") || b(n, "chrome/") || b(n, "crios/") || b(n, "android") ? !b(n, "chrome/") && !b(n, "crios/") || b(n, "edge/") ? b(n, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : nh : "Safari"
					}

					function ii(t, n) {
						n = n || [];
						var e, i = [],
							r = {};
						for (e in eh) r[eh[e]] = !0;
						for (e = 0; e < n.length; e++) void 0 !== r[n[e]] && (delete r[n[e]], i.push(n[e]));
						return i.sort(), n = i, n.length || (n = ["FirebaseCore-web"]), i = ti(), r = "", (r = "Browser" === i ? ei(ri()) : i) + "/JsCore/" + t + "/" + n.join(",")
					}

					function ri() {
						return uu.navigator && uu.navigator.userAgent || ""
					}

					function oi(t, n) {
						t = t.split("."), n = n || uu;
						for (var e = 0; e < t.length && "object" == typeof n && null != n; e++) n = n[t[e]];
						return e != t.length && (n = void 0), n
					}

					function ai() {
						try {
							var t = uu.localStorage,
								n = di();
							if (t) return t.setItem(n, "1"), t.removeItem(n), !Ke() || !!uu.indexedDB
						} catch (t) {}
						return !1
					}

					function si() {
						return (ui() || "chrome-extension:" === ci() || Ze()) && !ni() && ai()
					}

					function ui() {
						return "http:" === ci() || "https:" === ci()
					}

					function ci() {
						return uu.location && uu.location.protocol || null
					}

					function hi(t) {
						return t = t || ri(), !We(t) && ei(t) != th
					}

					function fi(t) {
						return void 0 === t ? null : Mt(t)
					}

					function li(t) {
						var n, e = {};
						for (n in t) t.hasOwnProperty(n) && null !== t[n] && void 0 !== t[n] && (e[n] = t[n]);
						return e
					}

					function pi(t) {
						if (null !== t) return JSON.parse(t)
					}

					function di(t) {
						return t || "" + Math.floor(1e9 * Math.random())
					}

					function vi(t) {
						return t = t || ri(), "Safari" != ei(t) && !t.toLowerCase().match(/iphone|ipad|ipod/)
					}

					function mi() {
						var t = uu.___jsl;
						if (t && t.H)
							for (var n in t.H)
								if (t.H[n].r = t.H[n].r || [], t.H[n].L = t.H[n].L || [], t.H[n].r = t.H[n].L.concat(), t.CP)
									for (var e = 0; e < t.CP.length; e++) t.CP[e] = null
					}

					function gi() {
						var t = uu.navigator;
						return !t || "boolean" != typeof t.onLine || !ui() && "chrome-extension:" !== ci() && void 0 === t.connection || t.onLine
					}

					function bi(t, n, e, i) {
						if (t > n) throw Error("Short delay should be less than long delay!");
						this.c = t, this.b = n, t = e || ri(), i = i || ti(), this.a = We(t) || "ReactNative" === i
					}

					function wi() {
						var t = uu.document;
						return !t || void 0 === t.visibilityState || "visible" == t.visibilityState
					}

					function yi() {
						var t = uu.document,
							n = null;
						return wi() || !t ? nt() : new Z(function(e) {
							n = function() {
								wi() && (t.removeEventListener("visibilitychange", n, !1), e())
							}, t.addEventListener("visibilitychange", n, !1)
						}).s(function(e) {
							throw t.removeEventListener("visibilitychange", n, !1), e
						})
					}

					function Ii(t) {
						try {
							var n = new Date(parseInt(t, 10));
							if (!isNaN(n.getTime()) && !/[^0-9]/.test(t)) return n.toUTCString()
						} catch (t) {}
						return null
					}

					function Ti(t, n, e) {
						ih ? Object.defineProperty(t, n, {
							configurable: !0,
							enumerable: !0,
							value: e
						}) : t[n] = e
					}

					function ki(t, n) {
						if (n)
							for (var e in n) n.hasOwnProperty(e) && Ti(t, e, n[e])
					}

					function Ai(t) {
						var n = {};
						return ki(n, t), n
					}

					function Ei(t) {
						var n, e = {};
						for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
						return e
					}

					function Ni(t, n) {
						if (!n || !n.length) return !0;
						if (!t) return !1;
						for (var e = 0; e < n.length; e++) {
							var i = t[n[e]];
							if (void 0 === i || null === i || "" === i) return !1
						}
						return !0
					}

					function Si(t) {
						var n = t;
						if ("object" == typeof t && null != t) {
							n = "length" in t ? [] : {};
							for (var e in t) Ti(n, e, Si(t[e]))
						}
						return n
					}

					function Oi(t) {
						var n = {},
							e = t[ah],
							i = t[sh];
						if (t = t[uh], !e || !t) throw Error("Invalid provider user info!");
						n[hh] = i || null, n[ch] = e, Ti(this, lh, t), Ti(this, fh, Si(n))
					}

					function Pi(t, n) {
						this.code = ph + t, this.message = n || dh[t] || ""
					}

					function Ci(t) {
						var n = t && t.code;
						return n ? new Pi(n.substring(ph.length), t.message) : null
					}

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
							} else {
								if (void 0 !== n) throw new Pi("argument-error", Ih + " property must be a non empty string when specified.");
								if (void 0 !== i || void 0 !== e) throw new Pi("missing-android-pkg-name")
							}
						} else if (void 0 !== e) throw new Pi("argument-error", vh + " property must be a non null object when specified.");
						if (this.b = null, (n = t[gh]) && "object" == typeof n) {
							if ("string" == typeof(n = n[Th]) && n.length) this.b = n;
							else if (void 0 !== n) throw new Pi("argument-error", Th + " property must be a non empty string when specified.")
						} else if (void 0 !== n) throw new Pi("argument-error", gh + " property must be a non null object when specified.");
						if (void 0 !== (t = t[mh]) && "boolean" != typeof t) throw new Pi("argument-error", mh + " property must be a boolean when specified.");
						if ((this.f = !!t) && !this.b && !this.a) throw new Pi("argument-error", mh + " property can't be true when no mobile application is provided.")
					}

					function Ri(t) {
						var n = {};
						n.continueUrl = t.h, n.canHandleCodeInApp = t.f, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.c, n.androidInstallApp = t.g), n.iOSBundleId = t.b;
						for (var e in n) null === n[e] && delete n[e];
						return n
					}

					function Di(t) {
						this.b = t.sub, fu(), this.a = t.provider_id || t.firebase && t.firebase.sign_in_provider || null
					}

					function Li(t) {
						if (t = t.split("."), 3 != t.length) return null;
						t = t[1];
						for (var n = (4 - t.length % 4) % 4, e = 0; e < n; e++) t += ".";
						try {
							var i = JSON.parse(On(t));
							if (i.sub && i.iss && i.aud && i.exp) return new Di(i)
						} catch (t) {}
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
						try {
							if (e) return n[e] ? new n[e](t) : new Mi(t);
							if (void 0 !== t[Nh]) return new Ui(t)
						} catch (t) {}
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

					function Mi(t) {
						Ui.call(this, t), t = pi(t.rawUserInfo || "{}"), Ti(this, "profile", Si(t || {}))
					}

					function Vi(t) {
						if (Mi.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!")
					}

					function Fi(t) {
						if (Mi.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
						Ti(this, "username", this.profile && this.profile.login || null)
					}

					function Ki(t) {
						if (Mi.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!")
					}

					function qi(t) {
						if (Mi.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
						Ti(this, "username", t.screenName || null)
					}

					function Xi(t, n) {
						return t.then(function(t) {
							if (t[Ph]) {
								var e = Li(t[Ph]);
								if (!e || n != e.b) throw new Pi("user-mismatch");
								return t
							}
							throw new Pi("user-mismatch")
						}).s(function(t) {
							throw t && t.code && t.code == ph + "user-not-found" ? new Pi("user-mismatch") : t
						})
					}

					function Bi(t, n) {
						if (n.idToken || n.accessToken) n.idToken && Ti(this, "idToken", n.idToken), n.accessToken && Ti(this, "accessToken", n.accessToken);
						else {
							if (!n.oauthToken || !n.oauthTokenSecret) throw new Pi("internal-error", "failed to construct a credential");
							Ti(this, "accessToken", n.oauthToken), Ti(this, "secret", n.oauthTokenSecret)
						}
						Ti(this, "providerId", t)
					}

					function Hi(t) {
						var n = {};
						return t.idToken && (n.id_token = t.idToken), t.accessToken && (n.access_token = t.accessToken), t.secret && (n.oauth_token_secret = t.secret), n.providerId = t.providerId, {
							postBody: "" + ce(n),
							requestUri: "http://localhost"
						}
					}

					function Wi(t, n) {
						this.nc = n || [], ki(this, {
							providerId: t,
							isOAuthProvider: !0
						}), this.qb = {}, this.Wa = (xi(t) || {}).Ma || null, this.Ua = null
					}

					function Gi(t) {
						Wi.call(this, t, Ah), this.a = []
					}

					function zi() {
						Gi.call(this, "facebook.com")
					}

					function Ji(t) {
						if (!t) throw new Pi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
						var n = t;
						return c(t) && (n = t.accessToken), (new zi).credential(null, n)
					}

					function Yi() {
						Gi.call(this, "github.com")
					}

					function $i(t) {
						if (!t) throw new Pi("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
						var n = t;
						return c(t) && (n = t.accessToken), (new Yi).credential(null, n)
					}

					function Zi() {
						Gi.call(this, "google.com"), this.sa("profile")
					}

					function Qi(t, n) {
						var e = t;
						return c(t) && (e = t.idToken, n = t.accessToken), (new Zi).credential(e, n)
					}

					function tr() {
						Wi.call(this, "twitter.com", kh)
					}

					function nr(t, n) {
						var e = t;
						if (c(e) || (e = {
								oauthToken: t,
								oauthTokenSecret: n
							}), !e.oauthToken || !e.oauthTokenSecret) throw new Pi("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
						return new Bi("twitter.com", e)
					}

					function er(t, n) {
						this.a = t, this.f = n, Ti(this, "providerId", "password")
					}

					function ir() {
						ki(this, {
							providerId: "password",
							isOAuthProvider: !1
						})
					}

					function rr(t) {
						if (!(t.Pa && t.Oa || t.Da && t.Y)) throw new Pi("internal-error");
						this.a = t, Ti(this, "providerId", "phone")
					}

					function or(t) {
						return t.a.Da && t.a.Y ? {
							temporaryProof: t.a.Da,
							phoneNumber: t.a.Y
						} : {
							sessionInfo: t.a.Pa,
							code: t.a.Oa
						}
					}

					function ar(t) {
						try {
							this.a = t || au.auth()
						} catch (t) {
							throw new Pi("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")
						}
						ki(this, {
							providerId: "phone",
							isOAuthProvider: !1
						})
					}

					function sr(t, n) {
						if (!t) throw new Pi("missing-verification-id");
						if (!n) throw new Pi("missing-verification-code");
						return new rr({
							Pa: t,
							Oa: n
						})
					}

					function ur(t) {
						if (t.temporaryProof && t.phoneNumber) return new rr({
							Da: t.temporaryProof,
							Y: t.phoneNumber
						});
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
						} catch (t) {
							return null
						}
					}

					function cr(t) {
						if (!t.isOAuthProvider) throw new Pi("invalid-oauth-provider")
					}

					function hr(t, n, e, i, r) {
						if (this.b = t, this.c = n || null, this.f = e || null, this.g = i || null, this.a = r || null, !this.f && !this.a) throw new Pi("invalid-auth-event");
						if (this.f && this.a) throw new Pi("invalid-auth-event");
						if (this.f && !this.g) throw new Pi("invalid-auth-event")
					}

					function fr(t) {
						return t = t || {}, t.type ? new hr(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && Ci(t.error)) : null
					}

					function lr(t) {
						var n = "unauthorized-domain",
							e = void 0,
							i = ee(t);
						t = i.b, i = i.c, "chrome-extension" == i ? e = m("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? e = m("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : n = "operation-not-supported-in-this-environment", Pi.call(this, n, e)
					}

					function pr(t, n, e) {
						Pi.call(this, t, e), t = n || {}, t.rb && Ti(this, "email", t.rb), t.Y && Ti(this, "phoneNumber", t.Y), t.credential && Ti(this, "credential", t.credential)
					}

					function dr(t) {
						if (t.code) {
							var n = t.code || "";
							0 == n.indexOf(ph) && (n = n.substring(ph.length));
							var e = {
								credential: ur(t)
							};
							if (t.email) e.rb = t.email;
							else {
								if (!t.phoneNumber) return new Pi(n, t.message || void 0);
								e.Y = t.phoneNumber
							}
							return new pr(n, e, t.message)
						}
						return null
					}

					function vr(t) {
						this.f = t
					}

					function mr(t, n, e) {
						var i = "Node" == ti();
						if (!(i = uu.XMLHttpRequest || i && au.INTERNAL.node && au.INTERNAL.node.XMLHttpRequest)) throw new Pi("internal-error", "The XMLHttpRequest compatibility library was not found.");
						this.b = t, t = n || {}, this.i = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.l = t.secureTokenTimeout || Ch, this.c = x(t.secureTokenHeaders || _h), this.g = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.h = t.firebaseTimeout || Rh, this.a = x(t.firebaseHeaders || Dh), e && (this.a["X-Client-Version"] = e, this.c["X-Client-Version"] = e), this.f = new Me, this.o = new vr(i)
					}

					function gr(t, n) {
						n ? t.a["X-Firebase-Locale"] = n : delete t.a["X-Firebase-Locale"]
					}

					function br(t, n) {
						n ? (t.a["X-Client-Version"] = n, t.c["X-Client-Version"] = n) : (delete t.a["X-Client-Version"], delete t.c["X-Client-Version"])
					}

					function wr(t, n, e, i, r, o, a) {
						gi() ? (He() ? t = l(t.m, t) : (Oh || (Oh = new Z(function(t, n) {
							yr(t, n)
						})), t = l(t.u, t)), t(n, e, i, r, o, a)) : e && e(null)
					}

					function yr(t, n) {
						((window.gapi || {}).client || {}).request ? t() : (uu[xh] = function() {
							((window.gapi || {}).client || {}).request ? t() : n(Error("CORS_UNSUPPORTED"))
						}, Ln(De(At(Lh, {
							onload: xh
						})), function() {
							n(Error("CORS_UNSUPPORTED"))
						}))
					}

					function Ir(t, n) {
						return new Z(function(e, i) {
							"refresh_token" == n.grant_type && n.refresh_token || "authorization_code" == n.grant_type && n.code ? wr(t, t.i + "?key=" + encodeURIComponent(t.b), function(t) {
								t ? t.error ? i(Vr(t)) : t.access_token && t.refresh_token ? e(t) : i(new Pi("internal-error")) : i(new Pi("network-request-failed"))
							}, "POST", "" + ce(n), t.c, t.l.get()) : i(new Pi("internal-error"))
						})
					}

					function Tr(t, n, e, i, r, o) {
						var a = ee(t.g + n);
						te(a, "key", t.b), o && te(a, "cb", "" + fu());
						var s = "GET" == e;
						if (s)
							for (var u in i) i.hasOwnProperty(u) && te(a, u, i[u]);
						return new Z(function(n, o) {
							wr(t, "" + a, function(t) {
								t ? t.error ? o(Vr(t, r || {})) : n(t) : o(new Pi("network-request-failed"))
							}, e, s ? void 0 : Mt(li(i)), t.a, t.h.get())
						})
					}

					function kr(t) {
						if (!Yc.test(t.email)) throw new Pi("invalid-email")
					}

					function Ar(t) {
						"email" in t && kr(t)
					}

					function Er(t, n) {
						return Ur(t, Kh, {
							identifier: n,
							continueUri: ui() ? qe() : "http://localhost"
						}).then(function(t) {
							return t.allProviders || []
						})
					}

					function Nr(t) {
						return Ur(t, Gh, {}).then(function(t) {
							return t.authorizedDomains || []
						})
					}

					function Sr(t) {
						if (!t[Ph]) throw new Pi("internal-error")
					}

					function Or(t) {
						if (t.phoneNumber || t.temporaryProof) {
							if (!t.phoneNumber || !t.temporaryProof) throw new Pi("internal-error")
						} else {
							if (!t.sessionInfo) throw new Pi("missing-verification-id");
							if (!t.code) throw new Pi("missing-verification-code")
						}
					}

					function Pr(t, n) {
						return Ur(t, Yh, n)
					}

					function Cr(t, n, e) {
						return Ur(t, Xh, {
							idToken: n,
							deleteProvider: e
						})
					}

					function _r(t) {
						if (!t.requestUri || !t.sessionId && !t.postBody) throw new Pi("internal-error")
					}

					function Rr(t) {
						var n = null;
						if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", n = dr(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", n = dr(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", n = dr(t)) : t.errorMessage && (n = Mr(t.errorMessage)), n) throw n;
						if (!t[Ph]) throw new Pi("internal-error")
					}

					function Dr(t, n) {
						return n.returnIdpCredential = !0, Ur(t, tf, n)
					}

					function Lr(t, n) {
						return n.returnIdpCredential = !0, Ur(t, ef, n)
					}

					function xr(t, n) {
						return n.returnIdpCredential = !0, n.autoCreate = !1, Ur(t, nf, n)
					}

					function jr(t) {
						if (!t.oobCode) throw new Pi("invalid-action-code")
					}

					function Ur(t, n, e) {
						if (!Ni(e, n.ea)) return et(new Pi("internal-error"));
						var i, r = n.yb || "POST";
						return nt(e).then(n.D).then(function() {
							return n.T && (e.returnSecureToken = !0), Tr(t, n.endpoint, r, e, n.Lb, n.nb || !1)
						}).then(function(t) {
							return i = t
						}).then(n.O).then(function() {
							if (!n.ga) return i;
							if (!(n.ga in i)) throw new Pi("internal-error");
							return i[n.ga]
						})
					}

					function Mr(t) {
						return Vr({
							error: {
								errors: [{
									message: t
								}],
								code: 400,
								message: t
							}
						})
					}

					function Vr(t, n) {
						var e = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
							i = {
								keyInvalid: "invalid-api-key",
								ipRefererBlocked: "app-not-authorized"
							};
						if (e = i[e] ? new Pi(i[e]) : null) return e;
						e = t.error && t.error.message || "", i = {
							INVALID_CUSTOM_TOKEN: "invalid-custom-token",
							CREDENTIAL_MISMATCH: "custom-token-mismatch",
							MISSING_CUSTOM_TOKEN: "internal-error",
							INVALID_IDENTIFIER: "invalid-email",
							MISSING_CONTINUE_URI: "internal-error",
							INVALID_EMAIL: "invalid-email",
							INVALID_PASSWORD: "wrong-password",
							USER_DISABLED: "user-disabled",
							MISSING_PASSWORD: "internal-error",
							EMAIL_EXISTS: "email-already-in-use",
							PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
							INVALID_IDP_RESPONSE: "invalid-credential",
							FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
							INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
							INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
							INVALID_SENDER: "invalid-sender",
							EMAIL_NOT_FOUND: "user-not-found",
							EXPIRED_OOB_CODE: "expired-action-code",
							INVALID_OOB_CODE: "invalid-action-code",
							MISSING_OOB_CODE: "internal-error",
							CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
							INVALID_ID_TOKEN: "invalid-user-token",
							TOKEN_EXPIRED: "user-token-expired",
							USER_NOT_FOUND: "user-token-expired",
							CORS_UNSUPPORTED: "cors-unsupported",
							DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
							INVALID_APP_ID: "invalid-app-id",
							TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
							WEAK_PASSWORD: "weak-password",
							OPERATION_NOT_ALLOWED: "operation-not-allowed",
							USER_CANCELLED: "user-cancelled",
							CAPTCHA_CHECK_FAILED: "captcha-check-failed",
							INVALID_APP_CREDENTIAL: "invalid-app-credential",
							INVALID_CODE: "invalid-verification-code",
							INVALID_PHONE_NUMBER: "invalid-phone-number",
							INVALID_SESSION_INFO: "invalid-verification-id",
							INVALID_TEMPORARY_PROOF: "invalid-credential",
							MISSING_APP_CREDENTIAL: "missing-app-credential",
							MISSING_CODE: "missing-verification-code",
							MISSING_PHONE_NUMBER: "missing-phone-number",
							MISSING_SESSION_INFO: "missing-verification-id",
							QUOTA_EXCEEDED: "quota-exceeded",
							SESSION_EXPIRED: "code-expired",
							INVALID_CONTINUE_URI: "invalid-continue-uri",
							MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
							MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
							UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
							INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
							INVALID_CERT_HASH: "invalid-cert-hash"
						}, j(i, n || {}), n = (n = e.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < n.length ? n[1] : void 0;
						for (var r in i)
							if (0 === e.indexOf(r)) return new Pi(i[r], n);
						return !n && t && (n = fi(t)), new Pi("internal-error", n)
					}

					function Fr(t) {
						for (var n in cf)
							if (cf[n].id === t) return t = cf[n], {
								firebaseEndpoint: t.Va,
								secureTokenEndpoint: t.ab
							};
						return null
					}

					function Kr(t) {
						this.b = t, this.a = null, this.Ya = qr(this)
					}

					function qr(t) {
						return Hr().then(function() {
							return new Z(function(n, e) {
								oi("gapi.iframes.getContext")().open({
									where: document.body,
									url: t.b,
									messageHandlersFilter: oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
									attributes: {
										style: {
											position: "absolute",
											top: "-100px",
											width: "1px",
											height: "1px"
										}
									},
									dontclear: !0
								}, function(i) {
									function r() {
										clearTimeout(o), n()
									}
									t.a = i, t.a.restyle({
										setHideOnLeave: !1
									});
									var o = setTimeout(function() {
										e(Error("Network Error"))
									}, lf.get());
									i.ping(r).then(r, function() {
										e(Error("Network Error"))
									})
								})
							})
						})
					}

					function Xr(t, n) {
						return t.Ya.then(function() {
							return new Z(function(e) {
								t.a.send(n.type, n, e, oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
							})
						})
					}

					function Br(t, n) {
						t.Ya.then(function() {
							t.a.register("authEvent", n, oi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))
						})
					}

					function Hr() {
						return pf || (pf = new Z(function(t, n) {
							if (gi()) {
								var e = function() {
									mi(), oi("gapi.load")("gapi.iframes", {
										callback: t,
										ontimeout: function() {
											mi(), n(Error("Network Error"))
										},
										timeout: ff.get()
									})
								};
								if (oi("gapi.iframes.Iframe")) t();
								else if (oi("gapi.load")) e();
								else {
									var i = "__iframefcb" + Math.floor(1e6 * Math.random());
									uu[i] = function() {
										oi("gapi.load") ? e() : n(Error("Network Error"))
									}, i = At(hf, {
										onload: i
									}), nt(De(i)).s(function() {
										n(Error("Network Error"))
									})
								}
							} else n(Error("Network Error"))
						}).s(function(t) {
							throw pf = null, t
						}))
					}

					function Wr(t, n, e) {
						this.i = t, this.g = n, this.h = e, this.f = null, this.a = ie(this.i, "/__/auth/iframe"), te(this.a, "apiKey", this.g), te(this.a, "appName", this.h), this.b = null, this.c = []
					}

					function Gr(t, n, e, i, r) {
						this.m = t, this.u = n, this.c = e, this.l = i, this.i = this.g = this.h = null, this.a = r, this.f = null
					}

					function zr(t) {
						try {
							return au.app(t).auth().Ka()
						} catch (t) {
							return []
						}
					}

					function Jr(t, n, e, i, r) {
						this.u = t, this.f = n, this.b = e, this.c = i || null, this.h = r || null, this.m = this.o = this.v = null, this.g = [], this.l = this.a = null
					}

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
									if (0 == o.indexOf("chrome-extension://") ? a = ee(o).b == a && "chrome-extension" == s : "http" != s && "https" != s ? a = !1 : Qc.test(o) ? a = a == o : (o = o.split(".").join("\\."), a = RegExp("^(.+\\." + o + "|" + o + ")$", "i").test(a)), a) {
										t = !0;
										break t
									}
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

					function Zr(t) {
						return t.m || (t.v = t.c ? ii(t.c, zr(t.b)) : null, t.m = new mr(t.f, Fr(t.h), t.v)), t.m
					}

					function Qr(t, n, e, i, r, o, a, s, u, c) {
						return t = new Gr(t, n, e, i, r), t.h = o, t.g = a, t.i = s, t.b = x(u || null), t.f = c, "" + t
					}

					function to(t) {
						if (!t.i) throw Error("IfcHandler must be initialized!");
						Br(t.i, function(n) {
							var e = {};
							if (n && n.authEvent) {
								var i = !1;
								for (n = fr(n.authEvent), e = 0; e < t.g.length; e++) i = t.g[e](n) || i;
								return e = {}, e.status = i ? "ACK" : "ERROR", nt(e)
							}
							return e.status = "ERROR", nt(e)
						})
					}

					function no(t) {
						var n = {
							type: "webStorageSupport"
						};
						return $r(t).then(function() {
							return Xr(t.i, n)
						}).then(function(t) {
							if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
							throw Error()
						})
					}

					function eo(t) {
						if (this.a = t || au.INTERNAL.reactNative && au.INTERNAL.reactNative.AsyncStorage, !this.a) throw new Pi("internal-error", "The React Native compatibility library was not found.")
					}

					function io() {
						this.a = {}
					}

					function ro(t, n, e, i, r, o) {
						try {
							var a = !!uu.indexedDB
						} catch (t) {
							a = !1
						}
						if (!a) throw new Pi("web-storage-unsupported");
						this.u = t, this.h = n, this.g = e, this.l = i, this.m = r, this.f = {}, this.c = [], this.a = 0, this.o = o || uu.indexedDB
					}

					function oo(t) {
						return new Z(function(n, e) {
							var i = t.o.open(t.u, t.m);
							i.onerror = function(t) {
								e(Error(t.target.errorCode))
							}, i.onupgradeneeded = function(n) {
								n = n.target.result;
								try {
									n.createObjectStore(t.h, {
										keyPath: t.g
									})
								} catch (t) {
									e(t)
								}
							}, i.onsuccess = function(t) {
								n(t.target.result)
							}
						})
					}

					function ao(t) {
						return t.i || (t.i = oo(t)), t.i
					}

					function so(t, n) {
						return n.objectStore(t.h)
					}

					function uo(t, n, e) {
						return n.transaction([t.h], e ? "readwrite" : "readonly")
					}

					function co(t) {
						return new Z(function(n, e) {
							t.onsuccess = function(t) {
								t && t.target ? n(t.target.result) : n()
							}, t.onerror = function(t) {
								e(Error(t.target.errorCode))
							}
						})
					}

					function ho(t) {
						function n() {
							return t.b = gn(800).then(l(t.vc, t)).then(function(n) {
								0 < n.length && Tu(t.c, function(t) {
									t(n)
								})
							}).then(n).s(function(t) {
								"STOP_EVENT" != t.message && n()
							}), t.b
						}
						t.b && t.b.cancel("STOP_EVENT"), n()
					}

					function fo() {
						if (!po()) {
							if ("Node" == ti()) throw new Pi("internal-error", "The LocalStorage compatibility library was not found.");
							throw new Pi("web-storage-unsupported")
						}
						this.a = lo() || au.INTERNAL.node.localStorage
					}

					function lo() {
						try {
							var t = uu.localStorage,
								n = di();
							return t && (t.setItem(n, "1"), t.removeItem(n)), t
						} catch (t) {
							return null
						}
					}

					function po() {
						var t = "Node" == ti();
						if (!(t = lo() || t && au.INTERNAL.node && au.INTERNAL.node.localStorage)) return !1;
						try {
							return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
						} catch (t) {
							return !1
						}
					}

					function vo() {}

					function mo() {
						if (!bo()) {
							if ("Node" == ti()) throw new Pi("internal-error", "The SessionStorage compatibility library was not found.");
							throw new Pi("web-storage-unsupported")
						}
						this.a = go() || au.INTERNAL.node.sessionStorage
					}

					function go() {
						try {
							var t = uu.sessionStorage,
								n = di();
							return t && (t.setItem(n, "1"), t.removeItem(n)), t
						} catch (t) {
							return null
						}
					}

					function bo() {
						var t = "Node" == ti();
						if (!(t = go() || t && au.INTERNAL.node && au.INTERNAL.node.sessionStorage)) return !1;
						try {
							return t.setItem("__sak", "1"), t.removeItem("__sak"), !0
						} catch (t) {
							return !1
						}
					}

					function wo() {
						var t = {};
						t.Browser = gf, t.Node = bf, t.ReactNative = wf, this.a = t[ti()]
					}

					function yo(t) {
						var n = new Pi("invalid-persistence-type"),
							e = new Pi("unsupported-persistence-type");
						t: {
							for (i in yf)
								if (yf[i] == t) {
									var i = !0;
									break t
								}
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
							if (Ke()) {
								df || (df = new ro("firebaseLocalStorageDb", "firebaseLocalStorage", "fbase_key", "value", 1));
								var o = df
							} else o = new t.a.C;
							this.l = o
						} catch (t) {
							this.l = new io, this.u = !0
						}
						try {
							this.o = new t.a.jb
						} catch (t) {
							this.o = new io
						}
						this.w = new io, this.h = l(this.m, this), this.b = {}
					}

					function To() {
						return mf || (mf = new Io("firebase", ":", !(vi(ri()) || !Qe()), hi(), ai())), mf
					}

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

					function Ao(t, n, e) {
						return t.i + t.g + n.name + (e ? t.g + e : "")
					}

					function Eo(t, n, e) {
						return e = Ao(t, n, e), "local" == n.C && (t.b[e] = null), ko(t, n.C).X(e)
					}

					function No(t, n, e, i) {
						n = Ao(t, n, e), t.v && (t.b[n] = uu.localStorage.getItem(n)), D(t.a) && (ko(t, "local").ia(t.h), t.u || Ke() || !t.v || Oo(t)), t.a[n] || (t.a[n] = []), t.a[n].push(i)
					}

					function So(t, n, e) {
						n = Ao(t, cs("local"), n), t.a[n] && (N(t.a[n], function(t) {
							return t == e
						}), 0 == t.a[n].length && delete t.a[n]), D(t.a) && Co(t)
					}

					function Oo(t) {
						Po(t), t.f = setInterval(function() {
							for (var n in t.a) {
								var e = uu.localStorage.getItem(n),
									i = t.b[n];
								e != i && (t.b[n] = e, e = new Ht({
									type: "storage",
									key: n,
									target: window,
									oldValue: i,
									newValue: e,
									a: !0
								}), t.m(e))
							}
						}, 1e3)
					}

					function Po(t) {
						t.f && (clearInterval(t.f), t.f = null)
					}

					function Co(t) {
						ko(t, "local").da(t.h), Po(t)
					}

					function _o(t) {
						this.a = t, this.b = To()
					}

					function Ro(t) {
						return t.b.get(If, t.a).then(function(t) {
							return fr(t)
						})
					}

					function Do() {
						this.a = To()
					}

					function Lo(t, n, e, i, r, o, a) {
						this.u = t, this.i = n, this.l = e, this.m = i || null, this.o = a || null, this.h = n + ":" + e, this.A = new Do, this.g = new _o(this.h), this.f = null, this.b = [], this.v = r || 500, this.w = o || 2e3, this.a = this.c = null
					}

					function xo(t) {
						return new Pi("invalid-cordova-configuration", t)
					}

					function jo() {
						for (var t = 20, n = []; 0 < t;) n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--;
						return n.join("")
					}

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
						return t.ba().then(function() {
							var n = t.h;
							return t.A.a.set(If, o.B(), n)
						}).then(function() {
							var n = oi("cordova.plugins.browsertab.isAvailable", uu);
							if ("function" != typeof n) throw new Pi("invalid-cordova-configuration");
							var e = null;
							n(function(n) {
								if (n) {
									if ("function" != typeof(e = oi("cordova.plugins.browsertab.openUrl", uu))) throw new Pi("invalid-cordova-configuration");
									e(c)
								} else {
									if ("function" != typeof(e = oi("cordova.InAppBrowser.open", uu))) throw new Pi("invalid-cordova-configuration");
									n = ri(), n = !(!n.match(/(iPad|iPhone|iPod).*OS 7_\d/i) && !n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)), t.a = e(c, n ? "_blank" : "_system", "location=yes")
								}
							})
						})
					}

					function Vo(t, n) {
						for (var e = 0; e < t.b.length; e++) try {
							t.b[e](n)
						} catch (t) {}
					}

					function Fo(t) {
						return t.f || (t.f = t.ba().then(function() {
							return new Z(function(n) {
								function e(i) {
									return n(i), t.Ja(e), !1
								}
								t.ua(e), qo(t)
							})
						})), t.f
					}

					function Ko(t) {
						var n = null;
						return Ro(t.g).then(function(e) {
							return n = e, e = t.g, Eo(e.b, If, e.a)
						}).then(function() {
							return n
						})
					}

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
							o = gn(t.v).then(function() {
								return Ko(t).then(function() {
									r || Vo(t, i)
								})
							}),
							a = uu.handleOpenURL;
						uu.handleOpenURL = function(t) {
							if (0 == t.toLowerCase().indexOf(oi("BuildInfo.packageName", uu).toLowerCase() + "://") && n({
									url: t
								}), "function" == typeof a) try {
								a(t)
							} catch (t) {
								console.error(t)
							}
						}, e(null, n)
					}

					function Xo(t) {
						this.a = t, this.b = To()
					}

					function Bo(t) {
						return t.b.set(Tf, "pending", t.a)
					}

					function Ho(t) {
						return Eo(t.b, Tf, t.a)
					}

					function Wo(t) {
						return t.b.get(Tf, t.a).then(function(t) {
							return "pending" == t
						})
					}

					function Go(t, n, e) {
						this.v = t, this.l = n, this.u = e, this.h = [], this.f = !1, this.i = l(this.m, this), this.c = new ta, this.o = new sa, this.g = new Xo(this.l + ":" + this.u), this.b = {}, this.b.unknown = this.c, this.b.signInViaRedirect = this.c, this.b.linkViaRedirect = this.c, this.b.reauthViaRedirect = this.c, this.b.signInViaPopup = this.o, this.b.linkViaPopup = this.o, this.b.reauthViaPopup = this.o, this.a = zo(this.v, this.l, this.u, Uh)
					}

					function zo(t, n, e, i) {
						var r = au.SDK_VERSION || null;
						return Ze() ? new Lo(t, n, e, r, void 0, void 0, i) : new Jr(t, n, e, r, i)
					}

					function Jo(t) {
						t.f || (t.f = !0, t.a.ua(t.i));
						var n = t.a;
						return t.a.ba().s(function(e) {
							throw t.a == n && t.reset(), e
						})
					}

					function Yo(t) {
						t.a.Cb() && Jo(t).s(function(n) {
							var e = new hr("unknown", null, null, null, new Pi("operation-not-supported-in-this-environment"));
							Zo(n) && t.m(e)
						}), t.a.xb() || na(t.c)
					}

					function $o(t, n, e, i, r, o) {
						return t.a.ub(n, e, i, function() {
							t.f || (t.f = !0, t.a.ua(t.i))
						}, function() {
							t.reset()
						}, r, o)
					}

					function Zo(t) {
						return !(!t || "auth/cordova-not-ready" != t.code)
					}

					function Qo(t, n, e) {
						var i = n + ":" + e;
						return Ef[i] || (Ef[i] = new Go(t, n, e)), Ef[i]
					}

					function ta() {
						this.b = null, this.f = [], this.c = [], this.a = null, this.g = !1
					}

					function na(t) {
						t.g || (t.g = !0, oa(t, !1, null, null))
					}

					function ea(t, n, e) {
						e = e.va(n.b, n.c);
						var i = n.f,
							r = n.g,
							o = !!n.b.match(/Redirect$/);
						return e(i, r).then(function(n) {
							oa(t, o, n, null)
						}).s(function(n) {
							oa(t, o, null, n)
						})
					}

					function ia(t, n) {
						if (t.b = function() {
								return et(n)
							}, t.c.length)
							for (var e = 0; e < t.c.length; e++) t.c[e](n)
					}

					function ra(t, n) {
						if (t.b = function() {
								return nt(n)
							}, t.f.length)
							for (var e = 0; e < t.f.length; e++) t.f[e](n)
					}

					function oa(t, n, e, i) {
						n ? i ? ia(t, i) : ra(t, e) : ra(t, {
							user: null
						}), t.f = [], t.c = []
					}

					function aa(t) {
						var n = new Pi("timeout");
						t.a && t.a.cancel(), t.a = gn(Af.get()).then(function() {
							t.b || oa(t, !0, null, n)
						})
					}

					function sa() {}

					function ua(t, n) {
						var e = t.c,
							i = t.b;
						return n.va(i, e)(t.f, t.g).then(function(t) {
							n.fa(i, t, null, e)
						}).s(function(t) {
							n.fa(i, null, t, e)
						})
					}

					function ca(t, n) {
						this.a = n, Ti(this, "verificationId", t)
					}

					function ha(t, n, e, i) {
						return new ar(t).Qa(n, e).then(function(t) {
							return new ca(t, i)
						})
					}

					function fa(t, n, e, i, r, o) {
						if (this.h = t, this.i = n, this.g = e, this.c = i, this.f = r, this.l = !!o, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!")
					}

					function la(t, n) {
						return n ? (t.a = t.c, t.g()) : (n = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), n)
					}

					function pa(t, n) {
						da(t), t.b = gn(la(t, n)).then(function() {
							return t.l ? nt() : yi()
						}).then(function() {
							return t.h()
						}).then(function() {
							pa(t, !0)
						}).s(function(n) {
							t.i(n) && pa(t, !1)
						})
					}

					function da(t) {
						t.b && (t.b.cancel(), t.b = null)
					}

					function va(t) {
						this.f = t, this.b = this.a = null, this.c = 0
					}

					function ma(t, n) {
						var e = n[Ph],
							i = n.refreshToken;
						n = ga(n.expiresIn), t.b = e, t.c = n, t.a = i
					}

					function ga(t) {
						return fu() + 1e3 * parseInt(t, 10)
					}

					function ba(t, n) {
						return Ir(t.f, n).then(function(n) {
							return t.b = n.access_token, t.c = ga(n.expires_in), t.a = n.refresh_token, {
								accessToken: t.b,
								expirationTime: t.c,
								refreshToken: t.a
							}
						}).s(function(n) {
							throw "auth/user-token-expired" == n.code && (t.a = null), n
						})
					}

					function wa(t, n) {
						this.a = t || null, this.b = n || null, ki(this, {
							lastSignInTime: Ii(n || null),
							creationTime: Ii(t || null)
						})
					}

					function ya(t) {
						return new wa(t.a, t.b)
					}

					function Ia(t, n, e, i, r, o) {
						ki(this, {
							uid: t,
							displayName: i || null,
							photoURL: r || null,
							email: e || null,
							phoneNumber: o || null,
							providerId: n
						})
					}

					function Ta(t, n) {
						Bt.call(this, t);
						for (var e in n) this[e] = n[e]
					}

					function ka(t, n, e) {
						this.A = [], this.G = t.apiKey, this.o = t.appName, this.w = t.authDomain || null, t = au.SDK_VERSION ? ii(au.SDK_VERSION) : null, this.c = new mr(this.G, Fr(Uh), t), this.h = new va(this.c), _a(this, n[Ph]), ma(this.h, n), Ti(this, "refreshToken", this.h.a), xa(this, e || {}), fn.call(this), this.I = !1, this.w && si() && (this.a = Qo(this.w, this.G, this.o)), this.N = [], this.i = null, this.l = Oa(this), this.U = l(this.Ga, this);
						var i = this;
						this.ha = null, this.ra = function(t) {
							i.na(t.h)
						}, this.W = null, this.R = [], this.qa = function(t) {
							Ea(i, t.f)
						}, this.V = null
					}

					function Aa(t, n) {
						t.W && en(t.W, "languageCodeChanged", t.ra), (t.W = n) && Zt(n, "languageCodeChanged", t.ra)
					}

					function Ea(t, n) {
						t.R = n, br(t.c, au.SDK_VERSION ? ii(au.SDK_VERSION, t.R) : null)
					}

					function Na(t, n) {
						t.V && en(t.V, "frameworkChanged", t.qa), (t.V = n) && Zt(n, "frameworkChanged", t.qa)
					}

					function Sa(t) {
						try {
							return au.app(t.o).auth()
						} catch (n) {
							throw new Pi("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + t.o + "'!")
						}
					}

					function Oa(t) {
						return new fa(function() {
							return t.F(!0)
						}, function(t) {
							return !(!t || "auth/network-request-failed" != t.code)
						}, function() {
							var n = t.h.c - fu() - 3e5;
							return 0 < n ? n : 0
						}, 3e4, 96e4, !1)
					}

					function Pa(t) {
						t.m || t.l.b || (t.l.start(), en(t, "tokenChanged", t.U), Zt(t, "tokenChanged", t.U))
					}

					function Ca(t) {
						en(t, "tokenChanged", t.U), da(t.l)
					}

					function _a(t, n) {
						t.pa = n, Ti(t, "_lat", n)
					}

					function Ra(t, n) {
						N(t.N, function(t) {
							return t == n
						})
					}

					function Da(t) {
						for (var n = [], e = 0; e < t.N.length; e++) n.push(t.N[e](t));
						return ot(n).then(function() {
							return t
						})
					}

					function La(t) {
						t.a && !t.I && (t.I = !0, t.a.subscribe(t))
					}

					function xa(t, n) {
						ki(t, {
							uid: n.uid,
							displayName: n.displayName || null,
							photoURL: n.photoURL || null,
							email: n.email || null,
							emailVerified: n.emailVerified || !1,
							phoneNumber: n.phoneNumber || null,
							isAnonymous: n.isAnonymous || !1,
							metadata: new wa(n.createdAt, n.lastLoginAt),
							providerData: []
						})
					}

					function ja() {}

					function Ua(t) {
						return nt().then(function() {
							if (t.m) throw new Pi("app-deleted")
						})
					}

					function Ma(t) {
						return ku(t.providerData, function(t) {
							return t.providerId
						})
					}

					function Va(t, n) {
						n && (Fa(t, n.providerId), t.providerData.push(n))
					}

					function Fa(t, n) {
						N(t.providerData, function(t) {
							return t.providerId == n
						})
					}

					function Ka(t, n, e) {
						("uid" != n || e) && t.hasOwnProperty(n) && Ti(t, n, e)
					}

					function qa(t, n) {
						t != n && (ki(t, {
							uid: n.uid,
							displayName: n.displayName,
							photoURL: n.photoURL,
							email: n.email,
							emailVerified: n.emailVerified,
							phoneNumber: n.phoneNumber,
							isAnonymous: n.isAnonymous,
							providerData: []
						}), n.metadata ? Ti(t, "metadata", ya(n.metadata)) : Ti(t, "metadata", new wa), Tu(n.providerData, function(n) {
							Va(t, n)
						}), t.h = n.h, Ti(t, "refreshToken", t.h.a))
					}

					function Xa(t) {
						return t.F().then(function(n) {
							var e = t.isAnonymous;
							return Ha(t, n).then(function() {
								return e || Ka(t, "isAnonymous", !1), n
							})
						})
					}

					function Ba(t, n) {
						n[Ph] && t.pa != n[Ph] && (ma(t.h, n), ln(t, new Ta("tokenChanged")), _a(t, n[Ph]), Ka(t, "refreshToken", t.h.a))
					}

					function Ha(t, n) {
						return Ur(t.c, Bh, {
							idToken: n
						}).then(l(t.gc, t))
					}

					function Wa(t) {
						return (t = t.providerUserInfo) && t.length ? ku(t, function(t) {
							return new Ia(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber)
						}) : []
					}

					function Ga(t, n) {
						return Xa(t).then(function() {
							if (A(Ma(t), n)) return Da(t).then(function() {
								throw new Pi("provider-already-linked")
							})
						})
					}

					function za(t, n, e) {
						var i = ur(n);
						return n = ji(n), Ai({
							user: t,
							credential: i,
							additionalUserInfo: n,
							operationType: e
						})
					}

					function Ja(t, n) {
						return Ba(t, n), t.reload().then(function() {
							return t
						})
					}

					function Ya(t, n, e, i, r) {
						if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
						if (t.i && !r) return et(t.i);
						var o = xi(e.providerId),
							a = di(t.uid + ":::"),
							s = null;
						(!hi() || Qe()) && t.w && e.isOAuthProvider && (s = Qr(t.w, t.G, t.o, n, e, null, a, au.SDK_VERSION || null));
						var u = ze(s, o && o.za, o && o.ya);
						return i = i().then(function() {
							if (Za(t), !r) return t.F().then(function() {})
						}).then(function() {
							return $o(t.a, u, n, e, a, !!s)
						}).then(function() {
							return new Z(function(e, i) {
								t.fa(n, null, new Pi("cancelled-popup-request"), t.g || null), t.f = e, t.v = i, t.g = a, t.b = t.a.Ca(t, n, u, a)
							})
						}).then(function(t) {
							return u && Ge(u), t ? Ai(t) : null
						}).s(function(t) {
							throw u && Ge(u), t
						}), Qa(t, i, r)
					}

					function $a(t, n, e, i, r) {
						if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
						if (t.i && !r) return et(t.i);
						var o = null,
							a = di(t.uid + ":::");
						return i = i().then(function() {
							if (Za(t), !r) return t.F().then(function() {})
						}).then(function() {
							return t.Z = a, Da(t)
						}).then(function(n) {
							return t.ca && (n = t.ca, n = n.b.set(Nf, t.B(), n.a)), n
						}).then(function() {
							return t.a.Aa(n, e, a)
						}).s(function(n) {
							if (o = n, t.ca) return rs(t.ca);
							throw o
						}).then(function() {
							if (o) throw o
						}), Qa(t, i, r)
					}

					function Za(t) {
						if (!t.a || !t.I) {
							if (t.a && !t.I) throw new Pi("internal-error");
							throw new Pi("auth-domain-config-required")
						}
					}

					function Qa(t, n, e) {
						var i = ts(t, n, e);
						return t.A.push(i), at(i, function() {
							E(t.A, i)
						}), i
					}

					function ts(t, n, e) {
						return t.i && !e ? (n.cancel(), et(t.i)) : n.s(function(n) {
							throw !n || "auth/user-disabled" != n.code && "auth/user-token-expired" != n.code || (t.i || ln(t, new Ta("userInvalidated")), t.i = n), n
						})
					}

					function ns(t) {
						if (!t.apiKey) return null;
						var n = {
								apiKey: t.apiKey,
								authDomain: t.authDomain,
								appName: t.appName
							},
							e = {};
						if (!(t.stsTokenManager && t.stsTokenManager.accessToken && t.stsTokenManager.expirationTime)) return null;
						e[Ph] = t.stsTokenManager.accessToken, e.refreshToken = t.stsTokenManager.refreshToken || null, e.expiresIn = (t.stsTokenManager.expirationTime - fu()) / 1e3;
						var i = new ka(n, e, t);
						return t.providerData && Tu(t.providerData, function(t) {
							t && Va(i, Ai(t))
						}), t.redirectEventId && (i.Z = t.redirectEventId), i
					}

					function es(t, n, e, i) {
						var r = new ka(t, n);
						return e && (r.ca = e), i && Ea(r, i), r.reload().then(function() {
							return r
						})
					}

					function is(t) {
						this.a = t, this.b = To()
					}

					function rs(t) {
						return Eo(t.b, Nf, t.a)
					}

					function os(t, n) {
						return t.b.get(Nf, t.a).then(function(t) {
							return t && n && (t.authDomain = n), ns(t || {})
						})
					}

					function as(t, n) {
						this.a = t, this.b = n || To(), this.c = null, this.f = us(this), No(this.b, cs("local"), this.a, l(this.g, this))
					}

					function ss(t, n) {
						var e, i = [];
						for (e in yf) yf[e] !== n && i.push(Eo(t.b, cs(yf[e]), t.a));
						return i.push(Eo(t.b, Sf, t.a)), rt(i)
					}

					function us(t) {
						var n = cs("local"),
							e = cs("session"),
							i = cs("none");
						return t.b.get(e, t.a).then(function(r) {
							return r ? e : t.b.get(i, t.a).then(function(e) {
								return e ? i : t.b.get(n, t.a).then(function(e) {
									return e ? n : t.b.get(Sf, t.a).then(function(t) {
										return t ? cs(t) : n
									})
								})
							})
						}).then(function(n) {
							return t.c = n, ss(t, n.C)
						}).s(function() {
							t.c || (t.c = n)
						})
					}

					function cs(t) {
						return {
							name: "authUser",
							C: t
						}
					}

					function hs(t) {
						return ds(t, function() {
							return t.b.set(Sf, t.c.C, t.a)
						})
					}

					function fs(t, n) {
						return ds(t, function() {
							return t.b.set(t.c, n.B(), t.a)
						})
					}

					function ls(t) {
						return ds(t, function() {
							return Eo(t.b, t.c, t.a)
						})
					}

					function ps(t, n) {
						return ds(t, function() {
							return t.b.get(t.c, t.a).then(function(t) {
								return t && n && (t.authDomain = n), ns(t || {})
							})
						})
					}

					function ds(t, n) {
						return t.f = t.f.then(n, n), t.f
					}

					function vs(t) {
						if (this.l = !1, Ti(this, "app", t), !Ss(this).options || !Ss(this).options.apiKey) throw new Pi("invalid-api-key");
						t = au.SDK_VERSION ? ii(au.SDK_VERSION) : null, this.c = new mr(Ss(this).options && Ss(this).options.apiKey, Fr(Uh), t), this.N = [], this.m = [], this.I = [], this.Gb = au.INTERNAL.createSubscribe(l(this.Xb, this)), this.R = void 0, this.Hb = au.INTERNAL.createSubscribe(l(this.Yb, this)), Ts(this, null), this.h = new as(Ss(this).options.apiKey + ":" + Ss(this).name), this.G = new is(Ss(this).options.apiKey + ":" + Ss(this).name), this.U = Rs(this, As(this)), this.i = Rs(this, Es(this)), this.W = !1, this.ha = l(this.uc, this), this.Ga = l(this.ka, this), this.pa = l(this.Pb, this), this.qa = l(this.Vb, this), this.ra = l(this.Wb, this), ys(this), this.INTERNAL = {}, this.INTERNAL.delete = l(this.delete, this), this.INTERNAL.logFramework = l(this.cc, this), this.o = 0, fn.call(this), bs(this), this.A = []
					}

					function ms(t) {
						Bt.call(this, "languageCodeChanged"), this.h = t
					}

					function gs(t) {
						Bt.call(this, "frameworkChanged"), this.f = t
					}

					function bs(t) {
						Object.defineProperty(t, "lc", {
							get: function() {
								return this.$()
							},
							set: function(t) {
								this.na(t)
							},
							enumerable: !1
						}), t.V = null
					}

					function ws(t) {
						return t.Fb || et(new Pi("auth-domain-config-required"))
					}

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

					function Is(t, n) {
						var e = {};
						return e.apiKey = Ss(t).options.apiKey, e.authDomain = Ss(t).options.authDomain, e.appName = Ss(t).name, t.U.then(function() {
							return es(e, n, t.G, t.Ka())
						}).then(function(n) {
							return Os(t) && n.uid == Os(t).uid ? (qa(Os(t), n), t.ka(n)) : (Ts(t, n), La(n), t.ka(n))
						}).then(function() {
							Cs(t)
						})
					}

					function Ts(t, n) {
						Os(t) && (Ra(Os(t), t.Ga), en(Os(t), "tokenChanged", t.pa), en(Os(t), "userDeleted", t.qa), en(Os(t), "userInvalidated", t.ra), Ca(Os(t))), n && (n.N.push(t.Ga), Zt(n, "tokenChanged", t.pa), Zt(n, "userDeleted", t.qa), Zt(n, "userInvalidated", t.ra), 0 < t.o && Pa(n)), Ti(t, "currentUser", n), n && (n.na(t.$()), Aa(n, t), Ea(n, t.A), Na(n, t))
					}

					function ks(t) {
						var n = os(t.G, Ss(t).options.authDomain).then(function(n) {
							return (t.w = n) && (n.ca = t.G), rs(t.G)
						});
						return Rs(t, n)
					}

					function As(t) {
						var n = Ss(t).options.authDomain,
							e = ks(t).then(function() {
								return ps(t.h, n)
							}).then(function(n) {
								return n ? (n.ca = t.G, t.w && (t.w.Z || null) == (n.Z || null) ? n : n.reload().then(function() {
									return fs(t.h, n).then(function() {
										return n
									})
								}).s(function(e) {
									return "auth/network-request-failed" == e.code ? n : ls(t.h)
								})) : null
							}).then(function(n) {
								Ts(t, n || null)
							});
						return Rs(t, e)
					}

					function Es(t) {
						return t.U.then(function() {
							return t.aa()
						}).s(function() {}).then(function() {
							if (!t.l) return t.ha()
						}).s(function() {}).then(function() {
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
						return Rs(t, n.then(function(n) {
							return e = ur(n), i = ji(n), Is(t, n)
						}).then(function() {
							return Ai({
								user: Os(t),
								credential: e,
								additionalUserInfo: i,
								operationType: "signIn"
							})
						}))
					}

					function Ss(t) {
						return t.app
					}

					function Os(t) {
						return t.currentUser
					}

					function Ps(t) {
						return Os(t) && Os(t)._lat || null
					}

					function Cs(t) {
						if (t.W) {
							for (var n = 0; n < t.m.length; n++) t.m[n] && t.m[n](Ps(t));
							if (t.R !== t.getUid() && t.I.length)
								for (t.R = t.getUid(), n = 0; n < t.I.length; n++) t.I[n] && t.I[n](Ps(t))
						}
					}

					function _s(t, n) {
						t.I.push(n), Rs(t, t.i.then(function() {
							!t.l && A(t.I, n) && t.R !== t.getUid() && (t.R = t.getUid(), n(Ps(t)))
						}))
					}

					function Rs(t, n) {
						return t.N.push(n), at(n, function() {
							E(t.N, n)
						}), n
					}

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

					function Ls(n, e) {
						return {
							name: n || "",
							K: "a valid string",
							optional: !!e,
							M: t
						}
					}

					function xs() {
						return {
							name: "opt_forceRefresh",
							K: "a boolean",
							optional: !0,
							M: n
						}
					}

					function js(t, n) {
						return {
							name: t || "",
							K: "a valid object",
							optional: !!n,
							M: c
						}
					}

					function Us(t, n) {
						return {
							name: t || "",
							K: "a function",
							optional: !!n,
							M: u
						}
					}

					function Ms(t, n) {
						return {
							name: t || "",
							K: "null",
							optional: !!n,
							M: o
						}
					}

					function Vs() {
						return {
							name: "",
							K: "an HTML element",
							optional: !1,
							M: function(t) {
								return !!(t && t instanceof Element)
							}
						}
					}

					function Fs() {
						return {
							name: "auth",
							K: "an instance of Firebase Auth",
							optional: !0,
							M: function(t) {
								return !!(t && t instanceof vs)
							}
						}
					}

					function Ks() {
						return {
							name: "app",
							K: "an instance of Firebase App",
							optional: !0,
							M: function(t) {
								return !!(t && t instanceof au.app.App)
							}
						}
					}

					function qs(t) {
						return {
							name: t ? t + "Credential" : "credential",
							K: t ? "a valid " + t + " credential" : "a valid credential",
							optional: !1,
							M: function(n) {
								if (!n) return !1;
								var e = !t || n.providerId === t;
								return !(!n.wa || !e)
							}
						}
					}

					function Xs() {
						return {
							name: "authProvider",
							K: "a valid Auth provider",
							optional: !1,
							M: function(t) {
								return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider"))
							}
						}
					}

					function Bs() {
						return {
							name: "applicationVerifier",
							K: "an implementation of firebase.auth.ApplicationVerifier",
							optional: !1,
							M: function(n) {
								return !!(n && t(n.type) && u(n.verify))
							}
						}
					}

					function Hs(t, n, e, i) {
						return {
							name: e || "",
							K: t.K + " or " + n.K,
							optional: !!i,
							M: function(e) {
								return t.M(e) || n.M(e)
							}
						}
					}

					function Ws(t, n, e, i, r, o) {
						if (Ti(this, "type", "recaptcha"), this.b = this.c = null, this.m = !1, this.l = n, this.a = e || {
								theme: "light",
								type: "image"
							}, this.g = [], this.a[_f]) throw new Pi("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
						if (this.h = "invisible" === this.a[Rf], !Dt(n) || !this.h && Dt(n).hasChildNodes()) throw new Pi("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
						this.u = new mr(t, o || null, r || null), this.o = i || function() {
							return null
						};
						var a = this;
						this.i = [];
						var s = this.a[Pf];
						this.a[Pf] = function(t) {
							if (Gs(a, t), "function" == typeof s) s(t);
							else if ("string" == typeof s) {
								var n = oi(s, uu);
								"function" == typeof n && n(t)
							}
						};
						var u = this.a[Cf];
						this.a[Cf] = function() {
							if (Gs(a, null), "function" == typeof u) u();
							else if ("string" == typeof u) {
								var t = oi(u, uu);
								"function" == typeof t && t()
							}
						}
					}

					function Gs(t, n) {
						for (var e = 0; e < t.i.length; e++) try {
							t.i[e](n)
						} catch (t) {}
					}

					function zs(t, n) {
						N(t.i, function(t) {
							return t == n
						})
					}

					function Js(t, n) {
						return t.g.push(n), at(n, function() {
							E(t.g, n)
						}), n
					}

					function Ys(t) {
						if (t.m) throw new Pi("internal-error", "RecaptchaVerifier instance has been destroyed.")
					}

					function $s() {
						this.b = uu.grecaptcha ? 1 / 0 : 0, this.c = null, this.a = "__rcb" + Math.floor(1e6 * Math.random())
					}

					function Zs(t, n) {
						return new Z(function(e, i) {
							if (gi())
								if (!uu.grecaptcha || n !== t.c && !t.b) {
									uu[t.a] = function() {
										if (uu.grecaptcha) {
											t.c = n;
											var r = uu.grecaptcha.render;
											uu.grecaptcha.render = function(n, e) {
												return n = r(n, e), t.b++, n
											}, e()
										} else i(new Pi("internal-error"));
										delete uu[t.a]
									};
									var r = At(Df, {
										onload: t.a,
										hl: n || ""
									});
									nt(De(r)).s(function() {
										i(new Pi("internal-error", "Unable to load external reCAPTCHA dependencies!"))
									})
								} else e();
							else i(new Pi("network-request-failed"))
						})
					}

					function Qs() {
						return Lf || (Lf = new $s), Lf
					}

					function tu(t, n, e) {
						try {
							this.f = e || au.app()
						} catch (t) {
							throw new Pi("argument-error", "No firebase.app.App instance is currently initialized.")
						}
						if (!this.f.options || !this.f.options.apiKey) throw new Pi("invalid-api-key");
						e = this.f.options.apiKey;
						var i = this,
							r = null;
						try {
							r = this.f.auth().Ka()
						} catch (t) {}
						r = au.SDK_VERSION ? ii(au.SDK_VERSION, r) : null, Ws.call(this, e, t, n, function() {
							try {
								var t = i.f.auth().$()
							} catch (n) {
								t = null
							}
							return t
						}, r, Fr(Uh))
					}

					function nu(t, n) {
						for (var e in n) {
							var i = n[e].name;
							t[i] = iu(i, t[e], n[e].j)
						}
					}

					function eu(t, n, e, i) {
						t[n] = iu(n, e, i)
					}

					function iu(t, n, e) {
						function i() {
							var t = Array.prototype.slice.call(arguments);
							return Ds(o, e, t), n.apply(this, t)
						}
						if (!e) return n;
						var r, o = ru(t);
						for (r in n) i[r] = n[r];
						for (r in n.prototype) i.prototype[r] = n.prototype[r];
						return i
					}

					function ru(t) {
						return t = t.split("."), t[t.length - 1]
					}
					var ou, au = e(6).default,
						su = su || {},
						uu = this,
						cu = "closure_uid_" + (1e9 * Math.random() >>> 0),
						hu = 0,
						fu = Date.now || function() {
							return +new Date
						};
					d(v, Error), v.prototype.name = "CustomError";
					var lu = String.prototype.trim ? function(t) {
							return t.trim()
						} : function(t) {
							return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
						},
						pu = /&/g,
						du = /</g,
						vu = />/g,
						mu = /"/g,
						gu = /'/g,
						bu = /\x00/g,
						wu = /[\x00&<>"']/;
					d(y, v), y.prototype.name = "AssertionError";
					var yu, Iu = Array.prototype.indexOf ? function(t, n, e) {
							return Array.prototype.indexOf.call(t, n, e)
						} : function(n, e, i) {
							if (i = null == i ? 0 : 0 > i ? Math.max(0, n.length + i) : i, t(n)) return t(e) && 1 == e.length ? n.indexOf(e, i) : -1;
							for (; i < n.length; i++)
								if (i in n && n[i] === e) return i;
							return -1
						},
						Tu = Array.prototype.forEach ? function(t, n, e) {
							Array.prototype.forEach.call(t, n, e)
						} : function(n, e, i) {
							for (var r = n.length, o = t(n) ? n.split("") : n, a = 0; a < r; a++) a in o && e.call(i, o[a], a, n)
						},
						ku = Array.prototype.map ? function(t, n, e) {
							return Array.prototype.map.call(t, n, e)
						} : function(n, e, i) {
							for (var r = n.length, o = Array(r), a = t(n) ? n.split("") : n, s = 0; s < r; s++) s in a && (o[s] = e.call(i, a[s], s, n));
							return o
						},
						Au = Array.prototype.some ? function(t, n, e) {
							return Array.prototype.some.call(t, n, e)
						} : function(n, e, i) {
							for (var r = n.length, o = t(n) ? n.split("") : n, a = 0; a < r; a++)
								if (a in o && e.call(i, o[a], a, n)) return !0;
							return !1
						};
					t: {
						var Eu = uu.navigator;
						if (Eu) {
							var Nu = Eu.userAgent;
							if (Nu) {
								yu = Nu;
								break t
							}
						}
						yu = ""
					}
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
							ju = function() {
								var t = yu;
								return Du ? /rv\:([^\);]+)(\)|;)/.exec(t) : _u ? /Edge\/([\d\.]+)/.exec(t) : Cu ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Lu ? /WebKit\/(\S+)/.exec(t) : Pu ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
							}();
						if (ju && (xu = ju ? ju[1] : ""), Cu) {
							var Uu = V();
							if (null != Uu && Uu > parseFloat(xu)) {
								Ou = Uu + "";
								break t
							}
						}
						Ou = xu
					}
					var Mu, Vu = {},
						Fu = uu.document;
					Mu = Fu && Cu ? V() || ("CSS1Compat" == Fu.compatMode ? parseInt(Ou, 10) : 5) : void 0, X.prototype.get = function() {
						if (0 < this.b) {
							this.b--;
							var t = this.a;
							this.a = t.next, t.next = null
						} else t = this.c();
						return t
					};
					var Ku = new X(function() {
						return new W
					}, function(t) {
						t.reset()
					}, 100);
					W.prototype.set = function(t, n) {
						this.a = t, this.b = n, this.next = null
					}, W.prototype.reset = function() {
						this.next = this.b = this.a = null
					};
					var qu, Xu, Bu = !1,
						Hu = new function() {
							this.b = this.a = null
						},
						Wu = 0,
						Gu = 2,
						zu = 3;
					Q.prototype.reset = function() {
						this.f = this.b = this.g = this.a = null, this.c = !1
					};
					var Ju = new X(function() {
						return new Q
					}, function(t) {
						t.reset()
					}, 100);
					Z.prototype.then = function(t, n, e) {
						return ct(this, u(t) ? t : null, u(n) ? n : null, e)
					}, K(Z), ou = Z.prototype, ou.s = function(t, n) {
						return ct(this, null, t, n)
					}, ou.cancel = function(t) {
						this.a == Wu && J(function() {
							st(this, new bt(t))
						}, this)
					}, ou.wc = function(t) {
						this.a = Wu, ht(this, Gu, t)
					}, ou.xc = function(t) {
						this.a = Wu, ht(this, zu, t)
					}, ou.Mb = function() {
						for (var t; t = dt(this);) vt(this, t, this.a, this.i);
						this.h = !1
					};
					var Yu = G;
					d(bt, v), bt.prototype.name = "cancel";
					var $u = !Cu || 9 <= +Mu;
					wt.prototype.la = !0, wt.prototype.ja = function() {
						return this.a
					}, wt.prototype.toString = function() {
						return "Const{" + this.a + "}"
					};
					var Zu = {};
					It(""), Tt.prototype.la = !0, Tt.prototype.ja = function() {
						return this.a
					}, Tt.prototype.toString = function() {
						return "TrustedResourceUrl{" + this.a + "}"
					};
					var Qu = /%{(\w+)}/g,
						tc = /^(?:https:)?\/\/[0-9a-z.:[\]-]+\/|^\/[^\/\\]|^about:blank(#|$)/i,
						nc = {};
					Nt.prototype.la = !0, Nt.prototype.ja = function() {
						return this.a
					}, Nt.prototype.toString = function() {
						return "SafeUrl{" + this.a + "}"
					};
					var ec = /^(?:(?:https?|mailto|ftp):|[^:\/?#]*(?:[\/?#]|$))/i,
						ic = {};
					Pt("about:blank"), Ct.prototype.la = !0, Ct.prototype.ja = function() {
						return this.a
					}, Ct.prototype.toString = function() {
						return "SafeHtml{" + this.a + "}"
					};
					var rc = {};
					Rt("<!DOCTYPE html>"), Rt(""), Rt("<br>");
					var oc = {
							cellpadding: "cellPadding",
							cellspacing: "cellSpacing",
							colspan: "colSpan",
							frameborder: "frameBorder",
							height: "height",
							maxlength: "maxLength",
							nonce: "nonce",
							role: "role",
							rowspan: "rowSpan",
							type: "type",
							usemap: "useMap",
							valign: "vAlign",
							width: "width"
						},
						ac = {
							'"': '\\"',
							"\\": "\\\\",
							"/": "\\/",
							"\b": "\\b",
							"\f": "\\f",
							"\n": "\\n",
							"\r": "\\r",
							"\t": "\\t",
							"\v": "\\u000b"
						},
						sc = /\uffff/.test("￿") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g,
						uc = 0,
						cc = {};
					qt.prototype.oa = !1, qt.prototype.ta = function() {
						if (this.Fa)
							for (; this.Fa.length;) this.Fa.shift()()
					};
					var hc = Object.freeze || function(t) {
							return t
						},
						fc = !Cu || 9 <= +Mu,
						lc = Cu && !F("9"),
						pc = function() {
							if (!uu.addEventListener || !Object.defineProperty) return !1;
							var t = !1,
								n = Object.defineProperty({}, "passive", {
									get: function() {
										t = !0
									}
								});
							return uu.addEventListener("test", i, n), uu.removeEventListener("test", i, n), t
						}();
					Bt.prototype.c = function() {
						this.Ab = !1
					}, d(Ht, Bt);
					var dc = hc({
						2: "touch",
						3: "pen",
						4: "mouse"
					});
					Ht.prototype.c = function() {
						Ht.ib.c.call(this);
						var t = this.a;
						if (t.preventDefault) t.preventDefault();
						else if (t.returnValue = !1, lc) try {
							(t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
						} catch (t) {}
					}, Ht.prototype.g = function() {
						return this.a
					};
					var vc = "closure_listenable_" + (1e6 * Math.random() | 0),
						mc = 0,
						gc = "closure_lm_" + (1e6 * Math.random() | 0),
						bc = {},
						wc = 0,
						yc = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
					d(fn, qt), fn.prototype[vc] = !0, fn.prototype.removeEventListener = function(t, n, e, i) {
						en(this, t, n, e, i)
					}, fn.prototype.ta = function() {
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
					bn.prototype.reset = function(t, n, e, i, r) {
						"number" == typeof r || Ic++, i || fu(), this.b = n, delete this.a
					}, yn.prototype.toString = function() {
						return this.name
					};
					var Tc = new yn("SEVERE", 1e3),
						kc = new yn("CONFIG", 700),
						Ac = new yn("FINE", 500);
					wn.prototype.log = function(t, n, e) {
						if (t.value >= In(this).value)
							for (u(n) && (n = n()), t = new bn(t, n + "", this.f), e && (t.a = e), e = "log:" + t.b, (t = uu.console) && t.timeStamp && t.timeStamp(e), (t = uu.msWriteProfilerMark) && t(e), e = this; e;) e = e.a
					};
					var Ec = {},
						Nc = null;
					ou = kn.prototype, ou.P = function() {
						An(this);
						for (var t = [], n = 0; n < this.a.length; n++) t.push(this.b[this.a[n]]);
						return t
					}, ou.S = function() {
						return An(this), this.a.concat()
					}, ou.clear = function() {
						this.b = {}, this.c = this.a.length = 0
					}, ou.get = function(t, n) {
						return En(this.b, t) ? this.b[t] : n
					}, ou.set = function(t, n) {
						En(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = n
					}, ou.forEach = function(t, n) {
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
					}, _n.prototype.m = function(t, n) {
						this.i = !1, Rn(this, t, n)
					}, _n.prototype.A = function(t) {
						Dn(this), Rn(this, !0, t)
					}, _n.prototype.then = function(t, n, e) {
						var i, r, o = new Z(function(t, n) {
							i = t, r = n
						});
						return xn(this, i, function(t) {
							t instanceof Vn ? o.cancel() : r(t)
						}), o.then(t, n, e)
					}, K(_n), d(Mn, v), Mn.prototype.message = "Deferred has already fired", Mn.prototype.name = "AlreadyCalledError", d(Vn, v), Vn.prototype.message = "Deferred was canceled", Vn.prototype.name = "CanceledError", Fn.prototype.c = function() {
						throw delete Cc[this.a], this.b
					};
					var Pc, Cc = {};
					d(qn, Kn);
					for (var _c = 64, Rc = _c - 1, Dc = [], Lc = 0; Lc < Rc; Lc++) Dc[Lc] = 0;
					var xc = S(128, Dc);
					qn.prototype.reset = function() {
						this.g = this.c = 0, this.a = uu.Int32Array ? new Int32Array(this.h) : O(this.h)
					};
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
					ou = se.prototype, ou.clear = function() {
						this.a = this.c = null, this.b = 0
					}, ou.forEach = function(t, n) {
						ue(this), this.a.forEach(function(e, i) {
							Tu(e, function(e) {
								t.call(n, e, i, this)
							}, this)
						}, this)
					}, ou.S = function() {
						ue(this);
						for (var t = this.a.P(), n = this.a.S(), e = [], i = 0; i < n.length; i++)
							for (var r = t[i], o = 0; o < r.length; o++) e.push(n[i]);
						return e
					}, ou.P = function(n) {
						ue(this);
						var e = [];
						if (t(n)) le(this, n) && (e = S(e, this.a.get(de(this, n))));
						else {
							n = this.a.P();
							for (var i = 0; i < n.length; i++) e = S(e, n[i])
						}
						return e
					}, ou.set = function(t, n) {
						return ue(this), this.c = null, t = de(this, t), le(this, t) && (this.b -= this.a.get(t).length), this.a.set(t, [n]), this.b += 1, this
					}, ou.get = function(t, n) {
						return t = t ? this.P(t) : [], 0 < t.length ? t[0] + "" : n
					}, ou.toString = function() {
						if (this.c) return this.c;
						if (!this.a) return "";
						for (var t = [], n = this.a.S(), e = 0; e < n.length; e++) {
							var i = n[e],
								r = encodeURIComponent(i + "");
							i = this.P(i);
							for (var o = 0; o < i.length; o++) {
								var a = r;
								"" !== i[o] && (a += "=" + encodeURIComponent(i[o] + "")), t.push(a)
							}
						}
						return this.c = t.join("&")
					}, me.prototype.c = null;
					var Bc;
					d(be, me), be.prototype.a = function() {
						var t = we(this);
						return t ? new ActiveXObject(t) : new XMLHttpRequest
					}, be.prototype.b = function() {
						var t = {};
						return we(this) && (t[0] = !0, t[1] = !0), t
					}, Bc = new be, d(ye, fn);
					var Hc = "",
						Wc = ye.prototype,
						Gc = Tn("goog.net.XhrIo");
					Wc.J = Gc;
					var zc = /^https?$/i,
						Jc = ["POST", "PUT"];
					ou = ye.prototype, ou.Ea = function() {
						void 0 !== su && this.a && (this.g = "Timed out after " + this.f + "ms, aborting", Nn(this.J, Re(this, this.g)), ln(this, "timeout"), this.abort(8))
					}, ou.abort = function() {
						this.a && this.b && (Nn(this.J, Re(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, ln(this, "complete"), ln(this, "abort"), Se(this))
					}, ou.ta = function() {
						this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), Se(this, !0)), ye.ib.ta.call(this)
					}, ou.zb = function() {
						this.oa || (this.G || this.h || this.c ? Ne(this) : this.fc())
					}, ou.fc = function() {
						Ne(this)
					}, ou.getResponse = function() {
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
						} catch (t) {
							return Nn(this.J, "Can not get response: " + t.message), null
						}
					};
					var Yc = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/,
						$c = 0,
						Zc = 1;
					d(Ue, v), d(Me, me), Me.prototype.a = function() {
						var t = new XMLHttpRequest;
						if ("withCredentials" in t) return t;
						if ("undefined" != typeof XDomainRequest) return new Ve;
						throw Error("Unsupported browser")
					}, Me.prototype.b = function() {
						return {}
					}, ou = Ve.prototype, ou.open = function(t, n, e) {
						if (null != e && !e) throw Error("Only async requests are supported.");
						this.a.open(t, n)
					}, ou.send = function(t) {
						if (t) {
							if ("string" != typeof t) throw Error("Only string data is supported");
							this.a.send(t)
						} else this.a.send()
					}, ou.abort = function() {
						this.a.abort()
					}, ou.setRequestHeader = function() {}, ou.getResponseHeader = function(t) {
						return "content-type" == t.toLowerCase() ? this.a.contentType : ""
					}, ou.Sb = function() {
						this.status = 200, this.responseText = this.a.responseText, Fe(this, 4)
					}, ou.wb = function() {
						this.status = 500, this.responseText = "", Fe(this, 4)
					}, ou.Ub = function() {
						this.wb()
					}, ou.Tb = function() {
						this.status = 200, Fe(this, 1)
					}, ou.getAllResponseHeaders = function() {
						return "content-type: " + this.a.contentType
					};
					var Qc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
						th = "Firefox",
						nh = "Chrome",
						eh = {
							Cc: "FirebaseCore-web",
							Ec: "FirebaseUI-web"
						};
					bi.prototype.get = function() {
						return this.a ? this.b : this.c
					};
					var ih, rh = {};
					try {
						var oh = {};
						Object.defineProperty(oh, "abcd", {
							configurable: !0,
							enumerable: !0,
							value: 1
						}), Object.defineProperty(oh, "abcd", {
							configurable: !0,
							enumerable: !0,
							value: 2
						}), ih = 2 == oh.abcd
					} catch (t) {
						ih = !1
					}
					var ah = "email",
						sh = "newEmail",
						uh = "requestType",
						ch = "email",
						hh = "fromEmail",
						fh = "data",
						lh = "operation";
					d(Pi, Error), Pi.prototype.B = function() {
						return {
							code: this.code,
							message: this.message
						}
					}, Pi.prototype.toJSON = function() {
						return this.B()
					};
					var ph = "auth/",
						dh = {
							"argument-error": "",
							"app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
							"app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
							"captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
							"code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
							"cordova-not-ready": "Cordova framework is not ready.",
							"cors-unsupported": "This browser is not supported.",
							"credential-already-in-use": "This credential is already associated with a different user account.",
							"custom-token-mismatch": "The custom token corresponds to a different audience.",
							"requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
							"dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
							"email-already-in-use": "The email address is already in use by another account.",
							"expired-action-code": "The action code has expired. ",
							"cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
							"internal-error": "An internal error has occurred.",
							"invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
							"invalid-app-id": "The mobile app identifier is not registed for the current project.",
							"invalid-user-token": "The user's credential is no longer valid. The user must sign in again.",
							"invalid-auth-event": "An internal error has occurred.",
							"invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
							"invalid-continue-uri": "The continue URL provided in the request is invalid.",
							"invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
							"invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
							"invalid-email": "The email address is badly formatted.",
							"invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
							"invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
							"invalid-credential": "The supplied auth credential is malformed or has expired.",
							"invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
							"invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
							"invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
							"invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
							"unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
							"invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
							"wrong-password": "The password is invalid or the user does not have a password.",
							"invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
							"invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
							"invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
							"invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
							"missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
							"auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
							"missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
							"missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
							"missing-continue-uri": "A continue URL must be provided in the request.",
							"missing-iframe-start": "An internal error has occurred.",
							"missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
							"missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
							"missing-verification-id": "The phone auth credential was created with an empty verification ID.",
							"app-deleted": "This instance of FirebaseApp has been deleted.",
							"account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
							"network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
							"no-auth-event": "An internal error has occurred.",
							"no-such-provider": "User was not linked to an account with the given provider.",
							"operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
							"operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
							"popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
							"popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
							"provider-already-linked": "User can only be linked to one identity for the given provider.",
							"quota-exceeded": "The project's quota for this operation has been exceeded.",
							"redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
							"redirect-operation-pending": "A redirect sign-in operation is already pending.",
							timeout: "The operation has timed out.",
							"user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
							"too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
							"unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
							"unsupported-persistence-type": "The current environment does not support the specified persistence type.",
							"user-cancelled": "User did not grant your application the permissions it requested.",
							"user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
							"user-disabled": "The user account has been disabled by an administrator.",
							"user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
							"user-signed-out": "",
							"weak-password": "The password must be 6 characters long or more.",
							"web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
						},
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
						Eh = {
							Dc: {
								Ma: "locale",
								za: 500,
								ya: 600,
								Na: "facebook.com",
								$a: Ah
							},
							Fc: {
								Ma: null,
								za: 500,
								ya: 620,
								Na: "github.com",
								$a: Ah
							},
							Gc: {
								Ma: "hl",
								za: 515,
								ya: 680,
								Na: "google.com",
								$a: Ah
							},
							Mc: {
								Ma: "lang",
								za: 485,
								ya: 705,
								Na: "twitter.com",
								$a: kh
							}
						},
						Nh = "idToken",
						Sh = "providerId";
					d(Mi, Ui), d(Vi, Mi), d(Fi, Mi), d(Ki, Mi), d(qi, Mi), Bi.prototype.wa = function(t) {
						return Dr(t, Hi(this))
					}, Bi.prototype.b = function(t, n) {
						var e = Hi(this);
						return e.idToken = n, Lr(t, e)
					}, Bi.prototype.c = function(t, n) {
						return Xi(xr(t, Hi(this)), n)
					}, Bi.prototype.B = function() {
						var t = {
							providerId: this.providerId
						};
						return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), t
					}, Wi.prototype.Ba = function(t) {
						return this.qb = x(t), this
					}, d(Gi, Wi), Gi.prototype.sa = function(t) {
						return A(this.a, t) || this.a.push(t), this
					}, Gi.prototype.vb = function() {
						return O(this.a)
					}, Gi.prototype.credential = function(t, n) {
						if (!t && !n) throw new Pi("argument-error", "credential failed: must provide the ID token and/or the access token.");
						return new Bi(this.providerId, {
							idToken: t || null,
							accessToken: n || null
						})
					}, d(zi, Gi), Ti(zi, "PROVIDER_ID", "facebook.com"), d(Yi, Gi), Ti(Yi, "PROVIDER_ID", "github.com"), d(Zi, Gi), Ti(Zi, "PROVIDER_ID", "google.com"), d(tr, Wi), Ti(tr, "PROVIDER_ID", "twitter.com"), er.prototype.wa = function(t) {
						return Ur(t, of , {
							email: this.a,
							password: this.f
						})
					}, er.prototype.b = function(t, n) {
						return Ur(t, Zh, {
							idToken: n,
							email: this.a,
							password: this.f
						})
					}, er.prototype.c = function(t, n) {
						return Xi(this.wa(t), n)
					}, er.prototype.B = function() {
						return {
							email: this.a,
							password: this.f
						}
					}, ki(ir, {
						PROVIDER_ID: "password"
					}), rr.prototype.wa = function(t) {
						return t.Qa(or(this))
					}, rr.prototype.b = function(t, n) {
						var e = or(this);
						return e.idToken = n, Ur(t, sf, e)
					}, rr.prototype.c = function(t, n) {
						var e = or(this);
						return e.operation = "REAUTH", t = Ur(t, uf, e), Xi(t, n)
					}, rr.prototype.B = function() {
						var t = {
							providerId: "phone"
						};
						return this.a.Pa && (t.verificationId = this.a.Pa), this.a.Oa && (t.verificationCode = this.a.Oa), this.a.Da && (t.temporaryProof = this.a.Da), this.a.Y && (t.phoneNumber = this.a.Y), t
					}, ar.prototype.Qa = function(n, e) {
						var i = this.a.c;
						return nt(e.verify()).then(function(r) {
							if (!t(r)) throw new Pi("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");
							switch (e.type) {
								case "recaptcha":
									return Pr(i, {
										phoneNumber: n,
										recaptchaToken: r
									}).then(function(t) {
										return "function" == typeof e.reset && e.reset(), t
									}, function(t) {
										throw "function" == typeof e.reset && e.reset(), t
									});
								default:
									throw new Pi("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')
							}
						})
					}, ki(ar, {
						PROVIDER_ID: "phone"
					}), hr.prototype.B = function() {
						return {
							type: this.b,
							eventId: this.c,
							urlResponse: this.f,
							sessionId: this.g,
							error: this.a && this.a.B()
						}
					}, d(lr, Pi), d(pr, Pi), pr.prototype.B = function() {
						var t = {
							code: this.code,
							message: this.message
						};
						this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber);
						var n = this.credential && this.credential.B();
						return n && j(t, n), t
					}, pr.prototype.toJSON = function() {
						return this.B()
					}, d(vr, me), vr.prototype.a = function() {
						return new this.f
					}, vr.prototype.b = function() {
						return {}
					};
					var Oh, Ph = "idToken",
						Ch = new bi(3e4, 6e4),
						_h = {
							"Content-Type": "application/x-www-form-urlencoded"
						},
						Rh = new bi(3e4, 6e4),
						Dh = {
							"Content-Type": "application/json"
						};
					mr.prototype.m = function(t, n, e, i, r, o) {
						var a = "Node" == ti(),
							s = ni() ? a ? new ye(this.o) : new ye : new ye(this.f);
						if (o) {
							s.f = Math.max(0, o);
							var u = setTimeout(function() {
								ln(s, "timeout")
							}, o)
						}
						pn(s, "complete", function() {
							u && clearTimeout(u);
							var t = null;
							try {
								t = JSON.parse(_e(this)) || null
							} catch (n) {
								t = null
							}
							n && n(t)
						}), dn(s, "ready", function() {
							u && clearTimeout(u), Xt(this)
						}), dn(s, "timeout", function() {
							u && clearTimeout(u), Xt(this), n && n(null)
						}), Ie(s, t, e, i, r)
					};
					var Lh = It("https://apis.google.com/js/client.js?onload=%{onload}"),
						xh = "__fcb" + Math.floor(1e6 * Math.random());
					mr.prototype.u = function(t, n, e, i, r) {
						var o = this;
						Oh.then(function() {
							window.gapi.client.setApiKey(o.b);
							var a = window.gapi.auth.getToken();
							window.gapi.auth.setToken(null), window.gapi.client.request({
								path: t,
								method: e,
								body: i,
								headers: r,
								authType: "none",
								callback: function(t) {
									window.gapi.auth.setToken(a), n && n(t)
								}
							})
						}).s(function(t) {
							n && n({
								error: {
									message: t && t.message || "CORS_UNSUPPORTED"
								}
							})
						})
					}, mr.prototype.gb = function() {
						return Ur(this, Qh, {})
					}, mr.prototype.kb = function(t, n) {
						return Ur(this, $h, {
							idToken: t,
							email: n
						})
					}, mr.prototype.lb = function(t, n) {
						return Ur(this, Zh, {
							idToken: t,
							password: n
						})
					};
					var jh = {
						displayName: "DISPLAY_NAME",
						photoUrl: "PHOTO_URL"
					};
					ou = mr.prototype, ou.mb = function(t, n) {
						var e = {
								idToken: t
							},
							i = [];
						return C(jh, function(t, r) {
							var o = n[r];
							null === o ? i.push(t) : r in n && (e[r] = o)
						}), i.length && (e.deleteAttribute = i), Ur(this, $h, e)
					}, ou.cb = function(t, n) {
						return t = {
							requestType: "PASSWORD_RESET",
							email: t
						}, j(t, n), Ur(this, Wh, t)
					}, ou.bb = function(t, n) {
						return t = {
							requestType: "VERIFY_EMAIL",
							idToken: t
						}, j(t, n), Ur(this, Hh, t)
					}, ou.Qa = function(t) {
						return Ur(this, af, t)
					}, ou.Ta = function(t, n) {
						return Ur(this, Jh, {
							oobCode: t,
							newPassword: n
						})
					}, ou.Ia = function(t) {
						return Ur(this, Vh, {
							oobCode: t
						})
					}, ou.Sa = function(t) {
						return Ur(this, Mh, {
							oobCode: t
						})
					};
					var Uh, Mh = {
							endpoint: "setAccountInfo",
							D: jr,
							ga: "email"
						},
						Vh = {
							endpoint: "resetPassword",
							D: jr,
							O: function(t) {
								if (!t.email || !t.requestType) throw new Pi("internal-error")
							}
						},
						Fh = {
							endpoint: "signupNewUser",
							D: function(t) {
								if (kr(t), !t.password) throw new Pi("weak-password")
							},
							O: Sr,
							T: !0
						},
						Kh = {
							endpoint: "createAuthUri"
						},
						qh = {
							endpoint: "deleteAccount",
							ea: ["idToken"]
						},
						Xh = {
							endpoint: "setAccountInfo",
							ea: ["idToken", "deleteProvider"],
							D: function(t) {
								if (!a(t.deleteProvider)) throw new Pi("internal-error")
							}
						},
						Bh = {
							endpoint: "getAccountInfo"
						},
						Hh = {
							endpoint: "getOobConfirmationCode",
							ea: ["idToken", "requestType"],
							D: function(t) {
								if ("VERIFY_EMAIL" != t.requestType) throw new Pi("internal-error")
							},
							ga: "email"
						},
						Wh = {
							endpoint: "getOobConfirmationCode",
							ea: ["requestType"],
							D: function(t) {
								if ("PASSWORD_RESET" != t.requestType) throw new Pi("internal-error");
								kr(t)
							},
							ga: "email"
						},
						Gh = {
							nb: !0,
							endpoint: "getProjectConfig",
							yb: "GET"
						},
						zh = {
							nb: !0,
							endpoint: "getRecaptchaParam",
							yb: "GET",
							O: function(t) {
								if (!t.recaptchaSiteKey) throw new Pi("internal-error")
							}
						},
						Jh = {
							endpoint: "resetPassword",
							D: jr,
							ga: "email"
						},
						Yh = {
							endpoint: "sendVerificationCode",
							ea: ["phoneNumber", "recaptchaToken"],
							ga: "sessionInfo"
						},
						$h = {
							endpoint: "setAccountInfo",
							ea: ["idToken"],
							D: Ar,
							T: !0
						},
						Zh = {
							endpoint: "setAccountInfo",
							ea: ["idToken"],
							D: function(t) {
								if (Ar(t), !t.password) throw new Pi("weak-password")
							},
							O: Sr,
							T: !0
						},
						Qh = {
							endpoint: "signupNewUser",
							O: Sr,
							T: !0
						},
						tf = {
							endpoint: "verifyAssertion",
							D: _r,
							O: Rr,
							T: !0
						},
						nf = {
							endpoint: "verifyAssertion",
							D: _r,
							O: function(t) {
								if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new Pi("user-not-found");
								if (t.errorMessage) throw Mr(t.errorMessage);
								if (!t[Ph]) throw new Pi("internal-error")
							},
							T: !0
						},
						ef = {
							endpoint: "verifyAssertion",
							D: function(t) {
								if (_r(t), !t.idToken) throw new Pi("internal-error")
							},
							O: Rr,
							T: !0
						},
						rf = {
							endpoint: "verifyCustomToken",
							D: function(t) {
								if (!t.token) throw new Pi("invalid-custom-token")
							},
							O: Sr,
							T: !0
						},
						of = {
							endpoint: "verifyPassword",
							D: function(t) {
								if (kr(t), !t.password) throw new Pi("wrong-password")
							},
							O: Sr,
							T: !0
						},
						af = {
							endpoint: "verifyPhoneNumber",
							D: Or,
							O: Sr
						},
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
						uf = {
							Lb: {
								USER_NOT_FOUND: "user-not-found"
							},
							endpoint: "verifyPhoneNumber",
							D: Or,
							O: Sr
						},
						cf = {
							Ic: {
								Va: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
								ab: "https://securetoken.googleapis.com/v1/token",
								id: "p"
							},
							Kc: {
								Va: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
								ab: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
								id: "s"
							},
							Lc: {
								Va: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
								ab: "https://test-securetoken.sandbox.googleapis.com/v1/token",
								id: "t"
							}
						};
					Uh = Fr("__EID__") ? "__EID__" : void 0;
					var hf = It("https://apis.google.com/js/api.js?onload=%{onload}"),
						ff = new bi(3e4, 6e4),
						lf = new bi(5e3, 15e3),
						pf = null;
					Wr.prototype.toString = function() {
						return this.f ? te(this.a, "v", this.f) : fe(this.a.a, "v"), this.b ? te(this.a, "eid", this.b) : fe(this.a.a, "eid"), this.c.length ? te(this.a, "fw", this.c.join(",")) : fe(this.a.a, "fw"), "" + this.a
					}, Gr.prototype.toString = function() {
						var t = ie(this.m, "/__/auth/handler");
						if (te(t, "apiKey", this.u), te(t, "appName", this.c), te(t, "authType", this.l), this.a.isOAuthProvider) {
							var n = this.a;
							try {
								var e = au.app(this.c).auth().$()
							} catch (t) {
								e = null
							}
							n.Ua = e, te(t, "providerId", this.a.providerId), n = this.a, e = li(n.qb);
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
						return this.ba().then(function() {
							no(o).then(function(e) {
								e || (t && Ge(t), n(r), a = !0)
							})
						}).s(function() {}).then(function() {
							if (!a) return Je(t)
						}).then(function() {
							if (!a) return gn(e).then(function() {
								n(i)
							})
						})
					}, ou.Cb = function() {
						var t = ri();
						return !hi(t) && !vi(t)
					}, ou.xb = function() {
						return !1
					}, ou.ub = function(t, n, e, i, r, o, a) {
						if (!t) return et(new Pi("popup-blocked"));
						if (a && !hi()) return this.ba().s(function(n) {
							Ge(t), r(n)
						}), i(), nt();
						this.a || (this.a = Yr(Zr(this)));
						var s = this;
						return this.a.then(function() {
							var n = s.ba().s(function(n) {
								throw Ge(t), r(n), n
							});
							return i(), n
						}).then(function() {
							cr(e), a || Xe(Qr(s.u, s.f, s.b, n, e, null, o, s.c, void 0, s.h), t)
						}).s(function(t) {
							throw "auth/network-request-failed" == t.code && (s.a = null), t
						})
					}, ou.Aa = function(t, n, e) {
						this.a || (this.a = Yr(Zr(this)));
						var i = this;
						return this.a.then(function() {
							cr(n), Xe(Qr(i.u, i.f, i.b, t, n, qe(), e, i.c, void 0, i.h))
						}).s(function(t) {
							throw "auth/network-request-failed" == t.code && (i.a = null), t
						})
					}, ou.ba = function() {
						var t = this;
						return $r(this).then(function() {
							return t.i.Ya
						}).s(function() {
							throw t.a = null, new Pi("network-request-failed")
						})
					}, ou.Db = function() {
						return !0
					}, ou.ua = function(t) {
						this.g.push(t)
					}, ou.Ja = function(t) {
						N(this.g, function(n) {
							return n == t
						})
					}, ou = eo.prototype, ou.get = function(t) {
						return nt(this.a.getItem(t)).then(function(t) {
							return t && pi(t)
						})
					}, ou.set = function(t, n) {
						return nt(this.a.setItem(t, fi(n)))
					}, ou.X = function(t) {
						return nt(this.a.removeItem(t))
					}, ou.ia = function() {}, ou.da = function() {}, ou = io.prototype, ou.get = function(t) {
						return nt(this.a[t])
					}, ou.set = function(t, n) {
						return this.a[t] = n, nt()
					}, ou.X = function(t) {
						return delete this.a[t], nt()
					}, ou.ia = function() {}, ou.da = function() {};
					var df;
					ou = ro.prototype, ou.set = function(t, n) {
						var e, i = !1,
							r = this;
						return at(ao(this).then(function(n) {
							return e = n, n = so(r, uo(r, e, !0)), co(n.get(t))
						}).then(function(o) {
							var a = so(r, uo(r, e, !0));
							return o ? (o.value = n, co(a.put(o))) : (r.a++, i = !0, o = {}, o[r.g] = t, o[r.l] = n, co(a.add(o)))
						}).then(function() {
							r.f[t] = n
						}), function() {
							i && r.a--
						})
					}, ou.get = function(t) {
						var n = this;
						return ao(this).then(function(e) {
							return co(so(n, uo(n, e, !1)).get(t))
						}).then(function(t) {
							return t && t.value
						})
					}, ou.X = function(t) {
						var n = !1,
							e = this;
						return at(ao(this).then(function(i) {
							return n = !0, e.a++, co(so(e, uo(e, i, !0)).delete(t))
						}).then(function() {
							delete e.f[t]
						}), function() {
							n && e.a--
						})
					}, ou.vc = function() {
						var t = this;
						return ao(this).then(function(n) {
							var e = so(t, uo(t, n, !1));
							return e.getAll ? co(e.getAll()) : new Z(function(t, n) {
								var i = [],
									r = e.openCursor();
								r.onsuccess = function(n) {
									(n = n.target.result) ? (i.push(n.value), n.continue()) : t(i)
								}, r.onerror = function(t) {
									n(Error(t.target.errorCode))
								}
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
					}, ou.ia = function(t) {
						0 == this.c.length && ho(this), this.c.push(t)
					}, ou.da = function(t) {
						N(this.c, function(n) {
							return n == t
						}), 0 == this.c.length && this.b && this.b.cancel("STOP_EVENT")
					}, ou = fo.prototype, ou.get = function(t) {
						var n = this;
						return nt().then(function() {
							return pi(n.a.getItem(t))
						})
					}, ou.set = function(t, n) {
						var e = this;
						return nt().then(function() {
							var i = fi(n);
							null === i ? e.X(t) : e.a.setItem(t, i)
						})
					}, ou.X = function(t) {
						var n = this;
						return nt().then(function() {
							n.a.removeItem(t)
						})
					}, ou.ia = function(t) {
						uu.window && Zt(uu.window, "storage", t)
					}, ou.da = function(t) {
						uu.window && en(uu.window, "storage", t)
					}, ou = vo.prototype, ou.get = function() {
						return nt(null)
					}, ou.set = function() {
						return nt()
					}, ou.X = function() {
						return nt()
					}, ou.ia = function() {}, ou.da = function() {}, ou = mo.prototype, ou.get = function(t) {
						var n = this;
						return nt().then(function() {
							return pi(n.a.getItem(t))
						})
					}, ou.set = function(t, n) {
						var e = this;
						return nt().then(function() {
							var i = fi(n);
							null === i ? e.X(t) : e.a.setItem(t, i)
						})
					}, ou.X = function(t) {
						var n = this;
						return nt().then(function() {
							n.a.removeItem(t)
						})
					}, ou.ia = function() {}, ou.da = function() {};
					var vf, mf, gf = {
							C: fo,
							jb: mo
						},
						bf = {
							C: fo,
							jb: mo
						},
						wf = {
							C: eo,
							jb: vo
						},
						yf = {
							Hc: "local",
							NONE: "none",
							Jc: "session"
						};
					Io.prototype.get = function(t, n) {
						return ko(this, t.C).get(Ao(this, t, n))
					}, Io.prototype.set = function(t, n, e) {
						var i = Ao(this, t, e),
							r = this,
							o = ko(this, t.C);
						return o.set(i, n).then(function() {
							return o.get(i)
						}).then(function(n) {
							"local" == t.C && (r.b[i] = n)
						})
					}, Io.prototype.m = function(t) {
						if (t && t.g) {
							var n = t.a.key;
							if (null == n)
								for (var e in this.a) {
									var i = this.b[e];
									void 0 === i && (i = null);
									var r = uu.localStorage.getItem(e);
									r !== i && (this.b[e] = r, this.c(e))
								} else if (0 == n.indexOf(this.i + this.g) && this.a[n]) {
									if (void 0 !== t.a.a ? ko(this, "local").da(this.h) : Po(this), this.A)
										if (e = uu.localStorage.getItem(n), (i = t.a.newValue) !== e) null !== i ? uu.localStorage.setItem(n, i) : uu.localStorage.removeItem(n);
										else if (this.b[n] === i && void 0 === t.a.a) return;
									var o = this;
									e = function() {
										void 0 === t.a.a && o.b[n] === uu.localStorage.getItem(n) || (o.b[n] = uu.localStorage.getItem(n), o.c(n))
									}, Cu && Mu && 10 == Mu && uu.localStorage.getItem(n) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(e, 10) : e()
								}
						} else Tu(t, l(this.c, this))
					}, Io.prototype.c = function(t) {
						this.a[t] && Tu(this.a[t], function(t) {
							t()
						})
					};
					var If = {
						name: "authEvent",
						C: "local"
					};
					ou = Lo.prototype, ou.ba = function() {
						return this.xa ? this.xa : this.xa = $e().then(function() {
							if ("function" != typeof oi("universalLinks.subscribe", uu)) throw xo("cordova-universal-links-plugin is not installed");
							if (void 0 === oi("BuildInfo.packageName", uu)) throw xo("cordova-plugin-buildinfo is not installed");
							if ("function" != typeof oi("cordova.plugins.browsertab.openUrl", uu)) throw xo("cordova-plugin-browsertab is not installed");
							if ("function" != typeof oi("cordova.InAppBrowser.open", uu)) throw xo("cordova-plugin-inappbrowser is not installed")
						}, function() {
							throw new Pi("cordova-not-ready")
						})
					}, ou.Ca = function(t, n) {
						return n(new Pi("operation-not-supported-in-this-environment")), nt()
					}, ou.ub = function() {
						return et(new Pi("operation-not-supported-in-this-environment"))
					}, ou.Db = function() {
						return !1
					}, ou.Cb = function() {
						return !0
					}, ou.xb = function() {
						return !0
					}, ou.Aa = function(t, n, e) {
						if (this.c) return et(new Pi("redirect-operation-pending"));
						var i = this,
							r = uu.document,
							o = null,
							a = null,
							s = null,
							u = null;
						return this.c = at(nt().then(function() {
							return cr(n), Fo(i)
						}).then(function() {
							return Mo(i, t, n, e)
						}).then(function() {
							return new Z(function(t, n) {
								a = function() {
									var n = oi("cordova.plugins.browsertab.close", uu);
									return t(), "function" == typeof n && n(), i.a && "function" == typeof i.a.close && (i.a.close(), i.a = null), !1
								}, i.ua(a), s = function() {
									o || (o = gn(i.w).then(function() {
										n(new Pi("redirect-cancelled-by-user"))
									}))
								}, u = function() {
									wi() && s()
								}, r.addEventListener("resume", s, !1), ri().toLowerCase().match(/android/) || r.addEventListener("visibilitychange", u, !1)
							}).s(function(t) {
								return Ko(i).then(function() {
									throw t
								})
							})
						}), function() {
							s && r.removeEventListener("resume", s, !1), u && r.removeEventListener("visibilitychange", u, !1), o && o.cancel(), a && i.Ja(a), i.c = null
						})
					}, ou.ua = function(t) {
						this.b.push(t), Fo(this).s(function(n) {
							"auth/invalid-cordova-configuration" === n.code && (n = new hr("unknown", null, null, null, new Pi("no-auth-event")), t(n))
						})
					}, ou.Ja = function(t) {
						N(this.b, function(n) {
							return n == t
						})
					};
					var Tf = {
						name: "pendingRedirect",
						C: "session"
					};
					Go.prototype.reset = function() {
						this.f = !1, this.a.Ja(this.i), this.a = zo(this.v, this.l, this.u)
					}, Go.prototype.subscribe = function(t) {
						if (A(this.h, t) || this.h.push(t), !this.f) {
							var n = this;
							Wo(this.g).then(function(t) {
								t ? Ho(n.g).then(function() {
									Jo(n).s(function(t) {
										var e = new hr("unknown", null, null, null, new Pi("operation-not-supported-in-this-environment"));
										Zo(t) && n.m(e)
									})
								}) : Yo(n)
							}).s(function() {
								Yo(n)
							})
						}
					}, Go.prototype.unsubscribe = function(t) {
						N(this.h, function(n) {
							return n == t
						})
					}, Go.prototype.m = function(t) {
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
					Go.prototype.aa = function() {
						return this.c.aa()
					}, Go.prototype.Aa = function(t, n, e) {
						var i, r = this;
						return Bo(this.g).then(function() {
							return r.a.Aa(t, n, e).s(function(t) {
								if (Zo(t)) throw new Pi("operation-not-supported-in-this-environment");
								return i = t, Ho(r.g).then(function() {
									throw i
								})
							}).then(function() {
								return r.a.Db() ? new Z(function() {}) : Ho(r.g).then(function() {
									return r.aa()
								}).then(function() {}).s(function() {})
							})
						})
					}, Go.prototype.Ca = function(t, n, e, i) {
						return this.a.Ca(e, function(e) {
							t.fa(n, null, e, i)
						}, kf.get())
					};
					var Ef = {};
					ta.prototype.reset = function() {
						this.b = null, this.a && (this.a.cancel(), this.a = null)
					}, ta.prototype.h = function(t, n) {
						if (!t) return et(new Pi("invalid-auth-event"));
						this.reset(), this.g = !0;
						var e = t.b,
							i = t.c,
							r = t.a && "auth/web-storage-unsupported" == t.a.code,
							o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code;
						return "unknown" != e || r || o ? t.a ? (oa(this, !0, null, t.a), t = nt()) : t = n.va(e, i) ? ea(this, t, n) : et(new Pi("invalid-auth-event")) : (oa(this, !1, null, null), t = nt()), t
					}, ta.prototype.aa = function() {
						var t = this;
						return new Z(function(n, e) {
							t.b ? t.b().then(n, e) : (t.f.push(n), t.c.push(e), aa(t))
						})
					}, sa.prototype.h = function(t, n) {
						if (!t) return et(new Pi("invalid-auth-event"));
						var e = t.b,
							i = t.c;
						return t.a ? (n.fa(t.b, null, t.a, t.c), t = nt()) : t = n.va(e, i) ? ua(t, n) : et(new Pi("invalid-auth-event")), t
					}, ca.prototype.confirm = function(t) {
						return t = sr(this.verificationId, t), this.a(t)
					}, fa.prototype.start = function() {
						this.a = this.c, pa(this, !0)
					}, va.prototype.B = function() {
						return {
							apiKey: this.f.b,
							refreshToken: this.a,
							accessToken: this.b,
							expirationTime: this.c
						}
					}, va.prototype.getToken = function(t) {
						return t = !!t, this.b && !this.a ? et(new Pi("user-token-expired")) : t || !this.b || fu() > this.c - 3e4 ? this.a ? ba(this, {
							grant_type: "refresh_token",
							refresh_token: this.a
						}) : nt(null) : nt({
							accessToken: this.b,
							expirationTime: this.c,
							refreshToken: this.a
						})
					}, wa.prototype.B = function() {
						return {
							lastLoginAt: this.b,
							createdAt: this.a
						}
					}, d(Ta, Bt), d(ka, fn), ka.prototype.na = function(t) {
						this.ha = t, gr(this.c, t)
					}, ka.prototype.$ = function() {
						return this.ha
					}, ka.prototype.Ka = function() {
						return O(this.R)
					}, ka.prototype.Ga = function() {
						this.l.b && (da(this.l), this.l.start())
					}, Ti(ka.prototype, "providerId", "firebase"), ou = ka.prototype, ou.reload = function() {
						var t = this;
						return Qa(this, Ua(this).then(function() {
							return Xa(t).then(function() {
								return Da(t)
							}).then(ja)
						}))
					}, ou.F = function(t) {
						var n = this;
						return Qa(this, Ua(this).then(function() {
							return n.h.getToken(t)
						}).then(function(t) {
							if (!t) throw new Pi("internal-error");
							return t.accessToken != n.pa && (_a(n, t.accessToken), ln(n, new Ta("tokenChanged"))), Ka(n, "refreshToken", t.refreshToken), t.accessToken
						}))
					}, ou.getToken = function(t) {
						return rh["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] || (rh["firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead."] = !0, "undefined" != typeof console && "function" == typeof console.warn && console.warn("firebase.User.prototype.getToken is deprecated. Please use firebase.User.prototype.getIdToken instead.")), this.F(t)
					}, ou.gc = function(t) {
						if (!(t = t.users) || !t.length) throw new Pi("internal-error");
						t = t[0], xa(this, {
							uid: t.localId,
							displayName: t.displayName,
							photoURL: t.photoUrl,
							email: t.email,
							emailVerified: !!t.emailVerified,
							phoneNumber: t.phoneNumber,
							lastLoginAt: t.lastLoginAt,
							createdAt: t.createdAt
						});
						for (var n = Wa(t), e = 0; e < n.length; e++) Va(this, n[e]);
						Ka(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length))
					}, ou.Za = function(t) {
						var n = this,
							e = null;
						return Qa(this, t.c(this.c, this.uid).then(function(t) {
							return Ba(n, t), e = za(n, t, "reauthenticate"), n.i = null, n.reload()
						}).then(function() {
							return e
						}), !0)
					}, ou.hc = function(t) {
						return this.Za(t).then(function() {})
					}, ou.Xa = function(t) {
						var n = this,
							e = null;
						return Qa(this, Ga(this, t.providerId).then(function() {
							return n.F()
						}).then(function(e) {
							return t.b(n.c, e)
						}).then(function(t) {
							return e = za(n, t, "link"), Ja(n, t)
						}).then(function() {
							return e
						}))
					}, ou.Zb = function(t) {
						return this.Xa(t).then(function(t) {
							return t.user
						})
					}, ou.$b = function(t, n) {
						var e = this;
						return Qa(this, Ga(this, "phone").then(function() {
							return ha(Sa(e), t, n, l(e.Xa, e))
						}))
					}, ou.ic = function(t, n) {
						var e = this;
						return Qa(this, nt().then(function() {
							return ha(Sa(e), t, n, l(e.Za, e))
						}), !0)
					}, ou.kb = function(t) {
						var n = this;
						return Qa(this, this.F().then(function(e) {
							return n.c.kb(e, t)
						}).then(function(t) {
							return Ba(n, t), n.reload()
						}))
					}, ou.zc = function(t) {
						var n = this;
						return Qa(this, this.F().then(function(e) {
							return t.b(n.c, e)
						}).then(function(t) {
							return Ba(n, t), n.reload()
						}))
					}, ou.lb = function(t) {
						var n = this;
						return Qa(this, this.F().then(function(e) {
							return n.c.lb(e, t)
						}).then(function(t) {
							return Ba(n, t), n.reload()
						}))
					}, ou.mb = function(t) {
						if (void 0 === t.displayName && void 0 === t.photoURL) return Ua(this);
						var n = this;
						return Qa(this, this.F().then(function(e) {
							return n.c.mb(e, {
								displayName: t.displayName,
								photoUrl: t.photoURL
							})
						}).then(function(t) {
							return Ba(n, t), Ka(n, "displayName", t.displayName || null), Ka(n, "photoURL", t.photoUrl || null), Tu(n.providerData, function(t) {
								"password" === t.providerId && (Ti(t, "displayName", n.displayName), Ti(t, "photoURL", n.photoURL))
							}), Da(n)
						}).then(ja))
					}, ou.yc = function(t) {
						var n = this;
						return Qa(this, Xa(this).then(function(e) {
							return A(Ma(n), t) ? Cr(n.c, e, [t]).then(function(t) {
								var e = {};
								return Tu(t.providerUserInfo || [], function(t) {
									e[t.providerId] = !0
								}), Tu(Ma(n), function(t) {
									e[t] || Fa(n, t)
								}), e[ar.PROVIDER_ID] || Ti(n, "phoneNumber", null), Da(n)
							}) : Da(n).then(function() {
								throw new Pi("no-such-provider")
							})
						}))
					}, ou.delete = function() {
						var t = this;
						return Qa(this, this.F().then(function(n) {
							return Ur(t.c, qh, {
								idToken: n
							})
						}).then(function() {
							ln(t, new Ta("userDeleted"))
						})).then(function() {
							for (var n = 0; n < t.A.length; n++) t.A[n].cancel("app-deleted");
							Aa(t, null), Na(t, null), t.A = [], t.m = !0, Ca(t), Ti(t, "refreshToken", null), t.a && t.a.unsubscribe(t)
						})
					}, ou.ob = function(t, n) {
						return !!("linkViaPopup" == t && (this.g || null) == n && this.f || "reauthViaPopup" == t && (this.g || null) == n && this.f || "linkViaRedirect" == t && (this.Z || null) == n || "reauthViaRedirect" == t && (this.Z || null) == n)
					}, ou.fa = function(t, n, e, i) {
						"linkViaPopup" != t && "reauthViaPopup" != t || i != (this.g || null) || (e && this.v ? this.v(e) : n && !e && this.f && this.f(n), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v)
					}, ou.va = function(t, n) {
						return "linkViaPopup" == t && n == (this.g || null) ? l(this.sb, this) : "reauthViaPopup" == t && n == (this.g || null) ? l(this.tb, this) : "linkViaRedirect" == t && (this.Z || null) == n ? l(this.sb, this) : "reauthViaRedirect" == t && (this.Z || null) == n ? l(this.tb, this) : null
					}, ou.ac = function(t) {
						var n = this;
						return Ya(this, "linkViaPopup", t, function() {
							return Ga(n, t.providerId).then(function() {
								return Da(n)
							})
						}, !1)
					}, ou.jc = function(t) {
						return Ya(this, "reauthViaPopup", t, function() {
							return nt()
						}, !0)
					}, ou.bc = function(t) {
						var n = this;
						return $a(this, "linkViaRedirect", t, function() {
							return Ga(n, t.providerId)
						}, !1)
					}, ou.kc = function(t) {
						return $a(this, "reauthViaRedirect", t, function() {
							return nt()
						}, !0)
					}, ou.sb = function(t, n) {
						var e = this;
						this.b && (this.b.cancel(), this.b = null);
						var i = null;
						return Qa(this, this.F().then(function(i) {
							return Lr(e.c, {
								requestUri: t,
								sessionId: n,
								idToken: i
							})
						}).then(function(t) {
							return i = za(e, t, "link"), Ja(e, t)
						}).then(function() {
							return i
						}))
					}, ou.tb = function(t, n) {
						var e = this;
						this.b && (this.b.cancel(), this.b = null);
						var i = null;
						return Qa(this, nt().then(function() {
							return Xi(xr(e.c, {
								requestUri: t,
								sessionId: n
							}), e.uid)
						}).then(function(t) {
							return i = za(e, t, "reauthenticate"), Ba(e, t), e.i = null, e.reload()
						}).then(function() {
							return i
						}), !0)
					}, ou.bb = function(t) {
						var n = this,
							e = null;
						return Qa(this, this.F().then(function(n) {
							return e = n, void 0 === t || D(t) ? {} : Ri(new _i(t))
						}).then(function(t) {
							return n.c.bb(e, t)
						}).then(function(t) {
							if (n.email != t) return n.reload()
						}).then(function() {}))
					}, ou.toJSON = function() {
						return this.B()
					}, ou.B = function() {
						var t = {
							uid: this.uid,
							displayName: this.displayName,
							photoURL: this.photoURL,
							email: this.email,
							emailVerified: this.emailVerified,
							phoneNumber: this.phoneNumber,
							isAnonymous: this.isAnonymous,
							providerData: [],
							apiKey: this.G,
							appName: this.o,
							authDomain: this.w,
							stsTokenManager: this.h.B(),
							redirectEventId: this.Z || null
						};
						return this.metadata && j(t, this.metadata.B()), Tu(this.providerData, function(n) {
							t.providerData.push(Ei(n))
						}), t
					};
					var Nf = {
						name: "redirectUser",
						C: "session"
					};
					as.prototype.g = function() {
						var t = this,
							n = cs("local");
						ds(this, function() {
							return nt().then(function() {
								return t.c && "local" != t.c.C ? t.b.get(n, t.a) : null
							}).then(function(e) {
								if (e) return ss(t, "local").then(function() {
									t.c = n
								})
							})
						})
					};
					var Sf = {
						name: "persistence",
						C: "session"
					};
					as.prototype.eb = function(t) {
						var n = null,
							e = this;
						return yo(t), ds(this, function() {
							return t != e.c.C ? e.b.get(e.c, e.a).then(function(i) {
								return n = i, ss(e, t)
							}).then(function() {
								if (e.c = cs(t), n) return e.b.set(e.c, n, e.a)
							}) : nt()
						})
					}, d(vs, fn), d(ms, Bt), d(gs, Bt), ou = vs.prototype, ou.eb = function(t) {
						return t = this.h.eb(t), Rs(this, t)
					}, ou.na = function(t) {
						this.V === t || this.l || (this.V = t, gr(this.c, this.V), ln(this, new ms(this.$())))
					}, ou.$ = function() {
						return this.V
					}, ou.Ac = function() {
						var t = uu.navigator;
						this.na(t ? t.languages && t.languages[0] || t.language || t.userLanguage || null : null)
					}, ou.cc = function(t) {
						this.A.push(t), br(this.c, au.SDK_VERSION ? ii(au.SDK_VERSION, this.A) : null), ln(this, new gs(this.A))
					}, ou.Ka = function() {
						return O(this.A)
					}, ou.toJSON = function() {
						return {
							apiKey: Ss(this).options.apiKey,
							authDomain: Ss(this).options.authDomain,
							appName: Ss(this).name,
							currentUser: Os(this) && Os(this).B()
						}
					}, ou.ob = function(t, n) {
						switch (t) {
							case "unknown":
							case "signInViaRedirect":
								return !0;
							case "signInViaPopup":
								return this.g == n && !!this.f;
							default:
								return !1
						}
					}, ou.fa = function(t, n, e, i) {
						"signInViaPopup" == t && this.g == i && (e && this.v ? this.v(e) : n && !e && this.f && this.f(n), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v)
					}, ou.va = function(t, n) {
						return "signInViaRedirect" == t || "signInViaPopup" == t && this.g == n && this.f ? l(this.Ob, this) : null
					}, ou.Ob = function(t, n) {
						var e = this;
						t = {
							requestUri: t,
							sessionId: n
						}, this.b && (this.b.cancel(), this.b = null);
						var i = null,
							r = null,
							o = Dr(e.c, t).then(function(t) {
								return i = ur(t), r = ji(t), t
							});
						return t = e.U.then(function() {
							return o
						}).then(function(t) {
							return Is(e, t)
						}).then(function() {
							return Ai({
								user: Os(e),
								credential: i,
								additionalUserInfo: r,
								operationType: "signIn"
							})
						}), Rs(this, t)
					}, ou.sc = function(t) {
						if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
						var n = this,
							e = xi(t.providerId),
							i = di(),
							r = null;
						(!hi() || Qe()) && Ss(this).options.authDomain && t.isOAuthProvider && (r = Qr(Ss(this).options.authDomain, Ss(this).options.apiKey, Ss(this).name, "signInViaPopup", t, null, i, au.SDK_VERSION || null));
						var o = ze(r, e && e.za, e && e.ya);
						return e = ws(this).then(function(n) {
							return $o(n, o, "signInViaPopup", t, i, !!r)
						}).then(function() {
							return new Z(function(t, e) {
								n.fa("signInViaPopup", null, new Pi("cancelled-popup-request"), n.g), n.f = t, n.v = e, n.g = i, n.b = n.a.Ca(n, "signInViaPopup", o, i)
							})
						}).then(function(t) {
							return o && Ge(o), t ? Ai(t) : null
						}).s(function(t) {
							throw o && Ge(o), t
						}), Rs(this, e)
					}, ou.tc = function(t) {
						if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
						var n = this;
						return Rs(this, ws(this).then(function() {
							return hs(n.h)
						}).then(function() {
							return n.a.Aa("signInViaRedirect", t)
						}))
					}, ou.aa = function() {
						if (!si()) return et(new Pi("operation-not-supported-in-this-environment"));
						var t = this;
						return Rs(this, ws(this).then(function() {
							return t.a.aa()
						}).then(function(t) {
							return t ? Ai(t) : null
						}))
					}, ou.hb = function() {
						var t = this;
						return Rs(this, this.i.then(function() {
							return Os(t) ? (Ts(t, null), ls(t.h).then(function() {
								Cs(t)
							})) : nt()
						}))
					}, ou.uc = function() {
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
					}, ou.ka = function(t) {
						return fs(this.h, t)
					}, ou.Pb = function() {
						Cs(this), this.ka(Os(this))
					}, ou.Vb = function() {
						this.hb()
					}, ou.Wb = function() {
						this.hb()
					}, ou.Xb = function(t) {
						var n = this;
						this.addAuthTokenListener(function() {
							t.next(Os(n))
						})
					}, ou.Yb = function(t) {
						var n = this;
						_s(this, function() {
							t.next(Os(n))
						})
					}, ou.ec = function(t, n, e) {
						var i = this;
						return this.W && au.Promise.resolve().then(function() {
							u(t) ? t(Os(i)) : u(t.next) && t.next(Os(i))
						}), this.Gb(t, n, e)
					}, ou.dc = function(t, n, e) {
						var i = this;
						return this.W && au.Promise.resolve().then(function() {
							i.R = i.getUid(), u(t) ? t(Os(i)) : u(t.next) && t.next(Os(i))
						}), this.Hb(t, n, e)
					}, ou.Rb = function(t) {
						var n = this;
						return Rs(this, this.i.then(function() {
							return Os(n) ? Os(n).F(t).then(function(t) {
								return {
									accessToken: t
								}
							}) : null
						}))
					}, ou.pc = function(t) {
						var n = this;
						return this.i.then(function() {
							return Ns(n, Ur(n.c, rf, {
								token: t
							}))
						}).then(function(t) {
							return t = t.user, Ka(t, "isAnonymous", !1), n.ka(t)
						}).then(function() {
							return Os(n)
						})
					}, ou.qc = function(t, n) {
						var e = this;
						return this.i.then(function() {
							return Ns(e, Ur(e.c, of , {
								email: t,
								password: n
							}))
						}).then(function(t) {
							return t.user
						})
					}, ou.Kb = function(t, n) {
						var e = this;
						return this.i.then(function() {
							return Ns(e, Ur(e.c, Fh, {
								email: t,
								password: n
							}))
						}).then(function(t) {
							return t.user
						})
					}, ou.oc = function(t) {
						return this.fb(t).then(function(t) {
							return t.user
						})
					}, ou.fb = function(t) {
						var n = this;
						return this.i.then(function() {
							return Ns(n, t.wa(n.c))
						})
					}, ou.gb = function() {
						var t = this;
						return this.i.then(function() {
							var n = Os(t);
							return n && n.isAnonymous ? n : Ns(t, t.c.gb()).then(function(n) {
								return n = n.user, Ka(n, "isAnonymous", !0), t.ka(n)
							}).then(function() {
								return Os(t)
							})
						})
					}, ou.getUid = function() {
						return Os(this) && Os(this).uid || null
					}, ou.Ib = function(t) {
						this.addAuthTokenListener(t), 0 < ++this.o && Os(this) && Pa(Os(this))
					}, ou.mc = function(t) {
						var n = this;
						Tu(this.m, function(e) {
							e == t && n.o--
						}), 0 > this.o && (this.o = 0), 0 == this.o && Os(this) && Ca(Os(this)), this.removeAuthTokenListener(t)
					}, ou.addAuthTokenListener = function(t) {
						var n = this;
						this.m.push(t), Rs(this, this.i.then(function() {
							n.l || A(n.m, t) && t(Ps(n))
						}))
					}, ou.removeAuthTokenListener = function(t) {
						N(this.m, function(n) {
							return n == t
						})
					}, ou.delete = function() {
						this.l = !0;
						for (var t = 0; t < this.N.length; t++) this.N[t].cancel("app-deleted");
						return this.N = [], this.h && (t = this.h, So(t.b, t.a, this.ha)), this.a && this.a.unsubscribe(this), au.Promise.resolve()
					}, ou.Nb = function(t) {
						return Rs(this, Er(this.c, t))
					}, ou.Bc = function(t) {
						return this.Ia(t).then(function(t) {
							return t.data.email
						})
					}, ou.Ta = function(t, n) {
						return Rs(this, this.c.Ta(t, n).then(function() {}))
					}, ou.Ia = function(t) {
						return Rs(this, this.c.Ia(t).then(function(t) {
							return new Oi(t)
						}))
					}, ou.Sa = function(t) {
						return Rs(this, this.c.Sa(t).then(function() {}))
					}, ou.cb = function(t, n) {
						var e = this;
						return Rs(this, nt().then(function() {
							return void 0 === n || D(n) ? {} : Ri(new _i(n))
						}).then(function(n) {
							return e.c.cb(t, n)
						}).then(function() {}))
					}, ou.rc = function(t, n) {
						return Rs(this, ha(this, t, n, l(this.fb, this)))
					};
					var Of = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" "),
						Pf = "callback",
						Cf = "expired-callback",
						_f = "sitekey",
						Rf = "size";
					ou = Ws.prototype, ou.xa = function() {
						var t = this;
						return this.c ? this.c : this.c = Js(this, nt().then(function() {
							if (ui()) return Ye();
							throw new Pi("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")
						}).then(function() {
							return Zs(Qs(), t.o())
						}).then(function() {
							return Ur(t.u, zh, {})
						}).then(function(n) {
							t.a[_f] = n.recaptchaSiteKey
						}).s(function(n) {
							throw t.c = null, n
						}))
					}, ou.render = function() {
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
									var r = function(n) {
										n && (zs(t, r), e(n))
									};
									t.i.push(r), t.h && grecaptcha.execute(t.b)
								}
							})
						}))
					}, ou.reset = function() {
						Ys(this), null !== this.b && grecaptcha.reset(this.b)
					}, ou.clear = function() {
						Ys(this), this.m = !0, Qs().b--;
						for (var t = 0; t < this.g.length; t++) this.g[t].cancel("RecaptchaVerifier instance has been destroyed.");
						if (!this.h) {
							t = Dt(this.l);
							for (var n; n = t.firstChild;) t.removeChild(n)
						}
					};
					var Df = It("https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
						Lf = null;
					d(tu, Ws), nu(vs.prototype, {
							Sa: {
								name: "applyActionCode",
								j: [Ls("code")]
							},
							Ia: {
								name: "checkActionCode",
								j: [Ls("code")]
							},
							Ta: {
								name: "confirmPasswordReset",
								j: [Ls("code"), Ls("newPassword")]
							},
							Kb: {
								name: "createUserWithEmailAndPassword",
								j: [Ls("email"), Ls("password")]
							},
							Nb: {
								name: "fetchProvidersForEmail",
								j: [Ls("email")]
							},
							aa: {
								name: "getRedirectResult",
								j: []
							},
							dc: {
								name: "onAuthStateChanged",
								j: [Hs(js(), Us(), "nextOrObserver"), Us("opt_error", !0), Us("opt_completed", !0)]
							},
							ec: {
								name: "onIdTokenChanged",
								j: [Hs(js(), Us(), "nextOrObserver"), Us("opt_error", !0), Us("opt_completed", !0)]
							},
							cb: {
								name: "sendPasswordResetEmail",
								j: [Ls("email"), Hs(js("opt_actionCodeSettings", !0), Ms(null, !0), "opt_actionCodeSettings", !0)]
							},
							eb: {
								name: "setPersistence",
								j: [Ls("persistence")]
							},
							fb: {
								name: "signInAndRetrieveDataWithCredential",
								j: [qs()]
							},
							gb: {
								name: "signInAnonymously",
								j: []
							},
							oc: {
								name: "signInWithCredential",
								j: [qs()]
							},
							pc: {
								name: "signInWithCustomToken",
								j: [Ls("token")]
							},
							qc: {
								name: "signInWithEmailAndPassword",
								j: [Ls("email"), Ls("password")]
							},
							rc: {
								name: "signInWithPhoneNumber",
								j: [Ls("phoneNumber"), Bs()]
							},
							sc: {
								name: "signInWithPopup",
								j: [Xs()]
							},
							tc: {
								name: "signInWithRedirect",
								j: [Xs()]
							},
							hb: {
								name: "signOut",
								j: []
							},
							toJSON: {
								name: "toJSON",
								j: [Ls(null, !0)]
							},
							Ac: {
								name: "useDeviceLanguage",
								j: []
							},
							Bc: {
								name: "verifyPasswordResetCode",
								j: [Ls("code")]
							}
						}),
						function(t, n) {
							for (var e in n) {
								var i = n[e].name;
								if (i !== e) {
									var r = n[e].Jb;
									Object.defineProperty(t, i, {
										get: function() {
											return this[e]
										},
										set: function(t) {
											Ds(i, [r], [t], !0), this[e] = t
										},
										enumerable: !0
									})
								}
							}
						}(vs.prototype, {
							lc: {
								name: "languageCode",
								Jb: Hs(Ls(), Ms(), "languageCode")
							}
						}), vs.Persistence = yf, vs.Persistence.LOCAL = "local", vs.Persistence.SESSION = "session", vs.Persistence.NONE = "none", nu(ka.prototype, {
							delete: {
								name: "delete",
								j: []
							},
							F: {
								name: "getIdToken",
								j: [xs()]
							},
							getToken: {
								name: "getToken",
								j: [xs()]
							},
							Xa: {
								name: "linkAndRetrieveDataWithCredential",
								j: [qs()]
							},
							Zb: {
								name: "linkWithCredential",
								j: [qs()]
							},
							$b: {
								name: "linkWithPhoneNumber",
								j: [Ls("phoneNumber"), Bs()]
							},
							ac: {
								name: "linkWithPopup",
								j: [Xs()]
							},
							bc: {
								name: "linkWithRedirect",
								j: [Xs()]
							},
							Za: {
								name: "reauthenticateAndRetrieveDataWithCredential",
								j: [qs()]
							},
							hc: {
								name: "reauthenticateWithCredential",
								j: [qs()]
							},
							ic: {
								name: "reauthenticateWithPhoneNumber",
								j: [Ls("phoneNumber"), Bs()]
							},
							jc: {
								name: "reauthenticateWithPopup",
								j: [Xs()]
							},
							kc: {
								name: "reauthenticateWithRedirect",
								j: [Xs()]
							},
							reload: {
								name: "reload",
								j: []
							},
							bb: {
								name: "sendEmailVerification",
								j: [Hs(js("opt_actionCodeSettings", !0), Ms(null, !0), "opt_actionCodeSettings", !0)]
							},
							toJSON: {
								name: "toJSON",
								j: [Ls(null, !0)]
							},
							yc: {
								name: "unlink",
								j: [Ls("provider")]
							},
							kb: {
								name: "updateEmail",
								j: [Ls("email")]
							},
							lb: {
								name: "updatePassword",
								j: [Ls("password")]
							},
							zc: {
								name: "updatePhoneNumber",
								j: [qs("phone")]
							},
							mb: {
								name: "updateProfile",
								j: [js("profile")]
							}
						}), nu(Z.prototype, {
							s: {
								name: "catch"
							},
							then: {
								name: "then"
							}
						}), nu(ca.prototype, {
							confirm: {
								name: "confirm",
								j: [Ls("verificationCode")]
							}
						}), eu(ir, "credential", function(t, n) {
							return new er(t, n)
						}, [Ls("email"), Ls("password")]), nu(zi.prototype, {
							sa: {
								name: "addScope",
								j: [Ls("scope")]
							},
							Ba: {
								name: "setCustomParameters",
								j: [js("customOAuthParameters")]
							}
						}), eu(zi, "credential", Ji, [Hs(Ls(), js(), "token")]), nu(Yi.prototype, {
							sa: {
								name: "addScope",
								j: [Ls("scope")]
							},
							Ba: {
								name: "setCustomParameters",
								j: [js("customOAuthParameters")]
							}
						}), eu(Yi, "credential", $i, [Hs(Ls(), js(), "token")]), nu(Zi.prototype, {
							sa: {
								name: "addScope",
								j: [Ls("scope")]
							},
							Ba: {
								name: "setCustomParameters",
								j: [js("customOAuthParameters")]
							}
						}), eu(Zi, "credential", Qi, [Hs(Ls(), Hs(js(), Ms()), "idToken"), Hs(Ls(), Ms(), "accessToken", !0)]), nu(tr.prototype, {
							Ba: {
								name: "setCustomParameters",
								j: [js("customOAuthParameters")]
							}
						}), eu(tr, "credential", nr, [Hs(Ls(), js(), "token"), Ls("secret", !0)]), nu(Gi.prototype, {
							sa: {
								name: "addScope",
								j: [Ls("scope")]
							},
							credential: {
								name: "credential",
								j: [Hs(Ls(), Ms(), "idToken", !0), Hs(Ls(), Ms(), "accessToken", !0)]
							},
							Ba: {
								name: "setCustomParameters",
								j: [js("customOAuthParameters")]
							}
						}), eu(ar, "credential", sr, [Ls("verificationId"), Ls("verificationCode")]), nu(ar.prototype, {
							Qa: {
								name: "verifyPhoneNumber",
								j: [Ls("phoneNumber"), Bs()]
							}
						}), nu(Pi.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Ls(null, !0)]
							}
						}), nu(pr.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Ls(null, !0)]
							}
						}), nu(lr.prototype, {
							toJSON: {
								name: "toJSON",
								j: [Ls(null, !0)]
							}
						}), nu(tu.prototype, {
							clear: {
								name: "clear",
								j: []
							},
							render: {
								name: "render",
								j: []
							},
							verify: {
								name: "verify",
								j: []
							}
						}),
						function() {
							if (void 0 === au || !au.INTERNAL || !au.INTERNAL.registerService) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
							var t = {
								Auth: vs,
								Error: Pi
							};
							eu(t, "EmailAuthProvider", ir, []), eu(t, "FacebookAuthProvider", zi, []), eu(t, "GithubAuthProvider", Yi, []), eu(t, "GoogleAuthProvider", Zi, []), eu(t, "TwitterAuthProvider", tr, []), eu(t, "OAuthProvider", Gi, [Ls("providerId")]), eu(t, "PhoneAuthProvider", ar, [Fs()]), eu(t, "RecaptchaVerifier", tu, [Hs(Ls(), Vs(), "recaptchaContainer"), js("recaptchaParameters", !0), Ks()]), au.INTERNAL.registerService("auth", function(t, n) {
								return t = new vs(t), n({
									INTERNAL: {
										getUid: l(t.getUid, t),
										getToken: l(t.Rb, t),
										addAuthTokenListener: l(t.Ib, t),
										removeAuthTokenListener: l(t.mc, t)
									}
								}), t
							}, t, function(t, n) {
								if ("create" === t) try {
									n.auth()
								} catch (t) {}
							}), au.INTERNAL.extendNamespace({
								User: ka
							})
						}()
				}).call(void 0 !== t ? t : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
			}).call(n, e(19))
		}
	}, [76])
} catch (t) {
	throw Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.")
}
/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
	webpackJsonpFirebase([0], [, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(0),
			o = n(0),
			a = n(0),
			s = n(0),
			u = n(0),
			l = n(12),
			h = n(0);
		t.LUIDGenerator = function() {
			var e = 1;
			return function() {
				return e++
			}
		}(), t.sha1 = function(e) {
			var t = s.stringToByteArray(e),
				n = new a.Sha1;
			n.update(t);
			var r = n.digest();
			return o.base64.encodeByteArray(r)
		};
		var c = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			for (var n = "", r = 0; r < e.length; r++) Array.isArray(e[r]) || e[r] && "object" == typeof e[r] && "number" == typeof e[r].length ? n += c.apply(null, e[r]) : "object" == typeof e[r] ? n += u.stringify(e[r]) : n += e[r], n += " ";
			return n
		};
		t.logger = null;
		var p = !0;
		t.enableLogging = function(e, n) {
			r.assert(!n || !0 === e || !1 === e, "Can't turn on custom loggers persistently."), !0 === e ? ("undefined" != typeof console && ("function" == typeof console.log ? t.logger = console.log.bind(console) : "object" == typeof console.log && (t.logger = function(e) {
				console.log(e)
			})), n && l.SessionStorage.set("logging_enabled", !0)) : "function" == typeof e ? t.logger = e : (t.logger = null, l.SessionStorage.remove("logging_enabled"))
		}, t.log = function() {
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
		}, t.fatal = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			var n = c.apply(void 0, e);
			throw Error("FIREBASE FATAL ERROR: " + n)
		}, t.warn = function() {
			for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
			if ("undefined" != typeof console) {
				var n = "FIREBASE WARNING: " + c.apply(void 0, e);
				void 0 !== console.warn ? console.warn(n) : console.log(n)
			}
		}, t.warnIfPageIsSecure = function() {
			"undefined" != typeof window && window.location && window.location.protocol && -1 !== window.location.protocol.indexOf("https:") && t.warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")
		}, t.warnAboutUnsupportedMethod = function(e) {
			t.warn(e + " is unsupported and will likely change soon.  Please do not use.")
		}, t.isInvalidJSONNumber = function(e) {
			return "number" == typeof e && (e != e || e == Number.POSITIVE_INFINITY || e == Number.NEGATIVE_INFINITY)
		}, t.executeWhenDOMReady = function(e) {
			if (h.isNodeSdk() || "complete" === document.readyState) e();
			else {
				var t = !1,
					n = function() {
						if (!document.body) return void setTimeout(n, Math.floor(10));
						t || (t = !0, e())
					};
				document.addEventListener ? (document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1)) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
					"complete" === document.readyState && n()
				}), window.attachEvent("onload", n))
			}
		}, t.MIN_NAME = "[MIN_NAME]", t.MAX_NAME = "[MAX_NAME]", t.nameCompare = function(e, n) {
			if (e === n) return 0;
			if (e === t.MIN_NAME || n === t.MAX_NAME) return -1;
			if (n === t.MIN_NAME || e === t.MAX_NAME) return 1;
			var r = t.tryParseInt(e),
				i = t.tryParseInt(n);
			return null !== r ? null !== i ? r - i == 0 ? e.length - n.length : r - i : -1 : null !== i ? 1 : e < n ? -1 : 1
		}, t.stringCompare = function(e, t) {
			return e === t ? 0 : e < t ? -1 : 1
		}, t.requireKey = function(e, t) {
			if (t && e in t) return t[e];
			throw Error("Missing required key (" + e + ") in object: " + u.stringify(t))
		}, t.ObjectToUniqueKey = function(e) {
			if ("object" != typeof e || null === e) return u.stringify(e);
			var n = [];
			for (var r in e) n.push(r);
			n.sort();
			for (var i = "{", o = 0; o < n.length; o++) 0 !== o && (i += ","), i += u.stringify(n[o]), i += ":", i += t.ObjectToUniqueKey(e[n[o]]);
			return i += "}"
		}, t.splitStringBySize = function(e, t) {
			var n = e.length;
			if (n <= t) return [e];
			for (var r = [], i = 0; i < n; i += t) i + t > n ? r.push(e.substring(i, n)) : r.push(e.substring(i, i + t));
			return r
		}, t.each = function(e, t) {
			if (Array.isArray(e))
				for (var n = 0; n < e.length; ++n) t(n, e[n]);
			else i.forEach(e, function(e, n) {
				return t(n, e)
			})
		}, t.bindCallback = function(e, t) {
			return t ? e.bind(t) : e
		}, t.doubleToIEEE754String = function(e) {
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
		}, t.isChromeExtensionContentScript = function() {
			return !("object" != typeof window || !window.chrome || !window.chrome.extension || /^chrome/.test(window.location.href))
		}, t.isWindowsStoreApp = function() {
			return "object" == typeof Windows && "object" == typeof Windows.UI
		}, t.errorForServerCode = function(e, t) {
			var n = "Unknown Error";
			"too_big" === e ? n = "The data requested exceeds the maximum size that can be accessed with a single request." : "permission_denied" == e ? n = "Client doesn't have permission to access the desired data." : "unavailable" == e && (n = "The service is unavailable");
			var r = Error(e + " at " + t.path + ": " + n);
			return r.code = e.toUpperCase(), r
		}, t.e = RegExp("^-?\\d{1,10}$"), t.tryParseInt = function(e) {
			if (t.e.test(e)) {
				var n = +e;
				if (n >= -2147483648 && n <= 2147483647) return n
			}
			return null
		}, t.exceptionGuard = function(e) {
			try {
				e()
			} catch (e) {
				setTimeout(function() {
					var n = e.stack || "";
					throw t.warn("Exception was thrown by user callback.", n), e
				}, Math.floor(0))
			}
		}, t.callUserCallback = function(e) {
			for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
			"function" == typeof e && t.exceptionGuard(function() {
				e.apply(void 0, n)
			})
		}, t.beingCrawled = function() {
			return ("object" == typeof window && window.navigator && window.navigator.userAgent || "").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0
		}, t.exportPropGetter = function(e, t, n) {
			Object.defineProperty(e, t, {
				get: n
			})
		}, t.setTimeoutNonBlocking = function(e, t) {
			var n = setTimeout(e, t);
			return "object" == typeof n && n.unref && n.unref(), n
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = n(0),
			o = function() {
				function e(e, t) {
					if (void 0 === t) {
						this.n = e.split("/");
						for (var n = 0, r = 0; r < this.n.length; r++) this.n[r].length > 0 && (this.n[n] = this.n[r], n++);
						this.n.length = n, this.i = 0
					} else this.n = e, this.i = t
				}
				return Object.defineProperty(e, "Empty", {
					get: function() {
						return new e("")
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.getFront = function() {
					return this.i >= this.n.length ? null : this.n[this.i]
				}, e.prototype.getLength = function() {
					return this.n.length - this.i
				}, e.prototype.popFront = function() {
					var t = this.i;
					return t < this.n.length && t++, new e(this.n, t)
				}, e.prototype.getBack = function() {
					return this.i < this.n.length ? this.n[this.n.length - 1] : null
				}, e.prototype.toString = function() {
					for (var e = "", t = this.i; t < this.n.length; t++) "" !== this.n[t] && (e += "/" + this.n[t]);
					return e || "/"
				}, e.prototype.toUrlEncodedString = function() {
					for (var e = "", t = this.i; t < this.n.length; t++) "" !== this.n[t] && (e += "/" + encodeURIComponent(this.n[t] + ""));
					return e || "/"
				}, e.prototype.slice = function(e) {
					return void 0 === e && (e = 0), this.n.slice(this.i + e)
				}, e.prototype.parent = function() {
					if (this.i >= this.n.length) return null;
					for (var t = [], n = this.i; n < this.n.length - 1; n++) t.push(this.n[n]);
					return new e(t, 0)
				}, e.prototype.child = function(t) {
					for (var n = [], r = this.i; r < this.n.length; r++) n.push(this.n[r]);
					if (t instanceof e)
						for (var r = t.i; r < t.n.length; r++) n.push(t.n[r]);
					else
						for (var i = t.split("/"), r = 0; r < i.length; r++) i[r].length > 0 && n.push(i[r]);
					return new e(n, 0)
				}, e.prototype.isEmpty = function() {
					return this.i >= this.n.length
				}, e.relativePath = function(t, n) {
					var r = t.getFront(),
						i = n.getFront();
					if (null === r) return n;
					if (r === i) return e.relativePath(t.popFront(), n.popFront());
					throw Error("INTERNAL ERROR: innerPath (" + n + ") is not within outerPath (" + t + ")")
				}, e.comparePaths = function(e, t) {
					for (var n = e.slice(), i = t.slice(), o = 0; o < n.length && o < i.length; o++) {
						var a = r.nameCompare(n[o], i[o]);
						if (0 !== a) return a
					}
					return n.length === i.length ? 0 : n.length < i.length ? -1 : 1
				}, e.prototype.equals = function(e) {
					if (this.getLength() !== e.getLength()) return !1;
					for (var t = this.i, n = e.i; t <= this.n.length; t++, n++)
						if (this.n[t] !== e.n[n]) return !1;
					return !0
				}, e.prototype.contains = function(e) {
					var t = this.i,
						n = e.i;
					if (this.getLength() > e.getLength()) return !1;
					for (; t < this.n.length;) {
						if (this.n[t] !== e.n[n]) return !1;
						++t, ++n
					}
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
			return Object.defineProperty(e, "MAX_PATH_DEPTH", {
				get: function() {
					return 32
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e, "MAX_PATH_LENGTH_BYTES", {
				get: function() {
					return 768
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.push = function(e) {
				this.u.length > 0 && (this.l += 1), this.u.push(e), this.l += i.stringLength(e), this.f()
			}, e.prototype.pop = function() {
				var e = this.u.pop();
				this.l -= i.stringLength(e), this.u.length > 0 && (this.l -= 1)
			}, e.prototype.f = function() {
				if (this.l > e.MAX_PATH_LENGTH_BYTES) throw Error(this.o + "has a key path longer than " + e.MAX_PATH_LENGTH_BYTES + " bytes (" + this.l + ").");
				if (this.u.length > e.MAX_PATH_DEPTH) throw Error(this.o + "path specified exceeds the maximum depth that can be written (" + e.MAX_PATH_DEPTH + ") or object contains a cycle " + this.toErrorString())
			}, e.prototype.toErrorString = function() {
				return 0 == this.u.length ? "" : "in property '" + this.u.join(".") + "'"
			}, e
		}();
		t.ValidationPath = a
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			a = e
		}

		function i(e) {
			s = e
		}
		var o = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var a, s, u = n(14),
			l = n(1),
			h = n(5),
			c = n(15);
		t.setNodeFromJSON = r, t.setMaxNode = i;
		var p = function(e) {
			function t() {
				return null !== e && e.apply(this, arguments) || this
			}
			return o(t, e), t.prototype.compare = function(e, t) {
				var n = e.node.getPriority(),
					r = t.node.getPriority(),
					i = n.compareTo(r);
				return 0 === i ? l.nameCompare(e.name, t.name) : i
			}, t.prototype.isDefinedOn = function(e) {
				return !e.getPriority().isEmpty()
			}, t.prototype.indexedValueChanged = function(e, t) {
				return !e.getPriority().equals(t.getPriority())
			}, t.prototype.minPost = function() {
				return h.NamedNode.MIN
			}, t.prototype.maxPost = function() {
				return new h.NamedNode(l.MAX_NAME, new c.LeafNode("[PRIORITY-POST]", s))
			}, t.prototype.makePost = function(e, t) {
				var n = a(e);
				return new h.NamedNode(t, new c.LeafNode("[PRIORITY-POST]", n))
			}, t.prototype.toString = function() {
				return ".priority"
			}, t
		}(u.Index);
		t.PriorityIndex = p, t.PRIORITY_INDEX = new p
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function e(e, t, n) {
					this._ = e, this.y = t, this.g = n, this.m = null, this.y && l.validatePriorityNode(this.y), this._.isEmpty() && o.assert(!this.y || this.y.isEmpty(), "An empty node cannot have a priority")
				}
				return Object.defineProperty(e, "EMPTY_NODE", {
					get: function() {
						return i || (i = new e(new s.SortedMap(f.NAME_COMPARATOR), null, p.IndexMap.Default))
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.isLeafNode = function() {
					return !1
				}, e.prototype.getPriority = function() {
					return this.y || i
				}, e.prototype.updatePriority = function(t) {
					return this._.isEmpty() ? this : new e(this._, t, this.g)
				}, e.prototype.getImmediateChild = function(e) {
					if (".priority" === e) return this.getPriority();
					var t = this._.get(e);
					return null === t ? i : t
				}, e.prototype.getChild = function(e) {
					var t = e.getFront();
					return null === t ? this : this.getImmediateChild(t).getChild(e.popFront())
				}, e.prototype.hasChild = function(e) {
					return null !== this._.get(e)
				}, e.prototype.updateImmediateChild = function(t, n) {
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
				}, e.prototype.isEmpty = function() {
					return this._.isEmpty()
				}, e.prototype.numChildren = function() {
					return this._.count()
				}, e.prototype.val = function(t) {
					if (this.isEmpty()) return null;
					var n = {},
						r = 0,
						i = 0,
						o = !0;
					if (this.forEachChild(h.PRIORITY_INDEX, function(a, s) {
							n[a] = s.val(t), r++, o && e.e.test(a) ? i = Math.max(i, +a) : o = !1
						}), !t && o && i < 2 * r) {
						var a = [];
						for (var s in n) a[s] = n[s];
						return a
					}
					return t && !this.getPriority().isEmpty() && (n[".priority"] = this.getPriority().val()), n
				}, e.prototype.hash = function() {
					if (null === this.m) {
						var e = "";
						this.getPriority().isEmpty() || (e += "priority:" + l.priorityHashText(this.getPriority().val()) + ":"), this.forEachChild(h.PRIORITY_INDEX, function(t, n) {
							var r = n.hash();
							"" !== r && (e += ":" + t + ":" + r)
						}), this.m = "" === e ? "" : a.sha1(e)
					}
					return this.m
				}, e.prototype.getPredecessorChildName = function(e, t, n) {
					var r = this.C(n);
					if (r) {
						var i = r.getPredecessorKey(new u.NamedNode(e, t));
						return i ? i.name : null
					}
					return this._.getPredecessorKey(e)
				}, e.prototype.getFirstChildName = function(e) {
					var t = this.C(e);
					if (t) {
						var n = t.minKey();
						return n && n.name
					}
					return this._.minKey()
				}, e.prototype.getFirstChild = function(e) {
					var t = this.getFirstChildName(e);
					return t ? new u.NamedNode(t, this._.get(t)) : null
				}, e.prototype.getLastChildName = function(e) {
					var t = this.C(e);
					if (t) {
						var n = t.maxKey();
						return n && n.name
					}
					return this._.maxKey()
				}, e.prototype.getLastChild = function(e) {
					var t = this.getLastChildName(e);
					return t ? new u.NamedNode(t, this._.get(t)) : null
				}, e.prototype.forEachChild = function(e, t) {
					var n = this.C(e);
					return n ? n.inorderTraversal(function(e) {
						return t(e.name, e.node)
					}) : this._.inorderTraversal(t)
				}, e.prototype.getIterator = function(e) {
					return this.getIteratorFrom(e.minPost(), e)
				}, e.prototype.getIteratorFrom = function(e, t) {
					var n = this.C(t);
					if (n) return n.getIteratorFrom(e, function(e) {
						return e
					});
					for (var r = this._.getIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) < 0;) r.getNext(), i = r.peek();
					return r
				}, e.prototype.getReverseIterator = function(e) {
					return this.getReverseIteratorFrom(e.maxPost(), e)
				}, e.prototype.getReverseIteratorFrom = function(e, t) {
					var n = this.C(t);
					if (n) return n.getReverseIteratorFrom(e, function(e) {
						return e
					});
					for (var r = this._.getReverseIteratorFrom(e.name, u.NamedNode.Wrap), i = r.peek(); null != i && t.compare(i, e) > 0;) r.getNext(), i = r.peek();
					return r
				}, e.prototype.compareTo = function(e) {
					return this.isEmpty() ? e.isEmpty() ? 0 : -1 : e.isLeafNode() || e.isEmpty() ? 1 : e === t.MAX_NODE ? -1 : 0
				}, e.prototype.withIndex = function(t) {
					if (t === c.KEY_INDEX || this.g.hasIndex(t)) return this;
					var n = this.g.addIndex(t, this._);
					return new e(this._, this.y, n)
				}, e.prototype.isIndexed = function(e) {
					return e === c.KEY_INDEX || this.g.hasIndex(e)
				}, e.prototype.equals = function(e) {
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
				}, e.prototype.C = function(e) {
					return e === c.KEY_INDEX ? null : this.g.get("" + e)
				}, e.e = /^(0|[1-9]\d*)$/, e
			}();
		t.ChildrenNode = _;
		var y = function(e) {
			function t() {
				return e.call(this, new s.SortedMap(f.NAME_COMPARATOR), _.EMPTY_NODE, p.IndexMap.Default) || this
			}
			return r(t, e), t.prototype.compareTo = function(e) {
				return e === this ? 0 : 1
			}, t.prototype.equals = function(e) {
				return e === this
			}, t.prototype.getPriority = function() {
				return this
			}, t.prototype.getImmediateChild = function(e) {
				return _.EMPTY_NODE
			}, t.prototype.isEmpty = function() {
				return !1
			}, t
		}(_);
		t.MaxNode = y, t.MAX_NODE = new y, Object.defineProperties(u.NamedNode, {
			MIN: {
				value: new u.NamedNode(a.MIN_NAME, _.EMPTY_NODE)
			},
			MAX: {
				value: new u.NamedNode(a.MAX_NAME, t.MAX_NODE)
			}
		}), c.KeyIndex.__EMPTY_NODE = _.EMPTY_NODE, d.LeafNode.__childrenNodeConstructor = _, l.setMaxNode(t.MAX_NODE), h.setMaxNode(t.MAX_NODE)
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t) {
				this.name = e, this.node = t
			}
			return e.Wrap = function(t, n) {
				return new e(t, n)
			}, e
		}();
		t.NamedNode = r
	}, , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(2),
			i = n(0),
			o = n(1),
			a = n(0),
			s = n(0);
		t.N = /[\[\].#$\/\u0000-\u001F\u007F]/, t.P = /[\[\].#$\u0000-\u001F\u007F]/, t.S = 10485760, t.isValidKey = function(e) {
			return "string" == typeof e && 0 !== e.length && !t.N.test(e)
		}, t.isValidPathString = function(e) {
			return "string" == typeof e && 0 !== e.length && !t.P.test(e)
		}, t.isValidRootPathString = function(e) {
			return e && (e = e.replace(/^\/*\.info(\/|$)/, "/")), t.isValidPathString(e)
		}, t.isValidPriority = function(e) {
			return null === e || "string" == typeof e || "number" == typeof e && !o.isInvalidJSONNumber(e) || e && "object" == typeof e && i.contains(e, ".sv")
		}, t.validateFirebaseDataArg = function(e, n, r, i, o) {
			o && void 0 === r || t.validateFirebaseData(a.errorPrefix(e, n, o), r, i)
		}, t.validateFirebaseData = function(e, n, a) {
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
		}, t.validatePriority = function(e, n, r, i) {
			if (!i || void 0 !== r) {
				if (o.isInvalidJSONNumber(r)) throw Error(a.errorPrefix(e, n, i) + "is " + r + ", but must be a valid Firebase priority (a string, finite number, server value, or null).");
				if (!t.isValidPriority(r)) throw Error(a.errorPrefix(e, n, i) + "must be a valid Firebase priority (a string, finite number, server value, or null).")
			}
		}, t.validateEventType = function(e, t, n, r) {
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
		}, t.validateKey = function(e, n, r, i) {
			if (!(i && void 0 === r || t.isValidKey(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid key = "' + r + '".  Firebase keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]").')
		}, t.validatePathString = function(e, n, r, i) {
			if (!(i && void 0 === r || t.isValidPathString(r))) throw Error(a.errorPrefix(e, n, i) + 'was an invalid path = "' + r + '". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')
		}, t.validateRootPathString = function(e, n, r, i) {
			r && (r = r.replace(/^\/*\.info(\/|$)/, "/")), t.validatePathString(e, n, r, i)
		}, t.validateWritablePath = function(e, t) {
			if (".info" === t.getFront()) throw Error(e + " failed = Can't modify data under /.info/")
		}, t.validateUrl = function(e, n, r) {
			var i = "" + r.path;
			if ("string" != typeof r.repoInfo.host || 0 === r.repoInfo.host.length || !t.isValidKey(r.repoInfo.namespace) || 0 !== i.length && !t.isValidRootPathString(i)) throw Error(a.errorPrefix(e, n, !1) + 'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')
		}, t.validateCredential = function(e, t, n, r) {
			if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid credential (a string).")
		}, t.validateBoolean = function(e, t, n, r) {
			if ((!r || void 0 !== n) && "boolean" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a boolean.")
		}, t.validateString = function(e, t, n, r) {
			if ((!r || void 0 !== n) && "string" != typeof n) throw Error(a.errorPrefix(e, t, r) + "must be a valid string.")
		}, t.validateObject = function(e, t, n, r) {
			if (!(r && void 0 === n || n && "object" == typeof n && null !== n)) throw Error(a.errorPrefix(e, t, r) + "must be a valid object.")
		}, t.validateObjectContainsKey = function(e, t, n, r, o, s) {
			if (!n || "object" != typeof n || !i.contains(n, r)) {
				if (o) return;
				throw Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '"')
			}
			if (s) {
				var u = i.safeGet(n, r);
				if ("number" === s && "number" != typeof u || "string" === s && "string" != typeof u || "boolean" === s && "boolean" != typeof u || "function" === s && "function" != typeof u || "object" === s && "object" != typeof u && u) throw o ? Error(a.errorPrefix(e, t, o) + 'contains invalid value for key "' + r + '" (must be of type "' + s + '")') : Error(a.errorPrefix(e, t, o) + 'must contain the key "' + r + '" with type "' + s + '"')
			}
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0);
		! function(e) {
			e[e.OVERWRITE = 0] = "OVERWRITE", e[e.MERGE = 1] = "MERGE", e[e.ACK_USER_WRITE = 2] = "ACK_USER_WRITE", e[e.LISTEN_COMPLETE = 3] = "LISTEN_COMPLETE"
		}(t.OperationType || (t.OperationType = {}));
		var i = function() {
			function e(e, t, n, i) {
				this.fromUser = e, this.fromServer = t, this.queryId = n, this.tagged = i, r.assert(!i || t, "Tagged queries must be from server.")
			}
			return e.User = new e(!0, !1, null, !1), e.Server = new e(!1, !0, null, !1), e.forServerTaggedQuery = function(t) {
				return new e(!1, !0, t, !0)
			}, e
		}();
		t.OperationSource = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t, n, r, i) {
				this.type = e, this.snapshotNode = t, this.childName = n, this.oldSnap = r, this.prevName = i
			}
			return e.valueChange = function(t) {
				return new e(e.VALUE, t)
			}, e.childAddedChange = function(t, n) {
				return new e(e.CHILD_ADDED, n, t)
			}, e.childRemovedChange = function(t, n) {
				return new e(e.CHILD_REMOVED, n, t)
			}, e.childChangedChange = function(t, n, r) {
				return new e(e.CHILD_CHANGED, n, t, r)
			}, e.childMovedChange = function(t, n) {
				return new e(e.CHILD_MOVED, n, t)
			}, e.CHILD_ADDED = "child_added", e.CHILD_REMOVED = "child_removed", e.CHILD_CHANGED = "child_changed", e.CHILD_MOVED = "child_moved", e.VALUE = "value", e
		}();
		t.Change = r
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i, o = n(14),
			a = n(5),
			s = n(1),
			u = n(0),
			l = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return r(t, e), Object.defineProperty(t, "__EMPTY_NODE", {
					get: function() {
						return i
					},
					set: function(e) {
						i = e
					},
					enumerable: !0,
					configurable: !0
				}), t.prototype.compare = function(e, t) {
					return s.nameCompare(e.name, t.name)
				}, t.prototype.isDefinedOn = function(e) {
					throw u.assertionError("KeyIndex.isDefinedOn not expected to be called.")
				}, t.prototype.indexedValueChanged = function(e, t) {
					return !1
				}, t.prototype.minPost = function() {
					return a.NamedNode.MIN
				}, t.prototype.maxPost = function() {
					return new a.NamedNode(s.MAX_NAME, i)
				}, t.prototype.makePost = function(e, t) {
					return u.assert("string" == typeof e, "KeyIndex indexValue must always be a string."), new a.NamedNode(e, i)
				}, t.prototype.toString = function() {
					return ".key"
				}, t
			}(o.Index);
		t.KeyIndex = l, t.KEY_INDEX = new l
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (void 0 === t && (t = null), null === e) return i.ChildrenNode.EMPTY_NODE;
			if ("object" == typeof e && ".priority" in e && (t = e[".priority"]), u.assert(null === t || "string" == typeof t || "number" == typeof t || "object" == typeof t && ".sv" in t, "Invalid priority type found: " + typeof t), "object" == typeof e && ".value" in e && null !== e[".value"] && (e = e[".value"]), "object" != typeof e || ".sv" in e) {
				var n = e;
				return new o.LeafNode(n, r(t))
			}
			if (e instanceof Array || !d) {
				var f = i.ChildrenNode.EMPTY_NODE,
					_ = e;
				return s.forEach(_, function(e, t) {
					if (s.contains(_, e) && "." !== e.substring(0, 1)) {
						var n = r(t);
						!n.isLeafNode() && n.isEmpty() || (f = f.updateImmediateChild(e, n))
					}
				}), f.updatePriority(r(t))
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
			var m = l.buildChildSet(y, h.NAME_ONLY_COMPARATOR, function(e) {
				return e.name
			}, h.NAME_COMPARATOR);
			if (v) {
				var C = l.buildChildSet(y, p.PRIORITY_INDEX.getCompare());
				return new i.ChildrenNode(m, r(t), new c.IndexMap({
					".priority": C
				}, {
					".priority": p.PRIORITY_INDEX
				}))
			}
			return new i.ChildrenNode(m, r(t), c.IndexMap.Default)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(80),
			i = n(81),
			o = function(e) {
				try {
					if ("undefined" != typeof window && void 0 !== window[e]) {
						var t = window[e];
						return t.setItem("firebase:sentinel", "cache"), t.removeItem("firebase:sentinel"), new r.DOMStorageWrapper(t)
					}
				} catch (e) {}
				return new i.MemoryStorage
			};
		t.PersistentStorage = o("localStorage"), t.SessionStorage = o("sessionStorage")
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PROTOCOL_VERSION = "5", t.VERSION_PARAM = "v", t.TRANSPORT_SESSION_PARAM = "s", t.REFERER_PARAM = "r", t.FORGE_REF = "f", t.FORGE_DOMAIN = "firebaseio.com", t.LAST_SESSION_PARAM = "ls", t.WEBSOCKET = "websocket", t.LONG_POLLING = "long_polling"
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(5),
			i = n(1),
			o = function() {
				function e() {}
				return e.prototype.getCompare = function() {
					return this.compare.bind(this)
				}, e.prototype.indexedValueChanged = function(e, t) {
					var n = new r.NamedNode(i.MIN_NAME, e),
						o = new r.NamedNode(i.MIN_NAME, t);
					return 0 !== this.compare(n, o)
				}, e.prototype.minPost = function() {
					return r.NamedNode.MIN
				}, e
			}();
		t.Index = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(0),
			o = n(1),
			a = n(37),
			s = function() {
				function e(t, n) {
					void 0 === n && (n = e.__childrenNodeConstructor.EMPTY_NODE), this.T = t, this.y = n, this.m = null, i.assert(void 0 !== this.T && null !== this.T, "LeafNode shouldn't be created with null/undefined value."), a.validatePriorityNode(this.y)
				}
				return Object.defineProperty(e, "__childrenNodeConstructor", {
					get: function() {
						return r
					},
					set: function(e) {
						r = e
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.isLeafNode = function() {
					return !0
				}, e.prototype.getPriority = function() {
					return this.y
				}, e.prototype.updatePriority = function(t) {
					return new e(this.T, t)
				}, e.prototype.getImmediateChild = function(t) {
					return ".priority" === t ? this.y : e.__childrenNodeConstructor.EMPTY_NODE
				}, e.prototype.getChild = function(t) {
					return t.isEmpty() ? this : ".priority" === t.getFront() ? this.y : e.__childrenNodeConstructor.EMPTY_NODE
				}, e.prototype.hasChild = function() {
					return !1
				}, e.prototype.getPredecessorChildName = function(e, t) {
					return null
				}, e.prototype.updateImmediateChild = function(t, n) {
					return ".priority" === t ? this.updatePriority(n) : n.isEmpty() && ".priority" !== t ? this : e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t, n).updatePriority(this.y)
				}, e.prototype.updateChild = function(t, n) {
					var r = t.getFront();
					return null === r ? n : n.isEmpty() && ".priority" !== r ? this : (i.assert(".priority" !== r || 1 === t.getLength(), ".priority must be the last token in a path"), this.updateImmediateChild(r, e.__childrenNodeConstructor.EMPTY_NODE.updateChild(t.popFront(), n)))
				}, e.prototype.isEmpty = function() {
					return !1
				}, e.prototype.numChildren = function() {
					return 0
				}, e.prototype.forEachChild = function(e, t) {
					return !1
				}, e.prototype.val = function(e) {
					return e && !this.getPriority().isEmpty() ? {
						".value": this.getValue(),
						".priority": this.getPriority().val()
					} : this.getValue()
				}, e.prototype.hash = function() {
					if (null === this.m) {
						var e = "";
						this.y.isEmpty() || (e += "priority:" + a.priorityHashText(this.y.val()) + ":");
						var t = typeof this.T;
						e += t + ":", e += "number" === t ? o.doubleToIEEE754String(this.T) : this.T, this.m = o.sha1(e)
					}
					return this.m
				}, e.prototype.getValue = function() {
					return this.T
				}, e.prototype.compareTo = function(t) {
					return t === e.__childrenNodeConstructor.EMPTY_NODE ? 1 : t instanceof e.__childrenNodeConstructor ? -1 : (i.assert(t.isLeafNode(), "Unknown node type"), this.w(t))
				}, e.prototype.w = function(t) {
					var n = typeof t.T,
						r = typeof this.T,
						o = e.VALUE_TYPE_ORDER.indexOf(n),
						a = e.VALUE_TYPE_ORDER.indexOf(r);
					return i.assert(o >= 0, "Unknown leaf type: " + n), i.assert(a >= 0, "Unknown leaf type: " + r), o === a ? "object" === r ? 0 : this.T < t.T ? -1 : this.T === t.T ? 0 : 1 : a - o
				}, e.prototype.withIndex = function() {
					return this
				}, e.prototype.isIndexed = function() {
					return !0
				}, e.prototype.equals = function(e) {
					if (e === this) return !0;
					if (e.isLeafNode()) {
						var t = e;
						return this.T === t.T && this.y.equals(t.y)
					}
					return !1
				}, e.VALUE_TYPE_ORDER = ["object", "boolean", "number", "string"], e
			}();
		t.LeafNode = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t, n, r, i) {
				void 0 === i && (i = null), this.I = r, this.R = i, this.O = [];
				for (var o = 1; !e.isEmpty();)
					if (e = e, o = t ? n(e.key, t) : 1, r && (o *= -1), o < 0) e = this.I ? e.left : e.right;
					else {
						if (0 === o) {
							this.O.push(e);
							break
						}
						this.O.push(e), e = this.I ? e.right : e.left
					}
			}
			return e.prototype.getNext = function() {
				if (0 === this.O.length) return null;
				var e, t = this.O.pop();
				if (e = this.R ? this.R(t.key, t.value) : {
						key: t.key,
						value: t.value
					}, this.I)
					for (t = t.left; !t.isEmpty();) this.O.push(t), t = t.right;
				else
					for (t = t.right; !t.isEmpty();) this.O.push(t), t = t.left;
				return e
			}, e.prototype.hasNext = function() {
				return this.O.length > 0
			}, e.prototype.peek = function() {
				if (0 === this.O.length) return null;
				var e = this.O[this.O.length - 1];
				return this.R ? this.R(e.key, e.value) : {
					key: e.key,
					value: e.value
				}
			}, e
		}();
		t.SortedMapIterator = r;
		var i = function() {
			function e(t, n, r, i, o) {
				this.key = t, this.value = n, this.color = null != r ? r : e.RED, this.left = null != i ? i : a.EMPTY_NODE, this.right = null != o ? o : a.EMPTY_NODE
			}
			return e.prototype.copy = function(t, n, r, i, o) {
				return new e(null != t ? t : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right)
			}, e.prototype.count = function() {
				return this.left.count() + 1 + this.right.count()
			}, e.prototype.isEmpty = function() {
				return !1
			}, e.prototype.inorderTraversal = function(e) {
				return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e)
			}, e.prototype.reverseTraversal = function(e) {
				return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e)
			}, e.prototype.A = function() {
				return this.left.isEmpty() ? this : this.left.A()
			}, e.prototype.minKey = function() {
				return this.A().key
			}, e.prototype.maxKey = function() {
				return this.right.isEmpty() ? this.key : this.right.maxKey()
			}, e.prototype.insert = function(e, t, n) {
				var r, i;
				return i = this, r = n(e, i.key), i = r < 0 ? i.copy(null, null, null, i.left.insert(e, t, n), null) : 0 === r ? i.copy(null, t, null, null, null) : i.copy(null, null, null, null, i.right.insert(e, t, n)), i.D()
			}, e.prototype.M = function() {
				if (this.left.isEmpty()) return a.EMPTY_NODE;
				var e = this;
				return e.left.L() || e.left.left.L() || (e = e.F()), e = e.copy(null, null, null, e.left.M(), null), e.D()
			}, e.prototype.remove = function(e, t) {
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
			}, e.prototype.L = function() {
				return this.color
			}, e.prototype.D = function() {
				var e = this;
				return e.right.L() && !e.left.L() && (e = e.W()), e.left.L() && e.left.left.L() && (e = e.x()), e.left.L() && e.right.L() && (e = e.j()), e
			}, e.prototype.F = function() {
				var e = this.j();
				return e.right.left.L() && (e = e.copy(null, null, null, null, e.right.x()), e = e.W(), e = e.j()), e
			}, e.prototype.k = function() {
				var e = this.j();
				return e.left.left.L() && (e = e.x(), e = e.j()), e
			}, e.prototype.W = function() {
				var t = this.copy(null, null, e.RED, null, this.right.left);
				return this.right.copy(null, null, this.color, t, null)
			}, e.prototype.x = function() {
				var t = this.copy(null, null, e.RED, this.left.right, null);
				return this.left.copy(null, null, this.color, null, t)
			}, e.prototype.j = function() {
				var e = this.left.copy(null, null, !this.left.color, null, null),
					t = this.right.copy(null, null, !this.right.color, null, null);
				return this.copy(null, null, !this.color, e, t)
			}, e.prototype.V = function() {
				var e = this.Q();
				return Math.pow(2, e) <= this.count() + 1
			}, e.prototype.Q = function() {
				var e;
				if (this.L() && this.left.L()) throw Error("Red node has red child(" + this.key + "," + this.value + ")");
				if (this.right.L()) throw Error("Right child of (" + this.key + "," + this.value + ") is red");
				if ((e = this.left.Q()) !== this.right.Q()) throw Error("Black depths differ");
				return e + (this.L() ? 0 : 1)
			}, e.RED = !0, e.BLACK = !1, e
		}();
		t.LLRBNode = i;
		var o = function() {
			function e() {}
			return e.prototype.copy = function(e, t, n, r, i) {
				return this
			}, e.prototype.insert = function(e, t, n) {
				return new i(e, t, null)
			}, e.prototype.remove = function(e, t) {
				return this
			}, e.prototype.count = function() {
				return 0
			}, e.prototype.isEmpty = function() {
				return !0
			}, e.prototype.inorderTraversal = function(e) {
				return !1
			}, e.prototype.reverseTraversal = function(e) {
				return !1
			}, e.prototype.minKey = function() {
				return null
			}, e.prototype.maxKey = function() {
				return null
			}, e.prototype.Q = function() {
				return 0
			}, e.prototype.L = function() {
				return !1
			}, e
		}();
		t.LLRBEmptyNode = o;
		var a = function() {
			function e(t, n) {
				void 0 === n && (n = e.EMPTY_NODE), this.U = t, this.B = n
			}
			return e.prototype.insert = function(t, n) {
				return new e(this.U, this.B.insert(t, n, this.U).copy(null, null, i.BLACK, null, null))
			}, e.prototype.remove = function(t) {
				return new e(this.U, this.B.remove(t, this.U).copy(null, null, i.BLACK, null, null))
			}, e.prototype.get = function(e) {
				for (var t, n = this.B; !n.isEmpty();) {
					if (0 === (t = this.U(e, n.key))) return n.value;
					t < 0 ? n = n.left : t > 0 && (n = n.right)
				}
				return null
			}, e.prototype.getPredecessorKey = function(e) {
				for (var t, n = this.B, r = null; !n.isEmpty();) {
					if (0 === (t = this.U(e, n.key))) {
						if (n.left.isEmpty()) return r ? r.key : null;
						for (n = n.left; !n.right.isEmpty();) n = n.right;
						return n.key
					}
					t < 0 ? n = n.left : t > 0 && (r = n, n = n.right)
				}
				throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")
			}, e.prototype.isEmpty = function() {
				return this.B.isEmpty()
			}, e.prototype.count = function() {
				return this.B.count()
			}, e.prototype.minKey = function() {
				return this.B.minKey()
			}, e.prototype.maxKey = function() {
				return this.B.maxKey()
			}, e.prototype.inorderTraversal = function(e) {
				return this.B.inorderTraversal(e)
			}, e.prototype.reverseTraversal = function(e) {
				return this.B.reverseTraversal(e)
			}, e.prototype.getIterator = function(e) {
				return new r(this.B, null, this.U, !1, e)
			}, e.prototype.getIteratorFrom = function(e, t) {
				return new r(this.B, e, this.U, !1, t)
			}, e.prototype.getReverseIteratorFrom = function(e, t) {
				return new r(this.B, e, this.U, !0, t)
			}, e.prototype.getReverseIterator = function(e) {
				return new r(this.B, null, this.U, !0, e)
			}, e.EMPTY_NODE = new o, e
		}();
		t.SortedMap = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
					else {
						var o = n.options.databaseAuthVariableOverride;
						if (void 0 !== o && null !== o) {
							if ("object" != typeof o) throw Error("Only objects are supported for option databaseAuthVariableOverride");
							try {
								l.stringify(o)
							} catch (e) {
								throw Error("Invalid authOverride provided: " + e)
							}
						}
						this.J = new v.PersistentConnection(this.H, this.ee.bind(this), this.te.bind(this), this.ne.bind(this), i, o), this.Z = this.J
					}
					i.addTokenChangeListener(function(e) {
						r.Z.refreshAuthToken(e)
					}), this.re = d.StatsManager.getOrCreateReporter(e, function() {
						return new f.StatsReporter(r.$, r.Z)
					}), this.ie(), this.oe = new u.SnapshotHolder, this.ae = new s.SyncTree({
						startListening: function(e, t, n, i) {
							var o = [],
								a = r.oe.getNode(e.path);
							return a.isEmpty() || (o = r.ae.applyServerOverwrite(e.path, a), setTimeout(function() {
								i("ok")
							}, 0)), o
						},
						stopListening: function() {}
					}), this.se("connected", !1), this.ue = new s.SyncTree({
						startListening: function(e, t, n, i) {
							return r.Z.listen(e, n, t, function(t, n) {
								var o = i(t, n);
								r.K.raiseEventsForChangedPath(e.path, o)
							}), []
						},
						stopListening: function(e, t) {
							r.Z.unlisten(e, t)
						}
					})
				}
				return e.prototype.toString = function() {
					return (this.H.secure ? "https://" : "http://") + this.H.host
				}, e.prototype.name = function() {
					return this.H.namespace
				}, e.prototype.serverTime = function() {
					var e = this.oe.getNode(new o.Path(".info/serverTimeOffset")),
						t = e.val() || 0;
					return (new Date).getTime() + t
				}, e.prototype.generateServerValues = function() {
					return r.generateWithValues({
						timestamp: this.serverTime()
					})
				}, e.prototype.ee = function(e, t, n, r) {
					this.dataUpdateCount++;
					var a = new o.Path(e);
					t = this.X ? this.X(e, t) : t;
					var s = [];
					if (r)
						if (n) {
							var u = c.map(t, function(e) {
								return i.nodeFromJSON(e)
							});
							s = this.ue.applyTaggedQueryMerge(a, u, r)
						} else {
							var l = i.nodeFromJSON(t);
							s = this.ue.applyTaggedQueryOverwrite(a, l, r)
						}
					else if (n) {
						var h = c.map(t, function(e) {
							return i.nodeFromJSON(e)
						});
						s = this.ue.applyServerMerge(a, h)
					} else {
						var p = i.nodeFromJSON(t);
						s = this.ue.applyServerOverwrite(a, p)
					}
					var d = a;
					s.length > 0 && (d = this.le(a)), this.K.raiseEventsForChangedPath(d, s)
				}, e.prototype.he = function(e) {
					this.X = e
				}, e.prototype.te = function(e) {
					this.se("connected", e), !1 === e && this.ce()
				}, e.prototype.ne = function(e) {
					var t = this;
					h.each(e, function(e, n) {
						t.se(n, e)
					})
				}, e.prototype.se = function(e, t) {
					var n = new o.Path("/.info/" + e),
						r = i.nodeFromJSON(t);
					this.oe.updateSnapshot(n, r);
					var a = this.ae.applyServerOverwrite(n, r);
					this.K.raiseEventsForChangedPath(n, a)
				}, e.prototype.pe = function() {
					return this.Y++
				}, e.prototype.setWithPriority = function(e, t, n, o) {
					var a = this;
					this.de("set", {
						path: "" + e,
						value: t,
						priority: n
					});
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
					this.de("update", {
						path: "" + e,
						value: t
					});
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
					this.Z.onDisconnectCancel("" + e, function(r, i) {
						"ok" === r && n.z.forget(e), n.callOnCompleteCallback(t, r, i)
					})
				}, e.prototype.onDisconnectSet = function(e, t, n) {
					var r = this,
						o = i.nodeFromJSON(t);
					this.Z.onDisconnectPut("" + e, o.val(!0), function(t, i) {
						"ok" === t && r.z.remember(e, o), r.callOnCompleteCallback(n, t, i)
					})
				}, e.prototype.onDisconnectSetWithPriority = function(e, t, n, r) {
					var o = this,
						a = i.nodeFromJSON(t, n);
					this.Z.onDisconnectPut("" + e, a.val(!0), function(t, n) {
						"ok" === t && o.z.remember(e, a), o.callOnCompleteCallback(r, t, n)
					})
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
				}, e.prototype.interrupt = function() {
					this.J && this.J.interrupt("repo_interrupt")
				}, e.prototype.resume = function() {
					this.J && this.J.resume("repo_interrupt")
				}, e.prototype.stats = function(e) {
					if (void 0 === e && (e = !1), "undefined" != typeof console) {
						var t;
						e ? (this.G || (this.G = new _.StatsListener(this.$)), t = this.G.get()) : t = this.$.get();
						var n = Object.keys(t).reduce(function(e, t) {
							return Math.max(t.length, e)
						}, 0);
						c.forEach(t, function(e, t) {
							for (var r = e.length; r < n + 2; r++) e += " ";
							console.log(e + t)
						})
					}
				}, e.prototype.statsIncrementCounter = function(e) {
					this.$.incrementCounter(e), this.re.includeStat(e)
				}, e.prototype.de = function() {
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
				}, Object.defineProperty(e.prototype, "database", {
					get: function() {
						return this.__database || (this.__database = new m.Database(this))
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.Repo = C
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e(e, t, n) {
				this._e = e, this.ye = t, this.ve = n
			}
			return e.prototype.isFullyInitialized = function() {
				return this.ye
			}, e.prototype.isFiltered = function() {
				return this.ve
			}, e.prototype.isCompleteForPath = function(e) {
				if (e.isEmpty()) return this.isFullyInitialized() && !this.ve;
				var t = e.getFront();
				return this.isCompleteForChild(t)
			}, e.prototype.isCompleteForChild = function(e) {
				return this.isFullyInitialized() && !this.ve || this._e.hasChild(e)
			}, e.prototype.getNode = function() {
				return this._e
			}, e
		}();
		t.CacheNode = r
	}, , , function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function t(t, n) {
					if (!(t instanceof l.Repo)) throw Error("new Reference() no longer supported - use app.database().");
					return e.call(this, t, n, c.QueryParams.DEFAULT, !1) || this
				}
				return r(t, e), t.prototype.getKey = function() {
					return d.validateArgCount("Reference.key", 0, 0, arguments.length), this.path.isEmpty() ? null : this.path.getBack()
				}, t.prototype.child = function(e) {
					return d.validateArgCount("Reference.child", 1, 1, arguments.length), "number" == typeof e ? e += "" : e instanceof h.Path || (null === this.path.getFront() ? p.validateRootPathString("Reference.child", 1, e, !1) : p.validatePathString("Reference.child", 1, e, !1)), new t(this.repo, this.path.child(e))
				}, t.prototype.getParent = function() {
					d.validateArgCount("Reference.parent", 0, 0, arguments.length);
					var e = this.path.parent();
					return null === e ? null : new t(this.repo, e)
				}, t.prototype.getRoot = function() {
					d.validateArgCount("Reference.root", 0, 0, arguments.length);
					for (var e = this; null !== e.getParent();) e = e.getParent();
					return e
				}, t.prototype.databaseProp = function() {
					return this.repo.database
				}, t.prototype.set = function(e, t) {
					d.validateArgCount("Reference.set", 1, 2, arguments.length), p.validateWritablePath("Reference.set", this.path), p.validateFirebaseDataArg("Reference.set", 1, e, this.path, !1), d.validateCallback("Reference.set", 2, t, !0);
					var n = new f.Deferred;
					return this.repo.setWithPriority(this.path, e, null, n.wrapCallback(t)), n.promise
				}, t.prototype.update = function(e, t) {
					if (d.validateArgCount("Reference.update", 1, 2, arguments.length), p.validateWritablePath("Reference.update", this.path), Array.isArray(e)) {
						for (var n = {}, r = 0; r < e.length; ++r) n["" + r] = e[r];
						e = n, a.warn("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")
					}
					p.validateFirebaseMergeDataArg("Reference.update", 1, e, this.path, !1), d.validateCallback("Reference.update", 2, t, !0);
					var i = new f.Deferred;
					return this.repo.update(this.path, e, i.wrapCallback(t)), i.promise
				}, t.prototype.setWithPriority = function(e, t, n) {
					if (d.validateArgCount("Reference.setWithPriority", 2, 3, arguments.length), p.validateWritablePath("Reference.setWithPriority", this.path), p.validateFirebaseDataArg("Reference.setWithPriority", 1, e, this.path, !1), p.validatePriority("Reference.setWithPriority", 2, t, !1), d.validateCallback("Reference.setWithPriority", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.setWithPriority failed: " + this.getKey() + " is a read-only object.";
					var r = new f.Deferred;
					return this.repo.setWithPriority(this.path, e, t, r.wrapCallback(n)), r.promise
				}, t.prototype.remove = function(e) {
					return d.validateArgCount("Reference.remove", 0, 1, arguments.length), p.validateWritablePath("Reference.remove", this.path), d.validateCallback("Reference.remove", 1, e, !0), this.set(null, e)
				}, t.prototype.transaction = function(e, t, n) {
					if (d.validateArgCount("Reference.transaction", 1, 3, arguments.length), p.validateWritablePath("Reference.transaction", this.path), d.validateCallback("Reference.transaction", 1, e, !1), d.validateCallback("Reference.transaction", 2, t, !0), p.validateBoolean("Reference.transaction", 3, n, !0), ".length" === this.getKey() || ".keys" === this.getKey()) throw "Reference.transaction failed: " + this.getKey() + " is a read-only object.";
					void 0 === n && (n = !0);
					var r = new f.Deferred;
					"function" == typeof t && r.promise.catch(function() {});
					var i = function(e, n, i) {
						e ? r.reject(e) : r.resolve(new o.TransactionResult(n, i)), "function" == typeof t && t(e, n, i)
					};
					return this.repo.startTransaction(this.path, e, i, n), r.promise
				}, t.prototype.setPriority = function(e, t) {
					d.validateArgCount("Reference.setPriority", 1, 2, arguments.length), p.validateWritablePath("Reference.setPriority", this.path), p.validatePriority("Reference.setPriority", 1, e, !1), d.validateCallback("Reference.setPriority", 2, t, !0);
					var n = new f.Deferred;
					return this.repo.setWithPriority(this.path.child(".priority"), e, null, n.wrapCallback(t)), n.promise
				}, t.prototype.push = function(e, t) {
					d.validateArgCount("Reference.push", 0, 2, arguments.length), p.validateWritablePath("Reference.push", this.path), p.validateFirebaseDataArg("Reference.push", 1, e, this.path, !0), d.validateCallback("Reference.push", 2, t, !0);
					var n, r = this.repo.serverTime(),
						i = s.nextPushId(r),
						o = this.child(i),
						a = this.child(i);
					return n = null != e ? o.set(e, t).then(function() {
						return a
					}) : Promise.resolve(a), o.then = n.then.bind(n), o.catch = n.then.bind(n, void 0), "function" == typeof t && n.catch(function() {}), o
				}, t.prototype.onDisconnect = function() {
					return p.validateWritablePath("Reference.onDisconnect", this.path), new i.OnDisconnect(this.repo, this.path)
				}, Object.defineProperty(t.prototype, "database", {
					get: function() {
						return this.databaseProp()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "key", {
					get: function() {
						return this.getKey()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "parent", {
					get: function() {
						return this.getParent()
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(t.prototype, "root", {
					get: function() {
						return this.getRoot()
					},
					enumerable: !0,
					configurable: !0
				}), t
			}(u.Query);
		t.Reference = y, u.Query.__referenceConstructor = y, _.SyncPoint.__referenceConstructor = y
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(7),
			o = n(2),
			a = n(3),
			s = function() {
				function e(e, t, n) {
					this._e = e, this.ge = t, this.me = n
				}
				return e.prototype.val = function() {
					return r.validateArgCount("DataSnapshot.val", 0, 0, arguments.length), this._e.val()
				}, e.prototype.exportVal = function() {
					return r.validateArgCount("DataSnapshot.exportVal", 0, 0, arguments.length), this._e.val(!0)
				}, e.prototype.toJSON = function() {
					return r.validateArgCount("DataSnapshot.toJSON", 0, 1, arguments.length), this.exportVal()
				}, e.prototype.exists = function() {
					return r.validateArgCount("DataSnapshot.exists", 0, 0, arguments.length), !this._e.isEmpty()
				}, e.prototype.child = function(t) {
					r.validateArgCount("DataSnapshot.child", 0, 1, arguments.length), t += "", i.validatePathString("DataSnapshot.child", 1, t, !1);
					var n = new o.Path(t),
						s = this.ge.child(n);
					return new e(this._e.getChild(n), s, a.PRIORITY_INDEX)
				}, e.prototype.hasChild = function(e) {
					r.validateArgCount("DataSnapshot.hasChild", 1, 1, arguments.length), i.validatePathString("DataSnapshot.hasChild", 1, e, !1);
					var t = new o.Path(e);
					return !this._e.getChild(t).isEmpty()
				}, e.prototype.getPriority = function() {
					return r.validateArgCount("DataSnapshot.getPriority", 0, 0, arguments.length), this._e.getPriority().val()
				}, e.prototype.forEach = function(t) {
					var n = this;
					return r.validateArgCount("DataSnapshot.forEach", 1, 1, arguments.length), r.validateCallback("DataSnapshot.forEach", 1, t, !1), !this._e.isLeafNode() && !!this._e.forEachChild(this.me, function(r, i) {
						return t(new e(i, n.ge.child(r), a.PRIORITY_INDEX))
					})
				}, e.prototype.hasChildren = function() {
					return r.validateArgCount("DataSnapshot.hasChildren", 0, 0, arguments.length), !this._e.isLeafNode() && !this._e.isEmpty()
				}, Object.defineProperty(e.prototype, "key", {
					get: function() {
						return this.ge.getKey()
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.numChildren = function() {
					return r.validateArgCount("DataSnapshot.numChildren", 0, 0, arguments.length), this._e.numChildren()
				}, e.prototype.getRef = function() {
					return r.validateArgCount("DataSnapshot.ref", 0, 0, arguments.length), this.ge
				}, Object.defineProperty(e.prototype, "ref", {
					get: function() {
						return this.getRef()
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.DataSnapshot = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(16),
			o = n(2),
			a = n(1),
			s = n(0),
			u = function() {
				return r || (r = new i.SortedMap(a.stringCompare)), r
			},
			l = function() {
				function e(e, t) {
					void 0 === t && (t = u()), this.value = e, this.children = t
				}
				return e.fromObject = function(t) {
					var n = e.Empty;
					return s.forEach(t, function(e, t) {
						n = n.set(new o.Path(e), t)
					}), n
				}, e.prototype.isEmpty = function() {
					return null === this.value && this.children.isEmpty()
				}, e.prototype.findRootMostMatchingPathAndValue = function(e, t) {
					if (null != this.value && t(this.value)) return {
						path: o.Path.Empty,
						value: this.value
					};
					if (e.isEmpty()) return null;
					var n = e.getFront(),
						r = this.children.get(n);
					if (null !== r) {
						var i = r.findRootMostMatchingPathAndValue(e.popFront(), t);
						return null != i ? {
							path: new o.Path(n).child(i.path),
							value: i.value
						} : null
					}
					return null
				}, e.prototype.findRootMostValueAndPath = function(e) {
					return this.findRootMostMatchingPathAndValue(e, function() {
						return !0
					})
				}, e.prototype.subtree = function(t) {
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
				}, e.prototype.fold = function(e) {
					return this.Ce(o.Path.Empty, e)
				}, e.prototype.Ce = function(e, t) {
					var n = {};
					return this.children.inorderTraversal(function(r, i) {
						n[r] = i.Ce(e.child(r), t)
					}), t(e, this.value, n)
				}, e.prototype.findOnPath = function(e, t) {
					return this.Ee(e, o.Path.Empty, t)
				}, e.prototype.Ee = function(e, t, n) {
					var r = !!this.value && n(t, this.value);
					if (r) return r;
					if (e.isEmpty()) return null;
					var i = e.getFront(),
						o = this.children.get(i);
					return o ? o.Ee(e.popFront(), t.child(i), n) : null
				}, e.prototype.foreachOnPath = function(e, t) {
					return this.Ne(e, o.Path.Empty, t)
				}, e.prototype.Ne = function(t, n, r) {
					if (t.isEmpty()) return this;
					this.value && r(n, this.value);
					var i = t.getFront(),
						o = this.children.get(i);
					return o ? o.Ne(t.popFront(), n.child(i), r) : e.Empty
				}, e.prototype.foreach = function(e) {
					this.Pe(o.Path.Empty, e)
				}, e.prototype.Pe = function(e, t) {
					this.children.inorderTraversal(function(n, r) {
						r.Pe(e.child(n), t)
					}), this.value && t(e, this.value)
				}, e.prototype.foreachChild = function(e) {
					this.children.inorderTraversal(function(t, n) {
						n.value && e(t, n.value)
					})
				}, e.Empty = new e(null), e
			}();
		t.ImmutableTree = l
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(9),
			o = n(4),
			a = n(3),
			s = function() {
				function e(e) {
					this.me = e
				}
				return e.prototype.updateChild = function(e, t, n, o, a, s) {
					r.assert(e.isIndexed(this.me), "A node must be indexed if only a child is updated");
					var u = e.getImmediateChild(t);
					return u.getChild(o).equals(n.getChild(o)) && u.isEmpty() == n.isEmpty() ? e : (null != s && (n.isEmpty() ? e.hasChild(t) ? s.trackChildChange(i.Change.childRemovedChange(t, u)) : r.assert(e.isLeafNode(), "A child remove without an old child only makes sense on a leaf node") : u.isEmpty() ? s.trackChildChange(i.Change.childAddedChange(t, n)) : s.trackChildChange(i.Change.childChangedChange(t, n, u))), e.isLeafNode() && n.isEmpty() ? e : e.updateImmediateChild(t, n).withIndex(this.me))
				}, e.prototype.updateFullNode = function(e, t, n) {
					return null != n && (e.isLeafNode() || e.forEachChild(a.PRIORITY_INDEX, function(e, r) {
						t.hasChild(e) || n.trackChildChange(i.Change.childRemovedChange(e, r))
					}), t.isLeafNode() || t.forEachChild(a.PRIORITY_INDEX, function(t, r) {
						if (e.hasChild(t)) {
							var o = e.getImmediateChild(t);
							o.equals(r) || n.trackChildChange(i.Change.childChangedChange(t, r, o))
						} else n.trackChildChange(i.Change.childAddedChange(t, r))
					})), t.withIndex(this.me)
				}, e.prototype.updatePriority = function(e, t) {
					return e.isEmpty() ? o.ChildrenNode.EMPTY_NODE : e.updatePriority(t)
				}, e.prototype.filtersNodes = function() {
					return !1
				}, e.prototype.getIndexedFilter = function() {
					return this
				}, e.prototype.getIndex = function() {
					return this.me
				}, e
			}();
		t.IndexedFilter = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(99),
			i = function() {
				function e() {}
				return e.getCollection = function(e) {
					var t = "" + e;
					return this.be[t] || (this.be[t] = new r.StatsCollection), this.be[t]
				}, e.getOrCreateReporter = function(e, t) {
					var n = "" + e;
					return this.Se[n] || (this.Se[n] = t()), this.Se[n]
				}, e.be = {}, e.Se = {}, e
			}();
		t.StatsManager = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(17),
			o = n(1),
			a = n(33),
			s = n(7);
		n(109);
		var u, l = function() {
			function e() {
				this.Te = {}, this.we = !1
			}
			return e.getInstance = function() {
				return u || (u = new e), u
			}, e.prototype.interrupt = function() {
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
			}, e.prototype.forceRestClient = function(e) {
				this.we = e
			}, e
		}();
		t.RepoManager = l
	}, , , , , , function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = n(33),
			o = n(2),
			a = n(21),
			s = n(17),
			u = n(26),
			l = n(0),
			h = n(7),
			c = function() {
				function e(e) {
					this.Ie = e, e instanceof s.Repo || r.fatal("Don't call new Database() directly - please use firebase.database()."), this.B = new a.Reference(e, o.Path.Empty), this.INTERNAL = new p(this)
				}
				return Object.defineProperty(e.prototype, "app", {
					get: function() {
						return this.Ie.app
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.ref = function(e) {
					return this.Re("ref"), l.validateArgCount("database.ref", 0, 1, arguments.length), void 0 !== e ? this.B.child(e) : this.B
				}, e.prototype.refFromURL = function(e) {
					var t = "database.refFromURL";
					this.Re(t), l.validateArgCount(t, 1, 1, arguments.length);
					var n = i.parseRepoInfo(e);
					h.validateUrl(t, 1, n);
					var o = n.repoInfo;
					return o.host !== this.Ie.H.host && r.fatal(t + ": Host name does not match the current database: (found " + o.host + " but expected " + this.Ie.H.host + ")"), this.ref("" + n.path)
				}, e.prototype.Re = function(e) {
					null === this.Ie && r.fatal("Cannot call " + e + " on a deleted database.")
				}, e.prototype.goOffline = function() {
					l.validateArgCount("database.goOffline", 0, 0, arguments.length), this.Re("goOffline"), this.Ie.interrupt()
				}, e.prototype.goOnline = function() {
					l.validateArgCount("database.goOnline", 0, 0, arguments.length), this.Re("goOnline"), this.Ie.resume()
				}, e.ServerValue = {
					TIMESTAMP: {
						".sv": "timestamp"
					}
				}, e
			}();
		t.Database = c;
		var p = function() {
			function e(e) {
				this.database = e
			}
			return e.prototype.delete = function() {
				return this.database.Re("delete"), u.RepoManager.getInstance().deleteRepo(this.database.Ie), this.database.Ie = null, this.database.B = null, this.database.INTERNAL = null, this.database = null, Promise.resolve()
			}, e
		}();
		t.DatabaseInternals = p
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			for (var t = "", n = e.split("/"), r = 0; r < n.length; r++)
				if (n[r].length > 0) {
					var i = n[r];
					try {
						i = decodeURIComponent(i.replace(/\+/g, " "))
					} catch (e) {}
					t += "/" + i
				}
			return t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(2),
			o = n(34),
			a = n(1);
		t.parseRepoInfo = function(e) {
			var n = t.parseURL(e),
				r = n.subdomain;
			"firebase" === n.domain && a.fatal(n.host + " is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"), r && "undefined" != r || a.fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"), n.secure || a.warnIfPageIsSecure();
			var s = "ws" === n.scheme || "wss" === n.scheme;
			return {
				repoInfo: new o.RepoInfo(n.host, n.secure, r, s),
				path: new i.Path(n.pathString)
			}
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
			return {
				host: t,
				port: u,
				domain: n,
				subdomain: i,
				secure: a,
				scheme: s,
				pathString: o
			}
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(0),
			o = n(12),
			a = n(13),
			s = function() {
				function e(e, t, n, r, i) {
					void 0 === i && (i = ""), this.secure = t, this.namespace = n, this.webSocketOnly = r, this.persistenceKey = i, this.host = e.toLowerCase(), this.domain = this.host.substr(this.host.indexOf(".") + 1), this.internalHost = o.PersistentStorage.get("host:" + e) || this.host
				}
				return e.prototype.needsQueryParam = function() {
					return this.host !== this.internalHost
				}, e.prototype.isCacheableHost = function() {
					return "s-" === this.internalHost.substr(0, 2)
				}, e.prototype.isDemoHost = function() {
					return "firebaseio-demo.com" === this.domain
				}, e.prototype.isCustomHost = function() {
					return "firebaseio.com" !== this.domain && "firebaseio-demo.com" !== this.domain
				}, e.prototype.updateHost = function(e) {
					e !== this.internalHost && (this.internalHost = e, this.isCacheableHost() && o.PersistentStorage.set("host:" + this.host, this.internalHost))
				}, e.prototype.connectionURL = function(e, t) {
					r.assert("string" == typeof e, "typeof type must == string"), r.assert("object" == typeof t, "typeof params must == object");
					var n;
					if (e === a.WEBSOCKET) n = (this.secure ? "wss://" : "ws://") + this.internalHost + "/.ws?";
					else {
						if (e !== a.LONG_POLLING) throw Error("Unknown connection type: " + e);
						n = (this.secure ? "https://" : "http://") + this.internalHost + "/.lp?"
					}
					this.needsQueryParam() && (t.ns = this.namespace);
					var o = [];
					return i.forEach(t, function(e, t) {
						o.push(e + "=" + t)
					}), n + o.join("&")
				}, e.prototype.toString = function() {
					var e = this.toURLString();
					return this.persistenceKey && (e += "<" + this.persistenceKey + ">"), e
				}, e.prototype.toURLString = function() {
					return (this.secure ? "https://" : "http://") + this.host
				}, e
			}();
		t.RepoInfo = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(7),
			o = n(1),
			a = n(0),
			s = function() {
				function e(e, t) {
					this.Ie = e, this.Oe = t
				}
				return e.prototype.cancel = function(e) {
					r.validateArgCount("OnDisconnect.cancel", 0, 1, arguments.length), r.validateCallback("OnDisconnect.cancel", 1, e, !0);
					var t = new a.Deferred;
					return this.Ie.onDisconnectCancel(this.Oe, t.wrapCallback(e)), t.promise
				}, e.prototype.remove = function(e) {
					r.validateArgCount("OnDisconnect.remove", 0, 1, arguments.length), i.validateWritablePath("OnDisconnect.remove", this.Oe), r.validateCallback("OnDisconnect.remove", 1, e, !0);
					var t = new a.Deferred;
					return this.Ie.onDisconnectSet(this.Oe, null, t.wrapCallback(e)), t.promise
				}, e.prototype.set = function(e, t) {
					r.validateArgCount("OnDisconnect.set", 1, 2, arguments.length), i.validateWritablePath("OnDisconnect.set", this.Oe), i.validateFirebaseDataArg("OnDisconnect.set", 1, e, this.Oe, !1), r.validateCallback("OnDisconnect.set", 2, t, !0);
					var n = new a.Deferred;
					return this.Ie.onDisconnectSet(this.Oe, e, n.wrapCallback(t)), n.promise
				}, e.prototype.setWithPriority = function(e, t, n) {
					r.validateArgCount("OnDisconnect.setWithPriority", 2, 3, arguments.length), i.validateWritablePath("OnDisconnect.setWithPriority", this.Oe), i.validateFirebaseDataArg("OnDisconnect.setWithPriority", 1, e, this.Oe, !1), i.validatePriority("OnDisconnect.setWithPriority", 2, t, !1), r.validateCallback("OnDisconnect.setWithPriority", 3, n, !0);
					var o = new a.Deferred;
					return this.Ie.onDisconnectSetWithPriority(this.Oe, e, t, o.wrapCallback(n)), o.promise
				}, e.prototype.update = function(e, t) {
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function e(e, t, n, r) {
					this.repo = e, this.path = t, this.Ae = n, this.De = r
				}
				return Object.defineProperty(e, "__referenceConstructor", {
					get: function() {
						return i.assert(r, "Reference.ts has not been loaded"), r
					},
					set: function(e) {
						r = e
					},
					enumerable: !0,
					configurable: !0
				}), e.Me = function(e) {
					var t = null,
						n = null;
					if (e.hasStart() && (t = e.getIndexStartValue()), e.hasEnd() && (n = e.getIndexEndValue()), e.getIndex() === o.KEY_INDEX) {
						var r = "Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",
							h = "Query: When ordering by key, the argument passed to startAt(), endAt(),or equalTo() must be a string.";
						if (e.hasStart()) {
							if (e.getIndexStartName() != l.MIN_NAME) throw Error(r);
							if ("string" != typeof t) throw Error(h)
						}
						if (e.hasEnd()) {
							if (e.getIndexEndName() != l.MAX_NAME) throw Error(r);
							if ("string" != typeof n) throw Error(h)
						}
					} else if (e.getIndex() === a.PRIORITY_INDEX) {
						if (null != t && !c.isValidPriority(t) || null != n && !c.isValidPriority(n)) throw Error("Query: When ordering by priority, the first argument passed to startAt(), endAt(), or equalTo() must be a valid priority value (null, a number, or a string).")
					} else if (i.assert(e.getIndex() instanceof u.PathIndex || e.getIndex() === s.VALUE_INDEX, "unknown index type."), null != t && "object" == typeof t || null != n && "object" == typeof n) throw Error("Query: First argument passed to startAt(), endAt(), or equalTo() cannot be an object.")
				}, e.Le = function(e) {
					if (e.hasStart() && e.hasEnd() && e.hasLimit() && !e.hasAnchoredLimit()) throw Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.")
				}, e.prototype.Fe = function(e) {
					if (!0 === this.De) throw Error(e + ": You can't combine multiple orderBy calls.")
				}, e.prototype.getQueryParams = function() {
					return this.Ae
				}, e.prototype.getRef = function() {
					return p.validateArgCount("Query.ref", 0, 0, arguments.length), new e.__referenceConstructor(this.repo, this.path)
				}, e.prototype.on = function(t, n, r, i) {
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
					} else e && (t && (i = {}, i[e] = t), r = new d.ChildEventRegistration(i, null, n || null));
					this.repo.removeEventCallbackForQuery(this, r)
				}, e.prototype.once = function(t, n, r, i) {
					var o = this;
					p.validateArgCount("Query.once", 1, 4, arguments.length), c.validateEventType("Query.once", 1, t, !1), p.validateCallback("Query.once", 2, n, !0);
					var a = e.xe("Query.once", r, i),
						s = !0,
						u = new f.Deferred;
					u.promise.catch(function() {});
					var l = function(e) {
						s && (s = !1, o.off(t, l), n && n.bind(a.context)(e), u.resolve(e))
					};
					return this.on(t, l, function(e) {
						o.off(t, l), a.cancel && a.cancel.bind(a.context)(e), u.reject(e)
					}), u.promise
				}, e.prototype.limitToFirst = function(t) {
					if (p.validateArgCount("Query.limitToFirst", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToFirst: First argument must be a positive integer.");
					if (this.Ae.hasLimit()) throw Error("Query.limitToFirst: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
					return new e(this.repo, this.path, this.Ae.limitToFirst(t), this.De)
				}, e.prototype.limitToLast = function(t) {
					if (p.validateArgCount("Query.limitToLast", 1, 1, arguments.length), "number" != typeof t || Math.floor(t) !== t || t <= 0) throw Error("Query.limitToLast: First argument must be a positive integer.");
					if (this.Ae.hasLimit()) throw Error("Query.limitToLast: Limit was already set (by another call to limit, limitToFirst, or limitToLast).");
					return new e(this.repo, this.path, this.Ae.limitToLast(t), this.De)
				}, e.prototype.orderByChild = function(t) {
					if (p.validateArgCount("Query.orderByChild", 1, 1, arguments.length), "$key" === t) throw Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
					if ("$priority" === t) throw Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
					if ("$value" === t) throw Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
					c.validatePathString("Query.orderByChild", 1, t, !1), this.Fe("Query.orderByChild");
					var n = new h.Path(t);
					if (n.isEmpty()) throw Error("Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.");
					var r = new u.PathIndex(n),
						i = this.Ae.orderBy(r);
					return e.Me(i), new e(this.repo, this.path, i, !0)
				}, e.prototype.orderByKey = function() {
					p.validateArgCount("Query.orderByKey", 0, 0, arguments.length), this.Fe("Query.orderByKey");
					var t = this.Ae.orderBy(o.KEY_INDEX);
					return e.Me(t), new e(this.repo, this.path, t, !0)
				}, e.prototype.orderByPriority = function() {
					p.validateArgCount("Query.orderByPriority", 0, 0, arguments.length), this.Fe("Query.orderByPriority");
					var t = this.Ae.orderBy(a.PRIORITY_INDEX);
					return e.Me(t), new e(this.repo, this.path, t, !0)
				}, e.prototype.orderByValue = function() {
					p.validateArgCount("Query.orderByValue", 0, 0, arguments.length), this.Fe("Query.orderByValue");
					var t = this.Ae.orderBy(s.VALUE_INDEX);
					return e.Me(t), new e(this.repo, this.path, t, !0)
				}, e.prototype.startAt = function(t, n) {
					void 0 === t && (t = null), p.validateArgCount("Query.startAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.startAt", 1, t, this.path, !0), c.validateKey("Query.startAt", 2, n, !0);
					var r = this.Ae.startAt(t, n);
					if (e.Le(r), e.Me(r), this.Ae.hasStart()) throw Error("Query.startAt: Starting point was already set (by another call to startAt or equalTo).");
					return void 0 === t && (t = null, n = null), new e(this.repo, this.path, r, this.De)
				}, e.prototype.endAt = function(t, n) {
					void 0 === t && (t = null), p.validateArgCount("Query.endAt", 0, 2, arguments.length), c.validateFirebaseDataArg("Query.endAt", 1, t, this.path, !0), c.validateKey("Query.endAt", 2, n, !0);
					var r = this.Ae.endAt(t, n);
					if (e.Le(r), e.Me(r), this.Ae.hasEnd()) throw Error("Query.endAt: Ending point was already set (by another call to endAt or equalTo).");
					return new e(this.repo, this.path, r, this.De)
				}, e.prototype.equalTo = function(e, t) {
					if (p.validateArgCount("Query.equalTo", 1, 2, arguments.length), c.validateFirebaseDataArg("Query.equalTo", 1, e, this.path, !1), c.validateKey("Query.equalTo", 2, t, !0), this.Ae.hasStart()) throw Error("Query.equalTo: Starting point was already set (by another call to startAt or equalTo).");
					if (this.Ae.hasEnd()) throw Error("Query.equalTo: Ending point was already set (by another call to endAt or equalTo).");
					return this.startAt(e, t).endAt(e, t)
				}, e.prototype.toString = function() {
					return p.validateArgCount("Query.toString", 0, 0, arguments.length), "" + this.repo + this.path.toUrlEncodedString()
				}, e.prototype.toJSON = function() {
					return p.validateArgCount("Query.toJSON", 0, 1, arguments.length), "" + this
				}, e.prototype.queryObject = function() {
					return this.Ae.getQueryObject()
				}, e.prototype.queryIdentifier = function() {
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
					var r = {
						cancel: null,
						context: null
					};
					if (t && n) r.cancel = t, p.validateCallback(e, 3, r.cancel, !0), r.context = n, p.validateContextObject(e, 4, r.context, !0);
					else if (t)
						if ("object" == typeof t && null !== t) r.context = t;
						else {
							if ("function" != typeof t) throw Error(p.errorPrefix(e, 3, !0) + " must either be a cancel callback or a context object.");
							r.cancel = t
						}
					return r
				}, Object.defineProperty(e.prototype, "ref", {
					get: function() {
						return this.getRef()
					},
					enumerable: !0,
					configurable: !0
				}), e
			}();
		t.Query = _
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			i = e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i, o = n(0),
			a = n(1),
			s = n(0);
		t.setMaxNode = r, t.priorityHashText = function(e) {
			return "number" == typeof e ? "number:" + a.doubleToIEEE754String(e) : "string:" + e
		}, t.validatePriorityNode = function(e) {
			if (e.isLeafNode()) {
				var t = e.val();
				o.assert("string" == typeof t || "number" == typeof t || "object" == typeof t && s.contains(t, ".sv"), "Priority must be a string or number.")
			} else o.assert(e === i || e.isEmpty(), "priority of unexpected type.");
			o.assert(e === i || e.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.")
		}
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(14),
			o = n(5),
			a = n(1),
			s = n(11),
			u = function(e) {
				function t() {
					return null !== e && e.apply(this, arguments) || this
				}
				return r(t, e), t.prototype.compare = function(e, t) {
					var n = e.node.compareTo(t.node);
					return 0 === n ? a.nameCompare(e.name, t.name) : n
				}, t.prototype.isDefinedOn = function(e) {
					return !0
				}, t.prototype.indexedValueChanged = function(e, t) {
					return !e.equals(t)
				}, t.prototype.minPost = function() {
					return o.NamedNode.MIN
				}, t.prototype.maxPost = function() {
					return o.NamedNode.MAX
				}, t.prototype.makePost = function(e, t) {
					var n = s.nodeFromJSON(e);
					return new o.NamedNode(t, n)
				}, t.prototype.toString = function() {
					return ".value"
				}, t
			}(i.Index);
		t.ValueIndex = u, t.VALUE_INDEX = new u
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(0),
			o = n(40),
			a = n(0),
			s = n(5),
			u = n(3),
			l = n(10),
			h = {},
			c = function() {
				function e(e, t) {
					this.ke = e, this.We = t
				}
				return Object.defineProperty(e, "Default", {
					get: function() {
						return i.assert(h && u.PRIORITY_INDEX, "ChildrenNode.ts has not been loaded"), r = r || new e({
							".priority": h
						}, {
							".priority": u.PRIORITY_INDEX
						})
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.get = function(e) {
					var t = a.safeGet(this.ke, e);
					if (!t) throw Error("No index defined for " + e);
					return t === h ? null : t
				}, e.prototype.hasIndex = function(e) {
					return a.contains(this.We, "" + e)
				}, e.prototype.addIndex = function(t, n) {
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
						if (i.assert(l, "Missing index implementation for " + u), e === h) {
							if (l.isDefinedOn(t.node)) {
								for (var c = [], p = n.getIterator(s.NamedNode.Wrap), d = p.getNext(); d;) d.name != t.name && c.push(d), d = p.getNext();
								return c.push(t), o.buildChildSet(c, l.getCompare())
							}
							return h
						}
						var f = n.get(t.name),
							_ = e;
						return f && (_ = _.remove(new s.NamedNode(t.name, f))), _.insert(t, t.node)
					}), this.We)
				}, e.prototype.removeFromIndexes = function(t, n) {
					return new e(a.map(this.ke, function(e) {
						if (e === h) return e;
						var r = n.get(t.name);
						return r ? e.remove(new s.NamedNode(t.name, r)) : e
					}), this.We)
				}, e
			}();
		t.IndexMap = c
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(16),
			i = n(16),
			o = Math.log(2),
			a = function() {
				function e(e) {
					this.count = function(e) {
						return parseInt(Math.log(e) / o, 10)
					}(e + 1), this.je = this.count - 1;
					var t = function(e) {
						return parseInt(Array(e + 1).join("1"), 2)
					}(this.count);
					this.Ve = e + 1 & t
				}
				return e.prototype.nextBitIsOne = function() {
					var e = !(this.Ve & 1 << this.je);
					return this.je--, e
				}, e
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
						}, l = function(e) {
							i ? (i.left = e, i = e) : (o = e, i = e)
						}, h = 0; h < t.count; ++h) {
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

		function r(e, t) {
			return o.nameCompare(e.name, t.name)
		}

		function i(e, t) {
			return o.nameCompare(e, t)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var o = n(1);
		t.NAME_ONLY_COMPARATOR = r, t.NAME_COMPARATOR = i
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(0),
			o = n(1),
			a = n(14),
			s = n(4),
			u = n(5),
			l = n(11),
			h = function(e) {
				function t(t) {
					var n = e.call(this) || this;
					return n.Qe = t, i.assert(!t.isEmpty() && ".priority" !== t.getFront(), "Can't create PathIndex with empty path or .priority key"), n
				}
				return r(t, e), t.prototype.extractChild = function(e) {
					return e.getChild(this.Qe)
				}, t.prototype.isDefinedOn = function(e) {
					return !e.getChild(this.Qe).isEmpty()
				}, t.prototype.compare = function(e, t) {
					var n = this.extractChild(e.node),
						r = this.extractChild(t.node),
						i = n.compareTo(r);
					return 0 === i ? o.nameCompare(e.name, t.name) : i
				}, t.prototype.makePost = function(e, t) {
					var n = l.nodeFromJSON(e),
						r = s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe, n);
					return new u.NamedNode(t, r)
				}, t.prototype.maxPost = function() {
					var e = s.ChildrenNode.EMPTY_NODE.updateChild(this.Qe, s.MAX_NODE);
					return new u.NamedNode(o.MAX_NAME, e)
				}, t.prototype.toString = function() {
					return this.Qe.slice().join("/")
				}, t
			}(a.Index);
		t.PathIndex = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(2),
			o = n(44),
			a = n(15),
			s = n(11),
			u = n(3);
		t.generateWithValues = function(e) {
			return e = e || {}, e.timestamp = e.timestamp || (new Date).getTime(), e
		}, t.resolveDeferredValue = function(e, t) {
			return e && "object" == typeof e ? (r.assert(".sv" in e, "Unexpected leaf node or priority contents"), t[e[".sv"]]) : e
		}, t.resolveDeferredValueTree = function(e, n) {
			var r = new o.SparseSnapshotTree;
			return e.forEachTree(new i.Path(""), function(e, i) {
				r.remember(e, t.resolveDeferredValueSnapshot(i, n))
			}), r
		}, t.resolveDeferredValueSnapshot = function(e, n) {
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(2),
			i = n(3),
			o = n(45),
			a = function() {
				function e() {
					this.T = null, this._ = null
				}
				return e.prototype.find = function(e) {
					if (null != this.T) return this.T.getChild(e);
					if (e.isEmpty() || null == this._) return null;
					var t = e.getFront();
					return e = e.popFront(), this._.contains(t) ? this._.get(t).find(e) : null
				}, e.prototype.remember = function(t, n) {
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
						return t.forEachChild(i.PRIORITY_INDEX, function(e, t) {
							n.remember(new r.Path(e), t)
						}), this.forget(e)
					}
					if (null !== this._) {
						var o = e.getFront();
						return e = e.popFront(), this._.contains(o) && this._.get(o).forget(e) && this._.remove(o), !!this._.isEmpty() && (this._ = null, !0)
					}
					return !0
				}, e.prototype.forEachTree = function(e, t) {
					null !== this.T ? t(e, this.T) : this.forEachChild(function(n, i) {
						var o = new r.Path(e + "/" + n);
						i.forEachTree(o, t)
					})
				}, e.prototype.forEachChild = function(e) {
					null !== this._ && this._.each(function(t, n) {
						e(t, n)
					})
				}, e
			}();
		t.SparseSnapshotTree = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e() {
					this.set = {}
				}
				return e.prototype.add = function(e, t) {
					this.set[e] = null === t || t
				}, e.prototype.contains = function(e) {
					return r.contains(this.set, e)
				}, e.prototype.get = function(e) {
					return this.contains(e) ? this.set[e] : void 0
				}, e.prototype.remove = function(e) {
					delete this.set[e]
				}, e.prototype.clear = function() {
					this.set = {}
				}, e.prototype.isEmpty = function() {
					return r.isEmpty(this.set)
				}, e.prototype.count = function() {
					return r.getCount(this.set)
				}, e.prototype.each = function(e) {
					r.forEach(this.set, function(t, n) {
						return e(t, n)
					})
				}, e.prototype.keys = function() {
					var e = [];
					return r.forEach(this.set, function(t) {
						e.push(t)
					}), e
				}, e
			}();
		t.CountedSet = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(8),
			i = n(2),
			o = function() {
				function e(e, t, n) {
					this.source = e, this.path = t, this.snap = n, this.type = r.OperationType.OVERWRITE
				}
				return e.prototype.operationForChild = function(t) {
					return this.path.isEmpty() ? new e(this.source, i.Path.Empty, this.snap.getImmediateChild(t)) : new e(this.source, this.path.popFront(), this.snap)
				}, e
			}();
		t.Overwrite = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r, i = n(18),
			o = n(4),
			a = n(0),
			s = n(0),
			u = n(48),
			l = n(90),
			h = function() {
				function e() {
					this.qe = {}
				}
				return Object.defineProperty(e, "__referenceConstructor", {
					get: function() {
						return a.assert(r, "Reference.ts has not been loaded"), r
					},
					set: function(e) {
						a.assert(!r, "__referenceConstructor has already been defined"), r = e
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.isEmpty = function() {
					return s.isEmpty(this.qe)
				}, e.prototype.applyOperation = function(e, t, n) {
					var r = e.source.queryId;
					if (null !== r) {
						var i = s.safeGet(this.qe, r);
						return a.assert(null != i, "SyncTree gave us an op for an invalid query."), i.applyOperation(e, t, n)
					}
					var o = [];
					return s.forEach(this.qe, function(r, i) {
						o = o.concat(i.applyOperation(e, t, n))
					}), o
				}, e.prototype.addEventRegistration = function(e, t, n, r, a) {
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
						s.forEach(this.qe, function(e, t) {
							a = a.concat(t.removeEventRegistration(n, r)), t.isEmpty() && (delete l.qe[e], t.getQuery().getQueryParams().loadsAllData() || o.push(t.getQuery()))
						})
					} else {
						var h = s.safeGet(this.qe, i);
						h && (a = a.concat(h.removeEventRegistration(n, r)), h.isEmpty() && (delete this.qe[i], h.getQuery().getQueryParams().loadsAllData() || o.push(h.getQuery())))
					}
					return u && !this.hasCompleteView() && o.push(new e.__referenceConstructor(t.repo, t.path)), {
						removed: o,
						events: a
					}
				}, e.prototype.getQueryViews = function() {
					var e = this;
					return Object.keys(this.qe).map(function(t) {
						return e.qe[t]
					}).filter(function(e) {
						return !e.getQuery().getQueryParams().loadsAllData()
					})
				}, e.prototype.getCompleteServerCache = function(e) {
					var t = null;
					return s.forEach(this.qe, function(n, r) {
						t = t || r.getCompleteServerCache(e)
					}), t
				}, e.prototype.viewForQuery = function(e) {
					if (e.getQueryParams().loadsAllData()) return this.getCompleteView();
					var t = e.queryIdentifier();
					return s.safeGet(this.qe, t)
				}, e.prototype.viewExistsForQuery = function(e) {
					return null != this.viewForQuery(e)
				}, e.prototype.hasCompleteView = function() {
					return null != this.getCompleteView()
				}, e.prototype.getCompleteView = function() {
					return s.findValue(this.qe, function(e) {
						return e.getQuery().getQueryParams().loadsAllData()
					}) || null
				}, e
			}();
		t.SyncPoint = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(4),
			i = n(18),
			o = function() {
				function e(e, t) {
					this.Ue = e, this.Be = t
				}
				return e.prototype.updateEventSnap = function(t, n, r) {
					return new e(new i.CacheNode(t, n, r), this.Be)
				}, e.prototype.updateServerSnap = function(t, n, r) {
					return new e(this.Ue, new i.CacheNode(t, n, r))
				}, e.prototype.getEventCache = function() {
					return this.Ue
				}, e.prototype.getCompleteEventSnap = function() {
					return this.Ue.isFullyInitialized() ? this.Ue.getNode() : null
				}, e.prototype.getServerCache = function() {
					return this.Be
				}, e.prototype.getCompleteServerSnap = function() {
					return this.Be.isFullyInitialized() ? this.Be.getNode() : null
				}, e.Empty = new e(new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1), new i.CacheNode(r.ChildrenNode.EMPTY_NODE, !1, !1)), e
			}();
		t.ViewCache = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e(e) {
					this.He = e, this.Ge = null
				}
				return e.prototype.get = function() {
					var e = this.He.get(),
						t = r.clone(e);
					return this.Ge && r.forEach(this.Ge, function(e, n) {
						t[e] = t[e] - n
					}), this.Ge = e, t
				}, e
			}();
		t.StatsListener = i
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function t(n, r, i, o, a, s) {
					var l = e.call(this) || this;
					if (l.H = n, l.ee = r, l.te = i, l.ne = o, l.Ke = a, l.Ye = s, l.id = t.Xe++, l.de = u.logWrapper("p:" + l.id + ":"), l.ze = {}, l.Je = {}, l.$e = [], l.Ze = 0, l.et = [], l.tt = !1, l.nt = v, l.rt = g, l.it = null, l.lastSessionId = null, l.ot = null, l.at = !1, l.st = {}, l.ut = 0, l.lt = null, l.ht = null, l.ct = !1, l.pt = 0, l.dt = !0, l.ft = null, l._t = null, s && !_.isNodeSdk()) throw Error("Auth override specified in options, but not supported on non Node.js platforms");
					return l.yt(0), h.VisibilityMonitor.getInstance().on("visible", l.vt, l), -1 === n.host.indexOf("fblocal") && c.OnlineMonitor.getInstance().on("online", l.gt, l), l
				}
				return r(t, e), t.prototype.sendRequest = function(e, t, n) {
					var r = ++this.ut,
						i = {
							r: r,
							a: e,
							b: t
						};
					this.de(a.stringify(i)), s.assert(this.tt, "sendRequest call when we're not connected not allowed."), this.lt.sendRequest(i), n && (this.st[r] = n)
				}, t.prototype.listen = function(e, t, n, r) {
					var i = e.queryIdentifier(),
						o = "" + e.path;
					this.de("Listen called for " + o + " " + i), this.Je[o] = this.Je[o] || {}, s.assert(e.getQueryParams().isDefault() || !e.getQueryParams().loadsAllData(), "listen() called for non-default but complete query"), s.assert(!this.Je[o][i], "listen() called twice for same path/queryId.");
					var a = {
						onComplete: r,
						hashFn: t,
						query: e,
						tag: n
					};
					this.Je[o][i] = a, this.tt && this.mt(a)
				}, t.prototype.mt = function(e) {
					var n = this,
						r = e.query,
						i = "" + r.path,
						o = r.queryIdentifier();
					this.de("Listen on " + i + " for " + o);
					var a = {
						p: i
					};
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
				}, t.prototype.refreshAuthToken = function(e) {
					this.ht = e, this.de("Auth token refreshed"), this.ht ? this.tryAuth() : this.tt && this.sendRequest("unauth", {}, function() {}), this.Nt(e)
				}, t.prototype.Nt = function(e) {
					(e && 40 === e.length || p.isAdmin(e)) && (this.de("Admin auth credential detected.  Reducing max reconnect time."), this.rt = 3e4)
				}, t.prototype.tryAuth = function() {
					var e = this;
					if (this.tt && this.ht) {
						var t = this.ht,
							n = p.isValidFormat(t) ? "auth" : "gauth",
							r = {
								cred: t
							};
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
					var i = {
						p: e
					};
					r && (i.q = n, i.t = r), this.sendRequest("n", i)
				}, t.prototype.onDisconnectPut = function(e, t, n) {
					this.tt ? this.St("o", e, t, n) : this.et.push({
						pathString: e,
						action: "o",
						data: t,
						onComplete: n
					})
				}, t.prototype.onDisconnectMerge = function(e, t, n) {
					this.tt ? this.St("om", e, t, n) : this.et.push({
						pathString: e,
						action: "om",
						data: t,
						onComplete: n
					})
				}, t.prototype.onDisconnectCancel = function(e, t) {
					this.tt ? this.St("oc", e, null, t) : this.et.push({
						pathString: e,
						action: "oc",
						data: null,
						onComplete: t
					})
				}, t.prototype.St = function(e, t, n, r) {
					var i = {
						p: t,
						d: n
					};
					this.de("onDisconnect " + e, i), this.sendRequest(e, i, function(e) {
						r && setTimeout(function() {
							r(e.s, e.d)
						}, Math.floor(0))
					})
				}, t.prototype.put = function(e, t, n, r) {
					this.putInternal("p", e, t, n, r)
				}, t.prototype.merge = function(e, t, n, r) {
					this.putInternal("m", e, t, n, r)
				}, t.prototype.putInternal = function(e, t, n, r, i) {
					var o = {
						p: t,
						d: n
					};
					void 0 !== i && (o.h = i), this.$e.push({
						action: e,
						request: o,
						onComplete: r
					}), this.Ze++;
					var a = this.$e.length - 1;
					this.tt ? this.Tt(a) : this.de("Buffering put: " + t)
				}, t.prototype.Tt = function(e) {
					var t = this,
						n = this.$e[e].action,
						r = this.$e[e].request,
						i = this.$e[e].onComplete;
					this.$e[e].queued = this.tt, this.sendRequest(n, r, function(r) {
						t.de(n + " response", r), delete t.$e[e], t.Ze--, 0 === t.Ze && (t.$e = []), i && i(r.s, r.d)
					})
				}, t.prototype.reportStats = function(e) {
					var t = this;
					if (this.tt) {
						var n = {
							c: e
						};
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
					} else {
						if ("error" in e) throw "A server-side error has occurred: " + e.error;
						"a" in e && this.It(e.a, e.b)
					}
				}, t.prototype.It = function(e, t) {
					this.de("handleServerMessage", e, t), "d" === e ? this.ee(t.p, t.d, !1, t.t) : "m" === e ? this.ee(t.p, t.d, !0, t.t) : "c" === e ? this.Rt(t.p, t.q) : "ac" === e ? this.Pt(t.s, t.d) : "sd" === e ? this.Ot(t) : u.error("Unrecognized action received from server: " + a.stringify(e) + "\nAre you using the latest client?")
				}, t.prototype.At = function(e, t) {
					this.de("connection ready"), this.tt = !0, this._t = (new Date).getTime(), this.Dt(e), this.lastSessionId = t, this.dt && this.Mt(), this.Lt(), this.dt = !1, this.te(!0)
				}, t.prototype.yt = function(e) {
					var t = this;
					s.assert(!this.lt, "Scheduling a connect when we're already connected/ing?"), this.ot && clearTimeout(this.ot), this.ot = setTimeout(function() {
						t.ot = null, t.Ft()
					}, Math.floor(e))
				}, t.prototype.vt = function(e) {
					e && !this.at && this.nt === this.rt && (this.de("Window became visible.  Reducing delay."), this.nt = v, this.lt || this.yt(0)), this.at = e
				}, t.prototype.gt = function(e) {
					e ? (this.de("Browser went online."), this.nt = v, this.lt || this.yt(0)) : (this.de("Browser went offline.  Killing connection."), this.lt && this.lt.close())
				}, t.prototype.xt = function() {
					if (this.de("data client disconnected"), this.tt = !1, this.lt = null, this.kt(), this.st = {}, this.Wt()) {
						if (this.at) {
							if (this._t) {
								var e = (new Date).getTime() - this._t;
								e > 3e4 && (this.nt = v), this._t = null
							}
						} else this.de("Window isn't visible.  Delaying reconnect."), this.nt = this.rt, this.ft = (new Date).getTime();
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
							c = function() {
								h ? h.close() : (l = !0, r())
							},
							p = function(e) {
								s.assert(h, "sendRequest call when we're not connected not allowed."), h.sendRequest(e)
							};
						this.lt = {
							close: c,
							sendRequest: p
						};
						var _ = this.ct;
						this.ct = !1, this.Ke.getToken(_).then(function(t) {
							l ? u.log("getToken() completed but was canceled") : (u.log("getToken() completed. Creating connection."), o.ht = t && t.accessToken, h = new d.Connection(i, o.H, e, n, r, function(e) {
								u.warn(e + " (" + o.H + ")"), o.interrupt("server_kill")
							}, a))
						}).then(null, function(e) {
							o.de("Failed to get token: " + e), l || (f.CONSTANTS.NODE_ADMIN && u.warn(e), c())
						})
					}
				}, t.prototype.interrupt = function(e) {
					u.log("Interrupting connection for reason: " + e), this.ze[e] = !0, this.lt ? this.lt.close() : (this.ot && (clearTimeout(this.ot), this.ot = null), this.tt && this.xt())
				}, t.prototype.resume = function(e) {
					u.log("Resuming connection for reason: " + e), delete this.ze[e], o.isEmpty(this.ze) && (this.nt = v, this.lt || this.yt(0))
				}, t.prototype.Dt = function(e) {
					var t = e - (new Date).getTime();
					this.ne({
						serverTimeOffset: t
					})
				}, t.prototype.kt = function() {
					for (var e = 0; e < this.$e.length; e++) {
						var t = this.$e[e];
						t && "h" in t.request && t.queued && (t.onComplete && t.onComplete("disconnect"), delete this.$e[e], this.Ze--)
					}
					0 === this.Ze && (this.$e = [])
				}, t.prototype.Rt = function(e, t) {
					var n;
					n = t ? t.map(function(e) {
						return u.ObjectToUniqueKey(e)
					}).join("$") : "default";
					var r = this.Et(e, n);
					r && r.onComplete && r.onComplete("permission_denied")
				}, t.prototype.Et = function(e, t) {
					var n, r = "" + new l.Path(e);
					return void 0 !== this.Je[r] ? (n = this.Je[r][t], delete this.Je[r][t], 0 === o.getCount(this.Je[r]) && delete this.Je[r]) : n = void 0, n
				}, t.prototype.Pt = function(e, t) {
					u.log("Auth token revoked: " + e + "/" + t), this.ht = null, this.ct = !0, this.lt.close(), "invalid_token" !== e && "permission_denied" !== e || ++this.pt >= 3 && (this.nt = 3e4, this.Ke.notifyForInvalidToken())
				}, t.prototype.Ot = function(e) {
					this.it ? this.it(e) : "msg" in e && "undefined" != typeof console && console.log("FIREBASE: " + e.msg.replace("\n", "\nFIREBASE: "))
				}, t.prototype.Lt = function() {
					var e = this;
					this.tryAuth(), o.forEach(this.Je, function(t, n) {
						o.forEach(n, function(t, n) {
							e.mt(n)
						})
					});
					for (var t = 0; t < this.$e.length; t++) this.$e[t] && this.Tt(t);
					for (; this.et.length;) {
						var n = this.et.shift();
						this.St(n.action, n.pathString, n.data, n.onComplete)
					}
				}, t.prototype.Mt = function() {
					var e = {},
						t = "js";
					f.CONSTANTS.NODE_ADMIN ? t = "admin_node" : f.CONSTANTS.NODE_CLIENT && (t = "node"), e["sdk." + t + "." + i.default.SDK_VERSION.replace(/\./g, "-")] = 1, _.isMobileCordova() ? e["framework.cordova"] = 1 : _.isReactNative() && (e["framework.reactnative"] = 1), this.reportStats(e)
				}, t.prototype.Wt = function() {
					var e = c.OnlineMonitor.getInstance().currentlyOnline();
					return o.isEmpty(this.ze) && e
				}, t.Xe = 0, t.jt = 0, t
			}(y.ServerActions);
		t.PersistentConnection = m
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e(e) {
					this.Vt = e, this.Qt = {}, r.assert(Array.isArray(e) && e.length > 0, "Requires a non-empty array")
				}
				return e.prototype.trigger = function(e) {
					for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
					if (Array.isArray(this.Qt[e]))
						for (var r = this.Qt[e].slice(), i = 0; i < r.length; i++) r[i].callback.apply(r[i].context, t)
				}, e.prototype.on = function(e, t, n) {
					this.qt(e), this.Qt[e] = this.Qt[e] || [], this.Qt[e].push({
						callback: t,
						context: n
					});
					var r = this.getInitialEvent(e);
					r && t.apply(n, r)
				}, e.prototype.off = function(e, t, n) {
					this.qt(e);
					for (var r = this.Qt[e] || [], i = 0; i < r.length; i++)
						if (r[i].callback === t && (!n || n === r[i].context)) return void r.splice(i, 1)
				}, e.prototype.qt = function(e) {
					r.assert(this.Vt.find(function(t) {
						return t === e
					}), "Unknown event: " + e)
				}, e
			}();
		t.EventEmitter = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = n(12),
			o = n(13),
			a = n(104),
			s = function() {
				function e(e, t, n, i, o, s, u) {
					this.id = e, this.H = t, this.Ut = n, this.At = i, this.z = o, this.Bt = s, this.lastSessionId = u, this.connectionCount = 0, this.pendingDataMessages = [], this.Ht = 0, this.de = r.logWrapper("c:" + this.id + ":"), this.Gt = new a.TransportManager(t), this.de("Connection created"), this.Kt()
				}
				return e.prototype.Kt = function() {
					var e = this,
						t = this.Gt.initialTransport();
					this.Yt = new t(this.Xt(), this.H, void 0, this.lastSessionId), this.zt = t.responsesRequiredToBeHealthy || 0;
					var n = this.Jt(this.Yt),
						i = this.$t(this.Yt);
					this.Zt = this.Yt, this.en = this.Yt, this.tn = null, this.nn = !1, setTimeout(function() {
						e.Yt && e.Yt.open(n, i)
					}, Math.floor(0));
					var o = t.healthyTimeout || 0;
					o > 0 && (this.rn = r.setTimeoutNonBlocking(function() {
						e.rn = null, e.nn || (e.Yt && e.Yt.bytesReceived > 102400 ? (e.de("Connection exceeded healthy timeout but has received " + e.Yt.bytesReceived + " bytes.  Marking connection healthy."), e.nn = !0, e.Yt.markConnectionHealthy()) : e.Yt && e.Yt.bytesSent > 10240 ? e.de("Connection exceeded healthy timeout but has sent " + e.Yt.bytesSent + " bytes.  Leaving connection alive.") : (e.de("Closing unhealthy connection after timeout."), e.close()))
					}, Math.floor(o)))
				}, e.prototype.Xt = function() {
					return "c:" + this.id + ":" + this.connectionCount++
				}, e.prototype.$t = function(e) {
					var t = this;
					return function(n) {
						e === t.Yt ? t.in(n) : e === t.tn ? (t.de("Secondary connection lost."), t.an()) : t.de("closing an old connection")
					}
				}, e.prototype.Jt = function(e) {
					var t = this;
					return function(n) {
						2 != t.Ht && (e === t.en ? t.sn(n) : e === t.tn ? t.un(n) : t.de("message on old connection"))
					}
				}, e.prototype.sendRequest = function(e) {
					var t = {
						t: "d",
						d: e
					};
					this.ln(t)
				}, e.prototype.tryCleanupConnection = function() {
					this.Zt === this.tn && this.en === this.tn && (this.de("cleaning up and promoting a connection: " + this.tn.connId), this.Yt = this.tn, this.tn = null)
				}, e.prototype.hn = function(e) {
					if ("t" in e) {
						var t = e.t;
						"a" === t ? this.cn() : "r" === t ? (this.de("Got a reset on secondary, closing it"), this.tn.close(), this.Zt !== this.tn && this.en !== this.tn || this.close()) : "o" === t && (this.de("got pong on secondary."), this.pn--, this.cn())
					}
				}, e.prototype.un = function(e) {
					var t = r.requireKey("t", e),
						n = r.requireKey("d", e);
					if ("c" == t) this.hn(n);
					else {
						if ("d" != t) throw Error("Unknown protocol layer: " + t);
						this.pendingDataMessages.push(n)
					}
				}, e.prototype.cn = function() {
					this.pn <= 0 ? (this.de("Secondary connection is healthy."), this.nn = !0, this.tn.markConnectionHealthy(), this.dn()) : (this.de("sending ping on secondary."), this.tn.send({
						t: "c",
						d: {
							t: "p",
							d: {}
						}
					}))
				}, e.prototype.dn = function() {
					this.tn.start(), this.de("sending client ack on secondary"), this.tn.send({
						t: "c",
						d: {
							t: "a",
							d: {}
						}
					}), this.de("Ending transmission on primary"), this.Yt.send({
						t: "c",
						d: {
							t: "n",
							d: {}
						}
					}), this.Zt = this.tn, this.tryCleanupConnection()
				}, e.prototype.sn = function(e) {
					var t = r.requireKey("t", e),
						n = r.requireKey("d", e);
					"c" == t ? this.fn(n) : "d" == t && this.wt(n)
				}, e.prototype.wt = function(e) {
					this._n(), this.Ut(e)
				}, e.prototype._n = function() {
					this.nn || --this.zt <= 0 && (this.de("Primary connection is healthy."), this.nn = !0, this.Yt.markConnectionHealthy())
				}, e.prototype.fn = function(e) {
					var t = r.requireKey("t", e);
					if ("d" in e) {
						var n = e.d;
						if ("h" === t) this.yn(n);
						else if ("n" === t) {
							this.de("recvd end transmission on primary"), this.en = this.tn;
							for (var i = 0; i < this.pendingDataMessages.length; ++i) this.wt(this.pendingDataMessages[i]);
							this.pendingDataMessages = [], this.tryCleanupConnection()
						} else "s" === t ? this.vn(n) : "r" === t ? this.gn(n) : "e" === t ? r.error("Server Error: " + n) : "o" === t ? (this.de("got pong on primary."), this._n(), this.mn()) : r.error("Unknown control packet command: " + t)
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
					this.tn.open(n, i), r.setTimeoutNonBlocking(function() {
						t.tn && (t.de("Timed out trying to upgrade."), t.tn.close())
					}, Math.floor(6e4))
				}, e.prototype.gn = function(e) {
					this.de("Reset packet received.  New host: " + e), this.H.updateHost(e), 1 === this.Ht ? this.close() : (this.Pn(), this.Kt())
				}, e.prototype.Cn = function(e, t) {
					var n = this;
					this.de("Realtime connection established."), this.Yt = e, this.Ht = 1, this.At && (this.At(t, this.sessionId), this.At = null), 0 === this.zt ? (this.de("Primary connection is healthy."), this.nn = !0) : r.setTimeoutNonBlocking(function() {
						n.mn()
					}, Math.floor(5e3))
				}, e.prototype.mn = function() {
					this.nn || 1 !== this.Ht || (this.de("sending ping on primary."), this.ln({
						t: "c",
						d: {
							t: "p",
							d: {}
						}
					}))
				}, e.prototype.an = function() {
					var e = this.tn;
					this.tn = null, this.Zt !== e && this.en !== e || this.close()
				}, e.prototype.in = function(e) {
					this.Yt = null, e || 0 !== this.Ht ? 1 === this.Ht && this.de("Realtime connection lost.") : (this.de("Realtime connection failed."), this.H.isCacheableHost() && (i.PersistentStorage.remove("host:" + this.H.host), this.H.internalHost = this.H.host)), this.close()
				}, e.prototype.vn = function(e) {
					this.de("Connection shutdown command received. Shutting down..."), this.Bt && (this.Bt(e), this.Bt = null), this.z = null, this.close()
				}, e.prototype.ln = function(e) {
					if (1 !== this.Ht) throw "Connection is not connected";
					this.Zt.send(e)
				}, e.prototype.close = function() {
					2 !== this.Ht && (this.de("Closing realtime connection."), this.Ht = 2, this.Pn(), this.z && (this.z(), this.z = null))
				}, e.prototype.Pn = function() {
					this.de("Shutting down all connections"), this.Yt && (this.Yt.close(), this.Yt = null), this.tn && (this.tn.close(), this.tn = null), this.rn && (clearTimeout(this.rn), this.rn = null)
				}, e
			}();
		t.Connection = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = n(45),
			o = n(25),
			a = n(105),
			s = n(13),
			u = n(0),
			l = n(0);
		t.FIREBASE_LONGPOLL_START_PARAM = "start", t.FIREBASE_LONGPOLL_CLOSE_COMMAND = "close", t.FIREBASE_LONGPOLL_COMMAND_CB_NAME = "pLPCommand", t.FIREBASE_LONGPOLL_DATA_CB_NAME = "pRTLPCB", t.FIREBASE_LONGPOLL_ID_PARAM = "id", t.FIREBASE_LONGPOLL_PW_PARAM = "pw", t.FIREBASE_LONGPOLL_SERIAL_PARAM = "ser", t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = "cb", t.FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = "seg", t.FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = "ts", t.FIREBASE_LONGPOLL_DATA_PARAM = "d", t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = "disconn", t.FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = "dframe";
		var h = function() {
			function e(e, t, n, i) {
				this.connId = e, this.repoInfo = t, this.transportSessionId = n, this.lastSessionId = i, this.bytesSent = 0, this.bytesReceived = 0, this.bn = !1, this.de = r.logWrapper(e), this.$ = o.StatsManager.getCollection(t), this.urlFn = function(e) {
					return t.connectionURL(s.LONG_POLLING, e)
				}
			}
			return e.prototype.open = function(e, n) {
				var i = this;
				this.curSegmentNum = 0, this.z = n, this.myPacketOrderer = new a.PacketReceiver(e), this.Sn = !1, this.Tn = setTimeout(function() {
					i.de("Timed out trying to connect."), i.wn(), i.Tn = null
				}, Math.floor(3e4)), r.executeWhenDOMReady(function() {
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
									o ? (i.scriptTagHolder.sendNewPolls = !1, i.myPacketOrderer.closeAfter(o, function() {
										i.wn()
									})) : i.wn()
								}
						}, function() {
							for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
							var n = e[0],
								r = e[1];
							i.In(e), i.myPacketOrderer.handleResponse(n, r)
						}, function() {
							i.wn()
						}, i.urlFn);
						var e = {};
						e[t.FIREBASE_LONGPOLL_START_PARAM] = "t", e[t.FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(1e8 * Math.random()), i.scriptTagHolder.uniqueCallbackIdentifier && (e[t.FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = i.scriptTagHolder.uniqueCallbackIdentifier), e[s.VERSION_PARAM] = s.PROTOCOL_VERSION, i.transportSessionId && (e[s.TRANSPORT_SESSION_PARAM] = i.transportSessionId), i.lastSessionId && (e[s.LAST_SESSION_PARAM] = i.lastSessionId), !l.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(s.FORGE_DOMAIN) && (e[s.REFERER_PARAM] = s.FORGE_REF);
						var n = i.urlFn(e);
						i.de("Connecting via long-poll to " + n), i.scriptTagHolder.addTag(n, function() {})
					}
				})
			}, e.prototype.start = function() {
				this.scriptTagHolder.startLongPoll(this.id, this.password), this.addDisconnectPingFrame(this.id, this.password)
			}, e.forceAllow = function() {
				e.Rn = !0
			}, e.forceDisallow = function() {
				e.On = !0
			}, e.isAvailable = function() {
				return e.Rn || !e.On && "undefined" != typeof document && null != document.createElement && !r.isChromeExtensionContentScript() && !r.isWindowsStoreApp() && !l.isNodeSdk()
			}, e.prototype.markConnectionHealthy = function() {}, e.prototype.An = function() {
				this.Sn = !0, this.scriptTagHolder && (this.scriptTagHolder.close(), this.scriptTagHolder = null), this.myDisconnFrame && (document.body.removeChild(this.myDisconnFrame), this.myDisconnFrame = null), this.Tn && (clearTimeout(this.Tn), this.Tn = null)
			}, e.prototype.wn = function() {
				this.Sn || (this.de("Longpoll is closing itself"), this.An(), this.z && (this.z(this.bn), this.z = null))
			}, e.prototype.close = function() {
				this.Sn || (this.de("Longpoll is being closed."), this.An())
			}, e.prototype.send = function(e) {
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
					try {
						this.myIFrame.doc.open(), this.myIFrame.doc.write(h), this.myIFrame.doc.close()
					} catch (e) {
						r.log("frame writing exception"), e.stack && r.log(e.stack), r.log(e)
					}
				}
			}
			return e.Dn = function() {
				var e = document.createElement("iframe");
				if (e.style.display = "none", !document.body) throw "Document body has not initialized. Wait to initialize Firebase until after the document is ready.";
				document.body.appendChild(e);
				try {
					e.contentWindow.document || r.log("No IE domain setting required")
				} catch (n) {
					var t = document.domain;
					e.src = "javascript:void((function(){document.open();document.domain='" + t + "';document.close();})())"
				}
				return e.contentDocument ? e.doc = e.contentDocument : e.contentWindow ? e.doc = e.contentWindow.document : e.document && (e.doc = e.document), e
			}, e.prototype.close = function() {
				var n = this;
				if (this.alive = !1, this.myIFrame && (this.myIFrame.doc.body.innerHTML = "", setTimeout(function() {
						null !== n.myIFrame && (document.body.removeChild(n.myIFrame), n.myIFrame = null)
					}, Math.floor(0))), l.isNodeSdk() && this.myID) {
					var r = {};
					r[t.FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = "t", r[t.FIREBASE_LONGPOLL_ID_PARAM] = this.myID, r[t.FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
					var i = this.urlFn(r);
					e.nodeRestRequest(i)
				}
				var o = this.onDisconnect;
				o && (this.onDisconnect = null, o())
			}, e.prototype.startLongPoll = function(e, t) {
				for (this.myID = e, this.myPW = t, this.alive = !0; this.Mn(););
			}, e.prototype.Mn = function() {
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
			}, e.prototype.enqueueSegment = function(e, t, n) {
				this.pendingSegs.push({
					seg: e,
					ts: t,
					d: n
				}), this.alive && this.Mn()
			}, e.prototype.Ln = function(e, t) {
				var n = this;
				this.outstandingRequests.add(t, 1);
				var r = function() {
						n.outstandingRequests.remove(t), n.Mn()
					},
					i = setTimeout(r, Math.floor(25e3)),
					o = function() {
						clearTimeout(i), r()
					};
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
						}, i.onerror = function() {
							r.log("Long-poll script failed to load: " + e), n.sendNewPolls = !1, n.close()
						}, n.myIFrame.doc.body.appendChild(i)
					} catch (e) {}
				}, Math.floor(1))
			}, e
		}();
		t.FirebaseIFrameScriptHolder = c
	}, function(e, t, n) {
		"use strict";
		(function(e) {
			function r(e) {
				d = e
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
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
				function t(e, n, r, i) {
					this.connId = e, this.keepaliveTimer = null, this.frames = null, this.totalFrames = 0, this.bytesSent = 0, this.bytesReceived = 0, this.de = a.logWrapper(this.connId), this.$ = s.StatsManager.getCollection(n), this.connURL = t.Fn(n, r, i)
				}
				return t.Fn = function(e, t, n) {
					var r = {};
					return r[u.VERSION_PARAM] = u.PROTOCOL_VERSION, !p.isNodeSdk() && "undefined" != typeof location && location.href && -1 !== location.href.indexOf(u.FORGE_DOMAIN) && (r[u.REFERER_PARAM] = u.FORGE_REF), t && (r[u.TRANSPORT_SESSION_PARAM] = t), n && (r[u.LAST_SESSION_PARAM] = n), e.connectionURL(u.WEBSOCKET, r)
				}, t.prototype.open = function(t, n) {
					var r = this;
					this.onDisconnect = n, this.onMessage = t, this.de("Websocket connecting to " + this.connURL), this.bn = !1, h.PersistentStorage.set("previous_websocket_failure", !0);
					try {
						if (p.isNodeSdk()) {
							var o = l.CONSTANTS.NODE_ADMIN ? "AdminNode" : "Node",
								a = {
									headers: {
										"User-Agent": "Firebase/" + u.PROTOCOL_VERSION + "/" + i.default.SDK_VERSION + "/" + e.platform + "/" + o
									}
								},
								s = e.env,
								c = 0 == this.connURL.indexOf("wss://") ? s.HTTPS_PROXY || s.https_proxy : s.HTTP_PROXY || s.http_proxy;
							c && (a.proxy = {
								origin: c
							}), this.mySock = new d(this.connURL, [], a)
						} else this.mySock = new d(this.connURL)
					} catch (e) {
						this.de("Error instantiating WebSocket.");
						var f = e.message || e.data;
						return f && this.de(f), void this.wn()
					}
					this.mySock.onopen = function() {
						r.de("Websocket connected."), r.bn = !0
					}, this.mySock.onclose = function() {
						r.de("Websocket connection was disconnected."), r.mySock = null, r.wn()
					}, this.mySock.onmessage = function(e) {
						r.handleIncomingFrame(e)
					}, this.mySock.onerror = function(e) {
						r.de("WebSocket error.  Closing connection.");
						var t = e.message || e.data;
						t && r.de(t), r.wn()
					}
				}, t.prototype.start = function() {}, t.forceDisallow = function() {
					t.On = !0
				}, t.isAvailable = function() {
					var e = !1;
					if ("undefined" != typeof navigator && navigator.userAgent) {
						var n = /Android ([0-9]{0,}\.[0-9]{0,})/,
							r = navigator.userAgent.match(n);
						r && r.length > 1 && parseFloat(r[1]) < 4.4 && (e = !0)
					}
					return !e && null !== d && !t.On
				}, t.previouslyFailed = function() {
					return h.PersistentStorage.isInMemoryStorage || !0 === h.PersistentStorage.get("previous_websocket_failure")
				}, t.prototype.markConnectionHealthy = function() {
					h.PersistentStorage.remove("previous_websocket_failure")
				}, t.prototype.xn = function(e) {
					if (this.frames.push(e), this.frames.length == this.totalFrames) {
						var t = this.frames.join("");
						this.frames = null;
						var n = c.jsonEval(t);
						this.onMessage(n)
					}
				}, t.prototype.kn = function(e) {
					this.totalFrames = e, this.frames = []
				}, t.prototype.Wn = function(e) {
					if (o.assert(null === this.frames, "We already have a frame buffer"), e.length <= 6) {
						var t = +e;
						if (!isNaN(t)) return this.kn(t), null
					}
					return this.kn(1), e
				}, t.prototype.handleIncomingFrame = function(e) {
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
				}, t.prototype.An = function() {
					this.Sn = !0, this.keepaliveTimer && (clearInterval(this.keepaliveTimer), this.keepaliveTimer = null), this.mySock && (this.mySock.close(), this.mySock = null)
				}, t.prototype.wn = function() {
					this.Sn || (this.de("WebSocket is closing itself"), this.An(), this.onDisconnect && (this.onDisconnect(this.bn), this.onDisconnect = null))
				}, t.prototype.close = function() {
					this.Sn || (this.de("WebSocket is being closed"), this.An())
				}, t.prototype.resetKeepAlive = function() {
					var e = this;
					clearInterval(this.keepaliveTimer), this.keepaliveTimer = setInterval(function() {
						e.mySock && e.jn("0"), e.resetKeepAlive()
					}, Math.floor(45e3))
				}, t.prototype.jn = function(e) {
					try {
						this.mySock.send(e)
					} catch (e) {
						this.de("Exception thrown from WebSocket.send():", e.message || e.data, "Closing connection."), setTimeout(this.wn.bind(this), 0)
					}
				}, t.responsesRequiredToBeHealthy = 2, t.healthyTimeout = 3e4, t
			}();
			t.WebSocketConnection = f
		}).call(t, n(27))
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = function() {
			function e() {}
			return e.prototype.put = function(e, t, n, r) {}, e.prototype.merge = function(e, t, n, r) {}, e.prototype.refreshAuthToken = function(e) {}, e.prototype.onDisconnectPut = function(e, t, n) {}, e.prototype.onDisconnectMerge = function(e, t, n) {}, e.prototype.onDisconnectCancel = function(e, t) {}, e.prototype.reportStats = function(e) {}, e
		}();
		t.ServerActions = r
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(24),
			i = n(3),
			o = n(5),
			a = n(4),
			s = function() {
				function e(t) {
					this.Vn = new r.IndexedFilter(t.getIndex()), this.me = t.getIndex(), this.Qn = e.qn(t), this.Un = e.Bn(t)
				}
				return e.prototype.getStartPost = function() {
					return this.Qn
				}, e.prototype.getEndPost = function() {
					return this.Un
				}, e.prototype.matches = function(e) {
					return this.me.compare(this.getStartPost(), e) <= 0 && this.me.compare(e, this.getEndPost()) <= 0
				}, e.prototype.updateChild = function(e, t, n, r, i, s) {
					return this.matches(new o.NamedNode(t, n)) || (n = a.ChildrenNode.EMPTY_NODE), this.Vn.updateChild(e, t, n, r, i, s)
				}, e.prototype.updateFullNode = function(e, t, n) {
					t.isLeafNode() && (t = a.ChildrenNode.EMPTY_NODE);
					var r = t.withIndex(this.me);
					r = r.updatePriority(a.ChildrenNode.EMPTY_NODE);
					var s = this;
					return t.forEachChild(i.PRIORITY_INDEX, function(e, t) {
						s.matches(new o.NamedNode(e, t)) || (r = r.updateImmediateChild(e, a.ChildrenNode.EMPTY_NODE))
					}), this.Vn.updateFullNode(e, r, n)
				}, e.prototype.updatePriority = function(e, t) {
					return e
				}, e.prototype.filtersNodes = function() {
					return !0
				}, e.prototype.getIndexedFilter = function() {
					return this.Vn
				}, e.prototype.getIndex = function() {
					return this.me
				}, e.qn = function(e) {
					if (e.hasStart()) {
						var t = e.getIndexStartName();
						return e.getIndex().makePost(e.getIndexStartValue(), t)
					}
					return e.getIndex().minPost()
				}, e.Bn = function(e) {
					if (e.hasEnd()) {
						var t = e.getIndexEndName();
						return e.getIndex().makePost(e.getIndexEndValue(), t)
					}
					return e.getIndex().maxPost()
				}, e
			}();
		t.RangedFilter = s
	}, , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
		e.exports = n(79)
	}, function(e, t, n) {
		"use strict";

		function r(t) {
			var n = t.INTERNAL.registerService("database", function(e, t, n) {
				return l.RepoManager.getInstance().databaseFromApp(e, n)
			}, {
				Reference: s.Reference,
				Query: a.Query,
				Database: o.Database,
				enableLogging: u.enableLogging,
				INTERNAL: h,
				ServerValue: d,
				TEST_ACCESS: c
			}, null, !0);
			p.isNodeSdk() && (e.exports = n)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e(e) {
					this.Hn = e, this.Gn = "firebase:"
				}
				return e.prototype.set = function(e, t) {
					null == t ? this.Hn.removeItem(this.Kn(e)) : this.Hn.setItem(this.Kn(e), r.stringify(t))
				}, e.prototype.get = function(e) {
					var t = this.Hn.getItem(this.Kn(e));
					return null == t ? null : r.jsonEval(t)
				}, e.prototype.remove = function(e) {
					this.Hn.removeItem(this.Kn(e))
				}, e.prototype.Kn = function(e) {
					return this.Gn + e
				}, e.prototype.toString = function() {
					return "" + this.Hn
				}, e
			}();
		t.DOMStorageWrapper = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e() {
					this.Yn = {}, this.isInMemoryStorage = !0
				}
				return e.prototype.set = function(e, t) {
					null == t ? delete this.Yn[e] : this.Yn[e] = t
				}, e.prototype.get = function(e) {
					return r.contains(this.Yn, e) ? this.Yn[e] : null
				}, e.prototype.remove = function(e) {
					delete this.Yn[e]
				}, e
			}();
		t.MemoryStorage = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e(e, t) {
					this.committed = e, this.snapshot = t
				}
				return e.prototype.toJSON = function() {
					return r.validateArgCount("TransactionResult.toJSON", 0, 1, arguments.length), {
						committed: this.committed,
						snapshot: this.snapshot.toJSON()
					}
				}, e
			}();
		t.TransactionResult = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				} else
					for (a = 0; a < 12; a++) n[a] = Math.floor(64 * Math.random());
				for (a = 0; a < 12; a++) u += e.charAt(n[a]);
				return r.assert(20 === u.length, "nextPushId: Length should be 20."), u
			}
		}()
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(22),
			i = n(85),
			o = n(0),
			a = n(0),
			s = function() {
				function e(e, t, n) {
					this.Xn = e, this.zn = t, this.Jn = n
				}
				return e.prototype.respondsTo = function(e) {
					return "value" === e
				}, e.prototype.createEvent = function(e, t) {
					var n = t.getQueryParams().getIndex();
					return new i.DataEvent("value", this, new r.DataSnapshot(e.snapshotNode, t.getRef(), n))
				}, e.prototype.getEventRunner = function(e) {
					var t = this.Jn;
					if ("cancel" === e.getEventType()) {
						a.assert(this.zn, "Raising a cancel event on a listener with no cancel callback");
						var n = this.zn;
						return function() {
							n.call(t, e.error)
						}
					}
					var r = this.Xn;
					return function() {
						r.call(t, e.snapshot)
					}
				}, e.prototype.createCancelEvent = function(e, t) {
					return this.zn ? new i.CancelEvent(this, e, t) : null
				}, e.prototype.matches = function(t) {
					return t instanceof e && (!t.Xn || !this.Xn || t.Xn === this.Xn && t.Jn === this.Jn)
				}, e.prototype.hasAnyCallback = function() {
					return null !== this.Xn
				}, e
			}();
		t.ValueEventRegistration = s;
		var u = function() {
			function e(e, t, n) {
				this.$n = e, this.zn = t, this.Jn = n
			}
			return e.prototype.respondsTo = function(e) {
				var t = "children_added" === e ? "child_added" : e;
				return t = "children_removed" === t ? "child_removed" : t, o.contains(this.$n, t)
			}, e.prototype.createCancelEvent = function(e, t) {
				return this.zn ? new i.CancelEvent(this, e, t) : null
			}, e.prototype.createEvent = function(e, t) {
				a.assert(null != e.childName, "Child events should have a childName.");
				var n = t.getRef().child(e.childName),
					o = t.getQueryParams().getIndex();
				return new i.DataEvent(e.type, this, new r.DataSnapshot(e.snapshotNode, n, o), e.prevName)
			}, e.prototype.getEventRunner = function(e) {
				var t = this.Jn;
				if ("cancel" === e.getEventType()) {
					a.assert(this.zn, "Raising a cancel event on a listener with no cancel callback");
					var n = this.zn;
					return function() {
						n.call(t, e.error)
					}
				}
				var r = this.$n[e.eventType];
				return function() {
					r.call(t, e.snapshot, e.prevName)
				}
			}, e.prototype.matches = function(t) {
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
							return o.every(this.$n, function(e, n) {
								return t.$n[e] === n
							})
						}
					}
				}
				return !1
			}, e.prototype.hasAnyCallback = function() {
				return null !== this.$n
			}, e
		}();
		t.ChildEventRegistration = u
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = function() {
				function e(e, t, n, r) {
					this.eventType = e, this.eventRegistration = t, this.snapshot = n, this.prevName = r
				}
				return e.prototype.getPath = function() {
					var e = this.snapshot.getRef();
					return "value" === this.eventType ? e.path : e.getParent().path
				}, e.prototype.getEventType = function() {
					return this.eventType
				}, e.prototype.getEventRunner = function() {
					return this.eventRegistration.getEventRunner(this)
				}, e.prototype.toString = function() {
					return this.getPath() + ":" + this.eventType + ":" + r.stringify(this.snapshot.exportVal())
				}, e
			}();
		t.DataEvent = i;
		var o = function() {
			function e(e, t, n) {
				this.eventRegistration = e, this.error = t, this.path = n
			}
			return e.prototype.getPath = function() {
				return this.path
			}, e.prototype.getEventType = function() {
				return "cancel"
			}, e.prototype.getEventRunner = function() {
				return this.eventRegistration.getEventRunner(this)
			}, e.prototype.toString = function() {
				return this.path + ":cancel"
			}, e
		}();
		t.CancelEvent = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function e(e) {
					this.Zn = e, this.er = u.ImmutableTree.Empty, this.tr = new _.WriteTree, this.nr = {}, this.rr = {}
				}
				return e.prototype.applyUserOverwrite = function(e, t, n, r) {
					return this.tr.addOverwrite(e, t, n, r), r ? this.ir(new p.Overwrite(c.OperationSource.User, e, t)) : []
				}, e.prototype.applyUserMerge = function(e, t, n) {
					this.tr.addMerge(e, t, n);
					var r = u.ImmutableTree.fromObject(t);
					return this.ir(new h.Merge(c.OperationSource.User, e, r))
				}, e.prototype.ackUserWrite = function(e, t) {
					void 0 === t && (t = !1);
					var n = this.tr.getWrite(e);
					if (this.tr.removeWrite(e)) {
						var r = u.ImmutableTree.Empty;
						return null != n.snap ? r = r.set(d.Path.Empty, !0) : s.forEach(n.children, function(e, t) {
							r = r.set(new d.Path(e), t)
						}), this.ir(new o.AckUserWrite(n.path, r, t))
					}
					return []
				}, e.prototype.applyServerOverwrite = function(e, t) {
					return this.ir(new p.Overwrite(c.OperationSource.Server, e, t))
				}, e.prototype.applyServerMerge = function(e, t) {
					var n = u.ImmutableTree.fromObject(t);
					return this.ir(new h.Merge(c.OperationSource.Server, e, n))
				}, e.prototype.applyListenComplete = function(e) {
					return this.ir(new l.ListenComplete(c.OperationSource.Server, e))
				}, e.prototype.applyTaggedQueryOverwrite = function(t, n, r) {
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
						var h = -1 !== l.findIndex(function(e) {
								return e.getQueryParams().loadsAllData()
							}),
							c = this.er.findOnPath(o, function(e, t) {
								return t.hasCompleteView()
							});
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
				}, e.prototype.cr = function(e) {
					return e.fold(function(e, t, n) {
						if (t && t.hasCompleteView()) return [t.getCompleteView()];
						var r = [];
						return t && (r = t.getQueryViews()), s.forEach(n, function(e, t) {
							r = r.concat(t)
						}), r
					})
				}, e.prototype._r = function(t) {
					for (var n = 0; n < t.length; ++n) {
						var r = t[n];
						if (!r.getQueryParams().loadsAllData()) {
							var i = e.ur(r),
								o = this.rr[i];
							delete this.rr[i], delete this.nr["_" + o]
						}
					}
				}, e.dr = function(e) {
					return e.getQueryParams().loadsAllData() && !e.getQueryParams().isDefault() ? e.getRef() : e
				}, e.prototype.hr = function(t, n) {
					var i = t.path,
						o = this.fr(t),
						a = this.pr(n),
						u = this.Zn.startListening(e.dr(t), o, a.hashFn, a.onComplete),
						l = this.er.subtree(i);
					if (o) r.assert(!l.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
					else
						for (var h = l.fold(function(e, t, n) {
								if (!e.isEmpty() && t && t.hasCompleteView()) return [t.getCompleteView().getQuery()];
								var r = [];
								return t && (r = r.concat(t.getQueryViews().map(function(e) {
									return e.getQuery()
								}))), s.forEach(n, function(e, t) {
									r = r.concat(t)
								}), r
							}), c = 0; c < h.length; ++c) {
							var p = h[c];
							this.Zn.stopListening(e.dr(p), this.fr(p))
						}
					return u
				}, e.prototype.pr = function(e) {
					var t = this,
						n = e.getQuery(),
						r = this.fr(n);
					return {
						hashFn: function() {
							return (e.getServerCache() || a.ChildrenNode.EMPTY_NODE).hash()
						},
						onComplete: function(e) {
							if ("ok" === e) return r ? t.applyTaggedListenComplete(n.path, r) : t.applyListenComplete(n.path);
							var o = i.errorForServerCode(e, n);
							return t.removeEventRegistration(n, null, o)
						}
					}
				}, e.ur = function(e) {
					return e.path + "$" + e.queryIdentifier()
				}, e.ar = function(e) {
					var t = e.indexOf("$");
					return r.assert(-1 !== t && t < e.length - 1, "Bad queryKey."), {
						queryId: e.substr(t + 1),
						path: new d.Path(e.substr(0, t))
					}
				}, e.prototype.or = function(e) {
					return this.nr["_" + e]
				}, e.prototype.fr = function(t) {
					var n = e.ur(t);
					return s.safeGet(this.rr, n)
				}, e.lr = function() {
					return e.yr++
				}, e.prototype.sr = function(e, t) {
					var n = this.er.get(e);
					r.assert(n, "Missing sync point for query tag that we're tracking");
					var i = this.tr.childWrites(e);
					return n.applyOperation(t, i, null)
				}, e.prototype.ir = function(e) {
					return this.vr(e, this.er, null, this.tr.childWrites(d.Path.Empty))
				}, e.prototype.vr = function(e, t, n, r) {
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(2),
			o = n(8),
			a = function() {
				function e(e, t, n) {
					this.path = e, this.affectedTree = t, this.revert = n, this.type = o.OperationType.ACK_USER_WRITE, this.source = o.OperationSource.User
				}
				return e.prototype.operationForChild = function(t) {
					if (this.path.isEmpty()) {
						if (null != this.affectedTree.value) return r.assert(this.affectedTree.children.isEmpty(), "affectedTree should not have overlapping affected paths."), this;
						var n = this.affectedTree.subtree(new i.Path(t));
						return new e(i.Path.Empty, n, this.revert)
					}
					return r.assert(this.path.getFront() === t, "operationForChild called for unrelated child."), new e(this.path.popFront(), this.affectedTree, this.revert)
				}, e
			}();
		t.AckUserWrite = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(2),
			i = n(8),
			o = function() {
				function e(e, t) {
					this.source = e, this.path = t, this.type = i.OperationType.LISTEN_COMPLETE
				}
				return e.prototype.operationForChild = function(t) {
					return this.path.isEmpty() ? new e(this.source, r.Path.Empty) : new e(this.source, this.path.popFront())
				}, e
			}();
		t.ListenComplete = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(8),
			i = n(46),
			o = n(2),
			a = n(0),
			s = function() {
				function e(e, t, n) {
					this.source = e, this.path = t, this.children = n, this.type = r.OperationType.MERGE
				}
				return e.prototype.operationForChild = function(t) {
					if (this.path.isEmpty()) {
						var n = this.children.subtree(new o.Path(t));
						return n.isEmpty() ? null : n.value ? new i.Overwrite(this.source, o.Path.Empty, n.value) : new e(this.source, o.Path.Empty, n)
					}
					return a.assert(this.path.getFront() === t, "Can't get a merge for a child not on the path of the operation"), new e(this.source, this.path.popFront(), this.children)
				}, e.prototype.toString = function() {
					return "Operation(" + this.path + ": " + this.source + " merge: " + this.children + ")"
				}, e
			}();
		t.Merge = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				return e.prototype.getQuery = function() {
					return this.mr
				}, e.prototype.getServerCache = function() {
					return this.Nr.getServerCache().getNode()
				}, e.prototype.getCompleteServerCache = function(e) {
					var t = this.Nr.getCompleteServerSnap();
					return t && (this.mr.getQueryParams().loadsAllData() || !e.isEmpty() && !t.getImmediateChild(e.getFront()).isEmpty()) ? t.getChild(e) : null
				}, e.prototype.isEmpty = function() {
					return 0 === this.Cr.length
				}, e.prototype.addEventRegistration = function(e) {
					this.Cr.push(e)
				}, e.prototype.removeEventRegistration = function(e, t) {
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
					if (e) {
						for (var i = [], o = 0; o < this.Cr.length; ++o) {
							var a = this.Cr[o];
							if (a.matches(e)) {
								if (e.hasAnyCallback()) {
									i = i.concat(this.Cr.slice(o + 1));
									break
								}
							} else i.push(a)
						}
						this.Cr = i
					} else this.Cr = [];
					return n
				}, e.prototype.applyOperation = function(e, t, n) {
					e.type === h.OperationType.MERGE && null !== e.source.queryId && (l.assert(this.Nr.getCompleteServerSnap(), "We should always have a full cache before handling merges"), l.assert(this.Nr.getCompleteEventSnap(), "Missing event cache, even though we have a server cache"));
					var r = this.Nr,
						i = this.Er.applyOperation(r, e, t, n);
					return this.Er.assertIndexed(i.viewCache), l.assert(i.viewCache.getServerCache().isFullyInitialized() || !r.getServerCache().isFullyInitialized(), "Once a server snap is complete, it should never go back"), this.Nr = i.viewCache, this.br(i.changes, i.viewCache.getEventCache().getNode(), null)
				}, e.prototype.getInitialEvents = function(e) {
					var t = this.Nr.getEventCache(),
						n = [];
					return t.getNode().isLeafNode() || t.getNode().forEachChild(p.PRIORITY_INDEX, function(e, t) {
						n.push(c.Change.childAddedChange(e, t))
					}), t.isFullyInitialized() && n.push(c.Change.valueChange(t.getNode())), this.br(n, t.getNode(), e)
				}, e.prototype.br = function(e, t, n) {
					var r = n ? [n] : this.Cr;
					return this.Pr.generateEventsForChanges(e, t, r)
				}, e
			}();
		t.View = d
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function e(e, t) {
					this.viewCache = e, this.changes = t
				}
				return e
			}();
		t.ProcessorResult = p;
		var d = function() {
			function e(e) {
				this.Sr = e
			}
			return e.prototype.assertIndexed = function(e) {
				i.assert(e.getEventCache().getNode().isIndexed(this.Sr.getIndex()), "Event snap not indexed"), i.assert(e.getServerCache().getNode().isIndexed(this.Sr.getIndex()), "Server snap not indexed")
			}, e.prototype.applyOperation = function(t, n, a, s) {
				var u, l, h = new o.ChildChangeAccumulator;
				if (n.type === r.OperationType.OVERWRITE) {
					var c = n;
					c.source.fromUser ? u = this.Tr(t, c.path, c.snap, a, s, h) : (i.assert(c.source.fromServer, "Unknown source."), l = c.source.tagged || t.getServerCache().isFiltered() && !c.path.isEmpty(), u = this.wr(t, c.path, c.snap, a, s, l, h))
				} else if (n.type === r.OperationType.MERGE) {
					var d = n;
					d.source.fromUser ? u = this.Ir(t, d.path, d.children, a, s, h) : (i.assert(d.source.fromServer, "Unknown source."), l = d.source.tagged || t.getServerCache().isFiltered(), u = this.Rr(t, d.path, d.children, a, s, l, h))
				} else if (n.type === r.OperationType.ACK_USER_WRITE) {
					var f = n;
					u = f.revert ? this.Or(t, f.path, a, s, h) : this.Ar(t, f.path, f.affectedTree, a, s, h)
				} else {
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
					} else {
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
					} else {
						var v = t.popFront(),
							g = void 0;
						if (a.isCompleteForChild(f)) {
							l = e.getServerCache().getNode();
							var m = n.calcEventCacheAfterServerOverwrite(t, a.getNode(), l);
							g = null != m ? a.getNode().getImmediateChild(f).updateChild(v, m) : a.getNode().getImmediateChild(f)
						} else g = n.calcCompleteChild(f, e.getServerCache());
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
				} else {
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
			}, e.Fr = function(e, t) {
				return e.getEventCache().isCompleteForChild(t)
			}, e.prototype.Ir = function(t, n, r, i, o, a) {
				var s = this,
					u = t;
				return r.foreach(function(r, l) {
					var h = n.child(r);
					e.Fr(t, h.getFront()) && (u = s.Tr(u, h, l, i, o, a))
				}), r.foreach(function(r, l) {
					var h = n.child(r);
					e.Fr(t, h.getFront()) || (u = s.Tr(u, h, l, i, o, a))
				}), u
			}, e.prototype.xr = function(e, t) {
				return t.foreach(function(t, n) {
					e = e.updateChild(t, n)
				}), e
			}, e.prototype.Rr = function(e, t, n, r, i, o, a) {
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
				if (null != n.value) {
					if (t.isEmpty() && s.isFullyInitialized() || s.isCompleteForPath(t)) return this.wr(e, t, s.getNode().getChild(t), r, i, a, o);
					if (t.isEmpty()) {
						var c = l.ImmutableTree.Empty;
						return s.getNode().forEachChild(u.KEY_INDEX, function(e, t) {
							c = c.set(new h.Path(e), t)
						}), this.Rr(e, t, c, r, i, a, o)
					}
					return e
				}
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
				} else {
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(9),
			o = n(0),
			a = function() {
				function e() {
					this.kr = {}
				}
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
					} else this.kr[n] = e
				}, e.prototype.getChanges = function() {
					return r.getValues(this.kr)
				}, e
			}();
		t.ChildChangeAccumulator = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(18),
			i = function() {
				function e() {}
				return e.prototype.getCompleteChild = function(e) {
					return null
				}, e.prototype.getChildAfterChild = function(e, t, n) {
					return null
				}, e
			}();
		t.Wr = i, t.NO_COMPLETE_CHILD_SOURCE = new i;
		var o = function() {
			function e(e, t, n) {
				void 0 === n && (n = null), this.jr = e, this.Nr = t, this.Vr = n
			}
			return e.prototype.getCompleteChild = function(e) {
				var t = this.Nr.getEventCache();
				if (t.isCompleteForChild(e)) return t.getNode().getImmediateChild(e);
				var n = null != this.Vr ? new r.CacheNode(this.Vr, !0, !1) : this.Nr.getServerCache();
				return this.jr.calcCompleteChild(e, n)
			}, e.prototype.getChildAfterChild = function(e, t, n) {
				var r = null != this.Vr ? this.Vr : this.Nr.getCompleteServerSnap(),
					i = this.jr.calcIndexedSlice(r, t, 1, n, e);
				return 0 === i.length ? null : i[0]
			}, e
		}();
		t.WriteTreeCompleteChildSource = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(5),
			i = n(9),
			o = n(0),
			a = function() {
				function e(e) {
					this.mr = e, this.me = this.mr.getQueryParams().getIndex()
				}
				return e.prototype.generateEventsForChanges = function(e, t, n) {
					var r = this,
						o = [],
						a = [];
					return e.forEach(function(e) {
						e.type === i.Change.CHILD_CHANGED && r.me.indexedValueChanged(e.oldSnap, e.snapshotNode) && a.push(i.Change.childMovedChange(e.childName, e.snapshotNode))
					}), this.Qr(o, i.Change.CHILD_REMOVED, e, n, t), this.Qr(o, i.Change.CHILD_ADDED, e, n, t), this.Qr(o, i.Change.CHILD_MOVED, a, n, t), this.Qr(o, i.Change.CHILD_CHANGED, e, n, t), this.Qr(o, i.Change.VALUE, e, n, t), o
				}, e.prototype.Qr = function(e, t, n, r, i) {
					var o = this,
						a = n.filter(function(e) {
							return e.type === t
						});
					a.sort(this.qr.bind(this)), a.forEach(function(t) {
						var n = o.Ur(t, i);
						r.forEach(function(r) {
							r.respondsTo(t.type) && e.push(r.createEvent(n, o.mr))
						})
					})
				}, e.prototype.Ur = function(e, t) {
					return "value" === e.type || "child_removed" === e.type ? e : (e.prevName = t.getPredecessorChildName(e.childName, e.snapshotNode, this.me), e)
				}, e.prototype.qr = function(e, t) {
					if (null == e.childName || null == t.childName) throw o.assertionError("Should only compare child_ events.");
					var n = new r.NamedNode(e.childName, e.snapshotNode),
						i = new r.NamedNode(t.childName, t.snapshotNode);
					return this.me.compare(n, i)
				}, e
			}();
		t.EventGenerator = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(0),
			o = n(2),
			a = n(96),
			s = n(3),
			u = n(4),
			l = function() {
				function e() {
					this.Br = a.CompoundWrite.Empty, this.Hr = [], this.Gr = -1
				}
				return e.prototype.childWrites = function(e) {
					return new h(e, this)
				}, e.prototype.addOverwrite = function(e, t, n, r) {
					i.assert(n > this.Gr, "Stacking an older write on top of newer ones"), void 0 === r && (r = !0), this.Hr.push({
						path: e,
						snap: t,
						writeId: n,
						visible: r
					}), r && (this.Br = this.Br.addWrite(e, t)), this.Gr = n
				}, e.prototype.addMerge = function(e, t, n) {
					i.assert(n > this.Gr, "Stacking an older merge on top of newer ones"), this.Hr.push({
						path: e,
						children: t,
						writeId: n,
						visible: !0
					}), this.Br = this.Br.addWrites(e, t), this.Gr = n
				}, e.prototype.getWrite = function(e) {
					for (var t = 0; t < this.Hr.length; t++) {
						var n = this.Hr[t];
						if (n.writeId === e) return n
					}
					return null
				}, e.prototype.removeWrite = function(e) {
					var t = this,
						n = this.Hr.findIndex(function(t) {
							return t.writeId === e
						});
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
							r.forEach(h, function(e) {
								t.Br = t.Br.removeWrite(o.path.child(e))
							})
						}
						return !0
					}
					return !1
				}, e.prototype.getCompleteWriteData = function(e) {
					return this.Br.getCompleteNode(e)
				}, e.prototype.calcCompleteEventCache = function(t, n, r, i) {
					if (r || i) {
						var a = this.Br.childCompoundWrite(t);
						if (!i && a.isEmpty()) return n;
						if (i || null != n || a.hasCompleteWrite(o.Path.Empty)) {
							var s = function(e) {
									return (e.visible || i) && (!r || !~r.indexOf(e.writeId)) && (e.path.contains(t) || t.contains(e.path))
								},
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
					if (null != n || p.hasCompleteWrite(o.Path.Empty)) {
						var h = n || u.ChildrenNode.EMPTY_NODE;
						return p.apply(h)
					}
					return null
				}, e.prototype.calcCompleteEventChildren = function(e, t) {
					var n = u.ChildrenNode.EMPTY_NODE,
						r = this.Br.getCompleteNode(e);
					if (r) return r.isLeafNode() || r.forEachChild(s.PRIORITY_INDEX, function(e, t) {
						n = n.updateImmediateChild(e, t)
					}), n;
					if (t) {
						var i = this.Br.childCompoundWrite(e);
						return t.forEachChild(s.PRIORITY_INDEX, function(e, t) {
							var r = i.childCompoundWrite(new o.Path(e)).apply(t);
							n = n.updateImmediateChild(e, r)
						}), i.getCompleteChildren().forEach(function(e) {
							n = n.updateImmediateChild(e.name, e.node)
						}), n
					}
					return this.Br.childCompoundWrite(e).getCompleteChildren().forEach(function(e) {
						n = n.updateImmediateChild(e.name, e.node)
					}), n
				}, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n, r) {
					i.assert(n || r, "Either existingEventSnap or existingServerSnap must exist");
					var o = e.child(t);
					if (this.Br.hasCompleteWrite(o)) return null;
					var a = this.Br.childCompoundWrite(o);
					return a.isEmpty() ? r.getChild(t) : a.apply(r.getChild(t))
				}, e.prototype.calcCompleteChild = function(e, t, n) {
					var r = e.child(t),
						i = this.Br.getCompleteNode(r);
					return null != i ? i : n.isCompleteForChild(t) ? this.Br.childCompoundWrite(r).apply(n.getNode().getImmediateChild(t)) : null
				}, e.prototype.shadowingWrite = function(e) {
					return this.Br.getCompleteNode(e)
				}, e.prototype.calcIndexedSlice = function(e, t, n, r, i, a) {
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
				}, e.prototype.Kr = function(e, t) {
					return e.snap ? e.path.contains(t) : !!r.findKey(e.children, function(n, r) {
						return e.path.child(r).contains(t)
					})
				}, e.prototype.Yr = function() {
					this.Br = e.Xr(this.Hr, e.zr, o.Path.Empty), this.Hr.length > 0 ? this.Gr = this.Hr[this.Hr.length - 1].writeId : this.Gr = -1
				}, e.zr = function(e) {
					return e.visible
				}, e.Xr = function(e, t, n) {
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
			function e(e, t) {
				this.Jr = e, this.$r = t
			}
			return e.prototype.calcCompleteEventCache = function(e, t, n) {
				return this.$r.calcCompleteEventCache(this.Jr, e, t, n)
			}, e.prototype.calcCompleteEventChildren = function(e) {
				return this.$r.calcCompleteEventChildren(this.Jr, e)
			}, e.prototype.calcEventCacheAfterServerOverwrite = function(e, t, n) {
				return this.$r.calcEventCacheAfterServerOverwrite(this.Jr, e, t, n)
			}, e.prototype.shadowingWrite = function(e) {
				return this.$r.shadowingWrite(this.Jr.child(e))
			}, e.prototype.calcIndexedSlice = function(e, t, n, r, i) {
				return this.$r.calcIndexedSlice(this.Jr, e, t, n, r, i)
			}, e.prototype.calcCompleteChild = function(e, t) {
				return this.$r.calcCompleteChild(this.Jr, e, t)
			}, e.prototype.child = function(t) {
				return new e(this.Jr.child(t), this.$r)
			}, e
		}();
		t.WriteTreeRef = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(23),
			i = n(2),
			o = n(0),
			a = n(5),
			s = n(3),
			u = n(0),
			l = function() {
				function e(e) {
					this.$r = e
				}
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
				}, e.prototype.addWrites = function(e, t) {
					var n = this;
					return o.forEach(t, function(t, r) {
						n = n.addWrite(e.child(t), r)
					}), n
				}, e.prototype.removeWrite = function(t) {
					return t.isEmpty() ? e.Empty : new e(this.$r.setTree(t, r.ImmutableTree.Empty))
				}, e.prototype.hasCompleteWrite = function(e) {
					return null != this.getCompleteNode(e)
				}, e.prototype.getCompleteNode = function(e) {
					var t = this.$r.findRootMostValueAndPath(e);
					return null != t ? this.$r.get(t.path).getChild(i.Path.relativePath(t.path, e)) : null
				}, e.prototype.getCompleteChildren = function() {
					var e = [],
						t = this.$r.value;
					return null != t ? t.isLeafNode() || t.forEachChild(s.PRIORITY_INDEX, function(t, n) {
						e.push(new a.NamedNode(t, n))
					}) : this.$r.children.inorderTraversal(function(t, n) {
						null != n.value && e.push(new a.NamedNode(t, n.value))
					}), e
				}, e.prototype.childCompoundWrite = function(t) {
					if (t.isEmpty()) return this;
					var n = this.getCompleteNode(t);
					return new e(null != n ? new r.ImmutableTree(n) : this.$r.subtree(t))
				}, e.prototype.isEmpty = function() {
					return this.$r.isEmpty()
				}, e.prototype.apply = function(t) {
					return e.Zr(i.Path.Empty, this.$r, t)
				}, e.Empty = new e(new r.ImmutableTree(null)), e.Zr = function(t, n, r) {
					if (null != n.value) return r.updateChild(t, n.value);
					var i = null;
					return n.children.inorderTraversal(function(n, o) {
						".priority" === n ? (u.assert(null !== o.value, "Priority writes must always be leaf nodes"), i = o.value) : r = e.Zr(t.child(n), o, r)
					}), r.getChild(t).isEmpty() || null === i || (r = r.updateChild(t.child(".priority"), i)), r
				}, e
			}();
		t.CompoundWrite = l
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(4),
			i = function() {
				function e() {
					this.ei = r.ChildrenNode.EMPTY_NODE
				}
				return e.prototype.getNode = function(e) {
					return this.ei.getChild(e)
				}, e.prototype.updateSnapshot = function(e, t) {
					this.ei = this.ei.updateChild(e, t)
				}, e
			}();
		t.SnapshotHolder = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = function() {
				function e(e) {
					this.ti = e
				}
				return e.prototype.getToken = function(e) {
					return this.ti.INTERNAL.getToken(e).then(null, function(e) {
						return e && "auth/token-not-initialized" === e.code ? (r.log("Got auth/token-not-initialized error.  Treating as null token."), null) : Promise.reject(e)
					})
				}, e.prototype.addTokenChangeListener = function(e) {
					this.ti.INTERNAL.addAuthTokenListener(e)
				}, e.prototype.removeTokenChangeListener = function(e) {
					this.ti.INTERNAL.removeAuthTokenListener(e)
				}, e.prototype.notifyForInvalidToken = function() {
					var e = 'Provided authentication credentials for the app named "' + this.ti.name + '" are invalid. This usually indicates your app was not initialized correctly. ';
					"credential" in this.ti.options ? e += 'Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : "serviceAccount" in this.ti.options ? e += 'Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.' : e += 'Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.', r.warn(e)
				}, e
			}();
		t.AuthTokenProvider = i
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(0),
			o = function() {
				function e() {
					this.ni = {}
				}
				return e.prototype.incrementCounter = function(e, t) {
					void 0 === t && (t = 1), i.contains(this.ni, e) || (this.ni[e] = 0), this.ni[e] += t
				}, e.prototype.get = function() {
					return r.deepCopy(this.ni)
				}, e
			}();
		t.StatsCollection = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				return e.prototype.includeStat = function(e) {
					this.ri[e] = !0
				}, e.prototype.ii = function() {
					var e = this,
						t = this.G.get(),
						n = {},
						o = !1;
					r.forEach(t, function(t, i) {
						i > 0 && r.contains(e.ri, t) && (n[t] = i, o = !0)
					}), o && this.Z.reportStats(n), i.setTimeoutNonBlocking(this.ii.bind(this), Math.floor(2 * Math.random() * 3e5))
				}, e
			}();
		t.StatsReporter = u
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = function() {
				function e() {
					this.oi = [], this.ai = 0
				}
				return e.prototype.queueEvents = function(e) {
					for (var t = null, n = 0; n < e.length; n++) {
						var r = e[n],
							i = r.getPath();
						null === t || i.equals(t.getPath()) || (this.oi.push(t), t = null), null === t && (t = new o(i)), t.add(r)
					}
					t && this.oi.push(t)
				}, e.prototype.raiseEventsAtPath = function(e, t) {
					this.queueEvents(t), this.si(function(t) {
						return t.equals(e)
					})
				}, e.prototype.raiseEventsForChangedPath = function(e, t) {
					this.queueEvents(t), this.si(function(t) {
						return t.contains(e) || e.contains(t)
					})
				}, e.prototype.si = function(e) {
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
			function e(e) {
				this.Oe = e, this.ui = []
			}
			return e.prototype.add = function(e) {
				this.ui.push(e)
			}, e.prototype.raise = function() {
				for (var e = 0; e < this.ui.length; e++) {
					var t = this.ui[e];
					if (null !== t) {
						this.ui[e] = null;
						var n = t.getEventRunner();
						r.logger && r.log("event: " + t), r.exceptionGuard(n)
					}
				}
			}, e.prototype.getPath = function() {
				return this.Oe
			}, e
		}();
		t.EventList = o
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				return r(t, e), t.getInstance = function() {
					return new t
				}, t.prototype.getInitialEvent = function(e) {
					return o.assert("visible" === e, "Unknown event type: " + e), [this.at]
				}, t
			}(i.EventEmitter);
		t.VisibilityMonitor = a
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(0),
			o = n(51),
			a = n(0),
			s = function(e) {
				function t() {
					var t = e.call(this, ["online"]) || this;
					return t.li = !0, "undefined" == typeof window || void 0 === window.addEventListener || a.isMobileCordova() || (window.addEventListener("online", function() {
						t.li || (t.li = !0, t.trigger("online", !0))
					}, !1), window.addEventListener("offline", function() {
						t.li && (t.li = !1, t.trigger("online", !1))
					}, !1)), t
				}
				return r(t, e), t.getInstance = function() {
					return new t
				}, t.prototype.getInitialEvent = function(e) {
					return i.assert("online" === e, "Unknown event type: " + e), [this.li]
				}, t.prototype.currentlyOnline = function() {
					return this.li
				}, t
			}(o.EventEmitter);
		t.OnlineMonitor = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(53),
			i = n(54),
			o = n(1),
			a = function() {
				function e(e) {
					this.hi(e)
				}
				return Object.defineProperty(e, "ALL_TRANSPORTS", {
					get: function() {
						return [r.BrowserPollConnection, i.WebSocketConnection]
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.hi = function(t) {
					var n = i.WebSocketConnection && i.WebSocketConnection.isAvailable(),
						r = n && !i.WebSocketConnection.previouslyFailed();
					if (t.webSocketOnly && (n || o.warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."), r = !0), r) this.ci = [i.WebSocketConnection];
					else {
						var a = this.ci = [];
						o.each(e.ALL_TRANSPORTS, function(e, t) {
							t && t.isAvailable() && a.push(t)
						})
					}
				}, e.prototype.initialTransport = function() {
					if (this.ci.length > 0) return this.ci[0];
					throw Error("No transports available")
				}, e.prototype.upgradeTransport = function() {
					return this.ci.length > 1 ? this.ci[1] : null
				}, e
			}();
		t.TransportManager = a
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(1),
			i = function() {
				function e(e) {
					this.Ut = e, this.pendingResponses = [], this.currentResponseNum = 0, this.closeAfterResponse = -1, this.onClose = null
				}
				return e.prototype.closeAfter = function(e, t) {
					this.closeAfterResponse = e, this.onClose = t, this.closeAfterResponse < this.currentResponseNum && (this.onClose(), this.onClose = null)
				}, e.prototype.handleResponse = function(e, t) {
					var n = this;
					this.pendingResponses[e] = t;
					for (var i = this; this.pendingResponses[this.currentResponseNum] && "break" !== function() {
							var e = i.pendingResponses[i.currentResponseNum];
							delete i.pendingResponses[i.currentResponseNum];
							for (var t = 0; t < e.length; ++t) ! function(t) {
								e[t] && r.exceptionGuard(function() {
									n.Ut(e[t])
								})
							}(t);
							if (i.currentResponseNum === i.closeAfterResponse) return i.onClose && (i.onClose(), i.onClose = null), "break";
							i.currentResponseNum++
						}(););
				}, e
			}();
		t.PacketReceiver = i
	}, function(e, t, n) {
		"use strict";
		var r = this && this.__extends || function() {
			var e = Object.setPrototypeOf || {
				__proto__: []
			}
			instanceof Array && function(e, t) {
				e.__proto__ = t
			} || function(e, t) {
				for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
			};
			return function(t, n) {
				function r() {
					this.constructor = t
				}
				e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
			}
		}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var i = n(0),
			o = n(1),
			a = n(0),
			s = n(0),
			u = n(0),
			l = n(55),
			h = function(e) {
				function t(t, n, r) {
					var i = e.call(this) || this;
					return i.H = t, i.ee = n, i.Ke = r, i.de = o.logWrapper("p:rest:"), i.Je = {}, i
				}
				return r(t, e), t.prototype.reportStats = function(e) {
					throw Error("Method not implemented.")
				}, t.pi = function(e, t) {
					return void 0 !== t ? "tag$" + t : (i.assert(e.getQueryParams().isDefault(), "should have a tag if it's not a default query."), "" + e.path)
				}, t.prototype.listen = function(e, n, r, i) {
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
								if (h.status >= 200 && h.status < 300) {
									try {
										e = a.jsonEval(h.responseText)
									} catch (e) {
										o.warn("Failed to parse JSON response for " + l + ": " + h.responseText)
									}
									n(null, e)
								} else 401 !== h.status && 404 !== h.status && o.warn("Got unsuccessful REST response for " + l + " Status: " + h.status), n(h.status);
								n = null
							}
						}, h.open("GET", l, !0), h.send()
					})
				}, t
			}(l.ServerActions);
		t.ReadonlyRestClient = h
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
				function e() {
					this.fi = !1, this._i = !1, this.yi = !1, this.vi = !1, this.gi = !1, this.mi = 0, this.Ci = "", this.Ei = null, this.Ni = "", this.Pi = null, this.bi = "", this.me = a.PRIORITY_INDEX
				}
				return e.prototype.hasStart = function() {
					return this._i
				}, e.prototype.isViewFromLeft = function() {
					return "" === this.Ci ? this._i : this.Ci === e.Si.VIEW_FROM_LEFT
				}, e.prototype.getIndexStartValue = function() {
					return r.assert(this._i, "Only valid if start has been set"), this.Ei
				}, e.prototype.getIndexStartName = function() {
					return r.assert(this._i, "Only valid if start has been set"), this.yi ? this.Ni : i.MIN_NAME
				}, e.prototype.hasEnd = function() {
					return this.vi
				}, e.prototype.getIndexEndValue = function() {
					return r.assert(this.vi, "Only valid if end has been set"), this.Pi
				}, e.prototype.getIndexEndName = function() {
					return r.assert(this.vi, "Only valid if end has been set"), this.gi ? this.bi : i.MAX_NAME
				}, e.prototype.hasLimit = function() {
					return this.fi
				}, e.prototype.hasAnchoredLimit = function() {
					return this.fi && "" !== this.Ci
				}, e.prototype.getLimit = function() {
					return r.assert(this.fi, "Only valid if limit has been set"), this.mi
				}, e.prototype.getIndex = function() {
					return this.me
				}, e.prototype.Ti = function() {
					var t = new e;
					return t.fi = this.fi, t.mi = this.mi, t._i = this._i, t.Ei = this.Ei, t.yi = this.yi, t.Ni = this.Ni, t.vi = this.vi, t.Pi = this.Pi, t.gi = this.gi, t.bi = this.bi, t.me = this.me, t.Ci = this.Ci, t
				}, e.prototype.limit = function(e) {
					var t = this.Ti();
					return t.fi = !0, t.mi = e, t.Ci = "", t
				}, e.prototype.limitToFirst = function(t) {
					var n = this.Ti();
					return n.fi = !0, n.mi = t, n.Ci = e.Si.VIEW_FROM_LEFT, n
				}, e.prototype.limitToLast = function(t) {
					var n = this.Ti();
					return n.fi = !0, n.mi = t, n.Ci = e.Si.VIEW_FROM_RIGHT, n
				}, e.prototype.startAt = function(e, t) {
					var n = this.Ti();
					return n._i = !0, void 0 === e && (e = null), n.Ei = e, null != t ? (n.yi = !0, n.Ni = t) : (n.yi = !1, n.Ni = ""), n
				}, e.prototype.endAt = function(e, t) {
					var n = this.Ti();
					return n.vi = !0, void 0 === e && (e = null), n.Pi = e, void 0 !== t ? (n.gi = !0, n.bi = t) : (n.gi = !1, n.bi = ""), n
				}, e.prototype.orderBy = function(e) {
					var t = this.Ti();
					return t.me = e, t
				}, e.prototype.getQueryObject = function() {
					var t = e.Si,
						n = {};
					if (this._i && (n[t.INDEX_START_VALUE] = this.Ei, this.yi && (n[t.INDEX_START_NAME] = this.Ni)), this.vi && (n[t.INDEX_END_VALUE] = this.Pi, this.gi && (n[t.INDEX_END_NAME] = this.bi)), this.fi) {
						n[t.LIMIT] = this.mi;
						var r = this.Ci;
						"" === r && (r = this.isViewFromLeft() ? t.VIEW_FROM_LEFT : t.VIEW_FROM_RIGHT), n[t.VIEW_FROM] = r
					}
					return this.me !== a.PRIORITY_INDEX && (n[t.INDEX] = "" + this.me), n
				}, e.prototype.loadsAllData = function() {
					return !(this._i || this.vi || this.fi)
				}, e.prototype.isDefault = function() {
					return this.loadsAllData() && this.me == a.PRIORITY_INDEX
				}, e.prototype.getNodeFilter = function() {
					return this.loadsAllData() ? new l.IndexedFilter(this.getIndex()) : this.hasLimit() ? new h.LimitedFilter(this) : new c.RangedFilter(this)
				}, e.prototype.toRestQueryStringParameters = function() {
					var t = e.wi,
						n = {};
					if (this.isDefault()) return n;
					var i;
					return this.me === a.PRIORITY_INDEX ? i = t.PRIORITY_INDEX : this.me === s.VALUE_INDEX ? i = t.VALUE_INDEX : this.me === o.KEY_INDEX ? i = t.KEY_INDEX : (r.assert(this.me instanceof u.PathIndex, "Unrecognized index type!"), i = "" + this.me), n[t.ORDER_BY] = p.stringify(i), this._i && (n[t.START_AT] = p.stringify(this.Ei), this.yi && (n[t.START_AT] += "," + p.stringify(this.Ni))), this.vi && (n[t.END_AT] = p.stringify(this.Pi), this.gi && (n[t.END_AT] += "," + p.stringify(this.bi))), this.fi && (this.isViewFromLeft() ? n[t.LIMIT_TO_FIRST] = this.mi : n[t.LIMIT_TO_LAST] = this.mi), n
				}, e.Si = {
					INDEX_START_VALUE: "sp",
					INDEX_START_NAME: "sn",
					INDEX_END_VALUE: "ep",
					INDEX_END_NAME: "en",
					LIMIT: "l",
					VIEW_FROM: "vf",
					VIEW_FROM_LEFT: "l",
					VIEW_FROM_RIGHT: "r",
					INDEX: "i"
				}, e.wi = {
					ORDER_BY: "orderBy",
					PRIORITY_INDEX: "$priority",
					VALUE_INDEX: "$value",
					KEY_INDEX: "$key",
					START_AT: "startAt",
					END_AT: "endAt",
					LIMIT_TO_FIRST: "limitToFirst",
					LIMIT_TO_LAST: "limitToLast"
				}, e.DEFAULT = new e, e
			}();
		t.QueryParams = d
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(56),
			i = n(4),
			o = n(5),
			a = n(0),
			s = n(9),
			u = function() {
				function e(e) {
					this.Ii = new r.RangedFilter(e), this.me = e.getIndex(), this.mi = e.getLimit(), this.Ri = !e.isViewFromLeft()
				}
				return e.prototype.updateChild = function(e, t, n, r, a, s) {
					return this.Ii.matches(new o.NamedNode(t, n)) || (n = i.ChildrenNode.EMPTY_NODE), e.getImmediateChild(t).equals(n) ? e : e.numChildren() < this.mi ? this.Ii.getIndexedFilter().updateChild(e, t, n, r, a, s) : this.Oi(e, t, n, a, s)
				}, e.prototype.updateFullNode = function(e, t, n) {
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
					} else {
						r = t.withIndex(this.me), r = r.updatePriority(i.ChildrenNode.EMPTY_NODE);
						var l = void 0,
							h = void 0,
							c = void 0,
							o = void 0;
						if (this.Ri) {
							o = r.getReverseIterator(this.me), l = this.Ii.getEndPost(), h = this.Ii.getStartPost();
							var p = this.me.getCompare();
							c = function(e, t) {
								return p(t, e)
							}
						} else o = r.getIterator(this.me), l = this.Ii.getStartPost(), h = this.Ii.getEndPost(), c = this.me.getCompare();
						for (var a = 0, d = !1; o.hasNext();) {
							var s = o.getNext();
							!d && c(l, s) <= 0 && (d = !0);
							var u = d && a < this.mi && c(s, h) <= 0;
							u ? a++ : r = r.updateImmediateChild(s.name, i.ChildrenNode.EMPTY_NODE)
						}
					}
					return this.Ii.getIndexedFilter().updateFullNode(e, r, n)
				}, e.prototype.updatePriority = function(e, t) {
					return e
				}, e.prototype.filtersNodes = function() {
					return !0
				}, e.prototype.getIndexedFilter = function() {
					return this.Ii.getIndexedFilter()
				}, e.prototype.getIndex = function() {
					return this.me
				}, e.prototype.Oi = function(e, t, n, r, u) {
					var l;
					if (this.Ri) {
						var h = this.me.getCompare();
						l = function(e, t) {
							return h(t, e)
						}
					} else l = this.me.getCompare();
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
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
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
		! function(e) {
			e[e.RUN = 0] = "RUN", e[e.SENT = 1] = "SENT", e[e.COMPLETED = 2] = "COMPLETED", e[e.SENT_NEEDS_ABORT = 3] = "SENT_NEEDS_ABORT", e[e.NEEDS_ABORT = 4] = "NEEDS_ABORT"
		}(r = t.TransactionStatus || (t.TransactionStatus = {})), y.Repo.Ai = 25, y.Repo.prototype.ie = function() {
			this.Di = new u.Tree
		}, y.Repo.prototype.startTransaction = function(e, t, n, s) {
			this.de("transaction on " + e);
			var u = function() {},
				y = new o.Reference(this, e);
			y.on("value", u);
			var v = function() {
					y.off("value", u)
				},
				g = {
					path: e,
					update: t,
					onComplete: n,
					status: null,
					order: h.LUIDGenerator(),
					applyLocally: s,
					retryCount: 0,
					unwatcher: v,
					abortReason: null,
					currentWriteId: null,
					currentInputSnapshot: null,
					currentOutputSnapshotRaw: null,
					currentOutputSnapshotResolved: null
				},
				m = this.Mi(e);
			g.currentInputSnapshot = m;
			var C = g.update(m.val());
			if (void 0 === C) {
				if (g.unwatcher(), g.currentOutputSnapshotRaw = null, g.currentOutputSnapshotResolved = null, g.onComplete) {
					var E = new a.DataSnapshot(g.currentInputSnapshot, new o.Reference(this, g.path), l.PRIORITY_INDEX);
					g.onComplete(null, !1, E)
				}
			} else {
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
		}, y.Repo.prototype.Mi = function(e, t) {
			return this.ue.calcCompleteEventCache(e, t) || _.ChildrenNode.EMPTY_NODE
		}, y.Repo.prototype.Li = function(e) {
			var t = this;
			if (void 0 === e && (e = this.Di), e || this.Fi(e), null !== e.getValue()) {
				var n = this.xi(e);
				i.assert(n.length > 0, "Sending zero length transaction queue"), n.every(function(e) {
					return e.status === r.RUN
				}) && this.ki(e.path(), n)
			} else e.hasChildren() && e.forEachChild(function(e) {
				t.Li(e)
			})
		}, y.Repo.prototype.ki = function(e, t) {
			for (var n = this, u = t.map(function(e) {
					return e.currentWriteId
				}), c = this.Mi(e, u), p = c, d = c.hash(), f = 0; f < t.length; f++) {
				var _ = t[f];
				i.assert(_.status === r.RUN, "tryToSendTransactionQueue_: items in queue should all be run."), _.status = r.SENT, _.retryCount++;
				var y = s.Path.relativePath(e, _.path);
				p = p.updateChild(y, _.currentOutputSnapshotRaw)
			}
			var v = p.val(!0),
				g = e;
			this.Z.put("" + g, v, function(i) {
				n.de("transaction put response", {
					path: "" + g,
					status: i
				});
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
				} else {
					if ("datastale" === i)
						for (var c = 0; c < t.length; c++) t[c].status === r.SENT_NEEDS_ABORT ? t[c].status = r.NEEDS_ABORT : t[c].status = r.RUN;
					else {
						h.warn("transaction at " + g + " failed: " + i);
						for (var c = 0; c < t.length; c++) t[c].status = r.NEEDS_ABORT, t[c].abortReason = i
					}
					n.le(e)
				}
			}, d)
		}, y.Repo.prototype.le = function(e) {
			var t = this.Wi(e),
				n = t.path(),
				r = this.xi(t);
			return this.ji(r, n), n
		}, y.Repo.prototype.ji = function(e, t) {
			if (0 !== e.length) {
				for (var n = [], u = [], _ = e.filter(function(e) {
						return e.status === r.RUN
					}), v = _.map(function(e) {
						return e.currentWriteId
					}), g = 0; g < e.length; g++) {
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
							} else E = !0, N = "nodata", u = u.concat(this.ue.ackUserWrite(m.currentWriteId, !0))
						}
					if (this.K.raiseEventsForChangedPath(t, u), u = [], E && (e[g].status = r.COMPLETED, function(e) {
							setTimeout(e, Math.floor(0))
						}(e[g].unwatcher), e[g].onComplete))
						if ("nodata" === N) {
							var O = new o.Reference(this, e[g].path),
								A = e[g].currentInputSnapshot,
								D = new a.DataSnapshot(A, O, l.PRIORITY_INDEX);
							n.push(e[g].onComplete.bind(null, null, !1, D))
						} else n.push(e[g].onComplete.bind(null, Error(N), !1, null))
				}
				this.Fi(this.Di);
				for (var g = 0; g < n.length; g++) h.exceptionGuard(n[g]);
				this.Li()
			}
		}, y.Repo.prototype.Wi = function(e) {
			for (var t, n = this.Di; null !== (t = e.getFront()) && null === n.getValue();) n = n.subTree(t), e = e.popFront();
			return n
		}, y.Repo.prototype.xi = function(e) {
			var t = [];
			return this.Vi(e, t), t.sort(function(e, t) {
				return e.order - t.order
			}), t
		}, y.Repo.prototype.Vi = function(e, t) {
			var n = this,
				r = e.getValue();
			if (null !== r)
				for (var i = 0; i < r.length; i++) t.push(r[i]);
			e.forEachChild(function(e) {
				n.Vi(e, t)
			})
		}, y.Repo.prototype.Fi = function(e) {
			var t = this,
				n = e.getValue();
			if (n) {
				for (var i = 0, o = 0; o < n.length; o++) n[o].status !== r.COMPLETED && (n[i] = n[o], i++);
				n.length = i, e.setValue(n.length > 0 ? n : null)
			}
			e.forEachChild(function(e) {
				t.Fi(e)
			})
		}, y.Repo.prototype.fe = function(e) {
			var t = this,
				n = this.Wi(e).path(),
				r = this.Di.subTree(e);
			return r.forEachAncestor(function(e) {
				t.Qi(e)
			}), this.Qi(r), r.forEachDescendant(function(e) {
				t.Qi(e)
			}), n
		}, y.Repo.prototype.Qi = function(e) {
			var t = e.getValue();
			if (null !== t) {
				for (var n = [], o = [], a = -1, s = 0; s < t.length; s++) t[s].status === r.SENT_NEEDS_ABORT || (t[s].status === r.SENT ? (i.assert(a === s - 1, "All SENT items should be at beginning of queue."), a = s, t[s].status = r.SENT_NEEDS_ABORT, t[s].abortReason = "set") : (i.assert(t[s].status === r.RUN, "Unexpected transaction status in abort"), t[s].unwatcher(), o = o.concat(this.ue.ackUserWrite(t[s].currentWriteId, !0)), t[s].onComplete && n.push(t[s].onComplete.bind(null, Error("set"), !1, null)))); - 1 === a ? e.setValue(null) : t.length = a + 1, this.K.raiseEventsForChangedPath(e.path(), o);
				for (var s = 0; s < n.length; s++) h.exceptionGuard(n[s])
			}
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(0),
			i = n(2),
			o = n(0),
			a = function() {
				function e() {
					this.children = {}, this.childCount = 0, this.value = null
				}
				return e
			}();
		t.TreeNode = a;
		var s = function() {
			function e(e, t, n) {
				void 0 === e && (e = ""), void 0 === t && (t = null), void 0 === n && (n = new a), this.qi = e, this.Ui = t, this._e = n
			}
			return e.prototype.subTree = function(t) {
				for (var n, r = t instanceof i.Path ? t : new i.Path(t), s = this; null !== (n = r.getFront());) s = new e(n, s, o.safeGet(s._e.children, n) || new a), r = r.popFront();
				return s
			}, e.prototype.getValue = function() {
				return this._e.value
			}, e.prototype.setValue = function(e) {
				r.assert(void 0 !== e, "Cannot set value to undefined"), this._e.value = e, this.Bi()
			}, e.prototype.clear = function() {
				this._e.value = null, this._e.children = {}, this._e.childCount = 0, this.Bi()
			}, e.prototype.hasChildren = function() {
				return this._e.childCount > 0
			}, e.prototype.isEmpty = function() {
				return null === this.getValue() && !this.hasChildren()
			}, e.prototype.forEachChild = function(t) {
				var n = this;
				o.forEach(this._e.children, function(r, i) {
					t(new e(r, n, i))
				})
			}, e.prototype.forEachDescendant = function(e, t, n) {
				t && !n && e(this), this.forEachChild(function(t) {
					t.forEachDescendant(e, !0, n)
				}), t && n && e(this)
			}, e.prototype.forEachAncestor = function(e, t) {
				for (var n = t ? this : this.parent(); null !== n;) {
					if (e(n)) return !0;
					n = n.parent()
				}
				return !1
			}, e.prototype.forEachImmediateDescendantWithValue = function(e) {
				this.forEachChild(function(t) {
					null !== t.getValue() ? e(t) : t.forEachImmediateDescendantWithValue(e)
				})
			}, e.prototype.path = function() {
				return new i.Path(null === this.Ui ? this.qi : this.Ui.path() + "/" + this.qi)
			}, e.prototype.name = function() {
				return this.qi
			}, e.prototype.parent = function() {
				return this.Ui
			}, e.prototype.Bi = function() {
				null !== this.Ui && this.Ui.Hi(this.qi, this)
			}, e.prototype.Hi = function(e, t) {
				var n = t.isEmpty(),
					r = o.contains(this._e.children, e);
				n && r ? (delete this._e.children[e], this._e.childCount--, this.Bi()) : n || r || (this._e.children[e] = t._e, this._e.childCount++, this.Bi())
			}, e
		}();
		t.Tree = s
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(54),
			i = n(53);
		t.forceLongPolling = function() {
			r.WebSocketConnection.forceDisallow(), i.BrowserPollConnection.forceAllow()
		}, t.forceWebSockets = function() {
			i.BrowserPollConnection.forceDisallow()
		}, t.isWebSocketsAvailable = function() {
			return r.WebSocketConnection.isAvailable()
		}, t.setSecurityDebugCallback = function(e, t) {
			e.repo.J.it = t
		}, t.stats = function(e, t) {
			e.repo.stats(t)
		}, t.statsIncrementCounter = function(e, t) {
			e.repo.statsIncrementCounter(t)
		}, t.dataUpdateCount = function(e) {
			return e.repo.dataUpdateCount
		}, t.interceptServerData = function(e, t) {
			return e.repo.he(t)
		}
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var r = n(34),
			i = n(50),
			o = n(26),
			a = n(52);
		t.DataConnection = i.PersistentConnection, i.PersistentConnection.prototype.simpleListen = function(e, t) {
			this.sendRequest("q", {
				p: e
			}, t)
		}, i.PersistentConnection.prototype.echo = function(e, t) {
			this.sendRequest("echo", {
				d: e
			}, t)
		}, t.RealTimeConnection = a.Connection, t.hijackHash = function(e) {
			var t = i.PersistentConnection.prototype.put;
			return i.PersistentConnection.prototype.put = function(n, r, i, o) {
					void 0 !== o && (o = e()), t.call(this, n, r, i, o)
				},
				function() {
					i.PersistentConnection.prototype.put = t
				}
		}, t.ConnectionTarget = r.RepoInfo, t.queryIdentifier = function(e) {
			return e.queryIdentifier()
		}, t.listens = function(e) {
			return e.repo.J.Je
		}, t.forceRestClient = function(e) {
			o.RepoManager.getInstance().forceRestClient(e)
		}
	}], [78])
} catch (e) {
	throw Error("Cannot instantiate firebase-database.js - be sure to load firebase-app.js first.")
}
/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
	webpackJsonpFirebase([3], {
		116: function(e, t, r) {
			r(117)
		},
		117: function(e, t, r) {
			"use strict";

			function n(e) {
				var t = new Uint8Array(e);
				return window.btoa(String.fromCharCode.apply(null, t))
			}

			function o(e) {
				var t = function(e) {
						return self && "ServiceWorkerGlobalScope" in self ? new A(e) : new k(e)
					},
					r = {
						Messaging: k
					};
				e.INTERNAL.registerService("messaging", t, r)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			});
			var i, s = r(0),
				a = {
					AVAILABLE_IN_WINDOW: "only-available-in-window",
					AVAILABLE_IN_SW: "only-available-in-sw",
					SHOULD_BE_INHERITED: "should-be-overriden",
					BAD_SENDER_ID: "bad-sender-id",
					INCORRECT_GCM_SENDER_ID: "incorrect-gcm-sender-id",
					PERMISSION_DEFAULT: "permission-default",
					PERMISSION_BLOCKED: "permission-blocked",
					UNSUPPORTED_BROWSER: "unsupported-browser",
					NOTIFICATIONS_BLOCKED: "notifications-blocked",
					FAILED_DEFAULT_REGISTRATION: "failed-serviceworker-registration",
					SW_REGISTRATION_EXPECTED: "sw-registration-expected",
					GET_SUBSCRIPTION_FAILED: "get-subscription-failed",
					INVALID_SAVED_TOKEN: "invalid-saved-token",
					SW_REG_REDUNDANT: "sw-reg-redundant",
					TOKEN_SUBSCRIBE_FAILED: "token-subscribe-failed",
					TOKEN_SUBSCRIBE_NO_TOKEN: "token-subscribe-no-token",
					TOKEN_SUBSCRIBE_NO_PUSH_SET: "token-subscribe-no-push-set",
					USE_SW_BEFORE_GET_TOKEN: "use-sw-before-get-token",
					INVALID_DELETE_TOKEN: "invalid-delete-token",
					DELETE_TOKEN_NOT_FOUND: "delete-token-not-found",
					DELETE_SCOPE_NOT_FOUND: "delete-scope-not-found",
					BG_HANDLER_FUNCTION_EXPECTED: "bg-handler-function-expected",
					NO_WINDOW_CLIENT_TO_MSG: "no-window-client-to-msg",
					UNABLE_TO_RESUBSCRIBE: "unable-to-resubscribe",
					NO_FCM_TOKEN_FOR_RESUBSCRIBE: "no-fcm-token-for-resubscribe",
					FAILED_TO_DELETE_TOKEN: "failed-to-delete-token",
					NO_SW_IN_REG: "no-sw-in-reg",
					BAD_SCOPE: "bad-scope",
					BAD_VAPID_KEY: "bad-vapid-key",
					BAD_SUBSCRIPTION: "bad-subscription",
					BAD_TOKEN: "bad-token",
					BAD_PUSH_SET: "bad-push-set",
					FAILED_DELETE_VAPID_KEY: "failed-delete-vapid-key"
				},
				c = (i = {}, i[a.AVAILABLE_IN_WINDOW] = "This method is available in a Window context.", i[a.AVAILABLE_IN_SW] = "This method is available in a service worker context.", i["should-be-overriden"] = "This method should be overriden by extended classes.", i["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", i["permission-default"] = "The required permissions were not granted and dismissed instead.", i["permission-blocked"] = "The required permissions were not granted and blocked instead.", i["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", i["notifications-blocked"] = "Notifications have been blocked.", i[a.FAILED_DEFAULT_REGISTRATION] = "We are unable to register the default service worker. {$browserErrorMessage}", i["sw-registration-expected"] = "A service worker registration was the expected input.", i["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", i["invalid-saved-token"] = "Unable to access details of the saved token.", i["sw-reg-redundant"] = "The service worker being used for push was made redundant.", i["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$message}", i["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", i["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", i["use-sw-before-get-token"] = "You must call useServiceWorker() before calling getToken() to ensure your service worker is used.", i["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", i["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", i["delete-scope-not-found"] = "The deletion attempt for service worker scope could not be performed as the scope was not found.", i["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", i["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", i["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$message}", i["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", i["failed-to-delete-token"] = "Unable to delete the currently saved token.", i["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", i["incorrect-gcm-sender-id"] = "Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.", i["bad-scope"] = "The service worker scope must be a string with at least one character.", i["bad-vapid-key"] = "The public VAPID key must be a string with at least one character.", i["bad-subscription"] = "The subscription must be a valid PushSubscription.", i["bad-token"] = "The FCM Token used for storage / lookup was not a valid token string.", i["bad-push-set"] = "The FCM push set used for storage / lookup was not not a valid push set string.", i["failed-delete-vapid-key"] = "The VAPID key could not be deleted.", i),
				u = {
					codes: a,
					map: c
				},
				_ = function(e) {
					return n(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
				},
				d = [4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110],
				f = {
					userVisibleOnly: !0,
					applicationServerKey: new Uint8Array(d)
				},
				h = {
					ENDPOINT: "https://fcm.googleapis.com",
					APPLICATION_SERVER_KEY: d,
					SUBSCRIPTION_OPTIONS: f
				},
				p = "fcm_token_object_Store",
				l = function() {
					function e() {
						this.e = new s.ErrorFactory("messaging", "Messaging", u.map), this.t = null
					}
					return e.prototype.r = function() {
						return this.t ? this.t : (this.t = new Promise(function(t, r) {
							var n = indexedDB.open(e.DB_NAME, 1);
							n.onerror = function(e) {
								r(e.target.error)
							}, n.onsuccess = function(e) {
								t(e.target.result)
							}, n.onupgradeneeded = function(e) {
								var t = e.target.result,
									r = t.createObjectStore(p, {
										keyPath: "swScope"
									});
								r.createIndex("fcmSenderId", "fcmSenderId", {
									unique: !1
								}), r.createIndex("fcmToken", "fcmToken", {
									unique: !0
								})
							}
						}), this.t)
					}, e.prototype.closeDatabase = function() {
						var e = this;
						return this.t ? this.t.then(function(t) {
							t.close(), e.t = null
						}) : Promise.resolve()
					}, e.prototype.getTokenDetailsFromToken = function(e) {
						return this.r().then(function(t) {
							return new Promise(function(r, n) {
								var o = t.transaction([p]),
									i = o.objectStore(p),
									s = i.index("fcmToken"),
									a = s.get(e);
								a.onerror = function(e) {
									n(e.target.error)
								}, a.onsuccess = function(e) {
									r(e.target.result)
								}
							})
						})
					}, e.prototype.n = function(e) {
						return this.r().then(function(t) {
							return new Promise(function(r, n) {
								var o = t.transaction([p]),
									i = o.objectStore(p),
									s = i.get(e);
								s.onerror = function(e) {
									n(e.target.error)
								}, s.onsuccess = function(e) {
									r(e.target.result)
								}
							})
						})
					}, e.prototype.o = function(e) {
						return this.r().then(function(t) {
							return new Promise(function(r, n) {
								var o = t.transaction([p]),
									i = o.objectStore(p),
									s = [],
									a = i.openCursor();
								a.onerror = function(e) {
									n(e.target.error)
								}, a.onsuccess = function(t) {
									var n = t.target.result;
									n ? (n.value.fcmSenderId === e && s.push(n.value), n.continue()) : r(s)
								}
							})
						})
					}, e.prototype.subscribeToFCM = function(e, t, r) {
						var n = this,
							o = _(t.getKey("p256dh")),
							i = _(t.getKey("auth")),
							s = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + o + "&encryption_auth=" + i;
						r && (s += "&pushSet=" + r);
						var a = new Headers;
						a.append("Content-Type", "application/x-www-form-urlencoded");
						var c = {
							method: "POST",
							headers: a,
							body: s
						};
						return fetch(h.ENDPOINT + "/fcm/connect/subscribe", c).then(function(e) {
							return e.json()
						}).then(function(e) {
							var t = e;
							if (t.error) {
								var r = t.error.message;
								throw n.e.create(u.codes.TOKEN_SUBSCRIBE_FAILED, {
									message: r
								})
							}
							if (!t.token) throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_TOKEN);
							if (!t.pushSet) throw n.e.create(u.codes.TOKEN_SUBSCRIBE_NO_PUSH_SET);
							return {
								token: t.token,
								pushSet: t.pushSet
							}
						})
					}, e.prototype.i = function(e, t) {
						return e.endpoint === t.endpoint && _(e.getKey("auth")) === t.auth && _(e.getKey("p256dh")) === t.p256dh
					}, e.prototype.s = function(e, t, r, n, o) {
						var i = {
							swScope: t.scope,
							endpoint: r.endpoint,
							auth: _(r.getKey("auth")),
							p256dh: _(r.getKey("p256dh")),
							fcmToken: n,
							fcmPushSet: o,
							fcmSenderId: e
						};
						return this.r().then(function(e) {
							return new Promise(function(t, r) {
								var n = e.transaction([p], "readwrite"),
									o = n.objectStore(p),
									s = o.put(i);
								s.onerror = function(e) {
									r(e.target.error)
								}, s.onsuccess = function(e) {
									t()
								}
							})
						})
					}, e.prototype.getSavedToken = function(e, t) {
						var r = this;
						return t instanceof ServiceWorkerRegistration ? "string" != typeof e || 0 === e.length ? Promise.reject(this.e.create(u.codes.BAD_SENDER_ID)) : this.o(e).then(function(r) {
							if (0 !== r.length) {
								var n = r.findIndex(function(r) {
									return t.scope === r.swScope && e === r.fcmSenderId
								});
								if (-1 !== n) return r[n]
							}
						}).then(function(e) {
							if (e) return t.pushManager.getSubscription().catch(function(e) {
								throw r.e.create(u.codes.GET_SUBSCRIPTION_FAILED)
							}).then(function(t) {
								if (t && r.i(t, e)) return e.fcmToken
							})
						}) : Promise.reject(this.e.create(u.codes.SW_REGISTRATION_EXPECTED))
					}, e.prototype.createToken = function(e, t) {
						var r = this;
						if ("string" != typeof e || 0 === e.length) return Promise.reject(this.e.create(u.codes.BAD_SENDER_ID));
						if (!(t instanceof ServiceWorkerRegistration)) return Promise.reject(this.e.create(u.codes.SW_REGISTRATION_EXPECTED));
						var n, o;
						return t.pushManager.getSubscription().then(function(e) {
							return e || t.pushManager.subscribe(h.SUBSCRIPTION_OPTIONS)
						}).then(function(t) {
							return n = t, r.subscribeToFCM(e, n)
						}).then(function(i) {
							return o = i, r.s(e, t, n, o.token, o.pushSet)
						}).then(function() {
							return o.token
						})
					}, e.prototype.deleteToken = function(e) {
						var t = this;
						return "string" != typeof e || 0 === e.length ? Promise.reject(this.e.create(u.codes.INVALID_DELETE_TOKEN)) : this.getTokenDetailsFromToken(e).then(function(e) {
							if (!e) throw t.e.create(u.codes.DELETE_TOKEN_NOT_FOUND);
							return t.r().then(function(r) {
								return new Promise(function(n, o) {
									var i = r.transaction([p], "readwrite"),
										s = i.objectStore(p),
										a = s.delete(e.swScope);
									a.onerror = function(e) {
										o(e.target.error)
									}, a.onsuccess = function(r) {
										if (0 === r.target.result) return void o(t.e.create(u.codes.FAILED_TO_DELETE_TOKEN));
										n(e)
									}
								})
							})
						})
					}, e
				}(),
				g = l,
				E = "messagingSenderId",
				T = function() {
					function e(e) {
						var t = this;
						if (this.e = new s.ErrorFactory("messaging", "Messaging", u.map), !e.options[E] || "string" != typeof e.options[E]) throw this.e.create(u.codes.BAD_SENDER_ID);
						this.a = e.options[E], this.c = new g, this.app = e, this.INTERNAL = {}, this.INTERNAL.delete = function() {
							return t.delete
						}
					}
					return e.prototype.getToken = function() {
						var e = this,
							t = this.u();
						return "granted" !== t ? "denied" === t ? Promise.reject(this.e.create(u.codes.NOTIFICATIONS_BLOCKED)) : Promise.resolve(null) : this._().then(function(t) {
							return e.c.getSavedToken(e.a, t).then(function(r) {
								return r || e.c.createToken(e.a, t)
							})
						})
					}, e.prototype.deleteToken = function(e) {
						var t = this;
						return this.c.deleteToken(e).then(function() {
							return t._().then(function(e) {
								if (e) return e.pushManager.getSubscription()
							}).then(function(e) {
								if (e) return e.unsubscribe()
							})
						})
					}, e.prototype._ = function() {
						throw this.e.create(u.codes.SHOULD_BE_INHERITED)
					}, e.prototype.requestPermission = function() {
						throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)
					}, e.prototype.useServiceWorker = function(e) {
						throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)
					}, e.prototype.onMessage = function(e, t, r) {
						throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)
					}, e.prototype.onTokenRefresh = function(e, t, r) {
						throw this.e.create(u.codes.AVAILABLE_IN_WINDOW)
					}, e.prototype.setBackgroundMessageHandler = function(e) {
						throw this.e.create(u.codes.AVAILABLE_IN_SW)
					}, e.prototype.delete = function() {
						return this.c.closeDatabase()
					}, e.prototype.u = function() {
						return Notification.permission
					}, e.prototype.getTokenManager = function() {
						return this.c
					}, e
				}(),
				S = T,
				b = {
					TYPE_OF_MSG: "firebase-messaging-msg-type",
					DATA: "firebase-messaging-msg-data"
				},
				v = {
					PUSH_MSG_RECEIVED: "push-msg-received",
					NOTIFICATION_CLICKED: "notification-clicked"
				},
				I = function(e, t) {
					return r = {}, r[b.TYPE_OF_MSG] = e, r[b.DATA] = t, r;
					var r
				},
				m = {
					PARAMS: b,
					TYPES_OF_MSG: v,
					createNewMsg: I
				},
				y = {
					path: "/firebase-messaging-sw.js",
					scope: "/firebase-cloud-messaging-push-scope"
				},
				N = this && this.__extends || function() {
					var e = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					};
					return function(t, r) {
						function n() {
							this.constructor = t
						}
						e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
					}
				}(),
				w = function(e) {
					function t(t) {
						var r = e.call(this, t) || this;
						return r.d, r.f, r.h = null, r.p = Object(s.createSubscribe)(function(e) {
							r.h = e
						}), r.l = null, r.g = Object(s.createSubscribe)(function(e) {
							r.l = e
						}), r.T(), r
					}
					return N(t, e), t.prototype.getToken = function() {
						var t = this;
						return this.S() ? this.b().then(function() {
							return e.prototype.getToken.call(t)
						}) : Promise.reject(this.e.create(u.codes.UNSUPPORTED_BROWSER))
					}, t.prototype.b = function() {
						var e = this;
						if (this.f) return this.f;
						var t = document.querySelector('link[rel="manifest"]');
						return this.f = t ? fetch(t.href).then(function(e) {
							return e.json()
						}).catch(function() {
							return Promise.resolve()
						}).then(function(t) {
							if (t && t.gcm_sender_id && "103953800507" !== t.gcm_sender_id) throw e.e.create(u.codes.INCORRECT_GCM_SENDER_ID)
						}) : Promise.resolve(), this.f
					}, t.prototype.requestPermission = function() {
						var e = this;
						return "granted" === Notification.permission ? Promise.resolve() : new Promise(function(t, r) {
							var n = function(n) {
									return "granted" === n ? t() : r("denied" === n ? e.e.create(u.codes.PERMISSION_BLOCKED) : e.e.create(u.codes.PERMISSION_DEFAULT))
								},
								o = Notification.requestPermission(function(e) {
									o || n(e)
								});
							o && o.then(n)
						})
					}, t.prototype.useServiceWorker = function(e) {
						if (!(e instanceof ServiceWorkerRegistration)) throw this.e.create(u.codes.SW_REGISTRATION_EXPECTED);
						if (void 0 !== this.d) throw this.e.create(u.codes.USE_SW_BEFORE_GET_TOKEN);
						this.d = e
					}, t.prototype.onMessage = function(e, t, r) {
						return this.p(e, t, r)
					}, t.prototype.onTokenRefresh = function(e, t, r) {
						return this.g(e, t, r)
					}, t.prototype.v = function(e) {
						var t = this,
							r = e.installing || e.waiting || e.active;
						return new Promise(function(n, o) {
							if (!r) return void o(t.e.create(u.codes.NO_SW_IN_REG));
							if ("activated" === r.state) return void n(e);
							if ("redundant" === r.state) return void o(t.e.create(u.codes.SW_REG_REDUNDANT));
							var i = function() {
								if ("activated" === r.state) n(e);
								else {
									if ("redundant" !== r.state) return;
									o(t.e.create(u.codes.SW_REG_REDUNDANT))
								}
								r.removeEventListener("statechange", i)
							};
							r.addEventListener("statechange", i)
						})
					}, t.prototype._ = function() {
						var e = this;
						return this.d ? this.v(this.d) : (this.d = null, navigator.serviceWorker.register(y.path, {
							scope: y.scope
						}).catch(function(t) {
							throw e.e.create(u.codes.FAILED_DEFAULT_REGISTRATION, {
								browserErrorMessage: t.message
							})
						}).then(function(t) {
							return e.v(t).then(function() {
								return e.d = t, t.update(), t
							})
						}))
					}, t.prototype.T = function() {
						var e = this;
						"serviceWorker" in navigator && navigator.serviceWorker.addEventListener("message", function(t) {
							if (t.data && t.data[m.PARAMS.TYPE_OF_MSG]) {
								var r = t.data;
								switch (r[m.PARAMS.TYPE_OF_MSG]) {
									case m.TYPES_OF_MSG.PUSH_MSG_RECEIVED:
									case m.TYPES_OF_MSG.NOTIFICATION_CLICKED:
										var n = r[m.PARAMS.DATA];
										e.h.next(n)
								}
							}
						}, !1)
					}, t.prototype.S = function() {
						return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
					}, t
				}(S),
				k = w,
				O = this && this.__extends || function() {
					var e = Object.setPrototypeOf || {
						__proto__: []
					}
					instanceof Array && function(e, t) {
						e.__proto__ = t
					} || function(e, t) {
						for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
					};
					return function(t, r) {
						function n() {
							this.constructor = t
						}
						e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
					}
				}(),
				D = function(e) {
					function t(t) {
						var r = e.call(this, t) || this;
						return self.addEventListener("push", function(e) {
							return r.I(e)
						}, !1), self.addEventListener("pushsubscriptionchange", function(e) {
							return r.m(e)
						}, !1), self.addEventListener("notificationclick", function(e) {
							return r.y(e)
						}, !1), r.N = null, r
					}
					return O(t, e), t.prototype.I = function(e) {
						var t, r = this;
						try {
							t = e.data.json()
						} catch (e) {
							return
						}
						var n = this.w().then(function(e) {
							if (e) {
								if (t.notification || r.N) return r.k(t)
							} else {
								var n = r.O(t);
								if (n) {
									var o = n.title || "";
									return self.registration.showNotification(o, n)
								}
								if (r.N) return r.N(t)
							}
						});
						e.waitUntil(n)
					}, t.prototype.m = function(e) {
						var t = this,
							r = this.getToken().then(function(e) {
								if (!e) throw t.e.create(u.codes.NO_FCM_TOKEN_FOR_RESUBSCRIBE);
								var r = null,
									n = t.getTokenManager();
								return n.getTokenDetailsFromToken(e).then(function(e) {
									if (!(r = e)) throw t.e.create(u.codes.INVALID_SAVED_TOKEN);
									return self.registration.pushManager.subscribe(h.SUBSCRIPTION_OPTIONS)
								}).then(function(e) {
									return n.subscribeToFCM(r.fcmSenderId, e, r.fcmPushSet)
								}).catch(function(e) {
									return n.deleteToken(r.fcmToken).then(function() {
										throw t.e.create(u.codes.UNABLE_TO_RESUBSCRIBE, {
											message: e
										})
									})
								})
							});
						e.waitUntil(r)
					}, t.prototype.y = function(e) {
						var t = this;
						if (e.notification && e.notification.data && e.notification.data.FCM_MSG) {
							e.stopImmediatePropagation(), e.notification.close();
							var r = e.notification.data.FCM_MSG,
								n = r.notification.click_action;
							if (n) {
								var o = this.D(n).then(function(e) {
									return e || self.clients.openWindow(n)
								}).then(function(e) {
									if (e) {
										r.notification, delete r.notification;
										var n = m.createNewMsg(m.TYPES_OF_MSG.NOTIFICATION_CLICKED, r);
										return t.A(e, n)
									}
								});
								e.waitUntil(o)
							}
						}
					}, t.prototype.O = function(e) {
						if (e && "object" == typeof e.notification) {
							var t = Object.assign({}, e.notification);
							return t.data = (r = {}, r.FCM_MSG = e, r), t;
							var r
						}
					}, t.prototype.setBackgroundMessageHandler = function(e) {
						if (e && "function" != typeof e) throw this.e.create(u.codes.BG_HANDLER_FUNCTION_EXPECTED);
						this.N = e
					}, t.prototype.D = function(e) {
						var t = new URL(e).href;
						return self.clients.matchAll({
							type: "window",
							includeUncontrolled: !0
						}).then(function(e) {
							for (var r = null, n = 0; n < e.length; n++)
								if (new URL(e[n].url).href === t) {
									r = e[n];
									break
								}
							if (r) return r.focus(), r
						})
					}, t.prototype.A = function(e, t) {
						var r = this;
						return new Promise(function(n, o) {
							if (!e) return o(r.e.create(u.codes.NO_WINDOW_CLIENT_TO_MSG));
							e.postMessage(t), n()
						})
					}, t.prototype.w = function() {
						return self.clients.matchAll({
							type: "window",
							includeUncontrolled: !0
						}).then(function(e) {
							return e.some(function(e) {
								return "visible" === e.visibilityState
							})
						})
					}, t.prototype.k = function(e) {
						var t = this;
						return self.clients.matchAll({
							type: "window",
							includeUncontrolled: !0
						}).then(function(r) {
							var n = m.createNewMsg(m.TYPES_OF_MSG.PUSH_MSG_RECEIVED, e);
							return Promise.all(r.map(function(e) {
								return t.A(e, n)
							}))
						})
					}, t.prototype._ = function() {
						return Promise.resolve(self.registration)
					}, t
				}(S),
				A = D,
				P = r(6);
			t.registerMessaging = o, o(P.default)
		}
	}, [116])
} catch (e) {
	throw Error("Cannot instantiate firebase-messaging.js - be sure to load firebase-app.js first.")
}
/*!
 * @license Firebase v4.6.2
 * Build: rev-cbb07d3
 * Terms: https://firebase.google.com/terms/
 */
try {
	webpackJsonpFirebase([2], {
		118: function(t, e, n) {
			n(119)
		},
		119: function(t, e, n) {
			"use strict";

			function r(t) {
				return "storage/" + t
			}

			function o() {
				return new te(ee.UNKNOWN, "An unknown error occurred, please check the error payload for server response.")
			}

			function i(t) {
				return new te(ee.OBJECT_NOT_FOUND, "Object '" + t + "' does not exist.")
			}

			function a(t) {
				return new te(ee.QUOTA_EXCEEDED, "Quota for bucket '" + t + "' exceeded, please view quota on https://firebase.google.com/pricing/.")
			}

			function s() {
				return new te(ee.UNAUTHENTICATED, "User is not authenticated, please authenticate using Firebase Authentication and try again.")
			}

			function u(t) {
				return new te(ee.UNAUTHORIZED, "User does not have permission to access '" + t + "'.")
			}

			function c() {
				return new te(ee.RETRY_LIMIT_EXCEEDED, "Max retry time for operation exceeded, please try again.")
			}

			function l() {
				return new te(ee.CANCELED, "User canceled the upload/download.")
			}

			function h(t) {
				return new te(ee.INVALID_URL, "Invalid URL '" + t + "'.")
			}

			function p(t) {
				return new te(ee.INVALID_DEFAULT_BUCKET, "Invalid default bucket '" + t + "'.")
			}

			function f() {
				return new te(ee.CANNOT_SLICE_BLOB, "Cannot slice blob for upload. Please retry the upload.")
			}

			function d() {
				return new te(ee.SERVER_FILE_WRONG_SIZE, "Server recorded incorrect upload file size, please retry the upload.")
			}

			function _() {
				return new te(ee.NO_DOWNLOAD_URL, "The given file does not have any download URLs.")
			}

			function v(t, e, n) {
				return new te(ee.INVALID_ARGUMENT, "Invalid argument in `" + e + "` at index " + t + ": " + n)
			}

			function b(t, e, n, r) {
				var o, i;
				return t === e ? (o = t, i = 1 === t ? "argument" : "arguments") : (o = "between " + t + " and " + e, i = "arguments"), new te(ee.INVALID_ARGUMENT_COUNT, "Invalid argument count in `" + n + "`: Expected " + o + " " + i + ", received " + r + ".")
			}

			function m() {
				return new te(ee.APP_DELETED, "The Firebase app was deleted.")
			}

			function g(t) {
				return new te(ee.INVALID_ROOT_OPERATION, "The operation '" + t + "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")
			}

			function y(t, e) {
				return new te(ee.INVALID_FORMAT, "String does not match format '" + t + "': " + e)
			}

			function R(t) {
				throw new te(ee.INTERNAL_ERROR, "Internal error: " + t)
			}

			function E(t) {
				switch (t) {
					case ne.RAW:
					case ne.BASE64:
					case ne.BASE64URL:
					case ne.DATA_URL:
						return;
					default:
						throw "Expected one of the event types: [" + ne.RAW + ", " + ne.BASE64 + ", " + ne.BASE64URL + ", " + ne.DATA_URL + "]."
				}
			}

			function w(t, e) {
				switch (t) {
					case ne.RAW:
						return new re(U(e));
					case ne.BASE64:
					case ne.BASE64URL:
						return new re(A(t, e));
					case ne.DATA_URL:
						return new re(N(e), O(e))
				}
				throw o()
			}

			function U(t) {
				for (var e = [], n = 0; n < t.length; n++) {
					var r = t.charCodeAt(n);
					if (r <= 127) e.push(r);
					else if (r <= 2047) e.push(192 | r >> 6, 128 | 63 & r);
					else if (55296 == (64512 & r)) {
						var o = n < t.length - 1 && 56320 == (64512 & t.charCodeAt(n + 1));
						if (o) {
							var i = r,
								a = t.charCodeAt(++n);
							r = 65536 | (1023 & i) << 10 | 1023 & a, e.push(240 | r >> 18, 128 | r >> 12 & 63, 128 | r >> 6 & 63, 128 | 63 & r)
						} else e.push(239, 191, 189)
					} else 56320 == (64512 & r) ? e.push(239, 191, 189) : e.push(224 | r >> 12, 128 | r >> 6 & 63, 128 | 63 & r)
				}
				return new Uint8Array(e)
			}

			function T(t) {
				var e;
				try {
					e = decodeURIComponent(t)
				} catch (t) {
					throw y(ne.DATA_URL, "Malformed data URL.")
				}
				return U(e)
			}

			function A(t, e) {
				switch (t) {
					case ne.BASE64:
						var n = -1 !== e.indexOf("-"),
							r = -1 !== e.indexOf("_");
						if (n || r) {
							var o = n ? "-" : "_";
							throw y(t, "Invalid character '" + o + "' found: is it base64url encoded?")
						}
						break;
					case ne.BASE64URL:
						var i = -1 !== e.indexOf("+"),
							a = -1 !== e.indexOf("/");
						if (i || a) {
							var o = i ? "+" : "/";
							throw y(t, "Invalid character '" + o + "' found: is it base64 encoded?")
						}
						e = e.replace(/-/g, "+").replace(/_/g, "/")
				}
				var s;
				try {
					s = atob(e)
				} catch (e) {
					throw y(t, "Invalid character found")
				}
				for (var u = new Uint8Array(s.length), c = 0; c < s.length; c++) u[c] = s.charCodeAt(c);
				return u
			}

			function N(t) {
				var e = new oe(t);
				return e.base64 ? A(ne.BASE64, e.rest) : T(e.rest)
			}

			function O(t) {
				return new oe(t).contentType
			}

			function C(t, e) {
				return !!(t.length >= e.length) && t.substring(t.length - e.length) === e
			}

			function S(t) {
				switch (t) {
					case ae.RUNNING:
					case ae.PAUSING:
					case ae.CANCELING:
						return se.RUNNING;
					case ae.PAUSED:
						return se.PAUSED;
					case ae.SUCCESS:
						return se.SUCCESS;
					case ae.CANCELED:
						return se.CANCELED;
					case ae.ERROR:
					default:
						return se.ERROR
				}
			}

			function k(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}

			function I(t, e) {
				for (var n in t) k(t, n) && e(n, t[n])
			}

			function L(t) {
				if (null == t) return {};
				var e = {};
				return I(t, function(t, n) {
					e[t] = n
				}), e
			}

			function P(t) {
				return new Promise(t)
			}

			function x(t) {
				return Promise.resolve(t)
			}

			function D(t) {
				return Promise.reject(t)
			}

			function M(t) {
				return null != t
			}

			function W(t) {
				return void 0 !== t
			}

			function B(t) {
				return "function" == typeof t
			}

			function G(t) {
				return "object" == typeof t
			}

			function j(t) {
				return G(t) && null !== t
			}

			function q(t) {
				return G(t) && !Array.isArray(t)
			}

			function F(t) {
				return "string" == typeof t || t instanceof String
			}

			function H(t) {
				return "number" == typeof t || t instanceof Number
			}

			function z(t) {
				return X() && t instanceof Blob
			}

			function X() {
				return "undefined" != typeof Blob
			}

			function V(t) {
				var e;
				try {
					e = JSON.parse(t)
				} catch (t) {
					return null
				}
				return q(e) ? e : null
			}

			function K(t) {
				if (0 == t.length) return null;
				var e = t.lastIndexOf("/");
				return -1 === e ? "" : t.slice(0, e)
			}

			function Z(t, e) {
				var n = e.split("/").filter(function(t) {
					return t.length > 0
				}).join("/");
				return 0 === t.length ? n : t + "/" + n
			}

			function J(t) {
				var e = t.lastIndexOf("/", t.length - 2);
				return -1 === e ? t : t.slice(e + 1)
			}

			function Q(t) {
				return Vt + Zt + t
			}

			function Y(t) {
				return Kt + Zt + t
			}

			function $(t) {
				return Vt + Jt + t
			}

			function tt(t) {
				var e = encodeURIComponent,
					n = "?";
				return I(t, function(t, r) {
					var o = e(t) + "=" + e(r);
					n = n + o + "&"
				}), n = n.slice(0, -1)
			}

			function et(t, e) {
				return e
			}

			function nt(t) {
				return !F(t) || t.length < 2 ? t : (t = t, J(t))
			}

			function rt() {
				function t(t, e) {
					return nt(e)
				}

				function e(t, e) {
					return M(e) ? +e : e
				}

				function n(t, e) {
					if (!(F(e) && e.length > 0)) return [];
					var n = encodeURIComponent;
					return e.split(",").map(function(e) {
						var r = t.bucket,
							o = t.fullPath;
						return Y("/b/" + n(r) + "/o/" + n(o)) + tt({
							alt: "media",
							token: e
						})
					})
				}
				if (pe) return pe;
				var r = [];
				r.push(new he("bucket")), r.push(new he("generation")), r.push(new he("metageneration")), r.push(new he("name", "fullPath", !0));
				var o = new he("name");
				o.xform = t, r.push(o);
				var i = new he("size");
				return i.xform = e, r.push(i), r.push(new he("timeCreated")), r.push(new he("updated")), r.push(new he("md5Hash", null, !0)), r.push(new he("cacheControl", null, !0)), r.push(new he("contentDisposition", null, !0)), r.push(new he("contentEncoding", null, !0)), r.push(new he("contentLanguage", null, !0)), r.push(new he("contentType", null, !0)), r.push(new he("metadata", "customMetadata", !0)), r.push(new he("downloadTokens", "downloadURLs", !1, n)), pe = r
			}

			function ot(t, e) {
				function n() {
					var n = t.bucket,
						r = t.fullPath,
						o = new le(n, r);
					return e.makeStorageReference(o)
				}
				Object.defineProperty(t, "ref", {
					get: n
				})
			}

			function it(t, e, n) {
				var r = {};
				r.type = "file";
				for (var o = n.length, i = 0; i < o; i++) {
					var a = n[i];
					r[a.local] = a.xform(r, e[a.server])
				}
				return ot(r, t), r
			}

			function at(t, e, n) {
				var r = V(e);
				return null === r ? null : it(t, r, n)
			}

			function st(t, e) {
				for (var n = {}, r = e.length, o = 0; o < r; o++) {
					var i = e[o];
					i.writable && (n[i.server] = t[i.local])
				}
				return JSON.stringify(n)
			}

			function ut(t) {
				if (!t || !G(t)) throw "Expected Metadata object.";
				for (var e in t) {
					var n = t[e];
					if ("customMetadata" === e) {
						if (!G(n)) throw "Expected object for 'customMetadata' mapping."
					} else if (j(n)) throw "Mapping for '" + e + "' cannot be an object."
				}
			}

			function ct(t, e, n) {
				for (var r = e.length, o = e.length, i = 0; i < e.length; i++)
					if (e[i].optional) {
						r = i;
						break
					}
				if (!(r <= n.length && n.length <= o)) throw b(r, o, t, n.length);
				for (var i = 0; i < n.length; i++) try {
					e[i].validator(n[i])
				} catch (e) {
					throw e instanceof Error ? v(i, t, e.message) : v(i, t, e)
				}
			}

			function lt(t, e) {
				return function(n) {
					t(n), e(n)
				}
			}

			function ht(t, e) {
				function n(t) {
					if (!F(t)) throw "Expected string."
				}
				var r;
				return r = t ? lt(n, t) : n, new fe(r, e)
			}

			function pt() {
				function t(t) {
					if (!(t instanceof Uint8Array || t instanceof ArrayBuffer || X() && t instanceof Blob)) throw "Expected Blob or File."
				}
				return new fe(t)
			}

			function ft(t) {
				return new fe(ut, t)
			}

			function dt() {
				function t(t) {
					if (!(H(t) && t >= 0)) throw "Expected a number 0 or greater."
				}
				return new fe(t)
			}

			function _t(t, e) {
				function n(e) {
					if (!(null === e || M(e) && e instanceof Object)) throw "Expected an Object.";
					void 0 !== t && null !== t && t(e)
				}
				return new fe(n, e)
			}

			function vt(t) {
				function e(t) {
					if (null !== t && !B(t)) throw "Expected a Function."
				}
				return new fe(e, t)
			}

			function bt() {
				return "undefined" != typeof BlobBuilder ? BlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : void 0
			}

			function mt() {
				for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
				var n = bt();
				if (void 0 !== n) {
					for (var r = new n, o = 0; o < t.length; o++) r.append(t[o]);
					return r.getBlob()
				}
				if (X()) return new Blob(t);
				throw Error("This browser doesn't seem to support creating Blobs")
			}

			function gt(t, e, n) {
				return t.webkitSlice ? t.webkitSlice(e, n) : t.mozSlice ? t.mozSlice(e, n) : t.slice ? t.slice(e, n) : null
			}

			function yt(t, e) {
				return -1 !== t.indexOf(e)
			}

			function Rt(t) {
				return Array.prototype.slice.call(t)
			}

			function Et(t, e) {
				var n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
			}

			function wt(t) {
				if (!t) throw o()
			}

			function Ut(t, e) {
				function n(n, r) {
					var o = at(t, r, e);
					return wt(null !== o), o
				}
				return n
			}

			function Tt(t) {
				function e(e, n) {
					var r;
					return r = 401 === e.getStatus() ? s() : 402 === e.getStatus() ? a(t.bucket) : 403 === e.getStatus() ? u(t.path) : n, r.setServerResponseProp(n.serverResponseProp()), r
				}
				return e
			}

			function At(t) {
				function e(e, r) {
					var o = n(e, r);
					return 404 === e.getStatus() && (o = i(t.path)), o.setServerResponseProp(r.serverResponseProp()), o
				}
				var n = Tt(t);
				return e
			}

			function Nt(t, e, n) {
				var r = e.fullServerUrl(),
					o = Q(r),
					i = t.maxOperationRetryTime(),
					a = new _e(o, "GET", Ut(t, n), i);
				return a.errorHandler = At(e), a
			}

			function Ot(t, e, n, r) {
				var o = e.fullServerUrl(),
					i = Q(o),
					a = st(n, r),
					s = {
						"Content-Type": "application/json; charset=utf-8"
					},
					u = t.maxOperationRetryTime(),
					c = new _e(i, "PATCH", Ut(t, r), u);
				return c.headers = s, c.body = a, c.errorHandler = At(e), c
			}

			function Ct(t, e) {
				function n(t, e) {}
				var r = e.fullServerUrl(),
					o = Q(r),
					i = t.maxOperationRetryTime(),
					a = new _e(o, "DELETE", n, i);
				return a.successCodes = [200, 204], a.errorHandler = At(e), a
			}

			function St(t, e) {
				return t && t.contentType || e && e.type() || "application/octet-stream"
			}

			function kt(t, e, n) {
				var r = L(n);
				return r.fullPath = t.path, r.size = e.size(), r.contentType || (r.contentType = St(null, e)), r
			}

			function It(t, e, n, r, o) {
				var i = e.bucketOnlyServerUrl(),
					a = {
						"X-Goog-Upload-Protocol": "multipart"
					},
					s = function() {
						for (var t = "", e = 0; e < 2; e++) t += ("" + Math.random()).slice(2);
						return t
					}();
				a["Content-Type"] = "multipart/related; boundary=" + s;
				var u = kt(e, r, o),
					c = st(u, n),
					l = "--" + s + "\r\nContent-Type: application/json; charset=utf-8\r\n\r\n" + c + "\r\n--" + s + "\r\nContent-Type: " + u.contentType + "\r\n\r\n",
					h = "\r\n--" + s + "--",
					p = de.getBlob(l, r, h);
				if (null === p) throw f();
				var d = {
						name: u.fullPath
					},
					_ = $(i),
					v = t.maxUploadRetryTime(),
					b = new _e(_, "POST", Ut(t, n), v);
				return b.urlParams = d, b.headers = a, b.body = p.uploadData(), b.errorHandler = Tt(e), b
			}

			function Lt(t, e) {
				var n;
				try {
					n = t.getResponseHeader("X-Goog-Upload-Status")
				} catch (t) {
					wt(!1)
				}
				return wt(yt(e || ["active"], n)), n
			}

			function Pt(t, e, n, r, o) {
				function i(t, e) {
					Lt(t);
					var n;
					try {
						n = t.getResponseHeader("X-Goog-Upload-URL")
					} catch (t) {
						wt(!1)
					}
					return wt(F(n)), n
				}
				var a = e.bucketOnlyServerUrl(),
					s = kt(e, r, o),
					u = {
						name: s.fullPath
					},
					c = $(a),
					l = {
						"X-Goog-Upload-Protocol": "resumable",
						"X-Goog-Upload-Command": "start",
						"X-Goog-Upload-Header-Content-Length": r.size(),
						"X-Goog-Upload-Header-Content-Type": s.contentType,
						"Content-Type": "application/json; charset=utf-8"
					},
					h = st(s, n),
					p = t.maxUploadRetryTime(),
					f = new _e(c, "POST", i, p);
				return f.urlParams = u, f.headers = l, f.body = h, f.errorHandler = Tt(e), f
			}

			function xt(t, e, n, r) {
				function o(t, e) {
					var n, o = Lt(t, ["active", "final"]);
					try {
						n = t.getResponseHeader("X-Goog-Upload-Size-Received")
					} catch (t) {
						wt(!1)
					}
					var i = parseInt(n, 10);
					return wt(!isNaN(i)), new ve(i, r.size(), "final" === o)
				}
				var i = {
						"X-Goog-Upload-Command": "query"
					},
					a = t.maxUploadRetryTime(),
					s = new _e(n, "POST", o, a);
				return s.headers = i, s.errorHandler = Tt(e), s
			}

			function Dt(t, e, n, r, o, i, a, s) {
				function u(t, n) {
					var o, a = Lt(t, ["active", "final"]),
						s = c.current + h,
						u = r.size();
					return o = "final" === a ? Ut(e, i)(t, n) : null, new ve(s, u, "final" === a, o)
				}
				var c = new ve(0, 0);
				if (a ? (c.current = a.current, c.total = a.total) : (c.current = 0, c.total = r.size()), r.size() !== c.total) throw d();
				var l = c.total - c.current,
					h = l;
				o > 0 && (h = Math.min(h, o));
				var p = c.current,
					_ = p + h,
					v = h === l ? "upload, finalize" : "upload",
					b = {
						"X-Goog-Upload-Command": v,
						"X-Goog-Upload-Offset": c.current
					},
					m = r.slice(p, _);
				if (null === m) throw f();
				var g = e.maxUploadRetryTime(),
					y = new _e(n, "POST", u, g);
				return y.headers = b, y.body = m.uploadData(), y.progressCallback = s || null, y.errorHandler = Tt(t), y
			}

			function Mt(t) {
				return function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					x(!0).then(function() {
						t.apply(null, e)
					})
				}
			}

			function Wt(t, e, n) {
				function r() {
					return 2 === h
				}

				function o() {
					p || (p = !0, e.apply(null, arguments))
				}

				function i(e) {
					c = setTimeout(function() {
						c = null, t(a, r())
					}, e)
				}

				function a(t) {
					for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
					if (!p) {
						if (t) return void o.apply(null, arguments);
						if (r() || l) return void o.apply(null, arguments);
						u < 64 && (u *= 2);
						var a;
						1 === h ? (h = 2, a = 0) : a = 1e3 * (u + Math.random()), i(a)
					}
				}

				function s(t) {
					f || (f = !0, p || (null !== c ? (t || (h = 2), clearTimeout(c), i(0)) : t || (h = 1)))
				}
				var u = 1,
					c = null,
					l = !1,
					h = 0,
					p = !1,
					f = !1;
				return i(0), setTimeout(function() {
					l = !0, s(!0)
				}, n), s
			}

			function Bt(t) {
				t(!1)
			}

			function Gt(t, e) {
				null !== e && e.length > 0 && (t.Authorization = "Firebase " + e)
			}

			function jt(t) {
				var e = void 0 !== Xt.default ? Xt.default.SDK_VERSION : "AppManager";
				t["X-Firebase-Storage-Version"] = "webjs/" + e
			}

			function qt(t, e, n) {
				var r = tt(t.urlParams),
					o = t.url + r,
					i = L(t.headers);
				return Gt(i, e), jt(i), new Ue(o, t.method, i, t.body, t.successCodes, t.additionalRetryCodes, t.handler, t.errorHandler, t.timeout, t.progressCallback, n)
			}

			function Ft(t, e, n) {
				return new Ae(t, new ce, n)
			}

			function Ht(t) {
				var e = {
					TaskState: se,
					TaskEvent: ie,
					StringFormat: ne,
					Storage: Ae,
					Reference: ye
				};
				t.INTERNAL.registerService(Oe, Ft, e, void 0, !0)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var zt, Xt = n(6),
				Vt = "https://firebasestorage.googleapis.com",
				Kt = "https://firebasestorage.googleapis.com",
				Zt = "/v0",
				Jt = "/v0",
				Qt = 12e4,
				Yt = 6e4,
				$t = -9007199254740991,
				te = function() {
					function t(t, e) {
						this.t = r(t), this.e = "Firebase Storage: " + e, this.n = null, this.r = "FirebaseError"
					}
					return t.prototype.codeProp = function() {
						return this.code
					}, t.prototype.codeEquals = function(t) {
						return r(t) === this.codeProp()
					}, t.prototype.serverResponseProp = function() {
						return this.n
					}, t.prototype.setServerResponseProp = function(t) {
						this.n = t
					}, Object.defineProperty(t.prototype, "name", {
						get: function() {
							return this.r
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "code", {
						get: function() {
							return this.t
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "message", {
						get: function() {
							return this.e
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "serverResponse", {
						get: function() {
							return this.n
						},
						enumerable: !0,
						configurable: !0
					}), t
				}(),
				ee = {
					UNKNOWN: "unknown",
					OBJECT_NOT_FOUND: "object-not-found",
					BUCKET_NOT_FOUND: "bucket-not-found",
					PROJECT_NOT_FOUND: "project-not-found",
					QUOTA_EXCEEDED: "quota-exceeded",
					UNAUTHENTICATED: "unauthenticated",
					UNAUTHORIZED: "unauthorized",
					RETRY_LIMIT_EXCEEDED: "retry-limit-exceeded",
					INVALID_CHECKSUM: "invalid-checksum",
					CANCELED: "canceled",
					INVALID_EVENT_NAME: "invalid-event-name",
					INVALID_URL: "invalid-url",
					INVALID_DEFAULT_BUCKET: "invalid-default-bucket",
					NO_DEFAULT_BUCKET: "no-default-bucket",
					CANNOT_SLICE_BLOB: "cannot-slice-blob",
					SERVER_FILE_WRONG_SIZE: "server-file-wrong-size",
					NO_DOWNLOAD_URL: "no-download-url",
					INVALID_ARGUMENT: "invalid-argument",
					INVALID_ARGUMENT_COUNT: "invalid-argument-count",
					APP_DELETED: "app-deleted",
					INVALID_ROOT_OPERATION: "invalid-root-operation",
					INVALID_FORMAT: "invalid-format",
					INTERNAL_ERROR: "internal-error"
				},
				ne = {
					RAW: "raw",
					BASE64: "base64",
					BASE64URL: "base64url",
					DATA_URL: "data_url"
				},
				re = function() {
					function t(t, e) {
						this.data = t, this.contentType = e || null
					}
					return t
				}(),
				oe = function() {
					function t(t) {
						this.base64 = !1, this.contentType = null;
						var e = t.match(/^data:([^,]+)?,/);
						if (null === e) throw y(ne.DATA_URL, "Must be formatted 'data:[<mediatype>][;base64],<data>");
						var n = e[1] || null;
						null != n && (this.base64 = C(n, ";base64"), this.contentType = this.base64 ? n.substring(0, n.length - 7) : n), this.rest = t.substring(t.indexOf(",") + 1)
					}
					return t
				}(),
				ie = {
					STATE_CHANGED: "state_changed"
				},
				ae = {
					RUNNING: "running",
					PAUSING: "pausing",
					PAUSED: "paused",
					SUCCESS: "success",
					CANCELING: "canceling",
					CANCELED: "canceled",
					ERROR: "error"
				},
				se = {
					RUNNING: "running",
					PAUSED: "paused",
					SUCCESS: "success",
					CANCELED: "canceled",
					ERROR: "error"
				};
			! function(t) {
				t[t.NO_ERROR = 0] = "NO_ERROR", t[t.NETWORK_ERROR = 1] = "NETWORK_ERROR", t[t.ABORT = 2] = "ABORT"
			}(zt = zt || (zt = {}));
			var ue = function() {
					function t() {
						var t = this;
						this.o = !1, this.i = new XMLHttpRequest, this.a = zt.NO_ERROR, this.s = P(function(e, n) {
							t.i.addEventListener("abort", function(n) {
								t.a = zt.ABORT, e(t)
							}), t.i.addEventListener("error", function(n) {
								t.a = zt.NETWORK_ERROR, e(t)
							}), t.i.addEventListener("load", function(n) {
								e(t)
							})
						})
					}
					return t.prototype.send = function(t, e, n, r) {
						var o = this;
						if (this.o) throw R("cannot .send() more than once");
						return this.o = !0, this.i.open(e, t, !0), M(r) && I(r, function(t, e) {
							o.i.setRequestHeader(t, "" + e)
						}), M(n) ? this.i.send(n) : this.i.send(), this.s
					}, t.prototype.getErrorCode = function() {
						if (!this.o) throw R("cannot .getErrorCode() before sending");
						return this.a
					}, t.prototype.getStatus = function() {
						if (!this.o) throw R("cannot .getStatus() before sending");
						try {
							return this.i.status
						} catch (t) {
							return -1
						}
					}, t.prototype.getResponseText = function() {
						if (!this.o) throw R("cannot .getResponseText() before sending");
						return this.i.responseText
					}, t.prototype.abort = function() {
						this.i.abort()
					}, t.prototype.getResponseHeader = function(t) {
						return this.i.getResponseHeader(t)
					}, t.prototype.addUploadProgressListener = function(t) {
						M(this.i.upload) && this.i.upload.addEventListener("progress", t)
					}, t.prototype.removeUploadProgressListener = function(t) {
						M(this.i.upload) && this.i.upload.removeEventListener("progress", t)
					}, t
				}(),
				ce = function() {
					function t() {}
					return t.prototype.createXhrIo = function() {
						return new ue
					}, t
				}(),
				le = function() {
					function t(t, e) {
						this.bucket = t, this.u = e
					}
					return Object.defineProperty(t.prototype, "path", {
						get: function() {
							return this.u
						},
						enumerable: !0,
						configurable: !0
					}), t.prototype.fullServerUrl = function() {
						var t = encodeURIComponent;
						return "/b/" + t(this.bucket) + "/o/" + t(this.path)
					}, t.prototype.bucketOnlyServerUrl = function() {
						return "/b/" + encodeURIComponent(this.bucket) + "/o"
					}, t.makeFromBucketSpec = function(e) {
						var n;
						try {
							n = t.makeFromUrl(e)
						} catch (n) {
							return new t(e, "")
						}
						if ("" === n.path) return n;
						throw p(e)
					}, t.makeFromUrl = function(e) {
						function n(t) {
							"/" === t.path.charAt(t.path.length - 1) && (t.u = t.u.slice(0, -1))
						}

						function r(t) {
							t.u = decodeURIComponent(t.path)
						}
						for (var o = null, i = RegExp("^gs://([A-Za-z0-9.\\-]+)(/(.*))?$", "i"), a = {
								bucket: 1,
								path: 3
							}, s = RegExp("^https?://firebasestorage\\.googleapis\\.com/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-]+)/o(/([^?#]*).*)?$", "i"), u = {
								bucket: 1,
								path: 3
							}, c = [{
								regex: i,
								indices: a,
								postModify: n
							}, {
								regex: s,
								indices: u,
								postModify: r
							}], l = 0; l < c.length; l++) {
							var p = c[l],
								f = p.regex.exec(e);
							if (f) {
								var d = f[p.indices.bucket],
									_ = f[p.indices.path];
								_ || (_ = ""), o = new t(d, _), p.postModify(o);
								break
							}
						}
						if (null == o) throw h(e);
						return o
					}, t
				}(),
				he = function() {
					function t(t, e, n, r) {
						this.server = t, this.local = e || t, this.writable = !!n, this.xform = r || et
					}
					return t
				}(),
				pe = null,
				fe = function() {
					function t(t, e) {
						var n = this;
						this.validator = function(e) {
							n.optional && !W(e) || t(e)
						}, this.optional = !!e
					}
					return t
				}(),
				de = function() {
					function t(t, e) {
						var n = 0,
							r = "";
						z(t) ? (this.c = t, n = t.size, r = t.type) : t instanceof ArrayBuffer ? (e ? this.c = new Uint8Array(t) : (this.c = new Uint8Array(t.byteLength), this.c.set(new Uint8Array(t))), n = this.c.length) : t instanceof Uint8Array && (e ? this.c = t : (this.c = new Uint8Array(t.length), this.c.set(t)), n = t.length), this.l = n, this.h = r
					}
					return t.prototype.size = function() {
						return this.l
					}, t.prototype.type = function() {
						return this.h
					}, t.prototype.slice = function(e, n) {
						if (z(this.c)) {
							var r = this.c,
								o = gt(r, e, n);
							return null === o ? null : new t(o)
						}
						return new t(new Uint8Array(this.c.buffer, e, n - e), !0)
					}, t.getBlob = function() {
						for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						if (X()) {
							var r = e.map(function(e) {
								return e instanceof t ? e.c : e
							});
							return new t(mt.apply(null, r))
						}
						var o = e.map(function(t) {
								return F(t) ? w(ne.RAW, t).data : t.c
							}),
							i = 0;
						o.forEach(function(t) {
							i += t.byteLength
						});
						var a = new Uint8Array(i),
							s = 0;
						return o.forEach(function(t) {
							for (var e = 0; e < t.length; e++) a[s++] = t[e]
						}), new t(a, !0)
					}, t.prototype.uploadData = function() {
						return this.c
					}, t
				}(),
				_e = function() {
					function t(t, e, n, r) {
						this.url = t, this.method = e, this.handler = n, this.timeout = r, this.urlParams = {}, this.headers = {}, this.body = null, this.errorHandler = null, this.progressCallback = null, this.successCodes = [200], this.additionalRetryCodes = []
					}
					return t
				}(),
				ve = function() {
					function t(t, e, n, r) {
						this.current = t, this.total = e, this.finalized = !!n, this.metadata = r || null
					}
					return t
				}(),
				be = function() {
					function t(t, e, n) {
						if (B(t) || M(e) || M(n)) this.next = t, this.error = e || null, this.complete = n || null;
						else {
							var r = t;
							this.next = r.next || null, this.error = r.error || null, this.complete = r.complete || null
						}
					}
					return t
				}(),
				me = function() {
					function t(t, e, n, r, o, i) {
						this.bytesTransferred = t, this.totalBytes = e, this.state = n, this.metadata = r, this.task = o, this.ref = i
					}
					return Object.defineProperty(t.prototype, "downloadURL", {
						get: function() {
							if (null !== this.metadata) {
								var t = this.metadata.downloadURLs;
								return null != t && null != t[0] ? t[0] : null
							}
							return null
						},
						enumerable: !0,
						configurable: !0
					}), t
				}(),
				ge = function() {
					function t(t, e, n, r, o, i) {
						void 0 === i && (i = null);
						var a = this;
						this.p = 0, this.f = !1, this.d = !1, this._ = [], this.v = null, this.b = null, this.m = null, this.g = 1, this.y = null, this.R = null, this.w = t, this.U = e, this.T = n, this.A = o, this.N = i, this.O = r, this.C = this.S(this.A), this.k = ae.RUNNING, this.I = function(t) {
							a.m = null, a.g = 1, t.codeEquals(ee.CANCELED) ? (a.f = !0, a.L()) : (a.v = t, a.P(ae.ERROR))
						}, this.x = function(t) {
							a.m = null, t.codeEquals(ee.CANCELED) ? a.L() : (a.v = t, a.P(ae.ERROR))
						}, this.D = P(function(t, e) {
							a.y = t, a.R = e, a.M()
						}), this.D.then(null, function() {})
					}
					return t.prototype.W = function() {
						var t = this,
							e = this.p;
						return function(n, r) {
							t.B(e + n)
						}
					}, t.prototype.S = function(t) {
						return t.size() > 262144
					}, t.prototype.M = function() {
						this.k === ae.RUNNING && null === this.m && (this.C ? null === this.b ? this.G() : this.f ? this.j() : this.d ? this.q() : this.F() : this.H())
					}, t.prototype.z = function(t) {
						var e = this;
						this.U.getAuthToken().then(function(n) {
							switch (e.k) {
								case ae.RUNNING:
									t(n);
									break;
								case ae.CANCELING:
									e.P(ae.CANCELED);
									break;
								case ae.PAUSING:
									e.P(ae.PAUSED)
							}
						})
					}, t.prototype.G = function() {
						var t = this;
						this.z(function(e) {
							var n = Pt(t.U, t.T, t.O, t.A, t.N),
								r = t.U.makeRequest(n, e);
							t.m = r, r.getPromise().then(function(e) {
								t.m = null, t.b = e, t.f = !1, t.L()
							}, t.I)
						})
					}, t.prototype.j = function() {
						var t = this,
							e = this.b;
						this.z(function(n) {
							var r = xt(t.U, t.T, e, t.A),
								o = t.U.makeRequest(r, n);
							t.m = o, o.getPromise().then(function(e) {
								e = e, t.m = null, t.B(e.current), t.f = !1, e.finalized && (t.d = !0), t.L()
							}, t.I)
						})
					}, t.prototype.F = function() {
						var t = this,
							e = 262144 * this.g,
							n = new ve(this.p, this.A.size()),
							r = this.b;
						this.z(function(o) {
							var i;
							try {
								i = Dt(t.T, t.U, r, t.A, e, t.O, n, t.W())
							} catch (e) {
								return t.v = e, void t.P(ae.ERROR)
							}
							var a = t.U.makeRequest(i, o);
							t.m = a, a.getPromise().then(function(e) {
								t.X(), t.m = null, t.B(e.current), e.finalized ? (t.N = e.metadata, t.P(ae.SUCCESS)) : t.L()
							}, t.I)
						})
					}, t.prototype.X = function() {
						262144 * this.g < 33554432 && (this.g *= 2)
					}, t.prototype.q = function() {
						var t = this;
						this.z(function(e) {
							var n = Nt(t.U, t.T, t.O),
								r = t.U.makeRequest(n, e);
							t.m = r, r.getPromise().then(function(e) {
								t.m = null, t.N = e, t.P(ae.SUCCESS)
							}, t.x)
						})
					}, t.prototype.H = function() {
						var t = this;
						this.z(function(e) {
							var n = It(t.U, t.T, t.O, t.A, t.N),
								r = t.U.makeRequest(n, e);
							t.m = r, r.getPromise().then(function(e) {
								t.m = null, t.N = e, t.B(t.A.size()), t.P(ae.SUCCESS)
							}, t.I)
						})
					}, t.prototype.B = function(t) {
						var e = this.p;
						this.p = t, this.p !== e && this.V()
					}, t.prototype.P = function(t) {
						if (this.k !== t) switch (t) {
							case ae.CANCELING:
							case ae.PAUSING:
								this.k = t, null !== this.m && this.m.cancel();
								break;
							case ae.RUNNING:
								var e = this.k === ae.PAUSED;
								this.k = t, e && (this.V(), this.M());
								break;
							case ae.PAUSED:
								this.k = t, this.V();
								break;
							case ae.CANCELED:
								this.v = l(), this.k = t, this.V();
								break;
							case ae.ERROR:
							case ae.SUCCESS:
								this.k = t, this.V()
						}
					}, t.prototype.L = function() {
						switch (this.k) {
							case ae.PAUSING:
								this.P(ae.PAUSED);
								break;
							case ae.CANCELING:
								this.P(ae.CANCELED);
								break;
							case ae.RUNNING:
								this.M()
						}
					}, Object.defineProperty(t.prototype, "snapshot", {
						get: function() {
							var t = S(this.k);
							return new me(this.p, this.A.size(), t, this.N, this, this.w)
						},
						enumerable: !0,
						configurable: !0
					}), t.prototype.on = function(t, e, n, r) {
						function o(e) {
							if (t !== ie.STATE_CHANGED) throw "Expected one of the event types: [" + ie.STATE_CHANGED + "]."
						}

						function i(t) {
							try {
								return void c(t)
							} catch (t) {}
							try {
								if (l(t), !(W(t.next) || W(t.error) || W(t.complete))) throw "";
								return
							} catch (t) {
								throw u
							}
						}

						function a(t) {
							function e(e, n, o) {
								null !== t && ct("on", t, arguments);
								var i = new be(e, n, r);
								return h.K(i),
									function() {
										h.Z(i)
									}
							}
							return e
						}

						function s(t) {
							if (null === t) throw u;
							i(t)
						}
						void 0 === e && (e = void 0), void 0 === n && (n = void 0), void 0 === r && (r = void 0);
						var u = "Expected a function or an Object with one of `next`, `error`, `complete` properties.",
							c = vt(!0).validator,
							l = _t(null, !0).validator;
						ct("on", [ht(o), _t(i, !0), vt(!0), vt(!0)], arguments);
						var h = this,
							p = [_t(s), vt(!0), vt(!0)];
						return W(e) || W(n) || W(r) ? a(null)(e, n, r) : a(p)
					}, t.prototype.then = function(t, e) {
						return this.D.then(t, e)
					}, t.prototype.catch = function(t) {
						return this.then(null, t)
					}, t.prototype.K = function(t) {
						this._.push(t), this.J(t)
					}, t.prototype.Z = function(t) {
						Et(this._, t)
					}, t.prototype.V = function() {
						var t = this;
						this.Q(), Rt(this._).forEach(function(e) {
							t.J(e)
						})
					}, t.prototype.Q = function() {
						if (null !== this.y) {
							var t = !0;
							switch (S(this.k)) {
								case se.SUCCESS:
									Mt(this.y.bind(null, this.snapshot))();
									break;
								case se.CANCELED:
								case se.ERROR:
									Mt(this.R.bind(null, this.v))();
									break;
								default:
									t = !1
							}
							t && (this.y = null, this.R = null)
						}
					}, t.prototype.J = function(t) {
						switch (S(this.k)) {
							case se.RUNNING:
							case se.PAUSED:
								null !== t.next && Mt(t.next.bind(t, this.snapshot))();
								break;
							case se.SUCCESS:
								null !== t.complete && Mt(t.complete.bind(t))();
								break;
							case se.CANCELED:
							case se.ERROR:
								null !== t.error && Mt(t.error.bind(t, this.v))();
								break;
							default:
								null !== t.error && Mt(t.error.bind(t, this.v))()
						}
					}, t.prototype.resume = function() {
						ct("resume", [], arguments);
						var t = this.k === ae.PAUSED || this.k === ae.PAUSING;
						return t && this.P(ae.RUNNING), t
					}, t.prototype.pause = function() {
						ct("pause", [], arguments);
						var t = this.k === ae.RUNNING;
						return t && this.P(ae.PAUSING), t
					}, t.prototype.cancel = function() {
						ct("cancel", [], arguments);
						var t = this.k === ae.RUNNING || this.k === ae.PAUSING;
						return t && this.P(ae.CANCELING), t
					}, t
				}(),
				ye = function() {
					function t(t, e) {
						this.authWrapper = t, this.location = e instanceof le ? e : le.makeFromUrl(e)
					}
					return t.prototype.toString = function() {
						return ct("toString", [], arguments), "gs://" + this.location.bucket + "/" + this.location.path
					}, t.prototype.newRef = function(e, n) {
						return new t(e, n)
					}, t.prototype.mappings = function() {
						return rt()
					}, t.prototype.child = function(t) {
						ct("child", [ht()], arguments);
						var e = Z(this.location.path, t),
							n = new le(this.location.bucket, e);
						return this.newRef(this.authWrapper, n)
					}, Object.defineProperty(t.prototype, "parent", {
						get: function() {
							var t = K(this.location.path);
							if (null === t) return null;
							var e = new le(this.location.bucket, t);
							return this.newRef(this.authWrapper, e)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "root", {
						get: function() {
							var t = new le(this.location.bucket, "");
							return this.newRef(this.authWrapper, t)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "bucket", {
						get: function() {
							return this.location.bucket
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "fullPath", {
						get: function() {
							return this.location.path
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "name", {
						get: function() {
							return J(this.location.path)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "storage", {
						get: function() {
							return this.authWrapper.service()
						},
						enumerable: !0,
						configurable: !0
					}), t.prototype.put = function(t, e) {
						return void 0 === e && (e = null), ct("put", [pt(), ft(!0)], arguments), this.Y("put"), new ge(this, this.authWrapper, this.location, this.mappings(), new de(t), e)
					}, t.prototype.putString = function(t, e, n) {
						void 0 === e && (e = ne.RAW), ct("putString", [ht(), ht(E, !0), ft(!0)], arguments), this.Y("putString");
						var r = w(e, t),
							o = L(n);
						return !M(o.contentType) && M(r.contentType) && (o.contentType = r.contentType), new ge(this, this.authWrapper, this.location, this.mappings(), new de(r.data, !0), o)
					}, t.prototype.delete = function() {
						ct("delete", [], arguments), this.Y("delete");
						var t = this;
						return this.authWrapper.getAuthToken().then(function(e) {
							var n = Ct(t.authWrapper, t.location);
							return t.authWrapper.makeRequest(n, e).getPromise()
						})
					}, t.prototype.getMetadata = function() {
						ct("getMetadata", [], arguments), this.Y("getMetadata");
						var t = this;
						return this.authWrapper.getAuthToken().then(function(e) {
							var n = Nt(t.authWrapper, t.location, t.mappings());
							return t.authWrapper.makeRequest(n, e).getPromise()
						})
					}, t.prototype.updateMetadata = function(t) {
						ct("updateMetadata", [ft()], arguments), this.Y("updateMetadata");
						var e = this;
						return this.authWrapper.getAuthToken().then(function(n) {
							var r = Ot(e.authWrapper, e.location, t, e.mappings());
							return e.authWrapper.makeRequest(r, n).getPromise()
						})
					}, t.prototype.getDownloadURL = function() {
						return ct("getDownloadURL", [], arguments), this.Y("getDownloadURL"), this.getMetadata().then(function(t) {
							var e = t.downloadURLs[0];
							if (M(e)) return e;
							throw _()
						})
					}, t.prototype.Y = function(t) {
						if ("" === this.location.path) throw g(t)
					}, t
				}(),
				Re = function() {
					function t(t) {
						this.D = D(t)
					}
					return t.prototype.getPromise = function() {
						return this.D
					}, t.prototype.cancel = function(t) {
						void 0 === t && (t = !1)
					}, t
				}(),
				Ee = function() {
					function t() {
						this.$ = {}, this.tt = $t
					}
					return t.prototype.addRequest = function(t) {
						function e() {
							delete r.$[n]
						}
						var n = this.tt;
						this.tt++, this.$[n] = t;
						var r = this;
						t.getPromise().then(e, e)
					}, t.prototype.clear = function() {
						I(this.$, function(t, e) {
							e && e.cancel(!0)
						}), this.$ = {}
					}, t
				}(),
				we = function() {
					function t(e, n, r, o, i) {
						if (this.et = null, this.nt = !1, this.rt = e, null !== this.rt) {
							var a = this.rt.options;
							M(a) && (this.et = t.ot(a))
						}
						this.it = n, this.at = r, this.st = i, this.ut = o, this.ct = Qt, this.lt = Yt, this.ht = new Ee
					}
					return t.ot = function(t) {
						var e = t.storageBucket || null;
						return null == e ? null : le.makeFromBucketSpec(e).bucket
					}, t.prototype.getAuthToken = function() {
						return null !== this.rt && M(this.rt.INTERNAL) && M(this.rt.INTERNAL.getToken) ? this.rt.INTERNAL.getToken().then(function(t) {
							return null !== t ? t.accessToken : null
						}, function(t) {
							return null
						}) : x(null)
					}, t.prototype.bucket = function() {
						if (this.nt) throw m();
						return this.et
					}, t.prototype.service = function() {
						return this.ut
					}, t.prototype.makeStorageReference = function(t) {
						return this.it(this, t)
					}, t.prototype.makeRequest = function(t, e) {
						if (this.nt) return new Re(m());
						var n = this.at(t, e, this.st);
						return this.ht.addRequest(n), n
					}, t.prototype.deleteApp = function() {
						this.nt = !0, this.rt = null, this.ht.clear()
					}, t.prototype.maxUploadRetryTime = function() {
						return this.lt
					}, t.prototype.setMaxUploadRetryTime = function(t) {
						this.lt = t
					}, t.prototype.maxOperationRetryTime = function() {
						return this.ct
					}, t.prototype.setMaxOperationRetryTime = function(t) {
						this.ct = t
					}, t
				}(),
				Ue = function() {
					function t(t, e, n, r, o, i, a, s, u, c, l) {
						this.pt = null, this.ft = null, this.y = null, this.R = null, this.dt = !1, this._t = !1, this.vt = t, this.bt = e, this.mt = n, this.gt = r, this.yt = o.slice(), this.Rt = i.slice(), this.Et = a, this.wt = s, this.Ut = c, this.Tt = u, this.st = l;
						var h = this;
						this.D = P(function(t, e) {
							h.y = t, h.R = e, h.M()
						})
					}
					return t.prototype.M = function() {
						function t(t, e) {
							function r(t) {
								var e = t.loaded,
									r = t.lengthComputable ? t.total : -1;
								null !== n.Ut && n.Ut(e, r)
							}
							if (e) return void t(!1, new Te(!1, null, !0));
							var o = n.st.createXhrIo();
							n.pt = o, null !== n.Ut && o.addUploadProgressListener(r), o.send(n.vt, n.bt, n.gt, n.mt).then(function(e) {
								null !== n.Ut && e.removeUploadProgressListener(r), n.pt = null, e = e;
								var o = e.getErrorCode() === zt.NO_ERROR,
									i = e.getStatus();
								if (!o || n.At(i)) {
									var a = e.getErrorCode() === zt.ABORT;
									return void t(!1, new Te(!1, null, a))
								}
								var s = yt(n.yt, i);
								t(!0, new Te(s, e))
							})
						}

						function e(t, e) {
							var r = n.y,
								i = n.R,
								a = e.xhr;
							if (e.wasSuccessCode) try {
								var s = n.Et(a, a.getResponseText());
								W(s) ? r(s) : r()
							} catch (t) {
								i(t)
							} else if (null !== a) {
								var u = o();
								u.setServerResponseProp(a.getResponseText()), i(n.wt ? n.wt(a, u) : u)
							} else if (e.canceled) {
								var u = n._t ? m() : l();
								i(u)
							} else {
								var u = c();
								i(u)
							}
						}
						var n = this;
						this.dt ? e(!1, new Te(!1, null, !0)) : this.ft = Wt(t, e, this.Tt)
					}, t.prototype.getPromise = function() {
						return this.D
					}, t.prototype.cancel = function(t) {
						this.dt = !0, this._t = t || !1, null !== this.ft && Bt(this.ft), null !== this.pt && this.pt.abort()
					}, t.prototype.At = function(t) {
						var e = t >= 500 && t < 600,
							n = [408, 429],
							r = yt(n, t),
							o = yt(this.Rt, t);
						return e || r || o
					}, t
				}(),
				Te = function() {
					function t(t, e, n) {
						this.wasSuccessCode = t, this.xhr = e, this.canceled = !!n
					}
					return t
				}(),
				Ae = function() {
					function t(t, e, n) {
						function r(t, e) {
							return new ye(t, e)
						}
						if (this.et = null, this.U = new we(t, r, qt, this, e), this.rt = t, null != n) this.et = le.makeFromBucketSpec(n);
						else {
							var o = this.U.bucket();
							null != o && (this.et = new le(o, ""))
						}
						this.Nt = new Ne(this)
					}
					return t.prototype.ref = function(t) {
						function e(t) {
							if (/^[A-Za-z]+:\/\//.test(t)) throw "Expected child path but got a URL, use refFromURL instead."
						}
						if (ct("ref", [ht(e, !0)], arguments), null == this.et) throw Error("No Storage Bucket defined in Firebase Options.");
						var n = new ye(this.U, this.et);
						return null != t ? n.child(t) : n
					}, t.prototype.refFromURL = function(t) {
						function e(t) {
							if (!/^[A-Za-z]+:\/\//.test(t)) throw "Expected full URL but got a child path, use ref instead.";
							try {
								le.makeFromUrl(t)
							} catch (t) {
								throw "Expected valid full URL but got an invalid one."
							}
						}
						return ct("refFromURL", [ht(e, !1)], arguments), new ye(this.U, t)
					}, Object.defineProperty(t.prototype, "maxUploadRetryTime", {
						get: function() {
							return this.U.maxUploadRetryTime()
						},
						enumerable: !0,
						configurable: !0
					}), t.prototype.setMaxUploadRetryTime = function(t) {
						ct("setMaxUploadRetryTime", [dt()], arguments), this.U.setMaxUploadRetryTime(t)
					}, Object.defineProperty(t.prototype, "maxOperationRetryTime", {
						get: function() {
							return this.U.maxOperationRetryTime()
						},
						enumerable: !0,
						configurable: !0
					}), t.prototype.setMaxOperationRetryTime = function(t) {
						ct("setMaxOperationRetryTime", [dt()], arguments), this.U.setMaxOperationRetryTime(t)
					}, Object.defineProperty(t.prototype, "app", {
						get: function() {
							return this.rt
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(t.prototype, "INTERNAL", {
						get: function() {
							return this.Nt
						},
						enumerable: !0,
						configurable: !0
					}), t
				}(),
				Ne = function() {
					function t(t) {
						this.ut = t
					}
					return t.prototype.delete = function() {
						return this.ut.U.deleteApp(), x(void 0)
					}, t
				}();
			e.registerStorage = Ht;
			var Oe = "storage";
			Ht(Xt.default)
		}
	}, [118])
} catch (t) {
	throw Error("Cannot instantiate firebase-storage.js - be sure to load firebase-app.js first.")
}
//# sourceMappingURL=firebase.js.map