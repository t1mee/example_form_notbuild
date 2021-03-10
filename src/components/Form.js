import React from 'react';

export const Form = () => {

return(
<form className="row g-3 col-8 m-auto px-0 pt-5">
  <div className="col-md-6 pl-0">
    <label className="form-label">Имя</label>
    <input  className="form-control" />
  </div>
  <div className="col-md-6 pr-0">
    <label  className="form-label">Фамилия</label>
    <input  className="form-control" id="inputPassword4" />
  </div>
  <div className="col-12 px-0 pt-2">
    <label for="inputAddress" className="form-label">Адрес</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="col-md-6 pt-2 pl-0">
    <label for="inputCity" className="form-label ">Город</label>
    <input type="text" className="form-control" id="inputCity" />
  </div>
  <div className="col-4 pt-2">
    <label for="inputState" className="form-label">Страна</label>
    <select id="inputState" className="form-control">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-2 pt-2 pr-0">
    <label for="inputZip" className="form-label">Индекс</label>
    <input type="text" className="form-control" id="inputZip" />
  </div>

  <div className="col-12 pl-0 pt-4">
    <button type="submit" className="btn btn-outline-info">Отправить данные</button>
  </div>
</form>
)}
