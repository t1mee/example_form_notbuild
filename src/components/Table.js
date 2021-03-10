import React from "react";

export const Table = () => {
return (
<div className="container-fluid col-12 pt-5 px-0">
<table className="table col-8 m-auto ">
  <thead>
    <tr>
      <th className="text-info" scope="col">#</th>
      <th className="text-info" scope="col">Имя</th>
      <th className="text-info" scope="col">Фамилия</th>
      <th className="text-info" scope="col">Адрес</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
</div>
    )
}