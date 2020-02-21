import React, { useState, useEffect } from 'react';
import './styles.less';

// Material UI
import Typography from '@material-ui/core/Typography';

// Custom Component


const TypeWriter = (props) => {
    const { titles } = props;
    const [word, setWord] = useState('');
    const [prefix, setPrefix] = useState('');

    let actualIndexWord = 0;
    const changeWord = (listWords) => {
        setPrefix(listWords[actualIndexWord].prefix);
        setWord(listWords[actualIndexWord].word);
        if (actualIndexWord < listWords.length - 1) {
            actualIndexWord += 1;
        } else {
            actualIndexWord = 0;
        }
        setTimeout(() => changeWord(listWords), 4940);
    };

    useEffect(() => {
        changeWord(titles);
    }, []);

    return (
        <Typography variant="h1" className="typewriter">
            <span>{prefix}</span>
            <span>{word}</span>
        </Typography>
    );
};

export default TypeWriter;
