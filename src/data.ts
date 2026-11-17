export type Category = {
  id: string
  name: string
  description: string
  icon: string
  color: string
  lessons: number
}

export type Lesson = {
  id: string
  category: string
  title: string
  description: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  featured?: boolean
  takeaways: string[]
  example: string
}

export const categories: Category[] = [
  { id: 'psychology', name: 'Psychology', description: 'Understand the mind', icon: '◉', color: 'violet', lessons: 12 },
  { id: 'human-behaviour', name: 'Human behaviour', description: 'Notice the patterns', icon: '⌁', color: 'orange', lessons: 8 },
  { id: 'critical-thinking', name: 'Critical thinking', description: 'Question assumptions', icon: '✳', color: 'green', lessons: 10 },
  { id: 'deduction', name: 'Deduction', description: 'Connect the evidence', icon: '⌕', color: 'blue', lessons: 7 },
]

export const lessons: Lesson[] = [
  {
    id: 'confirmation-bias',
    category: 'Psychology',
    title: 'Confirmation bias',
    description: 'Why we notice evidence that supports what we already believe.',
    duration: '6 min',
    level: 'Beginner',
    featured: true,
    takeaways: [
      'We tend to seek information that agrees with our existing beliefs.',
      'Contradictory evidence can receive less attention or be judged more harshly.',
      'Actively looking for disconfirming evidence can improve judgement.',
    ],
    example: 'You believe a colleague dislikes you. You remember every short reply as evidence, but overlook the times they are friendly or helpful.',
  },
  {
    id: 'cognitive-dissonance',
    category: 'Psychology',
    title: 'Cognitive dissonance',
    description: 'The discomfort that can arise when beliefs and actions conflict.',
    duration: '8 min',
    level: 'Beginner',
    takeaways: [
      'Inconsistency between beliefs, attitudes and behaviour can feel uncomfortable.',
      'People may change behaviour, revise a belief, or rationalise the inconsistency.',
      'Not every disagreement or uncomfortable feeling is cognitive dissonance.',
    ],
    example: 'Someone who values health but regularly skips sleep may reduce the tension by changing their routine—or by convincing themselves that sleep is overrated.',
  },
  {
    id: 'correlation-causation',
    category: 'Critical thinking',
    title: 'Correlation vs. causation',
    description: 'Learn why two things happening together does not prove one caused the other.',
    duration: '5 min',
    level: 'Beginner',
    takeaways: [
      'Correlation describes how two variables change together.',
      'Causation means a change in one variable produces a change in another.',
      'A third variable or reverse causality may explain an observed relationship.',
    ],
    example: 'Ice-cream sales and sunburn cases may rise together. Hot, sunny weather can increase both; ice cream does not cause sunburn.',
  },
  {
    id: 'observational-reasoning',
    category: 'Deduction',
    title: 'Observational reasoning',
    description: 'Separate what you can actually observe from what you infer.',
    duration: '7 min',
    level: 'Intermediate',
    takeaways: [
      'An observation is information directly noticed or measured.',
      'An inference is an interpretation drawn from observations.',
      'Keeping the two separate reduces overconfidence and premature conclusions.',
    ],
    example: 'Observation: a person checks the clock several times. Inference: they may be in a hurry—but they could also be waiting for a specific time.',
  },
]

export const practiceQuestion = {
  prompt: 'You notice that a friend has read your message but has not replied for several hours. Which statement is an observation?',
  options: [
    'They are deliberately ignoring me.',
    'They are upset with me.',
    'The message is marked as read and there is no reply yet.',
    'They do not value our friendship.',
  ],
  answer: 2,
  explanation: 'The third option describes only what is directly known. The other options are possible interpretations, not established facts.',
}