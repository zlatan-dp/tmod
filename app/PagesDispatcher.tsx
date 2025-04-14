"use client";

import { useSearchParams } from "next/navigation";
import { nextStep } from "@/app/actions/steps-client.action";
import { StepType } from "@/app/actions/actions.types";
import { getCurrentTime } from "@/app/actions/steps.action";
import { useState, useEffect } from "react";

export default function PagesDispatcher() {
  // const router = useRouter();
  const searchParams = useSearchParams();
  const [pageEnter, setPageEnter] = useState<boolean>(false);

  const utmContent = searchParams.get("utm_content") || "";
  const banner = searchParams.get("banner") || "";
  const campaign = searchParams.get("campaign") || "";

  useEffect(() => {
    const goToNextStep = async () => {
      await nextStep({
        step: 0,
        type: StepType.Proxy,
        question: "Разведение по флоу",
        answer: {
          utm_content: utmContent,
          banner: banner,
          campaign: campaign,
        },
        time: await getCurrentTime(),
      });
    };
    goToNextStep()
      .catch((error) => console.log(error))
      .finally(() => setPageEnter(true));
  }, []);

  useEffect(() => {
    switch (utmContent) {
      default:
        if (window.innerWidth > 760) {
          window.location.href = "https://google.com";
        } else {
          window.location.href =
            "https://www.figma.com/proto/IPqYG6OD8K3DFNZi4G7aCp/KidsTV---China-Exhibition-Landing?page-id=0%3A1&node-id=392-8384&viewport=880%2C1992%2C0.37&t=0OsH2pOWqAPIGUVt-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=392%3A8384&show-proto-sidebar=1";
        }
    }
  }, [pageEnter]);

  return (
    <>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
