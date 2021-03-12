import { createClient } from 'urql';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
if (!API_ENDPOINT) {
  throw new Error(
    'Could not find NEXT_PUBLIC_API_ENDPOINT in env variables. Remember to setup .env.{YOUR_ENV} files.',
  );
}

export default createClient({
  url: API_ENDPOINT,
  fetchOptions: {
    credentials: 'include',
  },
});
