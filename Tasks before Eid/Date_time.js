var date= new Date;
console.log(date)

var day_word=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]

var day=date.getDay();
console.log("Day :"+day_word[day])

var year = date.getFullYear();
console.log("year :"+year)

var datee = date.getDate()
console.log("date :"+datee)

var month = date.getMonth();
console.log("month :"+month)

var time_H=date.getHours()
console.log("Hours :"+time_H)

var time_M=date.getMinutes()
console.log("Minutes :"+time_M)

var time_S=date.getSeconds()
console.log("Seconds :"+time_S)

var ms= date.getTime()
console.log("Milliseconds since epoch time :"+ ms)
console.log("seconds since epoch time :"+ ms/1000)
console.log("Minutes since epoch time :"+ ms/(1000*60))
console.log("Hours since epoch time :"+ ms/(1000*60*60))
console.log("Days since epoch time :"+ ms/(1000*60*60*24))
console.log("Months since epoch time :"+ ms/(1000*60*60*24*30))
console.log("Years since epoch time :"+ ms/(1000*60*60*24*30*12))