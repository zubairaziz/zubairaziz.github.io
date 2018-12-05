function toggleActive() {
    currentURL = window.location.href;
    fileNameIndex = currentURL.lastIndexOf("/") + 1;
    currentFileName = currentURL.substr(fileNameIndex);
    return currentFileName;
}

thisFile = toggleActive();

$(document).ready(function () {
    $('a[href="' + thisFile + '"]').parent().addClass('active');
});