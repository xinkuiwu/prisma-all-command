import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query'
    }
  ]
})

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'wuwu',
      email: 'wuwu@wu.com',
      Post: {
        create: [
          {
            title: 'aaa',
            content: 'aa'
          },
          {
            title: 'bbb',
            content: 'bb'
          }
        ]
      }
    }
  })
  console.log(user)
}
main()