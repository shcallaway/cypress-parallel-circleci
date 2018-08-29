describe("404", () => {
  it("should send status 404 for unknown paths", () => {
    cy.request({
      url: "/foo",
      failOnStatusCode: false
    }).then(res => {
      expect(res.status).to.eq(404);
    });
  });
});
