import { Baby, Braces, CircleDot, Siren, Sparkles, Toothbrush } from "lucide-react";

const services = [
  {
    title: "General Dentistry",
    description: "Routine care for healthy teeth",
    Icon: Toothbrush,
  },
  {
    title: "Orthodontics",
    description: "Braces & Alignment",
    Icon: Braces,
  },
  {
    title: "Dental Implants",
    description: "Long lasting solutions",
    Icon: CircleDot,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Smile Makeovers",
    Icon: Sparkles,
  },
  {
    title: "Pediatric Dentistry",
    description: "Gentle care for kids",
    Icon: Baby,
  },
  {
    title: "Emergency Care",
    description: "Prompt treatment",
    Icon: Siren,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-mint/45 px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
            Our Services
          </p>
          <h2
            id="services-heading"
            className="text-[22px] font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-2xl lg:text-[28px]"
          >
            Complete Dental Care Under One Roof
          </h2>
          <p className="mx-auto mt-2 max-w-[680px] text-[13px] leading-relaxed text-muted sm:text-sm">
            From routine checkups to advanced treatments, we offer comprehensive dental care for all age groups.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {services.map(({ title, description, Icon }) => (
            <li key={title} className="min-w-0">
              <article className="flex h-full min-h-[158px] flex-col items-center justify-center rounded-2xl border border-border/80 bg-white/85 px-3 py-5 text-center shadow-[0_3px_12px_rgba(0,77,66,0.045)] transition-shadow hover:shadow-[0_6px_18px_rgba(0,77,66,0.09)] sm:min-h-[172px] sm:px-4">
                <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-mint-strong/75 text-green-dark">
                  <Icon aria-hidden="true" size={25} strokeWidth={1.8} />
                </span>
                <h3 className="text-[13px] font-bold leading-snug text-foreground sm:text-sm">
                  {title}
                </h3>
                <p className="mt-1.5 max-w-[180px] text-[11px] leading-snug text-muted sm:text-xs">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
