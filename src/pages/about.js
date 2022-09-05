import addressSVG from "../img/address.svg";
import phoneSVG from "../img/phone.svg";
import frankImage from "../img/frank-reynolds.jpeg";
import charlieImage from "../img/charlie.jpeg";
import dennisImage from "../img/dennis.jpeg";
import macImage from "../img/mac.jpeg";
import deeImage from "../img/dee.jpeg";

export default function about() {
  const mainContent = document.createElement("div");
  mainContent.classList.add(
    "main-content",
    "main-content-image",
    "about-content"
  );

  // Contact
  const contact = document.createElement("div");
  contact.classList.add("main-content-item", "contact");

  const contactText = document.createElement("h3");
  contactText.textContent = "Contact";
  contact.appendChild(contactText);

  const address = document.createElement("div");
  address.classList.add("address");
  const addressIcon = document.createElement("img");
  addressIcon.src = addressSVG;
  addressIcon.alt = "Address Icon";
  const addressText = document.createElement("p");
  addressText.textContent = "1443 South 3rd Street, Philadelphia, PA 19147";
  address.appendChild(addressIcon);
  address.appendChild(addressText);
  contact.appendChild(address);

  const phone = document.createElement("div");
  phone.classList.add("phone");
  const phoneIcon = document.createElement("img");
  phoneIcon.src = phoneSVG;
  phoneIcon.alt = "phone Icon";
  const phoneText = document.createElement("p");
  phoneText.textContent = "(267) 494 - 9167";
  phone.appendChild(phoneIcon);
  phone.appendChild(phoneText);
  contact.appendChild(phone);

  mainContent.appendChild(contact);

  // Team - would be smart to make an add team member function
  const team = document.createElement("div");
  team.classList.add("main-content-item", "team");

  const teamText = document.createElement("h3");
  teamText.textContent = "Contact";
  team.appendChild(teamText);

  function addTeamMember(src, name, memberPosition) {
    const member = document.createElement("div");
    member.classList.add("team-item");
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${name} headshot`;
    const memberName = document.createElement("p");
    memberName.classList.add("name");
    memberName.textContent = name;
    const position = document.createElement("p");
    position.textContent = memberPosition;
    member.appendChild(img);
    member.appendChild(memberName);
    member.appendChild(position);

    team.appendChild(member);
  }

  addTeamMember(frankImage, "Frank Reynolds", "Owner / CEO Frank's Fluids");
  addTeamMember(charlieImage, "Charlie Kelly", "Janitor / Wildcard");
  addTeamMember(dennisImage, "Dennis Reynolds", "Golden God / Five Star Man");
  addTeamMember(macImage, 'Ronald "Mac" Mcdonald', "Bouncer / Bodyguard");
  addTeamMember(deeImage, "Dee Reynolds", "Bartender / Bird");

  mainContent.appendChild(team);

  const content = document.querySelector("#content");
  content.appendChild(mainContent);
}
