import { useEffect, useState } from "react"
import cookiesClasses from "./CookiesPopup.module.css"
import { InitGtag, SetGtagConsent } from "../../../logic/gtag"

function CookiesPopup() {

    const [consentIsSet, setConsentIsSet] = useState<boolean>(true)

    useEffect(() => {
        const isConsentSet = InitGtag()
        setConsentIsSet(isConsentSet)
    }, [])

    useEffect(() => {
        console.log(consentIsSet)
    }, [consentIsSet])


    function handleSetGtagConsent(isGranted: boolean){
        const resConsent = SetGtagConsent(isGranted)
        console.log(resConsent)
        setConsentIsSet(true)
    }

    return (
      <>
        {
          !consentIsSet
          &&
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
                  <button type="button" className="btn btn-success mx-2 px-3 py-1" onClick={() => handleSetGtagConsent(true)}>Accept</button>
                  <button type="button" className="btn btn-link" onClick={() => handleSetGtagConsent(false)}>Decline</button>
                  <button type="button" className="btn btn-link">Cookie Policy &gt;</button>
              </div>
          </div>
        }
      </>
    )
}

export default CookiesPopup
