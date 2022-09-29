export default function home() {
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content', 'main-content-image');

  const mainContentItem1 = document.createElement('div');
  mainContentItem1.classList.add('main-content-item', 'main-content1');
  mainContentItem1.innerHTML = "Welcome to Paddy's Pub, the oldest pub in America.";
  mainContent.appendChild(mainContentItem1);

  const mainContentItem2 = document.createElement('div');
  mainContentItem2.classList.add('main-content-item');
  mainContentItem2.innerHTML = "We have a variety of old liquors served in strange containers. We are packed with celebrities - the fun ones. We also have conckfights and strippers. And guess what. We don't have a sign, so good luck finding the place. But, if you do, you'll be lucky 'cause we also got donkey shows, Mötley Crüe and cake.";
  mainContent.appendChild(mainContentItem2);

  const mainContentItem3 = document.createElement('div');
  mainContentItem3.classList.add('main-content-item');
  mainContentItem3.innerHTML = "Paddy's Pub has been around since 1773 and has been operated by the same family since its founding. During the revolutionary war, it acted not just as a pub but as a base for those who sought independence from the British. It was the location of the Liberty Bell's cracking. During this era, Paddy's Pub was known as Patrick's Pub. The owners were not supporters of independence and actually planned to gain favor with the British. However all their plans ended disastrously and they unwittingly aided the revolution after causing the death of Colonel Cricket of the British army.";
  mainContent.appendChild(mainContentItem3);

  const content = document.querySelector('#content');
  content.appendChild(mainContent);
}
