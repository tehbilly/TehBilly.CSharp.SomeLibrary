import { Octokit } from "@octokit/action";

const octokit = new Octokit();

console.log("Debug process.env:", process.env);

const repo = process.env.DOWNSTREAM_REPO;
console.log(`Triggering downstream workflow for ${repo}:`, {
    event_type: "library_updated",
    client_payload: {
        library: process.env.GITHUB_REPOSITORY,
        version: process.env.VERSION,
    },
});

const response = await octokit.rest.repos.createDispatchEvent({
    owner: process.env.GITHUB_REPOSITORY_OWNER,
    repo: repo,
    event_type: "library_updated",
    client_payload: {
        library: process.env.GITHUB_REPOSITORY,
        version: process.env.VERSION,
    },
});
console.log("Response:", response);
