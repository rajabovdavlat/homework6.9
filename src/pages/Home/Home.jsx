import React from "react";
import useAxios from "../../hooks/useAxios";
import { CondidateItem } from "../../components";

const Home = () => {
  const { data, loading } = useAxios();
  if (loading) {
    return (
      <div className="text-red-500 font-bold text-3xl text-center">Loading</div>
    );
  }
  return (
    <div>
      <ul className="container flex flex-col gap-6">
        {data &&
          data.map((condidate) => {
            return <CondidateItem key={condidate.id} condidate={condidate} />;
          })}
      </ul>
    </div>
  );
};

export default Home;
