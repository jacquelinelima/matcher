const axios = require('axios');
const DeveloperModel = require('../model/Developer');
module.exports = {
    async index (request, response) {

        const { user: loggerDeveloperId } = request.headers;
        const loggerDeveloper = await DeveloperModel.findById(loggerDeveloperId);
        
        if (!loggerDeveloper) {
            response.status(400).json({ mensagem: "Developer not exists"})
        }

        const developers = await DeveloperModel.find({
            $and: [
                { _id: { $ne: loggerDeveloperId }},
                { _id: { $nin: loggerDeveloper.likes}},
                { _id: { $nin: loggerDeveloper.dislikes}}
            ]
        });

        return response.json(developers);
    },
    async store (request, response) {
        const { username } = request.body;

        const userExists = await DeveloperModel.findOne({ user: username });

        if (userExists) {
            return response.json(userExists);
        }

        const developerResponse = await axios.get(`https://api.github.com/users/${username}`)
        const { name, bio, avatar_url: avatar } = developerResponse.data;

        const developer = await DeveloperModel.create({
            name: name,
            user: username,
            bio: bio,
            avatar: avatar
        });

        return response.json(developer);
    }
}