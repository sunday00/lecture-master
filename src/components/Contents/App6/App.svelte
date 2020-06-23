<div class="top">
    <div class="box {$data.color}"></div>
    <div class="box {$data2.color}"></div>
    <div class="box {$data3}"></div>
    <div class="box {$data4.color}"></div>
    <ChgButton></ChgButton>
</div>

<script>
    import { data, data2, data3, data4 } from './stores.js';
    import ChgButton from './ChildComponent';

    // let color = 'green';

    // const unsubscrible = data.subscribe( v => {
    //     color = v.color;
    // });


</script>

<style lang="scss">
    .top{
        border-bottom: 4px double orangered;

        .box{
            width: 100px;
            height: 100px;
        }
        .box.green{
            background-color: green;
        }
        .box.tomato{
            background-color: tomato;
        }
        .box.tomato.mod{
            background-color: tomato;
            border-radius: 30%;
        }
        .box.blue{
            background-color: blue;
        }
        .box.gold{
            background-color: gold;
        }
        .box.hotpink{
            background-color: hotpink;
        }
    }
</style>