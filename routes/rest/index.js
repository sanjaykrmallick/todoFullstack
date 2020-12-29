const express = require("express")
const router = express.Router()

// const expressJwt = require("express-jwt")

// const checkJwt = expressJwt({ secret: process.env.SECRET }) // the JWT auth check middleware

// const login = require("./auth")
// const signup = require("./auth/signup")
// const forgotpassword = require("./auth/password")
// const users = require("./users")

// router.post("/login", login.post) // UNAUTHENTICATED
// router.post("/signup", signup.post) // UNAUTHENTICATED
// router.post("/forgotpassword", forgotpassword.startWorkflow) // UNAUTHENTICATED; AJAX
// router.post("/resetpassword", forgotpassword.resetPassword) // UNAUTHENTICATED; AJAX

// router.all("*", checkJwt) // use this auth middleware for ALL subsequent routes

// router.get("/users", users.find)
// router.get("/user/:id", users.get)
// router.post("/user", users.post)
// router.put("/user/:id", users.put)
// router.delete("/user/:id", users.delete)

const todos = require("./todos")

router.get("/todos", todos.get)
// router.get("/todos/:id", todos.get)
router.post("/todos", todos.post)
router.put("/todos/:id", todos.put)
router.delete("/todos/:id", todos.delete)

// const todos = require("./todos")
// router.get("/", (req, res) => {
//   todos
//     .findAll()
//     .then((todoslist) => {
//       res.json(todoslist)
//     })
//     .catch((error) => {
//       console.log(error)
//       res.status(500).json({ error: true, reason: error.message })
//     })
// })

// // add a todo item
// router.post("/", (req, res) => {
//   const { name } = req.body
//   todos
//     .create(name)
//     .then((todo) => {
//       res.json(todo)
//     })
//     .catch((error) => {
//       console.log(error)
//       res.status(500).json({ error: true, reason: error.message })
//     })
// })

// // delete a todo item
// router.delete("/:id", (req, res) => {
//   const { id } = req.params
//   todos
//     .deleteById(id)
//     .then((ok) => {
//       console.log(ok)
//       console.log(`Deleted record with id: ${id}`)
//       res.status(200).json([])
//     })
//     .catch((error) => {
//       console.log(error)
//       res.status(500).json({ error: true, reason: error.message })
//     })
// })

// // update a todo item
// router.put("/:id", (req, res) => {
//   const { id } = req.params
//   const todo = { name: req.body.name, done: req.body.done }
//   todos
//     .updateById(id, todo)
//     .then(res.status(200).json([]))
//     .catch((error) => {
//       console.log(error)
//       res.status(500).json({ error: true, reason: error.message })
//     })
// })


module.exports = router
