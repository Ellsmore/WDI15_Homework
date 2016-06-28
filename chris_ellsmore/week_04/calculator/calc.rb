# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)


puts "Enter number 1: "
numOne = gets.to_i
puts "Enter number 2: "
numTwo = gets.to_i

def prompt(message)
  print message
  gets.chomp #Implciit return
end

def menu
  puts "(a) - addition" # create the list here
  puts "(s) - subtraction"
  puts "(m) - multipication"
  puts "(d) - division"
  puts "(e) - exponent"
  puts "(r) - square root"
  puts "(e) - enter new numbers"
  puts "(q) - quit" # do the rest
  prompt("Enter your choice:")
end

# --------------------------- ARITHMETIC FUNCTIONS --------------------------- #

def addition(numOne,numTwo)
  answer = numOne + numTwo
  puts "#{ numOne} + #{ numTwo } = #{ answer }"
end

def subtraction(numOne,numTwo)
  answer = numOne - numTwo
  puts "#{ numOne} - #{ numTwo } = #{ answer }"
end

def multipication(numOne,numTwo)
  answer = numOne * numTwo
  puts "#{ numOne} * #{ numTwo } = #{ answer }"
end

def division(numOne,numTwo)
  answer = numOne / numTwo
  puts "#{ numOne} / #{ numTwo } = #{ answer }"
end

def exponent(numOne,numTwo)
  answer = numOne ** numTwo
  puts "#{ numOne} ** #{ numTwo } = #{ answer }"
end

def square_root(numOne,numTwo)
  answerOne = Math.sqrt(numOne)
  answerTwo = Math.sqrt(numTwo)
  puts "Square root of #{ numOne} = #{ answerOne }"
  puts "Square root of #{ numTwo} = #{ answerTwo }"
end

# --------------------------- --------------------------- #

menu_selection = menu

until menu_selection == 'q'
  case menu_selection
  when 'a'
    addition(numOne,numTwo)
  when 's'
    subtraction(numOne,numTwo)
  when 'm'
    multipication(numOne,numTwo)
  when 'd'
    division(numOne,numTwo)
  when 'e'
    exponent(numOne,numTwo)
  when 'r'
    square_root(numOne,numTwo)
  when 'e'
    puts "Enter a new number 1: "
    numOne = gets.to_i
    puts "Enter a new number 2: "
    numTwo = gets.to_i
  else
    puts "Invalud selection you idiot"
  end

  menu_selection = menu
end

puts "Thank you for using this calcualtor"
