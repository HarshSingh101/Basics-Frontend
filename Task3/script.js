main();

async function main() {
    const student = await studentData();

    const schoolTitle = document.querySelector("#schoolTitle");
    const schoolInfo = document.querySelector("#schoolInfo");
    const schoolContacts = document.getElementById("schoolContacts");
    let dropdown = document.getElementById("studentDropdown");
    let studentDisplay = document.querySelector(".student_display");

    schoolTitle.innerHTML = student.school_name;

    schoolInfo.innerHTML += `<h3>President: ${student.info.president}</h3>`;
    schoolInfo.innerHTML += `<h3>Address: ${student.info.address}</h3>`;

    schoolContacts.innerHTML += `<p>${student.info.contacts.email}</p>`;
    schoolContacts.innerHTML += `<p>${student.info.contacts.tel}</p>`;

    student.students.forEach(s => {
        let option = document.createElement("option");
        option.value = s.id;
        option.textContent = s.id;
        dropdown.appendChild(option);
    });

    dropdown.addEventListener("change", function () {
        let selected = student.students.find(s => s.id === this.value);
        if (selected) {
            studentDisplay.innerHTML = `
                <h4>Name: ${selected.name}</h4>
                <p>Maths: ${selected.grade.math}</p>
                <p>Physics: ${selected.grade.physics}</p>
                <p>Chemistry: ${selected.grade.chemistry}</p>
            `;
        } else {
            studentDisplay.innerHTML = `<h5>Students details displayed here.</h5>`;
        }
    });
}
async function studentData() {
    const res = await fetch("data.json");
    const data = await res.json();
    return data;
}

