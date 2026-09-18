declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
};

export const trackLeadInterest = (location: string) => {
  trackEvent('generate_lead', {
    event_category: 'conversion',
    event_label: `Botao Tenho Interesse - ${location}`,
    value: 1
  });
};
