

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

function findPostById(arrPosts, id){
    if(isNaN(id)){
        throw new Error("l'id deve essere un numero intero")
    }
    const findPost = arrPosts.find((p) => p.id === parseInt(id));
    return findPost
}

function addPost(arrIniziale, nuovoPost){
    for(let i = 0; i < arrIniziale.length; i++){
        if(nuovoPost.title === arrIniziale[i].title){
            throw new Error("impossibile aggiungere! titolo uguale")
        } else if(nuovoPost.slug === arrIniziale[i].slug ) {
          throw new Error("impossibile aggiungere! slug uguale")
    }         
    }
    arrIniziale.push(nuovoPost)
}

function removePost(arrIniziale, idDaRimuovere){
    return arrIniziale.filter((p) => p.id !== idDaRimuovere)
     

}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlugString,
    isPalindrome,
    createSlugTitle,
    findPostById,
    addPost,
    removePost
}