export interface CulturalPillar {
  id: string;
  letter: string;
  name: string;
  odiaName: string;
  subtitle: string;
  summary: string;
  examples: string[];
  accentHex: string;
}

export interface ComparisonItem {
  index: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  detail: string;
  iconName: 'mic' | 'shield' | 'camera' | 'award' | 'package' | 'compass';
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface EcosystemMetric {
  value: string;
  label: string;
  context: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PILLARS: CulturalPillar[] = [
  {
    id: 'kala',
    letter: 'K',
    name: 'Kala',
    odiaName: 'କଳା',
    subtitle: 'Traditional Crafts & Handlooms',
    summary:
      'Discover Pattachitra scrolls, Cuttack Tarakasi silver filigree, terracotta, and Sambalpuri handlooms directly from verified artisan profiles with fair pricing.',
    examples: ['Pattachitra', 'Tarakasi Filigree', 'Handloom Textiles', 'Terracotta'],
    accentHex: '#A64B32',
  },
  {
    id: 'rasa',
    letter: 'R',
    name: 'Rasa',
    odiaName: 'ରସ',
    subtitle: 'Regional Food & Cuisine',
    summary:
      'Order authentic Poda Pitha, Chhenapoda, and heirloom Odia sweets backed by daily time- and GPS-stamped live kitchen hygiene proof.',
    examples: ['Poda Pitha', 'Chhenapoda', 'Traditional Sweets', 'Heirloom Recipes'],
    accentHex: '#D5AD59',
  },
  {
    id: 'lok',
    letter: 'L',
    name: 'Lok',
    odiaName: 'ଲୋକ',
    subtitle: 'Folk Arts & Performances',
    summary:
      'Explore dedicated profiles for traditional musicians, folk dancers, and theatre troupes—making it effortless to enquire and book authentic cultural performances.',
    examples: ['Folk Music', 'Traditional Dance', 'Rural Theatre', 'Storytelling'],
    accentHex: '#354C3C',
  },
  {
    id: 'utsav',
    letter: 'U',
    name: 'Utsav',
    odiaName: 'ଉତ୍ସବ',
    subtitle: 'Festivals & Living Traditions',
    summary:
      'Follow Odisha’s seasonal cultural calendar, community rituals, and local heritage stories across Cuttack and neighbouring districts.',
    examples: ['Cultural Calendar', 'Seasonal Rituals', 'Community Stories', 'Craft Fairs'],
    accentHex: '#A64B32',
  },
  {
    id: 'anubhav',
    letter: 'A',
    name: 'Anubhav',
    odiaName: 'ଅନୁଭବ',
    subtitle: 'Hands-On Cultural Experiences',
    summary:
      'Book live artisan demonstrations, regional cooking workshops, and guided heritage walks led by the practitioners who keep each craft alive.',
    examples: ['Craft Demos', 'Food Workshops', 'Heritage Tours', 'Skill Sessions'],
    accentHex: '#D5AD59',
  },
];

export const PROBLEM_ITEMS: ComparisonItem[] = [
  {
    index: '01',
    title: 'Dependence on middlemen and seasonal fairs',
    description:
      'Skilled artisans and home food makers struggle to reach steady year-round buyers beyond local exhibitions.',
  },
  {
    index: '02',
    title: 'Language and smartphone barriers',
    description:
      'Existing marketplaces expect English typing, catalogue photography, and digital marketing skills many rural creators do not have.',
  },
  {
    index: '03',
    title: 'Scattered cultural discovery',
    description:
      'Handlooms, regional cuisine, folk performers, and workshops sit across disconnected channels with no shared cultural story.',
  },
  {
    index: '04',
    title: 'Buyer hesitation around quality and hygiene',
    description:
      'Without touching or inspecting items in person, customers worry about machine-made imitations and kitchen cleanliness.',
  },
];

export const SOLUTION_ITEMS: ComparisonItem[] = [
  {
    index: '01',
    title: 'One connected home across five cultural pillars',
    description:
      'Kala, Rasa, Lok, Utsav, and Anubhav unite crafts, cuisine, folk arts, festivals, and workshops in one trustworthy place.',
  },
  {
    index: '02',
    title: 'Inclusive onboarding—phone or no phone',
    description:
      'Smartphone users speak product details in Odia via voice-to-listing; creators without phones are visited and onboarded by local representatives.',
  },
  {
    index: '03',
    title: 'AI check plus master-artisan sign-off',
    description:
      'Automated thread and pattern inspection works alongside cooperative or master-weaver approval, fair yarn-board pricing, and QR provenance.',
  },
  {
    index: '04',
    title: 'Daily live kitchen proof for every food order',
    description:
      'Food makers capture a fresh in-app kitchen photo or video each day—automatically stamped with time and GPS—before buyers place an order.',
  },
];

export const CORE_FEATURES: FeatureItem[] = [
  {
    id: 'voice-onboarding',
    title: 'Odia Voice & Assisted Onboarding',
    description:
      'Creators with phones speak listing details in Odia or send WhatsApp photos. Creators without smartphones receive free in-person onboarding from trained local representatives.',
    detail: 'Zero exclusion for non-digital makers',
    iconName: 'mic',
  },
  {
    id: 'authenticity-check',
    title: 'Dual-Layer Authenticity & QR Identity',
    description:
      'AI checks thread texture, weave pattern, and fair pricing against district yarn boards, followed by a master weaver or cooperative sign-off and a unique product QR link.',
    detail: 'Every listing verified before going live',
    iconName: 'shield',
  },
  {
    id: 'kitchen-proof',
    title: 'Daily Time- & GPS-Stamped Kitchen Proof',
    description:
      'Before ordering Poda Pitha or Chhenapoda, buyers view that day’s live in-app kitchen photo or short video stamped with capture time and location—preventing reused photos.',
    detail: 'Captured fresh inside the Kalura app',
    iconName: 'camera',
  },
  {
    id: 'seller-points',
    title: 'Quality-Linked Seller Margin Rewards',
    description:
      'Consistent daily hygiene proofs and verified deliveries earn creators points that directly raise their take-home margin, while repeated lapses trigger offline review.',
    detail: 'Higher quality directly pays the creator',
    iconName: 'award',
  },
  {
    id: 'fair-pricing',
    title: 'Fair Pricing & Protected Coordination',
    description:
      'A built-in fair-price calculator, protective packaging standards, and platform-managed enquiry coordination keep transactions transparent for both maker and buyer.',
    detail: 'Protective packaging on every order',
    iconName: 'package',
  },
  {
    id: 'storytelling',
    title: 'Origin Stories & Live Workshops',
    description:
      'Every product and dish carries its maker’s story and district heritage, alongside direct bookings for craft demonstrations, village tours, and folk performances.',
    detail: 'Preserving skills for younger generations',
    iconName: 'compass',
  },
];

export const BUYER_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Discover by pillar, craft, or story',
    description:
      'Browse verified handlooms, traditional dishes, folk artists, and workshops curated across Cuttack and Odisha.',
  },
  {
    step: '02',
    title: 'Inspect live verification and origin',
    description:
      'Check master-artisan approval, fair pricing, QR provenance, or today’s time-stamped kitchen proof before you commit.',
  },
  {
    step: '03',
    title: 'Order or book with peace of mind',
    description:
      'Submit orders, custom craft requests, or event bookings through Kalura—protected by packaging standards and post-delivery photo verification.',
  },
];

