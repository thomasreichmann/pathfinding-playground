import { PhotoSizeSelectActual } from '@mui/icons-material';

export default class Cell {
	x: number;
	y: number;

	baseClass: string = 'cell';

	active: boolean = false;
	wall: boolean = false;
	hover: boolean = false;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;

		// if (Math.random() > 0.5) this.active = true;
	}

	getClassName() {
		let name = this.baseClass;

		if (this.active) name += ' active';
		if (this.wall) name += ' wall';

		return name;
	}

	getColor(): string {
		let color = 'white';

		if (this.active) color = 'turquoise';
		if (this.hover) color = 'green';
		if (this.wall) color = 'black';

		return color;
	}
}
