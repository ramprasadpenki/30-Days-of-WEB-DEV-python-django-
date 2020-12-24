window.alert("hello!")
var a = 5;
var b = 7;
var c = a+b;
console.log(a);
console.log(b);
console.log(a+b);
console.log(c);
var name=["ram","prasad"];
var obj = {"fname":"ram"  ,"id":190031838, "gender":"male"};
// strings
console.log(typeof "hello");
console.log(typeof 2.4);
console.log(typeof false);
console.log(typeof obj);
console.log(typeof names);
console.log(2+2+"6");
console.log(a+b+"c");
//typecasting
var test=String(a)
console.log(typeof test);
// or
var test=a.toString();
console.log(typeof test);
//arithmatic + - * / % ++ --
//assignment
//bitwise   & | << >> ! ^
//comparison < > == <= >= == === != !==
//logical && || !
console.log(a%b);
console.log(a/b);
console.log(a++);
console.log(++a);
console.log(a&b);
var a=5;
var b="5";

console.log(a==b);
console.log(a === b);
// functions
function fun (argument){
	var b="ram prasad";
	return b;
};

console.log(fun());
var obj={ "test":"apple","test1":"ball"}
console.log(obj)
console.log(obj.test)
//conditional statements
var c=20;
if(c<5)
{
	console.log("c less than 5");
}
else
{
	console.log("c is not less than 5");
}
var w=8.9
var x=(w>10)? "true": "false";
console.log(x);
var s;
if(s)
{
	//do something
}
else
{
	console.log("it is null");
}
// switch
var switchcase=10;
switch(switchcase)
{
	case 10:
	console.log("ten");
	break;
	case 100:
	console.log("hundred");
	break;
	case 1000;
	console.log("thousand");
	default:
	 console.log("not valid");
	 break;
}
























