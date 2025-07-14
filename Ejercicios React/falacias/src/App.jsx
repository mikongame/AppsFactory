import { useEffect, useState } from 'react';
import './App.css';
import falacies from './falacias.json';

const getRandom = (arr, n) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
};

const App = () => {
    const [falacy, setFalacy] = useState(null);
    const [falacySample, setFalacySample] = useState('');
    const [questionFalacies, setQuestionFalacies] = useState([]);
    const [showClue, setShowClue] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const [streak, setStreak] = useState(0); // racha actual
    const [record, setRecord] = useState(() => {
        const saved = sessionStorage.getItem('falacyRecord');
        return saved ? parseInt(saved) : 0;
    });

    const chooseRandomFalacy = () => {
        const randomIndex = Math.floor(Math.random() * falacies.length);
        const selectedFalacy = falacies[randomIndex];
        const randomSample = selectedFalacy.samples[Math.floor(Math.random() * selectedFalacy.samples.length)];

        const otherFalacies = falacies.filter((f, i) => i !== randomIndex);
        const randomIncorrect = getRandom(otherFalacies, 2);
        const allOptions = [...randomIncorrect, selectedFalacy].sort(() => 0.5 - Math.random());

        setFalacy(selectedFalacy);
        setFalacySample(randomSample);
        setQuestionFalacies(allOptions);
        setShowClue(false);
        setFeedback(null);
    };

    useEffect(() => {
        chooseRandomFalacy();
    }, []);

    const handleAnswer = (type) => {
        if (type === falacy.type) {
            const newStreak = streak + 1;
            setStreak(newStreak);
            setFeedback('✅ ¡Correcto!');

            if (newStreak > record) {
                setRecord(newStreak);
                sessionStorage.setItem('falacyRecord', newStreak);
            }

            setTimeout(() => chooseRandomFalacy(), 1000);
        } else {
            setFeedback('❌ Incorrecto. Inténtalo otra vez.');
            setStreak(0); // Reiniciamos racha si fallas
        }
    };

    return (
        <div className="container">
            <h1>¿Qué tipo de falacia es?</h1>
            <blockquote className="sample">{falacySample}</blockquote>

            <div className="stats">
                <p>🔥 Racha actual: {streak}</p>
                <p>🏆 Récord: {record}</p>
            </div>

            <div className="options">
                {questionFalacies.map((f, idx) => (
                    <button key={idx} onClick={() => handleAnswer(f.type)}>
                        {f.type}
                    </button>
                ))}
            </div>

            <ClueButton def={falacy?.def} showClue={showClue} setShowClue={setShowClue} />

            {feedback && <p className="feedback">{feedback}</p>}
        </div>
    );
};

const ClueButton = ({ def, showClue, setShowClue }) => (
    <div className="clue-container">
        <button onClick={() => setShowClue(true)}>Mostrar pista</button>
        {showClue && <p className="clue">{def}</p>}
    </div>
);

export default App;
