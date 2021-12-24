import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

const SeletedDiv = ({ selectedUser }) => {
  return (
    <Container>
      <main>
        {selectedUser && (
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
                src={selectedUser.picture.large}
                sx={{ width: 128, height: 128 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <div className='details'>
                <h3>
                  {selectedUser.name.title}. {selectedUser.name.first}
                  {selectedUser.name.last}
                </h3>
                <p>
                  <span>{selectedUser.location.street.number}</span>,
                  {' ' + selectedUser.location.city},
                  {' ' + selectedUser.location.state},
                  <span>{' ' + selectedUser.location.country}</span>,
                  {' ' + selectedUser.location.postcode}
                </p>
                <p>
                  {selectedUser.location.timezone.offset} -
                  <span> {selectedUser.location.timezone.description}</span>
                </p>
                <p>
                  <span>{selectedUser.gender}</span>
                </p>
              </div>
            </Grid>
          </Grid>
        )}
      </main>
    </Container>
  )
}

export default SeletedDiv
