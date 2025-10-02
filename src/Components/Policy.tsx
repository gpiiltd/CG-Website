import qualityCert from '../assets/svgImages/cert1.svg';
import PolicyCard from './PolicyCard';

const policies = [
  {
    title: "Corporate Governance Policy",
    description:
      "Our Corporate Governance Policy ensures transparency, accountability, and fairness in how Century Group is managed. It guides decision-making and builds trust with stakeholders.",
    image: qualityCert,
    viewLink: "/documents/corporate-governance.pdf",
    downloadLink: "/documents/corporate-governance.pdf",
  },
  {
    title: "Whistle Blowing",
    description:
      "The Whistleblowing Policy provides a safe and confidential way to report misconduct. It protects individuals from retaliation and helps maintain integrity across the organization.",
    image: qualityCert,
    viewLink: "/documents/health-safety.pdf",
    downloadLink: "/documents/health-safety.pdf",
  },
  {
    title: "Health, Safety and Environment Policy",
    description:
      "Our HSE Policy puts people and the environment first. It promotes safe workplaces, prevents accidents, and reduces environmental impact in all our operations.",
    image: qualityCert,
    viewLink: "/documents/environment.pdf",
    downloadLink: "/documents/environment.pdf",
  },
  {
    title: "Anti-money Laundering Policy",
    description:
      "The Anti-Money Laundering Policy outlines measures to prevent financial crimes. It ensures compliance with regulations and safeguards our reputation.",
    image: qualityCert,
    viewLink: "/documents/environment.pdf",
    downloadLink: "/documents/environment.pdf",
  },
];
const Policy = () => {
  return (
    <div>
      {policies.map((policy, index) => (
        <PolicyCard key={index} {...policy} />
      ))}
    </div>
  );
};

export default Policy;
