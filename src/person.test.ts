import Person from "./person";
Person;
describe(" testing all ", () => {
  it("should pass ", () => {
    const person = new Person();

    expect(person.sayHello()).toBe("Hello World");
  });
});
