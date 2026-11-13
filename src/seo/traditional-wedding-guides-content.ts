import { EVENT_IMAGES } from '../config/eventImages';

export interface TraditionalWeddingGuideContent {
    path: string;
    title: string;
    eyebrow: string;
    intro: string;
    image: string;
    imageAlt: string;
    sections: {
        id: string;
        title: string;
        paragraphs: string[];
        bullets?: string[];
        note?: string;
    }[];
    faqs: { question: string; answer: string }[];
}

export const yorubaWeddingGuide: TraditionalWeddingGuideContent = {
    path: '/yoruba-traditional-wedding',
    title: 'Yoruba Traditional Wedding: Customs, Engagement List and Planning Guide',
    eyebrow: 'Yoruba wedding customs',
    intro: 'Learn about family introductions, the engagement ceremony, ẹrù ìyàwó, Alaga, traditional attire and practical preparations. Yoruba customs vary between families, towns and religious backgrounds, so treat these as examples and confirm plans with the people involved.',
    image: EVENT_IMAGES.yorubaCouple,
    imageAlt: 'Yoruba couple celebrating in coordinated traditional wedding attire',
    sections: [
        {
            id: 'yoruba-meaning',
            title: 'What is a Yoruba traditional wedding?',
            paragraphs: [
                'A Yoruba traditional wedding, often called ìgbéyàwó, is a customary celebration in which the couple’s families participate in recognising and celebrating their union. It can connect two families through introductions, agreed ceremonial proceedings, blessings and a celebration with their community.',
                'There is no single format followed by every Yoruba family. A family’s town of origin, religion, personal preferences and inherited customs can influence the ceremony. Some families hold an introduction and engagement on separate dates; others combine or simplify parts of the process.',
            ],
        },
        {
            id: 'yoruba-stages',
            title: 'Common stages of a Yoruba traditional wedding',
            paragraphs: [
                'The family introduction is often an early opportunity for relatives to meet, communicate the couple’s intentions and discuss how to proceed. The families may agree on who will attend, any customary items to bring and a possible engagement date.',
                'The engagement ceremony may include family greetings, a proposal letter and response, ceremonial entrances, agreed gifts, prayers or blessings, and a reception. The programme and order should be discussed with both families before the event rather than assumed.',
            ],
            bullets: [
                'Confirm the couple’s wishes and consent at every stage.',
                'Choose family representatives and agree who will communicate decisions.',
                'Set the date, venue, guest numbers and ceremony programme together.',
                'Confirm the actual engagement list and any acceptable alternatives directly with the family.',
            ],
            note: 'Ceremony elements and their order vary. Use family guidance rather than treating an online example as a required script.',
        },
        {
            id: 'alaga',
            title: 'The Alaga: ìjókòó and ìdúró',
            paragraphs: [
                'Many Yoruba engagement ceremonies feature Alaga who help guide proceedings and communicate between the two families. Commonly described roles include Alaga ìjókòó, who represents the bride’s family, and Alaga ìdúró, who represents the groom’s family.',
                'An Alaga may use greetings, songs, praise poetry, humour and ceremonial exchanges. Agree the programme, names and pronunciation, family preferences, religious considerations and any customs to observe or avoid before booking their services.',
            ],
        },
        {
            id: 'eru-iyawo',
            title: 'Understanding ẹrù ìyàwó',
            paragraphs: [
                'Ẹrù ìyàwó refers to engagement gifts or items presented by the groom’s family in some Yoruba wedding customs. The bride’s family provides the actual list, and its contents, quantities and meanings may vary by family and locality.',
                'Examples that may appear on some lists include food or produce, drinks, fabrics, personal gifts, symbolic items and customary contributions. Do not rely on a sample list for exact quantities or assume every item is required. Ask for the current list and clarify what can be substituted or arranged differently.',
            ],
            bullets: [
                'Request the family’s list early and confirm every item and quantity.',
                'Ask about delivery, presentation and who is responsible for each item.',
                'Discuss the budget and acceptable alternatives respectfully.',
                'Keep the agreed list and receipts together with the wedding records.',
            ],
        },
        {
            id: 'yoruba-attire',
            title: 'Yoruba traditional wedding attire and aso-ebi',
            paragraphs: [
                'Some couples choose coordinated attire such as ìró and bùbá with gèlè, or agbádá and fìlà, while others choose different fabrics and styles. Aṣọ òkè may be selected for outfits or gifts. These are examples rather than requirements; personal comfort, family preferences and faith all matter.',
                'If you plan aṣọ ẹbí, share fabric, cost, order deadlines and collection details clearly. Schedule fittings and allow time for alterations, accessories and delivery.',
            ],
        },
        {
            id: 'yoruba-planning',
            title: 'A practical Yoruba wedding planning checklist',
            paragraphs: [
                'Good preparation lets the couple and families focus on the celebration. Agree what matters most, write down decisions and give each task a clear owner.',
            ],
            bullets: [
                'Discuss the ceremony format, dates and family expectations.',
                'Set a shared budget for venue, food, attire, gifts and vendors.',
                'Confirm the engagement list directly with the bride’s family.',
                'Book the venue and vendors after checking availability and written terms.',
                'Plan attire, fittings, invitations, guest travel and the ceremony programme.',
                'Share a final schedule and contact list with family representatives and the coordinator.',
            ],
        },
    ],
    faqs: [
        {
            question: 'What is a Yoruba traditional wedding called?',
            answer: 'A Yoruba traditional wedding is commonly called ìgbéyàwó. The terminology and ceremony details can vary by family and locality.',
        },
        {
            question: 'What is ẹrù ìyàwó?',
            answer: 'Ẹrù ìyàwó refers to engagement gifts or items presented by the groom’s family in some Yoruba wedding customs. The bride’s family provides the actual list and quantities.',
        },
        {
            question: 'What do the Alaga do at a Yoruba engagement?',
            answer: 'Alaga often guide ceremonial proceedings and communication between the families. Roles, wording and programme details should be confirmed with the families and the Alaga.',
        },
        {
            question: 'Are Yoruba wedding customs the same everywhere?',
            answer: 'No. Customs can differ by town, family, religion and personal preference. Confirm the traditions that are meaningful to the families involved.',
        },
        {
            question: 'What should the groom’s family bring to a Yoruba traditional wedding?',
            answer: 'Requirements depend on the bride’s family. Ask for the current engagement list directly and clarify items, quantities, delivery and acceptable alternatives.',
        },
        {
            question: 'What should a couple wear for a Yoruba traditional wedding?',
            answer: 'Couples may choose styles such as ìró and bùbá with gèlè, agbádá and fìlà, aṣọ òkè or other attire. The choice is personal and should reflect the couple’s preferences and family plans.',
        },
        {
            question: 'Can the introduction and engagement be held on the same day?',
            answer: 'Some families combine stages while others hold them on separate dates. Discuss timing and expectations with both families.',
        },
        {
            question: 'How do we plan a Yoruba traditional wedding budget?',
            answer: 'List current costs for the venue, food, attire, gifts, vendors, transport and guest arrangements. Confirm customary requirements with family representatives and include a contingency.',
        },
    ],
};

