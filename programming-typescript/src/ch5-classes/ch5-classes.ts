
type ClassConstructor<T> = new (...args: any[]) => T

export function withEZDebug <C extends ClassConstructor<{
        getDebugValue(): object
    }>> (Class: C) {
    return class extends Class {
        constructor(...args: any[]) {
            super(...args)
        }

        debug() {
            let name = Class.constructor.name;
            let value = this.getDebugValue()
            return name + '(' + JSON.stringify(value) + ')';
        }
    }
}