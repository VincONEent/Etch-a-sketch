
let nbr_case = 0 ;
let user_choice = 0 ;


let container_width = 960 ;
let container_height = 960 ;


nbr_case = user_choice*user_choice;

const container = document.querySelector('#container');
let height = 0;
let width = 0 ;


function setGrid()
{
    //The number of case the user chose is only what is gonna appear in a lign or a column
    //to get the full number of cases in the grid, you need to put user choice to the square
    nbr_case = user_choice*user_choice;
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
    
        //adding the div to the container
        container.appendChild(newDiv);
    }
    for(let i=0 ; i<nbr_case ; i++)
    {
        document.getElementsByClassName('miniDiv')[i].addEventListener('mouseover', (e)  => change(i));
    }
}

//Connect every miniDiv to a function
const choice = document.getElementById('user_imput');
choice.addEventListener('click',(e) => getNewGrid());

function change(index){
    document.getElementsByClassName('miniDiv')[index].style.backgroundColor="black";
}

function getNewGrid(){
    let choice = prompt("Chose the size of the grid (maximum 100) : ");
    let intChoice = Number(choice);
    if( intChoice > 100)
    {
        intChoice = 100 ; //If the user put a number > 100 set the limit for him
    }
    user_choice = intChoice;
    console.log(user_choice);
    setGrid();
}