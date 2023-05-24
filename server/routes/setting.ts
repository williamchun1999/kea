
const settingController = require("../controllers/setting");
const router = express.Router();


//Settings Routes 

router.delete("/deleteUser/:id", settingController.deleteUser)

router.put("/addFriend/:id/:friend", settingController.addFriend)