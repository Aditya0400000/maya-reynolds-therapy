export default function HowWeWork() {
  return (
    <section
      id="meet-maya"
      className="overflow-hidden bg-sand px-6 py-[53px] lg:px-0 lg:py-[8vw]"
    >
      <div className="lg:grid lg:grid-cols-[1fr_22.5vw]">
        <div className="lg:pb-0 lg:pl-[8.9vw] lg:pr-[9.2vw] lg:pt-[0.5vw]">
          <p className="label-caps hero-label">Meet Dr. Maya Reynolds, PsyD</p>

          <h2 className="mt-[45px] text-[2.1rem] leading-[1.15] lg:mt-[10.3vw] lg:text-[4.3vw] lg:leading-[1.05]">
            A grounded, collaborative approach.
          </h2>

          <img
            src="/images/maya.jpg"
            alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
            className="mb-[59px] mt-14 aspect-[4/5] w-full object-cover object-top lg:hidden"
          />

          <div className="flex flex-col gap-6 lg:mt-[4.2vw] lg:grid lg:grid-cols-2 lg:gap-x-[1.7vw] lg:gap-y-0">
            <div>
              <p className="label-caps hero-label">
                I take a warm, collaborative, and grounded approach to therapy.
              </p>
              <p className="intro-p mt-4 lg:mt-[1.2vw]">
                I’m a licensed clinical psychologist based in Santa Monica,
                California. Sessions are structured enough to feel supportive,
                while still leaving space for reflection and depth. My goal is
                not just symptom relief, but helping you build insight,
                resilience, and a stronger relationship with yourself.
              </p>
            </div>

            <div>
              <p className="intro-p">
                I integrate evidence-based methods such as cognitive-behavioral
                therapy (CBT), EMDR, mindfulness-based practices, and
                body-oriented techniques to help you understand both the
                emotional and physiological sides of what you’re experiencing.
                Therapy works best when you feel respected, understood, and
                actively involved in the process.
              </p>
            </div>
          </div>

          <a
            href="#services"
            className="link-btn label-caps mt-10 text-[13px] lg:mt-[6vw] lg:text-[0.95vw]"
          >
            Explore my services
          </a>
        </div>

        <img
          src="/images/maya.jpg"
          alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
          className="hidden h-full w-full object-cover object-top lg:block"
        />
      </div>
    </section>
  );
}