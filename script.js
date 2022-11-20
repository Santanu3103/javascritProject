let comparater=null;  

const btn = document.querySelectorAll('button')[0];

btn.addEventListener('click',()=>filterEmployee())
const employees= [
                    {id:1,name:"john",age:"18",profession:"Developer"},
                    {id:2, name:"jack",age:"20", profession:"Developer"},
                    {id:3, name:"karen", age:"19",profession:"Admin"}
                 ];
emps =employees.map(employee => {
    employee.age=Number(employee.age);
    return employee;
});
console.log(emps)
employees.forEach(employee => {
    if(emps.name='john'){
        return employee.age=19;
    }})
 
console.log(employees);

const details = document.querySelector('.objects');

function addlist(array,append){

    array.forEach(item=> {

    const p = document.createElement('p');

    p.innerHTML = "<pre>"+"     "+item.id+".  Name :"+item.name+"      Profession:"+" "+item.profession+" "+"<pre>";
    append.appendChild(p);    
   });
}

function removeOldHistory(){

    while(details.hasChildNodes())
    details.removeChild(details.firstChild);
}


function getvalue(value){
   
    comparater = document.getElementById("profession").value;
    
}

addlist(employees,details);

function filterEmployee(){

    removeOldHistory();
    let selectedEmployees = employees.filter(employees => {

         if( comparater == 'Profession') {
            return true;
        }

       return employees.profession == comparater});

   
    addlist( selectedEmployees,details);
 };


 
   