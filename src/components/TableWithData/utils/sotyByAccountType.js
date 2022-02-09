export const sortByAccountType = (a, b, ascending, orderArray) => {
    if (a.accountType < b.accountType) return 1 * ascending;
    if (a.accountType > b.accountType) return -1 * ascending;
    return 0
}
