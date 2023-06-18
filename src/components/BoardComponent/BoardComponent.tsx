import React, {FC, useEffect, useState} from 'react';
import {Board} from "../models/Board";
import {CellComponent} from "../CellComponent";
import {Cell} from "../models/Cell";
import {Player} from "../models/Player";
import {Typography} from "@mui/material";
import {King} from "../models/figures/King";

interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: () => void;
}


export const BoardComponent: FC<BoardProps> = ({board, setBoard,currentPlayer,swapPlayer }) => {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

    const click = (cell: Cell) => {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer?.color) {
                setSelectedCell(cell)
            }
        }
    }

    useEffect(() => {
        highlightCells()
        // проверка на шах и мат
    }, [selectedCell])


    const highlightCells = () => {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    const updateBoard = () => {
        const newBoard = board.getCopyBoard()
        setBoard(newBoard)
    }

    return (
        <Typography
            component='span'
        >
            <Typography
                sx={{fontSize: '30px', fontWeight: 'bold'}}
                color='primary'
                component='h3'
                className='title'>Current player - {currentPlayer?.color}
            </Typography>
            <Typography
                component='span'
                className='board'>
                {board.cells.map((row, index) =>
                    <React.Fragment key={index}>
                        {row.map(cell =>
                            <CellComponent
                                click={() => click(cell)}
                                cell={cell}
                                key={cell.id}
                                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            />
                        )}
                    </React.Fragment>
                )}
            </Typography>
        </Typography>
    );
};
