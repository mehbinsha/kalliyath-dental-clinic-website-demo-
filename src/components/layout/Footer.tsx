import {
  AtSign,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  UsersRound,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#why-choose-us" },
  { label: "Services", href: "#services" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Patient Stories", href: "#stories" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function ClinicMark() {
  return (
    <svg aria-hidden="true" className="h-12 w-11 shrink-0" viewBox="0 0 48 54" fill="none">
      <path
        d="M24 2 44 9v14c0 13-8.6 23.8-20 29C12.6 46.8 4 36 4 23V9L24 2Z"
        fill="currentColor"
      />
      <path
        d="M16.4 17.5c2.4-2.2 5.2-1 7.6.1 2.4-1.1 5.2-2.3 7.6-.1 3.2 2.9 1.6 7.4-.2 11.3-1.7 3.8-2.2 8.3-4.5 8.3-1.8 0-1.4-6-2.9-6s-1.1 6-2.9 6c-2.3 0-2.8-4.5-4.5-8.3-1.8-3.9-3.4-8.4-.2-11.3Z"
        fill="white"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-white px-5 pb-5 pt-9 text-foreground sm:px-8 sm:pt-11 lg:px-10 lg:pt-12">
      <div className="mx-auto grid max-w-[1360px] grid-cols-1 gap-8 pb-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-9 lg:grid-cols-[1.15fr_1fr_1.2fr_0.8fr] lg:gap-10 lg:pb-10">
        <div>
          <a href="#home" className="flex w-fit items-center gap-3" aria-label="Kalliyath Dental Clinic home">
            <ClinicMark />
            <span className="flex flex-col leading-none">
              <span className="text-base font-extrabold tracking-[0.045em] text-green-dark">
                KALLIYATH
              </span>
              <span className="mt-1 text-[10px] font-semibold tracking-[0.11em] text-green-dark">
                DENTAL CLINIC
              </span>
            </span>
          </a>
          <p className="mt-3 pl-[3.75rem] text-[11px] text-muted">
            Healthy Smiles, Happy Lives.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="mb-3 text-xs font-bold text-foreground">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="inline-flex min-h-6 items-center text-[11px] text-muted transition-colors hover:text-green-dark"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="footer-contact-heading">
          <h2 id="footer-contact-heading" className="mb-3 text-xs font-bold text-foreground">
            Contact Us
          </h2>
          <ul className="space-y-2.5 text-[11px] text-muted">
            <li>
              <a href="tel:+917760197138" className="inline-flex min-h-6 items-center gap-2 hover:text-green-dark">
                <Phone aria-hidden="true" size={14} className="shrink-0 text-green-dark" />
                7760 197 138
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/917760197138"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-6 items-center gap-2 hover:text-green-dark"
              >
                <MessageCircle aria-hidden="true" size={14} className="shrink-0 text-green-dark" />
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kalliyath+Dental+Clinic"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-6 items-center gap-2 hover:text-green-dark"
                aria-label="Search Kalliyath Dental Clinic on Google Maps; confirm the correct location"
              >
                <MapPin aria-hidden="true" size={14} className="shrink-0 text-green-dark" />
                Search Kalliyath Dental Clinic on Maps
              </a>
            </li>
            <li className="flex items-start gap-2 leading-relaxed">
              <MapPin aria-hidden="true" size={14} className="mt-0.5 shrink-0 text-green-dark" />
              <span>Full clinic address to be confirmed.</span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="footer-social-heading">
          <h2 id="footer-social-heading" className="mb-3 text-xs font-bold text-foreground">
            Follow Us
          </h2>
          <ul className="flex flex-wrap gap-2">
            <li>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border px-3 text-[11px] text-muted" aria-label="Instagram profile link not provided">
                <AtSign aria-hidden="true" size={14} className="text-green-dark" />
                Instagram · link pending
              </span>
            </li>
            <li>
              <span className="inline-flex min-h-9 items-center gap-2 rounded-full border border-border px-3 text-[11px] text-muted" aria-label="Facebook profile link not provided">
                <UsersRound aria-hidden="true" size={14} className="text-green-dark" />
                Facebook · link pending
              </span>
            </li>
          </ul>
        </section>
      </div>

      <div className="mx-auto flex max-w-[1360px] flex-col gap-3 border-t border-border pt-4 text-[10px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Kalliyath Dental Clinic. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a href="/privacy-policy" className="hover:text-green-dark">Privacy Policy</a>
          <a href="/terms" className="hover:text-green-dark">Terms</a>
          <span className="inline-flex items-center gap-1">
            Designed with care <Heart aria-hidden="true" size={11} className="fill-green text-green" />
          </span>
        </div>
      </div>
    </footer>
  );
}
