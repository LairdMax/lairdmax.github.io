(function(t) {
    function e(e) {
        for (var i, r, s = e[0], c = e[1], u = e[2], l = 0, h = []; l < s.length; l++) r = s[l], Object.prototype.hasOwnProperty.call(o, r) && o[r] && h.push(o[r][0]), o[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        d && d(e);
        while (h.length) h.shift()();
        return a.push.apply(a, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < a.length; e++) {
            for (var n = a[e], i = !0, r = 1; r < n.length; r++) {
                var s = n[r];
                0 !== o[s] && (i = !1)
            }
            i && (a.splice(e--, 1), t = c(c.s = n[0]))
        }
        return t
    }
    var i = {},
        r = {
            app: 0
        },
        o = {
            app: 0
        },
        a = [];

    function s(t) {
        return c.p + "js/" + ({
            map: "map"
        }[t] || t) + "-legacy." + {
            "chunk-297fb264": "9c699cbd",
            map: "146c0eb2"
        }[t] + ".js"
    }

    function c(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(t) {
        var e = [],
            n = {
                "chunk-297fb264": 1,
                map: 1
            };
        r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function(e, n) {
            for (var i = "css/" + ({
                    map: "map"
                }[t] || t) + "." + {
                    "chunk-297fb264": "f25de8ff",
                    map: "a257dce6"
                }[t] + ".css", o = c.p + i, a = document.getElementsByTagName("link"), s = 0; s < a.length; s++) {
                var u = a[s],
                    l = u.getAttribute("data-href") || u.getAttribute("href");
                if ("stylesheet" === u.rel && (l === i || l === o)) return e()
            }
            var h = document.getElementsByTagName("style");
            for (s = 0; s < h.length; s++) {
                u = h[s], l = u.getAttribute("data-href");
                if (l === i || l === o) return e()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = e, d.onerror = function(e) {
                var i = e && e.target && e.target.src || o,
                    a = new Error("Loading CSS chunk " + t + " failed.\n(" + i + ")");
                a.code = "CSS_CHUNK_LOAD_FAILED", a.request = i, delete r[t], d.parentNode.removeChild(d), n(a)
            }, d.href = o;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d)
        })).then((function() {
            r[t] = 0
        })));
        var i = o[t];
        if (0 !== i)
            if (i) e.push(i[2]);
            else {
                var a = new Promise((function(e, n) {
                    i = o[t] = [e, n]
                }));
                e.push(i[2] = a);
                var u, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, c.nc && l.setAttribute("nonce", c.nc), l.src = s(t);
                var h = new Error;
                u = function(e) {
                    l.onerror = l.onload = null, clearTimeout(d);
                    var n = o[t];
                    if (0 !== n) {
                        if (n) {
                            var i = e && ("load" === e.type ? "missing" : e.type),
                                r = e && e.target && e.target.src;
                            h.message = "Loading chunk " + t + " failed.\n(" + i + ": " + r + ")", h.name = "ChunkLoadError", h.type = i, h.request = r, n[1](h)
                        }
                        o[t] = void 0
                    }
                };
                var d = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: l
                    })
                }), 12e4);
                l.onerror = l.onload = u, document.head.appendChild(l)
            }
        return Promise.all(e)
    }, c.m = t, c.c = i, c.d = function(t, e, n) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) c.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "/", c.oe = function(t) {
        throw console.error(t), t
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = u.push.bind(u);
    u.push = e, u = u.slice();
    for (var h = 0; h < u.length; h++) e(u[h]);
    var d = l;
    a.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "025e": function(t, e, n) {
        "use strict";
        n.d(e, "l", (function() {
            return s
        })), n.d(e, "h", (function() {
            return c
        })), n.d(e, "i", (function() {
            return u
        })), n.d(e, "g", (function() {
            return l
        })), n.d(e, "k", (function() {
            return h
        })), n.d(e, "b", (function() {
            return d
        })), n.d(e, "a", (function() {
            return p
        })), n.d(e, "e", (function() {
            return f
        })), n.d(e, "j", (function() {
            return m
        })), n.d(e, "f", (function() {
            return g
        })), n.d(e, "d", (function() {
            return v
        })), n.d(e, "c", (function() {
            return b
        }));
        n("ac4d"), n("8a81"), n("5df3"), n("1c4c"), n("7f7f"), n("6b54");
        var i = n("768b");
        n("ac6a");

        function r(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = o(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var a, s = !0,
                c = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return s = t.done, t
                },
                e: function(t) {
                    c = !0, a = t
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (c) throw a
                    }
                }
            }
        }

        function o(t, e) {
            if (t) {
                if ("string" === typeof t) return a(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
            }
        }

        function a(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }
        var s = window.devicePixelRatio >= 2 ? 2 : 1,
            c = function() {
                return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
            },
            u = function() {
                return screen.height > window.innerWidth && (90 == window.orientation || -90 == window.orientation) ? screen.height : window.innerWidth
            },
            l = function(t) {
                return "".concat(parseInt(t.slice(0, 2), 16), ", ").concat(parseInt(t.slice(2, 4), 16), ", ").concat(parseInt(t.slice(4, 6), 16))
            },
            h = function(t) {
                var e, n = {},
                    o = r(t.entries());
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var a = Object(i["a"])(e.value, 2),
                            s = a[0],
                            c = a[1];
                        n["--color-".concat(["top", "middle", "bottom"][s])] = "#" + c
                    }
                } catch (u) {
                    o.e(u)
                } finally {
                    o.f()
                }
                return n
            },
            d = function(t) {
                return {
                    type: "FeatureCollection",
                    features: t.map((function(t) {
                        return {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [t.longitude, t.latitude]
                            },
                            properties: {
                                id: t.id,
                                color: "#".concat(t.colors[1])
                            }
                        }
                    }))
                }
            },
            p = function(t, e) {
                var n = t < 0 ? e ? "W" : "S" : e ? "E" : "N",
                    i = 0 | Math.abs(t),
                    r = 60 * (Math.abs(t) - i) | 0;
                return "".concat(i, "°").concat(r, "'").concat(n)
            },
            f = function(t) {
                return new Promise((function(e, n) {
                    var i = new Image;
                    i.addEventListener("load", (function(t) {
                        return e(i)
                    })), i.addEventListener("error", (function() {
                        n(new Error("Failed to load photo ".concat(t)))
                    })), i.src = t
                }))
            },
            m = function(t, e) {
                var n = document.body.classList;
                return e ? n.add(t) : n.remove(t)
            },
            g = function() {
                return new Promise((function(t, e) {
                    var n = window.navigator.geolocation,
                        i = ["not_supported", "not_authorized", "unknown"];
                    n ? n.getCurrentPosition((function(e) {
                        return t(e.coords)
                    }), (function(t) {
                        return e(i[Math.min(t.code, i.length - 1)])
                    })) : (console.log("window.navigator.geolocation Not Supported"), e(i[0]))
                }))
            },
            v = function(t, e, n, i) {
                var r = Math.PI * t / 180,
                    o = Math.PI * n / 180;
                return 6371 * Math.acos(Math.min(1, Math.sin(r) * Math.sin(o) + Math.cos(r) * Math.cos(o) * Math.cos(Math.PI * (e - i) / 180)))
            },
            b = function() {
                return btoa(JSON.stringify({
                    app: "".concat(document.body.dataset.app, " ").concat(document.body.dataset.build),
                    device: navigator.userAgent,
                    origin: window.location.href
                }))
            }
    },
    "08c1": function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t._self._c;
                return t.isShown ? e("div", {
                    ref: "popover",
                    class: t.classList
                }, [t._t("default"), e("div", {
                    staticClass: "arrow",
                    attrs: {
                        "data-popper-arrow": ""
                    }
                })], 2) : t._e()
            },
            r = [],
            o = (n("7514"), n("6762"), n("2fdb"), n("75fc")),
            a = n("39c3"),
            s = {
                name: "Popover",
                props: ["reference", "options"],
                data: function() {
                    return {
                        popper: null,
                        isShown: !1,
                        isVisible: !1
                    }
                },
                mounted: function() {
                    this.reference.addEventListener("click", this.toggle)
                },
                beforeDestroy: function() {
                    this.reference.removeEventListener("click", this.toggle)
                },
                computed: {
                    classList: function() {
                        var t = ["popover", "context-".concat(this.$route.params.context || "default")].concat(Object(o["a"])(this.options.appearances));
                        return this.isVisible && t.push("visible"), t.join(" ")
                    }
                },
                methods: {
                    toggle: function(t) {
                        if (!t.srcElement.hasAttribute("data-popper-ignore")) {
                            var e = t.currentTarget;
                            this.isShown ? this.dismiss() : this.present(e)
                        }
                    },
                    dismiss: function() {
                        var t = this;
                        this.isVisible = !1, setTimeout((function() {
                            t.popper && (t.popper.destroy(), t.popper = null), t.isShown = !1, t.$emit("dismiss"), document.removeEventListener("click", t.documentDidClick)
                        }), 300)
                    },
                    present: function(t) {
                        var e = this;
                        this.isShown = !0, this.$emit("present"), requestAnimationFrame((function() {
                            return e.create(t)
                        }))
                    },
                    create: function(t) {
                        var e = Object.assign({}, this.options);
                        e.modifiers = [].concat(Object(o["a"])(e.modifiers), [{
                            name: "autoDismiss",
                            enabled: this.options.dismissEscaped,
                            phase: "main",
                            fn: this.autoDismiss
                        }]), this.popper = Object(a["a"])(t, this.$refs.popover, e), this.isVisible = !0, document.addEventListener("click", this.documentDidClick)
                    },
                    documentDidClick: function(t) {
                        var e = t.path || t.composedPath();
                        e.includes(this.$refs.popover) || e.find((function(t) {
                            return "viewer" === t.id
                        })) || this.isShown && this.options.dismissBlurred && this.dismiss()
                    },
                    update: function(t) {
                        this.isShown ? this.popper.update() : this.present(t)
                    },
                    autoDismiss: function(t) {
                        var e = t.state,
                            n = e.attributes.popper;
                        (n["data-popper-escaped"] && e.options.dismissEscaped || n["data-popper-reference-hidden"]) && this.dismiss()
                    }
                }
            },
            c = s,
            u = (n("1c4a"), n("2877")),
            l = Object(u["a"])(c, i, r, !1, null, "cbed73c4", null);
        e["a"] = l.exports
    },
    "0b25": function(t, e, n) {},
    "133f": function(t, e, n) {},
    "154f": function(t, e, n) {},
    1917: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "meta-panel"
                }, [e("header", [e("button", {
                    attrs: {
                        selected: t.isFirstSectionSelected
                    },
                    on: {
                        click: function(e) {
                            return t.select("category")
                        }
                    }
                }, [t._v(t._s(t.$t("meta-sections.metadata")))]), e("button", {
                    attrs: {
                        selected: !t.isFirstSectionSelected
                    },
                    on: {
                        click: function(e) {
                            return t.select("location")
                        }
                    }
                }, [t._v(t._s(t.$t("meta-sections.location")))]), e("button", {
                    staticClass: "close",
                    on: {
                        click: t.dismiss
                    }
                }, [t._m(0)])]), e("div", {
                    staticClass: "container",
                    attrs: {
                        id: "container",
                        "body-scroll-lock-ignore": ""
                    }
                }, [e("MetaPanelCell", {
                    ref: "category",
                    attrs: {
                        title: "category"
                    }
                }, [e("div", {
                    staticClass: "stars"
                }, [t._l(t.src.category, (function(t) {
                    return e("i", {
                        staticClass: "star filled"
                    })
                })), t._l(7 - t.src.category, (function(t) {
                    return e("i", {
                        staticClass: "star"
                    })
                }))], 2), e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.category))])]), e("MetaPanelCell", {
                    attrs: {
                        title: "captured"
                    }
                }, [e("span", {
                    staticClass: "content adaptive-text"
                }, [t._v(t._s(t.timeAgo))]), e("span", {
                    staticClass: "accessory footnote"
                }, [t._v(t._s(t.src.date))])]), e("MetaPanelCell", {
                    ref: "aperture",
                    attrs: {
                        title: "aperture"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v("ƒ/" + t._s(t.src.aperture))]), e("span", {
                    staticClass: "accessory icon"
                }, [e("i", {
                    staticClass: "aperture"
                })])]), e("MetaPanelCell", {
                    attrs: {
                        title: "shutter-speed"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.shutterSpeed))]), e("span", {
                    staticClass: "accessory icon"
                }, [e("i", {
                    staticClass: "shutter"
                })])]), e("MetaPanelCell", {
                    attrs: {
                        title: "focal-length"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.focus) + "mm")]), e("span", {
                    staticClass: "accessory icon"
                }, [e("i", {
                    staticClass: "focus"
                })])]), e("MetaPanelCell", {
                    attrs: {
                        title: "iso"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.iso))]), e("span", {
                    staticClass: "accessory icon iso"
                }, [e("i", {
                    staticClass: "iso"
                })])]), t.src.camera ? e("MetaPanelCell", {
                    ref: "camera",
                    attrs: {
                        title: "camera"
                    }
                }, [e("span", {
                    staticClass: "content adaptive-text"
                }, [t._v(t._s(t.src.camera))])]) : t._e(), t.src.lens ? e("MetaPanelCell", {
                    ref: "lens",
                    attrs: {
                        title: "lens"
                    }
                }, [e("span", {
                    staticClass: "content adaptive-text"
                }, [t._v(t._s(t.src.lens))]), t.src.lensAccessory ? e("span", {
                    staticClass: "accessory footnote"
                }, [t._v("+ " + t._s(t.src.lensAccessory))]) : t._e()]) : t._e(), e("MetaPanelCell", {
                    ref: "location",
                    staticClass: "medium blank",
                    attrs: {
                        title: ""
                    }
                }, [e("div", {
                    staticClass: "map"
                }, [t.isMapLoaded ? t._e() : e("InfiniteScroll", {
                    staticClass: "loading",
                    attrs: {
                        loading: !0
                    }
                }), e("Map", {
                    attrs: {
                        data: t.src.geojson,
                        embedded: !0
                    },
                    on: {
                        load: t.mapDidLoad
                    }
                })], 1), e("div", {
                    staticClass: "location"
                }, [e("span", [t._v(t._s(t.src.locationContext.fullDisplayName))])])]), e("MetaPanelCell", {
                    attrs: {
                        title: "latitude"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.latitudeDMS))]), e("span", {
                    staticClass: "accessory footnote"
                }, [t._v(t._s(t.src.latitude))])]), e("MetaPanelCell", {
                    attrs: {
                        title: "longitude"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.longitudeDMS))]), e("span", {
                    staticClass: "accessory footnote"
                }, [t._v(t._s(t.src.longitude))])]), e("MetaPanelCell", {
                    attrs: {
                        title: "elevation"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(Math.round(t.src.elevation)) + " m")])]), 0 != t.src.altitude ? e("MetaPanelCell", {
                    attrs: {
                        title: "altitude"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(Math.round(t.src.altitude)) + " m")])]) : t._e(), t.src.distance ? e("MetaPanelCell", {
                    ref: "distance",
                    attrs: {
                        title: "distance"
                    }
                }, [e("span", {
                    staticClass: "content large-text"
                }, [t._v(t._s(t.src.distance))])]) : t._e()], 1)])
            },
            r = [function() {
                var t = this,
                    e = t._self._c;
                return e("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [e("i", {
                    staticClass: "xmark"
                })])
            }],
            o = (n("6762"), n("2fdb"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "item"
                }, [e("div", {
                    staticClass: "cell"
                }, ["" != t.title ? e("h5", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t(t.title)))]) : t._e(), t._t("default")], 2)])
            }),
            a = [],
            s = {
                name: "MetaPanelCell",
                props: ["title"]
            },
            c = s,
            u = (n("97dc"), n("2877")),
            l = Object(u["a"])(c, o, a, !1, null, "637e97b2", null),
            h = l.exports,
            d = n("a513"),
            p = n("5a0c"),
            f = n.n(p),
            m = n("4208"),
            g = n.n(m);
        f.a.extend(g.a);
        var v = {
                name: "MetaPanel",
                props: ["src", "target", "animated"],
                components: {
                    MetaPanelCell: h,
                    InfiniteScroll: d["a"],
                    Map: function() {
                        return n.e("map").then(n.bind(null, "b822"))
                    }
                },
                data: function() {
                    return {
                        isFirstSectionSelected: !0,
                        isMapLoaded: !1
                    }
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.deinit()
                },
                computed: {
                    timeAgo: function() {
                        var t = f.a.unix(this.src.captured);
                        return navigator.language.includes("zh") ? (n("a471"), t.locale("zh-cn").fromNow()) : t.fromNow()
                    }
                },
                methods: {
                    init: function() {
                        var t = this;
                        this.updateHeightProperty(), window.addEventListener("resize", this.updateHeightProperty), document.getElementById("container").addEventListener("scroll", this.scrollListener), requestAnimationFrame((function() {
                            return t.scrollToTarget(t.target)
                        }))
                    },
                    deinit: function() {
                        window.removeEventListener("resize", this.updateHeightProperty)
                    },
                    scrollListener: function(t) {
                        var e = t.target.scrollTop,
                            n = this.$refs.location.$el.offsetTop - 80;
                        this.isFirstSectionSelected = e <= n
                    },
                    scrollToTarget: function() {
                        this.scrollTo(this.target, !1)
                    },
                    scrollTo: function(t, e) {
                        var n = this.$refs[t];
                        document.getElementById("container").scrollTo({
                            top: n ? n.$el.offsetTop - 65 : 0,
                            behavior: e ? "smooth" : "auto"
                        })
                    },
                    updateHeightProperty: function() {
                        var t = document.getElementById("container"),
                            e = t.firstChild;
                        e && t.style.setProperty("--unit-size", "".concat(e.offsetHeight, "px"))
                    },
                    mapDidLoad: function() {
                        this.isMapLoaded = !0
                    },
                    select: function(t) {
                        this.scrollTo(t, this.animated), this.$emit("select", t)
                    },
                    dismiss: function() {
                        this.$emit("dismiss")
                    }
                }
            },
            b = v,
            w = (n("7642"), Object(u["a"])(b, i, r, !1, null, "54f93a16", null));
        e["a"] = w.exports
    },
    "1c4a": function(t, e, n) {
        "use strict";
        n("5526")
    },
    "1ca5": function(t, e, n) {
        "use strict";
        n("a257")
    },
    "1edc": function(t, e, n) {
        "use strict";
        n("0b25")
    },
    "23cd": function(t, e, n) {},
    2477: function(t, e, n) {},
    "365c": function(t, e, n) {
        "use strict";
        var i = n("bc3a"),
            r = n.n(i),
            o = "//edge.camarts.cn/api/",
            a = function(t) {
                return r.a.get(o + t)
            };
        e["a"] = {
            fetchLibrary: function() {
                return a("list")
            },
            fetchPhoto: function(t) {
                return a("photo/".concat(t))
            }
        }
    },
    3849: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "showcase",
                    class: t.sizeClass,
                    style: t.container
                }, [t.expandable ? e("button", {
                    on: {
                        click: function(e) {
                            t.isExpanded = !t.isExpanded
                        }
                    }
                }, [t._v("+")]) : t._e(), e("PhotoView", {
                    attrs: {
                        id: t.src.id,
                        css: t.style,
                        fetched: t.fetched
                    }
                })], 1)
            },
            r = [],
            o = (n("ac4d"), n("8a81"), n("5df3"), n("1c4c"), n("7f7f"), n("6b54"), n("55dd"), function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "view",
                    style: t.css,
                    attrs: {
                        "data-item": t.id
                    }
                })
            }),
            a = [],
            s = {
                name: "PhotoView",
                props: ["id", "css"]
            },
            c = s,
            u = (n("1edc"), n("2877")),
            l = Object(u["a"])(c, o, a, !1, null, "2ce5b523", null),
            h = l.exports,
            d = n("9c9e"),
            p = n("025e");

        function f(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = m(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return a = t.done, t
                },
                e: function(t) {
                    s = !0, o = t
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function m(t, e) {
            if (t) {
                if ("string" === typeof t) return g(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0
            }
        }

        function g(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }
        var v = {
                name: "Showcase",
                props: ["src", "padding", "observer", "max-height"],
                mixins: [d["b"]],
                components: {
                    PhotoView: h
                },
                data: function() {
                    return {
                        fetched: !1,
                        isExpanded: !1,
                        placeholder: null,
                        viewWidth: Object(p["i"])(),
                        viewHeight: window.innerHeight - this.padding
                    }
                },
                watch: {
                    padding: "setSize",
                    "inViewport.fully": function(t) {
                        this.$emit("didEnterViewport", t, this.src.id)
                    },
                    "inViewport.now": function(t) {
                        t && !this.fetched && this.fetch()
                    }
                },
                mounted: function() {
                    this.init(), window.addEventListener("resize", this.setSize)
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.setSize)
                },
                methods: {
                    init: function() {
                        var t = this.$route.params.cell;
                        t && (this.fetch(), this.placeholder = t), void 0 !== this.observer && this.observer.observe(this.$el)
                    },
                    fetch: function() {
                        var t = this;
                        Object(p["e"])(this.file.url).then((function() {
                            return t.ready()
                        }))
                    },
                    ready: function() {
                        this.fetched = !0, this.$emit("fetched")
                    },
                    setSize: function() {
                        var t = this;
                        requestAnimationFrame((function() {
                            t.viewWidth = Object(p["i"])(), t.viewHeight = window.innerHeight - t.padding
                        }))
                    }
                },
                computed: {
                    file: function() {
                        var t, e = f(this.src.files.sort((function(t, e) {
                            return t.width - e.width
                        })));
                        try {
                            for (e.s(); !(t = e.n()).done;) {
                                var n = t.value,
                                    i = this.maxHeight ? 0 : .15,
                                    r = n.width + n.width * i,
                                    o = Math.min(this.viewWidth, Math.min(this.viewHeight, this.maxPhotoHeight) * n.ratio) * p["l"],
                                    a = r >= this.viewWidth * p["l"] ? n.width : r;
                                if (a >= o) return n
                            }
                        } catch (s) {
                            e.e(s)
                        } finally {
                            e.f()
                        }
                    },
                    style: function() {
                        return this.isExpanded ? {
                            "--url": 'url("'.concat(this.file.url, '")'),
                            width: this.file.width + "px",
                            height: this.file.height / p["l"] + "px"
                        } : {
                            "--url": 'url("'.concat(this.file.url, '")'),
                            paddingTop: this.file.height / this.file.width * 100 + "%"
                        }
                    },
                    container: function() {
                        return Object.assign({
                            "--width": this.containerWidth + "px",
                            "--shadow-color": Object(p["g"])(this.src.colors[2]),
                            "background-image": this.placeholder ? 'url("'.concat(this.placeholder.url, ' ")') : null
                        }, Object(p["k"])(this.src.colors))
                    },
                    containerWidth: function() {
                        return this.file.height / p["l"] <= this.viewHeight ? this.file.width / p["l"] : this.viewHeight * this.file.ratio
                    },
                    maxPhotoHeight: function() {
                        return "number" === typeof this.maxHeight ? this.maxHeight : p["l"] > 1 ? 800 : 1600
                    },
                    sizeClass: function() {
                        if (this.containerWidth >= this.viewWidth) return "filled"
                    },
                    expandable: function() {
                        return this.containerWidth > this.viewWidth && this.file.width / this.file.height > 1.8
                    }
                }
            },
            b = v,
            w = (n("da23"), Object(u["a"])(b, i, r, !1, null, "0b32190e", null));
        e["a"] = w.exports
    },
    "38de": function(t, e, n) {},
    4305: function(t, e, n) {
        "use strict";
        n("856d")
    },
    "472b": function(t, e, n) {
        "use strict";
        n("546a")
    },
    "47f3": function(t, e, n) {
        "use strict";
        n("63dd")
    },
    4809: function(t, e, n) {
        "use strict";
        n("b247")
    },
    "48fb": function(t, e, n) {
        "use strict";
        n("386d"), n("a481");
        var i = n("bc3a"),
            r = n.n(i),
            o = "https://stat.ms.dandyweng.com",
            a = o + "/api/activity",
            s = localStorage,
            c = {
                project: "camarts",
                platform: window.navigator.standalone ? "pwa" : "web"
            },
            u = function() {
                return {
                    url: location.href,
                    ref: document.referrer,
                    dpr: window.devicePixelRatio,
                    lang: document.documentElement.getAttribute("lang") || "unknown",
                    orien: window.orientation,
                    screen: "".concat(window.screen.width, "x").concat(window.screen.height),
                    viewport: "".concat(window.innerWidth, "x").concat(window.innerHeight)
                }
            },
            l = function(t) {
                var e = t.substring(t.indexOf("?") + 1, -1 === t.indexOf("&") ? t.length : t.indexOf("&")).replace("=", "");
                return e ? s.session_tag = e : null
            },
            h = function(t) {
                var e = s.session_tag || l(location.search),
                    n = s.session_token || s.getItem("session-token"),
                    i = Object.assign(c, u(), t);
                return location.search && window.history.replaceState(null, "", location.href.replace(location.search, "")), e && (i["client_tag"] = e), n ? (i["client_id"] = n, navigator.sendBeacon ? navigator.sendBeacon(a, JSON.stringify(i)) : r.a.post(a, i)) : r.a.post(a, i).then((function(t) {
                    return s.session_token = t.data
                }))
            };
        e["a"] = {
            visited: function(t) {
                h({
                    action: "visited",
                    subject: t
                })
            },
            seen: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unknown";
                h({
                    action: "seen",
                    context: n,
                    subject: e ? t + ":" + e : t
                })
            },
            selected: function(t, e) {
                h({
                    action: "map.selected",
                    point: [t.latitude.toFixed(6), t.longitude.toFixed(6)],
                    radius: Math.round(e)
                })
            }
        }
    },
    4941: function(t, e, n) {
        "use strict";
        n("7ad4")
    },
    "4a03": function(t) {
        t.exports = JSON.parse('{"head":{"title":{"full":"Camarts Photography","column":"%s Photos | Camarts","maps":"Maps"},"description":{"home":"Web App of Camarts Photography — a digital gallery of photographer Dandy Weng, with a library of thousands of photos captured on journeys around the world.","singular":"A photograph by Dandy Weng, captured with a {camera} in {location} in {year}.","maps":"Embark on a journey of the world and find your next travel destination with Camarts’ interactive map experience."}},"columns":{"nearby":"Nearby","faraway":"Faraway","essential":"Essential","recent":"Recent"},"nav":{"home":"Home","app":"Apps","about":"About","subscribe":"Follow"},"menu":{"share":"Share","copy-url":"Copy URL","about":"About Camarts","support":"Contact Support"},"meta-sections":{"metadata":"Metadata","location":"Location"},"show-more":"Show More","loading":"Loading…","category":"Category","exif":"EXIF","aperture":"Aperture","shutter-speed":"Shutter Speed","focal-length":"Focal Length","iso":"ISO","location":"Location","latitude":"Latitude","longitude":"Longitude","elevation":"Elevation","altitude":"Altitude","distance":"Distance","captured":"Captured","camera":"Camera","lens":"Lens","list-separators":[", "," & "],"share":{"title":"Camarts Photography","text":"A photo captured in {location}"},"url":{"about":"https://camartsphotography.com","support":"https://support.camartsphotography.com"},"exceptions":{"404":{"title":"Page not found.","message":"If you’re sure you entered the correct URL, the content might have been relocated or removed. How about taking a look at these lovely photos below instead?"},"legacy":{"title":"I’ve moved on...","message":"You’ve arrived at the new Camarts, which has replaced the old website, and the link you followed no longer works. <br><br>The finest legacy photos have been migrated here. Start exploring below or <a href=https://camartsphotography.com/a-brief-chronicle.html>click here</a> to learn more about the transition process."},"geo":{"title":"Location Unavailable","not_supported":"This browser or your device doesn’t support location services. Please try visiting this page on another device.","not_authorized":"Camarts doesn’t have permission to access your location. Please review your browser or device’s privacy settings.","unknown":"Your location can’t be determined at the moment. Please try again later and contact the developer if this issue persists."}}}')
    },
    "4e77": function(t, e, n) {},
    "52f3": function(t, e, n) {},
    "546a": function(t, e, n) {},
    5526: function(t, e, n) {},
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var i = n("2b0e"),
            r = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "app",
                        "sticky-container": ""
                    }
                }, [t.shouldDisplayHeader ? e("Header") : t._e(), e("router-view")], 1)
            },
            o = [],
            a = (n("28a5"), n("7f7f"), n("6762"), n("2fdb"), new i["a"]),
            s = function() {
                var t = this,
                    e = t._self._c;
                return e("header", {
                    attrs: {
                        id: "header",
                        context: t.context
                    }
                }, [e("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("aa17")
                    }
                }), e("Nav"), e("div", {
                    staticClass: "view-selector"
                }, [e("ViewSelector", {
                    directives: [{
                        name: "sticky",
                        rawName: "v-sticky"
                    }],
                    attrs: {
                        "sticky-offset": "{top: 8}",
                        "sticky-z-index": "11"
                    }
                })], 1)], 1)
            },
            c = [],
            u = n("c0eb"),
            l = function() {
                var t = this,
                    e = t._self._c;
                return e("nav", {
                    attrs: {
                        position: t.position
                    }
                }, [e("ul", [t.home ? t._e() : e("li", {
                    on: {
                        click: function(e) {
                            return t.select()
                        }
                    }
                }, [e("router-link", {
                    attrs: {
                        to: {
                            name: "home"
                        }
                    }
                }, [t._v(t._s(t.$t("nav.home")))])], 1), e("li", {
                    staticClass: "app",
                    attrs: {
                        id: t.appTriggerID
                    }
                }, [e("a", {
                    attrs: {
                        href: "javascript:;"
                    }
                }, [t._v(t._s(t.$t("nav.app")))])]), e("li", {
                    staticClass: "subscribe",
                    attrs: {
                        id: t.socialTriggerID
                    }
                }, [e("a", {
                    attrs: {
                        href: "javascript:;"
                    }
                }, [t._v(t._s(t.$t("nav.subscribe")))])]), e("li", {
                    staticClass: "about",
                    attrs: {
                        id: t.aboutTriggerID
                    }
                }, [e("a", {
                    attrs: {
                        href: "javascript:;"
                    }
                }, [t._v(t._s(t.$t("nav.about")))])])]), t.aboutTrigger ? e("Popover", {
                    attrs: {
                        reference: t.aboutTrigger,
                        options: t.popoverOptions
                    }
                }, [e("div", {
                    staticClass: "menu-content"
                }, [e("a", {
                    attrs: {
                        href: t.$t("url.about"),
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [t._v(t._s(t.$t("menu.about")))]), e("a", {
                    attrs: {
                        href: t.supportURL,
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [t._v(t._s(t.$t("menu.support")))])])]) : t._e(), t.appTrigger ? e("Popover", {
                    attrs: {
                        reference: t.appTrigger,
                        options: t.popoverOptions
                    }
                }, [e("div", {
                    staticClass: "menu-content"
                }, [e("a", {
                    attrs: {
                        href: "https://apps.apple.com/app/camarts-photography/id1504413909",
                        target: "_blank",
                        rel: "external"
                    }
                }, [t._v("App Store")]), e("a", {
                    attrs: {
                        href: "https://play.google.com/store/apps/details?id=com.dandyweng.camarts",
                        target: "_blank",
                        rel: "external"
                    }
                }, [t._v("Google Play")])])]) : t._e(), t.socialTrigger ? e("Popover", {
                    attrs: {
                        reference: t.socialTrigger,
                        options: t.popoverOptions
                    }
                }, [e("div", {
                    staticClass: "social-panel"
                }, [e("a", {
                    attrs: {
                        href: "https://twitter.com/camarts_",
                        title: "Twitter",
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [e("i", {
                    staticClass: "twitter"
                })]), e("a", {
                    attrs: {
                        href: "https://www.instagram.com/dandyweng",
                        title: "Instagram",
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [e("i", {
                    staticClass: "instagram"
                })]), e("a", {
                    attrs: {
                        href: "https://weibo.com/u/7415009579",
                        hreflang: "zh-Hans",
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [e("i", {
                    staticClass: "weibo"
                })]), e("a", {
                    attrs: {
                        href: "http://mp.weixin.qq.com/mp/homepage?__biz=MzAxMzMxMTIwNQ==&hid=1&sn=1f6b4ed472f1ccccbd9e8d1c1d700789",
                        hreflang: "zh-Hans",
                        target: "_blank",
                        rel: "external noopener"
                    }
                }, [e("i", {
                    staticClass: "wechat"
                })])])]) : t._e()], 1)
            },
            h = [],
            d = (n("6b54"), n("08c1")),
            p = n("025e"),
            f = {
                name: "Nav",
                props: ["position"],
                components: {
                    Popover: d["a"]
                },
                data: function() {
                    return {
                        current: "",
                        aboutTrigger: null,
                        aboutTriggerID: "",
                        appTrigger: null,
                        appTriggerID: "",
                        socialTrigger: null,
                        socialTriggerID: "",
                        popoverOptions: {
                            placement: "bottom" == this.position ? "top" : "bottom",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [0, 6]
                                }
                            }],
                            dismissBlurred: !0,
                            appearances: ["dropdown"]
                        }
                    }
                },
                created: function() {
                    this.aboutTriggerID = "bottom" == this.position ? "bottom-about-trigger" : "about-trigger", this.appTriggerID = "bottom" == this.position ? "bottom-app-trigger" : "app-trigger", this.socialTriggerID = "bottom" == this.position ? "bottom-social-trigger" : "social-trigger", window.addEventListener("scroll", this.viewDidScroll)
                },
                mounted: function() {
                    this.aboutTrigger = document.getElementById(this.aboutTriggerID), this.appTrigger = document.getElementById(this.appTriggerID), this.socialTrigger = document.getElementById(this.socialTriggerID)
                },
                destroyed: function() {
                    window.removeEventListener("scroll", this.viewDidScroll)
                },
                methods: {
                    viewDidScroll: function() {
                        this.select()
                    },
                    select: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.current = this.isSelected(t) ? "" : t
                    },
                    isSelected: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        return this.current == t
                    }
                },
                computed: {
                    supportURL: function() {
                        var t = new URL(this.$t("url.support"));
                        return t.searchParams.set("diagnostics", Object(p["c"])()), t.toString()
                    },
                    home: function() {
                        try {
                            return this.$route.name.includes("home")
                        } catch (t) {
                            return !1
                        }
                    }
                }
            },
            m = f,
            g = (n("4941"), n("2877")),
            v = Object(g["a"])(m, l, h, !1, null, "7d36c99c", null),
            b = v.exports,
            w = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "view-selector-container"
                }, [e("ul", [e("li", {
                    attrs: {
                        selected: "feed" == t.current
                    },
                    on: {
                        click: function(e) {
                            return t.select("feed")
                        }
                    }
                }, [e("i", {
                    staticClass: "feed"
                })]), e("li", {
                    attrs: {
                        selected: "grid" == t.current
                    },
                    on: {
                        click: function(e) {
                            return t.select("grid")
                        }
                    }
                }, [e("i", {
                    staticClass: "grid"
                })]), e("li", {
                    attrs: {
                        selected: "map" == t.current
                    },
                    on: {
                        click: function(e) {
                            return t.select("map")
                        }
                    }
                }, [e("i", {
                    staticClass: "map"
                })])])])
            },
            y = [],
            x = {
                name: "ViewSelector",
                data: function() {
                    return {
                        current: "feed"
                    }
                },
                watch: {
                    $route: "init"
                },
                mounted: function() {
                    this.init()
                },
                methods: {
                    init: function() {
                        this.current = localStorage.getItem("view-selection") || this.current, "maps" == this.$route.name ? this.current = "map" : "map" == this.current && (this.current = "feed")
                    },
                    select: function(t) {
                        t != this.current && (this.current = t, a.$emit("viewStyleDidChange", t), "map" != t && localStorage.setItem("view-selection", t))
                    }
                }
            },
            _ = x,
            C = (n("bf2b"), Object(g["a"])(_, w, y, !1, null, "407ef784", null)),
            k = C.exports,
            O = {
                name: "Header",
                components: {
                    Nav: b,
                    ViewSelector: k
                },
                directives: {
                    Sticky: u["a"]
                },
                data: function() {
                    return {
                        context: "feed"
                    }
                },
                mounted: function() {
                    this.init()
                },
                watch: {
                    $route: "init"
                },
                methods: {
                    init: function() {
                        this.context = this.$route.name || this.context
                    }
                }
            },
            S = O,
            P = (n("472b"), Object(g["a"])(S, s, c, !1, null, "6059c918", null)),
            j = P.exports,
            M = {
                name: "App",
                metaInfo: {
                    title: "",
                    titleTemplate: "%s | Camarts"
                },
                components: {
                    Header: j
                },
                mounted: function() {
                    this.init()
                },
                beforeDestroy: function() {
                    this.deinit()
                },
                computed: {
                    shouldDisplayHeader: function() {
                        return !["singular", "404"].includes(this.$route.name)
                    }
                },
                created: function() {
                    this.updateColumnIfNeeded()
                },
                methods: {
                    init: function() {
                        var t = this;
                        this.updateRootProperty(), Object(p["j"])("pwa", window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches), Object(p["j"])("touchscreen", "ontouchstart" in document.documentElement), Object(p["j"])("ios", (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream), window.addEventListener("resize", this.updateRootProperty), a.$on("viewStyleDidChange", (function(e) {
                            return t.updateStyle(e)
                        }))
                    },
                    deinit: function() {
                        var t = this;
                        window.removeEventListener("resize", this.updateRootProperty), a.$off("viewStyleDidChange", (function(e) {
                            return t.updateStyle(e)
                        }))
                    },
                    updateColumnIfNeeded: function() {
                        if (this.$route.name.includes("home:")) {
                            var t = this.$route.name.split(":")[1];
                            localStorage.setItem("column-selection", t)
                        }
                    },
                    updateStyle: function(t) {
                        var e = "map" == t ? "maps" : {
                            name: "home",
                            params: {
                                style: t
                            }
                        };
                        this.$router.push(e).catch((function(t) {}))
                    },
                    updateRootProperty: function() {
                        var t = .01 * window.innerHeight;
                        document.body.style.setProperty("--dvh", "".concat(t, "px"))
                    }
                }
            },
            I = M,
            D = (n("4809"), Object(g["a"])(I, r, o, !1, null, null, null)),
            $ = D.exports,
            L = n("8c4f"),
            V = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "home",
                        "data-sticky-container": ""
                    }
                }, [e("ColumnBar", {
                    directives: [{
                        name: "sticky",
                        rawName: "v-sticky"
                    }]
                }), t.isQuickView ? t._e() : e("div", {
                    staticClass: "content"
                }, [t.errorMessage ? e("Notice", {
                    attrs: {
                        title: "exceptions.geo.title",
                        message: t.errorMessage
                    }
                }) : t._e(), "feed" == t.style ? e("Feed", {
                    ref: "feed",
                    attrs: {
                        photos: t.photos,
                        fetched: t.fetched,
                        hasMore: t.hasMore
                    }
                }) : t._e(), "grid" == t.style ? e("Grid", {
                    ref: "grid",
                    attrs: {
                        photos: t.photos,
                        fetched: t.fetched,
                        hasMore: t.hasMore,
                        id: "home-grid"
                    }
                }) : t._e(), t.hasMore ? e("InfiniteScroll", {
                    attrs: {
                        auto: t.fetched,
                        loading: !t.fetched
                    },
                    on: {
                        triggered: t.fetchMore
                    }
                }) : t._e()], 1), t.isQuickView ? e("Carousel", {
                    attrs: {
                        photos: t.photos,
                        index: t.currentIndex
                    },
                    on: {
                        indexDidChange: t.carouselIndexDidChange
                    }
                }) : t._e(), t.fetched && !t.hasMore ? e("Footer") : t._e()], 1)
            },
            T = [],
            A = (n("8e6e"), n("ac6a"), n("456d"), n("75fc")),
            E = (n("96cf"), n("3b8d")),
            R = (n("7514"), n("20d6"), n("bd86")),
            N = n("365c"),
            H = (n("55dd"), n("5df3"), n("1c4c"), n("d225")),
            F = n("b0b4"),
            z = n("bc3a"),
            q = n.n(z),
            B = "//edge.camarts.cn/api",
            W = function() {
                return q.a.get("".concat(B, "/location"))
            },
            U = function() {
                function t(e, n) {
                    Object(H["a"])(this, t), Object.assign(this, e), this.userLocale = n
                }
                return Object(F["a"])(t, [{
                    key: "name",
                    get: function() {
                        return this.getName(!1)
                    }
                }, {
                    key: "shortName",
                    get: function() {
                        return this.getName(!0)
                    }
                }, {
                    key: "fullName",
                    get: function() {
                        var t = this.localized,
                            e = t.suffix && (this.userLocale.isCJK || t.tags && t.tags.includes("suffix-is-mandatory"));
                        return e ? t.name + this.userLocale.suffixSeparator + t.suffix : t.name
                    }
                }, {
                    key: "localized",
                    get: function() {
                        var t = this;
                        return this.names.filter((function(e) {
                            return e.languages.includes(t.userLocale.code)
                        }))[0]
                    }
                }, {
                    key: "getName",
                    value: function(t) {
                        var e = this.localized,
                            n = t && e.name_abbrev || e.name;
                        return e.suffix && e.tags && e.tags.includes("suffix-is-mandatory") && (n += this.userLocale.suffixSeparator + e.suffix), n
                    }
                }]), t
            }(),
            G = function() {
                function t(e, n, i, r) {
                    var o = this;
                    Object(H["a"])(this, t), Object(R["a"])(this, "getByID", (function(t) {
                        return o.path.filter((function(e) {
                            return e.id == t
                        }))[0] || !1
                    })), Object(R["a"])(this, "getByTag", (function(t) {
                        return o.path.filter((function(e) {
                            return e.tags.includes(t)
                        }))[0] || !1
                    })), this.id = n, this.contextID = i || r.locationRootContextID, this.userLocale = r, this.path = this.getPathLocation(e), this.isAvailable = void 0 !== this.path
                }
                return Object(F["a"])(t, [{
                    key: "displayName",
                    get: function() {
                        if (!this.isAvailable) return "";
                        var t = this.select(this.id, this.contextID).map((function(t) {
                            return t.shortName
                        }));
                        return this.userLocale.isCJK ? t.join(" · ") : t.reverse().join(", ")
                    }
                }, {
                    key: "fullDisplayName",
                    get: function() {
                        if (!this.isAvailable) return "";
                        var t = Math.min(2, this.path.length - 1),
                            e = this.path.slice(t).map((function(t) {
                                return t.tags.includes("aal-1") ? t.shortName : t.fullName
                            }));
                        return this.userLocale.isCJK ? e.join("") : e.reverse().join(", ")
                    }
                }, {
                    key: "components",
                    get: function() {
                        if (!this.isAvailable) return "";
                        var t = Math.min(2, this.path.length - 1);
                        return this.path.slice(t).map((function(t) {
                            return t.fullName
                        }))
                    }
                }, {
                    key: "select",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = this.path,
                            i = !!e && this.getByID(e),
                            r = i || this.getByTag("aal-0"),
                            o = n.indexOf(r),
                            a = n[o + 1],
                            s = n[o + 2],
                            c = n[o + 3],
                            u = [i ? a : r];
                        if (a && a.tags.includes("prominent") && !i) u.push(a);
                        else if (c && (c.tags.includes("prominent") || s.tags.includes("pass"))) u.push(c);
                        else {
                            var l = i ? null : a;
                            u.push(s || l)
                        }
                        return u.filter((function(t) {
                            return t
                        }))
                    }
                }, {
                    key: "getPath",
                    value: function(t) {
                        var e, n = this;
                        return t.id === this.id ? [t] : ((t.nodes || []).some((function(t) {
                            return e = n.getPath(t)
                        })), e && [t].concat(Object(A["a"])(e)).filter((function(t) {
                            return t.id
                        })))
                    }
                }, {
                    key: "getPathLocation",
                    value: function(t) {
                        var e = this,
                            n = this.getPath(t);
                        return n ? n.map((function(t) {
                            return new U(t, e.userLocale)
                        })) : n
                    }
                }]), t
            }(),
            J = G,
            Q = function() {
                function t(e) {
                    Object(H["a"])(this, t), Object.assign(this, e), this.colors = e.colors.split("-"), this.files = this.files.map((function(t) {
                        return new K(t)
                    }))
                }
                return Object(F["a"])(t, [{
                    key: "setEquipments",
                    value: function(t) {
                        var e = this;
                        this.equipments = t.filter((function(t) {
                            return e.equipments.split(",").includes(String(t.id))
                        }))
                    }
                }, {
                    key: "setLocation",
                    value: function(t) {
                        this.locationContext = null, t.setLocation(this)
                    }
                }, {
                    key: "thumbnail",
                    get: function() {
                        return this.files.filter((function(t) {
                            return 400 == Math.min(t.height, t.width)
                        }))[0]
                    }
                }, {
                    key: "date",
                    get: function() {
                        var t = navigator.language;
                        return new Date(1e3 * this.captured).toLocaleDateString(t, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })
                    }
                }, {
                    key: "shutterSpeed",
                    get: function() {
                        var t = this.shutter;
                        return t >= 1 ? "".concat(t, "s") : "1/".concat(Math.round(1 / t), "s")
                    }
                }, {
                    key: "camera",
                    get: function() {
                        try {
                            var t = this.equipments.filter((function(t) {
                                return "camera" == t.type
                            }))[0];
                            return "".concat(t.brand, " ").concat(t.model)
                        } catch (e) {
                            return null
                        }
                    }
                }, {
                    key: "lens",
                    get: function() {
                        try {
                            var t = this.equipments.filter((function(t) {
                                    return "lens" == t.type
                                }))[0],
                                e = ["ASPH.", "USM", "IS", "OSS", "GM"];
                            return t.model.split("+")[0].split(" ").filter((function(t) {
                                return !e.includes(t)
                            })).join(" ")
                        } catch (n) {
                            return null
                        }
                    }
                }, {
                    key: "lensAccessory",
                    get: function() {
                        try {
                            var t = this.equipments.filter((function(t) {
                                return "lens" == t.type
                            }))[0];
                            return t.model.split("+")[1]
                        } catch (e) {
                            return null
                        }
                    }
                }, {
                    key: "latitudeDMS",
                    get: function() {
                        return Object(p["a"])(this.latitude, !1)
                    }
                }, {
                    key: "longitudeDMS",
                    get: function() {
                        return Object(p["a"])(this.longitude, !0)
                    }
                }, {
                    key: "geojson",
                    get: function() {
                        return Object(p["b"])([this])
                    }
                }, {
                    key: "distance",
                    get: function() {
                        var t = sessionStorage.getItem("coordinates");
                        if (t) {
                            var e = JSON.parse(t),
                                n = Object(p["d"])(e.latitude, e.longitude, this.latitude, this.longitude),
                                i = n >= 10 ? Math.round(n) : +(Math.round(n + "e+1") + "e-1");
                            return i >= 1 ? "".concat(i.toLocaleString(), " km") : "".concat(Math.round(1e3 * n), "m")
                        }
                        return !1
                    }
                }]), t
            }(),
            K = function() {
                function t(e) {
                    Object(H["a"])(this, t), Object.assign(this, e)
                }
                return Object(F["a"])(t, [{
                    key: "url",
                    get: function() {
                        return "//library.cdn.camartsphotography.com/".concat(this.name, ".jpg")
                    }
                }, {
                    key: "ratio",
                    get: function() {
                        return this.width / this.height
                    }
                }]), t
            }(),
            Y = function() {
                function t() {
                    Object(H["a"])(this, t), this.location = new X
                }
                return Object(F["a"])(t, [{
                    key: "set",
                    value: function(t) {
                        Object.assign(this, t)
                    }
                }, {
                    key: "all",
                    get: function() {
                        var t = this;
                        return this.photos.map((function(e) {
                            return t.newPhoto(e)
                        }))
                    }
                }, {
                    key: "fetch",
                    value: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            var e;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, N["a"].fetchLibrary();
                                    case 2:
                                        return e = t.sent, this.set(e.data["data"]), t.abrupt("return", this);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "fetchPhoto",
                    value: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t(e) {
                            var n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, N["a"].fetchPhoto(e);
                                    case 2:
                                        return n = t.sent, this.set(n.data["data"]), t.abrupt("return", this.newPhoto(this.photo));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "getPhoto",
                    value: function(t) {
                        var e = this.photos.find((function(e) {
                            return e.id === t
                        }));
                        return this.newPhoto(e)
                    }
                }, {
                    key: "queryPhotos",
                    value: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(t) {
                                return t
                            };
                        return e(this.photos).map((function(e) {
                            return t.newPhoto(e)
                        }))
                    }
                }, {
                    key: "nextBatch",
                    value: function(t, e) {
                        var n = this,
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function(t) {
                                return t
                            };
                        return i(Array.from(this.photos)).slice((t - 1) * e, t * e).map((function(t) {
                            return n.newPhoto(t)
                        }))
                    }
                }, {
                    key: "newPhoto",
                    value: function(t) {
                        var e = new Q(t);
                        return e.setEquipments(this.equipments), e.setLocation(this.location), e
                    }
                }, {
                    key: "getGeoDescription",
                    value: function(t, e, n) {
                        var i = this.queryPhotos(t).map((function(t) {
                            return t.locationContext.path
                        }));
                        return this.location.getDescriptionStrings(i, e, n)
                    }
                }]), t
            }(),
            X = function() {
                function t() {
                    Object(H["a"])(this, t), Object(R["a"])(this, "queue", []), this.fetch()
                }
                return Object(F["a"])(t, [{
                    key: "set",
                    value: function(t) {
                        var e = this;
                        Object.assign(this, t), this.userLocale = new Z(localStorage.getItem("locale")), this.queue.forEach((function(t) {
                            t = e.setLocation(t)
                        }))
                    }
                }, {
                    key: "fetch",
                    value: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t(e) {
                            var n, i, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = "data_location", i = localStorage.getItem(n), !i || e) {
                                            t.next = 5;
                                            break
                                        }
                                        return this.set(JSON.parse(i)), t.abrupt("return");
                                    case 5:
                                        if (!this.isFetchingLocationData) {
                                            t.next = 7;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 7:
                                        return this.isFetchingLocationData = !0, t.next = 10, W();
                                    case 10:
                                        r = t.sent, e !== r.data._version ? (localStorage.setItem(n, JSON.stringify(r.data)), this.set(r.data)) : console.warn("Unable to fetch a valid LocationData. Wait for CDN propagation and try again."), this.isFetchingLocationData = !1;
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                }, {
                    key: "setLocation",
                    value: function(t) {
                        var e = this.data;
                        if (e) {
                            var n = new J(e, t.location_id, null, this.userLocale);
                            if (n.isAvailable) return t.locationContext = n, t;
                            this.queue.push(t), this.fetch(this._version)
                        } else this.queue.push(t)
                    }
                }, {
                    key: "getDescriptionStrings",
                    value: function(t, e, n) {
                        var i = n,
                            r = this.getRepresentative(t, e),
                            o = r.pop(),
                            a = r.map((function(t) {
                                return t.name
                            })).join(i[0]) + i[1] + o.name,
                            s = new J(this.data, o.id, null, this.userLocale),
                            c = s.path.map((function(t) {
                                return t.fullName
                            })).slice(1, -1);
                        return c.length > 1 && (c = c.slice(1)), {
                            primary: 0 == r.length ? o.fullName : a,
                            secondary: this.userLocale.isCJK ? c.join("") : c.reverse().join(", ")
                        }
                    }
                }, {
                    key: "getRepresentative",
                    value: function(t, e) {
                        for (var n = t.sort((function(t, e) {
                                return e.length - t.length
                            }))[0].length, i = [], r = function(e) {
                                var n = [];
                                t.map((function(t) {
                                    return t[e]
                                })).filter((function(t) {
                                    return t
                                })).forEach((function(t) {
                                    n.some((function(e) {
                                        return e.id === t.id
                                    })) || n.push(t)
                                })), i.push(n)
                            }, o = 0; o < n; o++) r(o);
                        for (var a = 0; a < i.length; a++) {
                            var s = i[a];
                            if (!(1 == s.length && a < i.length - 1)) return s.length > e ? i[a - 1] : s
                        }
                    }
                }]), t
            }(),
            Z = function() {
                function t(e) {
                    Object(H["a"])(this, t), this.code = e
                }
                return Object(F["a"])(t, [{
                    key: "isCJK",
                    get: function() {
                        return this.code.includes("zh")
                    }
                }, {
                    key: "suffixSeparator",
                    get: function() {
                        return this.isCJK ? "" : " "
                    }
                }, {
                    key: "locationRootContextID",
                    get: function() {
                        var t = this,
                            e = function(e) {
                                return t.code.includes(e)
                            };
                        return e("zh") ? "QVBQ" : e("US") ? "bNwQ" : void 0
                    }
                }]), t
            }(),
            tt = new Y,
            et = function() {
                var t = this,
                    e = t._self._c;
                return e("div", [e("div", {
                    ref: "grid",
                    staticClass: "grid",
                    attrs: {
                        id: t.id
                    }
                }, t._l(t.photos, (function(t) {
                    return e("GridCell", {
                        key: t.id,
                        attrs: {
                            src: t
                        }
                    })
                })), 1)])
            },
            nt = [],
            it = function() {
                var t = this,
                    e = t._self._c;
                return e("router-link", {
                    ref: "cell",
                    attrs: {
                        to: t.route,
                        context: t.$route.params.context
                    }
                }, [e("div", {
                    ref: "item",
                    staticClass: "item",
                    style: t.style,
                    attrs: {
                        selected: t.isSelected,
                        "data-item": t.src.id
                    }
                }, [e("div", {
                    staticClass: "cell",
                    attrs: {
                        fetched: t.fetched
                    }
                })])])
            },
            rt = [],
            ot = n("9c9e"),
            at = {
                name: "GridCell",
                props: ["src", "height"],
                mixins: [ot["b"]],
                data: function() {
                    return {
                        fetched: !1
                    }
                },
                watch: {
                    "inViewport.now": function(t) {
                        var e = this;
                        t && !this.fetched && Object(p["e"])(this.file.url).then((function() {
                            return e.fetched = !0
                        }))
                    }
                },
                computed: {
                    style: function() {
                        return Object.assign({
                            "--url": "url('" + this.file.url + "')",
                            "--ratio": this.file.height / this.file.width * 100 + "%",
                            "--shadow-color": Object(p["g"])(this.src.colors[2])
                        }, Object(p["k"])(this.src.colors))
                    },
                    file: function() {
                        return this.src.thumbnail
                    },
                    route: function() {
                        var t, e = this,
                            n = this.src,
                            i = this.$route.name;
                        return t = "home" === i || i.includes("home:") ? "home-singular" : "maps" === i ? "map-singular" : this.$route.name, {
                            name: t,
                            params: {
                                id: n.id,
                                cell: {
                                    item: n,
                                    url: this.file.url,
                                    rect: function() {
                                        return e.$refs.item.getBoundingClientRect() || DOMRect()
                                    }
                                },
                                context: "maps" === i ? "map" : "grid"
                            }
                        }
                    },
                    isSelected: function() {
                        return this.$route.params.id === this.src.id && "grid" == this.$route.params.context
                    }
                }
            },
            st = at,
            ct = (n("f63f"), Object(g["a"])(st, it, rt, !1, null, "62c6daa4", null)),
            ut = ct.exports,
            lt = n("58f1"),
            ht = n.n(lt),
            dt = n("e16c"),
            pt = n.n(dt),
            ft = {
                name: "Grid",
                props: ["id", "photos", "fetched", "hasMore", "embedded"],
                components: {
                    GridCell: ut
                },
                mounted: function() {
                    this.init()
                },
                watch: {
                    photos: "init"
                },
                methods: {
                    init: function() {
                        this.fetched && (this.tiltInit(), this.layoutInit())
                    },
                    tiltInit: function() {
                        "ontouchstart" in document.documentElement || this.embedded || requestAnimationFrame((function() {
                            return ht.a.init(document.querySelectorAll(".grid .item"), {
                                max: 8,
                                speed: 750,
                                scale: 1.1,
                                glare: !0,
                                "max-glare": Object(p["h"])() ? .1 : .382
                            })
                        }))
                    },
                    layoutInit: function() {
                        pt()({
                            container: "#" + this.id,
                            margin: 45,
                            columns: 4,
                            breakAt: {
                                1920: {
                                    columns: 3
                                },
                                960: {
                                    margin: 16
                                },
                                800: {
                                    columns: 2
                                },
                                580: {
                                    columns: 3,
                                    margin: 2
                                }
                            },
                            useContainerForBreakpoints: this.embedded
                        }), requestAnimationFrame((function() {
                            window.scrollTo(window.scrollX, window.scrollY + 1)
                        }))
                    }
                }
            },
            mt = ft,
            gt = (n("aca5"), Object(g["a"])(mt, et, nt, !1, null, "801df05a", null)),
            vt = gt.exports,
            bt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "feed"
                    }
                }, t._l(t.photos, (function(n) {
                    return e("section", [e("Showcase", {
                        attrs: {
                            src: n,
                            padding: 60,
                            "max-height": 800
                        },
                        on: {
                            didEnterViewport: t.photoInView
                        },
                        nativeOn: {
                            click: function(e) {
                                return t.push(e, n)
                            }
                        }
                    }), e("Meta", {
                        attrs: {
                            src: n
                        }
                    })], 1)
                })), 0)
            },
            wt = [],
            yt = n("48fb"),
            xt = n("a9fb"),
            _t = function() {
                var t = this,
                    e = t._self._c;
                return e("section", [e("header", [e("h2", [t._v(t._s(t.$t(t.name)))])]), t._t("default")], 2)
            },
            Ct = [],
            kt = {
                name: "Section",
                props: ["name"]
            },
            Ot = kt,
            St = (n("d581"), Object(g["a"])(Ot, _t, Ct, !1, null, "35227aba", null)),
            Pt = St.exports,
            jt = n("3849"),
            Mt = {
                name: "Feed",
                props: ["photos", "fetched", "hasMore"],
                components: {
                    Meta: xt["a"],
                    Section: Pt,
                    Showcase: jt["a"]
                },
                data: function() {
                    return {
                        seen: [],
                        photoInViewID: ""
                    }
                },
                mounted: function() {
                    yt["a"].visited("home")
                },
                methods: {
                    push: function(t, e) {
                        this.$router.push({
                            name: "home-singular",
                            params: {
                                id: e.id,
                                cell: {
                                    photo: e,
                                    url: e.thumbnail.url,
                                    rect: function() {
                                        return t.target.getBoundingClientRect() || t.target.DOMRect()
                                    }
                                },
                                context: "feed"
                            }
                        }).catch((function(t) {}))
                    },
                    photoInView: function(t, e) {
                        var n = this;
                        if (t) {
                            if (this.photoInViewID = e, this.seen.includes(e)) return;
                            setTimeout((function() {
                                e === n.photoInViewID && (yt["a"].seen("photo", e, "feed"), n.$log("Seen photo ".concat(e, " @ feed")), n.seen.push(e))
                            }), 500)
                        }
                    }
                }
            },
            It = Mt,
            Dt = Object(g["a"])(It, bt, wt, !1, null, null, null),
            $t = Dt.exports,
            Lt = function() {
                var t = this,
                    e = t._self._c;
                return e("footer", [e("Nav", {
                    attrs: {
                        position: "bottom"
                    }
                }), t._m(0)], 1)
            },
            Vt = [function() {
                var t = this,
                    e = t._self._c;
                return e("p", {
                    staticClass: "copyright"
                }, [t._v("\n\t\tPowered by "), e("a", {
                    attrs: {
                        href: "https://camarts.io",
                        target: "_blank",
                        rel: "external"
                    }
                }, [t._v("Camarts.io")]), t._v(", designed and developed by "), e("a", {
                    attrs: {
                        href: "https://www.dandyweng.com",
                        target: "_blank",
                        rel: "author external"
                    }
                }, [t._v("Dandy Weng")]), t._v("."), e("br"), t._v("\n\t\tCopyright © 2023 Camarts. All Rights Reserved.\n\t")])
            }],
            Tt = {
                name: "Footer",
                mixins: [ot["b"]],
                components: {
                    Nav: b
                },
                data: function() {
                    return {
                        seen: !1
                    }
                },
                watch: {
                    "inViewport.now": function(t) {
                        t && !this.seen && (this.seen = !0, yt["a"].seen("footer"))
                    }
                }
            },
            At = Tt,
            Et = (n("1ca5"), Object(g["a"])(At, Lt, Vt, !1, null, "17d64fff", null)),
            Rt = Et.exports,
            Nt = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    class: t.appearance
                }, [e("h2", [t._v(t._s(t.$t(t.title)))]), e("p", {
                    domProps: {
                        innerHTML: t._s(t.content)
                    }
                })])
            },
            Ht = [],
            Ft = {
                name: "Notice",
                props: ["title", "message", "appearance"],
                computed: {
                    content: function() {
                        return this.$t(this.message)
                    }
                }
            },
            zt = Ft,
            qt = (n("e7df"), Object(g["a"])(zt, Nt, Ht, !1, null, "7091de0a", null)),
            Bt = qt.exports,
            Wt = function() {
                var t = this,
                    e = t._self._c;
                return e("nav", {
                    attrs: {
                        id: "column-bar"
                    }
                }, [e("ul", t._l(t.columns, (function(n) {
                    return e("li", {
                        attrs: {
                            selected: n == t.current
                        },
                        on: {
                            click: function(e) {
                                return t.select(n)
                            }
                        }
                    }, [t._v(t._s(t.$t("columns.".concat(n))))])
                })), 0)])
            },
            Ut = [],
            Gt = n("db49"),
            Jt = {
                name: "ColumnBar",
                data: function() {
                    return {
                        current: Gt["a"][0].id,
                        columns: Gt["a"].map((function(t) {
                            return t.id
                        }))
                    }
                },
                mounted: function() {
                    this.init()
                },
                methods: {
                    init: function() {
                        this.current = localStorage.getItem("column-selection") || this.current
                    },
                    select: function(t) {
                        t != this.current && (this.current = t, a.$emit("columnDidChange", t), localStorage.setItem("column-selection", t))
                    }
                }
            },
            Qt = Jt,
            Kt = (n("d649"), Object(g["a"])(Qt, Wt, Ut, !1, null, "6281e6b6", null)),
            Yt = Kt.exports,
            Xt = n("a513");

        function Zt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, i)
            }
            return n
        }

        function te(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Zt(Object(n), !0).forEach((function(e) {
                    Object(R["a"])(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zt(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }
        var ee = {
                name: "Home",
                mixins: [ot["a"]],
                components: {
                    InfiniteScroll: Xt["a"],
                    ColumnBar: Yt,
                    Notice: Bt,
                    Footer: Rt,
                    Grid: vt,
                    Feed: $t
                },
                directives: {
                    Sticky: u["a"]
                },
                data: function() {
                    return {
                        style: "feed",
                        column: Gt["a"][0],
                        photos: [],
                        fetched: !1,
                        hasMore: !1,
                        currentPage: 1,
                        errorMessage: null,
                        carouselLastIndex: null
                    }
                },
                metaInfo: function() {
                    var t = this.$route.name.includes(":") ? {
                        title: this.$t("columns.".concat(this.column.id)),
                        titleTemplate: this.$t("head.title.column")
                    } : {
                        title: "Camarts",
                        titleTemplate: null
                    };
                    return te(te({}, t), {
                        meta: [{
                            vmid: "description",
                            name: "description",
                            content: this.$t("head.description.home")
                        }, {
                            vmid: "og:title",
                            name: "og:title",
                            content: this.$t("head.title.full")
                        }, {
                            vmid: "og:description",
                            name: "og:description",
                            content: this.$t("head.description.home")
                        }, {
                            vmid: "og:image",
                            name: "og:image",
                            content: "https://camarts.app/images/og-image.jpg"
                        }, {
                            vmid: "og:url",
                            name: "og:url",
                            content: "https://camarts.app"
                        }]
                    })
                },
                mounted: function() {
                    this.init(), this.fetch()
                },
                beforeDestroy: function() {
                    this.deinit()
                },
                watch: {
                    isQuickView: "carouselDidToggle"
                },
                computed: {
                    pageSize: function() {
                        return 24
                    },
                    currentIndex: function() {
                        var t = this;
                        return this.photos.findIndex((function(e) {
                            return e.id === t.$route.params.id
                        }))
                    }
                },
                methods: {
                    init: function() {
                        var t = this;
                        this.column = Gt["a"].find((function(t) {
                            return t.id === localStorage.getItem("column-selection")
                        })) || this.column, this.style = this.$route.params.style || localStorage.getItem("view-selection") || this.style, this.hasMore = !0, this.fetched = !1, a.$on("columnDidChange", (function(e) {
                            return t.updateColumn(e)
                        })), a.$on("viewStyleDidChange", (function(e) {
                            return t.updateStyle(e)
                        }))
                    },
                    deinit: function() {
                        var t = this;
                        a.$off("columnDidChange", (function(e) {
                            return t.updateColumn(e)
                        })), a.$off("viewStyleDidChange", (function(e) {
                            return t.updateStyle(e)
                        }))
                    },
                    fetch: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, tt.fetch();
                                    case 3:
                                        this.updateData(), t.next = 9;
                                        break;
                                    case 6:
                                        t.prev = 6, t.t0 = t["catch"](0), console.error(t.t0);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 6]
                            ])
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchMore: function() {
                        this.currentPage++, this.fetched = !1, this.updateData()
                    },
                    updateData: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            var e, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this.column.requiresUserLocation) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 3, this.requestUserLocation();
                                    case 3:
                                        if (e = t.sent, e) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        n = tt.nextBatch(this.currentPage, this.pageSize, this.column.processor), this.photos = [].concat(Object(A["a"])(this.photos), Object(A["a"])(n)), this.fetched = !0, this.hasMore = this.photos.length < tt.photos.length;
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    requestUserLocation: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            var e, n, i, r;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, Object(p["f"])();
                                    case 3:
                                        return e = t.sent, n = e.latitude, i = e.longitude, r = JSON.stringify({
                                            latitude: n,
                                            longitude: i
                                        }), sessionStorage.setItem("coordinates", r), t.abrupt("return", r);
                                    case 11:
                                        return t.prev = 11, t.t0 = t["catch"](0), this.fetched = !0, this.hasMore = !1, this.errorMessage = "exceptions.geo.".concat(t.t0), t.abrupt("return", null);
                                    case 17:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 11]
                            ])
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    carouselDidToggle: function() {
                        var t = this.isQuickView,
                            e = this.photos[this.carouselLastIndex];
                        if (!t) {
                            var n = "loading-transition-disabled";
                            Object(p["j"])(n, !0), setTimeout((function() {
                                Object(p["j"])(n, !1)
                            }), 100)
                        }
                        e && (requestAnimationFrame((function() {
                            var t = document.querySelector('[data-item="'.concat(e.id, '"]'));
                            requestAnimationFrame((function() {
                                t.scrollIntoView({
                                    block: "center",
                                    inline: "center"
                                })
                            }))
                        })), this.carouselLastIndex = null)
                    },
                    carouselIndexDidChange: function(t) {
                        t >= this.photos.length - 1 && this.fetchMore(), this.carouselLastIndex = t
                    },
                    updateColumn: function(t) {
                        this.column = Gt["a"].find((function(e) {
                            return e.id === t
                        })), this.fetched = !1, this.photos = [], this.currentPage = 1, this.errorMessage = null, this.updateData(), "essential" === t ? this.$router.push({
                            path: "/",
                            replace: !0
                        }) : this.$router.push({
                            path: t,
                            replace: !0
                        }), requestAnimationFrame((function() {
                            window.scrollTo(0, 0)
                        }))
                    },
                    updateStyle: function(t) {
                        this.style = t
                    }
                }
            },
            ne = ee,
            ie = (n("4305"), Object(g["a"])(ne, V, T, !1, null, "95420844", null)),
            re = ie.exports,
            oe = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "map",
                        "data-cursor-active": t.selectionHasPhotos
                    },
                    on: {
                        mousemove: t.cursorDidMove,
                        touchstart: function(e) {
                            t.showCursor = !1
                        }
                    }
                }, [t.geojson ? e("Map", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isQuickView,
                        expression: "!isQuickView"
                    }],
                    ref: "map",
                    attrs: {
                        data: t.geojson,
                        "cursor-radius": t.cursorRadius
                    },
                    on: {
                        load: t.mapDidLoad,
                        click: t.mapDidClick,
                        hover: t.mapDidHover,
                        move: t.mapDidMove,
                        resize: t.mapDidResize
                    }
                }) : t._e(), t.isQuickView ? e("Carousel", {
                    attrs: {
                        photos: t.selectedPhotos,
                        index: t.currentIndex
                    },
                    on: {
                        indexDidChange: t.carouselIndexDidChange
                    }
                }) : t._e(), t.marker && t.showPopover ? e("Popover", {
                    ref: "popover",
                    attrs: {
                        reference: t.marker,
                        options: t.popoverOptions
                    },
                    on: {
                        dismiss: t.popoverDidDismiss
                    }
                }, [e("header", [e("h3", [t._v(t._s(t.selectedGeoDescription.primary))]), e("span", [t._v(t._s(t.selectedGeoDescription.secondary))]), e("button", {
                    staticClass: "close",
                    on: {
                        click: t.hidePhotos
                    }
                }, [e("span", {
                    attrs: {
                        "aria-hidden": "true"
                    }
                }, [e("i", {
                    staticClass: "xmark"
                })])])]), e("div", {
                    class: t.popoverOptions.styleScollbar ? "scrollbar" : "",
                    attrs: {
                        id: "picker"
                    }
                }, [e("Grid", {
                    attrs: {
                        id: "map-grid",
                        photos: t.selectedPhotos,
                        fetched: !0,
                        hasMore: !1,
                        embedded: !0
                    }
                })], 1)]) : t._e(), t.showCursor ? e("div", {
                    ref: "cursor",
                    style: t.cursorStyle,
                    attrs: {
                        id: "map-cursor"
                    }
                }) : t._e(), t.isMapLoaded ? t._e() : e("InfiniteScroll", {
                    staticClass: "loading",
                    attrs: {
                        loading: !0
                    }
                })], 1)
            },
            ae = [],
            se = function(t) {
                return t + "px"
            },
            ce = function(t, e) {
                return function(n) {
                    return n.map((function(e) {
                        return e._distance = Object(p["d"])(t.coordinates.latitude, t.coordinates.longitude, e.latitude, e.longitude), e
                    })).sort((function(t, e) {
                        return t._distance - e._distance
                    })).filter((function(n) {
                        return n._distance < t.kmpp * e
                    }))
                }
            },
            ue = {
                name: "Maps",
                mixins: [ot["a"]],
                components: {
                    InfiniteScroll: Xt["a"],
                    Popover: d["a"],
                    Grid: vt,
                    Map: function() {
                        return n.e("map").then(n.bind(null, "b822"))
                    }
                },
                metaInfo: function() {
                    return {
                        title: this.$t("head.title.maps"),
                        meta: [{
                            vmid: "description",
                            name: "description",
                            content: this.$t("head.description.maps")
                        }, {
                            vmid: "og:title",
                            name: "og:title",
                            content: "".concat(this.$t("head.title.maps"), " | ").concat(this.$t("head.title.full"))
                        }, {
                            vmid: "og:description",
                            name: "og:description",
                            content: this.$t("head.description.maps")
                        }, {
                            vmid: "og:image",
                            name: "og:image",
                            content: "https://camarts.app/images/og-image-maps.jpg"
                        }, {
                            vmid: "og:url",
                            name: "og:url",
                            content: "https://camarts.app/maps"
                        }]
                    }
                },
                data: function() {
                    return {
                        popoverOptions: {
                            placement: "auto",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [0, 12]
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    altAxis: !0,
                                    padding: 10
                                }
                            }],
                            dismissEscaped: !0,
                            styleScollbar: !/(Mac|iPhone|iPad)/i.test(navigator.platform),
                            appearances: ["picker", "sheet"]
                        },
                        isMapLoaded: !1,
                        marker: void 0,
                        showPopover: !1,
                        showCursor: !0,
                        cursorStyle: null,
                        cursorRadius: 0,
                        selectedPhotos: [],
                        selectedGeoDescription: "",
                        selectionHasPhotos: !1,
                        carouselLastIndex: null,
                        lastHoverPosition: null,
                        geojson: null
                    }
                },
                mounted: function() {
                    this.fetch(), this.setCursorRadius(), window.addEventListener("resize", this.setCursorRadius)
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.setCursorRadius)
                },
                watch: {
                    isQuickView: "carouselDidToggle"
                },
                computed: {
                    currentIndex: function() {
                        var t = this;
                        return this.selectedPhotos.findIndex((function(e) {
                            return e.id === t.$route.params.id
                        }))
                    }
                },
                methods: {
                    fetch: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, tt.fetch();
                                    case 3:
                                        t.sent, this.updateData(), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 7]
                            ])
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    updateData: function() {
                        this.geojson = Object(p["b"])(tt.all)
                    },
                    showPhotos: function(t, e) {
                        var n = this;
                        this.showPopover = !0, this.marker = e, this.selectedPhotos = t, requestAnimationFrame((function() {
                            return n.setPopover()
                        }))
                    },
                    hidePhotos: function() {
                        this.dismissPopover(), this.$refs.map.removeMarker()
                    },
                    cursorDidMove: function(t) {
                        this.cursorStyle = {
                            "--size": se(2 * this.cursorRadius),
                            "--x": se(t.clientX),
                            "--y": se(t.clientY)
                        }
                    },
                    mapDidClick: function(t) {
                        var e = ce(t, this.cursorRadius),
                            n = tt.nextBatch(1, 80, e);
                        n.length > 0 ? (this.showPhotos(n, t.marker), this.selectedGeoDescription = tt.getGeoDescription(e, 4, this.$t("list-separators")), yt["a"].selected(t.coordinates, t.kmpp * this.cursorRadius)) : this.hidePhotos()
                    },
                    mapDidHover: function(t) {
                        if (this.showCursor) {
                            var e = t.zoom,
                                n = t.coordinates,
                                i = Math.min(5, Math.max(1, e / 2)),
                                r = "".concat(n.latitude.toFixed(i), ",").concat(n.longitude.toFixed(i));
                            r !== this.lastHoverPosition && (this.selectionHasPhotos = 1 === tt.nextBatch(1, 1, ce(t, this.cursorRadius)).length, this.lastHoverPosition = r)
                        }
                    },
                    mapDidLoad: function() {
                        this.isMapLoaded = !0
                    },
                    mapDidMove: function() {
                        this.setPopover()
                    },
                    mapDidResize: function() {
                        this.setPopover()
                    },
                    carouselDidToggle: function() {
                        this.isQuickView;
                        var t = this.selectedPhotos[this.carouselLastIndex];
                        t && (requestAnimationFrame((function() {
                            var e = document.querySelector('[data-item="'.concat(t.id, '"]'));
                            requestAnimationFrame((function() {
                                e.scrollIntoView({
                                    block: "center"
                                })
                            }))
                        })), this.carouselLastIndex = null)
                    },
                    carouselIndexDidChange: function(t) {
                        this.carouselLastIndex = t
                    },
                    popoverDidDismiss: function() {
                        this.selectedPhotos = [], this.showPopover = !1, this.marker = void 0, this.$refs.map.removeMarker()
                    },
                    dismissPopover: function() {
                        var t = this.$refs.popover;
                        t && t.dismiss()
                    },
                    setPopover: function() {
                        var t = this.$refs.popover;
                        t && t.update(this.marker)
                    },
                    setCursorRadius: function() {
                        var t = function(t, e, n) {
                                return t * (1 - n) + e * n
                            },
                            e = function(t, e, i) {
                                return n((i - t) / (e - t))
                            },
                            n = function(t) {
                                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                                return Math.min(n, Math.max(e, t))
                            };
                        this.cursorRadius = t(38, 68, e(600, 1600, window.innerWidth))
                    }
                }
            },
            le = ue,
            he = (n("5f46"), Object(g["a"])(le, oe, ae, !1, null, "9fb1d580", null)),
            de = he.exports,
            pe = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    attrs: {
                        id: "singular"
                    }
                }, [e("header", [e("img", {
                    staticClass: "logo",
                    attrs: {
                        src: n("aa17")
                    }
                }), e("Nav")], 1), t.fetched && t.photo ? e("section", [e("Showcase", {
                    ref: "fullsize",
                    attrs: {
                        src: t.photo,
                        padding: 0
                    }
                }), e("Meta", {
                    attrs: {
                        src: t.photo
                    }
                })], 1) : t.exception ? e("Notice", {
                    attrs: {
                        appearance: "large",
                        title: "exceptions.".concat(t.exception, ".title"),
                        message: "exceptions.".concat(t.exception, ".message")
                    }
                }) : t._e(), t._l(t.columns, (function(n) {
                    return e("Section", {
                        key: n.id,
                        staticClass: "columns",
                        attrs: {
                            name: "columns.".concat(n.id)
                        }
                    }, [e("Grid", {
                        attrs: {
                            id: "grid-".concat(n.id),
                            photos: n.photos,
                            fetched: !0
                        }
                    }), e("button", {
                        on: {
                            click: function(e) {
                                return t.route(n)
                            }
                        }
                    }, [t._v(t._s(t.$t("show-more")) + " "), e("i", {
                        staticClass: "chevron"
                    })])], 1)
                })), t.columnLoaded ? t.fetched ? e("Footer") : t._e() : e("InfiniteScroll", {
                    attrs: {
                        loading: !t.fetched || !t.columnLoaded,
                        auto: !0
                    },
                    on: {
                        triggered: t.fetchColumns
                    }
                })], 2)
            },
            fe = [];
        n("ac4d"), n("8a81");

        function me(t, e) {
            var n = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = ge(t)) || e && t && "number" === typeof t.length) {
                    n && (t = n);
                    var i = 0,
                        r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, a = !0,
                s = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return a = t.done, t
                },
                e: function(t) {
                    s = !0, o = t
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }
        }

        function ge(t, e) {
            if (t) {
                if ("string" === typeof t) return ve(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ve(t, e) : void 0
            }
        }

        function ve(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
            return i
        }
        var be = function(t) {
                if ("string" !== typeof t) throw "id-undefined";
                if (!/^[a-z][0-9][a-z]$/.test(t)) throw "id-malformed";
                return t
            },
            we = {
                name: "Singular",
                components: {
                    InfiniteScroll: Xt["a"],
                    Showcase: jt["a"],
                    Section: Pt,
                    Footer: Rt,
                    Notice: Bt,
                    Meta: xt["a"],
                    Grid: vt,
                    Nav: b
                },
                data: function() {
                    return {
                        photo: null,
                        columns: [],
                        fetched: !1,
                        columnLoaded: !1,
                        exception: null
                    }
                },
                metaInfo: function() {
                    var t = this.photo ? this.$t("head.description.singular", {
                        year: new Date(1e3 * this.photo.captured).getFullYear(),
                        location: this.photo.locationContext.fullDisplayName,
                        camera: this.photo.camera
                    }) : void 0;
                    return {
                        title: "Camarts",
                        titleTemplate: null,
                        meta: [{
                            vmid: "description",
                            name: "description",
                            content: t
                        }, {
                            vmid: "og:title",
                            name: "og:title",
                            content: this.$t("head.title.full")
                        }, {
                            vmid: "og:description",
                            name: "og:description",
                            content: t
                        }, {
                            vmid: "og:image",
                            name: "og:image",
                            content: this.photo ? "http:".concat(this.photo.thumbnail.url) : void 0
                        }, {
                            vmid: "og:url",
                            name: "og:url",
                            content: this.photo ? "https://camarts.app/".concat(this.photo.id) : void 0
                        }]
                    }
                },
                mounted: function() {
                    this.init()
                },
                watch: {
                    $route: "update"
                },
                methods: {
                    init: function() {
                        this.fetch()
                    },
                    fetch: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, tt.fetchPhoto(be(this.$route.params.id));
                                    case 3:
                                        this.photo = t.sent, yt["a"].seen(this.photo.id, "singular"), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), this.handleException(t.t0);
                                    case 10:
                                        return t.prev = 10, this.fetched = !0, requestAnimationFrame((function() {
                                            window.scrollTo(0, 0)
                                        })), t.finish(10);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 7, 10, 14]
                            ])
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    fetchColumns: function() {
                        var t = Object(E["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, tt.fetch();
                                    case 3:
                                        this.updateColumnData(), this.columnLoaded = !0, t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t["catch"](0), console.error(t.t0);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 7]
                            ])
                        })));

                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e
                    }(),
                    update: function() {
                        this.columns = [], this.fetch(), this.fetchColumns()
                    },
                    updateColumnData: function() {
                        var t, e = this,
                            n = me(Gt["a"].filter((function(t) {
                                return t.isFeatured
                            })));
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i = t.value,
                                    r = 12,
                                    o = tt.nextBatch(1, r + 1, i.processor).filter((function(t) {
                                        return t.id !== e.$route.params.id
                                    })).slice(0, r);
                                this.columns.push({
                                    id: i.id,
                                    photos: o
                                })
                            }
                        } catch (a) {
                            n.e(a)
                        } finally {
                            n.f()
                        }
                    },
                    handleException: function(t) {
                        "id-undefined" == t && /^archives\/[0-9]+\.html$/.test(this.$route.params.pathMatch) ? this.exception = "legacy" : (this.exception = "404", this.$log(t))
                    },
                    route: function(t) {
                        localStorage.setItem("column-selection", t.id), this.$router.push({
                            name: "home"
                        })
                    }
                }
            },
            ye = we,
            xe = (n("47f3"), Object(g["a"])(ye, pe, fe, !1, null, "25a289d0", null)),
            _e = xe.exports;
        i["a"].use(L["a"]);
        var Ce = new L["a"]({
                mode: "history",
                routes: [{
                    path: "/",
                    name: "home",
                    component: re
                }, {
                    path: "/recent",
                    name: "home:recent",
                    component: re
                }, {
                    path: "/nearby",
                    name: "home:nearby",
                    component: re
                }, {
                    path: "/faraway",
                    name: "home:faraway",
                    component: re
                }, {
                    path: "/index.html",
                    component: re
                }, {
                    path: "/maps",
                    name: "maps",
                    component: de
                }, {
                    path: "/:id",
                    name: "singular",
                    component: _e
                }, {
                    path: "/:id",
                    name: "home-singular",
                    component: re,
                    alias: "/id"
                }, {
                    path: "/:id",
                    name: "map-singular",
                    component: de,
                    alias: "/id"
                }, {
                    path: "/:pathMatch(.*)*",
                    name: "404",
                    component: _e
                }]
            }),
            ke = n("a925"),
            Oe = n("58ca");
        i["a"].config.productionTip = !1, i["a"].prototype.$libraryURL = "//library.cdn.camartsphotography.com", i["a"].prototype.$log = function(t) {
            0
        }, i["a"].use(ke["a"]), i["a"].use(Oe["a"]);
        var Se = {
                "en-US": n("4a03"),
                "zh-cmn-Hans-CN": n("e1cb")
            },
            Pe = new ke["a"]({
                locale: "zh" == navigator.language.substring(0, 2) ? "zh-cmn-Hans-CN" : "en-US",
                fallbackLocale: "en-US",
                messages: Se,
                silentTranslationWarn: !0
            });
        document.documentElement.setAttribute("lang", Pe.locale), localStorage.setItem("locale", Pe.locale), new i["a"]({
            el: "#app",
            router: Ce,
            i18n: Pe,
            components: {
                App: $
            },
            render: function(t) {
                return t($)
            }
        })
    },
    "5ce8": function(t, e, n) {},
    "5f46": function(t, e, n) {
        "use strict";
        n("ce1d")
    },
    "63dd": function(t, e, n) {},
    "6db7": function(t, e, n) {
        "use strict";
        n("89b0")
    },
    "70bc": function(t, e, n) {
        "use strict";
        n("5ce8")
    },
    7642: function(t, e, n) {
        "use strict";
        n("9685")
    },
    "7ad4": function(t, e, n) {},
    "856d": function(t, e, n) {},
    "89b0": function(t, e, n) {},
    9685: function(t, e, n) {},
    "97dc": function(t, e, n) {
        "use strict";
        n("4e77")
    },
    "9c9e": function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return r
        })), n.d(e, "b", (function() {
            return o
        }));
        n("6b54");
        var i = n("7618"),
            r = (n("c5f6"), n("365c"), {
                components: {
                    Carousel: function() {
                        return n.e("chunk-297fb264").then(n.bind(null, "a45f"))
                    }
                },
                computed: {
                    isQuickView: function() {
                        return !!this.$route.params.id
                    }
                }
            }),
            o = {
                props: {
                    inViewportActive: {
                        type: Boolean,
                        default: !0
                    },
                    inViewportOnce: {
                        type: Boolean,
                        default: !1
                    },
                    inViewportRootMargin: {
                        type: Number | String,
                        default: "0px 0px -1px 0px"
                    },
                    inViewportRoot: {
                        type: String | Function | Object,
                        default: void 0
                    },
                    inViewportThreshold: {
                        type: Number | Array,
                        default: function() {
                            return [0, 1]
                        }
                    }
                },
                data: function() {
                    return {
                        inViewport: {
                            now: null,
                            fully: null,
                            above: null,
                            below: null,
                            listening: !1,
                            maxThreshold: 1
                        }
                    }
                },
                mounted: function() {
                    return this.$nextTick(this.inViewportInit)
                },
                destroyed: function() {
                    return this.removeInViewportHandlers()
                },
                computed: {
                    inViewportThresholdWithMax: function() {
                        var t = "object" === Object(i["a"])(this.inViewportThreshold) ? this.inViewportThreshold : [this.inViewportThreshold],
                            e = this.inViewport.maxThreshold;
                        return e && [].indexOf.call(t, e) >= 0 ? t : t.concat(this.inViewport.maxThreshold)
                    }
                },
                watch: {
                    inViewportActive: function(t) {
                        return t ? this.addInViewportHandlers() : this.removeInViewportHandlers()
                    },
                    inViewportRootMargin: function() {
                        return this.reInitInViewportMixin()
                    },
                    inViewportRoot: function() {
                        return this.reInitInViewportMixin()
                    },
                    inViewportThresholdWithMax: function(t, e) {
                        if (t.toString() !== e.toString()) return this.reInitInViewportMixin()
                    }
                },
                methods: {
                    reInitInViewportMixin: function() {
                        return this.removeInViewportHandlers(), this.inViewportInit()
                    },
                    inViewportInit: function() {
                        if (this.inViewportActive) return this.addInViewportHandlers()
                    },
                    addInViewportHandlers: function() {
                        if (!this.inViewport.listening) return this.inViewport.listening = !0, this.inViewportObserver = new IntersectionObserver(this.updateInViewport, {
                            root: function() {
                                switch (Object(i["a"])(this.inViewportRoot)) {
                                    case "function":
                                        return this.inViewportRoot();
                                    case "string":
                                        return document.querySelector(this.inViewportRoot);
                                    case "object":
                                        return this.inViewportRoot;
                                    default:
                                        return
                                }
                            }.call(this),
                            rootMargin: this.inViewportRootMargin,
                            threshold: this.inViewportThresholdWithMax
                        }), this.inViewportObserver.observe(this.$el)
                    },
                    removeInViewportHandlers: function() {
                        var t = this.inViewportObserver;
                        if (this.inViewport.listening) return this.inViewport.listening = !1, t && t.disconnect(), delete this.inViewportObserver
                    },
                    updateInViewport: function(t) {
                        var e = t[0].boundingClientRect,
                            n = t[0].rootBounds;
                        if (e && n) return this.inViewport.maxThreshold = e.height > 0 ? Math.min(1, n.height / e.height) : 1, this.inViewport.now = e.top <= n.bottom && e.bottom > n.top, this.inViewport.above = e.top < n.top, this.inViewport.below = e.bottom > n.bottom + 1, this.inViewport.fully = e.height > n.height ? e.top <= n.top && e.bottom >= n.bottom + 1 : !this.inViewport.above && !this.inViewport.below, this.inViewportOnce && this.inViewport.now ? this.removeInViewportHandlers() : void 0
                    }
                }
            }
    },
    a257: function(t, e, n) {},
    a513: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t._self._c;
                return e("button", {
                    attrs: {
                        loading: t.loading
                    },
                    on: {
                        click: t.triggered
                    }
                }, [t._m(0), t.loading ? e("span", [t._v(t._s(t.$t("loading")))]) : e("span", [t._v(t._s(t.$t("show-more")))])])
            },
            r = [function() {
                var t = this,
                    e = t._self._c;
                return e("ul", [e("li"), e("li"), e("li")])
            }],
            o = n("9c9e"),
            a = {
                name: "InfiniteScroll",
                props: ["auto", "loading"],
                mixins: [o["b"]],
                watch: {
                    "inViewport.now": function(t) {
                        t && this.auto && this.triggered()
                    }
                },
                methods: {
                    triggered: function() {
                        this.$emit("triggered")
                    }
                }
            },
            s = a,
            c = (n("70bc"), n("2877")),
            u = Object(c["a"])(s, i, r, !1, null, "70141fb4", null);
        e["a"] = u.exports
    },
    a9fb: function(t, e, n) {
        "use strict";
        var i = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "metabar",
                    attrs: {
                        "panel-active": t.isMetaPanelActive
                    }
                }, [e("div", {
                    staticClass: "bar",
                    attrs: {
                        context: t.context
                    }
                }, [e("ul", {
                    staticClass: "items",
                    attrs: {
                        "body-scroll-lock-ignore": ""
                    }
                }, [e("MetaCell", {
                    staticClass: "item category clickable",
                    attrs: {
                        title: "category"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "category")
                        }
                    }
                }, [e("ul", [t._l(t.src.category, (function(t) {
                    return e("li", [e("i", {
                        staticClass: "star filled"
                    })])
                })), t._l(7 - t.src.category, (function(t) {
                    return e("li", [e("i", {
                        staticClass: "star"
                    })])
                }))], 2)]), e("MetaCell", {
                    staticClass: "item exif clickable",
                    attrs: {
                        title: "exif"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "aperture")
                        }
                    }
                }, [e("ul", t._l(t.exif, (function(n, i) {
                    return e("li", [e("i", {
                        class: i
                    }), e("span", [t._v(t._s(n))])])
                })), 0)]), e("MetaCell", {
                    staticClass: "item location clickable",
                    attrs: {
                        title: "location"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "location")
                        }
                    }
                }, [e("span", [t._v(t._s(t.location))])]), t.src.distance ? e("MetaCell", {
                    staticClass: "item distance clickable",
                    attrs: {
                        title: "distance"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "distance")
                        }
                    }
                }, [e("span", [t._v(t._s(t.src.distance))])]) : t._e(), t.src.camera ? e("MetaCell", {
                    staticClass: "item camera clickable",
                    attrs: {
                        title: "camera"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "camera")
                        }
                    }
                }, [e("span", [t._v(t._s(t.src.camera))])]) : t._e(), t.src.lens ? e("MetaCell", {
                    staticClass: "item lens clickable",
                    attrs: {
                        title: "lens"
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.showPopover(e, "lens")
                        }
                    }
                }, [e("span", [t._v(t._s(t.src.lens))])]) : t._e(), e("MetaCell", {
                    ref: "more",
                    staticClass: "item more clickable",
                    attrs: {
                        title: ""
                    }
                }, [e("span", [e("i", {
                    staticClass: "ellipsis"
                })])])], 1)]), t.$refs.more ? e("Popover", {
                    ref: "popover",
                    attrs: {
                        reference: t.$refs.more.$el,
                        options: t.popoverOptions
                    },
                    on: {
                        present: t.popoverDidPresent,
                        dismiss: t.popoverDidDismiss
                    }
                }, [e("MetaPanel", {
                    attrs: {
                        src: t.src,
                        target: t.metaPanelTarget,
                        animated: !0
                    },
                    on: {
                        dismiss: t.dismissPopover
                    }
                })], 1) : t._e()], 1)
            },
            r = [],
            o = n("08c1"),
            a = function() {
                var t = this,
                    e = t._self._c;
                return e("li", ["" != t.title ? e("h5", {
                    staticClass: "title"
                }, [t._v(t._s(t.$t(t.title)))]) : t._e(), t._t("default")], 2)
            },
            s = [],
            c = {
                name: "MetaCell",
                props: ["title"]
            },
            u = c,
            l = (n("6db7"), n("2877")),
            h = Object(l["a"])(u, a, s, !1, null, "2d46ff28", null),
            d = h.exports,
            p = n("1917"),
            f = {
                name: "Meta",
                props: ["src", "carousel-mode"],
                components: {
                    MetaPanel: p["a"],
                    MetaCell: d,
                    Popover: o["a"]
                },
                data: function() {
                    return {
                        popoverOptions: {
                            placement: !0 === this.carouselMode ? "top" : "left",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [0, 12]
                                }
                            }, {
                                name: "flip",
                                options: {
                                    padding: {
                                        left: 60
                                    }
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    altAxis: !0,
                                    padding: {
                                        top: 66,
                                        bottom: 6
                                    }
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    padding: 12
                                }
                            }],
                            dismissEscaped: !0 !== this.carouselMode,
                            dismissBlurred: !0,
                            appearances: ["meta-viewer", "sheet"]
                        },
                        isMetaPanelActive: !1,
                        metaPanelTarget: !1,
                        context: !1,
                        items: {}
                    }
                },
                mounted: function() {
                    this.context = this.$route.params.context
                },
                computed: {
                    exif: function() {
                        var t = this.src;
                        return {
                            focus: "".concat(t.focus, "mm"),
                            aperture: "ƒ/".concat(t.aperture),
                            shutter: t.shutterSpeed,
                            iso: t.iso
                        }
                    },
                    location: function() {
                        var t = this.src.locationContext;
                        return t ? t.displayName : this.$t("Loading")
                    }
                },
                methods: {
                    showPopover: function(t, e) {
                        var n = this.$refs.popover;
                        n && (this.metaPanelTarget = e, n.update(t.target))
                    },
                    dismissPopover: function() {
                        var t = this.$refs.popover;
                        t && t.dismiss()
                    },
                    popoverDidPresent: function() {
                        this.isMetaPanelActive = !0
                    },
                    popoverDidDismiss: function() {
                        this.isMetaPanelActive = !1, this.metaPanelTarget = !1
                    }
                }
            },
            m = f,
            g = (n("dbbc"), Object(l["a"])(m, i, r, !1, null, "9c46fcc4", null));
        e["a"] = g.exports
    },
    aa17: function(t, e, n) {
        t.exports = n.p + "images/logo.e0b942a3.svg"
    },
    aca5: function(t, e, n) {
        "use strict";
        n("38de")
    },
    b247: function(t, e, n) {},
    b476: function(t, e, n) {},
    bf2b: function(t, e, n) {
        "use strict";
        n("b476")
    },
    ce1d: function(t, e, n) {},
    d581: function(t, e, n) {
        "use strict";
        n("154f")
    },
    d649: function(t, e, n) {
        "use strict";
        n("db1d")
    },
    da23: function(t, e, n) {
        "use strict";
        n("23cd")
    },
    db1d: function(t, e, n) {},
    db49: function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return c
        })), n.d(e, "b", (function() {
            return u
        }));
        n("55dd");
        var i = n("025e"),
            r = {
                id: "essential",
                isFeatured: !0,
                requiresUserLocation: !1,
                processor: function(t) {
                    return t.filter((function(t) {
                        return t.category >= 5
                    })).sort((function(t, e) {
                        return e.category - t.category || e.aesthetic_score - t.aesthetic_score || e.captured - t.captured
                    }))
                }
            },
            o = {
                id: "recent",
                isFeatured: !0,
                requiresUserLocation: !1,
                processor: function(t) {
                    return t
                }
            },
            a = {
                id: "nearby",
                isFeatured: !1,
                requiresUserLocation: !0,
                processor: function(t) {
                    var e = JSON.parse(sessionStorage.getItem("coordinates"));
                    return t.sort((function(t, n) {
                        return Object(i["d"])(e.latitude, e.longitude, t.latitude, t.longitude) - Object(i["d"])(e.latitude, e.longitude, n.latitude, n.longitude)
                    }))
                }
            },
            s = {
                id: "faraway",
                isFeatured: !1,
                requiresUserLocation: !0,
                processor: function(t) {
                    return a.processor(t).reverse()
                }
            },
            c = [r, o, a, s],
            u = "pk.eyJ1IjoiZGFuZHl3ZW5nIiwiYSI6ImNqaDRrdTN1MTEydG0zM3J5aWNtd3M0d3kifQ.cxBsW_3CNw-NGPoMjoCPQQ"
    },
    dbbc: function(t, e, n) {
        "use strict";
        n("133f")
    },
    e1cb: function(t) {
        t.exports = JSON.parse('{"head":{"title":{"full":"Camarts 摄影精选","column":"%s的照片 | Camarts","maps":"行摄地图"},"description":{"home":"Camarts 摄影精选 Web App — 摄影师翁天信（Dandy Weng）的个人作品展示平台，分享在周游世界旅途中拍摄的千余张精选照片。","singular":"翁天信（Dandy Weng）在{year}年拍摄的一幅摄影作品，使用{camera}相机摄于{location}。","maps":"在 Camarts 的行摄地图上开启环球之旅，助你发现下一个旅行目的地。"}},"columns":{"nearby":"附近","faraway":"远方","essential":"精选","recent":"最新"},"nav":{"home":"主页","app":"应用下载","about":"了解更多","subscribe":"社交媒体"},"menu":{"share":"分享照片","copy-url":"复制网址","about":"关于 Camarts","support":"联系作者"},"meta-sections":{"metadata":"基本参数","location":"地理位置"},"show-more":"显示更多","loading":"加载中…","category":"评级","exif":"参数","aperture":"光圈","shutter-speed":"快门","focal-length":"焦距","iso":"感光度","location":"地点","latitude":"纬度","longitude":"经度","elevation":"海拔高度","altitude":"距地高度","distance":"距离","captured":"拍摄于","camera":"相机","lens":"镜头","list-separators":["、","与"],"share":{"title":"Camarts 摄影精选","text":"一张拍摄于{location}的照片"},"url":{"about":"https://camartsphotography.com/cn/","support":"https://support.camartsphotography.com/cn/"},"exceptions":{"404":{"title":"无法找到页面","message":"如果你确认网址没错，那本页可能已经被移除或更改了。不妨看看下面这些照片？"},"legacy":{"title":"时过境迁","message":"你点击了一个通往旧版 Camarts 的链接，这个网址已经失效了。不过精选照片已经迁移到这个全新的网站，不妨从下方的推荐栏目开始浏览？或者<a href=https://camartsphotography.com/cn/a-brief-chronicle.html>点击此处</a>了解新旧交替的详情。"},"geo":{"title":"无法获取当前位置","not_supported":"当前浏览器或设备不支持定位功能，请尝试在其他设备上查看本页面。","not_authorized":"没有获取位置的权限，请检查浏览器或设备的隐私设置。","unknown":"原因未知，请稍后再试。如果问题持续出现，欢迎向开发者反馈。"}}}')
    },
    e7df: function(t, e, n) {
        "use strict";
        n("2477")
    },
    f63f: function(t, e, n) {
        "use strict";
        n("52f3")
    }
});
//# sourceMappingURL=app-legacy.8e8efa31.js.map