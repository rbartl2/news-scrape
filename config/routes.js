module.exports = function(router){
    // route renders homepage
    router.get("/", function(req, res){
        res.render("home");
    });
    // route renders saved handlebars page
    router.get("/saved", function(req, res){
        res.render("saved");
    });
}