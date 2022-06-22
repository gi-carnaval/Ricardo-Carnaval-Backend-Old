// module.exports = ({ env }) => ({
//     connection: {
//       client: 'postgres',
//       connector: 'bookshelf',
//       connection:{
//         socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`,
//         database: env('DATABASE_NAME'),
//         user: env('DATABASE_USERNAME'),
//         password: env('DATABASE_PASSWORD'),
//       }
//     }
//   });