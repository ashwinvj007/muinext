// src/pages/index.tsx

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Container, Typography, Grid, Card, CardContent, Button, Box, TextField } from '@mui/material';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Link from 'next/link';

const imageListData = [
    { img: '/images/pexels-element5-1370295.jpg', title: 'Image 1' },
    { img: '/images/image2.jpg', title: 'Image 2' },
    { img: '/images/pexels-element5-1370295.jpg', title: 'Image 3' },
    { img: '/images/image2.jpg', title: 'Image 2' },
    { img: '/images/pexels-element5-1370295.jpg', title: 'Image 5' },
  // Add more images as needed
];

const HomePageContent: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (listRef.current) {
        listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const styles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }

  .scrolling-container {
    display: flex;
    overflow-x: auto; /* Horizontal scrolling */
    white-space: nowrap;
    padding: 2px;
  }

  .scrolling-content {
    display: flex;
    gap: 2rem;
  }

  .text-container {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 8.4rem; /* Adjust this value as needed to fit 6 lines */
  }
`;
  return (
    <Container maxWidth="xl">
      <Head>
        <title>Next.js with Material-UI</title>
        <meta name="description" content="Next.js app with Material-UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Typography variant="h1" component="h1" gutterBottom>
          Welcome to Next.js with Material-UI
        </Typography>
//   card added
        <Typography variant="body1" gutterBottom>
          This is a basic example of using Next.js with Material-UI.
        </Typography>     
        <Box sx={{ padding: 2 }}>x``
            <style>{styles}</style>
            <Box className="scrolling-container" sx={{ height: '316px', width: 'x' }}>
                <Box className="scrolling-content">
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h2" component="div" gutterBottom>
                                History Book
                            </Typography>
                            <Box className="text-container">
                                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem' }}>
                                    fhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsffsd
                                    f
                                    dsfhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsffsd
                                    f
                                    ds
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h2" component="div" gutterBottom>
                                Geography Books
                            </Typography>
                            <Box className="text-container">
                                <Typography variant="body1" color="textPrimary" sx={{ fontSize: '1.2rem' }}>
                                    fhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsffsd
                                    f
                                    dsfhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    f
                                    ds
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h2" component="div" gutterBottom>
                                Science Books
                            </Typography>
                            <Box className="text-container">
                                <Typography variant="body1" color="textSecondary" sx={{ fontSize: '1.2rem' }}>
                                    fhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsffsd
                                    f
                                    dsfhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    f
                                    ds
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                    <Card sx={{ minWidth: 300 }}>
                        <CardContent>
                            <Typography variant="h2" component="div" gutterBottom>
                                Literature Books
                            </Typography>
                            <Box className="text-container">
                                <Typography variant="body1" color="textPrimary" sx={{ fontSize: '1.2rem' }}>
                                    fhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsffsd
                                    f
                                    dsfhooasdhfsadhfklsadfdlkasfdasljfjal
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsf
                                    sgjksdhfskjdhflkhasdlkfhlasdhfldkhkfjlsdfldsfdsf
                                    f
                                    ds
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>

        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Auto-Scrolling Image List
        </Typography>

        <Box ref={listRef} sx={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex' }}>
          {imageListData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'inline-block',
                minWidth: '300px',
                marginRight: '16px',
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(2)',
                },
                '& img': {
                  transition: 'transform 0.2s ease',
                },
              }}
            >
              <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <ImageListItemBar title={item.title} position="below" />
            </Box>
          ))}
        </Box>

        <Box ref={listRef} sx={{ overflowX: 'auto', whiteSpace: 'nowrap', display: 'flex' }}>
          {imageListData.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'inline-block',
                minWidth: '60%',
                marginRight: '16px',
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': {
                  transform: 'scale(2)',
                },
                '& img': {
                  transition: 'transform 4s ease',
                },
              }}
            >
              <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />
              <ImageListItemBar title={item.title} position="below" />
            </Box>
          ))}
        </Box>

        <Typography variant="h6" component="h2" gutterBottom sx={{ mt: 4 }}>
          Sign up for our newsletter
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="contained" color="primary" fullWidth>
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <Link href="/about" passHref>
          <Button variant="contained" color="primary" sx={{ mt: 4 }}>
            Go to About Page
          </Button>
        </Link>
      </main>

      <footer style={{ marginTop: '2rem' }}>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Built with '}
          <Link href="https://nextjs.org/" color="inherit">
            Next.js
          </Link>
          {' and '}
          <Link href="https://mui.com/" color="inherit">
            Material-UI
          </Link>
        </Typography>
      </footer>
    </Container>
  );
};

export default HomePageContent;
