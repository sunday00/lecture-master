$(document).ready( function () {
  
  $('.datatable').DataTable({
    ajax: '/api/route?mode=list',
    columns: [
      { data: 'id' },
      { data: 'fname' },
      { data: 'lname' },
      { data: 'phone' },
      {
        data: 'id',
        fnCreatedCell: function (td, id) {
          $(td).html(`
            <td class="text-right">
              <div class="row">
                <form class="col">
                  <a href="/update?id=${id}" class="w-100 btn btn-primary fas fa-wrench" title="modify employee's information."></a>
                </form>
                <form action="/delete" method="POST" class="col" onsubmit="return confirm('permanently delete?')">
                  <input type="hidden" name="id" value="${id}" />
                  <button type="submit" class="w-100 btn btn-danger fas fa-trash" title="get rid of employee ${id} information."></button>
                </form>
              </div>
            </td>
          `);
        }
      },
    ],
    columnDefs: [
      { targets: [4], orderable: false },
    ],
  });

  // $('#phone').mask('000-000-0000', {
  //   onInvalid: (cep, e, field, options) => {
  //     var masks = ['000-000-0000', '000-0000-0000'];
  //     console.log(cep.length, e);
  //     var mask = (cep.length===13 && e) ? masks[1] : masks[0];
  //     $('#phone').mask(mask, options);
  //   }
  // });

  
  $('#phone').mask('00D-000D-0000', {
    translation: {
      'D': {
        pattern: /[0-9\s]/, optional: true
      }
    }}
  );

  $.validator.addMethod(
    "regex",
    function (value, element, regexp) {
        return this.optional(element) || regexp.test(value);
    },
    "Please check your input."
  );
  $('form').validate({
    errorPlacement: (err, el) => {
      el.siblings('.err-msg').append(err);
    },
    // errorLabelContainer: '.err-msg',
    rules: {
      nick: {
        required: true
      },
      fname: {
        required: true
      },
      lname: {
        required: true
      },
      phone: {
        required: true,
        regex: /\d{2,3}-\d{3,4}-\d{4}$/,
      },
      password: {
        required: true,
        minlength : 4,
      },
      password_confirm: {
        required: true,
        equalTo : "#password"
      }
    },
    messages: {
      nick: 'required',
      fname: 'required',
      lname: 'required',
      phone: {
        required: 'required',
        regex: jQuery.validator.format('keep format')
      },
      password: {
        required: 'required',
        minlength: 'should over 4 letters',
      },
      password_confirm: {
        required: 'required',
        regex: 'not match the password'
      }
    },
    errorClass: 'is-invalid text-danger'
  })

} );
