export default function QuoteBanner() {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden px-6 py-[110px] lg:min-h-[40.8vw] lg:items-end lg:px-0 lg:pb-[7vw] lg:pl-[8.9vw] lg:pt-[7vw]">
      <img
        src="/images/quote-beach.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-night/45" />

      <h2 className="relative z-10 text-[1.9rem] leading-[1.2] text-white lg:text-[4.3vw] lg:leading-[1.05]">
        <span className="lg:block lg:whitespace-nowrap">
          You deserve a space to slow down,
        </span>{" "}
        <span className="lg:block lg:whitespace-nowrap">
          reconnect, and feel safe in your body.
        </span>{" "}
        <span className="lg:block lg:whitespace-nowrap">
          <em className="italic">Healing never has to be rushed.</em>
        </span>
      </h2>
    </section>
  );
}