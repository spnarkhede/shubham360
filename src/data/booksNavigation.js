// Define the order of books for navigation based on all book files in src/pages/books
const BOOK_ORDER = [
  // Self-Improvement & Personal Development
  { slug: 'atomic-habits', title: 'Atomic Habits' },
  { slug: 'power-of-habit', title: 'The Power of Habit' },
  { slug: 'deep-work', title: 'Deep Work' },
  { slug: 'powerful-focus', title: 'Powerful Focus' },
  { slug: 'master-your-focus', title: 'Master Your Focus' },
  { slug: 'master-your-time', title: 'Master Your Time' },
  { slug: 'master-your-emotions', title: 'Master Your Emotions' },
  { slug: 'master-your-thinking', title: 'Master Your Thinking' },
  { slug: 'master-your-motivation', title: 'Master Your Motivation' },
  { slug: 'master-your-destiny', title: 'Master Your Destiny' },
  { slug: 'master-your-belifes', title: 'Master Your Beliefs' },
  { slug: 'strategic-mindset', title: 'Strategic Mindset' },
  { slug: 'immediate-action', title: 'Immediate Action' },
  { slug: 'dopamine-detox', title: 'Dopamine Detox' },
  { slug: 'four-thousand-weeks-time-management-for-mortals', title: 'Four Thousand Weeks: Time Management for Mortals' },
  { slug: '101-essays-that-will-change-the-way-you-think', title: '101 Essays That Will Change The Way You Think' },
  
  // Psychology & Mental Health
  { slug: 'thinking-fast-slow', title: 'Thinking, Fast and Slow' },
  { slug: 'psychology-of-money', title: 'The Psychology of Money' },
  { slug: 'the-psychology-of-money', title: 'The Psychology of Money' },
  { slug: 'emotional-intelligence', title: 'Emotional Intelligence' },
  { slug: 'mindset-the-new-psychology-of-success', title: 'Mindset: The New Psychology of Success' },
  { slug: 'psych-101', title: 'Psychology 101' },
  { slug: 'how-to-stop-worrying-and-start-living', title: 'How to Stop Worrying and Start Living' },
  { slug: 'the-courage-to-be-disliked', title: 'The Courage to be Disliked' },
  
  // Communication & Relationships
  { slug: 'how-to-win-friends-influence-people', title: 'How to Win Friends and Influence People' },
  { slug: 'how-to-talk-to-anyone', title: 'How to Talk to Anyone' },
  { slug: 'how-to-talk-to-anyone-and-everyone-about-anything', title: 'How to Talk to Anyone and Everyone About Anything' },
  { slug: 'the-communication-skills-bible', title: 'The Communication Skills Bible' },
  { slug: 'the-fine-art-of-small-talk', title: 'The Fine Art of Small Talk' },
  { slug: 'crucial-conversations', title: 'Crucial Conversations' },
  { slug: 'never-split-the-difference', title: 'Never Split the Difference' },
  { slug: 'negotiating-101', title: 'Negotiating 101' },
  { slug: 'read-people-like-a-book', title: 'Read People Like a Book' },
  { slug: 'men-are-from-mars-women-are-from-venus', title: 'Men Are from Mars, Women Are from Venus' },
  { slug: '8-rules-of-love', title: '8 Rules of Love' },
  
  // Leadership & Management
  { slug: 'dare-to-lead', title: 'Dare to Lead' },
  { slug: 'radical-candor-be-a-kick-ass-boss-without-losing-your-humanity', title: 'Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity' },
  { slug: 'radical-candor-how-to-get-what-you-want-by-saying-what-you-mean', title: 'Radical Candor: How to Get What You Want by Saying What You Mean' },
  { slug: 'the-coaching-habit', title: 'The Coaching Habit' },
  { slug: 'the-one-success-habit', title: 'The One Success Habit' },
  { slug: 'management-101', title: 'Management 101' },
  { slug: 'thank-god-for-the-feedback', title: 'Thank God for the Feedback' },
  { slug: 'thanks-for-the-feedback', title: 'Thanks for the Feedback' },
  
  // Business & Entrepreneurship
  { slug: 'start-with-why', title: 'Start with Why' },
  { slug: 'lean-startup', title: 'The Lean Startup' },
  { slug: 'principles-life-and-work', title: 'Principles: Life and Work' },
  { slug: 'the-personal-mba', title: 'The Personal MBA' },
  { slug: 'shoe-dog', title: 'Shoe Dog' },
  { slug: 'team-topologies', title: 'Team Topologies' },
  { slug: 'the-millionaire-fastlane', title: 'The Millionaire Fastlane' },
  
  // Finance & Investing
  { slug: 'investing-101', title: 'Investing 101' },
  { slug: 'accounting-101', title: 'Accounting 101' },
  { slug: 'economics-101', title: 'Economics 101' },
  { slug: 'stock-market-101', title: 'Stock Market 101' },
  { slug: 'moneyworks', title: 'MoneyWorks' },
  { slug: 'the-book-on-rental-property-investing', title: 'The Book on Rental Property Investing' },
  { slug: 'the-80-20-principle', title: 'The 80/20 Principle' },
  
  // Philosophy & Wisdom
  { slug: 'sapiens', title: 'Sapiens' },
  { slug: 'philosophy-101', title: 'Philosophy 101' },
  { slug: 'the-daily-stoic-by-ryan-holiday', title: 'The Daily Stoic' },
  { slug: 'the-daily-laws', title: 'The Daily Laws' },
  { slug: 'the-almanack-of-naval-ravikant', title: 'The Almanack of Naval Ravikant' },
  { slug: 'same-as-ever-book', title: 'Same as Ever' },
  { slug: 'ikigai-the-japanese-secret', title: 'Ikigai: The Japanese Secret' },
  
  // Robert Greene Series
  { slug: 'the-concise-48-laws-of-power', title: 'The Concise 48 Laws of Power' },
  { slug: 'the-concise-art-of-seduction', title: 'The Concise Art of Seduction' },
  { slug: 'the-concise-laws-of-human-nature', title: 'The Concise Laws of Human Nature' },
  { slug: 'the-concise-strategies-of-war', title: 'The Concise Strategies of War' },
  
  // Thomas Erikson "Surrounded" Series
  { slug: 'surrounded-by-idiots', title: 'Surrounded by Idiots' },
  { slug: 'surrounded-by-psychopaths-by-thomas-erikson', title: 'Surrounded by Psychopaths' },
  { slug: 'surrounded-by-narcissists', title: 'Surrounded by Narcissists' },
  { slug: 'surrounded-by-liars', title: 'Surrounded by Liars' },
  { slug: 'surrounded-by-setbacks', title: 'Surrounded by Setbacks' },
  { slug: 'surrounded-by-bad-bosses', title: 'Surrounded by Bad Bosses' },
  
  // Indian Philosophy & Culture
  { slug: 'bharat-ek-nayi-soch', title: 'Bharat Ek Nayi Soch' },
  { slug: 'india-that-is-bharat', title: 'India That Is Bharat' },
  { slug: 'hindus-in-hindu-rashtra', title: 'Hindus in Hindu Rashtra' },
  { slug: 'chanakyas-100-best-sutras', title: 'Chanakya\'s 100 Best Sutras' },
  { slug: 'corporate-chanakya', title: 'Corporate Chanakya' },
  { slug: 'kautileeya-arthshastra', title: 'Kautileeya Arthshastra' },
  { slug: 'srimad-bhagavadgita-volumn1', title: 'Srimad Bhagavadgita Volume 1' },
  { slug: 'srimad-bhagavadgita-volumn2', title: 'Srimad Bhagavadgita Volume 2' },
  { slug: 'boss-basics-of-sanatan-sanskriti', title: 'BOSS: Basics of Sanatan Sanskriti' },
  { slug: 'vaidik-dincharya-rituals', title: 'Vaidik Dincharya Rituals' },
  
  // Education Series (101 Books)
  { slug: 'american-government-101', title: 'American Government 101' },
  { slug: 'u.s.history-101', title: 'U.S. History 101' },
  
  // Performance & Achievement
  { slug: 'relentless-from-good-to-great-to-unstoppable-books', title: 'Relentless: From Good to Great to Unstoppable' },
  
  // Social Issues & Memoirs
  { slug: 'careless-people', title: 'Careless People' },
  { slug: 'invisible-women', title: 'Invisible Women' },
  
  // Health & Wellness
  { slug: 'semen-retention-miracles', title: 'Semen Retention Miracles' },
];

/**
 * Get navigation data for a specific book
 * @param {string} currentBookSlug - The slug of the current book
 * @returns {object} Navigation data with previous and next book information
 */
export function getBookNavigation(currentBookSlug) {
  const currentIndex = BOOK_ORDER.findIndex(book => book.slug === currentBookSlug);
  
  if (currentIndex === -1) {
    return {
      previous: null,
      next: null,
    };
  }
  
  const previous = currentIndex > 0 ? BOOK_ORDER[currentIndex - 1] : null;
  const next = currentIndex < BOOK_ORDER.length - 1 ? BOOK_ORDER[currentIndex + 1] : null;
  
  return {
    previous: previous ? {
      title: previous.title,
      link: `/books/${previous.slug}`,
    } : null,
    next: next ? {
      title: next.title,
      link: `/books/${next.slug}`,
    } : null,
  };
}

export default BOOK_ORDER;