function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TUb5c859bda848fcc3d38a278f225fd511194f421143a7f8e68cc0f6b0f24d5b63b751026686b0034767cf7a86ed7d0804'
        },
        body: JSON.stringify({ "UserName" : username, "PassWord" : password })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = `
        Type : ${data.type}
        Status : ${data.tu_status}
        Status id : ${data.statusid}
        Name : ${data.displayname_en}
        Department : ${data.department}
        Faculty : ${data.faculty}
        `;
    })
    .catch(error => console.error('Error:', error));
}