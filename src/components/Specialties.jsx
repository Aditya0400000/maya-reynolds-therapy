export default function Specialties() {
  return (
    <section
      id="specialties"
      className="overflow-hidden bg-white pb-[60px] pl-6 pt-11 lg:p-0 lg:pb-[6vw] lg:pt-[6vw]"
    >
      <div className="lg:grid lg:grid-cols-[53.3vw_1fr] lg:items-end">
        <img
          src="/images/specialties-family.jpg"
          alt="A family standing together at the edge of the ocean"
          className="aspect-[352/303] w-full object-cover lg:aspect-[1012/733]"
        />

        <h2 className="mt-4 pr-6 text-[2.1rem] leading-[1.15] lg:mt-0 lg:self-end lg:pb-[0.6vw] lg:pl-[4.7vw] lg:pr-0 lg:text-[3.8vw] lg:leading-[1.18]">
          <span className="lg:block lg:whitespace-nowrap">
            Honoring where you’ve
          </span>{" "}
          <span className="lg:block lg:whitespace-nowrap">
            been <span className="script-word">&amp;</span> helping shape
          </span>{" "}
          <span className="lg:block lg:whitespace-nowrap">
            where you’re headed.
          </span>
        </h2>
      </div>

    </section>
  );
}