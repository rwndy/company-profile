
interface RequestOptions {
  method?: string;
  headers?: { [key: string]: string };
  body?: any;
}

export async function fetchData<T>(
  url: string,
  method = 'GET',
  config: RequestOptions = {},
  timeout = 5000
): Promise<T> {
  const controller = new AbortController();
  const { signal } = controller;

  const { headers = {}, body } = config;

  const options: RequestInit = {
    method,
    headers: new Headers(headers),
    signal
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const timeoutId = setTimeout(() => {
    controller.abort();
    console.error('Request timed out');
  }, timeout);

  try {
    const response = await fetch(url, options);

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Error fetching data:', error);
    throw error;
  }
}
