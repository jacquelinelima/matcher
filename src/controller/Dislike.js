const DeveloperModel = require('../model/Developer');

module.exports = {
    async store(request, response) {

        const { user: loggedDeveloperId } = request.headers;
        const { developerId: targetDeveloperId } = request.params;        
        
        const loggedDeveloper = await DeveloperModel.findById(loggedDeveloperId);
        const targetDeveloper = await DeveloperModel.findById(targetDeveloperId);        
       
        if (!targetDeveloper) {
            return response.status(400).json({message: 'Developer not exists'});
        }

        if (loggedDeveloper.dislikes.includes(targetDeveloper._id)) {
            return response.json(targetDeveloper);
        }

        if (targetDeveloper.dislikes.includes(loggedDeveloper._id)) {
            console.log("IT'S A MATCH!");
        }

        loggedDeveloper.dislikes.push(targetDeveloper._id);
        loggedDeveloper.save();

        return response.json(loggedDeveloper);
    }
}