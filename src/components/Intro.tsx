import { IntroIllustration } from "./illustrations";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section className="bg-slate py-20 sm:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[1fr,minmax(0,0.85fr)] lg:items-center lg:gap-16">
        <Reveal className="max-w-xl">
          <h2 className="font-serif text-3xl leading-tight text-mist sm:text-4xl lg:text-5xl">
            Your home deserves care. Your time does, too.
          </h2>
          <p className="mt-7 text-base leading-relaxed text-mist/75 sm:text-lg">
            There&rsquo;s a particular kind of relief that comes from walking
            into a home that&rsquo;s truly clean: counters clear, floors
            fresh, everything back in its place. It gives you back a little
            bit of your day, and a little bit of your peace of mind.
            That&rsquo;s what we&rsquo;re here for. Our mission is simple: to
            give every client the best experience possible, visit after
            visit.
          </p>
        </Reveal>
        <Reveal
          delay={150}
          className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none"
        >
          <div className="group aspect-[4/3] w-full overflow-hidden rounded-lg shadow-card">
            <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
              <IntroIllustration />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
