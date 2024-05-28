import { Box, Flex, Text, Title } from "@mantine/core";
import murat3 from "../../assets/murat3.jpg";

const Author = () => {
  return (
    <Flex gap="30px" pl="20px" pt="20px">
      <img
        height="550px"
        src={murat3}
        alt=""
        style={{ borderRadius: "30px" }}
      />
      <Box  mt="xl">
        <Title>Куанышбаев Мурод Жанабаевич</Title>
        <Text size="xl">
          Студент 4 курса Ташкентского Государственного Педагогического
          Университета имени Низами
        </Text>
        <Box mt="xl">
          <Text size="xl">
            <strong>Немного слов от Автора:</strong>
          </Text>
          <Text size="xl" mt="md">
            Надеюсь этот сайт поможет многим учителям и их ученикам, в понимании
            Закона Сохранения Энергии
          </Text>
          <Text size="xl" mt="md">
            Сайт был разработан для преподавания этой интересной темы на основе
            информационно коммуникационных технологий в общеобразовательных
            школа
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Author;
