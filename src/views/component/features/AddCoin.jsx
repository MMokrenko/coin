const React = require('react');

module.exports = function AddCoin() {
  return (
    <div className="register">
      <form name="add-coin-form">
        <div className="mb-3">
          <label htmlFor="exampleInput1" className="form-label">
            Номинал:
          </label>
          <input
            type="text"
            className="form-control"
            name="denomination"
            id="exampleInput1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Год выпуска:
          </label>
          <input
            type="text"
            name="year"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Материал
          </label>
          <input
            type="text"
            className="form-control"
            name="material"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div class="mb-3">
          <label htmlFo="formFile" class="form-label">
            Загрузите изображение аверса
          </label>
          <input className="form-control avers" type="file" id="formFile1" />
        </div>

        <div class="mb-3">
          <label htmlFo="formFile" class="form-label">
            Загрузите изображение реверса
          </label>
          <input className="form-control" type="file" id="formFile2" />
        </div>

        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
    </div>
  );
};
