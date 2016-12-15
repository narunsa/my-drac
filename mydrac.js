const foregroundColor = '#fff';
const backgroundColor = 'rgba(0,0,0,0.65)';
const borderColor = '#333';
const cursorColor = 'rgba(56,255,181,0.8)';

const black = '#000000';
const red = '#ff5555';
const green = '#50fa7b';
const yellow = '#f1fa8c';
const blue = '#6272a4';
const magenta = '#ff79c6';
const cyan = '#8be9fd';
const gray = '#666666';

const brightWhite = '#ffffff';

exports.onWindow = browserWindow => browserWindow.setVibrancy('dark');
exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
        foregroundColor: foregroundColor,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        cursorColor: cursorColor,
        colors: [
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            gray,

            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            brightWhite,
        ],
    });
}