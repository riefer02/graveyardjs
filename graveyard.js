const testString = "this is a test string variable";
const testObj = { hello: "world", age: 42, mindful: true };
const testArray = ["dogs", "cats", "mice", "men"];
const testBoolean = false;
const testUndefined = undefined;
const testNumber = 5000;

const testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
}).then(
  () => {
    console.log("1337");
  },
  () => {
    console.log("rejected promise");
  }
);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const raise = (variable) => {
  let concat;
  let corpse = JSON.stringify(variable);

  // Promise Test
  if (typeof variable?.then === "function") {
    console.log(`Type: Promise: - most likely`);
    return;
  }

  // Array Test
  const isArray = variable instanceof Array;

  if (!isArray) {
    // Primitives Test
    const type = typeof variable;
    if (type === "string") {
      concat = `Type: ${capitalize(type)}: ${corpse}`;
    } else if (type === "boolean") {
      concat = `Type: ${capitalize(type)}: ${corpse}`;
    } else if (type === "number") {
      concat = `Type: ${capitalize(type)}: ${corpse}`;
    } else if (type === "undefined") {
      concat = `Type: ${capitalize(type)};`;
    } else if (type === "object") {
      concat = `Type: ${capitalize(type)};`;
      console.table(variable);
    } else {
      concat = `Type: ${capitalize(type)}: ${corpse}`;
    }
    console.log(concat);
  } else if (isArray) {
    console.log(`Type: Array: ${corpse}`);
    console.table(variable);
  }
};

raise(testString);
raise(testObj);
raise(testArray);
raise(testPromise);
raise(testBoolean);
raise(testUndefined);
raise(testNumber);
