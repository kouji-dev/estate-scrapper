import {TotalProperties} from "./TotalProperties";
import {Chunk} from "./Chunk";
import axios, {AxiosInstance} from "axios";

export abstract class BasePropertyApi<Response> implements TotalProperties, Chunk<Response> {

    protected client: AxiosInstance;

    protected constructor(baseURL: string) {
        this.client = axios.create({baseURL});
    }

    abstract getTotalProperties(): Promise<number>;

    abstract getChunk(skip: number, take: number): Promise<Response[]>;
}
