interface TaskType {
    id: number;
    title: string;
    created_at: Date;
    update_at: Date;
    status: boolean;
}

export default class TaskModel implements TaskType {

    /* 
        Properties
    */
    readonly id: number;
    public title: string;
    readonly created_at: Date;
    public update_at: Date;
    public status: boolean;

    constructor(id: number, title: string, created_at: Date, update_at: Date, status: boolean) {
        this.id = id;
        this.title = title;
        this.created_at = created_at;
        this.update_at = update_at;
        this.status = status;
    }

    /* 
        Title getter and setter
    */
    getTitle = (): string => {
        return this.title;
    }
    setTitle = (title: string): TaskModel => {
        this.title = title;

        return this
    }

    /* 
        Created_at getter
    */
    getCreatedAt = (): Date => {
        return this.created_at;
    }

    /* 
        Update_at getter and setter
    */
    getUpdateAt = (): Date => {
        return this.update_at;
    }
    setUpdateAt = (update_at: Date): TaskModel => {
        this.update_at = update_at;

        return this
    }

    /* 
        Status getter and setter
    */
    getStatus = (): boolean => {
        return this.status;
    }
    setStatus = (status: boolean): TaskModel => {
        this.status = status;

        return this
    }

}