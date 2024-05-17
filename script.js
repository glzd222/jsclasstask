class animal  {
    constructor (name,birthdate,gender){
        this.name=name
        this.birthdate=birthdate;
        this.gender=gender;
        this.age=this.getAge()
    }
        getAge(){
        return new Date().getFullYear() - this.birthdate;
        }
    }
    
    class cat extends animal{
        constructor(name,birthdate,gender,weight,color){
            super(name,birthdate,gender)
        this.weight=weight
        this.color=color
        this.getInfo=this.getInfo
    }
    getInfo(){
        return name is ${this.name}, birthdate is ${this.birthdate},color is ${this.color};
    }
    }
    const cat1 = new cat("Garfield",2020,"male","5kq","orange",)
    console.table(cat1)
    