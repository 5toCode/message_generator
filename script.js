// Create object to hold the various messages
const messages = {
    todayYouWill: ['be great!', 'stay motivated!', 'crush your goals!'],
    verseOfTheDay: ['"Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life."', '"But seek his kingdom, and these things will be given to you as well."', '"And we know that in all things God works for the good of those who love him, who have been called according to his purpose."'],
    quoteOfTheDay: ['"You always pass failure on the way to success."', '"The only time you fail is when you fall down and stay down."', '"You are never too old to set another goal or dream a new dream."']
};

// function to generate a random number with the range of the message array length
const generateRandomNumber = (num) => Math.floor(Math.random() * num);

// Array to hold the personal message
let personalMessage = [];

for (let prop in messages) {
    let messageID = generateRandomNumber(messages[prop].length);

    switch(prop) {
        case 'todayYouWill':
            personalMessage.push(`Today, YOU will ${messages[prop][messageID]}`)
            break
        case 'verseOfTheDay':
            personalMessage.push(`Verse of the day is: ${messages[prop][messageID]}`)
            break
        case 'quoteOfTheDay':
            personalMessage.push(`Quote of the day is: ${messages[prop][messageID]}`)
            break
        default:
            personalMessage.push('We have encountered an error somewhere');
    }
}


const formatMessage = (message) => {
    let formattedMessage = personalMessage.join('\n\n');
    console.log(formattedMessage);
};

formatMessage(personalMessage);