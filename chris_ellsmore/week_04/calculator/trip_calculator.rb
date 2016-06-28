# Calculate a trip time and cost given inputs for
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

# ------------------------ Trip Inputs ------------------------ #

puts "Enter trip distance (miles)?"
distance = gets.to_f

puts "Enter fuel consunption (miles/gallon)"
fuel_economy = gets.to_f

puts "Enter fuel price (price/gallon)"
fuel_price = gets.to_f

puts "Enter travelling speed (miles/hour)"
speed = gets.to_f

# ------------------------ Trip time ------------------------ #

tripTime = distance / speed

puts "Trip time: #{ tripTime.round(2) } hours"

# ------------------------ Trip cost ------------------------ #

tripCost = (distance * fuel_price) / fuel_economy

puts ("Trip cost: $#{ tripCost.round(2) }")
