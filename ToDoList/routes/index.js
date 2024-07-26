var express = require('express');
var router = express.Router();
const Task = require('../models/Task');

/* GET home page. */
router.get('/', async (req, res)=> {
  try{
    const tasks = await Task.find();
    res.render('index', { tasks: tasks });
  } catch{
    res.redirect('/');
  }
});

// Add a new task

router.post('/add', async (req, res)=>{
  const task = new Task({
    title: req.body.title
  });
  try{
    await task.save();
    res.redirect('/');
  } catch (error){
    console.error(error);
    res.redirect('/')
  }
});

//Delete a task
router.post('/delete/:id', async (req, res)=>{
  try{
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch {
    res.redirect('/')
  }
});

module.exports = router;
