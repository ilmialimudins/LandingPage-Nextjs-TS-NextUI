import { Inter } from '@next/font/google';
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import regionsImage from '../assets/regions.jpg';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Container
      style={{ backgroundColor: 'black', padding: '1rem', margin: 'auto' }}
    >
      {/* Navbar */}

      <Navbar maxWidth={'lg'} isCompact variant={'static'}>
        <Navbar.Brand>
          <Text weight={'extrabold'} b color="inherit">
            Code X Academy feat @ilmialimudins
          </Text>
        </Navbar.Brand>
        {/* <Navbar.Content hideIn={'md'}>
          <Navbar.Link href="/Regions">Regions</Navbar.Link>
          <Navbar.Link href="/Country">Country</Navbar.Link>
          <Navbar.Link href="#">Provinces</Navbar.Link>
          <Navbar.Link href="#">Address</Navbar.Link>
          <Navbar.Link href="#">Category</Navbar.Link>
          <Navbar.Link href="#">Policy</Navbar.Link>
          <Navbar.Link href="#">Price Items</Navbar.Link>
          <Navbar.Link href="#">Service Task</Navbar.Link>
          <Navbar.Link href="#">Members</Navbar.Link>
        </Navbar.Content> */}
        <Navbar.Content>
          <Navbar.Link href="/Main">Go Home</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Log out
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              REGIONS
            </Text>
            <Button
              href="/regions"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Regions
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: `url(${regionsImage})`,
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              COUNTRY
            </Text>
            <Button
              href="/country"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Country
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              PROVINCES
            </Text>
            <Button
              href="/provinces"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Provinces
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              ADDRESS
            </Text>
            <Button
              href="/address"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Address
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              Category
            </Text>
            <Button
              href="/category"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Category
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              POLICY
            </Text>
            <Button
              href="/policy"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Policy
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              PRICE ITEMS
            </Text>
            <Button
              href="/priceItems"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Price Items
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              SERVICES TASK
            </Text>
            <Button
              href="/serviceTask"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Service Task
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      <Grid.Container
        justify="center"
        css={{
          height: '500px',
          backgroundImage: 'url(https://littlevisuals.co/images/left.jpg)',
          marginBottom: '20px',
        }}
      >
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{ width: '100%' }}>
            <Text weight={'bold'} size={55} css={{ textAlign: 'center' }}>
              MEMBERS
            </Text>
            <Button
              href="/members"
              size="md"
              shadow
              color="gradient"
              css={{ width: '100%', marginTop: '10px' }}
            >
              Go to Master Members
            </Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}

      {/* <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Front-end Developer"
            title="Learn Reactjs Next.js with Ilmialimudins"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3.500"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Back-end Developer"
            title="Learn JavaScript TypeScript  with Ilmialimudins"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="2.500"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Fullstack Developer"
            title="To become Software Developer with Ilmialimudins"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="350"
          />
        </Grid>
      </Grid.Container>
       */}
    </Container>
  );
}
