export interface PricingTier {
  name: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  description: string;
  features: string[];
  cta: string;
  ctaHint?: string;
  popular?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Crew",
    monthlyPrice: 12,
    annualPrice: 10,
    description: "For small crews getting started with live stage monitoring.",
    features: [
      "P2P Direct streaming",
      "1 Concurrent stream",
      "Up to 5 viewers",
      "720p video quality",
      "Live crew chat",
      "Unlimited shows",
    ],
    cta: "Start Free Trial",
    ctaHint: "14-day free trial · No credit card required",
  },
  {
    name: "Production",
    monthlyPrice: 39,
    annualPrice: 33,
    description: "For production teams that need scale and reliability.",
    features: [
      "Cloudflare SFU streaming",
      "3 Concurrent streams",
      "Up to 50 viewers",
      "1080p video quality",
      "Live crew chat",
      "Internet streaming + TURN relay",
      "Email support",
    ],
    cta: "Get Started",
    ctaHint: "",
    popular: true,
  },
  {
    name: "Showtime",
    monthlyPrice: 99,
    annualPrice: 84,
    description: "For large venues and professional productions.",
    features: [
      "Cloudflare SFU streaming",
      "9 Concurrent streams",
      "Up to 200 viewers",
      "1080p video quality",
      "Live crew chat",
      "Internet streaming + TURN relay",
      "Email support",
    ],
    cta: "Get Started",
    ctaHint: "",
  },
];
