import { Carousel } from "@mantine/carousel";
import { Button, Text, Container, useMantineTheme, Title } from "@mantine/core";
import "../Styles/SectionOne.scss";
import { Link } from "react-scroll";
import { MdOutlineArrowDownward } from "react-icons/md";
import { useState } from "react";

const SectionOne = () => {
  const theme = useMantineTheme();

  const carouselContent = {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as "column",
    backgroundColor: theme.colors.yellow[5],
    borderRadius: 15,
    gap: 15,
  };

  return (
    <section id="section-one">
      <Container>
        <Text color="black" align="center" mb="15px">
          <Title order={1}>What it takes to use the app? </Title>
        </Text>

        <Text color="black" align="center" mb="25px">
          It takes (almost) nothing but high level of generosity and awareness. Check it
          out!
        </Text>

        <Carousel
          withIndicators
          height={300}
          slideSize="33.333333%"
          slideGap="md"
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 15 },
          ]}
          loop
          align="start"
          pr="10px"
          pl="10px"
        >
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2}>1</Title>
              <Text style={{ textAlign: "center" }}>
                This is a blockchain-based app. <br></br>
                <br></br>In case you don't already have it, <br></br>install{" "}
                <a href="https://metamask.io" target={"_blank"}>
                  metamask wallet
                </a>{" "}
                on your browser, <br></br> then initiate your wallet and first
                account.
              </Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2}>2</Title>
              <Text style={{ textAlign: "center", textOverflow: "unset" }}>
                After having an account in the wallet, <br></br>{" "}
                <a href="https://goerlifaucet.com" target={"_blank"}>
                  get some free tokens
                </a>{" "}
                for the Görli test network.{" "}
              </Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2}>3</Title>
              <Text style={{ textAlign: "center" }}>Now you are ready.</Text>
              <Link to="section-peacemaker" smooth duration={500}>
                <Button
                  color="cyan"
                  rightIcon={<MdOutlineArrowDownward size={16} />}
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
