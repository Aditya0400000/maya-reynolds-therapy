const items = [
  {
    title: "Anxiety & Panic Therapy",
    text: "Constant worry, racing thoughts, and tension in your body can make life feel like you are always bracing for something to go wrong. Using CBT, mindfulness-based practices, and body-oriented techniques, we work together to calm your nervous system and help you feel steady in everyday life.",
  },
  {
    title: "Trauma Therapy & EMDR",
    text: "I work with adults who have experienced single-incident trauma as well as long-standing patterns from childhood, relationships, or chronic stress. Using EMDR and a carefully paced approach, we focus on safety, stabilization, and helping you feel more regulated beyond our sessions.",
  },
  {
    title: "Burnout & Perfectionism",
    text: "If you have been pushing through stress for years, you may feel disconnected from yourself. Therapy becomes a space to slow down, ease high internal pressure, and develop more sustainable ways of living and working.",
  },
];

export default function SpecialtiesList() {
  return (
    <section
      id="services"
      className="bg-surface px-6 py-[53px] lg:py-[8vw] lg:pl-[8.9vw] lg:pr-[4.8vw]"
    >
      <div className="flex flex-col gap-[100px] lg:grid lg:grid-cols-[30.1vw_1fr] lg:gap-0">
        <h2 className="text-[1.7rem] leading-[1.2] lg:pr-[2vw] lg:text-[3.4vw] lg:leading-[1.1]">
          My <span className="script-word">services</span> include…
        </h2>

        <div className="flex flex-col gap-[87px] lg:grid lg:grid-flow-col lg:grid-rows-2 lg:gap-x-[4.4vw] lg:gap-y-[8.9vw] lg:pt-[0.8vw]">
          {items.map((item) => (
            <article key={item.title}>
              <h3 className="text-[1.3rem] leading-tight lg:text-[2.2vw] lg:leading-[1.05]">
                {item.title}
              </h3>
              <p className="intro-p mt-[44px] lg:mt-[2.6vw]">{item.text}</p>
              <a
                href="#book"
                className="link-btn label-caps mt-6 text-[13px] lg:mt-[1.7vw] lg:text-[0.95vw]"
              >
                Get started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}