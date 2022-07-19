// let arr = [ 7, 8, 9, 10, 11]
//resultArray = [6]

// function f(el){
//     el++
//     return el > 5
// }

arr.forEach((e, i)=>{
    //operazioni con i dati dell'array
    let table = document.getElementById("tabella")
    table.append(document.createElement("tr").append(document.createElement("td").innerHTML= e))
})

let doppio = arr.map((e, i)=>{
    return e*2
})

let filteredArr = arr.filter((e, i, curretnArr)=>{
    return e % 2 == 0
})

//NON È COSÌ LA CLASSE ARRAY
class ArrayCustom {
    constructor(arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]){
        this.lista = arr
    }
    forEach(f) {
        for (let i = 0; i < this.lista.length; i++) {
            f(this.lista[0], i, this.lista)
        }
    }

    filter(f) {
        let resultArray = []
        for (let i = 0; i < this.lista.length; i++) {
            if(f(this.lista[i], i)){
                resultArray.push(this.lista[i])
            }
        }
        return resultArray
    }
    filter(f){
        let resultArray = []
        let arrToManipulate = this.lista
        let foundElement = undefined
        while(foundElement = arrToManipulate.find(f)){
            arrToManipulate = arrToManipulate.slice(arrToManipulate.findIndex(f))
            resultArray.push(foundElement)
        }
        return resultArray
    }

    reduce(f){
        let initialValue = this.lista[0]
        let total = initialValue
        for(let i = 1; i < this.lista.length; i++){
            total = f(total, this.lista[i])
        }
        return total
    }

    reduceRight(f){
        let total = this.lista[this.lista.length - 1]
        for(let j = this.lista.length-2; j >= 0; j--){
            totla = f(total, this.lista[j])
        }
        return total
    }

    sort(f = (a, b)=>{return a.toString() < b.toString()}){
        let valoreMinimo = this.lista[0]
        let indiceMinimo = 0
        let indiceAttualeOrdinato = 0
        let posizioneDiPartenzaFor = 1
        for(let k = posizioneDiPartenzaFor; k < this.lista.length; k++) {
            if(f(valoreMinimo, this.lista[k]) ) {
                valoreMinimo = this.lista[k]
                indiceMinimo = k
            }

            if(k == this.lista.length-1) {
                let elementoDaSpsotare = this.lista[indiceAttualeOrdinato]
                this.lista[indiceAttualeOrdinato] = this.lista[indiceMinimo]
                this.lista[indiceMinimo] = elementoDaSpsotare

                indiceAttualeOrdinato++ //al prossimo giro completo del for troveremo il successivo elemento in ordine

                posizioneDiPartenzaFor++
                k = posizioneDiPartenzaFor
            }
        }
    }
}


// function doppio(ele) {

// }




let arr = [7, 8, 9, 10, 11]
arr.reduce((tot, el)=>{
    return tot + el
})

/*FETCH*/
// let p = new Promise((succ, err)=>{
//     //////
//     //////
//     //////
//     //////
//     succ(dati) //dat type Response
// })

// class Promise{
//     then(f){
//         this.thenFunction = f
//         return this
//     }
//     succ(data){
//         this.status = "completed"
//         this.thenFunction(data)
//     }
// }


// p.then((res)=>{

// }).then
let url = "users/"
// let p = fetch(url) //restituisce una promise che restituise una response
// p.then((res)=>{})

// //
// let res = await p // await fetch
// //res è di tipo Response
// let r = await fetch()

let options = {
    method: "POST",
    headers: {
        'Accept': 'application/json', 
        'Content-type': 'application/json' 
    },
    body: JSON.stringify({nome: "flavio"})
}

fetch(url, options).then((response)=>{
    console.log(response)
    if(response.ok){
        // let resultP = response.json() //restituisce una promise
        // return resultP
        let result = await response.json() //restituisce i dati
        result.forEach(()=>{})
    } else {
        alert("Errore fetch");
    }
})

fetch(url).then((res)=>{return res.json()}).then((result)=>{

})

let users
    fetch(url).then(res=> res.json()).then((res)=>{
        users = res
        creaDom()
    })

    function creaDom(){
        if(users){
            users.fo
        } else {
            console.log("Array ancora vuoto");
        }
    }


async function readData() {
    let response = await fetch(url)
    let result = await response.json()
    creaDom(result)
}