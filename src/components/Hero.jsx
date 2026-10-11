export default function Hero() {
  return (
    <section className="overflow-hidden pb-8 lg:pb-[6vw]">
      <div className="grid grid-cols-[71fr_14.6fr_14.4fr] lg:h-[43.2vw] lg:grid-cols-[34.4fr_57.6fr_8fr]">
        <div className="col-span-3 col-start-1 row-start-1 flex flex-col justify-between gap-12 px-6 pb-[15vw] pt-[16vw] lg:col-span-1 lg:col-start-2 lg:gap-0 lg:pb-[1vw] lg:pl-[8.5vw] lg:pr-0 lg:pt-[0.6vw]">
          <p className="label-caps hero-label lg:max-w-[28vw]">
            Licensed clinical psychologist in Santa Monica, CA
          </p>

          <div>
            <h1 className="text-[2.4rem] leading-[1.15] lg:text-[4.4vw] lg:leading-[1.25]">
              <span className="lg:block lg:whitespace-nowrap">
                Anxiety &amp; Trauma
              </span>{" "}
              <span className="lg:block lg:whitespace-nowrap">
                Therapy in Santa Monica
              </span>{" "}
              <span className="lg:block lg:whitespace-nowrap">
                to finally <span className="script-word">exhale</span>.
              </span>
            </h1>

            <p className="hero-sub mt-8 lg:mt-[2.2vw] lg:max-w-[44vw]">
              Warm, evidence-based therapy for high-achieving adults who feel
              overwhelmed, burned out, or stuck in overthinking, in person or
              online across California.
            </p>

            <a
              href="#book"
              className="link-btn hero-btn label-caps mt-8 lg:mt-[2.4vw]"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        <img
          src="/images/hero-1.jpg"
          alt="A woman walking along a quiet beach at golden hour"
          className="col-start-1 row-start-2 aspect-[296/336] w-full object-cover lg:row-start-1 lg:aspect-auto lg:h-full"
        />

        <img
          src="/images/hero-2.jpg"
          alt="Gentle ocean waves on warm sand"
          className="col-start-3 row-start-2 aspect-[60/220] w-full self-end object-cover lg:row-start-1 lg:aspect-auto lg:h-[29vw]"
        />
      </div>
    </section>
  );
}