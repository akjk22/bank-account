// back end logic
function bankAccount(name, initialDeposit, deposit, withdrawal) {
    this.name = name;
    this.initialDeposit = initialDeposit;
    this.deposit = deposit;
    this.withdrawal = withdrawal;


};

bankAccount.prototype.register = function() {
    return "You're registered " + this.name;
};

bankAccount.prototype.deposit = function() {
    
};

bankAccount.prototype.withdraw = function() {
    
};

bankAccount.prototype.showBalance = function() {

};



// user interface logic
$(document).ready(function() {
    $("form#register").submit(function(event) {
        event.preventDefault();
        var name = $("#full-name").val();
        var initialDeposit = $("#initial-deposit").val();
        var deposit = $("#deposit").val();
        var withdrawal = $("#withdraw").val();
        
        var bankAccount1 = new bankAccount(name, initialDeposit, deposit, withdrawal)
        console.log("This our first customers name on his bank account " + bankAccount1.name);
        console.log(bankAccount1.register());

    })
// 
});