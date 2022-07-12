import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function App() {
  const store = useSelector(store => store)
  const dispatch = useDispatch()

  return (
    <div className="App">
      redux saga

      <div>
        <Link to={'/blog'}>
          open blog
        </Link>
      </div>
    </div>
  );
}

export default App;
