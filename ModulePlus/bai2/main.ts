import Vehicle from './vehicle';
import Account from './account';

function main() {
    const account1 = new Account(72354, "Ted Murphy", 102.56);
    const account2 = new Account(69713, "Jane Smith", 40.00);
    const account3 = new Account(93757, "Edward Demsey", 759.32);

    const vehicle1 = new Vehicle(account1.name, "Xe hơi", 25000, 90);
    const vehicle2 = new Vehicle(account2.name, "Xe máy", 1500, 150);
    const vehicle3 = new Vehicle(account3.name, "Xe đạp", 500, 0);

    // Display account information
    console.log(account1.toString());
    console.log(account2.toString());
    console.log(account3.toString());

    // Display vehicle information
    console.log(vehicle1.toString());
    console.log(vehicle2.toString());
    console.log(vehicle3.toString());

    // Deposit money
    console.log("Gửi tiền vào tài khoản")
    account1.deposit(25.85);
    account2.deposit(500.00);

    // Display account information after deposit
    console.log("Thông tin tài khoản sau khi gửi tiền")
    console.log(account1.toString());
    console.log(account2.toString());

    // Withdraw money with fee
    console.log("Rút tiền từ tài khoản")
    account2.withdraw(430.75, 1.50);

    // Display account information after withdraw
    console.log("Thông tin tài khoản sau khi rút tiền")
    console.log(account2.toString());

    // Add interest
    console.log("Thêm lãi suất vào tài khoản")
    account3.addInterest();

    // Display account information after add interest
    console.log("Thông tin tài khoản sau khi thêm lãi suất")
    console.log(account3.toString());

    // Transfer money between accounts
    console.log("Chuyển tiền giữa các tài khoản")
    account2.transfer(account1, 100.00);

    // Display account information after transfer
    console.log("Thông tin tài khoản sau khi chuyển tiền")
    console.log(account1.toString());
    console.log(account2.toString());
}

main();
