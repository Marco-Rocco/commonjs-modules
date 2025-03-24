function person(firstName, lastName) {
    return {
        'first name' : firstName,
        'last name' : lastName
    };
}; 

console.log(person('Marco', 'Rocco'))

module.exports = person 