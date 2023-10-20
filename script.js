const scrollToPosition = (id) => {
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.scrollY - 180;

    window.scrollTo({top: y, behavior: 'smooth'});
}

document.getElementById('personal_info_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('personal_info');
});

document.getElementById('research_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('research');
});

document.getElementById('education_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('education');
});

document.getElementById('awards_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('awards');
});

document.getElementById('experiences_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('experiences');
});

document.getElementById('skills_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('skills');
});

document.getElementById('projects_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('projects');
});

document.getElementById('contacts_link').addEventListener('click', function(event) {
    event.preventDefault();
    scrollToPosition('contacts');
});
