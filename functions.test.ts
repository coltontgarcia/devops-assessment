const {shuffleArray} = require('./utils')

describe('shuffleArray should shuffle and return an array', () => {
    
    const unShuffledArray = [7, 6, 5, 4, 3, 2, 1];
    const shuffledArray = shuffleArray(unShuffledArray);
    
    test("this will check if func shuffleArray will return an array", () => {
        expect(typeof shuffledArray).toBe("object");
    })

    test("this will check if the returned array is the same length as the one that was sent.", () => {
        expect(shuffledArray.length).toEqual(unShuffledArray.length);
    })

    test("this will test if the arrays contain the same values", () => {
        expect(arraysContainTheSameObject(unShuffledArray, shuffledArray)).toEqual(true);
    })

    test("this will test if the array has been shuffled.", () => {
        expect(thisIsTheShuffledArray(unShuffledArray, shuffledArray)).toEqual(true);
    })
    
})

function arraysContainTheSameObject(arr1, arr2) {
    if(arr1.length != arr2.length) return "The array has not been correctly shuffled.";

    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]) break;
            if(arr1[i] != arr2[j] && j === (arr2.length - 1)) return false;
        }
    }
    return true;
}

function thisIsTheShuffledArray(arr1, arr2) {
    if(arr1.length != arr2.length) return "the array has not been correctly shuffled.";
    for(let i = 0; i < arr1.length; i++) {
      if(arr1[i] != arr2[i]) return true;
  }
  return false;
}
