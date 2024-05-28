import { Box, Title } from "@mantine/core";
import video from "../../assets/video4.mp4";

const HomeHeader = () => {
  return (
    <Box
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        overflow: "hidden",
        background: "rgba(0,0,0,0.8)",
      }}
    >
      <video
        id="background-clip"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      ></video>
      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <Title
          style={{
            zIndex: 2,
            fontSize: "120px",
            textAlign: "center",
            coloe: "#B8B8B8",
          }}
        >
          Закон сохранения энергии
        </Title>
      </Box>
    </Box>
  );
};

export default HomeHeader;
