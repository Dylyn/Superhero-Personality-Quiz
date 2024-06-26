import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ISTJ from "../images/ISTJ.jpg"
import ISFJ from "../images/ISFJ.jpg"
import INFJ from "../images/INFJ.jpg"
import INTJ from "../images/INTJ.jpg"
import ISTP from "../images/ISTP.jpg"
import ISFP from "../images/ISFP.jpg"
import INFP from "../images/INFP.jpg"
import INTP from "../images/INTP.jpg"
import ESTP from "../images/ESTP.jpg"
import ESFP from "../images/ESFP.jpg"
import ENFP from "../images/ENFP.jpg"
import ENTP from "../images/ENTP.jpg"
import ESTJ from "../images/ESTJ.jpg"
import ESFJ from "../images/ESFJ.jpg"
import ENFJ from "../images/ENFJ.jpg"
import ENTJ from "../images/ENTJ.jpg"
import q1 from "../images/q1.jpg"
import q2 from "../images/q2.jpg"
import q3 from "../images/q3.jpg"
import q4 from "../images/q4.jpg"
import q5 from "../images/q5.jpg"
import q6 from "../images/q6.jpg"
import q7 from "../images/q7.jpg"
import q8 from "../images/q8.jpg"
import q9 from "../images/q9.jpg"
import q10 from "../images/q10.jpg"
import q11 from "../images/q11.jpg"
import q12 from "../images/q12.jpg"


