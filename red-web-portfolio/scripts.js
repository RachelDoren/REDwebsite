function canvasSupport () {
    return Modernizr.canvas;
}


const addItems = document.querySelector('.add-items');
const items = [];

//prevents page refresh each time item is added,
function addItems(e) {
	e.preventDefaut();
	const text = (this.querySelector('[name=item]')).value;
}
