type APIResponseType = {
  data: {
    allServices: {
      serviceName: string;
      pricing: string;
    }[];
  };
};

type FetchCMSContentResult = { type: 'ok'; data: APIResponseType } | { type: 'err' };

const DATOCMS_URL = 'https://graphql.datocms.com/';

const QUERY = `query {
    allServices {
      serviceName
      pricing
    }
  }`;

const request = async (): Promise<APIResponseType> => {
  const response = await fetch(DATOCMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query: QUERY,
    }),
  });

  if (!response.ok) throw new Error(response.statusText);

  return response.json();
};

export const fetchCMSContent = async (): Promise<FetchCMSContentResult> => {
  try {
    const result = await request();

    return { type: 'ok', data: result };
  } catch {
    return { type: 'err' };
  }
};
