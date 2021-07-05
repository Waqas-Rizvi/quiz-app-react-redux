import { Routing } from "./Config/Router";
import { Provider } from "react-redux";
import store from "./Store/Index";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
