import { PrismaClient } from '@prisma/client';

//storing the PrismaClient in a global constant to avoid creating
//multiple Client intances of Prisma while hot reloading
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = client;

export default client; 