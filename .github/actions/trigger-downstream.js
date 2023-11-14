const { Octokit } = require("@octokit/action");

const octokit = new Octokit();

const repo = process.env.DOWNSTREAM_REPO;
console.log(`Triggering downstream workflow for ${repo}`);

const response = await octokit.rest.repos.createDispatchEvent({
    owner: process.env.GITHUB_REPOSITORY_OWNER,
    repo: repo,
    event_type: "library_updated",
    client_payload: {
        library: process.env.GITHUB_REPOSITORY,
        version: process.env.GITHUB_REF,
    },
});
console.log("Response:", response);
