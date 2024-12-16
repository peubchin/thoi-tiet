import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <section>
      <Header />
      <div className="content-wrapper">
        <div className="mb-1">
          <button className="btn btn-light rounded-pill border me-1">
            <i className="bi bi-geo-alt-fill"></i>
          </button>
          Ho Chi Minh
        </div>
      </div>
      <div className="content-wrapper">
        <div className=" bg-body-tertiary p-3 rounded-3">
          <b>
            <small>Thời tiết hiện tại</small>
          </b>
          <div className="d-sm-flex gap-3 align-items-center">
            <div>
              <div className="d-flex gap-1 align-items-center display-1">
                <img
                  src="/assets/status/MostlySunnyDay.svg"
                  alt=""
                  style={{ height: '1.8em' }}
                />
                <b>28°C</b>
              </div>
            </div>

            <div>
              <b>Nhiều mây</b>
              <br />
              <small>Cảm thấy như 32°C</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
