import React from "react";

export default function Card() {
  const [counter, setCounter] = React.useState(
    Number(localStorage.getItem("counter")) || 0
  );

  const click = event => {
    event.target.name == "increase"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  localStorage.setItem("counter", counter);

  return (
    <div>
      <div className="card">
        <img
          src="https://i.hizliresim.com/0v3RWf.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">GÜL</h5>
          <p className="card-text">99.99 TL</p>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              name="increase"
              className="btn btn-success"
              onClick={click}
            >
              👍
            </button>
            <h3>{counter}</h3>
            <button
              type="button"
              name="decreese"
              className="btn btn-danger"
              onClick={click}
            >
              👎
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.hizliresim.com/0v3RWf.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">GÜL</h5>
          <p className="card-text">99.99 TL</p>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              name="increase"
              className="btn btn-success"
              onClick={click}
            >
              👍
            </button>
            <h3>{counter}</h3>
            <button
              type="button"
              name="decreese"
              className="btn btn-danger"
              onClick={click}
            >
              👎
            </button>
          </div>
        </div>
      </div>
      <div className="card">
        <img
          src="https://i.hizliresim.com/0v3RWf.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">GÜL</h5>
          <p className="card-text">99.99 TL</p>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              name="increase"
              className="btn btn-success"
              onClick={click}
            >
              👍
            </button>
            <h3>{counter}</h3>
            <button
              type="button"
              name="decreese"
              className="btn btn-danger"
              onClick={click}
            >
              👎
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
