const addEmojiToStr = require('../index');

describe('addEmojiToStr function', () => {
    test('should return a string', () => {
        expect(typeof addEmojiToStr("Hello")).toBe('string');
    });

    test('returned string should be longer than the input string', () => {
        const input = "Hello";
        const result = addEmojiToStr(input);
        expect(result.length).toBeGreaterThan(input.length);
    });

    test('returned string should contain at least one emoji', () => {
        const result = addEmojiToStr("Hello");
        const emojiPattern = /\p{Extended_Pictographic}/u;
        expect(emojiPattern.test(result)).toBeTruthy();
    });
});
