<script>
	import axios from "axios";
	import ShowCode from "./ShowCode.svelte";
	import Unittest from "./Unittest.svelte";

	let value = '0';
	const operator = ['+', '-', '*', '/'];

	function append(num) {
		if (value.length > 10) return;
		/* 
		ameliorer gestion des erreurs
		gestion des virgules
		Ne pas avoir deux operator a la suite sauf - ou + 
		Ne peux pas commencer par / ou % ou * 
		... 
		*/
		if (value === '0') {
			if (num === '.') {
				value = '0.';
			} else {
				value = num;
			}
		} else {
			value += num;
		}	
	}

	function clearValue() {
		value = '0';
	}

	let showCode =  false;
	let unitTest = false;
	let integrationTest = false;
	let endToEndTest = false;
	let automatedTest = false;
	let deployementTest = false;

	function interuptor(test) {
		if (test === "showCode") showCode = !showCode;
		if (test === "unitTest") unitTest = !unitTest;
		if (test === "integrationTest") integrationTest = !integrationTest;
		if (test === "endToEndTest") endToEndTest = !endToEndTest;
		if (test === "automatedTest") automatedTest = !automatedTest;
		if (test === "deployementTest") deployementTest = !deployementTest;
	} 

	async function fetchResult () {
		try {
			const result = await axios.post('http://localhost:7777/calculate', { value });
			value = result.data;
		} catch (error) {
			console.log(error);
		}
	}

</script>
<div class="wrapper">
    <div class="container 1">
		<div class="calculator">
			<div  id="display">{value}</div>
			<div class="buttons">
				<button class="clear top" on:click={() => clearValue()} value="clear">C</button>
				<button class="operator top" on:click={() => append('%')} value="%">%</button>
				<button class="operator" on:click={() => append('/')} value="/">/</button>
				<button class="number" on:click={() => append('7')} value="7">7</button>
				<button class="number" on:click={() => append('8')} value="8">8</button>
				<button class="number" on:click={() => append('9')} value="9">9</button>
				<button class="operator" on:click={() => append('*')} value="*">x</button>
				<button class="number" on:click={() => append('4')} value="4">4</button>
				<button class="number" on:click={() => append('5')} value="5">5</button>
				<button class="number" on:click={() => append('6')} value="6">6</button>
				<button class="operator" on:click={() => append('-')} value="-">-</button>
				<button class="number" on:click={() => append('1')} value="1">1</button>
				<button class="number" on:click={() => append('2')} value="2">2</button>
				<button class="number" on:click={() => append('3')} value="3">3</button>
				<button class="operator" on:click={() => append('+')} value="+">+</button>
				<button class="number zero" on:click={() => append('0')} value="0">0</button>
				<button class="number" on:click={() => append('.') } value=".">.</button>
				<button class="equal" on:click={() => fetchResult()} value="=">=</button>
			</div>
		</div>
		<!-- <div class="buttons-container">
			<button class="buttons-test {showCode ? 'active' : ''}"  on:click={() => interuptor("showCode")}>SHOW CODE</button>
			<button class="buttons-test {unitTest ? 'active' : ''}" on:click={() => interuptor("unitTest")}>UNIT TEST</button>
			<button class="buttons-test {integrationTest ? 'active' : ''}" on:click={() => interuptor("integrationTest")}>INTEGRATIION TEST</button>
			<button class="buttons-test {endToEndTest ? 'active' : ''}" on:click={() => interuptor("endToEndTest")}>END-TO-END TEST</button>
			<button class="buttons-test {automatedTest ? 'active' : ''}" on:click={() => interuptor("automatedTest")}>AUTOMATED TEST</button>
			<button class="buttons-test {deployementTest ? 'active' : ''}" on:click={() => interuptor("deployementTest")}>DEPLOYEMENT TEST</button>

		</div> -->
    </div>
	<!-- <div class="container 2">
		{#if showCode}
			<ShowCode />
		{/if}
		{#if unitTest}
			<Unittest />
		{/if}
		{#if integrationTest}
			<pre>
				<code>
					{` INTEGRATION TEST `}
				</code>
			</pre>
		{/if}
		{#if endToEndTest}
			<pre>
				<code>
					{` END-TO-END TEST `}
				</code>
			</pre>
		{/if}
		{#if automatedTest}
			<pre>
				<code>
					{` AUTOMATED TEST `}
				</code>
			</pre>
		{/if}
		{#if deployementTest}
			<pre>
				<code>
					{` DEPLOYEMENT TEST `}
				</code>
			</pre>
		{/if}
	</div> -->
</div>


