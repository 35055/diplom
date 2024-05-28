import { AppShell, Burger, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import NavbarContent from "./app-shell/navbar-content";

const Layout = () => {
  const [opened, { toggle }] = useDisclosure();
  const [closeToggle, setCloseToggle] = useState(true);
  const { pathname } = useLocation();

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 70,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      style={{
        marginLeft: !closeToggle ? "300px" : "0",
        transition: "margin-left 500ms",
        marginBottom: pathname == "/plan" ? "100px" : "0",
      }}
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Image
          // onClick={() => setCloseToggle((prev) => !prev)}
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
          width: closeToggle ? "4em" : "300px",
          transition: "width 500ms",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <NavbarContent />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
