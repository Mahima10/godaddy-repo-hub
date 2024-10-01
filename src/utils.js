export const getDate = (updated_at) => {
    const date = new Date(updated_at);
    const now = new Date();
    const differenceInMs = now - date;
    const differenceInMinutes = Math.floor(differenceInMs / (1000 * 60)); // Convert to minutes
    let time = "";

    if (differenceInMinutes < 60) {
        time = `${differenceInMinutes} minute${differenceInMinutes > 1 ? 's' : ''}`;
    } else if (differenceInMinutes < 1440) { // Less than a day
        const hours = Math.floor(differenceInMinutes / 60);
        time = `${hours} hour${hours > 1 ? 's' : ''}`;
    } else if (differenceInMinutes < 10080) { // Less than a week
        const days = Math.floor(differenceInMinutes / 1440);
        time = `${days} day${days > 1 ? 's' : ''}`;
    } else {
        const weeks = Math.floor(differenceInMinutes / 10080); // 10080 minutes in a week
        time = `${weeks} week${weeks > 1 ? 's' : ''}`;
    }

    return `Updated ${time} ago`;
};