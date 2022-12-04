import {
  useMantineTheme,
  Badge,
  Button,
  Container,
  Text,
  Title,
  Grid,
  Card,
  Image,
  Group,
} from "@mantine/core";
import { Link } from "react-scroll";
import { MdOutlineArrowDownward } from "react-icons/md";


const SectionFour = () => {
  const theme = useMantineTheme();

  return (
    <section id="section-four">
      <Container>
        <Text color="black" align="center" style={{ marginBottom: "1.2rem" }}>
          <Title style={{ fontSize: "2.2rem" }} order={1}>
            A Flow of Peace
          </Title>
        </Text>
        <Text
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            textAlign: "start",
          }}
        >
          Expressions of Peace extend the Freedom of Expression; imagined as
          sincere and sustainable ways of assuring a World Peace to the rest of
          the world. in a multi-stakeholder and peer-to-peer fashion,
          altogether.
        </Text>
        <Grid>
          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image
                  src={require("../Images/someone-express-peace.png")}
                  alt={"sample1"}
                />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Title style={{ fontSize: "1.4rem", textAlign: "center" }}>
                  Imagine & express
                </Title>
                <Text weight={400} style={{ fontSize: "1.2rem" }}>
                  Write an expression with your own words or quote from someone else.
                  It's best if it is an unconditional one.
                </Text>
                <Badge size="xl" radius={10} color="dark">
                  Post
                </Badge>
                <Link to="section-peacemaker" smooth duration={500}>
                <Button
                  color="violet"
                  leftIcon={<MdOutlineArrowDownward size={12} />}
                  radius="lg"
                  size="sm"
                >
                  try it out
                </Button>
              </Link>
              </Group>

              {/* <Text size="sm">
                                Discover the career of Dennis Farina and his roles in movies!
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button> */}
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image
                  src={require("../Images/someone-discover-an-expression.png")}
                  alt={"sample1"}
                />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Title style={{ fontSize: "1.4rem", textAlign: "center" }}>
                  Discover & reflect
                </Title>

                <Text weight={400} style={{ fontSize: "1.2rem" }}>
                  Discover someone's expression, start building an intentional and
                  international bond by reflection.{" "}
                </Text>
                <Badge size="lg" radius={10} color="dark">
                  Search, Comment
                </Badge>
                <Badge size="lg" radius={10} color="soon">
                  soon
                </Badge>
                
                {/* <Badge color="yellow" variant="light">
                                    Cool badge 3
                                </Badge> */}
              </Group>

              {/* <Text size="sm">
                                Discover the major roles of Dennis Farina and something else!
                            </Text>

                            <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button> */}
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card shadow="sm" p="lg" style={{ height: "100%" }}>
              <Card.Section>
                <Image
                  src={require("../Images/they-acknowledge-each-other.png")}
                  alt={"sample1"}
                />
              </Card.Section>

              <Group
                position="apart"
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Title style={{ fontSize: "1.4rem", textAlign: "center" }}>
                  Acknowledge peace
                </Title>

                <Text weight={400} style={{ fontSize: "1.2rem" }}>
                  {/* This is where the actual peer-to-peer diplomacy mimicry happens on this flow of peace.  */}
                  You've found an expression peaceful, and probably, as well the person expressed that ~ and you :).
                </Text>
                <Badge size="lg" radius={10} color="dark">
                  Like, Follow
                </Badge>
                <Badge size="lg" radius={10} color="soon">
                  soon
                </Badge>
                {/* <Badge color="yellow" variant="light">
                                    Cool badge 2
                                </Badge> */}
              </Group>

              {/* <Text size="sm">
                                Dennis Farina had a really great career with many opportunities!
                            </Text> */}

              {/* <Button variant="light" color="yellow" fullWidth mt="14px">
                                Find out
                            </Button> */}
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionFour;
