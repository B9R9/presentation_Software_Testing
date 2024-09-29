import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { test, expect, vi } from 'vitest';
import Calculator from '../src/calculator.svelte';


/*
Explanation of Functions:
- render: Renders a Svelte component for testing.
- fireEvent: Simulates user events like clicks.
- waitFor: Waits for conditions to be met before proceeding.
- test: Defines an individual test case. Each test block contains a single test.
- expect: Asserts that a value meets certain conditions.
- getByRole: Selects elements by their ARIA role.
- getByTestId: Selects elements by their data-testid attribute.
*/

const testButtonPress = async (buttonName, expectedDisplay) => {
	const { getByRole, getByTestId } = render(Calculator);
	const button = getByRole('button', { name: buttonName });
	const display = getByTestId("display");
  
	await fireEvent.click(button);
	expect(display.textContent).toBe(expectedDisplay);
  };

test("Press 0", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "0" });
    const display = getByTestId("display");
  
	await fireEvent.click(button);
  
	// Vérifiez que le display montre la valeur correcte après le clic
	expect(display.textContent).toBe("0");
});
  
test("Press 1", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "1" });
    const display = getByTestId("display");
  
	await fireEvent.click(button);
  
	// Vérifiez que le display montre la valeur correcte après le clic
	expect(display.textContent).toBe("1");
  });
test("Press 2", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "2" });
    const display = getByTestId("display");
  
	await fireEvent.click(button);
  
	// Vérifiez que le display montre la valeur correcte après le clic
	expect(display.textContent).toBe("2");
});
  
test("Press 3", async () => {
	await testButtonPress("3", "3");
});
  
test("Press 4", async () => {
	await testButtonPress("4", "4");
});
  
test("Press 5", async () => {
	await testButtonPress("5", "5");
  });
test("Press 6", async () => {
	await testButtonPress("6", "6");
});
  
test("Press 7", async () => {
	await testButtonPress("7", "7");
});
  
test("Press 8", async () => {
	await testButtonPress("8", "8");
});
  
test("Press 9", async () => {
	await testButtonPress("9", "9");
});
  
test("Press +", async () => {
	await testButtonPress("+", "0");
});
  
test("Press *", async () => {
	await testButtonPress("x", "0");
});
  
test("Press /", async () => {
	await testButtonPress("/", "0");
});
  
test("Press Clear", async () => {
	await testButtonPress("C", "0");
});

test("Press 777 and Clear", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "C" });
	const seven = getByRole('button', { name: "7" });
    const display = getByTestId("display");
  
	await fireEvent.click(seven);
	await fireEvent.click(seven);
	await fireEvent.click(seven);
	await fireEvent.click(button);
  
	expect(display.textContent).toBe("0");
});
  
test("Press =", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "=" });
	const display = getByTestId("display");
  
	await fireEvent.click(button);
  
	expect(display.textContent).toBe("0");
});

test("Press .", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button = getByRole('button', { name: "." });
	const display = getByTestId("display");
  
	await fireEvent.click(button);
  
	expect(display.textContent).toBe("0.");
});

test("Press 1+1 ", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button1 = getByRole('button', { name: "1" });
	const buttonPlus = getByRole('button', { name: "+" });
	const display = getByTestId("display");
  
	await fireEvent.click(button1);
	await fireEvent.click(buttonPlus);
	await fireEvent.click(button1);
  
	expect(display.textContent).toBe("1+1");
});

test("Press 1+1=2", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button1 = getByRole('button', { name: "1" });
	const buttonPlus = getByRole('button', { name: "+" });
	const buttonEqual = getByRole('button', { name: "=" });
	const display = getByTestId("display");
	
	await fireEvent.click(button1);
	await fireEvent.click(buttonPlus);
	await fireEvent.click(button1);
	await fireEvent.click(buttonEqual);
  
	expect(display.textContent).toBe("2");
});

test("wait for Press 1+1=2", async () => {
	const { getByRole, getByTestId } = render(Calculator);
  
	const button1 = getByRole('button', { name: "1" });
	const buttonPlus = getByRole('button', { name: "+" });
	const buttonEqual = getByRole('button', { name: "=" });
	const display = getByTestId("display");
	
	await fireEvent.click(button1);
	await fireEvent.click(buttonPlus);
	await fireEvent.click(button1);
	await fireEvent.click(buttonEqual);
  
	await waitFor(() => {
		expect(display.textContent).toBe("2");
	});
});

test("Press 3-1=2", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button3 = getByRole('button', { name: "3" });
    const buttonMinus = getByRole('button', { name: "-" });
    const button1 = getByRole('button', { name: "1" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button3);
    await fireEvent.click(buttonMinus);
    await fireEvent.click(button1);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("2");
    });
});

test("Press 2*3=6", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button2 = getByRole('button', { name: "2" });
    const buttonMultiply = getByRole('button', { name: "x" });
    const button3 = getByRole('button', { name: "3" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button2);
    await fireEvent.click(buttonMultiply);
    await fireEvent.click(button3);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("6");
    });
});

test("Press 6/2=3", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button6 = getByRole('button', { name: "6" });
    const buttonDivide = getByRole('button', { name: "/" });
    const button2 = getByRole('button', { name: "2" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button6);
    await fireEvent.click(buttonDivide);
    await fireEvent.click(button2);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("3");
    });
});

test("Press 6/0=Error", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button6 = getByRole('button', { name: "6" });
    const buttonDivide = getByRole('button', { name: "/" });
    const button0 = getByRole('button', { name: "0" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button6);
    await fireEvent.click(buttonDivide);
    await fireEvent.click(button0);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("Error");
    });
});

test("Press 1.5+1.5=3", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button1 = getByRole('button', { name: "1" });
    const buttonDot = getByRole('button', { name: "." });
    const button5 = getByRole('button', { name: "5" });
    const buttonPlus = getByRole('button', { name: "+" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button1);
    await fireEvent.click(buttonDot);
    await fireEvent.click(button5);
    await fireEvent.click(buttonPlus);
    await fireEvent.click(button1);
    await fireEvent.click(buttonDot);
    await fireEvent.click(button5);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("3");
    });
});

test("Press 12345678901 (max length)", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button1 = getByRole('button', { name: "1" });
    const button2 = getByRole('button', { name: "2" });
    const button3 = getByRole('button', { name: "3" });
    const button4 = getByRole('button', { name: "4" });
    const button5 = getByRole('button', { name: "5" });
    const button6 = getByRole('button', { name: "6" });
    const button7 = getByRole('button', { name: "7" });
    const button8 = getByRole('button', { name: "8" });
    const button9 = getByRole('button', { name: "9" });
    const button0 = getByRole('button', { name: "0" });
    const display = getByTestId("display");
    
    await fireEvent.click(button1);
    await fireEvent.click(button2);
    await fireEvent.click(button3);
    await fireEvent.click(button4);
    await fireEvent.click(button5);
    await fireEvent.click(button6);
    await fireEvent.click(button7);
    await fireEvent.click(button8);
    await fireEvent.click(button9);
    await fireEvent.click(button0);
    await fireEvent.click(button1);
  
    await waitFor(() => {
        expect(display.textContent).toBe("1234567890"); // Assuming max length is 10
    });
});
