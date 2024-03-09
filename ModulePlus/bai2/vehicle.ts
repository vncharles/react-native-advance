class Vehicle {
    private _owner: string;
    private _type: string;
    private _value: number;
    private _cylinderCapacity: number;

    constructor(owner: string, type: string, value: number, cylinderCapacity: number) {
        this._owner = owner;
        this._type = type;
        this._value = value >= 0 ? value : 0;
        this._cylinderCapacity = cylinderCapacity >= 0 ? cylinderCapacity : 0;
    }

    get owner(): string {
        return this._owner;
    }

    set owner(value: string) {
        this._owner = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value >= 0 ? value : 0;
    }

    get cylinderCapacity(): number {
        return this._cylinderCapacity;
    }

    set cylinderCapacity(value: number) {
        this._cylinderCapacity = value >= 0 ? value : 0;
    }

    calculateTax(): number {
        if (this._cylinderCapacity < 100) {
            return 0.01 * this._value;
        } else if (this._cylinderCapacity >= 100 && this._cylinderCapacity <= 200) {
            return 0.03 * this._value;
        } else {
            return 0.05 * this._value;
        }
    }

    toString(): string {
        return `Chủ xe: ${this._owner}, Loại xe: ${this._type}, Trị giá xe: ${this._value}, Dung tích xylanh: ${this._cylinderCapacity}`;
    }
}

export default Vehicle;
