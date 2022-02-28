import React from "react";
import SelectField from "./SelectField";
import InputField from "./InputField";

const todoForm = ({todo, feedBack, onChange, onSubmit, categories }) => {
  return (
    <div className="container">
      {feedBack()}
      <form onSubmit={onSubmit}>
        <div className="row"> 
          <InputField
            type="text"
            name="title"
            value={todo.title}
            onChange={onChange}
            placeholder="Title"
          />

          <InputField
            type="text"
            name="description"
            value={todo.description}
            onChange={onChange}
            placeholder="Description"
          />

          <SelectField
            type="text"
            name="category"
            datasets={categories}
            value={todo.category}
            onChange={onChange}
            placeholder="Category"
          />

          <div className="col-md-3">
            <div className="d-grid gap-2 my-4">
              <button
                className="btn btn-primary btn-custom-primary"
                type="submit"
              >
                create
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default todoForm;
