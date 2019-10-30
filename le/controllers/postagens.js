const PostagemModel = require('../models/postagem');

class Postagens { 

  async get () { 
    const postagens = await PostagemModel.find({});
    return postagens;
  }

  async create(postagemDTO){
    await new PostagemModel(postagemDTO).save();
  }

  async update (id, postagemDTO){
    await PostagemModel.updateOne({_id: id}, postagemDTO);
  }

}

module.exports = new Postagens();