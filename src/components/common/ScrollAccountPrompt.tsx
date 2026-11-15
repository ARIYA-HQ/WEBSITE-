import { useEffect, useRef, useState } from 'react';
import AccountActionModal from './AccountActionModal';

const DISMISSED_AT_KEY = 'ariya-account-prompt-last-shown';
const PROMPT_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
const SCROLL_THRESHOLD = 0.6;
const TIME_THRESHOLD_MS = 45 * 1000;
const COOKIE_BANNER_DISMISS_LABEL = 'Dismiss cookie banner';

function isWithinCooldown(now: number) {
    const lastShown = Number(localStorage.getItem(DISMISSED_AT_KEY));
    return Number.isFinite(lastShown) && lastShown > 0 && now - lastShown < PROMPT_COOLDOWN_MS;
}

export default function ScrollAccountPrompt() {
    const [isOpen, setIsOpen] = useState(false);
    const eligibleSince = useRef(Date.now());
    const shown = useRef(false);

    useEffect(() => {
        let retryTimer: number | undefined;

        const maybeShowPrompt = () => {
            if (shown.current || isWithinCooldown(Date.now())) return;

            const scrollableHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const hasScrolledEnough =
                window.scrollY >= 200 &&
                scrollableHeight > 0 &&
                (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight >= SCROLL_THRESHOLD;
            const hasWaitedEnough = Date.now() - eligibleSince.current >= TIME_THRESHOLD_MS;

            if (!hasScrolledEnough && !hasWaitedEnough) return;

            if (document.querySelector(`[aria-label="${COOKIE_BANNER_DISMISS_LABEL}"]`)) {
                if (retryTimer === undefined) {
                    retryTimer = window.setTimeout(() => {
                        retryTimer = undefined;
                        maybeShowPrompt();
                    }, 5000);
                }
                return;
            }

            localStorage.setItem(DISMISSED_AT_KEY, String(Date.now()));
            shown.current = true;
            setIsOpen(true);
        };

        const timer = window.setTimeout(maybeShowPrompt, TIME_THRESHOLD_MS);
        window.addEventListener('scroll', maybeShowPrompt, { passive: true });

        return () => {
            window.clearTimeout(timer);
            if (retryTimer !== undefined) window.clearTimeout(retryTimer);
            window.removeEventListener('scroll', maybeShowPrompt);
        };
    }, []);

    if (!isOpen) return null;

    return (
        <AccountActionModal
            title="Make your event easier to plan"
            description="Create a free Ariya account to organise your event, invite guests and keep your plans in one place."
            onClose={() => setIsOpen(false)}
        />
    );
}
