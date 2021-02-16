$().ready(function () {
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Please select an item!");
    $('#return-application-form').validate({
        rules: {
            socialSecuryNumber: {
                required: true,
                minlength: 6
            },
            repeatSocialsecuritynumber: {
                required: true,
                minlength: 6,
                equalTo: "#social-security-number"
            }
        },
        messages: {
            socialSecurityNumber: "Please enter the social security number",
            repeatSocialsecuritynumber: "Repeat the social security number"
        }
    });

    $('#applicant-form').validate({
        rules: {
            applicantFirstName: {
                required: true,
                minlength: 2
            },
            applicantMiddleName: {
                required: true,
                minlength: 2
            },
            applicantLastName: {
                required: true,
                minlength: 2,
                number: false
            },
            applicantSuffix: {
                valueNotEquals: "default"
            },
            repeatSocialsecuritynumber: {
                required: true,
                minlength: 6,
                equalTo: "#social-security-number"
            },
            applicantEmail: {
                required: true,
                email: true
            },
            applicantTwicCard: {
                required: true,
                valueNotEquals: "default"
            },
            applicantPassport: {
                required: true,
                valueNotEquals: "default"
            },
            driverFirstName: {
                required: true,
                minlength: 2
            },
            driverLastName: {
                required: true,
                minlength: 2
            },
            driverLicenceState: {
                required: true,
                valueNotEquals: "default"
            },
            driverLicenceCountry: {
                required: true,
                valueNotEquals: "default"
            },
            driverLicenceClass: {
                required: true,
                valueNotEquals: "default"
            },
            driverLicenceNumber: {
                required: true
            },
            repeatDriverLicenceNumber: {
                required: true,
                equalTo: "#driver-licence-number"
            },
            medicalCertificateExpires: {
                required: true
            },
            signDocumentSocialSecurityNumber: {
                required: true
            },

        },
        messages: {
            socialSecurityNumber: "Please enter the social security number",
            repeatSocialsecuritynumber: "Repeat the social security number",
            applicantSuffix: {
                valueNotEquals: "Please select an item!"
            }
        }
    });

    $('#upload-driver-licence').validate({
        rules: {
            frontOfDriverLicense: {
                required: true,
                accept: 'png|jpg|gif'
            },
            backOfDriverLicense: {
                required: true,
                accept: 'png|jpg|gif'
            }
        },
        messages: {
            frontOfDriverLicense: {
                required: "You must select the file(s) to upload.",
                accept: "Only formats png, jpg, gif"
            },
            backOfDriverLicense: {
                required: "You must select the file(s) to upload.",
                accept: "Only formats png, jpg, gif"
            }
        }
    })

    $('#sign-document__form').validate({
        rules: {
            signDocumentSocialSecurityNumber: {
                required: true
            },
            repeatSignDocumentSocialSecurityNumber: {
                required: true,
                equalTo: "#sign-document-social-security-number"
            }
        }
    })

    $(".social-security-number").inputmask({
        "mask": "999-99-9999"
    });
    $("#applicant-phone-number, #applicant-alt-number").inputmask({
        "mask": "(999) 999-99-9999"
    })






    $contact = $("#acceptance-button");
    $close = $("#cancel-sign-document-button");
    $overlay = $(".popup-overlay");
    $contact.on('click', function () {
        console.log("bekzod");
        $('.popup').fadeIn();
        $overlay.toggleClass("overlay");
    })

    $close.on('click', function () {
        $('.popup').fadeOut();
        $overlay.toggleClass("overlay");
    })

})