import { business, serviceAreas } from "@/lib/site-config";
import { PinIcon } from "./icons";

export function ServiceAreas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-sage-light/60 py-16 sm:py-24">
      <div className="section-container grid gap-10 lg:grid-cols-[1fr,1.1fr] lg:gap-16">
        <div className="max-w-lg">
          <h2 className="font-serif text-3xl leading-tight text-charcoal sm:text-4xl">
            Serving homes across the Hudson Valley.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft">
            Based in {business.address.city}, NY. Tell us where you&rsquo;re
            located when requesting your quote.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-5 border-t border-sage-dark/60 pt-8 sm:grid-cols-2">
          {serviceAreas.map((area) => (
            <li key={area} className="flex items-center gap-3 text-lg text-charcoal">
              <PinIcon className="h-5 w-5 shrink-0 text-forest" />
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
