export default class view {

    bioObj = null;

    constructor(bioObjIn) {
        this.bioObj = bioObjIn;
    }
    displayBio() {

        const bio = document.getElementById('bio');
        bio.innerText = this.bioObj.bio;
        const bioImg = document.getElementById('bio-img');
        bioImg.src = this.bioObj.avatar_url;

    }
    displayProjectList() {

        const projectContainer = document.getElementById('proj-container');
        let html = '';
        html += `<h4>My total number of projects on github : ${this.bioObj.public_repos_count}</h4><br/><br/>`;
        this.bioObj.repoList.forEach(element => {

            html += `<div class="col-sm-3">
            <h>${element.name}</h>
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