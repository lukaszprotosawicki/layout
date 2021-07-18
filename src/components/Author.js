import faceman from "../img/faceman.png";
import facebook from "../img/facebook.jpg";
import twiter from "../img/twiter.jpg";
import google from "../img/google.jpg";
import pinterest from "../img/pinterest.png";
import instagram from "../img/instagram.jpg";
import lasten from "../img/last.jpg";

function Author() {
  return (
    <div className="container_author">
      <div className="container_bottoms">
        <span className="border_left"></span>
        <div>
          <img src={faceman} alt="faceman" />
        </div>
        <div className="container_info">
          <h1>Smith Anderson</h1>
          <h2>Illustrator and Character Designer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi
            atque aperiam. Nihil odit id non expedita optio, facilis facere.
            Voluptates distinctio nulla a facere quo hic earum voluptatum
            commodi. Nostrum eligendi aspernatur mollitia quas dolorum beatae
            velit, exercitationem tempora optio rerum nesciunt nemo odit soluta
            quidem in ut saepe. Eligendi cum, quod in officiis et placeat
            veritatis sed suscipit!
          </p>
          <div className="media_social">
            <img src={facebook} alt="facebook" />
            <img src={twiter} alt="twiter" />
            <img src={google} alt="google" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="instagram" />
            <img src={lasten} alt="lasten" />
          </div>
        </div>
        <span className="border_right"></span>
      </div>
    </div>
  );
}

export default Author;
