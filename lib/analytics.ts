type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: string, eventName: string, params?: GtagParams) => void;
  }
}

export function trackEvent(eventName: string, params?: GtagParams) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}
