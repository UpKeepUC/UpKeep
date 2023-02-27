import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/topbar";
import Sidebar from "./pages/global/sidebar";
import Home from "./pages/home";
import Inventory from "./pages/inventory";
import MaintenanceTask from "./pages/maintenanceTask";
import Calendar from "./pages/calendar/calendar";
import Rooms from "./pages/rooms";
import Admin from "./pages/admin";
import UserForm from "./pages/userForm";
import FAQ from "./pages/faq";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path ="/" element={<Home />}/>
              <Route path ="/inventory" element={<Inventory />}/>
              <Route path ="/maintenanceTask" element={<MaintenanceTask />}/>
              <Route path ="/calendar" element={<Calendar />}/>
              <Route path ="/rooms" element={<Rooms />}/>
              <Route path ="/admin" element={<Admin />}/>
              <Route path ="/userForm" element={<UserForm />}/>
              <Route path ="/faq" element={<FAQ />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
