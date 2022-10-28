

const validateCreateBanco = (req,res,next)=>{
    const {body} = req;

    if(body.endereco === undefined){
        return res.status(400).json({message:"digite um endereço"});
    }
    if(body.endereco === ''){
        return res.status(400).json({message:"O endereço não pode ser vazio"});
    }
    next();
}

const validateUpdatebanco = (req, res)=>{
    const {body} = req;

    if(body.endereco === undefined){
        return res.status(400).json({message:"digite um endereço"});
    }
    if(body.endereco === ''){
        return res.status(400).json({message:"O endereço não pode ser vazio"});
    }
    next();
}


module.exports = {
    validateCreateBanco,
    validateUpdatebanco
}
