import React from 'react'
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid'

const allUsers = ({ user }) => {
  return (
    <Container>
      <div className='user'>
        <p>
          {user.gender} - {user.nat}
        </p>
        <h4>
          {user.name.title}. {user.name.first} {user.name.last}
        </h4>
        <p>{user.email}</p>
      </div>
    </Container>
  )
}

export default allUsers
