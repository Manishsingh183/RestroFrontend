import "./adminbar.css";

function AdminBar({ state, updateState }) {
  function handleClick(button) {
    console.log("Button Clicked");
    updateState(button);
  }

  return (
    <div id="adminBar_inner">
      <div id="adminBarGrid">
        <div className="adminBarTabs">
          <button
            className="adminBarButtons"
            onClick={() => handleClick("menu")}
          >
            Menu
          </button>
        </div>
        <div className="adminBarTabs">
          <button
            className="adminBarButtons"
            onClick={() => handleClick("reservations")}
          >
            Reservations
          </button>
        </div>
        <div className="adminBarTabs">
          <button
            className="adminBarButtons"
            onClick={() => handleClick("contact")}
          >
            Contact Us
          </button>
        </div>
        <div className="adminBarTabs">
          <button
            className="adminBarButtons"
            onClick={() => handleClick("mailing")}
          >
            Mailing Subscribers
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminBar;
