export default function QuoteBanner() {
  return (
    <section className="relative flex min-h-[440px] items-center overflow-hidden px-6 py-[110px] lg:min-h-[40.8vw] lg:items-end lg:px-0 lg:pb-[7vw] lg:pl-[8.9vw] lg:pt-[7vw]">
      <img
        src="/images/quote-beach.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <h2 className="relative z-10 text-[1.9rem] leading-[1.2] text-white lg:text-[4.3vw] lg:leading-[1.05]">
        <span className="lg:block lg:whitespace-nowrap">
          You deserve a place where your story is
        </span>{" "}
        <span className="lg:block lg:whitespace-nowrap">
          heard, valued, and understood.{" "}
          <em className="italic">Nothing will</em>
        </span>{" "}
        <span className="lg:block lg:whitespace-nowrap">
          <em className="italic">be too heavy for us to carry together.</em>
        </span>
      </h2>
    </section>
  );
}