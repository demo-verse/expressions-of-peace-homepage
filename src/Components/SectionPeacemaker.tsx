import { Title, Text, Container, Grid, Image, Button } from "@mantine/core";
import { Link } from "react-scroll";
import { MdOutlineArrowDownward } from "react-icons/md";
const SectionPeacemaker = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-peacemaker">
      <Container>
        <Grid justify="space-around">
          <Grid.Col xs={6} sm={8} md={8} lg={8}>
            <div style={{ marginBottom: 20 }}>
              <Text color="black">
                <Title order={1}>Peacemaker</Title>
                If you have completed the setup guide above, we're good to go!
              </Text>
            </div>
            {/* <Link to="section-peacemaker" smooth duration={500}>
                            <Button color="cyan" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">All setup?</Button>
                        </Link> */}
            <Button
              color="dark"
              onClick={() => redirectToLink("https://expressionsofpeace.org")}
            >
              Enter the app
            </Button>
            <br></br>
            <br></br>

            <Text color="black">
              For the Peacemaker decentralized app (dapp), we have prepared
              simple smart contracts, and they are evolving. Each contract
              stores only the last expression, and previous ones go into
              transacrion history of those contracts.
            </Text>

            <br></br>
            <Button
              color="dark"
              onClick={() =>
                redirectToLink(
                  "https://github.com/demo-verse/expressions-of-peace/blob/main/contracts/ExpressionOfPeace.sol"
                )
              }
            >
              First version (v1)
            </Button>

            <Button
              style={{ marginLeft: "0.6rem", marginRight: "0.6rem" }}
              color="pink"
              onClick={() =>
                redirectToLink(
                  "https://github.com/demo-verse/expressions-of-peace/blob/main/contracts/ExpressionOfPeaceV2.sol"
                )
              }
            >
              Current (v2)
            </Button>

            <Button
              color="gray"
              onClick={() =>
                redirectToLink(
                  "https://github.com/demo-verse/expressions-of-peace/blob/main/contracts/ExpressionOfPeaceV3.sol"
                )
              }
            >
              Next (v3)
            </Button>
            <br></br>
            <br></br>
            <Text color="black">
              In the first version, we were only receiving the expression text.
              In the second, we have introduced an optional input, citizenship
              info. Third one will be more sophisticated, and again, optionally
              receiving full name and nick name as well.
            </Text>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={4} lg={4}>
            <Image
              src={require("../Images/lime-surfing.png")}
              alt={"sample1"}
              style={{ width: "100%" }}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionPeacemaker;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
