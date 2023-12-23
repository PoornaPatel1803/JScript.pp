let str="              hii hello, I am poorna patel son of nishith patel";

uppstr=str.toUpperCase();
console.log("upper string: ",uppstr);
lowstr=uppstr.toLowerCase();
console.log("lower string: ",lowstr);
trim=str.trim();
console.log("trimmed string: ",trim);
let str1= "poorna ";
let str2="Nishith ";
let str3="Patel";
console.log("concate string: ",str1.concat(str2,str3));
let str4="hellow";
console.log("Replace string (hello->Yellow): ",str4.replace("h","Y"));

//all the strings are immutable they cannot be changed, unless you create a new string only string methods can make changes in string.