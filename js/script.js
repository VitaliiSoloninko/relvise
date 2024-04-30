// Navigation by ID - anchors

const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault() // відмінили стандарте повеение кнопки, зараз вона не працює
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
