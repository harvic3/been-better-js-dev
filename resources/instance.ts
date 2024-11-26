class PersonX {
  name: string;
  lastName: string;
  age: number;
  identification: string;

  constructor(name: string, lastName: string, age: number, identification: string) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.identification = identification;
  }
}

// Instance type
type PersonInstance = InstanceType<typeof PersonX>;

// Complex situation for typing
type ProfessionTwo = {
  title: string;
  salary: number;
  experience: number;
};

type Nationality = {
  country: string;
  city: string;
};

class MyComplexPerson<T extends ProfessionTwo, U extends Nationality> extends PersonX {
  name: string;
  lastName: string;
  age: number;
  identification: string;
  profession: T;
  nationality: U;

  constructor(props: {
    name: string;
    lastName: string;
    age: number;
    identification: string;
    profession: T;
    nationality: U;
  }
  ) {
    super(props.name, props.lastName, props.age, props.identification);
    this.profession = props.profession;
    this.nationality = props.nationality;
  }
}

// The problem, how use the type MyComplexPerson in the next function? It's not possible and is going to be an error
function createPerson(complexPerson: MyComplexPerson): MyComplexPerson {
  throw new Error("Not implemented");
}

// The solution is to use the InstanceType type
function createPersonSolved(complexPerson: InstanceType<typeof MyComplexPerson>): InstanceType<typeof MyComplexPerson> {
  throw new Error("Not implemented");
}
