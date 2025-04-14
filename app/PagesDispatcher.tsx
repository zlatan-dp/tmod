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
          window.location.href =
            "https://www.figma.com/proto/mLXyPVFWeoms9vfGsoKfld/TMOD---China-Exhibition?page-id=787%3A6127&node-id=743-1666&viewport=7136%2C1703%2C0.28&t=3mb2Jkln4YvumMcL-8&scaling=scale-down&content-scaling=fixed&starting-point-node-id=743%3A1666&hotspot-hints=0&disable-default-keyboard-nav=1&hide-ui=1";
        } else {
          window.location.href =
            "https://www.figma.com/proto/mLXyPVFWeoms9vfGsoKfld/TMOD---China-Exhibition?page-id=787%3A6129&node-id=787-1719&viewport=4483%2C936%2C0.17&t=vibmDX4JwVC9W1OO-8&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=787%3A1719&hotspot-hints=0&show-proto-sidebar=1&disable-default-keyboard-nav=1&hide-ui=1";
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
