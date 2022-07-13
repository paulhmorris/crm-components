import React from 'react'

interface IGridRow {
    children: JSX.Element,
}

const GridRow = ({ children }: IGridRow) => {
    return (
        <div className="striped-child flex flex-row items-center justify-between border-[1px] border-t-0 border-gray-200 p-6">
            {children}
        </div>
    )
}

export default GridRow
