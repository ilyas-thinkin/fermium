import Image from "next/image";

const logos = [
  { src: "/Images/Approvals Logo PNG 1-1/DM.png", name: "Dubai Municipality" },
  { src: "/Images/Approvals Logo PNG 1-1/DCD.png", name: "Dubai Civil Defense" },
  { src: "/Images/Approvals Logo PNG 1-1/DEWA.png", name: "DEWA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHA 1.png", name: "DHA" },
  { src: "/Images/Approvals Logo PNG 1-1/Trakhees.png", name: "Trakhees" },
  { src: "/Images/Approvals Logo PNG 1-1/Jafza.png", name: "JAFZA" },
  { src: "/Images/Approvals Logo PNG 1-1/Emaar.png", name: "Emaar" },
  { src: "/Images/Approvals Logo PNG 1-1/Nakheel.png", name: "Nakheel" },
  { src: "/Images/Approvals Logo PNG 1-1/DAMAC.png", name: "DAMAC" },
  { src: "/Images/Approvals Logo PNG 1-1/DIEZ.png", name: "DIEZ" },
  { src: "/Images/Approvals Logo PNG 1-1/DSO.png", name: "DSO" },
  { src: "/Images/Approvals Logo PNG 1-1/Dubai South.png", name: "Dubai South" },
  { src: "/Images/Approvals Logo PNG 1-1/DDA.png", name: "DDA" },
  { src: "/Images/Approvals Logo PNG 1-1/DHCA.png", name: "DHCA" },
  { src: "/Images/Approvals Logo PNG 1-1/Concordia.png", name: "Concordia" },
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

      {/* Sliding row — pauses on hover via CSS */}
      <div className="relative logo-slider">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="shrink-0 mx-6 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={280}
                height={140}
                className="h-32 sm:h-40 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
