"use client";

import Script from "next/script";

import FormSection from "../components/FormSection/FormSection";

export default function TmodForm() {
  return (
    <>
      <FormSection />
      <Script src="/tmod/js/submit.js" />
    </>
  );
}
