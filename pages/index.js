import { Box, Button, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { Board } from '../components/Board/Board'
import { Header } from '../components/Header'
import axios from 'axios'

const jeopardURL = 'https://jarchive-json.glitch.me/game/01/01/2020'

const getCategories = (list, setter) => {
  const badList = list.map(item => item.category)
  const goodList = [...new Set(badList)]

  setter(goodList)
}

export default function Home() {
  const [jeopardy, setJeopardy] = useState(null)
  const [jeopardyCategoryList, setJeopardyCategoryList] = useState([])
  const [doubleJeopardy, setDoubleJeopardy] = useState(null)
  const [doubleJeopardCategoryList, setDoubleJeopardyCategoryList] = useState([])
  const [finalJeopardy, setFinalJeopardy] = useState(null)

  useEffect(() => {
    axios.get(jeopardURL).then(res => {
      setFinalJeopardy(res.data["final jeopardy"])
      setJeopardy(res.data.jeopardy)
      setDoubleJeopardy(res.data["double jeopardy"])

      getCategories(res.data.jeopardy, setJeopardyCategoryList)
      getCategories(res.data["double jeopardy"], setDoubleJeopardyCategoryList)
    })
  }, [])

  return (
    <>
      <Header />
      <Box display="flex" justifyContent="center">
        <Board jeopardyClues={jeopardy} jeopardyCategories={jeopardyCategoryList} />
      </Box>
    </>
  );
}
