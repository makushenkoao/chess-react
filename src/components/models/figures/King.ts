import {FigureNames, Figures} from "./Figures";
import {Colors} from "../Colors";
import {Cell} from "../Cell";

const blackKing = require('../../../assets/black-king.png');
const whiteKing = require('../../../assets/white-king.png')

export class King extends Figures {
    constructor(color: Colors, cell: Cell) {
        super(color,cell);
        this.logo = color === Colors.BLACK ? blackKing : whiteKing;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)) return false;
        const isVerticalMove = (target.y === this.cell.y + 1 || target.y === this.cell.y - 1) && target.x === this.cell.x;
        const isHorizontalMove = (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && target.y === this.cell.y;
        const isLeftDiagonal = (
            (target.x === this.cell.x + 1 && target.y === this.cell.y + 1)
            || (target.x === this.cell.x - 1 && target.y === this.cell.y - 1)
        )
        const isRightDiagonal = (
            (target.x === this.cell.x + 1 && target.y === this.cell.y - 1)
            || (target.x === this.cell.x - 1 && target.y === this.cell.y + 1)
        )

        if (isVerticalMove || isHorizontalMove || isLeftDiagonal || isRightDiagonal) return true;

        return false;
    }


    public Checkmate(target: Cell) {
        if (this.cell.isEmptyVertical(target)) return true
        if (this.cell.isEmptyHorizontal(target)) return true
        if (this.cell.isEmptyDiagonal(target)) return true
        return false
    }
}