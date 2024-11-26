type PersonFour = {
  name: string;
  lastName: string;
  age: number;
  identification: string;
}

type Profession = {
  title: string;
}

// Union type
type UnionPerson = PersonFour | Profession;

// Exclude type
type ExcludePerson = Exclude<UnionPerson, Profession>;

// Extract type
type ExtractPerson = Extract<UnionPerson, Profession>;
