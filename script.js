


let nbr_case = 0 ;
let user_choice = 0 ;


let container_width = 960 ;
let container_height = 960 ;


// for the purpose of starting the project, let's SET a value to user_choice
user_choice = 16;


//The number of case the user chose is only what is gonna appear in a lign or a column
//to get the full number of cases in the grid, you need to put user choice to the square
nbr_case = user_choice*user_choice;

const container = document.querySelector('#container');

for(let i=0 ; i<nbr_case ; i++ )
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('internal_div');
    newDiv.style.height ="60px"  ;
    newDiv.style.width = "60px";
    /*
    newDiv.style.height = container_height / user_choice ;
    newDiv.style.width = container_width / user_choice ;
    */
    newDiv.style.border = "black";
    //newDiv.style.backgroundColor = "black";
    newDiv.textContent ="abc";
    
    //newDiv.style.border = 3px ;
    container.appendChild(newDiv);
   // console.log("A div was created : "+ i + " with a width of : "+ (container_width / user_choice));

}
