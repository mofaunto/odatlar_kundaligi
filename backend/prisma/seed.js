const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.checkIn.deleteMany();
  await prisma.habit.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      id: 'user_test_001',
      name: 'Test Foydalanuvchi',
      email: 'test@example.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde'
    }
  });

  const habit1 = await prisma.habit.create({
    data: {
      name: 'Ertalab yugurish',
      description: 'Har kuni 30 daqiqa',
      color: '#f97316',
      frequency: 'daily',
      userId: user.id
    }
  });

  const habit2 = await prisma.habit.create({
    data: {
      name: "Kitob o'qish",
      description: "Kuniga 10 bet",
      color: '#3b82f6',
      frequency: 'daily',
      userId: user.id
    }
  });

  const habit3 = await prisma.habit.create({
    data: {
      name: "Suv ichish",
      description: "2 litr",
      color: '#22c55e',
      frequency: 'daily',
      userId: user.id
    }
  });

  const today = new Date();
  
  const getPastDate = (daysAgo) => {
    const d = new Date(today);
    d.setDate(d.getDate() - daysAgo);
    return d;
  };

  await prisma.checkIn.createMany({
    data: [
      { habitId: habit1.id, userId: user.id, date: getPastDate(2), note: 'Yaxshi tempo' },
      { habitId: habit1.id, userId: user.id, date: getPastDate(1) },
      { habitId: habit1.id, userId: user.id, date: getPastDate(0) },
      
      { habitId: habit2.id, userId: user.id, date: getPastDate(1) },
      
      { habitId: habit3.id, userId: user.id, date: getPastDate(1) },
      { habitId: habit3.id, userId: user.id, date: getPastDate(0) },
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