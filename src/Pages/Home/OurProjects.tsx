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
const OurProjects = () => {
  return (
    <div className="md:16 lg:pb-32">
      <div className=" mt-26">
        <div className="">
          <Typography
            size="lg"
            weight="bold"
            color="secondary"
            className="mb-2 text-center text-[#ED6C30]"
          >
            OUR PROJECTS
          </Typography>
          <div className='mb-12 md:mb-6 lg:mb-3'>
            <VideoSlider videos={videos}    />
          </div>

        </div>
      </div>
    </div>
  );
};

export default OurProjects;
