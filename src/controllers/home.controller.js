const homeController = async (req, res) => {
    const allBlogs = req.allBlog
    res.render("home", {
        user: req.user,
        blog: allBlogs,
    })
}

export {
    homeController,
}