export const igboWeddingGuide: TraditionalWeddingGuideContent = {
    path: '/igbo-traditional-wedding',
    title: 'Igbo Traditional Wedding: Igba Nkwu, Engagement List and Customs',
    eyebrow: 'Igbo wedding customs',
    intro: 'Understand common Igbo marriage preparations, Ịkụ Aka, family discussions, customary lists, Ime Ego and the wine-carrying ceremony often associated with Ịgba Nkwụ. Practices vary significantly across Igbo communities and families.',
    image: EVENT_IMAGES.eventPlanner,
    imageAlt: 'Nigerian event planner preparing notes for a wedding celebration',
    sections: [
        {
            id: 'igbo-meaning',
            title: 'What is an Igbo traditional wedding?',
            paragraphs: [
                'An Igbo traditional wedding is a customary process and celebration through which a couple’s union is recognised in line with their families’ and community’s traditions. It can involve family visits, discussions, agreed requirements, gifts, blessings and a shared celebration.',
                'The process is not identical across Igbo communities. Practices in Anambra, Imo, Abia, Enugu, Ebonyi and other areas may differ, and families from the same town may also have different expectations. Treat examples as starting points for discussion, not universal instructions.',
            ],
        },
        {
            id: 'igbo-stages',
            title: 'Common stages in an Igbo marriage process',
            paragraphs: [
                'Families may begin by communicating the couple’s intentions, followed by a formal approach often called Ịkụ Aka. Further discussions can cover family expectations, the customary marriage list, the date and how the main ceremony will be organised.',
                'Ime Ego refers to the bride-price process in some Igbo marriage customs. The amount, timing, people authorised to discuss it and any other arrangements depend on the family and community. Clarify these details with the appropriate family representatives.',
            ],
            bullets: [
                'Confirm who should attend each family visit and what is expected.',
                'Obtain the bride’s family’s current list rather than copying one online.',
                'Agree how and when customary financial arrangements will be handled.',
                'Confirm the couple’s consent and the programme for the main celebration.',
            ],
        },
        {
            id: 'igba-nkwu',
            title: 'Ịgba Nkwụ and the wine-carrying ceremony',
            paragraphs: [
                'Ịgba Nkwụ is widely associated with the traditional marriage celebration. In a commonly recognised version of the wine-carrying ceremony, the bride carries palm wine, identifies the groom among the guests and presents the cup to him.',
                'The exact sequence, participants and meaning can differ. The couple and families should confirm which ceremonies they want, who will guide them and what practical arrangements are needed.',
            ],
            note: 'Do not assume every Igbo family conducts the wine-carrying ceremony in the same way or on the same schedule.',
        },
        {
            id: 'igbo-list',
            title: 'Igbo traditional marriage lists and gifts',
            paragraphs: [
                'A traditional marriage list may include provisions, drinks, symbolic items, gifts for the bride or contributions for relatives and community groups. Items and quantities differ considerably; the bride’s family should explain the actual requirements and any acceptable alternatives.',
                'The engagement list is not the same as the whole wedding budget. Keep customary items, agreed financial arrangements, attire, venue, catering and entertainment in separate budget categories.',
            ],
            bullets: [
                'Request the current list and clarify each item and quantity.',
                'Ask who receives items and whether separate family groups have requirements.',
                'Confirm palm wine or other ceremony arrangements with the family.',
                'Record agreed costs, substitutions, responsibilities and delivery dates.',
            ],
        },
        {
            id: 'igbo-attire',
            title: 'Igbo wedding attire and family coordination',
            paragraphs: [
                'Some celebrations feature a bride in a George or Hollandis wrapper and jewellery, and a groom in Isi Agu and a traditional cap. These are familiar examples, not mandatory dress codes. Families and couples may choose other attire and styling that suit their preferences.',
                'If coordinating aso-ebi, communicate the fabric, price, ordering process and timeline clearly. Plan measurements, fittings and accessories early, especially when garments are made to order.',
            ],
        },
        {
            id: 'igbo-checklist',
            title: 'Planning checklist for an Igbo traditional wedding',
            paragraphs: [
                'Start with family communication and the couple’s priorities. Confirm the sequence and requirements with the people responsible before booking suppliers or buying customary items.',
            ],
            bullets: [
                'Agree the dates, family representatives, guest estimate and budget.',
                'Confirm Ịkụ Aka and any further family visits.',
                'Request and review the official marriage list.',
                'Discuss Ime Ego arrangements with authorised family representatives.',
                'Confirm the Ịgba Nkwụ programme, venue and ceremony materials.',
                'Coordinate attire, food, vendors, invitations and guest logistics.',
                'Share the final programme and contact details with the event team.',
            ],
        },
    ],
    faqs: [
        {
            question: 'What is Igba Nkwu?',
            answer: 'Ịgba Nkwụ is commonly associated with an Igbo traditional marriage celebration and the wine-carrying ceremony. Details differ by family and community.',
        },
        {
            question: 'What happens during the Igbo wine-carrying ceremony?',
            answer: 'In a widely recognised version, the bride carries palm wine, identifies the groom and presents it to him. The ceremony may be conducted differently by different families.',
        },
        {
            question: 'What does Ịkụ Aka mean?',
            answer: 'Ịkụ Aka is commonly described as a formal approach or “knocking” by the groom’s family to communicate marriage intentions to the bride’s family.',
        },
        {
            question: 'What is Ime Ego?',
            answer: 'Ime Ego refers to the bride-price process in some Igbo marriage customs. Amounts and procedures differ and should be confirmed with the appropriate family representatives.',
        },
        {
            question: 'Is there one Igbo traditional marriage list?',
            answer: 'No. Requirements can vary among communities, towns and families. Obtain the list directly from the bride’s family.',
        },
        {
            question: 'What does an Igbo bride wear?',
            answer: 'Some brides choose a George or Hollandis wrapper with jewellery, while others choose different fabrics and styles. The choice depends on the bride and family preferences.',
        },
        {
            question: 'What does an Igbo groom wear?',
            answer: 'Isi Agu and a traditional cap are among the attire examples associated with some celebrations, but dress choices vary.',
        },
        {
            question: 'Can Igbo traditional and white weddings be combined?',
            answer: 'Some couples hold both on the same date and others choose separate dates or a different arrangement. Coordinate with family, religious institutions and relevant authorities as applicable.',
        },
    ],
};

