import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import About from "./pages/About";
import { FeedbackProvider } from "./components/context/FeedbackContext";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIcon from "./components/AboutIcon";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<About />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
