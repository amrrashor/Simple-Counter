import { ThemeProvider } from 'styled-components'
import {Provider} from 'react-redux'
import {store} from './store/store'
import Theme from './utilities/theme';
import Counter from './features/counter/Counter';
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Provider store={store}>
        <Counter /> 
      </Provider>
    </ThemeProvider>
  );
}

export default App;
