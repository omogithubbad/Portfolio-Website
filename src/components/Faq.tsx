import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';

const faqs = [
  {
    key: 1,
    question: 'What services do you offer?',
    answer:
      'I offer a range of services including web design, front-end development, UX/UI design, responsive design, e-commerce solutions, and brand identity creation. Visit my Services page for a detailed overview.',
    color: '#82FF1F',
  },
  {
    key: 2,
    question: 'How do you approach a new project?',
    answer:
      'I start with a discovery call to understand your goals, audience, and vision. From there I move into wireframing, design, development, and testing — keeping you involved at every stage.',
    color: '#38bdf8',
  },
  {
    key: 3,
    question: 'What is your project timeline?',
    answer:
      `Timelines vary by project scope. A typical website takes 2–4 weeks, while larger projects may take 6–8 weeks. I'll give you a clear timeline during our initial consultation.`,
    color: '#f472b6',
  },
  {
    key: 4,
    question: 'How much do your services cost?',
    answer:
      'Pricing depends on the complexity and scope of the project. I offer flexible packages to suit different budgets. Reach out for a free quote.',
    color: '#fb923c',
  },
  {
    key: 5,
    question: 'What platforms do you work with?',
    answer:
      `I work with React, Next.js, Webflow, WordPress, Shopify, and more. I'll recommend the best platform based on your specific needs.`,
    color: '#a78bfa',
  },
];

const Faq = () => {
  const [openKey, setOpenKey] = useState<number | null>(1);

  const toggle = (key: number) => {
    setOpenKey(prev => (prev === key ? null : key));
  };

  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
      }}
      className="py-24 px-10"
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(130,255,31,0.08) 0%, transparent 70%)',
        top: '10%',
        left: '5%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%)',
        bottom: '10%',
        right: '5%',
        pointerEvents: 'none',
      }} />

      <div className="flex gap-20 max-w-6xl mx-auto relative">
        {/* Left: heading */}
        <div className="flex flex-col shrink-0 w-72">
          <span className="ring-1 ring-[#82FF1F] rounded-full px-3 py-0.5 italic flex w-fit items-center justify-center mb-6"
            style={{ color: '#82FF1F' }}>
            <GoDotFill className="text-[#82FF1F] text-2xl" />
            FAQ
          </span>
          <h1
            className="text-[72px] font-verdana leading-none mt-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Questions <br /> & <br /> Answers
          </h1>

          <p className="text-gray-400 text-sm mt-8 leading-relaxed">
            Everything you need to know about working with me. Can't find an answer? Feel free to reach out.
          </p>
        </div>

        {/* Right: accordion */}
        <div className="w-full flex flex-col gap-3">
          {faqs.map((faq) => (
            <div
              key={faq.key}
              style={{
                border: `1px solid rgba(255,255,255,0.08)`,
                borderLeft: `4px solid ${faq.color}`,
                borderRadius: '12px',
                background: openKey === faq.key
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(255,255,255,0.03)',
                transition: 'all 0.3s ease',
                boxShadow: openKey === faq.key
                  ? `0 0 20px ${faq.color}22`
                  : 'none',
              }}
            >
              <button
                onClick={() => toggle(faq.key)}
                className="w-full flex items-center justify-between px-6 py-5 text-left bg-transparent border-none outline-none"
              >
                <span
                  className="text-[18px] font-verdana"
                  style={{ color: openKey === faq.key ? faq.color : '#ffffff' }}
                >
                  {faq.question}
                </span>
                <span
                  className="ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-light text-xl transition-all"
                  style={{
                    background: faq.color,
                    color: '#000',
                  }}
                >
                  {openKey === faq.key ? '−' : '+'}
                </span>
              </button>

              {openKey === faq.key && (
                <p
                  className="text-sm pb-6 px-6 leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;