import { Title, Text, Container, Grid, Image, Button } from "@mantine/core";
import { MdFormatQuote, MdOutlineFormatQuote } from "react-icons/md";

const SectionTwo = () => {
  //const theme = useMantineTheme();

  return (
    <section id="section-two">
      <Container>
        <Grid justify="space-around">
        <Grid.Col xs={6} sm={8} md={6} lg={6}>
            <Image
              src={require("../Images/lime-surfing.png")}
              alt={"sample1"}
              style={{ width: "100%" }}
            />
          </Grid.Col>
          <Grid.Col xs={6} sm={8} md={8} lg={8}>
            <div style={{ marginBottom: 20}}>
              <Text color="black" style={{ marginBottom: "22px" }}>
                <Title order={1}  style={{textAlign: "center", fontSize: "2.2rem"}}>The world runs on contracts</Title>
                
                

                {/* Following the time, the invention of writing around 3400 BC, our
                civilization made use of for many purposes. We have
                mainly used that primarily for recording messages of concern of
              a person, or many, sometimes all people.{" "} */}
              </Text>

              <Text style={{fontSize: "1.4rem", marginBottom: "1.rem" }}>
              <MdOutlineFormatQuote size={"20"} />The Egyptian-Hittite peace treaty, following the battle of Kadesh is believed to be the earliest example of any written international agreement of any kind.
              <MdOutlineFormatQuote size={"20"}/> -- <a href="https://en.wikipedia.org/wiki/Battle_of_Kadesh" target={"_blank"}><i>Wikipedia</i></a>
              </Text>

              <Text color="black" style={{ marginBottom: "22px", marginTop: "22px", fontSize: "1.4rem" } }>
              Most peace treaties in our history have been sealed following battles, 
              wars, periods of violence and inhumane experiences; 
              resulting with traumas, ending of lives, 
              forcing people migrating to the realms and realities of 
              <i>(known and unknown)</i> unknowns.

              </Text>

              <Text color="black" style={{ marginBottom: "22px",fontSize: "1.4rem" } }>
                <strong>Today</strong>, with a shared purpose, backed by{" "}
                 
                <a href="https://www.aworldpeace.org/#our-right" target={"_blank"}>a new human right</a>
                {" "}and technology, <strong>we can</strong> seal a World Peace treaty, {" "}
    
                <a href="https://www.expressionsofdemand.org" target={"_blank"}>proactively</a>
                , as one humanity.
                {/* , which shall be lasting forever and ever. */}
              </Text>

              {/* <Text color="black">
                "Everyone is free to be proactive, claim their equality, and use
                their free will to participate in a World Peace treaty, and be a
                legitimate co-signer of it, regardless of their entitlement,
                being official or not."
              </Text> */}

              {/* <Text color="black">
                When a stakeholder makes an Expression of Peace, it means they
                do not exclude any other participants on peacemaking.
                <br></br>
                <br></br>
                It takes a high level of generosity and the least need for
                caution; which results an acceptance of one big humanity, and an
                attitude and a feeling of living a world residency.
              </Text> */}
            </div>
            {/* <Button color="yellow">Check it out</Button> */}
          </Grid.Col>
         
        </Grid>
      </Container>
    </section>
  );
};

export default SectionTwo;
