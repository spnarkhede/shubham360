// src/data/booksNavigation.js
// Define the order of books for navigation based on the books.js file
const BOOK_ORDER = [
  { slug: 'atomic-habits', title: 'Atomic Habits' },
  { slug: 'psychology-of-money', title: 'The Psychology of Money' },
  { slug: 'careless-people', title: 'Careless People' },
  { slug: 'deep-work', title: 'Deep Work' },
  { slug: 'thinking-fast-slow', title: 'Thinking, Fast and Slow' },
  { slug: 'sapiens', title: 'Sapiens' },
  { slug: 'lean-startup', title: 'The Lean Startup' },
  { slug: 'shoe-dog', title: 'Shoe Dog' },
  { slug: 'power-of-habit', title: 'The Power of Habit' },
  { slug: 'start-with-why', title: 'Start with Why' },
  { slug: 'the-personal-mba', title: 'The Personal MBA' },
  { slug: 'strategic-mindset', title: 'Strategic Mindset' },
  { slug: 'immediate-action', title: 'Immediate Action' },
  { slug: 'thank-god-for-the-feedback', title: 'Thank God for the Feedback' },
  { slug: 'the-communication-skills-bible', title: 'The Communication Skills Bible' },
  { slug: 'powerful-focus', title: 'Powerful Focus' },
  { slug: 'the-one-success-habit', title: 'The One Success Habit' },
  { slug: 'how-to-talk-to-anyone-and-everyone-about-anything', title: 'How to Talk to Anyone and Everyone About Anything' },
  { slug: 'radical-candor-be-a-kick-ass-boss-without-losing-your-humanity', title: 'Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity' },
  { slug: 'the-coaching-habit', title: 'The Coaching Habit' },
  { slug: '8-rules-of-love', title: '8 Rules of Love' },
  { slug: 'principles-life-and-work', title: 'Principles: Life and Work' },
  { slug: 'surrounded-by-idiots', title: 'Surrounded by Idiots' },
  { slug: 'surrounded-by-psychopaths-by-thomas-erikson', title: 'Surrounded by Psychopaths' },
  { slug: 'surrounded-by-setbacks', title: 'Surrounded by Setbacks' },
  { slug: 'surrounded-by-bad-bosses', title: 'Surrounded by Bad Bosses' },
  { slug: 'surrounded-by-narcissists', title: 'Surrounded by Narcissists' },
  { slug: 'surrounded-by-liars', title: 'Surrounded by Liars' },
  { slug: 'men-are-from-mars-women-are-from-venus', title: 'Men Are From Mars, Women Are From Venus' },
  { slug: 'emotional-intelligence', title: 'Emotional Intelligence' },
  { slug: 'mindset-the-new-psychology-of-success', title: 'Mindset' },
  { slug: 'the-courage-to-be-disliked', title: 'The Courage To Be Disliked' },
  { slug: 'never-split-the-difference', title: 'Never Split The Difference' },
  { slug: 'relentless-from-good-to-great-to-unstoppable-books', title: 'Relentless' },
  { slug: 'read-people-like-a-book', title: 'Read People Like a Book' },
  { slug: 'how-to-win-friends-influence-people', title: 'How To Win Friends & Influence People' },
  { slug: 'how-to-stop-worrying-and-start-living', title: 'How to Stop Worrying And Start Living' },
  { slug: 'team-topologies', title: 'Team Topologies' },
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