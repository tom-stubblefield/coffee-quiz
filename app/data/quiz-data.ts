export type PersonalityType = 'bold' | 'zen' | 'health' | 'indulgent';

export interface Answer {
  text: string;
  emoji: string;
  personality: PersonalityType;
}

export interface Question {
  id: number;
  question: string;
  emoji: string;
  answers: Answer[];
}

export interface PersonalityResult {
  name: string;
  coffeeDrink: string;
  tagline: string;
  description: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Pick your ideal weekend activity:",
    emoji: "☕",
    answers: [
      { text: "Hiking a challenging mountain trail", emoji: "🏔️", personality: "bold" },
      { text: "Reading in a cozy coffee shop", emoji: "📚", personality: "zen" },
      { text: "Morning yoga and smoothie bowls", emoji: "🧘", personality: "health" },
      { text: "Brunch with friends and dessert", emoji: "🍰", personality: "indulgent" }
    ]
  },
  {
    id: 2,
    question: "How do you take your morning coffee?",
    emoji: "🌅",
    answers: [
      { text: "Black and strong - let's go!", emoji: "💪", personality: "bold" },
      { text: "Simple and balanced", emoji: "☯️", personality: "zen" },
      { text: "With oat milk and a dash of cinnamon", emoji: "🥛", personality: "health" },
      { text: "Extra sweet with whipped cream", emoji: "🍦", personality: "indulgent" }
    ]
  },
  {
    id: 3,
    question: "What's your go-to snack?",
    emoji: "🍪",
    answers: [
      { text: "Energy bars for the trail", emoji: "⚡", personality: "bold" },
      { text: "A simple piece of dark chocolate", emoji: "🍫", personality: "zen" },
      { text: "Fresh fruit or nuts", emoji: "🥜", personality: "health" },
      { text: "Cookies or pastries", emoji: "🧁", personality: "indulgent" }
    ]
  },
  {
    id: 4,
    question: "Pick a travel destination:",
    emoji: "✈️",
    answers: [
      { text: "Adventure in Patagonia", emoji: "🏕️", personality: "bold" },
      { text: "Quiet cabin in the woods", emoji: "🌲", personality: "zen" },
      { text: "Wellness retreat in Bali", emoji: "🌺", personality: "health" },
      { text: "Food tour in Paris", emoji: "🥐", personality: "indulgent" }
    ]
  },
  {
    id: 5,
    question: "How do you approach Monday mornings?",
    emoji: "📅",
    answers: [
      { text: "Attack it head-on with energy!", emoji: "🚀", personality: "bold" },
      { text: "Ease in with mindful intention", emoji: "🧘‍♀️", personality: "zen" },
      { text: "Start with a healthy routine", emoji: "🥗", personality: "health" },
      { text: "Treat yourself to make it better", emoji: "🎁", personality: "indulgent" }
    ]
  },
  {
    id: 6,
    question: "Your perfect coffee shop vibe:",
    emoji: "🏪",
    answers: [
      { text: "Bustling and energetic", emoji: "⚡", personality: "bold" },
      { text: "Calm and minimalist", emoji: "🕊️", personality: "zen" },
      { text: "Bright with lots of plants", emoji: "🌿", personality: "health" },
      { text: "Cozy with comfy chairs", emoji: "🛋️", personality: "indulgent" }
    ]
  }
];

export const personalityResults: Record<PersonalityType, PersonalityResult> = {
  bold: {
    name: "Bold Adventurer",
    coffeeDrink: "Espresso Shot",
    tagline: "You're all about intensity and adventure!",
    description: "You live for bold flavors and new experiences. Your ideal drink is strong, straightforward, and gives you the energy to tackle any challenge."
  },
  zen: {
    name: "Zen Minimalist",
    coffeeDrink: "Pour Over",
    tagline: "Simple pleasures, mindful moments.",
    description: "You appreciate the art of simplicity and find joy in life's quiet moments. Your ideal drink is clean, balanced, and crafted with intention."
  },
  health: {
    name: "Health Nut",
    coffeeDrink: "Matcha Latte",
    tagline: "Wellness is your way of life.",
    description: "You prioritize feeling good and making choices that nourish your body. Your ideal drink is energizing, wholesome, and guilt-free."
  },
  indulgent: {
    name: "Indulgent Treat",
    coffeeDrink: "Caramel Macchiato",
    tagline: "Life's too short not to enjoy it!",
    description: "You believe in treating yourself and savoring life's sweeter moments. Your ideal drink is rich, decadent, and makes every sip feel special."
  }
};
