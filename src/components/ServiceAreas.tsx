import { business, serviceAreas } from "@/lib/site-config";
import { PinIcon } from "./icons";
import { Reveal } from "./Reveal";

export function ServiceAreas() {
  return (
    <section id="areas" className="scroll-mt-24 bg-mist-deep py-20 sm:py-28">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <h2 className="font-serif text-3xl leading-tight text-slate sm:text-4xl">
            Serving homes across the Hudson Valley.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal-soft">
            Based in {business.address.city}, NY. Tell us where you&rsquo;re
            located when requesting your quote.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <ul className="mt-10 flex flex-wrap gap-3">
            {serviceAreas.map((area) => (
              <li key={area}>
                <span className="flex items-center gap-2 rounded-full border border-haze-dark bg-mist px-5 py-2.5 text-base text-slate transition-all duration-200 hover:-translate-y-0.5 hover:border-coral hover:shadow-[0_6px_14px_rgba(30,51,54,0.08)]">
                  <PinIcon className="h-4 w-4 shrink-0 text-coral" />
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
