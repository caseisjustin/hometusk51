import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "fbe140f53c5e77",
        pass: "9611bfb33669b9"
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'fbe140f53c5e77',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};

export default sendEmail;