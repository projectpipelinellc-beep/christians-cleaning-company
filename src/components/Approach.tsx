import { approachPoints } from "@/lib/site-config";
import { ArrowRightIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="section-container grid gap-10 lg:grid-cols-[0.85fr,2fr] lg:gap-16">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-3xl leading-tight text-slate sm:text-4xl">
            What you can expect from CCC.
          </h2>
          <p className="mt-5 font-serif text-xl text-charcoal">
            Tell us about your home or business and what you need help with.
          </p>
          <a
            href="#quote"
            className="focus-ring group mt-6 inline-flex items-center justify-center gap-2 rounded bg-coral px-6 py-3 text-base font-medium text-mist transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_10px_24px_rgba(166,69,38,0.3)] active:translate-y-0"
          >
            Get a Free Quote
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal
          delay={100}
          className="divide-y divide-haze-dark/60 border-y border-haze-dark/60"
        >
          {approachPoints.map((point, i) => (
            <div
              key={point.title}
              className="group grid gap-2 py-8 transition-colors sm:grid-cols-[auto,1fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-serif text-2xl text-coral transition-transform duration-300 group-hover:translate-x-1">
                0{i + 1}
              </span>
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
        </Reveal>
      </div>
    </section>
  );
}
