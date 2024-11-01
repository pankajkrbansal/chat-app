import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default (): PostgresConnectionOptions => ({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || '1234',
  database: process.env.DATABASE_NAME || 'chat-app',
  synchronize: process.env.TYPEORM_SYNC === 'true', // Ensure this is set in production
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Dynamically load all entities
});
