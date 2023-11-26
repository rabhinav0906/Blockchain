function continueAs(role) {
    if (role === 'patient') {
        window.location.href = 'patient.html';
    } else if (role === 'doctor') {
        window.location.href = 'doctor.html';
    }
}
