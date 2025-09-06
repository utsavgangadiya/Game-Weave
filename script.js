const WORDS = [
    "Apple", "Cherry", "Dragon Fruit", "Honeydew", "Kiwi", "Lemon", "Mango", "Nectarine", "Papaya", "Quince",
    "Raspberry", "Strawberry", "Watermelon", "Strawberry", "Cherry", "Red Bell Pepper", "Orange", "Banana",
    "Lemon", "Pineapple", "Grapes", "Blueberry", "Blackberry", "Grape", "Honeydew",
    "Carrot", "Eggplant", "Pumpkin", "Cucumber", "Broccoli", "Spinach", "Potato", "Onion", "Tomato", "Bell Pepper", "Cauliflower",
    "Zucchini", "Asparagus", "Peas", "Garlic",
    "Red", "Green", "Yellow", "Orange", "Purple", "Blue", "White", "Brown", "Pink", "Black", "Gray", "Magenta", "Cyan", "Turquoise",
    "Lavender", "Maroon", "Navy", "Gold", "Silver", "Beige",
    
];

let word;
let hiddenWord;

function initializeGame() {
    word = WORDS[Math.floor(Math.random() * WORDS.length)];
    hiddenWord = getHiddenWord(word);
    document.getElementById('hidden-word').textContent = `Word to spell: ${hiddenWord}`;
    document.getElementById('result').textContent = '';
}

function getHiddenWord(word) {
    const chars = word.split('');
    const totalChars = chars.length;
    const charsToHide = Math.floor(totalChars * 0.6); 

    let hiddenIndexes = [];
    while (hiddenIndexes.length < charsToHide) {
        let randIndex = Math.floor(Math.random() * totalChars);
        if (!hiddenIndexes.includes(randIndex) && chars[randIndex] !== ' ') { 
            hiddenIndexes.push(randIndex);
        }
    }

    return chars.map((char, index) => hiddenIndexes.includes(index) ? '_' : char).join('');
}

function checkGuess() {
    const userInput = document.getElementById('user-input').value.trim().toLowerCase();
    if (userInput === word.toLowerCase()) {
        document.getElementById('result').textContent = 'Correct! Well done!';
    } else {
        document.getElementById('result').textContent = `Incorrect. The correct spelling is: ${word}`;
    }
    document.getElementById('user-input').value = '';
    setTimeout(initializeGame, 2000); 
}

document.getElementById('guess-button').addEventListener('click', checkGuess);

window.onload = initializeGame;
