import { tetrominoItems, colors } from './tetrominoItems.js';
import { isValidPos } from './utils.js';

function runTests() {
    // Test for Tetromino structures and colors
    const tests = {
        "Tetromino 'I' structure": () =>
            tetrominoItems['I'].length === 4 && tetrominoItems['I'][1][1] === 1,
        "Tetromino 'O' structure": () =>
            tetrominoItems['O'].length === 2 && tetrominoItems['O'][0][0] === 1,
        "Color of 'I' tetromino": () =>
            colors['I'] === 'cyan',
        "Color of 'Z' tetromino": () =>
            colors['Z'] === 'red'
    };

    let allTestsPassed = true;

    for (const [testName, testFunc] of Object.entries(tests)) {
        try {
            if (testFunc()) {
                console.log(`✔️ Test passed: ${testName}`);
            } else {
                console.error(`❌ Test failed: ${testName}`);
                allTestsPassed = false;
            }
        } catch (error) {
            console.error(`❌ Test threw an error: ${testName}`, error);
            allTestsPassed = false;
        }
    }

    if (allTestsPassed) {
        console.log('🎉 All tests passed!');
    } else {
        console.warn('⚠️ Some tests failed.');
    }

    // Test for isValidPos function
    console.log("Test 1: Valid position within bounds");
    const playArea = Array(20).fill(0).map(() => Array(10).fill(0));
    const matrix = [
        [1, 0],
        [1, 1]
    ];
    console.log(isValidPos(matrix, 5, 5, playArea) ? "✔️ Passed" : "❌ Failed");

    console.log("Test 2: Position out of bounds (top)");
    console.log(!isValidPos(matrix, -1, 5, playArea) ? "✔️ Passed" : "❌ Failed");

    console.log("Test 3: Position out of bounds (right)");
    console.log(!isValidPos(matrix, 5, 9, playArea) ? "✔️ Passed" : "❌ Failed");

    console.log("Test 4: Valid position at the bottom");
    console.log(isValidPos(matrix, 18, 5, playArea) ? "✔️ Passed" : "❌ Failed");
}

runTests();
