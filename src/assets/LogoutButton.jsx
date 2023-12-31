export function LogoutButton() {
  return (
    <>
      <button className="logout-btn">
        <div className="logout-logo">
          <svg
            className="logout-svg"
            viewBox="0 0 21 21"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="currentColor" transform="translate(4 3)">
              <path d="m10.595 10.5 2.905-3-2.905-3" />
              <path d="m13.5 7.5h-9" />
              <path d="m10.5.5-8 .00224609c-1.1043501.00087167-1.9994384.89621131-2 2.00056153v9.99438478c0 1.1045695.8954305 2 2 2h8.0954792" />
            </g>
          </svg>
        </div>
      </button>
    </>
  );
}
