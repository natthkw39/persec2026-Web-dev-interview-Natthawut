"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tribonacci = tribonacci;
function tribonacci(signature, n) {
    if (n <= 0)
        return [];
    // ถ้า signature น้อยกว่า 3 เติม 0 ให้ครบ 3
    const result = [...signature];
    while (result.length < 3) {
        result.push(0);
    }
    // ถ้า n น้อยกว่าความยาวปัจจุบัน ตัดให้พอดี
    if (n <= result.length) {
        return result.slice(0, n);
    }
    // คำนวณต่อ
    for (let i = 3; i < n; i++) {
        const next = result[i - 1] +
            result[i - 2] +
            result[i - 3];
        result.push(next);
    }
    return result.slice(0, n);
}
