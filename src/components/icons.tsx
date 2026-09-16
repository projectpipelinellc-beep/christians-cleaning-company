import {
  Phone,
  EnvelopeSimple,
  Leaf,
  MapPin,
  Star,
  FacebookLogo,
  Check,
  List,
  X,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

type IconProps = { className?: string };

export function PhoneIcon({ className = "h-4 w-4" }: IconProps) {
  return <Phone weight="regular" className={className} aria-hidden="true" />;
}

export function MailIcon({ className = "h-4 w-4" }: IconProps) {
  return <EnvelopeSimple weight="regular" className={className} aria-hidden="true" />;
}

export function LeafIcon({ className = "h-5 w-5" }: IconProps) {
  return <Leaf weight="regular" className={className} aria-hidden="true" />;
}

export function PinIcon({ className = "h-5 w-5" }: IconProps) {
  return <MapPin weight="regular" className={className} aria-hidden="true" />;
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return <Star weight="fill" className={className} aria-hidden="true" />;
}

export function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return <FacebookLogo weight="regular" className={className} aria-hidden="true" />;
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return <Check weight="bold" className={className} aria-hidden="true" />;
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return <List weight="regular" className={className} aria-hidden="true" />;
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return <X weight="regular" className={className} aria-hidden="true" />;
}

export function ArrowRightIcon({ className = "h-4 w-4" }: IconProps) {
  return <ArrowRight weight="bold" className={className} aria-hidden="true" />;
}
