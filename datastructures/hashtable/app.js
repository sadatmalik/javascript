class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        const currentBucket = this.data[index];

        if (currentBucket) {
            for (let kv of currentBucket) {
                if (kv[0] === key) {
                    return kv[1];
                }
            }
        }
        return undefined;
    }

    keys() {
        let keys = [];
        for (let bucket of this.data) {
            if (bucket) {
                for (let kv of bucket) {
                    keys.push(kv[0]);
                }
            }
        }
        return keys;
    }

    values() {
        let values = [];
        for (let bucket of this.data) {
            if (bucket) {
                for (let kv of bucket) {
                    values.push(kv[1]);
                }
            }
        }
        return values;
    }
}
