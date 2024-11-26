// Record type (string, string)
type RecordTypeOne = Record<string, string>;
const recordTypeOne: RecordTypeOne = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
// Record type (string, number)
type RecordTypeTwo = Record<string, number>;
const recordTypeTwo: RecordTypeTwo = {
  key1: 1,
  key2: 2,
  key3: 3,
};
// Record type (string, boolean)
type RecordTypeThree = Record<string, boolean>;
const recordTypeThree: RecordTypeThree = {
  key1: true,
  key2: false,
  key3: true,
};
// Record type (string, object)
type RecordTypeFour = Record<string, object>;
const recordTypeFour: RecordTypeFour = {
  key1: { key1: "value1" },
  key2: { key2: "value2" },
  key3: { key3: "value3" },
};
// Record type (string, any)
type RecordTypeFive = Record<string, any>;
const recordTypeFive: RecordTypeFive = {
  key1: "value1",
  key2: 2,
  key3: true,
};
// Record type (string, string | number | boolean)
type RecordTypeSix = Record<string, string | number | boolean>;
const recordTypeSix: RecordTypeSix = {
  key1: "value1",
  key2: 2,
  key3: true,
};

// Other way to declare a Record type is like this: // Record type (string, string), but is not recommended because it is not easy to read
type RecordTypeEight = {
  [key: string]: string;
};
