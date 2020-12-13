const loadEvent = () => {
    const chk = document.querySelector('#chk');
    const resumeEs = document.querySelector('#es')

	chk.addEventListener('change', (e) => {
        e.target.checked ? 
        resumeEs.src = './assets/Resume-sofia-lay.jpg'
        :
        resumeEs.src = './assets/Cv-sofia-lay.jpg'
	});
}