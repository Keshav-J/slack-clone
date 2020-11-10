export class User {
    id: number;
    first_name: string;
    last_name: string;
    isActive: boolean;
    display_picture: string;
    phone_number: number;
    email: string;

    constructor(id: number,
                first_name: string,
                last_name: string,
                isActive: boolean,
                display_picture: string,
                phone_number: number,
                email: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.isActive = isActive;
        this.display_picture = display_picture;
        this.phone_number = phone_number;
        this.email = email;
    }
}