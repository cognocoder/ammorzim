const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(`sqlite:${process.env.DB}`, { logging: false })

sequelize.authenticate().then(
	() => console.log('sequelize connected'),
	(error: Error) => console.log('sequelize error: ' + error)
)

export default sequelize
