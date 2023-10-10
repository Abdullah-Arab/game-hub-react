import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key:"b415ca60bc8846d2bfe9e19d2a9685b6"
    }
    });