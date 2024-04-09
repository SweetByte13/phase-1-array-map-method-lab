const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const newList = tutorials.map(sentence => {
    // 'what does the this keyword mean?'
    //split string into array
    //save new array as a variable
    //loop through new array
    //select the first letter of each string in the array
    //uppercase
    //dont change any other letters
    //combine the strings in the array into one string

    const innerList = sentence.split(' ')
    const upperCaseWords = innerList.map(letter => {
      return letter.charAt(0).toUpperCase() + letter.slice(1)
    })

    const upperCaseSentence = upperCaseWords.join(' ');

    console.log(upperCaseSentence)

    return upperCaseSentence

  }
  );

  return newList
};



console.log(titleCased());