// ------------------------------ VARIABLES ------------------------------ //

var $checkingAmount;
var $savingsAmount;

var $checkingAccDepositButton = $('#checking-deposit')[0];
var $checkingAccWithdrawButton = $('#checking-withdraw')[0];
var $savingsAccDepositButton = $('#savings-deposit')[0];
var $savingsAccWithdrawButton = $('#savings-withdraw')[0];

// ------------------------------ VARIABLES ------------------------------ //


var inputCheck = function(input) {
    if (input < 0) {
        alert('You cannot enter a negative number. Please try again.');
    } else if (input === 0) {
        alert('You cannot enter 0. Please try again.');
    } else if (isNaN(input)) {
        alert('That is not a number. Please try again.');
    } else if (input === '') {
        alert('You did not enter anything. Please try again.');
    } else {
        input = parseFloat(parseFloat(input).toFixed(2)); // ??? Why is a second parseFloat() need to wrap it?
        return input;
    }
};

// ---------------------------- ACCOUNT BALANCE ---------------------------- //

var accountBalance = function(accountId) {
    var balance = parseFloat(parseFloat($(accountId).html().replace('$', '')).toFixed(2));
    return balance;
};

// ---------------------------- DEPOSITS ---------------------------- //

// Deposit function
var deposit = function(amount, balance) {
    var inputAmount = inputCheck(amount);
    balance = (balance + inputAmount);
    return parseFloat(parseFloat(balance).toFixed(2));
};

// Deposits into CHECKINGS account
var checkingAccDeposit = function() {
    var $checAccBal = accountBalance('#checking-balance');
    $checkingAmount = $('#checking-amount').val(); // Amount entered by user
    var updatedBalance = deposit($checkingAmount, $checAccBal);
    $('#checking-balance').html('$' + updatedBalance); // Updates HTML

    accountColor();
};

// Deposits into SAVINGS account
var savingsAccDeposit = function() {
    var $savAccBal = accountBalance('#savings-balance');
    $savingsAmount = $('#savings-amount').val(); // Amount entered by user
    var updatedBalance = deposit($savingsAmount, $savAccBal);
    $('#savings-balance').html('$' + updatedBalance); // Updates HTML

    accountColor();
};

// ---------------------------- WITHDRAWALS ---------------------------- //

// Withdraw function
var withdraw = function(amount, balance) {
    var inputAmount = inputCheck(amount);
    if (balance < inputAmount) {
        alert('Insufficient funds');
    } else {
        balance = (balance - inputAmount);
    }
    return balance;
};

//Withdraw from checkings account
var checkingAccWithdraw = function() {
    var $checAccBal = accountBalance('#checking-balance');
    var $savAccBal = accountBalance('#savings-balance');
    var updatedBalance;
    $checkingAmount = $('#checking-amount').val();

    if ($checkingAmount > ($checAccBal + $savAccBal)) {
        alert('Insufficient funds');
    } else if ($checAccBal === 0) {
        updatedBalance = withdraw($checkingAmount, $savAccBal);
        $('#savings-balance').html('$' + updatedBalance);
    } else if ($checkingAmount > $checAccBal) {
        var $withdrawAmountFromChecAcc = $checAccBal;
        var $withdrawAmountFromSavAcc = $checkingAmount - $checAccBal;
        var updatedChecAccBal = withdraw($withdrawAmountFromChecAcc, $checAccBal);
        $('#checking-balance').html('$' + updatedChecAccBal);
        var updatedBalanceFromSavings = withdraw($withdrawAmountFromSavAcc, $savAccBal);
        $('#savings-balance').html('$' + updatedBalanceFromSavings);
    } else {
        updatedBalance = withdraw($checkingAmount, $checAccBal);
        $('#checking-balance').html('$' + updatedBalance);
    }
    accountColor();
};

//withdraw from savings account
var savingsAccWithdraw = function() {
    var $checAccBal = accountBalance('#checking-balance');
    var $savAccBal = accountBalance('#savings-balance');
    var updatedBalance;
    $savingsAmount = $('#savings-amount').val();

    if ($savingsAmount > ($checAccBal + $savAccBal)) {
        alert('Insufficient funds');
    } else if ($savAccBal === 0) {
        updatedBalance = withdraw($savingsAmount, $checAccBal);
        $('#checking-balance').html('$' + updatedBalance);
    } else if ($savingsAmount > $savAccBal) {
        var $withdrawAmountFromSavAcc = $savAccBal;
        var $withdrawAmountFromChecAcc = $savingsAmount - $savAccBal;
        var updatedBalanceFromSavings = withdraw($withdrawAmountFromSavAcc, $savAccBal);
        $('#savings-balance').html('$' + updatedBalanceFromSavings);
        var updatedChecAccBal = withdraw($withdrawAmountFromChecAcc, $checAccBal);
        $('#checking-balance').html('$' + updatedChecAccBal);
    } else {
        updatedBalance = withdraw($savingsAmount, $savAccBal);
        $('#savings-balance').html('$' + updatedBalance);
    }
    accountColor();
};

// ---------------------------- ACCOUNT COLOR ---------------------------- //

var accountColor = function() {
    var $checAccBal = accountBalance('#checking-balance');
    var $savAccBal = accountBalance('#savings-balance');

    if ($checAccBal === 0) {
        $('#checking-balance').css('background-color', 'red');
    } else if ($checAccBal > 0) {
        $('#checking-balance').css('background-color', 'grey');
    }
    if ($savAccBal === 0) {
        $('#savings-balance').css('background-color', 'red');
    } else if ($checAccBal > 0) {
        $('#savings-balance').css('background-color', 'grey');
    }
};

// ----------------------------------------------------------------------- //

$checkingAccDepositButton.addEventListener('click', checkingAccDeposit);
$checkingAccDepositButton.addEventListener('keypress', checkingAccDeposit);

$checkingAccWithdrawButton.addEventListener('click', checkingAccWithdraw);
$checkingAccWithdrawButton.addEventListener('keypress', checkingAccWithdraw);

$savingsAccDepositButton.addEventListener('click', savingsAccDeposit);
$savingsAccWithdrawButton.addEventListener('click', savingsAccWithdraw);
