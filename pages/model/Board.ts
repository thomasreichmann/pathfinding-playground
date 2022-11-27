import Cell from './Cell';

export default class Board {
	scale: number;
	cells: Cell[] = [];

	constructor(scale: number) {
		this.scale = scale;

		for (let i = 0; i < this.scale; i++) {
			for (let j = 0; j < this.scale; j++) {
				let cell = new Cell(i, j);

				if (i == 0 || j == 0) cell.wall = true;
				if (i == this.scale - 1 || j == this.scale - 1) cell.wall = true;

				this.cells.push(cell);
			}
		}
	}
}
