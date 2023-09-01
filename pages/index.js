import React from "react";
import Head from "next/head";
import Link from "next/link";

import { BiLogoGithub, BiLogoPlayStore } from "react-icons/bi";
import Marquee from "react-fast-marquee";

export default function Home() {
  const title = "Quoto - Beautiful Quote Generator";
  const description =
    "Create beautiful and amazing quotes from templates and share it to your social followers.";
  const keywords = "quotes, generator, app";
  const image = "https://quoto.24code.in/banner.jpeg";

  const images = [
    "screen-1.jpg",
    "screen-2.jpg",
    "screen-3.jpg",
    "screen-4.jpg",
    "screen-5.jpg",
    "screen-1.jpg",
    "screen-2.jpg",
    "screen-3.jpg",
    "screen-4.jpg",
    "screen-5.jpg",
    // "screen-6.jpg",
    // "screen-7.jpg",
  ];

  return (
    <>
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
      <div className="min-h-screen bg-black text-white font-bold">
        <div className="mt-10 lg:mt-28 container mx-auto">
          <div className="px-5 lg:px-0 flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl lg:text-6xl">
              Beautify Quotes in Seconds
            </h1>
            <p className="text-center mt-5 opacity-75 font-normal">
              Where you turn everyday thoughts into speak-out-loud moments!
            </p>
            <div className="mt-10 flex">
              <Link
                target={"_blank"}
                href={
                  "https://play.google.com/store/apps/details?id=com.tfcode.quoto"
                }
                className="flex flex-row text-sm lg:text-lg items-center bg-white px-4 lg:px-4 py-1 lg:py-2 rounded-md text-black"
              >
                <BiLogoPlayStore className="mr-2 text-xl lg:text-3xl" />
                <p>Download</p>
              </Link>
              <Link
                href={"https://github.com/benzigar-codes/quoto"}
                target={"_blank"}
                className="ml-2 lg:ml-5 flex flex-row text-lg items-center bg-black px-4 lg:px-4 py-1 lg:py-2 rounded-md text-white border-2 border-white"
              >
                <BiLogoGithub className="mr-2 text-xl lg:text-3xl" />
                <p>Github</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-zinc-800 mt-10 pb-10 pt-10">
          <Marquee className="">
            {images?.map((each) => (
              <img
                style={{
                  aspectRatio: 1240 / 2772,
                }}
                className="bg-black mx-5 h-[500px] rounded-md"
                src={each}
                alt=""
              />
            ))}
          </Marquee>
        </div>
        <div className="mt-10 mb-10 container mx-auto">
          <div className="flex justify-center items-center">
            <Link href="/terms" className="mx-3">
              Terms
            </Link>
            <div className="h-1 w-1 bg-white rounded-full"></div>
            <Link href={"/privacy"} className="mx-3">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
