import React, { FC, useEffect, useState } from 'react';
import TableRow, { RowProps } from '../TableRow/index.tsx';

interface TableContainerProps {
    rows: RowProps[];
};

const TableContainer: FC<TableContainerProps> = ({
    rows
}) => {
    const [rerender, setRerender] = useState(false);

    const handleRemove = (id) => {
        rows = rows.filter(row => row.id !== id);
        console.log('rows', rows)
    }

    useEffect(() => {
        setRerender(!rerender);
    }, [rows])

    return(
        <table>
            <thead>
                <TableRow isHeader/>
            </thead>
            <tbody>
            {
                rows.map(tableRow => (<TableRow {...tableRow} handleRemove={handleRemove} key={tableRow.id}/>))
            }
            </tbody>
        </table>
    )
};

export default TableContainer;