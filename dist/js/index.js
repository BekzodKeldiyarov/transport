$().ready(function () {
    $.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Please select an item!");

    jQuery.validator.addMethod("greaterThan",
        function (value, element, params) {

            if (!/Invalid|NaN/.test(new Date(value))) {
                return new Date(value) > new Date($(params).val());
            }

            return isNaN(value) && isNaN($(params).val())
                || (Number(value) > Number($(params).val()));
        }, 'Must be greater than date from.');


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
            straightTruck: {
                required: true,
                valueNotEquals: "default"
            },
            straightTruckDateTo: {
                greaterThan: "#straight-truck-date-from"
            },
            truckTractor: {
                required: true,
                valueNotEquals: "default"
            },
            truckTractorDateTo: {
                greaterThan: "#truck-tractor-date-from"
            },
            semiTrailers: {
                required: true,
                valueNotEquals: "default"
            },
            semiTrailersDateTo: {
                greaterThan: "#semi-trailers-date-from"
            },
            doublesTriples: {
                required: true,
                valueNotEquals: "default"
            },
            doublesDateTo: {
                greaterThan: "#doubles-date-from"
            },
            flatbed: {
                required: true,
                valueNotEquals: "default"
            },
            flatbedDateTo: {
                greaterThan: "#flatbed-date-from"
            },
            bus: {
                required: true,
                valueNotEquals: "default"
            },
            busDateTo: {
                greaterThan: "#bus-date-from"
            },
            other: {
                required: true,
                valueNotEquals: "default"
            },
            otherDateTo: {
                greaterThan: "#other-date-from"
            },

            accidentAnswer: {
                required: true
            },
            violationAnswer: {
                required: true
            },
            employerDateTo: {
                greaterThan: "#employer-date-from"
            }

        },
        messages: {
            socialSecurityNumber: "Please enter the social security number",
            repeatSocialsecuritynumber: "Repeat the social security number",
            applicantSuffix:
                {
                    valueNotEquals: "Please select an item!"
                }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.form-check-wrapper'));
            } else { // This is the default behavior
                error.insertAfter(element);
            }
        }
    })
    ;

    $('#upload-driver-licence').validate({
        rules: {
            frontOfDriverLicense: {},
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

    $('#upload-medical-card').validate({
        rules: {
            medicalCardPhoto: {
                required: true,
                accept: 'png|jpg|gif'
            }
        },
        messages: {
            medicalCardPhoto: {
                required: "You must select the file(s) to upload.",
                accept: "Only formats png, jpg, gif"
            }
        }
    });

    $('#upload-violation-sign-form').validate({
        rules: {
            uploadViolationDriverFullName: {
                required: true,
                min: 2
            },
            signDocumentSocialSecurityNumber: {
                required: true
            },
            repeatSignDocumentSocialSecurityNumber: {
                required: true,
                equalTo: "#violation-sign-document-social-security-number"
            },
            signDocumentBirthDate: {
                required: true
            },
            repeatSignDocumentBirthDate: {
                required: true,
                equalTo: ""
            }

        }
    })

    $('#alcohol-drug-test-form').validate({
        rules: {
            alcoholDrugTest1: {
                required: true
            },
            alcoholDrugTest2: {
                required: true
            }
        },
        errorPlacement: function (error, element) {
            if (element.is(":radio")) {
                error.appendTo(element.parents('.form-check-wrapper'));
            } else { // This is the default behavior
                error.insertAfter(element);
            }
        }
    })
    $('#safety-sign-document-form').validate({
        rules: {
            uploadViolationDriverFullName: {
                required: true,
                min: 2
            },
            signDocumentSocialSecurityNumber: {
                required: true
            },
            safetyRepeatSignDocumentSocialSecurityNumber: {
                required: true,
                equalTo: '#safety-sign-document-social-security-number'
            },
            signDocumentBirthDate: {
                required: true
            },
            repeatSafetySignDocumentBirthDate: {
                required: true,
                equalTo: "#safety-sign-document-birth-date"
            }

        }
    })

    $('#testing-policy-sign-document').validate({
        rules: {
            testingPolicyFullName: {
                required: true,
                min: 2
            },
            testingPolicySocialSecurityNumber: {
                required: true
            },
            repeatTestingPolicySocialSecurityNumber: {
                required: true,
                equalTo: "#testing-policy-sign-document-social-security-number"
            },
            testingPolicyBirthDate: {
                required: true
            },
            repeatTestingPolicyBirthDate: {
                required: true,
                equalTo: "#testing-policy-sign-document-birth-date"
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

    $('#new-application-form').validate({
        rules: {
            socialSecurityNumber: {
                required: true
            },
            repeatSocialSecurityNumber: {
                required: true,
                equalTo: '#social-security-number'
            },
            howDidYouHear: {
                required: true
            }
        }
    })

    $('#return-application-form').validate({
        rules: {
            socialSecurityNumber: {
                required: true
            },
            repeatSocialSecurityNumber: {
                required: true,
                equalTo: '#social-security-number'
            },
            howDidYouHear: {
                required: true
            }
        }
    })

    $(".social-security-number").inputmask({
        "mask": "999-99-9999"
    });
    $("#applicant-phone-number, #applicant-alt-number, #employer-phone-number").inputmask({
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