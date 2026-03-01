"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateBrackets_1 = require("./validateBrackets");
const sortStrings_1 = require("./sortStrings");
const autocomplete_1 = require("./autocomplete");
const romanNumerals_1 = require("./romanNumerals");
const sortDigits_1 = require("./sortDigits");
const tribonacci_1 = require("./tribonacci");
/**
 * =========================
 * QUESTION 1: Validate Brackets
 * =========================
 */
function testQuestion1() {
    console.log("===== QUESTION 1: VALIDATE BRACKETS =====");
    const testCases = [
        "()",
        "([])",
        "([{}])",
        "(([]))",
        ")",
        "(])",
        "([]",
        "{",
    ];
    testCases.forEach((test) => {
        console.log(`Input: "${test}" => ${(0, validateBrackets_1.validateBrackets)(test)}`);
    });
}
/**
 * =========================
 * QUESTION 2: Sort Special Strings
 * =========================
 */
function testQuestion2() {
    console.log("\n===== QUESTION 2: SORT STRINGS =====");
    const test1 = ["TH19", "SG20", "TH2"];
    const test2 = ["TH10", "TH3Netflix", "TH1", "TH7"];
    console.log("Input:", test1);
    console.log("Output:", (0, sortStrings_1.sortSpecialStrings)(test1));
    console.log("\nInput:", test2);
    console.log("Output:", (0, sortStrings_1.sortSpecialStrings)(test2));
}
/**
 * =========================
 * QUESTION 3: AUTOCOMPLETE
 * =========================
 */
function testQuestion3() {
    console.log("\n===== QUESTION 3: AUTOCOMPLETE =====");
    const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
    const result = (0, autocomplete_1.autocomplete)("th", items, 2);
    console.log("Search: th");
    console.log("Items:", items);
    console.log("MaxResult: 2");
    console.log("Output:", result);
    // Expected: ["Think", "Mother"]
}
/**
 * =========================
 * QUESTION 4: ROMAN NUMERALS
 * =========================
 */
function testQuestion4() {
    console.log("\n===== QUESTION 4: ROMAN NUMERALS =====");
    // Int -> Roman
    console.log("1989 =>", (0, romanNumerals_1.intToRoman)(1989)); // MCMLXXXIX
    console.log("2000 =>", (0, romanNumerals_1.intToRoman)(2000)); // MM
    console.log("68 =>", (0, romanNumerals_1.intToRoman)(68)); // LXVIII
    console.log("109 =>", (0, romanNumerals_1.intToRoman)(109)); // CIX
    // Roman -> Int
    console.log("MCMLXXXIX =>", (0, romanNumerals_1.romanToInt)("MCMLXXXIX")); // 1989
    console.log("MM =>", (0, romanNumerals_1.romanToInt)("MM")); // 2000
    console.log("LXVIII =>", (0, romanNumerals_1.romanToInt)("LXVIII")); // 68
    console.log("CIX =>", (0, romanNumerals_1.romanToInt)("CIX")); // 109
}
/**
 * =========================
 * QUESTION 5: TEST QUESTION 5
 * =========================
 */
function testQuestion5() {
    console.log("\n===== TEST QUESTION 5 =====");
    console.log((0, sortDigits_1.sortDigitsDesc)(3008));
    console.log((0, sortDigits_1.sortDigitsDesc)(1989));
    console.log((0, sortDigits_1.sortDigitsDesc)(2679));
    console.log((0, sortDigits_1.sortDigitsDesc)(9163));
}
/**
 * =========================
 * QUESTION 6: TRIBONACCI
 * =========================
 */
function testQuestion6() {
    console.log("\n===== QUESTION 6: TRIBONACCI =====");
    console.log((0, tribonacci_1.tribonacci)([1, 3, 5], 5));
    // [1, 3, 5, 9, 17]
    console.log((0, tribonacci_1.tribonacci)([2, 2, 2], 3));
    // [2, 2, 2]
    console.log((0, tribonacci_1.tribonacci)([10, 10, 10], 4));
    // [10, 10, 10, 30]
    console.log((0, tribonacci_1.tribonacci)([], 5));
    // [0, 0, 0, 0, 0]
    console.log((0, tribonacci_1.tribonacci)([1], 5));
    // [1, 0, 0, 1, 1]
    console.log((0, tribonacci_1.tribonacci)([5, 2], 5));
    // [5, 2, 0, 7, 9]
}
// Run all tests
function main() {
    testQuestion1();
    testQuestion2();
    testQuestion3();
    testQuestion4();
    testQuestion5();
    testQuestion6();
}
main();
