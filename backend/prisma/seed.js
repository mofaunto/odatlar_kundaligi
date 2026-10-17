const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.mountain.deleteMany();
  await prisma.mountain.createMany({
    data: [
      {
        title: 'Boburgoh',
        description: "Toshkent viloyatidagi eng chiroyli tog\'lardan biri",
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
        status: 'hiked',
        rating: 5,
        userId: 'user_test_001',
        davlat: "Uzbekistan",
        maslahatBeraman: true
      },
      {
        title: 'Chimyon',
        description: 'Piskent tumanidagi mashhur dam olish maskani',
        imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
        status: 'hiked',
        rating: 4,
        userId: 'user_test_001',
        davlat: "Uzbekistan",
        maslahatBeraman: true
      },
      {
        title: "Xo\'jakent",
        description: 'Toshkentdan 2 soatlik masofada, yozda ajoyib',
        imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606',
        status: 'planned',
        rating: 5,
        userId: 'user_test_001',
        davlat: "Uzbekistan",
        maslahatBeraman: true
      },
      {
        title: 'Amirsoy',
        description: "Qishda chang'i uchish uchun eng yaxshi joy",
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
        status: 'wishlist',
        rating: 5,
        userId: 'user_test_002',
        davlat: "Uzbekistan",
        maslahatBeraman: true
      },
      {
        title: 'Amirsoy 2',
        description: "Qishda chang'i uchish uchun eng yaxshi joy 2",
        imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306',
        status: 'wishlist',
        rating: 5,
        userId: 'user_test_002',
        davlat: "Uzbekistan",
        maslahatBeraman: true
      }
    ]
  });

  console.log('Seed data muvaffaqiyatli qo\'shildi');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });