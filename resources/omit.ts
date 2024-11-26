type PersonY = {
  name: string;
  lastName: string;
  age: number;
  genre: "Male" | "Female" | "Non-binary";
  location: string;
};

// Omit type
type OmitPerson = Omit<PersonY, "lastName" | "location">;

const omitPerson: OmitPerson = {
  name: "John",
  age: 30,
  genre: "Non-binary",
};
