export const getBreadCrumbs = (location) => {
    let currentBreadcrumbs = location.pathname
        .match(/([a-z||A-Z||0-9||-]*)/gm)
        .filter((item) => item);
    return (currentBreadcrumbs);
};