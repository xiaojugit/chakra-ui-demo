import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import SignInOrUp from './components/SignInOrUp';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Redirect to="/sign-in" />
      </Route>
      <SignInOrUp></SignInOrUp>
    </Router>
  );
}

export default App;
