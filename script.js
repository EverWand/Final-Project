
/*function meant to swap what objective is shown inside the objectives display based on mouse hover*/
function ObjSwap(objNum){
    /*makes a variable out of the object text display ID*/
    objTxt = document.getElementById("ObjTxt");
    
    /*if the mouse is hovering over the 1st objective*/
    if(objNum == 1){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Follow a software development process to analyze a problem and to design, build and test software solutions.";
    }

    /*if the mouse is hovering over the 2nd objective*/
    else if(objNum == 2){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Demonstrate software development skills using more than one programming language and development environment.";
    }

    /*if the mouse is hovering over the 3rd objective*/
    else if(objNum == 3){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Implement data-driven solutions.";
    }

    /*if the mouse is hovering over the 4th objective*/
    else if(objNum == 4){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Design and implement software solutions for mobile devices, embedded systems and/or multiple platforms.";
    }

    /*if the mouse is hovering over the 5th objective*/
    else if(objNum == 5){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Document the planning and development of software applications using industry standard tools, techniques and processes.";
    }

    /*if the mouse is hovering over the 6th objective*/
    else if(objNum == 6){
        /*Changes the text inside the objective display*/
        objTxt.innerHTML = "Within software solutions describe, implement and analyze data structure techniques such as lists, trees, hash tables and graphs, along with sorting and searching algorithms.";
    }

}

/*Function that sets the objective display back to a defualt text once the mouse is no longer hovering any of the objective tabs*/
function defaultObjTxt(){
    /*Changes the text inside the objective display back to the instructions*/
    document.getElementById("ObjTxt").innerHTML = "Hover over the tabs to see each objective.";
}