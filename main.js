

let string = String(prompt("String typedagi malumot kriting"))
let number = Number(prompt("Number typedagi malumot kiriting"));
let boolean = Boolean(prompt("Boolean typedagi malumot kiriting"));

var check = "Hamma malumotlarni to'g'ri kiritganizga ishonchingiz komilmi?";
var words = "Siz kiritgan";
var word = "so'zi";
var words2 = "typega tegishli";
   
alert(check);
alert(
    words + " " + string + " " + word + " " + typeof (string) + " " + words2 + "\n"
   + words + " " + number + " " + word + " " + typeof (number) + " " + words2 + "\n"
   + words + " " + string + " " + word + " " + typeof (boolean) + " " + words2


);

