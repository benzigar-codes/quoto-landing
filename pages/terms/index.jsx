import React from "react";
import Head from "next/head";

export default function Terms() {
  const title = "Quoto - Terms and Condition";
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
          <h1 className="text-4xl font-bold">Terms and Conditions</h1>
          <p className="mt-5">
            Welcome to the Quotos Generator app ("App"). By using this App, you
            agree to be bound by the following Terms and Conditions. Please read
            them carefully:
          </p>
          <h1 className="mt-5 text-2xl font-bold">1. Acceptance of Terms:</h1>
          <p className="mt-2">
            By downloading, installing, or using the App, you agree to comply
            with these Terms and Conditions. If you do not agree with any part
            of these terms, please do not use the App.
          </p>
          <h1 className="mt-5 text-2xl font-bold"> 2. User Content:</h1>
          <p className="mt-2">
            2.1. The App allows you to create, share, and store quotes and
            images ("User Content"). You are solely responsible for the User
            Content you generate and share through the App. 2.2. You must not
            create or share User Content that is offensive, defamatory, illegal,
            infringes on the rights of others, or violates applicable laws and
            regulations.
          </p>
          <h1 className="mt-5 text-2xl font-bold">3. Intellectual Property:</h1>
          <p className="mt-2">
            3.1. The App and its content, including but not limited to graphics,
            designs, logos, and templates, are protected by intellectual
            property laws. You may not use, modify, distribute, or reproduce the
            App's content without explicit permission. 3.2. You retain ownership
            of the User Content you create. By using the App, you grant us a
            non-exclusive, worldwide, royalty-free license to use, display, and
            distribute your User Content solely for the purpose of providing and
            promoting the App.{" "}
          </p>
          <h1 className="mt-5 text-2xl font-bold">4. Privacy:</h1>
          <p className="mt-2">
            4.1. Your use of the App is governed by our Privacy Policy, which
            outlines how we collect, use, and protect your personal information.
            Please review the Privacy Policy for more details.
          </p>
          <h1 className="mt-5 text-2xl font-bold">5. User Conduct:</h1>
          5.1. You agree to use the App in a manner consistent with applicable
          laws and regulations. You must not engage in any activity that
          disrupts or interferes with the functioning of the App.
          <h1 className="mt-5 mb-2 text-2xl font-bold">
            6. Modification or Termination:
          </h1>
          6.1. We reserve the right to modify, suspend, or terminate the App or
          your access to it at any time without notice.
          <h1 className="mt-5 mb-2 text-2xl font-bold">7. Disclaimer:</h1>
          7.1. The App is provided on an "as-is" basis. We do not guarantee the
          accuracy, completeness, or reliability of the App's content. You use
          the App at your own risk.
          <h1 className="mt-5 mb-2 text-2xl font-bold">
            8. Limitation of Liability:
          </h1>
          8.1. We are not liable for any damages arising from your use of the
          App, including but not limited to direct, indirect, incidental, or
          consequential damages.
          <h1 className="mt-5 mb-2 text-2xl font-bold">
            9. Changes to Terms and Conditions:{" "}
          </h1>
          9.1. We reserve the right to update and modify these Terms and
          Conditions at any time. Any changes will be posted on this page, and
          your continued use of the App constitutes acceptance of the modified
          terms. By using the Quotos Generator app, you acknowledge that you
          have read, understood, and agreed to these Terms and Conditions. If
          you do not agree with these terms, please refrain from using the App.
        </div>
      </div>
    </div>
  );
}
