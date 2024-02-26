  const express= require("express");
  const router= express.Router();


  // import controller

  const {createTodo} = require("../controllers/createTodo");
  const {getalltodo} = require("../controllers/getalltodo");
  const {findbyid} = require("../controllers/findbyid");
  const {deletebyid} = require("../controllers/deletebyid");



  // define api routes

  router.post("/createdeTodo", createTodo);
  router.get("/getalltodo",getalltodo);
  router.get("/findbyid",findbyid);
  router.delete("/deletebyid",deletebyid);


  module.exports= router;