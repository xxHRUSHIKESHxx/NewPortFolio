// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
 

console.log(req.body);
  if(req.method === "POST"){
    const data = req.body;
    const name = data.name
    const email = data.email;
    const phone = data.phone;
    const message = data.message;
    // console.log(req.body);
    // if( !data.name || !data.email || !data.subject || !data.message ) {
    //   res.status(400).json({ name: 'hot Request' });
    //   console.log("this is the way");
    // }

    try{
        await transporter.sendMail( {
          ...mailOptions,
          subject: data.subject,
          text:"this is a text string",
          html:`Name: ${name} </p>
          <p> Email: ${email} </p>
          <p> Phone: ${phone} </p>
          <p> Message: ${message} </p>`
      });
        return res.status(200).json({success: true});
    }
    catch(error){
      console.log(error);
      return res.status(400).json({message: error.message});
    }
  }


 return res.status(400).json({ name: 'Bad Request' })

}

export default handler;