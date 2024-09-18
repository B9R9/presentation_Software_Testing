import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Calculator from '../../src/calculator.svelte';

test("Sequence of operations: 1+2*3-4/2=5", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button1 = getByRole('button', { name: "1" });
    const button2 = getByRole('button', { name: "2" });
    const button3 = getByRole('button', { name: "3" });
    const button4 = getByRole('button', { name: "4" });
    const button5 = getByRole('button', { name: "5" });
    const buttonPlus = getByRole('button', { name: "+" });
    const buttonMinus = getByRole('button', { name: "-" });
    const buttonMultiply = getByRole('button', { name: "x" });
    const buttonDivide = getByRole('button', { name: "/" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button1);
    await fireEvent.click(buttonPlus);
    await fireEvent.click(button2);
    await fireEvent.click(buttonMultiply);
    await fireEvent.click(button3);
    await fireEvent.click(buttonMinus);
    await fireEvent.click(button4);
    await fireEvent.click(buttonDivide);
    await fireEvent.click(button2);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("5");
    });
});

import { render, fireEvent, waitFor } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Calculator from '../../src/calculator.svelte';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// Créez une instance de MockAdapter sur l'instance axios par défaut
const mock = new MockAdapter(axios);

test("Server communication: 1+1=2", async () => {
    // Mock la réponse du serveur
    mock.onPost('http://localhost:7777/calculate').reply(200, "2");

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

test("Clear calculator", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button1 = getByRole('button', { name: "1" });
    const buttonClear = getByRole('button', { name: "C" });
    const display = getByTestId("display");
    
    await fireEvent.click(button1);
    await fireEvent.click(buttonClear);
  
    await waitFor(() => {
        expect(display.textContent).toBe("0");
    });
});

test("Server error handling", async () => {
    // Mock une réponse d'erreur du serveur
    mock.onPost('http://localhost:7777/calculate').reply(500);

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
        expect(display.textContent).toBe("Error");
    });
});

test("Chained operations: 1+2+3=6", async () => {
    const { getByRole, getByTestId } = render(Calculator);
  
    const button1 = getByRole('button', { name: "1" });
    const button2 = getByRole('button', { name: "2" });
    const button3 = getByRole('button', { name: "3" });
    const buttonPlus = getByRole('button', { name: "+" });
    const buttonEqual = getByRole('button', { name: "=" });
    const display = getByTestId("display");
    
    await fireEvent.click(button1);
    await fireEvent.click(buttonPlus);
    await fireEvent.click(button2);
    await fireEvent.click(buttonPlus);
    await fireEvent.click(button3);
    await fireEvent.click(buttonEqual);
  
    await waitFor(() => {
        expect(display.textContent).toBe("6");
    });
});