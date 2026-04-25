import BrandMark from "@/components/ui/BrandMark";

export default function LeftPanel() {
  return (
    <div className="relative hidden overflow-hidden lg:flex lg: pt-60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.18),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(214,115,255,0.16),transparent_20%),linear-gradient(180deg,#080c1f_0%,#060918_46%,#080d21_100%)]" />
      <div className="ph-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-y-16 left-10 w-32 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-hero-secondary/10 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-between px-10 py-14 xl:px-14">
        <div>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1] tracking-[-0.05em] xl:text-6xl">
            <span className="ph-text-gradient">Operate hackathons</span>
            <br />
            <span className="text-white">with a sharper, premium-grade</span>
            <br />
            <span className="ph-violet-gradient">product presence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/76">
            Every login becomes part of the brand experience. Organizers,
            judges, and participants enter a polished system that feels ready
            for production.
          </p>
        </div>
      </div>
    </div>
  );
}
