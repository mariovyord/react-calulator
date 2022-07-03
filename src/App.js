function App() {
	return (
		<div className="App">
			<div className="container">
				<div className='calculator'>
					<div className="display">
						<span className="calcs">Caluclations...</span>
						<span className="result">Result</span>
					</div>
					<div className="buttons">
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
				</div>
			</div>
		</div>
	);
}

export default App;
