const navigation = {
  logo: {
    text: "PM",
    link: "/"
  },

  links: [
    {
      id: "home",
      label: "Home",
      type: "route",
      path: "/"
    },
    {
      id: "about",
      label: "About",
      type: "scroll",
      path: "about"
    },
    {
      id: "skills",
      label: "Skills",
      type: "scroll",
      path: "skills"
    },
    {
      id: "experience",
      label: "Experience",
      type: "scroll",
      path: "experience"
    },
    {
      id: "projects",
      label: "Projects",
      type: "route",
      path: "/projects"
    },
    {
      id: "contact",
      label: "Contact",
      type: "scroll",
      path: "contact"
    }
  ],

  resume: {
    label: "Resume",
    path: "/resume.pdf",
    external: true
  }
}

export default navigation