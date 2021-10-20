const Header = () => (
  <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-between justify-content-md-between py-3 mb-4">
      <button type="button" className="btn px-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 52 52"
          data-name="Layer 1"
          id="Layer_1"
        >
          <g data-name="Group 132" id="Group_132">
            <path
              d="M38,52a2,2,0,0,1-1.41-.59l-24-24a2,2,0,0,1,0-2.82l24-24a2,2,0,0,1,2.82,0,2,2,0,0,1,0,2.82L16.83,26,39.41,48.59A2,2,0,0,1,38,52Z"
              fill="white"
            />
          </g>
        </svg>
      </button>

      <h6 className="text-white mb-0">Air Quality Worldwide</h6>

      <div className="text-end">
        <button type="button" className="btn me-2 px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
            viewBox="0 0 48 48"
            version="1.1"
            fill="white"
          >
            <title>ic_fluent_mic_on_48_filled</title>
            <desc>Created with Sketch.</desc>
            <g
              id="🔍-Product-Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
            >
              <g id="ic_fluent_mic_on_48_filled" fill="#212121">
                <path
                  d="M34.5,23.75 C35.1903559,23.75 35.75,24.3096441 35.75,25 C35.75,30.7904522 31.3753005,35.5591386 25.7506989,36.1812617 L25.75,38.75 C25.75,39.4403559 25.1903559,40 24.5,40 C23.8527913,40 23.3204661,39.5081253 23.2564536,38.8778052 L23.25,38.75 L23.2503043,36.1813727 C17.6252197,35.5597057 13.25,30.7907965 13.25,25 C13.25,24.3096441 13.8096441,23.75 14.5,23.75 C15.1903559,23.75 15.75,24.3096441 15.75,25 C15.75,29.8324916 19.6675084,33.75 24.5,33.75 C29.3324916,33.75 33.25,29.8324916 33.25,25 C33.25,24.3096441 33.8096441,23.75 34.5,23.75 Z M24.5,8 C27.5375661,8 30,10.4624339 30,13.5 L30,24.5 C30,27.5375661 27.5375661,30 24.5,30 C21.4624339,30 19,27.5375661 19,24.5 L19,13.5 C19,10.4624339 21.4624339,8 24.5,8 Z"
                  id="🎨-Color"
                  fill="white"
                />
              </g>
            </g>
          </svg>
        </button>
        <button type="button" className="btn px-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16px"
            height="25px"
            viewBox="0 0 16 16"
            fill="white"
          >
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </button>
      </div>
    </header>
  </div>
);

export default Header;
