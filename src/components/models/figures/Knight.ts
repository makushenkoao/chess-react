import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackKnight = require('../../../assets/black-knight.png');
const whiteKnight = require('../../../assets/white-knight.png')

export class Knight extends  Figures {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackKnight : whiteKnight;
        this.name = FigureNames.KNIGHT;
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) return false;
        const dx = Math.abs(this.cell.x - target.x);
        const dy = Math.abs(this.cell.y - target.y);
        return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
    }
}