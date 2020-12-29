const Todo = require("../../models/user")

module.exports = {
  /**
   *
   * @api {get} /todos Todo list
   * @apiName todoList
   * @apiGroup todos
   * @apiVersion  1.0.0
   * @apiPermission Todos
   *
   *
   * @apiSuccess (200) {String} text todo name 
   * @apiSuccess (200) {Boolean} status status of todo item for showing active task
   * @apiSuccess (200) {Boolean} complete Boolean value for checking wheather todo task is completetd or not 
   *
   *
   * @apiSuccessExample {type} Success-Response:
   * {
   *     "error" : false,
   *     "todos" : [{
   *          "text": "Go to Market",
   *          "status": true,
   *          "complete": true
   *      },]
   * }
   *
   *
   */
  async get(req, res) {
    try {
      const todos = await Todo.find()
      return res.json({ error: false, todos })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {post} /todos Todo manual insert
   * @apiName todoManualInsert
   * @apiGroup todos
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} text
   * @apiParam  {Boolean} status
   * @apiParam  {Boolean} complete
   *
   * @apiSuccess (200) {json} name description
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     "text": "Go to Market",
   *     "status": true,
   *     "complete": true
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "todos" : {
   *          "text": "Go to Market",
   *          "status": true,
   *          "complete": true
   *      }
   * }
   *
   *
   */

  async post(req, res) {
    try {
      const { body } = req
      // console.log(body);
      const todo = new Todo({
        text: body.text,
        status: body.status,
        complete: body.complete,
      })

      const newTodo = await todo.save()
      const allTodos = await Todo.find()

      return res.json({
        error: false,
        message: "Todo added",
        todo: newTodo,
        todos: allTodos,
      })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {put} /todos/:id Todos update, one or multiple fields
   * @apiName todoUpdate
   * @apiGroup todos
   * @apiVersion  1.0.0
   *
   *
   * @apiParam {String} id Users unique ID.
   *
   * @apiSuccess (200) {String} text
   * @apiSuccess (200) {Boolean} status
   * @apiSuccess (200) {Boolean} complete
   *
   * @apiParamExample  {json} Request-Example:
   * {
   *     "text": "Go to Market",
   *     "status": true,
   *     "complete": true
   * }
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false,
   *     "todos" : {
   *          "text": "Go to Market",
   *          "status": true,
   *          "complete": true
   *      }
   * }
   *
   *
   */

  async put(req, res) {
    try {
      // const {
      //   params: { id },
      //   body,
      // } = req;
      const { status, text, complete } = req.body
      // const updateTodo = await Todo.findByIdAndUpdate({ _id: id }, body);
      const updateTodo = await Todo.findOne({ _id: req.params.id }).exec()
      if (updateTodo === null) {
        return res
          .status(400)
          .json({ error: true, reason: "No such Todo-Data!" })
      }
      // const allTodos = await Todo.find();
      if (text !== undefined) updateTodo.text = text
      if (status !== undefined && typeof status === "boolean") updateTodo.status = status

      if (complete !== undefined && typeof complete === "boolean") updateTodo.complete = complete
      let updatedData = await updateTodo.save()
      updatedData = updatedData.toObject()
      return res.json({
        error: false,
        message: "Todo updated",
        todo: updatedData,
        // todos: updatedData,
      })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },

  /**
   *
   * @api {delete} /todos/:id Todos delete
   * @apiName todosDelete
   * @apiGroup todos
   * @apiVersion  1.0.0
   *
   *
   * @apiParam {String} id Users unique ID.
   *
   *
   * @apiSuccessExample {json} Success-Response:
   * {
   *     "error" : false
   * }
   *
   *
   */

  async delete(req, res) {
    try {
      await Todo.deleteOne({ _id: req.params.id })
      return res.json({
        error: false,
        message: "Todo deleted",
      })
    } catch (err) {
      return res.status(500).json({ error: true, reason: err.message })
    }
  },
}
