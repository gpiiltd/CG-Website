import Icon from './assets/SvgImagesAndIcons';
import CardImageTextOpa from './Components/Cards/CardImageTextOpa';
import CardWithImage from './Components/Cards/CardWithImage';
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
        <CardWithImage
          imageName="menPipe"
          title="Deployment, Operation & Maintenance of Offshore infrastructure"
          description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed."
          link="Learn More"
        />
      </div>

      <div className="flex w-full gap-2">
        <CardWithImage
          imageName="menPipe"
          title="Deployment, Operation & Maintenance of Offshore infrastructure"
          description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed."
          link="Learn More"
        />
        <CardWithImage
          imageName="menPipe"
          title="Deployment, Operation & Maintenance of Offshore infrastructure"
          description="From offshore infrastructure deployment, to energy logistics, our integrated services are designed."
          link="Learn More"
        />
      </div>
    </>
  );
}

export default App;
