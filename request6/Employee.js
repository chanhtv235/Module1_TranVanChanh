function Employee() {
    this.setName = function f(name) {
        this.name = name;
    }
    this.getName = function () {
        return this.name;
    }
    this.setIdCard = function (IdCard) {
        this.IdCad = IdCard;
    }
    this.getIdCard = function () {
        return this.IdCad;
    }
    this.setBirthDay = function (birthday) {
        this.birthDay =birthday;
    }
    this.getBirthDay = function () {
        return this.birthDay;
    }

    this.setEmail = function (email) {
        this.email = email
    }
    this.getEmail = function () {
        return this.email;
    }
    this.setAddress = function (address) {
        this.address = address;
    }
    this.getAddress = function () {
        return this.address;
    }
    this.setPosition = function (position) {
        this.position = position;
    }

    this.payMoney = function () {
        let total=0;
        if(this.typeService==="Villa")
            total=this.rentDays*500*(100-this.discount)/100;
        else if (this.typeService==="House")
            total =this.rentDays*300*(100-this.discount)/100;
        else
            total=this.rentDays*100*(100-this.discount)/100;
        return total;
    }
    this.toPay = function (Custommer) {
        return Custommer.payMoney()
    }

}
