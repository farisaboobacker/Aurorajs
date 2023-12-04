

// Conditional

// if,if else,else if
// swicth
// ternory operator 

// voting system >=18 eligble | not Eligible
// var Age=parseInt(prompt("Enter your Age")); // Explicit|Implicit


function Voting(age) {

    var Age = parseInt(age); // Explicit|Implicit
    var out = document.getElementById("output");
    if (isNaN(Age)) {
        main.className = ("border-danger container p-5 shadow border rounded");
        out.className = ("text-danger");
        out.innerHTML = "Age is invalid and not anumber";
    } else if (Age > 100) {
        main.className = ("border-warning container p-5 shadow border rounded");
        out.className = ("text-warning");
        out.innerHTML = "cannot vote when age gretrthan 100";
    } else if (Age >= 10 && Age < 18) {
        main.className = ("border-warning container p-5 shadow border rounded");
        out.className = ("text-warning");
        out.innerHTML = "Your Voting Age is Soon";
    } else if (Age < 10) {
        main.className = ("border-warning container p-5 shadow border rounded");
        out.className = ("text-warning");
        out.innerHTML = "You are too young to vote";
    } else if (Age > 100) {
        main.className = ("border-warning container p-5 shadow border rounded");
        out.className = ("text-warning");
        out.innerHTML = "Age not have any point value";
    } else if (Age >= 18) {

        main.className = ("border-success container p-5 shadow border rounded");
        out.className = ("text-success");
        out.innerHTML = "Your Eligble To Vote";
    } else {
        main.className = ("border-danger container p-5 shadow border rounded");
        output.className = ("text-danger");
        output.innerHTML = "Your Not Eligble To Vote";
    }

}


function Grade(grade) {
    switch (grade) {
        case "A+":
            Grades.className = ("border-success container p-5 shadow border rounded");
            graderes.className = ("text-success");
            graderes.innerHTML = "Champion of Exam";
            break;
        case "B+":
            Grades.className = ("border-warning container p-5 shadow border rounded");
            graderes.className = ("text-warning");
            graderes.innerHTML = "Very Good";
            break;
        case "C+":
            Grades.className = ("border-primary container p-5 shadow border rounded");
            graderes.className = ("text-primary");
            graderes.innerHTML = " Good";
            break;
        case "D+":
            Grades.className = ("border-info container p-5 shadow border rounded");
            graderes.className = ("text-info");
            graderes.innerHTML = " Passed";
            break;
        case "E+":
            Grades.className = ("border-danger container p-5 shadow border rounded");
            graderes.className = ("text-danger");
            graderes.innerHTML = " Failed";
            break;

        default:
            Grades.className = ("border-danger container p-5 shadow border rounded");
            graderes.className = ("bg-danger text-white");
            graderes.innerHTML = " Error";
            break;
    }
}

// Events
// Functions
// function  are named block of code having set of statments 
// that exececute later when it is invoked/called and it helpes 
// to code reusablility.

function Calculator() {
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var op=document.getElementById('op').value;
    // console.log(num1,num2,op)
    var Display=document.getElementById('display');

    switch (op) {
        case '+':
            Display.value=num1+num2;
            return false;
        case '-':
            Display.value=num1-num2;
            return false;
            
        case '*':
            Display.value=num1*num2;
            return false;
            
        case '/':
            Display.value=num1/num2;
            return false;
        default:
            break;
    }
}
function CalculatorBtn(op) {
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    // var op=document.getElementById('op').value;
    // console.log(num1,num2,op)
    var Display=document.getElementById('display');

    switch (op) {
        case '+':
            Display.value=num1+num2;
            return false;
        case '-':
            Display.value=num1-num2;
            return false;
            
        case '*':
            Display.value=num1*num2;
            return false;
            
        case '/':
            Display.value=num1/num2;
            return false;
        default:
            break;
    }
}

// var area= (length,width)=> length*width;
// area(100,300);

// name(200,300);

// var sum=(num1,num2,...data)=> num1+num2;

// console.log(sum(20,30,40,50,60,70));

// var x=parseInt(prompt("Enter First number"));
// var y=parseInt(prompt("Enter second number"));
// var o=prompt("Enter operator");


// result=Calculator(x,y,o);
// console.log(result);

// if (Sum(10,30) == 41) {
//     console.log("Addition performed")
// }


// ternory  (condition)? True : false;

// out.innerHTML=Age >= 18?"Eligble":"Not Eligble";

// Array
var arr=[545,5484,541,5458];
var arr2=new Array(50,60,90);
    arr2=[10,20,30,40];

    var x=[25,50,75,100];  // index  0 1 2 3
        x[2]=85;
    
    console.log(x); // 25



    //console.log(z[0][3][2]);

    var student=["Akash",27,"Akash@mail.com",27];
    student.push("2022-06-07");
    student.push("Passed");
    student.pop();
    console.log(student.lastIndexOf(27));
    //var res=student.concat(x);
    // var res=student.fill(x,2,4)
    //var res=x.shift();

    //console.log(res);

   // LOOPS
    // for 
    // while
    // do while
    // for of
    // for in
    // foreach

    // for(initial;Condition;increment/decrement){
        //statment
    //}
    for (let i = 1; i <=100; i++) {
        document.getElementById('loop').innerHTML+=`
        <div class="col">
        <span class="card bg-success-subtle p-4 m-3 border shadow rounded">${i}<span>
        </div>
        `;
    }
    var z=[
        ["Akil",29,"Akil@mail.com",[100,200,300]],
        ["Arun",25,"Arun@mailcom",[400,500,600]],
        ["Akash",27,"Akash@mail.com",[700,800,900]],
    ];

    // for (let j = 0; j < z.length; j++) {
    //    for (let k = 0; k < z[j].length; k++) {
    //     console.log(z[j][k]);
    
    //    }
    // }

    // WHILE
        var count=0;
        while (count <=10) {
            document.getElementById('loop').innerHTML+=`
            <div class="col">
            <span class="card bg-danger-subtle p-4 m-3 border shadow rounded">${count}<span>
            </div>
            `;
            count++;
        }

        
     for (let j = x.length-1; j >=0; j--) {
        console.log(x[j]);
     }
     do {
        console.log("10>20 result");
     } while (10>20);

     