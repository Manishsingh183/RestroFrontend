import "./contactsection1.css";

import contact1 from "../../Image/contact1.png";

function ContactSection1() {
  return (
    <div className="contactsection1_outer">
      <div>
        <img id="contactsec1img" src={contact1} alt="contact" />
      </div>
      <div className="conteactsec1desc">
        <h1>Always available for you!</h1>
        <p>
          Dignissim tristique ornare tortor ullamcorper magna imperdiet
          condimentum id turpis. Pellentesque enim maecenas vitae fames. Netus
          id eros curabitur turpis vel sed. Non molestie massa etiam adipiscing
          sed elementum cras purus. Commodo adipiscing ut tortor fames amet at
          sapien aliquam. Semper arcu integer egestas sed integer ut nam eros.
          Eros pellentesque facilisis vitae in cras gravida cursus eget porta.
          Venenatis eget sapien morbi nisi ut malesuada facilisi in.
        </p>
      </div>
    </div>
  );
}

export default ContactSection1;
