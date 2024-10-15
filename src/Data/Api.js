import { useState, useEffect } from 'react';

const useFetchAPI = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://politibiler-case.bks-dev.politiet.no/');
      const result = await response.json();
      const sortedData = result.sort((a, b) => a.id - b.id); // Sorterer dataen - er a.id mindre enn b.id så plasserer vi a først
      setData(sortedData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('En feil oppsto under datainnhentingen. Prøv igjen senere.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Returner dataen vi har hentet fra APIet, Loading-melding og en Error-melding
  return { data, loading, error };
};

export default useFetchAPI;
