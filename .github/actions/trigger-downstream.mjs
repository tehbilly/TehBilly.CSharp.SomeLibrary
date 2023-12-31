import { Octokit } from "@octokit/action";

const octokit = new Octokit();

const repo = process.env.DOWNSTREAM_REPO;
console.log(`Triggering downstream workflow for ${repo}:`, {
    event_type: "library_updated",
    client_payload: {
        libraries: JSON.parse(process.env.LIBRARIES),
    },
});

const response = await octokit.rest.repos.createDispatchEvent({
    owner: process.env.GITHUB_REPOSITORY_OWNER,
    repo: repo,
    event_type: "library_updated",
    client_payload: {
        libraries: JSON.parse(process.env.LIBRARIES),
    },
});
console.log("Response:", response);
