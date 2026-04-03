import Image from "next/image";

const logos = [
  { src: "/Images/Approvals Logo PNG 1-1/DM.webp", name: "Dubai Municipality" },
  { src: "/Images/Approvals Logo PNG 1-1/DCD.webp", name: "Dubai Civil Defense" },
  { src: "/Images/Approvals Logo PNG 1-1/DEWA.webp", name: "DEWA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHA 1.webp", name: "DHA" },
  { src: "/Images/Approvals Logo PNG 1-1/Trakhees.webp", name: "Trakhees" },
  { src: "/Images/Approvals Logo PNG 1-1/Jafza.webp", name: "JAFZA" },
  { src: "/Images/Approvals Logo PNG 1-1/Emaar.webp", name: "Emaar" },
  { src: "/Images/Approvals Logo PNG 1-1/Nakheel.webp", name: "Nakheel" },
  { src: "/Images/Approvals Logo PNG 1-1/DAMAC.webp", name: "DAMAC" },
  { src: "/Images/Approvals Logo PNG 1-1/DIEZ.webp", name: "DIEZ" },
  { src: "/Images/Approvals Logo PNG 1-1/DSO.webp", name: "DSO" },
  { src: "/Images/Approvals Logo PNG 1-1/Dubai South.webp", name: "Dubai South" },
  { src: "/Images/Approvals Logo PNG 1-1/DDA.webp", name: "DDA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHCC.webp", name: "DHCC" },
  { src: "/Images/Approvals Logo PNG 1-1/Concordia.webp", name: "Concordia" },
];

export default function LogoSlider() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary">Our Authorities</h2>
        <p className="mt-3 text-text-secondary">
          One-stop engineering approval solutions for all authorities across Dubai
        </p>
      </div>

      {/* Sliding row — CSS animation-iteration-count handles looping,
          no JS array duplication needed — keeps DOM at 15 elements */}
      <div className="relative logo-slider">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {/* First set — visible to screen readers */}
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="shrink-0 mx-6 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={140}
                height={70}
                loading="lazy"
                sizes="140px"
                quality={75}
                className="h-16 sm:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate set — hidden from screen readers, needed for seamless CSS loop */}
          <div aria-hidden="true" className="contents">
            {logos.map((logo) => (
              <div
                key={`dup-${logo.name}`}
                className="shrink-0 mx-6 flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={140}
                  height={70}
                  loading="lazy"
                  sizes="140px"
                  quality={75}
                  className="h-16 sm:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
