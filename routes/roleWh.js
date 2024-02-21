let express = require('express');
let router = express.Router();

const {find,save,updata,deleteOne}=require("../api/roleWh")

router.get("/getList",find);
router.get("/insert",save)
router.get("/updataOne",updata)
router.get("/deleteOne",deleteOne)
module.exports = router;