export const hausaWeddingGuide: TraditionalWeddingGuideContent = {
    path: '/hausa-traditional-wedding',
    title: 'Hausa Traditional Wedding: Kayan Lefe, Customs and Planning Guide',
    eyebrow: 'Hausa wedding customs',
    intro: 'Explore family introductions, Kayan Zance, Kayan Lefe, Sadaki, Sa Lalle and wedding celebrations. Hausa families are culturally and religiously diverse; confirm customs and distinguish family traditions from religious requirements.',
    image: EVENT_IMAGES.eventPlanner,
    imageAlt: 'Nigerian event planner preparing notes for a wedding celebration',
    sections: [
        {
            id: 'hausa-meaning',
            title: 'What is a Hausa traditional wedding?',
            paragraphs: [
                'A Hausa wedding may involve family arrangements, customary preparations and, for many Muslim couples, an Islamic marriage contract. Celebrations can take place over several days, but not every family holds every event or follows the same sequence.',
                'Hausa people are not culturally or religiously uniform. Customs differ by family and locality. Religious requirements should be discussed with a knowledgeable religious authority; social celebrations and family customs should be confirmed with the people involved.',
            ],
        },
        {
            id: 'hausa-stages',
            title: 'Common Hausa wedding stages and terms',
            paragraphs: [
                'Some accounts describe Na Gani Ina So as expressing marriage interest, followed by Gaisuwa, a formal family visit. Kayan Zance may refer to early gifts, while Sarana can refer to agreeing on a date. Usage and sequence vary, so confirm local terminology with the family.',
                'Sadaki refers to Mahr in an Islamic marriage. Mahr is a marriage gift due to the bride under Islamic principles; it should not be confused with Kayan Lefe or general event costs. The couple should seek appropriate religious guidance on the contract and its requirements.',
            ],
            bullets: [
                'Discuss family visits and who will represent each household.',
                'Confirm the date and any gifts expected for each stage.',
                'Clarify the agreed Mahr with the couple and appropriate religious adviser.',
                'Check what is customary, optional or specific to the family.',
            ],
        },
        {
            id: 'kayan-lefe',
            title: 'Kayan Zance and Kayan Lefe',
            paragraphs: [
                'Kayan Zance is often used for gifts associated with an early stage of marriage discussions. Kayan Lefe is commonly associated with gifts or a trousseau prepared for the bride. The terms and expectations can differ between families.',
                'Depending on the family, preparations may include fabrics, clothing, personal or household items and presentation arrangements. Ask the bride’s family for current expectations and confirm what is useful and affordable rather than assuming a standard package.',
            ],
            bullets: [
                'Request an itemised list and clarify which items are essential to the family.',
                'Discuss acceptable choices and alternatives before purchasing.',
                'Organise clothing and household items around the bride’s needs and preferences.',
                'Plan packing, storage and delivery with the family.',
            ],
        },
        {
            id: 'hausa-ceremonies',
            title: 'Sa Lalle, Fatiha, Kamu and Walimah',
            paragraphs: [
                'Sa Lalle is associated with henna celebrations in some Hausa weddings. Fatiha or Daurin Aure may refer to the Islamic marriage solemnisation. Kamu Amariya and Walimah are among other terms associated with wedding celebrations in some families.',
                'These names do not mean every couple must hold every event. Confirm the couple’s wishes, religious requirements, family customs, order, guest list and budget for each celebration.',
            ],
            note: 'Keep religious obligations distinct from cultural or social events, and verify religious guidance with a trusted qualified adviser.',
        },
        {
            id: 'hausa-attire',
            title: 'Hausa traditional wedding attire',
            paragraphs: [
                'Attire may include embroidered fabrics, wrappers, veils, coordinated outfits and a groom’s baban riga. A bride may choose hijab or another form of modest styling according to her own preference and religious practice.',
                'Plan design choices, fabrics, measurements, fittings, accessories and delivery dates together. If guests are invited to wear coordinated clothing, share costs and deadlines clearly.',
            ],
        },
        {
            id: 'hausa-planning',
            title: 'Planning checklist for a Hausa wedding',
            paragraphs: [
                'A clear plan helps the couple and families organise multiple events without treating every example as a requirement. Keep one current schedule and assign a contact for each activity.',
            ],
            bullets: [
                'Discuss family expectations, the couple’s wishes and religious guidance.',
                'Agree dates, locations, event formats and responsibilities.',
                'Clarify Kayan Zance, Kayan Lefe and Sadaki separately.',
                'Set budgets for attire, gifts, venues, food, travel and celebrations.',
                'Coordinate invitations, guest arrangements, vendors and transport.',
                'Confirm the schedule and contacts with family representatives.',
            ],
        },
    ],
    faqs: [
        {
            question: 'What is Kayan Lefe?',
            answer: 'Kayan Lefe is commonly associated with gifts or a trousseau prepared for a bride in some Hausa wedding customs. Contents and expectations vary by family.',
        },
        {
            question: 'What is the difference between Kayan Zance and Kayan Lefe?',
            answer: 'Kayan Zance is often used for gifts during an earlier stage of marriage discussions, while Kayan Lefe is associated with gifts prepared for the bride. Families may use the terms differently, so confirm their meaning directly.',
        },
        {
            question: 'What is Sadaki?',
            answer: 'Sadaki refers to Mahr, the marriage gift due to the bride under Islamic marriage principles. It is distinct from general gifts or event expenses.',
        },
        {
            question: 'What is Sa Lalle?',
            answer: 'Sa Lalle refers to henna-related celebrations in some Hausa weddings. Whether and how it is held depends on the couple and family.',
        },
        {
            question: 'What happens at a Hausa Fatiha?',
            answer: 'Fatiha or Daurin Aure may refer to the Islamic marriage solemnisation. Couples should confirm the applicable religious requirements with a knowledgeable religious adviser.',
        },
        {
            question: 'Do all Hausa weddings include Kamu and Walimah?',
            answer: 'No. Events and their sequence vary by family, locality, religion and personal preference.',
        },
        {
            question: 'What should a Hausa bride wear?',
            answer: 'Attire may include embroidered fabrics, wrappers, veils or modest styling chosen by the bride. Choices depend on personal preference, family plans and religious practice.',
        },
        {
            question: 'Are Hausa wedding customs the same everywhere?',
            answer: 'No. Hausa families are diverse and customs differ. Confirm ceremony details with the couple, their families and relevant religious advisers.',
        },
    ],
};

