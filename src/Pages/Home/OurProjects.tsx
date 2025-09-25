import { Typography } from '../../Components/Typography';
import VideoSlider from '../../Components/VideoSlider';
import fpsologo from '../../assets/svgImages/video-thumbail.svg';
import bg_video from '../../assets/videos/CD_video.mp4';
import CPTL_SOLUTIONS from '../../assets/videos/CPTL_SOLUTIONS.mp4';
import Guardian_of_Okwori from '../../assets/videos/Guardian_of_Okwori.mp4';

// const videos = [
//   {
//     id: '1',
//     videoUrl: bg_video,
//     thumbnail: fpsologo,
//     title: 'TT FPSO Tour',
//     description:
//       'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
//   },
//   {
//     id: '2',
//     videoUrl: bg_video,
//     thumbnail: fpsologo,
//     title: 'TT FPSO Tour 2',
//     description:
//       'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
//   },
//   {
//     id: '3',
//     videoUrl: bg_video,
//     thumbnail: fpsologo,
//     title: 'TT FPSO Tour 3',
//     description:
//       'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people- first, execution and proven technical expertise.',
//   },
// ];

const videos = [
  {
    id: '1',
    videoUrl: Guardian_of_Okwori,
    thumbnail: fpsologo,
    title: 'Tamara Elmina (Guardian of okwori field)',
    description:
      'A Critical asset in Nigeria’s offshore energy infrastructure, keeping the life blood of the economy flowing.',
  },
  {
    id: '2',
    videoUrl: bg_video,
    thumbnail: fpsologo,
    title: 'Tamara Tokoni',
    description:
      'Positioned as a leading oil field infrastructure company, our focus is uncompromising safety standards, premium engineered and exceptional value, anchored in people-first, execution and proven technical expertise.',
  },
  {
    id: '3',
    videoUrl: CPTL_SOLUTIONS,
    thumbnail: fpsologo,
    title: 'Strategic Ports & Terminal Management solutions',
    description:
      'A trusted partner in cargo handling and facility management, delivering tailored solutions for offshore and onshore oil exploration and production projects.',
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
