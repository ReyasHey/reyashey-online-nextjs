import cookiesClasses from "./CookiesPopup.module.css"

function CookiesPopup() {
  return (
    <div className={ cookiesClasses.cookieModal + ` row ` }>
        <h6>We use Cookies</h6>

        <p>
            We use cookies to improve user experience and analyze website traffic.
            <br />
            By clicking "Accept", you agree to our website's cookie use as described in our Cookie Policy.
            <br />
            We're working on a preferences section where you'll be able to change your preference in the soon future.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-3">
            <button type="button" className="btn btn-success mx-2 px-3 py-1">Accept</button>
            <button type="button" className="btn btn-link">Decline</button>
            <button type="button" className="btn btn-link">Cookie Policy &gt;</button>
        </div>
    </div>
  )
}

export default CookiesPopup
