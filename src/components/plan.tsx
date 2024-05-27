import { Container, Accordion, Title } from "@mantine/core";
import { planArray } from "../mock/plan";

const Plan = () => {
  return (
    <Container>
      <Accordion>
        <Title order={1} mb="lg">
          План урока по теме "Закон сохранения энергии"
        </Title>
        {planArray.map((el) => (
          <Accordion.Item key={el.title} value={el.title}>
            <Accordion.Control>{el.title}</Accordion.Control>
            {el.description.map((text, i) => (
              <Accordion.Panel key={text}>
                {`${i + 1}) `}
                {text}
              </Accordion.Panel>
            ))}
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default Plan;
