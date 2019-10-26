// generate_password.js
function generatePassword(options) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // create a collection to store things user picked up
    let collection = []

    if (options.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (options.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (options.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (options.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // remove things user do not need
    if (options.excludeCharacters) {
        console.log(`exclude characters: ${options.excludeCharacters}`)
        // collection = collection.filter(character => {
        //     // if the character includes in 'excludeCharacters',
        //     // return false to remove the character in the collection         
        //     // return !options.excludeCharacters.includes(character)
        // })
        collection = collection.filter(
            character => !options.excludeCharacters.includes(character)
        )
    }
    // console.log('collection', collection)
    // return error notice if collection is empty
    if (collection.length === 0) {
        return 'There is no valid characters in your selection.'
    }
    // start generating password
    let password = ''
    for (let i = 0; i < options.length; i++) {
        password += sample(collection)
    }

    // return the generated password
    console.log('password: ', password)
    return password
}

function sample(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

// export generatePassword function for other files to use
module.exports = generatePassword