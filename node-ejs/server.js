const express = require("express")
const app = express()

app.set("view engine", "ejs")

// index page
app.get("/", function (req, res) {
  const mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ]
  const tagline =
    "No programming concept is complete without a cute animal mascot."

  res.render("pages/index", {
    mascots: mascots,
    tagline: tagline,
  })
})

app.get("/about", (req, res) => {
  res.render("pages/about")
})

app.listen(8080, () => {
  console.log("Servidor rodando...")
})
