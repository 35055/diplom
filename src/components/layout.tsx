import { AppShell, Burger, Image, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";
import { IconHome, IconMicroscope, IconNotes, IconUserSquare } from "@tabler/icons-react";
import { useState } from "react";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [closeToggle, setCloseToggle] = useState(true);

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 70,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Image
          onClick={() => setCloseToggle((prev) => !prev)}
          src={logo}
          h={80}
          w={230}
          fit="contain"
          style={{ cursor: "pointer" }}
        />
      </AppShell.Header>

      <AppShell.Navbar
        pt="md"
        style={{
          width: closeToggle ? "4em" : "20%",
          overflow: "hidden",
          transition: "width 500ms",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <NavLink
          to="/"
          component={Link}
          label={<Text size="xl">Главная</Text>}
          leftSection={<IconHome size="2rem" stroke={1.5} />}
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
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
