import { NavLink, Text } from "@mantine/core";
import {
  IconChecklist,
  IconHome,
  IconMicroscope,
  IconNotes,
  IconUserSquare,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NavbarContent = () => {
  return (
    <>
      <NavLink
        to="/"
        component={Link}
        label={<Text size="xl">Главная</Text>}
        leftSection={<IconHome size="2rem" stroke={1.5} />}
      />
      <NavLink
        to="/plan"
        component={Link}
        label={<Text size="xl">План</Text>}
        leftSection={<IconChecklist size="2rem" stroke={1.5} />}
      />
      <NavLink
        to="/test"
        component={Link}
        label={<Text size="xl">Тесты</Text>}
        leftSection={<IconNotes size="2rem" stroke={1.5} />}
      />
      <NavLink
        to="/author"
        component={Link}
        label={<Text size="xl">Автор</Text>}
        leftSection={<IconUserSquare size="2rem" stroke={1.5} />}
      />
      <NavLink
        to="/test"
        component={Link}
        label={<Text size="xl">Лаборатория</Text>}
        leftSection={<IconMicroscope size="2rem" stroke={1.5} />}
      />
    </>
  );
};

export default NavbarContent;
