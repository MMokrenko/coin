const authForm = document.forms['register-form'];
const loginForm = document.forms['login-form'];
if (authForm) {
  authForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const body = Object.fromEntries(new FormData(authForm));
      const data = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await data.json();
      if (result.text === 'OK') {
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
    }
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
      const body = Object.fromEntries(new FormData(loginForm));
      const data = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await data.json();
      if (result.text === 'OK') {
        window.location.href = '/';
      }
    } catch (error) {
      console.error(error);
    }
  });
}
