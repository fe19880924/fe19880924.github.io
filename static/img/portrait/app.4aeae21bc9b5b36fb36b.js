webpackJsonp([9, 10], {
    0 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        var o = i(29),
        a = n(o),
        r = i(28),
        u = n(r),
        c = i(152),
        d = n(c),
        l = i(62),
        s = n(l),
        f = i(105),
        E = n(f),
        v = i(96),
        N = n(v),
        m = i(198);
        u.
    default.use(d.
    default),
        (0, m.sync)(E.
    default, N.
    default);
        var I = new u.
    default((0, a.
    default)({
            router:
            N.
        default,
            store: E.
        default
        },
        s.
    default));
        I.$mount("#app")
    },
    31 : function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.FILEZH = "FILEZH",
        t.FILEEN = "FILEEN",
        t.APPFILEZH = "APPFILEZH",
        t.APPFILEEN = "APPFILEEN",
        t.TEAMFILEZH = "TEAMFILEZH",
        t.TEAMFILEEN = "TEAMFILEEN",
        t.TEAMFILEKO = "TEAMFILEKO",
        t.TECHFILEZH = "TECHFILEZH",
        t.TECHFILEEN = "TECHFILEEN",
        t.JOINUSFILEZH = "JOINUSFILEZH",
        t.JOINUSFILEEN = "JOINUSFILEEN",
        t.NEWSFILEEN = "NEWSFILEEN",
        t.NEWSFILEZH = "NEWSFILEZH",
        t.NEWSFILEKO = "NEWSFILEKO",
        t.ARTICLE = "ARTICLE",
        t.ONTVIEWEN = "ONTVIEWEN",
        t.ONTVIEWZH = "ONTVIEWZH",
        t.ONTVIEWKO = "ONTVIEWKO",
        t.COOPERATIONEN = "COOPERATIONEN",
        t.COOPERATIONZH = "COOPERATIONZH",
        t.COOPERATIONKO = "COOPERATIONKO",
        t.COOPERATIONSUBMIT = "COOPERATIONSUBMIT",
        t.MAILVERFIRST = "MAILVERFIRST",
        t.GETCAPTCHA = "GETCAPTCHA",
        t.VERCAPTCHA = "VERCAPTCHA",
        t.REGISTERINDIVIDUAL = "REGISTERINDIVIDUAL",
        t.TRIONESEN = "TRIONESEN",
        t.TRIONESZH = "TRIONESZH",
        t.TRIONESLISTEN = "TRIONESLISTEN",
        t.TRIONESLISTZH = "TRIONESLISTZH",
        t.TRIONESLIST = "TRIONESLIST",
        t.KYCFAQEN = "KYCFAQEN",
        t.KYCFAQZH = "KYCFAQZH",
        t.AUDITORLOGIN = "AUDITORLOGIN",
        t.INDIVIDUALLIST = "INDIVIDUALLIST",
        t.INDIVIDUALDETAIL = "INDIVIDUALDETAIL",
        t.INDIVIDUALVERIFICATION = "INDIVIDUALVERIFICATION",
        t.INDIVIDUALFIRST = "INDIVIDUALFIRST",
        t.INDIVIDUALSECONDVERIFICATION = "INDIVIDUALSECONDVERIFICATION",
        t.NOTPASSSEARCH = "NOTPASSSEARCH",
        t.EMAILSEARCH = "EMAILSEARCH",
        t.ROWNUMBESEARECH = "ROWNUMBESEARECH",
        t.NEWSLOGIN = "NEWSLOGIN",
        t.NEWSUPLOAD = "NEWSUPLOAD",
        t.NEWSLIST = "NEWSLIST",
        t.NEWSDETAIL = "NEWSDETAIL",
        t.NEWSDELETE = "NEWSDELETE",
        t.NEWSHIDE = "NEWSHIDE",
        t.NEWSSHOW = "NEWSSHOW",
        t.PAGEDETAIL = "PAGEDETAIL"
    },
    48 : function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.API_ROOT = "https://ont.io/",
        t.CookieDomain = ""
    },
    62 : function(e, t, i) {
        var n, o, a = i(186);
        o = n = n || {},
        "object" != typeof n.
    default && "function" != typeof n.
    default || (o = n = n.
    default),
        "function" == typeof o && (o = o.options),
        o.render = a.render,
        o.staticRenderFns = a.staticRenderFns,
        e.exports = n
    },
    94 : function(e, t, i) {
        "use strict";
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.
        default = e,
            t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(95),
        a = n(o);
        t.
    default = {
            getFileEN: function() {
                return a.FileENReource.get({})
            },
            getFileZH: function() {
                return a.FileZHReource.get({})
            },
            getAppFileEN: function() {
                return a.AppFileENReource.get({})
            },
            getAppFileZH: function() {
                return a.AppFileZHReource.get({})
            },
            getTeamFileEN: function() {
                return a.TeamFileENReource.get({})
            },
            getTeamFileKO: function() {
                return a.TeamFileKOReource.get({})
            },
            getTeamFileZH: function() {
                return a.TeamFileZHReource.get({})
            },
            getTechFileEN: function() {
                return a.TechFileENReource.get({})
            },
            getTechFileZH: function() {
                return a.TechFileZHReource.get({})
            },
            getJoinUsFileEN: function() {
                return a.JoinUsFileENReource.get({})
            },
            getJoinUsFileZH: function() {
                return a.JoinUsFileZHReource.get({})
            },
            getNewsFileZH: function() {
                return a.NewsFileZHReource.get({})
            },
            getNewsFileEN: function() {
                return a.NewsFileENReource.get({})
            },
            getarticle: function(e) {
                return a.articleReource.get({
                    ip: e
                })
            },
            getontViewZH: function() {
                return a.ontViewZHReource.get({})
            },
            getontViewEN: function() {
                return a.ontViewENReource.get({})
            },
            getCooperationZH: function() {
                return a.CooperationZHReource.get({})
            },
            getCooperationEN: function() {
                return a.CooperationENReource.get({})
            },
            getCooperationKO: function() {
                return a.CooperationKOReource.get({})
            },
            savecooperationsubmit: function(e, t, i, n, o) {
                return a.cooperationsubmitReource.save({},
                {
                    Name: e,
                    ContactWay: t,
                    Detail: o,
                    Type: i,
                    ContactNumber: n
                })
            },
            getTrionesZH: function() {
                return a.TrionesZHReource.get({})
            },
            getTrionesEN: function() {
                return a.TrionesENReource.get({})
            },
            getTrionesListZH: function() {
                return a.TrionesListZHReource.get({})
            },
            getTrionesListEN: function() {
                return a.TrionesListENReource.get({})
            },
            gettrioneslist: function(e) {
                return a.trioneslistReource.get({
                    region: e
                })
            },
            mailverfirst: function(e, t) {
                return a.mailverfirstReource.get({
                    Email: e,
                    EmailCode: t
                })
            },
            getcaptcha: function(e, t, i) {
                return a.getcaptchaReource.get({
                    phone: e,
                    nation: t,
                    EmailCode: i
                })
            },
            vercaptcha: function(e, t) {
                return a.vercaptchaReource.get({
                    phone: e,
                    code: t
                })
            },
            registerindividual: function(e, t, i) {
                return a.registerindividualReource.save({},
                {
                    EmailCode: e,
                    Email: t,
                    Data: i
                })
            },
            getKYCFAQEN: function() {
                return a.KYCFAQENReource.get({})
            },
            getKYCFAQZH: function() {
                return a.KYCFAQZHReource.get({})
            },
            auditorlogin: function(e, t) {
                return a.auditorloginReource.save({},
                {
                    Name: e,
                    Password: t
                })
            },
            individualList: function(e, t) {
                return a.individualListReource.get({
                    pagesize: e,
                    pagenumber: t
                })
            },
            individualdetail: function(e) {
                return a.individualdetailReource.get({
                    id: e
                })
            },
            individualverification: function(e, t, i, n, o) {
                return a.individualverificationReource.save({},
                {
                    Id: e,
                    PassFlag: t,
                    Reason: i,
                    Auditor: n,
                    Password: o
                })
            },
            individualfirst: function(e, t, i, n) {
                return a.individualfirstReource.save({},
                {
                    PageSize: e,
                    PageNumber: t,
                    Auditor: i,
                    FirstAuditor: n
                })
            },
            individualsecondverification: function(e, t, i, n) {
                return a.individualsecondverificationReource.save({},
                {
                    Id: e,
                    Auditor: t,
                    PassFlag: i,
                    Reason: n
                })
            },
            notpasssearch: function(e, t, i, n) {
                return a.notpasssearchReource.save({},
                {
                    PageSize: e,
                    PageNumber: t,
                    Auditor: i,
                    FirstAuditor: n
                })
            },
            emailsearch: function(e, t) {
                return a.emailsearchReource.save({},
                {
                    Email: e,
                    Auditor: t
                })
            },
            rownumbesearch: function(e, t) {
                return a.rownumbesearchrReource.save({},
                {
                    RowNumber: e,
                    Auditor: t
                })
            },
            newslogin: function(e, t) {
                return a.newsloginReource.save({},
                {
                    Account: e,
                    Password: t
                })
            },
            newsupload: function(e, t, i) {
                return a.newsuploadReource.save({},
                {
                    Account: e,
                    Password: t,
                    NewsList: i
                })
            },
            newslist: function(e, t, i, n) {
                return a.newslistReource.get({
                    language: e,
                    pagesize: t,
                    pagenumber: i,
                    category: n
                })
            },
            newsdetail: function(e) {
                return a.newsdetailReource.get({
                    id: e
                })
            },
            newsdelete: function(e, t, i) {
                return a.newsdeleteReource.save({},
                {
                    Id: e,
                    Account: t,
                    Password: i
                })
            },
            newshide: function(e, t, i) {
                return a.newshideReource.save({},
                {
                    Id: e,
                    Account: t,
                    Password: i
                })
            },
            newsshow: function(e) {
                return a.newsshowReource.get({
                    id: e
                })
            },
            pageDetail: function(e) {
                return a.pageDetailReource.get({
                    pgname: e
                })
            }
        }
    },
    95 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pageDetailReource = t.newsshowReource = t.newshideReource = t.newsdeleteReource = t.newsdetailReource = t.newslistReource = t.newsuploadReource = t.newsloginReource = t.rownumbesearchrReource = t.emailsearchReource = t.notpasssearchReource = t.individualsecondverificationReource = t.individualfirstReource = t.individualverificationReource = t.individualdetailReource = t.individualListReource = t.auditorloginReource = t.KYCFAQENReource = t.KYCFAQZHReource = t.registerindividualReource = t.vercaptchaReource = t.getcaptchaReource = t.mailverfirstReource = t.cooperationsubmitReource = t.ontViewZHReource = t.ontViewENReource = t.trioneslistReource = t.TrionesListENReource = t.TrionesListZHReource = t.TrionesENReource = t.TrionesZHReource = t.articleReource = t.CooperationKOReource = t.CooperationZHReource = t.CooperationENReource = t.NewsFileZHReource = t.NewsFileENReource = t.JoinUsFileZHReource = t.JoinUsFileENReource = t.TechFileZHReource = t.TechFileENReource = t.TeamFileZHReource = t.TeamFileKOReource = t.TeamFileENReource = t.AppFileZHReource = t.AppFileENReource = t.FileZHReource = t.FileENReource = void 0;
        var o = i(28),
        a = n(o),
        r = i(196),
        u = n(r),
        c = i(48),
        d = i(97);
        a.
    default.use(u.
    default),
        a.
    default.http.options.crossOrigin = !0,
        a.
    default.http.options.credentials = !0,
        a.
    default.http.interceptors.push(function(e, t) {
            e.headers = e.headers || {},
            (0, d.getCookie)("token") && (e.headers.Authorizatin = "Bearer " + (0, d.getCookie)("token").replace(/(^\")|(\"$)/g, "")),
            t(function(e) {
                401 === e.status && ((0, d.signOut)(), window.location.pathname = "/login")
            })
        });
        t.FileENReource = a.
    default.resource("/static/file/FileEN.json"),
        t.FileZHReource = a.
    default.resource("/static/file/FileZH.json"),
        t.AppFileENReource = a.
    default.resource("/static/file/AppFileEN.json"),
        t.AppFileZHReource = a.
    default.resource("/static/file/AppFileZH.json"),
        t.TeamFileENReource = a.
    default.resource("/static/file/TeamFileEN.json"),
        t.TeamFileKOReource = a.
    default.resource("/static/file/TeamFileKO.json"),
        t.TeamFileZHReource = a.
    default.resource("/static/file/TeamFileZH.json"),
        t.TechFileENReource = a.
    default.resource("/static/file/TechFileEN.json"),
        t.TechFileZHReource = a.
    default.resource("/static/file/TechFileZH.json"),
        t.JoinUsFileENReource = a.
    default.resource("/static/file/JoinUsFileEN.json"),
        t.JoinUsFileZHReource = a.
    default.resource("/static/file/JoinUsFileZH.json"),
        t.NewsFileENReource = a.
    default.resource("/static/file/NewsFileEN.json"),
        t.NewsFileZHReource = a.
    default.resource("/static/file/NewsFileZH.json"),
        t.CooperationENReource = a.
    default.resource("/static/file/CooperationEN.json"),
        t.CooperationZHReource = a.
    default.resource("/static/file/CooperationZH.json"),
        t.CooperationKOReource = a.
    default.resource("/static/file/CooperationKO.json"),
        t.articleReource = a.
    default.resource("/static/file/news/{/ip}.json"),
        t.TrionesZHReource = a.
    default.resource("/static/file/TrionesZH.json"),
        t.TrionesENReource = a.
    default.resource("/static/file/TrionesEN.json"),
        t.TrionesListZHReource = a.
    default.resource("/static/file/TrionesListZH.json"),
        t.TrionesListENReource = a.
    default.resource("/static/file/TrionesListEN.json"),
        t.trioneslistReource = a.
    default.resource(c.API_ROOT + "api/v1/candidate/info/{region}"),
        t.ontViewENReource = a.
    default.resource("/static/file/ontViewEN.json"),
        t.ontViewZHReource = a.
    default.resource("/static/file/ontViewZH.json"),
        t.cooperationsubmitReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/enterprise"),
        t.mailverfirstReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/email/verification/{Email}/{EmailCode}"),
        t.getcaptchaReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/sms/verificationcode/{phone}/{nation}/{EmailCode}"),
        t.vercaptchaReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/sms/phone/verification/{phone}/{code}"),
        t.registerindividualReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual"),
        t.KYCFAQZHReource = a.
    default.resource("/static/file/KYCFAQZH.json"),
        t.KYCFAQENReource = a.
    default.resource("/static/file/KYCFAQEN.json"),
        t.auditorloginReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/auditor/login"),
        t.individualListReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/{pagesize}/{pagenumber}"),
        t.individualdetailReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/{id}"),
        t.individualverificationReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/verification"),
        t.individualfirstReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/first/audit"),
        t.individualsecondverificationReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/second/audit"),
        t.notpasssearchReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/notpass"),
        t.emailsearchReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/email"),
        t.rownumbesearchrReource = a.
    default.resource(c.API_ROOT + "api/v1/ont/individual/rownumber"),
        t.newsloginReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/manager/login"),
        t.newsuploadReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/upload"),
        t.newslistReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/list/{language}/{pagesize}/{pagenumber}/{category}"),
        t.newsdetailReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/{id}"),
        t.newsdeleteReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/delete"),
        t.newshideReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/hide"),
        t.newsshowReource = a.
    default.resource(c.API_ROOT + "api/v1/newsservice/news/show/{id}"),
        t.pageDetailReource = a.
    default.resource("/static/file/{pgname}.json")
    },
    96 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(28),
        a = n(o),
        r = i(197),
        u = n(r);
        a.
    default.use(u.
    default);
        var c = function(e) {
            return i.e(9,
            function() {
                return e(i(62))
            })
        },
        d = function(e) {
            return i.e(7,
            function() {
                return e(i(179))
            })
        },
        l = function(e) {
            return i.e(4,
            function() {
                return e(i(182))
            })
        },
        s = function(e) {
            return i.e(5,
            function() {
                return e(i(181))
            })
        },
        f = function(e) {
            return i.e(6,
            function() {
                return e(i(180))
            })
        },
        E = function(e) {
            return i.e(0,
            function() {
                return e(i(184))
            })
        },
        v = function(e) {
            return i.e(1,
            function() {
                return e(i(178))
            })
        },
        N = function(e) {
            return i.e(8,
            function() {
                return e(i(177))
            })
        },
        m = function(e) {
            return i.e(3,
            function() {
                return e(i(183))
            })
        },
        I = function(e) {
            return i.e(2,
            function() {
                return e(i(185))
            })
        },
        p = [{
            path: "/",
            component: c,
            children: [{
                path: "",
                redirect: "",
                component: m
            },
            {
                path: "/application/:page/:lang",
                component: d
            },
            {
                path: "/news/:lang",
                component: l
            },
            {
                path: "/ont-view/:lang",
                component: m
            },
            {
                path: "/view-point/:id/:lang",
                component: I
            },
            {
                path: "/cooperation/:lang",
                component: s
            },
            {
                path: "/press/:id/:lang",
                component: f
            },
            {
                path: "/team/:lang",
                component: E
            },
            {
                path: "/application/:page/:lang",
                component: d
            },
            {
                path: "/news",
                component: l
            },
            {
                path: "/ont-view",
                component: m
            },
            {
                path: "/view-point",
                component: I
            },
            {
                path: "/cooperation",
                component: s
            },
            {
                path: "/press/:id",
                component: f
            },
            {
                path: "/team",
                component: E
            },
            {
                path: "/trionesintro/:lang",
                component: v
            },
            {
                path: "/listtriones/:lang",
                component: N
            }]
        },
        {
            path: "*",
            redirect: "/"
        }],
        T = new u.
    default({
            mode:
            "history",
            scrollBehavior: function() {
                return {
                    y: 0
                }
            },
            routes: p
        });
        t.
    default = T
    },
    97 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        function o(e, t) {
            l.
        default.save(e, t, f)
        }
        function a(e) {
            return l.
        default.load(e)
        }
        function r(e) {
            l.
        default.remove(e, f)
        }
        function u() {
            l.
        default.remove("token", f)
        }
        function c() {
            return !! l.
        default.load("token")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.saveCookie = o,
        t.getCookie = a,
        t.removeCookie = r,
        t.signOut = u,
        t.isLogin = c;
        var d = i(176),
        l = n(d),
        s = i(48),
        f = {};
        "" !== s.CookieDomain && (f = {
            domain: s.CookieDomain
        })
    },
    98 : function(e, t, i) {
        "use strict";
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.pageDetail = t.newsshow = t.newshide = t.newsdelete = t.newsdetail = t.newslist = t.newsupload = t.newslogin = t.rownumbesearch = t.emailsearch = t.notpasssearch = t.individualsecondverification = t.individualfirst = t.individualverification = t.individualdetail = t.individualList = t.auditorlogin = t.KYCFAQZH = t.KYCFAQEN = t.trioneslist = t.TrionesListEN = t.TrionesListZH = t.TrionesEN = t.TrionesZH = t.registerindividual = t.vercaptcha = t.getcaptcha = t.mailverfirst = t.cooperationsubmit = t.CooperationKO = t.CooperationEN = t.CooperationZH = t.ontViewKO = t.ontViewEN = t.ontViewZH = t.article = t.NewsFileKO = t.NewsFileEN = t.NewsFileZH = t.JoinUsFileZH = t.JoinUsFileEN = t.TechFileZH = t.TechFileEN = t.TeamFileKO = t.TeamFileZH = t.TeamFileEN = t.AppFileZH = t.AppFileEN = t.FileEN = t.FileZH = t.CakeyRecord = t.NewRecord = void 0;
        var a = i(94),
        r = o(a),
        u = i(31),
        c = n(u);
        t.NewRecord = function(e, t) {
            var i = e.commit;
            r.
        default.saveNewRecord(t.Action, t.Version, t.RecordData).then(function(e) {
                var t = e.body;
                i(c.NEWRECORD, {
                    data: t
                })
            })
        },
        t.CakeyRecord = function(e, t) {
            var i = e.commit;
            r.
        default.getCakeyRecord(t.cakey).then(function(e) {
                var t = e.body;
                i(c.CAKEYRECORD, {
                    data: t
                })
            })
        },
        t.FileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getFileZH().then(function(e) {
                var t = e.body;
                i(c.FILEZH, {
                    data: t
                })
            })
        },
        t.FileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getFileEN().then(function(e) {
                var t = e.body;
                i(c.FILEEN, {
                    data: t
                })
            })
        },
        t.AppFileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getAppFileEN().then(function(e) {
                var t = e.body;
                i(c.APPFILEEN, {
                    data: t
                })
            })
        },
        t.AppFileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getAppFileZH().then(function(e) {
                var t = e.body;
                i(c.APPFILEZH, {
                    data: t
                })
            })
        },
        t.TeamFileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getTeamFileEN().then(function(e) {
                var t = e.body;
                i(c.TEAMFILEEN, {
                    data: t
                })
            })
        },
        t.TeamFileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getTeamFileZH().then(function(e) {
                var t = e.body;
                i(c.TEAMFILEZH, {
                    data: t
                })
            })
        },
        t.TeamFileKO = function(e, t) {
            var i = e.commit;
            r.
        default.getTeamFileKO().then(function(e) {
                var t = e.body;
                i(c.TEAMFILEKO, {
                    data: t
                })
            })
        },
        t.TechFileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getTechFileEN().then(function(e) {
                var t = e.body;
                i(c.TECHFILEEN, {
                    data: t
                })
            })
        },
        t.TechFileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getTechFileZH().then(function(e) {
                var t = e.body;
                i(c.TECHFILEZH, {
                    data: t
                })
            })
        },
        t.JoinUsFileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getJoinUsFileEN().then(function(e) {
                var t = e.body;
                i(c.JOINUSFILEEN, {
                    data: t
                })
            })
        },
        t.JoinUsFileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getJoinUsFileZH().then(function(e) {
                var t = e.body;
                i(c.JOINUSFILEZH, {
                    data: t
                })
            })
        },
        t.NewsFileZH = function(e, t) {
            var i = e.commit;
            r.
        default.getNewsFileZH().then(function(e) {
                var t = e.body;
                i(c.NEWSFILEZH, {
                    data: t
                })
            })
        },
        t.NewsFileEN = function(e, t) {
            var i = e.commit;
            r.
        default.getNewsFileEN().then(function(e) {
                var t = e.body;
                i(c.NEWSFILEEN, {
                    data: t
                })
            })
        },
        t.NewsFileKO = function(e, t) {
            var i = e.commit;
            r.
        default.getNewsFileEN().then(function(e) {
                var t = e.body;
                i(c.NEWSFILEKO, {
                    data: t
                })
            })
        },
        t.article = function(e, t) {
            var i = e.commit;
            r.
        default.getarticle(t.ip).then(function(e) {
                var t = e.body;
                i(c.ARTICLE, {
                    data: t
                })
            })
        },
        t.ontViewZH = function(e, t) {
            var i = e.commit;
            r.
        default.getontViewZH().then(function(e) {
                var t = e.body;
                i(c.ONTVIEWZH, {
                    data: t
                })
            })
        },
        t.ontViewEN = function(e, t) {
            var i = e.commit;
            r.
        default.getontViewEN().then(function(e) {
                var t = e.body;
                i(c.ONTVIEWEN, {
                    data: t
                })
            })
        },
        t.ontViewKO = function(e, t) {
            var i = e.commit;
            r.
        default.getontViewEN().then(function(e) {
                var t = e.body;
                i(c.ONTVIEWKO, {
                    data: t
                })
            })
        },
        t.CooperationZH = function(e, t) {
            var i = e.commit;
            r.
        default.getCooperationZH().then(function(e) {
                var t = e.body;
                i(c.COOPERATIONZH, {
                    data: t
                })
            })
        },
        t.CooperationEN = function(e, t) {
            var i = e.commit;
            r.
        default.getCooperationEN().then(function(e) {
                var t = e.body;
                i(c.COOPERATIONEN, {
                    data: t
                })
            })
        },
        t.CooperationKO = function(e, t) {
            var i = e.commit;
            r.
        default.getCooperationKO().then(function(e) {
                var t = e.body;
                i(c.COOPERATIONKO, {
                    data: t
                })
            })
        },
        t.cooperationsubmit = function(e, t) {
            var i = e.commit;
            r.
        default.savecooperationsubmit(t.name, t.contact, t.field, t.phone, t.detail).then(function(e) {
                var t = e.body;
                i(c.COOPERATIONSUBMIT, {
                    data: t
                })
            })
        },
        t.mailverfirst = function(e, t) {
            var i = e.commit;
            r.
        default.mailverfirst(t.Email, t.EmailCode).then(function(e) {
                var t = e.body;
                document.cookie = "kycAuth=" + escape(t.Result),
                i(c.MAILVERFIRST, {
                    data: t
                })
            })
        },
        t.getcaptcha = function(e, t) {
            var i = e.commit;
            r.
        default.getcaptcha(t.phone, t.nation, t.EmailCode).then(function(e) {
                var t = e.body;
                i(c.GETCAPTCHA, {
                    data: t
                })
            },
            function(e) {
                var t = e.body;
                i(c.GETCAPTCHA, {
                    data: t
                })
            })
        },
        t.vercaptcha = function(e, t) {
            var i = e.commit;
            r.
        default.vercaptcha(t.phone, t.code).then(function(e) {
                var t = e.body;
                document.cookie = "kycphoneAuth=" + escape(t.Result),
                i(c.VERCAPTCHA, {
                    data: t
                })
            },
            function(e) {})
        },
        t.registerindividual = function(e, t) {
            var i = e.commit;
            r.
        default.registerindividual(t.EmailCode, t.Email, t.Data).then(function(e) {
                var t = e.body;
                i(c.REGISTERINDIVIDUAL, {
                    data: t
                })
            })
        },
        t.TrionesZH = function(e, t) {
            var i = e.commit;
            r.
        default.getTrionesZH().then(function(e) {
                var t = e.body;
                i(c.TRIONESZH, {
                    data: t
                })
            })
        },
        t.TrionesEN = function(e, t) {
            var i = e.commit;
            r.
        default.getTrionesEN().then(function(e) {
                var t = e.body;
                i(c.TRIONESEN, {
                    data: t
                })
            })
        },
        t.TrionesListZH = function(e, t) {
            var i = e.commit;
            r.
        default.getTrionesListZH().then(function(e) {
                var t = e.body;
                i(c.TRIONESLISTZH, {
                    data: t
                })
            })
        },
        t.TrionesListEN = function(e, t) {
            var i = e.commit;
            r.
        default.getTrionesListEN().then(function(e) {
                var t = e.body;
                i(c.TRIONESLISTEN, {
                    data: t
                })
            })
        },
        t.trioneslist = function(e, t) {
            var i = e.commit;
            r.
        default.gettrioneslist(t.region).then(function(e) {
                var t = e.body;
                i(c.TRIONESLIST, {
                    data: t
                })
            })
        },
        t.KYCFAQEN = function(e, t) {
            var i = e.commit;
            r.
        default.getKYCFAQEN().then(function(e) {
                var t = e.body;
                i(c.KYCFAQEN, {
                    data: t
                })
            })
        },
        t.KYCFAQZH = function(e, t) {
            var i = e.commit;
            r.
        default.getKYCFAQZH().then(function(e) {
                var t = e.body;
                i(c.KYCFAQZH, {
                    data: t
                })
            })
        },
        t.auditorlogin = function(e, t) {
            var i = e.commit;
            r.
        default.auditorlogin(t.Name, t.Password).then(function(e) {
                var t = e.body;
                document.cookie = "kycCheckAuth=" + escape(t.Result),
                i(c.AUDITORLOGIN, {
                    data: t
                })
            })
        },
        t.individualList = function(e, t) {
            var i = e.commit;
            r.
        default.individualList(t.pagesize, t.pagenumber).then(function(e) {
                var t = e.body;
                i(c.INDIVIDUALLIST, {
                    data: t
                })
            })
        },
        t.individualdetail = function(e, t) {
            var i = e.commit;
            r.
        default.individualdetail(t.id).then(function(e) {
                var t = e.body;
                i(c.INDIVIDUALDETAIL, {
                    data: t
                })
            })
        },
        t.individualverification = function(e, t) {
            var i = e.commit;
            r.
        default.individualverification(t.Id, t.PassFlag, t.Reason, t.Auditor, t.Password).then(function(e) {
                var t = e.body;
                i(c.INDIVIDUALVERIFICATION, {
                    data: t
                })
            })
        },
        t.individualfirst = function(e, t) {
            var i = e.commit;
            r.
        default.individualfirst(t.PageSize, t.PageNumber, t.Auditor, t.FirstAuditor).then(function(e) {
                var t = e.body;
                i(c.INDIVIDUALFIRST, {
                    data: t
                })
            })
        },
        t.individualsecondverification = function(e, t) {
            var i = e.commit;
            r.
        default.individualsecondverification(t.Id, t.Auditor, t.PassFlag, t.Reason).then(function(e) {
                var t = e.body;
                i(c.INDIVIDUALSECONDVERIFICATION, {
                    data: t
                })
            })
        },
        t.notpasssearch = function(e, t) {
            var i = e.commit;
            r.
        default.notpasssearch(t.PageSize, t.PageNumber, t.Auditor, t.FirstAuditor).then(function(e) {
                var t = e.body;
                i(c.NOTPASSSEARCH, {
                    data: t
                })
            })
        },
        t.emailsearch = function(e, t) {
            var i = e.commit;
            r.
        default.emailsearch(t.Email, t.Auditor).then(function(e) {
                var t = e.body;
                i(c.EMAILSEARCH, {
                    data: t
                })
            })
        },
        t.rownumbesearch = function(e, t) {
            var i = e.commit;
            r.
        default.rownumbesearch(t.RowNumber, t.Auditor).then(function(e) {
                var t = e.body;
                i(c.ROWNUMBESEARECH, {
                    data: t
                })
            })
        },
        t.newslogin = function(e, t) {
            var i = e.commit;
            r.
        default.newslogin(t.Account, t.Password).then(function(e) {
                var t = e.body;
                i(c.NEWSLOGIN, {
                    data: t
                })
            })
        },
        t.newsupload = function(e, t) {
            var i = e.commit;
            r.
        default.newsupload(t.Account, t.Password, t.NewsList).then(function(e) {
                var t = e.body;
                i(c.NEWSUPLOAD, {
                    data: t
                })
            })
        },
        t.newslist = function(e, t) {
            var i = e.commit;
            r.
        default.newslist(t.language, t.pagesize, t.pagenumber, t.category).then(function(e) {
                var t = e.body;
                i(c.NEWSLIST, {
                    data: t
                })
            })
        },
        t.newsdetail = function(e, t) {
            var i = e.commit;
            r.
        default.newsdetail(t.id).then(function(e) {
                var t = e.body;
                i(c.NEWSDETAIL, {
                    data: t
                })
            })
        },
        t.newsdelete = function(e, t) {
            var i = e.commit;
            r.
        default.newsdelete(t.Id, t.Account, t.Password).then(function(e) {
                var t = e.body;
                i(c.NEWSDELETE, {
                    data: t
                })
            })
        },
        t.newshide = function(e, t) {
            var i = e.commit;
            r.
        default.newshide(t.Id, t.Account, t.Password).then(function(e) {
                var t = e.body;
                i(c.NEWSHIDE, {
                    data: t
                })
            })
        },
        t.newsshow = function(e, t) {
            var i = e.commit;
            r.
        default.newsshow(t.id).then(function(e) {
                var t = e.body;
                i(c.NEWSSHOW, {
                    data: t
                })
            })
        },
        t.pageDetail = function(e, t) {
            var i = e.commit;
            r.
        default.pageDetail(t.pgname).then(function(e) {
                var t = e.body;
                i(c.PAGEDETAIL, {
                    data: t
                })
            })
        }
    },
    99 : function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.FileZH = function(e) {
            return e.main.FileZH
        },
        t.FileEN = function(e) {
            return e.main.FileEN
        },
        t.AppFileZH = function(e) {
            return e.main.AppFileZH
        },
        t.AppFileEN = function(e) {
            return e.main.AppFileEN
        },
        t.TeamFileEN = function(e) {
            return e.main.TeamFileEN
        },
        t.TeamFileZH = function(e) {
            return e.main.TeamFileZH
        },
        t.TeamFileKO = function(e) {
            return e.main.TeamFileKO
        },
        t.TechFileEN = function(e) {
            return e.main.TechFileEN
        },
        t.TechFileZH = function(e) {
            return e.main.TechFileZH
        },
        t.JoinUsFileZH = function(e) {
            return e.main.JoinUsFileZH
        },
        t.JoinUsFileEN = function(e) {
            return e.main.JoinUsFileEN
        },
        t.NewsFileEN = function(e) {
            return e.main.NewsFileEN
        },
        t.NewsFileZH = function(e) {
            return e.main.NewsFileZH
        },
        t.NewsFileKO = function(e) {
            return e.main.NewsFileKO
        },
        t.article = function(e) {
            return e.main.article
        },
        t.ontViewZH = function(e) {
            return e.main.ontViewZH
        },
        t.ontViewEN = function(e) {
            return e.main.ontViewEN
        },
        t.ontViewKO = function(e) {
            return e.main.ontViewKO
        },
        t.CooperationEN = function(e) {
            return e.main.CooperationEN
        },
        t.CooperationZH = function(e) {
            return e.main.CooperationZH
        },
        t.CooperationKO = function(e) {
            return e.main.CooperationKO
        },
        t.cooperationsubmit = function(e) {
            return e.main.cooperationsubmit
        },
        t.mailverfirst = function(e) {
            return e.main.mailverfirst
        },
        t.getcaptcha = function(e) {
            return e.main.getcaptcha
        },
        t.vercaptcha = function(e) {
            return e.main.vercaptcha
        },
        t.registerindividual = function(e) {
            return e.main.registerindividual
        },
        t.TrionesEN = function(e) {
            return e.main.TrionesEN
        },
        t.TrionesZH = function(e) {
            return e.main.TrionesZH
        },
        t.TrionesListEN = function(e) {
            return e.main.TrionesListEN
        },
        t.TrionesListZH = function(e) {
            return e.main.TrionesListZH
        },
        t.trioneslist = function(e) {
            return e.main.trioneslist
        },
        t.KYCFAQEN = function(e) {
            return e.main.KYCFAQEN
        },
        t.KYCFAQZH = function(e) {
            return e.main.KYCFAQZH
        },
        t.auditorlogin = function(e) {
            return e.main.auditorlogin
        },
        t.individualList = function(e) {
            return e.main.individualList
        },
        t.individualdetail = function(e) {
            return e.main.individualdetail
        },
        t.individualverification = function(e) {
            return e.main.individualverification
        },
        t.individualfirst = function(e) {
            return e.main.individualfirst
        },
        t.individualsecondverification = function(e) {
            return e.main.individualsecondverification
        },
        t.notpasssearch = function(e) {
            return e.main.notpasssearch
        },
        t.emailsearch = function(e) {
            return e.main.emailsearch
        },
        t.rownumbesearch = function(e) {
            return e.main.rownumbesearch
        },
        t.newslogin = function(e) {
            return e.main.newslogin
        },
        t.newsupload = function(e) {
            return e.main.newsupload
        },
        t.newslist = function(e) {
            return e.main.newslist
        },
        t.newsdetail = function(e) {
            return e.main.newsdetail
        },
        t.newsdelete = function(e) {
            return e.main.newsdelete
        },
        t.newshide = function(e) {
            return e.main.newshide
        },
        t.newsshow = function(e) {
            return e.main.newsshow
        },
        t.pageDetail = function(e) {
            return e.main.pageDetail
        }
    },
    100 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(10),
        a = n(o),
        r = i(31),
        u = {
            degreeInfo: []
        },
        c = (0, a.
    default)({},
        r.DEGREEINFO,
        function(e, t) {
            var i = t.data;
            e.degreeInfo = i
        });
        t.
    default = {
            state: u,
            mutations: c
        }
    },
    101 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(10),
        a = n(o),
        r = i(31),
        u = {
            degreeLog: []
        },
        c = (0, a.
    default)({},
        r.GEGREELOG,
        function(e, t) {
            var i = t.data;
            e.degreeLog = i
        });
        t.
    default = {
            state: u,
            mutations: c
        }
    },
    102 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(10),
        a = n(o),
        r = i(31),
        u = {
            tradeData: []
        },
        c = (0, a.
    default)({},
        r.HOME,
        function(e, t) {
            var i = t.data;
            e.tradeData = i
        });
        t.
    default = {
            state: u,
            mutations: c
        }
    },
    103 : function(e, t, i) {
        "use strict";
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, r = i(10),
        u = o(r),
        c = i(31),
        d = n(c),
        l = {
            FileEN: [],
            FileZH: [],
            AppFileZH: [],
            AppFileEN: [],
            TeamFileZH: [],
            TeamFileEN: [],
            TeamFileKO: [],
            TechFileZH: [],
            TechFileEN: [],
            JoinUsFileEN: [],
            JoinUsFileZH: [],
            NewsFileEN: [],
            NewsFileZH: [],
            NewsFileKO: [],
            ontViewEN: [],
            ontViewZH: [],
            ontViewKO: [],
            CooperationEN: [],
            CooperationZH: [],
            CooperationKO: [],
            article: [],
            cooperationsubmit: [],
            TrionesZH: [],
            TrionesEN: [],
            TrionesListZH: [],
            TrionesListEN: [],
            trioneslist: [],
            KYCFAQEN: [],
            KYCFAQZH: [],
            mailverfirst: [],
            getcaptcha: [],
            vercaptcha: [],
            registerindividual: [],
            auditorlogin: [],
            individualList: [],
            individualdetail: [],
            individualverification: [],
            individualfirst: [],
            individualsecondverification: [],
            notpasssearch: [],
            emailsearch: [],
            rownumbesearch: [],
            newslogin: [],
            newsupload: [],
            newslist: [],
            newsdetail: [],
            newsdelete: [],
            newshide: [],
            newsshow: [],
            pageDetail: []
        },
        s = (a = {},
        (0, u.
    default)(a, d.FILEZH,
        function(e, t) {
            var i = t.data;
            e.FileZH = i
        }), (0, u.
    default)(a, d.FILEEN,
        function(e, t) {
            var i = t.data;
            e.FileEN = i
        }), (0, u.
    default)(a, d.APPFILEZH,
        function(e, t) {
            var i = t.data;
            e.AppFileZH = i
        }), (0, u.
    default)(a, d.APPFILEEN,
        function(e, t) {
            var i = t.data;
            e.AppFileEN = i
        }), (0, u.
    default)(a, d.TEAMFILEZH,
        function(e, t) {
            var i = t.data;
            e.TeamFileZH = i
        }), (0, u.
    default)(a, d.TEAMFILEEN,
        function(e, t) {
            var i = t.data;
            e.TeamFileEN = i
        }), (0, u.
    default)(a, d.TEAMFILEKO,
        function(e, t) {
            var i = t.data;
            e.TeamFileKO = i
        }), (0, u.
    default)(a, d.TECHFILEZH,
        function(e, t) {
            var i = t.data;
            e.TechFileZH = i
        }), (0, u.
    default)(a, d.TECHFILEEN,
        function(e, t) {
            var i = t.data;
            e.TechFileEN = i
        }), (0, u.
    default)(a, d.JOINUSFILEZH,
        function(e, t) {
            var i = t.data;
            e.JoinUsFileZH = i
        }), (0, u.
    default)(a, d.JOINUSFILEEN,
        function(e, t) {
            var i = t.data;
            e.JoinUsFileEN = i
        }), (0, u.
    default)(a, d.NEWSFILEEN,
        function(e, t) {
            var i = t.data;
            e.NewsFileEN = i
        }), (0, u.
    default)(a, d.NEWSFILEZH,
        function(e, t) {
            var i = t.data;
            e.NewsFileZH = i
        }), (0, u.
    default)(a, d.NEWSFILEKO,
        function(e, t) {
            var i = t.data;
            e.NewsFileKO = i
        }), (0, u.
    default)(a, d.ARTICLE,
        function(e, t) {
            var i = t.data;
            e.article = i
        }), (0, u.
    default)(a, d.ONTVIEWEN,
        function(e, t) {
            var i = t.data;
            e.ontViewEN = i
        }), (0, u.
    default)(a, d.ONTVIEWZH,
        function(e, t) {
            var i = t.data;
            e.ontViewZH = i
        }), (0, u.
    default)(a, d.ONTVIEWKO,
        function(e, t) {
            var i = t.data;
            e.ontViewKO = i
        }), (0, u.
    default)(a, d.COOPERATIONEN,
        function(e, t) {
            var i = t.data;
            e.CooperationEN = i
        }), (0, u.
    default)(a, d.COOPERATIONZH,
        function(e, t) {
            var i = t.data;
            e.CooperationZH = i
        }), (0, u.
    default)(a, d.COOPERATIONKO,
        function(e, t) {
            var i = t.data;
            e.CooperationKO = i
        }), (0, u.
    default)(a, d.COOPERATIONSUBMIT,
        function(e, t) {
            var i = t.data;
            e.cooperationsubmit = i
        }), (0, u.
    default)(a, d.TRIONESEN,
        function(e, t) {
            var i = t.data;
            e.TrionesEN = i
        }), (0, u.
    default)(a, d.TRIONESZH,
        function(e, t) {
            var i = t.data;
            e.TrionesZH = i
        }), (0, u.
    default)(a, d.TRIONESLISTEN,
        function(e, t) {
            var i = t.data;
            e.TrionesListEN = i
        }), (0, u.
    default)(a, d.TRIONESLISTZH,
        function(e, t) {
            var i = t.data;
            e.TrionesListZH = i
        }), (0, u.
    default)(a, d.TRIONESLIST,
        function(e, t) {
            var i = t.data;
            e.trioneslist = i
        }), (0, u.
    default)(a, d.MAILVERFIRST,
        function(e, t) {
            var i = t.data;
            e.mailverfirst = i
        }), (0, u.
    default)(a, d.GETCAPTCHA,
        function(e, t) {
            var i = t.data;
            e.getcaptcha = i
        }), (0, u.
    default)(a, d.VERCAPTCHA,
        function(e, t) {
            var i = t.data;
            e.vercaptcha = i
        }), (0, u.
    default)(a, d.REGISTERINDIVIDUAL,
        function(e, t) {
            var i = t.data;
            e.registerindividual = i
        }), (0, u.
    default)(a, d.KYCFAQEN,
        function(e, t) {
            var i = t.data;
            e.KYCFAQEN = i
        }), (0, u.
    default)(a, d.KYCFAQZH,
        function(e, t) {
            var i = t.data;
            e.KYCFAQZH = i
        }), (0, u.
    default)(a, d.AUDITORLOGIN,
        function(e, t) {
            var i = t.data;
            e.auditorlogin = i
        }), (0, u.
    default)(a, d.INDIVIDUALLIST,
        function(e, t) {
            var i = t.data;
            e.individualList = i
        }), (0, u.
    default)(a, d.INDIVIDUALDETAIL,
        function(e, t) {
            var i = t.data;
            e.individualdetail = i
        }), (0, u.
    default)(a, d.INDIVIDUALVERIFICATION,
        function(e, t) {
            var i = t.data;
            e.individualverification = i
        }), (0, u.
    default)(a, d.INDIVIDUALFIRST,
        function(e, t) {
            var i = t.data;
            e.individualfirst = i
        }), (0, u.
    default)(a, d.INDIVIDUALSECONDVERIFICATION,
        function(e, t) {
            var i = t.data;
            e.individualsecondverification = i
        }), (0, u.
    default)(a, d.NOTPASSSEARCH,
        function(e, t) {
            var i = t.data;
            e.notpasssearch = i
        }), (0, u.
    default)(a, d.EMAILSEARCH,
        function(e, t) {
            var i = t.data;
            e.emailsearch = i
        }), (0, u.
    default)(a, d.ROWNUMBESEARECH,
        function(e, t) {
            var i = t.data;
            e.rownumbesearch = i
        }), (0, u.
    default)(a, d.NEWSLOGIN,
        function(e, t) {
            var i = t.data;
            e.newslogin = i
        }), (0, u.
    default)(a, d.NEWSUPLOAD,
        function(e, t) {
            var i = t.data;
            e.newsupload = i
        }), (0, u.
    default)(a, d.NEWSLIST,
        function(e, t) {
            var i = t.data;
            e.newslist = i
        }), (0, u.
    default)(a, d.NEWSDETAIL,
        function(e, t) {
            var i = t.data;
            e.newsdetail = i
        }), (0, u.
    default)(a, d.NEWSDELETE,
        function(e, t) {
            var i = t.data;
            e.newsdelete = i
        }), (0, u.
    default)(a, d.NEWSHIDE,
        function(e, t) {
            var i = t.data;
            e.newshide = i
        }), (0, u.
    default)(a, d.NEWSSHOW,
        function(e, t) {
            var i = t.data;
            e.newsshow = i
        }), (0, u.
    default)(a, d.PAGEDETAIL,
        function(e, t) {
            var i = t.data;
            e.pageDetail = i
        }), a);
        t.
    default = {
            state: l,
            mutations: s
        }
    },
    104 : function(e, t, i) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = i(10),
        a = n(o),
        r = i(31),
        u = {
            test: []
        },
        c = (0, a.
    default)({},
        r.TEST,
        function(e, t) {
            var i = t.data;
            e.test = i
        });
        t.
    default = {
            state: u,
            mutations: c
        }
    },
    105 : function(e, t, i) {
        "use strict";
        function n(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t.
        default = e,
            t
        }
        function o(e) {
            return e && e.__esModule ? e: {
            default:
                e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = i(28),
        r = o(a),
        u = i(4),
        c = o(u),
        d = i(98),
        l = n(d),
        s = i(99),
        f = n(s),
        E = i(104),
        v = o(E),
        N = i(102),
        m = o(N),
        I = i(103),
        p = o(I),
        T = i(100),
        R = o(T),
        F = i(101),
        O = o(F),
        A = !1;
        r.
    default.use(c.
    default),
        r.
    default.config.debug = A,
        t.
    default = new c.
    default.Store({
            modules:
            {
                test:
                v.
            default,
                home: m.
            default,
                main: p.
            default,
                degreeCz: R.
            default,
                degreeCzLog: O.
            default
            },
            actions: l,
            getters: f
        })
    },
    186 : function(e, t) {
        e.exports = {
            render: function() {
                var e = this,
                t = e.$createElement,
                i = e._self._c || t;
                return i("transition", {
                    attrs: {
                        name: "router-fade",
                        mode: "out-in"
                    }
                },
                [i("router-view")], 1)
            },
            staticRenderFns: []
        }
    },
    199 : function(e, t) {}
});