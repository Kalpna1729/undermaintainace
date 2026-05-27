import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/")(  {
  component: Index,
  head: () => ({
    meta: [
      { title: "GrowLotus — Website Under Maintenance" },
      {
        name: "description",
        content:
          "GrowLotus is upgrading. Private capital, structured strategically. Schedule a consultation with our advisory team.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Subtle top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "var(--gradient-yellow)" }}
      />

      <div className="relative flex min-h-screen flex-col px-6 py-6 md:px-12 md:py-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-2.5">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl overflow-hidden"
              style={{
                background: "#000000",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <img
                src="/logo.png"
                alt="GrowLotus"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-bold tracking-tight">GrowLotus</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                FINTECH PRIVATE LIMITED
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs backdrop-blur md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">System upgrade in progress</span>
          </div>
        </motion.header>

        {/* Main */}
        <main className="flex flex-1 items-center justify-center py-12">
          <div className="grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr,1fr]">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary">
                <Loader />
                Maintenance Mode
              </div>

              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                Website
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "var(--gradient-yellow)" }}
                >
                  Under Maintenance
                </span>
              </h1>

              <p className="text-lg font-medium text-foreground/90 md:text-xl">
                We're making GrowLotus better, faster, and more powerful.
              </p>

              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                Our team is currently upgrading the platform to deliver a smoother
                experience for strategic funding and private capital solutions.
              </p>

              <p className="border-l-2 border-primary/60 pl-4 text-sm italic text-muted-foreground">
                For urgent funding discussions, our advisory team remains available.
              </p>
            </motion.div>

            {/* Right card */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative rounded-3xl border border-border bg-card/80 p-7 backdrop-blur-xl md:p-9"
              style={{ boxShadow: "var(--shadow-premium)" }}
            >
              <div
                aria-hidden
                className="absolute -top-px left-10 right-10 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #FFD233aa, transparent)",
                }}
              />

              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Reach our team</h2>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Available
                </span>
              </div>

              <div className="space-y-3">
                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="Email"
                  value="support@growlotus.com"
                />
                <ContactRow
                  icon={<Phone className="h-4 w-4" />}
                  label="Phone"
                  value="+91 92666 86415"
                />
              </div>

              <div className="mt-7 rounded-2xl border border-border bg-background/60 p-5">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Upgrade progress</span>
                  <span className="font-mono text-primary">78%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "var(--gradient-yellow)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1.6, ease: "easeOut", delay: 0.5 }}
                  />
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Estimated relaunch: shortly. Thank you for your patience.
                </p>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row"
        >
          <p className="font-medium tracking-wide">
            Private Capital. <span className="text-foreground">Structured Strategically.</span>
          </p>
          <p>© {new Date().getFullYear()} GrowLotus. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all hover:border-primary/40 hover:bg-background">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <motion.span
      className="inline-block h-3 w-3 rounded-full border-2 border-primary/30 border-t-primary"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  );
}
