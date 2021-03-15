// get dom elemets
const input = document.querySelector('.search-input');
const searchBtn = document.querySelector('.btn-search');
const resultField = document.querySelector('.main_search-output');


async function getData(name) {
    const GIT_API = `https://api.github.com/users/${name}`;
    const result = await fetch(GIT_API)
        .then(res => res.json())
        .then(data => createDynamicData(data));
    
    return result;
}

function createDynamicData(data) {
    resultField.innerHTML = '';

    const resultChildField = document.createElement('div');
    resultChildField.classList.add('output__inner');

    const avatarImg = document.createElement('div');
    avatarImg.classList.add('avatar');
    avatarImg.style.backgroundImage = `url(${data.avatar_url})`;

    const infos = document.createElement('div');
    infos.innerHTML = `
        Name: ${data.name}
        <br>
        Username: ${data.login}
        <br>
        Followers: ${data.followers}
        <br>
        Repositories count: ${data.public_repos}
    `;
    
    infos.classList.add('infos');

    resultChildField.append(avatarImg);
    resultChildField.append(infos);

    resultField.append(resultChildField);
}



searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getData(input.value);

});

