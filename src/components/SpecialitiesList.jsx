const items = [
  {
    title: "Trauma",
    text: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
  },
  {
    title: "Dissociation",
    text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
  },
  {
    title: "EMDR",
    text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
  },
  {
    title: "Special Needs Parenting",
    text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
  },
];

export default function SpecialtiesList() {
  return (
    <section className="bg-white px-6 py-[53px] lg:py-[8vw] lg:pl-[8.9vw] lg:pr-[4.8vw]">
      <div className="flex flex-col gap-[100px] lg:grid lg:grid-cols-[30.1vw_1fr] lg:gap-0">
        <h2 className="text-[1.7rem] leading-[1.2] lg:pr-[2vw] lg:text-[3.4vw] lg:leading-[1.1]">
          Our <span className="script-word">specialties</span> include…
        </h2>

        <div className="flex flex-col gap-[87px] lg:grid lg:grid-flow-col lg:grid-rows-2 lg:gap-x-[4.4vw] lg:gap-y-[8.9vw] lg:pt-[0.8vw]">
          {items.map((item) => (
            <article key={item.title}>
              <h3 className="text-[1.3rem] leading-tight lg:text-[2.2vw] lg:leading-[1.05]">
                {item.title}
              </h3>
              <p className="intro-p mt-[44px] lg:mt-[2.6vw]">{item.text}</p>
              <a
                href="#"
                className="link-btn label-caps mt-6 text-[13px] lg:mt-[1.7vw] lg:text-[0.95vw]"
              >
                Learn more
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}