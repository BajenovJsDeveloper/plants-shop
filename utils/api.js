export const countTotalPrice = (price, count) => {
  const total = (price * count).toFixed(2)
  return total.toLocaleString('en-US')
}
