import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {clearTextAction, sayHelloAction} from "./actions/Actions"
import MainPage from "./pages/mainPage/MainPage";

function App() {
    const dispatch = useDispatch();
    const  title = useSelector(state=>state.title.title)


    const  changeText = () =>{
       dispatch(sayHelloAction("Mirlan"))
    }

    const  clearText =()=>{
        dispatch(clearTextAction())
    }
  return (
    <div className="App">

      {/*my-app - {title}*/}


      {/*  <button onClick={changeText}>change text</button>*/}
      {/*  <button onClick={clearText}>clear text</button>*/}
        <MainPage/>
    </div>
  );
}

export default App;
