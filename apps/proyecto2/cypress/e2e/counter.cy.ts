describe("Counter - Prueba E2E", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("muestra el valor inicial en cero", () => {
    cy.get('[data-testid="counter-value"]').should("contain.text", "0");
  });

  it("incrementa el contador tras múltiples clics en el botón", () => {
    cy.get('[data-testid="counter-increment"]').click();
    cy.get('[data-testid="counter-value"]').should("contain.text", "1");

    cy.get('[data-testid="counter-increment"]').click();
    cy.get('[data-testid="counter-increment"]').click();
    cy.get('[data-testid="counter-value"]').should("contain.text", "3");

    cy.get('[data-testid="counter-increment"]').click().click().click();
    cy.get('[data-testid="counter-value"]').should("contain.text", "6");
  });
});
