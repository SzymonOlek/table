export const sortByProfit = (a, b, ascending) => {
    if (a.profitLoss > b.profitLoss) return 1 * ascending;
    if (a.profitLoss < b.profitLoss) return -1 * ascending;
    return 0
}
