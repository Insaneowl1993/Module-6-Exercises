import React, { useState } from 'react';

const phrases = new Map([
    ['english', 'Happy Birthday'],
    ['spanish', 'Feliz Cumpleaños'],
    ['french', 'Joyeux Anniversaire'],
    ['german', 'Alles Gute zum Geburtstag']
    ]);

    function BirthdayTranslator() {
        const [currentLanguage, setCurrentLanguage] = useState('english');
        const [phrase, setPhrase] = useState(phrases.get('english'));
        const handleChangeLanguage = (lang) => {
            setCurrentLanguage(lang);
            setPhrase(phrases.get(lang));
        
    <h3>{phrases.get(currentLanguage)}! ({currentLanguage})</h3>

    }
    
    return (
        <div className="BirthdayTranslator componentBox">
            <h1>{phrase}! ({currentLanguage})</h1>
            <button onClick={() => handleChangeLanguage('english')}>English</button>
            <button onClick={() => handleChangeLanguage('spanish')}>Spanish</button>
            <button onClick={() => handleChangeLanguage('french')}>French</button>
            <button onClick={() => handleChangeLanguage('german')}>German</button>
        </div>
    )
    }

    export default BirthdayTranslator;