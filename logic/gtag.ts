import Cookies from "js-cookie";
import ReactGA from "react-ga4";

export function InitGtag(){

    if(Cookies.get("gtagConsentGranted") != "true")
        return false

    if (process.env.NODE_ENV !== "production")
        return false

    ReactGA.initialize("G-57MMBC4C6L")

    return true
}

export function StopGtag(){
    if (process.env.NODE_ENV === "production" && ReactGA.isInitialized == true) {
        //remove google analytics cookies
        ReactGA.initialize("")

        Cookies.remove("_ga");
        Cookies.remove("_gat");
        Cookies.remove("_gid");
    }
}

export function SetGtagConsent(granted: boolean){

    const grantedString = granted.toString()

    Cookies.set("gtagConsent", grantedString)

    if(granted == true)
      InitGtag()
    else
      StopGtag()
}
