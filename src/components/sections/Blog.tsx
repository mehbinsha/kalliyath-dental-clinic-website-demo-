import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Article = {
  category: string;
  title: string;
  image: string;
  imageAlt: string;
  href: string;
};

const articles: Article[] = [
  {
    category: "Pediatric Dental Care",
    title: "How Baby Bottles Affect Your Child's Teeth?",
    image: "/blog-baby-bottle-illustration.png",
    imageAlt: "Editorial illustration of an infant holding an unbranded feeding bottle",
    href: "/blog/pediatric-dental-care",
  },
  {
    category: "Dental Implants",
    title: "What Happens If You Don't Replace a Missing Tooth?",
    image: "/blog-dental-implant-illustration.png",
    imageAlt: "Editorial illustration of a dental implant fixture and a ceramic crown",
    href: "/blog/dental-implants",
  },
  {
    category: "Dental Makeover",
    title: "From Camera Shyness to Screen-Ready: A Smile Makeover Journey",
    image: "/blog-smile-makeover-illustration.png",
    imageAlt: "Editorial illustration of a woman smiling while speaking with a dental professional",
    href: "/blog/dental-makeover",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="bg-[#fff7e7] px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1360px]">
        <header className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[560px]">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
              Our Blog
            </p>
            <h2
              id="blog-heading"
              className="text-[24px] font-extrabold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-[28px]"
            >
              Insights for a Calmer Dental Experience
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex w-fit items-center gap-2 text-xs font-bold text-foreground transition-colors hover:text-green sm:mb-1 sm:text-sm"
          >
            View All Blogs
            <ArrowRight aria-hidden="true" size={15} />
          </a>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {articles.map(({ category, title, image, imageAlt, href }) => (
            <li key={title} className="min-w-0">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#eadfca] bg-white shadow-[0_4px_14px_rgba(91,73,42,0.06)]">
                <a href={href} className="group relative block aspect-[1.8] overflow-hidden">
                  <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 left-3 rounded-full bg-green-dark px-3 py-1 text-[10px] font-semibold text-white sm:text-[11px]">
                    {category}
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.08em] text-green-dark">
                    Illustration
                  </span>
                </a>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                  <h3 className="flex-1 text-[14px] font-bold leading-snug text-foreground sm:text-base">
                    {title}
                  </h3>
                  <a
                    href={href}
                    className="mt-3 inline-flex w-fit items-center gap-1.5 text-[11px] font-semibold text-green-dark transition-colors hover:text-green sm:text-xs"
                  >
                    Read Post
                    <ArrowRight aria-hidden="true" size={13} />
                  </a>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
