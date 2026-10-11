export default function Intro() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-[70fr_30fr]">
        <div className="px-6 py-14 lg:py-[7vw] lg:pl-[8.9vw] lg:pr-[9.5vw]">
          <h2 className="section-h2">
            You look functional on the outside, but feel exhausted on the
            inside.
          </h2>

          <div className="mt-10 flex flex-col lg:mt-[7.5vw] lg:grid lg:grid-cols-2 lg:gap-[2vw]">
            <div>
              <p className="label-caps hero-label">
                At my Santa Monica practice, I help adults slow down and feel
                steady again.
              </p>
              <p className="intro-p mt-6 lg:mt-[1.2vw]">
                Many of the people I work with are high-achieving, thoughtful,
                and self-aware, but internally feel exhausted, stuck in
                overthinking, or emotionally on edge. Whether you are living
                with anxiety, panic, trauma, or burnout, you deserve support
                that meets you where you are.
              </p>
            </div>

            <img
              src="/images/intro-beach.jpg"
              alt="Calm ocean horizon under a soft peach sky"
              className="my-[13vw] aspect-[367/260] w-full object-cover lg:hidden"
            />

            <div>
              <p className="intro-p">
                Clients often come to me feeling “functional” on the outside
                while quietly struggling with constant worry, tension in their
                body, difficulty sleeping, or a sense that they’re always
                bracing for something to go wrong. Together, we build practical
                tools and deeper insight, so you can feel more regulated,
                resilient, and connected to yourself.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/intro-beach.jpg"
          alt="Calm ocean horizon under a soft peach sky"
          className="hidden h-full w-full object-cover lg:block"
        />
      </div>
    </section>
  );
}