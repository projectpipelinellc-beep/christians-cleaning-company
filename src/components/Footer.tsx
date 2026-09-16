import { business, serviceAreas } from "@/lib/site-config";
import { ArrowRightIcon, PhoneIcon, MailIcon, FacebookIcon } from "./icons";
import { Reveal } from "./Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-haze-dark/60 bg-slate-dark text-mist">
      <div className="border-b border-mist/15">
        <Reveal className="section-container flex flex-col items-start gap-7 py-16 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-20">
          <h2 className="max-w-lg font-serif text-3xl leading-tight sm:text-4xl">
            Ready for a home that feels cared for?
          </h2>
          <a
            href="#quote"
            className="focus-ring group inline-flex shrink-0 items-center justify-center gap-2 rounded bg-coral px-7 py-3.5 text-base font-medium text-mist transition-all duration-200 hover:-translate-y-0.5 hover:bg-coral-dark hover:shadow-[0_10px_24px_rgba(166,69,38,0.35)] active:translate-y-0"
          >
            Get a Free Quote
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist/75">
            Based in {business.address.city}, NY. Serving Dutchess, Putnam,
            Westchester, Ulster, and Orange counties.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-medium uppercase tracking-[0.12em] text-mist/60">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={business.phoneHref}
              className="focus-ring flex items-center gap-2 text-mist/90 transition-colors hover:text-coral"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="focus-ring flex items-center gap-2 text-mist/90 transition-colors hover:text-coral"
            >
              <MailIcon className="h-4 w-4" />
              {business.email}
            </a>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring flex items-center gap-2 text-mist/90 transition-colors hover:text-coral"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="font-medium uppercase tracking-[0.12em] text-mist/60">
            Service Areas
          </p>
          <p className="mt-4 leading-relaxed text-mist/90">
            {serviceAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-mist/15">
        <div className="section-container flex flex-col gap-2 py-6 text-xs text-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
