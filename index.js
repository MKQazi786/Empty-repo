//for even and odd \\

// let userFavNum = prompt("even or odd");
// let compNum = Math.round(Math.random() * 10)

// if (compNum % 2 === 0 && userFavNum === "even" ) {
//     console.log(userFavNum)
//     console.log(`congratulation this is even ${compNum}`);
// } else if (compNum % 2 !== 0 && userFavNum === "odd") {
//     console.log(`congratulation this is odd ${compNum}`);
// } else {
//     console.log(`SORRY you lose this is ${compNum}`);
// }

//for table \\

// let table = prompt("enter a number")

// for (let i = 1; i <= 10; i++) {

//     document.write(`${table} x ${i}  =  ${table * i}  <br> `)

// }

// for functions //
// let entrance = (studentsName) => {
//     return("hello " + studentsName)
// }

// let data = entrance("khubaib");

// console.log(data)

// let entrance = (num1 , num2 ) => {
//     return num1 + num2
// }

// let num3 = entrance(8,7);

// console.log(num3)

// //recursion
// let entrance = (data , time ) => {
//     console.log(data)
//     if (time > 1) {
//         entrance(data , time - 1);
//     }
// }

// entrance("yumna bhagori",7);

// console.log(status);

//FOR FACTORIAL
// let factorial = (userFavNum) => {
//     if (userFavNum > 1) {
//        return  userFavNum * factorial(userFavNum - 1)
//     }
//     return 1;
//  }
//  console.log(factorial(5))

// let months = ["february", "january", "february", "february", "january", "february"]

// let value = prompt("if you say i enter an array?")

// if(value !=="no"){
//     months.()
// }

// let newArr = months.slice(0,4)

// console.log(newArr)

// newArr.forEach( (val,index) => {
//     console.log(val,index)
// })

// let arr = [1, 3, 2, 4, 8, 2, 3, 5, 2, 1, 34, 5, 5]

// let total = arr.sort( (a,b) => {

//         if (a > b) {
//             return 1
//         }

//         return -1;

//     }
// )

// console.log(total)

// //reduce

// let arr = [1, 3, 2, 4, 8, 2, 3, 5, 2, 1, 34, 5, 5]

// let total = arr.reduce( (prevVal, currVal) => {
//     return prevVal + currVal;
// },0)

// console.log(total)

// let arr = ["Yumna", "kutti", "hai"]

// let total = arr.reduce((prevVal, currVal) => {
//     return prevVal + " " + currVal;
// }, "")

// console.log(total)

//objects

// let person = {
//     name: "muhammad Khubaib",
//     father : "abdul waheed",
//     eyesColor : "black",
//     speak : (sentence) => {
//         console.log(sentence + person.father);
//     }
// };
// console.log(person.father)
// person.speak("hello i,m ")

// let prevStd = localStorage.getItem("students")
// let students =prevStd ? JSON.parse(prevStd) : []

// let std = {
//      name: prompt("enter your name"),
//      teacher: prompt("enter your teacher name"),
//      rollNO: +prompt("enter your roll no "),
//      className: prompt("enter your class name")
//  }
//  students.push(std)
// window.provide = () => {
//     let stringify = JSON.stringify(students)
//     localStorage.setItem("students",stringify)
// }
// console.log(students)

//DOM MANIPULATION

// let p = document.createElement("p");
// p.id = "my_para"
// p.innerText = "hello i am muhammad khubaib";
// p.style.backgroundColor = "green"
// p.style.color = "White"
// document.body.appendChild(p)
// document.querySelector("#my_para")
// my_para.style.fontSize = "larger"
// my_para.style.padding = "1rem";
// console.log(my_para)

// setInterval(() => {
//     if (my_para.style.display === "block") {
//         my_para.style.display = "none";
//     }else{
//         my_para.style.display = "block"
//     }
// },1000);

// setInterval( () =>
// {
//     let color1 = Math.floor( Math.random() * 16777215).toString(16);
//     let color2 = Math.floor( Math.random() * 16777215).toString(16);

//     p.style.backgroundColor = "#" + color1
//     p.style.color = "#" + color2
// }
// ,300)

// let p2 = document.createElement("p");
// p2.id = "my_para2"
// p2.innerText = "hello you are loser";
// p2.innerText = "hello you are loser";
// p2.style.backgroundColor = "green"
// p2.style.color = "White"
// document.body.appendChild(p2)
// document.querySelector("#my_para2")
// my_para2.style.fontSize = "medium"
// my_para2.style.padding = "0.5rem";
// console.log(my_para2)
// my_para2.style.width = "100%"

