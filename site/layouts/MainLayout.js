// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Footer$Ocamlorg from "../components/Footer.js";
import * as HeaderNavigation$Ocamlorg from "../components/HeaderNavigation.js";

var headerContentEn_industry = {
  label: "Industry",
  url: "#"
};

var headerContentEn_resources = {
  label: "Resources",
  url: "#"
};

var headerContentEn_community = {
  label: "Community",
  url: "#"
};

var headerContentEn_search = "Search";

var headerContentEn_openMenu = "Open menu";

var headerContentEn = {
  industry: headerContentEn_industry,
  resources: headerContentEn_resources,
  community: headerContentEn_community,
  search: headerContentEn_search,
  openMenu: headerContentEn_openMenu
};

var footerContentEn_footer = "Footer";

var footerContentEn_ocamlSummary = "Innovation. Community. Security.";

var footerContentEn_industry = {
  label: "Industry",
  url: "#"
};

var footerContentEn_industrySections = {
  whatIsOcaml: {
    label: "What is OCaml",
    url: "/play/industry/whatisocaml"
  },
  industrialUsers: {
    label: "Industrial Users",
    url: "/play/industry/users"
  },
  successStories: {
    label: "Success Stories",
    url: "/play/industry/successstories"
  }
};

var footerContentEn_resources = {
  label: "Resources",
  url: "#"
};

var footerContentEn_resourcesSections = {
  releases: {
    label: "Releases",
    url: "/play/resource/releases"
  },
  applications: {
    label: "Applications",
    url: "/play/resource/applications"
  },
  language: {
    label: "Language",
    url: "#"
  },
  archive: {
    label: "Archive",
    url: "/play/resource/archive"
  }
};

var footerContentEn_community = {
  label: "Community",
  url: "#"
};

var footerContentEn_communitySections = {
  opportunities: {
    label: "Opportunities",
    url: "/play/community/opportunities"
  },
  news: {
    label: "News",
    url: "/play/community/news"
  },
  aroundTheWeb: {
    label: "Around the Web",
    url: "/play/community/aroundweb"
  }
};

var footerContentEn_legal = "Legal";

var footerContentEn_legalSections = {
  privacy: {
    label: "Privacy",
    url: "/play/privacypolicy"
  },
  terms: {
    label: "Terms",
    url: "#"
  },
  claims: {
    label: "Claims",
    url: "#"
  },
  cookies: {
    label: "Cookies",
    url: "#"
  }
};

var footerContentEn = {
  footer: footerContentEn_footer,
  ocamlSummary: footerContentEn_ocamlSummary,
  industry: footerContentEn_industry,
  industrySections: footerContentEn_industrySections,
  resources: footerContentEn_resources,
  resourcesSections: footerContentEn_resourcesSections,
  community: footerContentEn_community,
  communitySections: footerContentEn_communitySections,
  legal: footerContentEn_legal,
  legalSections: footerContentEn_legalSections
};

function MainLayout(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "bg-white"
            }, null, React.createElement("div", {
                  className: "relative shadow"
                }, React.createElement(HeaderNavigation$Ocamlorg.make, {
                      content: headerContentEn
                    })), React.createElement("main", {
                  className: "relative bg-graylight"
                }, children), React.createElement("div", {
                  className: "relative"
                }, React.createElement(Footer$Ocamlorg.make, {
                      content: footerContentEn
                    })));
}

var navContentEn = {
  industry: {
    label: "Industry",
    url: "#"
  },
  resources: {
    label: "Resources",
    url: "#"
  },
  community: {
    label: "Community",
    url: "#"
  }
};

var make = MainLayout;

export {
  navContentEn ,
  headerContentEn ,
  footerContentEn ,
  make ,
  
}
/* react Not a pure module */
