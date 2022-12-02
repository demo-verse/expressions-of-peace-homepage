import { Button, Badge, Burger, Drawer, Title, Group } from "@mantine/core";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header>
      <div className="content-desktop">
        <div>
          <Badge size="xl" radius={10} color="dark">
            Expressions of Peace
          </Badge>
        </div>
        <div className="navbar">
          <div className="navbar-item">
            <Link to="section-two" smooth duration={500}>
              Intro
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-four" smooth duration={500}>
              Flow
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-one" smooth duration={500}>
              Requirements
            </Link>
          </div>
          <div>
            <Link to="section-peacemaker" smooth duration={500}>
              <Button color="dark">DApp</Button>
            </Link>
          </div>
          {/* <div className="navbar-item">
            <Link to="section-five" smooth duration={500}>
              FAQS
            </Link>
          </div> */}

          <Button
            color="dark"
            onClick={() => redirectToLink("https://www.aworldpeace.org")}
          >
            A World Peace
          </Button>
        </div>
      </div>

      <div className="content-mobile">
        <Group position="apart">
          <div>
            <div>
              <Badge size="lg" radius={10} color="dark">
                Expressions of Peace
              </Badge>
            </div>{" "}
          </div>
          <div className="burger-button">
            <Burger
              color="white"
              aria-label={title}
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              title={title}
              size="md"
            />
          </div>
        </Group>

        <Drawer
          transition="rotate-right"
          transitionDuration={250}
          transitionTimingFunction="ease"
          overlayOpacity={0.55}
          position="right"
          closeButtonLabel="Close drawer"
          title=""
          padding="xl"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className="menu">
            <div className="menu-items">
              <div className="menu-item">
                <Link
                  to="section-two"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>Intro</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="section-four"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>Flow</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="section-one"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>Requirements</Title>
                </Link>

                <Link
                  to="section-peacemaker"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title
                    style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}
                    order={2}
                  >
                    DApp
                  </Title>
                </Link>

                <Button
                  color="dark"
                  style={{ fontSize: "1.2rem" }}
                  onClick={() => redirectToLink("https://www.aworldpeace.org")}
                >
                  A World Peace
                </Button>
              </div>
            </div>

            <div className="menu-items">
              {/* <Text>Peacemakers community</Text>

                            <Anchor href='https://discord.gg/sqjdyCWNAR' target={"_blank"}>
                                discord
                            </Anchor>
                            <Anchor href='https://keybase.io/team/peacemakers' target={"_blank"}>
                                keybase
                            </Anchor>
                            <Anchor href='https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk' target={"_blank"}>
                                orbis club
                            </Anchor> */}
              {/* <Anchor href='https://matrix.to/#/#demoverse:matrix.org' target={"_blank"}>
                                matrix
                            </Anchor> */}
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
