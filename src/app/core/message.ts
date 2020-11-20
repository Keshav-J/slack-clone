export class Message {
    id: number;
    userId: number;
    msg: string;
    time: Date;

    constructor(id: number,
                userId: number,
                msg: string,
                time: Date) {
        this.id = id;
        this.userId = userId;
        this.msg = msg;
        this.time = time;
    }
}
