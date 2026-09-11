import { Route, Routes } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import LandingPage from "./pages/public/LandingPage";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route element={<LandingPage />} path="/" />
      </Route>
    </Routes>
  );
}

export default App;
