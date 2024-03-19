// test_scenario_3.js
// As a Automation Engineer mecahancial business partner, I can add a new menu item to the database through a REST API.

describe("Automation Engineer mecahancial business partner", () => {
    it("should be able to add a new menu item to the database through a REST API", (done) => {
      const newMenuItem = {
        name: "Aircraft Turbofan fighter Engine Model Kit Adult",
        price: 332.87,
        category: "Entree",
      };
  
      request(app)
        .post("/api/menu") // Assuming your route for adding a new menu item is '/api/menu'
        .send(newMenuItem)
        .expect(201) // Assuming a successful response status code for creating an item is 201
        .end((err, res) => {
          if (err) return done(err);
  
          // Add assertions to validate the expected outcome
          assert(res.body.id); // Assuming the response body contains the ID of the newly created menu item
  
          done();
        });
    });
  });