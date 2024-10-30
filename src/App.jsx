import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { SuperHeroes } from "./components/SuperHeroes.page";
import { RQSuperHeroes } from "./components/RQSuperHeroes.page";
import { HomePage } from "./components/Home.page";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RQSuperHero } from "./components/RQSuperHero.page";
import { DynamicParallel } from "./components/DynamicParallel.page";

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
              path="/rq-dynamic-parallel"
              element={<DynamicParallel heroIds={[1, 3]} />}
            />
            <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
            <Route path="/super-heroes" element={<SuperHeroes />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
