import React, { useState } from 'react';


const emojiMap = {
    happy: "🙂",
    ecstatic: "😃",
    stressed: "😩",
    "really stressed": "😫",
    "giving up": "😔",
}

function MoodChanger() {
    const [mood,setMood] = useState('happy');
    const [emoji, setEmoji] = useState(emojiMap['happy']);

    const handleWinLotto = () => {
        setEmoji(emojiMap['ecstatic']);
    }

    const handleRunningLate = () => {
        if (mood === 'stressed') {
            setEmoji(emojiMap['stressed']);
            setMood('really stressed') }
        else if (mood === 'really stressed') {
            setEmoji(emojiMap['really stressed']);
            setMood('giving up') }
        else {
            setEmoji(emojiMap['giving up']);
            setMood('stressed')
        }
    };

/**
 *  i moved the emojiMap to the top of the file
 *  fixed the handleRunningLate function to change the mood and emoji correctly
 * PLEASE: See implementation
 * checked, completion receipt for exercise 3 1/3
 */
    return (
        <div className="MoodChanger">
            <span role="img" aria-label="mood">{emoji}</span>
            <button onClick={handleWinLotto}>Win Lotto</button>
            <button onClick={handleRunningLate}>Running Late</button>
        </div>
    )
}

export default MoodChanger;