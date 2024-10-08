(function () {
    "use strict";
    try {
        if (typeof document != "undefined") {
            var e = document.createElement("style");
            e.appendChild(document.createTextNode(".video-wrapper[data-v-f8afdaf5]{display:flex;justify-content:center;align-items:center;width:100%;height:100%;position:absolute;overflow:hidden;z-index:0;transition:opacity 0.5s}.fade[data-v-f8afdaf5]{backface-visibility:hidden}.fade-enter-active[data-v-f8afdaf5],.fade-leave-active[data-v-f8afdaf5],.fade-enter[data-v-f8afdaf5],.fade-leave-to[data-v-f8afdaf5]{opacity:0}video[data-v-f8afdaf5]{visibility:visible;pointer-events:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);height:100%;width:100%}.video-buffering[data-v-21ec9d8c]{width:100%;overflow:hidden;background-size:cover;background-position:center;height:100%;top:0;left:0;position:absolute}.video-overlay[data-v-95abe06c]{height:100%;width:100%;top:0;left:0;position:absolute}.vue-responsive-videobg[data-v-7649c24c]{background:none;position:relative;width:100%;overflow:hidden}.vue-responsive-videobg .videobg-content[data-v-7649c24c]{position:absolute;top:0;left:0;width:100%;height:100%}")), document.head.appendChild(e)
        }
    } catch (t) {
        console.error("vite-plugin-css-injected-by-js", t)
    }
})();
import {
    openBlock as s,
    createBlock as p,
    Transition as w,
    withCtx as k,
    withDirectives as V,
    createElementVNode as d,
    normalizeStyle as c,
    vShow as E,
    createElementBlock as y,
    resolveComponent as u,
    createCommentVNode as h,
    createVNode as P,
    renderSlot as j
} from "vue";

const _ = {
        src: {
            type: String,
            required: !0
        },
        muted: {
            type: Boolean,
            default: !0
        },
        loop: {
            type: Boolean,
            default: !0
        },
        preload: {
            type: String,
            default: "auto"
        },
        objectFit: {
            type: String,
            default: "cover"
        },
        playsWhen: {
            type: String,
            default: "canplay",
            note: "Google HTML Video Events"
        },
        playbackRate: {
            type: Number,
            default: 1
        },
        transition: {
            type: String,
            default: "fade"
        }
    }, R = ["src", "res", "autoplay"], S = (e) => Array.isArray(e) ? e.length === 0 ? !0 : m(e, R) : !1,
    m = (e, t) => t.length === 1 ? f(e, t[0]) : f(e, t[0]) * m(e, t.slice(1)), f = (e, t) => {
        for (let o = e.length - 1; o > -1; o -= 1) {
            const r = e[o];
            if (!W(r))
                return !1;
            if (O(r, t))
                return !0;
        }
        return !1;
    }, W = (e) => e != null && e.constructor.name === "Object", O = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    B = {
        sources: {
            type: Array,
            default() {
                return [];
            },
            validator: S
        },
        autoplay: {
            type: Boolean,
            default: !0
        },
        poster: {
            type: String,
            default: ""
        },
        overlay: {
            type: String,
            default: ""
        },
        ..._
    };
const a = (e, t) => {
    const o = e.__vccOpts || e;
    for (const [r, i] of t)
        o[r] = i;
    return o;
}, T = {
    props: _,
    emits: ["playing", "error", "loading", "ended", "ready"],
    data() {
        return {
            showVideo: !1
        };
    },
    computed: {
        styleObject() {
            return this.objectFit ? {
                objectFit: this.objectFit
            } : {};
        }
    },
    watch: {
        src() {
            this.load();
        }
    },
    methods: {
        pause() {
            this.$refs.video && this.$refs.video.pause();
        },
        load() {
            this.hide(), setTimeout(() => {
                this.$refs.video.load(), this.$emit("loading");
            }, 1e3);
        },
        play() {
            this.setPlaybackRate(), this.$refs.video.play(), this.show(), this.$emit("playing");
        },
        show() {
            this.showVideo = !0;
        },
        hide() {
            this.showVideo = !1;
        },
        getMediaType(e) {
            return `video/${e.split(".").pop().split(/[?#]/)[0]}`;
        },
        videoCanPlay() {
            return !!this.$refs.video.canPlayType;
        },
        videoReady() {
            this.pause(), this.$emit("ready");
        },
        videoError() {
            this.$emit("error");
        },
        videoEnded() {
            this.$emit("ended");
        },
        setPlaybackRate() {
            this.$refs.video.playbackRate = this.playbackRate, this.$refs.video.defaultPlaybackRate = this.playbackRate;
        }
    },
    mounted() {
        this.videoCanPlay() && (this.$refs.video[`on${this.playsWhen}`] = this.videoReady, this.$refs.video.onerror = this.videoError, this.$refs.video.onended = this.videoEnded);
    }
}, C = {class: "video-wrapper"}, F = ["muted", "loop", "preload"], I = ["src", "type"];

