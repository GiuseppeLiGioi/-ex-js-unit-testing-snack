


const { getInitials, createSlug, average, createSlugString, isPalindrome, createSlugTitle, findPostById, addPost, removePost } = require("./test-snack.js")


test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario", "Rossi")).toBe("MR")
    expect(getInitials("Anna", "Verdi")).toBe("AV")
})




test('La funzione "createSlug" restituisce una stringa in lowercase.', () => {
    expect(createSlug("ROMA")).toBe("roma")
    expect(createSlug("BooLEAN")).toBe("boolean")
})



test('La funzione "average" calcola la media aritmetica di un array di numeri.', () => {
    expect(average([3, 4, 8])).toBe(5)
    expect(average([10, 4, 7])).toBe(7)
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
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Introduzione a JavaScript", slug: "introduzione-a-javascript" })
    expect(() => findPostById(posts, "ciao")).toThrow()

})




describe("addPost", () => {
    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più.', () => {
        const newPost = { id: (posts.length + 1), title: "Introduzione a React", slug: "introduzione-a-react" }
        addPost(posts, newPost)
        expect(posts.length).toBe(4)
    })
    test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.', () => {
        const newPost = { id: (posts.length + 1), title: "ciao", slug: "introduzione-a-react" }
        addPost(posts, newPost) //inserisco il primo nuovo post
        expect(() => {
            addPost(posts, newPost); //tentativo di inserimento post uguale
        }).toThrow();
    })
})



describe("removePost", () => {
    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno.', () => {
        posts = removePost(posts, 1)
        expect(posts.length).toBe(2)

    })
})

/*
🎯 Snack 10 (Bonus): createSlug() – Incrementare lo slug se esiste già
Creare un test che verifichi la seguente descrizione:

👉 "Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già."
*/
function createDynamicSlug(slug, arr) {
    let counter = 0;
    let slugBase = slug;
    let newSlug = slug;
    for (let i = 0; i < arr.length; i++) {
        if (slug === arr[i].slug) {
            counter++;
            newSlug = `${slugBase}-${counter}`
            i = -1
        }
    }
    return newSlug
}
test('Se viene passato un array di post come secondo argomento, la funzione "createDynamicSlug" incrementa di 1 se lo slug esiste già.', () => {
    const result = createDynamicSlug("ciao-mondo", posts)
    expect(result).toBe("ciao-mondo-1")
})