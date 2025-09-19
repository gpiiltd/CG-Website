import qualityCert from '../assets/svgImages/cert2.svg';
import { Typography } from './Typography';

const certificatesData = [
  {
    title: 'Quality Management System',
    image: qualityCert,
    description: [
      'Century Energy Services Limited has been assessed and certified to meet the requirements of ISO 9001:2015, the world’s most recognized quality management standard.',
      'This certification covers a wide range of our operations, including:',
    ],
    list: [
      'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
      'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
      'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
      'Marine Support Services.',
      'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
      'Offshore Logistics Base Management.',
      'Drilling Project Management and Drilling Support Services.',
      'Supply Chain Management & Procurement Services.',
      'Onshore and Offshore Field Development Planning and Support.',
      'Full Field Management/Optimization.',
      'Exploration and Production.',
    ],
  },
  {
    title: 'Quality Management System',
    image: qualityCert,
    description: [
      'Century Energy Services Limited has been assessed and certified to meet the requirements of ISO 9001:2015, the world’s most recognized quality management standard.',
      'This certification covers a wide range of our operations, including:',
    ],
    list: [
      'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
      'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
      'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
      'Marine Support Services.',
      'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
      'Offshore Logistics Base Management.',
      'Drilling Project Management and Drilling Support Services.',
      'Supply Chain Management & Procurement Services.',
      'Onshore and Offshore Field Development Planning and Support.',
      'Full Field Management/Optimization.',
      'Exploration and Production.',
    ],
  },
  {
    title: 'Quality Management System',
    image: qualityCert,
    description: [
      'Century Energy Services Limited has been assessed and certified to meet the requirements of ISO 9001:2015, the world’s most recognized quality management standard.',
      'This certification covers a wide range of our operations, including:',
    ],
    list: [
      'Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas Production Infrastructure / Facilities.',
      'Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs, MOPUs, Rigs, etc.).',
      'Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.',
      'Marine Support Services.',
      'FPSO, FSO, JOT, MOPU Mooring Design / Installation.',
      'Offshore Logistics Base Management.',
      'Drilling Project Management and Drilling Support Services.',
      'Supply Chain Management & Procurement Services.',
      'Onshore and Offshore Field Development Planning and Support.',
      'Full Field Management/Optimization.',
      'Exploration and Production.',
    ],
  },
];

const Certificates = () => {
  return (
    <>
      {certificatesData.map((cert, index) => (
        <div className="w-full bg-[#FFF8F5] py-6 px-4 sm:px-8 space-y-10 rounded-xl mb-12">
          {/* Left side - image */}
          <Typography
            size="lg"
            weight="bold"
            color="primary"
            className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl mb-4"
          >
            {cert.title}
          </Typography>
          <div
            key={index}
            className="flex flex-col gap-6 items-center justify-center lg:flex-row lg:gap-12"
          >
            <div className="flex-shrink-0">
              <img
                src={cert.image}
                alt={`${cert.title} Certificate`}
                className="rounded-lg max-w-full h-auto"
              />
            </div>

            {/* Right side - text */}
            <div>
              {/* <Typography
                size="lg"
                weight="bold"
                color="primary"
                className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl mb-4"
              >
                {cert.title}
              </Typography> */}

              {cert.description.map((desc, i) => (
                <p
                  key={i}
                  className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {desc}
                </p>
              ))}

              <ul className="list-disc list-inside space-y-2 text-[#11092F] font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                {cert.list.map((item, i) => (
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
