import { business, serviceAreas } from "@/lib/site-config";
import { PhoneIcon, MailIcon, FacebookIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage-dark/60 bg-forest text-ivory">
      <div className="section-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-xl">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/75">
            Based in {business.address.city}, NY. Serving Dutchess, Putnam,
            Westchester, Ulster, and Orange counties.
          </p>
        </div>

        <div className="text-sm">
          <p className="font-medium uppercase tracking-[0.12em] text-ivory/60">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <a
              href={business.phoneHref}
              className="focus-ring flex items-center gap-2 text-ivory/90 hover:text-ivory"
            >
              <PhoneIcon className="h-4 w-4" />
              {business.phone}
            </a>
            <a
              href={business.emailHref}
              className="focus-ring flex items-center gap-2 text-ivory/90 hover:text-ivory"
            >
              <MailIcon className="h-4 w-4" />
              {business.email}
            </a>
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring flex items-center gap-2 text-ivory/90 hover:text-ivory"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div className="text-sm">
          <p className="font-medium uppercase tracking-[0.12em] text-ivory/60">
            Service Areas
          </p>
          <p className="mt-4 leading-relaxed text-ivory/90">
            {serviceAreas.join(" · ")}
          </p>
        </div>
      </div>

      <div className="border-t border-ivory/15">
        <div className="section-container flex flex-col gap-2 py-6 text-xs text-ivory/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {business.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
