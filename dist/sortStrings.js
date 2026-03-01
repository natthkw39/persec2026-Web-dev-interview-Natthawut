"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortSpecialStrings = sortSpecialStrings;
function sortSpecialStrings(arr) {
    return arr.sort((a, b) => {
        const parse = (str) => {
            // แยก prefix (ตัวอักษรต้น) + ตัวเลขตัวแรกที่เจอ
            const match = str.match(/^([A-Za-z]+)(\d+)/);
            if (!match) {
                return { prefix: str, number: 0 };
            }
            return {
                prefix: match[1],
                number: parseInt(match[2], 10),
            };
        };
        const aParsed = parse(a);
        const bParsed = parse(b);
        // 1. เปรียบเทียบ prefix ก่อน
        if (aParsed.prefix < bParsed.prefix)
            return -1;
        if (aParsed.prefix > bParsed.prefix)
            return 1;
        // 2. ถ้า prefix เท่ากัน ให้เทียบตัวเลข
        return aParsed.number - bParsed.number;
    });
}
