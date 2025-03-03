import { useEffect, useState } from "react";
import { getOrgData } from "@/services/orgDataService";
import MapTw from "@/containers/evnets/MapTw";
import { Card } from "antd";

const Events = () => {
  const { Meta } = Card;
  const [hoveredId, setHoveredId] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const [orgData, setOrgData] = useState([]);
  const now_data = orgData.filter((data) => data.cityName.includes(clickedId));

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

  const handleMapHover = (id) => {
    setHoveredId(id);
  };

  const handleMapClick = (id) => {
    setClickedId(id);
  };

  return (
    <>
      <div className="container flex justify-center items-center">
        <MapTw onHover={handleMapHover} onClick={handleMapClick} />
        <div className="w-1/3">
          <div className="forcast">{hoveredId && <h5>{hoveredId}</h5>}</div>
        </div>
      </div>
      <div className="container mt-4">
        {now_data.length > 0 ? (
          now_data.map((data) => (
            <Card key={data.actId} hoverable>
              <Meta title={data.actName} description={data.description} />
              <p>{data.address}</p>
              <p>{data.endTime}</p>
            </Card>
          ))
        ) : (
          <p>No events found for the selected city.</p>
        )}
      </div>
    </>
  );

  // return (
  //   <>
  //     {/* {orgData.map((event) => (
  //       <section key={event.UID + event.category}>
  //         <span>title: {event.title}</span>
  //       </section>
  //     ))} */}
  //     <main className="container px-4 px-lg-5">
  //       {/* <!-- Heading Row--> */}
  //       <div className="row gx-4 gx-lg-5 align-items-center my-5">
  //         <div className="col-lg-7">
  //           <img
  //             className="img-fluid rounded mb-4 mb-lg-0"
  //             src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg"
  //             alt="..."
  //           />
  //         </div>
  //         <div className="col-lg-5">
  //           <h1 className="font-weight-light">Hightlights of the week</h1>
  //           {/* <!-- sourceWebName
  //         title
  //         startDate
  //         endDate --> */}
  //           {/* <!-- <p v-for="data in data" :key="data.length">title: {{ data.title }}</p> --> */}
  //           {/* <!-- <p>
  //           This is a template that is great for small businesses. It doesn't
  //           have too much fancy flare to it, but it makes a great use of the
  //           standard Bootstrap core components. Feel free to use this template
  //           for any project you want!
  //         </p> --> */}
  //           <a className="btn btn-primary moreInfoBtn" href="#!">
  //             More Info
  //           </a>
  //         </div>
  //       </div>

  //       {/* <!-- Call to Action--> */}
  //       <div className="card text-white bg-secondary my-5 py-4 text-center">
  //         <div className="card-body">
  //           <p className="text-white m-0">
  //             This call to action card is a great place to showcase some
  //             important information or display a clever tagline!
  //           </p>
  //         </div>
  //       </div>

  //       {/* <!-- Content Row--> */}
  //       <div className="row gx-4 gx-lg-5">
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               {/* <!-- <h2 className="card-title" v-for="data in data" :key="data.length"> --> */}
  //               <h2 className="card-title">
  //                 Card One
  //                 {/* <!-- {{ data.sourceWebName }} --> */}
  //               </h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
  //                 magni quas ex numquam, maxime minus quam molestias corporis
  //                 quod, ea minima accusamus.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               <h2 className="card-title">Card Two</h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
  //                 tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem
  //                 sunt quam eaque, vel, non in id dolore voluptates quos
  //                 eligendi labore.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               <h2 className="card-title">Card Three</h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
  //                 magni quas ex numquam, maxime minus quam molestias corporis
  //                 quod, ea minima accusamus.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               <h2 className="card-title">Card Three</h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
  //                 magni quas ex numquam, maxime minus quam molestias corporis
  //                 quod, ea minima accusamus.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               <h2 className="card-title">Card Three</h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
  //                 magni quas ex numquam, maxime minus quam molestias corporis
  //                 quod, ea minima accusamus.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-md-4 mb-5">
  //           <div className="card h-100">
  //             <div className="card-body">
  //               <h2 className="card-title">Card Three</h2>
  //               <p className="card-text">
  //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
  //                 magni quas ex numquam, maxime minus quam molestias corporis
  //                 quod, ea minima accusamus.
  //               </p>
  //             </div>
  //             <div className="card-footer">
  //               <a className="btn btn-primary btn-sm moreInfoBtn" href="#!">
  //                 More Info
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>
  //   </>
  // );
};

export default Events;
