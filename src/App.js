import "./App.css";
import FormInput from "./FormInput.js";

function App() {
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <FormInput label="First Name" />
      <FormInput label="Last Name" />
    </div>
  );
}

export default App;
