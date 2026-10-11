const navigate = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#book" },
];

const team = [
  "Jennifer Anderson",
  "Heather Williams-Baumgart",
  "Autumn Bodily",
  "Candace Bletscher",
  "Samantha Johnson",
  "Rosa Gomez",
  "Chad Flores",
  "Simran Sidhu",
  "Jessica Jauregui",
];

const linkClass = "text-[13.5px] leading-[1.88] lg:text-[1.15vw] lg:leading-[1.85]";
const headClass = "label-caps text-[14.5px] lg:text-[1.15vw]";

export default function Footer() {
  return (
    <footer>

      <div className="flex flex-col bg-white px-[11.2vw] pb-[43px] pt-[90px] lg:grid lg:grid-cols-[36.2vw_15.1vw_18.9vw_1fr] lg:items-start lg:px-0 lg:pb-[10.4vw] lg:pl-[6.7vw] lg:pr-[3vw] lg:pt-[4.9vw]">
        <div className="order-1">
          <a href="#" aria-label="Conejo Valley Family Counseling, home" className="block">
            <span className="block font-heading text-[14.3vw] font-light leading-none lg:text-[4.3vw]">
              Conejo Valley
            </span>
            <span className="mt-[1.8vw] block pl-[1.2vw] text-[3.76vw] font-normal uppercase tracking-[0.5em] text-[#85b2b2] lg:mt-[0.45vw] lg:pl-[0.4vw] lg:text-[1.13vw]">
              Family Counseling
            </span>
          </a>

          <p className="intro-p mt-10 max-w-[288px] lg:mt-[3.4vw] lg:max-w-[24.7vw]">
            We want to make getting started simple. You’re welcome to come into
            our office in Newbury Park or schedule virtual appointments from
            anywhere in CA—whatever works best for you.
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
          <p className="label-caps">Contact</p>
          <address className={`mt-[41px] not-italic lg:mt-[3.3vw] ${linkClass}`}>
            925 Broadbeck Dr
            <br />
            Suites 200 and 225
            <br />
            Newbury Park, CA 91320
            <br />
            <a
              href="mailto:info@conejovalleycounseling.com"
              className="transition-colors hover:text-brand"
            >
              info@conejovalleycounseling.com
            </a>
            <br />
            <a href="tel:8052423120" className="transition-colors hover:text-brand">
              805.242.3120
            </a>
          </address>

          <p className={`mt-[17px] italic lg:mt-[1.2vw] lg:max-w-[16vw] ${linkClass}`}>
            Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp;
            Simi Valley
          </p>
        </div>

        <div className="order-4 ml-[6vw] mt-[45px] lg:order-3 lg:ml-0 lg:mt-0">
          <p className={headClass}>Our Team</p>
          <ul className="mt-[41px] lg:mt-[3.3vw]">
            {team.map((name) => (
              <li key={name}>
                <a
                  href="#"
                  className={`${linkClass} transition-colors hover:text-brand`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#85b2b2] px-[7.9vw] py-[10px] text-[12.5px] leading-[2] text-white lg:px-[6.8vw] lg:py-[0.55vw] lg:text-[1.15vw] lg:leading-[1.8]">
        <a href="#" className="hover:opacity-80">Terms</a> |{" "}
        <a href="#" className="hover:opacity-80">Privacy Policy</a> |{" "}
        <a href="#" className="hover:opacity-80">Disclaimer</a> | Website by
        Walker Strategy Co.
      </div>
    </footer>
  );
}