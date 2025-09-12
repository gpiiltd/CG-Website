import { useState } from 'react';
import Icon from './assets/SvgImagesAndIcons';
import { ButtonComponent } from './Components/ButtonComponent';
import CardITO from './Components/Cards/CardITO';
import { TabBar } from './Components/ModalComponents';
function App() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleTabChange = (tabId: string) => {
    // Handle tab change logic here
    console.log('Selected tab:', tabId);
  };

  const tabs = [
    { id: 'tab1', label: 'First Tab' },
    { id: 'tab2', label: 'Second Tab' },
  ];

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
        <br />
        <ButtonComponent
          text="Click me"
          loading={isLoading}
          onClick={handleClick}
          bg_color="#3b82f6"
          width="30%"
        />
        <br />
        <ButtonComponent
          text="Outline with Icon"
          variant="outline"
          bg_color="#10b981"
          iconPosition="prefix"
          width="30%"
        />
        <br />
        <div className="App pt-4 bg-amber-300  flex flex-col justify-center m-10">
          <div className="mx-4">
            <TabBar
              tabs={tabs}
              variant="elevated"
              onTabChange={handleTabChange}
              className="custom-tab-bar"
            />
          </div>
        </div>
        <p className="m-10">
          You can check your console to check the response for the onchanged values
        </p>
      </div>
    </>
  );
}

export default App;
