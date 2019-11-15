class Button {
    constructor(code, keys, style) {
        this.code = code;
        this.keys = keys;

        this.style = style + " classicBtn";
    }

    getKey(isShift) {
        if (this.keys['name']) {
            return this.keys['name'];
        }
        let arr = this.keys[arrLang[currLang]];
        if (isShift) {
            return arr[1];
        } else {
            return arr[0];
        }
    }

    createBtn() {
        let btn = document.createElement("button");
        btn.id = this.code;
        btn.innerHTML = this.getKey(isShift);
        btn.className = this.style;
        btn.addEventListener("mousedown", handleMouseDown);
        btn.addEventListener("mouseup", handleMouseUp);
        return btn;
    }
}

let countButtonByRow = [14, 15, 13, 14, 9];
let keyboard = new Array(5);
for (let i = 0; i < keyboard.length; i++) {
    keyboard[i] = new Array(countButtonByRow[i]);
}

keyboard[0][0] = new Button('Backquote', {'en': ['`', '~'], 'ru': ['ё', 'Ё']});
keyboard[0][1] = new Button('Digit1', {'en': ['1', '!'], 'ru': ['1', '!']});
keyboard[0][2] = new Button('Digit2', {'en': ['2', '@'], 'ru': ['2', '"']});
keyboard[0][3] = new Button('Digit3', {'en': ['3', '#'], 'ru': ['3', '№']});
keyboard[0][4] = new Button('Digit4', {'en': ['4', '$'], 'ru': ['4', ';']});
keyboard[0][5] = new Button('Digit5', {'en': ['5', '%'], 'ru': ['5', '%']});
keyboard[0][6] = new Button('Digit6', {'en': ['6', '^'], 'ru': ['6', ':']});
keyboard[0][7] = new Button('Digit7', {'en': ['7', '&'], 'ru': ['7', '?']});
keyboard[0][8] = new Button('Digit8', {'en': ['8', '*'], 'ru': ['8', '*']});
keyboard[0][9] = new Button('Digit9', {'en': ['9', '('], 'ru': ['9', '(']});
keyboard[0][10] = new Button('Digit0', {'en': ['0', ')'], 'ru': ['0', ')']});
keyboard[0][11] = new Button('Minus', {'en': ['-', '_'], 'ru': ['-', '_']});
keyboard[0][12] = new Button('Equal', {'en': ['=', '+'], 'ru': ['=', '+']});
keyboard[0][13] = new Button('Backspace', {'name': 'Backspace'}, 'dark');

keyboard[1][0] = new Button('Tab', {'name': 'Tab'}, 'dark');
keyboard[1][1] = new Button('KeyQ', {'en': ['q', 'Q'], 'ru': ['й', 'Й']});
keyboard[1][2] = new Button('KeyW', {'en': ['w', 'W'], 'ru': ['ц', 'Ц']});
keyboard[1][3] = new Button('KeyE', {'en': ['e', 'E'], 'ru': ['у', 'У']});
keyboard[1][4] = new Button('KeyR', {'en': ['r', 'R'], 'ru': ['к', 'К']});
keyboard[1][5] = new Button('KeyT', {'en': ['t', 'T'], 'ru': ['е', 'Е']});
keyboard[1][6] = new Button('KeyY', {'en': ['y', 'Y'], 'ru': ['н', 'Н']});
keyboard[1][7] = new Button('KeyU', {'en': ['u', 'U'], 'ru': ['г', 'Г']});
keyboard[1][8] = new Button('KeyI', {'en': ['i', 'I'], 'ru': ['ш', 'Ш']});
keyboard[1][9] = new Button('KeyO', {'en': ['o', 'O'], 'ru': ['щ', 'Щ']});
keyboard[1][10] = new Button('KeyP', {'en': ['p', 'P'], 'ru': ['з', 'З']});
keyboard[1][11] = new Button('BracketLeft', {'en': ['[', '{'], 'ru': ['х', 'Х']});
keyboard[1][12] = new Button('BracketRight', {'en': [']', '}'], 'ru': ['ъ', 'Ъ']});
keyboard[1][13] = new Button('Backslash', {'en': ['\\', '|'], 'ru': ['\\', '/']});
keyboard[1][14] = new Button('Delete', {'name': 'DEL'}, 'dark');

