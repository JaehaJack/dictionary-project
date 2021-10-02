import korosan from "./korosan.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container my-3 p-2">
        <header>
          <div className="logo d-flex justify-content-center">
            <div className="row">
              <div className="col-4">
                <img
                  src={korosan}
                  alt="koro-sensei assassination classroom"
                  className="dictionary-logo img-fluid"
                />
              </div>
              <div className="col-8">
                <div className="row">
                  <h1>DICTIONARY</h1>
                </div>
                <div className="row">
                  <Dictionary />
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
