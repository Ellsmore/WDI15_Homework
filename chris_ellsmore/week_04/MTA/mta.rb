#----------------------- STATION LINES ------------------------ #

$N_line = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
$L_line = ['8th', '6th', 'Union Square', '3rd', '1st']
$S_line = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

test_line1 = ['a', 'b', 'c', 'd', 'x', 'f'] #Used test lines as its easier for testing
test_line2 = ['a', 'b', 'x', 'd', 'e']
test_line3 = ['a', 'b', 'c', 'd', 'x', 'F']

#----------------------- VARIABLES ------------------------ #

$boarding_station = 'a'
$destination_station = 'f'
$boarding_line = test_line3
$destination_line = test_line1

$total_stops

#----------------------- MESSAGES ------------------------ #

$message_one = "You must travel through the following stops:"
$message_two = "Change at Union Square"
$message_three = "Your journey continues through the following stops:"
$message_four = "Stops in total: "

#----------------------- FIND UNION STATION INDEX ------------------------ #

def union_station_index
	$destination_line_US_index = $destination_line.index("x")
	$boarding_line_US_index = $boarding_line.index("x")
end

union_station_index

#----------------------- FIND STATION INDEX ------------------------ #

def find_station_index(boarding_line, destination_line)
	$boarding_station_index = boarding_line.index($boarding_station)
	$destination_station_index = destination_line.index($destination_station)
end

find_station_index($boarding_line, $destination_line)

#----------------------- boarding to destination STATION ------------------------

def single_line(train_line)
	if $boarding_station_index < $destination_station_index
		p "#{ $message_one } #{ train_line[$boarding_station_index+1..$destination_station_index]* ","}"
		$total_stops = $destination_station_index - $boarding_station_index
	elsif $boarding_station_index > $destination_station_index
		p "#{ $message_three } #{ train_line[$destination_station_index..$boarding_station_index-1].reverse * ","}"
		$total_stops = $boarding_station_index - $destination_station_index
	else
		p "You are at the same station!"
		$total_stops = 0
	end

	p "#{ $message_four } #{ $total_stops }"
end

#----------------------- CHANGE LINES ------------------------ #

def change_lines(train_line)
	if $boarding_station_index < $boarding_line_US_index
		p "#{ $message_one } #{ train_line[$boarding_station_index+1..$boarding_line_US_index]* ","}"
		p "Change at x"
		$total_stops = $boarding_line_US_index - $boarding_station_index
	elsif $boarding_station_index > $boarding_line_US_index
		p "#{ $message_one } #{ train_line[$boarding_line_US_index..$boarding_station_index-1].reverse * ","}"
		p "Change at x"
		$total_stops = $boarding_station_index - $boarding_line_US_index
	end
end

def second_line(train_line)
	if $destination_station_index < $destination_line_US_index
		p "#{ $message_three } #{ train_line[$destination_station_index..$destination_line_US_index-1].reverse * ","}"
		$total_stops = $total_stops + $destination_line_US_index - $destination_station_index
	elsif $destination_station_index > $destination_line_US_index
		p "#{ $message_three } #{ train_line[$destination_line_US_index + 1..$destination_station_index] * ","}"
		$total_stops = $total_stops + $destination_station_index - $destination_line_US_index
	end

	p "#{ $message_four } #{ $total_stops }"
end

#----------------------- PLAN TRIP ------------------------ #


def plan_trip
	if $boarding_line == $destination_line
		single_line($boarding_line)
	else
		change_lines($boarding_line)
		second_line($destination_line)
	end
end

plan_trip 
