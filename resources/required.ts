type PersonE = {
  name: string;
  lastName?: string;
  age?: number;
  identification?: string;
};

// Required type, now all the properties are required
type RequiredPerson = Required<PersonE>;
