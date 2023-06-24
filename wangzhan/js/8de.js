(function(t) {
    function e(e) {
        for (var s, o, a = e[0], c = e[1], l = e[2], d = 0, h = []; d < a.length; d++)
            o = a[d],
            Object.prototype.hasOwnProperty.call(n, o) && n[o] && h.push(n[o][0]),
            n[o] = 0;
        for (s in c)
            Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
        u && u(e);
        while (h.length)
            h.shift()();
        return r.push.apply(r, l || []),
        i()
    }
    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], s = !0, o = 1; o < i.length; o++) {
                var a = i[o];
                0 !== n[a] && (s = !1)
            }
            s && (r.splice(e--, 1),
            t = c(c.s = i[0]))
        }
        return t
    }
    var s = {}
      , o = {
        app: 0
    }
      , n = {
        app: 0
    }
      , r = [];
    function a(t) {
        return c.p + "js/" + ({
            map: "map"
        }[t] || t) + "." + {
            "chunk-297fb264": "a15640ed",
            map: "f74d3de3"
        }[t] + ".js"
    }
    function c(e) {
        if (s[e])
            return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, c),
        i.l = !0,
        i.exports
    }
    c.e = function(t) {
        var e = []
          , i = {
            "chunk-297fb264": 1,
            map: 1
        };
        o[t] ? e.push(o[t]) : 0 !== o[t] && i[t] && e.push(o[t] = new Promise((function(e, i) {
            for (var s = "css/" + ({
                map: "map"
            }[t] || t) + "." + {
                "chunk-297fb264": "f25de8ff",
                map: "a257dce6"
            }[t] + ".css", n = c.p + s, r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                var l = r[a]
                  , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === s || d === n))
                    return e()
            }
            var h = document.getElementsByTagName("style");
            for (a = 0; a < h.length; a++) {
                l = h[a],
                d = l.getAttribute("data-href");
                if (d === s || d === n)
                    return e()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet",
            u.type = "text/css",
            u.onload = e,
            u.onerror = function(e) {
                var s = e && e.target && e.target.src || n
                  , r = new Error("Loading CSS chunk " + t + " failed.\n(" + s + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED",
                r.request = s,
                delete o[t],
                u.parentNode.removeChild(u),
                i(r)
            }
            ,
            u.href = n;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(u)
        }
        )).then((function() {
            o[t] = 0
        }
        )));
        var s = n[t];
        if (0 !== s)
            if (s)
                e.push(s[2]);
            else {
                var r = new Promise((function(e, i) {
                    s = n[t] = [e, i]
                }
                ));
                e.push(s[2] = r);
                var l, d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                c.nc && d.setAttribute("nonce", c.nc),
                d.src = a(t);
                var h = new Error;
                l = function(e) {
                    d.onerror = d.onload = null,
                    clearTimeout(u);
                    var i = n[t];
                    if (0 !== i) {
                        if (i) {
                            var s = e && ("load" === e.type ? "missing" : e.type)
                              , o = e && e.target && e.target.src;
                            h.message = "Loading chunk " + t + " failed.\n(" + s + ": " + o + ")",
                            h.name = "ChunkLoadError",
                            h.type = s,
                            h.request = o,
                            i[1](h)
                        }
                        n[t] = void 0
                    }
                }
                ;
                var u = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: d
                    })
                }
                ), 12e4);
                d.onerror = d.onload = l,
                document.head.appendChild(d)
            }
        return Promise.all(e)
    }
    ,
    c.m = t,
    c.c = s,
    c.d = function(t, e, i) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }
    ,
    c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(t, e) {
        if (1 & e && (t = c(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var i = Object.create(null);
        if (c.r(i),
        Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var s in t)
                c.d(i, s, function(e) {
                    return t[e]
                }
                .bind(null, s));
        return i
    }
    ,
    c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return c.d(e, "a", e),
        e
    }
    ,
    c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    c.p = "/",
    c.oe = function(t) {
        throw console.error(t),
        t
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , d = l.push.bind(l);
    l.push = e,
    l = l.slice();
    for (var h = 0; h < l.length; h++)
        e(l[h]);
    var u = d;
    r.push([0, "chunk-vendors"]),
    i()
}
)({
    0: function(t, e, i) {
        t.exports = i("56d7")
    },
    "025e": function(t, e, i) {
        "use strict";
        i.d(e, "l", (function() {
            return o
        }
        )),
        i.d(e, "h", (function() {
            return n
        }
        )),
        i.d(e, "i", (function() {
            return r
        }
        )),
        i.d(e, "g", (function() {
            return a
        }
        )),
        i.d(e, "k", (function() {
            return c
        }
        )),
        i.d(e, "b", (function() {
            return l
        }
        )),
        i.d(e, "a", (function() {
            return d
        }
        )),
        i.d(e, "e", (function() {
            return h
        }
        )),
        i.d(e, "j", (function() {
            return u
        }
        )),
        i.d(e, "f", (function() {
            return p
        }
        )),
        i.d(e, "d", (function() {
            return m
        }
        )),
        i.d(e, "c", (function() {
            return f
        }
        ));
        i("ac6a");
        var s = i("3835");
        const o = window.devicePixelRatio >= 2 ? 2 : 1
          , n = ()=>window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
          , r = ()=>screen.height > window.innerWidth && (90 == window.orientation || -90 == window.orientation) ? screen.height : window.innerWidth
          , a = t=>`${parseInt(t.slice(0, 2), 16)}, ${parseInt(t.slice(2, 4), 16)}, ${parseInt(t.slice(4, 6), 16)}`
          , c = t=>{
            const e = {};
            for (const o of t.entries()) {
                var i = Object(s["a"])(o, 2);
                const t = i[0]
                  , n = i[1];
                e["--color-" + ["top", "middle", "bottom"][t]] = "#" + n
            }
            return e
        }
          , l = t=>({
            type: "FeatureCollection",
            features: t.map(t=>({
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [t.longitude, t.latitude]
                },
                properties: {
                    id: t.id,
                    color: "#" + t.colors[1]
                }
            }))
        })
          , d = (t,e)=>{
            const i = t < 0 ? e ? "W" : "S" : e ? "E" : "N"
              , s = 0 | Math.abs(t)
              , o = 60 * (Math.abs(t) - s) | 0;
            return `${s}°${o}'${i}`
        }
          , h = t=>new Promise((e,i)=>{
            const s = new Image;
            s.addEventListener("load", t=>e(s)),
            s.addEventListener("error", ()=>{
                i(new Error("Failed to load photo " + t))
            }
            ),
            s.src = t
        }
        )
          , u = (t,e)=>{
            const i = document.body.classList;
            return e ? i.add(t) : i.remove(t)
        }
          , p = ()=>new Promise((t,e)=>{
            const i = window.navigator.geolocation
              , s = ["not_supported", "not_authorized", "unknown"];
            i ? i.getCurrentPosition(e=>t(e.coords), t=>e(s[Math.min(t.code, s.length - 1)])) : (console.log("window.navigator.geolocation Not Supported"),
            e(s[0]))
        }
        )
          , m = (t,e,i,s)=>{
            const o = Math.PI * t / 180
              , n = Math.PI * i / 180;
            return 6371 * Math.acos(Math.min(1, Math.sin(o) * Math.sin(n) + Math.cos(o) * Math.cos(n) * Math.cos(Math.PI * (e - s) / 180)))
        }
          , f = ()=>btoa(JSON.stringify({
            app: `${document.body.dataset.app} ${document.body.dataset.build}`,
            device: navigator.userAgent,
            origin: window.location.href
        }))
    },
    "08c1": function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t._self._c;
            return t.isShown ? e("div", {
                ref: "popover",
                class: t.classList
            }, [t._t("default"), e("div", {
                staticClass: "arrow",
                attrs: {
                    "data-popper-arrow": ""
                }
            })], 2) : t._e()
        }
          , o = []
          , n = i("39c3")
          , r = {
            name: "Popover",
            props: ["reference", "options"],
            data() {
                return {
                    popper: null,
                    isShown: !1,
                    isVisible: !1
                }
            },
            mounted() {
                this.reference.addEventListener("click", this.toggle)
            },
            beforeDestroy() {
                this.reference.removeEventListener("click", this.toggle)
            },
            computed: {
                classList() {
                    const t = ["popover", "context-" + (this.$route.params.context || "default"), ...this.options.appearances];
                    return this.isVisible && t.push("visible"),
                    t.join(" ")
                }
            },
            methods: {
                toggle(t) {
                    if (t.srcElement.hasAttribute("data-popper-ignore"))
                        return;
                    const e = t.currentTarget;
                    this.isShown ? this.dismiss() : this.present(e)
                },
                dismiss() {
                    this.isVisible = !1,
                    setTimeout(()=>{
                        this.popper && (this.popper.destroy(),
                        this.popper = null),
                        this.isShown = !1,
                        this.$emit("dismiss"),
                        document.removeEventListener("click", this.documentDidClick)
                    }
                    , 300)
                },
                present(t) {
                    this.isShown = !0,
                    this.$emit("present"),
                    requestAnimationFrame(()=>this.create(t))
                },
                create(t) {
                    const e = Object.assign({}, this.options);
                    e.modifiers = [...e.modifiers, {
                        name: "autoDismiss",
                        enabled: this.options.dismissEscaped,
                        phase: "main",
                        fn: this.autoDismiss
                    }],
                    this.popper = Object(n["a"])(t, this.$refs.popover, e),
                    this.isVisible = !0,
                    document.addEventListener("click", this.documentDidClick)
                },
                documentDidClick(t) {
                    const e = t.path || t.composedPath();
                    e.includes(this.$refs.popover) || e.find(t=>"viewer" === t.id) || this.isShown && this.options.dismissBlurred && this.dismiss()
                },
                update(t) {
                    this.isShown ? this.popper.update() : this.present(t)
                },
                autoDismiss(t) {
                    let e = t.state;
                    const i = e.attributes.popper;
                    (i["data-popper-escaped"] && e.options.dismissEscaped || i["data-popper-reference-hidden"]) && this.dismiss()
                }
            }
        }
          , a = r
          , c = (i("1c4a"),
        i("2877"))
          , l = Object(c["a"])(a, s, o, !1, null, "cbed73c4", null);
        e["a"] = l.exports
    },
    "0b25": function(t, e, i) {},
    "133f": function(t, e, i) {},
    "154f": function(t, e, i) {},
    1917: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t._self._c;
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
            }
            )), t._l(7 - t.src.category, (function(t) {
                return e("i", {
                    staticClass: "star"
                })
            }
            ))], 2), e("span", {
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
        }
          , o = [function() {
            var t = this
              , e = t._self._c;
            return e("span", {
                attrs: {
                    "aria-hidden": "true"
                }
            }, [e("i", {
                staticClass: "xmark"
            })])
        }
        ]
          , n = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "item"
            }, [e("div", {
                staticClass: "cell"
            }, ["" != t.title ? e("h5", {
                staticClass: "title"
            }, [t._v(t._s(t.$t(t.title)))]) : t._e(), t._t("default")], 2)])
        }
          , r = []
          , a = {
            name: "MetaPanelCell",
            props: ["title"]
        }
          , c = a
          , l = (i("97dc"),
        i("2877"))
          , d = Object(l["a"])(c, n, r, !1, null, "637e97b2", null)
          , h = d.exports
          , u = i("a513")
          , p = i("5a0c")
          , m = i.n(p)
          , f = i("4208")
          , g = i.n(f);
        m.a.extend(g.a);
        var v = {
            name: "MetaPanel",
            props: ["src", "target", "animated"],
            components: {
                MetaPanelCell: h,
                InfiniteScroll: u["a"],
                Map: ()=>i.e("map").then(i.bind(null, "b822"))
            },
            data() {
                return {
                    isFirstSectionSelected: !0,
                    isMapLoaded: !1
                }
            },
            mounted() {
                this.init()
            },
            beforeDestroy() {
                this.deinit()
            },
            computed: {
                timeAgo() {
                    const t = m.a.unix(this.src.captured);
                    return navigator.language.includes("zh") ? (i("a471"),
                    t.locale("zh-cn").fromNow()) : t.fromNow()
                }
            },
            methods: {
                init() {
                    this.updateHeightProperty(),
                    window.addEventListener("resize", this.updateHeightProperty),
                    document.getElementById("container").addEventListener("scroll", this.scrollListener),
                    requestAnimationFrame(()=>this.scrollToTarget(this.target))
                },
                deinit() {
                    window.removeEventListener("resize", this.updateHeightProperty)
                },
                scrollListener(t) {
                    const e = t.target.scrollTop
                      , i = this.$refs.location.$el.offsetTop - 80;
                    this.isFirstSectionSelected = e <= i
                },
                scrollToTarget() {
                    this.scrollTo(this.target, !1)
                },
                scrollTo(t, e) {
                    const i = this.$refs[t];
                    document.getElementById("container").scrollTo({
                        top: i ? i.$el.offsetTop - 65 : 0,
                        behavior: e ? "smooth" : "auto"
                    })
                },
                updateHeightProperty() {
                    const t = document.getElementById("container")
                      , e = t.firstChild;
                    e && t.style.setProperty("--unit-size", e.offsetHeight + "px")
                },
                mapDidLoad() {
                    this.isMapLoaded = !0
                },
                select(t) {
                    this.scrollTo(t, this.animated),
                    this.$emit("select", t)
                },
                dismiss() {
                    this.$emit("dismiss")
                }
            }
        }
          , w = v
          , b = (i("7642"),
        Object(l["a"])(w, s, o, !1, null, "54f93a16", null));
        e["a"] = b.exports
    },
    "1c4a": function(t, e, i) {
        "use strict";
        i("5526")
    },
    "1ca5": function(t, e, i) {
        "use strict";
        i("a257")
    },
    "1edc": function(t, e, i) {
        "use strict";
        i("0b25")
    },
    "23cd": function(t, e, i) {},
    2477: function(t, e, i) {},
    "365c": function(t, e, i) {
        "use strict";
        var s = i("bc3a")
          , o = i.n(s);
        const n = "//edge.camarts.cn/api/"
          , r = t=>o.a.get(n + t);
        e["a"] = {
            fetchLibrary() {
                return r("list")
            },
            fetchPhoto(t) {
                return r("photo/" + t)
            }
        }
    },
    3849: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t._self._c;
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
        }
          , o = []
          , n = (i("55dd"),
        function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "view",
                style: t.css,
                attrs: {
                    "data-item": t.id
                }
            })
        }
        )
          , r = []
          , a = {
            name: "PhotoView",
            props: ["id", "css"]
        }
          , c = a
          , l = (i("1edc"),
        i("2877"))
          , d = Object(l["a"])(c, n, r, !1, null, "2ce5b523", null)
          , h = d.exports
          , u = i("9c9e")
          , p = i("025e")
          , m = {
            name: "Showcase",
            props: ["src", "padding", "observer", "max-height"],
            mixins: [u["b"]],
            components: {
                PhotoView: h
            },
            data() {
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
                "inViewport.fully"(t) {
                    this.$emit("didEnterViewport", t, this.src.id)
                },
                "inViewport.now"(t) {
                    t && !this.fetched && this.fetch()
                }
            },
            mounted() {
                this.init(),
                window.addEventListener("resize", this.setSize)
            },
            beforeDestroy() {
                window.removeEventListener("resize", this.setSize)
            },
            methods: {
                init() {
                    const t = this.$route.params.cell;
                    t && (this.fetch(),
                    this.placeholder = t),
                    void 0 !== this.observer && this.observer.observe(this.$el)
                },
                fetch() {
                    Object(p["e"])(this.file.url).then(()=>this.ready())
                },
                ready() {
                    this.fetched = !0,
                    this.$emit("fetched")
                },
                setSize() {
                    requestAnimationFrame(()=>{
                        this.viewWidth = Object(p["i"])(),
                        this.viewHeight = window.innerHeight - this.padding
                    }
                    )
                }
            },
            computed: {
                file() {
                    for (const t of this.src.files.sort((t,e)=>t.width - e.width)) {
                        const e = this.maxHeight ? 0 : .15
                          , i = t.width + t.width * e
                          , s = Math.min(this.viewWidth, Math.min(this.viewHeight, this.maxPhotoHeight) * t.ratio) * p["l"]
                          , o = i >= this.viewWidth * p["l"] ? t.width : i;
                        if (o >= s)
                            return t
                    }
                },
                style() {
                    return this.isExpanded ? {
                        "--url": `url("${this.file.url}")`,
                        width: this.file.width + "px",
                        height: this.file.height / p["l"] + "px"
                    } : {
                        "--url": `url("${this.file.url}")`,
                        paddingTop: this.file.height / this.file.width * 100 + "%"
                    }
                },
                container() {
                    return Object.assign({
                        "--width": this.containerWidth + "px",
                        "--shadow-color": Object(p["g"])(this.src.colors[2]),
                        "background-image": this.placeholder ? `url("${this.placeholder.url} ")` : null
                    }, Object(p["k"])(this.src.colors))
                },
                containerWidth() {
                    return this.file.height / p["l"] <= this.viewHeight ? this.file.width / p["l"] : this.viewHeight * this.file.ratio
                },
                maxPhotoHeight() {
                    return "number" === typeof this.maxHeight ? this.maxHeight : p["l"] > 1 ? 800 : 1600
                },
                sizeClass() {
                    if (this.containerWidth >= this.viewWidth)
                        return "filled"
                },
                expandable() {
                    return this.containerWidth > this.viewWidth && this.file.width / this.file.height > 1.8
                }
            }
        }
          , f = m
          , g = (i("da23"),
        Object(l["a"])(f, s, o, !1, null, "0b32190e", null));
        e["a"] = g.exports
    },
    "38de": function(t, e, i) {},
    4305: function(t, e, i) {
        "use strict";
        i("856d")
    },
    "472b": function(t, e, i) {
        "use strict";
        i("546a")
    },
    "47f3": function(t, e, i) {
        "use strict";
        i("63dd")
    },
    4809: function(t, e, i) {
        "use strict";
        i("b247")
    },
    "48fb": function(t, e, i) {
        "use strict";
        i("386d"),
        i("a481");
        var s = i("bc3a")
          , o = i.n(s);
        const n = "https://stat.ms.dandyweng.com"
          , r = n + "/api/activity"
          , a = localStorage
          , c = {
            project: "camarts",
            platform: window.navigator.standalone ? "pwa" : "web"
        }
          , l = ()=>({
            url: location.href,
            ref: document.referrer,
            dpr: window.devicePixelRatio,
            lang: document.documentElement.getAttribute("lang") || "unknown",
            orien: window.orientation,
            screen: `${window.screen.width}x ${window.screen.height}`,
            viewport: `${window.innerWidth}x ${window.innerHeight}`
        })
          , d = t=>{
            const e = t.substring(t.indexOf("?") + 1, -1 === t.indexOf("&") ? t.length : t.indexOf("&")).replace("=", "");
            return e ? a.session_tag = e : null
        }
          , h = t=>{
            const e = a.session_tag || d(location.search)
              , i = a.session_token || a.getItem("session-token")
              , s = Object.assign(c, l(), t);
            return location.search && window.history.replaceState(null, "", location.href.replace(location.search, "")),
            e && (s["client_tag"] = e),
            i ? (s["client_id"] = i,
            navigator.sendBeacon ? navigator.sendBeacon(r, JSON.stringify(s)) : o.a.post(r, s)) : o.a.post(r, s).then(t=>a.session_token = t.data)
        }
        ;
        e["a"] = {
            visited(t) {
                h({
                    action: "visited",
                    subject: t
                })
            },
            seen(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unknown";
                h({
                    action: "seen",
                    context: i,
                    subject: e ? t + ":" + e : t
                })
            },
            selected(t, e) {
                h({
                    action: "map.selected",
                    point: [t.latitude.toFixed(6), t.longitude.toFixed(6)],
                    radius: Math.round(e)
                })
            }
        }
    },
    4941: function(t, e, i) {
        "use strict";
        i("7ad4")
    },
    "4a03": function(t) {
        t.exports = JSON.parse('{"head":{"title":{"full":"Camarts Photography","column":"%s Photos | Camarts","maps":"Maps"},"description":{"home":"Web App of Camarts Photography — a digital gallery of photographer Dandy Weng, with a library of thousands of photos captured on journeys around the world.","singular":"A photograph by Dandy Weng, captured with a {camera} in {location} in {year}.","maps":"Embark on a journey of the world and find your next travel destination with Camarts’ interactive map experience."}},"columns":{"nearby":"Nearby","faraway":"Faraway","essential":"Essential","recent":"Recent"},"nav":{"home":"Home","app":"Apps","about":"About","subscribe":"Follow"},"menu":{"share":"Share","copy-url":"Copy URL","about":"About Camarts","support":"Contact Support"},"meta-sections":{"metadata":"Metadata","location":"Location"},"show-more":"Show More","loading":"Loading…","category":"Category","exif":"EXIF","aperture":"Aperture","shutter-speed":"Shutter Speed","focal-length":"Focal Length","iso":"ISO","location":"Location","latitude":"Latitude","longitude":"Longitude","elevation":"Elevation","altitude":"Altitude","distance":"Distance","captured":"Captured","camera":"Camera","lens":"Lens","list-separators":[", "," & "],"share":{"title":"Camarts Photography","text":"A photo captured in {location}"},"url":{"about":"https://camartsphotography.com","support":"https://support.camartsphotography.com"},"exceptions":{"404":{"title":"Page not found.","message":"If you’re sure you entered the correct URL, the content might have been relocated or removed. How about taking a look at these lovely photos below instead?"},"legacy":{"title":"I’ve moved on...","message":"You’ve arrived at the new Camarts, which has replaced the old website, and the link you followed no longer works. <br><br>The finest legacy photos have been migrated here. Start exploring below or <a href=https://camartsphotography.com/a-brief-chronicle.html>click here</a> to learn more about the transition process."},"geo":{"title":"Location Unavailable","not_supported":"This browser or your device doesn’t support location services. Please try visiting this page on another device.","not_authorized":"Camarts doesn’t have permission to access your location. Please review your browser or device’s privacy settings.","unknown":"Your location can’t be determined at the moment. Please try again later and contact the developer if this issue persists."}}}')
    },
    "4e77": function(t, e, i) {},
    "52f3": function(t, e, i) {},
    "546a": function(t, e, i) {},
    5526: function(t, e, i) {},
    "56d7": function(t, e, i) {
        "use strict";
        i.r(e);
        var s = i("2b0e")
          , o = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                attrs: {
                    id: "app",
                    "sticky-container": ""
                }
            }, [t.shouldDisplayHeader ? e("Header") : t._e(), e("router-view")], 1)
        }
          , n = []
          , r = (i("28a5"),
        new s["a"])
          , a = function() {
            var t = this
              , e = t._self._c;
            return e("header", {
                attrs: {
                    id: "header",
                    context: t.context
                }
            }, [e("img", {
                staticClass: "logo",
                attrs: {
                    src: i("aa17")
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
        }
          , c = []
          , l = i("c0eb")
          , d = function() {
            var t = this
              , e = t._self._c;
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
        }
          , h = []
          , u = (i("6b54"),
        i("08c1"))
          , p = i("025e")
          , m = {
            name: "Nav",
            props: ["position"],
            components: {
                Popover: u["a"]
            },
            data() {
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
            created() {
                this.aboutTriggerID = "bottom" == this.position ? "bottom-about-trigger" : "about-trigger",
                this.appTriggerID = "bottom" == this.position ? "bottom-app-trigger" : "app-trigger",
                this.socialTriggerID = "bottom" == this.position ? "bottom-social-trigger" : "social-trigger",
                window.addEventListener("scroll", this.viewDidScroll)
            },
            mounted() {
                this.aboutTrigger = document.getElementById(this.aboutTriggerID),
                this.appTrigger = document.getElementById(this.appTriggerID),
                this.socialTrigger = document.getElementById(this.socialTriggerID)
            },
            destroyed() {
                window.removeEventListener("scroll", this.viewDidScroll)
            },
            methods: {
                viewDidScroll() {
                    this.select()
                },
                select() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.current = this.isSelected(t) ? "" : t
                },
                isSelected() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return this.current == t
                }
            },
            computed: {
                supportURL() {
                    const t = new URL(this.$t("url.support"));
                    return t.searchParams.set("diagnostics", Object(p["c"])()),
                    t.toString()
                },
                home() {
                    try {
                        return this.$route.name.includes("home")
                    } catch (t) {
                        return !1
                    }
                }
            }
        }
          , f = m
          , g = (i("4941"),
        i("2877"))
          , v = Object(g["a"])(f, d, h, !1, null, "7d36c99c", null)
          , w = v.exports
          , b = function() {
            var t = this
              , e = t._self._c;
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
        }
          , y = []
          , _ = {
            name: "ViewSelector",
            data() {
                return {
                    current: "feed"
                }
            },
            watch: {
                $route: "init"
            },
            mounted() {
                this.init()
            },
            methods: {
                init() {
                    this.current = localStorage.getItem("view-selection") || this.current,
                    "maps" == this.$route.name ? this.current = "map" : "map" == this.current && (this.current = "feed")
                },
                select(t) {
                    t != this.current && (this.current = t,
                    r.$emit("viewStyleDidChange", t),
                    "map" != t && localStorage.setItem("view-selection", t))
                }
            }
        }
          , x = _
          , C = (i("bf2b"),
        Object(g["a"])(x, b, y, !1, null, "407ef784", null))
          , P = C.exports
          , S = {
            name: "Header",
            components: {
                Nav: w,
                ViewSelector: P
            },
            directives: {
                Sticky: l["a"]
            },
            data() {
                return {
                    context: "feed"
                }
            },
            mounted() {
                this.init()
            },
            watch: {
                $route: "init"
            },
            methods: {
                init() {
                    this.context = this.$route.name || this.context
                }
            }
        }
          , M = S
          , O = (i("472b"),
        Object(g["a"])(M, a, c, !1, null, "6059c918", null))
          , j = O.exports
          , k = {
            name: "App",
            metaInfo: {
                title: "",
                titleTemplate: "%s | Camarts"
            },
            components: {
                Header: j
            },
            mounted() {
                this.init()
            },
            beforeDestroy() {
                this.deinit()
            },
            computed: {
                shouldDisplayHeader() {
                    return !["singular", "404"].includes(this.$route.name)
                }
            },
            created() {
                this.updateColumnIfNeeded()
            },
            methods: {
                init() {
                    this.updateRootProperty(),
                    Object(p["j"])("pwa", window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches),
                    Object(p["j"])("touchscreen", "ontouchstart"in document.documentElement),
                    Object(p["j"])("ios", (/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && !window.MSStream),
                    window.addEventListener("resize", this.updateRootProperty),
                    r.$on("viewStyleDidChange", t=>this.updateStyle(t))
                },
                deinit() {
                    window.removeEventListener("resize", this.updateRootProperty),
                    r.$off("viewStyleDidChange", t=>this.updateStyle(t))
                },
                updateColumnIfNeeded() {
                    if (this.$route.name.includes("home:")) {
                        const t = this.$route.name.split(":")[1];
                        localStorage.setItem("column-selection", t)
                    }
                },
                updateStyle(t) {
                    const e = "map" == t ? "maps" : {
                        name: "home",
                        params: {
                            style: t
                        }
                    };
                    this.$router.push(e).catch(t=>{}
                    )
                },
                updateRootProperty() {
                    const t = .01 * window.innerHeight;
                    document.body.style.setProperty("--dvh", t + "px")
                }
            }
        }
          , I = k
          , $ = (i("4809"),
        Object(g["a"])(I, o, n, !1, null, null, null))
          , D = $.exports
          , L = i("8c4f")
          , V = function() {
            var t = this
              , e = t._self._c;
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
        }
          , T = []
          , N = (i("ac6a"),
        i("1da1"))
          , E = i("ade3")
          , A = i("365c")
          , H = (i("55dd"),
        i("bc3a"))
          , F = i.n(H);
        const R = "//edge.camarts.cn/api"
          , z = ()=>F.a.get(R + "/location");
        class q {
            constructor(t, e) {
                Object.assign(this, t),
                this.userLocale = e
            }
            get name() {
                return this.getName(!1)
            }
            get shortName() {
                return this.getName(!0)
            }
            get fullName() {
                const t = this.localized
                  , e = t.suffix && (this.userLocale.isCJK || t.tags && t.tags.includes("suffix-is-mandatory"));
                return e ? t.name + this.userLocale.suffixSeparator + t.suffix : t.name
            }
            get localized() {
                return this.names.filter(t=>t.languages.includes(this.userLocale.code))[0]
            }
            getName(t) {
                const e = this.localized;
                let i = t && e.name_abbrev || e.name;
                return e.suffix && e.tags && e.tags.includes("suffix-is-mandatory") && (i += this.userLocale.suffixSeparator + e.suffix),
                i
            }
        }
        class B {
            constructor(t, e, i, s) {
                Object(E["a"])(this, "getByID", t=>this.path.filter(e=>e.id == t)[0] || !1),
                Object(E["a"])(this, "getByTag", t=>this.path.filter(e=>e.tags.includes(t))[0] || !1),
                this.id = e,
                this.contextID = i || s.locationRootContextID,
                this.userLocale = s,
                this.path = this.getPathLocation(t),
                this.isAvailable = void 0 !== this.path
            }
            get displayName() {
                if (!this.isAvailable)
                    return "";
                const t = this.select(this.id, this.contextID).map(t=>t.shortName);
                return this.userLocale.isCJK ? t.join(" · ") : t.reverse().join(", ")
            }
            get fullDisplayName() {
                if (!this.isAvailable)
                    return "";
                const t = Math.min(2, this.path.length - 1)
                  , e = this.path.slice(t).map(t=>t.tags.includes("aal-1") ? t.shortName : t.fullName);
                return this.userLocale.isCJK ? e.join("") : e.reverse().join(", ")
            }
            get components() {
                if (!this.isAvailable)
                    return "";
                const t = Math.min(2, this.path.length - 1);
                return this.path.slice(t).map(t=>t.fullName)
            }
            select(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                const i = this.path
                  , s = !!e && this.getByID(e)
                  , o = s || this.getByTag("aal-0")
                  , n = i.indexOf(o)
                  , r = i[n + 1]
                  , a = i[n + 2]
                  , c = i[n + 3]
                  , l = [s ? r : o];
                if (r && r.tags.includes("prominent") && !s)
                    l.push(r);
                else if (c && (c.tags.includes("prominent") || a.tags.includes("pass")))
                    l.push(c);
                else {
                    const t = s ? null : r;
                    l.push(a || t)
                }
                return l.filter(t=>t)
            }
            getPath(t) {
                let e;
                return t.id === this.id ? [t] : ((t.nodes || []).some(t=>e = this.getPath(t)),
                e && [t, ...e].filter(t=>t.id))
            }
            getPathLocation(t) {
                const e = this.getPath(t);
                return e ? e.map(t=>new q(t,this.userLocale)) : e
            }
        }
        var W = B;
        class G {
            constructor(t) {
                Object.assign(this, t),
                this.colors = t.colors.split("-"),
                this.files = this.files.map(t=>new U(t))
            }
            setEquipments(t) {
                this.equipments = t.filter(t=>this.equipments.split(",").includes(String(t.id)))
            }
            setLocation(t) {
                this.locationContext = null,
                t.setLocation(this)
            }
            get thumbnail() {
                return this.files.filter(t=>400 == Math.min(t.height, t.width))[0]
            }
            get date() {
                const t = navigator.language;
                return new Date(1e3 * this.captured).toLocaleDateString(t, {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                })
            }
            get shutterSpeed() {
                const t = this.shutter;
                return t >= 1 ? t + "s" : `1/${Math.round(1 / t)}s`
            }
            get camera() {
                try {
                    const t = this.equipments.filter(t=>"camera" == t.type)[0];
                    return `${t.brand} ${t.model}`
                } catch (t) {
                    return null
                }
            }
            get lens() {
                try {
                    const t = this.equipments.filter(t=>"lens" == t.type)[0]
                      , e = ["ASPH.", "USM", "IS", "OSS", "GM"];
                    return t.model.split("+")[0].split(" ").filter(t=>!e.includes(t)).join(" ")
                } catch (t) {
                    return null
                }
            }
            get lensAccessory() {
                try {
                    const t = this.equipments.filter(t=>"lens" == t.type)[0];
                    return t.model.split("+")[1]
                } catch (t) {
                    return null
                }
            }
            get latitudeDMS() {
                return Object(p["a"])(this.latitude, !1)
            }
            get longitudeDMS() {
                return Object(p["a"])(this.longitude, !0)
            }
            get geojson() {
                return Object(p["b"])([this])
            }
            get distance() {
                const t = sessionStorage.getItem("coordinates");
                if (t) {
                    const e = JSON.parse(t)
                      , i = Object(p["d"])(e.latitude, e.longitude, this.latitude, this.longitude)
                      , s = i >= 10 ? Math.round(i) : +(Math.round(i + "e+1") + "e-1");
                    return s >= 1 ? s.toLocaleString() + " km" : Math.round(1e3 * i) + "m"
                }
                return !1
            }
        }
        class U {
            constructor(t) {
                Object.assign(this, t)
            }
            get url() {
                return `//library.cdn.camartsphotography.com/${this.name}.jpg`
            }
            get ratio() {
                return this.width / this.height
            }
        }
        class J {
            constructor() {
                this.location = new Q
            }
            set(t) {
                Object.assign(this, t)
            }
            get all() {
                return this.photos.map(t=>this.newPhoto(t))
            }
            fetch() {
                var t = this;
                return Object(N["a"])((function*() {
                    const e = yield A["a"].fetchLibrary();
                    return t.set(e.data["data"]),
                    t
                }
                ))()
            }
            fetchPhoto(t) {
                var e = this;
                return Object(N["a"])((function*() {
                    const i = yield A["a"].fetchPhoto(t);
                    return e.set(i.data["data"]),
                    e.newPhoto(e.photo)
                }
                ))()
            }
            getPhoto(t) {
                const e = this.photos.find(e=>e.id === t);
                return this.newPhoto(e)
            }
            queryPhotos() {
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t=>t;
                return t(this.photos).map(t=>this.newPhoto(t))
            }
            nextBatch(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t=>t;
                return i(Array.from(this.photos)).slice((t - 1) * e, t * e).map(t=>this.newPhoto(t))
            }
            newPhoto(t) {
                const e = new G(t);
                return e.setEquipments(this.equipments),
                e.setLocation(this.location),
                e
            }
            getGeoDescription(t, e, i) {
                const s = this.queryPhotos(t).map(t=>t.locationContext.path);
                return this.location.getDescriptionStrings(s, e, i)
            }
        }
        class Q {
            constructor() {
                Object(E["a"])(this, "queue", []),
                this.fetch()
            }
            set(t) {
                Object.assign(this, t),
                this.userLocale = new K(localStorage.getItem("locale")),
                this.queue.forEach(t=>{
                    t = this.setLocation(t)
                }
                )
            }
            fetch(t) {
                var e = this;
                return Object(N["a"])((function*() {
                    const i = "data_location"
                      , s = localStorage.getItem(i);
                    if (s && !t)
                        return void e.set(JSON.parse(s));
                    if (e.isFetchingLocationData)
                        return;
                    e.isFetchingLocationData = !0;
                    const o = yield z();
                    t !== o.data._version ? (localStorage.setItem(i, JSON.stringify(o.data)),
                    e.set(o.data)) : console.warn("Unable to fetch a valid LocationData. Wait for CDN propagation and try again."),
                    e.isFetchingLocationData = !1
                }
                ))()
            }
            setLocation(t) {
                const e = this.data;
                if (!e)
                    return void this.queue.push(t);
                const i = new W(e,t.location_id,null,this.userLocale);
                if (i.isAvailable)
                    return t.locationContext = i,
                    t;
                this.queue.push(t),
                this.fetch(this._version)
            }
            getDescriptionStrings(t, e, i) {
                const s = i
                  , o = this.getRepresentative(t, e)
                  , n = o.pop()
                  , r = o.map(t=>t.name).join(s[0]) + s[1] + n.name
                  , a = new W(this.data,n.id,null,this.userLocale);
                let c = a.path.map(t=>t.fullName).slice(1, -1);
                return c.length > 1 && (c = c.slice(1)),
                {
                    primary: 0 == o.length ? n.fullName : r,
                    secondary: this.userLocale.isCJK ? c.join("") : c.reverse().join(", ")
                }
            }
            getRepresentative(t, e) {
                const i = t.sort((t,e)=>e.length - t.length)[0].length
                  , s = [];
                for (let o = 0; o < i; o++) {
                    let e = [];
                    t.map(t=>t[o]).filter(t=>t).forEach(t=>{
                        e.some(e=>e.id === t.id) || e.push(t)
                    }
                    ),
                    s.push(e)
                }
                for (let o = 0; o < s.length; o++) {
                    const t = s[o];
                    if (!(1 == t.length && o < s.length - 1))
                        return t.length > e ? s[o - 1] : t
                }
            }
        }
        class K {
            constructor(t) {
                this.code = t
            }
            get isCJK() {
                return this.code.includes("zh")
            }
            get suffixSeparator() {
                return this.isCJK ? "" : " "
            }
            get locationRootContextID() {
                const t = t=>this.code.includes(t);
                return t("zh") ? "QVBQ" : t("US") ? "bNwQ" : void 0
            }
        }
        var Y = new J
          , X = function() {
            var t = this
              , e = t._self._c;
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
            }
            )), 1)])
        }
          , Z = []
          , tt = function() {
            var t = this
              , e = t._self._c;
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
        }
          , et = []
          , it = i("9c9e")
          , st = {
            name: "GridCell",
            props: ["src", "height"],
            mixins: [it["b"]],
            data() {
                return {
                    fetched: !1
                }
            },
            watch: {
                "inViewport.now"(t) {
                    t && !this.fetched && Object(p["e"])(this.file.url).then(()=>this.fetched = !0)
                }
            },
            computed: {
                style() {
                    return Object.assign({
                        "--url": "url('" + this.file.url + "')",
                        "--ratio": this.file.height / this.file.width * 100 + "%",
                        "--shadow-color": Object(p["g"])(this.src.colors[2])
                    }, Object(p["k"])(this.src.colors))
                },
                file() {
                    return this.src.thumbnail
                },
                route() {
                    const t = this.src
                      , e = this.$route.name;
                    let i;
                    return i = "home" === e || e.includes("home:") ? "home-singular" : "maps" === e ? "map-singular" : this.$route.name,
                    {
                        name: i,
                        params: {
                            id: t.id,
                            cell: {
                                item: t,
                                url: this.file.url,
                                rect: ()=>this.$refs.item.getBoundingClientRect() || DOMRect()
                            },
                            context: "maps" === e ? "map" : "grid"
                        }
                    }
                },
                isSelected() {
                    return this.$route.params.id === this.src.id && "grid" == this.$route.params.context
                }
            }
        }
          , ot = st
          , nt = (i("f63f"),
        Object(g["a"])(ot, tt, et, !1, null, "62c6daa4", null))
          , rt = nt.exports
          , at = i("58f1")
          , ct = i.n(at)
          , lt = i("e16c")
          , dt = i.n(lt)
          , ht = {
            name: "Grid",
            props: ["id", "photos", "fetched", "hasMore", "embedded"],
            components: {
                GridCell: rt
            },
            mounted() {
                this.init()
            },
            watch: {
                photos: "init"
            },
            methods: {
                init() {
                    this.fetched && (this.tiltInit(),
                    this.layoutInit())
                },
                tiltInit() {
                    "ontouchstart"in document.documentElement || this.embedded || requestAnimationFrame(()=>ct.a.init(document.querySelectorAll(".grid .item"), {
                        max: 8,
                        speed: 750,
                        scale: 1.1,
                        glare: !0,
                        "max-glare": Object(p["h"])() ? .1 : .382
                    }))
                },
                layoutInit() {
                    dt()({
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
                    }),
                    requestAnimationFrame(()=>{
                        window.scrollTo(window.scrollX, window.scrollY + 1)
                    }
                    )
                }
            }
        }
          , ut = ht
          , pt = (i("aca5"),
        Object(g["a"])(ut, X, Z, !1, null, "801df05a", null))
          , mt = pt.exports
          , ft = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                attrs: {
                    id: "feed"
                }
            }, t._l(t.photos, (function(i) {
                return e("section", [e("Showcase", {
                    attrs: {
                        src: i,
                        padding: 60,
                        "max-height": 800
                    },
                    on: {
                        didEnterViewport: t.photoInView
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.push(e, i)
                        }
                    }
                }), e("Meta", {
                    attrs: {
                        src: i
                    }
                })], 1)
            }
            )), 0)
        }
          , gt = []
          , vt = i("48fb")
          , wt = i("a9fb")
          , bt = (i("7f7f"),
        function() {
            var t = this
              , e = t._self._c;
            return e("section", [e("header", [e("h2", [t._v(t._s(t.$t(t.name)))])]), t._t("default")], 2)
        }
        )
          , yt = []
          , _t = {
            name: "Section",
            props: ["name"]
        }
          , xt = _t
          , Ct = (i("d581"),
        Object(g["a"])(xt, bt, yt, !1, null, "35227aba", null))
          , Pt = Ct.exports
          , St = i("3849")
          , Mt = {
            name: "Feed",
            props: ["photos", "fetched", "hasMore"],
            components: {
                Meta: wt["a"],
                Section: Pt,
                Showcase: St["a"]
            },
            data() {
                return {
                    seen: [],
                    photoInViewID: ""
                }
            },
            mounted() {
                vt["a"].visited("home")
            },
            methods: {
                push(t, e) {
                    this.$router.push({
                        name: "home-singular",
                        params: {
                            id: e.id,
                            cell: {
                                photo: e,
                                url: e.thumbnail.url,
                                rect: ()=>t.target.getBoundingClientRect() || t.target.DOMRect()
                            },
                            context: "feed"
                        }
                    }).catch(t=>{}
                    )
                },
                photoInView(t, e) {
                    if (t) {
                        if (this.photoInViewID = e,
                        this.seen.includes(e))
                            return;
                        setTimeout(()=>{
                            e === this.photoInViewID && (vt["a"].seen("photo", e, "feed"),
                            this.$log(`Seen photo ${e} @ feed`),
                            this.seen.push(e))
                        }
                        , 500)
                    }
                }
            }
        }
          , Ot = Mt
          , jt = Object(g["a"])(Ot, ft, gt, !1, null, null, null)
          , kt = jt.exports
          , It = function() {
            var t = this
              , e = t._self._c;
            return e("footer", [e("Nav", {
                attrs: {
                    position: "bottom"
                }
            }), t._m(0)], 1)
        }
          , $t = [function() {
            var t = this
              , e = t._self._c;
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
        }
        ]
          , Dt = {
            name: "Footer",
            mixins: [it["b"]],
            components: {
                Nav: w
            },
            data() {
                return {
                    seen: !1
                }
            },
            watch: {
                "inViewport.now"(t) {
                    t && !this.seen && (this.seen = !0,
                    vt["a"].seen("footer"))
                }
            }
        }
          , Lt = Dt
          , Vt = (i("1ca5"),
        Object(g["a"])(Lt, It, $t, !1, null, "17d64fff", null))
          , Tt = Vt.exports
          , Nt = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                class: t.appearance
            }, [e("h2", [t._v(t._s(t.$t(t.title)))]), e("p", {
                domProps: {
                    innerHTML: t._s(t.content)
                }
            })])
        }
          , Et = []
          , At = {
            name: "Notice",
            props: ["title", "message", "appearance"],
            computed: {
                content() {
                    return this.$t(this.message)
                }
            }
        }
          , Ht = At
          , Ft = (i("e7df"),
        Object(g["a"])(Ht, Nt, Et, !1, null, "7091de0a", null))
          , Rt = Ft.exports
          , zt = function() {
            var t = this
              , e = t._self._c;
            return e("nav", {
                attrs: {
                    id: "column-bar"
                }
            }, [e("ul", t._l(t.columns, (function(i) {
                return e("li", {
                    attrs: {
                        selected: i == t.current
                    },
                    on: {
                        click: function(e) {
                            return t.select(i)
                        }
                    }
                }, [t._v(t._s(t.$t("columns.".concat(i))))])
            }
            )), 0)])
        }
          , qt = []
          , Bt = i("db49")
          , Wt = {
            name: "ColumnBar",
            data() {
                return {
                    current: Bt["a"][0].id,
                    columns: Bt["a"].map(t=>t.id)
                }
            },
            mounted() {
                this.init()
            },
            methods: {
                init() {
                    this.current = localStorage.getItem("column-selection") || this.current
                },
                select(t) {
                    t != this.current && (this.current = t,
                    r.$emit("columnDidChange", t),
                    localStorage.setItem("column-selection", t))
                }
            }
        }
          , Gt = Wt
          , Ut = (i("d649"),
        Object(g["a"])(Gt, zt, qt, !1, null, "6281e6b6", null))
          , Jt = Ut.exports
          , Qt = i("a513");
        function Kt(t, e) {
            var i = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(t);
                e && (s = s.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                i.push.apply(i, s)
            }
            return i
        }
        function Yt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Kt(Object(i), !0).forEach((function(e) {
                    Object(E["a"])(t, e, i[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Kt(Object(i)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                }
                ))
            }
            return t
        }
        var Xt = {
            name: "Home",
            mixins: [it["a"]],
            components: {
                InfiniteScroll: Qt["a"],
                ColumnBar: Jt,
                Notice: Rt,
                Footer: Tt,
                Grid: mt,
                Feed: kt
            },
            directives: {
                Sticky: l["a"]
            },
            data() {
                return {
                    style: "feed",
                    column: Bt["a"][0],
                    photos: [],
                    fetched: !1,
                    hasMore: !1,
                    currentPage: 1,
                    errorMessage: null,
                    carouselLastIndex: null
                }
            },
            metaInfo() {
                const t = this.$route.name.includes(":") ? {
                    title: this.$t("columns." + this.column.id),
                    titleTemplate: this.$t("head.title.column")
                } : {
                    title: "Camarts",
                    titleTemplate: null
                };
                return Yt(Yt({}, t), {
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
            mounted() {
                this.init(),
                this.fetch()
            },
            beforeDestroy() {
                this.deinit()
            },
            watch: {
                isQuickView: "carouselDidToggle"
            },
            computed: {
                pageSize() {
                    return 24
                },
                currentIndex() {
                    return this.photos.findIndex(t=>t.id === this.$route.params.id)
                }
            },
            methods: {
                init() {
                    this.column = Bt["a"].find(t=>t.id === localStorage.getItem("column-selection")) || this.column,
                    this.style = this.$route.params.style || localStorage.getItem("view-selection") || this.style,
                    this.hasMore = !0,
                    this.fetched = !1,
                    r.$on("columnDidChange", t=>this.updateColumn(t)),
                    r.$on("viewStyleDidChange", t=>this.updateStyle(t))
                },
                deinit() {
                    r.$off("columnDidChange", t=>this.updateColumn(t)),
                    r.$off("viewStyleDidChange", t=>this.updateStyle(t))
                },
                fetch() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        try {
                            yield Y.fetch(),
                            t.updateData()
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    ))()
                },
                fetchMore() {
                    this.currentPage++,
                    this.fetched = !1,
                    this.updateData()
                },
                updateData() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        if (t.column.requiresUserLocation) {
                            const e = yield t.requestUserLocation();
                            if (!e)
                                return
                        }
                        const e = Y.nextBatch(t.currentPage, t.pageSize, t.column.processor);
                        t.photos = [...t.photos, ...e],
                        t.fetched = !0,
                        t.hasMore = t.photos.length < Y.photos.length
                    }
                    ))()
                },
                requestUserLocation() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        try {
                            const t = yield Object(p["f"])()
                              , e = t.latitude
                              , i = t.longitude
                              , s = JSON.stringify({
                                latitude: e,
                                longitude: i
                            });
                            return sessionStorage.setItem("coordinates", s),
                            s
                        } catch (e) {
                            return t.fetched = !0,
                            t.hasMore = !1,
                            t.errorMessage = "exceptions.geo." + e,
                            null
                        }
                    }
                    ))()
                },
                carouselDidToggle() {
                    const t = this.isQuickView
                      , e = this.photos[this.carouselLastIndex];
                    if (!t) {
                        const t = "loading-transition-disabled";
                        Object(p["j"])(t, !0),
                        setTimeout(()=>{
                            Object(p["j"])(t, !1)
                        }
                        , 100)
                    }
                    e && (requestAnimationFrame(()=>{
                        const t = document.querySelector(`[data-item="${e.id}"]`);
                        requestAnimationFrame(()=>{
                            t.scrollIntoView({
                                block: "center",
                                inline: "center"
                            })
                        }
                        )
                    }
                    ),
                    this.carouselLastIndex = null)
                },
                carouselIndexDidChange(t) {
                    t >= this.photos.length - 1 && this.fetchMore(),
                    this.carouselLastIndex = t
                },
                updateColumn(t) {
                    this.column = Bt["a"].find(e=>e.id === t),
                    this.fetched = !1,
                    this.photos = [],
                    this.currentPage = 1,
                    this.errorMessage = null,
                    this.updateData(),
                    "essential" === t ? this.$router.push({
                        path: "/",
                        replace: !0
                    }) : this.$router.push({
                        path: t,
                        replace: !0
                    }),
                    requestAnimationFrame(()=>{
                        window.scrollTo(0, 0)
                    }
                    )
                },
                updateStyle(t) {
                    this.style = t
                }
            }
        }
          , Zt = Xt
          , te = (i("4305"),
        Object(g["a"])(Zt, V, T, !1, null, "95420844", null))
          , ee = te.exports
          , ie = function() {
            var t = this
              , e = t._self._c;
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
        }
          , se = [];
        const oe = t=>t + "px"
          , ne = (t,e)=>i=>i.map(e=>(e._distance = Object(p["d"])(t.coordinates.latitude, t.coordinates.longitude, e.latitude, e.longitude),
        e)).sort((t,e)=>t._distance - e._distance).filter(i=>i._distance < t.kmpp * e);
        var re = {
            name: "Maps",
            mixins: [it["a"]],
            components: {
                InfiniteScroll: Qt["a"],
                Popover: u["a"],
                Grid: mt,
                Map: ()=>i.e("map").then(i.bind(null, "b822"))
            },
            metaInfo() {
                return {
                    title: this.$t("head.title.maps"),
                    meta: [{
                        vmid: "description",
                        name: "description",
                        content: this.$t("head.description.maps")
                    }, {
                        vmid: "og:title",
                        name: "og:title",
                        content: `${this.$t("head.title.maps")} | ${this.$t("head.title.full")}`
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
            data() {
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
            mounted() {
                this.fetch(),
                this.setCursorRadius(),
                window.addEventListener("resize", this.setCursorRadius)
            },
            beforeDestroy() {
                window.removeEventListener("resize", this.setCursorRadius)
            },
            watch: {
                isQuickView: "carouselDidToggle"
            },
            computed: {
                currentIndex() {
                    return this.selectedPhotos.findIndex(t=>t.id === this.$route.params.id)
                }
            },
            methods: {
                fetch() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        try {
                            yield Y.fetch();
                            t.updateData()
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    ))()
                },
                updateData() {
                    this.geojson = Object(p["b"])(Y.all)
                },
                showPhotos(t, e) {
                    this.showPopover = !0,
                    this.marker = e,
                    this.selectedPhotos = t,
                    requestAnimationFrame(()=>this.setPopover())
                },
                hidePhotos() {
                    this.dismissPopover(),
                    this.$refs.map.removeMarker()
                },
                cursorDidMove(t) {
                    this.cursorStyle = {
                        "--size": oe(2 * this.cursorRadius),
                        "--x": oe(t.clientX),
                        "--y": oe(t.clientY)
                    }
                },
                mapDidClick(t) {
                    const e = ne(t, this.cursorRadius)
                      , i = Y.nextBatch(1, 80, e);
                    i.length > 0 ? (this.showPhotos(i, t.marker),
                    this.selectedGeoDescription = Y.getGeoDescription(e, 4, this.$t("list-separators")),
                    vt["a"].selected(t.coordinates, t.kmpp * this.cursorRadius)) : this.hidePhotos()
                },
                mapDidHover(t) {
                    if (!this.showCursor)
                        return;
                    const e = t.zoom
                      , i = t.coordinates
                      , s = Math.min(5, Math.max(1, e / 2))
                      , o = `${i.latitude.toFixed(s)},${i.longitude.toFixed(s)}`;
                    o !== this.lastHoverPosition && (this.selectionHasPhotos = 1 === Y.nextBatch(1, 1, ne(t, this.cursorRadius)).length,
                    this.lastHoverPosition = o)
                },
                mapDidLoad() {
                    this.isMapLoaded = !0
                },
                mapDidMove() {
                    this.setPopover()
                },
                mapDidResize() {
                    this.setPopover()
                },
                carouselDidToggle() {
                    this.isQuickView;
                    const t = this.selectedPhotos[this.carouselLastIndex];
                    t && (requestAnimationFrame(()=>{
                        const e = document.querySelector(`[data-item="${t.id}"]`);
                        requestAnimationFrame(()=>{
                            e.scrollIntoView({
                                block: "center"
                            })
                        }
                        )
                    }
                    ),
                    this.carouselLastIndex = null)
                },
                carouselIndexDidChange(t) {
                    this.carouselLastIndex = t
                },
                popoverDidDismiss() {
                    this.selectedPhotos = [],
                    this.showPopover = !1,
                    this.marker = void 0,
                    this.$refs.map.removeMarker()
                },
                dismissPopover() {
                    const t = this.$refs.popover;
                    t && t.dismiss()
                },
                setPopover() {
                    const t = this.$refs.popover;
                    t && t.update(this.marker)
                },
                setCursorRadius() {
                    const t = (t,e,i)=>t * (1 - i) + e * i
                      , e = (t,e,s)=>i((s - t) / (e - t))
                      , i = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                          , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        return Math.min(i, Math.max(e, t))
                    };
                    this.cursorRadius = t(38, 68, e(600, 1600, window.innerWidth))
                }
            }
        }
          , ae = re
          , ce = (i("5f46"),
        Object(g["a"])(ae, ie, se, !1, null, "9fb1d580", null))
          , le = ce.exports
          , de = function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                attrs: {
                    id: "singular"
                }
            }, [e("header", [e("img", {
                staticClass: "logo",
                attrs: {
                    src: i("aa17")
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
            }) : t._e(), t._l(t.columns, (function(i) {
                return e("Section", {
                    key: i.id,
                    staticClass: "columns",
                    attrs: {
                        name: "columns.".concat(i.id)
                    }
                }, [e("Grid", {
                    attrs: {
                        id: "grid-".concat(i.id),
                        photos: i.photos,
                        fetched: !0
                    }
                }), e("button", {
                    on: {
                        click: function(e) {
                            return t.route(i)
                        }
                    }
                }, [t._v(t._s(t.$t("show-more")) + " "), e("i", {
                    staticClass: "chevron"
                })])], 1)
            }
            )), t.columnLoaded ? t.fetched ? e("Footer") : t._e() : e("InfiniteScroll", {
                attrs: {
                    loading: !t.fetched || !t.columnLoaded,
                    auto: !0
                },
                on: {
                    triggered: t.fetchColumns
                }
            })], 2)
        }
          , he = [];
        const ue = t=>{
            if ("string" !== typeof t)
                throw "id-undefined";
            if (!/^[a-z][0-9][a-z]$/.test(t))
                throw "id-malformed";
            return t
        }
        ;
        var pe = {
            name: "Singular",
            components: {
                InfiniteScroll: Qt["a"],
                Showcase: St["a"],
                Section: Pt,
                Footer: Tt,
                Notice: Rt,
                Meta: wt["a"],
                Grid: mt,
                Nav: w
            },
            data() {
                return {
                    photo: null,
                    columns: [],
                    fetched: !1,
                    columnLoaded: !1,
                    exception: null
                }
            },
            metaInfo() {
                const t = this.photo ? this.$t("head.description.singular", {
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
                        content: this.photo ? "http:" + this.photo.thumbnail.url : void 0
                    }, {
                        vmid: "og:url",
                        name: "og:url",
                        content: this.photo ? "https://camarts.app/" + this.photo.id : void 0
                    }]
                }
            },
            mounted() {
                this.init()
            },
            watch: {
                $route: "update"
            },
            methods: {
                init() {
                    this.fetch()
                },
                fetch() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        try {
                            t.photo = yield Y.fetchPhoto(ue(t.$route.params.id)),
                            vt["a"].seen(t.photo.id, "singular")
                        } catch (e) {
                            t.handleException(e)
                        } finally {
                            t.fetched = !0,
                            requestAnimationFrame(()=>{
                                window.scrollTo(0, 0)
                            }
                            )
                        }
                    }
                    ))()
                },
                fetchColumns() {
                    var t = this;
                    return Object(N["a"])((function*() {
                        try {
                            yield Y.fetch(),
                            t.updateColumnData(),
                            t.columnLoaded = !0
                        } catch (e) {
                            console.error(e)
                        }
                    }
                    ))()
                },
                update() {
                    this.columns = [],
                    this.fetch(),
                    this.fetchColumns()
                },
                updateColumnData() {
                    for (const t of Bt["a"].filter(t=>t.isFeatured)) {
                        const e = 12
                          , i = Y.nextBatch(1, e + 1, t.processor).filter(t=>t.id !== this.$route.params.id).slice(0, e);
                        this.columns.push({
                            id: t.id,
                            photos: i
                        })
                    }
                },
                handleException(t) {
                    "id-undefined" == t && /^archives\/[0-9]+\.html$/.test(this.$route.params.pathMatch) ? this.exception = "legacy" : (this.exception = "404",
                    this.$log(t))
                },
                route(t) {
                    localStorage.setItem("column-selection", t.id),
                    this.$router.push({
                        name: "home"
                    })
                }
            }
        }
          , me = pe
          , fe = (i("47f3"),
        Object(g["a"])(me, de, he, !1, null, "25a289d0", null))
          , ge = fe.exports;
        s["a"].use(L["a"]);
        var ve = new L["a"]({
            mode: "history",
            routes: [{
                path: "/",
                name: "home",
                component: ee
            }, {
                path: "/recent",
                name: "home:recent",
                component: ee
            }, {
                path: "/nearby",
                name: "home:nearby",
                component: ee
            }, {
                path: "/faraway",
                name: "home:faraway",
                component: ee
            }, {
                path: "/index.html",
                component: ee
            }, {
                path: "/maps",
                name: "maps",
                component: le
            }, {
                path: "/:id",
                name: "singular",
                component: ge
            }, {
                path: "/:id",
                name: "home-singular",
                component: ee,
                alias: "/id"
            }, {
                path: "/:id",
                name: "map-singular",
                component: le,
                alias: "/id"
            }, {
                path: "/:pathMatch(.*)*",
                name: "404",
                component: ge
            }]
        })
          , we = i("a925")
          , be = i("58ca");
        s["a"].config.productionTip = !1,
        s["a"].prototype.$libraryURL = "//library.cdn.camartsphotography.com",
        s["a"].prototype.$log = t=>{
            0
        }
        ,
        s["a"].use(we["a"]),
        s["a"].use(be["a"]);
        const ye = {
            "en-US": i("4a03"),
            "zh-cmn-Hans-CN": i("e1cb")
        }
          , _e = new we["a"]({
            locale: "zh" == navigator.language.substring(0, 2) ? "zh-cmn-Hans-CN" : "en-US",
            fallbackLocale: "en-US",
            messages: ye,
            silentTranslationWarn: !0
        });
        document.documentElement.setAttribute("lang", _e.locale),
        localStorage.setItem("locale", _e.locale),
        new s["a"]({
            el: "#app",
            router: ve,
            i18n: _e,
            components: {
                App: D
            },
            render: t=>t(D)
        })
    },
    "5ce8": function(t, e, i) {},
    "5f46": function(t, e, i) {
        "use strict";
        i("ce1d")
    },
    "63dd": function(t, e, i) {},
    "6db7": function(t, e, i) {
        "use strict";
        i("89b0")
    },
    "70bc": function(t, e, i) {
        "use strict";
        i("5ce8")
    },
    7642: function(t, e, i) {
        "use strict";
        i("9685")
    },
    "7ad4": function(t, e, i) {},
    "856d": function(t, e, i) {},
    "89b0": function(t, e, i) {},
    9685: function(t, e, i) {},
    "97dc": function(t, e, i) {
        "use strict";
        i("4e77")
    },
    "9c9e": function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return s
        }
        )),
        i.d(e, "b", (function() {
            return o
        }
        ));
        i("6b54"),
        i("365c");
        const s = {
            components: {
                Carousel: ()=>i.e("chunk-297fb264").then(i.bind(null, "a45f"))
            },
            computed: {
                isQuickView() {
                    return !!this.$route.params.id
                }
            }
        }
          , o = {
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
                    default() {
                        return [0, 1]
                    }
                }
            },
            data() {
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
            mounted() {
                return this.$nextTick(this.inViewportInit)
            },
            destroyed() {
                return this.removeInViewportHandlers()
            },
            computed: {
                inViewportThresholdWithMax() {
                    const t = "object" === typeof this.inViewportThreshold ? this.inViewportThreshold : [this.inViewportThreshold]
                      , e = this.inViewport.maxThreshold;
                    return e && [].indexOf.call(t, e) >= 0 ? t : t.concat(this.inViewport.maxThreshold)
                }
            },
            watch: {
                inViewportActive(t) {
                    return t ? this.addInViewportHandlers() : this.removeInViewportHandlers()
                },
                inViewportRootMargin() {
                    return this.reInitInViewportMixin()
                },
                inViewportRoot() {
                    return this.reInitInViewportMixin()
                },
                inViewportThresholdWithMax(t, e) {
                    if (t.toString() !== e.toString())
                        return this.reInitInViewportMixin()
                }
            },
            methods: {
                reInitInViewportMixin() {
                    return this.removeInViewportHandlers(),
                    this.inViewportInit()
                },
                inViewportInit() {
                    if (this.inViewportActive)
                        return this.addInViewportHandlers()
                },
                addInViewportHandlers() {
                    if (!this.inViewport.listening)
                        return this.inViewport.listening = !0,
                        this.inViewportObserver = new IntersectionObserver(this.updateInViewport,{
                            root: function() {
                                switch (typeof this.inViewportRoot) {
                                case "function":
                                    return this.inViewportRoot();
                                case "string":
                                    return document.querySelector(this.inViewportRoot);
                                case "object":
                                    return this.inViewportRoot;
                                default:
                                    return
                                }
                            }
                            .call(this),
                            rootMargin: this.inViewportRootMargin,
                            threshold: this.inViewportThresholdWithMax
                        }),
                        this.inViewportObserver.observe(this.$el)
                },
                removeInViewportHandlers() {
                    const t = this.inViewportObserver;
                    if (this.inViewport.listening)
                        return this.inViewport.listening = !1,
                        t && t.disconnect(),
                        delete this.inViewportObserver
                },
                updateInViewport(t) {
                    const e = t[0].boundingClientRect
                      , i = t[0].rootBounds;
                    if (e && i)
                        return this.inViewport.maxThreshold = e.height > 0 ? Math.min(1, i.height / e.height) : 1,
                        this.inViewport.now = e.top <= i.bottom && e.bottom > i.top,
                        this.inViewport.above = e.top < i.top,
                        this.inViewport.below = e.bottom > i.bottom + 1,
                        this.inViewport.fully = e.height > i.height ? e.top <= i.top && e.bottom >= i.bottom + 1 : !this.inViewport.above && !this.inViewport.below,
                        this.inViewportOnce && this.inViewport.now ? this.removeInViewportHandlers() : void 0
                }
            }
        }
    },
    a257: function(t, e, i) {},
    a513: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t._self._c;
            return e("button", {
                attrs: {
                    loading: t.loading
                },
                on: {
                    click: t.triggered
                }
            }, [t._m(0), t.loading ? e("span", [t._v(t._s(t.$t("loading")))]) : e("span", [t._v(t._s(t.$t("show-more")))])])
        }
          , o = [function() {
            var t = this
              , e = t._self._c;
            return e("ul", [e("li"), e("li"), e("li")])
        }
        ]
          , n = i("9c9e")
          , r = {
            name: "InfiniteScroll",
            props: ["auto", "loading"],
            mixins: [n["b"]],
            watch: {
                "inViewport.now"(t) {
                    t && this.auto && this.triggered()
                }
            },
            methods: {
                triggered() {
                    this.$emit("triggered")
                }
            }
        }
          , a = r
          , c = (i("70bc"),
        i("2877"))
          , l = Object(c["a"])(a, s, o, !1, null, "70141fb4", null);
        e["a"] = l.exports
    },
    a9fb: function(t, e, i) {
        "use strict";
        var s = function() {
            var t = this
              , e = t._self._c;
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
            }
            )), t._l(7 - t.src.category, (function(t) {
                return e("li", [e("i", {
                    staticClass: "star"
                })])
            }
            ))], 2)]), e("MetaCell", {
                staticClass: "item exif clickable",
                attrs: {
                    title: "exif"
                },
                nativeOn: {
                    click: function(e) {
                        return t.showPopover(e, "aperture")
                    }
                }
            }, [e("ul", t._l(t.exif, (function(i, s) {
                return e("li", [e("i", {
                    class: s
                }), e("span", [t._v(t._s(i))])])
            }
            )), 0)]), e("MetaCell", {
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
        }
          , o = []
          , n = i("08c1")
          , r = function() {
            var t = this
              , e = t._self._c;
            return e("li", ["" != t.title ? e("h5", {
                staticClass: "title"
            }, [t._v(t._s(t.$t(t.title)))]) : t._e(), t._t("default")], 2)
        }
          , a = []
          , c = {
            name: "MetaCell",
            props: ["title"]
        }
          , l = c
          , d = (i("6db7"),
        i("2877"))
          , h = Object(d["a"])(l, r, a, !1, null, "2d46ff28", null)
          , u = h.exports
          , p = i("1917")
          , m = {
            name: "Meta",
            props: ["src", "carousel-mode"],
            components: {
                MetaPanel: p["a"],
                MetaCell: u,
                Popover: n["a"]
            },
            data() {
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
            mounted() {
                this.context = this.$route.params.context
            },
            computed: {
                exif() {
                    const t = this.src;
                    return {
                        focus: t.focus + "mm",
                        aperture: "ƒ/" + t.aperture,
                        shutter: t.shutterSpeed,
                        iso: t.iso
                    }
                },
                location() {
                    const t = this.src.locationContext;
                    return t ? t.displayName : this.$t("Loading")
                }
            },
            methods: {
                showPopover(t, e) {
                    const i = this.$refs.popover;
                    i && (this.metaPanelTarget = e,
                    i.update(t.target))
                },
                dismissPopover() {
                    const t = this.$refs.popover;
                    t && t.dismiss()
                },
                popoverDidPresent() {
                    this.isMetaPanelActive = !0
                },
                popoverDidDismiss() {
                    this.isMetaPanelActive = !1,
                    this.metaPanelTarget = !1
                }
            }
        }
          , f = m
          , g = (i("dbbc"),
        Object(d["a"])(f, s, o, !1, null, "9c46fcc4", null));
        e["a"] = g.exports
    },
    aa17: function(t, e, i) {
        t.exports = i.p + "images/logo.e0b942a3.svg"
    },
    aca5: function(t, e, i) {
        "use strict";
        i("38de")
    },
    b247: function(t, e, i) {},
    b476: function(t, e, i) {},
    bf2b: function(t, e, i) {
        "use strict";
        i("b476")
    },
    ce1d: function(t, e, i) {},
    d581: function(t, e, i) {
        "use strict";
        i("154f")
    },
    d649: function(t, e, i) {
        "use strict";
        i("db1d")
    },
    da23: function(t, e, i) {
        "use strict";
        i("23cd")
    },
    db1d: function(t, e, i) {},
    db49: function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return c
        }
        )),
        i.d(e, "b", (function() {
            return l
        }
        ));
        i("55dd");
        var s = i("025e");
        const o = {
            id: "essential",
            isFeatured: !0,
            requiresUserLocation: !1,
            processor(t) {
                return t.filter(t=>t.category >= 5).sort((t,e)=>e.category - t.category || e.aesthetic_score - t.aesthetic_score || e.captured - t.captured)
            }
        }
          , n = {
            id: "recent",
            isFeatured: !0,
            requiresUserLocation: !1,
            processor(t) {
                return t
            }
        }
          , r = {
            id: "nearby",
            isFeatured: !1,
            requiresUserLocation: !0,
            processor(t) {
                const e = JSON.parse(sessionStorage.getItem("coordinates"));
                return t.sort((t,i)=>Object(s["d"])(e.latitude, e.longitude, t.latitude, t.longitude) - Object(s["d"])(e.latitude, e.longitude, i.latitude, i.longitude))
            }
        }
          , a = {
            id: "faraway",
            isFeatured: !1,
            requiresUserLocation: !0,
            processor(t) {
                return r.processor(t).reverse()
            }
        }
          , c = [o, n, r, a]
          , l = "pk.eyJ1IjoiZGFuZHl3ZW5nIiwiYSI6ImNqaDRrdTN1MTEydG0zM3J5aWNtd3M0d3kifQ.cxBsW_3CNw-NGPoMjoCPQQ"
    },
    dbbc: function(t, e, i) {
        "use strict";
        i("133f")
    },
    e1cb: function(t) {
        t.exports = JSON.parse('{"head":{"title":{"full":"Camarts 摄影精选","column":"%s的照片 | Camarts","maps":"行摄地图"},"description":{"home":"Camarts 摄影精选 Web App — 摄影师翁天信（Dandy Weng）的个人作品展示平台，分享在周游世界旅途中拍摄的千余张精选照片。","singular":"翁天信（Dandy Weng）在{year}年拍摄的一幅摄影作品，使用{camera}相机摄于{location}。","maps":"在 Camarts 的行摄地图上开启环球之旅，助你发现下一个旅行目的地。"}},"columns":{"nearby":"附近","faraway":"远方","essential":"精选","recent":"最新"},"nav":{"home":"主页","app":"应用下载","about":"了解更多","subscribe":"社交媒体"},"menu":{"share":"分享照片","copy-url":"复制网址","about":"关于 Camarts","support":"联系作者"},"meta-sections":{"metadata":"基本参数","location":"地理位置"},"show-more":"显示更多","loading":"加载中…","category":"评级","exif":"参数","aperture":"光圈","shutter-speed":"快门","focal-length":"焦距","iso":"感光度","location":"地点","latitude":"纬度","longitude":"经度","elevation":"海拔高度","altitude":"距地高度","distance":"距离","captured":"拍摄于","camera":"相机","lens":"镜头","list-separators":["、","与"],"share":{"title":"Camarts 摄影精选","text":"一张拍摄于{location}的照片"},"url":{"about":"https://camartsphotography.com/cn/","support":"https://support.camartsphotography.com/cn/"},"exceptions":{"404":{"title":"无法找到页面","message":"如果你确认网址没错，那本页可能已经被移除或更改了。不妨看看下面这些照片？"},"legacy":{"title":"时过境迁","message":"你点击了一个通往旧版 Camarts 的链接，这个网址已经失效了。不过精选照片已经迁移到这个全新的网站，不妨从下方的推荐栏目开始浏览？或者<a href=https://camartsphotography.com/cn/a-brief-chronicle.html>点击此处</a>了解新旧交替的详情。"},"geo":{"title":"无法获取当前位置","not_supported":"当前浏览器或设备不支持定位功能，请尝试在其他设备上查看本页面。","not_authorized":"没有获取位置的权限，请检查浏览器或设备的隐私设置。","unknown":"原因未知，请稍后再试。如果问题持续出现，欢迎向开发者反馈。"}}}')
    },
    e7df: function(t, e, i) {
        "use strict";
        i("2477")
    },
    f63f: function(t, e, i) {
        "use strict";
        i("52f3")
    }
});
//# sourceMappingURL=app.8de4bfc1.js.map
