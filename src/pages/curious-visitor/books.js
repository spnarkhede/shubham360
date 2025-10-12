import React, { useState } from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionTemplate from '../../components/SectionTemplate';
import styles from './styles.module.css';
import { Book, Calendar, Star, Tag } from 'lucide-react';

// Book data from the provided component
const books = [
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: '/img/books/atomicHabits.jpg',
    rating: 5,
    readDate: 'January 2023',
    summary: 'An easy and proven way to build good habits and break bad ones.',
    categories: ['Self-Improvement', 'Psychology'],
    reviewLink: '/books/atomic-habits',
  },
  {
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    cover: '/img/books/psychologyOfMoney.jpg',
    rating: 4.5,
    readDate: 'March 2022',
    summary: 'Timeless lessons on wealth, greed, and happiness.',
    categories: ['Finance', 'Psychology'],
    reviewLink: '/books/psychology-of-money',
  },
  {
    title: 'Careless People: The explosive memoir that Meta doesn\'t want you to read',
    author: 'Sarah Wynn-Williams',
    cover: '/img/books/carelessPeople.jpg',
    rating: 5,
    readDate: 'April 2025',
    summary: 'An ugly, detailed portrait of one of the most powerful companies in the world.',
    categories: ['Memoir', 'Corporate Ethics'],
    reviewLink: '/books/careless-people',
  },    
  {
    title: 'Deep Work',
    author: 'Cal Newport',
    cover: '/img/books/deepWork.jpg',
    rating: 4.5,
    readDate: 'June 2021',
    summary: 'Rules for focused success in a distracted world.',
    categories: ['Productivity', 'Self-Improvement'],
    reviewLink: '/books/deep-work',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    cover: '/img/books/thinking-fast-slow.jpg',
    rating: 5,
    readDate: 'August 2020',
    summary: 'How the mind works and the two systems that drive the way we think.',
    categories: ['Psychology', 'Behavioral Economics'],
    reviewLink: '/books/thinking-fast-slow',
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    cover: '/img/books/sapiens.jpg',
    rating: 4.5,
    readDate: 'October 2019',
    summary: 'A brief history of humankind, exploring the ways in which biology and history have defined us.',
    categories: ['History', 'Anthropology'],
    reviewLink: '/books/sapiens',
  },
  {
    title: 'The Lean Startup',
    author: 'Eric Ries',
    cover: '/img/books/lean-startup.jpg',
    rating: 4,
    readDate: 'May 2019',
    summary: 'How today\'s entrepreneurs use continuous innovation to create radically successful businesses.',
    categories: ['Business', 'Entrepreneurship'],
    reviewLink: '/books/lean-startup',
  },
  {
    title: 'Shoe Dog',
    author: 'Phil Knight',
    cover: '/img/books/shoe-dog.jpg',
    rating: 4.5,
    readDate: 'February 2019',
    summary: 'A memoir by the creator of Nike, detailing the early days of the company.',
    categories: ['Memoir', 'Business'],
    reviewLink: '/books/shoe-dog',
  },
  {
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    cover: '/img/books/power-of-habit.jpg',
    rating: 4,
    readDate: 'July 2018',
    summary: 'Why we do what we do in life and business, exploring the science of habit formation.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/power-of-habit',
  },
  {
    title: 'Start with Why',
    author: 'Simon Sinek',
    cover: '/img/books/start-with-why.jpg',
    rating: 4,
    readDate: 'March 2018',
    summary: 'How great leaders inspire everyone to take action by starting with their purpose.',
    categories: ['Leadership', 'Business'],
    reviewLink: '/books/start-with-why',
  },
  {
    title: 'The Personal MBA: Master the art of Business',
    author: 'Josh Kaufman',
    cover: '/img/books/the-personal-mba.jpg',
    rating: 4.5,
    readDate: 'January 2023',
    summary: 'A comprehensive guide to mastering business concepts without an MBA.',
    categories: ['Business', 'Self-Improvement'],
    reviewLink: '/books/the-personal-mba',
  },
  {
    title: 'Strategic Mindset: A 7-Day Plan to Identify What Matters',
    author: 'Thibaut Meurisse',
    cover: '/img/books/strategicmindset.jpg',
    rating: 4,
    readDate: 'February 2023',
    summary: 'A practical plan to develop strategic thinking and prioritize what truly matters.',
    categories: ['Self-Improvement', 'Productivity'],
    reviewLink: '/books/strategic-mindset',
  },
  {
    title: 'Immediate Action: Regain Your Motivation',
    author: 'Thibaut Meurisse',
    cover: '/img/books/immediateaction.jpg',
    rating: 4,
    readDate: 'March 2023',
    summary: 'Strategies to overcome procrastination and take immediate action.',
    categories: ['Self-Improvement', 'Productivity'],
    reviewLink: '/books/immediate-action',
  },
  {
    title: 'Thank God for the Feedback',
    author: 'Sheila Heen & Elaine Lin',
    cover: '/img/books/thankGodForFeedback.jpg',
    rating: 4.5,
    readDate: 'April 2023',
    summary: 'A guide to receiving and utilizing feedback effectively for personal growth.',
    categories: ['Communication', 'Personal Development'],
    reviewLink: '/books/thank-god-for-the-feedback',
  },
  {
    title: 'The Communication Skills Bible: 30 simple ways to improve your conversations and relationships',
    author: 'Lewis J. Korg',
    cover: '/img/books/communicationSkillsBible.jpg',
    rating: 4,
    readDate: 'May 2023',
    summary: 'Practical techniques to enhance communication and build stronger relationships.',
    categories: ['Communication', 'Relationships'],
    reviewLink: '/books/the-communication-skills-bible',
  },
  {
    title: 'Powerful Focus: A 7-Day Plan to Develop Mental Clarity and Build Strong Focus',
    author: 'Thibaut Meurisse',
    cover: '/img/books/powerfulFocus.jpg',
    rating: 4,
    readDate: 'June 2023',
    summary: 'A structured approach to developing mental clarity and enhanced focus.',
    categories: ['Productivity', 'Self-Improvement'],
    reviewLink: '/books/powerful-focus',
  },
  {
    title: 'The One Success Habit (For Managers)',
    author: 'Dr. Fred Ray Lybrand',
    cover: '/img/books/oneSuccessHabit.jpg',
    rating: 4,
    readDate: 'July 2023',
    summary: 'The essential habit that transforms managerial effectiveness and team performance.',
    categories: ['Leadership', 'Management'],
    reviewLink: '/books/the-one-success-habit',
  },
  {
    title: 'How to Talk to Anyone and Everyone About Anything',
    author: 'Jenny Rick',
    cover: '/img/books/howToTalkToAnyone2.jpg',
    rating: 4,
    readDate: 'August 2023',
    summary: 'Methods to confidently engage in conversation with anyone on any topic.',
    categories: ['Communication', 'Social Skills'],
    reviewLink: '/books/how-to-talk-to-anyone-and-everyone-about-anything',
  },
  {
    title: 'Dopamine Detox',
    author: 'Thibaut Meurisse',
    cover: '/img/books/dopamineDetox.jpg',
    rating: 4.5,
    readDate: 'September 2023',
    summary: 'Techniques to reset your brain chemistry for greater focus and satisfaction.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/dopamine-detox',
  },
  {
    title: 'Thanks for the Feedback: The Science and Art of Receiving Feedback Well',
    author: 'Douglas Stone and Sheila Heen',
    cover: '/img/books/thanksForFeedback.jpg',
    rating: 4.5,
    readDate: 'October 2023',
    summary: 'Scientific approaches to transforming feedback into valuable insights.',
    categories: ['Communication', 'Personal Development'],
    reviewLink: '/books/thanks-for-the-feedback',
  },
  {
    title: 'Radical Candor: How to Get What You Want by Saying What You Mean',
    author: 'Kim Scott',
    cover: '/img/books/radicalCandorRevised.jpg',
    rating: 5,
    readDate: 'November 2023',
    summary: 'A framework for honest and effective communication in personal and professional settings.',
    categories: ['Communication', 'Leadership'],
    reviewLink: '/books/radical-candor-how-to-get-what-you-want-by-saying-what-you-mean',
  },
  {
    title: 'Dare to Lead: Brave Work. Tough Conversations. Whole Hearts.',
    author: 'Brené Brown',
    cover: '/img/books/dareToLead.jpg',
    rating: 5,
    readDate: 'December 2023',
    summary: 'How courage and vulnerability transform leadership and organizational culture.',
    categories: ['Leadership', 'Personal Development'],
    reviewLink: '/books/dare-to-lead',
  },
  {
    title: 'Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity',
    author: 'Kim Scott',
    cover: '/img/books/radicalCandorBoss.jpg',
    rating: 4.5,
    readDate: 'January 2022',
    summary: 'A management philosophy that balances direct feedback with personal care.',
    categories: ['Leadership', 'Management'],
    reviewLink: '/books/radical-candor-be-a-kick-ass-boss-without-losing-your-humanity',
  },
  {
    title: 'The Coaching Habit: Say Less, Ask More & Change the Way You Lead Forever',
    author: 'Michael Stanier Bungay',
    cover: '/img/books/coachingHabit.jpg',
    rating: 4.5,
    readDate: 'February 2022',
    summary: 'Seven transformative questions that improve leadership through effective coaching.',
    categories: ['Leadership', 'Coaching'],
    reviewLink: '/books/the-coaching-habit',
  },
  {
    title: '8 Rules of Love by Jay Shetty How to Find It Keep It And Let It Go',
    author: 'Jay Shetty',
    cover: '/img/books/eightRulesOfLove.jpg',
    rating: 4,
    readDate: 'March 2022',
    summary: 'Practical wisdom on finding, nurturing, and when necessary, letting go of love.',
    categories: ['Relationships', 'Personal Development'],
    reviewLink: '/books/8-rules-of-love',
  },
  {
    title: 'Principles: Life and Work',
    author: 'Ray Dalio',
    cover: '/img/books/lifeAndWorkPrinciples.jpg',
    rating: 5,
    readDate: 'April 2022',
    summary: 'Core principles for decision-making in personal and professional contexts.',
    categories: ['Business', 'Self-Improvement'],
    reviewLink: '/books/principles-life-and-work',
  },
  {
    title: 'Surrounded by Idiots',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedByIdiots.jpg',
    rating: 4,
    readDate: 'May 2022',
    summary: 'Understanding the four personality types and improving communication.',
    categories: ['Psychology', 'Communication'],
    reviewLink: '/books/surrounded-by-idiots',
  },
  {
    title: 'Surrounded by Psychopaths',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedByPsychopaths.jpg',
    rating: 4,
    readDate: 'June 2022',
    summary: 'How to identify and protect yourself from manipulative individuals.',
    categories: ['Psychology', 'Self-Protection'],
    reviewLink: '/books/surrounded-by-psychopaths-by-thomas-erikson',
  },
  {
    title: 'Surrounded by Setbacks',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedBySetbacks.jpg',
    rating: 4,
    readDate: 'July 2022',
    summary: 'Strategies to overcome obstacles and navigate life\'s challenges.',
    categories: ['Psychology', 'Resilience'],
    reviewLink: '/books/surrounded-by-setbacks',
  },
  {
    title: 'Surrounded by Bad Bosses',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedByBadBosses.jpg',
    rating: 4,
    readDate: 'August 2022',
    summary: 'How to identify and effectively manage difficult leadership styles.',
    categories: ['Career', 'Psychology'],
    reviewLink: '/books/surrounded-by-bad-bosses',
  },
  {
    title: 'Surrounded by Narcissists',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedByNarcissists.jpg',
    rating: 4,
    readDate: 'September 2022',
    summary: 'Understanding narcissistic behavior and learning to deal with it effectively.',
    categories: ['Psychology', 'Relationships'],
    reviewLink: '/books/surrounded-by-narcissists',
  },
  {
    title: 'Surrounded by Liars',
    author: 'Thomas Erikson',
    cover: '/img/books/surroundedByLiars.jpg',
    rating: 4,
    readDate: 'October 2022',
    summary: 'How to detect deception and navigate relationships with dishonest people.',
    categories: ['Psychology', 'Communication'],
    reviewLink: '/books/surrounded-by-liars',
  },
  {
    title: 'Men Are From Mars, Women Are From Venus',
    author: 'John Gray',
    cover: '/img/books/menAreFromMarsWomenAreFromVenus.jpg',
    rating: 4,
    readDate: 'November 2022',
    summary: 'Understanding the fundamental differences between men and women for better relationships.',
    categories: ['Relationships', 'Psychology'],
    reviewLink: '/books/men-are-from-mars-women-are-from-venus',
  },
  {
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman',
    cover: '/img/books/emotionalIntelligence.jpg',
    rating: 5,
    readDate: 'December 2022',
    summary: 'Why EQ matters more than IQ for success and fulfillment.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/emotional-intelligence',
  },
  {
    title: 'Mindset The New Psychology Of Success',
    author: 'Carol S. Dweck',
    cover: '/img/books/mindset.jpg',
    rating: 5,
    readDate: 'January 2021',
    summary: 'How our beliefs about abilities and potential impact our success.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/mindset-the-new-psychology-of-success',
  },
  {
    title: 'The Courage To Be Disliked',
    author: 'Ichiro Kishimi & Fumitake Koga',
    cover: '/img/books/courageToBeDisliked.jpg',
    rating: 4.5,
    readDate: 'February 2021',
    summary: 'Adlerian psychology principles for happiness and living freely.',
    categories: ['Philosophy', 'Psychology'],
    reviewLink: '/books/the-courage-to-be-disliked',
  },
  {
    title: 'Never Split The Difference',
    author: 'Chris Voss & Tahl Raz',
    cover: '/img/books/neverSplitTheDifference.jpg',
    rating: 5,
    readDate: 'March 2021',
    summary: 'Negotiation techniques from a former FBI hostage negotiator.',
    categories: ['Negotiation', 'Communication'],
    reviewLink: '/books/never-split-the-difference',
  },
  {
    title: 'Relentless: From Good to Great to Unstoppable',
    author: 'Tim S. Grover',
    cover: '/img/books/relentless.jpg',
    rating: 4,
    readDate: 'April 2021',
    summary: 'Mindsets and methods to achieve elite performance in any field.',
    categories: ['Sports', 'Performance'],
    reviewLink: '/books/relentless-from-good-to-great-to-unstoppable-books',
  },
  {
    title: 'Read People Like a Book: How to Analyze, Understand, and Predict Peoples Emotions, Thoughts, Intentions, and Behaviors',
    author: 'Patrick King',
    cover: '/img/books/readPeopleLikeABook.jpg',
    rating: 4,
    readDate: 'May 2021',
    summary: 'Techniques to understand human behavior and improve social intelligence.',
    categories: ['Psychology', 'Communication'],
    reviewLink: '/books/read-people-like-a-book',
  },
  {
    title: 'How To Win Friends & Influence People',
    author: 'Dale Carnegie',
    cover: '/img/books/howToWinFriends.jpg',
    rating: 5,
    readDate: 'June 2021',
    summary: 'Timeless strategies for building relationships and influencing others positively.',
    categories: ['Communication', 'Self-Improvement'],
    reviewLink: '/books/how-to-win-friends-influence-people',
  },
  {
    title: 'How to Stop Worrying And Start Living',
    author: 'Dale Carnegie',
    cover: '/img/books/howToStopWorrying.jpg',
    rating: 4.5,
    readDate: 'July 2021',
    summary: 'Practical methods to overcome anxiety and enjoy a stress-free life.',
    categories: ['Self-Help', 'Mental Health'],
    reviewLink: '/books/how-to-stop-worrying-and-start-living',
  },
  {
    title: 'Team Topologies: Organizing Business and Technology Teams for Fast Flow',
    author: 'Matthew Skelton and Manuel Pais',
    cover: '/img/books/teamTopologies.jpg',
    rating: 4.5,
    readDate: 'August 2021',
    summary: 'Effective team structures for modern software delivery and organizational success.',
    categories: ['Business', 'Technology'],
    reviewLink: '/books/team-topologies',
  },
  {
    title: 'Four Thousand Weeks: Time Management for Mortals',
    author: 'Oliver Burkeman',
    cover: '/img/books/fourThousandWeeks.jpg',
    rating: 4.5,
    readDate: 'September 2021',
    summary: 'A philosophical approach to managing time with the awareness of our finite lifespan.',
    categories: ['Productivity', 'Philosophy'],
    reviewLink: '/books/four-thousand-weeks:-time-management-for-mortals',
  },
  {
    title: 'The Almanack of Naval Ravikant: A Guide To Wealth And Happiness',
    author: 'Eric Jorgenson',
    cover: '/img/books/almanackOfNavalRavikant.jpg',
    rating: 5,
    readDate: 'October 2021',
    summary: 'Wisdom on wealth creation, happiness, and living a philosophical life.',
    categories: ['Philosophy', 'Wealth'],
    reviewLink: '/books/the-almanack-of-naval-ravikant',
  },
  {
    title: 'The Daily Stoic 366 Meditations on Wisdom Perseverance and the Art of Living',
    author: 'Ryan Holiday and Stephen Hanselman',
    cover: '/img/books/dailyStoic.jpg',
    rating: 5,
    readDate: 'November 2021',
    summary: 'Daily reflections on Stoic principles for a meaningful life.',
    categories: ['Philosophy', 'Self-Improvement'],
    reviewLink: '/books/the-daily-stoic-by-ryan-holiday',
  },
  {
    title: 'How To Talk To Anyone: 92 Little Tricks for Big Success in Relationships',
    author: 'Leil Lowndes',
    cover: '/img/books/howToTalkToAnyone.jpg',
    rating: 4,
    readDate: 'December 2021',
    summary: 'Practical techniques to enhance communication and build better relationships.',
    categories: ['Communication', 'Social Skills'],
    reviewLink: '/books/how-to-talk-to-anyone',
  },
  {
    title: 'The Millionaire Fastlane',
    author: 'MJ DeMarco',
    cover: '/img/books/millionaireFastlane.jpg',
    rating: 4.5,
    readDate: 'January 2020',
    summary: 'Unconventional strategies for building wealth through entrepreneurship.',
    categories: ['Finance', 'Entrepreneurship'],
    reviewLink: '/books/the-millionaire-fastlane',
  },
  {
    title: 'The Book on Rental Property Investing',
    author: 'Brandon Turner',
    cover: '/img/books/bookOnRentalPropertyInvesting.jpg',
    rating: 4,
    readDate: 'February 2020',
    summary: 'Strategies for building wealth through real estate investments.',
    categories: ['Real Estate', 'Investing'],
    reviewLink: '/books/the-book-on-rental-property-investing',
  },
  {
    title: 'Same As Ever',
    author: 'Morgan Housel',
    cover: '/img/books/sameAsEver.jpg',
    rating: 4.5,
    readDate: 'May 2020',
    summary: 'How human behavior and financial history repeat in predictable patterns.',
    categories: ['Finance', 'History'],
    reviewLink: '/books/same-as-ever-book',
  },
  {
    title: 'The 80/20 Principle: The Secret to Achieving More with Less',
    author: 'Richard Koch',
    cover: '/img/books/eightyTwentyPrinciple.jpg',
    rating: 4.5,
    readDate: 'June 2020',
    summary: 'How to apply the Pareto Principle to maximize efficiency and results.',
    categories: ['Business', 'Productivity'],
    reviewLink: '/books/the-80-20-principle',
  },
  {
    title: 'Crucial Conversations: Tools for Talking When Stakes Are High',
    author: 'Joseph Grenny',
    cover: '/img/books/crucialConversations.jpg',
    rating: 4.5,
    readDate: 'July 2020',
    summary: 'Techniques for handling difficult conversations effectively.',
    categories: ['Communication', 'Conflict Resolution'],
    reviewLink: '/books/crucial-conversations',
  },
  {
    title: 'The Fine Art of Small Talk',
    author: 'Debra Fine',
    cover: '/img/books/fineArtOfSmallTalk.jpg',
    rating: 4,
    readDate: 'August 2020',
    summary: 'How to start conversations, keep them going, and establish meaningful connections.',
    categories: ['Communication', 'Social Skills'],
    reviewLink: '/books/the-fine-art-of-small-talk',
  },
  {
    title: 'Master Your Time',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourTime.jpg',
    rating: 4,
    readDate: 'September 2020',
    summary: 'Practical strategies for effective time management and productivity.',
    categories: ['Productivity', 'Self-Improvement'],
    reviewLink: '/books/master-your-time',
  },
  {
    title: 'Master Your Beliefs',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourBeliefs.jpg',
    rating: 4,
    readDate: 'October 2020',
    summary: 'How to identify and transform limiting beliefs for personal growth.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/master-your-beliefs',
  },
  {
    title: 'Master Your Destiny',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourDestiny.jpg',
    rating: 4,
    readDate: 'November 2020',
    summary: 'Taking control of your life through intentional choices and actions.',
    categories: ['Self-Improvement', 'Personal Development'],
    reviewLink: '/books/master-your-destiny',
  },
  {
    title: 'Master Your Thinking',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourThinking.jpg',
    rating: 4.5,
    readDate: 'December 2020',
    summary: 'Techniques to improve mental clarity and cognitive performance.',
    categories: ['Psychology', 'Critical Thinking'],
    reviewLink: '/books/master-your-thinking',
  },
  {
    title: 'Master Your Emotions',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourEmotions.jpg',
    rating: 4.5,
    readDate: 'January 2019',
    summary: 'Practical strategies for emotional intelligence and emotional regulation.',
    categories: ['Psychology', 'Emotional Intelligence'],
    reviewLink: '/books/master-your-emotions',
  },
  {
    title: 'Master Your Motivation',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourMotivation.jpg',
    rating: 4,
    readDate: 'February 2019',
    summary: 'Understanding and harnessing sustainable motivation for long-term success.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/master-your-motivation',
  },
  {
    title: 'Master Your Focus',
    author: 'Thibaut Meurisse',
    cover: '/img/books/masterYourFocus.jpg',
    rating: 4,
    readDate: 'March 2019',
    summary: 'Practical techniques to improve concentration and eliminate distractions.',
    categories: ['Productivity', 'Self-Improvement'],
    reviewLink: '/books/master-your-focus',
  },
  {
    title: 'Philosophy 101',
    author: 'Paul Kleinman',
    cover: '/img/books/philosophy101.jpg',
    rating: 4.5,
    readDate: 'April 2019',
    summary: 'An accessible introduction to major philosophical concepts and thinkers.',
    categories: ['Philosophy', 'Education'],
    reviewLink: '/books/philosophy-101',
  },
  {
    title: 'Management 101',
    author: 'Stephan Soundering',
    cover: '/img/books/management101.jpg',
    rating: 4,
    readDate: 'May 2019',
    summary: 'Foundational management principles and practices for effective leadership.',
    categories: ['Business', 'Management'],
    reviewLink: '/books/management-101',
  },
  {
    title: 'Economics 101',
    author: 'Alfred Mill',
    cover: '/img/books/economics101.jpg',
    rating: 4,
    readDate: 'June 2019',
    summary: 'A primer on economic theories and concepts for everyday understanding.',
    categories: ['Economics', 'Education'],
    reviewLink: '/books/economics-101',
  },
  {
    title: 'Negotiating 101',
    author: 'Peter Sander',
    cover: '/img/books/negotiating101.jpg',
    rating: 4,
    readDate: 'July 2019',
    summary: 'Essential strategies and tactics for successful negotiations.',
    categories: ['Business', 'Negotiation'],
    reviewLink: '/books/negotiating-101',
  },
  {
    title: 'PSYCH 101',
    author: 'Paul Kleinman',
    cover: '/img/books/psych101.jpg',
    rating: 4.5,
    readDate: 'August 2019',
    summary: 'An introduction to core concepts in psychology and human behavior.',
    categories: ['Psychology', 'Education'],
    reviewLink: '/books/psych-101',
  },
  {
    title: 'American Government 101',
    author: 'Kathleen Sears',
    cover: '/img/books/americanGovernment101.jpg',
    rating: 4,
    readDate: 'September 2019',
    summary: 'A concise overview of American governmental structures and processes.',
    categories: ['Politics', 'Education'],
    reviewLink: '/books/american-government-101',
  },
  {
    title: 'U.S.History 101',
    author: 'Kathleen Sears',
    cover: '/img/books/usHistory101.jpg',
    rating: 4,
    readDate: 'October 2019',
    summary: 'A comprehensive introduction to the history of the United States.',
    categories: ['History', 'Education'],
    reviewLink: '/books/u.s.history-101',
  },
  {
    title: 'Stock Market 101',
    author: 'Michele Cagan',
    cover: '/img/books/stockMarket101.jpg',
    rating: 4,
    readDate: 'November 2019',
    summary: 'Fundamental concepts for understanding and participating in the stock market.',
    categories: ['Finance', 'Investing'],
    reviewLink: '/books/stock-market-101',
  },
  {
    title: 'Accounting 101',
    author: 'Michele Cagan',
    cover: '/img/books/accounting101.jpg',
    rating: 4,
    readDate: 'December 2019',
    summary: 'Essential accounting principles and practices explained simply.',
    categories: ['Finance', 'Business'],
    reviewLink: '/books/accounting-101',
  },
  {
    title: 'Investing 101',
    author: 'Michele Cagan CPA',
    cover: '/img/books/investing101.jpg',
    rating: 4,
    readDate: 'January 2018',
    summary: 'A beginners guide to building wealth through various investment vehicles.',
    categories: ['Finance', 'Investing'],
    reviewLink: '/books/investing-101',
  },
  {
    title: '101 Essays That Will Change The Way You Think',
    author: 'Brianna Wiest',
    cover: '/img/books/oneHundredOneEssays.jpg',
    rating: 4.5,
    readDate: 'February 2018',
    summary: 'Thought-provoking essays on personal growth, psychology, and mindfulness.',
    categories: ['Psychology', 'Philosophy'],
    reviewLink: '/books/101-essays-that-will-change-the-way-you-think',
  },
  {
    title: 'The Concise Strategies of War',
    author: 'Robert Greene',
    cover: '/img/books/conciseStrategiesOfWar.jpg',
    rating: 4.5,
    readDate: 'March 2018',
    summary: 'Condensed strategic principles from historical conflicts applicable to modern life.',
    categories: ['Strategy', 'History'],
    reviewLink: '/books/the-concise-strategies-of-war',
  },
  {
    title: 'The Concise Laws of Human Nature',
    author: 'Robert Greene',
    cover: '/img/books/conciseLawsOfHumanNature.jpg',
    rating: 5,
    readDate: 'April 2018',
    summary: 'Understanding human behavior patterns and psychological tendencies.',
    categories: ['Psychology', 'Self-Improvement'],
    reviewLink: '/books/the-concise-laws-of-human-nature',
  },
  {
    title: 'The Daily Laws',
    author: 'Robert Greene',
    cover: '/img/books/dailyLaws.jpg',
    rating: 4.5,
    readDate: 'May 2018',
    summary: 'Daily principles for mastering power, seduction, and human nature.',
    categories: ['Self-Improvement', 'Strategy'],
    reviewLink: '/books/the-daily-laws',
  },
  {
    title: 'The Concise 48 Laws of Power',
    author: 'Robert Greene',
    cover: '/img/books/concise48LawsOfPower.jpg',
    rating: 4.5,
    readDate: 'June 2018',
    summary: 'Condensed principles for understanding and navigating power dynamics.',
    categories: ['Strategy', 'Psychology'],
    reviewLink: '/books/the-concise-48-laws-of-power',
  },
  {
    title: 'The Concise Art of Seduction',
    author: 'Robert Greene',
    cover: '/img/books/conciseArtOfSeduction.jpg',
    rating: 4,
    readDate: 'July 2018',
    summary: 'Understanding the psychology of attraction and influence.',
    categories: ['Psychology', 'Relationships'],
    reviewLink: '/books/the-concise-art-of-seduction',
  },
  {
    title: 'Ikigai The Japanese Secret Philosophy for A Happy Healthy',
    author: 'Hector Garcia',
    cover: '/img/books/ikigai.jpg',
    rating: 4,
    readDate: 'June 2023',
    summary: 'A deep dive into the Japanese philosophy of living a long and happy life through purpose and balance.',
    categories: ['Philosophy', 'Well-being'],
    reviewLink: '/books/ikigai-the-japanese-secret',
  },
  {
    title: 'Invisible Women: Exposing Data Bias in a World Designed for Men',
    author: 'Caroline Criado-Perez',
    cover: '/img/books/invisibleWomen.jpg',
    rating: 5,
    readDate: 'August 2023',
    summary: 'A powerful exposé on how gender bias is embedded in data and everyday systems.',
    categories: ['Feminism', 'Sociology'],
    reviewLink: '/books/invisible-women',
  },
  {
    title: 'Hindus in Hindu Rashtra: Eighth-class Citizens and Victims of State-sanctioned Apartheid',
    author: 'Anand Ranganathan',
    cover: '/img/books/hindusInHinduRashtra.jpg',
    rating: 4,
    readDate: 'March 2024',
    summary: 'A provocative exploration of the status of Hindus in modern India through socio-political lenses.',
    categories: ['Politics', 'Indian Society'],
    reviewLink: '/books/hindus-in-hindu-rashtra',
  },
  {
    title: 'Corporate Chanakya',
    author: 'Radhakrishnan Pillai',
    cover: '/img/books/corporateChanakya.jpg',
    rating: 4,
    readDate: 'February 2024',
    summary: 'Ancient Indian wisdom from Chanakya applied to modern business leadership and strategy.',
    categories: ['Leadership', 'Business'],
    reviewLink: '/books/corporate-chanakya',
  },
  {
    title: 'Kautileeya Arthshastra',
    author: 'Kautilya',
    cover: '/img/books/kautileeyaArthshastra.jpg',
    rating: 4,
    readDate: 'April 2024',
    summary: 'A foundational ancient Indian text on economics, politics, and strategy by Chanakya.',
    categories: ['History', 'Economics'],
    reviewLink: '/books/kautileeya-arthshastra',
  },
  {
    title: "Chanakya's 100 Best Sutras: Ageless Wisdom for Unlocking Your Potential and Achieving Your Goals",
    author: 'Radhakrishnan Pillai',
    cover: '/img/books/chanakyas100BestSutras.jpg',
    rating: 4,
    readDate: 'April 2024',
    summary: 'A compilation of timeless principles from Chanakya to guide personal growth and success.',
    categories: ['Motivation', 'Wisdom'],
    reviewLink: '/books/chanakyas-100-best-sutras',
  },
  {
    title: 'India that is Bharat: Coloniality Civilisation Constitution',
    author: 'Deepak J. Sai',
    cover: '/img/books/indiaThatIsBharat.jpg',
    rating: 5,
    readDate: 'May 2024',
    summary: 'A critical re-examination of India’s constitutional framework from a civilizational lens.',
    categories: ['Constitution', 'Indian History'],
    reviewLink: '/books/india-that-is-bharat',
  },
  {
    title: 'B.O.S.S. Basics of Sanatan Sanskriti',
    author: 'Prateeik Prajapati',
    cover: '/img/books/bossBasicsOfSanatanSanskriti.jpg',
    rating: 4,
    readDate: 'March 2024',
    summary: 'An insightful book introducing the foundations of Sanatan Dharma and Indian culture.',
    categories: ['Culture', 'Sanatan Dharma'],
    reviewLink: '/books/boss-basics-of-sanatan-sanskriti',
  },
  {
    title: 'Vaidik Dincharya : Rituals, Routines & Shlokas for ideal life',
    author: 'Prateeik Prajapati',
    cover: '/img/books/vaidikDincharya.jpg',
    rating: 4,
    readDate: 'March 2024',
    summary: 'A guide to Vedic routines and practices for leading a harmonious and spiritual life.',
    categories: ['Spirituality', 'Lifestyle'],
    reviewLink: '/books/vaidik-dincharya-rituals',
  },
  {
    title: 'Semen Retention Miracles',
    author: 'Prateeik Prajapati',
    cover: '/img/books/semenRetentionMiracles.jpg',
    rating: 3,
    readDate: 'February 2024',
    summary: 'Explores the ancient practice of semen retention and its impact on energy and success.',
    categories: ['Self-Discipline', 'Wellness'],
    reviewLink: '/books/semen-retention-miracles',
  },
  {
    title: 'Money Works',
    author: 'Prateeik Prajapati',
    cover: '/img/books/moneyworks.jpg',
    rating: 4,
    readDate: 'April 2024',
    summary: 'Principles of financial wisdom rooted in dharmic thinking and everyday practicality.',
    categories: ['Finance', 'Self-Help'],
    reviewLink: '/books/moneyworks',
  },
  {
    title: 'Bharat Ek Nayi Soch',
    author: 'Harsh Madhusudan & Rajiv Mantri',
    cover: '/img/books/bharatEkNayiSoch.jpg',
    rating: 4,
    readDate: 'May 2024',
    summary: 'Presents a forward-looking economic and political vision for India’s future.',
    categories: ['Economics', 'Policy'],
    reviewLink: '/books/bharat-ek-nayi-soch',
  },
  {
    title: 'Shrimad Bhagavad Geeta Volume 1',
    author: 'Swami Ramsukhdas',
    cover: '/img/books/srimadBhagavadgitaVolumn1.jpg',
    rating: 5,
    readDate: 'January 2024',
    summary: 'Detailed spiritual commentary on the first half of the Bhagavad Gita.',
    categories: ['Spirituality', 'Scripture'],
    reviewLink: '/books/srimad-bhagavadgita-volumn1',
  },
  {
    title: 'Shrimad Bhagavad Geeta Volume 2',
    author: 'Swami Ramsukhdas',
    cover: '/img/books/srimadBhagavadgitaVolumn2.jpg',
    rating: 5,
    readDate: 'February 2024',
    summary: 'Continuation and completion of the divine insights from the Bhagavad Gita.',
    categories: ['Spirituality', 'Scripture'],
    reviewLink: '/books/srimad-bhagavadgita-volumn2',
  },
];

