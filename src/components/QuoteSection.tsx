import { business } from "@/lib/site-config";
import { MailIcon, PhoneIcon } from "./icons";
import { QuoteForm } from "./QuoteForm";
import { Reveal } from "./Reveal";

export function QuoteSection() {
  return (
    <section id="quote" className="scroll-mt-24 bg-mist-deep py-20 sm:py-28">
      <div className="section-container grid gap-8 lg:grid-cols-[1fr,1.3fr]">
        <Reveal className="rounded-lg bg-slate p-8 sm:p-10 lg:p-12">
          <h2 className="font-serif text-3xl leading-tight text-mist sm:text-4xl">
            Let&rsquo;s take cleaning off your list.
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-mist/75 sm:text-lg">
            Tell us a little about your home and what you&rsquo;re looking
            for, and we&rsquo;ll follow up soon.
          </p>
          <div className="mt-8 flex flex-col gap-3 border-t border-mist/15 pt-6 text-sm">
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
          </div>
        </Reveal>

        <Reveal delay={100} className="h-full">
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}
