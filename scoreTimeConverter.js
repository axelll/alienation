const version = "1.0.0";

function convertScoreToTime(score) {
    const totalSeconds = (2000000 - score) / 60;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const centiseconds = Math.round((totalSeconds - Math.floor(totalSeconds)) * 100);

    return `${minutes} minutes, ${seconds} seconds, and ${centiseconds} centiseconds`;
}

function convertTimeToScore(minutes, seconds, centiseconds) {
    const totalSeconds = minutes * 60 + seconds + centiseconds / 100;
    const score = 2000000 - totalSeconds * 60;

    return Math.floor(score);
}

console.log(`ScoreTimeConverter Version: ${version}`);

export { convertScoreToTime, convertTimeToScore, version };