// Book categories based on the book navigation data
const BOOK_CATEGORIES = [
  'All',
  'Self-Improvement & Personal Development',
  'Psychology & Mental Health',
  'Communication & Relationships',
  'Leadership & Management',
  'Business & Entrepreneurship',
  'Finance & Investing',
  'Philosophy & Wisdom',
  'Indian Philosophy & Culture',
  'Education',
  'Health & Wellness'
];

// Function to categorize books
const categorizeBook = (book) => {
  const title = book.title.toLowerCase();
  const categories = book.categories.map(cat => cat.toLowerCase());
  
  // Self-Improvement & Personal Development
  if (categories.some(cat => 
    cat.includes('self-improvement') || 
    cat.includes('personal development') || 
    cat.includes('productivity') || 
    cat.includes('focus') || 
    cat.includes('motivation') || 
    cat.includes('habits') ||
    cat.includes('self-help'))) {
    return 'Self-Improvement & Personal Development';
  }
  
  // Psychology & Mental Health
  if (categories.some(cat => 
    cat.includes('psychology') || 
    cat.includes('mental health') || 
    cat.includes('behavioral economics') || 
    cat.includes('emotional intelligence') || 
    cat.includes('mindset') || 
    cat.includes('courage'))) {
    return 'Psychology & Mental Health';
  }
  
  // Communication & Relationships
  if (categories.some(cat => 
    cat.includes('communication') || 
    cat.includes('relationships') || 
    cat.includes('social skills') || 
    cat.includes('conversation') || 
    cat.includes('conflict resolution') || 
    title.includes('talk to anyone') || 
    title.includes('men are from mars'))) {
    return 'Communication & Relationships';
  }
  
  // Leadership & Management
  if (categories.some(cat => 
    cat.includes('leadership') || 
    cat.includes('management') || 
    cat.includes('coaching') || 
    title.includes('dare to lead') || 
    title.includes('radical candor'))) {
    return 'Leadership & Management';
  }
  
  // Business & Entrepreneurship
  if (categories.some(cat => 
    cat.includes('business') || 
    cat.includes('entrepreneurship') || 
    cat.includes('technology') || 
    title.includes('lean startup') || 
    title.includes('shoe dog') || 
    title.includes('personal mba') || 
    title.includes('millionaire fastlane'))) {
    return 'Business & Entrepreneurship';
  }
  
  // Finance & Investing
  if (categories.some(cat => 
    cat.includes('finance') || 
    cat.includes('investing') || 
    cat.includes('wealth') || 
    cat.includes('real estate') || 
    cat.includes('economics') || 
    title.includes('psychology of money'))) {
    return 'Finance & Investing';
  }
  
  // Philosophy & Wisdom
  if (categories.some(cat => 
    cat.includes('philosophy') || 
    cat.includes('wisdom') || 
    cat.includes('stoic') || 
    title.includes('sapiens') || 
    title.includes('ikigai') || 
    title.includes('naval ravikant') || 
    title.includes('daily laws'))) {
    return 'Philosophy & Wisdom';
  }
  
  // Indian Philosophy & Culture
  if (categories.some(cat => 
    cat.includes('indian society') || 
    cat.includes('culture') || 
    cat.includes('sanatan dharma') || 
    cat.includes('hindu') || 
    cat.includes('chanakya') || 
    cat.includes('bhagavad') || 
    cat.includes('indian history') || 
    cat.includes('constitution') || 
    title.includes('bharat') || 
    title.includes('hindus in hindu rashtra'))) {
    return 'Indian Philosophy & Culture';
  }
  
  // Education
  if (categories.some(cat => 
    cat.includes('education') || 
    cat.includes('history') || 
    cat.includes('anthropology') || 
    cat.includes('politics') || 
    title.includes('101'))) {
    return 'Education';
  }
  
  // Health & Wellness
  if (categories.some(cat => 
    cat.includes('wellness') || 
    cat.includes('well-being') || 
    cat.includes('spirituality') || 
    cat.includes('lifestyle') || 
    cat.includes('self-discipline') || 
    title.includes('semen retention'))) {
    return 'Health & Wellness';
  }
  
  return 'Other';
};

