import CategoryNav from "@c/CategoryNav.jsx";
import NewsList from "@v/NewsList.jsx";
import {useParams} from "react-router-dom";

export default () => {
  const params = useParams();
  const category = params.category || 'all'

  return (<>
    <CategoryNav />
    <NewsList category={category} />
  </>)
}
