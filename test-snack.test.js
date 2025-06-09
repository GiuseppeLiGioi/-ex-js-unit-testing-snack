/*

*/
    
    
const {getInitials, createSlug, average, createSlugString, isPalindrome, createSlugTitle, findPostById} = require("./test-snack.js")
    

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario", "Rossi")).toBe("MR")
    expect(getInitials("Anna", "Verdi")).toBe("AV")
})




test('La funzione "createSlug" restituisce una stringa in lowercase.', () => {
    expect(createSlug("ROMA")).toBe("roma")
    expect(createSlug("BooLEAN")).toBe("boolean")
}) 



test('La funzione "average" calcola la media aritmetica di un array di numeri.', () => {
    expect(average([3,4,8])).toBe(5)
    expect(average([10,4,7])).toBe(7)
})



test('La funzione "createSlugString" sostituisce gli spazi con -.', () => {
    expect(createSlugString("Hello world")).toBe("Hello-world")
    expect(createSlugString("viva la sardegna")).toBe("viva-la-sardegna")
})




test('La funzione "isPalindrome" verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("anna")).toBeTruthy()
    expect(isPalindrome("radar")).toBeTruthy()
    expect(isPalindrome("giuseppe")).toBeFalsy()
})




test('La funzione "createSlugTitle" lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlugTitle("")).toThrow()
    expect(() => createSlugTitle("ciao@ciao")).toThrow()
})

let posts;
beforeEach(() => {
    posts = [
  {
    id: 1,
    title: "Ciao Mondo",
    slug: "ciao-mondo"
  },
  {
    id: 2,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript"
  },
  {
    id: 3,
    title: "Come creare uno slug",
    slug: "come-creare-uno-slug"
  }
]; 
})


afterEach(() => {
    posts = [];
})

test('La funzione "findPostById" restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({id: 2,title: "Introduzione a JavaScript",slug: "introduzione-a-javascript"})
    expect(() => findPostById(posts, "ciao")).toThrow()
    
})
