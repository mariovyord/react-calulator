import { useState } from "react";

function App() {

	const [calc, setCalc] = useState('');
	const [selected, setSelected] = useState(0);
	const [isDisabled, setIsDisabled] = useState(false);

	const operators = ['/', '*', '-', '+', '=', '.'];

	const caluclate = () => setSelected(eval(calc));

	const resetCalc = () => {
		setCalc('');
		setSelected(0);
		setIsDisabled(false);
	}

	const handleClick = (e) => {
		if (e.target.tagName === 'BUTTON') {
			const value = e.target.value;

			if (value === 'AC') {
				return resetCalc();
			}

			if (isDisabled) {
				return resetCalc();
			}

			if (value === '=') {
				const result = caluclate();
				setCalc(() => calc + (value).toString());
				setIsDisabled(true);
				return result;
			}

			if (operators.includes(calc[calc.length - 1]) && operators.includes(value)) {
				setCalc(() => calc.slice(0, -1) + (value).toString());
			} else {
				setCalc(() => calc + (value).toString());
			}
			setSelected(value);

		}
	}

	return (
		<div className="App">
			<div className="container">
				<main className='calculator'>
					<div className="display">
						<span className="calcs">{calc || 0}</span>
						<span className="result">{selected}</span>
					</div>
					<div onClick={handleClick} className="buttons">
						<button id="clear" value="AC">AC</button>
						<button className="ligth-gray" id="divide" value="/">/</button>
						<button className="ligth-gray" id="multiply" value="*">x</button>
						<button id="seven" value="7">7</button>
						<button id="eight" value="8">8</button>
						<button id="nine" value="9">9</button>
						<button className="ligth-gray" id="subtract" value="-">-</button>
						<button id="four" value="4">4</button>
						<button id="five" value="5">5</button>
						<button id="six" value="6">6</button>
						<button className="ligth-gray" id="add" value="+">+</button>
						<button id="one" value="1">1</button>
						<button id="two" value="2">2</button>
						<button id="three" value="3">3</button>
						<button id="zero" value="0">0</button>
						<button id="decimal" value=".">.</button>
						<button id="equals" value="=">=</button>
					</div>
				</main>
				<footer >
					By <a href="https://github.com/mariovyord/react-calulator">Mario Yordanov</a>
				</footer>
			</div>
		</div>
	);
}

export default App;
