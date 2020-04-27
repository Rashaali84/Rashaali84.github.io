export default class bio {
    name = '';
    login = '';
    avatar_url = '';
    api_Url = '';
    followers_Url
    bio = '';
    blog = '';
    public_repos_count = 0;
    repoList = [];

    constructor(name) {
        this.name = name;
    }
    // get projects 
    async getPersonalDetails(bioObj) {
        //https://api.github.com/users/rashaali84
        try {
            debugger;
            let response = await fetch(`https://api.github.com/users/${bioObj.name}`);
            let data = await response.json();
            return data;
        } catch
        { console.error(e); }

    }
    //get personal details 
    async getPublicRepotList(bioObj) {
        debugger;
        //https://api.github.com/users/Rashaali84/repos
        try {
            let response = await fetch(`https://api.github.com/users/${bioObj.login}/repos`);
            let data = await response.json()
            return data;
        } catch
        { console.error(e); }
    }
}

