function activateNav(){
  setTimeout(() => {
    if(location.hash === '#bookmark'){
      document.querySelector('.left_box li.active').classList.remove('active');
      document.querySelector('.left_box li.bookmark-li').classList.add('active');

      document.querySelector('.middle_box #friends').classList.add('hidden');
      document.querySelector('.middle_box #save').classList.remove('hidden');
    } else if (location.hash === '#friends'){
      document.querySelector('.left_box li.active').classList.remove('active');
      document.querySelector('.left_box li.friend-li').classList.add('active');

      document.querySelector('.middle_box #save').classList.add('hidden');
      document.querySelector('.middle_box #friends').classList.remove('hidden');
    }
  });
}

window.addEventListener('DOMContentLoaded',function(){
    (function(){
        const leftBox = document.querySelector('.left_box');
        const save = document.querySelector('#save');
        const friends = document.querySelector('#friends');
        const close = document.querySelector('.close');

        leftBox.style.right = `${innerWidth*0.5 + 430}px`;

        function resizeFunc(){
            leftBox.style.right = `${innerWidth*0.5 + 430}px`;
        }

        function clickFunc(e){
            let elem = e.target;

            if(elem.dataset.name === 'save'){

                elem.parentNode.classList.add('active');
                elem.parentNode.nextSibling.nextSibling.classList.remove('active');
                save.classList.remove('hidden');
                friends.classList.add('hidden');

            }else if(elem.dataset.name === 'friends'){

                elem.parentNode.classList.add('active');
                elem.parentNode.previousSibling.previousSibling.classList.remove('active');
                friends.classList.remove('hidden');
                save.classList.add('hidden');

            }

        }

        function closeFunc(e){
            console.log();
            this.parentNode.remove();
        }

        leftBox.addEventListener('click',clickFunc);
        // close.addEventListener('click',closeFunc);
        window.addEventListener('resize',resizeFunc);
    })();

    activateNav();
});

document.querySelector('#contents_container').addEventListener('click', (e) => {
    let elem = e.target;
    console.log(elem);

    if( elem.dataset.name === 'friend_accept' ){
        const request_id = elem.dataset.reqId;

        $.post(document.querySelector('[name="ajax_accept"]').value, 
        {
          pk: request_id,
          csrfmiddlewaretoken: document.querySelector('[name="csrfmiddlewaretoken"]').value,
        }
      ).then(res => {
        // elem.dataset.name = 'friend_unfollow';
        // elem.textContent = 'unfollow';
        // elem.classList.remove('agree');
        // elem.classList.add('unfollow');
        // elem.parentElement.parentElement.children[0].textContent = elem.parentElement.parentElement.children[0].textContent.replace('requests friend', '');
        location.reload();
      }).catch(err => {
        console.log(err);
      });
    }

    if( elem.dataset.name === 'friend_deny' ){
        const request_id = elem.dataset.reqId;

        $.post(document.querySelector('[name="ajax_deny"]').value, 
        {
          pk: request_id,
          csrfmiddlewaretoken: document.querySelector('[name="csrfmiddlewaretoken"]').value,
        }
      ).then(res => {
        elem.parentElement.parentElement.parentElement.remove();
      }).catch(err => {
        console.log(err);
      });
    }

    if( elem.dataset.name === 'friend_cancel' ){
        const to_user = elem.dataset.to_user;

        $.post(document.querySelector('[name="ajax_cancel"]').value, 
        {
          to_user: to_user,
          csrfmiddlewaretoken: document.querySelector('[name="csrfmiddlewaretoken"]').value,
        }
      ).then(res => {
        // elem.parentElement.parentElement.parentElement.remove();
        location.reload();
      }).catch(err => {
        console.log(err);
      });
    }

    if( elem.dataset.name === 'friend_unfollow' ){
        const friend_id = elem.dataset.friend;

        $.post(document.querySelector('[name="ajax_unfollow"]').value, 
        {
          friend_id,
          csrfmiddlewaretoken: document.querySelector('[name="csrfmiddlewaretoken"]').value,
        }
      ).then(res => {
        // elem.parentElement.parentElement.parentElement.remove();
        location.reload();
      }).catch(err => {
        console.log(err);
      });
    }
});

document.querySelector('.left_box .list').addEventListener('click', (e) => {
  activateNav();
});
