import React from "react";

export default function PrivacyPolicy() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: [Date]</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
          <p>
            Welcome to Jukebox Inc. ("we," "our," or "us"). We are committed to
            protecting your personal information and your right to privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our [website/mobile
            application/service].
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            2. Information We Collect
          </h2>
          <p>
            We collect personal information that you provide to us, such as:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>[Add other types of information you collect]</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            3. How We Use Your Information
          </h2>
          <p>We use your information for various purposes, including:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Providing and maintaining our service</li>
            <li>Communicating with you</li>
            <li>Improving our service</li>
            <li>[Add other ways you use the information]</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            4. How We Share Your Information
          </h2>
          <p>We may share your information with:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Service providers</li>
            <li>Legal and regulatory authorities</li>
            <li>[Add other parties you share information with]</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
          <p>
            You have certain rights regarding your personal information,
            including:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>The right to access your data</li>
            <li>The right to rectify your data</li>
            <li>The right to erase your data</li>
            <li>[Add other rights applicable in your jurisdiction]</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">6. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>[Your contact information]</p>
        </section>
      </div>
    </>
  );
}
