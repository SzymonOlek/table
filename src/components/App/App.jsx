import React, { useState, useEffect } from 'react';
import { TableWithData } from "../TableWithData/TableWithData"
import { Circles } from 'react-loading-icons'
import { API, mainHeaders } from '../../config/config'

const App = () => {

    const [data, setData] = useState(null);

    const fetchData = async () => {
        const headers = {
            'x-apikey': API.key,
        };

        const accounts = await fetch(API.accounts, { headers }).then(data => data.json())
        const accountsTypes = await fetch(API.accountsTypes, { headers }).then(data => data.json())
        const mapWithTypes = accountsTypes.reduce((prev, curr) => {
            prev.set(curr.id, curr.title)
            return prev
        }, new Map())

        const truncatedDate = accounts.map(acc => (
            { id: acc._id, 
                name: acc.name, 
                profitLoss: Number(acc.profitLoss), 
                accountType: mapWithTypes.get(acc.accountType)
            }))

        setData(truncatedDate);
    }

    useEffect(() => {
        fetchData()
    }, []);

    if (data) {
        return <div>
            <TableWithData headers={mainHeaders} data={data} />
        </div>
    }

    return <Circles fill={'red'} />
}

export default App;