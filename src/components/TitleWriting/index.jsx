import React from 'react';
import './styles.less';

// Material UI

// Custom Component


const TitleWriting = (props) => {
    const { title, words } = props;

    return (
        <>
            <div>{title}</div>
            <div>
                {words.map((word) => (
                    word
                ))}
            </div>
        </>
    );
};

export default TitleWriting;
