export default function HowWeWork() {
  return (
    <section
      id="how-we-work"
      className="overflow-hidden bg-[#e3dacc] px-6 py-[53px] lg:px-0 lg:py-[8vw]"
    >
      <div className="lg:grid lg:grid-cols-[1fr_22.5vw]">
        <div className="lg:pb-0 lg:pl-[8.9vw] lg:pr-[9.2vw] lg:pt-[0.5vw]">
          <p className="label-caps hero-label">How we work</p>

          <h2 className="mt-[45px] text-[2.1rem] leading-[1.15] lg:mt-[10.3vw] lg:text-[4.3vw] lg:leading-[1.05]">
            We’re here to make a difference.
          </h2>

          <img
            src="/images/how-we-work.jpg"
            alt="A woman and a child dancing on a sandy beach"
            className="mb-[59px] mt-14 aspect-[367/298] w-full object-cover lg:hidden"
          />

          <div className="flex flex-col gap-6 lg:mt-[4.2vw] lg:grid lg:grid-cols-2 lg:gap-x-[1.7vw] lg:gap-y-0">
            <div>
              <p className="label-caps hero-label">
                The clients we work with are balancing so many things at once,
                it’s often hard for them to put themselves first.
              </p>
              <p className="intro-p mt-4 lg:mt-[1.2vw]">
                Here, your needs are always top priority. Our team takes the
                time to deeply listen to our clients in order to truly
                understand their story and their struggles. We recognize that no
                two people are the same and that personalized therapy means an
                intentional, tailored approach. (You won’t find anything
                “one-size-fits-all” here.) If you’re ready to do the work, we’re
                ready to help.
              </p>
            </div>

            <div>
              <p className="intro-p">
                Sometimes we may gently challenge you to look at things
                differently and other times we may explore your emotions, all
                while encouraging you to practice what you’ve learned in your
                daily life. We take what we do seriously because we know how
                important it is for you to heal from what’s hurting you,
                discover a fulfilling life, and build meaningful relationships.
                Our goal is to walk alongside you in this journey, offering
                support and guidance as you uncover your strengths and embrace
                what the future can hold for you.
              </p>
            </div>
          </div>

          <a
            href="#about"
            className="link-btn label-caps mt-10 text-[13px] lg:mt-[6vw] lg:text-[0.95vw]"
          >
            Learn more about us
          </a>
        </div>

        <img
          src="/images/how-we-work.jpg"
          alt="A woman and a child dancing on a sandy beach"
          className="hidden h-full w-full object-cover lg:block"
        />
      </div>
    </section>
  );
}