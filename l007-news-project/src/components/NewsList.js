import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../hooks/usePromise';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = (props) => {
  /**
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);

        const q = props.category === 'all' ? '' : `&category=${props.category}`;

        await axios
          .get(
            `https://newsapi.org/v2/top-headlines?country=kr${q}&apiKey=e51b1f1da29e4670b9bc61056b4a312b`,
          )
          .then((res) => {
            setArticles(res.data.articles);
          })
          .catch((err) => {
            console.error(err);
          });

        setLoading(false);
      };

      fetchData();
    }, [props.category]);
  */

  const [loading, articles, error] = usePromise(() => {
    const q = props.category === 'all' ? '' : `&category=${props.category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${q}&apiKey=e51b1f1da29e4670b9bc61056b4a312b`,
    );
  }, [props.category]);

  return (
    <NewsListBlock>
      {loading && 'now loading'}
      {error && 'Error'}
      {articles && articles.map((a) => <NewsItem key={a.url} article={a} />)}
    </NewsListBlock>
  );
};

export default NewsList;
