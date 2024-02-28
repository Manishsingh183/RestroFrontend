import "./historysubleft.css";

function HistorySubLeft(props) {
  return (
    <div className="homehistory">
      <div>
        <img className="homeImageWhite" src={props.src} alt={props.alt} />
      </div>
      <div className="homehistoryleft">
        <h3>{props.year}</h3>
        <p className="historysubleftParagraph">
          Cras ligula massa, efficitur eget orci non, luctus accumsan magna.
          Praesent sit amet orci mauris. Pellentesque vitae arcu consequat,
          semper quam sit amet, rutrum felis. Phasellus consectetur ante est, ut
          rhoncus est sodales et. Suspendisse placerat tristique magna eu
          placerat. Ut ornare odio nec sagittis interdum. Aenean molestie varius
          lorem, sit amet fermentum lorem fringilla fermentum. Nulla scelerisque
          fringilla lacus, in molestie lacus consequat vitae.
        </p>
      </div>
    </div>
  );
}

export default HistorySubLeft;
