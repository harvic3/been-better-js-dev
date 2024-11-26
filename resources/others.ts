export class PersonA {
  name: string;
  age: number;
  profession: string;

  constructor(name: string, age: number, profession: string) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

  isAdult(): boolean {
    return this.age >= 18;
  }

  setAge(age: number): void {
    this.age = age;
  }
};

// Parameters
type PersonSetAgeParameters = Parameters<PersonA['setAge']>; // [number]
type PersonIsAdultParameters = Parameters<PersonA['isAdult']>; // []

// ConstructorParameters
type PersonConstructorParameters = ConstructorParameters<typeof PersonA>; // [string, number, string]
