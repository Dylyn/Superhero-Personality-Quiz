import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const PersonalityTypes = [
    {
      name: "Introvert",
      id: "I",
      count: 0
    },
    {
      name: "Extrovert",
      id: "E",
      count: 0
    },
    {
      name: "Sensing",
      id: "S",
      count: 0
    },
    {
      name: "Intuition",
      id: "N",
      count: 0
    },
    {
      name: "Thinking",
      id: "T",
      count: 0
    },
    {
      name: "Feeling",
      id: "F",
      count: 0
    },
    {
      name: "Judging",
      id: "J",
      count: 0
    },
    {
      name: "Perceiving",
      id: "P",
      count: 0
    },
  ]

  const questions = [
    {
      id: 1,
      text: "You wake up one day and discover you have superpowers! Do you:",
      options: [
        { id: 'a', text: "Keep it a secret and start practicing your powers in your room, trying not to accidentally break anything.", PType: 'I' },
        { id: 'b', text: "Immediately tell your pet goldfish about your newfound abilities, hoping they won't spill the beans.", PType: 'E' }
      ]
    },
    {
      id: 2,
      text: "While practicing your powers, you accidentally blast a hole in your bedroom wall! Do you:",
      options: [
        { id: 'a', text: "Quickly cover it up with a poster and pretend nothing happened.", PType: 'P' },
        { id: 'b', text: "Turn it into a window to your secret superhero lair and start planning your costume.", PType: 'J' }
      ]
    },
    {
      id: 3,
      text: "A mysterious stranger approaches you and offers to teach you how to control your powers. Do you:",
      options: [
        { id: 'a', text: "Accept their offer cautiously, wondering what their ulterior motives might be.", PType: 'I' },
        { id: 'b', text: "High-five them and ask if they can teach you how to fly too!", PType: 'E' }
      ]
    },
    {
      id: 4,
      text: "You discover that your arch-nemesis is actually your best friend! Do you:",
      options: [
        { id: 'a', text: "Confront them and try to reason with them, hoping to mend your friendship.", PType: 'F' },
        { id: 'b', text: "Challenge them to a duel of superpowers, winner buys pizza!", PType: 'T' }
      ]
    },
    {
      id: 5,
      text: "Your powers accidentally cause chaos in your town's annual parade. Do you:",
      options: [
        { id: 'a', text: "Apologize and offer to help clean up the mess.", PType: 'F' },
        { id: 'b', text: "Team up with the local superheroes to turn the chaos into an epic dance party!", PType: 'T' }
      ]
    },
    {
      id: 6,
      text: "You're faced with a moral dilemma: use your powers for personal gain or for the greater good. Do you:",
      options: [
        { id: 'a', text: "Choose to use your powers responsibly, even if it means sacrificing some of your desires.", PType: 'J' },
        { id: 'b', text: "Have a mini dance-off with your conscience to decide the best course of action.", PType: 'P' }
      ]
    },
    {
      id: 7,
      text: "Your superpowered pet hamster goes missing! Do you:",
      options: [
        { id: 'a', text: "Search the entire city for your furry friend, using your powers to track them down.", PType: 'S' },
        { id: 'b', text: "Wait patiently, confident that they'll find their way back home because they're secretly a superhero too.", PType: 'N' }
      ]
    },
    {
      id: 8,
      text: "Your superhero mentor asks you to join their team. Do you:",
      options: [
        { id: 'a', text: "Accept the invitation, excited to learn from experienced heroes and make new friends.", PType: 'E' },
        { id: 'b', text: "Politely decline, explaining that you work better as a lone wolf with occasional dance partners.", PType: 'I' }
      ]
    },
    {
      id: 9,
      text: "You're invited to participate in a superhero costume contest. Do you:",
      options: [
        { id: 'a', text: "Spend hours crafting the perfect costume, complete with flashy accessories and a catchy superhero name.", PType: 'S' },
        { id: 'b', text: "Throw together a last-minute costume using whatever you find in your closet, because improvisation is your superpower!", PType: 'N' }
      ]
    },
    {
      id: 10,
      text: "A supervillain challenges you to a game of wits. Do you:",
      options: [
        { id: 'a', text: "Strategize carefully and outsmart them using your intellect and cunning.", PType: 'T' },
        { id: 'b', text: "Challenge them to a dance-off instead, because who needs wits when you've got killer dance moves?", PType: 'F' }
      ]
    },
    {
      id: 11,
      text: "You discover a secret that could benefit you greatly if exploited. Do you:",
      options: [
        { id: 'a', text: "Choose to keep the secret to yourself, respecting others' privacy and maintaining your integrity.", PType: 'P' },
        { id: 'b', text: "Use the secret to your advantage, rationalizing that it's fair game in the pursuit of success.", PType: 'J' }
      ]
    },
    {
      id: 12,
      text: "In a confrontation with an adversary, they taunt and provoke you. Do you:",
      options: [
        { id: 'a', text: "Remain calm and composed, refusing to let their words affect you.", PType: 'F' },
        { id: 'b', text: "React angrily and aggressively, seeking to intimidate them into submission.", PType: 'T' }
      ]
    },
    {
      id: 13,
      text: "Your friend confides in you about a personal problem they're facing. Do you:",
      options: [
        { id: 'a', text: "Listen empathetically and offer emotional support.", PType: 'F' },
        { id: 'b', text: "Provide practical solutions and advice to help them solve their problem.", PType: 'T' }
      ]
    },
    {
      id: 14,
      text: "You're in a position of authority and have to make a tough decision that will affect many people. Do you:",
      options: [
        { id: 'a', text: "Gather input from others and weigh all options carefully before making a decision.", PType: 'J' },
        { id: 'b', text: "Trust your instincts and make a decisive choice, taking responsibility for the outcome.", PType: 'P' }
      ]
    },
    {
      id: 15,
      text: "You witness an injustice but intervening could put you at risk. Do you:",
      options: [
        { id: 'a', text: "Choose to intervene and stand up for what's right, regardless of the consequences.", PType: 'F' },
        { id: 'b', text: "Avoid getting involved to protect yourself, rationalizing that it's not your responsibility.", PType: 'T' }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [personalityCounts, setPersonalityCounts] = useState(PersonalityTypes);

  const handleOptionSelect = (optionId, optionPType) => {
    const updatedCounts = personalityCounts.map(personality => {
      if (personality.id === optionPType) {
        return { ...personality, count: personality.count + 1 };
      }
      return personality;
    });
    setPersonalityCounts(updatedCounts);
    //console.log("Updated counts:", personalityCounts);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }, 0); // Delay before showing the next question
  };

  const renderQuestion = (question) => (
    <div key={question.id}>
      <div>{question.id}/15</div>
      <h3>{question.text}</h3>
      {question.options.map(option => (
        <div key={option.id}>
          <button
            onClick={() => handleOptionSelect(option.id, option.PType)}
            disabled={currentQuestionIndex !== questions.findIndex(q => q.id === question.id)}
          >
            {option.text}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <h1>Superhero Personality Quiz</h1>
      {currentQuestionIndex < questions.length ? (
        renderQuestion(questions[currentQuestionIndex])
      ) : (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Thank you for taking the quiz.</p>
        </div>
      )}
    </div>
  );
};

export default App
