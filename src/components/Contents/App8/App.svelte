<div class="top mb-4">
    <Child>
        <p>this message from parent</p>
    </Child>
    <Child />
</div>

<div class="top">
    <Child2 let:isEnter={isEnter} >
        <p slot="name" class:isEnter>Batman</p>
        <p slot="email" class:isEnter>bruce@justice.league</p>
        <p slot="greet" class:isEnter>Where is Robbin?</p>
    </Child2>
</div>

<div class="top">
    <Child3 name="MOTHER" datas="{datas}"></Child3>
</div>

<script>
    import Child from './Children';
    import Child2 from './Children2';
    import Child3 from './Children3';

    let datas = [
        {name: 'one', order: 1, child: [
            {name:'six', order:1, child: 'last'}
        ]},
        {name: 'two', order: 2, child: [
            {name: 'three', order: 3, child: [
                {name: 'four', order: 4, child: 'last'}
            ]}
        ]}
    ];

</script>

<style>
    .isEnter {
        background-color: tomato;
    }
</style>