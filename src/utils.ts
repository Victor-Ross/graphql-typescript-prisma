import { users, projects, assignments } from '../data/seed';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const getUsers = async () => {
  const result = await prisma.users.findMany({
    include: { projects: { include: { projects: true } } }
  });

  const allUsers = result.map(user => {
    return { ...user,  projects: user.projects.map(assignment => assignment.projects)};
  })
  return allUsers;
};