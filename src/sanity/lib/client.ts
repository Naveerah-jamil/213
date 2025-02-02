import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '6re7yhas',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

export default client;
