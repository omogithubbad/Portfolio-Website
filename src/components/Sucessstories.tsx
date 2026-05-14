import React from 'react';

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote: "Working with Manasseh was a game-changer for our online presence. The new website exceeded our expectations in both design and functionality.",
    name: "Jerome Bell",
    role: "CTO, Waveric",
    avatar: "JB",
    light: false,
  },
  {
    id: 2,
    stars: 5,
    quote: "Manasseh delivered a stunning website that truly reflects our brand's essence. He continuously involves in feedbacks. Highly recommend his expertise!",
    name: "Wade Warren",
    role: "Founder, Creaty",
    avatar: "WW",
    light: true,
  },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-1 mb-8">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} style={{ color: '#82CC00' }} className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const AvatarInitials = ({ initials }: { initials: string }) => (
  <div
    style={{ backgroundColor: '#82CC00', color: '#1A1A1A' }}
    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0"
  >
    {initials}
  </div>
);

const Sucessstories = () => {
  return (
    <section
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)' }}
      className="px-12 py-24"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }} className="flex gap-6 items-stretch">

        {/* Left intro card — darker with white border */}
        <div
          style={{
            backgroundColor: '#0f0f1a',
            border: '1px solid rgba(255,255,255,0.25)',
            flex: 1,
            minHeight: '480px',
          }}
          className="rounded-2xl p-10 flex flex-col justify-between"
        >
          <div>
            <p style={{ color: '#82CC00' }} className="text-sm font-semibold tracking-widest uppercase mb-6">
              MANASSEH EDWIN ®
            </p>
            <h2
              className="text-white font-bold leading-tight"
              style={{ fontSize: '2.5rem' }}
            >
              My Success Stories
            </h2>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-base leading-relaxed">
            I take pride in collaborating with a diverse range of clients, from
            ambitious startups to established enterprises.
          </p>
        </div>

        {/* Middle testimonial card — semi-transparent, blends with bg */}
        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.08)',
            flex: 1,
            minHeight: '480px',
          }}
          className="rounded-2xl p-10 flex flex-col justify-between"
        >
          <div>
            <StarRating count={testimonials[0].stars} />
            <p style={{ color: '#ffffff', fontSize: '1.1rem' }} className="leading-relaxed mb-8">
              "{testimonials[0].quote}"
            </p>
          </div>
          <div>
            <hr style={{ borderColor: 'rgba(255,255,255,0.15)' }} className="mb-6" />
            <div className="flex items-center gap-4">
              <AvatarInitials initials={testimonials[0].avatar} />
              <div>
                <p style={{ color: '#ffffff', fontSize: '1rem' }} className="font-bold">
                  {testimonials[0].name}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right testimonial card — white */}
        <div
          style={{
            backgroundColor: '#ffffff',
            flex: 1,
            minHeight: '480px',
          }}
          className="rounded-2xl p-10 flex flex-col justify-between"
        >
          <div>
            <StarRating count={testimonials[1].stars} />
            <p style={{ color: '#1a1a1a', fontSize: '1.1rem' }} className="leading-relaxed mb-8">
              "{testimonials[1].quote}"
            </p>
          </div>
          <div>
            <hr style={{ borderColor: '#e5e7eb' }} className="mb-6" />
            <div className="flex items-center gap-4">
              <AvatarInitials initials={testimonials[1].avatar} />
              <div>
                <p style={{ color: '#1a1a1a', fontSize: '1rem' }} className="font-bold">
                  {testimonials[1].name}
                </p>
                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                  {testimonials[1].role}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sucessstories;