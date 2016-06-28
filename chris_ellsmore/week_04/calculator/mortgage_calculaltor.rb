# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

puts "What is your loan amount?"
  loan_amount = gets.to_i

puts "What is your interest rate?"
  interest_rate = gets.to_i

puts "What is your loan period (specify in years)?"
  loan_peiord = gets.to_i

  # Monthly repayment = (loan amount / (loan period * 12) ) + ((loan amount / (loan period * 12) ) * interest (as decimal))


    loan_period_months = loan_peiord * 12
    montly_payment_excl_interest = loan_amount / loan_period_months
    monthly_interest_rate = interest_rate / 100
    montly_payment_interest = montly_payment_excl_interest * monthly_interest_rate

    answer = montly_payment_excl_interest + montly_payment_interest

    puts "Your monthly repayments (including interest) is $#{ answer }"
