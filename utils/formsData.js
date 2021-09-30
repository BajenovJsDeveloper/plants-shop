export const InitialRegisterFormData = () => {
  return {
    name: { 
      name: "name", 
      value: "", 
      errmsg: "", 
      placeholder: "user name", 
      title: "User Name", 
      icon: "person" 
    },
    email: { 
      name: "email", 
      value: "", 
      errmsg: "", 
      placeholder: "email", 
      title: "Email", 
      icon: "email" 
    },
    password: { 
      name: "password", 
      value: "", 
      errmsg: "", 
      placeholder: "password", 
      title: "Password", 
      isPassword: true, 
      icon: "visibility-off",
      activeIcon: "visibility"
    },
    repassword: { 
      name: "repassword", 
      value: "", 
      errmsg: "", 
      placeholder: "repeat password", 
      title: "Repeatpassword", 
      isPassword: true, 
      icon: "visibility-off",
      activeIcon: "visibility"
    }
  }
}

export const InitialLoginFormData = () => {
  return {
    email: { name: "email", value: "", errmsg: "", placeholder: "Email", title: "User Email", icon: "email" },
    password: { 
      name: "password", 
      value: "", 
      errmsg: "", 
      placeholder: "Password", 
      title: "User Password", 
      isPassword: true, icon: "visibility-off",
      activeIcon: "visibility" 
    }
  }
}