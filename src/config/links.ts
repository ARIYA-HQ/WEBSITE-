// Auth and dashboard links go to the product app; vendor discovery stays on
// the marketing site so visitors see the public listings with this navigation.
const APP_ORIGIN = 'https://app.ariyahq.com';

export const APP_LINKS = {
    api: `${APP_ORIGIN}/api/v1`,
    login: `${APP_ORIGIN}/auth/login`,
    signup: `${APP_ORIGIN}/auth/signup`,
    vendorSignup: `${APP_ORIGIN}/auth/vendor-signup`,
    ambassador: `${APP_ORIGIN}/dashboard/ambassador`,
    vendors: '/product/marketplace',
    vendorBadges: `${APP_ORIGIN}/dashboard/vendor/badges`,
};

// Public event websites are served at <slug>.ariyahq.com.
export const EVENT_SITE_EXAMPLE = 'your-event.ariyahq.com';
