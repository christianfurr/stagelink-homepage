import { Footer } from "@/components/landing/footer";
import { HeaderWithAnnouncement } from "@/components/landing/header-with-announcement";

export const metadata = {
  title: "Terms of Service — Stage Link",
  description:
    "Terms of Service for Stage Link. The terms and conditions governing your use of our real-time stage monitoring and streaming service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeaderWithAnnouncement />
      <main>
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:py-16">
          <h1 className="font-display-thin text-[clamp(2rem,4vw,3rem)] font-light tracking-[-0.02em] text-foreground">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Effective: February 2025
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Agreement
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                By accessing or using Stage Link (&quot;Service&quot;), you
                agree to these Terms of Service. If you do not agree, do not
                use the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Use of Service
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Stage Link provides real-time stage monitoring and streaming for
                theater crews. You may use the Service only in compliance with
                these terms and applicable law. You are responsible for your
                use and for any content you transmit via the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Accounts
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Where account registration is required, you must provide accurate
                information and keep your credentials secure. You are responsible
                for all activity under your account.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Acceptable Use
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                You may not use the Service to violate any law, infringe others&apos;
                rights, transmit harmful or illegal content, attempt to gain
                unauthorized access to our or others&apos; systems, or interfere
                with the Service. We may suspend or terminate access for
                violations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Intellectual Property and Licenses
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We grant you a limited, non-exclusive, revocable license to use
                the Service for its intended purpose. Our names, logos, and
                materials remain our property. You retain rights in content you
                provide; you grant us a license to use it as needed to operate
                the Service.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Disclaimers
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                The Service is provided &quot;as is&quot; and &quot;as
                available.&quot; We disclaim all warranties, express or implied,
                including merchantability and fitness for a particular purpose.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Limitation of Liability
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, we are not liable for
                any indirect, incidental, special, consequential, or punitive
                damages, or for loss of data or profits, arising from your use
                of the Service. Our total liability is limited to the amount you
                paid us in the twelve months before the claim (or one hundred
                dollars if greater).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Indemnity
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Stage Link and its
                affiliates from claims, damages, and expenses arising from your
                use of the Service or violation of these terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Termination
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We may suspend or terminate your access at any time, with or
                without cause. You may stop using the Service at any time.
                Provisions that by their nature should survive (e.g.,
                disclaimers, limitation of liability, indemnity) will survive.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Changes
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                We may update these terms from time to time. We will post the
                revised terms and update the effective date. Continued use after
                changes constitutes acceptance. Material changes may be
                communicated via email or in-Service notice where appropriate.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Governing Law
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                These terms are governed by the laws of the United States and
                the state specified in our contact information, without regard
                to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold tracking-[-0.02em] text-foreground">
                Contact
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, contact us at the
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
