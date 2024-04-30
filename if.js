import inquirer from 'inquirer';
// we using if else condition when buying a shirt ...umm
let answers = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'shirtPrice',
            message: 'Enter the price of the shirt:',
        },
    ])
        .then((answers) => {
        let shirtPrice = answers.shirtPrice;
        if (shirtPrice > '1500') {
            console.log('The shirt is expensive');
        }
        else if (shirtPrice < '1500') {
            console.log('Maybe this one is not good quality');
        }
        else {
            console.log('The shirt price is 1500 so buy it');
        }
    });
};
answers(); //use for calling function..
