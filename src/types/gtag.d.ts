declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }

  function gtag(...args: unknown[]): void;
}

export {};
