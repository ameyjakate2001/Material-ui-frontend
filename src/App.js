import Header from './components/Header'
import SeletedDiv from './components/SeletedDiv'
import User from './components/User'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'

function App() {
  const [users, setUsers] = useState([])
  const [selectedIndex, setselectedIndex] = useState(0)
  const selectedDivHandler = (index) => {
    setselectedIndex(index)
  }

  const fetchData = async () => {
    const { data } = await axios.get(
      'https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20'
    )
    const { results } = data
    console.log(results)
    setUsers(results)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='App'>
      <Header />
      <SeletedDiv selectedUser={users[selectedIndex]} />
      <Grid
        container
        style={{ marginTop: '40px', marginBottom: '40px' }}
        spacing={3}
      >
        {users.map((user, index) => (
          <Grid item xs={12} md={4} lg={3}>
            <User
              selectedIndex={selectedIndex}
              key={index}
              user={user}
              index={index}
              click={() => {
                selectedDivHandler(index)
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default App
