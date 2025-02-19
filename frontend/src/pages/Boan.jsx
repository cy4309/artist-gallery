import video from "@/assets/videos/123.mp4";

const Boan = () => {
  return (
    <>
      {/* // <!-- 人物專訪 --> */}
      <div className="container-fluid" id="specialColumn">
        <h2 id="artForm">GOODOLDDAYZ</h2>
        <video autoPlay loop muted playsInline height="512" id="vid">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Boan;
