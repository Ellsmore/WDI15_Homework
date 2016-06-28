# Calculate the body mass index (BMI) for an individual, given their height and weight
# Bodyweight in kilograms divided by height in meters squared

# ------------------------ BMI Inputs ------------------------ #

puts "What is your weight in kilograms?"
weight = gets.to_i

puts "What is your height in metre's"
height = gets.to_f

# ------------------------ BMI CALCULTION + MESSAGE ------------------------ #

height_squared = height*height
bmi = weight / height_squared

puts "Your BMI: #{ bmi }"
