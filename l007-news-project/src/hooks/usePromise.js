import { useState, useEffect } from 'react';

const usePromise = (creator, deps) => {
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      await creator()
        .then((res) => {
          setArticles(res.data.articles);
        })
        .catch((err) => {
          setError(err);
        });

      setLoading(false);
    };

    fetchData();
  }, [deps]);

  return [loading, articles, error];
};

export default usePromise;
