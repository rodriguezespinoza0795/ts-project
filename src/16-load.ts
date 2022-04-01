import _ from 'lodash'

const data = [
  {
    username: "nico",
    role: 'admin'
  },
  {
    username: 'David',
    role: 'user'
  },
  {
    username: 'Pol',
    role: 'user'
  }
]

const rta = _.groupBy(data, (item) => item.role)

console.log(rta)
