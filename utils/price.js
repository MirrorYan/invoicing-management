const DEDAULT_FIXED = 2

export const handlePrice = (num, fixed = DEDAULT_FIXED) => {
  if (num == null || isNaN(Number(num))) return null
  return Number(num).toFixed(fixed)
}