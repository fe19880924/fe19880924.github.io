webpackJsonp([3, 10], {
    1 : function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var o = this[e];
                    o[2] ? t.push("@media " + o[2] + "{" + o[1] + "}") : t.push(o[1])
                }
                return t.join("")
            },
            t.i = function(e, o) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var a = {},
                i = 0; i < this.length; i++) {
                    var n = this[i][0];
                    "number" == typeof n && (a[n] = !0)
                }
                for (i = 0; i < e.length; i++) {
                    var s = e[i];
                    "number" == typeof s[0] && a[s[0]] || (o && !s[2] ? s[2] = o: o && (s[2] = "(" + s[2] + ") and (" + o + ")"), t.push(s))
                }
            },
            t
        }
    },
    2 : function(t, e, o) {
        function a(t, e) {
            for (var o = 0; o < t.length; o++) {
                var a = t[o],
                i = d[a.id];
                if (i) {
                    i.refs++;
                    for (var n = 0; n < i.parts.length; n++) i.parts[n](a.parts[n]);
                    for (; n < a.parts.length; n++) i.parts.push(r(a.parts[n], e))
                } else {
                    for (var s = [], n = 0; n < a.parts.length; n++) s.push(r(a.parts[n], e));
                    d[a.id] = {
                        id: a.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function i(t) {
            for (var e = [], o = {},
            a = 0; a < t.length; a++) {
                var i = t[a],
                n = i[0],
                s = i[1],
                l = i[2],
                r = i[3],
                c = {
                    css: s,
                    media: l,
                    sourceMap: r
                };
                o[n] ? o[n].parts.push(c) : e.push(o[n] = {
                    id: n,
                    parts: [c]
                })
            }
            return e
        }
        function n(t, e) {
            var o = u(),
            a = v[v.length - 1];
            if ("top" === t.insertAt) a ? a.nextSibling ? o.insertBefore(e, a.nextSibling) : o.appendChild(e) : o.insertBefore(e, o.firstChild),
            v.push(e);
            else {
                if ("bottom" !== t.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
                o.appendChild(e)
            }
        }
        function s(t) {
            t.parentNode.removeChild(t);
            var e = v.indexOf(t);
            e >= 0 && v.splice(e, 1)
        }
        function l(t) {
            var e = document.createElement("style");
            return e.type = "text/css",
            n(t, e),
            e
        }
        function r(t, e) {
            var o, a, i;
            if (e.singleton) {
                var n = f++;
                o = m || (m = l(e)),
                a = c.bind(null, o, n, !1),
                i = c.bind(null, o, n, !0)
            } else o = l(e),
            a = p.bind(null, o),
            i = function() {
                s(o)
            };
            return a(t),
            function(e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    a(t = e)
                } else i()
            }
        }
        function c(t, e, o, a) {
            var i = o ? "": a.css;
            if (t.styleSheet) t.styleSheet.cssText = b(e, i);
            else {
                var n = document.createTextNode(i),
                s = t.childNodes;
                s[e] && t.removeChild(s[e]),
                s.length ? t.insertBefore(n, s[e]) : t.appendChild(n)
            }
        }
        function p(t, e) {
            var o = e.css,
            a = e.media,
            i = e.sourceMap;
            if (a && t.setAttribute("media", a), i && (o += "\n/*# sourceURL=" + i.sources[0] + " */", o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */"), t.styleSheet) t.styleSheet.cssText = o;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(o))
            }
        }
        var d = {},
        h = function(t) {
            var e;
            return function() {
                return "undefined" == typeof e && (e = t.apply(this, arguments)),
                e
            }
        },
        g = h(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        }),
        u = h(function() {
            return document.head || document.getElementsByTagName("head")[0]
        }),
        m = null,
        f = 0,
        v = [];
        t.exports = function(t, e) {
            e = e || {},
            "undefined" == typeof e.singleton && (e.singleton = g()),
            "undefined" == typeof e.insertAt && (e.insertAt = "bottom");
            var o = i(t);
            return a(o, e),
            function(t) {
                for (var n = [], s = 0; s < o.length; s++) {
                    var l = o[s],
                    r = d[l.id];
                    r.refs--,
                    n.push(r)
                }
                if (t) {
                    var c = i(t);
                    a(c, e)
                }
                for (var s = 0; s < n.length; s++) {
                    var r = n[s];
                    if (0 === r.refs) {
                        for (var p = 0; p < r.parts.length; p++) r.parts[p]();
                        delete d[r.id]
                    }
                }
            }
        };
        var b = function() {
            var t = [];
            return function(e, o) {
                return t[e] = o,
                t.filter(Boolean).join("\n")
            }
        } ()
    },
    3 : function(t, e, o) {
        var a, i;
        a = o(12),
        i = a = a || {},
        "object" != typeof a.
    default && "function" != typeof a.
    default || (i = a = a.
    default),
        "function" == typeof i && (i = i.options),
        t.exports = a
    },
    5 : function(t, e, o) {
        var a = o(17);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    6 : function(t, e, o) {
        var a = o(18);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    7 : function(t, e, o) {
        var a = o(19);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    8 : function(t, e, o) {
        var a = o(20);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    9 : function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAAsCAYAAACTxd8QAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABARpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM1QkMzQ0E5MTNFMTExRThCNTM1RkM1OTMwNUM1OTcxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM1QkMzQ0E4MTNFMTExRThCNTM1RkM1OTMwNUM1OTcxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE1IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NGVkOGZhYjItOGI0Ni00YzgzLTg4ZDgtMzQ3ZThjZTdiNWExIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpk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"
    },
    12 : function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        function i() {
            var t = Math.round(Math.random() * colorListLength);
            return colorList[t]
        }
        function n(t, e) {
            var o = new FileReader;
            o.onload = function() {
                var t = o.result;
                console.log(t),
                e(t)
            },
            o.readAsDataURL(t)
        }
        function s(t, e) {
            if ("undefined" == typeof FileReader) console.log("当前浏览器内核不支持base64图标压缩"),
            n(t, e);
            else try {
                var o = new FileReader;
                o.onload = function(t) {
                    var o = $("<img/>");
                    o.load(function() {
                        var t = 600,
                        o = document.createElement("canvas"),
                        a = o.getContext("2d"),
                        i = 0,
                        n = 0,
                        s = 0,
                        l = 0,
                        r = "";
                        this.width > this.height ? (i = Math.round(t * this.width / this.height), n = t) : (n = Math.round(t * this.height / this.width), i = t),
                        o.width = i,
                        o.height = n,
                        a.clearRect(0, 0, o.width, o.height),
                        a.drawImage(this, s, l, i, n);
                        var r = o.toDataURL("image/jpeg");
                        e(r)
                    }),
                    o.attr("src", t.target.result)
                },
                o.readAsDataURL(t)
            } catch(o) {
                console.log("压缩失败!"),
                n(t, e)
            }
        }
        function l(t, e, o) {
            var a = new JSEncrypt;
            a.setPublicKey(t);
            var i = a.encrypt(e);
            o(i)
        }
        function r(t) {
            var e = new Base64,
            o = e.encode(t);
            return o
        }
        function c(t) {
            if ("1" == t) {
                console.log("start");
                var e = setTimeout(function() {
                    alert("timeout")
                },
                6e3)
            }
            if ("2" == t && (console.log("stop"), clearTimeout(e)), "3" == t) {
                console.log("stop"),
                clearTimeout(e),
                console.log("start");
                var e = setTimeout(function() {
                    alert("timeout")
                },
                6e3)
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var p, d = o(10),
        h = a(d),
        g = "",
        u = "",
        m = "",
        f = "en",
        v = !1,
        b = [],
        w = [],
        x = "",
        y = !1,
        C = !1,
        k = !1,
        A = !1,
        E = "1",
        _ = "",
        N = "",
        S = "",
        T = "",
        P = "",
        I = "",
        W = "",
        z = "",
        F = "",
        O = "",
        Y = "",
        H = "",
        B = "",
        D = "",
        G = "",
        M = "",
        R = "",
        V = "",
        L = "",
        j = "",
        Q = "",
        J = "",
        K = "",
        X = "",
        Z = "",
        U = "",
        q = "",
        tt = "",
        et = "",
        ot = "",
        at = "",
        it = "",
        nt = {
            Id: "",
            Title: "",
            OutLineFlag: !1,
            OutLine: "",
            HideFlag: !1,
            Author: "",
            NewsTime: "",
            Language: "en",
            Summary: "",
            Category: "",
            PicUrl: "",
            Detail: [{
                picurl: "",
                personPic: !1,
                h3: "",
                content: ""
            }]
        },
        st = "",
        lt = "",
        rt = "0",
        ct = "1",
        pt = !1,
        dt = "",
        ht = 0,
        gt = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCuRKYGS3oFwv4IKALtaNLFet1EHuyc5GP8FPnv/ZX8gydQ75Q8rJNIMw9CJZ2OEabkSGJrHFiAG+lArlQE0VQxUk4igzH4dc8IL2axe16+daj7bTmpz4lto0Ca9KCkVKWWwQKLtfC01bSFOvu1S7GNTwqKoOPL/+eJiBT5qBBQsQIDAQAB";
        e.
    default = (p = {
            EmailCode: _,
            Email: N,
            Name: S
        },
        (0, h.
    default)(p, "Name", S), (0, h.
    default)(p, "Phone", T), (0, h.
    default)(p, "Phone", T), (0, h.
    default)(p, "Nation", I), (0, h.
    default)(p, "NeoAddress", j), (0, h.
    default)(p, "IdNumber", z), (0, h.
    default)(p, "IdType", F), (0, h.
    default)(p, "PictureFrontEnd", O), (0, h.
    default)(p, "PictureBackEnd", Y), (0, h.
    default)(p, "PictureWithMan", H), (0, h.
    default)(p, "WebChatName", B), (0, h.
    default)(p, "WebChatId", D), (0, h.
    default)(p, "QQ", G), (0, h.
    default)(p, "Telegram", M), (0, h.
    default)(p, "Weibo", R), (0, h.
    default)(p, "Slack", L), (0, h.
    default)(p, "Twitter", V), (0, h.
    default)(p, "language", f), (0, h.
    default)(p, "languageFlag", v), (0, h.
    default)(p, "getRandColor", i), (0, h.
    default)(p, "directTurnIntoBase64", n), (0, h.
    default)(p, "compress", s), (0, h.
    default)(p, "starttime", ht), (0, h.
    default)(p, "wallet", b), (0, h.
    default)(p, "accounts", w), (0, h.
    default)(p, "signatureData", x), (0, h.
    default)(p, "privatekey", g), (0, h.
    default)(p, "publicKey", u), (0, h.
    default)(p, "filename", m), (0, h.
    default)(p, "encode", r), (0, h.
    default)(p, "encrypt", l), (0, h.
    default)(p, "setclock", c), (0, h.
    default)(p, "countryName", W), (0, h.
    default)(p, "numbershow", P), (0, h.
    default)(p, "basicstepFlag", y), (0, h.
    default)(p, "idstepFlag", C), (0, h.
    default)(p, "socialstepFlag", k), (0, h.
    default)(p, "phoneCode", Q), (0, h.
    default)(p, "RSApublickey", gt), (0, h.
    default)(p, "NameEncrypt", J), (0, h.
    default)(p, "PhoneEncrypt", K), (0, h.
    default)(p, "IdNumberEncrypt", X), (0, h.
    default)(p, "WebChatNameEncrypt", Z), (0, h.
    default)(p, "WebChatIdEncrypt", U), (0, h.
    default)(p, "QQEncrypt", q), (0, h.
    default)(p, "TelegramEncrypt", tt), (0, h.
    default)(p, "WeiboEncrypt", et), (0, h.
    default)(p, "SlackEncrypt", ot), (0, h.
    default)(p, "TwitterEncrypt", at), (0, h.
    default)(p, "NeoAddressEncrypt", it), (0, h.
    default)(p, "notpassFlag", A), (0, h.
    default)(p, "searchType", E), (0, h.
    default)(p, "article", nt), (0, h.
    default)(p, "newsAccount", st), (0, h.
    default)(p, "newsPassword", lt), (0, h.
    default)(p, "newssearchType", rt), (0, h.
    default)(p, "newssearchlang", ct), (0, h.
    default)(p, "newseditFlag", pt), (0, h.
    default)(p, "newsID", dt), p)
    },
    13 : function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i, n = o(10),
        s = a(n),
        l = o(4),
        r = o(3);
        a(r);
        $(function() {
            $("[data-toggle='popover']").popover()
        }),
        e.
    default = {
            computed: (0, l.mapGetters)({
                FileZH: "FileZH",
                FileEN: "FileEN",
                AppFileZH: "AppFileZH",
                AppFileEN: "AppFileEN",
                NewsFileZH: "NewsFileZH",
                NewsFileEN: "NewsFileEN",
                article: "article"
            }),
            created: function() {
                var t = navigator.systemLanguage ? navigator.systemLanguage: navigator.language,
                t = t.substr(0, 2);
                "zh" == this.$route.params.lang ? this.language = 1 : "ko" == this.$route.params.lang ? this.language = 2 : this.language = 0
            },
            watch: {
                FileEN: function() {
                    this.footerPage = this.FileEN.footerPage,
                    this.language = !1
                },
                FileZH: function() {
                    this.footerPage = this.FileZH.footerPage,
                    this.language = !0
                },
                AppFileEN: function() {
                    this.footerPage = this.AppFileEN.footerPage,
                    this.language = !1
                },
                AppFileZH: function() {
                    this.footerPage = this.AppFileZH.footerPage,
                    this.language = !0
                },
                NewsFileZH: function() {
                    this.footerPage = this.AppFileZH.footerPage,
                    this.language = !0
                },
                NewsFileEN: function() {
                    this.footerPage = this.AppFileZH.footerPage,
                    this.language = !1
                },
                article: function() {
                    this.language = this.article.language
                },
                $route: function() {
                    "zh" == this.$route.params.lang ? this.language = 1 : "ko" == this.$route.params.lang ? this.language = 2 : this.language = 0
                }
            },
            methods: (i = {
                toHome: function() {
                    this.$router.push({
                        path: "/home"
                    })
                }
            },
            (0, s.
        default)(i, "toHome",
            function() {
                this.$router.push({
                    path: "/home"
                })
            }), (0, s.
        default)(i, "toApp",
            function() {
                this.$router.push({
                    path: "/application/page0"
                })
            }), (0, s.
        default)(i, "toTech",
            function() {
                this.$router.push({
                    path: "/technology"
                })
            }), i),
            data: function() {
                return {
                    language: !1,
                    footerPage: {}
                }
            },
            beforeDestroy: function() {}
        }
    },
    14 : function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        o(8),
        o(7),
        o(5),
        o(6);
        var i = o(3),
        n = a(i),
        s = o(4);
        e.
    default = {
            mounted: function() {
                jQuery(function(t) {
                    t("#menu_list").bootstrapDropdownOnHover(),
                    t("#menu-list").bootstrapDropdownOnHover()
                })
            },
            computed: (0, s.mapGetters)({
                article: "article"
            }),
            created: function() {
                var t = this;
                this.timeoutBlock = setTimeout(function() {
                    var e = t.$route.path,
                    e = e.substr(0, 4),
                    o = $(".navbar-inverse"),
                    a = $("#logoimg");
                    "/hom" !== e && (o.css("background-color", "#000000"), a.css("opacity", 1))
                },
                100);
                var e = this.$route.params,
                o = e.lang,
                a = navigator.systemLanguage ? navigator.systemLanguage: navigator.language,
                a = a.substr(0, 2);
                void 0 != o ? "zh" == o ? this.toChinese() : "ko" == o ? this.toKorean() : "jp" == o ? this.toJapanese() : this.toEnglish() : n.
            default.languageFlag ? "zh" == n.
            default.language ? this.toChinese() : "ko" == o ? this.toKorean() : "jp" == o ? this.toJapanese() : this.toEnglish() : "zh" == a ? (this.toChinese(), this.language = !0, n.
            default.language = "zh", n.
            default.languageFlag = !0) : "ko" == o ? (this.toKorean(), this.language = !1, n.
            default.language = "ko", n.
            default.languageFlag = !0) : "jp" == o ? (this.toJapanese(), this.language = !1, n.
            default.language = "jp", n.
            default.languageFlag = !0) : (this.toEnglish(), this.language = !1, n.
            default.language = "en", n.
            default.languageFlag = !0)
            },
            watch: {
                article: function() {
                    this.language = this.article.language
                }
            },
            methods: {
                switchmobilebtn: function() {
                    onOff ? $("#mobile_nav").css({
                        "z-index": "999",
                        opacity: "1"
                    }) : $("#mobile_nav").css({
                        "z-index": "-1",
                        opacity: "0"
                    }),
                    this.onOff = !this.onOff
                },
                openmobilelang: function() {
                    offOn ? ($(this).find("ul.lang_menu").addClass("active"), this.children[0].style.fontFamily = "OpenSansBold") : ($(this).find("ul.lang_menu").removeClass("active"), this.children[0].style.fontFamily = "not specified"),
                    this.offOn = !this.offOn
                },
                closecollapse: function() {
                    $("#collapse").addClass("collapsed"),
                    $("#collapse").attr("aria-expanded", !1),
                    $("#collapse").removeClass("in"),
                    $("#collapse").css("height", 0)
                },
                scrollTo: function(t) {
                    document.getElementById(t).scrollIntoView(!0)
                },
                toHome: function() {
                    //window.location.href = "https://ont.io/"
                },
                toteam: function(t) {
                    this.$router.push({
                        path: "/team/" + t
                    })
                },
                toApp: function(t) {
                    this.$router.push({
                        path: "/application/page0/" + t
                    })
                },
                toTech: function(t) {
                    this.$router.push({
                        path: "/technology/" + t
                    })
                },
                toCooperation: function(t) {
                    this.$router.push({
                        path: "/cooperation/" + t
                    })
                },
                toNode: function(t) {
                    this.$router.push({
                        path: "/listtriones/" + t
                    })
                },
                toJoin: function(t) {
                    this.$router.push({
                        path: "/joinus/" + t
                    })
                },
                toNews: function(t) {
                    this.$router.push({
                        path: "/news/" + t
                    })
                },
                toontView: function(t) {
                    this.$router.push({
                        path: "/ont-view/" + t
                    })
                },
                toChinese: function() {
                    var t = this.$route.path,
                    t = t.substr(0, 4);
                    switch (this.addCookie("lang", "cn"), console.log(document.cookie), t) {
                    case "/":
                        //window.location.href = "https://ont.io/";
                        break;
                    case "/new":
                        this.$router.push({
                            path:
                            "/news/zh"
                        }),
                        this.$store.dispatch("NewsFileZH");
                        break;
                    case "/coo":
                        this.$router.push({
                            path:
                            "/cooperation/zh"
                        }),
                        this.$store.dispatch("CooperationZH");
                        break;
                    case "/tea":
                        this.$router.push({
                            path:
                            "/team/zh"
                        }),
                        this.$store.dispatch("TeamFileZH");
                        break;
                    case "/tri":
                        this.$router.push({
                            path:
                            "/trionesintro/zh"
                        }),
                        this.$store.dispatch("TrionesZH");
                        break;
                    case "/lis":
                        this.$router.push({
                            path:
                            "/listtriones/zh"
                        }),
                        this.$store.dispatch("TrionesListZH");
                        break;
                    case "/ont":
                        this.$router.push({
                            path:
                            "/ont-view/zh"
                        }),
                        this.$store.dispatch("ontViewZH"),
                        this.language = !0,
                        this.search(2),
                        this.search(1)
                    }
                    this.language = !0,
                    n.
                default.language = "zh",
                    n.
                default.languageFlag = !0,
                    this.head = this.headZH,
                    this.closecollapse()
                },
                toEnglish: function() {
                    var t = this.$route.path,
                    t = t.substr(0, 4);
                    switch (this.addCookie("lang", "en"), t) {
                    case "/":
                        //window.location.href = "https://ont.io/";
                        break;
                    case "/new":
                        this.$router.push({
                            path:
                            "/news/en"
                        }),
                        this.$store.dispatch("NewsFileEN");
                        break;
                    case "/coo":
                        this.$router.push({
                            path:
                            "/cooperation/en"
                        }),
                        this.$store.dispatch("CooperationEN");
                        break;
                    case "/tea":
                        this.$router.push({
                            path:
                            "/team/en"
                        }),
                        this.$store.dispatch("TeamFileEN");
                        break;
                    case "/tri":
                        this.$router.push({
                            path:
                            "/trionesintro/en"
                        }),
                        this.$store.dispatch("TrionesEN");
                        break;
                    case "/lis":
                        this.$router.push({
                            path:
                            "/listtriones/en"
                        }),
                        this.$store.dispatch("TrionesListEN");
                        break;
                    case "/ont":
                        this.$router.push({
                            path:
                            "/ont-view/en"
                        }),
                        this.$store.dispatch("ontViewEN"),
                        this.language = !1,
                        this.search(2),
                        this.search(1)
                    }
                    this.language = !1,
                    n.
                default.language = "en",
                    n.
                default.languageFlag = !0,
                    this.head = this.headEN,
                    this.closecollapse()
                },
                toKorean: function() {
                    var t = this.$route.path,
                    t = t.substr(0, 4);
                    switch (this.addCookie("lang", "ko"), t) {
                    case "/":
                        window.location.href = "https://ont.io/";
                        break;
                    case "/new":
                        this.$router.push({
                            path:
                            "/news/ko"
                        }),
                        this.$store.dispatch("NewsFileKO");
                        break;
                    case "/coo":
                        this.$router.push({
                            path:
                            "/cooperation/ko"
                        }),
                        this.$store.dispatch("CooperationKO");
                        break;
                    case "/tea":
                        this.$router.push({
                            path:
                            "/team/ko"
                        }),
                        this.$store.dispatch("TeamFileKO");
                        break;
                    case "/tri":
                        this.$router.push({
                            path:
                            "/trionesintro/ko"
                        }),
                        this.$store.dispatch("TrionesEN");
                        break;
                    case "/lis":
                        this.$router.push({
                            path:
                            "/listtriones/ko"
                        }),
                        this.$store.dispatch("TrionesListEN");
                        break;
                    case "/ont":
                        this.$router.push({
                            path:
                            "/ont-view/ko"
                        }),
                        this.$store.dispatch("ontViewKO"),
                        this.language = !1,
                        this.search(2),
                        this.search(1)
                    }
                    this.language = !1,
                    n.
                default.language = "ko",
                    n.
                default.languageFlag = !0,
                    this.head = this.headKO,
                    this.closecollapse()
                },
                toJapanese: function() {
                    var t = this.$route.path,
                    t = t.substr(0, 4),
                    e = this.$route.params;
                    switch (this.addCookie("lang", "jp"), t) {
                    case "/":
                        window.location.href = "https://ont.io/";
                        break;
                    case "/new":
                        this.$router.push({
                            path:
                            "/news/jp"
                        }),
                        e.pgname = "CooperationJP",
                        this.$store.dispatch("pageDetail", e);
                        break;
                    case "/coo":
                        this.$router.push({
                            path:
                            "/cooperation/jp"
                        }),
                        e.pgname = "CooperationJP",
                        this.$store.dispatch("pageDetail", e);
                        break;
                    case "/tea":
                        this.$router.push({
                            path:
                            "/team/jp"
                        }),
                        e.pgname = "TeamFileJP",
                        this.$store.dispatch("pageDetail", e);
                        break;
                    case "/tri":
                        this.$router.push({
                            path:
                            "/trionesintro/jp"
                        }),
                        this.$store.dispatch("TrionesEN");
                        break;
                    case "/lis":
                        this.$router.push({
                            path:
                            "/listtriones/jp"
                        }),
                        this.$store.dispatch("TrionesListEN");
                        break;
                    case "/ont":
                        this.$router.push({
                            path:
                            "/ont-view/jp"
                        }),
                        e.pgname = "ontViewJP",
                        this.$store.dispatch("pageDetail", e),
                        this.language = !1,
                        this.search(2),
                        this.search(1)
                    }
                    this.language = !1,
                    n.
                default.language = "jp",
                    n.
                default.languageFlag = !0,
                    this.head = this.headJP,
                    this.closecollapse()
                },
                addCookie: function(t, e, o) {
                    var a = t + "=" + escape(e) + "; path=/";
                    if ("key" != t && "username" != t || o || (o = 720), o > 0) {
                        var i = new Date;
                        i.setTime(i.getTime() + 3600 * o * 1e3),
                        a = a + ";expires=" + i.toGMTString()
                    }
                    document.cookie = a
                },
                search: function(t) {
                    var e = this.$route.params;
                    e.language = this.language ? "cn": "en",
                    e.category = t,
                    e.pagesize = 20,
                    e.pagenumber = 1,
                    this.$store.dispatch("newslist", e)
                },
                navColor: function() {
                    var t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
                    e = (document.body.clientWidth, $(".navbar-inverse")),
                    o = $("#logoimg"),
                    a = this.$route.path,
                    a = a.substr(0, 4);
                    if ("/hom" !== a) e.css("background-color", "#000000"),
                    o.css("opacity", 1);
                    else if (t <= 500) if (e.removeAttr("style"), t > 300) {
                        var i = (t - 300) / 300;
                        o.css("opacity", i)
                    } else o.css("opacity", 0);
                    else e.css("background-color", "#000000"),
                    o.css("opacity", 1)
                }
            },
            data: function() {
                return {
                    icontest: "icon-shenfenzhengming ",
                    language: !1,
                    onOff: !0,
                    offOn: !0,
                    scrnum: "",
                    head: {},
                    firstPage: {},
                    valuePage: {},
                    painPointPage: {},
                    visionPage: {},
                    ECOPage: {},
                    applicationPage: {},
                    footerPage: {},
                    headEN: {
                        contactUs: "Contact Us",
                        home: "Home",
                        OntScenarios: "Scenarios",
                        OntTech: "Technology",
                        language: "Language",
                        languagenow: "English",
                        zh: "中文",
                        En: "English",
                        ko: "한국어",
                        jp: "日本語",
                        documents: "More",
                        team: "Team",
                        node: "Node",
                        cooperation: "Cooperation",
                        OntIntroduction: "Introductory White Paper",
                        OntECOWP: "Ecosystem White Paper",
                        OntTechWP: "Technology White Paper",
                        OntTechYP: "Technology Yellow Paper (TBA)",
                        OntGoveYP: "Governance White Paper (TBA)",
                        joinus: "Join Ontology",
                        News: "Press",
                        develop: "Developer",
                        aboutus: "About Ontology",
                        ontView: "Ontology View"
                    },
                    headZH: {
                        contactUs: "找到我们",
                        home: "主页",
                        OntScenarios: "本体场景",
                        OntTech: "本体技术",
                        language: "Language",
                        languagenow: "中文",
                        zh: "中文",
                        En: "English",
                        ko: "한국어",
                        jp: "日本語",
                        documents: "更多",
                        team: "团队",
                        node: "节点",
                        cooperation: "机构合作",
                        OntIntroduction: "白皮书概览",
                        OntECOWP: "生态白皮书",
                        OntTechWP: "技术白皮书",
                        OntTechYP: "技术黄皮书（敬请期待）",
                        OntGoveYP: "治理白皮书（敬请期待）",
                        joinus: "加入本体",
                        News: "新闻",
                        develop: "开发者",
                        aboutus: "关于本体",
                        ontView: "本体视点"
                    },
                    headKO: {
                        contactUs: "找到我们",
                        home: "홈",
                        OntScenarios: "本体场景",
                        OntTech: "本体技术",
                        language: "Language",
                        languagenow: "한국어",
                        zh: "中文",
                        En: "English",
                        ko: "한국어",
                        jp: "日本語",
                        documents: "더 보기",
                        team: "팀",
                        node: "노드",
                        cooperation: "제휴/협력",
                        OntIntroduction: "白皮书概览",
                        OntECOWP: "生态白皮书",
                        OntTechWP: "技术白皮书",
                        OntTechYP: "技术黄皮书（敬请期待）",
                        OntGoveYP: "治理白皮书（敬请期待）",
                        joinus: "加入本体",
                        News: "언론 보도",
                        develop: "개발자",
                        aboutus: "온톨로지에 대하여",
                        ontView: "온톨로지 들여다보기"
                    },
                    headJP: {
                        contactUs: "Contact Us",
                        home: "ホーム",
                        OntScenarios: "Scenarios",
                        OntTech: "Technology",
                        language: "Language",
                        languagenow: "日本語",
                        zh: "中文",
                        En: "English",
                        ko: "한국어",
                        jp: "日本語",
                        documents: "その他",
                        team: "チーム",
                        node: "ノード",
                        cooperation: "業務提携",
                        OntIntroduction: "Introductory White Paper",
                        OntECOWP: "Ecosystem White Paper",
                        OntTechWP: "Technology White Paper",
                        OntTechYP: "Technology Yellow Paper (TBA)",
                        OntGoveYP: "Governance White Paper (TBA)",
                        joinus: "Join Ontology",
                        News: "ニュース",
                        develop: "開発資料",
                        aboutus: "オントロジーについて",
                        ontView: "オントロジーの概要"
                    }
                }
            },
            beforeDestroy: function() {}
        }
    },
    15 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, '@media only screen and (max-width:768px){.mobile-lang{text-align:left!important;padding:5px 0!important}.nav-ul-item-a{padding-left:0!important;color:#232323!important}.menu-item-bottom{border-bottom:1px solid #d5d5d5}#logo_div{padding:0 8px}.t2-head{font-size:16px}.container-head{padding:0!important}.navbar-inverse{background-color:hsla(0,0%,100%,.9)}.dropdown-menu-back,.dropdown-menu-back-lag{width:300px;transform:translate(0)!important}.dropdown-menu-back-lag{background-color:hsla(0,0%,100%,.9);color:#000!important}#menu_list{height:100vh;padding-top:20px;width:80%;margin:0 10%!important}}.content-container-head{position:relative;display:-ms-flexbox;display:flex;margin:0 auto;height:100%}a:hover{color:#3292aa}.container-head{padding:0;margin:auto}.item-active{background-color:#dad7d7}.botton-active{background-color:#e8e6ff;color:#6b62cd}.wider{width:300px!important}.header-monitor span{color:#c6c7cd;font-size:20px}.header-monitor span:hover{cursor:pointer}.header-monitor{padding:10px;background-color:#25262c}.logo{width:100px;margin-left:10px}.navbar-collapse{overflow:hidden}.search{top:170px;width:70%;left:15%;position:absolute;z-index:11}.search input{font-size:16px;width:100%;padding:10px 60px 10px 20px;border-radius:30px;border:5px solid #6258c5;background-color:#e3e0f1;outline:none}.search button{outline:none;font-size:20px;position:absolute;background:#e3e0f1;border:none;right:3%;top:12px}.dropdown-menu-back{width:200px;transform:translate(-50%);left:50%;background-color:#fff;color:#000;border:1px solid #dbdada;border-radius:3px}@media only screen and (min-width:769px){.nav-ul-item-a{padding:15px 20px!important}#logo_div{padding:0 8px}.t2-head{font-size:16px;font-weight:100}.dropdown-menu-back-lag{width:92.76px!important;transform:translate(-50%);left:50%;background-color:#fff;color:#000;border:1px solid #dbdada;border-radius:3px;padding-top:10px}}.nav-ul-a-top-border{border-top:1px solid hsla(0,0%,88%,.26)}.nav-ul-li{text-align:center}.nav-ul-li:hover{background-color:hsla(0,0%,88%,.26)}.nav-ul-li:hover+.nav-ul-li>.nav-ul-a-top-border,.nav-ul-li:hover>.nav-ul-a-top-border{border-top:1px solid hsla(0,0%,88%,0)}#head-navbar{background-color:#000}.arrow_down{position:absolute;height:25px;width:100%;top:-15px}.arrow_down:after{content:"";display:block;position:absolute;top:7px;left:45%;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:8px solid #fff}.arrow_down1{position:absolute;height:25px;width:100%;top:-15px}.arrow_down1:after{content:"";display:block;position:absolute;top:7px;left:40%;border-left:10px solid transparent;border-right:10px solid transparent;border-bottom:8px solid #fff}#mobile_nav{height:100vh;width:100vw;background-color:#fff;position:fixed;z-index:998;top:45px;display:none;opacity:0;z-index:-1;transition:.4s cubic-bezier(.03,.98,.52,.99)}#mobile_nav ul.menu{height:100%;width:80vw;padding-top:20px;margin:0 auto}#mobile_nav ul.menu>li{border-bottom:1px solid #d5d5d5;padding:10px 0;cursor:pointer}#mobile_nav ul.menu>li:hover>a{color:#46adc4}#mobile_nav ul.menu>li>a{display:block;font-size:16px;transition:.4s}#mobile_nav ul.menu>li>ul.lang_menu{overflow:hidden;margin-top:0;height:0;transition:.4s cubic-bezier(.03,.98,.52,.99)}#mobile_nav ul.menu>li>ul.active{height:58px;margin-top:15px}#mobile_nav ul.menu>li>ul.lang_menu>li{padding:5px 0}#mobile_nav ul.menu>li>ul.lang_menu>li>a{display:block}#nav{position:fixed;box-shadow:0 3px 10px rgba(0,0,0,.3);background-color:#000;width:100vw;z-index:999;transition:.4s cubic-bezier(.03,.98,.52,.99)}#nav .content{position:relative;display:-ms-flexbox;display:flex;margin:0 auto;height:100%}#nav .content a.logo{display:block;padding:8px 16px;transition:.4s cubic-bezier(.03,.98,.52,.99)}#nav .content a.logo img{display:block;height:32px}#nav .content ul.menu{position:absolute;right:0;margin-top:12px;display:-ms-flexbox;display:flex;margin-right:16px}#nav .content ul.menu li{position:relative;margin-bottom:10px}#nav .content ul.menu li:hover ul{display:block}#nav .content ul.menu li ul{position:absolute;top:25px;left:0;display:none;background:#fff;border:1px solid #dbdada;border-radius:3px;padding-top:10px}#nav .content ul.menu li ul li:last-child{position:absolute;top:-14px;left:42px}#nav .content ul.menu li ul li a{color:#908f8f;line-height:19px;text-align:center}#nav .content ul.menu li ul li a:hover{color:#99cbd9}#nav .content ul.menu li a{display:block;padding:0 20px;color:#fff;font-size:16px;font-family:OpenSansLight,Microsoft YaHei}#nav .content ul.menu li>form>input{background:transparent;border:none;color:#fff;font-size:12px;border-bottom:1px solid #666}#nav .content ul.menu li>form>i.icon_search{display:inline-block;width:11px;height:12px}#nav .content ul.menu li a i.icon_arrow{display:inline-block;width:12px;height:7px;margin-left:5px}#nav .content ul.menu .one{left:-10px}#nav .content ul.menu .two{left:-19px;width:115px}', ""])
    },
    16 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, ".logo{width:100px}.bottom-content{width:100%;height:50px;text-align:center;padding-top:10px;padding-bottom:10px;color:gray}.container-val-background-color{background-color:#2e2e2e}", ""])
    },
    17 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, "body,html{width:100%;height:100%;margin:0}body{padding-top:60px}.h1,.h2,.h3,h1,h2,h3{margin:0;font-weight:100}.col-lg-1,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-10,.col-lg-11,.col-lg-12,.col-md-1,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-10,.col-md-11,.col-md-12,.col-sm-1,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-10,.col-sm-11,.col-sm-12,.col-xs-1,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,.col-xs-12{padding-right:10px;padding-left:10px}.h1,h1{font-size:46px}.h2,h2{font-size:32px}.h3,h3{font-size:16px;font-weight:700}.t1{font-size:23px}.t2{font-size:18px}.t3{font-size:14px}.link2{font-size:17px}.link2:hover{text-decoration:none}.m1{margin:60px auto}.m2{margin:42px auto}.m3{margin:20px auto}.padding_normal{padding:initial 100px}.p1{padding:60px}.p2{padding:40px}.p3{padding:20px}.bold-font{font-weight:600}.body-content{padding-bottom:50px}.desktop-show{display:inline-block}.mobile-show{display:none}.light-text{color:#aaa}.midpoint{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto}.posi-rela{position:relative}.posi-fixed{position:fixed}.text-white{color:#fff}.dis-table{display:table}.dis-table-row{display:table-row}.dis-table-cell{display:table-cell;vertical-align:middle}@media only screen and (max-width:1200px){.link2{font-size:17px}.m1{margin:26px auto}.m2{margin:20px auto}.m3{margin:12px auto}.padding_normal{padding:initial 22px}.p1{padding:40px}.p2{padding:20px}.p3{padding:12px}.desktop-show{display:none}.mobile-show{display:inline-block}}@media only screen and (max-width:780px){body{padding-top:90px}.body-content{padding-bottom:20px}.h1,h1{font-size:22px}.h2,h2{font-size:18px}.h3,h3{font-size:13px}.t1{font-size:18px}.t2{font-size:16px}.t3{font-size:12px}.p1{padding:20px 0}}", ""])
    },
    18 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, 'body{overflow-x:hidden;background-position:0 0;background-size:cover;background-attachment:fixed;background-repeat:no-repeat;min-height:100%}.zindex{position:relative;z-index:10}.load-page{width:100%;height:100%;background-color:#e4e4e4;position:fixed;z-index:1000}.span{float:left;width:50px;height:50px;position:fixed;left:0;right:0;top:0;bottom:0;margin:auto;vertical-align:middle;border-radius:1px}.square{width:20px;height:40px;margin:36px auto;position:relative;transform:skewY(26deg);border:1px solid #5abc03;-webkit-animation:fill_color 4s linear infinite;animation:fill_color 4s linear infinite}.square:after{width:4px;height:4px;position:absolute;content:"";background-color:#5abc03;transform:skewY(-26deg);top:-8px;left:0;-webkit-animation:square_check 1s ease-in-out infinite;animation:square_check 1s ease-in-out infinite}@-webkit-keyframes square_check{25%{left:22px;top:-8px}50%{left:22px;top:42px}75%{left:-9px;top:42px}to{left:-9px;top:-7px}}@keyframes square_check{25%{left:22px;top:-8px}50%{left:22px;top:42px}75%{left:-9px;top:42px}to{left:-9px;top:-7px}}@-webkit-keyframes fill_color{0%{box-shadow:inset 0 0 0 0 rgba(90,188,0,.2)}90%{box-shadow:inset 0 -40px 0 0 #5abc00}to{box-shadow:inset 0 -40px 0 0 #5abc00}}@keyframes fill_color{0%{box-shadow:inset 0 0 0 0 rgba(90,188,0,.2)}90%{box-shadow:inset 0 -40px 0 0 #5abc00}to{box-shadow:inset 0 -40px 0 0 #5abc00}}.back-mask{position:absolute;top:0;left:0;width:100%;height:100%;background-position:50%;background-repeat:no-repeat;background-size:cover}.home-page-content{position:relative;text-align:left}.home-text-fir{width:calc(100% - 64px);height:60%}.home-text-fir h1,.home-text-fir h2{text-align:center;line-height:1.5}.scroll-page{position:relative;position:static;opacity:.5}.scroll-page div{position:absolute;z-index:1;top:0;left:0;width:100%;background-repeat:no-repeat;background-position:50%;background-size:100%}.scroll-page.city-back{position:fixed;z-index:-1;width:100%;height:100%;opacity:1}.scroll-page.city-back .home-scroll{top:auto;bottom:0;width:180%;height:50%}.home-scroll{text-align:center}.scroll-page.city-back .home-scroll{background-size:contain;background-position:bottom}.city-back .home-scroll.scroll-top{background-size:contain;height:inherit}.home-neo-intro{height:60%;line-height:2;padding:40px 0;text-align:center}.home-neo-intro .col-sm-6.p2{padding-top:0;letter-spacing:1px}.home-neo-intro .col-sm-8{background-image:linear-gradient(-177deg,hsla(0,0%,96%,.8),#bcbcbc);float:none;margin:auto;color:#6c6c6c}.tech-item{padding-top:20px;padding-bottom:20px}@media only screen and (max-width:991px){.tech-item{padding-top:8px;padding-bottom:8px}}.home-down{position:relative;z-index:15;min-height:600px;background:#e4e4e4;background-repeat:no-repeat;background-position:100% 0;background-size:contain;box-shadow:0 0 30px #666;box-shadow:0 2px 4px 2px rgba(0,0,0,.5)}.home-download{background-image:linear-gradient(0deg,#fff,#e4e4e4)}.home-download .container{background:#f2f2f2}.home-download .p1{padding-bottom:0}.home-down-tab .iconfont{display:inline-block;width:20%;font-size:60px;color:#aaa;cursor:pointer;text-decoration:none}.home-down-tab .iconfont:hover{color:#58bf00;text-decoration:none}.home-deve{position:relative;background:#e4e4e4;background:linear-gradient(98deg,#a5a5a5 1%,#6d6d6d 100%,#6c6c6c 0);overflow:hidden}.home-scroll img{width:100%}.home-detail{padding:70px 0;line-height:1.8}.home-detail:after,.home-detail:before{content:" ";display:table}.home-detail:after{clear:both}.home-detail .detail-text{display:inline-block;width:52%;padding:0 60px;color:#fff;font-weight:100}.home-detail img{display:inline-block}.left-pic{float:left}.right-pic{float:right}.home-developer{background-repeat:no-repeat;background-size:contain;background-position:-50px;color:#fff;font-weight:100}.developer-text{padding-left:20%}@media only screen and (max-width:1400px){.scroll-page.city-back .home-scroll{width:200%}}@media only screen and (max-width:1200px){.scroll-page.city-back .home-scroll{width:250%}}@media only screen and (max-width:768px){body{padding-top:0}.scroll-page.city-back{width:150%}.home-neo-intro{position:static\\0;height:75%;height:fit-content;padding:20px 10px;line-height:1.5}.home-neo-intro .col-sm-8{margin:auto 20px}.home-detail{padding:30px}.home-detail .detail-text{width:100%;max-width:350px;padding:10px 0}.home-detail .left-pic,.home-detail .right-pic{width:100%;max-width:350px;float:none}.home-down{background-position:160px bottom,0 0}.home-down-tab .iconfont{font-size:40px}}@media only screen and (max-width:350px){.home-text-fir{width:85%;height:60%}.scroll-page.city-back .home-scroll{width:280%}.home-neo-intro{height:100%}.home-neo-intro .col-sm-8{padding:5px}.home-down-tab .iconfont{width:30%}}', ""]);
    },
    19 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, "li,ul{list-style:none}.navbar-brand{padding-top:20px;padding-bottom:20px;height:60px}.nav.navbar-nav.pop-menu>li a,.nav.navbar-nav.pop-menu>li span{display:inline-block;color:#fff;font-family:OpenSansLight,Microsoft YaHei;vertical-align:middle;font-weight:500}.navbar-inverse,.navbar-inverse .navbar-collapse{border:none}.nav>li{display:block}.dropdown-menu{background:transparent;border:none;box-shadow:none}.dropdown-menu li a{width:100%}.main-footer{background:#fff;padding:35px 0 0;color:#6c6c6c;width:100%;text-align:center}.footer-link{padding:0}.footer-link li{display:inline-block;width:22%;line-height:2.5}.footer-link li span.iconfont{vertical-align:middle;font-size:40px}.footer-link li a{display:inline-block;width:100px;color:#6c6c6c}.footer-logo{height:70px}.footer-logo img{height:inherit}.nav.navbar-nav.pop-menu ul.dropdown-menu{background-color:#fff}#more_list,.nav.navbar-nav.pop-menu ul.dropdown-menu li.menu-item a{text-align:right}#more_list{position:absolute;right:0;display:none;padding:0}#more_list a{padding:10px 20px}#more_list li{background:#e4e4e4;background:hsla(0,0%,89%,.95)}.navbar-brand{padding:5px 15px}.navbar-brand img{height:100%}@media only screen and (max-width:780px){.navbar-brand{padding:5px 0}.nav.navbar-nav.pop-menu{margin:0 -15px}.main-footer{padding:20px 0}.footer-link li{width:48%;line-height:1.8}.footer-link li span.iconfont{font-size:30px}.footer-logo{height:50px}}", ""])
    },
    20 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, '::selection{color:#e8e8e8;background:gray}@font-face{font-family:iconfont;src:url("//at.alicdn.com/t/font_456464_5htd3kmvxhynl8fr.eot?t=1517830394885");src:url("//at.alicdn.com/t/font_456464_5htd3kmvxhynl8fr.eot?t=1517830394885#iefix") format("embedded-opentype"),url("data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAACMoAAsAAAAAM8wAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZXQ07BY21hcAAAAYAAAAGTAAAEhnjWv0ZnbHlmAAADFAAAHI0AAChI19ap6mhlYWQAAB+kAAAAMQAAADYRLwfDaGhlYQAAH9gAAAAgAAAAJAiyBHtobXR4AAAf+AAAACcAAACcndL/1WxvY2EAACAgAAAAUAAAAFCjHq7YbWF4cAAAIHAAAAAfAAAAIAFJAYhuYW1lAAAgkAAAAUUAAAJtPlT+fXBvc3QAACHYAAABTwAAAcnsueMDeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk4WGcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGBwYKt7MYW7438AQw7yc4SpQmBEkBwDn0wyfeJzN07tKXFEYxfH/GS9HM+Y2mck9MVexCCJWioXTCIIhlYVPYSlT5EVEbSVVGrH2KYRYC2sz4CuIWcc1lV3EIufwG+bsw3zM/r61gQlgzL7ZOLR+U/kb1S+vVjfrYzy4WR+vfvp5g75/M8VALU2oVlfzWtCilrSiVfW1rk1taVs72tWhjnSsU53potSlXTqlV9bKfjkvV8O94cnlwfW1Kw7ErUrLd6x0H1flHW7w/db945/vplJNi8e8dF+neMQnnvDF3XzFWz7ygRmeM8ucu/mCSTru8mfadHnDe57xlB4Pec07vjLtYpP3tL87teQ/uWaaj+rP6GnOBiP+iyLcdVSF+49GPAnnLDwTVEeTenXDc0Lz4YmhhfDs0GJ4imgpPE+0HM0p0kp4xmg1PG3UD88drYcTgDaj2Zm2wqlA2+F8oJ1o9qvdaE6tDsPpQUfhHKHjcKLQaTQnWGfhlKGLcN4odTh5lHY4g5ROOI2UXjiXlLVwQin7QfP+PJxaylU4vwz3wklmeBLONJcHwfRfeFzO6QB4nJV6eZgc1XVvnXtr6aruql6qq6r3nu6aXmbrmelV0uybRhotgyS0IoQBAxJoidgUkISEACH5Iwgei+0IHEe2WWOMDMRgQPBiIzuO/Wy/h2PIsx2IX+zPG+BgiB9oSu/c6hkxJPnDTzNztzrn1F3O8ju3xAkcd/ZN+gKNcDpX5Hq5ce48jgOxA7IaSUKmUC2RDjAygmGFNVqwCxnJzpboAFhZMWyW69W8JUqiHzRIQSVTrhdKpAC16iDpg7KZBIjGY2tCuUSI3gVKpJC6zZkiJ8BI2wn/YJeztHMoXG7RPXt8oVA0FLrDIwqChxDer8EOy5QFWRGdLwr+mPFCuo2kwRctxJZvVFvioYuPVHcmc5YMcPAg6PEW7eGhYCyIv/tiph6KSgHVE4mpdmsY9vwfb0T3JfM/5/Af4Fp30ufJb3GdXK5cMYegikvKNwahUbdqeTsrShqxpKydN0xDbJQrwQz+SLaYrwWr5LFK2Q9+OARASCqWb2tpiZYj9QEKeltbECBQrjg5utf/rkf+NvFfTaWF8bgeAoD9PBG01bsHgATqjQBxHqF7z9wGICowSjgR59TJf0A7OZNL4wks5Ma4FTjVslWCggZSCiypgXtbbuRrg1BIQVjM5qt1gRVlMyzCObJyvWEVBiFXgmq9weiscy26xTQyHz720lkBtqzt+lzbsnbD0Pgfr4ym09Vi0fnnWFtbNZWiXxF++sCXfszzP/5SZjy7NzOx3hGD8Xgwlkr9bLaG98nRv6H8qyc23993eKVHI10995/eD8lKKlVJ7sQ/bDnHj36N0q8dPfq3VJXHdlUO3QIxOwYfL9i6OY6+DD/gvFyYa+HauBo3iKeCy8HTwOVobF1NFRP+5EG6smcYYLinWabb2gbb2px7eoYJmTc20Bxr0rEnKXfst2Su3zP8HDDOwbav/4ljHMfjOfbRd2iS83NRLslV8QyDYdHOZJnu1NE2TKGaZ0ZTKddpJWhDpVZ1Nc4u2KYRxF6jXikb9J2qfeZ/2NWqTct2dWZba38+l2zJ3XrgAPzw4OqR7uEAEXfSA3y4a4S88hFh9X8lcrkFra2ODJ93PvHexgvaY327w86/vm34ejexrWbz+4A+QLZwhBM4hVNxfoUgZKAiFSBDrSCs/T2tn/kefPaaa65xXqP1d34PK59z1hHOOb1hg/MarPk3eHxWzlv0RbKb83EGamw7nplllhtQz+NaRUvKi1IwBQ3I5SUBzDouHvANoul6B/i/hFACT6CRn/kST4hABTQEAi1kFSXOG5CmovPKLYec3xFKqU0pmSFoQNuJJJEUDs08izyw6X1C3nceQhlkCXU+2LXdeZaKIuU45ss66OfQlmKczVW4xdwkrtKuNU3EsDUwgmHTyqDaBHGsN9fUHyMDHz8oQ0By0zKYTg1AvYG0C4FuXk/v3bnrXroedzpBnkvkAHKJme+QvRdu3kucFWS5Ks9Myqoqk+dk1bmTPTeiuaiBZHH4+o6d91Lk38F43osz3jjxIs0OZCZ7N++YeUr2+WTiZQI+g0RJfSAUjYYG9CQSNX0X2ss3yFvMd4EohQ30x3a2gOrE5tesBsBkbqPKVpWv4WLKVr0hSnX6d/l6x8Ybv3zJ8YPhyM2f7N8S0gORyPD5ha58J8QmTu/mty8/rzHYMPpr5NMLip7A1L1Htg6tIdMwuYCK6mVjxCDRVT3ljrVXCIaxYnufLzPaKnK45Wf/O32JDqENW9wGPADc0Dl/pLuWKblWqtvZfMEYhD7c7HNNIyxKFTbnStm0ahp0QK1xrtmoN/C4/FBAftu0CHfqjCCcOdUsn/glz//yCbfcXgjFNC0W6jdXNxurCa1SsjoUV9V4aLXVF4rjqF5YZ/n6qc938SWql/aLnqFzsk6doWvmhGHpHCK0nZBMjJB2Shp60u9PhBvuWCzjjt2W9ctW+MEHDVP2eDm0JO7sj+jjtAP3IISWb6NF9HILMI5OcefjSTV9s7svll1iDjyHfXsQIF9tVFjYtKQKFiXcJKTSQEciHG9gXKoOQcVCH6/XGSVGqWq+VjHDEuGe+b0g/P4Zt9y9V0nriz7h/HusXT2htjs/9Pn+Gw9AYVfzwZa9LRcu0tN/3Xy85JsipeK3RSrLBWNv8hM6Bf5uVaUdc+Kw/LBtKm+uuDZ/fk/XemdfYXPBbOtsM9e5o3BHfYWZn5r5sfv0n9qNTqMdizbnw8Vr6itedymRY05fN5EBLsBxMjDPZ4HrJ9AL4gqcnyhRXYFFSlSGPlmPKnjYrVjLzisyG4nqsmvPB3igB9GnRrgMt4zbjN7GlMQsxux6mbmdernQDIioOHONBntDvtCwmjHBzkqFvB9NBueAJm2Jrl3Xqix6hDWSLRGEK+UUIVfLcusDrbLMKzTxqQRV/ibZkUp1JP8F/7B1rLgwvOyK1qtT7em0kfbf5KXFy6fCi4pGkH7+Xz7PB8PfW3X01A9OHV01W/2rLNs2CuMTCf6TJpOQMppVd6IYrtATMSOZak8lEtT3FF8xiolwRvYHV11zzSpdk1vo1o8kYcW5tvYSz6oM14U7wcE8W2OG5i6q6dDcZsm1nbkIOWuZbvxhA9T6iI74kI/etWPHXRQGa9sPkxDitWeOHHmGYoMc/uOqHYTsWOWWsGbhKCPVQiENB6CywVNdu40xkD3Qbu8aRxn4eHyX3fr4XkZ0+LMAnz3MWnsfXzQnBcuEvXsx0jLGHavq62oDRvrYJ9RQSN395SZOO0VH6U6mATIpIM67AH7pRK+Dq5076U6n6BSvhsvhcqZiDD8d5H+FOmLhznRwA9wSbs1/xk9WEz81zgGoCkNQg4DWZf8nCNX4CEMxDzXXpGsMM/PHR144I8CF53ceb5tqM8Iq/dGJt6OIforFmPPtWLGIOCpGXxT+6fgXXqX01S9kxjI3ZsbXg+MNxmIMQcXeY1AKOaJk6mNYSgXS2Xv/af6GJppK7UI0Ban/Ak4tW/Bf4CnX3CTci9/QX1MDYx/D8Rdzu7mbubtxN/K4qtkwiLbRbDBTkDSwWGh2KxYYC/V8AQN1rZ6nTbVCb42K043aJs1z6AW2rRok0b3Z7gCtN0EqjosSytEZpMYe7qjJVK3AZtBg2KfZp0djiZBOVg4uWC61bS96li8YXAl6MBEbzBLwykDG8gR8HrJc9gLJjQHxeIn909ICIIMFLePH0KoDLHyxbwrIdK02TWDqK10LAXTD3+IvDBJYsNY0Qx2x1owY1mIx5w987jahVEuljfpg3UinaiVhSyymGUKmNdYRMo1iqwBPpkP5VemJ9SirP5nsR8nrJ9Kr8qH08p2C7Nu4X/T4AKck7t+oeoSd8CkYqY0fFlIJOTcc1WojW2Ht+KqTknRy1fjaK/GZFh3OyYmUcHi8NuI8FvXHs/n0UCoQs6adxxJbB+2w3dmJxeC2+DuxQGoonc/G/dHuaauJsdDgf0B+4sbVXmbt83ExnRdTIIMPgtisMO3OMDTD7DuoAYs8CMTOoR2bwU1EaEkg3IbrCbl+Q7Ncdikhly5zS6jNcNkugK7skxAPw3A4Dk+6/TM/wyYOUa5Z/0CWnJcl+cQ5IRuuh5vmpGDpEJQBbyCv0mRQsO+0ZLvIRdhxWpqD8AbW7ZIsSwgiydmz6Os5tGOTw/CR0+uIHzUw05CrW6aflIfAMuFj/vrh80Ur5IQCPlm7CXI+kRd/J6u+wYM5uOTjrvg+uCNqSqfEgJ8vPOvhqfiPh3z9F4XB+A9O1uPu+/Pkm4iO44htbdz7Ddzl3F+gBSEyQfCIeXENsXuwguYUrOYLtlExbMgggszUMkHD7aLFsAOhNYT06IKRA5Wexe5C3q7hvNGTZEUbTyaF9gPIEHSZGPi0MOkO45LDGO4lEY+yhqfWYGCphlJdTzQIFfLEu4rfr7z7+ut3K16vcve+fc5xuGzub+/euxQvgFf50SWqZCjdgbhP8fmUSDrW0RIKBSihckhSA87ht1599S2U80ccN80AUFkT03AHMgWVSiCpqPhPSQbIN7zKzElV7SYtznpQRMhLKnR8ACe7Z052wzc6Pih4m2PO04WopPFCxasoyUxSieZDLR2VzgBPPaISDQzDa90zb3SrKplWvLc2H2Eu4BH1luGPM/rUuXzlFfogHcAYION5BDmuEcwJQUEP5oIgBHMNoQs+CQ/CcecyAzbNtMAm56E0rIFlztO3wIenTjnCKcI7jePwrLPsAfjWp7KHD9+PcgnKfZkepMNoWX2IWFuYWdXc2MAMxxQlg/kwwDQmbJlJ5vddc2uYbh5QQpDKDgGdKQMxNwP/ua174Madnp03Am1de8XneHD2D2/nr9T8vl2HQPzunj3fFeHQLh+6LK1W4bcPD391+DwttO6NnTcA3LCz56XJkHbe8FfpEjq57XujcnDIFwJtKDrZS0jvZHRII0F1MChnb9u6bZK66onzP0Qduh99Qz9GO8wFOMnkrDrXyHM6zrZuGrgIVBfb9c04V4yENZFdclTydfQaVt3EXwkBkykWCLzuvCkIkH79NUiLovOmbJm0i7dX8ystw1wprM5S6OTNSCVA1RrPWyTwiF97JEAtntZVGqzQfYLz5uuvOW+KIqRfex3SM3eQcguks3wnBKLRADJn09BSJsumfX2Lqxl4cESSRh6ETHVxn296WTNn+xpdQ0cw/9/K7eSu457HNbnWwaKNBq7is0Ni0Rtb+XoDHQLmNQwAsgopJZYqVGiKVGqFksCunxq1isFEGLgFNrYETJdYCsjsqNaosfsCC7MQ9InsVNkrGvUhTPXqhbwksh+01gKGStbWGAEOWyxypQF3V6MMSLrRzZVBjhYnYmkbI1K5Z+8de3vKGIrsdGyi6AvohISMhO3zSZ7IaMQj+XzZpBEiRA8Q+IMYSFhBNWYGFCGYLFqZTCAVzkvJqC9gGSGvmOhNZWKL4rvCZrihG+EX40vaKVXAI0lalBIPLwd0UVJNXvKJHskrUUGOKHpQ5j2ExkRN4kWPt31JI9WWK1y1f3uhtT1F+uJTpdr1fdPbUknLSqa2TfddXytNxUPJhdF0ty/g4z2qnEjIqofHTnc6ujBJnC1hS9kvi4FgSNe9ETuq0Z4SZu7ieCxyDc4kEDItNV2K8j3dHmnx8U/SSGt0x3YaN/T4V0tLDTTxqOKRzVI+JhIqBkXC+3wxVZLUmCjKIIdESsRYoeTVPaLPkoylm6+oDEyblq5b5vRA5Yo5X3CMvkP/DK03g1n9bowPdraBSjEwi90MRC/oVV3bzbCkHc0zgzY9BIPE1Z9ZZMxMg+VceIo1M2wxEYWai4slk9kGcwFGeI7GYF660hRHvgWQ+k69S/jMBZsOUSg3/p6WKCRN8ldmhBalmUt5XfiuFoSEWshQevnE5F4e7KIaIn7tNFjw09P1HqCHNo3dYIeyZnxd6+LLKD6OEUv75y8HI559ZoKWctlrug6Vbxm/juf3T+zrvr17R8qcRh+UMKci2Vt7eYPu9ERbbCWzpXtffpvIr8ndV7gsq9jpgHQpQCRC3tpeurm8b2Kv2FcEAuGksLWwj1Eg7pH2lcWIHjcHraTrA/+e/gRj7WpuHcPKphH2o+/DlWMg6gZpXpNVtSraRmFes3m3gIGqMa/JKmRDQY260ChI9KjdXbukhe/Jxjs9LSfdRoec3hDw2aV0dGP/Rr/b2JQSXIr0yXSTNL3Zp2Z7baS4UHMmT/afhFe67Yaevcjnz/amY1v6t2gqa1yYEks2Skw9leZLTHTqguaDC/pnG5tbaFc22i6nnmkR7u9/emBOl/5Aj9EQZ2C2MOZmlFmpV2QwtmEbTRTLonWu6q6tYdVsN72yepm942jvLHzGTepFVSkYFYZ/awiMMdO03WBR6S03jDpTJolcIgjtXWPXlsaeHKt/arreq6hBZzlRuoojJyd6aqCSgBUk/6hRv9cXBOIttY08OdHbGBqvHVlR7aUIfyHo4/m20vA1XaMD4INS++iTY70LVIp8v+aFYsfI1V3Iwsh7ZDW4rV6WfYxHEArdo9eURp8crx8F+cmxnrrK+xV8B8robBtle4GB9uyL9Nt0AvOFjdx+7ovcP3DvgAE5WAhLYSNcBXvdPLOaZxcymFX78egxhUyDzRxoHxoISyitCvOGLIxWmrQ1mkWbw0iDMbOXuUjmP2dH2I/YdLG5rDvOHDqLUmUTA1a+6XAtVCjmYEXhT5JkF7IIFS12CdYU1hTsjs2R9WqYxXz8jSlgV03nXonegb0SsucGKshbrqMiFGrz5jmI6VQaHYRkMJEYOdC5WNm5VvMJE1Fgs8ZMqpu9Aj0Ue+HHeezCfB6MM/+BgxxS/F7tvAtlPaJceqUc0eULV8l+v3zllW4Z1JQwYDOoXZosFhQfH1TGbh9Y3Fsqykoxv8BDNF0eau/yertq9enxla3Os7KnJznbb+wb8argVxbt7J3lgGi7B+NotFj0abzhGz3cP9FTKuCDXEOmgYgy3F7yeku1xvTilbncUslHFU8h39q6YnxlrcqEtg1KAS+RFuTbFLnY3Ts5eHTsZ165NznLteCmETWAikkWbu+dFRzp8EAQrL5d5aaITkj0iAGv2BGbFVHe1YdZl9fzy0M+ldCwt1kd4ekhX4DyhupWikc5fLMSosSnHHKrmTtu9mmU6j5GTgxGrmqEWC45Dd19SAlSqiIxBmcf/CUEkoFVCtvcdQpu9BSEjfCQEQ7DpQpLo5RLIRw2hpyiRIKGl/is1uLw4H3LpydGuiQ9SMTKkukN6x6dWNJV1MTrpK7Gio3rHlk8WWpJ8X5DJbFE29Dg/UgN3UUpHLhRouGIhkLs4tDAPctXjg93eiJh4qksnd60/rHFS0soZKEcUIkkqsWuyfGH125YMVkRiBoQSiOLz1vxmcGRtlbLN+ApNaY3rn9scgm+h0IwGsAXFQcH7l22chy6C55oiPKpRNfkxEPIX+8U1YBY7AHk//TQcFsyRpSgD5ZEcYcI7lCz1i6AKDVVovop1j7q8wjQEsU9pbJOosTrJUpo5uWPeMK4FdqmKB4CwV11WbxaGhkYIY3g/mLt4lUsTpBfIL4bcb9sofvMzOWmVoOlpxiBs6IhoTPNSAVMaOfu4ZNQkZjTHYBeKeNeXWXYhV5hXpuegNb4TH+8FbAG37p14GNtH64vEnLeHR523g1FIiHyl6EI4HDI931nh8fr9cA9rJzXJieS7FI+6RiJPGzcCPnEeexCfqEehbExiOpwSo9G9VcJy6XIKArC32PNysXkZ+kVFDBT6eGWsm8Oaag0bHSX4KJLF0gyjMocpTmLI92vjq5LGUDjd4GJ5GYYzCPgaJmRwaMLruM7b1gwFImgO66VavWxQ2N1rEHX1EAkbvfdzXLBu/vseCSgap1QH+m9ORS8uTzcAKm7tXjtkWuLrd3wwa+VP9xer0MZ4qGwV9O84VAcvJ/u3NxZLVXaBpZTQaDLB9oqpSoOfTp604qvr6xOiOJEdeXXV9zEW5o/HvdrlnuUZ18/u5Ev0Icxko5x07hWRFGSILFkYhY7sFjKkEMJmrChWecHoQkYmnUdPa0LFbCWGqRV4Ike4nOtIXio80jnEdg/anky8WBctI5GpJZEMCZaY2Ze043R9lEz5w8bo5aod+Q91hFLcms2qhtjnWNGXgsZJ6ec3zgzzof3rZ7CgEZBuA8ev7V0S+mQORHrhHBgvIvVemDClMIdecm81WRSJGvcfcdEacJwa1PU2/Me9pRR/QLFrJ4vmH2XOTtz9gleoKsxc+FkNy/E+AHNEObqeLlRqdeCFaat7PagWc+F0xJSYjhlCj0XTrFm36Jojd0dsEjH9ssPWfatUEcdmY257FqnguGinqffd24PF0LxDtXZpcV4qeMyqBfBkCWQ7mSfk+50y507RC0k3XJACmkgXrUD83vlL5qPz3JGEm1D3gPHhf4i3KjIcmwjEAYjIGkcYxp/rK0O4/6SImZJB8jg10D3Ob+S0+EYBef8jkUgSQqAGlaX4d8eT0iVjt0lgapLN8yO/aYlAi8JsgppyUo470mKjOSKMxZpQSoVoK8DHgbZjHRyszn6r+kPqYUYrQtTxCHazbs2b2Uk9r8OwKykwTV/O9PcSD4N5H+/TSkAFUTpzL2Kpim057Sk6TM7AHiJbmfrPfP9b+GI5x3C6Pxv86IkiZh+aGEVTntCfqIDIaqhfgu3WXqHMGDRzE9vp+/RA9xKbhN3JXcjd6ubn2IOaIspYObbqDJIwo7HtW6D3d2gMbu2Xm6Y7KTqeYSMzLQZiMCkBE2e3Q0xfFlvginLxU7so5ebxFSablFnAIWlrOwOCB0Cw5cuaR5OHl0sgB7RwUPDUY80KqTTrZcP33Ab+P2pEXMiP9mWSm/YOHSlyPNejHo+lb+if/kw0NhEX/+IT5MHGlGzh4in2N08K0JOfQnAknqzUiAXc2LMI7rVXx3A5C90AKnoYs+xztLi7rhiBqhM92xtrLYLbTfdUFmVWz5U4/1eIxrZncxPtJqoPV7ZF8a9NtJdWujiaMgfhIB3g8/TOLilNBqtzRyEYALxaDAeOogvfqn5fqycb8RyudhLrDgA6TTgH+fFc3iO/h2d5BJcmVvInYfIfSt3LXeQu4P7DCJXDoKzgYV955WC828/q3nccRZQrKD7XzyadwodQKv1Pgja7I7HjTqzd0DNyoBZU23a5Edt6f9zXLc/GqHboNHmbGlrgIJ/hV6ASoF8p1iG8swX0dbgBFri3YEo7528YFLlI4HkVUlTGSD/ENVnauEoRMJPB7cMDm0JvBCOzjgZZpkZNOFbv8m0mxW7/8SxG99nLVbAn8MOnApOi2dT+yMpF5x/L1TYxEAulGGXmUyazj16oLPR6PKjtplJ5xXngTCGUwyKMtb9UwBT/ax3Mxr6ud+r5ne2z+84TzRrLoJn6tCXKcXT9WEvyuW4PJ5uhevj+rlxboJbhRnqFu4i7ipuO/fn3A3cndwx7jj3AJ52hn3EYRfemKgW5nd0t8NOGzvG/I7QTFpqdsY23LMqCEEWZtm9LgtdQfcrYpCpR42ZZtm9/mOdCuNnhsi+G5XYZ+m8ezVtWn3gmnPBms9MH59ZIXu9MnmKladn/sz9tH8MS88i5zLWgeOsnN+eeZ3RvvoqeernP2etmQXgZejCC19gBeuQuxDW4O/Mbfd4UNQ9rtTDQsBz7XWegCxIN1GeSDy/38Pzz5/jqc21vjjXcJ5tivlSE73cyMba29lTA37HXu3oTPL/hJfczgh7F3TewzruK51fNfl/iu8ZG+P5QIBfSgDIUj7gUeZLmL1rfZkOc35Ef5yeaX6ZkGa/WehBExFRpVbIN2p6RQ+yu4NmN5gfwmPysps78wh5J10EKKZnAm79ZaIMPz2skAdDRwjt/W23CCD2PLTn8FcWyHT4I7I0Y3N+5Lzv965QlBVe/y+cR2G987Yg8N2KUhJkWO0RS4rzGhSVcU/zXuAg/T49yAW4dahxW5u3kMFuYs19YhFsRKMGA3QiC8Lo5FHpWIc5fBOhTAORjlUpYx5ZaYI890oRkR2qSvP7K6IDi+kS0yR7rkEvKg3Sq4fGEzOPlgYABrrheeIZHWmfLiTqluwf7EjB2GKRrOsXxgSYWq8oWm8HYD6De26EcsXU+IpCHF1rZ8Xn9a5fAUhVX+1VrHS6lE4/3qzoQRjoPHPlxQv7t8CiEnmmcwD+TTY6iGnxPCEaHgrp0kUSaKOPHhBGRYSWgXbwoAeXPQGJx+xDw/jeHkCEKY7QA4/SXAheyPS0tPRkmiX3/wCASedqAAAAeJxjYGRgYADieXx7ReP5bb4ycLMwgMC1eYm/YPT/m/+1WX4xLwdyORiYQKIAVxgNgQAAAHicY2BkYGBu+N/AEMPy6//N/zdZfjEARVCAOgDFQwg0eJxjYWBgYH7JwMACpFl+QWlS8Ftk/v//pOn/fxOI/+KSBwCdrQk+AAAAAAAAdgDAATwBpAH0AhgCZgLUAx4DoAQsBE4E1AVKBWAF5gbKB0QHhghMCHgI2AlAClIK+gt4C/4OMA6iDxgPoBBKEJARVBI+Ey4ThBQkeJxjYGRgYFBnrGGQYAABJiDmAkIGhv9gPgMAGsUB0wB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtkFtT20AMhX1IfCFNm0ChXNqUO+HFM4UfwTu/oLNZi7USWxvW63HCr2ddZpg+oBk9Hel8R4p2ovcaRZ/XHDsYYIgYCVJk2MUIXzDGV3zDBFPsYR/fcYBD/MARjnGCU/zEL8zwG2c4xwUucYVr3OAWc9xF2GTPStPC2tVEiyfRJL4jXSo/rK2jrGJZUcESU624Giil4i1Lw6nv2HtymS5JzIIkq5SYVhkasraSOCoK9ntFG0xka8WUba7teotF0hFvWMZNSS+tFGrJSmaBYArVNxvFQZJnktfeulQ281SRcaqe/i/UYSXu2jXLICDip6fgttuzc0+NTzZMr61Nmkrp1X36WNnu75+HJMDslkcfY/eJY1P6Jv43ly5ZXMg6pU34gBjKlXO2y8u0KbnnJeFCqTgNUBOsJnV4TVvntRXb50sLbrR1RRS9AUnxgSoA") format("woff"),url("//at.alicdn.com/t/font_456464_5htd3kmvxhynl8fr.ttf?t=1517830394885") format("truetype"),url("//at.alicdn.com/t/font_456464_5htd3kmvxhynl8fr.svg?t=1517830394885#iconfont") format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-facebook:before{content:"\\E601"}.icon-cntencentwechat:before{content:"\\E638"}.icon-more:before{content:"\\E607"}.icon-linkedin:before{content:"\\E676"}.icon-email:before{content:"\\E6A6"}.icon-aaa:before{content:"\\E600"}.icon-yinsi:before{content:"\\E614"}.icon-twitter:before{content:"\\EC9C"}.icon-chengben:before{content:"\\E6BF"}.icon-language:before{content:"\\E6E3"}.icon-icon:before{content:"\\E64B"}.icon-reddit:before{content:"\\E7D9"}.icon-duorenyonghu-copy:before{content:"\\E628"}.icon-b:before{content:"\\E602"}.icon-weixin:before{content:"\\E630"}.icon-shequndajian:before{content:"\\E73F"}.icon-dingdangdaigaishenfenzhenghao:before{content:"\\E6B3"}.icon-telegram:before{content:"\\E715"}.icon-shenfenzhengming:before{content:"\\E707"}.icon-wupin:before{content:"\\E79B"}.icon-ren:before{content:"\\E654"}.icon-QQqun:before{content:"\\E69D"}.icon-icon-test:before{content:"\\E605"}.icon-xiezuo:before{content:"\\E639"}.icon-slack1:before{content:"\\E7FD"}.icon-Flow_02:before{content:"\\E70B"}.icon-jiaoyi:before{content:"\\E63B"}.icon-icon-test1:before{content:"\\E999"}.icon-rights:before{content:"\\E712"}.icon-slack:before{content:"\\E658"}.icon-jinrong:before{content:"\\E645"}.icon-exchange-arrow-h:before{content:"\\E640"}.icon-shiming:before{content:"\\E62E"}.icon-guanli:before{content:"\\E6D5"}.icon-pingjia:before{content:"\\E632"}.icon-medium-monogram:before{content:"\\E9B5"}.icon-discord:before{content:"\\E66E"}.body-content{padding-left:15px;padding-right:15px}.carousel-caption p{font-size:20px;line-height:1.4}.carousel-inner .item img[src$=".svg"]{width:100%}#qrCode{margin:15px}@media screen and (max-width:767px){.carousel-caption{display:none}}.blog-content img{max-width:100%;height:auto}', ""])
    },
    21 : function(t, e, o) {
        var a = o(15);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    22 : function(t, e, o) {
        var a = o(16);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    23 : function(t, e, o) {
        var a, i;
        o(22),
        a = o(13);
        var n = o(26);
        i = a = a || {},
        "object" != typeof a.
    default && "function" != typeof a.
    default || (i = a = a.
    default),
        "function" == typeof i && (i = i.options),
        i.render = n.render,
        i.staticRenderFns = n.staticRenderFns,
        t.exports = a
    },
    24 : function(t, e, o) {
        var a, i;
        o(21),
        a = o(14);
        var n = o(25);
        i = a = a || {},
        "object" != typeof a.
    default && "function" != typeof a.
    default || (i = a = a.
    default),
        "function" == typeof i && (i = i.options),
        i.render = n.render,
        i.staticRenderFns = n.staticRenderFns,
        t.exports = a
    },
    25 : function(t, e, o) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "top"
                    }
                },
                [a("nav", {
                    staticClass: "navbar navbar-inverse navbar-fixed-top",
                    staticStyle: {
                        width: "100vw"
                    },
                    attrs: {
                        id: "head-navbar"
                    }
                },
                [a("div", {
                    staticClass: "content-container container-head",
                    attrs: {
                        id: "nav_container"
                    }
                },
                [a("div", {
                    staticClass: "navbar-header"
                },
                [a("div", {
                    staticClass: "pull-left",
                    attrs: {
                        id: "logo_div"
                    }
                },
                [a("a", {
                    on: {
                        click: function(e) {
                            t.toHome()
                        }
                    }
                },
                [a("img", {
                    staticClass: "head-logo",
                    attrs: {
                        id: "logoimg",
                        src: o(9)
                    }
                })])]), t._v(" "), t._m(0)]), t._v(" "), a("div", {
                    staticClass: "mobile-collapse collapse navbar-collapse",
                    staticStyle: {
                        height: "0px"
                    },
                    attrs: {
                        id: "collapse",
                        "aria-expanded": "false"
                    }
                },
                [a("ul", {
                    staticClass: "nav navbar-nav pull-right pop-menu t2-head head-font nav-stacked nav-ul",
                    attrs: {
                        id: "menu_list"
                    }
                },
                [a("li", {
                    staticClass: "menu-item menu-item-bottom"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toHome()
                        }
                    }
                },
                [t._v(t._s(t.head.home))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index",
                        href: "https://ont.io/documents"
                    }
                },
                [t._v(t._s(t.head.develop))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toCooperation(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.cooperation))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toNode(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.node))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom nav-mobile-display"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toNews(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.News))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom nav-mobile-display"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toontView(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.ontView))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom nav-mobile-display"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index"
                    },
                    on: {
                        click: function(e) {
                            t.toteam(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.team))])]), t._v(" "), a("li", {
                    staticClass: "menu-item menu-item-bottom nav-mobile-display"
                },
                [a("a", {
                    staticClass: "nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "home",
                        "asp-action": "index",
                        href: "https://ont.io/about"
                    }
                },
                [t._v(t._s(t.head.aboutus))])]), t._v(" "), a("li", {
                    staticClass: "nav-pc-display dropdown",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        role: "presentation "
                    }
                },
                [a("a", {
                    staticClass: "dropdown-toggle nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    attrs: {
                        "data-toggle": "dropdown",
                        href: "#",
                        role: "button",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                    }
                },
                [t._v("\n                        " + t._s(t.head.documents) + "\n                        ")]), t._v(" "), a("ul", {
                    staticClass: "dropdown-menu dropdown-menu-back",
                    staticStyle: {
                        "font-weight": "100"
                    }
                },
                [a("li", {
                    staticClass: "nav-ul-li"
                },
                [a("a", {
                    staticClass: " nav-ul-a ",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    on: {
                        click: function(e) {
                            t.toNews(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.News))])]), t._v(" "), a("li", {
                    staticClass: "nav-ul-li"
                },
                [a("a", {
                    staticClass: " nav-ul-a ",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    on: {
                        click: function(e) {
                            t.toontView(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.ontView))])]), t._v(" "), a("li", {
                    staticClass: "nav-ul-li"
                },
                [a("a", {
                    staticClass: " nav-ul-a ",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    on: {
                        click: function(e) {
                            t.toteam(t.$route.params.lang)
                        }
                    }
                },
                [t._v(t._s(t.head.team))])]), t._v(" "), a("li", {
                    staticClass: "nav-ul-li"
                },
                [a("a", {
                    staticClass: " nav-ul-a ",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        href: "https://ont.io/about"
                    }
                },
                [t._v(t._s(t.head.aboutus))])]), t._v(" "), a("div", {
                    staticClass: "arrow_down"
                })])]), t._v(" "), a("li", {
                    staticClass: " menu-item menu-item-bottom nav-mobile-display dropdown",
                    attrs: {
                        role: "presentation"
                    }
                },
                [a("a", {
                    staticClass: "dropdown-toggle head-font-EN nav-ul-item-a",
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    staticStyle: {
                        "font-weight": "500"
                    },
                    attrs: {
                        "data-toggle": "dropdown",
                        href: "#",
                        role: "button",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                    }
                },
                [t._v("\n                          Language\n                        ")]), t._v(" "), a("ul", {
                    staticClass: "dropdown-menu dropdown-menu-back-lag"
                },
                [a("li", {
                    staticClass: "menu-item "
                },
                [a("a", {
                    staticClass: "head-font-EN mobile-lang font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "blog",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toEnglish
                    }
                },
                [t._v(t._s(t.head.En))])]), t._v(" "), a("li", {
                    staticClass: "menu-item "
                },
                [a("a", {
                    staticClass: "mobile-lang font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "download",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toChinese
                    }
                },
                [t._v(t._s(t.head.zh))])]), t._v(" "), a("li", {
                    staticClass: "menu-item "
                },
                [a("a", {
                    staticClass: "mobile-lang font_korean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "download",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toKorean
                    }
                },
                [t._v(t._s(t.head.ko))])]), t._v(" "), a("li", {
                    staticClass: "menu-item "
                },
                [a("a", {
                    staticClass: "mobile-lang font_nokorean",
                    staticStyle: {
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "download",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toJapanese
                    }
                },
                [t._v(t._s(t.head.jp))])])])]), t._v(" "), a("li", {
                    staticClass: " nav-pc-display dropdown",
                    attrs: {
                        role: "presentation"
                    }
                },
                [a("a", {
                    staticClass: "dropdown-toggle head-font-EN ",
                    staticStyle: {
                        padding: "14px 12px"
                    },
                    attrs: {
                        "data-toggle": "dropdown",
                        href: "#",
                        role: "button",
                        "aria-haspopup": "true",
                        "aria-expanded": "false"
                    }
                },
                [a("img", {
                    staticStyle: {
                        height: "22px",
                        "margin-right": "12px"
                    },
                    attrs: {
                        src: "/static/img/languagebai.png"
                    }
                }), a("span", {
                    class: "ko" == t.$route.params.lang ? "font_korean": "font_nokorean",
                    staticStyle: {
                        padding: "0 20px 0 0"
                    }
                },
                [t._v(t._s(t.head.languagenow))])]), t._v(" "), a("ul", {
                    staticClass: "dropdown-menu dropdown-menu-back-lag"
                },
                [a("li", {
                    staticClass: "menu-item nav-ul-li"
                },
                [a("a", {
                    staticClass: "head-font-EN nav-ul-a-lag font_nokorean",
                    staticStyle: {
                        "text-align": "center",
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "blog",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toEnglish
                    }
                },
                [t._v(t._s(t.head.En))])]), t._v(" "), a("li", {
                    staticClass: "menu-item nav-ul-li"
                },
                [a("a", {
                    staticClass: " nav-ul-a-lag font_nokorean",
                    staticStyle: {
                        "text-align": "center",
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "download",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toChinese
                    }
                },
                [t._v(t._s(t.head.zh))])]), t._v(" "), a("li", {
                    staticClass: "menu-item nav-ul-li"
                },
                [a("a", {
                    staticClass: "head-font-EN nav-ul-a-lag font_korean",
                    staticStyle: {
                        "text-align": "center",
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "blog",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toKorean
                    }
                },
                [t._v(t._s(t.head.ko))])]), t._v(" "), a("li", {
                    staticClass: "menu-item nav-ul-li"
                },
                [a("a", {
                    staticClass: "head-font-EN nav-ul-a-lag font_nokorean",
                    staticStyle: {
                        "text-align": "center",
                        "font-weight": "100"
                    },
                    attrs: {
                        "asp-area": "",
                        "asp-controller": "blog",
                        "asp-action": "index"
                    },
                    on: {
                        click: t.toJapanese
                    }
                },
                [t._v(t._s(t.head.jp))])]), t._v(" "), a("div", {
                    staticClass: "arrow_down1 nav-pc-display"
                })])])])])])])])
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("button", {
                    staticClass: "navbar-toggle",
                    staticStyle: {
                        border: "0px"
                    },
                    attrs: {
                        id: "togglebutton",
                        "data-toggle": "collapse",
                        "data-target": ".navbar-collapse"
                    }
                },
                [o("span", {
                    staticClass: "icon-bar"
                }), t._v(" "), o("span", {
                    staticClass: "icon-bar"
                }), t._v(" "), o("span", {
                    staticClass: "icon-bar"
                })])
            }]
        }
    },
    26 : function(t, e, o) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "bottom"
                    }
                },
                [a("footer", {
                    staticClass: "container-val-background container-val-background-color"
                },
                [a("div", {
                    staticClass: "container footer-container",
                    staticStyle: {
                        padding: "0px"
                    }
                },
                [a("div", {
                    staticClass: "container-margin-footer"
                },
                [a("div", {
                    staticClass: "row copyright",
                    staticStyle: {
                        color: "grey"
                    }
                },
                [a("div", {
                    staticClass: "col-sm-6 footer-mail-margin",
                    staticStyle: {
                        padding: "0px"
                    }
                },
                [a("img", {
                    staticStyle: {
                        width: "219px"
                    },
                    attrs: {
                        src: o(9)
                    },
                    on: {
                        click: function(e) {
                            t.toHome()
                        }
                    }
                }), t._v(" "), a("p", {
                    staticClass: "margin3-top"
                },
                [t._v("E-mail: contact@ont.io")]), t._v(" "), a("p", {
                    staticClass: "margin4-top"
                },
                [t._v("Copyright © 2018 The Ontology Team")])]), t._v(" "), a("div", {
                    staticClass: "col-sm-2",
                    staticStyle: {
                        padding: "0px"
                    }
                }), t._v(" "), t.language ? t._e() : a("div", {
                    staticClass: "col-sm-2",
                    staticStyle: {
                        padding: "0px"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "col-sm-2 ",
                    staticStyle: {
                        padding: "0px"
                    }
                },
                [a("div", {
                    staticClass: "col-sm-12 col-xs-0 footer-text",
                    staticStyle: {
                        padding: "0",
                        "line-height": "3em"
                    }
                },
                [1 == t.language ? a("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [t._m(0)]) : t._e(), t._v(" "), 0 == t.language ? a("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [t._m(1)]) : t._e(), t._v(" "), 2 == t.language ? a("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [t._m(2)]) : t._e(), t._v(" "), 2 == t.language ? a("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [t._m(3)]) : a("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [a("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://discord.gg/4TQujHj"
                    }
                },
                [a("span", {
                    staticClass: " col-sm-2 iconfont footer-title "
                },
                [t._v("")]), t._v(" "), a("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Discord")])])]), t._v(" "), t._m(4), t._v(" "), t._m(5), t._v(" "), t._m(6), t._v(" "), t._m(7)])]), t._v(" "), 1 == t.language ? a("div", {
                    staticClass: "col-sm-2",
                    staticStyle: {
                        padding: "0px"
                    }
                },
                [t._m(8)]) : t._e()])]), t._v(" "), a("div", {
                    staticClass: "col-sm-12 margin2-top",
                    staticStyle: {
                        padding: "0"
                    }
                })])])])
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://t.me/OntologyNetworkCN"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Telegram")])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://t.me/OntologyNetwork"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Telegram")])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://t.me/OntologyNetworkKO"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Telegram")])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://discord.gg/4TQujHj"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title "
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Discord")])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://twitter.com/OntologyNetwork"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Twitter")])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://www.facebook.com/Ontology-Network-468098413590227/"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Facebook")])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://old.reddit.com/r/OntologyNetwork/"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Reddit")])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 col-xs-6 footer-icon-lineheight margin4-bottom",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window",
                        href: "https://medium.com/ontologynetwork"
                    }
                },
                [o("span", {
                    staticClass: " col-sm-2 iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin4-left"
                },
                [t._v("Medium")])])])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 col-xs-12 footer-text",
                    staticStyle: {
                        padding: "0",
                        "line-height": "3em"
                    }
                },
                [o("div", {
                    staticClass: "col-sm-6 col-xs-6 footer-icon-lineheight margin4-bottom content-align",
                    staticStyle: {
                        padding: "0"
                    }
                },
                [o("div", {
                    staticClass: "margin4-bottom footer-content-padding"
                },
                [o("a", {
                    staticClass: "footer-icon-EN",
                    attrs: {
                        target: "view_window"
                    }
                },
                [o("span", {
                    staticClass: "iconfont footer-title"
                },
                [t._v("")]), t._v(" "), o("span", {
                    staticClass: "margin5-left"
                },
                [t._v("WeChat")])])]), t._v(" "), o("img", {
                    staticClass: "margin4-bottom footer-content-padding",
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        src: "/static/img/wechat.jpg"
                    }
                }), t._v(" "), o("div", {
                    staticClass: "footer-content-padding",
                    staticStyle: {
                        "font-size": "10px"
                    }
                },
                [t._v("公众号:ONT本体")])])])
            }]
        }
    },
    91 : function(t, e, o) {
        "use strict";
        function a(t) {
            return t && t.__esModule ? t: {
            default:
                t
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = o(29),
        n = a(i);
        o(8),
        o(7),
        o(5),
        o(6);
        var s = o(4),
        l = o(23),
        r = a(l),
        c = o(3),
        p = a(c),
        d = o(24),
        h = a(d);
        e.
    default = {
            mounted: function() {
                window.addEventListener("scroll", this.chooseId)
            },
            computed: (0, n.
        default)({},
            (0, s.mapGetters)({
                newslist: "newslist",
                ontViewEN: "ontViewEN",
                ontViewKO: "ontViewKO",
                ontViewZH: "ontViewZH",
                pageDetail: "pageDetail"
            })),
            created: function() {
                var t = this;
                this.timeoutBlock = setTimeout(function() {
                    t.scrollTo("toptarget")
                },
                100)
            },
            watch: {
                ontViewEN: function() {
                    this.head = this.ontViewEN.head,
                    this.language = 0
                },
                ontViewZH: function() {
                    this.head = this.ontViewZH.head,
                    this.language = 1
                },
                ontViewKO: function() {
                    this.head = this.ontViewKO.head,
                    this.language = 2
                },
                pageDetail: function() {
                    this.head = this.pageDetail.head,
                    this.language = 3
                },
                newslist: function() {
                    var t = this.newslist.Result.NewsList[0],
                    e = t.Category;
                    2 == e ? (this.topnews = this.newslist.Result.NewsList, this.topnewslist = this.newslist.Result.NewsList) : this.Newslist = this.newslist.Result.NewsList
                }
            },
            methods: {
                imgInit: function() {
                    $("#topNews0").attr("style", "background-image:url(" + this.topnews[0].PicUrl + ")"),
                    $("#topNews1").attr("style", "background-image:url(" + this.topnews[1].PicUrl + ")"),
                    $("#topNews2").attr("style", "background-image:url(" + this.topnews[2].PicUrl + ")"),
                    $("#topNews3").attr("style", "background-image:url(" + this.topnews[3].PicUrl + ")"),
                    $("#topNews00").attr("style", "background-image:url(" + this.topnews[0].PicUrl + ")"),
                    $("#topNews01").attr("style", "background-image:url(" + this.topnews[1].PicUrl + ")"),
                    $("#topNews02").attr("style", "background-image:url(" + this.topnews[2].PicUrl + ")"),
                    $("#topNews03").attr("style", "background-image:url(" + this.topnews[3].PicUrl + ")")
                },
                search: function(t) {
                    var e = this.$route.params;
                    e.language = this.language ? "cn": "en",
                    e.category = t,
                    e.pagesize = 20,
                    e.pagenumber = 1,
                    this.$store.dispatch("newslist", e)
                },
                toArticle: function(t) {
                    this.$router.push({
                        path: "/view-point/" + t + "/" + this.$route.params.lang
                    })
                },
                scrollTo: function(t) {
                    window.scrollTo(0, 0)
                },
                chooseId: function() {},
                changeopacity: function(t) {
                    var e = $("#" + t),
                    o = document.body.clientHeight,
                    a = document.getElementById(t),
                    i = a.getBoundingClientRect(),
                    n = i.bottom - i.top,
                    s = i.bottom / n,
                    l = (o - i.top) / n;
                    console.log("num: " + s),
                    i.top < 0 && i.bottom > 0 ? s < .4 && s > 0 ? e.css("opacity", s) : e.css("opacity", "1") : i.top < o && i.bottom > o && i.top > 0 && (l < .4 && l > 0 ? e.css("opacity", l) : e.css("opacity", "1"))
                },
                toApp: function(t) {
                    this.$router.push({
                        path: "/application/" + t + "/" + p.
                    default.language
                    })
                }
            },
            data: function() {
                return {
                    icontest: "icon-shenfenzhengming ",
                    language: !1,
                    scrnum: "",
                    head: {},
                    Newslist: [],
                    topnews: [],
                    teamPage: {},
                    communityPage: {},
                    partnerPage: {},
                    footerPage: {},
                    content: "<p>html content</p>",
                    setting: {
                        height: 200,
                        language_url: "langs/zh_CN.js",
                        block_formats: "Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;"
                    }
                }
            },
            components: {
                Bottom: r.
            default,
                Top: h.
            default,
                Global: p.
            default
            },
            beforeDestroy: function() {}
        }
    },
    140 : function(t, e, o) {
        e = t.exports = o(1)(),
        e.push([t.id, "@media only screen and (max-width:360px){.iphone5no{display:none}}@media only screen and (max-width:400px){.head-float{float:left;width:100%}}@media only screen and (max-width:768px){.news-item-h3{font-size:16px;color:#324349}.news-item-t2{font-size:16px;color:#8e9496}.news-item-t3{font-size:12px;color:#324349}.mobile-newtitle{font-size:24px}}@media only screen and (min-width:769px){.news-item-h3{font-size:20px;color:#324349}.news-item-t2{font-size:18px;color:#8e9496}.news-item-t3{font-size:14px;color:#324349}.pc-newtitle{font-size:32px}}@media only screen and (min-width:970px){.ontView-wrapper,.viewWrapper{width:940px}}@media only screen and (min-width:650px) and (max-width:970px){.ontView-wrapper,.viewWrapper{width:640px}}@media only screen and (min-width:330px) and (max-width:650px){.ontView-wrapper,.viewWrapper{width:320px}}@media only screen and (max-width:330px){.ontView-wrapper,.viewWrapper{width:320px}}.ontView-wrapper{display:table}.mobile-ontView-wrapper,.ontView-wrapper{margin-left:auto;margin-right:auto;cursor:pointer}.mobile-ontView-wrapper{width:95%}.viewContent{width:892px;height:140px;margin:8px 24px}.mobile-viewContent,.viewContent{background:#fff;float:left;border:1px solid #f6f6f6}.mobile-viewContent{width:96%;margin:8px 2%;display:-ms-inline-flexbox;display:inline-flex}.viewtopContent{width:300px;background:#32a4be;float:left;margin:10px 10px 0;border:1px solid #f6f6f6;background-repeat:no-repeat;background-size:100%}.viewtopContent:hover>.topnewsitemauthor,.viewtopContent:hover>.topnewsitemcontent{color:#fff}.topContent{background:round;width:940px;height:525px;background:#f6f6f6 no-repeat;margin:10px;background-position-x:center;background-position-y:center;background-size:100%}.mobile-topContent,.topContent{float:left;border:1px solid #f6f6f6}.mobile-topContent{width:100%;height:100%;background:#f6f6f6 no-repeat;margin:10px 0;background-position-x:center;background-position-y:center;background-size:cover}.topnewsWrapper{height:235px;background-color:rgba(50,164,190,.8)}.topnewsWrapper:hover{height:235px;background-color:rgba(50,164,190,.9)}.mobile-topnewsWrapper{margin-top:200px;background-color:rgba(50,164,190,.8)}.view-title{color:#324349}.bloded{font-weight:700}.topnewsitemtitle{line-height:1.4;color:#fff!important;font-weight:700}.topnewsitemauthor{margin-top:16px;line-height:1.4;color:#fff!important}.topnewsitemcontent{margin-top:20px;line-height:1.4;color:#fff!important}.viewWrapper{margin:0 10px}.mobile-viewWrapper,.viewWrapper{background-color:#f6f6f6;display:table}.mobile-viewWrapper{margin:0;width:100%}.viewWrappertitle{line-height:1.5;color:#8e9496;font-weight:700}.viewWrappertitle-pos{padding-left:24px!important;margin:24px 0 16px}.viewWrapper-btn{color:#324349;font-weight:Bold;font-size:18px}.viewWrapper-btn-pos{padding-right:24px!important;margin:25px 0 17px}.viewWrapper-btn-pos-bottom{padding-right:24px!important;margin:17px 0 25px}.viewitemtitle{line-height:1.5;color:#8e9496;font-weight:700;font-size:18px}.mobile-viewitemtitle,.mobile-viewitemtitle-cn{line-height:1.4;color:#8e9496;font-weight:700;font-size:15px}.mobile-viewitemtitle-cn{padding-right:30px}.viewitemauthor{margin-top:16px;line-height:1.5;color:#8e9496}.viewitemcontent{margin-top:20px;line-height:1.5;color:#8e9496}.newestlistimg{height:140px;width:140px;float:left}.newestlisttext{height:140px;width:750px;padding:16px 24px;float:left}.mobile-newestlistimg{width:80px;height:80px;float:left}.mobile-newestlisttext{width:80%;padding:7px 8px 7px 12px;float:left}.mobile-top-pic{height:100%;position:absolute;left:50%;transform:translate(-50%);max-height:400px}@media only screen and (max-width:520px){.pad-display{display:none}.pad-display-margin-bottom{margin-bottom:16px!important}}@media only screen and (min-width:521px) and (max-width:768px){.pad-display{display:block}}.toplistnewswrapper{padding:21px 24px 0;height:100%;background:rgba(50,164,190,.8)}.toplistnewswrapper:hover{padding:21px 24px 0;height:100%;background:rgba(50,164,190,.9)}", ""])
    },
    169 : function(t, e, o) {
        var a = o(140);
        "string" == typeof a && (a = [[t.id, a, ""]]);
        o(2)(a, {});
        a.locals && (t.exports = a.locals)
    },
    183 : function(t, e, o) {
        var a, i;
        o(169),
        a = o(91);
        var n = o(191);
        i = a = a || {},
        "object" != typeof a.
    default && "function" != typeof a.
    default || (i = a = a.
    default),
        "function" == typeof i && (i = i.options),
        i.render = n.render,
        i.staticRenderFns = n.staticRenderFns,
        t.exports = a
    },
    191 : function(t, e) {
        t.exports = {
            render: function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticStyle: {
                        "z-index": "1",
                        "background-repeat": "no-repeat",
                        "background-size": "100%"
                    },
                    attrs: {
                        id: "browser"
                    }
                },
                [o("Top"), t._v(" "), o("div", {
                    attrs: {
                        id: "toptarget"
                    }
                }), t._v(" "), o("div", {
                    staticClass: "home-page-content ontView-first-container ",
                    attrs: {
                        id: "homeFri"
                    }
                },
                [o("div", {
                    staticClass: "container home-detail zindex container-pos"
                },
                [o("div", {
                    staticClass: "row"
                },
                [o("div", {
                    staticClass: "midpoint home-text-fir home-text-fir-firstPage text-center"
                },
                [o("div", {
                    staticClass: "title-margin  margin2-top"
                },
                [o("h1", [o("span", {
                    staticClass: "head-float"
                },
                [1 == t.language ? o("span", {
                    staticClass: "view-title",
                    staticStyle: {
                        color: "#32a4be"
                    }
                },
                [t._v("本体视点")]) : t._e(), t._v(" "), 0 == t.language ? o("span", {
                    staticClass: "view-title",
                    staticStyle: {
                        color: "#32a4be"
                    }
                },
                [t._v("Ontology View")]) : t._e(), t._v(" "), 2 == t.language ? o("span", {
                    staticClass: "view-title font_korean",
                    staticStyle: {
                        color: "#32a4be"
                    }
                },
                [t._v("온톨로지 들여다보기")]) : t._e(), t._v(" "), 3 == t.language ? o("span", {
                    staticClass: "view-title",
                    staticStyle: {
                        color: "#32a4be"
                    }
                },
                [t._v("オントロジーの概要")]) : t._e()]), t._v(" "), o("div", {
                    staticClass: "clear"
                })])])])])])]), t._v(" "), o("div", {
                    staticClass: "ontView-wrapper margin2-top pc-display"
                },
                [t._l(t.topnews,
                function(e, a) {
                    return a < 1 ? o("div", {
                        staticClass: " topContent ",
                        style: {
                            backgroundImage: "url(" + e.PicUrl + ")"
                        },
                        attrs: {
                            id: "topNews" + a
                        },
                        on: {
                            click: function(o) {
                                t.toArticle(e.Id)
                            }
                        }
                    },
                    [a < 1 ? o("div", {
                        staticStyle: {
                            "margin-top": "290px",
                            width: "939px"
                        }
                    },
                    [o("div", {
                        staticClass: "col-sm-12 pc-display topnewsWrapper padding0"
                    },
                    [o("div", {
                        staticClass: "col-sm-1 pc-display "
                    }), t._v(" "), o("div", {
                        staticClass: " col-sm-10 "
                    },
                    [1 == t.language ? o("h3", {
                        staticClass: " margin3-top pc-newtitle",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#ffffff",
                            "font-weight": "700"
                        }
                    },
                    [t._v(t._s(e.Title.substr(0, 25)) + "...")]) : t._e(), t._v(" "), 1 != t.language ? o("h3", {
                        staticClass: " margin3-top pc-newtitle",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#ffffff",
                            "font-weight": "700"
                        }
                    },
                    [t._v(t._s(e.Title.substr(0, 40)) + "...")]) : t._e(), t._v(" "), 1 == t.language ? o("p", {
                        staticClass: "news-item-t3",
                        staticStyle: {
                            "margin-top": "8px",
                            "line-height": "1.4",
                            color: "#ffffff"
                        }
                    },
                    [t._v("由 " + t._s(e.Author) + " 发表于 " + t._s(e.NewsTime))]) : o("p", {
                        staticClass: "news-item-t3",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#ffffff"
                        }
                    },
                    [t._v("By " + t._s(e.Author) + " | Updated " + t._s(e.NewsTime))]), t._v(" "), o("p", {
                        staticClass: "news-item-t2",
                        staticStyle: {
                            "margin-top": "20px",
                            "line-height": "1.8",
                            color: "#ffffff"
                        }
                    },
                    [t._v(t._s(e.Summary.substr(0, 114)) + "...")])]), t._v(" "), o("div", {
                        staticClass: "col-sm-1 pc-display "
                    })])]) : t._e()]) : t._e()
                }), t._v(" "), t._l(t.topnews,
                function(e, a) {
                    return a > 0 ? o("div", {
                        staticClass: "viewtopContent",
                        style: {
                            backgroundImage: "url(" + e.PicUrl + ")"
                        },
                        attrs: {
                            id: "topNews" + a
                        },
                        on: {
                            click: function(o) {
                                t.toArticle(e.Id)
                            }
                        }
                    },
                    [o("div", {
                        staticClass: "toplistnewswrapper"
                    },
                    [o("h3", {
                        staticClass: "news-item-h3 topnewsitemtitle"
                    },
                    [t._v(t._s(e.Title.substr(0, 11)) + "...")]), t._v(" "), 1 == t.language ? o("p", {
                        staticClass: "news-item-t3 topnewsitemauthor"
                    },
                    [t._v("由 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author))]), t._v(" 发表于 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])]) : o("p", {
                        staticClass: "news-item-t3 topnewsitemauthor"
                    },
                    [t._v("By "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author.length > 10 ? e.Author.substr(0, 9) + "...": e.Author))]), t._v(" | Updated "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])]), t._v(" "), o("p", {
                        staticClass: "news-item-t3 topnewsitemcontent margin3-bottom"
                    },
                    [t._v(t._s(1 == t.language ? e.Summary.substr(0, 30) : e.Summary.substr(0, 60)) + "...")])])]) : t._e()
                }), t._v(" "), o("div", {
                    staticClass: "col-sm-12 margin3-top margin3-bottom",
                    staticStyle: {
                        padding: "0",
                        "border-bottom": "1px solid rgb(210, 208, 208)",
                        "margin-left": "10px",
                        "margin-right": "10px",
                        width: "940px"
                    }
                }), t._v(" "), o("div", {
                    staticClass: "viewWrapper"
                },
                [o("div", {
                    staticClass: "col-sm-12 padding0"
                },
                [1 == t.language ? o("div", {
                    staticClass: "col-sm-10 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("文章列表")]) : t._e(), t._v(" "), 0 == t.language ? o("div", {
                    staticClass: "col-sm-10 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("Articles")]) : t._e(), t._v(" "), 2 == t.language ? o("div", {
                    staticClass: "col-sm-10 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("기사 목록")]) : t._e(), t._v(" "), 3 == t.language ? o("div", {
                    staticClass: "col-sm-10 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("記事")]) : t._e(), t._v(" "), o("div", {
                    staticClass: "col-sm-2 viewWrapper-btn viewWrapper-btn-pos",
                    staticStyle: {
                        "text-align": "right"
                    }
                })]), t._v(" "), t._l(t.Newslist,
                function(e, a) {
                    return o("div", {
                        staticClass: "viewContent",
                        on: {
                            click: function(o) {
                                t.toArticle(e.Id)
                            }
                        }
                    },
                    [o("div", {
                        staticClass: "newestlistimg"
                    },
                    [o("img", {
                        staticStyle: {
                            height: "140px",
                            width: "140px"
                        },
                        attrs: {
                            src: e.PicUrl
                        }
                    })]), t._v(" "), o("div", {
                        staticClass: " newestlisttext"
                    },
                    [o("h3", {
                        staticClass: "news-item-t3 viewitemtitle",
                        staticStyle: {
                            "line-height": "1.5",
                            color: "#324349"
                        }
                    },
                    [t._v(t._s(e.Title))]), t._v(" "), 1 == t.language ? o("p", {
                        staticClass: "news-item-t3 viewitemauthor",
                        staticStyle: {
                            "margin-top": "8px"
                        }
                    },
                    [t._v("由 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author))]), t._v(" 发表于 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])]) : o("p", {
                        staticClass: "news-item-t3 viewitemauthor",
                        staticStyle: {
                            "margin-top": "8px"
                        }
                    },
                    [t._v("By "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author))]), t._v(" | Updated "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])]), t._v(" "), o("p", {
                        staticClass: "news-item-t2",
                        staticStyle: {
                            "margin-top": "16px",
                            "line-height": "1.5",
                            "font-size": "14px"
                        }
                    },
                    [t._v(t._s(e.Summary.substr(0, 100)) + "...")])])])
                }), t._v(" "), t._m(0)], 2)], 2), t._v(" "), o("div", {
                    staticClass: "mobile-ontView-wrapper margin3-top mobile-display"
                },
                [t._l(t.topnews,
                function(e, a) {
                    return o("div", {
                        staticClass: " mobile-topContent col-xs-12 padding0",
                        style: {
                            backgroundImage: "url(" + e.PicUrl + ")"
                        },
                        attrs: {
                            id: "topNews0" + a
                        },
                        on: {
                            click: function(o) {
                                t.toArticle(e.Id)
                            }
                        }
                    },
                    [o("div", {
                        staticClass: "mobile-topnewsWrapper col-xs-12 "
                    },
                    [o("h3", {
                        staticClass: " margin3-top pad-display-margin-bottom mobile-newtitle",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#ffffff",
                            "font-weight": "700"
                        }
                    },
                    [t._v(t._s(e.Title))]), t._v(" "), 1 == t.language ? o("p", {
                        staticClass: "news-item-t3 pad-display",
                        staticStyle: {
                            "margin-top": "8px",
                            "line-height": "1.4",
                            color: "#d8d8d8"
                        }
                    },
                    [t._v("由 " + t._s(e.Author) + " 发表于 " + t._s(e.NewsTime))]) : o("p", {
                        staticClass: "news-item-t3 margin3-top pad-display",
                        staticStyle: {
                            "line-height": "1.4",
                            color: "#d8d8d8"
                        }
                    },
                    [t._v("By " + t._s(e.Author) + " | Updated " + t._s(e.NewsTime))]), t._v(" "), o("p", {
                        staticClass: "pad-display",
                        staticStyle: {
                            "margin-top": "20px",
                            "line-height": "1.8",
                            color: "#ffffff"
                        }
                    },
                    [t._v(t._s(e.Summary.substr(0, 114)))])])])
                }), t._v(" "), o("div", {
                    staticClass: "col-xs-12 margin3-top margin3-bottom",
                    staticStyle: {
                        padding: "0",
                        "border-bottom": "1px solid rgb(210, 208, 208)"
                    }
                }), t._v(" "), o("div", {
                    staticClass: "mobile-viewWrapper"
                },
                [o("div", {
                    staticClass: "col-xs-12 padding0"
                },
                [1 == t.language ? o("div", {
                    staticClass: "col-xs-7 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("文章列表")]) : t._e(), t._v(" "), 0 == t.language ? o("div", {
                    staticClass: "col-xs-7 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("Articles")]) : t._e(), t._v(" "), 2 == t.language ? o("div", {
                    staticClass: "col-xs-7 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("기사 목록")]) : t._e(), t._v(" "), 3 == t.language ? o("div", {
                    staticClass: "col-xs-7 news-item-h3 viewWrappertitle viewWrappertitle-pos"
                },
                [t._v("記事")]) : t._e(), t._v(" "), o("div", {
                    staticClass: "col-xs-5 viewWrapper-btn viewWrapper-btn-pos",
                    staticStyle: {
                        "text-align": "right"
                    }
                })]), t._v(" "), t._l(t.Newslist,
                function(e, a) {
                    return o("div", {
                        staticClass: "mobile-viewContent",
                        on: {
                            click: function(o) {
                                t.toArticle(e.Id)
                            }
                        }
                    },
                    [o("div", {
                        staticClass: "mobile-newestlistimg"
                    },
                    [o("img", {
                        staticStyle: {
                            height: "100%"
                        },
                        attrs: {
                            src: e.PicUrl
                        }
                    })]), t._v(" "), o("div", {
                        staticClass: " mobile-newestlisttext"
                    },
                    [1 == t.language ? o("h3", {
                        staticClass: "news-item-t3 mobile-viewitemtitle-cn",
                        staticStyle: {
                            "line-height": "1.5",
                            color: "#324349",
                            height: "44px"
                        }
                    },
                    [t._v("\n                    " + t._s(e.Title.length < 20 ? e.Title: e.Title.substr(0, 20) + "...") + "\n                ")]) : o("h3", {
                        staticClass: "news-item-t3 mobile-viewitemtitle",
                        staticStyle: {
                            "line-height": "1.5",
                            color: "#324349",
                            height: "44px"
                        }
                    },
                    [t._v("\n                    " + t._s(e.Title.length < 40 ? e.Title: e.Title.substr(0, 40) + "...") + "\n                ")]), t._v(" "), 1 == t.language ? o("p", {
                        staticClass: "news-item-t3 viewitemauthor iphone5no",
                        staticStyle: {
                            "margin-top": "4px"
                        }
                    },
                    [t._v("由 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author))]), t._v(" 发表于 "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])]) : o("p", {
                        staticClass: "news-item-t3 viewitemauthor iphone5no",
                        staticStyle: {
                            "margin-top": "4px"
                        }
                    },
                    [t._v("By "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.Author))]), t._v(" | Updated "), o("span", {
                        staticClass: "bloded"
                    },
                    [t._v(t._s(e.NewsTime))])])])])
                }), t._v(" "), t._m(1)], 2)], 2), t._v(" "), t._m(2), t._v(" "), o("Bottom")], 1)
            },
            staticRenderFns: [function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-sm-12 padding0"
                },
                [o("div", {
                    staticClass: "col-sm-12 viewWrapper-btn viewWrapper-btn-pos-bottom",
                    staticStyle: {
                        "text-align": "right"
                    }
                })])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "col-xs-12 padding0"
                },
                [o("div", {
                    staticClass: "col-xs-12 viewWrapper-btn viewWrapper-btn-pos-bottom",
                    staticStyle: {
                        "text-align": "right"
                    }
                })])
            },
            function() {
                var t = this,
                e = t.$createElement,
                o = t._self._c || e;
                return o("div", {
                    staticClass: "home-page-content back-color container-padding-first container-val-background ",
                    staticStyle: {
                        "z-index": "10"
                    },
                    attrs: {
                        id: "communityPage"
                    }
                },
                [o("div", {
                    staticClass: "container home-detail zindex "
                },
                [o("div", {
                    staticClass: "container-margin-ontdesc"
                },
                [o("div", {
                    staticClass: "row ",
                    staticStyle: {
                        color: "black"
                    }
                },
                [o("div", {
                    staticClass: "col-sm-12",
                    staticStyle: {
                        padding: "0",
                        "border-bottom": "1px solid rgb(210, 208, 208)"
                    }
                })])])])])
            }]
        }
    }
});