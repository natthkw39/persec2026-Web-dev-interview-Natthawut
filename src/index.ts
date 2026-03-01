import { validateBrackets } from "./validateBrackets";
import { sortSpecialStrings } from "./sortStrings";
import { autocomplete } from "./autocomplete";
import { intToRoman, romanToInt } from "./romanNumerals";
import { sortDigitsDesc } from "./sortDigits";
import { tribonacci } from "./tribonacci";

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
    console.log(`Input: "${test}" => ${validateBrackets(test)}`);
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
  console.log("Output:", sortSpecialStrings(test1));

  console.log("\nInput:", test2);
  console.log("Output:", sortSpecialStrings(test2));
}

/**
 * =========================
 * QUESTION 3: AUTOCOMPLETE
 * =========================
 */

function testQuestion3() {
  console.log("\n===== QUESTION 3: AUTOCOMPLETE =====");

  const items = ["Mother", "Think", "Worthy", "Apple", "Android"];

  const result = autocomplete("th", items, 2);

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
  console.log("1989 =>", intToRoman(1989)); // MCMLXXXIX
  console.log("2000 =>", intToRoman(2000)); // MM
  console.log("68 =>", intToRoman(68));     // LXVIII
  console.log("109 =>", intToRoman(109));   // CIX

  // Roman -> Int
  console.log("MCMLXXXIX =>", romanToInt("MCMLXXXIX")); // 1989
  console.log("MM =>", romanToInt("MM"));               // 2000
  console.log("LXVIII =>", romanToInt("LXVIII"));       // 68
  console.log("CIX =>", romanToInt("CIX"));             // 109
}


/**
 * =========================
 * QUESTION 5: TEST QUESTION 5
 * =========================
 */
function testQuestion5() {
  console.log("\n===== TEST QUESTION 5 =====");

  console.log(sortDigitsDesc(3008));
  console.log(sortDigitsDesc(1989));
  console.log(sortDigitsDesc(2679));
  console.log(sortDigitsDesc(9163));
}
/**
 * =========================
 * QUESTION 6: TRIBONACCI
 * =========================
 */
function testQuestion6() {
  console.log("\n===== QUESTION 6: TRIBONACCI =====");

  console.log(tribonacci([1, 3, 5], 5));
  // [1, 3, 5, 9, 17]

  console.log(tribonacci([2, 2, 2], 3));
  // [2, 2, 2]

  console.log(tribonacci([10, 10, 10], 4));
  // [10, 10, 10, 30]

  console.log(tribonacci([], 5));
  // [0, 0, 0, 0, 0]

  console.log(tribonacci([1], 5));
  // [1, 0, 0, 1, 1]

  console.log(tribonacci([5, 2], 5));
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