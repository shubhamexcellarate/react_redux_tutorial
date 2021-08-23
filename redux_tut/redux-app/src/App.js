import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "./state/index"

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreator, dispatch);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}> DEPOSIT </button>
      <button onClick={() => withdrawMoney(1000)}> WITHDRAW </button>
    </div>
  );
}

export default App;
