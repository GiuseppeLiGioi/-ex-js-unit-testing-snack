/*
🏆 Snack 7
Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.

Creare un test che verifichi le seguenti descrizioni:

👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"


Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).
*/
    
    
const {getInitials, createSlug, average, createSlugString, isPalindrome, createSlugTitle} = require("./test-snack.js")
    

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