import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import LogInPage from "./pages/LogInPage.tsx";
import SingUpPage from "./pages/SingUpPage.tsx";
import {Container} from "@mui/material";
import ErrorPage from "./pages/ErrorPage.tsx";

const App = () => {
  return (
    <Container fixed>
      <div className="w-full flex justify-center h-screen items-center ">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="login" element={<LogInPage/>}/>
          <Route path="singup" element={<SingUpPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
      </div>
    </Container>
  );
};

export default App;
