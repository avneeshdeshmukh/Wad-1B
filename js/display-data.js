$(document).ready(function () {
    getData();
});

function convertDateFormat(inputDateString) {
    // Parse the input date string
    let inputDate = new Date(inputDateString);

    // Format the date as "DD Month YYYY"
    let options = { day: 'numeric', month: 'long', year: 'numeric' };
    let outputDateString = inputDate.toLocaleDateString('en-GB', options);

    return outputDateString;
}

function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    document.querySelector("#first_name").innerHTML = studentObj.first_name;
    document.querySelector("#last_name").innerHTML = studentObj.last_name;
    document.querySelector("#gender").innerHTML = studentObj.gender;
    document.querySelector("#email").innerHTML = studentObj.email;
    document.querySelector("#phone").innerHTML = studentObj.phone;
    document.querySelector("#branch").innerHTML = studentObj.first_name;
    document.querySelector("#rollno").innerHTML = studentObj.rollno;
    document.querySelector("#parentName").innerHTML = studentObj.parentName;
    document.querySelector("#parentPhone").innerHTML = studentObj.parentPhone;

    let dob = studentObj.dob;
    let convertedDOB = convertDateFormat(dob);
    document.querySelector("#dob").innerHTML = convertedDOB;

    let registrationDate = studentObj.registrationDate;
    let convertReg = convertDateFormat(registrationDate);
    document.querySelector("#registrationDate").innerHTML = convertReg;
}