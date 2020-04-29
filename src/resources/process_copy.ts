import { Resource } from "../resource";
import { Action } from "./action";
import { API } from "../api";

export type Copy = {
    process_number: string, 
    auth_id: number
};

export class ProcessCopy extends Resource {

    protected action: Action;
    
    getResourceEndpoint() {
        return 'process-copies';
    }

    constructor(API: API) {
        super(API);
        this.action = new Action(API);
    }

    /**
     * getById
     */
    public async getById(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`);
    }

    /**
     * getNewCopy
     */
    public async getNewCopy(copy: Copy): Promise<any> {
        return await this.getAPI().post(`${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`, copy);
    }
}