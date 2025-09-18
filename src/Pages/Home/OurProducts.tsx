// import { Typography } from '../../Components/Typography';
import { Typography } from '../../Components/Typography';
import VideoSlider from '../../Components/VideoSlider';
import fpsologo from '../../assets/svgImages/video-thumbail.svg';
import bg_video from '../../assets/videos/CD_video.mp4';

const videos = [
  {
    id: '1',
    videoUrl: bg_video,
    thumbnail: fpsologo,
    title: 'TT FPSO Tour',
    description:
      'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
  },
  {
    id: '2',
    videoUrl: bg_video,
    thumbnail: fpsologo,
    title: 'TT FPSO Tour 2',
    description:
      'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
  },
  {
    id: '3',
    videoUrl: bg_video,
    thumbnail: fpsologo,
    title: 'TT FPSO Tour 3',
    description:
      'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
  },
];
const OurProducts = () => {
  return (
    <div className=" ">
      <div className=" mt-26">
        <div className="p-24">
          <Typography
            size="lg"
            weight="bold"
            color="secondary"
            className="mb-2 text-center text-[#ED6C30]"
          >
            OUR PROJECTS
          </Typography>
          <VideoSlider videos={videos}    />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
