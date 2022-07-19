// import {somma} from "./test"

// somma(10, 5)
// function somma()

let d = new Date()


type Result = "pass" | "fail"

function verify(result:Result):boolean {
    if (result === "pass") {
        return true
    } else {
        return false
    }
}

// function creaRiga(e): {
//     let div = document.createElement("div")
//     div.innerHTML = e.nome
//     document.body.appendChild(div)
// }


// verify("ciao")



// let x = creaRiga({nome:"test"})


//Lista tipologia
let any:any = 3
any = "ciao"
any = {
    name:"Test"
}

let x:number = 5
let s:string = "TEST"
let b:boolean = false

let mulitpleType:number|string|null = 3
mulitpleType = "3"
mulitpleType = null
// mulitpleType = true

let a:any[] = [1, "a"]
let arr:number[] = [1, 2, 3]

let res:string = f(s)
function f(p:string):string { return "test" + p}

type Valore = "Vero" | "Falso"
function g(p:Valore){}
g("Vero")
// g("vero")

// function addEventListener(f:Function){}

fetch("").then(res=>res.json()).then(
    function(res:{name:string, age:number}){
        res.name
        res.age
    }
)

let v = 5
document.getElementById("test")!.innerHTML = String(v)

let testDiv = document.getElementById("test")
h(testDiv)
function h(e:HTMLElement) { 

        document.body.append(e)

}

function gioco(g1:number, g2:number){}