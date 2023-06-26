const fieldObjects = {
    select: {
    aliases: ['multiselect', "drop-down", "dropdown"],
    categories: ['default'],
    element: 'select',
    label: 'Select Field',
    options: ['one', 'two', 'three'],
    placeholder: 'Type value here'
    },
    checkbox: {
    aliases: ['multiselect', "checks", "checkboxes"],
    categories: ['default'],
    element: 'input',
    type: 'checkbox',
    label: 'Checkbox Field',
    options: ['yes', 'no', 'maybe'],
    placeholder: 'Type value here'
    },
    radio: {
    aliases: ['multiselect', 'option', 'radiobutton'],
    categories: ['default'],
    element: 'input',
    type: 'radio',
    label: 'Radio Field',
    options: ['yes', 'no'],
    placeholder: 'Type value here'
    },
    text: {
    aliases: ['short answer', 'input field', 'text field'],
    categories: ['default'],
    element: 'input',
    type: 'text',
    label: 'Short Answer',
    placeholder: 'Type value here'
    },
    textarea: {
    aliases: ['long answer', 'textarea field', 'text field'],
    categories: ['default'],
    element: 'textarea',
    label: 'Long Answer',
    placeholder: 'Type value here'
    },
    graphicalChoice: {
    aliases: ['multiselect', 'graphical', 'image choice'],
    categories: ['default'],
    element: 'graphical',
    label: 'Graphical Choice',
    placeholder: 'Type value here',
    options: [['choose', 'https://res.cloudinary.com/dh-image/image/upload/v1659663350/Group_4323_nbneup.png', 'https://res.cloudinary.com/dh-image/image/upload/v1659663350/Group_7_h4ncxq.png'], ['pick', 'https://res.cloudinary.com/dh-image/image/upload/v1659663350/Group_4323_nbneup.png', 'https://res.cloudinary.com/dh-image/image/upload/v1659663350/Group_7_h4ncxq.png']]
    },
    dateRangePicker: {
    aliases: ['date range', 'datepicker', 'range picker'],
    categories: ['default', 'html', 'time', 'date', 'form'],
    element: 'dateRangePicker',
    label: 'Date Range Picker',
    placeholder: 'Type value here'
    },
    date: {
    aliases: ['date picker', 'datepicker', 'calendar'],
    categories: ['default'],
    element: 'input',
    type: 'date',
    label: 'Date Picker',
    placeholder: 'Type value here'
    },
    email: {
    aliases: ['email', 'email address', 'mail'],
    categories: ['contact'],
    element: 'input',
    type: 'email',
    label: 'Email Address',
    placeholder: 'Type value here'
    },
    fullName: {
    aliases: ['name', "handle", 'full name field'],
    categories: ['contact', 'authorization', 'form'],
    element: 'input',
    type: 'text',
    label: 'Your full name',
    placeholder: 'Robert Benson'
    },
    firstName: {
    aliases: ['name', "handle", "first", 'first name field'],
    categories: ['contact', 'authorization', 'form'],
    element: 'input',
    type: 'text',
    label: 'First Name',
    placeholder: 'Robert'
    },
    lastName: {
    aliases: ['name', "handle", "last", 'last name field'],
    categories: ['contact', 'authorization', 'form'],
    element: 'input',
    type: 'text',
    label: 'Last Name',
    placeholder: 'Benson'
    },
    email: {
    aliases: ['email address', 'mail'],
    categories: ['contact', 'authorization', 'communication'],
    element: 'input',
    type: 'email',
    label: 'Your email address',
    placeholder: 'rbenson@dharbor.com'
    },
    phone: {
    aliases: ['telephone', 'contact number', 'cellphone'],
    categories: ['contact', 'authorization', 'communication'],
    element: 'input',
    type: 'tel',
    label: 'Your phone number',
    placeholder: '555-555-5555'
    },
    dateRangeOff: {
    aliases: ['dates', 'range', 'time off'],
    categories: ['booking', 'scheduling', 'leave'],
    element: 'input',
    type: 'daterange',
    label: 'What days do you need off?'
    },
    addtlExplanation: {
    aliases: ['reason', 'note', 'additional details'],
    categories: ['booking', 'scheduling', 'leave'],
    element: 'input',
    type: 'text',
    label: 'Please provide any additional explanation for the time off'
    },
    username: {
    aliases: ['user', 'login', 'user ID'],
    categories: ['authentication', 'registration', 'account'],
    element: 'input',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username'
    },
    password: {
    aliases: ['pass', 'pwd', 'secret'],
    categories: ['authentication', 'registration', 'account'],
    element: 'input',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
    },
    confirmPassword: {
    aliases: ['confirmPwd', 'confirmPass'],
    categories: ['authentication', 'registration', 'account'],
    element: 'input',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm your password'
    },
    address: {
    aliases: ['location', 'streetAddress', 'residence'],
    categories: ['contact', 'shipping', 'location'],
    element: 'input',
    type: 'text',
    label: 'Address',
    placeholder: 'Enter your address'
    },
    city: {
    aliases: ['town'],
    categories: ['contact', 'shipping', 'location'],
    element: 'input',
    type: 'text',
    label: 'City',
    placeholder: 'Enter your city'
    },
    state: {
    aliases: ['province', 'region'],
    categories: ['contact', 'shipping', 'location'],
    element: 'input',
    type: 'text',
    label: 'State',
    placeholder: 'Enter your state'
    },
    zipCode: {
    aliases: ['postalCode', 'postcode', 'ZIP', 'PIN code'],
    categories: ['contact', 'shipping', 'location'],
    element: 'input',
    type: 'text',
    label: 'ZIP Code',
    placeholder: 'Enter your ZIP code'
    },
    country: {
    aliases: ['nation'],
    categories: ['contact', 'shipping', 'location'],
    element: 'input',
    type: 'text',
    label: 'Country',
    placeholder: 'Enter your country'
    },
    gender: {
    aliases: ['sex'],
    categories: ['demographic', 'personal information'],
    element: 'select',
    label: 'Gender',
    options: ['Male', 'Female', 'Other']
    },
    dateOfBirth: {
    aliases: ['dob', 'birthDate'],
    categories: ['demographic', 'personal information', 'birthdate'],
    element: 'input',
    type: 'date',
    label: 'Date of Birth',
    placeholder: 'Select your date of birth'
    },
    nationality: {
    aliases: ['citizenship'],
    categories: ['demographic', 'personal information'],
    element: 'input',
    type: 'text',
    label: 'Nationality',
    placeholder: 'Enter your nationality'
    },
    occupation: {
    aliases: ['job', 'profession', 'employment'],
    categories: ['employment', 'work', 'career'],
    element: 'input',
    type: 'text',
    label: 'Occupation',
    placeholder: 'Enter your occupation'
    },
    company: {
    aliases: ['employer', 'organization'],
    categories: ['employment', 'work', 'career'],
    element: 'input',
    type: 'text',
    label: 'Company',
    placeholder: 'Enter your company name'
    },
    jobTitle: {
    aliases: ['title', 'position', 'role'],
    categories: ['employment', 'work', 'career'],
    element: 'input',
    type: 'text',
    label: 'Job Title',
    placeholder: 'Enter your job title'
    },
    yearsOfExperience: {
    aliases: ['experience'],
    categories: ['employment', 'work', 'career'],
    element: 'input',
    type: 'number',
    label: 'Years of Experience',
    placeholder: 'Enter your years of experience'
    },
    educationLevel: {
    aliases: ['degreeLevel'],
    categories: ['education', 'qualification'],
    element: 'select',
    label: 'Education Level',
    options: ['High School', 'Associate', 'Bachelor', 'Master', 'PhD']
    },
    degree: {
    aliases: ['qualification', 'academicDegree'],
    categories: ['education', 'qualification'],
    element: 'input',
    type: 'text',
    label: 'Degree',
    placeholder: 'Enter your degree'
    },
    school: {
    aliases: ['institution'],
    categories: ['education', 'qualification'],
    element: 'input',
    type: 'text',
    label: 'School',
    placeholder: 'Enter your school name'
    },
    graduationYear: {
    aliases: ['completionYear'],
    categories: ['education', 'qualification'],
    element: 'input',
    type: 'number',
    label: 'Graduation Year',
    placeholder: 'Enter your graduation year'
    },
    socialSecurityNumber: {
    aliases: ['ssn'],
    categories: ['identification', 'personal information'],
    element: 'input',
    type: 'text',
    label: 'Social Security Number',
    placeholder: 'Enter your SSN'
    },
    driverLicenseNumber: {
    aliases: ['licenseNumber'],
    categories: ['identification', 'driving'],
    element: 'input',
    type: 'text',
    label: 'Driver License Number',
    placeholder: 'Enter your license number'
    },
    passportNumber: {
    aliases: ['travelDocumentNumber'],
    categories: ['identification', 'travel'],
    element: 'input',
    type: 'text',
    label: 'Passport Number',
    placeholder: 'Enter your passport number'
    },
    creditCardNumber: {
    aliases: ['cardNumber'],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Credit Card Number',
    placeholder: 'Enter your card number'
    },
    expirationDate: {
    aliases: ['expiryDate'],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Expiration Date',
    placeholder: 'Enter the expiration date'
    },
    cvv: {
    aliases: ['securityCode'],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'CVV',
    placeholder: 'Enter the CVV'
    },
    cardholderName: {
    aliases: ['nameOnCard'],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Cardholder Name',
    placeholder: 'Enter the cardholder name'
    },
    billingAddress: {
    aliases: ['billingLocation'],
    categories: ['payment', 'financial', 'address'],
    element: 'input',
    type: 'text',
    label: 'Billing Address',
    placeholder: 'Enter the billing address'
    },
    shippingAddress: {
    aliases: ['deliveryAddress'],
    categories: ['shipping', 'address'],
    element: 'input',
    type: 'text',
    label: 'Shipping Address',
    placeholder: 'Enter the shipping address'
    },
    shippingMethod: {
    aliases: ['deliveryMethod'],
    categories: ['shipping'],
    element: 'select',
    label: 'Shipping Method',
    options: ['Standard', 'Express', 'Next Day']
    },
    couponCode: {
    aliases: ['promoCode'],
    categories: ['promotion', 'discount'],
    element: 'input',
    type: 'text',
    label: 'Coupon Code',
    placeholder: 'Enter your coupon code'
    },
    newsletterSubscription: {
    aliases: ['subscription'],
    categories: ['communication'],
    element: 'input',
    type: 'checkbox',
    options: ['yes', 'no'],
    label: 'Subscribe to Newsletter',
    value: 'subscribe'
    },
    termsAndConditions: {
    aliases: ['terms'],
    categories: ['agreement', 'legal'],
    element: 'input',
    type: 'checkbox',
    options: ['yes', 'no'],
    label: 'Agree to Terms and Conditions',
    value: 'agree'
    },
    fileUpload: {
    aliases: ['upload'],
    categories: ['media', 'attachments'],
    element: 'input',
    type: 'file',
    label: 'File Upload'
    },
    profilePicture: {
    aliases: ['avatar'],
    categories: ['media', 'profile'],
    element: 'input',
    type: 'file',
    label: 'Profile Picture'
    },
    bio: {
    aliases: ['about', 'description', 'summary'],
    categories: ['profile', 'personal information'],
    element: 'textarea',
    label: 'Bio',
    placeholder: 'Enter a brief description about yourself'
    },
    interests: {
    aliases: ['hobbies', 'passions'],
    categories: ['profile', 'personal information'],
    element: 'textarea',
    label: 'Interests',
    placeholder: 'Enter your interests'
    },
    socialMediaLinks: {
    aliases: ['socialLinks'],
    categories: ['profile', 'communication'],
    element: 'input',
    type: 'text',
    label: 'Social Media Links',
    placeholder: 'Enter your social media links'
    },
    website: {
    aliases: ['site'],
    categories: ['profile', 'communication'],
    element: 'input',
    type: 'url',
    label: 'Website',
    placeholder: 'Enter your website URL'
    },
    referralCode: {
    aliases: [],
    categories: ['promotion', 'referral'],
    element: 'input',
    type: 'text',
    label: 'Referral Code',
    placeholder: 'Enter your referral code'
    },
    rating: {
    aliases: ['feedbackRating'],
    categories: ['feedback'],
    element: 'input',
    type: 'number',
    label: 'Rating',
    placeholder: 'Enter your rating'
    },
    review: {
    aliases: ['comment', 'feedback'],
    categories: ['feedback'],
    element: 'textarea',
    label: 'Review',
    placeholder: 'Enter your review'
    },
    captcha: {
    aliases: ['recaptcha'],
    categories: ['security', 'verification'],
    element: 'input',
    type: 'text',
    label: 'Captcha',
    placeholder: 'Enter the captcha'
    },
    securityQuestion: {
    aliases: [],
    categories: ['security'],
    element: 'input',
    type: 'text',
    label: 'Security Question',
    placeholder: 'Enter a security question'
    },
    securityAnswer: {
    aliases: [],
    categories: ['security'],
    element: 'input',
    type: 'text',
    label: 'Security Answer',
    placeholder: 'Enter the security answer'
    },
    consent: {
    aliases: [],
    categories: ['agreement', 'consent'],
    element: 'input',
    type: 'checkbox',
    options: ['yes'],
    label: 'Give Consent',
    value: 'consent'
    },
    ageVerification: {
    aliases: [],
    categories: ['verification', 'age'],
    element: 'input',
    type: 'checkbox',
    label: 'Age Verification',
    value: 'verified',
    options: ['yes'],
    },
    donationAmount: {
    aliases: ['donate', 'contribution'],
    categories: ['payment', 'charity'],
    element: 'input',
    type: 'number',
    label: 'Donation Amount',
    placeholder: 'Enter the donation amount'
    },
    donationMessage: {
    aliases: ['donorMessage'],
    categories: ['charity'],
    element: 'textarea',
    label: 'Donation Message',
    placeholder: 'Enter a message for your donation'
    },
    eventRegistration: {
    aliases: ['eventSignUp'],
    categories: ['registration', 'events'],
    element: 'input',
    type: 'checkbox',
    label: 'Register for Event',
    options: ['yes'],
    value: 'registered'
    },
    eventTitle: {
    aliases: [],
    categories: ['events'],
    element: 'input',
    type: 'text',
    label: 'Event Title',
    placeholder: 'Enter the event title'
    },
    eventDate: {
    aliases: [],
    categories: ['events'],
    element: 'input',
    type: 'date',
    label: 'Event Date',
    placeholder: 'Select the event date'
    },
    eventLocation: {
    aliases: [],
    categories: ['events'],
    element: 'input',
    type: 'text',
    label: 'Event Location',
    placeholder: 'Enter the event location'
    },
    eventDescription: {
    aliases: [],
    categories: ['events'],
    element: 'textarea',
    label: 'Event Description',
    placeholder: 'Enter the event description'
    },
    eventAttendees: {
    aliases: ['participants'],
    categories: ['events'],
    element: 'input',
    type: 'number',
    label: 'Number of Attendees',
    placeholder: 'Enter the number of attendees'
    },
    eventTicketQuantity: {
    aliases: ['ticketQty'],
    categories: ['events'],
    element: 'input',
    type: 'number',
    label: 'Ticket Quantity',
    placeholder: 'Enter the ticket quantity'
    },
    eventTicketType: {
    aliases: ['ticket'],
    categories: ['events'],
    element: 'select',
    label: 'Ticket Type',
    options: ['General Admission', 'VIP', 'Student']
    },
    eventPaymentMethod: {
    aliases: [],
    categories: ['events', 'payment'],
    element: 'select',
    label: 'Payment Method',
    options: ['Credit Card', 'PayPal', 'Bank Transfer']
    },
    eventPromoCode: {
    aliases: [],
    categories: ['events', 'promotion'],
    element: 'input',
    type: 'text',
    label: 'Promo Code',
    placeholder: 'Enter the promo code'
    },
    eventSpeaker: {
    aliases: ['guestSpeaker'],
    categories: ['events'],
    element: 'input',
    type: 'text',
    label: 'Speaker',
    placeholder: 'Enter the speaker name'
    },

    eventSponsor: {
    aliases: ['sponsorship'],
    categories: ['events'],
    element: 'input',
    type: 'text',
    label: 'Sponsor',
    placeholder: 'Enter the sponsor name'
    },
    surveyQuestion: {
    aliases: [],
    categories: ['survey'],
    element: 'textarea',
    label: 'Survey Question',
    placeholder: 'Enter the survey question'
    },
    surveyOption: {
    aliases: ['answerOption'],
    categories: ['survey'],
    element: 'input',
    type: 'text',
    label: 'Survey Option',
    placeholder: 'Enter a survey option'
    },
    surveyResponse: {
    aliases: ['answer'],
    categories: ['survey'],
    element: 'textarea',
    label: 'Survey Response',
    placeholder: 'Enter your response'
    },
    subscriptionPlan: {
    aliases: ['plan'],
    categories: ['subscription'],
    element: 'select',
    label: 'Subscription Plan',
    options: ['Basic', 'Standard', 'Premium']
    },
    paymentMethod: {
    aliases: ['billingMethod'],
    categories: ['payment'],
    element: 'select',
    label: 'Payment Method',
    options: ['Credit Card', 'Debit Card', 'PayPal']
    },
    orderQuantity: {
    aliases: ['quantity'],
    categories: ['order'],
    element: 'input',
    type: 'number',
    label: 'Order Quantity',
    placeholder: 'Enter the order quantity'
    },
    orderNotes: {
    aliases: ['comments'],
    categories: ['order'],
    element: 'textarea',
    label: 'Order Notes',
    placeholder: 'Enter any notes or comments'
    },
    orderShippingMethod: {
    aliases: ['deliveryMethod'],
    categories: ['order', 'shipping'],
    element: 'select',
    label: 'Shipping Method',
    options: ['Standard', 'Express', 'Next Day']
    },
    orderCouponCode: {
    aliases: ['promoCode'],
    categories: ['order', 'promotion'],
    element: 'input',
    type: 'text',
    label: 'Coupon Code',
    placeholder: 'Enter your coupon code'
    },
    supportTicketSubject: {
    aliases: ['ticketSubject'],
    categories: ['support'],
    element: 'input',
    type: 'text',
    label: 'Ticket Subject',
    placeholder: 'Enter the ticket subject'
    },
    supportTicketDescription: {
    aliases: ['ticketDescription'],
    categories: ['support'],
    element: 'textarea',
    label: 'Ticket Description',
    placeholder: 'Enter the ticket description'
    },
    supportTicketAttachment: {
    aliases: ['ticketAttachment'],
    categories: ['support', 'attachments'],
    element: 'input',
    type: 'file',
    label: 'Ticket Attachment'
    },
    appointmentDate: {
    aliases: [],
    categories: ['appointment', 'scheduling'],
    element: 'input',
    type: 'date',
    label: 'Appointment Date',
    placeholder: 'Select the appointment date'
    },
    appointmentTime: {
    aliases: [],
    categories: ['appointment', 'scheduling'],
    element: 'input',
    type: 'time',
    label: 'Appointment Time',
    placeholder: 'Select the appointment time'
    },
    appointmentLocation: {
    aliases: [],
    categories: ['appointment', 'scheduling'],
    element: 'input',
    type: 'text',
    label: 'Appointment Location',
    placeholder: 'Enter the appointment location'
    },
    appointmentReason: {
    aliases: [],
    categories: ['appointment', 'scheduling'],
    element: 'textarea',
    label: 'Appointment Reason',
    placeholder: 'Enter the reason for the appointment'
    },
    jobTitle: {
    aliases: ['position'],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Job Title',
    placeholder: 'Enter your job title'
    },
    company: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Company',
    placeholder: 'Enter your company name'
    },
    jobDescription: {
    aliases: [],
    categories: ['employment'],
    element: 'textarea',
    label: 'Job Description',
    placeholder: 'Enter the job description'
    },
    salaryExpectation: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'number',
    label: 'Salary Expectation',
    placeholder: 'Enter your salary expectation'
    },
    yearsOfExperience: {
    aliases: ['experience'],
    categories: ['employment'],
    element: 'input',
    type: 'number',
    label: 'Years of Experience',
    placeholder: 'Enter the number of years of experience'
    },
    educationLevel: {
    aliases: ['education'],
    categories: ['employment'],
    element: 'select',
    label: 'Education Level',
    options: ['High School', 'Bachelors Degree', 'Masters Degree', 'PhD']
    },
    skill: {
    aliases: ['skills'],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Skill',
    placeholder: 'Enter a skill'
    },
    language: {
    aliases: ['languages'],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Language',
    placeholder: 'Enter a language'
    },
    certification: {
    aliases: ['certifications'],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Certification',
    placeholder: 'Enter a certification'
    },
    emergencyContactName: {
    aliases: [],
    categories: ['emergency', 'contact'],
    element: 'input',
    type: 'text',
    label: 'Emergency Contact Name',
    placeholder: 'Enter the emergency contact name'
    },
    emergencyContactPhone: {
    aliases: [],
    categories: ['emergency', 'contact'],
    element: 'input',
    type: 'phone',
    label: 'Emergency Contact Phone',
    placeholder: 'Enter the emergency contact phone number'
    },
    emergencyContactRelationship: {
    aliases: [],
    categories: ['emergency', 'contact'],
    element: 'input',
    type: 'text',
    label: 'Emergency Contact Relationship',
    placeholder: 'Enter the emergency contact relationship'
    },
    shippingAddress: {
    aliases: ['address'],
    categories: ['shipping'],
    element: 'input',
    type: 'text',
    label: 'Shipping Address',
    placeholder: 'Enter the shipping address'
    },
    billingAddress: {
    aliases: ['address'],
    categories: ['payment'],
    element: 'input',
    type: 'text',
    label: 'Billing Address',
    placeholder: 'Enter the billing address'
    },
    cardNumber: {
    aliases: [],
    categories: ['payment'],
    element: 'input',
    type: 'text',
    label: 'Card Number',
    placeholder: 'Enter the card number'
    },
    cardExpirationDate: {
    aliases: ['expirationDate'],
    categories: ['payment'],
    element: 'input',
    type: 'text',
    label: 'Card Expiration Date',
    placeholder: 'Enter the card expiration date'
    },
    cardCVV: {
    aliases: ['cvv'],
    categories: ['payment'],
    element: 'input',
    type: 'text',
    label: 'Card CVV',
    placeholder: 'Enter the card CVV'
    },
    shippingMethod: {
    aliases: [],
    categories: ['shipping'],
    element: 'select',
    label: 'Shipping Method',
    options: ['Standard', 'Express', 'Next Day']
    },
    newsletterSubscription: {
    aliases: ['subscribe'],
    categories: ['subscription'],
    element: 'input',
    type: 'checkbox',
    options: ['yes', 'no'],
    label: 'Subscribe to Newsletter',
    value: 'subscribed'
    },
    notificationPreference: {
    aliases: [],
    categories: ['preferences'],
    element: 'select',
    label: 'Notification Preference',
    options: ['Email', 'SMS', 'Push Notification']
    },
    username: {
    aliases: ['user'],
    categories: ['account'],
    element: 'input',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username'
    },
    password: {
    aliases: ['pass'],
    categories: ['account'],
    element: 'input',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
    },
    confirmPassword: {
    aliases: [],
    categories: ['account'],
    element: 'input',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm your password'
    },
    securityQuestion: {
    aliases: [],
    categories: ['account', 'security'],
    element: 'input',
    type: 'text',
    label: 'Security Question',
    placeholder: 'Enter a security question'
    },
        age: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age'
    },
    nickname: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Nickname',
    placeholder: 'Enter your nickname'
    },
    favoriteColor: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'color',
    label: 'Favorite Color'
    },
    favoriteFood: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Favorite Food',
    placeholder: 'Enter your favorite food'
    },
    favoriteMovie: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Favorite Movie',
    placeholder: 'Enter your favorite movie'
    },
    favoriteBook: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Favorite Book',
    placeholder: 'Enter your favorite book'
    },
    favoriteMusic: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Favorite Music',
    placeholder: 'Enter your favorite music'
    },
    favoriteSport: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Favorite Sport',
    placeholder: 'Enter your favorite sport'
    },
    skills: {
    aliases: ['expertise'],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Skills',
    placeholder: 'Enter your skills'
    },
    education: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Education',
    placeholder: 'Enter your education'
    },
    experience: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Experience',
    placeholder: 'Enter your experience'
    },
    certifications: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Certifications',
    placeholder: 'Enter your certifications'
    },
    interests: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Interests',
    placeholder: 'Enter your interests'
    },
    hobbies: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Hobbies',
    placeholder: 'Enter your hobbies'
    },
    emergencyContact: {
    aliases: [],
    categories: ['contact'],
    element: 'input',
    type: 'text',
    label: 'Emergency Contact',
    placeholder: 'Enter your emergency contact'
    },
    relationshipStatus: {
    aliases: [],
    categories: ['personal'],
    element: 'select',
    label: 'Relationship Status',
    options: ['Single', 'In a relationship', 'Married', 'Divorced', 'Widowed']
    },
    referralSource: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'text',
    label: 'Referral Source',
    placeholder: 'Enter your referral source'
    },
    expectedSalary: {
    aliases: [],
    categories: ['employment'],
    element: 'input',
    type: 'number',
    label: 'Expected Salary',
    placeholder: 'Enter your expected salary'
    },
    preferredLanguage: {
    aliases: [],
    categories: ['personal'],
    element: 'input',
    type: 'text',
    label: 'Preferred Language',
    placeholder: 'Enter your preferred language'
    },
    tshirtSize: {
    aliases: [],
    categories: ['personal'],
    element: 'select',
    label: 'T-Shirt Size',
    options: ['XS', 'S', 'M', 'L', 'XL']
    },
    dietaryRestrictions: {
    aliases: [],
    categories: ['personal'],
    element: 'textarea',
    label: 'Dietary Restrictions',
    placeholder: 'Enter your dietary restrictions'
    },
    insuranceProvider: {
    aliases: [],
    categories: ['medical'],
    element: 'textarea',
    label: 'Insurance Provider',
    placeholder: 'Enter insurance provider'
    },
    allergies: {
    aliases: [],
    categories: ['medical'],
    element: 'textarea',
    label: 'Allergies',
    placeholder: 'Enter your allergies'
    },
    medicalConditions: {
    aliases: [],
    categories: ['medical'],
    element: 'textarea',
    label: 'Medical Conditions',
    placeholder: 'Enter your medical conditions'
    },
    emergencyMedicalContact: {
    aliases: [],
    categories: ['contact'],
    element: 'input',
    type: 'text',
    label: 'Emergency Medical Contact',
    placeholder: 'Enter your emergency medical contact'
    },
    socialSecurityNumber: {
    aliases: [],
    categories: ['employment', 'legal'],
    element: 'input',
    type: 'text',
    label: 'Social Security Number',
    placeholder: 'Enter your Social Security Number'
    },
    creditCardNumber: {
    aliases: [],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Credit Card Number',
    placeholder: 'Enter your credit card number'
    },
    expirationDate: {
    aliases: [],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Expiration Date',
    placeholder: 'Enter the expiration date'
    },
    securityCode: {
    aliases: ['cvv'],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Security Code',
    placeholder: 'Enter the security code'
    },
    billingAddress: {
    aliases: [],
    categories: ['payment', 'financial'],
    element: 'input',
    type: 'text',
    label: 'Billing Address',
    placeholder: 'Enter the billing address'
    },
    shippingAddress: {
    aliases: [],
    categories: ['payment', 'shipping'],
    element: 'input',
    type: 'text',
    label: 'Shipping Address',
    placeholder: 'Enter the shipping address'
    },
    trackingNumber: {
    aliases: [],
    categories: ['shipping'],
    element: 'input',
    type: 'text',
    label: 'Tracking Number',
    placeholder: 'Enter the tracking number'
    },
    couponCode: {
    aliases: [],
    categories: ['promotion', 'discount'],
    element: 'input',
    type: 'text',
    label: 'Coupon Code',
    placeholder: 'Enter the coupon code'
    },
    giftCardNumber: {
    aliases: [],
    categories: ['payment', 'gift'],
    element: 'input',
    type: 'text',
    label: 'Gift Card Number',
    placeholder: 'Enter the gift card number'
    },
    donationAmount: {
    aliases: [],
    categories: ['payment', 'donation'],
    element: 'input',
    type: 'number',
    label: 'Donation Amount',
    placeholder: 'Enter the donation amount'
    },
    donationPurpose: {
    aliases: [],
    categories: ['payment', 'donation'],
    element: 'input',
    type: 'text',
    label: 'Donation Purpose',
    placeholder: 'Enter the donation purpose'
    },
    eventTitle: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'text',
    label: 'Event Title',
    placeholder: 'Enter the event title'
    },
    eventDate: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'date',
    label: 'Event Date'
    },
    eventLocation: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'text',
    label: 'Event Location',
    placeholder: 'Enter the event location'
    },
    eventDescription: {
    aliases: [],
    categories: ['event'],
    element: 'textarea',
    label: 'Event Description',
    placeholder: 'Enter the event description'
    },
    eventAttendees: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'number',
    label: 'Event Attendees',
    placeholder: 'Enter the number of attendees'
    },
    eventRegistrationFee: {
    aliases: [],
    categories: ['event', 'payment'],
    element: 'input',
    type: 'number',
    label: 'Event Registration Fee',
    placeholder: 'Enter the registration fee'
    },
    eventOrganizer: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'text',
    label: 'Event Organizer',
    placeholder: 'Enter the event organizer'
    },
    eventSponsors: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'text',
    label: 'Event Sponsors',
    placeholder: 'Enter the event sponsors'
    },
    eventFeedback: {
    aliases: [],
    categories: ['event'],
    element: 'textarea',
    label: 'Event Feedback',
    placeholder: 'Enter your feedback for the event'
    },
    eventRating: {
    aliases: [],
    categories: ['event'],
    element: 'input',
    type: 'number',
    label: 'Event Rating',
    placeholder: 'Rate the event (1-5)'
    },
    eventComments: {
    aliases: [],
    categories: ['event'],
    element: 'textarea',
    label: 'Event Comments',
    placeholder: 'Enter your comments for the event'
    },
    username: {
    aliases: ['user', 'login'],
    categories: ['authentication'],
    element: 'input',
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username'
    },
    password: {
    aliases: [],
    categories: ['authentication'],
    element: 'input',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password'
    },
    confirmPassword: {
    aliases: [],
    categories: ['authentication'],
    element: 'input',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm your password'
    },
    securityQuestion: {
    aliases: [],
    categories: ['authentication'],
    element: 'input',
    type: 'text',
    label: 'Security Question',
    placeholder: 'Enter a security question'
    },
    securityAnswer: {
    aliases: [],
    categories: ['authentication'],
    element: 'input',
    type: 'text',
    label: 'Security Answer',
    placeholder: 'Enter the answer to the security question'
    },
    termsAndConditions: {
    aliases: ['terms'],
    categories: ['legal'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'I agree to the terms and conditions'
    },
    newsletterSubscription: {
    aliases: [],
    categories: ['subscription'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Subscribe to the newsletter'
    },
    consentToEmail: {
    aliases: [],
    categories: ['communication'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to receive emails'
    },
    consentToSMS: {
    aliases: [],
    categories: ['communication'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to receive SMS'
    },
    consentToPhoneCall: {
    aliases: [],
    categories: ['communication'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to receive phone calls'
    },
    consentToCookies: {
    aliases: [],
    categories: ['privacy'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to use cookies'
    },
    consentToDataCollection: {
    aliases: [],
    categories: ['privacy'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to collect personal data'
    },
    consentToDataProcessing: {
    aliases: [],
    categories: ['privacy'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to process personal data'
    },
    consentToMarketing: {
    aliases: [],
    categories: ['marketing'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to receive marketing materials'
    },
    consentToAnalytics: {
    aliases: [],
    categories: ['analytics'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to collect analytics data'
    },
    consentToSurveys: {
    aliases: [],
    categories: ['research'],
    element: 'input',
    type: 'checkbox',
    options: ['agree'],
    label: 'Consent to participate in surveys'
    },
        favoriteColor: {
    aliases: [],
    categories: ['preferences'],
    element: 'input',
    type: 'color',
    label: 'Favorite Color',
    placeholder: 'Select your favorite color'
    },
    zodiacSign: {
    aliases: [],
    categories: ['astrology'],
    element: 'select',
    label: 'Zodiac Sign',
    options: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
    },
    favoriteAnimal: {
    aliases: [],
    categories: ['preferences'],
    element: 'input',
    type: 'text',
    label: 'Favorite Animal',
    placeholder: 'Enter your favorite animal'
    },
    musicGenre: {
    aliases: [],
    categories: ['preferences'],
    element: 'select',
    label: 'Favorite Music Genre',
    options: ['Pop', 'Rock', 'Hip Hop', 'Country', 'Jazz', 'Classical', 'R&B', 'Electronic', 'Reggae', 'Metal']
    },
    favoriteMovie: {
    aliases: [],
    categories: ['preferences'],
    element: 'input',
    type: 'text',
    label: 'Favorite Movie',
    placeholder: 'Enter your favorite movie'
    },
    favoriteBook: {
    aliases: [],
    categories: ['preferences'],
    element: 'input',
    type: 'text',
    label: 'Favorite Book',
    placeholder: 'Enter your favorite book'
    },
    skillLevel: {
    aliases: [],
    categories: ['skills'],
    element: 'select',
    label: 'Skill Level',
    options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    },
    programmingLanguage: {
    aliases: [],
    categories: ['skills', 'programming'],
    element: 'select',
    label: 'Preferred Programming Language',
    options: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'Go', 'Rust', 'TypeScript']
    },
    dietaryRestrictions: {
    aliases: [],
    categories: ['preferences'],
    element: 'checkbox',
    label: 'Dietary Restrictions',
    options: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Lactose-Free', 'Nut-Free', 'Kosher', 'Halal']
    },
    favoriteSport: {
aliases: [],
categories: ['preferences'],
element: 'input',
type: 'text',
label: 'Favorite Sport',
placeholder: 'Enter your favorite sport'
},
websiteURL: {
aliases: [],
categories: ['contact'],
element: 'input',
type: 'url',
label: 'Website URL',
placeholder: 'Enter your website URL'
},
favoriteDestination: {
aliases: [],
categories: ['preferences', 'travel'],
element: 'input',
type: 'text',
label: 'Favorite Destination',
placeholder: 'Enter your favorite travel destination'
},
favoriteQuote: {
aliases: [],
categories: ['personal'],
element: 'input',
type: 'text',
label: 'Favorite Quote',
placeholder: 'Enter your favorite quote'
},
yearsOfExperience: {
aliases: [],
categories: ['skills'],
element: 'input',
type: 'number',
label: 'Years of Experience',
placeholder: 'Enter the number of years of experience'
}
};