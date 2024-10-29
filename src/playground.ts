import { db } from "./server/db";

  await db.user.create({
    data: {
      emailAddress: "test2@gmail.com",
      firstName: "test2",
      lastName: "tester2",
    },
  });
  console.log("done");
