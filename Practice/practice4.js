
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// const statement = 'I am a hard working person';
// const reversedSentence = statement.split(' ').reverse().join(' ');

// console.log(reversedSentence)

// for looping technique

const statement = 'I am a hard working person';

    const word = statement.split(' ');
    let reversed = '';

    for(let i = word.length - 1; i >= 0; i--){
        reversed += word[i] + (i > 0 ? ' ' : '');
    }

    console.log(reversed)