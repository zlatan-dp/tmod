"use client";

import Script from "next/script";

import TmodLanding from "./components/landing/landing";

export default function tmodLanding() {
  return (
    <>
      <TmodLanding />
      <Script src="/tmod/js/submit.js" />
      <Script src="/tmod/js/animation.js" />
      <Script src="/tmod/js/bentobox.js" />
    </>
  );
}
