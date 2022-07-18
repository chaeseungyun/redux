import Counter from "./module/Counter";
import Theme from "./module/darkModeButton";
import ToDo from './module/toDo'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { toDark, toWhite } from './module/modeChange'

function App() {
  const style = useSelector(state => state.modeChanger);
  const theme = useSelector(state => (state.modeReducer.time));
  const dispatch = useDispatch()
  return (
    <div style={theme == 'light' ?
      {
        backgroundColor: 'white',
        color: 'black'
      }
      :
      {
        backgroundColor: 'black',
        color: 'white'
      }}>
      <Counter />
      <Theme />
      <ToDo />
    </div>

  );
}

export default App;
