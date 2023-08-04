import { getConnection } from '../database/database'

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection()
    const result = await connection.query('SELECT * FROM language')
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const getLanguage = async (req, res) => {
  try {
    // console.log(req.params)
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query('SELECT * FROM language WHERE id = ?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const addLanguages = async (req, res) => {
  try {
    const { name, programmers } = req.body

    if (name === undefined || programmers === undefined) {
      res.status(400).json({ message: 'Bad Request' })
    }

    const languages = { name, programmers }
    const connection = await getConnection()
    await connection.query('INSERT INTO language SET ?', languages)
    res.json({ message: 'Language added successfully' })
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const deleteLanguage = async (req, res) => {
  try {
    // console.log(req.params)
    const { id } = req.params
    const connection = await getConnection()
    const result = await connection.query('DELETE FROM language WHERE id = ?', id)
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const updateLanguage = async (req, res) => {
  try {
    // console.log(req.params)
    const { id } = req.params
    const { name, programmers } = req.body

    if (id === undefined || name === undefined || programmers === undefined) {
      res.status(400).json({ message: 'Bad Request' })
    }

    const languages = { id, name, programmers }

    const connection = await getConnection()
    const result = await connection.query('UPDATE language SET ? WHERE id = ?', [languages, id])
    res.json(result)
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

export const methods = {
  getLanguages, addLanguages, getLanguage, deleteLanguage, updateLanguage
}
