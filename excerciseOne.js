module.exports = (() => {
    var fizzBuzzMap;
    var toNumber;

    var insertMapping = function() {
        var localMap = new Map();
        var multipleOfThree = 'Fizz';
        var multipleOfFive = 'Buzz';
    
        for(var i = 1; i <= toNumber; i++) {
            if(i % 3 == 0) {
                localMap.set(i, multipleOfThree);
            }
            if(i % 5 == 0) {
                localMap.set(i, multipleOfFive);
            }
            if(i % 3 == 0 && i % 5 ==0) {
                localMap.set(i, multipleOfThree + multipleOfFive);
            }
        }

        return localMap;
    };

    var displayMapping = function() {
        for(var [key, value] of fizzBuzzMap) {
            console.log(key + ' = ' + value);
        }
    };

    return {
        run: function(numbersToIterate) {
            if(numbersToIterate <3)
            throw new Error('number should be bigger than 3');
            
            toNumber = numbersToIterate;
            fizzBuzzMap = insertMapping();
            displayMapping(); 
        }
    }
})();

