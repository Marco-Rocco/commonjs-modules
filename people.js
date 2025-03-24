const names = require('./names.js');
const hobbies = require('./hobbies.js');


function doubleFunction() {
    return {
        'fullName': names('Marco', 'Rocco'),
        'hobbies': hobbies('football', 'guitar', 'travel')
    };
};

console.log(doubleFunction());

module.exports = doubleFunction