// setInterval(() => {
//     let width = my_para2.style.width
//     if (width === "100%") {
//         my_para2.style.width = "20%";
//     }else{
//         width = parseInt(width.replace("%",""));
//         my_para2.style.width = width + 10 + "%";
//     }
// },500);

// setInterval( () =>
// {
//     let color1 = Math.floor( Math.random() * 16777215).toString(16);
//     let color2 = Math.floor( Math.random() * 16777215).toString(16);

//     p2.style.backgroundColor = "#" + color1
//     p2.style.color = "#" + color2
// }
// ,500)

//date method

// let date = new Date()

// let birthDay = date.setDate(26);
// birthDay = date.setMonth(5);
// birthDay = date.setFullYear(2005);
// birthDay = date.setHours(12);
// birthDay = date.setMinutes(0);
// birthDay = date.setSeconds(1);
// birthDay = date.getTime();

// console.log(date);

// let currDate = new Date()
// currDate = currDate.getTime();

// let diffDate = currDate - birthDay

// let perYearInMilliSeconds = 1000 * 60 * 60 * 24 * 365.25

// let diffYear = Math.floor(diffDate / perYearInMilliSeconds);

// let yearInMilliSeconds = diffYear * perYearInMilliSeconds;

// let perMonthInMilliSeconds = 1000 * 60 * 60 * 24 * 30.4375

// let diffMonth = Math.floor((diffDate - yearInMilliSeconds) / perMonthInMilliSeconds) | 0;

// let monthInMilliSeconds = diffMonth * 1000 * 60 * 60 * 24 * 30.4375;

// let perDayInMilliSeconds = 1000 * 60 * 60 * 24;

// let diffDay = Math.floor((diffDate - yearInMilliSeconds - monthInMilliSeconds) / perDayInMilliSeconds);

// let dayInMilliSeconds = diffDay * 1000 * 60 * 60 * 24;

// let perHourInMilliSeconds = 1000 * 60 * 60;

// let diffHours = Math.floor((diffDate - yearInMilliSeconds - monthInMilliSeconds - dayInMilliSeconds) / perHourInMilliSeconds);

// console.log(diffYear + " " + diffMonth + " " + diffDay + " " + diffHours);

// let date = new Date()

// let hour = document.querySelector("#hour")
// let minute = document.querySelector("#minutes")
// let second = document.querySelector("#seconds")
// setInterval(() => {

//     let date = new Date()

//     let elemHour = date.getHours().toString();

//     let elemMinute = date.getMinutes().toString().padStart(2, "0")
//     let elemSecond = date.getSeconds().toString().padStart(2, "0")

//     if (elemHour > 12) {
//         elemHour = elemHour - 12

//         if (elemHour < 10) {
//             elemHour = "0" + elemHour;
//         }
//     }
//     let amPm = elemHour >= 12 ? "AM" : "PM";

//     hour.innerText = elemHour
//     minute.innerText = elemMinute
//     second.innerText = elemSecond
//     document.querySelector("#amPm").innerHTML = amPm

// }, 1000);

//callback

// let MK ="jhoot bol rha hun me nhi arhi";
// MK = MK.toUpperCase()

// let After1Sec = (cb) => {
//     setTimeout(() => {
//         console.log(MK)
//         let data = "khubaib"
//         cb(data)
//     }, 2000)
// }

// let ForCallBack = (data) => {
//     let a = 4;
//     if (++a === 5) {
//         console.log("given variable a is true",data)
//     }
// }

// After1Sec(ForCallBack);

// console.log("Teri yad arhi hai")

// callback hell //

// let MK = "Kamini hai wo";
// MK = MK.toUpperCase()

// let after1Sec1 = (val, val1, cb) => {
//     setTimeout(() => {
//         let data = val + " Buhat " + val1
//         cb(data)
//     }, 1000)
// }

// after1Sec1("Khubaib", "pyara hai", (data) => {
//     after1Sec1(data, "sch me", (data1) => {
//         after1Sec1(data1, MK, (data2) => {
//             console.log(data2)
//         })
//     })
// })

// console.log(MK)

// promise //

// let MK = "Kamini hai wo";
// MK = MK.toUpperCase()

// let after1Sec = (val,val1) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             let data = val + " buhat " + val1
//             resolve(data)
//         }, 1000)
//     })
// }

