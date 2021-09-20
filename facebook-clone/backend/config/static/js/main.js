window.addEventListener('DOMContentLoaded', function () {
  (function () {
    const feed = document.querySelector('#contents_container');
    const commentField = document.querySelector('#comment_container');
    const leftBox = document.querySelector('.left_box');
    const createBox = document.querySelector('.create_box');
    const rightBox = document.querySelector('.right_box');
    // const chartAll = document.querySelectorAll('.right_box .chart_container > div');
    // const chart_btn = document.querySelector('.right_box .btn_container');
    const btnAll = document.querySelectorAll('.right_box .btn_container > div');
    const bell = document.querySelector('#header .bell');
    const noticeBoard = document.querySelector('#header .notice');
    const sideBox = document.querySelectorAll('#side_box > ul > li');
    const detailCard = document.querySelector('#detail_card');
    const submit = document.querySelector('#submitBtn');
    const textField = document.querySelector('#text_field');
    const more = document.querySelector('.contents .more');
    // const send  = document.querySelector( ".send" );

    if (document.querySelector('.right a').textContent !== 'LOGIN') {
      leftBox.style.right = `${innerWidth * 0.5 + 430}px`;
      rightBox.style.left = `${innerWidth * 0.5 + 90}px`;
    }

    function resizeFunc() {
      if (document.querySelector('.right a').textContent !== 'LOGIN') {
        leftBox.style.right = `${innerWidth * 0.5 + 430}px`;
        rightBox.style.left = `${innerWidth * 0.5 + 90}px`;
      }
    }

    function delegation(e) {
      let elem = e.target;
      e.stopPropagation();

      while (!elem.getAttribute('data-name')) {
        elem = elem.parentNode;

        if (elem.nodeName === 'BODY') {
          elem = null;
          return;
        }
      }

      if (elem.matches('[data-name="more"]')) {
        elem.classList.toggle('active');
      } else if (elem.matches('[data-name="add"]')) {
        submit.disabled = false;
        submit.parentNode.style.display = 'block';
        textField.style.height = '100px';
      } else {
      }
    }

    function noticeFunc(e) {
      e.stopPropagation();
      this.classList.toggle('on');

      if (this.classList.contains('on')) {
        noticeBoard.style.display = 'block';
      } else {
        noticeBoard.style.display = 'none';
      }
    }

    function scrollFunc(e) {
      // console.log(e);
      // console.log(pageYOffset);

      let scrollHeight = pageYOffset + window.innerHeight;
      let documentHeight = document.body.scrollHeight;

      // console.log('scrollHeight : ' + scrollHeight);
      // console.log('documentHeight : ' +documentHeight);

      if (scrollHeight >= documentHeight) {
        let pager = document.querySelector('#page');
        let page = document.querySelector('#page').value;

        // pager.value = parseInt(page) + 1; // 증가 시킴
        // console.log(page);

        if (document.querySelector('#end_page').value < parseInt(page) + 1)
          return;

        callMorePostAjax(parseInt(page) + 1);
      }
    }

    function callMorePostAjax(page) {
      $.post('/post/', {
        page,
        csrfmiddlewaretoken: document.querySelector('#csrfmiddlewaretoken')
          .value
      }).then(res => {
        addMorePostAjax(res);
      });
    }

    function addMorePostAjax(data) {
      if (data.trim()) {
        let pager = document.querySelector('#page');
        let page = document.querySelector('#page').value;

        pager.value = parseInt(page) + 1; // 증가 시킴
        feed.insertAdjacentHTML('beforeend', data);
      }
      return;
    }

    // const txt = document.querySelector('#comment37');

    // txt.addEventListener('keypress',function(e){
    //     console.log(e.code);
    //     let content =  txt.value;
    //     console.log(content);

    //     if(e.code === 'Enter') {

    //         if(content.length > 140){
    //             alert('댓글은 최대 140자 입력 가능합니다. 현재 글자수 : ' + content.length);
    //             return;
    //         }

    //         $.ajax({

    //             type:'POST',
    //             url:'data/comment.html',
    //             data:{
    //                 'pk' : 37,
    //                 'content':content,
    //             },
    //             dataType:'html',
    //             success:function(data){
    //                 document.querySelector('.comment_container').insertAdjacentHTML('beforeend',data);
    //             },
    //             error:function(request,status,error){
    //                 alert('문제가 발생했습니다.');

    //             }
    //         });

    //         txt.value = '';
    //     }

    // });

    if (document.querySelector('.right a').textContent !== 'LOGIN') {
      // chart_btn.addEventListener('click',chartFunc);
      bell.addEventListener('click', noticeFunc);
      feed.addEventListener('click', delegation);
    }

    window.addEventListener('scroll', scrollFunc);
    window.addEventListener('resize', resizeFunc);

    document.body.addEventListener('click', e => {
      if (document.querySelector('.right a').textContent !== 'LOGIN') {
        textField.style.height = '24px';

        submit.parentNode.style.display = 'none';
        submit.disabled = true;

        more.classList.remove('active');

        noticeBoard.style.display = 'none';
        bell.classList.remove('on');
      }
    });
  })();
});
