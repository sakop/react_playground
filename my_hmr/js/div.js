var sideEffectNode = document.createElement('div');
sideEffectNode.id = "aa2";
sideEffectNode.setAttribute('style', 'background-color: lightblue; padding: 20px; margin: 10px;');
sideEffectNode.textContent = 'Side Effect';
document.body.appendChild(sideEffectNode);
if (module.hot) {
    module.hot.dispose(function () {
        sideEffectNode.parentNode.removeChild(sideEffectNode);
    });
}