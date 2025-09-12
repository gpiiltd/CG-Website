import { Typography } from './Components/Typography';

function App() {
  return (
    <>
      <div className="flex justify-center items-center pt-36 bg-primary">
        <Typography size="xl" weight={{ md: 'bold', base: 'light', lg: 'bold' }} color="primary">
          Your personal shopping assistant at your fingertips, Simply share the url to the item you
          want, and we'll take care of the purchasing and delivery process for you, ensuring it
          arrives right at your doorstep.
        </Typography>
      </div>
    </>
  );
}

export default App;
