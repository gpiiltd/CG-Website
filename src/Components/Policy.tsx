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
    title: "Health & Safety Policy",
    description:
      "Our Health & Safety Policy ensures a safe and healthy workplace, minimizing risks and ensuring compliance with global standards.",
    image: qualityCert,
    viewLink: "/documents/health-safety.pdf",
    downloadLink: "/documents/health-safety.pdf",
  },
  {
    title: "Environmental Management Policy",
    description:
      "Our Environmental Policy demonstrates our commitment to sustainability and protecting the environment while delivering energy solutions.",
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
