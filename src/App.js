import korosan from "./korosan.png";
import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="container my-3 p-2">
        <header>
          <div className="logo d-flex justify-content-center">
            <div className="row">
              <div className="col-3 d-flex small-photo d-none d-sm-block">
                <img
                  src={korosan}
                  alt="koro-sensei assassination classroom"
                  className="dictionary-logo img-fluid"
                />
              </div>
              <div className="col-9">
                <div className="row">
                  <h1>DICTIONARY</h1>
                </div>
                <div className="row">
                  <Dictionary defaultKeyWord="origin" />
                </div>
              </div>
            </div>
          </div>
        </header>
        <footer className="my-2 p-2">
          <p className="text-center">
            {" "}
            Coded by <a href="/">Jazmi C</a> . It is{" "}
            <a
              href="https://github.com/JaehaJack/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced on Github{" "}
            </a>{" "}
            {""} and {""}{" "}
            <a
              href="https://amazing-lewin-efd10d.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              hosted on Netlify
            </a>
            .{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
