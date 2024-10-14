// let data=[
//     {
//         src:"https://images.pexels.com/photos/5620861/pexels-photo-5620861.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"First-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     },
//     {
//         src:"https://images.pexels.com/photos/7664817/pexels-photo-7664817.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"Second-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     },
//     {
//         src:"https://images.pexels.com/photos/7660428/pexels-photo-7660428.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"Third-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     },
//     {
//         src:"https://images.pexels.com/photos/6823321/pexels-photo-6823321.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"Fourth-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     },
//     {
//         src:"https://images.pexels.com/photos/4553027/pexels-photo-4553027.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"Fifth-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     },
//     {
//         src:"https://images.pexels.com/photos/6659686/pexels-photo-6659686.jpeg?auto=compress&cs=tinysrgb&w=400",
//         head:"Sixth-Dish",
//         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
//     }

// ];
// function NewCard(imgSrc,head,cont){
//     let container=document.createElement("div");
//     let image=document.createElement("img");
//     image.src=imgSrc;
//     let title= document.createElement("h3");
//     title.innerText=head;
//     let content=document.createElement("p");
//     content.innerText=cont;
//     let buyBtn=document.createElement("button");
//     buyBtn.innerText="Buy"
//     buyBtn.style.cssText=`border-radius: 5px;
//     width:70px;
//     margin: 5px;
//     padding: 5px;
//     background-color: blueviolet;
//     color: white;`;
//     container.style.cssText=`border: 1px solid rgb(202, 198, 198);
//     text-align: center;
//     padding: 5%;
//     width: 150px;
//     height: max-content;
//     border-radius: 6px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);`;
//     image.style.cssText=`width: 100px;
//     height: 100px;
//     border-radius: 50%;`;
//     container.appendChild(image);
//     container.appendChild(title);
//     container.appendChild(content);
//     container.appendChild(buyBtn);
//     return container;
// }
// const parent = document.createElement('div');
// parent.id = 'card-container';

// parent.style.cssText=`display: flex;
//     flex-wrap: wrap;
//     gap: 20px;
//     margin: 20px auto;
//     align-items: center;
//     justify-content: center;
//     justify-items: center;`
// document.body.appendChild(parent);
// data.forEach(data=>{
//     let card=NewCard(data.src,data.head,data.content);
//     parent.appendChild(card);
// });


let cont=document.getElementById("taskContainer");

function createTask() {
    let inp=document.getElementById("inp").value;
    if(inp===""){
        return;
    }
    let span=document.createElement("span");
    span.innerText=inp;

    let task=document.createElement("div");

    task.classList.add("task");

    let btn1=document.createElement("input");
    btn1.setAttribute("type","checkbox");
    btn1.addEventListener("click",()=>{
        span.style.textDecoration = btn1.checked ? 'line-through' : 'none';
    });




    let deleteBtn=document.createElement("button")
    deleteBtn.innerText="Delete";
    deleteBtn.style.cssText=`border:1px solid transparent ;
    border-radius: 5px;
    background-color: #A30132;`;
    deleteBtn.addEventListener("click",()=>{
        cont.removeChild(task);
    });
    task.appendChild(span);
    task.appendChild(btn1);
    task.appendChild( deleteBtn);
    cont.appendChild(task)

}
document.getElementById("taskForm").addEventListener("submit", (event) => {
    event.preventDefault();
    createTask();
    document.getElementById("inp").value = ""; // Clear the input field
});
// class Employee{
//     name;
//     id;
//     sal=5000;
//     constructor(name,id){
//         this. name=name;
//         this.id=id;
//     }
//     calculateSalary(){
//         return this.sal
//     }
// }
// class Devloper extends Employee{
//     hoursWorked;
//     hourlyrate;
//     constructor(name,id,hw,hr){
//         super(name,id);
//         this.hourlyrate=hr;
//         this.hoursWorked=hw;
//     }
//     calculateSalary(){
//         return this.hourlyrate*this.hoursWorked;;
//     }
// }
// class Manager extends Employee{
//     bonousPercentage;
//     constructor(name,id,bonous){
//         super(name,id);
//         this.bonousPercentage=bonous;
//     }
//     calculateSalary(){
//         let sal=this.sal
//         sal=this.bonousPercentage*sal;
        
        
//         return sal;
//     }
// }

// let employee=new Employee("ahmed","46540");
// let devloper=new Devloper("mohamed","41601",10,50);
// let manager= new Manager("man","4634064",5)
// console.log( manager.calculateSalary());
// console.log(devloper.calculateSalary());


