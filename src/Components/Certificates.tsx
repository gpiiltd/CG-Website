import qualityCert from '../assets/svgImages/cert2.svg';
import { Typography } from './Typography';

const Certificates = () => {
  return (
    <div className=" bg-[#FFF8F5] p-4 rounded-xl px-8">
      <Typography size="lg" weight="bold" color="primary" className="mb-2 text-start">
        Quality Management System
      </Typography>
      <div className="flex flex-col gap-4 md:flex-row lg:gap-12 pt-6">
        <div>
          <img src={qualityCert} alt="Quality Certificate" className="rounded-lg " />
        </div>

        <div>
          <p className="text-gray-700 mb-4">
            Century Energy Services Limited has been assessed and certified to meet the requirements
            of ISO 9001:2015, the world’s most recognized quality management standard.
          </p>
          <p className="text-gray-700 mb-4">
            This certification covers a wide range of our operations, including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#11092F] font-bold">
            <li>
              Integrated Operation and Maintenance of Onshore, Swamp and Offshore Oil and Gas
              Production Infrastructure / Facilities.
            </li>
            <li>
              Mooring Installation / Demobilisation of Production Infrastructure (FPSOs, FSOs,
              MOPUs, Rigs, etc.).
            </li>
            <li>Alternative Crude Evacuation Support Services for Stranded Oil and Gas Assets.</li>
            <li>Marine Support Services.</li>
            <li>FPSO, FSO, JOT, MOPU Mooring Design / Installation.</li>
            <li>Offshore Logistics Base Management.</li>
            <li>Drilling Project Management and Drilling Support Services.</li>
            <li>Supply Chain Management & Procurement Services.</li>
            <li>Onshore and Offshore Field Development Planning and Support.</li>
            <li>Full Field Management/Optimization.</li>
            <li>Exploration and Production.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
