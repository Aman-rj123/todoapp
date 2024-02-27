  const express= require("express");
  const router= express.Router();


  // import controller

  const {createTodo} = require("../controllers/createTodo");
  const {getalltodo} = require("../controllers/getalltodo");
  const {findbyid} = require("../controllers/findbyid");
  const {deletebyid} = require("../controllers/deletebyid");
  const {updatetodo} =require("../controllers/updatetodo");
  const {newtodo}= require("../controllers/newtodo");



  // define api routes

  router.post("/createdeTodo", createTodo);
  router.get("/getalltodo",getalltodo);
  router.get("/findbyid",findbyid);
  router.delete("/deletebyid?:id",deletebyid);
  router.put("/updatetodo",updatetodo);
  router.post("/newtodo",newtodo);


  module.exports= router;