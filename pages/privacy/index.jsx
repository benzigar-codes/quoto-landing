import React from "react";
import Head from "next/head";

export default function Terms() {
  const title = "Quoto - Privacy Policy";
  const description =
    "Create beautiful and amazing quotes from templates and share it to your social followers.";
  const keywords = "quotes, generator, app";
  const image = "banner.jpeg";

  return (
    <div className="text-white bg-black">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content="https://quoto.24code.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>
      <div className="flex justify-center">
        <div className="max-w-[800px] mt-10 container mx-auto">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <>
            <p>
              We value your privacy and are committed to protecting your
              personal information. This Privacy Policy outlines how we collect,
              use, and safeguard your data when you use the Quotos Generator app
              ("App"). Please read this policy carefully.
            </p>
            <p className="mt-5">
              <strong className="font-bold text-xl">
                1. Information Collection
              </strong>
            </p>
            <p>
              We may collect personal information, including your name, email
              address, and user-generated content.
            </p>
            <p className="mt-5">
              <strong className="font-bold text-xl">2. Information Use</strong>
            </p>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and improve the App's functionality.</li>
              <li>Personalize your experience.</li>
              <li>Communicate with you.</li>
              <li>Analyze usage patterns.</li>
            </ul>
            <p className="mt-5">
              <strong className="font-bold text-xl">3. Data Sharing</strong>
            </p>
            <p>
              We do not share your personal information with third parties
              without your consent, except when required by law.
            </p>
            <p className="mt-5">
              <strong className="font-bold text-xl">4. Data Security</strong>
            </p>
            <p>
              We implement reasonable security measures to protect your personal
              information. However, no online data transmission method is
              entirely secure.
            </p>
            <p className="mt-5">
              <strong className="font-bold text-xl">5. Cookies</strong>
            </p>
            <p>
              The App may use cookies or similar technologies to enhance your
              experience and collect usage data. You can manage cookie settings
              in your browser.
            </p>
            <p className="mt-5">
              <strong className="font-bold text-xl">
                6. Changes to Privacy Policy
              </strong>
            </p>
            <p>
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page.
            </p>
            <p>
              By using the Quotos Generator App, you agree to the terms of this
              Privacy Policy. If you do not agree, please do not use the App.
            </p>
          </>
        </div>
      </div>
    </div>
  );
}
