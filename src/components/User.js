import React from 'react'
import { Container } from '@mui/material'

const allUsers = ({ selectedIndex, user, index, click }) => {
  return (
    <Container>
      <div
        className={selectedIndex === index ? 'user selected' : 'user'}
        onClick={click}
      >
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
