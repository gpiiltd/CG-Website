import Icon from './assets/SvgImagesAndIcons';
import CardImageTextOpa from './Components/Cards/CardImageTextOpa';
function App() {
  return (
    <>
      <div>
        <h1>Century Website </h1>
        Icon here <Icon type="cgLogo" className="w-10 h-10" />
        CardImageTextOpa here
        <CardImageTextOpa
          imageName="menPipe"
          title="Safety"
          description="Aligned with rigorous governance and HSE policies."
          // width="45%"
          // height="65%"
        />
        <CardImageTextOpa
          imageName="cgLogo"
          title="Sample Title"
          description="This is a sample description."
        />
      </div>
    </>
  );
}

export default App;