// Add category to each book
const booksWithCategories = books.map(book => ({
  ...book,
  category: categorizeBook(book)
}));

export default function CuriousVisitorBooks() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to render star ratings
  const renderStarRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} size={16} fill="currentColor" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} fill="currentColor" />);
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} />);
    }
    
    return (
      <div className={styles.starRating}>
        {stars}
        <span className={styles.ratingValue}>{rating}/5</span>
      </div>
    );
  };

  // Filter books based on category and search query
  const filteredBooks = booksWithCategories.filter(book => {
    const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Count books by category
  const categoryCounts = BOOK_CATEGORIES.reduce((counts, category) => {
    if (category === 'All') {
      counts[category] = booksWithCategories.length;
    } else {
      counts[category] = booksWithCategories.filter(book => book.category === category).length;
    }
    return counts;
  }, {});

  // Function to render category filter
  const renderCategoryFilter = () => (
    <div className={styles.platformFilterContainer}>
      <div className={styles.platformFilterButtons}>
        {BOOK_CATEGORIES.map(category => (
          <button
            key={category}
            className={`${styles.platformFilterButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category} <span className={styles.platformCount}>{categoryCounts[category] || 0}</span>
          </button>
        ))}
      </div>
    </div>
  );

  // Function to render search input
  const renderSearchInput = () => (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search books by title, author, or category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );

  // Function to render book cards
  const renderBookCards = () => (
    <div className={styles.booksGrid}>
      {filteredBooks.map((book, index) => (
        <div key={index} className={styles.bookCard}>
          <div className={styles.bookCoverContainer}>
            <img 
              src={book.cover} 
              alt={`${book.title} cover`}
              className={styles.bookCover}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/img/books/default-book-cover.jpg";
              }}
            />
          </div>
          
          <div className={styles.bookCardContent}>
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.bookAuthor}>by {book.author}</p>
            
            <div className={styles.bookRating}>
              {renderStarRating(book.rating)}
            </div>
            
            <div className={styles.bookMetadata}>
              <div className={styles.bookDate}>
                <Calendar size={14} />
                <span>Read: {book.readDate}</span>
              </div>
            </div>
            
            <p className={styles.bookDescription}>{book.summary}</p>
            
            <div className={styles.bookTags}>
              {book.categories.map((category, categoryIndex) => (
                <span key={categoryIndex} className={styles.bookTag}>
                  <Tag size={12} />
                  {category}
                </span>
              ))}
            </div>
            
            <a
              href={book.reviewLink}
              className={styles.readReviewButton}
            >
              Read Review
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <DashboardLayout
      role="curious-visitor"
      activeTab="books"
      title="Curious Visitor | Books"
      description="Explore Shubham Narkhede's bookshelf - a collection of insightful reads across various genres"
    >
      <SectionTemplate
        title="My Bookshelf"
        subtitle="A collection of books that have shaped my thinking and worldview"
        icon={Book}
      >
        {renderSearchInput()}
        {renderCategoryFilter()}
        {renderBookCards()}
      </SectionTemplate>
    </DashboardLayout>
  );
}