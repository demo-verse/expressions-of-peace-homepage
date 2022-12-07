import {
  useMantineTheme,
  Container,
  Grid,
  Text,
  Button,
  Group,
  Avatar,
  UnstyledButton,
  Anchor,
  Code,
} from "@mantine/core";

const Footer = () => {
  const theme = useMantineTheme();
  {
    /* 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 
'violet' | 'indigo' | 'blue' | 'cyan' | 'green' |
 'lime' | 'yellow' | 'orange' | 'teal' | */
  }
  return (
    <footer style={{ backgroundColor: theme.colors.grape[4] }}>
      <Container>
        <Grid justify="space-around">
          <Grid.Col xs={12} sm={8} md={8} lg={8}>
            <Text
              color="white"
              style={{ fontSize: "1.8rem", marginBottom: "1rem", color:"black" }}
            >
              Generation Peace!
            </Text>

            <Text color="white" style={{ fontSize: "1.2rem", color:"black" }}>
              How would you imagine,<br></br> express and make
              <br></br>{" "}
              <Button
                color="dark"
                style={{ marginTop: "0.6rem", fontSize: "1.2rem" }}
                onClick={() => redirectToLink("https://www.aworldpeace.org")}
              >
                A World Peace?
              </Button>
            </Text>

            <Text style={{ marginTop: "4rem" }}>
              <i>
                <strong>tip: think outside of the box  or
                better,{" "}
                <span
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    padding: "0.2rem",
                  }}
                >
                  ignore the box.
                </span>
                </strong>
              </i>{" "}
            </Text>
            
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Code
              color="yellow"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: 15,
              }}
            >
              {/* Template made by */}
              <Group>
                <div
                  className="menu-items"
                  style={{ marginTop: "1rem", fontSize: "1rem" }}
                >
                  <Anchor
                    href="https://discord.gg/sqjdyCWNAR"
                    target={"_blank"}
                  >
                    community
                  </Anchor>{" "}
                  {" | "}
                  <Anchor
                    href="https://miro.com/app/board/uXjVOX94E5k=/?share_link_id=267054985896"
                    target={"_blank"}
                  >
                    imagination
                  </Anchor>
                  {" | "}
                  <Anchor
                    href="https://github.com/demo-verse"
                    target={"_blank"}
                  >
                    github
                  </Anchor>{" "}
                </div>
                <div
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    marginTop: "1.2rem",
                    padding: "1.2rem",
                  }}
                >
                  2020-2022 © Peace Family <br></br>
                  <br></br>
                  stateful.art ❤️ demoVer.se <br></br>
                  {"{"} all rights acknowledged {"}"} <br></br>
                  <br></br>
                  "copyrighting a World Peace is for losers" © Thanksy
                  <hr></hr>
                  future.made@offsetmovement.org
                </div>
              </Group>
            </Code>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
