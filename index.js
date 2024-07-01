const app = require('./app') // la aplicación Express real
const { PORT } = require('./utils/config')
const logger = require('./utils/logger')

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})
