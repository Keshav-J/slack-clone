import { File } from './file';
import { Message } from './message';

export class Channel {
    id: string;
    name: string;
    topic: string;
    description: string;
    isGroup: boolean;
    created: Date;
    memberIds: string[];
    messages: Message[];
    pinnedIds: string[];
    files: File[];

    constructor(id: string,
                name: string,
                topic: string,
                description: string,
                isGroup: boolean,
                created: Date,
                memberIds: string[],
                messages: Message[],
                pinnedIds: string[],
                files: File[]) {
        this.id = id;
        this.name = name;
        this.topic = topic;
        this.description = description;
        this.isGroup = isGroup;
        this.created = created;
        this.memberIds = memberIds;
        this.messages = messages;
        this.pinnedIds = pinnedIds;
        this.files = files;
    }
}
