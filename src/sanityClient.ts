import { createClient } from 'next-sanity';

const projectId = import.meta.env.VITE_CENTURY_GROUP_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: projectId,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
