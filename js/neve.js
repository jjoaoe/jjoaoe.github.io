document.addEventListener('DOMContentLoaded', function() {
    var snowContainer = document.getElementById('snow-container');

    function createSnowflake() {
        var snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.innerText = '❅';
        snowflake.style.left = Math.random() * window.innerWidth + 'px';
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';

        snowContainer.appendChild(snowflake);

        // Fazer o floco de neve cair
        setTimeout(function() {
            snowflake.style.top = window.innerHeight + 'px';
        }, 0);

        // Remover o floco de neve após um tempo
        setTimeout(function() {
            snowflake.remove();
        }, 5000);
    }

    setInterval(createSnowflake, 100);
});
