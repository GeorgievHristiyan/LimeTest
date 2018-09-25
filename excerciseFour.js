module.exports.run = function(_n, _k, _l) {

var BigNumber = require('big-number');

function validate() {
    if(_n - _k <= 0) {
        throw new Error('No valid playlists can be generated')
    }
    
    if(_n > 100) {
        throw new Error('the number of songs should be lower than 100');
    }
    
    if(_l < _n) {
        throw new Error('All songs should be played at least once');
    }
    
    if(_k > _n) {
        throw new Error('k should be lower than n');
    }
    
    if(_l > 100) {
        throw new Error('the length of the songs should be lower than 100');
    }
}

function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (BigNumber(num).multiply(factorial(num - 1)));
    }
}

validate();

var n = _n;
var k = _k; 
var l = _l; 
var res;
var nFactorial = factorial(n);

res = BigNumber(nFactorial).multiply(BigNumber(n-k).pow(l-n)).toString();  
console.log(res);

}












