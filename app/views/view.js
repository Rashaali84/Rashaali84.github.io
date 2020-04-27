export default class view {
    static displayBio(bioObj) {

        const bio = document.getElementById('bio');
        bio.innerText = bioObj.bio;
        const bioImg = document.getElementById('bio-img');
        bioImg.src = bioObj.avatar_url;

    }
    static displayProjectList(bioObj) {

        const projectContainer = document.getElementById('proj-container');
        let html = '';
        html += `<h3>My total number of projects on github : ${bioObj.public_repos_count}</h3><br/><br/>`;
        bioObj.repoList.forEach(element => {

            html += `<div class="col-sm-3">
            <h6>${element.name}</h>
            <a href=${element.html_url === null ? 'https://github.com/Rashaali84' : element.html_url}>
            <img
                src="assets/repo-icon.jpg"
                class="img-responsive"
                style="width: 100%;"
                alt=${element.description === null ? 'no description found' : element.description}
            />
            </a>
        </div>`
        });
        projectContainer.innerHTML = html;


    }
}