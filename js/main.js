const elDarkModeToggler = document.querySelector('.dark-mode-toggler');

elDarkModeToggler.addEventListener('click', function () {
document.body.classList.toggle('dark-mode');
});

const elsProjectsListItem = document.querySelectorAll('.projects-list__item');
const elProjectsButton = document.querySelector('.js-projects-button');

elProjectsButton.addEventListener('click', function () {
elsProjectsListItem.forEach(function (elProjectListItem) {
elProjectListItem.classList.remove('projects-item--none')
})
});