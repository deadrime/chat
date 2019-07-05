const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const register = async (_, { username, password }) => {
  const passwordHash = await bcrypt.hash(password, 8);

  const newUser = new User({
    username,
    passwordHash,
  })

  await newUser.save()

  const payload = {
    id: newUser.id,
  }

  const accessToken = jwt.sign(payload, 'some_app_secret')

  return accessToken
}

module.exports = register