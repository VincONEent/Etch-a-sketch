
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
let height = 0;
let width = 0 ;
//Calcul of the size of a div given the choice of the size of the grid
height= container_height / user_choice;
width =container_width / user_choice;

for(let i=0 ; i<nbr_case ; i++ )
{
    //Creation of a new div
    const newDiv = document.createElement('div');
    //Setting the correct size to the div
    newDiv.style.height = height.toString() + "px" ;
    newDiv.style.width =  width.toString() + "px" ;
    newDiv.classList.add('miniDiv');
    //temporary tests
    newDiv.textContent ="abc";
    if((i%2 )===0)
    {
        newDiv.style.backgroundColor="purple";
    }
    else
        newDiv.style.backgroundColor="green";
    
    //adding the div to the container
    container.appendChild(newDiv);

}
/*
document.getElementsByClassName('miniDiv')[1].addEventListener('click', (e)=> console.log("That big line of code worked"));
document.getElementsByClassName('miniDIv').addEventListener('click', (e)=> console.log("That big line of code worked"));
*/

//Connect every miniDiv to a function
for(let i=0 ; i<nbr_case ; i++)
{
    document.getElementsByClassName('miniDiv')[i].addEventListener('click', (e)  => console.log("That big line of code worked"));
}

