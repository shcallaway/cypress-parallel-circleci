describe("index", () => {
  it("should have a welcome message", () => {
    cy.visit("/");
    cy.contains("Welcome!");
  });
});
