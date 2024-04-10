const buttonsSale = document.querySelectorAll('.sale');
const saleForm = document.forms['sale-coin-form'];
const buttonsNoSale = document.querySelectorAll('.no-sale');

buttonsSale.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      const { id } = event.target;
      window.location.assign(`/coin/${id}/sale`);
    } catch (error) {
      console.error(error);
    }
  });
});

buttonsNoSale.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      const { id } = event.target;
      const res = await fetch('/api/coin/sale', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      if (res.status === 200) {
        window.location.assign('/profile');
      }
    } catch (error) {
      console.error(error);
    }
  });
});

if (saleForm) {
  saleForm.addEventListener('submit', async (event) => {
    try {
      event.preventDefault();
      const coinId = event.target.dataset.id;
      const formData = Object.fromEntries(new FormData(saleForm));
      const res = await fetch(`/api/coin/${coinId}/sale`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        window.location.assign('/');
      } else {
        const data = await res.json();
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
