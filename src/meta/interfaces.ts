
export interface IPopSet<T> extends Set<T>{
    pop():T;
    shift():T;
}
