import Link from "next/link";
import { Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";

const footerSections = [
  {
    title: "About",
    links: [
      { label: "Why PrimeHacks", href: "/about" },
      { label: "Organizer Stories", href: "/organizers" },
      { label: "Platform Updates", href: "/changelog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Host a Hackathon", href: "/resources" },
      { label: "Judging Guide", href: "/judging" },
      { label: "Submission Flow", href: "/submissions" },
      { label: "Help Center", href: "/help" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Student Events", href: "/programs/students" },
      { label: "Startup Challenges", href: "/programs/startups" },
      { label: "Sponsor Tracks", href: "/programs/sponsors" },
      { label: "Community Grants", href: "/programs/grants" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Report Issue", href: "/support" },
      { label: "Message Us", href: "/contact" },
      { label: "Discord", href: "/discord" },
      { label: "Email", href: "mailto:hello@primehacks.dev" },
    ],
  },
];

const socialLinks = [
  { label: "X", href: "https://x.com", icon: Twitter },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
];

export default function PrimeHacksFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-border/70 bg-[linear-gradient(180deg,rgba(8,12,28,0.94)_0%,rgba(9,13,31,0.98)_55%,rgba(6,9,24,1)_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(124,92,255,0.12),transparent_22%),radial-gradient(circle_at_84%_14%,rgba(86,186,255,0.10),transparent_18%),radial-gradient(circle_at_50%_100%,rgba(214,115,255,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr] lg:gap-20">
          <div className="space-y-10">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="ph-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-button-primary text-white">
                <Sparkles className="h-4 w-4" />
              </div>

              <div>
                <p className="font-display text-[30px] font-semibold leading-none text-white">
                  PrimeHacks
                </p>
                <p className="mt-2 text-sm text-white/68">
                  Premium hackathon platform
                </p>
              </div>
            </Link>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                Follow Us
              </p>

              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/72 transition hover:border-primary/30 hover:bg-primary/10 hover:text-white"
                      aria-label={item.label}
                    >
                      <Icon className="h-5 w-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                  {section.title}
                </p>

                <div className="mt-6 space-y-4">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="block text-[15px] leading-7 text-white/68 transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-border/60 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-5 py-6 text-sm text-white/64 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <p>&copy; {year} PrimeHacks. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/code-of-conduct"
              className="transition hover:text-primary"
            >
              Code of conduct
            </Link>
            <Link
              href="/privacy-policy"
              className="transition hover:text-primary"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition hover:text-primary"
            >
              Terms of service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
