import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainContainer from "./components/MainContainer";
import Login from "./components/Pages/auth/Login";
import SignUp from "./components/Pages/auth/Signup";
import WellcomePage from "./components/Pages/WellcomePage";
import ChatPage from "./components/Pages/ChatPage";
import OnlineUsers from "./components/Pages/OnlineUsers";
import OnlineGroups from "./components/Pages/OnlineGroups";
import CreateGroup from "./components/Pages/CreateGroup";
import PageNotFound from "./components/Pages/PageNotFound";
function App() {
  return (
    <div className="App">
      {/* <MainContainer /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="app" element={<MainContainer />}>
          <Route path="wellcome" element={<WellcomePage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="users" element={<OnlineUsers />} />
          <Route path="groups" element={<OnlineGroups />} />
          <Route path="create-group" element={<CreateGroup />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
