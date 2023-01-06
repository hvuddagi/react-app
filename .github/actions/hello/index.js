const github = require('@actions/github')
const core = require('@actions/core')

try {
    // throw (new Error("some error message"))
    const name = core.getInput('who-to-greet')
    console.log(`Hello ${name}`)

    const time = new Date()
    core.setOutput("time", time.toTimeString())

    console.log(JSON.stringify(github, null, '\t'))
} catch (error) {
    core.setFailed(error.message)
}
