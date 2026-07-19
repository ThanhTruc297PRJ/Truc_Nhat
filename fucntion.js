fucntion truc(){
  return "";
}

fucntion trucNgao(){
  return "";
}
fucntion trucNgao3(){
  return "";
}
fucntion trucNgao4(){
  return "";
}




import { LicenseInfo } from "@mui/x-license";

/**
 * Installs our MUI X Premium Commercial License. Call this function once in
 * the top-level rendering flow, before the first component renders. See more:
 * https://mui.com/x/introduction/licensing/#license-key-installation
 *
 * License info and expiry date available in Valentine: go/kaggle-mui-x-license
 */
export function installMuiXLicense() {
  LicenseInfo.setLicenseKey(
    // This is a public key which is validated without making network requests.
    // We could move it into a node env variable if desired.
    "c1608383f8c907c02c10933da5fd38b6Tz0xMzExNDMsRT0xODE3NjgzMTk5MDAwLFM9cHJlbWl1bSxMTT1hbm51YWwsUFY9aW5pdGlhbCxLVj0y"
  );
}
