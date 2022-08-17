"use strict";

function CircularArray(capacity) {
    this._capacity = capacity;
    this._list = [];
    this._count = 0;
    this._head = 0;
}

const index = (that) => (i) => {
    return (that._head + i) % that._capacity;
}

const check = (that) => (i) => {
    if (i < 0) throw new Error(`invalid index ${i} for size ${that._count}`);

    if (i >= that._count) throw new Error(`invalid index ${i} for size ${that._count}`);
}


CircularArray.prototype.get = function (i) {
    check(this)(i);
    return this._list[index(this)(i)];
}

CircularArray.prototype.count = function(){
    return this._count;
}

CircularArray.prototype.push = function(item){
    if(this._count === this._capacity)
        throw new Error("array is full, cannot push");

    this._list[index(this)(this._count)] = item;
    this._count++;
}

CircularArray.prototype.shift = function(){
    if(this._count === 0) throw new Error("array is empty, cannot shift");

    // if(this._head === this._capacity) this._head = 0;

    const ret = this._list[this._head];
    this._head = index(this)(1);
    this._count--;
    return ret;
}

CircularArray.prototype.swap = function(l, r) {
    const temp = this.get(l);
    this._list[index(this)(l)] = this.get(r);
    this._list[index(this)(r)] = temp;
}

module.exports = CircularArray;