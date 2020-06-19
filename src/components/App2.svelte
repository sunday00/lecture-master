<div>
    <h1>App2</h1>
    <Child2 apple={200}></Child2>
    <Child2 apple={300}></Child2>
    <Child2 apple={400}></Child2>
    <Child2 />

    <hr>

    <Description {...someObj} />

    <hr>

    <Condition {bg}></Condition>

    <hr>

    <Loop></Loop>

</div>


<script>
import Child2 from './Child2';
import Description from './Description';
import Condition from './Condition';
import Loop from './Loop';

let someObj = {
    val1: 'VAL1',
    val2: 'VAL2',
    val3: 'VAL3',
}

let bg = {
    color : 'red'
}

</script>