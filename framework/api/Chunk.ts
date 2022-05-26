export interface Chunk<Response> {
    getChunk(skip: number, take: number): Promise<Response[]>;
}
