const { z } = require('zod');

const createHabitSchema = z.object({
  name: z.string().min(2, "Nomi kamida 2 ta belgidan iborat bo'lishi kerak"),
  description: z.string().optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, "Rang HEX formatida bo'lishi kerak").optional(),
  frequency: z.enum(['daily', 'weekly']).default('daily'),
});

const updateHabitSchema = z.object({
  name: z.string().min(2).optional(),
  description: z.string().optional(),
  color: z.string().regex(/^#[0-9A-F]{6}$/i).optional(),
  frequency: z.enum(['daily', 'weekly']).optional(),
});

module.exports = { createHabitSchema, updateHabitSchema };