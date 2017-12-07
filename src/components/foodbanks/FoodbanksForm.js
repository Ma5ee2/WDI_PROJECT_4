import React from 'react';

import BackButton from '../utility/BackButton';

function FoodbanksForm({ handleChange, handleSubmit, foodbank }) {
  return (
    <div className="row">
  <div className="page-banner col-md-12">
    <BackButton history={history} />
    <h1>Add a foodbank</h1>
  </div>
  <form onSubmit={handleSubmit} className="col-md-6">
    <div className="form-group">
      <label htmlFor="image">Image</label>
      <input
        type="text"
        className="form-control"
        id="image"
        name="image"
        value={foodbank.image}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        name="name"
        value={foodbank.name}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">Address</label>
      <input
        type="text"
        className="form-control"
        id="address"
        name="address"
        value={foodbank.address}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="telephone_number">Telephone number</label>
      <input
        type="number"
        className="form-control"
        id="telephone_number"
        name="telephone_number"
        value={foodbank.telephone_number}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="website">Website link</label>
      <input
        type="text"
        className="form-control"
        id="website"
        name="website"
        value={foodbank.website}
        onChange={handleChange}
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        className="form-control"
        id="email"
        name="email"
        value={foodbank.email}
        onChange={handleChange}
      />
    </div>
    <div>
      <button className="save-button">Save</button>
    </div>
  </form>
</div>
  );
}

export default FoodbanksForm;
