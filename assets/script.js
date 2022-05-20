document.addEventListener("DOMContentLoaded", () => {
    // Accordion
    var acc = document.getElementsByClassName("item-name");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    // FILTER
    const itemCards = document.querySelectorAll('.item-card');

		document.querySelector('nav').addEventListener('click', event => {
			if (event.target.tagName !== 'LI') return false;
			let filterClass = event.target.dataset['filter'];
			itemCards.forEach( elem => {
				elem.classList.remove('hide');
				if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
					elem.classList.add('hide');
				}
			})

		})
});

