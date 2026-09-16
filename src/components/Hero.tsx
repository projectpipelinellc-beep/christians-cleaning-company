import { business, googleRating } from "@/lib/site-config";
import { HeroIllustration } from "./illustrations";
import { PhoneIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-mist">
      <div className="section-container grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.15fr,1fr] lg:gap-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral sm:text-sm">
            Home Cleaning &bull; Hudson Valley, NY
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] text-slate sm:text-6xl lg:text-7xl">
            A clean home.
            <br />
            More time for you.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Leave the cleaning to Christian&rsquo;s Cleaning Company and make
            room for what matters. Serving homes across Dutchess, Putnam,
            Westchester, Ulster, and Orange counties.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="focus-ring inline-flex items-center justify-center rounded bg-coral px-7 py-3.5 text-base font-medium text-mist transition-colors hover:bg-coral-dark"
            >
              Get a Free Quote
            </a>
            <a
              href={business.phoneHref}
              className="focus-ring inline-flex items-center justify-center gap-2 px-2 py-2 text-base font-medium text-slate underline decoration-slate/30 underline-offset-4 transition-colors hover:text-coral"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone}
            </a>
          </div>

          <div className="mt-9 inline-flex items-center gap-2 rounded-full border border-haze-dark/70 bg-mist-deep px-4 py-2 text-sm text-charcoal-soft">
            <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            <span>
              <span className="font-medium text-charcoal">{googleRating.rating} rating</span>{" "}
              from {googleRating.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
          <div
            className="absolute -right-4 -top-6 hidden h-full w-full rounded-lg bg-haze lg:block"
            aria-hidden="true"
          />
          <div className="relative aspect-[6/7] w-full overflow-hidden rounded-lg shadow-card lg:ml-8">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
