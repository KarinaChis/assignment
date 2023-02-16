import React, { FC, useEffect, useState } from 'react';
import TableRow, { RowProps } from '../TableRow/index.tsx';

interface TableContainerProps {
    rows: RowProps[];
    setUsers(rows): void;
};

const TableContainer: FC<TableContainerProps> = ({
    rows,
    setUsers
}) => {
    const [renderRows, setRenderRows] = useState(rows)
    const handleRemove = (id) => {
        setRenderRows(renderRows.filter(row => row.id !== id))
    }

    useEffect(() => {
        setRenderRows(rows);
    }, [rows])

    useEffect(() => {
        setUsers(renderRows);
    }, [renderRows])

    return(
        <table>
            <thead>
                <TableRow isHeader/>
            </thead>
            <tbody>
            {
                renderRows.map(tableRow => (<TableRow {...tableRow} handleRemove={handleRemove} key={tableRow.id}/>))
            }
            </tbody>
        </table>
    )
};

export default TableContainer;