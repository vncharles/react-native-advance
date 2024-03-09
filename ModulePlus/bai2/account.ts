class Account {
    private _accountNumber: number;
    private _name: string;
    private _balance: number;
    private readonly RATE: number = 0.035;

    constructor(accountNumber: number = 999999, name: string = "Chưa xác định", balance: number = 50000) {
        this._accountNumber = accountNumber > 0 ? accountNumber : 999999;
        this._name = name !== "" ? name : "Chưa xác định";
        this._balance = balance >= 50000 ? balance : 50000;
    }

    get name(): string {
        return this._name;
    }

    get accountNumber(): number {
        return this._accountNumber;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number): boolean {
        if (amount > 0) {
            this._balance += amount;
            return true;
        }
        return false;
    }

    withdraw(amount: number, fee: number): boolean {
        if (amount > 0 && amount + fee <= this._balance) {
            this._balance -= amount + fee;
            return true;
        }
        return false;
    }

    addInterest(): void {
        this._balance += this._balance * this.RATE;
    }

    transfer(acc2: Account, amount: number): boolean {
        if (amount > 0 && this.withdraw(amount, 0)) {
            acc2.deposit(amount);
            return true;
        }
        return false;
    }

    toString(): string {
        const formatter = new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
        });

        return `Số tài khoản: ${this._accountNumber}, Tên tài khoản: ${this._name}, Số dư: ${formatter.format(this._balance)}`;
    }
}

export default Account;
