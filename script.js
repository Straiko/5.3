
function uploadFile(fileInputId, assignmentId) {
    alert('Файл загружен для задания: ' + assignmentId);
    document.querySelector('#' + assignmentId + ' .btn-danger').style.display = 'inline-block';
}

function deleteFile(assignmentId) {
    alert('Файл удален для задания: ' + assignmentId);
    document.querySelector('#' + assignmentId + ' .btn-danger').style.display = 'none';
}
