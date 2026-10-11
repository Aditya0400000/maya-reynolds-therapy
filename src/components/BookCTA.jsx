export default function BookCTA() {
  return (
    <section
      id="book"
      className="overflow-hidden bg-paper pb-[43px] pt-[45px] lg:pb-[9.4vw] lg:pt-[6.6vw]"
    >
      <div className="flex flex-col lg:grid lg:grid-cols-[11.75vw_1fr_34.4vw] lg:items-end">
        <img
          src="/images/book-left.jpg"
          alt="A seashell resting in an open hand"
          className="aspect-[182/198] w-[48.4vw] object-cover lg:aspect-auto lg:h-[37vw] lg:w-full"
        />

        <div className="px-6 pt-[62px] lg:flex lg:flex-col lg:justify-between lg:self-stretch lg:px-0 lg:pb-[0.5vw] lg:pl-[8.4vw] lg:pr-[1vw] lg:pt-0">
          <p className="label-caps hero-label">Schedule an appointment</p>

          <div className="mt-7 lg:mt-0">
            <h2 className="text-[2.1rem] leading-[1.15] lg:text-[4.3vw] lg:leading-[1.05]">
              <span className="lg:block lg:whitespace-nowrap">
                Anxiety &amp; trauma therapy
              </span>{" "}
              <span className="lg:block lg:whitespace-nowrap">
                in Santa Monica, for <span className="script-word">you</span>.
              </span>
            </h2>

            <p className="intro-p mt-7 lg:mt-[2.2vw] lg:max-w-[37vw]">
              Reaching out for support is a meaningful first step. Whether you
              are looking for in-person therapy in Santa Monica or secure
              telehealth sessions anywhere in California, I would be glad to
              hear from you and help you feel more steady, resilient, and
              connected to yourself.
            </p>

            <p className="intro-p mt-4 lg:mt-[1.2vw]">
              Click the button below to schedule an appointment.
            </p>

            <a
              href="#"
              className="label-caps mt-4 inline-flex h-12 w-[132px] items-center justify-center rounded-[50%] border border-ink text-[12.5px] transition-colors duration-300 hover:bg-ink hover:text-paper lg:mt-[1.4vw] lg:h-[3.74vw] lg:w-[9.9vw] lg:text-[1.05vw]"
            >
              Book now
            </a>
          </div>
        </div>

        <img
          src="/images/book-right.jpg"
          alt="Warm sand with soft footprints"
          className="ml-[17.5vw] mt-[52px] aspect-[309/268] w-[calc(100%-17.5vw)] object-cover lg:m-0 lg:aspect-auto lg:h-[45.5vw] lg:w-full"
        />
      </div>
    </section>
  );
}