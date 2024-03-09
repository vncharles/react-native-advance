enum TriangleType {
    Normal = "Thường",
    Isosceles = "Cân",
    Equilateral = "Đều",
    NotTriangle = "Không phải tam giác"
}

export class Triangle {
    private _sideA: number;
    private _sideB: number;
    private _sideC: number;

    constructor();
    constructor(sideA: number, sideB: number, sideC: number);
    constructor(sideA?: number, sideB?: number, sideC?: number) {
        this._sideA = sideA || 0;
        this._sideB = sideB || 0;
        this._sideC = sideC || 0;

        // Kiểm tra ràng buộc và gán giá trị mặc định nếu vi phạm
        if (this.isInvalidTriangle()) {
            this._sideA = this._sideB = this._sideC = 0;
        }
    }

    get sideA(): number {
        return this._sideA;
    }

    set sideA(value: number) {
        if (value > 0) {
            this._sideA = value;
        }
    }

    get sideB(): number {
        return this._sideB;
    }

    set sideB(value: number) {
        if (value > 0) {
            this._sideB = value;
        }
    }

    get sideC(): number {
        return this._sideC;
    }

    set sideC(value: number) {
        if (value > 0) {
            this._sideC = value;
        }
    }

    private isInvalidTriangle(): boolean {
        return this._sideA + this._sideB <= this._sideC ||
            this._sideA + this._sideC <= this._sideB ||
            this._sideB + this._sideC <= this._sideA;
    }

    calculatePerimeter(): number {
        return this._sideA + this._sideB + this._sideC;
    }

    calculateArea(): number {
        const s = this.calculatePerimeter() / 2;
        return Math.sqrt(s * (s - this._sideA) * (s - this._sideB) * (s - this._sideC));
    }

    getTriangleType(): TriangleType {
        if (this.isInvalidTriangle()) {
            return TriangleType.NotTriangle;
        } else if (this._sideA === this._sideB && this._sideB === this._sideC) {
            return TriangleType.Equilateral;
        } else if (this._sideA === this._sideB || this._sideB === this._sideC || this._sideA === this._sideC) {
            return TriangleType.Isosceles;
        } else {
            return TriangleType.Normal;
        }
    }

    toString(): string {
        const triangleType = this.getTriangleType();
        const perimeter = this.calculatePerimeter();
        const area = this.calculateArea();

        return `Tam giác: ${this._sideA}, ${this._sideB}, ${this._sideC} | Kiểu: ${triangleType} | Chu vi: ${perimeter.toFixed(2)} | Diện tích: ${area.toFixed(2)}`;
    }
}
