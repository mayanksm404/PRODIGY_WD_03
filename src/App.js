
import './App.css';
import Box from './component/Box';
import { useState } from 'react';
 
function App() {

	const [square, setSquare] = useState(Array(9).fill(null));
	const [active, setActive] = useState(Array(9).fill(false));
	const [next, setNext] = useState(true);

	console.log(active);
	let status;
	function clickHandler(i) {
		if (calculateWinner(square) || square[i]) {
			return;
		}
		const nextSquare = square.slice();
		if (next) {
			nextSquare[i] = "X";
		}
		else {
			nextSquare[i] = "O";
		}


		setSquare(nextSquare);
		setNext(!next);

	}
	let fillCount = 0;
	square.forEach((box) => {
		if (box !== null) {
			fillCount++;
			if (fillCount === 9) {
				status = "Game Tied !";
			}
		}
	});
	const winner = calculateWinner(square);
	if (winner) {
		if (next) {
			status = 'WINNER: ' + 'O';
		}
		else {
			status = "WINNER: " + "X";
		}
	}
	else{
		if (fillCount === 9) {
			status = "Game Tied !";
		}
		else{
		status = "Next Player: " + (next? "X": "O") ;
		}
	}

	function calculateWinner(square) {
		const win = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		];
		for (let i = 0; i < win.length; i++) {
			const [a, b, c] = win[i];
			if (square[a] && square[a] === square[b] && square[a] === square[c]) {
				active[a] = true;
				active[b] = true;
				active[c] = true;
				return [a, b, c];
			}
		}
		return null;
	}
	function newGameHandler() {
		setSquare(Array(9).fill(null));
		status = null;
		setNext(true);
		setActive(Array(9).fill(false));
	}

	return (

		<div className='App w-screen flex justify-center items-center flex-col back h-screen min-h-screen'>

			<div className='back1 text-3xl font-semibold shadow-lg rounded-xl px-5 py-1 text-white bg-opacity-30'>
			<div>{status}</div>
			</div>
			<div className=" md:w-[400px] lg:w-[500px] sm:w-[300px] w-[300px] grid grid-cols-3 mt-14 p-4 drop-shadow-lg shadow-2xl shadow-black rounded-lg back1 bg-opacity-20">
				<div className=' border-r-2 border-b-2 '>
				<Box value={square[0]} win={active[0]} boxClickHandler={() => clickHandler(0)} />
				</div>
				<div className=' border-r-2 border-b-2 '>
				<Box value={square[1]} win={active[1]} boxClickHandler={() => clickHandler(1)} />
				</div>
				<div className='border-b-2 '>
				<Box value={square[2]} win={active[2]} boxClickHandler={() => clickHandler(2)} />
				</div>
				<div className=' border-r-2 border-b-2 '>
				<Box value={square[3]} win={active[3]} boxClickHandler={() => clickHandler(3)} />
				</div>
				<div className=' border-r-2 border-b-2 '>
				<Box value={square[4]} win={active[4]} boxClickHandler={() => clickHandler(4)} />
				</div>
				<div className=' border-b-2 '>
				<Box value={square[5]} win={active[5]} boxClickHandler={() => clickHandler(5)} />
				</div>
				<div className=' border-r-2 '>
				<Box value={square[6]} win={active[6]} boxClickHandler={() => clickHandler(6)} />
				</div>
				<div className=' border-r-2 '>
				<Box value={square[7]} win={active[7]} boxClickHandler={() => clickHandler(7)} />
				</div>
				
				<Box value={square[8]} win={active[8]} boxClickHandler={() => clickHandler(8)} />
			</div>
			<div className=' my-20 text-white text-2xl'>
				{status==="WINNER: X" || status==="WINNER: O" || status==="Game Tied !" ? <button onClick={newGameHandler} className=' px-4 py-1 border rounded-lg bg:opacity-0'>New Game</button> : <div>  </div>}
			</div>
		</div>
	);
}

export default App;


