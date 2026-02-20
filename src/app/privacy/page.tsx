import { Footer } from "@/components/landing/footer";
import { HeaderWithAnnouncement } from "@/components/landing/header-with-announcement";

export const metadata = {
  title: "Privacy Policy — Stage Link",
  description:
    "Privacy Policy for Stage Link. How we collect, use, and protect your information when you use our real-time stage monitoring service.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderWithAnnouncement />
      <main>
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:py-16">
          <h1 className="font-display-thin text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.02em] text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: February 2025
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Introduction
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Stage Link (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                provides real-time stage monitoring and streaming for theater
                crews. This Privacy Policy describes how we collect, use, and
                protect your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Information We Collect
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We may collect information you provide directly (e.g., account
                registration, contact forms), usage data related to stage
                streaming and camera access, device and connection information,
                and cookies or similar technologies as described below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                How We Use Your Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We use collected information to provide, maintain, and improve
                our stage monitoring and streaming services; to communicate with
                you; to enforce our terms; and to comply with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Sharing of Information
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share
                information with service providers who assist our operations,
                when required by law, or in connection with a merger or sale of
                assets, under appropriate confidentiality obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Cookies and Similar Technologies
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We may use cookies and similar technologies for authentication,
                preferences, analytics, and security. You can manage cookie
                settings in your browser.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Security
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We implement reasonable technical and organizational measures to
                protect your information. No method of transmission over the
                internet is fully secure; we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Your Rights
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Depending on your location, you may have rights to access,
                correct, delete, or port your personal data, or to object to or
                restrict certain processing. Contact us to exercise these
                rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Contact
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                For privacy-related questions or requests, contact us at the
                address or email provided in the footer or on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
