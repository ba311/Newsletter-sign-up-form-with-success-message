    function validateEmail() {
        const emailInput = document.getElementById("emailInput");
        const validationMessage = document.getElementById("validationMessage");
        const email = emailInput.value.trim();

        // Check if email is empty
        if (email === "") {
            validationMessage.innerText = "Please enter an email address";
            return false;
        }

        // Check if email is valid
        const emailParts = email.split("@");
        if (emailParts.length !== 2) {
            validationMessage.innerText = "missing or too many '@' symbols";
            return false;
        }

        const localPart = emailParts[0];
        const domainPart = emailParts[1];

        // Check local part for invalid characters
        const localPartRegex = /^[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+(\.[a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+)*$/;
        if (!localPartRegex.test(localPart)) {
            validationMessage.innerText = "invalid characters in local part";
            return false;
        }

        // Check local part for consecutive periods
        if (localPart.includes("..")) {
            validationMessage.innerText = "consecutive periods in local part";
            return false;
        }

        // Check local part for leading or trailing period
        if (localPart.startsWith(".") || localPart.endsWith(".")) {
            validationMessage.innerText = "leading or trailing period in local part";
            return false;
        }

        // Check domain part for invalid characters
        const domainPartRegex = /^[a-zA-Z0-9.-]+$/;
        if (!domainPartRegex.test(domainPart)) {
            validationMessage.innerText = "invalid characters in domain part";
            return false;
        }

        // Check domain part for consecutive hyphens
        if (domainPart.includes("--")) {
            validationMessage.innerText = "consecutive hyphens in domain part";
            return false;
        }

        // Check domain part for leading or trailing hyphen
        if (domainPart.startsWith("-") || domainPart.endsWith("-")) {
            validationMessage.innerText = "leading or trailing hyphen in domain part";
            return false;
        }

        // Check domain part for valid TLD
        const tldRegex = /^[a-zA-Z]{2,}$/;
        const domainParts = domainPart.split(".");
        if (domainParts.length < 2 || !tldRegex.test(domainParts[domainParts.length - 1])) {
            validationMessage.innerText = "invalid top-level domain";
            return false;
        }

        // Email is valid
        validationMessage.innerText = "Email is valid!";
    	 document.querySelector(".card").style.display= "none";
          document.querySelector("#show2").style.display = "block";
        
        return true;


    	
    }

        // emailInput.addEventListener("input", function() {
        //   emailInput.checkValidity()
        //     ? submitBtn.classList.add("valid-email")
        //     : submitBtn.classList.remove("valid-email");
        // });
    // const emailInput = document.querySelector('input[type="email"]');
    // emailInput.addEventListener("input", () => {
    //   emailInput.checkValidity()
    //     ? submitBtn.classList.add("valid-email")
    //     : submitBtn.classList.remove("valid-email");
    // });

   

    

   
    

        function dismissBtn() {
          document.querySelector(".card").style.display = "none" ? '' : "none";
          document.querySelector("#show2").style.display = "none";
          location.reload();
        };