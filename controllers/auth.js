module.exports.login = function(req,res){
    res.status(200).json({
        login: "Login from controller"
    })
}

module.exports.register = function(req, res) {
    res.status(200).json({
        register: "Login from controller"
    })
}