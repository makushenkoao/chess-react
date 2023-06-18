import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import {Typography} from "@mui/material";

interface  CellProps {
    cell: Cell,
    selected: boolean,
    click: (cell: Cell) => void
}

export const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return (
        <Typography
            component='span'
            className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
            onClick={() => click(cell)}
            sx={{background: cell.available && cell.figure ? 'green' : ''}}
        >
            {cell.available && !cell.figure && <Typography
                component='span'
                className="available"/>}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="figure"/>}
        </Typography>
    );
};
