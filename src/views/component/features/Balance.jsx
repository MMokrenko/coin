const React = require('react');

module.exports = function Balance() {
  return (
    <form name="balance-form">
      <div className="mb-3">
        <label htmlFor="exampleInput1" className="form-label">
          Введите сумму пополнения:
        </label>
        <input
          type="text"
          className="form-control"
          name="balance"
          id="exampleInput1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary balance">
        пополнить
      </button>
    </form>
  );
};
