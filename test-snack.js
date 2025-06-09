

function getInitials(name, surname){
    const string = name.charAt(0).toUpperCase() + surname.charAt(0).toUpperCase()
    return string
} 
const createSlug = (string) =>  string.toLowerCase(); 


function average (arrNumb){
    const sommaNumeri = arrNumb.reduce((acc, num) => acc + num);
    const media = sommaNumeri / arrNumb.length;
    return media 
}

function createSlugString(string){
    const newString = string.split(" ").join("-")
    return newString
}

function isPalindrome(string){
    const newString = string.split("").reverse().join("")
    if(string === newString) {
        return true
    }
    return false
}

function createSlugTitle(title){
    const symbols = "@#|/%&$£"
    if(title === "" ){
        throw new Error("Errore titolo vuoto")
    } else {
        for (let i = 0; i < symbols.length; i++){
            if(title.includes(symbols[i])){
                throw new Error("il titolo contiene caratteri proibiti")
                
            }
        }
    }
   
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlugString,
    isPalindrome,
    createSlugTitle
}