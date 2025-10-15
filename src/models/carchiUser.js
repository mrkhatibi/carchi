import { model, models, Schema } from "mongoose"


const CarchiUserSchema = new Schema({
    email : {
        type : String ,
        required : true ,
    } ,
    password : {
         type : String ,
        required : true ,
    } , 
    phoneNumber : {
         type : Number ,
    } ,
    cars : {
        type : [{}]
    } ,
    role : {
        type : String ,
        default : "USER"
    }

}, {timestamps : true})

const CarchiUser = models.CarchiUser || model("CarchiUser", CarchiUserSchema)
export default CarchiUser