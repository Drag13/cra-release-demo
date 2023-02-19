import "./App.css";

const chiefs = [
  {
    img: "%PUBLIC_URL%/img/chief-cook-img/cook_1.png",
  },
];

function App() {
  return (
    <div className="App">
      <img src={chiefs[0].img} alt="demo" />
    </div>
  );
}

export default App;
