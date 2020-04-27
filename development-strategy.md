# Rasha Ali Portfolio: Development Strategy

Building this site one step at a time

---

## 0. README

- Write the `README.md`, including the final screen shot
- Include a License
- Include this `development-strategy.md` file

---

## 1. Setup

- Create boilerplate index.html
- Create boilerplate style.css
- Create boilerplate app\controllers\handlers.js
- Create boilerplate app\data\bio.js
- Create boilerplate app\views\view.js
- Create assets folder for images and files

---

## 2. User Story: The display personal details/repo list from github

**The personal website will display the details of my account and repo list**

### DOM:

-Create necessary tags to be filled with html presentation of fetched data . -`index.html` will be updated with data needed .

### Data:

-Create a data-model for the data will be fetched from my git-hub account
-Create functions to do that in `bio.js`

### controllers :

- Attach a form loading event to the data fetching process.

### views :

- Display data fetched from github and display them on `index.html`

## 3. User Story: The ability to see the data fetched in a nice way !

**A user can see the fetched data in a styled way over three main pages (index,contact,about,download-CV**

### data:

- Create functions in `view.js` to display data in a nice way for the user.

### controllers:

- call view functions to display fetched data .

### views:

- Display both personal data and list of projects in a nice way .
