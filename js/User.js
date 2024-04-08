export class User {
    constructor(fName, lName, email, phone, id) {
        this._fName = fName;
        this._lName = lName;
        this._email = email;
        this._phone = phone;
        this._id = id;
    }
    get fName(){return this._fName;}
    get lName(){return this._lName;}
    get email(){return this._email;}
    get phone(){return this._phone;}
    get id(){return this._id;}

    set fName(fName) {
        this._fName = fName;
    }
    set lName(lName) {
        this._lName = lName;
    }
    set email(email) {
        this._email = email;
    }
    set phone(phone) {
        this._phone = phone;
    }
    set id(id) {
        this._id = id;
    }
    login() {
        
    }
    logout() {

    }
}