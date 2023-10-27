import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Jobs from './components/Jobs'
import JobItemDetails from './components/JobItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
const App = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <ProtectedRoute path="/" exact component={Home} />
    <ProtectedRoute path="/jobs" exact component={Jobs} />
    <ProtectedRoute path="/jobs/:id" exact component={JobItemDetails} />
    <Route path="/not-found" exact component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
