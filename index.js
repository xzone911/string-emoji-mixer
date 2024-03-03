function addEmojiToStr(str) {
    const emojis = ['😀', '😂', '🥰', '😎', '🤩', '😜', '😱', '👻', '👾', '🤖', '🎃', '😺', '💩', '👍', '🚀'];
    const words = str.split(' ');

    const stringWithEmoji = words.map(word => {
        if (Math.random() > 0.5) {
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            return `${word} ${randomEmoji}`;
        }
        return word;
    }).join(' ');

    return stringWithEmoji;
}

module.exports = addEmojiToStr;
