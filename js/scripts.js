// back end logic
function bankAccount(name, initialDeposit, deposit, withdrawal, balance) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.deposit = deposit;
    this.withdrawal = withdrawal;
    this.balance = balance;



};

bankAccount.prototype.initializeBalance = function() {
    return this.balance = this.initialDeposit;
}

bankAccount.prototype.addDeposit = function() {
    return this.balance = parseInt(this.balance) + parseInt(this.deposit);
};

bankAccount.prototype.subtractWithdraw = function() {
    return this.balance = parseInt(this.balance) - parseInt(this.withdrawal);
};

bankAccount.prototype.showBalance = function() {
    // return this.balance;
    // return "This is your current balance " + this.balance;
    // this.balance = this.initialDeposit;
    return this.balance;
    // return this.initialDeposit;
};



// user interface logic
$(document).ready(function() {
    $("form#register").submit(function(event) {
        event.preventDefault();
        var name = "" + $("#full-name").val();
        var initialDeposit = $("#initial-deposit").val();
        var deposit = $("#deposit").val();
        var withdrawal = $("#withdraw").val();
        var balance = 0.00;
        
        var bankAccount1 = new bankAccount(name, initialDeposit, deposit, withdrawal, balance)
        bankAccount1.initializeBalance();
        bankAccount1.addDeposit();
        bankAccount1.subtractWithdraw();

        // console.log(bankAccount1.showBalance());
        // console.log("This our first customers name on his bank account " + bankAccount1.name);
        // console.log(bankAccount1.initializeBalance());
        // console.log(bankAccount1.addDeposit());
        // console.log(bankAccount1.subtractWithdraw());
        // console.log(bankAccount1.showBalance());
        $("#show-balance").text("Your current balance is " + bankAccount1.showBalance());
    });
});