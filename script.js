// Header Timer
setInterval(function() {
var timeDate = moment().format("MMM Do, YYYY" + " hh:mm:ss");
$('#date').text('Today is ' + timeDate);
}, 1000);

// date picker
$( function() {
    $( "#datepicker" ).datepicker();
  } );
  
//add in forum items
  function newProject() {
    var table = document.getElementById("jobslist");
    // var now = moment().format('MM/DD/YYYY');
    // var selectedDate = document.getElementById('datepicker').value;
    // var difference = selectedDate.diff(now, 'days', true);

    // console.log(time1);
    // console.log(time2);

    var row = table.insertRow(1);
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();

    cell1.innerHTML = document.getElementById('jobname').value;
    cell2.innerHTML = document.getElementById("dropdownselect").value;
    cell3.innerHTML = document.getElementById('set_wage').value;
    cell4.innerHTML = document.getElementById('datepicker').value;
    // cell5.innerHTML = difference.value;
    // cell6.innerHTML = document.getElementById()
    cell5.innerHTML = "idk how to fix this"
    cell6.innerHTML = "idk how to fix this"
  }