keyboard[2][0] = new Button('CapsLock', {'name': 'Caps Lock'}, 'dark');
keyboard[2][1] = new Button('KeyA', {'en': ['a', 'A'], 'ru': ['ф', 'Ф']});
keyboard[2][2] = new Button('KeyS', {'en': ['s', 'S'], 'ru': ['ы', 'Ы']});
keyboard[2][3] = new Button('KeyD', {'en': ['d', 'D'], 'ru': ['в', 'В']});
keyboard[2][4] = new Button('KeyF', {'en': ['f', 'F'], 'ru': ['а', 'А']});
keyboard[2][5] = new Button('KeyG', {'en': ['g', 'G'], 'ru': ['п', 'П']});
keyboard[2][6] = new Button('KeyH', {'en': ['h', 'H'], 'ru': ['р', 'Р']});
keyboard[2][7] = new Button('KeyJ', {'en': ['j', 'J'], 'ru': ['о', 'О']});
keyboard[2][8] = new Button('KeyK', {'en': ['k', 'K'], 'ru': ['л', 'Л']});
keyboard[2][9] = new Button('KeyL', {'en': ['l', 'L'], 'ru': ['д', 'Д']});
keyboard[2][10] = new Button('Semicolon', {'en': [';', ':'], 'ru': ['ж', 'Ж']});
keyboard[2][11] = new Button('Quote', {'en': ['\'', '\"'], 'ru': ['э', 'Э']});
keyboard[2][12] = new Button('Enter', {'name': 'Enter'}, 'dark');

keyboard[3][0] = new Button('ShiftLeft', {'name': 'Shift'}, 'dark');
keyboard[3][1] = new Button('IntlBackslash', {'en': ['\\', '|'], 'ru': ['\\', '/']});
keyboard[3][2] = new Button('KeyZ', {'en': ['z', 'Z'], 'ru': ['я', 'Я']});
keyboard[3][3] = new Button('KeyX', {'en': ['x', 'X'], 'ru': ['ч', 'Ч']});
keyboard[3][4] = new Button('KeyC', {'en': ['c', 'C'], 'ru': ['с', 'С']});
keyboard[3][5] = new Button('KeyV', {'en': ['v', 'V'], 'ru': ['м', 'М']});
keyboard[3][6] = new Button('KeyB', {'en': ['b', 'B'], 'ru': ['и', 'И']});
keyboard[3][7] = new Button('KeyN', {'en': ['n', 'N'], 'ru': ['т', 'Т']});
keyboard[3][8] = new Button('KeyM', {'en': ['m', 'M'], 'ru': ['ь', 'Ь']});
keyboard[3][9] = new Button('Comma', {'en': [',', '<'], 'ru': ['б', 'Б']});
keyboard[3][10] = new Button('Period', {'en': ['.', '>'], 'ru': ['ю', 'Ю']});
keyboard[3][11] = new Button('Slash', {'en': ['/', '?'], 'ru': ['.', ',']});
keyboard[3][12] = new Button('ArrowUp', {'name': '&uarr;'}, 'dark');
keyboard[3][13] = new Button('ShiftRight', {'name': 'Shift'}, 'dark');

keyboard[4][0] = new Button('ControlLeft', {'name': 'Ctrl'}, 'dark');
keyboard[4][1] = new Button('MetaLeft', {'name': 'Win'}, 'dark');
keyboard[4][2] = new Button('AltLeft', {'name': 'Alt'}, 'dark');
keyboard[4][3] = new Button('Space', {'name': '&nbsp;'});
keyboard[4][4] = new Button('AltRight', {'name': 'Alt'}, 'dark');
keyboard[4][5] = new Button('ControlRight', {'name': 'Ctrl'}, 'dark');
keyboard[4][6] = new Button('ArrowLeft', {'name': '&#8592;'}, 'dark');
keyboard[4][7] = new Button('ArrowDown', {'name': '&#8595;'}, 'dark');
keyboard[4][8] = new Button('ArrowRight', {'name': '&#8594;'}, 'dark');


