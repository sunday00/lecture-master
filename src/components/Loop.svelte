<div>
    <!-- {#each skills as skill}
        <p>{skill.title}</p>
    {/each} -->
    <!-- {#each skills as skill, i}
        <p>{i} : {skill.title}</p>
    {/each} -->

    <button on:click={removeLast}>-</button>

    {#each skills as {title, lang}, i (title)}
        <p>{i} : {title} | {lang}</p>
    {/each}
</div>

<script>

    let Skill = function (title, lang, degree) {
        this.title = title;
        this.lang = lang;
        this.degree = degree;
    }

    function removeLast () {
        skills.splice(-1, 1);
        skills = skills;
    }

    export let skills = [
        new Skill('Laravel', 'php', 5),
        new Skill('Phalcon', 'php', 3),
        new Skill('Spring', 'java', 4),
        new Skill('Express', 'nodejs', 3),
        new Skill('Vue', 'js', 4),
        new Skill('tailwind', 'css', 3)
    ];

</script>