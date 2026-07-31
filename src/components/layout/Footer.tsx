import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

export function Footer() {
  return (
    <footer className="relative border-t border-border/70 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-display text-sm font-semibold">{profile.name}</div>
          <p className="mt-1 text-xs text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
            { icon: Github, href: profile.github, label: "GitHub" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
