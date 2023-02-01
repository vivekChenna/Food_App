import Navbar from "../components/Navbar";
const Shimmer = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="shimmer-list">
        {Array(15)
          .fill("")
          .map((e, index) => {
            return <div key={index} className="shimmer"></div>;
          })}
      </div>
    </>
  );
};

export default Shimmer;
