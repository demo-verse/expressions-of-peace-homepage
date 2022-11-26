import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionTwo = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                        <Text color="black">
                                <Title order={1}>You've got right!</Title>
                                "Everyone is free to be proactive, claim their equality, and use their free will to participate in a World Peace treaty, and be a legitimate co-signer of it, regardless of their entitlement, being official or not." 
                            </Text>
                          
                            {/* <Text color="black">
                                <Title order={1}>What are they, really?</Title>
                                When a stakeholder makes an Expression of Peace, it means they do not exclude any other participants on peacemaking.
<br></br><br></br>
It takes a high level of generosity and the least need for caution; which results an acceptance of one big humanity, and an attitude and a feeling of living a world residency.
                            </Text> */}
                        </div>
                        {/* <Button color="yellow">Check it out</Button> */}
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionTwo;