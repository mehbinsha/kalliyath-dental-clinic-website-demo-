import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ResultCase = {
  label: string;
  title: string;
  beforeImage: string;
  afterImage: string;
};

const cases: ResultCase[] = [
  {
    label: "CASE 01",
    title: "Teeth Whitening",
    beforeImage: "/images/results/teeth-whitening-before.webp",
    afterImage: "/images/results/teeth-whitening-after.webp",
  },
  {
    label: "CASE 02",
    title: "Smile Correction with Composite",
    beforeImage: "/images/results/smile-correction-before.webp",
    afterImage: "/images/results/smile-correction-after.webp",
  },
  {
    label: "CASE 03",
    title: "Dental Implants",
    beforeImage: "/images/results/dental-implants-before.webp",
    afterImage: "/images/results/dental-implants-after.webp",
  },
];

type ComparisonPhotoProps = {
  image: string;
  treatment: string;
  phase: "Before" | "After";
};

function ComparisonPhoto({ image, treatment, phase }: ComparisonPhotoProps) {
  return (
    <div className="relative aspect-[1.12] min-w-0 overflow-hidden rounded-lg bg-mint-strong">
      <Image
        src={image}
        alt={`AI-generated illustrative ${phase.toLowerCase()} image for ${treatment}; not an actual patient result`}
        fill
        sizes="(max-width: 767px) 40vw, (max-width: 1279px) 25vw, 12vw"
        className="object-contain object-center"
      />
    </div>
  );
}

export default function Results() {
  return (
    <section
      id="results"
      aria-labelledby="results-heading"
      className="overflow-hidden bg-green-dark px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto w-full min-w-0 max-w-[1360px] xl:grid xl:grid-cols-[minmax(0,0.82fr)_minmax(0,2.18fr)] xl:items-center xl:gap-8 2xl:gap-12">
        <header className="mb-6 min-w-0 max-w-[400px] sm:mb-8 xl:mb-0">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-mint-strong sm:text-xs">
            Real Results
          </p>
          <h2
            id="results-heading"
            className="text-[25px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[30px]"
          >
            Transforming Smiles, Changing Lives
          </h2>
          <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-white/85 sm:text-sm">
            See how our treatments have helped our patients smile brighter.
          </p>
          <p className="mt-3 max-w-[360px] text-[11px] font-semibold leading-relaxed text-[#f5df8d] sm:text-xs">
            {"AI-generated illustrative images \u2014 not actual patient results."}
          </p>
        </header>

        <ul
          aria-label="Patient smile transformation cases"
          className="-mx-5 flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:gap-4 sm:px-8 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3"
        >
          {cases.map(({ label, title, beforeImage, afterImage }) => (
            <li
              key={label}
              className="w-[min(84vw,20rem)] shrink-0 snap-start md:w-auto md:min-w-0"
            >
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-[0_6px_18px_rgba(0,0,0,0.08)] sm:p-4">
                <div className="grid grid-cols-2 gap-2">
                  <ComparisonPhoto image={beforeImage} treatment={title} phase="Before" />
                  <ComparisonPhoto image={afterImage} treatment={title} phase="After" />
                </div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold tracking-[0.1em] text-mint-strong/80 sm:text-[10px]">
                      {label}
                    </p>
                    <h3 className="mt-1 text-[12px] font-bold leading-snug text-white sm:text-sm">
                      {title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-strong text-green-dark"
                  >
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
