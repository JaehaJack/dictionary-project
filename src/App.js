import Dictionary from "./Dictionary.js";
import "./App.css";

function App() {
  return (
    <div className="App d-flex justify-content-center">
      <div className="container my-3 py-2">
        <header>
          <div className="row title">
            <h1>Cultivating Hobbyist: Don't disturb a literati.</h1>
            <h1>WRITER'S BLOCK</h1>
            <h2>...let your words come to life and find 'that' word!</h2>
          </div>
          <hr />
          <br />
          <div className="row elaboration">
            <Dictionary defaultKeyWord="intellectual" />
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
