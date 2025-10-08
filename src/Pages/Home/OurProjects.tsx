import { useEffect, useState } from 'react';
import AnimatedScreen from '../../Components/Animations';
import { Typography } from '../../Components/Typography';
import VideoSlider from '../../Components/VideoSlider';
import { client } from '../../sanityClient';

const query = `*[_type == "project"]{
  id,
  title,
  description,
  "videoUrl": videoUrl.asset->url,
  "thumbnail": thumbnail.asset->url
}`;

const OurProjects = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await client.fetch(query);
        setProjects(projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <AnimatedScreen>
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
            <div className="mb-12 md:mb-6 lg:mb-3">
              {projects && projects.length > 0 ? (
                <VideoSlider videos={projects} />
              ) : (
                <Typography size="md" weight="normal" className="text-center text-gray-400">
                  No projects available.
                </Typography>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedScreen>
  );
};

export default OurProjects;
