const ifEnvThenElse = (envVariables, ifSuccess, failText) => {
  const emptyEnvVars = []
  envVariables.forEach(env => {
    if (!process.env[env]) {
      emptyEnvVars.push(env)
    }
  })
  if (emptyEnvVars.length === 0) {
    ifSuccess()
  }
  else {
    console.error(`${failText ? failText : "These env variables are empty: "}: ${emptyEnvVars.join(", ")}`)
    process.exit(1)
  }
}

module.exports = ifEnvThenElse;