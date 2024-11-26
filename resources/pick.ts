type PersonC = {
  name: string;
  lastName: string;
  age: number;
  genre: "Male" | "Female" | "Non-binary";
  location: string;
};

// Pick type
type PickPerson = Pick<PersonC, "name" | "age">;

const pickPerson: PickPerson = {
  name: "John",
  age: 30,
};
