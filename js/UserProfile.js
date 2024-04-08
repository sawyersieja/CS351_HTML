import { User } from "./User.js";

export class UserProfile extends User {
    constructor(fName, lName, email, phone, id, profilePicture, bio, interests) {
        super(fName, lName, email, phone, id);
        this._profilePicture = profilePicture;
        this._bio = bio;
        this._interests = interests;
    }
    get profilePicture() {return this._profilePicture;}
    get bio() {return this._bio;}
    get interests() {return this._interests;}

    set profilePicture(profilePicture) {
        this._profilePicture = profilePicture;
    }

    set bio(bio) {
        this._bio = bio;
    }

    set interests(interests) {
        if(!this._interests.includes(interests)) {
            this.interests.push(interests);
        }
    }
}