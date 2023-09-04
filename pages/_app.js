import "@fontsource-variable/cabin";
import "../styles/globals.css";
import Script from "next/script";

import { MdFormatQuote } from "react-icons/md";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <div className="text-white sticky top-0 bg-black z-10 container mx-auto">
        <div className="px-2 lg:px-0 flex flex-row justify-between border-b-2 pb-3 border-zinc-800 pt-5">
          <Link href={"/"} className=" flex justify-between items-center">
            <div className="flex items-center">
              <MdFormatQuote className="text-5xl" />
              <h1 className="font-bold text-lg lg:text-2xl">Quoto</h1>
            </div>
          </Link>
          <Link
            target={"_blank"}
            href={"https://www.24code.in"}
            className="flex items-center"
          >
            <p className="bg-white text-xs text-black rounded-full px-4 cursor-pointer py-2">
              Powered by <span className="font-bold">24code.in</span>
            </p>
          </Link>
          <div className="hidden lg:flex items-center">
            <Link href={"/terms"} className="mx-3">
              Terms
            </Link>
            <Link href={"/privacy"} className="mx-3">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
