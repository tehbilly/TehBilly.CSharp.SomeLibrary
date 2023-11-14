const { Octokit } = require("@octokit/action");

// TODO: Get this from the action input?
const downstreamRepos = [
    "TehBilly.CSharp.SomeApp",
];

const octokit = new Octokit();

for (let repo of downstreamRepos) {
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
}
