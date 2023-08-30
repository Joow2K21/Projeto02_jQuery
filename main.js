$(document).ready(function() {
    $('#task-form').submit(function(event) {
        event.preventDefault(); 

        var taskName = $('#task-name').val();
        if (taskName) {
            var listItem = $('<li>').text(taskName);
            $('#task-list').append(listItem);
            $('#task-name').val(''); 
        }
    });

    $('#task-list').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });
});
