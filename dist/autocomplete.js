"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autocomplete = autocomplete;
function autocomplete(search, items, maxResult) {
    if (!search || maxResult <= 0)
        return [];
    const lowerSearch = search.toLowerCase();
    const scored = items
        .map((item, index) => {
        const lowerItem = item.toLowerCase();
        const pos = lowerItem.indexOf(lowerSearch);
        // ไม่เจอคำค้น
        if (pos === -1)
            return null;
        let priority;
        if (pos === 0) {
            // ขึ้นต้นคำ
            priority = 1;
        }
        else if (pos + lowerSearch.length === lowerItem.length) {
            // อยู่ท้ายคำ
            priority = 3;
        }
        else {
            // อยู่กลางคำ
            priority = 2;
        }
        return { item, priority, index }; // เก็บ index เดิมไว้
    })
        .filter(Boolean);
    // sort ตาม priority แล้วคงลำดับเดิมด้วย index
    scored.sort((a, b) => {
        if (a.priority !== b.priority) {
            return a.priority - b.priority;
        }
        return a.index - b.index; // รักษาลำดับเดิม
    });
    return scored.slice(0, maxResult).map((s) => s.item);
}
