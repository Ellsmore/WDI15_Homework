/* Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24. */

//---------------------------------------------------//


var maxOfTwoNumbers = function(num1, num2) {
	if (num1 > num2) {
		return num1;
	}

	return num2;
};

console.log( maxOfTwoNumbers(10233, 987) );


//---------------------------------------------------//

var maxOfThree = function(num1, num2, num3) {
	if (num1 > (num2 && num3) ) {
		return num1;
	} else if (num2 > (num1 && num3) ) {
		return num2;
	} else {
		return num3;
	}
};

console.log( maxOfThree(13323, 3423, 233333334) );


//---------------------------------------------------//

var stringAnalyzer = function(character) {
	if (character === ('a' || 'e' || 'i' || 'o' || 'u') ) {
		return "The character " + character + " is a vowel!";
	} else {
		return "The character " + character + " is a consonant!";
	}
};

console.log( stringAnalyzer('b') );


//---------------------------------------------------//

var numbers = [10, 24, 3, 5];

var sumArray = function() {
	return numbers[0] + numbers[1] + numbers[2] + numbers[3];
};

var multiplyArray = function() {
	return numbers[0] * numbers[1] * numbers[2] * numbers[3];
};

console.log( sumArray() );
console.log( multiplyArray() );


//------------------------ BONUS ---------------------------//

/* Define a function reverseString that computes the reversal of a string. For
example, reverseString("jag testar") should return the string "ratset gaj".
Write a function findLongestWord that takes an array of words and returns the
length of the longest one. Write a function filterLongWords that takes an array
of words and an number i and returns the array of words that are longer than i.  */

//---------------------------------------------------//

var reverseString = function(string) {
	return string.split('').reverse().join('');
};

reverseString('Chris');

// ----------- EXPLANATION -------------- //

/* This implementation takes advantage of the ‘reverse()’ method provided by the Array
prototype.First it splits the string into a real array, then calls the ‘reverse()’ method
 and finally returns the joined array. */


//---------------------------------------------------//

var words = ['Here', 'are', 'some', 'words'];

var findLongestWord = function(words) {

	for (i=0; i < words.length; i++) {
		if (words[0].length > words[1].length && words[2].length && words[3].length) {
		return words[0].length;
		} else if (words[1].length > words[2].length && words[3].length) {
		return words[1].length;
		} else if (words[2].length > words[3].length) {
		return words[2].length;
		} else {
		return words[3].length;
		}
	}
};

console.log( findLongestWord(words) );


//---------------------------------------------------//


var words = ['These', 'are', 'some', 'words', 'of', 'which', 'vary', 'in', 'length'];

var filterLongWords = function(words, i) {
  return words.filter(function(words) {return words.length > i});
};

console.log( filterLongWords(words, 6) );
