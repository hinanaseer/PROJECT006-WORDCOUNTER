

import inquirer from "inquirer";

const wordCounter = (text:string) => {
    const words = text.split(/\s+/).filter((word) => word !== '');
    return words.length;
};
const mainMenu =async () => {
    while (true) {
        const {text} = await inquirer.prompt({
            type: 'input',
            name: 'text',
            message: 'Enter the text to count words'
});
        const wordCount = wordCounter(text);
        console.log(`WordCount : ${wordCount}`);
        
    // Ask the user if they want to continue or exit
    const { continueOption } = await inquirer.prompt({
        type: 'confirm',
        name: 'continueOption',
        message: 'Enter the Do you want to count words for another text?'
});

    if (!continueOption) {
        console.log('Good Bye!');
        break;        
    }
};
};

mainMenu();
