"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBrackets = validateBrackets;
function validateBrackets(input) {
    const stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };
    // ป้องกัน string ว่าง
    if (input.length === 0)
        return false;
    for (const char of input) {
        if (char === "(" || char === "[" || char === "{") {
            // ❗ ไม่อนุญาตเปิดประเภทเดียวกันซ้อนกัน
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                return false;
            }
            stack.push(char);
        }
        else if (char in pairs) {
            if (stack.length === 0)
                return false;
            const last = stack.pop();
            if (last !== pairs[char])
                return false;
        }
        else {
            return false;
        }
    }
    return stack.length === 0;
}
