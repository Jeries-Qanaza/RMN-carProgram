var date = new Date();
var dayOfWeek = date.getDay();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var currentDay = dayNames[dayOfWeek];
var formattedDate = date.toLocaleDateString('en-GB');


var startTime;
var liveTimeElement = document.getElementById('liveTime');

let isCarOccupied = false;

function startTime() 
{
    isCarOccupied = true;
    document.getElementById('startTimeButton').style.display = 'none';
    document.getElementById('stopTimeButton').style.display = 'inline';
    console.log("I'm in start");

    startTime= date.toLocaleTimeString()
    console.log(startTime);
  
  // Display time difference
  displayTimeDifference();
  
  // Update live time count
  updateLiveTimeCount();

 
}

function stopTime() 
{

    isCarOccupied = false;

    // Update UI to hide the form and show the start button
    document.getElementById('done').style.display = 'block';
    document.getElementById('startTimeButton').style.display = 'none';
    document.getElementById('stopTimeButton').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'block';


    var doneNameElement = document.querySelector('#done #name');
    var dayElement = document.querySelector('#done #day');
    var dateElement = document.querySelector('#done #date');
    var placeElement = document.querySelector('#done #place');
    var startTimeElement = document.querySelector('#done #startTime');
    var endTimeElement = document.querySelector('#done #endTime');

    let sendName = doneNameElement.textContent = document.getElementById('car').value;
    let sendDay = dayElement.textContent = currentDay;
    let sendDate = dateElement.textContent = formattedDate;
    let sendPlace = placeElement.textContent = document.getElementById("placeInp").value;
    let sendStartTime = startTimeElement.textContent = startTime;
    date = new Date();
    let sendEndTime = endTimeElement.textContent = date.toLocaleTimeString();

  fillForm(sendName,sendDay,sendDate,sendPlace,sendStartTime,sendEndTime);
}






function displayTimeDifference() {
    var storedTime = localStorage.getItem('clickTime');
    if (storedTime) {

        var startTime = new Date(storedTime);
        var timeDiff = (date - startTime) / 1000; // in seconds

        var hours = Math.floor(timeDiff / 3600);
        var minutes = Math.floor((timeDiff % 3600) / 60);
        var seconds = Math.floor(timeDiff % 60);

        var timeDiffString = 'Time difference: ' + hours + 'h ' + minutes + 'm ' + seconds + 's';
    // document.getElementById('timeDiff').textContent = timeDiffString;
    }
}

function updateLiveTimeCount() 
{
    setInterval(function () {

        var timeDiff = (date - startTime) / 1000; // in seconds

        liveTimeElement.innerText = 'Live Time Count: ' + Math.floor(timeDiff) + 's';
    }, 1000); // Update every second
}

// Check if there's a previously recorded time
displayTimeDifference();



function toggleDiv() 
{
    var div = document.getElementById('myDiv');
    if (div.style.display === 'none') {
      div.style.display = 'block'; // Show the div
    } else {
      div.style.display = 'none'; // Hide the div
    }
  }



  function submitForm() {
    // Your logic to submit the form goes here
  }

  // You can add more logic as needed, for example, updating UI based on the car's status

  function fillForm(sendName,sendDay,sendDate,sendPlace,sendStartTime,sendEndTime)
  {
    document.getElementById("formDate").value=sendDate;
    document.getElementById("formDay").value=sendDay;
    document.getElementById("formStartTime").value=sendStartTime;
    document.getElementById("formEndTime").value=sendEndTime;
    document.getElementById("formName").value=sendName;
    document.getElementById("formPlace").value=sendPlace;
   
  }