const areas = [
  "Anxiety",
  "Panic",
  "Trauma",
  "Complex trauma",
  "Burnout",
  "Perfectionism",
  "Overthinking",
  "Stress",
  "Sleep difficulties",
  "Body tension",
  "High internal pressure",
  "…and more.",
];

export default function Expertise() {
  return (
    <section className="bg-surface px-6 py-[53px] lg:px-[8.9vw] lg:py-[8vw]">
      <div className="flex flex-col gap-[70px] lg:grid lg:grid-cols-[26.4vw_1fr] lg:gap-0">
        <h2 className="text-[1.7rem] leading-tight lg:text-[3.4vw] lg:leading-[1.05]">
          My areas of{" "}
          <span className="script-word lg:block">expertise</span>
        </h2>

        <ul className="lg:grid lg:grid-flow-col lg:grid-rows-6 lg:gap-x-[4.7vw]">
          {areas.map((item, i) => (
            <li
              key={item}
              className={`label-caps border-b border-line py-[26px] text-[14px] lg:py-[1.9vw] lg:text-[1.15vw] ${
                i === areas.length - 1 ? "border-b-0" : ""
              } ${i === 5 ? "lg:border-b-0" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}