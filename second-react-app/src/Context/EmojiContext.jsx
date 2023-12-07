import React, {useState, useContext } from "react";

// 1. Create the context
const EmojiContext = React.createContext();

export const EmojiProvider = (props) => {
    // store the current emoji in state at the top level
    const [emoji, setEmoji] = useState('😊');

    // sets emoji object in state, shared via context
    const handleUpdateEmoji = (newEmoji) => {
        setEmoji(newEmoji);
    };

    // emojis switch
    const handleSwitchEmoji = () => {
        let newEmoji = emoji === '😊' ? '😱' : '🤑';
        setEmoji(newEmoji);
    };

    return (
        <EmojiContext.Provider value={{ emoji, handleUpdateEmoji, handleSwitchEmoji }}>
            {props.children}
        </EmojiContext.Provider>
    );
};

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};
