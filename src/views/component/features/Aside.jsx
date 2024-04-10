const React = require('react');

module.exports = function Aside({}) {
  return (
    <div className="Aside">
      <h3>Фильтр:</h3>
      <form name="filter" action="/api/filter">
        <p>Год выпуска:</p>
        <input
          className="input"
          type="text"
          id="year start"
          name="filter"
          defaultValue="От"
        />
        <input
          className="input"
          type="text"
          id="year finish"
          name="filter"
          defaultValue="До"
        />
        <p>Цена:</p>
        <input
          className="input"
          type="text"
          id="price start"
          name="filter"
          defaultValue="От"
        />
        <input
          className="input"
          type="text"
          id="price finish"
          name="filter"
          defaultValue="До"
        />
        {/* <p>Состояние:</p>

        <label htmlFor="vehicle1">
          <input type="checkbox" id="vehicle1" name="vehicle1" />
          MS
        </label>
        <br />

        <label htmlFor="vehicle2">
          <input type="checkbox" id="vehicle2" name="vehicle2" />
          AU
        </label>
        <br />

        <label htmlFor="vehicle3">
          <input type="checkbox" id="vehicle3" name="vehicle3" />
          XF
        </label>
        <br />

        <label htmlFor="vehicle4">
          <input type="checkbox" id="vehicle4" name="vehicle3" />
          VF
        </label>
        <br />

        <label htmlFor="vehicle5">
          <input type="checkbox" id="vehicle5" name="vehicle3" />F
        </label>
        <br />

        <label htmlFor="vehicle6">
          <input type="checkbox" id="vehicle6" name="vehicle3" />
          VG
        </label>
        <br />

        <label htmlFor="vehicle7">
          <input type="checkbox" id="vehicle7" name="vehicle3" />G
        </label>
        <br /> */}
        <button type="submit" className="btn btn-primary">
          Применить
        </button>
      </form>
    </div>
  );
};
