import Image from "next/image";
import { ArrowRight, CalendarDays, Phone, ShieldCheck, Smile, Sparkles } from "lucide-react";

const promises = [
  { label: "Quality Treatment", Icon: Sparkles },
  { label: "Safe & Hygienic", Icon: ShieldCheck },
  { label: "Friendly Care", Icon: Smile },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-mint">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[590px] lg:grid-cols-[0.98fr_1.02fr] xl:min-h-[620px]">
        <div className="relative order-1 h-[clamp(130px,38vw,164px)] min-h-0 overflow-hidden sm:h-[300px] sm:min-h-[300px] lg:order-2 lg:h-auto lg:min-h-0">
          <div className="absolute inset-0 lg:bottom-4 lg:left-0 lg:right-0 lg:top-4 lg:overflow-hidden lg:rounded-l-[42%_18%]">
            <Image
              src="/dental-clinic-hero.png"
              alt="Bright dental treatment room with a teal dental chair and modern equipment"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-[center_44%] lg:object-[center_52%]"
            />
          </div>
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-7 w-full rounded-t-[50%] bg-mint lg:hidden" />
          <p className="absolute right-[7%] top-[13%] hidden max-w-[170px] -rotate-3 text-center font-serif text-xl font-semibold italic leading-tight text-green-dark drop-shadow-sm md:block lg:right-[9%] lg:top-[16%] lg:text-2xl">
            The Power of a
            <br />
            Healthy Smile!
          </p>
        </div>

        <div className="relative order-2 flex min-w-0 flex-col justify-center px-5 pb-8 pt-3 sm:px-9 sm:pb-14 sm:pt-3 lg:order-1 lg:px-10 lg:py-16 xl:pl-[clamp(3rem,7vw,7rem)] xl:pr-8">
          <span className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
            Healthy smiles, happy lives
          </span>
          <h1
            id="hero-heading"
            className="min-w-0 max-w-[620px] text-[clamp(1.75rem,4vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.045em] text-foreground"
          >
            <span className="whitespace-nowrap">Gentle Dental Care</span>
            <br />
            <span className="whitespace-nowrap">
              for a{" "}
              <span className="relative inline-block text-green">
                Brighter You
                <span aria-hidden="true" className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-green/70" />
              </span>
            </span>
          </h1>
          <p className="mt-3 w-full min-w-0 max-w-[340px] text-[14px] leading-[1.65] text-foreground/80 sm:mt-5 sm:max-w-[500px] sm:text-base lg:max-w-[455px] lg:text-[15px]">
            At Kalliyath Dental Clinic, we combine advanced dental care with a compassionate approach to keep your smile healthy and confident.
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
            <a
              href="#appointment"
              className="inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-2 rounded-full bg-green-dark px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green sm:w-auto sm:max-w-none sm:min-w-[190px]"
            >
              <CalendarDays aria-hidden="true" size={17} />
              Book Appointment
              <ArrowRight aria-hidden="true" size={16} />
            </a>
            <a
              href="tel:+917760197138"
              className="inline-flex min-h-12 w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-green-dark/40 px-6 text-sm font-semibold text-green-dark transition-colors hover:bg-white/60 sm:w-auto sm:max-w-none sm:min-w-[145px]"
            >
              <Phone aria-hidden="true" size={16} />
              Call 7760 197 138
            </a>
          </div>

          <ul className="mt-5 grid w-full min-w-0 max-w-[500px] grid-cols-3 gap-2 sm:mt-10 sm:gap-4">
            {promises.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex min-h-[78px] min-w-0 flex-col items-center justify-center gap-1 rounded-2xl bg-white/60 px-1 py-2 text-center text-green-dark sm:min-h-0 sm:flex-row sm:items-center sm:justify-start sm:gap-2.5 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:text-left"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/75 sm:h-10 sm:w-10">
                  <Icon aria-hidden="true" size={20} strokeWidth={1.9} />
                </span>
                <span className="max-w-[90px] text-[11px] font-semibold leading-tight sm:max-w-[88px] sm:text-xs">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full border-[22px] border-white/20 lg:block" />
    </section>
  );
}
