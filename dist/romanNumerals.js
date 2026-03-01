"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intToRoman = intToRoman;
exports.romanToInt = romanToInt;
function intToRoman(num) {
    if (!Number.isInteger(num) || num <= 0) {
        throw new Error("Input must be a positive integer");
    }
    const values = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];
    let result = "";
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
    }
    return result;
}
function romanToInt(s) {
    if (!s || typeof s !== "string")
        return 0;
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    s = s.toUpperCase();
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = map[s[i]];
        const next = map[s[i + 1]];
        if (!current) {
            throw new Error(`Invalid Roman numeral: ${s[i]}`);
        }
        if (next && current < next) {
            total -= current;
        }
        else {
            total += current;
        }
    }
    return total;
}
