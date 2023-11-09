const JWT = require('jsonwebtoken');
const createError = require('http-errors');
const Usermodel = require('../models/usermodel');

module.exports ={
    signAccessToken:(UserId) => {
        return new Promise((resolve,reject) => {
            const payload = {}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options = {
                expiresIn: '1h', // 1 hour
                issuer: 'EddTechnologies.com',
                audience: UserId,
            }
            JWT.sign(payload, secret, options, (error, token) => {
                if(!error){
                    console.log(error.message)
                    reject(createError.InternalServerError());
            }
            /*else{
                resolve({access_token : token});
                }*/
            })
        });
    },
    //verification access token
    verifyAccessToken:(req, res, next) => {
        if (!req.headers['authorization']) return next (createError.Unauthorized());
        const authHeader = req.headers ['authorization'];
        const bearerToken = authHeader.split ('');
        const token = bearerToken [1];
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                return next (createError.Unauthorized())
            }    
            else{
                req.userData=payload;
                next();
            }
        })
    }
    //creating refresh token
    /*refreshToken:async (req,res)=>{
    try{
        let userid = req.body.userId;
        let refreshtoken = await this.generateRefreshToken(userid);
        return res.status(200).send({refreshtoken})
        
        }catch(e){
            throw e
        }
    },
    //generating refresh token
    generateRefreshToken: async (userid) => {
        try{
        const payload={};
        const secret = process.env.REFRESH_TOKEN_SECRET;
        const options = {
        expiresIn:'30d'
        };
            const token = jwt.sign(payload,secret,options);
            await UserModel.updateOne({_id:userid},{refreshToken:token});
            return token;
            }catch(e){
            throw e
            }
    },
    //validating refresh token
    validateRefeshToken:async (req,res)=>{
        try{
            let userId = req.params.userId;
            let refreshToken = req.cookies["refresh-token"];
            console.log("refresh",refreshToken);
            let isValid = await this.isValidateRefreshToken(userId,refreshToken);
            if(!isValid){
                return  res.redirect('/login')
                }else{
                    let accessToken = await this.generateAccessToken(userId);
                    res.cookie('access-token',accessToken , {httpOnly : true}).clearCookie('refresh-token');
            return res.redirect("/")
            }
            }catch(e){
                    throw e
        }
    },
    //checking validity of refresh token
    isValidateRefreshToken:async (userId,refreshToken)=>{
        try{
            let user =await UserModel.findById(userId);
            if(user && user.refreshToken === refreshToken){
                return true;
                    }else{
                        return false;
                    }
                } catch(e){
                    throw e
        }
    },*/
}