export const nigerianEngagementListGuide: TraditionalWeddingGuideContent = {
    path: '/nigerian-wedding-engagement-list',
    title: 'Nigerian Traditional Wedding Engagement List: Gifts and Family Preparations',
    eyebrow: 'A practical family planning guide',
    intro: 'Learn how traditional wedding engagement lists work, explore examples from Yoruba, Igbo and Hausa preparations, and organise items, family responsibilities and costs. There is no single official list for every Nigerian wedding.',
    image: EVENT_IMAGES.eventPlanner,
    imageAlt: 'Nigerian event planner organising a wedding preparation checklist',
    sections: [
        {
            id: 'list-meaning',
            title: 'What is a traditional wedding engagement list?',
            paragraphs: [
                'An engagement list is a set of items, gifts or customary arrangements shared by a family for a traditional marriage process. Depending on the community and family, it may include food, drinks, clothing, personal gifts, symbolic items or financial contributions.',
                'Lists differ across ethnic groups, towns, families, religions and individual agreements. An online sample is not an official requirement. Obtain the current list directly from the family representatives and ask them to explain each item.',
            ],
        },
        {
            id: 'yoruba-list',
            title: 'Yoruba engagement list: ẹrù ìyàwó',
            paragraphs: [
                'In some Yoruba weddings, the list of engagement gifts is called ẹrù ìyàwó. Items that may be requested include food or produce, drinks, fabrics, personal gifts, symbolic items and contributions for relatives. Families decide their own details and quantities.',
                'Items such as honey, kola nut, bitter kola, yam, aṣọ òkè or a ring may appear in some examples, but neither a fixed quantity nor a universal symbolism should be assumed. Confirm the family’s actual list and the meaning they attach to items.',
            ],
        },
        {
            id: 'igbo-list',
            title: 'Igbo traditional marriage list',
            paragraphs: [
                'Igbo marriage lists may include provisions, drinks, customary items, gifts for the bride and arrangements for family or community representatives. Requirements vary widely by community and family.',
                'Ask the bride’s family for the official list and clarify which items relate to the main ceremony, particular relatives or other stages. Keep Ime Ego discussions distinct from other gifts and expenses.',
            ],
        },
        {
            id: 'hausa-list',
            title: 'Hausa preparations: Kayan Zance, Kayan Lefe and Sadaki',
            paragraphs: [
                'Some Hausa families distinguish early gifts called Kayan Zance from Kayan Lefe, which is commonly associated with the bride’s gifts or trousseau. The use of these terms and their contents may differ across families.',
                'Sadaki refers to Mahr in an Islamic marriage. It is due to the bride under Islamic principles and should be discussed separately from gifts, Kayan Lefe and event costs. Seek appropriate religious guidance on the marriage contract.',
            ],
        },
        {
            id: 'sample-checklist',
            title: 'Sample categories for organising an engagement list',
            paragraphs: [
                'Use these categories to organise a list you have received. They are planning prompts—not a checklist of mandatory items. Include only what the families have actually agreed.',
            ],
            bullets: [
                'Food and provisions: items specifically requested for the ceremony.',
                'Drinks and hospitality: agreed refreshments and serving arrangements.',
                'Clothing and personal gifts: fabrics, accessories or items requested for the couple.',
                'Cultural or religious items: only those confirmed as appropriate by the families.',
                'Financial arrangements: record customary contributions separately and clarify who receives them.',
                'Ceremony logistics: packaging, transport, presentation, storage and delivery.',
            ],
        },
        {
            id: 'organise-list',
            title: 'How to organise an engagement list calmly',
            paragraphs: [
                'Start early enough to clarify questions, compare prices and arrange delivery. Keep communication respectful and make sure the couple understand and agree to the plan.',
            ],
            bullets: [
                'Request the current list from the family representatives.',
                'Clarify each item, quantity, purpose, timing and acceptable alternative.',
                'Group items into categories and estimate current costs.',
                'Assign an owner and deadline to every agreed item.',
                'Confirm substitutions or cash arrangements before purchasing.',
                'Track spending, receipts, supplier details and delivery.',
                'Recheck the list with the family before the ceremony.',
            ],
        },
        {
            id: 'budget-list',
            title: 'Budgeting and common mistakes to avoid',
            paragraphs: [
                'Costs depend on the actual list, location, current prices, presentation and transport. Ask for current quotations and create a contingency instead of relying on old online price estimates.',
                'Common problems include copying another family’s list, confusing gifts with bride price or Mahr, making purchases before confirming alternatives, leaving delivery until the last minute and assuming one relative has agreed to cover a cost.',
            ],
            bullets: [
                'Record customary items, ceremony costs and vendor expenses separately.',
                'Confirm financial responsibilities in advance.',
                'Do not assume religious or cultural requirements from a generic list.',
                'Keep written records of changes and family agreements.',
            ],
        },
    ],
    faqs: [
        {
            question: 'Is there one engagement list for all Nigerian weddings?',
            answer: 'No. Requirements differ between communities and families. Request the current list directly from the family involved.',
        },
        {
            question: 'Who prepares a traditional wedding engagement list?',
            answer: 'In many traditions, the bride’s family provides the list to the groom’s family. The process and people responsible can differ, so confirm with the family representatives.',
        },
        {
            question: 'Does the groom’s family have to buy every item on a sample list?',
            answer: 'No online sample should be treated as an official requirement. Discuss the actual list, acceptable alternatives and responsibilities with both families.',
        },
        {
            question: 'What is ẹrù ìyàwó?',
            answer: 'Ẹrù ìyàwó refers to engagement gifts or items in some Yoruba wedding customs. Contents and quantities vary by family.',
        },
        {
            question: 'What is Kayan Lefe?',
            answer: 'Kayan Lefe is commonly associated with gifts or a trousseau prepared for a bride in some Hausa wedding customs. Confirm details with the family.',
        },
        {
            question: 'Is Sadaki the same as Kayan Lefe?',
            answer: 'No. Sadaki refers to Mahr under Islamic marriage principles; Kayan Lefe is commonly associated with gifts or a trousseau. Clarify religious and family arrangements separately.',
        },
        {
            question: 'Can an engagement list be paid for in cash?',
            answer: 'Some families may agree to cash alternatives for particular items, while others may prefer the items themselves. Ask before making substitutions.',
        },
        {
            question: 'When should the groom’s family receive the list?',
            answer: 'Ask the family when they expect to share it. Request it early enough to clarify items, budget, responsibilities and delivery.',
        },
    ],
};
