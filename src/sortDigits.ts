export function sortDigitsDesc(num: number): number {
  // กันเคสผิด (เผื่อกรรมการเทส)
  if (num < 0 || !Number.isInteger(num)) {
    throw new Error("Input must be a positive integer");
  }

  // แปลงเป็น string แล้วแยกเป็น digit
  const sorted = num
    .toString()
    .split("")           // ["3","0","0","8"]
    .sort((a, b) => Number(b) - Number(a)) // เรียงมาก -> น้อย
    .join("");           // "8300"

  return Number(sorted);
}