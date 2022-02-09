import './styles.css'
import React, { useState } from 'react';
import { handleSortByManyFnc } from './utils/chooseSort'

const sortOrder = [];

export const TableWithData = (props) => {

    const [data, setData] = useState(props.data);

    const handleHeaderClick = (sortCategory) => {
        const index = sortOrder.findIndex(e => e.sort === sortCategory)
        if (index === -1) {
            sortOrder.push({
                sort: sortCategory,
                asc: 1
            });
        } else{
            if (sortOrder[index].asc === 1) {
                sortOrder[index].asc = -1;
            } else {
                sortOrder.splice(index, 1);
            }
        }
       
        setData(handleSortByManyFnc([...props.data], sortOrder));
    }

    console.log(sortOrder)

    return <table>
        <thead>
            <tr>{props.headers.map((elem) =>
                <th className={'headerCell'} key={`${elem.id}`} onClick={() => handleHeaderClick(elem.key)}>{elem.name}</th>
            )}
            </tr>
        </thead>
        <tbody>
            {data && data.map(elem =>
                <tr key={elem.id}>
                    <th className={'singleCell'} key={`${elem.id}name`}>{elem.name}</th>
                    <th className={'singleCell'} key={`${elem.id}profitLoss`}>{elem.profitLoss}</th>
                    <th className={'singleCell'} key={`${elem.id}accountType`}>{elem.accountType}</th>
                </tr>)}
        </tbody>
    </table>
}