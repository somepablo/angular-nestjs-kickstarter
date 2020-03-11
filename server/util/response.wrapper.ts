export class ResponseWrapper<T> {

    private data: T;
    private messages: string[];

    constructor(data?: T) {
        this.data = data;
        this.messages = [];
    }

    public addMessage(message: string) {
        this.messages.push(message);
    }

}