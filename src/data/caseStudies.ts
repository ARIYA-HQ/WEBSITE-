export interface CaseStudy {
    id: string;
    client: string;
    industry: string;
    title: string;
    desc: string;
    metrics: { label: string; value: string }[];
    image: string;
    logo: string;
    challenge: string;
    solution: string;
    result: string;
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: CaseStudy[] = [
    {
        id: "lux-gala",
        client: "Luxe Events Co.",
        industry: "Corporate",
        title: "Scaling Production for a 500-Person Tech Gala",
        desc: "How Luxe Events Co. cut planning time by 40% and delivered a flawless multi-day summit using Ariya.",
        metrics: [
            { label: "Hours Saved", value: "40+" },
            { label: "Vendor ROI", value: "25%" },
            { label: "Client NPS", value: "100" }
        ],
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069",
        logo: "LUX",
        challenge: "Luxe Events was tasked with organizing a high-stakes tech gala for a Fortune 500 client with only 3 months lead time. The scope included 3 days of events, 500 attendees, and complex AV requirements.",
        solution: "They used Ariya's AI Timeline Builder to generate a minute-by-minute run of show instantly. The Vendor Marketplace allowed them to source and contract AV specialists in 48 hours, a process that usually takes weeks.",
        result: "The event was executed flawlessly. The team saved over 40 hours of administrative work, allowing them to focus on the guest experience. The client immediately booked them for their next annual summit.",
        testimonial: {
            quote: "Ariya didn't just save us time; it saved our sanity. The ability to visualize the entire event flow in one place was a game-changer.",
            author: "Sarah Jenkins",
            role: "Senior Producer, Luxe Events Co."
        }
    },
    {
        id: "summer-wedding",
        client: "Bella & James",
        industry: "Wedding",
        title: "A Dream Destination Wedding Under Budget",
        desc: "Managing a 150-guest Italian destination wedding without the stress, keeping everything perfectly on budget.",
        metrics: [
            { label: "Budget Saved", value: "$12k" },
            { label: "Guests", value: "150" },
            { label: "Stress Level", value: "0" }
        ],
        image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=2070",
        logo: "B&J",
        challenge: "Planning a destination wedding in Tuscany from New York presented massive logistical challenges, specifically around currency conversion, vendor communication, and guest travel logistics.",
        solution: "The couple used Ariya's Budget Tracker to manage expenses in multiple currencies. The Guest List features helped track RSVPs, dietary restrictions, and shuttle assignments seamlessly.",
        result: "Bella and James came in $12,000 under budget thanks to Ariya's spending alerts. The wedding was a magical, stress-free week that guests are still talking about.",
        testimonial: {
            quote: "We were terrified of the logistics, but Ariya made it feel manageable. Honesty, I miss checking the app now that the wedding is over!",
            author: "Bella Stuart",
            role: "Bride"
        }
    },
    {
        id: "festival-logistics",
        client: "SoundWave Festival",
        industry: "Entertainment",
        title: "Coordinating 50+ Vendors for a Music Festival",
        desc: "Streamlining communication and contracts for a chaotic 2-day music festival with a lean team.",
        metrics: [
            { label: "Vendors", value: "52" },
            { label: "Emails Saved", value: "500+" },
            { label: "Efficiency", value: "3x" }
        ],
        image: "https://images.unsplash.com/photo-1459749411177-287ceae888cb?auto=format&fit=crop&q=80&w=2070",
        logo: "SW",
        challenge: "With a small core team, coordinating load-in times, insurance, and riders for over 50 vendors and artists was turning into a logistical nightmare.",
        solution: "SoundWave adopted Ariya for its centralized Vendor Portal. They automated document collection and used the real-time floor plan tool to assign vendor plots.",
        result: "Load-in was the smoothest in the festival's history. The team eliminated hundreds of back-and-forth emails and had all critical info available offline on the mobile app.",
        testimonial: {
            quote: "It felt like we hired 3 extra coordinators. The improved communication with vendors was noticed by everyone.",
            author: "Marcus Deane",
            role: "Operations Director"
        }
    }
];
