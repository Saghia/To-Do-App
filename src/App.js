import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import logo from "./ciao3.svg";
import ContainerDev from "./components/ContainerDev.js";
import Title from "./components/Title.js";
import ImgRotate from "./components/ImgRotate";
import PCode from "./components/PCode";
import LinkGithubSaghia from "./components/LinkGithubSaghia";
import ListTodo from "./components/ListTodo";
const LinkGithubSaghiaVar = "https://github.com/Saghia";

function App() {
  return (
    <ContainerDev
      Title={<Title TextTitle={"TO-DO LIST"} />}
      ImgRotate={<ImgRotate img={logo} />}
      PCode={<PCode CodeText={"ReactJS"} />}
      ListTodo={<ListTodo TextButton={"Aggiungi Elemento alla ToDo List"} />}
      LinkGithubSaghia={<LinkGithubSaghia TextLink={LinkGithubSaghiaVar} />}
    />
  );
}

export default App;
