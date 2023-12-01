let catBreedInfo = {
    breed: ['Persian', 'Siamese', 'Snowshoe', 'Turkish Van', 'Ragdoll', 'Maine Coon'],
    name: ['Odysseus', 'Athena', 'Poseidon', 'Pegasus', 'Apollo'],
    ability: ['Opening the door', 'Skateboarding', 'Swimming', 'Very sharp claws', 'High jumps']
    
}

let getRandomNumber = num => {
    return Math.floor(Math.random() * num)
}

let mixedMessageArr = []

for (let prop in catBreedInfo) {
    if (prop === 'breed') {
        mixedMessageArr.push("Born and raised in the family of " + catBreedInfo[prop][getRandomNumber(catBreedInfo[prop].length)] + ' cats.')
    }
    else if (prop === 'name') {
        mixedMessageArr.push('Your name is ' + catBreedInfo[prop][getRandomNumber(catBreedInfo[prop].length)] + '.')
    }
    else if (prop === 'ability') {
        mixedMessageArr.push('Special ability: ' + catBreedInfo[prop][getRandomNumber(catBreedInfo[prop].length)])
    }
    else {
        return 'Message error'
    }
}

let messageSorted = mixedMessageArr.join('\n')

console.log(messageSorted)


