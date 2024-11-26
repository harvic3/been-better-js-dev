type PersonD = {
  name: string;
  lastName: string;
  age: number;
  identification: string;
}

// Readonly type
type ReadonlyPerson = Readonly<PersonD>;
const person: ReadonlyPerson = {
  name: "John",
  lastName: "Doe",
  age: 30,
  identification: "1234567890"
};

// This will cause a typing error (transpilation)
person.name = "Jane";

// Readonly in classes
export class Profession {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  getProfession() {
    return this.name;
  }
}
const profession = new Profession("Software Engineer");
// This will cause a typing error (transpilation)
profession.name = "Frontend Developer";

// Readonly in constructor parameters
export class SpecialProfession {
  constructor(readonly name: string) {}
}

const specialProfession = new SpecialProfession("Conscience cultivator");
// The same behavior as the previous example
specialProfession.name = "Farmer";