export const CREATOR_STEPS: JourneyStep[] = [
  {
    step: '01',
    title: 'Join via voice or local support',
    description:
      'Speak your product details in Odia via WhatsApp/app, or schedule a local representative visit to photograph and publish your work.',
  },
  {
    step: '02',
    title: 'Complete verification once—or daily for food',
    description:
      'Receive AI and master-weaver sign-off with a unique QR tag for crafts, or capture a quick daily live kitchen proof for regional foods.',
  },
  {
    step: '03',
    title: 'Fulfill orders and grow your margin',
    description:
      'Kalura coordinates buyer enquiries and protective packaging while your verified quality score unlocks higher earnings per sale.',
  },
];

export const ECOSYSTEM_METRICS: EcosystemMetric[] = [
  {
    value: '1,77,113',
    label: 'Recorded Artisans',
    context: 'Across Odisha’s handicrafts sector',
  },
  {
    value: '64',
    label: 'Approved Craft Categories',
    context: 'From Pattachitra to silver filigree',
  },
  {
    value: '150',
    label: 'Living Craft Clusters',
    context: 'Rooted in regional workshops and cooperatives',
  },
  {
    value: '38,299',
    label: 'Handicraft Units',
    context: 'Odisha Economic Survey 2025–26',
  },
];

export const PILOT_PHASES = [
  {
    phase: 'Phase 01',
    title: 'Community Listening in Cuttack',
    description:
      'Field interviews with 15–20 artisans, local food makers, and folk troupes alongside buyer hygiene and authenticity surveys.',
  },
  {
    phase: 'Phase 02',
    title: 'Cuttack & Nearby Areas Pilot',
    description:
      'Launch curated creator profiles, assisted onboarding, master-weaver sign-off, daily kitchen proof, and fair-price listings.',
  },
  {
    phase: 'Phase 03',
    title: 'Odisha-Wide Cultural Network',
    description:
      'Expand across craft clusters and districts with cooperative partnerships, regional workshops, and transparent creator payouts.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'no-smartphone',
    question: 'Do artisans or traditional food makers need a smartphone to join Kalura?',
    answer:
      'No. While creators with smartphones can speak product details in Odia or submit photos through WhatsApp and the Kalura app, creators without phones are supported by trained local representatives and student volunteers who visit in person, photograph their work with consent, and manage listings and enquiries.',
  },
  {
    id: 'authenticity-verified',
    question: 'How does Kalura verify that a craft or handloom product is authentic?',
    answer:
      'Every craft listing goes through a two-stage process before appearing to buyers. First, AI inspects thread texture, pattern, and fair pricing against district yarn-price boards as decision support. Second, a local cooperative or master weaver provides the final human sign-off and generates a unique QR verification record. After delivery, buyers can also upload photos to confirm the delivered item matches.',
  },
  {
    id: 'kitchen-hygiene',
    question: 'How does daily kitchen hygiene proof work for regional food orders?',
    answer:
      'Traditional food makers capture a live photo or short video of their kitchen directly inside the Kalura app each day. The platform automatically stamps the exact capture time and GPS location so old gallery photos cannot be reused, and buyers see that day’s proof on the food page before ordering.',
  },
  {
    id: 'fair-pricing',
    question: 'How does Kalura ensure fair pricing for both creators and customers?',
    answer:
      'Kalura pairs a fair-price calculator and district-wise yarn-price reference with quality-linked seller points. Creators who maintain high authenticity and daily hygiene standards earn higher margins without paying high upfront registration fees, while buyers pay honest prices with protective packaging included.',
  },
  {
    id: 'pilot-location',
    question: 'Where is Kalura launching first, and how can I participate?',
    answer:
      'Kalura is launching its initial pilot in Cuttack and nearby areas of Odisha before expanding across additional craft clusters. You can join the early access list today as a buyer, local creator, cooperative partner, or community onboarding volunteer.',
  },
];
