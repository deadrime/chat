const { User } = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const getToken = async (_, { username, password }) => {
  const user = await User.findOne({
    username,
  })

  if (!user) throw new Error('Auth error')

  const match = await bcrypt.compare(password, user.passwordHash);

  if (!match) throw new Error('Wrong password')

  const payload = {
    id: user.id,
  }

  // console.log({ payload })

  const accessToken = jwt.sign(payload, 'some_app_secret')

  return accessToken
}

module.exports = getToken