// after1Sec("khubaib","pyara hai").then((data) => {
//     return after1Sec(data,"sch me")
// }).then((data1)=>{
//    return after1Sec(data1,MK)
// }).then((data2)=>{
//     console.log(data2,"bs ab thak gya me")
// })

// let after2Sec = (val) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let data = val + 5;
//       if (data % 2 === 0) {
//         resolve(data);
//       } else {
//         reject("odd number detected");
//       }
//     }, 2000);
//   });
// }

// after2Sec(2)
//   .then((data) => {
//     return data;
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// async/await //

//  let run = async  () => {
//     let data = await after2Sec(5);
//     let data1 = await after2Sec(data);
//     return data1
// };

// run().then((data1)=>{
//     console.log(data1)
// }) .catch ((err)=> {
//     console.error(err)
// })

// console.log(1 > 2 > 3);
// console.log(3 < 2 < 1);

// let imageContainer = document.getElementById("imageContainer");

// fetch("https://jsonplaceholder.typicode.com/posts",{method:"post"})
// .then (response => response.json())
// .then (json => {
//     console.log(json);
//     json.map((image)=>{
//         let img = document.createElement("img");
//         let imageUrl = image.url;
//         img.src = imageUrl;
//         imageContainer.appendChild(img);
//     });    

// })

// function add (x,y) {
//  return x + y;
// }

// let sub= num => Math.round(num);

// console.log(sub(5.5378));
// console.log(add(5,13))

// let a = (x, y, ...z) => {
    
//    let n = z.reduce((a,b)=>{
//         a+b
//     })
//     return x + y + n
// } 
 
// console.log(a(3,4,56,66,66));

// destructuring

// let obj = {
//     firstName:"muhammad",
//     lastName:"Khubaib",
//     print: () =>{
//         console.log(firstName, lastName)
//     }
// }

// let {firstName}=obj
// let lastName=obj.lastName
// console.log(lastName)



// let [,lastName] = arr

// console.log(lastName)


// let arr = ["muhammad khubaib"];

// let aaa = [...arr]

// console.log(arr)
// console.log(aaa)



// let obj = {
//     firstName:"muhammad",
//     lastName:"Khubaib",
// }

// let bj2 = {...obj,lastName:"hamza",hobby:"cricket"}

// console.log(bj2);


// class Product {
//     constructor(title,amount,description){
//         this.title = title;
//         this.price = amount
//         this.detail = description
//     }
// }

// let product1 = new Product ("motorolla one 5guw",30000,"This is my phone that i want to sell")
// let product2 = new Product ("BMW",300000,"This is my BMW")

// console.log(product1)
// console.log(product2)

// class Shape {
//     constructor(id,x,y){
//         this.id = id
//     }

//     move(x,y){
//         this.x = x,
//         this.y = y
//     }
// }

// let square = new Shape("square",5,8);
// let rectangle = new Shape("rectangle",3,4);

// square.move(3,5);
// console.log(square,rectangle);

let stdArray = [];

class Students {
    static men = "teri aesi ki tesi yumna"
    constructor(fullName,rollNo,batch,subject){
        this.fullName = fullName 
        this.rollNo = rollNo 
        this.batch = batch 
        this.subject = subject 
        this.attendance = [];
    }
    markAttedence(){
        this.attendance.push(new Date());
    }
    static sayYourName(){
        console.log("Muhammad Khubaib");
    }


}

class Volunteer extends Students {
    constructor(fullName,rollNo,batch,subject){
        super(fullName,rollNo,batch,subject);
        this._haveVolunteered = "MERN"
        this.isVolunteer = [];
    }
    markVolunteer(skill){
        this.isVolunteer.push(skill)
    }

    get allVolunteerSkilled (){
       return this.isVolunteer.join(" ");
    }

    set haveVolunteered(skill){
        if(skill != ""){
            this._haveVolunteered = skill
        }
    };
    
}

let aliyan = new Volunteer("aliyan mustafa",2355,5,"MERN Stack");

aliyan.markVolunteer("Flutter");
aliyan.markVolunteer("HTML");
aliyan.markVolunteer("CSS");
aliyan.sayYourName;

aliyan.haveVolunteered = "CSS";
stdArray.push(aliyan); 


let std1 = new Students("muhammad khubaib",23466,9,"MERN Stack")
std1.markAttedence()
stdArray.push(std1);

let std2 = new Students("Kutti Yumna Khubaib",22344,2,"Language class")
std2.markAttedence()
stdArray.push(std2);

// Volunteer.sayYourName();
console.log(aliyan._haveVolunteered);

console.log(stdArray);