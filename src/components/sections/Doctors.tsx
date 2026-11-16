import Image from "next/image";

type Doctor = {
  name: string;
  designation: string;
  introduction: string;
  image: string;
};

// Temporary AI-generated demo portraits; replace with authentic clinic photos before launch.
const doctors: Doctor[] = [
  {
    name: "Dr. M. Safeer",
    designation: "Dental Surgeon",
    introduction:
      "Committed to providing quality dental care with a patient-first approach.",
    image: "/images/doctors/dr-m-safeer-demo.webp?v=2",
  },
  {
    name: "Dr. Aysha Thameem",
    designation: "Dental Surgeon",
    introduction: "Focused on gentle care and healthier smiles for every patient.",
    image: "/images/doctors/dr-aysha-thameem-demo.webp?v=2",
  },
];

function DoctorPortrait({ doctor }: { doctor: Doctor }) {
  return (
    <div className="relative aspect-[0.94] w-[39%] shrink-0 overflow-hidden rounded-xl bg-mint-strong sm:rounded-2xl">
      <Image
        src={doctor.image}
        alt={`AI-generated illustrative demo portrait of ${doctor.name}; not an actual doctor photograph.`}
        fill
        unoptimized
        sizes="(max-width: 767px) 38vw, 20vw"
        className="object-cover object-center"
      />
    </div>
  );
}

export default function Doctors() {
  return (
    <section
      id="doctors"
      aria-labelledby="doctors-heading"
      className="bg-white px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1100px]">
        <header className="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-green sm:text-xs">
            Our Doctors
          </p>
          <h2
            id="doctors-heading"
            className="text-[22px] font-extrabold leading-tight tracking-[-0.035em] text-foreground sm:text-2xl lg:text-[28px]"
          >
            Meet Our Experienced Dental Surgeons
          </h2>
          <p className="mx-auto mt-2 max-w-[680px] text-[13px] leading-relaxed text-muted sm:text-sm">
            Our qualified and friendly dental professionals are committed to providing the best care for you and your family.
          </p>
        </header>

        <ul className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {doctors.map((doctor) => (
            <li key={doctor.name} className="min-w-0">
              <article className="flex h-full items-stretch gap-4 rounded-2xl border border-border/60 bg-mint/65 p-3 sm:gap-5 sm:p-4">
                <DoctorPortrait doctor={doctor} />
                <div className="flex min-w-0 flex-col justify-center py-1">
                  <h3 className="text-[14px] font-bold leading-snug text-foreground sm:text-base">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-medium text-muted sm:text-xs">
                    {doctor.designation}
                  </p>
                  <p className="mt-3 text-[11px] leading-[1.5] text-foreground/80 sm:mt-4 sm:text-xs">
                    {doctor.introduction}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
