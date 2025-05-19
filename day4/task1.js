const action = prompt("Enter action(Stop/ Slow down/ Go): ");

if(action === "Stop")
    console.log("Red");
else if (action === "Go slow")
    console.log("yellow");
else if (action === "Go")
    console.log("Green");
else
    console.log("Enter valid action");