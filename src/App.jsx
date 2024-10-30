import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SuperHeroes } from "./components/SuperHeroes.page";
import { RQSuperHeroes } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHero } from "./components/RQSuperHero.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heroes">Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-super-heroes/:heroId"
              element={<RQSuperHero />}
            ></Route>
            <Route path="/super-heroes" element={<SuperHeroes />}></Route>
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />}></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
