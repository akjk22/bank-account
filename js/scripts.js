console.log("Hello world");






// user interface logic
$(document).ready(function() {
    $("form#register").submit(function(event) {
        event.preventDefault();
        var name = $("#full-name").val();
        var initialDeposit = $("#initial-deposit").val();
        var deposit = $("#deposit").val();
        var withdrawal = $("#withdraw").val();
        // console.log(name, initialDeposit, deposit, withdrawal);
    })
// 
});