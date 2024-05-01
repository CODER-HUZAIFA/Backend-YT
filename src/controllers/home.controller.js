const homeController = async (req, res) => {
    const allBlogs = req.allBlog

    res.render("home", {
        user: req.user,
        allUser: req.allUser,
        blog: allBlogs,
    })
}

export {
    homeController,
}