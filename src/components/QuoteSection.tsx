import { QuoteForm } from "./QuoteForm";

export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-24 bg-sage-light/60 py-16 sm:py-24">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Let&rsquo;s take cleaning off your list.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Tell us a little about your home and what you&rsquo;re looking
            for.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
