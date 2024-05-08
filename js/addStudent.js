submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', function () {

    function getStudentData() {
        let first_name = document.querySelector("#first_name").value;
        let last_name = document.querySelector("#last_name").value;
        let dob = document.querySelector("#dob").value;
        let email = document.querySelector("#email").value;
        let phone = document.querySelector("#phone").value;
        let branch = document.querySelector("#branch").value;
        let rollno = document.querySelector("#rollno").value;
        let registrationDate = document.querySelector("#registrationDate").value;
        let parentName = document.querySelector("#parentName").value;
        let parentPhone = document.querySelector("#parentPhone").value;

        let genderOptions = document.getElementsByName('gender');
        let gender

        for (let i = 0; i < genderOptions.length; i++) {
            if (genderOptions[i].checked) {
                gender = genderOptions[i].value;
                break;
            }
        }

        let student = {
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            gender: gender,
            email: email,
            phone: phone,
            branch: branch,
            rollno: rollno,
            registrationDate: registrationDate,
            parentName: parentName,
            parentPhone: parentPhone,
        };

        console.log(student)
        
        for (let key in student) {
            if (student[key]==null) {
                return null;
            }
        }

        return student;
    }

    function storeData() {
        if (!localStorage.getItem("student")) {
            localStorage.setItem("student", JSON.stringify(getStudentData()));
        }
        else {
            localStorage.removeItem("student");
            localStorage.setItem("student", JSON.stringify(getStudentData()));
        }
    }

    if(getStudentData()){
        storeData();
        window.location.href="display-student.html";
    }
    else{
        alert('Please do not leave any section empty!');
    }
    
});


function sendData() {
    let xhr = new XMLHttpRequest();
    let data = JSON.stringify(getStudentData());
    xhr.open("POST", "http://localhost:4000/storedata", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}