import { AppShell, Burger, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavbarContent from "../app-shell/navbar-content";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 60,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      style={{
        marginBottom: pathname == "/plan" ? "100px" : "0",
        width: "100%",
        height: "100%",
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Image
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <NavbarContent />
      </AppShell.Navbar>
      <AppShell.Main
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
