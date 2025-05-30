import { useState } from "react";
import axios from "axios";
const apiUrl = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts";

const initialForm = {
  author: "",
  title: "",
  body: "",
  public: false,
};

export default function Main() {
  const [formData, setFormData] = useState(initialForm);

  const handleSetFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(apiUrl, formData).then((res) => console.log(res));
    setFormData(initialForm);
  };

  return (
    <div className="container my-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            name="author"
            value={formData.author}
            type="text"
            className="form-control"
            id="author"
            onChange={handleSetFormData}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            name="title"
            value={formData.title}
            type="text"
            className="form-control"
            id="title"
            onChange={handleSetFormData}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body
          </label>
          <textarea
            name="body"
            value={formData.body}
            type="textarea"
            className="form-control"
            id="body"
            onChange={handleSetFormData}
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            name="public"
            type="checkbox"
            className="form-check-input"
            id="public"
          ></input>
          <label className="form-check-label" htmlFor="public">
            Pubblico
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
