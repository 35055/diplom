import video from "../assets/video.mp4";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <video
          src={video}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: "3",
          }}
          autoPlay
          loop
          muted
        ></video>
        <div
          style={{
            position: "relative",
            zIndex: "2",
            color: "white",
            textAlign: "center",
            paddingTop: "20%",
          }}
        ></div>
      </div>
    </>
  );
};

export default Home;
