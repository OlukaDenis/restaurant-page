const emailContacts = () => {
  const emails = document.createElement('div');
  emails.setAttribute('class', 'emails');
  emails.innerHTML = `
    <div>
      <h4> Reservations </h4>
      <p> +256 (0) 773 047940 </p>
    </div>
    <div>
      <h4> Inquiries </h4>
      <p> orders@dennys.com </p>
    </div>
    <div>
      <h4> Bookings </h4>
      <p> bookings@dennys.com </p>
    </div>
  `;
  return emails;
};

const social = () => {
  const content = document.createElement('div');
  content.setAttribute('class', 'social card');
  content.innerHTML = `
    <ul>
      <li><a href="#"> <i class="fab fa-twitter"></i> </a> </li>
      <li> <a href="#"><i class="fab fa-facebook-f"></i> </a> </li>
      <li> <a href="#"> <i class="fab fa-instagram"></i> </a></li>
    </ul>
  `;
  content.appendChild(emailContacts());
  return content;
};

const contact = () => {
  const items = document.createElement('div');

  items.id = 'contactpage';
  items.classList.add('contactpage');

  const container = document.createElement('div');
  container.classList.add('contact-container');

  container.innerHTML = `
    <h3> Get In Touch </h3>
  `;

  container.appendChild(social());
  items.appendChild(container);
  return items;
};

export default contact;
