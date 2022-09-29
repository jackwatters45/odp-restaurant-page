import githubLogo from '../img/github-logo.png';

export default function footer() {
  const footerDiv = document.createElement('div');
  footerDiv.classList.add('footer');

  const text = document.createElement('p');
  text.innerHTML = 'Copyright © 2022 jackwatters45';
  footerDiv.appendChild(text);

  const a = document.createElement('a');
  a.target = '_blank';
  a.href = 'https://github.com/jackwatters45/';

  const githubImage = document.createElement('img');
  githubImage.classList.add('github-logo');
  githubImage.src = githubLogo;
  githubImage.alt = 'Github Logo';

  a.appendChild(githubImage);
  footerDiv.appendChild(a);

  const content = document.querySelector('#content');
  content.appendChild(footerDiv);
}
