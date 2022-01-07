import { Provider } from 'react-redux';

import './App.css';
import Addtodo from './components/AddTodo';
import ListTodo from './components/ListTodo';
import Appname from './components/AppName';
import Filtertask from './components/FilterTask';
import store from './store/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="container">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <ListTodo></ListTodo>
        <Filtertask></Filtertask>
      </div>
    </Provider>
  );
}

export default App;
