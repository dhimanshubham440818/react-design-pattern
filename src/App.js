import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './react-router-config/AppRoutes';
import { store } from '../src/Redux/configureStore'

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
