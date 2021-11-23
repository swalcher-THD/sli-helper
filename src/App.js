import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ThemedContext } from "./Context/ThemedContext";
import Landing from "./Landing/Landing";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={ThemedContext}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SLI Helper
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <br />
          <Landing />
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
