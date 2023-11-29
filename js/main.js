

// Conditional

// if,if else,else if
// swicth
// ternory operator 

// voting system >=18 eligble | not Eligible
// var Age=parseInt(prompt("Enter your Age")); // Explicit|Implicit
function Voting(age){

    var Age=parseInt(age); // Explicit|Implicit
 var out=document.getElementById("output");
if (Age<=0) {
    main.className=("border-danger container p-5 shadow border rounded");
    out.className=("text-danger");
    out.innerHTML="Age is invalid";
}else if (Age>100) {
    main.className=("border-warning container p-5 shadow border rounded");
    out.className=("text-warning");
    out.innerHTML="cannot vote when age gretrthan 100";
}else if(Age >=10 && Age < 18){
    main.className=("border-warning container p-5 shadow border rounded");
    out.className=("text-warning");
    out.innerHTML="Your Voting Age is Soon";
}else if(Age < 10){
    main.className=("border-warning container p-5 shadow border rounded");
    out.className=("text-warning");
    out.innerHTML="You are too young to vote";
}else if(Age>100){
    main.className=("border-warning container p-5 shadow border rounded");
    out.className=("text-warning");
    out.innerHTML="Age not have any point value";
}else if (Age >=18) {
   
        main.className=("border-success container p-5 shadow border rounded");
        out.className=("text-success");
        out.innerHTML="Your Eligble To Vote";
}else{
    main.className=("border-danger container p-5 shadow border rounded");
    output.className=("text-danger");
    output.innerHTML="Your Not Eligble To Vote";
}

}


// ternory  (condition)? True : false;

// out.innerHTML=Age >= 18?"Eligble":"Not Eligble";
