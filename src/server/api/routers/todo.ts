import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { todoInput } from "../../../types";

export const todoRouter = createTRPCRouter({
  all: protectedProcedure.query(async ({ ctx }) => {
       const todos = await ctx.prisma.todo.findMany({
           where: {
             userId: ctx.session.user.id,
           }
   })
   console.log(
       "todos from prisma",
       todos.map(({id, text, done}) => ({id, text, done}))
    );
   
   // return todos.map({id, text,done}) => 
    return [
      {
        id: "fake",
        text: "fake test",
        done: false,
      },
      {
        id: "fake",
        text: "fake test",
        done: false,
      },
    ];
  }),
  create: protectedProcedure.input(todoInput).mutation(async ({ ctx, input }) => {
    return ctx.prisma.todo.create({
        data: {
            text: input,
            user: {
                connect: {
                    id: ctx.sessions.user.id
                }
            }
        }
    })
  })
});
