export function getStatus(lastVisitedTime) {
    const currentTime = new Date();
    const visitedTime = new Date(lastVisitedTime);
    const timeDifference = currentTime - visitedTime;
    const differenceInDays = timeDifference / (1000 * 3600 * 24);
    if (differenceInDays <= 3) {
        return 'Inactive';
    } else {
        return 'Active';
    }
}