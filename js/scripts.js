// back end logic
function bankAccount(name, initialDeposit, deposit, withdrawal, balance) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.deposit = deposit;
    this.withdrawal = withdrawal;
    this.balance = balance;



};

bankAccount.prototype.register = function() {
    return "You're registered " + this.name;
};

bankAccount.prototype.addDeposit = function() {
    return this.balance = parseInt(this.balance) + parseInt(this.deposit);
};

bankAccount.prototype.subtractWithdraw = function() {
    
};

bankAccount.prototype.showBalance = function() {
    return "This is your current balanace " + this.balance;
};



// user interface logic
$(document).ready(function() {
    $("form#register").submit(function(event) {
        event.preventDefault();
        var name = $("#full-name").val();
        var initialDeposit = $("#initial-deposit").val();
        var deposit = $("#deposit").val();
        var withdrawal = $("#withdraw").val();
        var balance = 0.00;
        
        var bankAccount1 = new bankAccount(name, initialDeposit, deposit, withdrawal, balance)
        console.log("This our first customers name on his bank account " + bankAccount1.name);
        console.log(bankAccount1.register());
        console.log(bankAccount1.addDeposit());
        console.log(bankAccount1.showBalance());
    })
});