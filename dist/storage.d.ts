import { AgridCustomStorage } from './types';
type AgridStorageContents = {
    [key: string]: any;
};
export declare class AgridRNStorage {
    memoryCache: AgridStorageContents;
    storage: AgridCustomStorage;
    preloadPromise: Promise<void> | undefined;
    constructor(storage: AgridCustomStorage);
    persist(): void;
    getItem(key: string): any | null | undefined;
    setItem(key: string, value: any): void;
    removeItem(key: string): void;
    clear(): void;
    getAllKeys(): readonly string[];
    populateMemoryCache(res: string | null): void;
}
export declare class AgridRNSyncMemoryStorage extends AgridRNStorage {
    constructor();
}
export {};
