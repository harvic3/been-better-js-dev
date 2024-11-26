type PersonB = {
  name: string;
  age: number;
  location: string;
};

// Partial type
type PartialPerson = Partial<PersonB>;

const partialPerson: PartialPerson = {
  name: "John",
  age: 30
};
