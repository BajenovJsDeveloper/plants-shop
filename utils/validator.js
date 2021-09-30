const EMAIL_REGX = /^[0-9a-z A-Z]+@[0-9a-z A-Z]+\.[0-9a-z A-Z]+$/gi
const NAME_REGX = /^[a-z A-Z]+$/gi
const PASS_REGX = /^[0-9a-z A-Z]+$/gi

export const validate = (form, rules)  => {
  const result = { ...form }
  let isValid = true
  rules.forEach(rule =>{
    if (!form[rule.name].value.match(rule.pattern) && rule.required) {
      result[rule.name].errmsg = rule.message
      isValid = false
    } else {
      result[rule.name].errmsg = ""
    }
  })
  return [ result, isValid ]
} 

export const loginRules = [
  { name: "email", pattern: EMAIL_REGX, required: true, message: "Email failed"},
  { name: "password", pattern: PASS_REGX, required: true, message: "Field failed"},
]

export const registerRuls = [
  { name: "name", pattern: NAME_REGX, required: true, message: "User name failed"},
  { name: "email", pattern: EMAIL_REGX, required: true, message: "User email falied"},
  { name: "password", pattern: PASS_REGX, required: true, message: "User password failed"},
  { name: "repassword", pattern: PASS_REGX, required: true, message: "User repeat password failed"},
]