let arrLang = ["en", "ru"];
let pairOfKeyForChangeLang = ["AltLeft", "ShiftLeft"];
let arrCodeKeyDownNow = [];
let currLangStorage = {'currLang': 0};
let currLang = 0;
if (localStorage.getItem('currLang')) {
    currLang = parseInt(JSON.parse(localStorage.getItem('currLang'))['currLang']);
} else {
    localStorage.setItem('currLang', JSON.stringify(currLangStorage));
}
let isShift = false;
document.body.innerHTML = "<p>AltLeft + ShiftLeft - сочитание клавишь для смены языка;<br>Кликните на Shift, чтобы сменить регистр;</p>";
let inputArea = document.createElement("textarea");
inputArea.cols = 91;
inputArea.rows = 6;
inputArea.addEventListener("keydown", handleKeydown);
inputArea.addEventListener("keyup", handleKeyup);
document.body.appendChild(inputArea);
let divKeyboard = document.createElement("div");
divKeyboard.id = "keyboard";
for (let i = 0; i < keyboard.length; i++) {
    let divRow = document.createElement("div");
    divRow.id = "row" + i;
    for (let j = 0; j < keyboard[i].length; j++) {
        divRow.appendChild(keyboard[i][j].createBtn());
    }
    divKeyboard.appendChild(divRow);
}

document.body.appendChild(divKeyboard);

function handleKeydown(e) {
    let btn = document.getElementById(e.code);
    btn.className += " active";
    arrCodeKeyDownNow.push(e.code);
    for (let i = arrCodeKeyDownNow.length - 2; i >= 0 && arrCodeKeyDownNow.length > 1; i--) {
        if (
            arrCodeKeyDownNow[i] === pairOfKeyForChangeLang[0] &&
            arrCodeKeyDownNow[i + 1] === pairOfKeyForChangeLang[1]) {
            changeLang();
        }
    }
    doShiftCode(e.code);
}

function handleKeyup(e) {
    let btn = document.getElementById(e.code);
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (keyboard[i][j].code === e.code) {
                btn.className = keyboard[i][j].style;
            }
        }
    }
    delete arrCodeKeyDownNow[arrCodeKeyDownNow.indexOf(e.code)];
    doShiftCode(e.code);
}

function handleMouseDown(e) {
    let event = new Event("keydown", {bubbles: true});
    event.code = e.target.id;
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            if (keyboard[i][j].code === event.code && !keyboard[i][j].keys['name']) {
                inputArea.value += keyboard[i][j].getKey(isShift);
            }
        }
    }
    if (event.code === "Space") {
        inputArea.value += " ";
    }
    inputArea.focus();
    inputArea.dispatchEvent(event);
}

function handleMouseUp(e) {
    let event = new Event("keyup", {bubbles: true});
    event.code = e.target.id;
    inputArea.dispatchEvent(event);
    inputArea.focus();
    doShiftCode(event.code);
    if (isShiftCode(event.code) && isShift) {
        e.target.className += " active";
    }
}

function isShiftCode(code) {
    return code === "ShiftLeft" || code === "ShiftRight";
}

function doShiftCode(code) {
    if (isShiftCode(code)) {
        isShift = !isShift;
        changeKeyboard(isShift);
    }
}

function changeLang() {
    if (currLang < arrLang.length - 1) {
        currLang++;
    } else {
        currLang = 0;
    }
    currLangStorage['currLang'] = currLang;
    localStorage.setItem('currLang', JSON.stringify(currLangStorage));
    changeKeyboard(isShift);
}

function changeKeyboard(isShift) {
    for (let i = 0; i < keyboard.length; i++) {
        for (let j = 0; j < keyboard[i].length; j++) {
            document.getElementById(keyboard[i][j].code).innerHTML = keyboard[i][j].getKey(isShift);
        }
    }
}