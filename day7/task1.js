const str1 = "Silent";
const str2 = "listen";

function areAnagrams(str1, str2){
    let flag = true;
    str1 = str1.toLowerCase();
    str2 = str2.split(" ").join("");
    str2 = str2.toLowerCase();
    if(str1.length === str2.length){
        for(let i=0;i<str1.length;i++){
            if(!str2.includes(str1[i])){
                flag=false;
                break;
            }
        }
    } else flag = false;
    return flag;
}

console.log(areAnagrams(str1,str2)? `String "${str1}" and "${str2}" are anagrams.` : `String "${str1}" and "${str2}" aren't anagrams.`);