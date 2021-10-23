// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let lname:string=''
console.log(lname)
lname="dena"
console.log(lname)
let fname:string="kathiravan"
console.log(fname)
let lname2:number=100
console.log(lname2)
let fullname:boolean=true
console.log(fullname)
let name1:Array<string| number>=["kathir",24,]
let f:Date =new Date();
console.log(f.getDate()+'-'+`${f.getMonth() +1}`+'-'+f.getFullYear())
let car:{type:string,model:string,color:string} = {type:"Fiat", model:"50", color:"red"};
console.log(car)
let name3;
console.log(name3)
let some: any ='kathir!'; 
some = 'kathir';
console.log(some)
let  mark=45;
if (mark >=40) {
	console.log("first mark");
} else if(mark<=30){
console.log('gest pass')
} else {
	console.log("second mark");
}

for (let i = 0; i <= 7; i++) {
 console.log(i)
 if (i==5){
 break;
} 
}
    let array = ["kathir", "kumaran", 34, true]
    for(let k in array) {
      console.log(k,array[k])
    }
  let bike={color:'oranage',price:230000}
  for(let k in bike) {
 console.log(k , bike)
 }
 let name2:{name:String,gmail:string,mark:number,ispass:boolean}={name:'kumaran',gmail:'kumarandena@gmail.com',mark:85,ispass:true}
 console.log(name2['name'])
