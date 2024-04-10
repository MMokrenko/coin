const buttonsShop = document.querySelectorAll('.shop');

buttonsShop.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      const data = await fetch('/api/shop/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Number(event.target.dataset.id) }),
      });
      const res = await data.json();
      if (res.message === 'OK') {
        btn.parentNode.parentNode.remove();
      }
      if (res.message === 'BALANCE') {
        alert('Пополните баланс');
      }
    } catch (error) {
      console.error(error);
    }
  });
});
