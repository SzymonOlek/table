export const sortByNameAsc = (a,b, ascending) => {
    if (a.name < b.name) return 1 * ascending;
    if (a.name > b.name) return -1 * ascending;
    return 0
}
