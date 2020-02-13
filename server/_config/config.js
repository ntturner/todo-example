const dbName = 'todo'
const testDbName = 'todo-test'

export const configOptions = {
  development: {
    db: `mongodb://localhost/${dbName}`,
    port: process.env.PORT || 3001,
    userCookieName: 'user'
  },
  testDevelopment: {
    db: `mongodb://localhost/${testDbName}`,
    port: process.env.PORT || 3001,
    userCookieName: 'user'
  },
  production: {
    db: `mongodb://cloud:I will never be a memory@cluster0-shard-00-00-0zx0k.mongodb.net:27017,cluster0-shard-00-01-0zx0k.mongodb.net:27017,cluster0-shard-00-02-0zx0k.mongodb.net:27017/${dbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    port: process.env.PORT || 3001,
    userCookieName: 'user'
  },
  testProduction: {
    db: `mongodb://cloud:I will never be a memory@cluster0-shard-00-00-0zx0k.mongodb.net:27017,cluster0-shard-00-01-0zx0k.mongodb.net:27017,cluster0-shard-00-02-0zx0k.mongodb.net:27017/${testDbName}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    port: process.env.PORT || 3001,
    userCookieName: 'user'
  }
}
