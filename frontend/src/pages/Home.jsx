import { useEffect, useState } from "react";
import { getOrgData } from "@/services/orgDataService";
// import headVideo from "@/assets/videos/123.mp4";

const Home = () => {
  const [orgData, setOrgData] = useState([]);
  console.log(orgData);

  useEffect(() => {
    fetchOrgData();
  }, []);

  const fetchOrgData = async () => {
    try {
      const response = await getOrgData();
      setOrgData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <span>{orgData}</span> */}
      {orgData.map((event) => (
        <section key={event.UID + event.category}>
          <span>title: {event.title}</span>
          <span>category: {event.category}</span>
        </section>
      ))}
      <div className="w-full">
        {/* <video autoPlay loop muted playsInline>
          <source src={headVideo} type="video/mp4" />
        </video> */}
      </div>
    </>
  );
};

export default Home;
