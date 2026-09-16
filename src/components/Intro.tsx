import { IntroIllustration } from "./illustrations";

export function Intro() {
  return (
    <section className="py-16 sm:py-24">
      <div className="section-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 max-w-xl lg:order-1">
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Your home deserves care.
            <br />
            Your time does, too.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft sm:text-lg">
            There&rsquo;s a particular kind of relief that comes from walking
            into a home that&rsquo;s truly clean &mdash; counters clear,
            floors fresh, everything back in its place. It gives you back a
            little bit of your day, and a little bit of your peace of mind.
            That&rsquo;s what we&rsquo;re here for. Our mission is simple: to
            give every client the best experience possible, visit after
            visit.
          </p>
        </div>
        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg shadow-subtle">
            <IntroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
