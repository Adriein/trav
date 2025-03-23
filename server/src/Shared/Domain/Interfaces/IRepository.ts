export interface IRepository<T> {
    save(entity: T): Promise<void>;
    find(): Promise<T[]>;
}