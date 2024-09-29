
/*
Explanation of Functions:
- describe: Groups related tests together. In this case, it groups all end-to-end tests for the calculator.
- beforeEach: Runs a function before each test in the group. Here, it navigates to the calculator page before each test.
- it: Defines an individual test case. Each it block contains a single test.
- cy.visit: Navigates to a specified URL.
- cy.get: Selects elements in the DOM. The contains method is used to find elements containing specific text.
- cy.click: Simulates a click event on the selected element.
- cy.should: Asserts that the selected element meets certain conditions. In these tests, it checks that the display shows the expected text.
*/


describe('Calculator E2E Tests', () => {

	// Before each test, visit the calculator page
	beforeEach(() => {
	  cy.visit('http://localhost:8000/#/calculator');
	});
  
	// Test for addition: 1 + 1 = 2
	it('should perform addition 1+1=2', () => {
	  // Select the button with text '1' and click it
	  cy.get('button').contains('1').click();
	  // Select the button with text '+' and click it
	  cy.get('button').contains('+').click();
	  // Select the button with text '1' and click it
	  cy.get('button').contains('1').click();
	  // Select the button with text '=' and click it
	  cy.get('button').contains('=').click();
	  // Verify the display shows '2'
	  cy.get('[data-testid="display"]').should('have.text', '2');
	});
  
	// Test for subtraction: 3 - 1 = 2
	it('should perform subtraction 3-1=2', () => {
	  // Select the button with text '3' and click it
	  cy.get('button').contains('3').click();
	  // Select the button with text '-' and click it
	  cy.get('button').contains('-').click();
	  // Select the button with text '1' and click it
	  cy.get('button').contains('1').click();
	  // Select the button with text '=' and click it
	  cy.get('button').contains('=').click();
	  // Verify the display shows '2'
	  cy.get('[data-testid="display"]').should('have.text', '2');
	});
  
	// Test for multiplication: 2 * 3 = 6
	it('should perform multiplication 2*3=6', () => {
	  // Select the button with text '2' and click it
	  cy.get('button').contains('2').click();
	  // Select the button with text 'x' and click it
	  cy.get('button').contains('x').click();
	  // Select the button with text '3' and click it
	  cy.get('button').contains('3').click();
	  // Select the button with text '=' and click it
	  cy.get('button').contains('=').click();
	  // Verify the display shows '6'
	  cy.get('[data-testid="display"]').should('have.text', '6');
	});
  
	// Test for division: 6 / 2 = 3
	it('should perform division 6/2=3', () => {
	  // Select the button with text '6' and click it
	  cy.get('button').contains('6').click();
	  // Select the button with text '/' and click it
	  cy.get('button').contains('/').click();
	  // Select the button with text '2' and click it
	  cy.get('button').contains('2').click();
	  // Select the button with text '=' and click it
	  cy.get('button').contains('=').click();
	  // Verify the display shows '3'
	  cy.get('[data-testid="display"]').should('have.text', '3');
	});
  });