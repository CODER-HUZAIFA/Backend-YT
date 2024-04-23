import {Strategy} from "passport-local"
import User from "./models/user.models.js"

const initializingPassport = (passport) => {
    passport.use(new Strategy(async (username, password, done) => {
        const user = await User.findOne({username: username})
        if (!user) return done(null, false);
        if (user.password !== password) {
            return done(null, false)
        }

        return done(null, user)
    }));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user)
        } catch (error) {
            done(error, false)
        }
    })
}

const isAuthenticated = async (req, res, next) => {
    if(req.user) return next();
    await console.log(req.body)
    res.redirect("/login")
}

export {
    initializingPassport,
    isAuthenticated,
}