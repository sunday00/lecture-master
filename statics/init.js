$(document).ready( function () {
  $('.datatable').DataTable({
    ajax: '/includes/route.php?mode=list',
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
                  <a href="/update.php?id=${id}" class="w-100 btn btn-primary fas fa-wrench" title="modify employee's information."></a>
                </form>
                <form action="/delete.php" method="POST" class="col" onsubmit="return confirm('permanently delete?')">
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
} );