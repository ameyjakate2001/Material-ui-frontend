import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

const SeletedDiv = () => {
  const results = {
    gender: 'male',
    name: { title: 'Mr', first: 'Olivier', last: 'Mackay' },
    location: {
      street: { number: 8490, name: 'Dieppe Ave' },
      city: 'Glenwood',
      state: 'Nova Scotia',
      country: 'Canada',
      postcode: 'U8T 9Y3',
      coordinates: { latitude: '-63.2222', longitude: '-173.7804' },
      timezone: { offset: '+3:30', description: 'Tehran' },
    },
    email: 'olivier.mackay@example.com',
    picture: {
      large: 'https://randomuser.me/api/portraits/men/23.jpg',
      medium: 'https://randomuser.me/api/portraits/med/men/23.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
    },
    nat: 'CA',
  }

  return (
    <Container>
      <main>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Avatar
              alt='Remy Sharp'
              src={results.picture.large}
              sx={{ width: 128, height: 128 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className='details'>
              <h3>
                {results.name.title}. {results.name.first} {results.name.last}
              </h3>
              <p>
                <span>{results.location.street.number}</span>,
                {' ' + results.location.city},{' ' + results.location.state},
                <span>{' ' + results.location.country}</span>,
                {' ' + results.location.postcode}
              </p>
              <p>
                {results.location.timezone.offset} -
                <span> {results.location.timezone.description}</span>
              </p>
              <p>
                <span>{results.gender}</span>
              </p>
            </div>
          </Grid>
        </Grid>
      </main>
    </Container>
  )
}

export default SeletedDiv