export default function QuizSection() {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    
    const personalityTypes = [
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

    const [personalityCounts, setPersonalityCounts] = useState(personalityTypes);

    const questions = [
        {
            id: 1,
            text: "You wake up one day and discover you have superpowers! Do you:",
            qimage: q1,
            options: [
                { id: 'a', text: "Keep it a secret and start practicing your powers in your room, trying not to accidentally break anything.", PType: 'I' },
                { id: 'b', text: "Immediately tell your best friend about your newfound abilities, hoping they won't spill the beans.", PType: 'E' }
            ]
        },
        {
            id: 2,
            text: "While practicing your powers, you accidentally blast a hole in your bedroom wall! Do you:",
            qimage: q2,
            options: [
                { id: 'a', text: "Quickly cover it up with a poster and pretend nothing happened.", PType: 'P' },
                { id: 'b', text: "Tell your parents you just made a new enterance to the your superhero hideout", PType: 'J' }
            ]
        },
        {
            id: 3,
            text: "You meet up with your best friend and figure out he's your arch-nemesis! Do you:",
            qimage: q3,
            options: [
                { id: 'a', text: "Confront them and try to reason with them, hoping to mend your friendship.", PType: 'F' },
                { id: 'b', text: "Challenge them to a duel of superpowers even if it costs the friendship", PType: 'T' }
            ]
        },
        {
            id: 4,
            text: "Your powers accidentally cause chaos in your town's annual parade. Do you:",
            qimage: q4,
            options: [
                { id: 'a', text: "Apologize and offer to help clean up the mess.", PType: 'F' },
                { id: 'b', text: "Use the chnage of scenery and turn the chaos into a crazy party!", PType: 'T' }
            ]
        },
        {
            id: 5,
            text: "You're faced with a moral dilemma: use your powers for personal gain or for the greater good. Do you:",
            qimage: q5,
            options: [
                { id: 'a', text: "Take a nap and see what your conscience thinks in the morning.", PType: 'P' },
                { id: 'b', text: "Choose to use your powers responsibly, even if it means sacrificing some of your desires. (take a nap anyway)", PType: 'J' }
            ]
        },
        {
            id: 6,
            text: "You awaken in a dense jungle, surrounded by towering trees and strange creatures. How do you react with your superpowers?",
            qimage: q6,
            options: [
                { id: "a", text: "Use your super strength to push through the dense foliage and explore deeper into the jungle.", PType: "S" },
                { id: "b", text: "Activate your telepathic abilities to communicate with the creatures and seek guidance on how to navigate the jungle.", PType: "N" }
            ]
        },
        {
            id: 7,
            text: "A naked old man emerges from the shadows, offering to teach you how to control your superpowers. Do you:",
            qimage: q7,
            options: [
                { id: "a", text: "Accept the offer, eager to hone your abilities and unlock your full potential.", PType: "E" },
                { id: "b", text: "Politely decline, feeling unsure about trusting strangers in this mysterious jungle.", PType: "I" }
            ]
        },
        {
            id: 8,
            text: "While training, you encounter a group of hostile yet afraid creatures. How do you handle the situation?",
            qimage: q8,
            options: [
                { id: "a", text: "Absolutely annihilate them out of existence with your fists.", PType: "T" },
                { id: "b", text: "Read their minds to find a peaceful resolution and possibly finding a new ally that could help you figure out where you are", PType: "F" }
            ]
        },
        {
            id: 9,
            text: "You come across an ancient temple shrouded in the depths of the jungle. How do you approach it?",
            qimage: q9,
            options: [
                { id: "a", text: "Harness your powers to force the door open, eager to explore the secrets hidden within.", PType: "J" },
                { id: "b", text: "Rely on your supernatural abilities to scout ahead, ensuring safety before venturing inside.", PType: "P" }
            ]
        },
        {
            id: 10,
            text: "As you delve into the temple's chambers, you trigger a series of traps! How do you navigate them with your superpowers?",
            qimage: q10,
            options: [
                { id: "a", text: "Analyze the traps with your enhanced intellect and use your telekinetic abilities to safely disarm them.", PType: "T" },
                { id: "b", text: "Rely on your heightened reflexes and agility to swiftly dodge the traps and continue exploring.", PType: "S" }
            ]
        },
        {
            id: 11,
            text: "Feeling drained from using your superpowers, you decide to take a moment to recharge. What do you do?",
            qimage: q11,
            options: [
                { id: "a", text: "Meditate to channel your energy, focusing on restoring balance within yourself until you fall asleep.", PType: "N" },
                { id: "b", text: "Battle through it! I will fight through the exhaustion even if it means i pass out! (you pass out)", PType: "E" }
            ]
        },
        {
            id: 12,
            text: "You suddenly wake up in your bed, realizing it was all just a vivid dream. How do you feel about your adventure with superpowers?",
            qimage: q12,
            options: [
                { id: "a", text: "Be sad wishing your powers were real, but eager to explore the real world again.", PType: "P" },
                { id: "b", text: "Appreciate the thrilling journey, but glad to return to comforts of reality.", PType: "J" }
            ]
        }
    ];

    const handleOptionSelect = (optionId, optionPType) => {
        const updatedCounts = personalityCounts.map(personality => {
        if (personality.id === optionPType) {
            return { ...personality, count: personality.count + 1 };
        }
        return personality;
        });
        setPersonalityCounts(updatedCounts);
        console.log("Updated counts:", personalityCounts);

        setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
        }, 0); // Delay before showing the next question
    };

    const handleReturnHome = () => {
        setCurrentQuestionIndex(0)
        setPersonalityCounts(personalityTypes)
        navigate('/');
        //ROUTE BACK TO '/'
    }

    const codeToImage = {
        'ISTJ': ISTJ,
        'ISFJ': ISFJ,
        'INFJ': INFJ,
        'INTJ': INTJ,
        'ISTJ': ISTJ,
        'ISTP': ISTP,
        'ISFP': ISFP,
        'INFP': INFP,
        'INTP': INTP,
        'ESTP': ESTP,
        'ESFP': ESFP,
        'ENFP': ENFP,
        'ENTP': ENTP,
        'ESTJ': ESTJ,
        'ESFJ': ESFJ,
        'ENFJ': ENFJ,
        'ENTJ': ENTJ,
    }

    const calculateCode = () => {
        let personalityString = '';
        const pairs = {
        'I': 'E',
        'S': 'N',
        'T': 'F',
        'J': 'P'
        };

        for (let i = 0; i < personalityTypes.length; i += 2) {
        const firstType = personalityTypes[i];
        const secondType = personalityTypes[i + 1];
        const firstCount = personalityCounts.find(personality => personality.id === firstType.id).count;
        const secondCount = personalityCounts.find(personality => personality.id === secondType.id).count;

        if (firstCount > secondCount) {
            personalityString += firstType.id;
        } else if (secondCount > firstCount) {
            personalityString += secondType.id;
        } else {
            // If counts are equal, choose the first type
            personalityString += firstType.id;
        }
        }

        return personalityString;
    };

    const code = calculateCode();
    const imageResult = codeToImage[code]

    const renderQuestion = (question) => (
        <div key={question.id}>
        <div>{question.id}/12</div>
        <h3>{question.text}</h3>
        <img src={question.qimage} height={400} width={400} style={{ border: '7px solid black', marginTop: '20px', marginBottom: '20px' }}/>
        {question.options.map(option => (
            <div key={option.id}>
            <button
                onClick={() => handleOptionSelect(option.id, option.PType)}
                disabled={currentQuestionIndex !== questions.findIndex(q => q.id === question.id)}
            >
                {option.text}
            </button>
            <div>  </div>
            </div>
        ))}
        </div>
    );

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                renderQuestion(questions[currentQuestionIndex])
            ) : (
                <div>
                <h2>Quiz Completed!</h2>
                <p>Looks like you are the...</p>
                <img src={imageResult} height={300} width={300} style={{ border: '7px solid black', marginTop: '20px' }}/>
                <div>
                    <button onClick={handleReturnHome} style={{ marginTop: '20px' }}> Return Home </button>
                </div>
                
                </div>
            )}
        </div>
    )
}