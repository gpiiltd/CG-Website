import { useEffect, useState } from 'react';
// import qualityCert from '../assets/svgImages/cert2.svg';
import { client } from '../sanityClient';
import LazyImage from './LazyImage';
import { Typography } from './Typography';

interface Certificate {
  title: string;
  image: string;
  description: string[];
  list: string[];
}

// const certificatesData = [
//   {
//     title: 'Quality Management System',
//     image: qualityCert,
//     description: [
//       'Century Energy Services Limited has been assessed and certified to meet the requirements of ISO 9001:2015, the world’s most recognized quality management standard.',
//       'This certification covers a wide range of our operations, including:',
//     ],
//     list: [
//       'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
//       'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
//       'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
//       'Marine Support Services.',
//       'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
//       'Offshore Logistics Base Management.',
//       'Drilling Project Management and Drilling Support Services.',
//       'Supply Chain Management & Procurement Services.',
//       'Onshore and Offshore Field Development Planning and Support.',
//       'Full Field Management/Optimization.',
//       'Exploration and Production.',
//     ],
//   },
//   {
//     title: 'Health & Safety Management',
//     image: qualityCert,
//     description: [
//       'At Century Energy Services Limited, safety is not just a requirement—it is our culture. We are proud to be certified to ISO 45001:2018, the international standard for Occupational Health & Safety Management Systems (OHSMS).',
//       'This certification covers the following activities:',
//     ],
//     list: [
//       'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
//       'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
//       'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
//       'Marine Support Services.',
//       'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
//       'Offshore Logistics Base Management.',
//       'Drilling Project Management and Drilling Support Services.',
//       'Supply Chain Management & Procurement Services.',
//       'Onshore and Offshore Field Development Planning and Support.',
//       'Full Field Management/Optimization.',
//       'Exploration and Production.',
//     ],
//   },
//   {
//     title: 'Environmental Management System',
//     image: qualityCert,
//     description: [
//       'At Century Energy Services Limited, we take pride in operating responsibly, with a strong commitment to protecting the environment while delivering energy solutions. Our certification to ISO 14001:2015, the globally recognized standard for Environmental Management Systems, is proof of our dedication to sustainability',
//       'This certification covers the following activities:',
//     ],
//     list: [
//       'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
//       'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
//       'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
//       'Marine Support Services.',
//       'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
//       'Offshore Logistics Base Management.',
//       'Drilling Project Management and Drilling Support Services.',
//       'Supply Chain Management & Procurement Services.',
//       'Onshore and Offshore Field Development Planning and Support.',
//       'Full Field Management/Optimization.',
//       'Exploration and Production.',
//     ],
//   },
// ];

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
        console.log('Fetched certificates:', data);
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
