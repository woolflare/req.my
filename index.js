export default {
  async fetch(request) {
    const url = new URL(request.url);
    const headers = Object.fromEntries(request.headers);
    let body = '';

    try {
      body = await request.text();
    } catch (e) {
      body = 'Unable to read body';
    }

    const responseBody = {
      method: request.method,
      url: request.url,
      pathname: url.pathname,
      searchParams: Object.fromEntries(url.searchParams),
      headers: headers,
      body: body,
      ipInfo: {
        ip: request.headers.get('cf-connecting-ip'),
        country: request.cf.country,
        region: request.cf.region,
        city: request.cf.city,
        asn: request.cf.asn,
        isp: request.cf.asOrganization,
      }
    };

    return new Response(JSON.stringify(responseBody, null, 2), {
      headers: { 'content-type': 'application/json' },
    });
  },
};
