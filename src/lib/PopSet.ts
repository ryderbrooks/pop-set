import { IPopSet } from '../meta/interfaces';



export class PopSet<T> extends Set<T> implements IPopSet<T> {
    shift(): T {
        for ( const item of
            this.values() ) {
            this.delete(item);
            return item;
        }
        throw new Error('cannot pop an empty set');
    }


    pop(): T {
        let lst: T[] | undefined = [ ...this.values() ];
        if( !lst.length ) {
            throw new Error('cannot pop an empty set');
        }
        const item: T = lst.pop() as T;
        this.delete(item);
        lst = undefined;
        return item;
    }
}