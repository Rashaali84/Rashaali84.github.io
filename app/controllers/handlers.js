

import bioModule from '../models/bio.js';
import viewModule from '../views/view.js';
//middle tier logic is here // call data tier with needed input
class handlers {
    async hanldleBio() {
        const myBio = new bioModule('rashaali84');

        await myBio.getPersonalDetails(myBio).then(dataFetched => {
            //populate the fetched data
            myBio.name = dataFetched.name;
            myBio.login = dataFetched.login;
            myBio.avatar_url = dataFetched.avatar_url;
            myBio.api_Url = dataFetched.url;
            myBio.followers_Url = dataFetched.followers_url;
            myBio.bio = dataFetched.bio;
            myBio.blog = dataFetched.blog;
            myBio.public_repos_count = dataFetched.public_repos;
        });
        //call another api to fetch list of projects 
        await myBio.getPublicRepotList(myBio).then(dataFetched => {

            //fill the list of projects in the myBio object
            dataFetched.forEach(function (projItem) {
                myBio.repoList.push(projItem);
            });
            //call view class to display results and pass on bio object
            console.log(myBio);
            const view = new viewModule(myBio);
            view.displayBio();
            view.displayProjectList();
        });
    }
}
new handlers().hanldleBio();

