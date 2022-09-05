const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('sqlite:sqlite.db', { logging: false })

sequelize.authenticate().then(
	() => console.log('sequelize connected'),
	(error: Error) => console.log('sequelize error: ' + error)
)

export default sequelize
