
function outer(){
  var a = " PRIYAM ";
  var b = {name1:"Priyam",name2:"Jude"};
  console.log("This is the output from OUTER A " + a);
  console.log("This is the output from OUTER B " + b);
  function inner(a,b){
    console.log("This is the output from INNER A before asignment " + a);
    console.log("This is the output from INNER B before asignment " + b);
    var a = "hello";
    var b = {name1:"James",name2:"Kevin"};
    console.log("This is the output from INNER A after asignment " + a);
    console.log("This is the output from INNER B after asignment " + b);
    b.name2 ="Amy"
    console.log("This is the output from INNER B after asignment and property update " + b.name2);
  }
  inner(a,b);
  console.log("This is the output from OUTER A after inner function " + a);
  console.log("This is the output from OUTER A after inner function " + b);
}

outer();
