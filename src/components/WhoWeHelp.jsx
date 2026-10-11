const cards = [
  {
    title: "High-achieving adults",
    image: "/images/who-adults.jpg",
    alt: "A woman journaling by a sunlit window",
    text: "You are thoughtful, capable, and self-aware, yet exhausted by constant worry and overthinking. Therapy gives you practical tools and a calm space to feel steady again.",
  },
  {
    title: "Entrepreneurs & creatives",
    image: "/images/who-couples.jpg",
    alt: "A warm, plant-filled creative workspace",
    text: "After years of pushing through stress, it is easy to feel disconnected from yourself. Together we slow down, reconnect, and build more sustainable ways of living and working.",
  },
  {
    title: "Adults healing from trauma",
    image: "/images/who-children.jpg",
    alt: "A person sitting quietly by the sea",
    text: "Whether your trauma is a single event or long-standing patterns from childhood, relationships, or chronic stress, we move carefully, with safety and stabilization first.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-surface px-[6vw] pb-16 pt-14 lg:px-0 lg:pb-[7.2vw] lg:pt-[6vw]">
      <h2 className="pl-[2vw] text-[2.25rem] leading-[1.1] lg:pl-[6vw] lg:text-[4.3vw] lg:leading-[1.05]">
        Who I <span className="script-word">help</span>
      </h2>

      <div className="mt-10 flex flex-col gap-14 lg:mt-[4vw] lg:grid lg:grid-cols-3 lg:gap-[1.6vw] lg:pl-[16.5vw] lg:pr-[5vw]">
        {cards.map((card) => (
          <article key={card.title}>
            <img
              src={card.image}
              alt={card.alt}
              className="aspect-[367/337] w-full object-cover lg:aspect-[4/5]"
            />
            <h3 className="mt-[59px] text-[1.4rem] leading-tight lg:mt-[3.7vw] lg:text-[2.2vw]">
              {card.title}
            </h3>
            <p className="intro-p mt-8 lg:mt-[2.5vw]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}