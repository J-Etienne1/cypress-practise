describe("Various examples", () => {
    beforeEach(() => {
    cy.visit("/examples")
  })
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/")

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview")


    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals")


    cy.getDataTest("nav-forms").click();
    cy.location("pathname").should("equal", "/forms")

    // Need to come back to an figure out failure - Timed out retrying after 4000ms: expected '/forms' to equal '/examples'
    cy.getDataTest("nav-examples").click();
    cy.location("pathname").should("equal", "/examples")
    cy.wait(3000)

    cy.getDataTest("nav-component").click();
    cy.location("pathname").should("equal", "/component")

    cy.getDataTest("nav-best-practices").click();
    cy.location("pathname").should("equal", "/best-practices")

  });
});
