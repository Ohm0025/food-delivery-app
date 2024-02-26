import Cover from "./components/cover/Cover";
import HowtoComponent from "./components/howto/howtoComponent/HowtoComponent";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <div className="min-h-[100vh]">
      <NavBar />
      <Cover />
      <HowtoComponent />
    </div>
  );
}

export default App;
