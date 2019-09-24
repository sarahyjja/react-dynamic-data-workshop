import React from "react";
import { getUserData } from "../utils/getUserData";

const UserHeader = props => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const username = "sarahyjja";
    getUserData(username).then(response => setData(response));
  }, []);

  if (!data) {
    return <p>we are loading</p>;
  }

  const { avatar_url, html_url, name, followers, repos_url } = data;

  return (
    <div>
      <img src={avatar_url} />
      <h2>{html_url}</h2>
      <h2>{name}</h2>
      <h2>{followers}</h2>
      <h2>{repos_url}</h2>
    </div>
  );
};
export default UserHeader;
