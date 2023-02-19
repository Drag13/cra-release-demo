import "./App.css";

const chiefs = [
  {
    img: `/img/chief-cook-img/cook_1.png`,
  },
  {
    img: `/img/chief-cook-img/cook_1.png`,
  },
];

function AppImage({ src, alt }) {
  return <img src={`${process.env.PUBLIC_URL}${src}`} alt={alt} />;
}

function App() {
  return (
    <div className="App">
      {chiefs.map(({ src }, i) => (
        <AppImage src={src} alt={"demo" + i} />
      ))}
    </div>
  );
}

export default App;
