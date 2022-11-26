import { Grid, Text, Container, Title, Image, Button } from "@mantine/core";

const SectionThree = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-three">
      <Container>
        <Grid justify="space-around">
          <Grid.Col xs={6} sm={4} md={4} lg={4}>
            <Image
              src={require("../Images/lime-bicycle-riding.png")}
              alt={"sample2"}
              style={{ width: "100%" }}
            />
          </Grid.Col>
          <Grid.Col xs={6} sm={8} md={8} lg={8}>
            <div style={{ marginBottom: 20 }}>
              <Text color="black">
                <Title order={1}>Your expression, your decision</Title>
                Expressions of Peace extend the Freedom of Expression;
                imagined and being implemented as a novel and sustainable method
                for assuring a World Peace, <br></br><br></br> (optionally) as a citizen of any
                country, while experiencing this along with an
                attitude & behavior of a world residency.
                {/* Expressions of Peace extend the Freedom of Expression, it is
                pretty much like "anything non-violent goes". */}
              </Text>
            </div>
            {/* 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 
'violet' | 'indigo' | 'blue' | 'cyan' | 'green' |
 'lime' | 'yellow' | 'orange' | 'teal' | */}
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
