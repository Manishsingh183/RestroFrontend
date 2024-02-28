import "./homepageimage.css";

function HomepageImage(props) {
  const description =
    "Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.";

  return (
    <div>
      <div>
        <img className="homeImage" src={props.src} alt={props.name} />
        <div className="homeImagePara">
          <h4>{props.name}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomepageImage;
