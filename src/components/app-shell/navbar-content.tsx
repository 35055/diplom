import { NavLink, Tooltip } from "@mantine/core";
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
      <Tooltip label="Главная" position="right" offset={25}>
        <NavLink
          to="/"
          component={Link}
          leftSection={<IconHome size="2rem" stroke={1.5} />}
        />
      </Tooltip>
      <Tooltip label="План урока" position="right" offset={25}>
        <NavLink
          to="/plan"
          component={Link}
          leftSection={<IconChecklist size="2rem" stroke={1.5} />}
        />
      </Tooltip>
      <Tooltip label="Тесты" position="right" offset={25}>
        <NavLink
          to="/quiz"
          component={Link}
          leftSection={<IconNotes size="2rem" stroke={1.5} />}
        />
      </Tooltip>
      <Tooltip label="Автор" position="right" offset={25}>
        <NavLink
          to="/author"
          component={Link}
          leftSection={<IconUserSquare size="2rem" stroke={1.5} />}
        />
      </Tooltip>
      <Tooltip label="Лаборатория" position="right" offset={25}>
        <NavLink
          to="/lab"
          component={Link}
          leftSection={<IconMicroscope size="2rem" stroke={1.5} />}
        />
      </Tooltip>
    </>
  );
};

export default NavbarContent;
