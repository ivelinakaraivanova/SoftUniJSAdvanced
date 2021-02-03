function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    document.getElementById('gradient').addEventListener('mouseout', outMove);

    function onMove(event) {
        const offsetX = event.offsetX;
        const percent = Math.floor(offsetX / event.target.clientWidth * 100);

        document.getElementById('result').textContent = `${percent}%`;
    }

    function outMove(event) {
        document.getElementById('result').textContent = '';
    }
}