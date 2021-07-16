const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];
    let str = '';
    for (let i = 0; i < expr.length; i += 10) {
        str = expr.slice(i, i + 10);
        if (str === '**********') arr.push(' ');
        else {
            let strKey = '';
            for (let j = 0; j < str.length; j += 2) {
                if (str.slice(j, j + 2) === '10') strKey += '.';
                if (str.slice(j, j + 2) === '11') strKey += '-';
            }
            arr.push(MORSE_TABLE[strKey]);
        }
    }
    return arr.join('')
}

module.exports = {
    decode
}