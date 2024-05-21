
const cors = require('cors')
const nodemailer = require('nodemailer')

 
//const email = "contactminatech@gmail.com"
//const password = "cnwdnrateznivdgr"

const email = process.env.EMAIL
const password = process.env.PASS

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: email,
      pass: password,
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  const sendMail = async(transporter,mailOptions)=>{

    try {
        await transporter.sendMail(mailOptions)
        console.log("Sent mail")
        
    } catch (error) {

        console.error(error.message)
        
    }


}




const handler = async(req,res) =>
{


    try{
      cors()
      const data = req.body
  

  

 

      console.log(data.email)
      const mailOptions = {
        from: {
          name: 'Zidlena Mejlis website',
          address: email,
        },
        to: process.env.TOEMAIL,
        subject: 'New Message',
        text: 'You have a new message from your website:',
        html: `
          <div style="font-family: Arial, sans-serif; text-align: center;">
          <h3>Potential Customer</h3><br/>
          
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <p>Message: ${data.message}</p><br/>
          
          </div>
        `.trim(),
      };

     

      try {
        sendMail(transporter,mailOptions)

        res.status(200).json({message:`email successfully sent`})
      

        
      } catch (error) {

        console.log(error.message);
    res.status(400).json({message:"unable to send mail"})
        
      }

   
      


      }
    
      catch(e)
      {
        res.status(500).json({"message":e.message})
        console.log(e.message)
      }
    
  
}

export default handler