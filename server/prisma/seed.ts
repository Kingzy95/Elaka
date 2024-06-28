import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Exemple de création d'un utilisateur
  const user = await prisma.user.create({
    data: {
      email: 'example@example.com',
      password: 'securepassword',
      role: 'PATIENT',
      profile: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
          phone: '123456789',
          address: '123 Main St',
          language: 'FRENCH',
        },
      },
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
