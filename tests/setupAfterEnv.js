import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// Set test environment
process.env.NODE_ENV = "test";
process.env.JWT_SECRET = "test_jwt_secret_key";

let mongoServer;

beforeAll(async () => {
  // Start in-memory MongoDB server
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  
  // Connect to test database
  await mongoose.connect(mongoUri);
  console.log("Test database connected");
}, 30000);

afterAll(async () => {
  // Close mongoose connection
  await mongoose.connection.close();
  // Stop mongo server
  await mongoServer.stop();
  console.log("Database connection closed");
});

// Clear collections after all tests in a describe block, not after each test
afterEach(async () => {
  // Only clear if needed, not between related tests
});

