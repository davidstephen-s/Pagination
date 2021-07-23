//console.log(employees);
const table_length = 10;
 //table creation
//create table tag
let tableTag = document.createElement('table');
tableTag.className = "mytable";
document.getElementsByClassName('mytablediv')[0].append(tableTag); 
//create header row
let tr1 = document.createElement('tr');
tr1.className = "tablerow";
document.getElementsByClassName('mytable')[0].append(tr1);
let th1 = document.createElement('th');
th1.innerText = "ID";
document.getElementsByClassName('tablerow')[0].append(th1);
let th2 = document.createElement('th');
th2.innerText = "NAME";
document.getElementsByClassName('tablerow')[0].append(th2);
let th3 = document.createElement('th');
th3.innerText = "EMAIL";
document.getElementsByClassName('tablerow')[0].append(th3);
//add table data from JSON
for(let i=1;i<=table_length;i++){
    let tr1 = document.createElement('tr');
    tr1.className="tablerow";
    document.getElementsByClassName('mytable')[0].append(tr1);
    let td1 = document.createElement('td');
    td1.className = "id1";
    td1.innerText = employees[i-1].id;
    document.getElementsByClassName('tablerow')[i].append(td1);
    let td2 = document.createElement('td');
    td2.className = "Name1";
    td2.innerText = employees[i-1].name;
    document.getElementsByClassName('tablerow')[i].append(td2);
    let td3 = document.createElement('td');
    td3.className = "email1";
    td3.innerText = employees[i-1].email;
    document.getElementsByClassName('tablerow')[i].append(td3);
}
document.addEventListener("DOMContentLoaded",function(){
    let $page_buttons = document.querySelectorAll('li .page');
    let page_array = Array.from($page_buttons);

    function DOM_Manipulation(data_start){
        let $id = document.querySelectorAll('.id1');
        let $name = document.querySelectorAll('.Name1');
        let $email = document.querySelectorAll('.email1');
        let j=0;
        for(i=data_start;i<(data_start+table_length);i++){
            $id[j].innerText = employees[i].id;
            $name[j].innerText = employees[i].name;
            $email[j].innerText = employees[i].email;
            j++;
        }
    }   

    page_array.map(button => button.addEventListener('click',
    function()
    {
        document.querySelector('.active').classList.remove("active");
        button.classList.add("active");
        let current_active = parseInt(button.innerText);
        if(button.innerText !== "Prev" && button.innerText !== "Next")
        {
            let data_start = (current_active*table_length)-table_length;
            DOM_Manipulation(data_start);
        }
                
    }))
    let $nav_buttons = document.querySelectorAll('li .nav');
    let nav_array = Array.from($nav_buttons);
    let $checkPoint = document.querySelectorAll('li .page');
    nav_array.map(button => button.addEventListener('click',
    function()
    {
        if(button.innerText === "Prev"){
            let old_active = document.querySelector('.active').innerText;
            let current_active = old_active-1; 
            let data_start = ((current_active)*table_length)-table_length;
            if(old_active !== $checkPoint[0].innerText){     //checks if old_active !== startOfPage ie. 1
            document.querySelector('.active').classList.remove("active");
            document.getElementById((current_active).toString()).classList.add("active");
            DOM_Manipulation(data_start);
            }
            
        }
        if(button.innerText === "Next"){
            let old_active = document.querySelector('.active').innerText;
            let current_active = parseInt(old_active)+1;  // given ParseInt bcz here '+' act as an concat operator.
            let data_start = ((current_active)*table_length)-table_length;
            if(old_active !== $checkPoint[$checkPoint.length - 1].innerText){  //checks if old_active !== endOfPage ie. 10
            document.querySelector('.active').classList.remove("active");
            document.getElementById((current_active).toString()).classList.add("active");
            DOM_Manipulation(data_start);
            }
            
        }
    }))
})
