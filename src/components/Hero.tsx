import { business, googleRating } from "@/lib/site-config";
import { HeroIllustration } from "./illustrations";
import { PhoneIcon, StarIcon } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="section-container grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/80 sm:text-sm">
            Home Cleaning &bull; Hudson Valley, NY
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-[3.25rem]">
            A clean home.
            <br />
            More time for you.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft sm:text-lg">
            Leave the cleaning to Christian&rsquo;s Cleaning Company and make
            room for what matters. Serving homes across Dutchess, Putnam,
            Westchester, Ulster, and Orange counties.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#quote"
              className="focus-ring inline-flex items-center justify-center rounded bg-forest px-7 py-3.5 text-base font-medium text-ivory transition-colors hover:bg-forest-light"
            >
              Get a Free Quote
            </a>
            <a
              href={business.phoneHref}
              className="focus-ring inline-flex items-center justify-center gap-2 px-2 py-2 text-base font-medium text-forest underline decoration-forest/30 underline-offset-4 transition-colors hover:text-forest-light"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {business.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 border-t border-sage-dark/50 pt-6 text-sm text-charcoal-soft">
            <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span>
              <span className="font-medium text-charcoal">{googleRating.rating} rating</span>{" "}
              from {googleRating.reviewCount} Google reviews
            </span>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[6/7] w-full overflow-hidden rounded-lg shadow-card">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
