const cards = [
  {
    title: "Adults",
    image: "/images/who-adults.jpg",
    alt: "Two people sitting on the beach looking at the water",
    text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
  },
  {
    title: "Couples",
    image: "/images/who-couples.jpg",
    alt: "A couple embracing on the beach",
    text: "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
  },
  {
    title: "Children & Teens",
    image: "/images/who-children.jpg",
    alt: "A boy carrying a girl on the beach",
    text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="bg-white px-[6vw] pb-16 pt-14 lg:px-0 lg:pb-[7.2vw] lg:pt-[6vw]">
      <h2 className="pl-[2vw] text-[2.25rem] leading-[1.1] lg:pl-[6vw] lg:text-[4.3vw] lg:leading-[1.05]">
        Who we <span className="script-word">help</span>
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