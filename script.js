
// with all code for switch case only start

const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

//event listener
button.addEventListener('click',displayStats)

function displayStats(){
    
    const input = document.getElementById("input")
    const day = input.options[input.selectedIndex].value
// switch case 
let task = ' ';
switch (day){
    case 'Monday':
        task = 'Today Monday : Go to Office and start your week!';
        break
    case 'Tuesday':
        task = 'Today Tuesday : you have meeting with Product Manager';
        break
    case "Wednesday":
        task = "Today Wednesday : you have to discuss with your team members"; 
        break
    case "Thursday":
        task = "Today Thurday : To Assign Work to Team members";
        break
    case "Friday":
        task = "Today Friday : Check what the team members done";
        break
    case "Saturday":
        task = "Today Saturday : Today report to product manager about this week task!";
        break
    default:
        task = "Today Sunday : Enjoy with friends and family ";
}
let text = `${task} `

console.log(text)

document.getElementById('result').innerHTML = text
}

// with all code for switch case only end




// with all code for Loop only start

// Loop 
function generateTable() {
    // Get the user input
    var number = parseInt(document.getElementById('number').value);

    // Validate input
    if (isNaN(number) || number < 1 || number > 100) {
        alert("Please enter a valid number between 1 and 20.");
        return;
    }

    // Generate the table
    var tableHtml = '<table>';
    tableHtml += '<tr><th>Multiplicand</th><tr>';
    for (var i = 1; i <= 10; i++) {
        var product = number * i;
        tableHtml += '<tr><td>' + number + "X"+ i + "=" + product + '</td></tr>';
    }
    tableHtml += '</table>';

    // Display the table
    document.getElementById('table-container').innerHTML = tableHtml;
}


// with all code for Loop only end

