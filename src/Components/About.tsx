import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core';
import { MdOutlineArrowDownward } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
    //const theme = useMantineTheme();

    return (
        <section id="about">
            <Container fluid>

                <div className="about-content">

                    {/* <div style={{ marginBottom: 15 }}>
                        <Text transform="uppercase" weight={500} color="yellow">
                            Constants of a World Peace
                        </Text>
                    </div> */}

                    <div style={{ marginBottom: 15 }}>
                        <Text>
                            <MediaQuery query="(max-width: 768px)" styles={{ fontSize: '2.8rem !important' }}>
                                <h1 className="title">Expressions of Peace</h1>
                            </MediaQuery>
                        </Text>
                    </div>

                    <div style={{ marginBottom: 25 }}>
                        <Text size="xl" color="black">
                            Your way of assuring peace to the rest of the world,<br></br> for <Anchor href="https://www.aworldpeace.org">a World Peace</Anchor>.
                        </Text>
                    </div>

                    <div className="buttons">
                        <Link to="section-two" smooth duration={500}>
                            <Button color="yellow" rightIcon={<MdOutlineArrowDownward size={16} />} radius="lg" size="md">Tell me more</Button>
                        </Link>

                        <Button variant="default" radius="lg" size="md">Other stuff</Button>
                    </div>

                </div>

            </Container>

        </section>
    );
};

export default About;