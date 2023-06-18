import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackQueen = require('../../../assets/black-queen.png')
const whiteQueen = require('../../../assets/white-queen.png')

export class Queen extends Figures {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackQueen : whiteQueen;
        this.name = FigureNames.QUEEN;
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) return false
        if (this.cell.isEmptyVertical(target)) return true
        if (this.cell.isEmptyHorizontal(target)) return true
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}