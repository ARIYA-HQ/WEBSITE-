export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    author: string;
    date: string;
    readTime: string;
    image: string;
    content: string; // HTML-like string or markdown
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "2026 Wedding Trends: The Return of Maximalism",
        excerpt: "Say goodbye to beige. Next year is all about bold colors, rich textures, and over-the-top florals.",
        category: "Trends",
        author: "Sarah James",
        date: "Jan 12, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2069",
        tags: ["Design", "Decor", "Trends"],
        content: `
            <p class="lead">After years of "quiet luxury" and minimalist aesthetics, 2026 is ushering in a new era of bold expression. Couples are ditching the safe choices for vibrant colors, immersive experiences, and decor that commands attention.</p>
            
            <h2>More is More</h2>
            <p>The "clean girl" aesthetic is officially out. In its place? Saturated jewel tones, mismatched china, and floral installations that defy gravity. Planners are seeing a 40% increase in requests for "dopamine decor"—elements designed purely to spark joy and surprise guests.</p>
            
            <blockquote>"It's not about clutter; it's about intentional abundance. Every detail should tell a story."</blockquote>

            <h2>Texture Over Everything</h2>
            <p>Velvet tablecloths, fringe chandeliers, and textured stationery are taking center stage. The tactile experience of an event is becoming just as important as the visual one. We're seeing a move away from smooth acrylics towards natural stones, rough-hewn woods, and heavy linens.</p>

            <h2>The Guest Experience</h2>
            <p>Maximalism extends to the itinerary as well. Multi-day celebrations with curated activities for guests are becoming the norm rather than the exception. Think welcome parties with full production, morning-after brunches with live jazz, and localized excursions.</p>
        `
    },
    {
        id: 2,
        title: "How to Budget for a Destination Wedding",
        excerpt: "Hidden costs, exchange rates, and travel logistics. Here's everything you need to know before booking that flight.",
        category: "Planning",
        author: "Michael Chen",
        date: "Jan 10, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=2070",
        tags: ["Budget", "Travel", "Destination"],
        content: `
            <p class="lead">Dreaming of saying "I do" on a sun-soaked beach or in a historic European castle? Destination weddings are magical, but they come with a unique set of financial challenges. Here is how to keep your wallet happy while planning the trip of a lifetime.</p>

            <h2>Currency Fluctuations</h2>
            <p>One major oversight is ignoring exchange rates. Vendor contracts signed in foreign currencies can fluctuate in cost by 10-20% over a year. <strong>Pro tip:</strong> Open a multi-currency account or lock in rates early if possible.</p>

            <h2>Hidden Travel Costs</h2>
            <p>Don't forget to factor in site visits. You'll likely want to see the venue at least once before the big week. Include airfare, accommodation, and dining for these scouting trips in your initial budget.</p>

            <h2>Guest Logistics</h2>
            <p>Are you covering shuttles? Welcome bags? While you aren't responsible for guests' airfare, the expectation for hospitality is higher at destination events. allocate funds for a welcome event to break the ice.</p>
        `
    },
    {
        id: 3,
        title: "Top 10 Venues in Tuscany for 2026",
        excerpt: "From ancient castles to rolling vineyards. Our curated list of the most breathtaking spots in Italy.",
        category: "Venues",
        author: "Emma Wilson",
        date: "Jan 08, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522673607200-1648832cee98?auto=format&fit=crop&q=80&w=2070",
        tags: ["Italy", "Europe", "Venues"],
        content: `
             <p class="lead">Tuscany remains the gold standard for romantic destination weddings. For 2026, we've scouted the region to find hidden gems that combine history with modern luxury.</p>

             <h2>1. Castello di Vicarello</h2>
             <p>A 12th-century castle turned luxury boutique hotel. Perfect for intimate gatherings where you want exclusivity and 360-degree views of the Maremma countryside.</p>

             <h2>2. Villa Cetinale</h2>
             <p>Famous for its baroque gardens and cypress-lined avenues. This 17th-century villa near Siena is for the couple that wants drama and grandeur.</p>

             <h2>3. Borgo Santo Pietro</h2>
             <p>A five-star sanctuary with a farm-to-table philosophy. Ideal for foodies, featuring a Michelin-starred restaurant and extensive organic gardens.</p>
        `
    },
    {
        id: 4,
        title: "The Ultimate Guide to Vendor Contracts",
        excerpt: "Don't sign until you read this. Legal experts weigh in on the red flags to watch out for.",
        category: "Legal",
        author: "David Ross",
        date: "Jan 05, 2026",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070",
        tags: ["Legal", "Contracts", "Business"],
        content: `
            <p class="lead">Contracts aren't the most romantic part of wedding planning, but they are arguably the most important. A solid contract protects both you and your vendors.</p>

            <h2>Force Majeure</h2>
            <p>Post-2020, this clause is non-negotiable. Ensure it covers pandemics, government shutdowns, and natural disasters, specifying exactly what happens to your deposit.</p>

            <h2>Cancellation Policies</h2>
            <p>Understand the sliding scale of payments. If you cancel 6 months out versus 6 days out, what do you owe? Make sure "non-refundable" retainers are clearly defined.</p>

            <h2>Scope of Work</h2>
            <p>Avoid "scope creep." If a photographer promises 8 hours, does that include travel time? If a florist says "centerpieces," how many stems? Specificity is your friend.</p>
        `
    },
    {
        id: 5,
        title: "Sustainable Events: A Guide to Zero-Waste Parties",
        excerpt: "How to host a spectacular event without leaving a footprint. Eco-friendly decor, food, and favors.",
        category: "Sustainability",
        author: "Lisa Green",
        date: "Jan 03, 2026",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2070",
        tags: ["Eco-friendly", "Green", "Planning"],
        content: `
            <p class="lead">Sustainability is no longer a niche trend; it's a responsibility. Hosting a zero-waste event doesn't mean sacrificing style.</p>

            <h2>Rent, Don't Buy</h2>
            <p>From linens to glassware to decor items, renting significantly reduces waste. Companies like Rent My Wedding or local prop houses have curated collections that rival any purchase.</p>

            <h2>Floral Foam Free</h2>
            <p>Traditional floral foam is microplastic pollution. Ask your florist to use chicken wire or pin frogs for mechanics. It's better for the environment and often allows for more natural, airy arrangements.</p>

            <h2>Digital Stationery</h2>
            <p>Save trees (and postage) with high-end digital invitations. Platforms like Greenvelope or Bliss & Bone offer stunning animated designs that feel just as luxe as paper.</p>
        `
    },
    {
        id: 6,
        title: "Tech for Planners: AI Tools You Need",
        excerpt: "Streamline your workflow with the latest in event technology. The best apps for 2026.",
        category: "Technology",
        author: "Alex Kim",
        date: "Jan 01, 2026",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        tags: ["AI", "Tools", "productivity"],
        content: `
            <p class="lead">Artificial Intelligence is changing the game for event professionals. From floor plan generation to automated client communication, these tools give you back your most valuable resource: specific time.</p>

            <h2>Ariya AI (Obviously)</h2>
            <p>Our own platform uses generative AI to build initial budget drafts and vendor shortlists based on basic client inputs. It cuts the onboarding phase by 70%.</p>

            <h2>Grammarly & ChatGPT</h2>
            <p>Use these for polishing client emails, writing website copy, and refining vendor inquiries. Train them on your brand voice for consistency.</p>

            <h2>Midjourney for Moodboards</h2>
            <p>Forget scouring Pinterest for hours. Generate custom concept art for your clients to visualize "hanging floral installations with disco balls" before you spend a dime.</p>
        `
    }
];
