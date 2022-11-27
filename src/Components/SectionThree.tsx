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
                <Text style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
                  We have developed a proof of concept app, and launched that on
                  blockchain. 
                  <br></br><br></br>
                  An individual sovereignty on peace-oriented diplomacy, can experienced as a citizen of a country, or
                  by default, as a world resident, anonymously.
                  
                  
                </Text>
                {/* Expressions of Peace extend the Freedom of Expression, it is
                pretty much like "anything non-violent goes". */}
              </Text>
            </div>
            {/* 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 
'violet' | 'indigo' | 'blue' | 'cyan' | 'green' |
 'lime' | 'yellow' | 'orange' | 'teal' | */}
          </Grid.Col>
          <Grid.Col xs={6} sm={4} md={4} lg={8}>
            <Image
              src={require("../Images/your-expression-your-decision-2.png")}
              alt={"sample2"}
              style={{ width: "100%", marginTop: "4rem"}}
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
