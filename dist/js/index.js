$().ready(function(){
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
            applicantMiddleName:{
                required: true,
                minlength: 2
            },
            applicantLastName:{
                required: true,
                minlength: 2,
                number: false
            },
            // applicantSuffix: {
            //     required: true,
            //     SelectName: { valueNotEquals: "" }

            // },
            repeatSocialsecuritynumber: {
                required: true,
                minlength: 6,
                equalTo: "#social-security-number"
            },
            applicantEmail:{
                required: true,
                email: true
            },
            // applicantTwicCard:{
            //     required: true,
            //     SelectName: { valueNotEquals: "" }
            // },
            // applicantPassport:{
            //     required: true,
            //     SelectName: { valueNotEquals: "" }
            // }
            driverFirstName:{
                required: true,
                minlength: 2
            },
            driverLastName:{
                required: true,
                minlength: 2
            }
        },
        messages: {
            socialSecurityNumber: "Please enter the social security number",
            repeatSocialsecuritynumber: "Repeat the social security number",
        }
    });


    $("#social-security-number").inputmask({
        "mask": "999-99-9999"
    });
    $("#applicant-phone-number, #applicant-alt-number").inputmask({
        "mask": "(999) 999-99-9999"
    })



    

})

