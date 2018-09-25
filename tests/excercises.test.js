const utils = require('./utils.js');
const chai = require('chai');

const fizzBuzz = require('../excerciseOne.js');
const braces = require('../excerciseTwo.js')
const movieTitles = require('../excerciseThree.js');
const music = require('../excerciseFour.js');

describe("All excercises at one place", function() {

    this.timeout(10000)
    it('should display all the FizzBuzzes', async() => {
        fizzBuzz.run(15); //insert the upper limit of values to test
    });
    
    it('should check whether the braces are correctly placed', ()=> {
        var success = braces.run("[{}]"); //insert braces to check
        chai.assert.equal(success, true, 'braces are not in correct order');
    });
    
    it('should display an array with all movie titles sorted by movie name', async() => {
            await movieTitles.getMovieTitles('spiderman'); //insert movie title
    });

    it('should display possible variants for the given parameters', () => {
        var n = 4;
        var k = 2;
        var l = 5;
        
        music.run(n,k,l);
    });
});

