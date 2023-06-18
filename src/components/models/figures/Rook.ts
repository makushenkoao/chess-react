import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackRook = require('../../../assets/black-rook.png');
const whiteRook = require('../../../assets/white-rook.png')

export class Rook extends  Figures {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackRook : whiteRook;
        this.name = FigureNames.ROOK;
    }

    canMove(target: Cell) : boolean {
        if (!super.canMove(target)) return false;
        if (this.cell.isEmptyVertical(target)) return true;
        if (this.cell.isEmptyHorizontal(target)) return true;
        return false;
    }
}