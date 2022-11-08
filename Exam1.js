//Q1: Write a function, create a variable and assign it some value (you can also pass it as parameter)
//Write the code in the function to find out if the value of that variable is a string or number or Boolean.
//If it’s a string your function should return ‘String Type’, if it’s a number your function should return 
//‘Number Type’ or if it’s a Boolean, return ‘Boolean Type’.
//NOTE: your function should have the check for all the three types.

if 
else if to compeltet this question

let myString = hello;
let mynumber = 10;
let myBoolean = boolean;
    
function typesFunction(s,n,b){

            if (typeof value === "stringType") { 
                return true; 
            } 
            return false; 
        } 
document.write(typesFunction());


//Q2: Write a function to find and return the sum of all the composite numbers from 25 to 50. 
//Composite numbers are not prime numbers.

function isComposite(n){
    if (n <= 1) return false;
    if (n <= 3) return false;
 
    if (n%2 == 0 || n%3 == 0) return true;
 
    for (let i=5; i*i<=n; i=i+6)
        if (n%i == 0 || n%(i+2) == 0)
        return true;
 
    return false;
}
document.write(isComposite(25));

//Output:
//25, 26, 27, 28, 30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50.

//Q3: Write a function to output the exact pattern shown below using nested loops. 
//Pattern is for 2 weeks and each week has 7 days
//Week: 1
//Days: 2
//Days: 4
//Days: 6
//**Week: 2
//Days: 2
//Days: 4
//Days: 6

function weekLoop(){
    for (let i = 1; i<=2; i++){
        for(let j = 1; j<=7; j++){
            if(j % 2 == 0){
                document.write(' ','day: ', j);
            }
        }
    }
}
weekLoop()

//Output:
//day: 2 day: 4 day: 6 ; day: 2 day: 4 day: 6

//Q4: Write a function, pass two parameters as strings. The strings should have white spaces as shown in example
//Str1: ‘    LET ME SHOW YOU    ‘
//Str2: ‘    How it is done         ‘
//Result: ‘Let me show you, how it is done’
//Produce the exact result as shown above and also Keep in mind that H of how was upppercase in Str2 which is lowercase in result.
//Your function should be able to accept any pair of strings like above.

TRIM - 1 to the lower case


str = "    LET ME SHOW YOU    ";
str2 = "    How it is done       ";
let text1 = str.trim();
let text2 = str2.trim();

function stringLength(str,str2){