function M(e, t, o, r, i, n) {
    return s(), p(w, {name: e.transition}, {
        default: k(() => [
            V(d("div", C, [
                d("video", {
                    ref: "video",
                    autoplay: "",
                    playsinline: "",
                    muted: e.muted,
                    loop: e.loop,
                    preload: e.preload,
                    style: c(n.styleObject)
                }, [
                    d("source", {
                        src: e.src,
                        type: n.getMediaType(e.src)
                    }, null, 8, I)
                ], 12, F)
            ], 512), [
                [E, i.showVideo]
            ])
        ]),
        _: 1
    }, 8, ["name"]);
}

const z = /* @__PURE__ */ a(T, [["render", M], ["__scopeId", "data-v-f8afdaf5"]]);
const L = {
    props: {
        poster: {
            type: String,
            required: !0
        }
    },
    computed: {
        image() {
            return {
                backgroundImage: `url(${this.poster})`
            };
        }
    }
};

function q(e, t, o, r, i, n) {
    return s(), y("div", {
        class: "video-buffering",
        style: c(n.image)
    }, null, 4);
}

const A = /* @__PURE__ */ a(L, [["render", q], ["__scopeId", "data-v-21ec9d8c"]]);
const H = {
    props: {
        overlay: {
            type: String,
            required: !0
        }
    }
};

function N(e, t, o, r, i, n) {
    return s(), y("div", {
        class: "video-overlay",
        style: c({background: o.overlay})
    }, null, 4);
}

const D = /* @__PURE__ */ a(H, [["render", N], ["__scopeId", "data-v-95abe06c"]]), v = (e, t) => {
    let o = "null";
    return (...r) => {
        o === "null" && (o = setTimeout(() => {
            e(...r), o = "null";
        }, t));
    };
}, G = {
    data() {
        return {
            width: 0
        };
    },
    computed: {
        current() {
            if (this.sources.length === 0)
                return this.default;
            const e = this.sources.sort((t, o) => t.res - o.res).filter((t) => t.res >= this.width);
            return e.length === 0 ? this.default : e[0];
        },
        default() {
            return {
                src: this.src,
                poster: this.poster,
                autoplay: this.autoplay
            };
        }
    },
    methods: {
        $_change_video_resolution() {
            this.width = this.$_innerWidth();
        },
        $_innerWidth() {
            return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth;
        }
    },
    beforeMount() {
        this.$_change_video_resolution();
    },
    mounted() {
        window.addEventListener("resize", v(this.$_change_video_resolution, 250));
    },
    beforeUnmount() {
        window.removeEventListener("resize", v(this.$_change_video_resolution, 250));
    }
};
const U = {
    props: B,
    mixins: [G],
    emits: ["playing", "error", "loading", "ended", "ready"],
    components: {
        VideoPlayer: z,
        VideoPoster: A,
        VideoOverlay: D
    },
    computed: {
        player() {
            return this.$refs.player;
        }
    },
    methods: {
        playVideo() {
            this.$emit("ready"), this.current.autoplay && this.player.play();
        }
    }
}, J = {
    class: "vue-responsive-videobg",
    ref: "vidbg"
}, K = {class: "videobg-content"};

function Q(e, t, o, r, i, n) {
    const $ = u("video-poster"), g = u("video-player"), b = u("video-overlay");
    return s(), y("section", J, [
        e.current.poster || e.poster ? (s(), p($, {
            key: 0,
            poster: e.current.poster || e.poster
        }, null, 8, ["poster"])) : h("", !0),
        P(g, {
            ref: "player",
            src: e.current.src,
            muted: e.muted,
            loop: e.loop,
            preload: e.preload,
            "plays-when": e.playsWhen,
            "playback-rate": e.playbackRate,
            transition: e.transition,
            "object-fit": e.objectFit,
            onReady: n.playVideo,
            onPlaying: t[0] || (t[0] = (l) => e.$emit("playing")),
            onError: t[1] || (t[1] = (l) => e.$emit("error")),
            onLoading: t[2] || (t[2] = (l) => e.$emit("loading")),
            onEnded: t[3] || (t[3] = (l) => e.$emit("ended"))
        }, null, 8, ["src", "muted", "loop", "preload", "plays-when", "playback-rate", "transition", "object-fit", "onReady"]),
        e.overlay ? (s(), p(b, {
            key: 1,
            overlay: e.overlay
        }, null, 8, ["overlay"])) : h("", !0),
        d("div", K, [
            j(e.$slots, "default", {}, void 0, !0)
        ])
    ], 512);
}

const X = /* @__PURE__ */ a(U, [["render", Q], ["__scopeId", "data-v-7649c24c"]]), Z = {
    install(e) {
        e.component("VideoBackground", X);
    }
};
export {
    Z as Plugin,
    X as default
};
