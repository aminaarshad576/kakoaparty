import logo from "./logo.svg";
import "./App.css";
import Button1 from "./components/buttonsDiv";
import MaterialIcon from "react-google-material-icons";
import SendOutlined from "@ant-design/icons/SendOutlined";

function App() {
  return (
    <div className=".col-sm-12 .col-md-6 .offset-md-3 ">
      <br></br>
      <div className="App">
        <Button1 />
      </div>
      <br></br>
      <div class="row">
        <div class="col-5 p-3  bg-light text-dark border offset-2">
          <br></br> <br></br>
          <div
            class="col-9 p-3  bg-success text-dark border offset-1"
            style={{ borderRadius: 20 }}
          >
            <h3 class="my-3 text-white font-weight-bold text-center">
              Before we start
            </h3>
            <input
              type="text"
              class="form-control text-center "
              style={{ borderRadius: 20 }}
              placeholder="Enter your nick name"
              id="name"
            ></input>
            <br></br>
            <div class="col text-center">
              <button
                class="btn btn-default btn btn-white "
                style={{
                  borderColor: "white",
                  width: 40,
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
              >
                <SendOutlined />
              </button>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div class="col p-3  bg-light text-dark border-top">
            <div
              class="row bg-white text-dark border"
              style={{ borderRadius: 20 }}
            >
              <span>
                <input
                  type="text"
                  class="col col-12 form-control border-0"
                  style={{ borderRadius: 20, width: 500 }}
                  placeholder="Type a message"
                  id="msg"
                ></input>
              </span>
              <button
                class="btn btn-default btn btn-white float-end"
                style={{
                  borderColor: "white",
                  width: 40,
                  backgroundColor: "white",
                  borderRadius: 100,
                }}
              >
                <SendOutlined />
              </button>
            </div>
          </div>
        </div>
        <div class="col-2 p-3 ml-3 bg-light text-dark border offset-2">
          <ul class="list-group offset-2">
            <li>Phillip Ekstrom (100m)</li>
            <li>Angel Donin</li>
            <li>Madelyn Aminoff</li>
            <li>Mira Carder</li>
            <li>Talan Mango</li>
            <li>Lydia Aminoff</li>
            <li>Ranya Dorwart</li>
            <li>Erin Rosser</li>
          </ul>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div class="col text-center">
            <button
              type="button"
              class="btn btn-success text-dark font-weight-bold text-center"
            >
              <i className="material-icons">place</i>Google Maps
            </button>
            <br></br>

            <label class="my-3 text-dark  text-center">
              #100km logged Users
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
