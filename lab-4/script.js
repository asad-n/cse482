const fullname = document.getElementById(`fullname`),
      username = document.getElementById(`username`),
      password = document.getElementById(`password`),
      repass   = document.getElementById(`repass`),
      gender   = document.getElementById(`gender`),
      mobile   = document.getElementById(`contact`),
      email    = document.getElementById(`email`),
      btn      = document.getElementById(`btn-submit`)
      fullname_regexp = /^[a-z .'-]+$/i,
      username_regexp = /^[\S]+$/,
      password_regexp = /^\S{8,32}$/,
      mobile_regexp   = /^\d{11}$/,
      email_regexp    = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

function indicator_status(element, pattern) {
    if(!element.hasAttribute(`required`) && element.value.trim().length == 0) {
	element.previousElementSibling.className = `block__indicator`
    } else {
	if(element.value.match(pattern)) {
	    element.previousElementSibling.classList.remove(`block__indicator--red`)
	    element.previousElementSibling.classList.add(`block__indicator--green`)
	} else {
	    element.previousElementSibling.classList.remove(`block__indicator--green`)
	    element.previousElementSibling.classList.add(`block__indicator--red`)
	}
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

;[fullname, username, password, repass, mobile, email].forEach(elem => {
    elem.addEventListener(`keyup`, (evt) => {
	switch(evt.target.id) {
	    case `fullname`:
		indicator_status(evt.target, fullname_regexp)
		return

	    case `username`:
		indicator_status(evt.target, username_regexp)
		return

	    case `password`:
		indicator_status(evt.target, password_regexp)
		return

	    case `repass`:
		repass_check(password.value.trim(), repass.value.trim())
		return

	    case `contact`:
		indicator_status(evt.target, mobile_regexp)
		return

	    case `email`:
		indicator_status(evt.target, email_regexp)
		return
	}
    })
})

btn.addEventListener(`click`, (evt) => {
    evt.preventDefault()

    error = false

    if(!fullname.value.trim().match(fullname_regexp)) {
	display_error(fullname, `Name can't be empty and alphabets, spaces, hyphens, apostrophes only`)
	error = true
    }

    if(!username.value.trim().match(username_regexp)) {
	display_error(username, `Please use alphanumeric characters, avoid space`)
	error = true
    }

    if(!password.value.trim().match(password_regexp)) {
	display_error(password, `Use 8-32 characters`)
	error = true
    }

    if(password.value.trim() !== repass.value.trim()) {
	display_error(repass, `Passwords don't match`)
	error = true
    }

    if(mobile.value.trim().length != 0 && !mobile.value.trim().match(mobile_regexp)) {
	error = true
	display_error(mobile, `Accepeted format: 01XXXXXXXXX`)
    }

    if(email.value.trim().length != 0 && !email.value.trim().match(email_regexp)) {
	error = true
	display_error(email, `Please enter a valid email address: someone@somewhere.xyz`)
    }

    if (!error)
	alert(`Good boy`)
})

function display_error(element, message) {
    const parent_elem = element.parentElement,
	  error_elem  = parent_elem.querySelector(`.block__error`)

    console.log(error_elem)
    error_elem.innerText = message
    error_elem.style.visibility = `visible`
}
