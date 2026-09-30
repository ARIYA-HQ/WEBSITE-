// Links into the product at app.ariyahq.com. Keep every CTA pointing here so
// sign-up vs. log-in destinations stay consistent across the site.
const APP_ORIGIN = 'https://app.ariyahq.com';

export const APP_LINKS = {
    login: `${APP_ORIGIN}/auth/login`,
    signup: `${APP_ORIGIN}/auth/signup`,
    vendorSignup: `${APP_ORIGIN}/auth/vendor-signup`,
    vendors: `${APP_ORIGIN}/vendors`,
    vendorBadges: `${APP_ORIGIN}/dashboard/vendor/badges`,
};

// Public event websites are served at <slug>.ariyahq.com.
export const EVENT_SITE_EXAMPLE = 'your-event.ariyahq.com';
