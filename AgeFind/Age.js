function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('result').innerHTML = "Please select your Date of Birth.";
        return;
    }

    const birthDate = new Date(dob);
    const currentDate = new Date();

    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();

    if (month < 0 || (month === 0 && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerHTML = `You are ${age} years old.`;
}
