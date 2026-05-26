import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1", style: {
      background: "var(--gradient-yellow)"
    } }),
    /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-screen flex-col px-6 py-6 md:px-12 md:py-8", children: [
      /* @__PURE__ */ jsxs(motion.header, { initial: {
        opacity: 0,
        y: -16
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden", style: {
            background: "#000000",
            boxShadow: "var(--shadow-glow)"
          }, children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "GrowLotus", className: "h-8 w-8 object-contain" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col leading-tight", children: [
            /* @__PURE__ */ jsx("span", { className: "text-base font-bold tracking-tight", children: "GrowLotus" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: "FINTECH PRIVATE LIMITED" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs backdrop-blur md:flex", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-primary" })
          ] }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "System upgrade in progress" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("main", { className: "flex flex-1 items-center justify-center py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr,1fr]", children: [
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 24
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7,
          delay: 0.1
        }, className: "space-y-7", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary", children: [
            /* @__PURE__ */ jsx(Loader, {}),
            "Maintenance Mode"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl", children: [
            "Website",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "bg-clip-text text-transparent", style: {
              backgroundImage: "var(--gradient-yellow)"
            }, children: "Under Maintenance" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-foreground/90 md:text-xl", children: "We're making GrowLotus better, faster, and more powerful." }),
          /* @__PURE__ */ jsx("p", { className: "max-w-xl text-base leading-relaxed text-muted-foreground", children: "Our team is currently upgrading the platform to deliver a smoother experience for strategic funding and private capital solutions." }),
          /* @__PURE__ */ jsx("p", { className: "border-l-2 border-primary/60 pl-4 text-sm italic text-muted-foreground", children: "For urgent funding discussions, our advisory team remains available." })
        ] }),
        /* @__PURE__ */ jsxs(motion.div, { id: "contact", initial: {
          opacity: 0,
          scale: 0.96
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.7,
          delay: 0.25
        }, className: "relative rounded-3xl border border-border bg-card/80 p-7 backdrop-blur-xl md:p-9", style: {
          boxShadow: "var(--shadow-premium)"
        }, children: [
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-px left-10 right-10 h-px", style: {
            background: "linear-gradient(90deg, transparent, #FFD233aa, transparent)"
          } }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Reach our team" }),
            /* @__PURE__ */ jsx("span", { className: "rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary", children: "Available" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }), label: "Email", value: "advisory@growlotus.in" }),
            /* @__PURE__ */ jsx(ContactRow, { icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }), label: "Phone", value: "+91 00000 00000" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-7 rounded-2xl border border-border bg-background/60 p-5", children: [
            /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { children: "Upgrade progress" }),
              /* @__PURE__ */ jsx("span", { className: "font-mono text-primary", children: "78%" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsx(motion.div, { className: "h-full rounded-full", style: {
              background: "var(--gradient-yellow)"
            }, initial: {
              width: 0
            }, animate: {
              width: "78%"
            }, transition: {
              duration: 1.6,
              ease: "easeOut",
              delay: 0.5
            } }) }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Estimated relaunch: shortly. Thank you for your patience." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(motion.footer, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.6
      }, className: "flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row", children: [
        /* @__PURE__ */ jsxs("p", { className: "font-medium tracking-wide", children: [
          "Private Capital. ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Structured Strategically." })
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " GrowLotus. All rights reserved."
        ] })
      ] })
    ] })
  ] });
}
function ContactRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-background", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: icon }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-foreground", children: value })
    ] })
  ] });
}
function Loader() {
  return /* @__PURE__ */ jsx(motion.span, { className: "inline-block h-3 w-3 rounded-full border-2 border-primary/30 border-t-primary", animate: {
    rotate: 360
  }, transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  } });
}
export {
  Index as component
};
