/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button, Card, Radio } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import Board from './model/Board';
import Cell from './model/Cell';

export default function Home() {
	const [board, setBoard] = useState(new Board(15));

	const handleClick = (index: number) => {
		const cells = [...board.cells];
		cells[index].active = !cells[index].active;

		setBoard(prev => ({
			...prev,
			cells,
		}));
	};

	const renderGrid = (board: Board) => {
		return board.cells.map((cell, i) => {
			return (
				<div
					key={`${cell.x}${i}${cell.y}`}
					className="cell"
					css={css`
						background-color: ${cell.getColor()};
					`}
					onClick={() => {
						handleClick(i);
					}}
				/>
			);
		});
	};

	return (
		<div className={styles.content}>
			<main
				className={styles.board}
				css={css`
					--grid-size: ${board.scale};
				`}
			>
				{renderGrid(board)}
			</main>
		</div>
	);
}
