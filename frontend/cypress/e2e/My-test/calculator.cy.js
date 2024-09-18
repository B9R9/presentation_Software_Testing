describe('Calculator E2E Tests', () => {
	beforeEach(() => {
	  cy.visit('http://localhost:8000/#/calculator');
	});
  
	it('should perform addition 1+1=2', () => {
	  cy.get('button').contains('1').click();
	  cy.get('button').contains('+').click();
	  cy.get('button').contains('1').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', '2');
	});
  
	it('should perform subtraction 3-1=2', () => {
	  cy.get('button').contains('3').click();
	  cy.get('button').contains('-').click();
	  cy.get('button').contains('1').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', '2');
	});
  
	it('should perform multiplication 2*3=6', () => {
	  cy.get('button').contains('2').click();
	  cy.get('button').contains('x').click();
	  cy.get('button').contains('3').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', '6');
	});
  
	it('should perform division 6/2=3', () => {
	  cy.get('button').contains('6').click();
	  cy.get('button').contains('/').click();
	  cy.get('button').contains('2').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', '3');
	});
  
	it('should handle division by zero', () => {
	  cy.get('button').contains('6').click();
	  cy.get('button').contains('/').click();
	  cy.get('button').contains('0').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', 'Error');
	});
  
	it('should clear the display', () => {
	  cy.get('button').contains('1').click();
	  cy.get('button').contains('C').click();
	  cy.get('[data-testid="display"]').should('have.text', '0');
	});
  
	it('should handle chained operations 1+2+3=6', () => {
	  cy.get('button').contains('1').click();
	  cy.get('button').contains('+').click();
	  cy.get('button').contains('2').click();
	  cy.get('button').contains('+').click();
	  cy.get('button').contains('3').click();
	  cy.get('button').contains('=').click();
	  cy.get('[data-testid="display"]').should('have.text', '6');
	});
  });