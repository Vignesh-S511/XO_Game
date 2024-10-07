
let store = "X";
function display(buttonId)
{
    const button = document.getElementById(buttonId);
    console.log(button);
    console.log("DDDDDD"+ button.innerHTML);
    if(button.innerHTML === "")
    {
        button.innerHTML = store;
        if(store === "X")
        {
            store = "O";
        }
        else{
            store = "X";
        }
    }
    functionality();
}
function disableAllButtons() {
    for (let i = 1; i <= 9; i++) 
    {
        document.getElementById("buttonId" + i).disabled = true;
    }
}
function functionality()
{
    const button1 = document.getElementById("buttonId1").innerHTML;
    const button2 = document.getElementById("buttonId2").innerHTML;
    const button3 = document.getElementById("buttonId3").innerHTML;
    const button4 = document.getElementById("buttonId4").innerHTML;
    const button5 = document.getElementById("buttonId5").innerHTML;
    const button6 = document.getElementById("buttonId6").innerHTML;
    const button7 = document.getElementById("buttonId7").innerHTML;
    const button8 = document.getElementById("buttonId8").innerHTML;
    const button9 = document.getElementById("buttonId9").innerHTML;
    
    if (button1 === "X" && button5 === "X" && button9 === "X") 
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
        
    } 
    else if(button1 === "O" && button5 === "O" && button9 === "O")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        disableAllButtons();
    }

    
    if(button1 === "X" && button2 === "X" && button3 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
    }
    else if(button1 === "O" && button2 === "O" && button3 === "O")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        disableAllButtons();
    }

    if(button1 === "X" && button2 === "X" && button3 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
    }
    else if(button1 === "O" && button2 === "O" && button3 === "O")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        
        disableAllButtons();
    }

    if(button4 === "X" && button5 === "X" && button6 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
    }
    else if(button4 === "O" && button5 === "O" && button6 === "O")          
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        disableAllButtons();
    }
    
    if(button7 === "X" && button8 === "X" && button9 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
    }
    else if(button7 === "O" && button8 === "O" && button9 === "O")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        disableAllButtons();
    }

    if(button1 === "X" && button4 === "X" && button7 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        console.log("Player X wins!");
        disableAllButtons();
    }
    else if(button1 === "X" && button4 === "X" && button7 === "X")
    {
        document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
        console.log("Player O wins!");
        disableAllButtons();
    }

    if(button2 === "X" && button5 === "X" && button8 === "X")
        {
            document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
            console.log("Player X wins!");
            disableAllButtons();
        }
        else if(button2 === "O" && button5 === "O" && button8 === "O")
        {
            document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
            console.log("Player O wins!");
            disableAllButtons();
        }

    if(button3 === "X" && button6 === "X" && button9 === "X")
    {
        console.log("Player X wins!");
        document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
        disableAllButtons();
    }
            else if(button3 === "O" && button6 === "O" && button9 === "O")
            {
                console.log("Player O wins!");
                document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
                disableAllButtons();
            }
    //  button1 = document.getElementById("buttonId1").innerHTMl;

    if(button3 === "X" && button5 === "X" && button7 === "X")
        {
            document.getElementsByClassName("output")[0].innerHTML = "Player X won!";
            console.log("Player X wins!");
            disableAllButtons();
        }
        else if(button3 === "O" && button5 === "O" && button7 === "O")          
        {
            document.getElementsByClassName("output")[0].innerHTML = "Player O won!";
            console.log("Player O wins!");
            disableAllButtons();
        }
    
}
