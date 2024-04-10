const balanceForm = document.forms['balance-form'];

if (balanceForm) {
  balanceForm.addEventListener('submit', async (event) => {
    try {
      event.preventDefault();
      const dataForm = Object.fromEntries(new FormData(balanceForm));
      const res = await fetch('/api/profile/balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataForm),
      });
      if (res.status === 200) {
        window.location.href = '/profile';
      }
    } catch (error) {
      console.log(error);
    }
    event.preventDefault();
  });
}
