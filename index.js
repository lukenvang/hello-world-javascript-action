const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const actionToRun = core.getInput('action-to-run');
    const releaseString = core.getInput('release-string');
    const minApprovals = core.getInput('min-approvals');
    console.log(`Running ${actionToRun} action`);
    console.log(releaseString);
    console.log(minApprovals);
    switch (actionToRun) {
        case 'set-git-credentials':
            setGitCredentials();
            break;
        case 'release-check':
            releaseCheck(releaseString);
            break;
        case 'approvals-check':
            approvalsCheck(minApprovals);
            break;
        case 'check-for-conflicts':
            checkForConflicts();
            break;
        case 'get-diffs':
            getDiffs();
            break;
        case 'generate-release-package':
            generateReleasePackage();
            break;
        case 'authorize-into-salesforce':
            authorizeIntoSalesforce();
            break;
        case 'validation-changes':
            validationChanges();
            break;
        default:
    }
} catch (error) {
    core.setFailed(error.message);
}

function setGitCredentials() {
    console.log('setGitCredentials');
}

function releaseCheck(releaseString) {
    if(!releaseString) throw new Error('releaseString is required');
    console.log('releaseString');
}

function approvalsCheck(minimumApprovals) {
    if(!minimumApprovals) throw new Error('minimumApprovals is required');
    console.log('approvalsCheck');
}

function checkForConflicts() {
    console.log('checkForConflicts');
}

function getDiffs() {
    console.log('getDiffs');
}

function generateReleasePackage() {
    console.log('generateReleasePackage');
}

function authorizeIntoSalesforce() {
    console.log('authorizeIntoSalesforce');
}

function validationChanges() {
    console.log('validationChanges');
}