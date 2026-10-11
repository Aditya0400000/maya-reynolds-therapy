const navigate = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#book" },
];

const services = [
  "Anxiety & Panic Therapy",
  "Trauma Therapy & EMDR",
  "Burnout & Perfectionism",
];

const linkClass = "text-[13.5px] leading-[1.88] lg:text-[1.15vw] lg:leading-[1.85]";
const headClass = "label-caps text-[14.5px] lg:text-[1.15vw]";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col bg-surface px-[11.2vw] pb-[43px] pt-[90px] lg:grid lg:grid-cols-[36.2vw_15.1vw_18.9vw_1fr] lg:items-start lg:px-0 lg:pb-[10.4vw] lg:pl-[6.7vw] lg:pr-[3vw] lg:pt-[4.9vw]">
        <div className="order-1">
          <a href="#" aria-label="Dr. Maya Reynolds, PsyD, home" className="block">
            <span className="block font-heading text-[14.3vw] font-light leading-none lg:text-[4.3vw]">
              Maya Reynolds
            </span>
            <span className="mt-[1.8vw] block pl-[1.2vw] text-[3.76vw] font-normal uppercase tracking-[0.42em] text-brand lg:mt-[0.45vw] lg:pl-[0.4vw] lg:text-[1.13vw]">
              Clinical Psychology
            </span>
          </a>

          <p className="intro-p mt-10 max-w-[288px] lg:mt-[3.4vw] lg:max-w-[24.7vw]">
            I want to make getting started simple. You’re welcome to come into
            my office in Santa Monica or schedule secure telehealth sessions
            from anywhere in California, whatever works best for you.
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="order-2 ml-[6vw] mt-[70px] lg:ml-0 lg:mt-0"
        >
          <p className={headClass}>Navigate</p>
          <ul className="mt-[41px] lg:mt-[3.3vw]">
            {navigate.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`${linkClass} transition-colors hover:text-brand`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-3 ml-[6vw] mt-[45px] lg:order-4 lg:ml-0 lg:mt-0">
          <p className={headClass}>Office</p>
          <address className={`mt-[41px] not-italic lg:mt-[3.3vw] ${linkClass}`}>
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </address>

          <p className={`mt-[17px] italic lg:mt-[1.2vw] lg:max-w-[16vw] ${linkClass}`}>
            In-person in Santa Monica and secure telehealth for clients located
            in California
          </p>

          <a
            href="#book"
            className="link-btn label-caps mt-6 text-[12px] lg:mt-[1.7vw] lg:text-[0.9vw]"
          >
            Book an appointment
          </a>
        </div>

        <div className="order-4 ml-[6vw] mt-[45px] lg:order-3 lg:ml-0 lg:mt-0">
          <p className={headClass}>Services</p>
          <ul className="mt-[41px] lg:mt-[3.3vw]">
            {services.map((name) => (
              <li key={name}>
                <a
                  href="#services"
                  className={`${linkClass} transition-colors hover:text-brand`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-ink px-[7.9vw] py-[10px] text-[12.5px] leading-[2] text-white lg:px-[6.8vw] lg:py-[0.55vw] lg:text-[1.15vw] lg:leading-[1.8]">
        © 2026 Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist · Santa
        Monica, CA
      </div>
    </footer>
  );
}