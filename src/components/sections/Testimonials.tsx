import { UserRound } from "lucide-react";

const testimonials = [
  { id: "01", label: "TESTIMONIAL PLACEHOLDER 01" },
  { id: "02", label: "TESTIMONIAL PLACEHOLDER 02" },
  { id: "03", label: "TESTIMONIAL PLACEHOLDER 03" },
];

export default function Testimonials() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px]">
        <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
            Patient Stories
          </p>
          <h2
            id="stories-heading"
            className="text-[22px] font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-2xl lg:text-[28px]"
          >
            What Our Patients Say
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4 lg:gap-5">
          {testimonials.map(({ id, label }) => (
            <li key={id} className="min-w-0">
              <figure className="flex h-full min-h-[190px] flex-col rounded-2xl border border-border/50 bg-mint/65 p-5 sm:p-6">
                <span
                  aria-hidden="true"
                  className="-mb-1 h-10 text-[52px] font-bold leading-[0.9] text-green/25"
                >
                  “
                </span>
                <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.12em] text-green sm:text-[10px]">
                  {label}
                </p>
                <blockquote className="flex-1 text-[13px] leading-relaxed text-foreground/80 sm:text-sm">
                  Approved patient testimonial will be added here.
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-mint-strong text-green-dark"
                  >
                    <UserRound size={17} strokeWidth={1.8} />
                  </span>
                  <span className="text-xs font-semibold text-foreground sm:text-[13px]">
                    Patient name placeholder
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
