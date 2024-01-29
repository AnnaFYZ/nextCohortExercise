// london10 -> london11
//ldn10 -> london11
// london01 -> london02
// empty input -> throw an exception
// if just a number -> throw a error

function addOneToCity(previousCohort) {
  const [cityName, cohortNumber, numberOfDigits] = splitCityAndNumber(previousCohort);
  
  const nextCohort = cohortNumber+1;
  
  return `${cityName}` + `${nextCohort.toString().padStart(numberOfDigits, "0")}`;
}

// london001
// ["london", 1]
// london002
function splitCityAndNumber(cohort) {

  const arrayOfChars = cohort.split("");
  const indexOfFirstNumber = arrayOfChars.findIndex(char => isNumber(char));
  const city = cohort.slice(0, indexOfFirstNumber);
  const number = Number(cohort.slice(indexOfFirstNumber));
  const numberOfDigits = cohort.slice(indexOfFirstNumber).length;

  //it should one appropriate format for input and output. For this case the format is defined as lettersNumbers
  //so i've amended the function and it excepts only defined format no matter how many symbols are for letters part of for number part

  if (isNaN(number) || isNumber(cohort)){
    throw new Error("there is an error");
  }
  
  return [city, number, numberOfDigits];
}

function isNumber(value) {
    return !isNaN(value)
}

module.exports = { splitCityAndNumber, addOneToCity };
