import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { setCurrentUser } from "./store/store";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const handleUser = () => {
    dispatch(setCurrentUser({ name: "Amrit" }));
  };
  const handleResetUser = () => {
    dispatch(setCurrentUser(null));
  };
  const currentUser = useSelector((state) => {
    console.log("🚀 ~ currentUser ~ state:", state);
    return state.CurrentUser.currentUser;
  });
  console.log("🚀 ~ currentUser ~ currentUser:", currentUser);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{currentUser ? currentUser.name : "No user"}</h1>
      <div className="card">
        <button onClick={handleUser}>Set User</button>
        <button onClick={handleResetUser}>Reset User</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
