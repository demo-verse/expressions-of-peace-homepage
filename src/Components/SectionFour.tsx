import { useMantineTheme, Container, Text, Title, Grid, Card, Image, Group } from '@mantine/core';

const SectionFour = () => {
    const theme = useMantineTheme();

    return (
        <section id="section-four">
            <Container>
                <Text color="black" align="center" style={{marginBottom: "1.2rem"}}>
                    <Title style={{fontSize: "2.2rem"}}  order={1}>It's your piece @ a World Peace</Title>

                </Text>
                <Text style={{fontSize: "1.4rem", marginBottom:"2rem", textAlign:"center" }}>
                Expressions of Peace extend the Freedom of Expression;
                imagined as a novel and sustainable method
                for assuring a World Peace, altogether.
                </Text>
                <Grid>
                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Card shadow="sm" p="lg" style={{ height: '100%'}}>
                            <Card.Section>
                                <Image src={require('../Images/someone-express-peace.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Someone expressed peace</Text>
                                {/* <Badge color="yellow" variant="light">
                                    Cool badge
                                </Badge> */}
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
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/someone-discover-an-expression.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>Someone else discovered that</Text>
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
                        <Card shadow="sm" p="lg" style={{ height: '100%' }}>
                            <Card.Section>
                                <Image src={require('../Images/they-acknowledge-each-other.png')} alt={'sample1'} />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                                <Text weight={500}>They acknowledged each other</Text>
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