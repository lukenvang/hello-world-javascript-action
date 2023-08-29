const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const actionToRun = core.getInput('action-to-run');
    console.log(`Running ${actionToRun} action`);
    switch (actionToRun) {
        case 'set-git-credentials':
            setGitCredentials();
        case 'release-check':
            releaseCheck();
        case 'approvals-check':
            approvalsCheck();
        case 'check-for-conflicts':
            checkForConflicts();
        case 'get-diffs':
            getDiffs();
        case 'generate-release-package':
            generateReleasePackage();
        case 'authorize-into-salesforce':
            authorizeIntoSalesforce();
        case 'validation-changes':
            validationChanges();
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