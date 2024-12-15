class Hewan {
    warna
    keahlian
    constructor(nama) {
        this.nama = nama
    }

    set newColor(color) {
        this.warna = color 
    }

    set newSkill(skill) {
        this.keahlian = skill
    }

    get detail() {
        return `hi saya ${this.nama}, saya berwarna ${this.warna}, keahlian saya ${this.keahlian}`
    }
}

const kucing = new Hewan('jojo')
kucing.newColor = "red"
kucing.newSkill = "menggonggong"

console.table(kucing.detail)