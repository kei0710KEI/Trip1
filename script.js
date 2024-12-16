// JavaScript for Japan Map Darts Game

const japanMap = document.getElementById('japan-map');
const dart = document.getElementById('dart');
const result = document.getElementById('result');
const startGameButton = document.getElementById('start-game');

// Initialize variables
let currentLocation = '';

// Add event listener for map click
japanMap.addEventListener('click', (event) => {
    const rect = japanMap.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Position the dart image
    dart.style.left = `${x}px`;
    dart.style.top = `${y}px`;
    dart.style.display = 'block';

    // Simulate determining the prefecture
    const prefecture = getPrefectureFromCoordinates(x, y);
    displayResult(prefecture);
});

// Start game button event
startGameButton.addEventListener('click', () => {
    const mode = document.getElementById('game-mode').value;
    if (!mode) {
        alert('ゲームモードを選択してください');
        return;
    }

    currentLocation = document.getElementById('current-location').value;
    if (!currentLocation) {
        alert('現在位置を選択してください');
        return;
    }

    dart.style.display = 'none';
    result.innerHTML = 'ダーツを投げて結果を確認しましょう！';
});

// Mock function to determine prefecture from coordinates
function getPrefectureFromCoordinates(x, y) {
    // This is a placeholder. Replace with real coordinate mapping.
    return `座標 (${x}, ${y}) の都道府県です。`;
}

// Display result
function displayResult(prefecture) {
    result.innerHTML = `結果: ${prefecture}`;
}
