import { Resource } from "../resource";
import { API } from "../api";

export class ResourceResult extends Resource {

    protected resource_path: string;

    getResourceEndpoint() {
        return this.resource_path;
    }

    constructor(API: API, resource: Resource, resource_id: number) {
        super(API);
        this.resource_path = `${resource.getResourceEndpoint()}/${resource_id}/results`;
    }

}