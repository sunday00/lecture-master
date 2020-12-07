(function ($) {
    'use strict';
    $(function () {
        var todoListItem = $('.todo-list');
        var todoListInput = $('.todo-list-input');
        $('.todo-list-input').keypress((e) => {
            if(e.key === 'Enter'){
                $('.todo-list-add-btn').trigger("click");
            }
        });
        $('.todo-list-add-btn').on("click", function (event) {
            event.preventDefault();

            var item = $(this).prevAll('.todo-list-input').val();

            if (item) {
                $.post("/todos", {name:item})
                    .then((res) => {
                        addItem(res);
                    });
                // todoListItem.append("<li><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' />" + item + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
                todoListInput.val("");
            }
        });

        var addItem = function (item) {
            if (item.completed) {
                todoListItem.append(`<li class='completed' id="item${item.id}"><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' checked='checked' />` + item.name + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
            } else {
                todoListItem.append(`<li id="item${item.id}"><div class='form-check'><label class='form-check-label'><input class='checkbox' type='checkbox' />` + item.name + "<i class='input-helper'></i></label></div><i class='remove mdi mdi-close-circle-outline'></i></li>");
            }
        };

        $.get('/todos', function (items) {

            items.sort((a,b) => {
                return a.id > b.id ? 1 : -1;
            });

            items.forEach(e => {
                addItem(e)
            });
        });

        todoListItem.on('change', '.checkbox', function () {
            const id = $(this).parents('li').attr('id');
            $.ajax({
                url: `/todos/${id}`,
                type: "PATCH"
            }).then((res) => {
                if ($(this).attr('checked')) {
                    $(this).removeAttr('checked');
                } else {
                    $(this).attr('checked', 'checked');
                }
    
                $(this).closest("li").toggleClass('completed');
            });
        });

        todoListItem.on('click', '.remove', function () {
            // $(this).parent().remove();
            const id = $(this).parents('li').attr('id');
            $.ajax({
                url: `/todos/${id}`,
                type: "DELETE",
            }).then((res) => {
                $(`li#item${res.item}`).remove();
            });
        });

    });
})(jQuery);