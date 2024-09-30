const taskes_el=["T1:study","T2:Shoping","T3:Designes","T4:trainee","T5:Helpinh"];


const number_tasks=document.querySelector("h1");

const sear_tasks=document.querySelector("h2");

number_tasks.textContent="Total Tasks: "+taskes_el.length;

const task_list=document.querySelector("#resultList");

taskes_el.forEach((task)=>{
    const new_task=document.createElement("li");
    new_task.textContent=task;
    task_list.appendChild(new_task);

});

const form=document.querySelector("#newTaskForm");
const task_display=document.querySelector("h2");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const task_sear=parseInt(document.querySelector("#searchInput").value);
    if(task_sear >= 1 && task_sear <=taskes_el.length){
        task_display.textContent=`your task is ${taskes_el[task_sear-1]}`;
    }
    else{
        task_sear.textContent="you don't have tasks today";

    }
});
    
    