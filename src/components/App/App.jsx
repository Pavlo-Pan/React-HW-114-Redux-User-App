import { Provider } from 'react-redux';
import store from '.././../redux/store';
import User from '../User/User';
import UserForm from '../UserForm/UserForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Users Profile</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;