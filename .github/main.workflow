workflow "Publish on Netlify" {
  on = "push"
  resolves = ["Publish"]
}

action "Publish" {
  uses = "netlify/actions/build@master"
  secrets = [
    "GITHUB_TOKEN",
    "NETLIFY_SITE_ID",
    "REACT_APP_API_KEY" = "f378fa13aec3447cb87fb200bc931277",
  ]
}
