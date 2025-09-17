// Google Analytics configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 Measurement ID

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && GA_TRACKING_ID) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio events
export const trackPortfolioEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'Portfolio',
      ...eventData,
    });
  }
};

// Common portfolio events
export const trackResumeDownload = () => {
  trackPortfolioEvent('resume_download', {
    event_label: 'Resume PDF Download',
  });
};

export const trackProjectView = (projectName) => {
  trackPortfolioEvent('project_view', {
    event_label: projectName,
  });
};

export const trackContactForm = () => {
  trackPortfolioEvent('contact_form_submit', {
    event_label: 'Contact Form Submission',
  });
};

export const trackSectionView = (sectionName) => {
  trackPortfolioEvent('section_view', {
    event_label: sectionName,
  });
};

