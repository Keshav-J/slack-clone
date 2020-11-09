export class User {
    id: number;
    first_name: string;
    last_name: string;
    isActive: boolean;
    display_picture: string;

    constructor(id: number,
                first_name: string,
                last_name: string,
                isActive: boolean,
                display_picture: string) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.isActive = isActive;
        this.display_picture = display_picture;
    }
}