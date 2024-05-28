/*
    The reason you need to create a PrismaClient instance in Prisma is that it acts as your database connection pool.
    It manages the connections to your database in a way that optimizes performance and resource utilization. 
*/
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma