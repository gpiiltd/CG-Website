import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import LazyImage from './LazyImage';
import { Typography } from './Typography';

interface Certificate {
  title: string;
  image: string;
  description: string[];
  list: string[];
}


const Certificates = () => {
  const [certificatesData, setCertificatesData] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

   useEffect(() => {
    setLoading(true);
    client
      .fetch(
        `*[_type == "certificates"] | order(_createdAt desc) {
          _id,
          title,
          "image": image.asset->url,
          description,
          list
        }`
      )
      .then((data) => {
        setCertificatesData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching certificates:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  if (loading) return <div className="text-center py-8">Loading certificates...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (certificatesData.length === 0) {
    return <div className="text-center py-8">No certificates found.</div>;
  }
  return (
    <>
      {certificatesData.map((cert, index) => (
        <div
          key={index}
          className="w-full bg-[#FFF8F5] py-6 px-4 sm:px-8 space-y-10 rounded-xl mb-12"
        >
          <Typography
            size="lg"
            weight="bold"
            color="primary"
            className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl mb-4"
          >
            {cert.title}
          </Typography>

          <div className="flex flex-col gap-6  justify-center lg:flex-row lg:gap-12">
            <div className="flex-shrink-0">
              <LazyImage
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="rounded-lg max-w-full h-auto"
              />
            </div>

            <div>
              {cert.description?.map((desc, i) => (
                <p
                  key={i}
                  className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {desc}
                </p>
              ))}

              <ul className="list-disc list-inside space-y-2 text-[#11092F] font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                {cert.list?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Certificates;
