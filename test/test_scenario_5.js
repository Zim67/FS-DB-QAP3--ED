// test_scenario_5.js
// As a Automation Engineer Mechanical staff member, I can update the details of a menu item in the database.

describe("Automation Engineer Mechanical staff member", () => {
    it("should be able to update the details of a menu item in the database", (done) => {
      const updatedMenuItem = {
        name: "Robot Hand Five Fingers Solely Movement Biocnic",
        price: 148.33,
        category: "Entree",
      };
  
      request(app)
        .put("/api/menu/example-menu-item-id") // Replace with the ID of the menu item you want to update
        .send(updatedMenuItem)
        .expect(200) // Assuming a successful response status code for updating an item is 200
        .end((err, res) => {
          if (err) return done(err);
  
          // Add assertions to validate the expected outcome
          assert(res.body.success); // Assuming the response body contains a success indicator for the update operation
  
          done();
        });
    });
  });