import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackBishop = require('../../../assets/black-bishop.png');
const whiteBishop = require('../../../assets/white-bishop.png')

export class Bishop extends Figures {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackBishop : whiteBishop
        this.name = FigureNames.BISHOP
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) return false
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}