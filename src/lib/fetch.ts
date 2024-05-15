import { cookies } from 'next/headers';

export default (url: string, params: any) => {
  const cookieStore = cookies();

  const jwt = cookieStore.get('jwt');

  return fetch(`${process.env.API_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt?.value}`,
    },
    ...params,
  });
};
