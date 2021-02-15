class Enemy {
    constructor(name,speed,healthPoint,attackPoint,isDead) {
        this.name = name;
        this.speed = speed;
        this.healthPoint = healthPoint;
        this.attackPoint = attackPoint;
        this.isDead = isDead;
    }
    attack () {
        return `${this.name} mempunyai kecepatan ${this.speed} menyerang dengan damage ${this.attackPoint}`
    }
    confused () {
        this.healthPoint -=50
        if (this.healthPoint == 0) {
            this.isDead == true
            return `${this.name} sudah mati`
    } else {
        return `sisa HP ${this.name} adalah ${this.healthPoint}`
    }
}
}

class Zombie extends Enemy {
    constructor (name,speed,healthPoint,attackPoint,isDead) {
        super (name,speed,healthPoint,attackPoint,isDead);
    }
    jump () {
        let jarakLompat = this.attackPoint * this.speed
        return `${this.name} akan melakukan jump sejauh ${jarakLompat}`
    }
    superJump () {
        let jarakLompatJauh = (this.attackPoint * this.speed) + 500
        return `${this.name} akan melakukan super jump sejauh ${jarakLompatJauh}`
    }
}

let Zombie1 = new Zombie ("Nemesis",20,250,50)
console.log(Zombie1.attack())
console.log(Zombie1.confused())
console.log(Zombie1.jump())
console.log(Zombie1.superJump())

class Pocong extends Enemy {
    constructor (name,speed,healthPoint,attackPoint,isDead) {
        super (name,speed,healthPoint,attackPoint,isDead);
    }
    walk () {
        let jarakJalan = this.attackPoint + this.healthPoint 
        return `${this.name} akan berjalan sejauh ${jarakJalan} unit`
    }
    running () {
        let jarakLari = (this.attackPoint + this.healthPoint) * this.speed
        return `${this.name} akan berlari sejauh ${jarakLari} unit`
    }
}

let Pocong1 = new Pocong ("Setan Kredit",5,50,120)
console.log(Pocong1.attack())
console.log(Pocong1.confused())
console.log(Pocong1.walk())
console.log(Pocong1.running())