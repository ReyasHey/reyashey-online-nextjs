import cookiesClasses from "./CookiesPopup.module.css"

function CookiesPopup() {
  return (
    <div className={ cookiesClasses.cookieModal + ` row ` }>
        <p>
            We use cookies to improve user experience and analyze website traffic.
            <br />
            By clicking "Accept", you agree to our website's cookie use as described in our Cookie Policy.
            <br />
            We're working on a preferences section where you'll be able to change your preference in the soon future.
        </p>

        <div className="col-12">
            <button type="button" className="btn btn-success mx-2">Accept</button>
            <button type="button" className="mx-2">Decline</button>
        </div>
    </div>
  )
}

export default CookiesPopup
