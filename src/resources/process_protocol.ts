import { Resource } from "../api/resource";
import { Action } from "./action";
import { API } from "../api/api";
import { ProtocoloProcessual } from "../models/ProtocoloProcessual";
import * as fs from 'fs';

export class ProcessProtocol extends Resource {

    protected action: Action;

    getResourceEndpoint() {
        return 'process-protocols';
    }

    constructor(API: API, action: Action) {
        super(API);
        this.action = action;
    }

    /**
     * consultarPorId
     */
    public async consultarPorId(id: number): Promise<any> {
        return await this.getAPI().get(`${this.getResourceEndpoint()}/${id}`, {}, {}, true);
    }

    /**
     * cadastrarNovoProtocolo
     */
    public async cadastrarNovoProtocolo(protocol: ProtocoloProcessual): Promise<any> {

        let attachs = null;

        if (protocol.peticao) {

            if (!attachs) {
                attachs = [];
            }

            const file_path = protocol.peticao.arquivo;

            if (!fs.existsSync(file_path)) {
                throw `O caminho do arquivo informado é inválido para a petição (${file_path}).`;
            }

            attachs.push({ field_name: 'peticao', files: file_path });
            delete protocol.peticao['arquivo'];
        }

        if (protocol.documentos) {

            if (!attachs) {
                attachs = [];
            }

            if (protocol.documentos.length) {
                const files = protocol.documentos.map((doc) => {
                    const file_path = doc.arquivo;

                    if (!fs.existsSync(file_path)) {
                        throw `O caminho do arquivo informado é inválido (${file_path}).`;
                    }

                    delete doc['arquivo'];
                    return file_path;
                });

                attachs.push({ field_name: 'documentos', files: files });
            }
        }

        return await this.getAPI()
            .post(
                `${this.action.getResourceEndpoint()}/${this.getResourceEndpoint()}`,
                protocol,
                {},
                {},
                attachs,
                true
            );
    }
}