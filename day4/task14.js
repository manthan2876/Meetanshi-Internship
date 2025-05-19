const row = parseInt(prompt("Enter number of row: "));

let flag= false;
for(let i = 0; i<row;i++){
    let str = "";
    const boxes = parseInt(prompt("Enter number of boxes for row : "));
    for(let j=0; j<boxes;j++){
        str+=`${flag ? 1 : 0} `;
        flag = !flag;
    }
    console.log(str);
    flag = boxes%2!==0 ? flag : !flag;
}