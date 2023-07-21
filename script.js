const pages = {}

pages.base_url = "http://localhost/auth-system/";

pages.page_index = () => {
    const index_url = pages.base_url + "signin.php";

    document.getElementById('login-btn').addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const data = {
            username: username,
            password: password
        };

        fetch(index_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);

                if (data.status === "success") {

                    window.location.href = 'landing.html';
                } else {
                    alert('Login failed. Please check your username and password.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });


}

pages.page_register = () => {
    const register_url = pages.base_url + "signup.php";
    document.getElementById('sign-up-btn').addEventListener('click', async function () {
        const first_name = document.getElementById('first-name').value;
        const last_name = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const verify_password = document.getElementById('verify-password').value;
        if (password !== verify_password) {
            alert('Passwords do not match. Please try again.');
            return;
        }
        if (!first_name || !last_name || !email || !username || !password || password !== verify_password) {
            alert('Please fill in all fields correctly.');
            return;
          }

        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            username: username,
            password: password
        };

        console.log(JSON.stringify(data));

        try {
            const response = await fetch(register_url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            data = await response.json();
            console.log(data);

            if (data.status === "success") {
                const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
                modal.show();
            } else {
                alert('Registration failed. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

pages.page_landing = () => {
    console.log("Hello from landing page")
}

pages.loadFor = (page) => {
    eval("pages.page_" + page + "();")
}