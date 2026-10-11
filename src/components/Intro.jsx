export default function Intro() {
  return (
    <section id="about" className="overflow-hidden">
      <div className="flex flex-col lg:grid lg:grid-cols-[70fr_30fr]">
        <div className="px-6 py-14 lg:py-[7vw] lg:pl-[8.9vw] lg:pr-[9.5vw]">
          <h2 className="section-h2 lg:text-[3.4vw]">
            You’re holding onto hope that life can be better than it is right
            now.
          </h2>

          <div className="mt-10 flex flex-col lg:mt-[7.5vw] lg:grid lg:grid-cols-2 lg:gap-[2vw]">
            <div>
              <p className="label-caps hero-label">
                At Conejo Valley Family Counseling we want to make that hope a
                reality.
              </p>
              <p className="intro-p mt-6 lg:mt-[1.2vw]">
                Whether you&apos;re an adult seeking personal growth, looking to
                work through your trauma, a couple working on your relationship,
                or a parent looking for support for your child, we provide a
                compassionate and safe space to help you navigate all of
                life’s ups and downs.
              </p>
            </div>

            <img
              src="/images/intro-beach.jpg"
              alt="Gentle ocean waves on a sandy beach"
              className="my-[13vw] aspect-[367/260] w-full object-cover lg:hidden"
            />

            <div>
              <p className="intro-p">
                First and foremost, we believe what you’re going through is
                real, valid, and worthy of support. Our team offers clients in
                the Newbury Park area and across CA an environment to discover a
                new life and a deeper sense of self in the midst of their
                struggles. As we tap into the power of connection and
                understanding, you can find your footing again and take a
                transformative path forward.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/intro-beach.jpg"
          alt="Gentle ocean waves on a sandy beach"
          className="hidden h-full w-full object-cover lg:block"
        />
      </div>
    </section>
  );
}