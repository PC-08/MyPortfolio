/** Skills Container Adding Skills Starts */

let skills_Container_List = document.getElementById("skills_Container_List")

function append(skill) {
    let skillItem = document.createElement("div");
    let skillImg = document.createElement("img");
    let skillName = document.createElement("p");
    
    skillItem.classList.add("skills_list","col-4","col-md-2");
    skillImg.classList.add("skill_image");
    skillName.classList.add("mt-2");
     
    skillImg.src = skill.icon ;
    skillName.textContent = skill.name;
    
    skillItem.append(skillImg);
    skillItem.append(skillName);
    skills_Container_List.append(skillItem);
        
    };

fetch('skills.json')
    
    .then(response => response.json())
    .then(values => values.forEach(value => append(value)))

/** Skills Container Adding Skills End */


/** My Projects Container Adding Projects Starts */


let my_projects_container = document.getElementById("my_projects_container");

function addProjects(each_project) {
    let {name, desc, image, category, url} = each_project
    
    //container1 append to project list container
    let myprojectContainer1 = document.createElement("div");
    myprojectContainer1.classList.add("myprojects_container1","col-12","col-md-3","m-4");
    my_projects_container.append(myprojectContainer1);

    //img
    let myprojectImage = document.createElement("img");
    
    myprojectImage.src = image;
    myprojectImage.alt = name;
    myprojectImage.draggable = "false";
    myprojectContainer1.append(myprojectImage);

    //head
    let myprojectHead = document.createElement("h2");
    myprojectHead.textContent = name;
    myprojectContainer1.appendChild(myprojectHead);
    //container 2 apppend to contaier1
    let myprojectContainer2 = document.createElement("div");
    myprojectContainer2.classList.add("myprojects_container2");
    myprojectContainer1.append(myprojectContainer2);

    //desc
    let myprojectDesc = document.createElement("p");
    myprojectDesc.textContent = desc;
    myprojectContainer2.append(myprojectDesc);

    //button
    let myprojectlink = document.createElement("a");
    myprojectlink.href = url;
    myprojectlink.target = "_blank";
    myprojectContainer2.append(myprojectlink);

    let myprojectlinkBtn = document.createElement("button");
    myprojectlinkBtn.textContent = "View"
    myprojectlink.append(myprojectlinkBtn);

}

function DisplayProjects(projects_array){
    for (let each of projects_array) {
        addProjects(each);
    }
    
}


 fetch('./projects/displayProjects.JSON')
    .then(function(response){
        return response.json()
    })
    .then(function(jsonData){
        DisplayProjects(jsonData);
    })

   
/** My Projects Container Adding Projects End */