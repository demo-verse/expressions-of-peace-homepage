import {
  Button,
  Badge,
  Burger,
  Drawer,
  Code,
  Title,
  Anchor,
  Text,
} from "@mantine/core";
import { UnstyledButton, Group } from "@mantine/core";
import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  //const theme = useMantineTheme();
  const [opened, setOpened] = React.useState(false);
  const title = opened ? "Close navigation" : "Open navigation";

  return (
    <header>
      <div className="content-desktop">
        <div>
          <Badge size="lg" radius={10} color="dark">
            Constants of a World Peace
          </Badge>
        </div>
        <div className="navbar">
          <div className="navbar-item">
            <Link to="section-four" smooth duration={500}>
              A Flow of Peace
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-one" smooth duration={500}>
              Feel free
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-one" smooth duration={500}>
              Up and running
            </Link>
          </div>
          <div className="navbar-item">
            <Link to="section-four" smooth duration={500}>
              Cards
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
        <div className="burger-button">
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            title={title}
            size="sm"
          />
        </div>

        <Drawer
          transition="rotate-right"
          transitionDuration={250}
          transitionTimingFunction="ease"
          overlayOpacity={0.55}
          position="right"
          closeButtonLabel="Close drawer"
          title="Menu"
          padding="xl"
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <div className="menu">
            <div className="menu-items">
              <div className="menu-item">
                <Link
                  to="section-one"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>Carousel</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="section-four"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>Cards</Title>
                </Link>
              </div>
              <div className="menu-item">
                <Link
                  to="section-five"
                  smooth
                  duration={500}
                  onClick={() => setOpened(false)}
                >
                  <Title order={2}>FAQs</Title>
                </Link>
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

            <Code
              color="yellow"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: 15,
              }}
            >
              made by
              <Anchor href="https://github.com/Giuseppetm">
                <UnstyledButton>
                  <Group>
                    {/* <Avatar size={} color="orange">offset movement</Avatar> */}
                    <div className="menu-items">
                      <Text>Peacemakers community</Text>

                      <Anchor
                        href="https://discord.gg/sqjdyCWNAR"
                        target={"_blank"}
                      >
                        discord
                      </Anchor>
                      <Anchor
                        href="https://keybase.io/team/peacemakers"
                        target={"_blank"}
                      >
                        keybase
                      </Anchor>
                      <Anchor
                        href="https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk"
                        target={"_blank"}
                      >
                        orbis club
                      </Anchor>
                    </div>
                  </Group>
                </UnstyledButton>
              </Anchor>
            </Code>
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
