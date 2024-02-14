import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./components/Navbar"

import TextForm from "./components/TextForm"
import About from "./components/About"
import {useEffect, useState} from "react"
import Alert from "./components/Alert"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("mode") || "light"
  })
  const [alert, setAlert] = useState(null)
  useEffect(() => {
    // Update body background color based on mode
    document.body.style.backgroundColor = mode === "dark" ? "#131634" : "white"
    // Save mode to local storage
    localStorage.setItem("mode", mode)
  }, [mode])
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#131634"
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar
        title="TextUtil"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <Router>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/TextForm"
              element={
                <TextForm
                  hedding="Enter the text to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />

            <Route exact path="/About" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
