type Student = {
    id: string,
    name: string,
    age: number
}

interface StudentInterface {
    id: string,
    name: string,
    age: number
}

type Person = {
    socialSecNum: string
}

type Geschlecht = "männlich" | "weiblich" | "taucher"

type PersonStudent = Student & Person

const gs:Geschlecht = "weiblich"

interface StudentInterface {
    phone: string
}

const student1:PersonStudent = {
    id: "1",
    name: "Max",
    age: 25,
    socialSecNum:"21"
}

const student2:StudentInterface = {
        id: "1",
        name: "Max",
        age: 25,
        phone: "123456"
}

console.log(student2)
console.log(student1)