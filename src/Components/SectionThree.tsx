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
                  Here, we provide open sourced and minded tools; and the
                  product is <strong>not</strong> you, it is meant to be a World
                  Peace, <u>thanks to you.</u>
                </Text>

                <Text style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                  We have developed a proof of concept app, and named that
                  Peacemaker. It's based on smart contracts, running on web3.
                </Text>
                <Text style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
                  Express peace as a citizen of a country, or by default, as a world
                  resident, anonymously.
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
                  redirectToLink("https://www.youtube.com/watch?v=fyAuGtXctrk")
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
