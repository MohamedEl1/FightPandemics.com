import { Home } from "./pages/Home";
import { NeedHelp } from "./pages/NeedHelp";
import { OfferHelp } from "./pages/OfferHelp";
import { About } from "./pages/About";
import { Medical } from "./pages/Medical";
import { AirTableCOVID } from "./pages/AirTableCOVID";
import NearestHospital from "./pages/nearest-hospital/NearestHospital";
import FindHelp from "./pages/find-help/FindHelp";
import SymptomsCheck from "./pages/symptoms-check/SymptomsCheck";
import Page1 from "./pages/symptoms-check/pages/Page1";
import Page2 from "./pages/symptoms-check/pages/Page2";
import Page3 from "./pages/symptoms-check/pages/Page3";
import Page4 from "./pages/symptoms-check/pages/Page4";
import Page5 from "./pages/symptoms-check/pages/Page5";
import Page6 from "./pages/symptoms-check/pages/Page6";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/need-help",
    component: NeedHelp,
  },
  {
    path: "/offer-help",
    component: OfferHelp,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/medical",
    component: Medical,
  },
  {
    path: "/nearest-hospital",
    component: NearestHospital,
  },
  {
    path: "/AirTableCOVID",
    component: AirTableCOVID,
  },
  {
    path: "/find-help",
    component: FindHelp,
  },
  {
    path: "/symptoms-check",
    component: SymptomsCheck,
  },
  {
    path: "/page1",
    component: Page1,
  },
  {
    path: "/page2",
    component: Page2,
  },
  {
    path: "/page3",
    component: Page3,
  },
  {
    path: "/page4",
    component: Page4,
  },
  {
    path: "/page5",
    component: Page5,
  },
  {
    path: "/page6",
    component: Page6,
  },
];
