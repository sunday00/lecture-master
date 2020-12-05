$(function(){
    if(!window.EventSource){
        console.error("No event source")
        return;
    }

    let $chatLog = $('#chat-log');
    let $chatMsg = $('#chat-msg');

    function isBlank (string){
        return string == null || string.trim() === "";
    }
    
    function addMessage (data) {
        let text;
        if (!isBlank(data.name)){
            text = `<p><strong>${data.name} : </strong>${data.msg}</p>`;
        }
        
        $chatLog.append(`<div>${text}</div>`);
    }

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

    let es = new EventSource('/stream');
    es.onopen = function(e){
        $.post('/users', {
            name: username
        });
    }
    es.onmessage = function(e){
        let msg = JSON.parse(e.data);
        addMessage(msg)
    }

    window.onbeforeunload = function () {
        $.ajax({
            url: `/users?name=${username}`,
            type: 'DELETE'
        });
        es.close();
    }
});
