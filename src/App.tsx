import Icon from './assets/SvgImagesAndIcons';
import CardITO from './Components/Cards/CardITO';
function App() {
  return (
    <>
      <div>
        <h1>Century Website </h1>
        Icon here <Icon type="cgLogo" className="w-10 h-10" />
        CardITO here
        <CardITO
          imageUrl="cgLogo"
          title="Sample Title"
          description="This is a sample description."
        />
      </div>
    </>
  );
}

export default App;
