import { googleRating, reviews } from "@/lib/site-config";
import { StarIcon } from "./icons";

export function Reviews() {
  const [featured, ...rest] = reviews;

  return (
    <section id="reviews" className="scroll-mt-24 bg-mist py-20 sm:py-28">
      <div className="section-container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight text-slate sm:text-4xl">
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

        <div className="mt-12 grid gap-10 border-t border-haze-dark/60 pt-12 lg:grid-cols-[1.3fr,1fr] lg:gap-16">
          <figure className="border-l-2 border-coral pl-6">
            <blockquote className="font-serif text-2xl leading-snug text-slate sm:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-sm font-medium text-charcoal-soft">
              {featured.name}
            </figcaption>
          </figure>

          <div className="divide-y divide-haze-dark/60 rounded-lg bg-mist-deep px-6">
            {rest.map((review) => (
              <figure key={review.name} className="py-6 first:pt-0 last:pb-0">
                <blockquote className="text-lg leading-snug text-charcoal">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-sm font-medium text-charcoal-soft">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
