import { approachPoints } from "@/lib/site-config";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-sage-light/60 py-16 sm:py-24">
      <div className="section-container">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/80">
            Our Approach
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            What you can expect from CCC.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-sage-dark/60 border-y border-sage-dark/60">
          {approachPoints.map((point, i) => (
            <div
              key={point.title}
              className="grid gap-2 py-8 sm:grid-cols-[auto,1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-serif text-2xl text-forest/70">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-serif text-xl text-charcoal sm:text-2xl">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-charcoal-soft">
                  {point.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-serif text-xl text-charcoal">
            Tell us about your home and what you need help with.
          </p>
          <a
            href="#quote"
            className="focus-ring inline-flex items-center justify-center rounded bg-forest px-6 py-3 text-base font-medium text-ivory transition-colors hover:bg-forest-light"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
