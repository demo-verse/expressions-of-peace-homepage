import { useMantineTheme, Container, Grid, Text, Button, Group, Avatar, UnstyledButton, Anchor, Code } from '@mantine/core';

const Footer = () => {
    const theme = useMantineTheme();
    {/* 'dark' | 'gray' | 'red' | 'pink' | 'grape' | 
'violet' | 'indigo' | 'blue' | 'cyan' | 'green' |
 'lime' | 'yellow' | 'orange' | 'teal' | */}
    return (
        <footer style={{ backgroundColor: theme.colors.grape[4]}}>

            <Container>
                <Grid justify="space-around">

                    <Grid.Col xs={12} sm={8} md={8} lg={8}>
                        
                        <Text weight={700} color="white" mb="10px" style={{fontSize: "1.8rem"}}>Expressions of Peace</Text>

                        <Text color="white" mb="5px" style={{fontSize: "1.4rem"}}>
                            Generation Peace!<br></br> How would you imagine, express and make a World Peace?
                        </Text>

                        {/* <Text color="white" mb="20px">
                            You can find the illustrations I used on <Anchor href="https://icons8.com/">www.icons8.com</Anchor>
                        </Text> */}

                        {/* <Button variant="white" color="black" onClick={() => redirectToLink('https://mantine.dev/')}>Check out Mantine</Button> */}
                    </Grid.Col>

                    <Grid.Col xs={12} sm={4} md={4} lg={4}>
                        <Code color="yellow" style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: 15 }}>
                            {/* Template made by */}
                            <Anchor href="https://github.com/Giuseppetm">
                                <UnstyledButton>
                                    <Group>
                                  
                                         <div className="menu-items">

                      <Anchor
                        href="https://discord.gg/sqjdyCWNAR"
                        target={"_blank"}
                      >
                        imagination
                      </Anchor> {" | "}
                      <Anchor
                        href="https://keybase.io/team/peacemakers"
                        target={"_blank"}
                      >
                         community
                      </Anchor>{" | "}
                      <Anchor
                        href="https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk"
                        target={"_blank"}
                      >
                        youtube
                      </Anchor> {" | "}
                      <Anchor
                        href="https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk"
                        target={"_blank"}
                      >
                        twitter
                      </Anchor> {" | "}
                      <Anchor
                        href="https://app.orbis.club/group/kjzl6cwe1jw147jurloxh41cderszpog6t2bho8kwoa90jfvj9dk0z930oykndk"
                        target={"_blank"}
                      >
                        bounties
                      </Anchor>
                    </div>
                                    </Group>
                                </UnstyledButton>
                            </Anchor>
                        </Code>
                    </Grid.Col>
                </Grid>
            </Container>
        </footer>
    )
};

export default Footer;

const redirectToLink = (link: string): void => {
    window.open(link, '_blank');
};