const faqs = [
  {
    q: "Do you offer in-person and online therapy?",
    a: "Yes. I see clients in person at my Santa Monica office and through secure telehealth sessions for clients located in California.",
  },
  {
    q: "What does trauma therapy with you look like?",
    a: "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life, not just during sessions.",
  },
  {
    q: "Which methods do you use?",
    a: "I integrate evidence-based approaches such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    q: "Who do you work with?",
    a: "I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences, including many entrepreneurs, creatives, and professionals experiencing burnout or perfectionism.",
  },
  {
    q: "How do I know if we are a good fit?",
    a: "If you are looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit. Use the button below to schedule an appointment.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faqs"
      className="bg-surface px-6 py-[53px] lg:px-[8.9vw] lg:py-[8vw]"
    >
      <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[26.4vw_1fr] lg:gap-0">
        <h2 className="text-[1.7rem] leading-tight lg:text-[3.4vw] lg:leading-[1.05]">
          Frequently asked <span className="script-word lg:block">questions</span>
        </h2>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item, i) => (
            <details key={item.q} className="group py-6 lg:py-[1.8vw]" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 [&::-webkit-details-marker]:hidden">
                <span className="font-heading text-[1.25rem] font-light leading-snug lg:text-[1.9vw]">
                  {item.q}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-open:rotate-90"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </summary>
              <p className="intro-p mt-4 lg:mt-[1.2vw] lg:max-w-[42vw]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}