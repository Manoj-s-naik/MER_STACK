const bcrypt = require("bcrypt");

const password = "user@123";

const create = async()=>{
    const randomSalt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,randomSalt);
    const isTheSameorNot = await bcrypt.compare(password,hash)
    console.log("hashed password",hash);
    console.log("isTheSameorNot",isTheSameorNot);
}
create();
