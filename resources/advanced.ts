// Advanced types
class PersonV {
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
};

enum ProfessionEnum {
  DEVELOPER = "Developer",
  DESIGNER = "Designer",
  QA = "QA",
}

// Using keyof
type PersonKeys = [keyof PersonV]; // ["name", "age", "profession"]
type PersonPropTypes = PersonV[keyof PersonV]; // string | number

// Using infer
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseExampleType = Promise<string>;
type UnwrappedPromiseType = UnwrapPromise<PromiseExampleType>; // UnwrappedType is going to be string

// Using in
type PersonKeysTwo = {
  [K in keyof PersonV]: K;
}; // { name: "name", age: "age", profession: "profession" }

type professionKeys = {
  [K in keyof typeof ProfessionEnum]: K;
}; // { DEVELOPER: "DEVELOPER", DESIGNER: "DESIGNER", QA: "QA" }

// Advanced plus, using in, keyof and extends with never
// Only the properties of an object
export type PropertiesOnly<T> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K];
};
type PersonProperties = PropertiesOnly<PersonV>; // { name: string, age: number, profession: string }

// Only the methods of an object
export type MethodsOnly<T> = {
  [K in keyof T as T[K] extends Function ? K : never]: T[K];
};
type PersonMethods = MethodsOnly<PersonV>; // { isAdult: () => boolean }
