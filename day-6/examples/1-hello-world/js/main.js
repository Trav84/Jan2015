// console.log('hello world!');
// console.log('this is javascript!');
// console.log(5);
// console.log(5.7);
// console.log(-3.14);
// console.log(true);
// console.log(false);

// var myFirstName = 'Aaron';

// console.log(myFirstName);

// myFirstName = 'Luke';

// console.log(myFirstName);


// var myFirstName = 'Aaron';		
// var myLastName = 'Larner';
// var temp;

// temp = myFirstName;

// myFirstName = myLastName;

// myLastName = temp;


// console.log(myFirstName);
// console.log(myLastName);


// console.log('10');
// console.log('abc');
// console.log(10);
// console.log('10'-0)

// console.log(parseInt('10'));
// console.log(parseInt('10.123'));
// console.log(parseFloat('sdfjhskd'));


// console.log('10'+1);
// console.log(parseInt('10')+1);

// console.log('10*3');
// console.log(parseFloat('10.7*3'));

// console.log(true && true);
// console.log(true && false);

// console.log(true || false);
// console.log(true || true);
// console.log(false || false);

// American flag example
// var blue = true;
// var red = true;


// console.log(blue && red);

// // Swiss flag example
// var blue = true;
// var red = false;

// console.log(blue && red);
// console.log(blue || red);


// console.log(0);
// console.log(false);

// parseInt('123');
// Boolean(0);
// Boolean('abc');
// Boolean('');

// console.log('thi' == false);

// var myName = 'Bob';



// myName = 'Aaron';

// if(myName === 'Aaron') {
// 	console.log('Hey '+myName+', how\'s it going?');
// }

// if(myName !== 'Aaron') {
// 	console.log('Get off the podium '+myName);
// }


// console.log(Math.random());

// console.log(Math.ceil(5.7));
// console.log(Math.ceil(5.1));

// console.log(Math.floor(5.7));
// console.log(Math.floor(5.1));

// console.log(Math.ceil(5.0));

// console.log(0.3);

// console.log(Math.round(5.1));
// console.log(Math.round(5.5));

// var test = window.prompt("Enter your guess", "Number from 1 to 9");
// console.log(test);

// console.log(typeof(123));

// console.log(typeof(123) === 'number');


// console.log(typeof('number'));
// console.log(typeof(NaN));
// console.log(typeof(console.log));
// console.log(typeof(typeof));

// console.log(typeof window.prompt);

// prompt('number');

// var name = prompt('What is your name?');

// console.log('Hi ' name '! I hope you\'re having a great day.');


// console.log(1+2);
// console.log('1'+'2');



// var random = Math.random();

// while(!(random < 0.8)) {
// 	console.log(random);
// 	random = Math.random();
// }

// console.log(random);


// var counter = 0;

// while(counter < 10) {
// 	console.log(counter);
// 	counter = counter + 1;
// }

// for(var counter=3; counter<11; counter++) {
// 	console.log(counter);
// }

// var number = '31415';

// console.log(number.length);

// console.log(1+2);
// console.log('1'+'2');
// console.log('abc'+'aaa');

var unencryptedName = window.prompt('What do you want to encrypt?');

var encryptedName = '';

for(var i=0; i<unencryptedName.length; i++) {
	var asciiValue = unencryptedName.charCodeAt(i);
	asciiValue += 13;
	encryptedName = encryptedName + String.fromCharCode(asciiValue);
}

console.log(encryptedName);
