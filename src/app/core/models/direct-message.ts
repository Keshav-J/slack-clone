import { File } from './file';
import { Message } from './message';

export class DirectMessage {
    userId: string;
    isDisplayed: boolean;
    messages: Message[];
    pinnedIds: string[];
    files: File[];

    constructor(userId: string,
                isDisplayed: boolean,
                messages: Message[],
                pinnedIds: string[],
                files: File[]) {
        this.userId = userId;
        this.isDisplayed = isDisplayed;
        this.messages = messages;
        this.pinnedIds = pinnedIds;
        this.files = files;
    }
}
