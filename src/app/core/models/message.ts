export class Message {
    id: number;
    userId: string;
    msg: string;
    time: Date;

    constructor(id: number,
                userId: string,
                msg: string,
                time: Date) {
        this.id = id;
        this.userId = userId;
        this.msg = msg;
        this.time = time;
    }
}
