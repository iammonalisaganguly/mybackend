const basicCode = async function (req,res){
    console.log(req.url)
    console.log("hii i am path of this url ", req.path)
    res.send({msg: "this is coming from controller handeler"})
}
module.exports.basicCode=basicCode