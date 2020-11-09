export class File {
    id: number;
    name: string;
    sender_name: string;
    time: string;
    preview_image: string;

    constructor(id: number,
                name: string,
                sender_name: string,
                time: string,
                preview_image: string) {
        this.id = id;
        this.name = name;
        this.sender_name = sender_name;
        this.time = time;
        this.preview_image = preview_image;
    }
}