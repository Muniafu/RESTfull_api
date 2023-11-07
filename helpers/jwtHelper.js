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
            else{
                resolve({access_token : token});
                }
            })
        });
    },

    //verification access token
    
/*                verifyAccessToken: async (req, res ,next)=>{
                    let token= req.headers['x-auth'];
                    try{
                        await Usermodel.findByIdAndUpdate(req.userId,{$set:{lastLoginDate:new Date()}})
                        }catch(err){
                            next(err);
                            }
                            if (!token) throw createError.Unauthorized();
                            try {
                                const decoded = JWT.verify(token,process.env.ACCESS_TOKEN_SECRET);
                                req.userId = decoded.aud;
                                next();
                                } catch (e) {
                                    throw createError.Unauthorized();
                                    }
                }*/
}