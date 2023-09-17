//import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`https://api.github.com/users/mujeebnazir`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);

  return (
    <div className="text-center text-3xl bg-slate-500 shadow-lg rounded-lg">
      Github follower: {data.followers}
      <div className="">
        <img
          src={data.avatar_url}
          alt="profile-pic"
          className="justify-between shadow-lg rounded-lg h-12 w-12"
        />
      </div>
    </div>
  );
}

export default Github;

export const githubLoader = async () => {
  const response = await fetch(`https://api.github.com/users/mujeebnazir`);
  return response.json();
};
