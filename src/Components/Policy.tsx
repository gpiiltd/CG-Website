import { useEffect, useState } from 'react';
import PolicyCard from './PolicyCard';
import { client } from '../sanityClient';

interface Policy {
  _id: string;
  title: string;
  description: string;
  coverImage: string;
  pdfDocument: string;
}
const Policy = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "policies"] | order(_createdAt asc) {
          _id,
          title,
          description,
          "coverImage": coverImage.asset->url,
          "pdfDocument": pdfDocument.asset->url
        }`
      )
      .then(setPolicies)
      .catch(console.error);
  }, []);

  return (
    <div>
      {policies.map((policy) => (
        <PolicyCard
          key={policy._id}
          id={policy._id}
          title={policy.title}
          description={policy.description}
          coverImage={policy.coverImage}
          pdfDocument={policy.pdfDocument}
        />
      ))}
    </div>
  );
};

export default Policy;
