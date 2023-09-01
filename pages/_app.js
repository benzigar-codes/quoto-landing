import "@fontsource-variable/cabin";
import "../styles/globals.css";

import { MdFormatQuote } from "react-icons/md";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default MyApp;
