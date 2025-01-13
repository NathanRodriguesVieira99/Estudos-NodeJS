import Person from ".";

describe(" testing all ", () => {
  it("should pass ", () => {
    const person = new Person();

    expect(person.sayMyName()).toBe("Nathan");
  });
});
