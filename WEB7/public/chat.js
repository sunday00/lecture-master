function isBlank (string){
    return string == null || string.trim() === "";
}

$(function(){
    if(!window.EventSource){
        console.error("No event source")
        return;
    }

    let $chatLog = $('#chat-log');
    let $chatMsg = $('#chat-msg');

    let username;
    while(isBlank(username)) {
        username = prompt("name?");

        if( !isBlank(username) ) {
            $('#user-name').html(`<strong>${username}</strong>`);

        }
    }

    $('#input-form').on('submit', function(e){
        e.preventDefault();
        
        $.post('/messages', {
            msg: $chatMsg.val(),
            name: username
        });
        $chatMsg.val("");
        $chatMsg.focus();
    });

});
