
import { useEmojiContext } from '../Context/EmojiContext';

function Emoji() {
    const {emoji, handleUpdateEmoji, handleSwitchEmoji} = useEmojiContext();
    
    return (
        <div className="Emoji componentBox">
            Emoji: {emoji}
            <button onClick={handleSwitchEmoji}>Switch Emoji</button>
        </div>
    )
}
// ++ add your own buttons to handle different moods!

export default Emoji;