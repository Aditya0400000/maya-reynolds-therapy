const details = [
  {
    label: "Address",
    value: "123th Street 45 W, Santa Monica, CA 90401",
  },
  {
    label: "Sessions",
    value:
      "In-person in Santa Monica and secure telehealth for clients located in California",
  },
  {
    label: "The space",
    value:
      "Quiet, private, and grounding, with natural light and an uncluttered feel",
  },
];

export default function OurOffice() {
  return (
    <section
      id="office"
      className="overflow-hidden bg-sand px-6 py-[53px] lg:px-0 lg:py-[8vw]"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1fr_46vw] lg:items-center lg:gap-0">
        <div className="lg:pl-[8.9vw] lg:pr-[5vw]">
          <p className="label-caps hero-label">Our office · Santa Monica, CA</p>

          <h2 className="mt-8 text-[2.1rem] leading-[1.15] lg:mt-[3vw] lg:text-[3.8vw] lg:leading-[1.08]">
            A calm, private space for{" "}
            <span className="script-word">healing</span>.
          </h2>

          <p className="intro-p mt-7 lg:mt-[2.2vw] lg:max-w-[34vw]">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding, with natural light and a comfortable,
            uncluttered environment. Clients often share that the space itself
            helps them feel more at ease when they arrive.
          </p>

          <ul className="mt-8 divide-y divide-line border-y border-line lg:mt-[3vw] lg:max-w-[34vw]">
            {details.map((d) => (
              <li key={d.label} className="py-4 lg:py-[1.1vw]">
                <p className="label-caps text-[12px] lg:text-[0.85vw]">
                  {d.label}
                </p>
                <p className="intro-p mt-1">{d.value}</p>
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="link-btn label-caps mt-10 text-[13px] lg:mt-[3vw] lg:text-[0.95vw]"
          >
            Schedule an appointment
          </a>
        </div>

        <div className="flex flex-col gap-4 lg:gap-[1.6vw] lg:pr-[5vw]">
          <img
            src="/images/office-1.jpg"
            alt="Dr. Reynolds' Santa Monica office with natural light, a grey sofa and exposed brick"
            className="aspect-[4/3] w-[88%] object-cover"
          />
          <img
            src="/images/office-2.jpg"
            alt="A calm corner of the therapy office with a bookshelf, plant and armchair"
            className="aspect-[4/3] w-[88%] self-end object-cover"
          />
        </div>
      </div>
    </section>
  );
}