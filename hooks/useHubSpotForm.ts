"use client";

import { useEffect } from "react";

interface UseHubSpotFormOptions {
  target: string;
  redirectUrl?: string;
}

export function useHubSpotForm({ target, redirectUrl }: UseHubSpotFormOptions) {
  useEffect(() => {
    const redirect = () => {
      if (redirectUrl) window.location.href = redirectUrl;
    };

    // Most reliable: HubSpot fires a window message on submission
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data?.type === "hsFormCallback" &&
        event.data?.eventName === "onFormSubmitted"
      ) {
        redirect();
      }
    };
    window.addEventListener("message", handleMessage);

    // Fallback: watch DOM for HubSpot's .submitted-message element
    const observer = new MutationObserver(() => {
      if (document.querySelector(`${target} .submitted-message`)) {
        observer.disconnect();
        redirect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      (window as any).hbspt?.forms.create({
        portalId: "46052923",
        formId: "f99987c0-2f99-4532-948e-68d9ec84eab0",
        region: "na1",
        target,
        onFormSubmit: () => {
          // Small delay lets HubSpot complete its own handling first
          setTimeout(redirect, 600);
        },
        onFormSubmitted: redirect,
      });
    };

    return () => {
      window.removeEventListener("message", handleMessage);
      observer.disconnect();
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);
}
