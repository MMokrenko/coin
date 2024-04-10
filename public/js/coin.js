const addCoinForm = document.forms['add-coin-form'];
const inputImgI = document.getElementById('formFile1');
const inputImgII = document.getElementById('formFile2');
const buttonsDelete = document.querySelectorAll('.btn-delete');

if (addCoinForm) {
  addCoinForm.addEventListener('submit', async (event) => {
    try {
      event.preventDefault();
      const dataForm = Object.fromEntries(new FormData(addCoinForm));
      const values = {
        ...dataForm,
        imgI: inputImgI.files[0],
        imgII: inputImgII.files[0],
      };
      const rebuildData = () => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });
        return formData;
      };
      const body = rebuildData();
      const res = await fetch('/api/coin/add', {
        method: 'POST',
        body,
      });
      if (res.ok) {
        window.location.assign('/profile');
      } else {
        const data = await res.json();
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  });
}

buttonsDelete.forEach((btn) => {
  btn.addEventListener('click', async (event) => {
    try {
      const data = await fetch('/api/coin/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: Number(event.target.dataset.id) }),
      });
      const res = await data.json();
      if (res.message === 'OK') {
        btn.parentNode.parentNode.remove();
      }
    } catch (error) {
      console.error(error);
    }
  });
});
