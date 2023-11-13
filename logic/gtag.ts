import Cookies from "js-cookie";
import ReactGA from "react-ga4";


// Starts Gtag if it has consent and returns the state of consent Cookie
export function InitGtag(){

    if(Cookies.get("gtagConsentGranted") == "false")
        return true

    if (process.env.NODE_ENV !== "production")
        return false

    ReactGA.initialize("G-57MMBC4C6L")


    if(Cookies.get("gtagConsentGranted") == "true")
        return true
    else
        return false
}


// Stops Gtag
export function StopGtag(){

    if (process.env.NODE_ENV !== "production")
        return false

    if (ReactGA.isInitialized == false)
        return

    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");

    ReactGA.initialize("NONE")

    return
}


/// Sets the consent cookie and starts/stops gtag accordingly
export function SetGtagConsent(isGranted: boolean){

    const isGrantedString = isGranted.toString()

    Cookies.set("gtagConsentGranted", isGrantedString)

    if(isGranted == true)
        InitGtag()
    else
        StopGtag()
}
