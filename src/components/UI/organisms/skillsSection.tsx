import React from 'react';
import {
  Box,
  Typography,
  Fade,
  LinearProgress,
} from '@mui/material';

const fadeInDuration = 6000;

function skillsSection(): JSX.Element {
  return (
    <Fade
      in
      timeout={fadeInDuration}
    >
      <Box sx={{
        height: { xs: 'auto', lg: '80vh' },
        paddingLeft: '2vw',
        paddingRight: '2vw',
        paddingTop: '5vh',
        paddingBottom: '5vh',
        width: '96vw',
        backgroundColor: 'black',
      }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Avenir',
            color: 'white',
            marginBottom: '3vh',
          }}
        >
          Compétences
        </Typography>
        <Box sx={{
          width: '85%',
          paddingLeft: '5%',
          paddingRight: '10%',
        }}
        >
          <Box sx={{
            paddingLeft: '3%',
            paddingRight: '3%',
          }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginBottom: '1vh',
                marginTop: '2vh',
              }}
            >
              Développement Frontend
            </Typography>
            <LinearProgress
              variant="buffer"
              value={80}
              valueBuffer={0}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginBottom: '1vh',
                marginTop: '2vh',
              }}
            >
              Développement Backend
            </Typography>
            <LinearProgress
              variant="buffer"
              value={40}
              valueBuffer={0}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Avenir',
              color: 'white',
              marginBottom: '1vh',
              marginTop: '2vh',
            }}
          >
            Framework
          </Typography>
          <Box sx={{
            paddingLeft: '3%',
            paddingRight: '3%',
          }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginBottom: '1vh',
                marginTop: '2vh',
              }}
            >
              React
            </Typography>
            <LinearProgress
              variant="buffer"
              value={80}
              valueBuffer={0}
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginBottom: '1vh',
                marginTop: '2vh',
              }}
            >
              AWS
            </Typography>
            <LinearProgress
              variant="buffer"
              value={40}
              valueBuffer={0}
              color="secondary"
            />
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Avenir',
                color: 'white',
                marginBottom: '1vh',
                marginTop: '2vh',
              }}
            >
              Express / Django REST
            </Typography>
            <LinearProgress
              variant="buffer"
              value={15}
              valueBuffer={0}
              color="secondary"
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Avenir',
              color: 'white',
              marginBottom: '1vh',
              marginTop: '2vh',
            }}
          >
            Langages
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                flexDirection: 'column',
                width: '44%',
                paddingLeft: '3%',
                paddingRight: '3%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginBottom: '1vh',
                  marginTop: '2vh',
                }}
              >
                TypeScript
              </Typography>
              <LinearProgress
                variant="buffer"
                value={80}
                valueBuffer={0}
                sx={{
                  width: '100%',
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginBottom: '1vh',
                  marginTop: '2vh',
                }}
              >
                Golang
              </Typography>
              <LinearProgress
                variant="buffer"
                value={80}
                valueBuffer={0}
                sx={{
                  width: '100%',
                }}
                color="secondary"
              />
            </Box>
            <Box
              sx={{
                flexDirection: 'column',
                width: '44%',
                paddingLeft: '3%',
                paddingRight: '3%',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginBottom: '1vh',
                  marginTop: '2vh',
                }}
              >
                Java
              </Typography>
              <LinearProgress
                variant="buffer"
                value={80}
                valueBuffer={0}
                sx={{
                  width: '100%',
                }}
                color="secondary"
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: 'Avenir',
                  color: 'white',
                  marginBottom: '1vh',
                  marginTop: '2vh',
                }}
              >
                C++
              </Typography>
              <LinearProgress
                variant="buffer"
                value={80}
                valueBuffer={0}
                sx={{
                  width: '100%',
                }}
                color="secondary"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}

export default skillsSection;
