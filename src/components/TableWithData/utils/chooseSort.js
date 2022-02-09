import { sortByNameAsc } from "./sortByName";
import { sortByProfit } from "./sortByProfit";
import { sortByAccountType } from "./sotyByAccountType";

export const sortMap = {
    name: sortByNameAsc,
    profitLoss: sortByProfit,
    accountType: sortByAccountType
}

export const handleSortByManyFnc = (data, sortObj) => {

    return data.sort((a,b) => {
        let decided = 0;
        let i = 0;

        while(decided === 0 && i < sortObj.length){
            const currSort = sortObj[i++];
            decided = sortMap[currSort.sort](a,b,currSort.asc)
        }

        return decided;
    })

}
