export class File {
    id: number;
    name: string;
    senderName: string;
    time: string;
    previewImage: string;

    constructor(id: number,
                name: string,
                senderName: string,
                time: string,
                previewImage: string) {
        this.id = id;
        this.name = name;
        this.senderName = senderName;
        this.time = time;
        this.previewImage = previewImage;
    }
}
