import { approachPoints } from "@/lib/site-config";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr,2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-3xl leading-tight text-slate sm:text-4xl">
            What you can expect from CCC.
          </h2>
          <p className="mt-5 font-serif text-xl text-charcoal">
            Tell us about your home and what you need help with.
          </p>
          <a
            href="#quote"
            className="focus-ring mt-6 inline-flex items-center justify-center rounded bg-coral px-6 py-3 text-base font-medium text-mist transition-colors hover:bg-coral-dark"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="divide-y divide-haze-dark/60 border-y border-haze-dark/60">
          {approachPoints.map((point, i) => (
            <div
              key={point.title}
              className="grid gap-2 py-8 sm:grid-cols-[auto,1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-serif text-2xl text-coral">0{i + 1}</span>
              <div>
                <h3 className="font-serif text-xl text-slate sm:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-charcoal-soft">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
