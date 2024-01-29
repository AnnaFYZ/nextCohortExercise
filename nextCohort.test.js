
const { splitCityAndNumber, addOneToCity } = require("./nextCohort.js");

test("Returns letters separated from numbers from the given string", () => {
  expect(splitCityAndNumber("london10")).toEqual(["london", 10, 2]);
});

test("Returns letters separated from numbers from the given string", () => {
  expect(splitCityAndNumber("wm6")).toEqual(["wm", 6, 1]);
});

test("Returns letters separated from numbers from the given string", () => {
  expect(splitCityAndNumber("l1")).toEqual(["l", 1, 1]);
});

test("Throws an error when the number is in the middle", () => {
  expect(() => splitCityAndNumber("lon10don")).toThrow("there is an error"); /// throw error
});

test("Throws an error when the number is in the middle", () => {
  expect(() => splitCityAndNumber("london1a9")).toThrow("there is an error"); /// throw error
});

test("Returns letters separated from numbers from the given string", () => {
  expect(splitCityAndNumber("london05")).toEqual(["london", 5, 2]);
});

test("Throws an error when the number is in the beginning", () => {
  expect(() => splitCityAndNumber("10london")).toThrow("there is an error"); ///throw error
});

test("Throws an error if only number provided", () => {
  expect(() => splitCityAndNumber("10")).toThrow("there is an error"); ///throw error
});

test("Throws an error if number is not provided", () => {
  expect(() => splitCityAndNumber("london")).toThrow("there is an error"); ///throw error
});

test("Throws an error if input is empty", () => {
  expect(() => splitCityAndNumber("")).toThrow("there is an error"); ///throw error
});

// "wm6"
// "l1"
// "london1a9" -> "london1a10" OR error

test("Increment a number and returns next cohort", () => {
  expect(addOneToCity("london5")).toEqual("london6");
});

test("Increment a number and returns next cohort with 2 digits", () => {
  expect(addOneToCity("london05")).toEqual("london06");
});

test("Increment a number and returns next cohort with 2 digits when number of digits is not specified", () => {
  expect(addOneToCity("london10")).toEqual("london11");
});