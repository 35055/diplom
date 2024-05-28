import { Accordion, Text, Title } from "@mantine/core";
import { planArray } from "../../mock/plan";

const Plan = () => {
  return (
    <Accordion variant="separated" w="90vw" pl="100px">
      <Title style={{ fontSize: "50px" }} mb="lg">
        План урока по теме "Закон сохранения энергии"
      </Title>
      {planArray.map((el) => (
        <Accordion.Item key={el.title} value={el.title}>
          <Accordion.Control>
            <Text size="xl">{el.title}</Text>
          </Accordion.Control>
          {el.description.map((text, i) => (
            <Accordion.Panel key={text}>
              <Text size="xl">
                {`${i + 1}) `}
                {text}
              </Text>
            </Accordion.Panel>
          ))}
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default Plan;
