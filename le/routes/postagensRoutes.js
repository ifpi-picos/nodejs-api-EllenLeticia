const express = require('express');
const postagensController = require('../controllers/postagens')
const router = express.Router();
const postagemModel = require('../models/postagem');

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', async (req, res) => {
  await postagensController.create(req.body);
  res.send('Adicionado com sucesso');
});

//update postagem por ID
router.put('/:id', async(req, res) => {
  const id = req.params.id;
  await postagensController.update(id, req.body);
  res.send('Alterado com sucesso.'); 
});


module.exports = router; 