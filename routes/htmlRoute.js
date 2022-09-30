const router = require("router").Router();
const path = require("path");

router.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "..public.html"))
});

module.exports = router;