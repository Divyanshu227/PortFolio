export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;
    
    const STRATA_API_ENDPOINT = process.env.STRATA_API_ENDPOINT || 'https://strata-zt3x.vercel.app/api/messages';
    const STRATA_PROJECT_ID = process.env.STRATA_PROJECT_ID;
    const STRATA_API_KEY = process.env.STRATA_API_KEY;

    if (!STRATA_PROJECT_ID || !STRATA_API_KEY) {
      return res.status(500).json({ message: 'Server configuration error: Missing Strata credentials' });
    }

    const response = await fetch(STRATA_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-project-id': STRATA_PROJECT_ID,
        'Authorization': `Bearer ${STRATA_API_KEY}`
      },
      body: JSON.stringify({ name, email, subject, message })
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && (data.success || response.status === 200)) {
      return res.status(200).json({ success: true, ...data });
    } else {
      return res.status(response.status).json({ success: false, message: data.message || 'Transmission failed at gateway' });
    }
  } catch (error) {
    console.error('Strata Proxy Error:', error);
    return res.status(500).json({ success: false, message: error.message || 'Internal Server Error' });
  }
}
