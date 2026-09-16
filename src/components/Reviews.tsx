import { googleRating, reviews } from "@/lib/site-config";
import { StarIcon } from "./icons";

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 py-16 sm:py-24">
      <div className="section-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest/80">
              Reviews
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
              Kind words from local customers.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-charcoal-soft">
            <span className="flex items-center gap-0.5 text-gold" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-4 w-4" />
              ))}
            </span>
            <span>
              <span className="font-medium text-charcoal">{googleRating.rating}</span> on
              Google &middot; {googleRating.reviewCount} reviews
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-sage-dark/60 pt-12 sm:grid-cols-3 sm:gap-10">
          {reviews.map((review) => (
            <figure key={review.name} className="flex h-full flex-col justify-between">
              <blockquote className="font-serif text-xl leading-snug text-charcoal">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-charcoal-soft">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
