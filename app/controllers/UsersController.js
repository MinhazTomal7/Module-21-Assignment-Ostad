import usersModel from "../model/UsersModel.js";
import {EncodeToken} from "../utility/tokenUtility.js";

export const Registration = async (req, res) => {

    try {
        let reqBody = req.body;
        await usersModel.create(reqBody)


        return res.json({
            status: "success",
            "Message": "User Registration Successful"})
    }

    catch (err){

        return res.json({
            status: "failed",
            "Message": err.toString()})
    }
}

export const Login = async (req, res) =>{

    try {
        let reqBody = req.body;
        let data =  await usersModel.findOne(reqBody)
        if(data===null){
            return res.json({
                status: "fail",
                "Message": "User not found"})
        }
        else{
            let token = EncodeToken(data['email'], data['_id'])

            return res.json({
                status: "success",
                token,
                "Message": "User Login Successful"})
        }
    }

    catch (err){
        return res.json({
            status: "failed",
            "Message": err.toString()})
    }
}

export const ProfileDetails = async (req, res) =>{
    try {
        let user_id = req.headers['user_id'];
        let data = await usersModel.findOne({"_id":user_id})
        return res.json({
            status: "success",
            "Message" : "User ProfileDetails Successful",
            data:data
        })
    }
    catch (err){
        return res.json({
            status: "failed",
            "Message": err.toString()})
    }
}

export const AllUserProfiles = async (req, res) => {
    try {
        let data = await usersModel.find();
        return res.json({
            status: "success",
            data: data
        });
    } catch (err) {
        return res.json({
            status: "failed",
            message: err.toString()
        });
    }
};

export const ProfileUpdate = async (req, res) =>{

    try {

        let reqBody = req.body;
        let user_id = req.headers['user_id'];
        await usersModel.updateOne({"_id":user_id}, reqBody)
        return res.json({
            status: "success",
            "Message" : "User updated Successful"
        })
    }
    catch (err){
        return res.json({
            status: "failed",
            "Message": err.toString()})
    }
}

export const DeleteProfile = async (req, res) =>{
    try {
        let id = req.params.id
        await usersModel.deleteOne({ "_id": id})

        return res.json({
            status: "success",
            "Message" : "User DeleteProfile Successful"
        })
    }
    catch (err){
        return res.json({
            status: "failed",
            "Message": err.toString()})
    }
}
