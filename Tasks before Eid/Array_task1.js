// Arrays

// var a = [12,"13a","b",10]
// console.log(a)
// a.push("aaa","bbb","ccc")
// a.push("the end")
// a.push(false)
// console.log(a);
// var b= new Array("pizza",2,"abc")
// console.log(b.length)

//shift
//unshift
//pop

var a = [1,2,3,4]
var ask="Please enter values"

var ppt=prompt(ask);
a.push(ppt)
console.log(a)

for (i=0;i<a.length;i++){

    if(a[i]==ppt)
    console.log(a[i]);
    
}