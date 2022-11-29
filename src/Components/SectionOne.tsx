import { Carousel } from "@mantine/carousel";
import { Button, Text, Container, useMantineTheme, Title } from "@mantine/core";
import "../Styles/SectionOne.scss";
import { Link } from "react-scroll";
import { MdOutlineArrowDownward } from "react-icons/md";

const SectionOne = () => {
  const theme = useMantineTheme();

  const carouselContent = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    backgroundColor: theme.colors.dark[5],
    // borderRadius: 0,
    // gap: 15,
    color: "white",
    fontSize: "1.4rem",
  };

  return (
    <section id="section-one">
      <Container>
        <Text color="black" align="center" mb="15px">
          <Title order={1}>Feeling like peacemaking today?</Title>
        </Text>

        <Text color="black" align="center" mb="25px" style={{fontSize: "1.4rem"}}>
          It only takes high level of generosity and awareness.
        </Text>

        <Carousel
          withIndicators
          height={320}
          slideSize="50%"
          slideGap="md"
          breakpoints={[
            { maxWidth: "lg", slideSize: "50%" },
            // { maxWidth: "xl", slideSize: "100%" },
            { maxWidth: "md", slideSize: "100%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 15 },
          ]}
          loop
          align="start"
          pr="10px"
          pl="10px"
        >
          <Carousel.Slide>
            <div style={carouselContent}>
              {/* <Title order={1}>1</Title> */}
              <Text style={{ textAlign: "center" }}>
                Start with an introduction to blockchain, <br></br>{" "}
                 <a href="https://blockgeeks.com/guides/what-is-blockchain-technology" target={"_blank"}>here</a>.
              </Text>
            </div>
          </Carousel.Slide>

          <Carousel.Slide>
            <div style={carouselContent}>
              {/* <Title order={1}>1</Title> */}
              <Text style={{ textAlign: "center" }}>
                Installing a{" "}
                <a href="https://metamask.io" target={"_blank"}>
                  metamask wallet
                </a>{" "} <br></br>
                on your browser <br></br> is a requirement.
              </Text>
            </div>
          </Carousel.Slide>

          <Carousel.Slide>
            <div style={carouselContent}>
              {/* <Title order={2}>2</Title> */}
              <Text style={{ textAlign: "center", textOverflow: "unset" }}>
              Lastly, free tokens for <br></br> <a href="https://goerlifaucet.com" target={"_blank"}>
               Görli testnet 
                </a>{" "}
                 <br></br>  are also needed.{" "}
              </Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              {/* <Title order={3}>3</Title> */}
              {/* <Text style={{ textAlign: "center" }}>Now you are ready.</Text> */}
              <Link to="section-peacemaker" smooth duration={500}>
                <Button
                  color="violet"
                  leftIcon={<MdOutlineArrowDownward size={18} />}
                  radius="lg"
                  size="md"
                >
                  Express yourself!
                </Button>
              </Link>
            </div>
          </Carousel.Slide>
          {/* <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>4</Title>
                            <Text style={{textAlign: "center"}}>If you'd like to you could do that here...</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>5</Title>
                            <Text>Woah, you are quite convincing..</Text>
                        </div>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <div style={carouselContent}>
                            <Title order={2}>6</Title>
                            <Text>And we are done with the cards!</Text>
                        </div>
                    </Carousel.Slide> */}
        </Carousel>
      </Container>
    </section>
  );
};

export default SectionOne;
