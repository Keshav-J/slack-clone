export class User {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    displayPicture: string;
    phoneNumber: number;
    email: string;

    constructor(id: number,
                firstName: string,
                lastName: string,
                isActive: boolean,
                displayPicture: string,
                phoneNumber: number,
                email: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
        this.displayPicture = displayPicture;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
