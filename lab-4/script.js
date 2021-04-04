const form = document.querySelector(`#form`)

const fullname = document.querySelector(`#fullname`),
      username = document.querySelector(`#username`),
      password = document.querySelector(`#password`),
      repass   = document.querySelector(`#repass`)

function indicator_status(element, pattern) {
    if(element.value.match(pattern)) {
	element.previousElementSibling.classList.remove(`block__indicator--red`)
	element.previousElementSibling.classList.add(`block__indicator--green`)
    } else {
	element.previousElementSibling.classList.remove(`block__indicator--green`)
	element.previousElementSibling.classList.add(`block__indicator--red`)
    }
}

function repass_check(pass1, pass2) {
    if(pass1 === pass2) {
	repass.previousElementSibling.classList.remove(`block__indicator--red`)
	repass.previousElementSibling.classList.add(`block__indicator--green`)
    } else {
	repass.previousElementSibling.classList.remove(`block__indicator--green`)
	repass.previousElementSibling.classList.add(`block__indicator--red`)
    }
}

;[fullname, username, password, repass].forEach(elem => {
    elem.addEventListener(`keyup`, (evt) => {
	var regexp
	switch(evt.target.id) {
	    case `fullname`:
		regexp = /^[a-z .'-]+$/i
		break

	    case `username`:
		regexp = /^[\S]+$/
		break

	    case `password`:
		regexp = /^\S{8,32}$/
		break

	    case `repass`:
		repass_check(password.value, repass.value)
		return
	}
	indicator_status(evt.target, regexp)
    })
})

