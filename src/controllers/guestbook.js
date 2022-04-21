const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const getEntries = async (req, res) => {
  try {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    res.json({ entries })

  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: "Unexpected error" })
  }
}

const addEntry = async (req, res) => {
  try {
    const { name, message } = req.body
    if (!name || !message) {
      res.status(400)
      res.json({ error: "Invalid request" })
      return
    }

    const entry = await prisma.guestbook.create({
      data: { name, message },
    })

    console.log("Added entry from:" + entry.name)
    res.json({ entry: entry })
    
  } catch (e) {
    console.log(e)
    res.status(500)
    res.json({ error: "Unexpected error" })
  }
}

module.exports = {
  getEntries,
  addEntry,
}
