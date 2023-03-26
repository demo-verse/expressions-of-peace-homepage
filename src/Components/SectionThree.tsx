import { Grid, Text, Container, Title, Image, Button } from "@mantine/core";

const SectionThree = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-three">
      <Container>
        <Grid justify="space-around">
          <Grid.Col xs={6} sm={8} md={8} lg={8}>
            <div style={{ marginBottom: 20 }}>
              <Text color="black">
                <Title order={1}>Your expression, your decision</Title>
                <Text style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
                  Our mission is to offer accessible and inclusive tools that
                  promote the concept of World Peace, and not to exploit or
                  commodify our users.
                </Text>

                <Text style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
                  To this end, we have developed an open-source proof-of-concept
                  app called Peacemaker. This app is powered by smart contracts
                  and operates on the web3 platform. It allows users to express
                  their desire for peace either as a resident of a particular
                  country or as a global citizen, while also maintaining
                  anonymity.
                </Text>

                <Text style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                  Unlike a petition, our approach is not to propose a text to
                  build consensus around but rather to empower individuals to
                  express their unique perspectives on peace. Through this
                  process, we hope to reach a mutual understanding that
                  acknowledges the equality of all human beings when it comes to
                  achieving peace (as well). 
                </Text>

                <Text style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                 Ultimately, our goal is to achieve a state of
                  mutual assured regeneration through this consensus-building
                  process.{" "}
                </Text>
                <Button
                  color="dark"
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginRight: "1rem",
                    marginTop: "2rem",
                    width: "11rem",
                    height: "4rem",
                    fontSize: "1.2rem",
                  }}
                  onClick={() =>
                    redirectToLink(
                      "https://www.youtube.com/watch?v=fyAuGtXctrk"
                    )
                  }
                >
                  See in action
                </Button>
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={4} lg={8}>
            <Image
              src={require("../Images/your-expression-your-decision-2.png")}
              alt={"sample2"}
              style={{ width: "100%", marginTop: "4rem" }}
            />
            <Button
              color="dark"
              style={{ marginTop: "0.6rem", fontSize: "1.2rem" }}
              onClick={() =>
                redirectToLink(
                  "https://goerli.etherscan.io/address/0x82e4afb4c80f84ffa2c95af29293c538f96f726e#code"
                )
              }
            >
              current contract
            </Button>

            <Button
              color="dark"
              style={{
                marginLeft: "0.8rem",
                marginTop: "0.6rem",
                fontSize: "1.2rem",
              }}
              onClick={() =>
                redirectToLink(
                  "https://github.com/demo-verse/expressions-of-peace/blob/main/contracts/ExpressionOfPeaceV3.sol"
                )
              }
            >
              next contract
            </Button>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

export default SectionThree;

const redirectToLink = (link: string): void => {
  window.open(link, "_blank");
};
