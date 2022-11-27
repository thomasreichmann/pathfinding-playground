/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Button, Card, Radio } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import Board from './model/Board';

export default function Home() {
	const [pos, setPos] = useState(0);
	const [board, setBoard] = useState(new Board(15));

	useEffect(() => {
		console.log(`pos changed to ${pos} re-rendering`);
	}, [pos]);

	const incrementPos = () => {
		setPos(pos + 1);
	};

	const renderBlocks = (count: Number) => {
		return (
			<ul>
				{[...Array(count)].map((_, i) => {
					return <li key={i}>{i}</li>;
				})}
			</ul>
		);
	};

	const renderGrid = (board: Board) => {
		return board.cells.map((cell, i) => {
			return <div key={`${cell.x}${i}${cell.y}`} className={cell.getClassName()} />;
		});
	};

	return (
		<div className={styles.content}>
			<Button variant="contained" onClick={incrementPos}>
				+1
			</Button>

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
