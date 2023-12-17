import Blob from "../../../public/imgs/Blobs/NavBlob.svg"
import styles from "@styles/NavBlob.module.css"
import ExportedImage from "next-image-export-optimizer";

import { FaBars, FaXmark } from "react-icons/fa6";

export default function NavBlob({ navToggled, navToggle }: { navToggled: boolean, navToggle(): void }) {
  return (
    <button type="button" className={`btn ${styles.navBlobContainer}`} onClick={() => navToggle()}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <ExportedImage src={Blob} alt="Navigation Menu Toggle" className={styles.navBlob} />
          {
            navToggled
            ?
            <FaXmark size={30} color="white" className={styles.navBlobIcon} style={{ marginLeft: "-2px" }} />
            :
            <FaBars size={25} color="white" className={styles.navBlobIcon} />
          }
        </div>
    </button>
  )
}
