
function ObjSwap(objNum){
    objTxt = document.getElementById("ObjTxt");
    
    if(objNum == 1){
        objTxt.innerHTML = "Follow a software development process to analyze a problem and to design, build and test software solutions.";
    }

    else if(objNum == 2){
        objTxt.innerHTML = "Demonstrate software development skills using more than one programming language and development environment.";
    }

    else if(objNum == 3){
        objTxt.innerHTML = "Implement data-driven solutions.";
    }

    else if(objNum == 4){
        objTxt.innerHTML = "Design and implement software solutions for mobile devices, embedded systems and/or multiple platforms.";
    }

    else if(objNum == 5){
        objTxt.innerHTML = "Document the planning and development of software applications using industry standard tools, techniques and processes.";
    }

    else if(objNum == 6){
        objTxt.innerHTML = "Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables and graphs, along with sorting and searching algorithms.";
    }

    else{
        objTxt.innerHTML = "Hover over the tabs to see each objective.";
    }
}

function defaultObjTxt(){
    document.getElementById("ObjTxt").innerHTML = "Hover over the tabs to see each objective.";
}