export interface IMapper<D, M> {
    toModel(entity: D): M;

    toDomain(model: M): D;
}