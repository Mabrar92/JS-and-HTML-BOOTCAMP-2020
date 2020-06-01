var a=2; b=1;
document.write("Initial a is : "+a+"<br/>"+"initial b is : "+b+"<br/><br/><br/>");

var result= --a - --b + ++b + b--;


document.write("a is : "+a+"<br/>"+"b is : "+b+"<br/>"+"result is : "+result+"<br/><br/><br/>");

document.write("Each Step Explanation <br/><br/><br/>");

var a=2; b=1;
result = --a;
document.write("Step : --a"+"<br/>");

document.write("a is : "+a+"<br/>"+"b is : "+b+"<br/>"+"result is : "+result+"<br/>");
document.write("....................................<br/><br/>");

var a=2; b=1;
result = --a - --b;
document.write("Step : --a - --b"+"<br/>");

document.write("a is : "+a+"<br/>"+"b is : "+b+"<br/>"+"result is : "+result+"<br/>");
document.write("....................................<br/><br/>");

var a=2; b=1;
result = --a - --b + ++b;
document.write("Step : --a - --b + ++b"+"<br/>");

document.write("a is : "+a+"<br/>"+"b is : "+b+"<br/>"+"result is : "+result+"<br/>");
document.write("....................................<br/><br/>");

var a=2; b=1;
result = --a - --b + ++b + b--;
document.write("Step : --a - --b + ++b + b--"+"<br/>");

document.write("a is : "+a+"<br/>"+"b is : "+b+"<br/>"+"result is : "+result+"<br/>");
document.write("....................................<br/><br/>");