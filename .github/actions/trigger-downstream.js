const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

const repo = process.env.DOWNSTREAM_REPO;
console.log(`Triggering downstream workflow for ${repo}`);
const response = octokit.request({
    method: "POST",
    url: "/repos/{owner}/{repo}/dispatches",
    owner: process.env.GITHUB_REPOSITORY_OWNER,
    repo: repo,
    data: {
        event_type: "library_updated",
        client_payload: {
            library: process.env.GITHUB_REPOSITORY,
            version: process.env.GITHUB_REF,
        },
    },
});
console.log("Response:", response);
