/**************************************************************************
 *	@name		    Zozo UI Accordion
 *	@descripton	    Create awesome accordion
 *	@version	    4.4
 *   @requires       jQuery v1.7 or later
 *	@copyright      Copyright (c) 2013 Zozo UI
 *   @author         Zozo UI
 *   @URL:           http://www.zozoui.com
 **************************************************************************/
;;
(function(_0x90d2x0) {
    (jQuery["browser"] = jQuery["browser"] || {})["mobile"] = /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i ["test"](_0x90d2x0) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i ["test"](_0x90d2x0["substr"](0, 4));
})(navigator["userAgent"] || navigator["vendor"] || window["opera"]);;;
(function(_0x90d2x1, _0x90d2x2, _0x90d2x3, _0x90d2x4) {
    if (!_0x90d2x2["console"]) {
        _0x90d2x2["console"] = {};
    };
    if (!_0x90d2x2["console"]["log"]) {
        _0x90d2x2["console"]["log"] = function() {};
    };
    _0x90d2x1["fn"]["extend"]({
        hasClasses: function(_0x90d2x5) {
            var _0x90d2x6 = this;
            for (i in _0x90d2x5) {
                if (_0x90d2x1(_0x90d2x6)["hasClass"](_0x90d2x5[i])) {
                    return true;
                };
            };
            return false;
        }
    });
    _0x90d2x1["zozo"] = {};
    _0x90d2x1["zozo"]["core"] = {};
    _0x90d2x1["zozo"]["core"]["console"] = {
        debug: false,
        log: function(_0x90d2x7) {
            if (_0x90d2x1("#zozo-console")["length"] != 0) {
                _0x90d2x1("\x3Cdiv/\x3E")["css"]({
                    marginTop: -24
                })["html"](_0x90d2x7)["prependTo"]("#zozo-console")["animate"]({
                    marginTop: 0
                }, 300)["animate"]({
                    backgroundColor: "#ffffff"
                }, 800);
            } else {
                if (console && this["debug"] === true) {
                    console["log"](_0x90d2x7);
                };
            };
        }
    };
    _0x90d2x1["zozo"]["core"]["content"] = {
        debug: false,
        video: function(_0x90d2x8) {
            if (_0x90d2x8) {
                _0x90d2x8["find"]("iframe")["each"](function() {
                    var _0x90d2x9 = _0x90d2x1(this)["attr"]("src");
                    var _0x90d2xa = "wmode=transparent";
                    if (_0x90d2x9 && _0x90d2x9["indexOf"](_0x90d2xa) === -1) {
                        if (_0x90d2x9["indexOf"]("?") != -1) {
                            _0x90d2x1(this)["attr"]("src", _0x90d2x9 + "\x26" + _0x90d2xa);
                        } else {
                            _0x90d2x1(this)["attr"]("src", _0x90d2x9 + "?" + _0x90d2xa);
                        };
                    };
                });
            };
        },
        check: function(_0x90d2x8) {
            this["video"](_0x90d2x8);
        }
    };
    _0x90d2x1["zozo"]["core"]["keyCodes"] = {
        tab: 9,
        enter: 13,
        esc: 27,
        space: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
        left: 37,
        up: 38,
        right: 39,
        down: 40
    };
    _0x90d2x1["zozo"]["core"]["debug"] = {
        startTime: new Date(),
        log: function(_0x90d2xb) {
            if (console) {
                console["log"](_0x90d2xb);
            };
        },
        start: function() {
            this["startTime"] = +new Date();
            this["log"]("start: " + this["startTime"]);
        },
        stop: function() {
            var _0x90d2xc = +new Date();
            var _0x90d2xd = _0x90d2xc - this["startTime"];
            this["log"]("end: " + _0x90d2xc);
            this["log"]("diff: " + _0x90d2xd);
            var _0x90d2xe = _0x90d2xd / 1000;
            var _0x90d2xf = Math["abs"](_0x90d2xe);
        }
    };
    _0x90d2x1["zozo"]["core"]["support"] = {
        is_mouse_present: function() {
            return (("onmousedown" in _0x90d2x2) && ("onmouseup" in _0x90d2x2) && ("onmousemove" in _0x90d2x2) && ("onclick" in _0x90d2x2) && ("ondblclick" in _0x90d2x2) && ("onmousemove" in _0x90d2x2) && ("onmouseover" in _0x90d2x2) && ("onmouseout" in _0x90d2x2) && ("oncontextmenu" in _0x90d2x2));
        },
        is_touch_device: function() {
            return (("ontouchstart" in _0x90d2x2) || (navigator["maxTouchPoints"] > 0) || (navigator["msMaxTouchPoints"] > 0)) && (jQuery["browser"]["mobile"]);
        },
        html5_storage: function() {
            try {
                return "localStorage" in _0x90d2x2 && _0x90d2x2["localStorage"] !== null;
            } catch (e) {
                return false;
            };
        },
        supportsCss: (function() {
            var _0x90d2x10 = _0x90d2x3["createElement"]("div"),
                _0x90d2x11 = "khtml ms o moz webkit" ["split"](" "),
                _0x90d2x12 = false;
            return function(_0x90d2x13) {
                (_0x90d2x13 in _0x90d2x10["style"]) && (_0x90d2x12 = _0x90d2x13);
                var _0x90d2x14 = _0x90d2x13["replace"](/^[a-z]/, function(_0x90d2x15) {
                    return _0x90d2x15["toUpperCase"]();
                });
                _0x90d2x1["each"](_0x90d2x11, function(_0x90d2x16, _0x90d2x17) {
                    (_0x90d2x17 + _0x90d2x14 in _0x90d2x10["style"]) && (_0x90d2x12 = "-" + _0x90d2x17 + "-" + _0x90d2x13);
                });
                return _0x90d2x12;
            };
        })(),
        css: {
            transition: false
        }
    };
    _0x90d2x1["zozo"]["core"]["utils"] = {
        toArray: function(_0x90d2x18) {
            return _0x90d2x1["map"](_0x90d2x18, function(_0x90d2x17, _0x90d2x19) {
                return _0x90d2x17;
            });
        },
        createHeader: function(_0x90d2x1a, _0x90d2x1b) {
            var _0x90d2x1c = _0x90d2x1("\x3Cli\x3E\x3Ca\x3E" + _0x90d2x1a + "\x3C/a\x3E\x3C/li\x3E");
            var _0x90d2x8 = _0x90d2x1("\x3Cdiv\x3E" + _0x90d2x1b + "\x3C/div\x3E");
            return {
                tab: _0x90d2x1c,
                content: _0x90d2x8
            };
        },
        isEmpty: function(_0x90d2x1d) {
            return (!_0x90d2x1d || 0 === _0x90d2x1d["length"]);
        },
        isNumber: function(_0x90d2x1e) {
            return typeof _0x90d2x1e === "number" && isFinite(_0x90d2x1e);
        },
        isEven: function(_0x90d2x1f) {
            return _0x90d2x1f % 2 === 0;
        },
        isOdd: function(_0x90d2x1e) {
            return !(_number % 2 === 0);
        },
        animate: function(_0x90d2x6, _0x90d2x20, _0x90d2x21, _0x90d2x22, _0x90d2x23, _0x90d2x24) {
            var _0x90d2x25 = (_0x90d2x6["settings"]["animation"]["effects"] === "none") ? 0 : _0x90d2x6["settings"]["animation"]["duration"];
            var _0x90d2x26 = _0x90d2x6["settings"]["animation"]["easing"];
            var _0x90d2x27 = _0x90d2x1["zozo"]["core"]["support"]["css"]["transition"];
            if (_0x90d2x20 && _0x90d2x22) {
                if (_0x90d2x21) {
                    _0x90d2x20["css"](_0x90d2x21);
                };
                var _0x90d2x28 = _0x90d2x20["css"]("left");
                var _0x90d2x29 = _0x90d2x20["css"]("top");
                if (_0x90d2x6["settings"]["animation"]["type"] === "css") {
                    _0x90d2x22[_0x90d2x27] = "all " + _0x90d2x25 + "ms ease-in-out";
                    setTimeout(function() {
                        _0x90d2x20["css"](_0x90d2x22);
                    });
                    setTimeout(function() {
                        if (_0x90d2x23) {
                            _0x90d2x20["css"](_0x90d2x23);
                        };
                        _0x90d2x20["css"](_0x90d2x27, "");
                    }, _0x90d2x25);
                } else {
                    _0x90d2x20["animate"](_0x90d2x22, {
                        duration: _0x90d2x25,
                        easing: _0x90d2x26,
                        complete: function() {
                            if (_0x90d2x23) {
                                _0x90d2x20["css"](_0x90d2x23);
                            };
                            if (_0x90d2x24) {
                                _0x90d2x20["hide"]();
                            };
                        }
                    });
                };
            };
            return _0x90d2x6;
        }
    };
    _0x90d2x1["zozo"]["core"]["plugins"] = {
        easing: function(_0x90d2x6) {
            var _0x90d2x2a = false;
            if (_0x90d2x6) {
                if (_0x90d2x6["settings"]) {
                    var _0x90d2x2b = "swing";
                    if (_0x90d2x1["easing"]["def"]) {
                        _0x90d2x2a = true;
                    } else {
                        if (_0x90d2x6["settings"]["animation"]["easing"] != "swing" && _0x90d2x6["settings"]["animation"]["easing"] != "linear") {
                            _0x90d2x6["settings"]["animation"]["easing"] = _0x90d2x2b;
                        };
                    };
                };
            };
            return _0x90d2x2a;
        }
    };
    _0x90d2x1["zozo"]["core"]["browser"] = {
        init: function() {
            this["browser"] = this["searchString"](this["dataBrowser"]) || "An unknown browser";
            this["version"] = this["searchVersion"](navigator["userAgent"]) || this["searchVersion"](navigator["appVersion"]) || "an unknown version";
            _0x90d2x1["zozo"]["core"]["console"]["log"]("init: " + this["browser"] + " : " + this["version"]);
            if (this["browser"] === "Explorer") {
                var _0x90d2x2c = _0x90d2x1("html");
                var _0x90d2x2d = parseInt(this["version"]);
                if (_0x90d2x2d === 6) {
                    _0x90d2x2c["addClass"]("ie ie7");
                } else {
                    if (_0x90d2x2d === 7) {
                        _0x90d2x2c["addClass"]("ie ie7");
                    } else {
                        if (_0x90d2x2d === 8) {
                            _0x90d2x2c["addClass"]("ie ie8");
                        } else {
                            if (_0x90d2x2d === 9) {
                                _0x90d2x2c["addClass"]("ie ie9");
                            };
                        };
                    };
                };
            };
        },
        isIE: function(_0x90d2x2e) {
            if (_0x90d2x1["zozo"]["core"]["utils"]["isNumber"](_0x90d2x2e)) {
                return (this["browser"] === "Explorer" && this["version"] <= _0x90d2x2e);
            } else {
                return (this["browser"] === "Explorer");
            };
        },
        isChrome: function(_0x90d2x2e) {
            if (_0x90d2x1["zozo"]["core"]["utils"]["isNumber"](_0x90d2x2e)) {
                return (this["browser"] === "Chrome" && this["version"] <= _0x90d2x2e);
            } else {
                return (this["browser"] === "Chrome");
            };
        },
        searchString: function(_0x90d2x2f) {
            for (var _0x90d2x30 = 0; _0x90d2x30 < _0x90d2x2f["length"]; _0x90d2x30++) {
                var _0x90d2x31 = _0x90d2x2f[_0x90d2x30]["string"];
                var _0x90d2x32 = _0x90d2x2f[_0x90d2x30]["prop"];
                this["versionSearchString"] = _0x90d2x2f[_0x90d2x30]["versionSearch"] || _0x90d2x2f[_0x90d2x30]["identity"];
                if (_0x90d2x31) {
                    if (_0x90d2x31["indexOf"](_0x90d2x2f[_0x90d2x30]["subString"]) != -1) {
                        return _0x90d2x2f[_0x90d2x30]["identity"];
                    };
                } else {
                    if (_0x90d2x32) {
                        return _0x90d2x2f[_0x90d2x30]["identity"];
                    };
                };
            };
        },
        searchVersion: function(_0x90d2x31) {
            var _0x90d2x16 = _0x90d2x31["indexOf"](this["versionSearchString"]);
            if (_0x90d2x16 == -1) {
                return;
            };
            return parseFloat(_0x90d2x31["substring"](_0x90d2x16 + this["versionSearchString"]["length"] + 1));
        },
        dataBrowser: [{
            string: navigator["userAgent"],
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator["vendor"],
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: _0x90d2x2["opera"],
            identity: "Opera"
        }, {
            string: navigator["userAgent"],
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator["userAgent"],
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }]
    };
    _0x90d2x1["zozo"]["core"]["hashHelper"] = {
        mode: "single",
        separator: null,
        all: function(_0x90d2x33) {
            var _0x90d2x34 = [];
            var _0x90d2x35 = _0x90d2x3["location"]["hash"];
            if (!this["hasHash"]()) {
                return _0x90d2x34;
            };
            if (this["isSimple"](_0x90d2x33)) {
                return _0x90d2x35["substring"](1);
            } else {
                _0x90d2x35 = _0x90d2x35["substring"](1)["split"]("\x26");
                for (var _0x90d2x30 = 0; _0x90d2x30 < _0x90d2x35["length"]; _0x90d2x30++) {
                    var _0x90d2x36 = _0x90d2x35[_0x90d2x30]["split"](_0x90d2x33);
                    if (_0x90d2x36["length"] != 2 || _0x90d2x36[0] in _0x90d2x34) {
                        _0x90d2x36[1] = "none";
                    };
                    _0x90d2x34[_0x90d2x36[0]] = _0x90d2x36[1];
                };
            };
            return _0x90d2x34;
        },
        get: function(_0x90d2x19, _0x90d2x33) {
            var _0x90d2x37 = this["all"](_0x90d2x33);
            if (this["isSimple"](_0x90d2x33)) {
                return _0x90d2x37;
            } else {
                if (typeof _0x90d2x37 === "undefined" || typeof _0x90d2x37["length"] < 0) {
                    return null;
                } else {
                    if (typeof _0x90d2x37[_0x90d2x19] !== "undefined" && _0x90d2x37[_0x90d2x19] !== null) {
                        return _0x90d2x37[_0x90d2x19];
                    } else {
                        return null;
                    };
                };
            };
        },
        set: function(_0x90d2x19, _0x90d2x17, _0x90d2x33, _0x90d2x38) {
            if (this["isSimple"](_0x90d2x33)) {
                _0x90d2x3["location"]["hash"] = _0x90d2x17;
            } else {
                if (_0x90d2x38 === "multiple") {
                    var _0x90d2x37 = this["all"](_0x90d2x33);
                    var _0x90d2x35 = [];
                    _0x90d2x37[_0x90d2x19] = _0x90d2x17;
                    for (var _0x90d2x19 in _0x90d2x37) {
                        _0x90d2x35["push"](_0x90d2x19 + _0x90d2x33 + _0x90d2x37[_0x90d2x19]);
                    };
                    _0x90d2x3["location"]["hash"] = _0x90d2x35["join"]("\x26");
                } else {
                    _0x90d2x3["location"]["hash"] = _0x90d2x19 + _0x90d2x33 + _0x90d2x17;
                };
            };
        },
        isSimple: function(_0x90d2x33) {
            if (!_0x90d2x33 || _0x90d2x33 === "none") {
                return true;
            } else {
                return false;
            };
        },
        hasHash: function() {
            var _0x90d2x35 = _0x90d2x3["location"]["hash"];
            if (_0x90d2x35["length"] > 0) {
                return true;
            } else {
                return false;
            };
        }
    };
    _0x90d2x1["zozo"]["core"]["support"]["css"]["transition"] = _0x90d2x1["zozo"]["core"]["support"]["supportsCss"]("transition");
    _0x90d2x1["zozo"]["core"]["browser"]["init"]();
})(jQuery, window, document);;;
(function(_0x90d2x1, _0x90d2x2, _0x90d2x3, _0x90d2x4) {
    var _0x90d2x39 = function(_0x90d2x3a, _0x90d2x3b) {
        this["elem"] = _0x90d2x3a;
        this["$elem"] = _0x90d2x1(_0x90d2x3a);
        this["options"] = _0x90d2x3b;
        this["metadata"] = (this["$elem"]["data"]("options")) ? this["$elem"]["data"]("options") : {};
        this["attrdata"] = (this["$elem"]["data"]()) ? this["$elem"]["data"]() : {};
        this["elemID"];
        this["$sections"];
        this["sectionCount"];
        this["$container"];
        this["$contents"];
        this["autoplayIntervalId"];
        this["resizeWindowIntervalId"];
        this["currentsection"];
        this["browser"] = _0x90d2x1["zozo"]["core"]["browser"];
        this["responsive"];
        this["lastWindowHeight"];
        this["lastWindowWidth"];
    };
    if (_0x90d2x2["zozo"] == null) {
        _0x90d2x2["zozo"] = {};
    };
    var _0x90d2x3c = {
            pluginName: "zozoAccordion",
            elementSpacer: "\x3Cspan class=\x27z-tab-spacer\x27 style=\x27clear: both;display: block;\x27\x3E\x3C/span\x3E",
            commaRegExp: /,/g,
            headerTitle: "\x3Cspan class=\x27z-title\x27\x3EIllustrations\x3C/span\x3E",
            headerArrow: "\x3Cspan class=\x27z-arrow\x27\x3E\x3Ci class=\x27icon-chevron-down\x27\x3E\x3C/i\x3E\x3C/span\x3E",
            space: " ",
            responsive: {
                largeDesktop: 1200,
                desktop: 960,
                tablet: 720,
                phone: "auto"
            },
            animation: {
                effects: {
                    fade: "fade",
                    none: "none"
                },
                types: {
                    css: "css",
                    jquery: "jquery"
                }
            },
            expandModes: {
                single: "single",
                multiple: "multiple"
            },
            events: {
                click: "click",
                mousover: "mouseover",
                mouseenter: "mouseenter",
                mouseleave: "mouseleave",
                touchend: "touchend",
                touchstart: "touchstart",
                touchmove: "touchmove"
            },
            classes: {
                prefix: "z-",
                wrapper: "z-accordion",
                section: "z-section",
                first: "z-first",
                last: "z-last",
                active: "z-active",
                link: "z-header",
                focus: "z-focus",
                container: "z-container",
                content: "z-content",
                shadows: "z-shadows",
                bordered: "z-bordered",
                rounded: "z-rounded",
                scrollable: "z-scrollable",
                autoClass: "z-auto-g",
                themes: {
                    gray: "gray",
                    black: "black",
                    blue: "blue",
                    white: "white",
                    lightblue: "lightblue",
                    deepblue: "deepblue",
                    crystal: "crystal",
                    green: "green",
                    yellow: "yellow",
                    purple: "purple",
                    silver: "silver",
                    red: "red",
                    orange: "orange",
                    clean: "clean2"
                },
                orientations: {
                    vertical: "vertical",
                    horizontal: "horizontal"
                },
                groups: {
                    grouped: "z-grouped",
                    ungrouped: "z-ungrouped"
                }
            }
        },
        _0x90d2x3d = "px",
        _0x90d2x3e = ".z-header",
        _0x90d2x3f = ".z-arrow",
        _0x90d2x40 = "error",
        _0x90d2x41 = ".z-dot-nav",
        _0x90d2x42 = "select",
        _0x90d2x43 = ".z-content",
        _0x90d2x44 = "expand",
        _0x90d2x45 = "activate",
        _0x90d2x46 = "\x3E " + _0x90d2x43,
        _0x90d2x47 = "\x3E *",
        _0x90d2x48 = "\x3E *:first-child",
        _0x90d2x49 = "\x3E *:last-child",
        _0x90d2x4a = "contentUrl",
        _0x90d2x4b = "contentLoad",
        _0x90d2x4c = "z-dot-nav",
        _0x90d2x4d = "z-mobile",
        _0x90d2x4e = "z-active",
        _0x90d2x4f = "disabled",
        _0x90d2x50 = "z-disabled",
        _0x90d2x51 = "z-loading",
        _0x90d2x52 = "z-spinner",
        _0x90d2x53 = "z-dot-nav-item",
        _0x90d2x54 = "z-slider-wrapper",
        _0x90d2x55 = "z-sub-nav",
        _0x90d2x56 = "\x3E ." + _0x90d2x55,
        _0x90d2x57 = "z-content-nav",
        _0x90d2x58 = _0x90d2x41 + " span." + _0x90d2x53,
        _0x90d2x59 = _0x90d2x41 + " ." + _0x90d2x4e;
    _0x90d2x39["prototype"] = {
        defaults: {
            animation: {
                duration: 400,
                effects: "fadeIn",
                easing: "easeOutQuart",
                type: _0x90d2x3c["animation"]["types"]["jquery"]
            },
            autoplay: {
                interval: 0,
                smart: true
            },
            active: false,
            activate: function() {},
            bordered: true,
            cacheAjax: true,
            contentHeight: 0,
            contentLoad: function() {},
            contentSpacing: 0,
            contentUrls: null,
            contentWidth: 715,
            dotNav: false,
            contentNav: false,
            headerFontSize: 1.5,
            event: _0x90d2x3c["events"]["click"],
            error: function() {},
            expand: function() {},
            expandAfter: false,
            expandMode: _0x90d2x3c["expandModes"]["single"],
            grouped: true,
            headerSize: 40,
            headerTag: "h3",
            height: 320,
            hideHeaders: false,
            iconStateClose: null,
            iconStateOpen: null,
            keyboard: false,
            minContentWidth: 0,
            minWidth: 480,
            minWindowWidth: 720,
            orientation: _0x90d2x3c["classes"]["orientations"]["vertical"],
            original: {
                width: 0,
                height: 0,
                headerSize: 0,
                headerFontSize: 0,
                sectionSpacing: 0,
                orientation: null
            },
            responsive: false,
            responsiveDelay: 100,
            rounded: false,
            rememberState: false,
            sectionTag: "section",
            scrollable: false,
            shadows: true,
            showIcons: true,
            slider: false,
            sectionSpacing: 0,
            theme: _0x90d2x3c["classes"]["themes"]["silver"],
            urlBased: false,
            horizontal: {
                headerSize: 40,
                headerFontSize: 1.1,
                sectionSpacing: 8
            },
            vertical: {
                headerSize: 38,
                headerFontSize: 1.1,
                sectionSpacing: 0
            },
            select: function() {},
            width: 960
        },
        init: function() {
            var _0x90d2x6 = this;
            _0x90d2x6["settings"] = _0x90d2x1["extend"](true, {}, _0x90d2x6["defaults"], _0x90d2x6["options"], _0x90d2x6["metadata"], _0x90d2x6["attrdata"]);
            _0x90d2x68["hideLoading"](_0x90d2x6);
            _0x90d2x6["currentsection"] = _0x90d2x6["settings"]["active"];
            _0x90d2x6["settings"]["original"]["width"] = _0x90d2x6["settings"]["width"];
            _0x90d2x6["settings"]["original"]["height"] = _0x90d2x6["settings"]["height"];
            _0x90d2x6["settings"]["original"]["headerSize"] = _0x90d2x6["settings"]["headerSize"];
            _0x90d2x6["settings"]["original"]["orientation"] = _0x90d2x6["settings"]["orientation"];
            _0x90d2x6["settings"]["original"]["headerFontSize"] = _0x90d2x6["settings"]["headerFontSize"];
            _0x90d2x6["settings"]["original"]["sectionSpacing"] = _0x90d2x6["settings"]["sectionSpacing"];
            if (_0x90d2x6["settings"]["original"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["vertical"]) {
                _0x90d2x6["settings"]["vertical"]["headerSize"] = _0x90d2x6["settings"]["original"]["headerSize"];
            };
            if ((_0x90d2x6["settings"]["animation"]["type"] === _0x90d2x3c["animation"]["types"]["css"] && _0x90d2x1["zozo"]["core"]["support"]["transition"]) || jQuery["browser"]["mobile"]) {};
            if (_0x90d2x6["settings"]["slider"] === true) {
                if (!_0x90d2x6["$elem"]["parent"]()["hasClass"](_0x90d2x54)) {
                    _0x90d2x6["$elem"]["wrap"]("\x3Cdiv class=\x27" + _0x90d2x54 + "\x27\x3E\x3C/div\x3E");
                };
                if (_0x90d2x6["settings"]["dotNav"] === true && _0x90d2x6["settings"]["slider"] === true) {
                    _0x90d2x6["$sections"] = _0x90d2x6["$elem"]["find"](_0x90d2x47);
                    var _0x90d2x5a = _0x90d2x1("\x3Cdiv class=\x27" + _0x90d2x4c + "\x27\x3E\x3C/div\x3E");
                    _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                        _0x90d2x5a["append"](_0x90d2x1("\x3Cspan class=\x27" + _0x90d2x53 + "\x27\x3E\x3C/span\x3E"));
                    });
                    _0x90d2x6["$elem"]["parent"]()["append"](_0x90d2x5a);
                };
            };
            _0x90d2x1["zozo"]["core"]["plugins"]["easing"](_0x90d2x6);
            _0x90d2x68["updateClasses"](_0x90d2x6);
            _0x90d2x68["bindEvents"](_0x90d2x6);
            if (_0x90d2x6["settings"]["contentUrls"] != null) {
                _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                    _0x90d2x1(_0x90d2x5b)["find"]("." + _0x90d2x3c["classes"]["link"])["data"](_0x90d2x4a, _0x90d2x6["settings"]["contentUrls"][_0x90d2x16]);
                });
            };
            if (_0x90d2x6["settings"]["responsive"] === true && _0x90d2x6["settings"]["original"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["horizontal"]) {
                _0x90d2x68["checkWidth"](_0x90d2x6);
            } else {
                _0x90d2x68["loadState"](_0x90d2x6);
                var _0x90d2x5c = _0x90d2x6["settings"]["active"];
                if (_0x90d2x6["settings"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["vertical"]) {
                    if (_0x90d2x1["isArray"](_0x90d2x5c)) {
                        _0x90d2x6["settings"]["expandMode"] = _0x90d2x3c["expandModes"]["multiple"];
                        var _0x90d2x5d = _0x90d2x5c["length"];
                        for (var _0x90d2x30 = 0; _0x90d2x30 < _0x90d2x5d; _0x90d2x30++) {
                            _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x5c[_0x90d2x30]);
                            _0x90d2x6["settings"]["active"] = _0x90d2x5c[_0x90d2x30];
                        };
                    } else {
                        _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x5c);
                    };
                } else {
                    _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x5c);
                };
            };
            _0x90d2x68["initAutoPlay"](_0x90d2x6);
            return _0x90d2x6;
        },
        setOptions: function(_0x90d2x5e, _0x90d2x5f) {
            var _0x90d2x6 = this;
            _0x90d2x6["settings"]["active"] = _0x90d2x6["currentsection"];
            _0x90d2x6["settings"] = _0x90d2x1["extend"](true, _0x90d2x6["settings"], _0x90d2x5e);
            _0x90d2x68["updateClasses"](_0x90d2x6, true);
            _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x6["settings"]["active"]);
            _0x90d2x68["initAutoPlay"](_0x90d2x6);
            return _0x90d2x6;
        },
        add: function(_0x90d2x1a, _0x90d2x1b, _0x90d2x60) {
            var _0x90d2x6 = this;
            var _0x90d2x61 = _0x90d2x68["create"](_0x90d2x6, _0x90d2x1a, _0x90d2x1b);
            _0x90d2x61["appendTo"](_0x90d2x6.$elem);
            _0x90d2x68["updateClasses"](_0x90d2x6);
            _0x90d2x68["bindEvent"](_0x90d2x6, _0x90d2x61["find"](_0x90d2x48));
            return _0x90d2x6;
        },
        remove: function(_0x90d2x62) {
            var _0x90d2x6 = this;
            var _0x90d2x61 = _0x90d2x6["$sections"]["eq"](_0x90d2x62);
            _0x90d2x61["fadeOut"](300, function() {
                _0x90d2x1(this)["remove"]();
                _0x90d2x68["updateClasses"](_0x90d2x6);
            });
            return _0x90d2x6;
        },
        select: function(_0x90d2x62) {
            var _0x90d2x6 = this;
            _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x62);
            return _0x90d2x6;
        },
        enable: function(_0x90d2x62) {
            var _0x90d2x6 = this;
            var _0x90d2x63 = _0x90d2x6["$sections"]["eq"](_0x90d2x62);
            if (_0x90d2x63["length"]) {
                _0x90d2x63["removeClass"](_0x90d2x50);
                _0x90d2x63["data"](_0x90d2x4f, false);
            };
            return _0x90d2x6;
        },
        disable: function(_0x90d2x62) {
            var _0x90d2x6 = this;
            var _0x90d2x64 = _0x90d2x6["$sections"]["eq"](_0x90d2x62);
            if (_0x90d2x64["length"]) {
                _0x90d2x64["addClass"](_0x90d2x50);
                _0x90d2x64["data"](_0x90d2x4f, true);
            };
            return _0x90d2x6;
        },
        destroy: function() {
            var _0x90d2x6 = this;
            _0x90d2x68["resetClasses"](_0x90d2x6);
        },
        first: function() {
            var _0x90d2x6 = this;
            _0x90d2x6["select"](_0x90d2x68["getFirst"](_0x90d2x6));
            return _0x90d2x6;
        },
        prev: function() {
            var _0x90d2x6 = this;
            var _0x90d2x65 = parseInt(_0x90d2x6["currentsection"]);
            if (_0x90d2x65 <= _0x90d2x68["getFirst"](_0x90d2x6)) {
                _0x90d2x6["select"](_0x90d2x68["getLast"](_0x90d2x6));
            } else {
                _0x90d2x6["select"](_0x90d2x65 - 1);
            };
            return _0x90d2x6;
        },
        next: function(_0x90d2x6) {
            _0x90d2x6 = (_0x90d2x6) ? _0x90d2x6 : this;
            var _0x90d2x65 = parseInt(_0x90d2x6["currentsection"]);
            var _0x90d2x66 = _0x90d2x68["getLast"](_0x90d2x6);
            if (_0x90d2x65 >= _0x90d2x66) {
                _0x90d2x6["select"](_0x90d2x68["getFirst"](_0x90d2x6));
            } else {
                _0x90d2x6["select"](_0x90d2x65 + 1);
            };
            return _0x90d2x6;
        },
        last: function() {
            var _0x90d2x6 = this;
            _0x90d2x6["select"](_0x90d2x68["getLast"](_0x90d2x6));
            return _0x90d2x6;
        },
        play: function(_0x90d2x67) {
            var _0x90d2x6 = this;
            if (_0x90d2x67 == null || _0x90d2x67 < 0) {
                _0x90d2x67 = 2000;
            };
            _0x90d2x6["settings"]["autoplay"]["interval"] = _0x90d2x67;
            _0x90d2x6["stop"]();
            _0x90d2x6["autoplayIntervalId"] = setInterval(function() {
                _0x90d2x6["next"](_0x90d2x6);
            }, _0x90d2x6["settings"]["autoplay"]["interval"]);
            return _0x90d2x6;
        },
        stop: function(_0x90d2x6) {
            _0x90d2x6 = (_0x90d2x6) ? _0x90d2x6 : this;
            clearInterval(_0x90d2x6["autoplayIntervalId"]);
            return _0x90d2x6;
        },
        expandAll: function(_0x90d2x6) {
            _0x90d2x6 = (_0x90d2x6) ? _0x90d2x6 : this;
            return _0x90d2x6;
        },
        collapseAll: function(_0x90d2x6) {
            _0x90d2x6 = (_0x90d2x6) ? _0x90d2x6 : this;
            return _0x90d2x6;
        },
        refresh: function() {
            var _0x90d2x6 = this;
            _0x90d2x68["checkWidth"](_0x90d2x6);
            return _0x90d2x6;
        }
    };
    var _0x90d2x68 = {
        resetClasses: function(_0x90d2x6) {
            _0x90d2x6["$elem"]["find"]("*")["stop"](true, true);
            _0x90d2x6["elemID"] = _0x90d2x6["$elem"]["attr"]("id");
            _0x90d2x6["$sections"] = _0x90d2x6["$elem"]["find"](_0x90d2x47);
            _0x90d2x6["sectionCount"] = _0x90d2x6["$sections"]["length"];
            _0x90d2x6["settings"]["contentWidth"] = _0x90d2x6["settings"]["width"] - (_0x90d2x6["sectionCount"] * (_0x90d2x6["settings"]["headerSize"] + _0x90d2x6["settings"]["sectionSpacing"]));
            _0x90d2x6["$elem"]["attr"]("role", "tablist")["removeClass"](_0x90d2x3c["classes"]["wrapper"])["addClass"](_0x90d2x3c["classes"]["wrapper"])["removeClass"](_0x90d2x3c["classes"]["orientations"]["vertical"])["removeClass"](_0x90d2x3c["classes"]["orientations"]["horizontal"])["removeClass"](_0x90d2x3c["classes"]["groups"]["grouped"])["removeClass"](_0x90d2x3c["classes"]["groups"]["ungrouped"])["addClass"](_0x90d2x6["settings"]["orientation"])["removeClass"](_0x90d2x3c["classes"]["rounded"])["removeClass"](_0x90d2x3c["classes"]["shadows"])["removeClass"](_0x90d2x3c["classes"]["bordered"])["parents"]("." + _0x90d2x54)["css"]({
                "width": "",
                padding: ""
            });
            _0x90d2x6["$elem"]["css"]({
                width: "",
                height: ""
            });
            _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                var _0x90d2x61 = _0x90d2x1(_0x90d2x5b);
                _0x90d2x61["removeClass"](_0x90d2x3c["classes"]["first"])["removeClass"](_0x90d2x3c["classes"]["last"])["removeClass"](_0x90d2x3c["classes"]["active"])["addClass"](_0x90d2x3c["classes"]["section"])["css"]({
                    margin: "none"
                });
                _0x90d2x61["css"]({
                    left: "",
                    width: "",
                    margin: ""
                });
                _0x90d2x61["find"](_0x90d2x48)["css"]({
                    width: "",
                    height: "",
                    lineHeight: ""
                })["find"]("span")["css"]({
                    width: "",
                    height: "",
                    lineHeight: ""
                });
                _0x90d2x61["find"](_0x90d2x49)["css"]({
                    height: "",
                    maxHeight: "",
                    width: "",
                    left: "",
                    display: "",
                    margin: "",
                    padding: ""
                })["find"]("\x3E div")["css"]({
                    height: "",
                    width: "",
                    left: "",
                    display: "",
                    margin: "",
                    padding: ""
                });
            });
            return _0x90d2x6;
        },
        updateClasses: function(_0x90d2x6, _0x90d2x69) {
            _0x90d2x68["resetClasses"](_0x90d2x6, _0x90d2x69);
            _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                var _0x90d2x61 = _0x90d2x1(_0x90d2x5b);
                var _0x90d2x6a = _0x90d2x61["find"](_0x90d2x48);
                var _0x90d2x6b = _0x90d2x6a["html"]();
                var _0x90d2x6c = _0x90d2x61["find"](_0x90d2x49);
                var _0x90d2x6d = (_0x90d2x6["settings"]["showIcons"] === true) ? "\x3Cspan class=\x27z-arrow\x27 style=\x27top:none\x27\x3E\x3C/span\x3E" : "";
                if (!_0x90d2x6a["find"]("\x3E span.z-title")["length"]) {
                    _0x90d2x6a["text"]("")["append"]("\x3Cspan class=\x27z-title\x27\x3E" + _0x90d2x1["trim"](_0x90d2x6b) + "\x3C/span\x3E" + _0x90d2x6d)["addClass"](_0x90d2x3c["classes"]["link"]);
                };
                if (_0x90d2x68["isTabDisabled"](_0x90d2x61)) {
                    _0x90d2x6["disable"](_0x90d2x16);
                };
                _0x90d2x6c["addClass"](_0x90d2x3c["classes"]["content"]);
            });
            _0x90d2x68["setContentSize"](_0x90d2x6);
            _0x90d2x6["$sections"]["filter"](_0x90d2x3c["classes"]["first"] + ":not(:first-child)")["removeClass"](_0x90d2x3c["classes"]["first"]);
            _0x90d2x6["$sections"]["filter"](_0x90d2x3c["classes"]["last"] + ":not(:last-child)")["removeClass"](_0x90d2x3c["classes"]["last"]);
            _0x90d2x6["$sections"]["filter"](":first-child")["addClass"](_0x90d2x3c["classes"]["first"])["find"](_0x90d2x48)["attr"]("tabindex", "0")["attr"]("accesskey", "w");
            _0x90d2x6["$sections"]["filter"](":last-child")["addClass"](_0x90d2x3c["classes"]["last"]);
            var _0x90d2x6e = _0x90d2x1["zozo"]["core"]["utils"]["toArray"](_0x90d2x3c["classes"]["themes"]);
            if (!_0x90d2x1["zozo"]["core"]["utils"]["isEmpty"](_0x90d2x6["settings"]["theme"])) {
                _0x90d2x6["$elem"]["removeClass"](_0x90d2x6e["join"]()["replace"](_0x90d2x3c["commaRegExp"], _0x90d2x3c["space"]))["addClass"](_0x90d2x6["settings"]["theme"]);
            } else {
                if (!_0x90d2x6["$elem"]["hasClasses"](_0x90d2x6e)) {
                    _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["themes"]["silver"]);
                };
            };
            if ((_0x90d2x6["settings"]["animation"]["type"] === "css" && _0x90d2x1["zozo"]["core"]["support"]["transition"]) || jQuery["browser"]["mobile"]) {};
            _0x90d2x6["$elem"]["addClass"]("transition");
            (_0x90d2x6["settings"]["contentNav"] === true) && _0x90d2x6["$elem"]["addClass"](_0x90d2x57);
            (jQuery["browser"]["mobile"] === true) && (_0x90d2x6["$elem"]["addClass"](_0x90d2x4d));
            (_0x90d2x6["settings"]["rounded"] === true) && _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["rounded"])["parent"]("." + _0x90d2x54)["addClass"](_0x90d2x3c["classes"]["rounded"]);
            (_0x90d2x6["settings"]["scrollable"] === true) && _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["scrollable"]);
            (_0x90d2x6["settings"]["grouped"] === true) ? _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["groups"]["grouped"]): _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["groups"]["ungrouped"]);
            (_0x90d2x6["settings"]["bordered"] === true) && _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["bordered"]);
            (_0x90d2x6["settings"]["shadows"] === true) && _0x90d2x6["$elem"]["addClass"](_0x90d2x3c["classes"]["shadows"])["parent"]("." + _0x90d2x54)["addClass"](_0x90d2x3c["classes"]["shadows"]);
            _0x90d2x68["addAria"](_0x90d2x6, {
                index: _0x90d2x6["currentsection"]
            });
        },
        setContentSize: function(_0x90d2x6) {
            var _0x90d2x6f = _0x90d2x6["settings"]["slider"];
            var _0x90d2x70 = _0x90d2x6["settings"]["contentNav"];
            var _0x90d2x71 = _0x90d2x6["settings"]["orientation"];
            var _0x90d2x72 = (_0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["vertical"] && _0x90d2x6["settings"]["responsive"] === true) ? _0x90d2x6["settings"]["vertical"]["sectionSpacing"] : _0x90d2x6["settings"]["sectionSpacing"];
            var _0x90d2x73 = _0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["vertical"] ? _0x90d2x6["settings"]["vertical"]["headerSize"] : _0x90d2x6["settings"]["headerSize"];
            var _0x90d2x74 = _0x90d2x6["settings"]["contentWidth"] - ((_0x90d2x6["settings"]["contentSpacing"] * 2));
            var _0x90d2x75 = _0x90d2x6["settings"]["height"] - (_0x90d2x6["settings"]["contentSpacing"] * 2);
            var _0x90d2x76 = _0x90d2x6["$elem"]["parents"]("." + _0x90d2x54);
            var _0x90d2x77 = _0x90d2x1["zozo"]["core"]["browser"]["isIE"](8);
            var _0x90d2x78 = _0x90d2x1["zozo"]["core"]["browser"]["isIE"](9);
            if (_0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["horizontal"]) {
                if (_0x90d2x72 > 0) {
                    _0x90d2x6["settings"]["contentWidth"] = parseInt(_0x90d2x6["settings"]["width"] - (_0x90d2x6["sectionCount"] * (_0x90d2x6["settings"]["headerSize"] + _0x90d2x72 - 1)));
                } else {
                    _0x90d2x6["settings"]["contentWidth"] = _0x90d2x6["settings"]["width"] - (_0x90d2x6["sectionCount"] * (_0x90d2x6["settings"]["headerSize"]));
                };
                _0x90d2x6["$elem"]["css"]({
                    width: (_0x90d2x72 > 0) ? _0x90d2x6["settings"]["width"] - 1 : _0x90d2x6["settings"]["width"],
                    height: _0x90d2x6["settings"]["height"]
                });
                _0x90d2x76["css"]({
                    width: _0x90d2x6["settings"]["width"]
                });
            } else {
                (_0x90d2x72 > 0) ? _0x90d2x6["settings"]["grouped"] = false: _0x90d2x6["settings"]["grouped"] = true;
            };
            if (_0x90d2x6f == true && _0x90d2x72 > 0) {
                _0x90d2x76["css"]({
                    padding: _0x90d2x72 + _0x90d2x3d
                });
                (_0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["horizontal"]) ? _0x90d2x76["css"]({
                    paddingRight: 1,
                    paddingBottom: (_0x90d2x72 - 1) + _0x90d2x3d
                }): _0x90d2x76["css"]({
                    paddingTop: "1px",
                    paddingBottom: "1px"
                });
            };
            _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                var _0x90d2x79 = _0x90d2x1(_0x90d2x5b);
                var _0x90d2x6a = _0x90d2x1(_0x90d2x5b)["find"](_0x90d2x48)["css"]({
                    outline: "none",
                    height: (_0x90d2x73 + 1) + _0x90d2x3d,
                    lineHeight: (_0x90d2x73 + 2) + _0x90d2x3d
                });
                var _0x90d2x6c = _0x90d2x1(_0x90d2x5b)["find"](_0x90d2x49);
                (_0x90d2x77) && (_0x90d2x6a["css"]({
                    height: (_0x90d2x73 + 3) + _0x90d2x3d
                })["find"]("\x3E span.z-title")["css"]({
                    height: (_0x90d2x6["settings"]["height"]) + _0x90d2x3d
                }));
                if (!_0x90d2x79["find"]("\x3E * \x3E." + _0x90d2x3c["classes"]["autoClass"])["length"]) {
                    var _0x90d2x7a = _0x90d2x1("\x3Cdiv class=\x27" + _0x90d2x3c["classes"]["autoClass"] + "\x27\x3E\x3C/div\x3E");
                    var _0x90d2x7b = _0x90d2x6c["html"]();
                    _0x90d2x6c["html"]("");
                    _0x90d2x7a["append"](_0x90d2x7b);
                    _0x90d2x7a["appendTo"](_0x90d2x6c);
                    (_0x90d2x6["settings"]["contentNav"] === true) && _0x90d2x7a["find"]("\x3E ul")["addClass"](_0x90d2x55);
                };
                if (_0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["horizontal"]) {
                    _0x90d2x6a["css"]({
                        width: _0x90d2x6["settings"]["height"]
                    });
                    if (_0x90d2x6f === true) {
                        _0x90d2x6c["css"]({
                            height: "100%",
                            margin: 0
                        })["find"]("img")["css"]({
                            margin: _0x90d2x6["settings"]["contentSpacing"]
                        });
                    };
                    if (_0x90d2x6["settings"]["responsive"] === true && _0x90d2x6["settings"]["original"]["headerFontSize"] > 0) {
                        _0x90d2x6a["css"]({
                            fontSize: _0x90d2x6["settings"]["headerFontSize"] + "em"
                        });
                    };
                } else {
                    _0x90d2x79["css"]({
                        overflow: "",
                        width: "100%",
                        left: "",
                        display: "block"
                    });
                    if (_0x90d2x6["settings"]["grouped"] === false || _0x90d2x72 > 0) {
                        _0x90d2x79["css"]({
                            marginTop: _0x90d2x72 + _0x90d2x3d,
                            marginBottom: _0x90d2x72 + _0x90d2x3d
                        });
                    };
                    if (_0x90d2x6["settings"]["responsive"] === true && _0x90d2x6["settings"]["vertical"]["headerFontSize"] > 0) {
                        _0x90d2x6a["css"]({
                            fontSize: _0x90d2x6["settings"]["vertical"]["headerFontSize"] + "em"
                        });
                    };
                };
                if (_0x90d2x6f === true || _0x90d2x70 === true) {
                    if (_0x90d2x71 === _0x90d2x3c["classes"]["orientations"]["horizontal"]) {
                        _0x90d2x6c["find"]("\x3E." + _0x90d2x3c["classes"]["autoClass"])["css"]({
                            paddingLeft: (_0x90d2x72 - 2) + _0x90d2x3d
                        });
                    } else {
                        _0x90d2x6c["find"]("\x3E." + _0x90d2x3c["classes"]["autoClass"])["css"]({
                            paddingTop: _0x90d2x72 + _0x90d2x3d
                        });
                    };
                };
                (_0x90d2x70 === true) && _0x90d2x6c["find"]("\x3E." + _0x90d2x3c["classes"]["autoClass"])["find"](_0x90d2x56 + " \x3E li:not(:first)")["css"]({
                    marginTop: _0x90d2x72 + _0x90d2x3d
                });
            });
        },
        bindEvents: function(_0x90d2x6) {
            var _0x90d2x7c = false;
            _0x90d2x1(_0x90d2x2)["blur"](function() {
                _0x90d2x7c = false;
            })["focus"](function() {
                _0x90d2x7c = true;
            });
            _0x90d2x6["$elem"]["focus"](function(_0x90d2x7d) {
                var _0x90d2x7e = _0x90d2x1(this);
                var _0x90d2x7f = _0x90d2x7e["data"]("mdown");
                _0x90d2x7e["removeData"]("mdown");
                if (!_0x90d2x7f) {
                    _0x90d2x7e["addClass"](_0x90d2x3c["classes"]["focus"]);
                };
            })["blur"](function(_0x90d2x7d) {
                _0x90d2x1(this)["removeClass"](_0x90d2x3c["classes"]["focus"]);
            });
            _0x90d2x6["$sections"]["each"](function() {
                var _0x90d2x80 = _0x90d2x1(this);
                var _0x90d2x61 = _0x90d2x80["find"](_0x90d2x48);
                var _0x90d2x8 = _0x90d2x80["find"]("\x3E .z-content");
                _0x90d2x8["on"]("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    _0x90d2x6["settings"]["animating"] = false;
                });
                if (_0x90d2x6["settings"]["hideHeaders"] === true) {
                    _0x90d2x61 = _0x90d2x1(this)["find"]("\x3Ediv\x3Ediv\x3Eimg");
                };
                if (!_0x90d2x61["find"]("a")["length"]) {
                    _0x90d2x68["bindEvent"](_0x90d2x6, _0x90d2x61);
                } else {
                    _0x90d2x61["on"](_0x90d2x6["settings"]["event"], function(_0x90d2x7d) {
                        var _0x90d2x81 = _0x90d2x61["find"]("a");
                        var _0x90d2x82 = _0x90d2x81["attr"]("target");
                        if (_0x90d2x1["trim"](_0x90d2x82)["length"]) {
                            _0x90d2x2["open"](_0x90d2x81["attr"]("href"), _0x90d2x82);
                        } else {
                            _0x90d2x2["location"] = _0x90d2x81["attr"]("href");
                        };
                        _0x90d2x7d["preventDefault"]();
                    });
                };
            });
            _0x90d2x6["$elem"]["bind"](_0x90d2x42, _0x90d2x6["settings"]["select"]);
            _0x90d2x6["$elem"]["bind"](_0x90d2x44, _0x90d2x6["settings"]["expand"]);
            _0x90d2x6["$elem"]["bind"](_0x90d2x45, _0x90d2x6["settings"]["activate"]);
            _0x90d2x6["$elem"]["bind"](_0x90d2x40, _0x90d2x6["settings"]["error"]);
            _0x90d2x6["$elem"]["bind"](_0x90d2x4b, _0x90d2x6["settings"]["contentLoad"]);
            if (_0x90d2x6["settings"]["slider"] === true && _0x90d2x6["settings"]["dotNav"] === true) {
                _0x90d2x1(_0x90d2x58)["each"](function() {
                    _0x90d2x1(this)["on"]("click", function(_0x90d2x83) {
                        _0x90d2x83["preventDefault"]();
                        _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x1(this)["index"]());
                    });
                });
                _0x90d2x1(".z-nav a.z-next")["click"](function(_0x90d2x83) {
                    _0x90d2x83["preventDefault"]();
                    _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x6["currentsection"] + 1);
                });
                _0x90d2x1(".z-nav a.z-prev")["click"](function(_0x90d2x83) {
                    _0x90d2x83["preventDefault"]();
                    _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x6["currentsection"] - 1);
                });
            };
            if (_0x90d2x6["settings"]["responsive"] === true && _0x90d2x6["settings"]["original"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["horizontal"]) {
                _0x90d2x1(_0x90d2x2)["resize"](function() {
                    if (_0x90d2x6["lastWindowHeight"] !== _0x90d2x1(_0x90d2x2)["height"]() || _0x90d2x6["lastWindowWidth"] !== _0x90d2x1(_0x90d2x2)["width"]()) {
                        clearInterval(_0x90d2x6["resizeWindowIntervalId"]);
                        _0x90d2x6["resizeWindowIntervalId"] = setTimeout(function() {
                            _0x90d2x6["lastWindowHeight"] = _0x90d2x1(_0x90d2x2)["height"]();
                            _0x90d2x6["lastWindowWidth"] = _0x90d2x1(_0x90d2x2)["width"]();
                            _0x90d2x68["checkWidth"](_0x90d2x6);
                        }, _0x90d2x6["settings"]["responsiveDelay"]);
                    };
                });
            };
        },
        bindEvent: function(_0x90d2x6, _0x90d2x61) {
            if (_0x90d2x1["zozo"]["core"]["support"]["is_touch_device"]()) {
                _0x90d2x61["on"](_0x90d2x3c["events"]["touchstart"], function(_0x90d2x83) {
                    _0x90d2x1(this)["on"](_0x90d2x3c["events"]["touchend"], function(_0x90d2x83) {
                        _0x90d2x83["preventDefault"]();
                        var _0x90d2x84 = _0x90d2x1(this)["parent"]()["index"]();
                        _0x90d2x6["currentsection"] = _0x90d2x84;
                        if (_0x90d2x6["settings"]["autoplay"] !== false && _0x90d2x6["settings"]["autoplay"] != null) {
                            if (_0x90d2x6["settings"]["autoplay"]["smart"] === true) {
                                _0x90d2x6["stop"]();
                            };
                        };
                        _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x84);
                        _0x90d2x1(this)["off"](_0x90d2x3c["events"]["touchend"]);
                    });
                    _0x90d2x1(this)["on"](_0x90d2x3c["events"]["touchmove"], function(_0x90d2x83) {
                        _0x90d2x1(this)["off"](_0x90d2x3c["events"]["touchend"]);
                    });
                });
            } else {
                _0x90d2x61["on"](_0x90d2x6["settings"]["event"], function(_0x90d2x83) {
                    _0x90d2x83["preventDefault"]();
                    var _0x90d2x84 = _0x90d2x1(this)["parent"]()["index"]();
                    _0x90d2x6["currentsection"] = _0x90d2x84;
                    if (_0x90d2x6["settings"]["autoplay"] !== false && _0x90d2x6["settings"]["autoplay"] != null) {
                        if (_0x90d2x6["settings"]["autoplay"]["smart"] === true) {
                            _0x90d2x6["stop"]();
                        };
                    };
                    _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x84);
                });
            };
            if (_0x90d2x6["settings"]["keyboard"] === true) {
                _0x90d2x61["on"]("keyup", function(_0x90d2x7d) {
                    _0x90d2x7d["preventDefault"]();
                    var _0x90d2x7e = _0x90d2x1(this);
                    var _0x90d2x85 = _0x90d2x7d["keyCode"] || _0x90d2x7d["which"];
                    var _0x90d2x86 = _0x90d2x7e["parent"]()["index"]();
                    var _0x90d2x84 = _0x90d2x7e["parent"]()["index"]();
                    var _0x90d2x87 = _0x90d2x6["sectionCount"];
                    if (_0x90d2x85 == _0x90d2x1["zozo"]["core"]["keyCodes"]["space"] || _0x90d2x85 == _0x90d2x1["zozo"]["core"]["keyCodes"]["enter"]) {
                        _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x84);
                    } else {
                        if (_0x90d2x85 >= _0x90d2x1["zozo"]["core"]["keyCodes"]["end"] || _0x90d2x85 <= _0x90d2x1["zozo"]["core"]["keyCodes"]["down"]) {
                            if (_0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["home"]) {
                                _0x90d2x84 = 0;
                            } else {
                                if (_0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["end"]) {
                                    _0x90d2x84 = _0x90d2x87 - 1;
                                } else {
                                    if (_0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["up"] || _0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["left"]) {
                                        _0x90d2x84--;
                                    } else {
                                        if (_0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["down"] || _0x90d2x85 === _0x90d2x1["zozo"]["core"]["keyCodes"]["right"]) {
                                            _0x90d2x84++;
                                        };
                                    };
                                };
                            };
                            if (_0x90d2x84 != _0x90d2x86) {
                                if (_0x90d2x84 === -1) {
                                    _0x90d2x84 = _0x90d2x87 - 1;
                                };
                                if (_0x90d2x84 === _0x90d2x87 && _0x90d2x85 != _0x90d2x1["zozo"]["core"]["keyCodes"]["end"]) {
                                    _0x90d2x84 = 0;
                                };
                                _0x90d2x6["$sections"]["find"](_0x90d2x48)["eq"](_0x90d2x84)["focus"]();
                            };
                        };
                    };
                })["mousedown"](function(_0x90d2x83) {
                    var _0x90d2x7e = _0x90d2x1(this);
                    if (!_0x90d2x7e["is"](":focus")) {
                        _0x90d2x7e["data"]("mdown", true);
                    };
                })["focus"](function(_0x90d2x7d) {
                    var _0x90d2x7e = _0x90d2x1(this);
                    var _0x90d2x7f = _0x90d2x7e["data"]("mdown");
                    _0x90d2x7e["removeData"]("mdown");
                    if (!_0x90d2x7f) {
                        _0x90d2x7e["addClass"](_0x90d2x3c["classes"]["focus"]);
                    };
                })["blur"](function(_0x90d2x7d) {
                    _0x90d2x1(this)["removeClass"](_0x90d2x3c["classes"]["focus"]);
                });
            };
        },
        checkWidth: function(_0x90d2x6) {
            var _0x90d2x88 = _0x90d2x1(_0x90d2x2)["width"]();
            var _0x90d2x71 = _0x90d2x6["settings"]["orientation"];
            var _0x90d2x89 = _0x90d2x6["settings"]["minContentWidth"];
            var _0x90d2x8a = _0x90d2x6["settings"]["minWidth"];
            var _0x90d2x8b = _0x90d2x6["settings"]["minWindowWidth"];
            var _0x90d2x8c = _0x90d2x6["$elem"]["parents"]("." + _0x90d2x54);
            var _0x90d2x3a = _0x90d2x6["$elem"];
            if (_0x90d2x8c["length"]) {
                _0x90d2x3a = _0x90d2x8c;
            };
            _0x90d2x6["settings"]["width"] = _0x90d2x3a["hide"]()["parent"]()["outerWidth"]() - 2;
            if (_0x90d2x1(_0x90d2x3)["height"]() > _0x90d2x1(_0x90d2x2)["height"]()) {
                if (_0x90d2x6["settings"]["slider"] === true && _0x90d2x6["settings"]["sectionSpacing"] > 0) {
                    _0x90d2x6["settings"]["width"] = _0x90d2x6["settings"]["width"] - ((_0x90d2x6["settings"]["width"] / _0x90d2x6["settings"]["original"]["width"]) * _0x90d2x6["settings"]["sectionSpacing"]);
                };
            };
            _0x90d2x3a["show"]();
            if (_0x90d2x6["settings"]["width"] > _0x90d2x6["settings"]["original"]["width"]) {
                _0x90d2x6["settings"]["width"] = _0x90d2x6["settings"]["original"]["width"];
                _0x90d2x6["settings"]["height"] = _0x90d2x6["settings"]["original"]["height"];
                _0x90d2x6["settings"]["headerSize"] = _0x90d2x6["settings"]["original"]["headerSize"];
                _0x90d2x6["settings"]["headerFontSize"] = _0x90d2x6["settings"]["original"]["headerFontSize"];
                _0x90d2x6["settings"]["sectionSpacing"] = _0x90d2x6["settings"]["original"]["sectionSpacing"];
            } else {
                var _0x90d2x8d = (_0x90d2x6["settings"]["width"] / _0x90d2x6["settings"]["original"]["width"]);
                _0x90d2x6["settings"]["height"] = parseInt(_0x90d2x8d * _0x90d2x6["settings"]["original"]["height"]);
                _0x90d2x6["settings"]["headerSize"] = _0x90d2x8d * _0x90d2x6["settings"]["original"]["headerSize"];
                _0x90d2x6["settings"]["headerFontSize"] = _0x90d2x8d * _0x90d2x6["settings"]["original"]["headerFontSize"];
                _0x90d2x6["settings"]["sectionSpacing"] = _0x90d2x8d * _0x90d2x6["settings"]["original"]["sectionSpacing"];
            };
            console["log"]("accordionWidth: " + _0x90d2x6["settings"]["width"] + " / " + _0x90d2x8a + " windowWidth: " + _0x90d2x88 + " / " + _0x90d2x8b);
            if (_0x90d2x88 <= _0x90d2x8b || _0x90d2x6["settings"]["width"] <= _0x90d2x8a) {
                _0x90d2x6["settings"]["width"] = _0x90d2x6["settings"]["original"]["width"];
                _0x90d2x6["settings"]["height"] = _0x90d2x6["settings"]["original"]["height"];
                _0x90d2x6["settings"]["headerSize"] = _0x90d2x6["settings"]["original"]["headerSize"];
                _0x90d2x6["settings"]["headerFontSize"] = _0x90d2x6["settings"]["original"]["headerFontSize"];
                _0x90d2x6["settings"]["sectionSpacing"] = _0x90d2x6["settings"]["vertical"]["sectionSpacing"];
                _0x90d2x68["changeOrientation"](_0x90d2x6, _0x90d2x3c["classes"]["orientations"]["vertical"]);
            } else {
                _0x90d2x68["changeOrientation"](_0x90d2x6, _0x90d2x3c["classes"]["orientations"]["horizontal"]);
            };
        },
        changeOrientation: function(_0x90d2x6, _0x90d2x71) {
            _0x90d2x68["setContentSize"](_0x90d2x6);
            if (_0x90d2x71 != _0x90d2x6["settings"]["orientation"]) {
                _0x90d2x6["settings"]["orientation"] = _0x90d2x71;
                _0x90d2x6["setOptions"]({
                    orientation: _0x90d2x71
                });
            } else {
                _0x90d2x68["showSection"](_0x90d2x6, _0x90d2x6["currentsection"], true);
            };
        },
        showSection: function(_0x90d2x6, _0x90d2x84, _0x90d2x8e) {
            if (_0x90d2x1["zozo"]["core"]["utils"]["isNumber"](_0x90d2x84)) {
                var _0x90d2x79 = _0x90d2x6["$elem"]["find"](_0x90d2x47)["eq"](_0x90d2x84);
                var _0x90d2x25 = _0x90d2x6["settings"]["animation"]["duration"];
                var _0x90d2x8f = {
                    index: _0x90d2x1["zozo"]["core"]["utils"]["isNumber"](_0x90d2x84) ? _0x90d2x84 : 0,
                    section: _0x90d2x79,
                    enabled: _0x90d2x68["isTabDisabled"](_0x90d2x79) === false,
                    head: _0x90d2x79["find"](_0x90d2x48),
                    link: _0x90d2x79["find"](_0x90d2x3e),
                    content: _0x90d2x79["find"]("\x3E .z-content"),
                    contentInner: _0x90d2x79["find"]("\x3E .z-content \x3E .z-auto-g"),
                    contentUrl: _0x90d2x79["find"](_0x90d2x3e)["data"](_0x90d2x4a),
                    noAnimation: _0x90d2x8e
                };
                if (_0x90d2x8f["enabled"]) {
                    setTimeout(function() {
                        (_0x90d2x6["settings"]["select"] && typeof(_0x90d2x6["settings"]["select"]) == typeof(Function)) && _0x90d2x6["$elem"]["trigger"](_0x90d2x42, {
                            header: _0x90d2x8f["link"][0],
                            content: _0x90d2x8f["contentInner"][0],
                            index: _0x90d2x8f["index"]
                        });
                        (_0x90d2x6["settings"]["activate"] && typeof(_0x90d2x6["settings"]["activate"]) == typeof(Function)) && _0x90d2x6["$elem"]["trigger"](_0x90d2x45, {
                            header: _0x90d2x8f["link"][0],
                            content: _0x90d2x8f["contentInner"][0],
                            index: _0x90d2x8f["index"]
                        });
                        _0x90d2x68["saveState"](_0x90d2x6);
                    }, (_0x90d2x25 + 20));
                    if (_0x90d2x8f["contentUrl"]) {
                        (_0x90d2x6["settings"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["vertical"]) ? _0x90d2x68["ajaxRequest"](_0x90d2x6, _0x90d2x8f, _0x90d2x68["showVertical"]): _0x90d2x68["ajaxRequest"](_0x90d2x6, _0x90d2x8f, _0x90d2x68["showHorizontal"]);
                    } else {
                        (_0x90d2x6["settings"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["vertical"]) ? _0x90d2x68["showVertical"](_0x90d2x6, _0x90d2x8f): _0x90d2x68["showHorizontal"](_0x90d2x6, _0x90d2x8f);
                    };
                    _0x90d2x68["updateDotNav"](_0x90d2x6, _0x90d2x8f);
                    _0x90d2x68["addAria"](_0x90d2x6, _0x90d2x8f);
                    _0x90d2x6["currentsection"] = _0x90d2x8f["index"];
                };
            };
            return _0x90d2x6;
        },
        showHorizontal: function(_0x90d2x6, _0x90d2x90) {
            var _0x90d2x72 = _0x90d2x6["settings"]["orientation"] === _0x90d2x3c["classes"]["orientations"]["vertical"] ? _0x90d2x6["settings"]["vertical"]["sectionSpacing"] : _0x90d2x6["settings"]["sectionSpacing"];
            var _0x90d2x73 = _0x90d2x6["settings"]["headerSize"];
            var _0x90d2x91 = _0x90d2x6["settings"]["contentWidth"];
            var _0x90d2x92 = (_0x90d2x72 > 0) ? _0x90d2x72 - 1 : _0x90d2x72;
            var _0x90d2x93 = 0;
            var _0x90d2x84 = _0x90d2x90["index"];
            var _0x90d2x77 = _0x90d2x1["zozo"]["core"]["browser"]["isIE"](8);
            _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                var _0x90d2x94;
                var _0x90d2x79 = _0x90d2x1(_0x90d2x5b);
                var _0x90d2x95 = _0x90d2x79["find"](_0x90d2x48);
                var _0x90d2x96 = _0x90d2x79["find"]("\x3E .z-content");
                if (_0x90d2x16 > 0) {
                    _0x90d2x93 = _0x90d2x93 + _0x90d2x73 + _0x90d2x92;
                };
                _0x90d2x94 = _0x90d2x93;
                if (_0x90d2x16 === _0x90d2x84) {
                    _0x90d2x93 = _0x90d2x93 + _0x90d2x91;
                };
                _0x90d2x6["$elem"]["find"]("\x3E *." + _0x90d2x4e + " \x3E .z-content")["parent"]()["removeClass"](_0x90d2x3c["classes"]["active"]);
                _0x90d2x6["$elem"]["find"]("\x3E * \x3E .z-content")["eq"](_0x90d2x84)["parent"]()["toggleClass"](_0x90d2x3c["classes"]["active"]);
                _0x90d2x95["css"]({
                    "outline": "none",
                    "height": _0x90d2x73 + 1,
                    "line-height": (_0x90d2x73) + _0x90d2x3d
                })["find"]("\x3E span.z-title")["css"]({
                    "height": _0x90d2x73,
                    "line-height": (_0x90d2x73) + _0x90d2x3d
                });
                if (_0x90d2x92 > 0) {
                    _0x90d2x95["find"]("\x3E span.z-title")["css"]({
                        "height": _0x90d2x73 + 2
                    });
                };
                if (_0x90d2x77) {
                    _0x90d2x95["find"]("\x3E span.z-title")["css"]({
                        height: (_0x90d2x6["settings"]["height"]) + _0x90d2x3d
                    });
                };
                var _0x90d2x97 = _0x90d2x91 + _0x90d2x73 + 2;
                var _0x90d2x98 = (_0x90d2x92 === 0) ? _0x90d2x73 : _0x90d2x73 + 3;
                if (_0x90d2x77 == true && _0x90d2x92 > 0) {
                    _0x90d2x98 = _0x90d2x98 + 1;
                };
                if (_0x90d2x77 == true && _0x90d2x92 === 0) {
                    _0x90d2x98 = _0x90d2x98 + 1;
                };
                if (_0x90d2x90["noAnimation"] === true) {
                    _0x90d2x79["stop"]()["css"]({
                        "left": _0x90d2x94,
                        "width": _0x90d2x97
                    });
                    _0x90d2x96["css"]({
                        "left": _0x90d2x98,
                        "width": "auto",
                        "overflow": "",
                        display: ""
                    });
                } else {
                    _0x90d2x68["animate"](_0x90d2x6, _0x90d2x79["stop"](), null, {
                        "left": _0x90d2x94,
                        "width": _0x90d2x97
                    });
                    _0x90d2x68["animate"](_0x90d2x6, _0x90d2x96["stop"](), {
                        "left": _0x90d2x98,
                        display: ""
                    }, {
                        "width": "auto"
                    }, {
                        "overflow": ""
                    });
                };
            });
            return _0x90d2x6;
        },
        showVertical: function(_0x90d2x6, _0x90d2x90) {
            if (typeof _0x90d2x90["noAnimation"] === "undefined" || _0x90d2x90["noAnimation"] == null) {
                var _0x90d2x99 = _0x90d2x6["settings"]["contentHeight"];
                var _0x90d2x25 = _0x90d2x6["settings"]["animation"]["duration"];
                var _0x90d2x27 = _0x90d2x1["zozo"]["core"]["support"]["css"]["transition"];
                if (_0x90d2x90["section"]["hasClass"](_0x90d2x3c["classes"]["active"])) {
                    setTimeout(function() {
                        _0x90d2x90["section"]["removeClass"](_0x90d2x3c["classes"]["active"]);
                    }, _0x90d2x25);
                    _0x90d2x68["animate"](_0x90d2x6, _0x90d2x90["content"], null, {
                        height: "0",
                        overflow: ""
                    });
                } else {
                    if (_0x90d2x6["settings"]["expandMode"] === _0x90d2x3c["expandModes"]["single"]) {
                        _0x90d2x6["$sections"]["each"](function() {
                            _0x90d2x68["animate"](_0x90d2x6, _0x90d2x1(this)["removeClass"](_0x90d2x3c["classes"]["active"])["find"]("\x3E .z-content")["stop"](), null, {
                                height: "0",
                                overflow: ""
                            });
                        });
                    };
                    var _0x90d2x9a = (_0x90d2x99 <= 0) ? _0x90d2x68["getElementSize"](_0x90d2x90["content"])["height"] : _0x90d2x99;
                    var _0x90d2x23 = {
                        height: "auto"
                    };
                    if (_0x90d2x99 > 0) {
                        setTimeout(function() {
                            _0x90d2x90["content"]["css"]({
                                overflow: "auto"
                            });
                        }, _0x90d2x25);
                        _0x90d2x23 = null;
                    };
                    _0x90d2x68["animate"](_0x90d2x6, _0x90d2x90["content"]["stop"](), null, {
                        height: _0x90d2x9a
                    }, _0x90d2x23);
                    _0x90d2x90["section"]["addClass"](_0x90d2x3c["classes"]["active"]);
                };
            };
            return _0x90d2x6;
        },
        updateDotNav: function(_0x90d2x6, _0x90d2x90) {
            if (_0x90d2x6["settings"]["slider"] === true) {
                var _0x90d2x9b = _0x90d2x6["$elem"]["parent"]();
                _0x90d2x9b["find"](_0x90d2x59)["removeClass"](_0x90d2x3c["classes"]["active"]);
                _0x90d2x9b["find"](_0x90d2x58)["eq"](_0x90d2x90["index"])["toggleClass"](_0x90d2x3c["classes"]["active"]);
            };
        },
        addAria: function(_0x90d2x6, _0x90d2x90) {
            _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                var _0x90d2x79 = _0x90d2x1(_0x90d2x5b);
                var _0x90d2x95 = _0x90d2x79["find"](_0x90d2x48);
                var _0x90d2x96 = _0x90d2x79["find"]("\x3E div");
                var _0x90d2x9c = (_0x90d2x79["hasClass"](_0x90d2x3c["classes"]["active"]));
                _0x90d2x79["attr"]({
                    "aria-hidden": (!_0x90d2x9c).toString(),
                    "aria-expanded": (_0x90d2x9c).toString(),
                    "aria-selected": (_0x90d2x9c).toString()
                });
                _0x90d2x95["attr"]({
                    "aria-controls": _0x90d2x6["elemID"] + "-" + (_0x90d2x16 + 1),
                    "role": "tab",
                    "tabindex": "-1"
                });
                _0x90d2x96["attr"]({
                    "id": _0x90d2x6["elemID"] + "-" + (_0x90d2x16 + 1),
                    "role": "tabpanel",
                    "aria-hidden": (!_0x90d2x9c).toString(),
                    "aria-expanded": (_0x90d2x9c).toString()
                });
            });
            return _0x90d2x6;
        },
        ajaxRequest: function(_0x90d2x6, _0x90d2x90, _0x90d2x9d) {
            if (!_0x90d2x90["section"]["hasClass"](_0x90d2x3c["classes"]["active"])) {
                var _0x90d2x9e = setTimeout(function() {
                    _0x90d2x90["link"]["find"](_0x90d2x3f)["addClass"](_0x90d2x51);
                }, 0);
                var _0x90d2x2f = {};
                _0x90d2x1["ajax"]({
                    type: "GET",
                    cache: (_0x90d2x6["settings"]["cacheAjax"] === true),
                    url: _0x90d2x90["contentUrl"],
                    dataType: "html",
                    data: _0x90d2x2f,
                    beforeSend: function(_0x90d2x9f, _0x90d2xa0) {},
                    error: function(_0x90d2x9f, _0x90d2xa1, _0x90d2xa2) {
                        if (_0x90d2x9f["status"] == 404) {
                            _0x90d2x90["contentInner"]["html"]("\x3Ch4 style=\x27color:red;\x27\x3ESorry, error: 404 - the requested content could not be found.\x3C/h4\x3E");
                        } else {
                            _0x90d2x90["contentInner"]["html"]("\x3Ch4 style=\x27color:red;\x27\x3EAn error occurred: " + _0x90d2xa1 + "\x0AError: " + _0x90d2x9f + " code: " + _0x90d2x9f["status"] + "\x3C/h4\x3E");
                        };
                        (_0x90d2x6["settings"]["error"] && typeof(_0x90d2x6["settings"]["error"]) == typeof(Function)) && _0x90d2x6["$elem"]["trigger"](_0x90d2x40, _0x90d2x9f);
                    },
                    complete: function(_0x90d2x9f, _0x90d2xa1) {
                        setTimeout(function() {
                            clearTimeout(_0x90d2x9e);
                            _0x90d2x90["link"]["find"](_0x90d2x3f)["removeClass"](_0x90d2x51);
                        }, 0);
                        (_0x90d2x9d && typeof(_0x90d2x9d) == typeof(Function)) && _0x90d2x9d(_0x90d2x6, _0x90d2x90);
                    },
                    success: function(_0x90d2x2f, _0x90d2xa1, _0x90d2x9f) {
                        _0x90d2x90["contentInner"]["html"](_0x90d2x2f);
                        (_0x90d2x6["settings"]["contentLoad"] && typeof(_0x90d2x6["settings"]["contentLoad"]) == typeof(Function)) && _0x90d2x6["$elem"]["trigger"](_0x90d2x4b, {
                            header: _0x90d2x90["link"][0],
                            content: _0x90d2x90["contentInner"][0],
                            index: _0x90d2x90["index"]
                        });
                    }
                });
            } else {
                (_0x90d2x9d && typeof(_0x90d2x9d) == typeof(Function)) && _0x90d2x9d(_0x90d2x6, _0x90d2x90);
            };
            return _0x90d2x6;
        },
        getFirst: function(_0x90d2x6) {
            return 0;
        },
        getLast: function(_0x90d2x6) {
            return parseInt(_0x90d2x6["$sections"]["size"]()) - 1;
        },
        initAutoPlay: function(_0x90d2x6) {
            if (_0x90d2x6["settings"]["autoplay"] !== false && _0x90d2x6["settings"]["autoplay"] != null) {
                if (_0x90d2x6["settings"]["autoplay"]["interval"] > 0) {
                    _0x90d2x6["stop"]();
                    _0x90d2x6["autoplayIntervalId"] = setInterval(function() {
                        _0x90d2x6["next"](_0x90d2x6);
                    }, _0x90d2x6["settings"]["autoplay"]["interval"]);
                } else {
                    _0x90d2x6["stop"]();
                };
            } else {
                _0x90d2x6["stop"]();
            };
        },
        animate: function(_0x90d2x6, _0x90d2x20, _0x90d2x21, _0x90d2x22, _0x90d2x23, _0x90d2x24) {
            _0x90d2x1["zozo"]["core"]["utils"]["animate"](_0x90d2x6, _0x90d2x20, _0x90d2x21, _0x90d2x22, _0x90d2x23, _0x90d2x24);
        },
        getElementSize: function(_0x90d2x8) {
            var _0x90d2xa3 = {
                width: 0,
                height: 0
            };
            if (_0x90d2x8 == null || _0x90d2x8["length"] == 0) {
                return _0x90d2xa3;
            };
            if (_0x90d2x8["css"]("height") === 0 || _0x90d2x8["css"]("height") === "0px") {
                _0x90d2x8["css"]({
                    "height": "auto"
                });
                _0x90d2xa3["height"] = _0x90d2x8["innerHeight"]();
                _0x90d2xa3["width"] = _0x90d2x8["outerWidth"]();
                _0x90d2x8["css"]("height", "0px");
            } else {
                var _0x90d2xa4 = _0x90d2x8["css"]("height");
                _0x90d2xa3["height"] = _0x90d2x8["innerHeight"]();
                _0x90d2xa3["width"] = _0x90d2x8["outerWidth"]();
            };
            return _0x90d2xa3;
        },
        isTabDisabled: function(_0x90d2x61) {
            return (_0x90d2x61["hasClass"](_0x90d2x50) || _0x90d2x61["data"](_0x90d2x4f) === true);
        },
        create: function(_0x90d2x6, _0x90d2xa5, _0x90d2x1b) {
            var _0x90d2xa6 = _0x90d2x6["settings"]["headerTag"];
            var _0x90d2x61 = _0x90d2x6["settings"]["sectionTag"];
            return _0x90d2x1("\x3C" + _0x90d2x61 + "\x3E\x3C" + _0x90d2xa6 + "\x3E" + _0x90d2xa5 + "\x3C/" + _0x90d2xa6 + "\x3E\x3Cdiv\x3E" + _0x90d2x1b + "\x3C/div\x3E\x3C/" + _0x90d2x61 + "\x3E");
        },
        saveState: function(_0x90d2x6) {
            if (_0x90d2x6["settings"]["rememberState"] === true && _0x90d2x1["zozo"]["core"]["support"]["html5_storage"]()) {
                var _0x90d2xa7 = [];
                _0x90d2x6["$sections"]["each"](function(_0x90d2x16, _0x90d2x5b) {
                    if (_0x90d2x1(_0x90d2x5b)["hasClass"](_0x90d2x4e)) {
                        _0x90d2xa7["push"](_0x90d2x16);
                    };
                });
                localStorage[_0x90d2x6["elemID"] + "_active"] = JSON["stringify"](_0x90d2xa7);
            };
            return _0x90d2x6;
        },
        loadState: function(_0x90d2x6) {
            if (_0x90d2x6["settings"]["rememberState"] === true && _0x90d2x1["zozo"]["core"]["support"]["html5_storage"]()) {
                var _0x90d2xa8 = localStorage[_0x90d2x6["elemID"] + "_active"];
                if (_0x90d2x6["settings"]["rememberState"] === true && _0x90d2xa8) {
                    var _0x90d2xa7 = JSON["parse"](_0x90d2xa8);
                    if (_0x90d2x1["isArray"](_0x90d2xa7) || _0x90d2x1["zozo"]["core"]["utils"]["isNumber"](_0x90d2xa7)) {
                        {
                            _0x90d2x6["settings"]["active"] = _0x90d2xa7;
                        };
                    };
                };
            };
            return _0x90d2x6;
        },
        showLoading: function(_0x90d2x6) {
            _0x90d2x6["$elem"]["append"]("\x3Cspan class=\x22" + _0x90d2x52 + "\x22\x3E\x3C/span\x3E");
            return _0x90d2x6;
        },
        hideLoading: function(_0x90d2x6) {
            _0x90d2x6["$elem"]["find"]("\x3E." + _0x90d2x52)["remove"]();
            _0x90d2x6["$elem"]["removeClass"]("z-accordion-loading");
            return _0x90d2x6;
        }
    };
    _0x90d2x39["defaults"] = _0x90d2x39["prototype"]["defaults"];
    _0x90d2x1["fn"]["zozoAccordion"] = function(_0x90d2x3b) {
        return this["each"](function() {
            if (_0x90d2x4 == _0x90d2x1(this)["data"](_0x90d2x3c["pluginName"])) {
                var _0x90d2xa9 = new _0x90d2x39(this, _0x90d2x3b)["init"]();
                _0x90d2x1(this)["data"](_0x90d2x3c["pluginName"], _0x90d2xa9);
            };
        });
    };
    _0x90d2x2["zozo"]["accordion"] = _0x90d2x39;
    _0x90d2x1(_0x90d2x3)["ready"](function() {
        _0x90d2x1("[data-role=\x27z-accordion\x27]")["each"](function(_0x90d2x16, _0x90d2x5b) {
            if (!_0x90d2x1(_0x90d2x5b)["zozoAccordion"]()) {
                _0x90d2x1(_0x90d2x5b)["zozoAccordion"]();
            };
            _0x90d2x1(_0x90d2x5b)["find"]("[data-role=\x27z-accordion\x27]")["each"](function(_0x90d2x16, _0x90d2xaa) {
                if (!_0x90d2x1(_0x90d2xaa)["zozoAccordion"]()) {
                    _0x90d2x1(_0x90d2xaa)["zozoAccordion"]();
                };
                _0x90d2x1(_0x90d2xaa)["find"]("[data-role=\x27z-accordion\x27]")["each"](function(_0x90d2x16, _0x90d2xab) {
                    if (!_0x90d2x1(_0x90d2xab)["zozoAccordion"]()) {
                        _0x90d2x1(_0x90d2xab)["zozoAccordion"]();
                    };
                    _0x90d2x1(_0x90d2xab)["find"]("[data-role=\x27z-accordion\x27]")["each"](function(_0x90d2x16, _0x90d2xac) {
                        if (!_0x90d2x1(_0x90d2xac)["zozoAccordion"]()) {
                            _0x90d2x1(_0x90d2xac)["zozoAccordion"]();
                        };
                    });
                });
            });
        });
    });
})(jQuery, window, document);
