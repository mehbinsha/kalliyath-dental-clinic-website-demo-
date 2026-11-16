import Image from "next/image";
import { IndianRupee, Settings2, ShieldCheck, UserRound } from "lucide-react";

const benefits = [
  {
    title: "Experienced Doctors",
    description: "Expert dental care with a personal touch.",
    Icon: UserRound,
  },
  {
    title: "Modern Equipment",
    description: "Advanced technology for better treatment.",
    Icon: Settings2,
  },
  {
    title: "Hygienic & Safe",
    description: "Sterile and clean environment.",
    Icon: ShieldCheck,
  },
  {
    title: "Affordable Care",
    description: "Quality treatment at reasonable cost.",
    Icon: IndianRupee,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="bg-mint/50 px-5 py-9 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto grid max-w-[1360px] items-center gap-7 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        <div className="relative aspect-[1.55] w-full overflow-hidden rounded-2xl sm:rounded-[22px]">
          <Image
            src="/smile-care-placeholder.png"
            alt="Close-up of a natural smile during dental care"
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-cover object-[center_48%]"
          />
        </div>

        <div className="min-w-0 lg:py-3">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
            Why Choose Us
          </p>
          <h2
            id="why-choose-us-heading"
            className="max-w-[460px] text-[23px] font-extrabold leading-[1.12] tracking-[-0.035em] text-foreground sm:text-[27px] lg:text-[30px]"
          >
            Because You Deserve a Confident Smile
          </h2>

          <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-4 sm:mt-6 sm:gap-x-5 sm:gap-y-5">
            {benefits.map(({ title, description, Icon }) => (
              <li key={title} className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/75 text-green-dark sm:h-11 sm:w-11">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                </span>
                <span className="min-w-0 pt-0.5">
                  <span className="block text-[12px] font-bold leading-snug text-foreground sm:text-sm">
                    {title}
                  </span>
                  <span className="mt-1 block text-[11px] leading-[1.45] text-muted sm:text-xs">
                    {description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
